<?php
    @session_start();
    $msg = "";
    $destino = "location:addCarros.php";

    extract($_POST);
    require('connect.php');
    if (mysqli_query($con, "INSERT INTO `tb_carros` (`codigo`, `modelo`, `montadora`, `cor`, `ano`, `preco`) VALUES (NULL, '$modelo', '$montadora', '$cor', '$ano', '$preco');")){
        $msg = "<p class='correto' >Deu bom</p>";
    }else{
        $msg = "<p class='erro' >Deu ruim</p>";
    }

    $_SESSION['msg'] = $msg;    

    // header($destino);
