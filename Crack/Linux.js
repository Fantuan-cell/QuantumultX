/*
 *
 *



*******************************


[rewrite_local]



^https:\/\/googleads\.g\.doubleclick\.net\/getconfig\/pubsetting* url script-response-body  https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Crack/Linux.js


[mitm] 
hostname = googleads.g.doubleclick.net

*
*
*/


$done({body: JSON.stringify({
  "status": 1,
  "app_id": "ca-app-pub-7571161919624369~4851429594",
  "auto_collect_location": true
})});



