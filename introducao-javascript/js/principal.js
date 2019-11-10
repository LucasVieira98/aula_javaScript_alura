var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");

var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

var peso = tdPeso.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura); // 100 / 2.0 * 2.0 = 100 / 4 =>>> 25

tdImc.textContent = imc;

console.log(paciente); // tr(Table Row)
console.log(tdPeso); // td(Table data) informação de peso
console.log(peso); // Obter 100
console.log(altura); // Obter 2.00
console.log(imc);

