"use strict";define([],function(){return{register:function(){var n=document.querySelector("#personalPhoneInput"),r=document.querySelector(".yzts"),t=document.querySelector(".yzmima"),e=document.querySelector(".personalForm"),o=document.querySelector("#firstPersonalPassword"),u=document.querySelector("#secondPersonalPassword"),c=!0;n.onblur=function(){var e=new XMLHttpRequest;e.open("post","http://10.31.154.122/1909dierjieduan/geliproject/src/php/lib/registry.php",!0),e.setRequestHeader("content-type","application/x-www-form-urlencoded"),e.send("yhm="+n.value),e.onreadystatechange=function(){4===e.readyState&&(e.responseText?(r.innerHTML="该用户名已存在",r.style.color="red",c=!1):(n.onblur=function(){/^(13[0-9]{9})|(15[0-9]{9})$/.test(n.value)?r.innerHTML="√":r.innerHTML="请输入正确手机号"},u.onblur=function(){var e=o.value;u.value!=e&&(t.innerHTML="两次输入密码不一致")}))}},e.onsubmit=function(){if(!c)return!1}}}});