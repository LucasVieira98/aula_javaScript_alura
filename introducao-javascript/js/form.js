var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";



var botaoAdd = document.querySelector("#adicionar-paciente");





botaoAdd.addEventListener("click",function (event) {
    event.preventDefault()
    console.log("Você clicou aqui!");

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
        exibeMensagensDeErros(erros);
        
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";

    form.reset();
});

function exibeMensagensDeErros(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){
    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Na hora de fazer o appendChild todos os arquivos serão upados

    //var nomeTd = montaTd(paciente.nome, "info-nome");
    //var pesoTd = montaTd(paciente.peso, "info-peso");
    //var alturaTd = montaTd(paciente.altura, "info-altura");
    //var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    //var imcTd = montaTd(paciente.imc, "info-imc");

    
    //pacienteTr.appendChild(nomeTd);
    //pacienteTr.appendChild(pesoTd);
    //pacienteTr.appendChild(alturaTd);
    //pacienteTr.appendChild(gorduraTd);
    //pacienteTr.appendChild(imcTd);

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;

    td.classList.add("classe");

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push("Peso é invalido");
    if(!validaAltura(paciente.altura)) erros.push("Altura é invalida");
    if(paciente.nome.length == 0){
        erros.push("Nome obrigatorio");
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura do meu paciente não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("o peso não pode ficar em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ficar sem preencher")
    }
    
    return erros;
}