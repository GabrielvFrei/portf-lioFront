<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="addCarros.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="addCarros.act.php" method="post">
        <p>
            Montadora: <select name="montadora" id="">
                <option value="ch">Chevrolet</option>
                <option value="vv">Volvo</option>
                <option value="ch">Volkswagen</option>
            </select>
        </p>
        <p>
            Modelo: <input type="text" name="modelo">
        </p>
        <p>
            Cor: <input type="text" name="cor">
        </p>
        <p>
            Ano: <input type="text" name="ano">
        </p>
        <p>
            Preço R$: <input type="text" name="preco">
        </p>
        <input type="submit" value="pegar">
    </form>
        <?php
            @session_start();
            if(isset($_SESSION['msg'])){
                echo $_SESSION['msg'];
                unset ($_SESSION['msg']);
            } 
        
        ?>
</body>
</html>