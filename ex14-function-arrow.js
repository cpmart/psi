
let areaCirculoNormal = function(r){
    let area = 3.14159 * r * r;
    return area;
}
console.log(areaCirculoNormal(2));

//Utilizando arrow functions
let circleArea = (r) => {
    let area = 3.14159 * r * r;
    return area;
}
console.log(circleArea(2));

//código acima pode ser simplificado dessa forma:
let circleArea2 = (r) => 3.14159 * r * r;
console.log(circleArea2(2));


let soma = function(a,b){
    return a+b;
}

let somaArrow = (a,b) => a+b;

console.log(soma(2,3));
console.log(somaArrow(2,3));