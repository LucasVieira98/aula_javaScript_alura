//Adicionando pacientes na tabela

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    alert("Vai toma NO SEU CU");
}

var botaoAdd = document.querySelector("#adicionar-paciente");


//Adicionando um paciente na tabela
botaoAdd.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);


    console.log(paciente);

    //Cria a TR e a Td
    
    var pacienteTr = montaTr(paciente)
    
    //Adicionando o paciente na tabela

    form.reset();
   
});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: caculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");



    var nomeTd = montaTd(paciente.nome, "info-peso");
    

    var pesoTd = montaTd(paciente.peso, "info-peso");

    var alturaTd = montaTd(paciente.altura, "info-peso");

    var gorduraTd = montaTd(paciente.gordura, "info-gordura");

    var imcTd = montaTd(paciente.imc, "info-peso");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}




