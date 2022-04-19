/*
请先登录
http://www.1000qm.vip/member.php?mod=logging&action=login
再访问
https://www.1000qm.vip/home.php?mod=space&do=profile&mobile=2
即可自动获取Cookie
*/


const cookieName = '阡陌居'
const cookieKey = 'MonsterCookieQmj'
console.log(cookieKey)
const cookieVal = $request.headers['Cookie']

if (cookieVal) {
  let cookie = $prefs.setValueForKey(cookieVal, cookieKey)
  if (cookie) {
    let msg = `${cookieName}`
    $notify(msg, 'Cookie写入成功', '详见日志')
    console.log(msg)
    console.log(cookieVal)
  }
}

$done({})