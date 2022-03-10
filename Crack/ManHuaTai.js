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

#  开启脚本即是VIP

^https:\/\/userpurchased-globalapi\.yyhao\.com\/v1\/getnewpayprice* url script-response-body  https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Crack/ManHuaTai.js



[mitm] 
hostname = userpurchased-globalapi.yyhao.com

*
*
*/




var body = $response.body;
var hack1 = /price":\d+/g;
var hack2 = /cost_coin":\d+/g;
var hack3 = /cost_diamonds":\d+/g;
body = body.replace(hack1,'price":0');
body = body.replace(hack2,'cost_coin":0').replace(hack3,'cost_diamonds":0')

$done({
    body
});


