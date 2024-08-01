<?php include('head.php'); ?>

<body>
    <?php
    include('menu.php');
    @session_start();
    if (isset($_SESSION['msg'])) {
        echo $_SESSION['msg'];
        unset($_SESSION['msg']);
    }
    ?>

    <div class="containerForm">

        <fieldset>
            <legend>Adicionar Cliente</legend>
            <form action="addCliente.act.php" method="post" enctype="multipart/form-data" id="formAddCliente" onsubmit="return verificaForm()">
                <p>Nome: <input type="text" name="nome"></p>
                <p>Email: <input type="text" name="email"></p>
                <p>Telefone: <input type="text" name="telefone" id="txtTelefone"></p>
                <p>Nascimento: <input type="date" name="nascto"></p>
                <p>Senha: <input type="password" name="senha1" id="txtSenha1" onkeyup="verificaSenha(senha1.value,senha2.value)" require></p>
                <p>Confirme a senha: <input type="password" name="senha2" id="txtSenha2" onkeyup="verificaSenha(senha1.value,senha2.value)" require></p>
                <p id="imgContainer">
                    <img src="icons/6073873.png" alt="" id="previewImg">
                </p>
                <p>
                    <label for="fileFoto">
                        <img src="icons/upload.png" alt="">
                        Escolher Arquivo
                    </label>
                    <input type="file" name="foto" id="fileFoto" id="inputGroupFile01" onchange="previewFile(this);">
                </p>
                <p><input type="submit" value="Enviar"></p>
            </form>
        </fieldset>
    </div>

    <?php include('bottom.php'); ?>