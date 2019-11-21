<?php

include "./conn1.php";//连接数据库

if(isset($_POST['username']) && isset($_POST['password'])){
    $username=$_POST['username'];
    $password=sha1($_POST['password']);

    $result=$conn->query("select * from registry where username='$username' and password='$passname' ");

    if($result->fetch_assoc()){
        echo true;//用户名和密码存在
    }else{
        echo false;
    }

}else{
    exit('非法操作');
}