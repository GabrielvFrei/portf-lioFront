var total = 0;

function resultado(){
    var duzentos = 0;
    var cem = 0;
    var cinquenta = 0;
    var vinte = 0;
    var dez = 0;
    var cinco = 0;
    var dois = 0;
    var um = 0;
    var cinquentacents = 0;
    var vinteecincocents = 0;
    var dezcents = 0;
    var cincocents = 0;
    var umcents = 0;
    var impressao = "";
    var i = 0; 
  

    const valor = document.getElementById('valor');
    var total = valor.value;
    while (total >= 200) {
        total = total - 200
        total=total.toFixed(2);
        duzentos++
    }
    for(i = 0 ; i < duzentos ; i++){
        impressao += '<img src="img/nota200.jpg" alt="" srcset="">';
    }
   
    while (total >= 100) {
        total = total - 100
        total=total.toFixed(2);
        cem ++
    }
        for(i = 0 ; i < cem ; i++){
        impressao += '<img src="img/nota100.jpg" alt="" srcset="">';
    }
   
    while (total >= 50){
        total = total - 50
        total=total.toFixed(2);
        cinquenta++
    }
    for(i = 0 ; i < cinquenta ; i++){
        impressao += '<img src="img/nota50.jpg" alt="" srcset="">';
    }
    
    while (total >= 20) {
        total = total - 20
        total=total.toFixed(2);
        vinte++
    }
    for(i = 0 ; i < vinte ; i++){
        impressao += '<img src="img/nota20.jpg" alt="" srcset="">';
    }
    
    while (total >= 10) {
        total = total - 10
        total=total.toFixed(2);
        dez++
    }
    for(i = 0 ; i < dez ; i++){
        impressao += '<img src="img/nota10.jpg" alt="" srcset="">';
    }
   
    while (total >= 5){
        total = total - 5
        total=total.toFixed(2);
        cinco++
    }
    for(i = 0 ; i < cinco ; i++){
        impressao += '<img src="img/nota5.jpg" alt="" srcset="">';
    }
   
    while (total >= 2) {
        total = total - 2
        total=total.toFixed(2);
        dois++
    }
    for(i = 0 ; i < dois ; i++){
        impressao += '<img src="img/nota2.jpg" alt="" srcset="">';
    }
    
    while (total >= 1) {
        total = total - 1
        total=total.toFixed(2);
        um++
    }
    for(i = 0 ; i < um ; i++){
        impressao += '<img src="img/nota1.jpg" alt="" srcset="">';
    }
   
    while (total >= 0.50){
        total = total - 0.50
        total=total.toFixed(2);
        cinquentacents++
    }
    for(i = 0 ; i < cinquentacents ; i++){
        impressao += '<img src="img/moeda50.jpg" alt="" srcset="">';
    }
   
    while (total >= 0.25){
        total = total - 0.25
        total=total.toFixed(2);
        vinteecincocents++
    }
    for(i = 0 ; i < vinteecincocents ; i++){
        impressao += '<img src="img/moeda25.jpg" alt="" srcset="">';
    }
   
    while (total >= 0.10) {
        total = total - 0.10
        total=total.toFixed(2);
        dezcents++
    }
    for(i = 0 ; i < dezcents ; i++){
        impressao += '<img src="img/moeda10.png" alt="" srcset="">';
    }
  
    while (total >= 0.05) {
        total = total - 0.05
        total=total.toFixed(2);
        cincocents++
    }
    for(i = 0 ; i < cincocents ; i++){
        impressao += '<img src="img/moeda5.jpg" alt="" srcset="">';
    }
   
    while (total >= 0.01){
        total = total - 0.01
        total=total.toFixed(2);
        umcents++
    }
    for(i = 0 ; i < umcents ; i++){
        impressao += '<img src="img/moeda1c.png" alt="" srcset="">';
    }
    document.getElementById('notas').innerHTML = impressao;
}