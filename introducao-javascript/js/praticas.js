var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < paciente.length; i++) {


    var tdPeso = paciente[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;
    console.log(peso);

    var tdAltura = paciente[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    console.log(altura);

    var tdImc = paciente[i].querySelector(".info-imc");
    console.log(tdImc);

    var pesoEhValido = true;
    var alturaEhValida  = true;

    if (peso < 0 || peso > 1000) {
        console.log("Peso eh invalido...");
        pesoEhValido = false;
        tdImc.textContent = "Peso é Invalido";
        //Por questão de boas praticas o essencial é chamarmos uma classe direto do CSS.
        paciente[i].classList.add(".paciente-invalido");
    }

    if (altura < 0 || altura > 5.0) {
        console.log("Alura invalida....");
        alturaEhValida = false;
        tdImc.textContent = "Altura Invalida";
        paciente[i].classList.add(".paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido) {
        imc = calculaImc(altura, peso);
        tdImc.textContent = imc;
    }

    function calculaImc (altura, peso) {
        var imc = 0;
        imc = peso / (altura*altura);

        return imc.toFixed(2);
    }
}





var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    

    var paciente = obtemDadosDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    //Cria a tr e a td do paciente
    
    

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});

function obtemDadosDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
        
    }
 
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //var nomeTd = montaTd(paciente.nome, "info-nome");
    //var pesoTd = montaTd(paciente.peso, "info-peso");
    //var alturaTd = montaTd(paciente.altura, "info-altura");
    //var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    //var imcTd = montaTd(paciente.imc, "info-imc");
    

    //adicionando o paciente na tabela
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));



    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");

    return td;
}

