/*
 *
 *

脚本功能：漫画台Lite解锁付费.js

脚本作者：Monster
更新时间：2022-3-10
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************


[rewrite_local]

#  微信小程序漫画台Lite免付费观看

^https:\/\/comic\.321mh\.com\/app_api\/v5\/getcomicinfo_body* url script-response-body  https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Crack/ManHuaTai.js



[mitm] 
hostname = comic.321mh.com

*
*
*/




var body = $response.body;
var hack1 = /price":\d+/g;
var hack2 = /download_price":\d+/g;
var hack3 = /isbuy":\d+/g;
body = body.replace(hack1,'price":0');
body = body.replace(hack2,'download_price":0').replace(hack3,'isbuy":1');

$done({
    body
});


