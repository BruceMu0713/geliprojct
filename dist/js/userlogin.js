"use strict";define([],function(){return{login:function(){var t=document.querySelector("#loginname_id"),n=document.querySelector("#loginpwd_id");document.querySelector("#btn_submit").onclick=function(){var e=new XMLHttpRequest;e.open("post","http://10.31.154.122/1909dierjieduan/geliproject/src/php/lib/login.php",!0),e.setRequestHeader("content-type","application/x-www-form-urlencoded"),e.send("username="+t.value+"&password="+n.value),e.onreadystatechange=function(){4===e.readyState&&(e.responseText?(location.href="./index1.html",localStorage.setItem("yhm",t.value)):alert("用户名或者密码错误"))}}}}});