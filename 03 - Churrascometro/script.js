

let button = window.document.getElementById('button');

button.addEventListener('click', calcular);

function calcular(){

    let adultos = window.document.getElementById("adultos");
    let criancas = window.document.getElementById("criancas");
    let duracao = window.document.getElementById("duracao");

    let pessoas = Number(adultos.value) + Number(criancas.value / 2)

    console.log(pessoas);


    if (Number(duracao.value) <= 6){

        var carne = 0.40 * pessoas; // Em kg
        var chop = (1200 * Number(adultos.value)) / 350;   // Em latas de 350ml
        var bebidas =  pessoas / 2 // Em garrafas de 2L


    } else {

        var carne = 0.65 * pessoas; // Em kg
        var chop = (2000 * Number(adultos.value)) / 350;   // Em latas de 350ml
        var bebidas = (1.5 * pessoas) / 2 // Em garrafas de 2L
    

    }

    let resultado = window.document.getElementById("resultado");

    resultado.innerHTML = `Para o seu churrasco com ${pessoas} pessoas e ${duracao.value} horas você vai precisar de: <br><br>`;

    resultado.innerHTML += `-- ${carne.toFixed(1)} kg de carne.<br>`;

    resultado.innerHTML += `-- ${Math.ceil(chop)} latas de 350ml de cerveja.<br>`;

    resultado.innerHTML += `-- ${Math.ceil(bebidas)} garrafas de 2L de bebidas.<br>`;









}