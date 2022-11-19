let arr = ['a','b','c','d','e'];

const rotaciona = function(){
    let elemento = arr.shift();
    console.log(elemento);
    arr.push(elemento);
    console.log(arr);
}

setInterval(rotaciona,1000);

