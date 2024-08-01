<div class="barraTopo">
    <img src="icons/logo.svg" alt="">
    <p>CODE</p>
    <ul>
        <a href="addCliente.php">
            <li>Incluir</li>
        </a>
        <a href="listar.php">
            <li>Listar</li>
        </a>
        <a href="pesquisar.php">
            <li>Pesquisar</li>
        </a>
        <?php
            @session_start();
        if(isset($_SESSION['logado']) && $_SESSION['logado'] == true){
            echo "<a href=\"logoff.php\"><li>Sair</li></a>";
            echo "<li class=\"nomeMenu\">Olá $_SESSION[nome]</li>";
            echo "<a href=editarPerfil.php?codigo=$_SESSION[codigo]>";
            echo "<img src=$_SESSION[foto] class=\"miniatura\"></li>";
            echo "</a>";
        }else{
            echo "<a href=\"login.php\"><li>Entrar</li></a>";
        }

?>
        
        
    </ul>
</div>