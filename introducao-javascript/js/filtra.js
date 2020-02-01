var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++){
            var tdNome = pacientes[i].querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i")
            if(!expressao.test(nome)) {
                pacientes[i].classList.add("invisivel");
            }else{
                pacientes[i].classList.remove("invisivel");
            }
        }
    }else {
        for(var i = 0; i < pacientes.length; i++){
            pacientes[i].classList.remove("invisivel")
        }
    }

    
})