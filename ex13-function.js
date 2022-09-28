//utilizando a extensão Quokka no VSCode para verificar o resultado em arquivos .js
function soma() {
    let result = 0, i = 0;
    let len = arguments.length;
    console.log(arguments);
    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}
console.log(soma(1, 2, 3));       
console.log(soma(3, 4, 5, 6, 10)); 
console.log(soma(50));         
console.log(soma());           