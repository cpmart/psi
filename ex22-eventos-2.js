function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
} 
let cxTexto = document.getElementById('fname');
cxTexto.addEventListener('keyup',myFunction);

function mudaSenha(){
    let cxTexto = document.getElementById('fname');
    if(cxTexto.type == 'text')
        cxTexto.type = 'password';
    else
        cxTexto.type = 'text';
}
cxTexto.addEventListener('click',mudaSenha);