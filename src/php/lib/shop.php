<?php
    include('./conn.php');

    $idList = $_REQUEST['idlist'];

    $sql = "select * from geliproject where id in ($idList)";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>