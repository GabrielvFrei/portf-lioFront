<?php include('head.php');?>
<body>
    <?php
    include('menu.php');
    
    echo "<div class=cards>";
    require('connect.php');
    '$usuarios = mysqli_query($con, "SELECT * FROM `tb_clientes`");'
    @session_start();
    while($usuario = mysqli_fetch_assoc($usuarios)){
        echo "<div>";
        echo "<div class=imageCard>";
        if($usuario['fotoUrl']==""){
            echo "<img src=icons/>";
        }else{
            echo "<img src=$usuario[fotoUrl]>";
        }
        echo "</div>";

        echo "<div>";
        echo "<p>Codigo: $usuario[codigo]</p>";
        echo "<p>Nome: $usuario[nome]</p>";
        echo "<p>Email: $usuario[email]</p>";
        echo "<p>Telefone: $usuario[telefone]</p>";
        echo "<div class=botoesCard>";
            echo "<a onclick='excluir($usuario[codigo])'><img src=./icons/erase.png></a>";
            echo "<a href='alterarCliente.php?codigo=$usuario[codigo]'><img src=./icons/edit.png></a>";
        echo "</div>";
        echo "</div>";
        echo "</div>";
    }

    echo "</div>";
    ?>

    <?php include('bottom.php');?>

