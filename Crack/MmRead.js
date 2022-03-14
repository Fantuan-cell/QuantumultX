/*
 *
 *

脚本功能：咪咪阅读VIP
网站地址：https://apps.apple.com/cn/app/%E5%92%AA%E5%92%AA%E9%98%85%E8%AF%BB/id1534418454
脚本作者：Monster
更新时间：2022-3-9
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************


[rewrite_local]

#  开启脚本即是VIP

^https:*toolcdn\.com* url script-response-body  https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Crack/MmRead.js

[mitm] 
hostname = *.toolcdn.com

*
*
*/




var body = $response.body;
var hack = /vip_end_date":\d+/g;
body = body.replace(hack,'vip_end_date":20990909');
$done({
    body
});



