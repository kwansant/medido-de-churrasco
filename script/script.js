let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resulstador = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP;
    let cerveja = cervejaPP;
    let bebida = bebidasPC;

    let qdtTotalCarne = carne(duracao) * adultos + (carne(duracao) / 2 * criancas);
    let qdtTotalCerveja = cerveja(duracao) * adultos;
    let qdtTotalBebidas = bebida(duracao) * adultos + (bebida(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}Kg de Carne`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2L de Bebidas</p>`;

}


function carnePP(duracao) {
    if(duracao  >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao  >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPC(duracao) {
    if(duracao  >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}