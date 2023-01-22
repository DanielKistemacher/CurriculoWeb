/*CALCULAR A IDADE AUTOMATICAMENTE*/
const dataAtual = new Date();
const idadeAtual = dataAtual.getFullYear() - 1993;

document.getElementById("idade").innerHTML = "(" + idadeAtual +" anos)";