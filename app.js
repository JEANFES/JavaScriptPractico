let numero1 = document.querySelector('.numero1');
let numero2 = document.querySelector('.numero2');
let boton_calcular = document.querySelector('.boton-calcular');
const areaResultado = document.querySelector('#resultado')

boton_calcular.addEventListener("click", calcular);

function calcular(){
    var n1 = Number(numero1.value);
    var n2 = Number(numero2.value);
    let calculo = n1 + n2;
    areaResultado.innerText = "Resulado:" + calculo; 
}