//Mudar o titulo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Selecionar todos os elementos da tabela

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);

    var peso = pacientes[i].querySelector(".info-peso");
    console.log(peso.textContent);
    peso = peso.textContent;

    var altura = pacientes[i].querySelector(".info-altura");
    console.log(altura.textContent);
    altura = altura.textContent;

    var imcTd = pacientes[i].querySelector(".info-imc");


    //Realizando algumas validações...

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido!");
        pesoEhValido = false;
        imcTd.textContent = "Peso Inválido!";
        pacientes[i].classList.add("paciente-invalido");
        
    }

    if (altura <= 0 || altura >= 3){
        console.log("altura Inválida!");
        alturaEhValida = false;
        imcTd.textContent = "altura Inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }

    //Caso as informações forem validas sera realizado o calculo do imc.
    if (alturaEhValida && pesoEhValido) {
        imcTd.textContent = caculaImc(peso, altura);
    }

}

function caculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
















