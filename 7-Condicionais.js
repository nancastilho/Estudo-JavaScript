const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idadade");
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removedo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")       // "\n\n pula linha"

if(idadeComprador >=18 && temPassagemComprada == true){
    console.log("Boa Viagem")
} else{
    console.log("Nao vai viajar")
}
