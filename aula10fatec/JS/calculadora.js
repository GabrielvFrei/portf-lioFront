/*function calcular(operacao){
    let valor1 = parseFloat(document.getElementById('n1').value)
    let valor2 = parseFloat(document.getElementById('n2').value)

    let resultado
    if(operacao == 'somar'){
        resultado = valor1 + valor2
    }
    if(operacao == 'subtrair'){
        resultado = valor1 - valor2
    }
    if(operacao == 'multiplicar'){
        resultado = valor1 * valor2
    }
    if(operacao == 'dividir'){
        resultado = valor1 / valor2
    }
    document.getElementById('resultado').innerText='Resultado = '+resultado
}*/
document.getElementById("somar").addEventListener('click',function(){
    calcular('somar')
})

//document = HTML
document.getElementById('subtrair').addEventListener('click', function(){
    calcular('subtrair')
})
document.getElementById('multiplicar').addEventListener('click',function(){
    calcular('multiplicar')
})
document.getElementById('dividr').addEventListener('click',function(){
    calcular('dividir')
})
function calcular(operacao){
    let valor1 = parseFloat(document.getElementById('n1').value)
    let valor2 = parseFloat(document.getElementById('n2').value)
}