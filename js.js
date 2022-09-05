var nome = "Evandro";
var notaDoPrimeiroBimestre = 9.4566;
var notaDoSegundoBimestre = 7.2345;
var notaDoTerceiroBimestre = 4.65675;
var notaDoQuartoBimestre = 2.2678;
var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;

var notaFormatada = notaFinal.toFixed(1);

console.log("bem vindo " + nome);
console.log(notaFormatada);
