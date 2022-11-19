function exibirMensagem() {
    var data = new Date();
    alert(data.toString());
}
let btn = document.getElementById("btn");
btn.addEventListener("dblclick", exibirMensagem);