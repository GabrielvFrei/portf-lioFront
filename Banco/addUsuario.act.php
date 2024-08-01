<?php 
    extract($_POST);
    require('connect.php');
    mysqli_query($con, "INSERT INTO `tb_usuarios` (`codigo`, `nome`, `email`) VALUES (NULL, '$nome', '$email');");
    header("location:addUsuario.php");
?>
