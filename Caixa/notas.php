<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        Valor a sacar: <input type="text" name="valor">
        <input type="submit" value="Enviar" name="bt_enviar">
    </form>
    <?php
    if (isset($_POST['bt-enviar'])){
        $valor = $_POST['valor'];
        $n200 = floor($valor / 100);
        for ($x = 0;$x<$n100;$x++){
            echo "<img src=100_front.jpg";
        }
        $valor -= ($n100 * 100);
    }     
    
    ?>
</body>
</html>