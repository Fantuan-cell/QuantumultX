/*
 *
 *

脚本功能：番薯小说VIP
网站地址：https://apps.apple.com/cn/app/%E5%92%AA%E5%92%AA%E9%98%85%E8%AF%BB/id1534418454
脚本作者：Monster
更新时间：2022-3-9
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/g20.manmeng168.com\/v1\/book\/chapter_content* url script-response-body  https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Crack/FSRead.js 
[mitm] 
hostname = g20.manmeng168.com

*
*
*/




var body = $response.body;
var hack_1 = /flag": true/g;
var hack_2 = /has_new": true/g;
body = body.replace(hack_1,'flag": false');
body = body.replace(hack_2,'has_new": false');

$done({
    body
});

