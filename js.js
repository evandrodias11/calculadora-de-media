function Calcular() {
  var nota1 = document.getElementById("nota1");
  var notaPrimeiroBimestre = nota1.value;
  var nota2 = document.getElementById("nota2");
  var notaSegundoBimestre = nota2.value;
  var nota3 = document.getElementById("nota3");
  var notaTerceiroBimestre = nota3.value;
  var nota4 = document.getElementById("nota4");
  var notaQuartoBimestre = nota4.value;
  var notaFinal =
    (Number(notaPrimeiroBimestre) +
      Number(notaSegundoBimestre) +
      Number(notaTerceiroBimestre) +
      Number(notaQuartoBimestre)) /
    4;

  var notaFormatada = notaFinal.toFixed(1);

  if (notaFormatada >= 6) {
    return (document.getElementById("resultado").innerHTML =
      "Sua média final é: " + notaFormatada + ", você foi aprovado !");
  } else {
    return (document.getElementById("resultado").innerHTML =
      "Sua média final é: " + notaFormatada + ", você foi reprovado !");
  }
}
