<?php
require('connect.php');
session_start();

extract($_POST);

$hashpassword = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO `clientes` (`cod`, `nome`, `email`, `senha`, `senhaconf`) VALUES ('1', '$nome', '$email', '$senha', '$senhaconf')";

$sql_query = mysqli_query($con, $sql);

header('Location: /')