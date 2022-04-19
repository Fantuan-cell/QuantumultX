
# 阡陌居签到

## 配置

```properties
[rewrite_remote]
//将该URl ,放入重写-引用,用于获取Cookie,获取后即可禁用
https://github.com/Fantuan-cell/QuantumultX/tree/main/Task/qmj/qmj.con

[task_local]
//在构造HTTP请求中,选择以文本方式添加,复制下面的
23 8 * * * https://github.com/Fantuan-cell/QuantumultX/tree/main/Task/qmj/qmj.js, tag=阡陌居签到, img-url=https://raw.githubusercontent.com/Fantuan-cell/QuantumultX/main/Img/qmj.png, enabled=true

```

## 说明

1. 先把第一个链接放入 重写
2. 再把两条远程脚本放到`[Script]`
3. 先在浏览器登录：http://www.1000qm.vip/member.php?mod=logging&action=login `(先登录! 先登录! 先登录!)`
4. 再访问：https://www.1000qm.vip/home.php?mod=space&do=profile&mobile=2
5. `QuanX`提示: `Cookie [阡陌居] 写入成功` (如果提示多条写入成功，忽略就好)
6. 最后就可以把在重写中把第 1 条脚本禁用了掉了

> 第 1 条脚本是用来获取 cookie 的, 用浏览器访问一次获取 cookie 成功后就可以删掉或注释掉了, 但请确保在`登录成功`后再获取 cookie.

> 第 2 条脚本是签到脚本, 每天`08:23`执行一次.

## 常见问题

1. 无法写入 Cookie

   - 检查 QuanX 系统通知权限放开了没
   - 如果你用的是 Safari, 请尝试在浏览地址栏`手动输入网址`(不要用复制粘贴)
2. 写入 Cookie 成功, 但签到不成功

   - 看看是不是在登录前就写入 Cookie 了
   - 如果是，请确保在登录成功后，再尝试写入 Cookie

## 感谢

[@chavyleung](https://github.com/chavyleung)

