define([], function() {
    return {
        register: function() {
            const username = document.querySelector('#personalPhoneInput');
            const span = document.querySelector('.yzts');
            const form1 = document.querySelector('.personalForm');
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
                            span.innerHTML = '√';
                            span.style.color = 'green';
                            repeatlock = true;
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