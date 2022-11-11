
let palavra = "stela"; //9 palavras
let palavraOculta = "_____";
let resultado = document.getElementById("resultado");
let letra = document.getElementById("letra");
let nPalavra = palavra.length;

let corpo1 = document.querySelector(".desenho1");
let corpo2 = document.querySelector(".desenho2");
let corpo3 = document.querySelector(".desenho3");
let corpo4 = document.querySelector(".desenho4");
let corpo5 = document.querySelector(".desenho5");
let corpo6 = document.querySelector(".desenho6");
let erros = 0;
let acertou = false;
function chutarLetra() {

    console.log(letra.value);
    for (let letras = 0; letras < nPalavra; letras++) {

        console.log(letra.value + " " + palavra[letras]);
        if (letra.value == palavra[letras]) {
            console.log("Tem essa letra");
            console.log(nPalavra);
            if (letras == 0) {
                palavraOculta = letra.value + palavraOculta.substring(1, nPalavra);
                resultado.textContent = palavraOculta;
                acertou = true;
            } else if (letras == 1) {
                console.log("Entre elas letra o");
                palavraOculta = palavraOculta.substring(0, 1) + letra.value + palavraOculta.substring(2, 5);
                resultado.textContent = palavraOculta;
                acertou = true;
            } else if (letras == 2) {
                console.log("Entre elas letra r");
                palavraOculta = palavraOculta.substring(0, 2) + letra.value + palavraOculta.substring(3, 5);
                resultado.textContent = palavraOculta;
                acertou = true;
            } else if (letras == 3) {
                console.log("Entre elas letra d");
                palavraOculta = palavraOculta.substring(0, 3) + letra.value + palavraOculta.substring(4, 5);

                resultado.textContent = palavraOculta;
                acertou = true;
            } else if (letras == nPalavra - 1) { //OU 4
                console.log("Tem essa letra na ultima");
                palavraOculta = palavraOculta.substring(0, nPalavra - 1) + letra.value;

                resultado.textContent = palavraOculta;

                acertou = true;
            }

        } else {
            console.log("Não tem");
        }

    }
    if (acertou == true) {
        alert("Tem essa letra!");
        acertou = false;
    } else if(acertou == false && erros == 0) {
        alert("Não tem essa letra!");
        corpo1.style.display = "block";
        erros = erros + 1;
    } else if(acertou == false && erros == 1) {
        alert("Não tem essa letra!");
        corpo2.style.display = "block";
        erros = erros + 1;
    }else if(acertou == false && erros == 2) {
        alert("Não tem essa letra!");
        corpo2.style.display = "none";
        corpo3.style.display = "block";
        erros = erros + 1;
    }else if(acertou == false && erros == 3) {
        alert("Não tem essa letra!");
        corpo3.style.display = "none";
        corpo4.style.display = "block";
        erros = erros + 1;
    }else if(acertou == false && erros == 4) {
        alert("Não tem essa letra!");
        corpo5.style.display = "block";
        erros = erros + 1;
    }else if(acertou == false && erros == 5) {
        alert("Não tem essa letra!");
        corpo5.style.display = "none";
        corpo6.style.display = "block";
        erros = erros + 1;
    }
}