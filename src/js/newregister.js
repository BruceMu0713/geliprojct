define([], function() {
    return {
        register: function() {
            const username = document.querySelector('#personalPhoneInput');
            const span = document.querySelector('.yzts');
            const yzmima = document.querySelector('.yzmima')
            const form1 = document.querySelector('.personalForm');
            const mima1 = document.querySelector('#firstPersonalPassword');
            const mima2 = document.querySelector('#secondPersonalPassword');
            let repeatlock = true;
            username.onblur = function() {
                let ajax = new XMLHttpRequest();
                ajax.open('post', 'http://10.31.154.122/1909dierjieduan/geliproject/src/php/lib/registry.php', true);

                ajax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                ajax.send('yhm=' + username.value);
                ajax.onreadystatechange = function() {
                    if (ajax.readyState === 4) {
                        // console.log(ajax.responseText);
                        if (!ajax.responseText) {

                            // function checkForm(o) { var re = /^(13[0-9]{9})|(15[89][0-9]{8})$/; if (!re.test(o.tel.value)) { alert('请输入正确的手机号码。'); return false; } }

                            username.onblur = function() {
                                var re = /^(13[0-9]{9})|(15[0-9]{9})$/;
                                if (!re.test(username.value)) {
                                    span.innerHTML = '请输入正确手机号';
                                } else {
                                    span.innerHTML = '√';

                                }
                            };
                            mima2.onblur = function() {
                                let a = mima1.value;
                                let b = mima2.value;
                                if (b != a) {
                                    yzmima.innerHTML = '两次输入密码不一致';

                                } else {

                                }
                            }


                            //
                            // span.style.color = 'green';

                        } else {
                            span.innerHTML = '该用户名已存在';
                            span.style.color = 'red';
                            repeatlock = false;
                        }

                    }
                }
            };
            form1.onsubmit = function() {
                if (!repeatlock) {
                    return false;
                }

            }
        }
    }
})