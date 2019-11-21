<?php

include('./conn1.php');//引入数据库连接文件
// if(isset($_POST['xingming']) || isset($_POST['submit'])){//获取用户名
//     $name=@$_POST['xingming'];//取值
//     $result=$conn->query("select * from registry where username='$name'");//如果能够找到记录，用户名存在的
//     if($result->fetch_assoc()){//如果$result->fetch_assoc()有值，返回true,否则就是false;
//         echo true;//1 存在
//     }else{
//         echo false;
//     }
// }else{
//     exit('非法操作');//输出非法操作，终止程序
// }
if(isset($_POST['yhm'])||isset($_POST['submit'])){
$name=@$_POST['yhm'];
$result=$conn->query("select * from registry where username='$name'");
if($result->fetch_assoc()){
    echo true;
}else{
    echo false;
}
}else{
    exit('非法操作');
};


if(isset($_POST['submit'])){
    $user=$_POST['personalPhoneInput'];
$pass=$_POST['firstPersonalPassword'];
$conn->query("insert registry values(null,'$user','$pass',NOW())");
header('location:http://10.31.154.122/1909dierjieduan/geliproject/src/html/userlogin.html');    
};


// $sql="select * from registry where username='$username'";

// $result=$conn->query($sql);

// if($result->num_rows>0){
  
//     header('location:http://10.31.154.122/1909dierjieduan/geliproject/src/html/newregister.html');  

// }else{
//     $res=$conn->query("insert registry values(null,'$username','$password',NOW())");
//     if($res){
    
//     header('location:http://10.31.154.122/1909dierjieduan/geliproject/src/html/userlogin.html');    
//    };
//       };;
//将表单的值接收，放入数据库。
// if(isset($_POST['submit'])){//点击了注册按钮
//     $user=$_POST['username'];
//     $pass=sha1($_POST['password']);
    
//     $conn->query("insert registry values(null,'$user','$pass',NOW())");
    
//     header('location:http://10.31.154.122/1909dierjieduan/geliproject/src/html/userlogin.html');//php的跳转
//     //echo "<script> location.href='http://localhost/JS1909/Day%2022/loginregistry/src/login.html'; </script>";
// }

 
