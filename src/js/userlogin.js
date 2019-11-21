define([], function() {
    return {
        login: function() {
            const username = document.querySelector('#loginname_id');
            const password = document.querySelector('#loginpwd_id');
            const loginbtn = document.querySelector('#btn_submit');

            loginbtn.onclick = function() {
                let ajax = new XMLHttpRequest();

                ajax.open('post', 'http://10.31.154.122/1909dierjieduan/geliproject/src/php/lib/login.php', true);
                ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                ajax.send(`username=${username.value}&password=${password.value}`);
                ajax.onreadystatechange = function() {
                    if (ajax.readyState === 4) {
                        // console.log(ajax.responseText);
                        if (ajax.responseText) { //登录成功
                            location.href = './index1.html';
                            //存储用户信息
                            localStorage.setItem('yhm', username.value);
                        } else {
                            alert('用户名或者密码错误');
                        }
                    }
                }
            };
        },

    }
})