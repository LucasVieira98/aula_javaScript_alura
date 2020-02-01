var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length);

for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

    //Fazer o calculo Imc e inserir os valores dentro da Tabela
    // imc = peso / altura * altura

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    console.log(peso);

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    console.log(altura);

    var imc = calculaImc(peso, altura);

    var tdImc = pacientes[i].querySelector(".info-imc");

    //Validações

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido){
        tdImc.textContent = "Peso Invalido";
        pacientes[i].classList.add("paciente-invalido");
        pesoEhValido = false

    }

    if (!alturaEhValida){
        tdImc.textContent = "Altura Invalida";
        pacientes[i].classList.add("paciente-invalido");
        alturaEhValida = false;
    }

    if(alturaEhValida && pesoEhValido){
        
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}
