
let palavras3letras = ["gol", "bmw", "fox", "uno", "fit"];
let palavras4letras = ["golf", "mobi", "argo", "clio", "kwid"];
let palavras5letras = ["celta", "palio", "fusca", "versa", "hilux"];
let palavras6letras = ["fiesta", "tucson", "meriva", "prisma", "vectra"];
let palavras7letras = ["mclaren", "sandero", "hyundai", "renault", "citroen"];

let sorteio = Math.floor(Math.random() * 5);
let palavra = palavras3letras[sorteio];

let palavraOculta = "___";
let resultado = document.getElementById("resultado");
let titulo = document.getElementById("titulo");
let letra = document.getElementById("letra");
let chutes = document.getElementById("chutes");
let nPalavra = palavra.length;

let corpo1 = document.querySelector(".desenho1");
let corpo2 = document.querySelector(".desenho2");
let corpo3 = document.querySelector(".desenho3");
let corpo4 = document.querySelector(".desenho4");
let corpo5 = document.querySelector(".desenho5");
let corpo6 = document.querySelector(".desenho6");
let erros = 0;
let acertou = false;
let completou = false;
let completouLetras = 0;
function chutarLetra() {

    let index = palavra.indexOf(letra.value);

    //Contem essa letra na palavra?
    if (index == -1) {
        alert("Não tem essa letra")
    } else {
        console.log(`Tem isso ${index} indice`);
        alert("Tem essa letra")
        //Se for primeira palavra
        if (index == 0) {
            console.log("foi no 0");
            palavraOculta = letra.value + palavraOculta.substring(index + 1, palavra.length);
        } else if (index == palavra.length - 1) {  //Se for ultima palavra
            console.log("foi no ultimo");
            palavraOculta = palavraOculta.substring(0, index) + letra.value;
        } else if (index > 0 && index < palavra.length - 1) {  //Se for entre elas
            console.log("foi entre");
            palavraOculta = palavraOculta.substring(0, index) + letra.value + palavraOculta.substring(index + 1, palavra.length);
        }
        acertou = true;

        resultado.textContent = palavraOculta;
        acertou = true;
    }

    //Verificar se acertou ou errou
    if (acertou == true) {
        acertou = false;

    } else if (acertou == false && erros == 0) {

        corpo1.style.display = "block";
        erros = erros + 1;
    } else if (acertou == false && erros == 1) {

        corpo2.style.display = "block";
        erros = erros + 1;
    } else if (acertou == false && erros == 2) {

        corpo2.style.display = "none";
        corpo3.style.display = "block";
        erros = erros + 1;
    } else if (acertou == false && erros == 3) {
        alert("Não tem essa letra!");
        corpo3.style.display = "none";
        corpo4.style.display = "block";
        erros = erros + 1;
    } else if (acertou == false && erros == 4) {

        corpo5.style.display = "block";
        erros = erros + 1;
    } else if (acertou == false && erros == 5) {
        alert(`Abacou! a palavra era ${palavra.toUpperCase()}`);
        // Sorteando outra palavra
        sorteio = Math.floor(Math.random() * 5);
        palavra = palavras3letras[sorteio];
        //   Zerando erros,resultado,chutes e ilustrativo
        titulo.textContent = "Jogo da Forca com 3 letras";
        erros = 0;
        chutes.textContent = "";
        resultado.textContent = "_____";
        palavraOculta = "_____";
        chutes.textContent = "";
        corpo1.style.display = "none";
        corpo2.style.display = "none";
        corpo3.style.display = "none";
        corpo4.style.display = "none";
        corpo5.style.display = "none";
        corpo6.style.display = "none";
    } 

    chutes.textContent = chutes.textContent + letra.value.toUpperCase(); // Concatenando chutes
    letra.value = "";  //Zerar a letra colocada

    verificarSeCompletou();
    resultado.textContent = palavraOculta;
}


function verificarSeCompletou() {
    let index = palavraOculta.indexOf("_");

    if (index == -1) {
        alert(`Completou, a palavra era ${palavra.toUpperCase()}!!`);
    
        // Sorteando outra palavra
        sorteio = Math.floor(Math.random() * 5);
        if(completouLetras == 0) {
            palavra = palavras4letras[sorteio];
            palavraOculta = "____";
            titulo.textContent = "Jogo da Forca com 4 letras";
        } else if(completouLetras == 1) {
            palavra = palavras5letras[sorteio];
            palavraOculta = "_____";
            titulo.textContent = "Jogo da Forca com 5 letras";
        }else if(completouLetras == 2) {
            palavra = palavras6letras[sorteio];
            palavraOculta = "______";
            titulo.textContent = "Jogo da Forca com 6 letras";
        }else if(completouLetras == 3) {
            palavra = palavras7letras[sorteio];
            palavraOculta = "_______";
            titulo.textContent = "Jogo da Forca com 7 letras";
        }
        completouLetras = completouLetras + 1;
      
        //   Zerando erros,resultado,chutes e ilustrativo
        erros = 0;
       

        chutes.textContent = "";
        corpo1.style.display = "none";
        corpo2.style.display = "none";
        corpo3.style.display = "none";
        corpo4.style.display = "none";
        corpo5.style.display = "none";
        corpo6.style.display = "none";
    } else {
        console.log("Tem _ ainda");     
    }
   
}