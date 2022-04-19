const cookieName = '阡陌居'
const cookieKey = 'MonsterCookieQmj'
const Cookie = $prefs.valueForKey(cookieKey)

function GetFormHash(){

    let FormHashUrl = { 
        name: "查找FormHash接口",
        url: 'http://www.1000qm.vip/plugin.php?id=dsu_paulsign%3Asign',
        method: "GET",
        headers:  {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        "Cookie": Cookie
        }
    }

    let Request = {
        url: FormHashUrl.url,
        method: FormHashUrl.method, 
        headers: FormHashUrl.headers, 
    };

    $task.fetch(Request).then((response) => {
        let data = response.body
        if (data.match(/formhash=(.+?)'/)) {
          let title = `${cookieName}：正在获取formhash：\n`;
          let subTitle = `获取成功，你的formHash为：`;
          let formhash = data.match(/formhash=(.+?)'/)[1];
          console.log(`${title}${subTitle}${formhash}`) 
          sign(formhash)
    
          // $done() 
    }else{
        console.log("Cookie无效")
        $done() 
    }
  })

}


function sign(formHash){
     
    let signUrl = { 
        name: "签到接口",
        url: 'http://www.1050qm.com/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=0&inajax=0&mobile=yes',
        method : "POST",
        headers:  {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            'Content-Type': 'application/x-www-form-urlencoded',
            "Connection": "close",
            "Cookie": Cookie,
            "Host": "www.1050qm.com",
            "Origin": "http://www.1050qm.com",
            "Referer": "http://www.1050qm.com/plugin.php?id=dsu_paulsign:sign&mobile=yes",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1"
            }
    };

    let data = "formhash=" + formHash + "&qdxq=wl";

    let Request = {
        url: signUrl.url,
        method: signUrl.method, 
        headers: signUrl.headers, 
        body: data
    };
    
    $task.fetch(Request).then(response => {
        // response.statusCode, response.headers, response.body.match(//)
        let data = response.body;
        if (data.match(/<div id="messagetext">\s+<p>([\u4e00-\u9fa5].*)<\/p>/)) {
        let res = data.match(/<div id="messagetext">\s+<p>([\u4e00-\u9fa5].*)<\/p>/)[1];
        console.log("签到成功： "+res);
        console.log("\n正在申请威望红包\n ");
        prestige();
    
          // $done() 
    }else{
        console.log("\n签到失败！！！\n请检查自己的身份组是否有资格进行签到\n ");
        $done() 
    }

    });    
}

function prestige(){

    let prestigeUrl = { 
        name: "申请威望红包任务",
        url: 'http://www.1000qm.vip/home.php?mod=task&do=apply&id=1',
        method: "GET",
        headers:  {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        "Cookie": Cookie,
        "Host": "www.1000qm.vip"
        }
    };

    let Request = {
        url: prestigeUrl.url,
        method: prestigeUrl.method, 
        headers: prestigeUrl.headers, 
    };

    $task.fetch(Request).then(response => {
        // response.statusCode, response.headers, response.body.match(//)
        let data = response.body
        if(data.match(/<div id="messagetext" class="alert_info">\s+<p>([\u4e00-\u9fa5].*)<script/)){
        let res = data.match(/<div id="messagetext" class="alert_info">\s+<p>([\u4e00-\u9fa5].*)<script/)[1]
        console.log("申请威望红包任务： "+res);
        $notify("阡陌居", "任务完成",res); // Success!
        $done();
    }else{
        console.log("\n申请威望红包任务失败")
        $done() 
    }
    });    

}

GetFormHash()