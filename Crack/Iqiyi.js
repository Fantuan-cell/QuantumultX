/*
 *
 *


*******************************

[rewrite_local]

#

^https?:\.iqiyi\.com* url script-request-header  https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Crack/Iqiyi.js 



[mitm] 
hostname = *.iqiyi.com
*
*
*/




var header = $request.headers;
var obj = JSON.parse(header); 
header = JSON.stringify(obj);
console.log(header)

$done({
    header
});

