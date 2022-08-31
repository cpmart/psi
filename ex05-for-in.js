var Carro =
{
    marca: "Renault",
    modelo: "Logan",
    comprimento: "4.250mm",
    largura: "1.735mm",
    altura: "1.525mm",
    cor: "azul",
    combustivel: "flex",
    marcha: "5",
    portas: 4
};

var msg = "", k;
for (k in Carro) {
    msg += k + "->" + Carro[k] + "|\n";
}
console.log(msg);