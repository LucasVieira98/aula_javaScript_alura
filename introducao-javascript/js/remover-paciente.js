var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode // Tr = paciente = remove


    paiDoAlvo.remove();

})

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado");
//         this.remove()
//     })
// })