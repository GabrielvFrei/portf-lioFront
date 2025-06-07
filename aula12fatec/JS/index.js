document.getElementById('login').addEventListener('submit', function(){
    console.log('teste')
    let username = document.getElementById('usuario').value
    let password = document.getElementById('senha').value
    let alerta = document.getElementById('alerta').innerHTML
    if(username == 'admin' && password == 'abc123'){
        alerta.innerHTML = "<div class='alert alert-success'>Login com Sucesso</div>"
    }else{
        alerta.innerHTML = "<div class='alert alert-danger'>Login Invalido </div>"
    }
})
