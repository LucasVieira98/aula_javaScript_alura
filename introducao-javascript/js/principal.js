var titulo = (document.querySelector(".titulo"));   
titulo.textContent = "Aparecida Nutricionista";
//CALCULO IMC


//Selecionar todos os pacientes
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

//Percorrer a lista de paceintes
for(var i = 0; i < pacientes.length; i++){
    
    //Logica do calculo IMC:

    var pesoTd = pacientes[i].querySelector(".info-peso");
    console.log(pesoTd);
    var peso = pesoTd.textContent;

    var alturaTd = pacientes[i].querySelector(".info-altura");
    console.log(alturaTd);
    var altura = alturaTd.textContent;
    
    var imcTd = pacientes[i].querySelector(".info-imc");

    pesoEhValido = true;
    alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        imcTd.textContent = "Peso inválido!";
    }

    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        imcTd.textContent = "Altura inválida!";
    }

    if (pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        console.log(imc.toFixed(2));
    
        imcTd.textContent = imc.toFixed(2);
    }
}


//Selecionar todos os pacientes
var pacientes = document.querySelectorAll(".paciente");

console.log("tamanho do array: "+pacientes.length);

//Utilizando a propriedade length e possivel percorrer toda a lista selecionada de "Pacientes"
for(var i = 0; i < pacientes.length; i++){
    
    //Remover paciente e colocar paciente[i]
    var paciente = pacientes[i];
    
    var pesoTd = paciente.querySelector(".info-peso");
    peso = pesoTd.textContent;
    console.log(pesoTd);

    var alturaTd = paciente.querySelector(".info-altura");
    altura = alturaTd.textContent;
    console.log(alturaTd);

    var imcTd = paciente.querySelector(".info-imc");


    //Calculo Imc usando Operadores Logicos
    pesoEhValido = true;
    alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido!");
        pesoEhValido = false;
        imcTd.textContent = "Peso Inválido!";
    
        pacientes[i].classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 4) {
        console.log("altura Invalida!");   
        alturaEhValida = false;
        imcTd.textContent = "Altura Invalida!";
       
        pacientes[i].classList.add("paciente-invalido");

    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        imcTd.textContent = imc.toFixed(2);
    }
}




// Adicionar um evento que ao clicar no botão seja possivel adicionar um novo paciente na tabela.
var botaoAdd = document.querySelector("#adicionar-paciente");

// Função anonima
botaoAdd.addEventListener("click", function(event){
    //previne o comportamento padrão do form
    event.preventDefault();
    
    //Acessar primeiro os dados do Input Add paciente
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente.nome); 

    

    //Cria um elemento HTML TR e TD
    var trPaciente = document.createElement("tr");
    var tdNome = document.createElement("td");
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");

    // Adicionar valores nos Elementos Htmls criados
    tdNome.textContent = nome;
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    trPaciente.appendChild(tdNome);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);
    console.log(trPaciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(trPaciente);

    
    
});

//obtem paciente do formulario

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordua: form.gordura.value
    }

    return paciente;

}

// Adicionando um evento no titulo:

titulo.addEventListener("click", mostraMensagem); 

function mostraMensagem() {
    console.log("E ai Cuza1");
}

