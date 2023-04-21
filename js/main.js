const botoes = document.querySelectorAll(".chao, .img__kokushibou");



botoes.forEach(hitBox => {
    hitBox.addEventListener("click", () => {
        const container = document.querySelector(".container__conteudo-terciario");
        const containerCentral = document.querySelector(".conteudo-mid");
    
        container.classList.toggle("dd1");
        containerCentral.classList.toggle("mid");
        botoes.forEach(i => {
            if(i.classList.contains("img__kokushibou")) {
                i.classList.toggle("kokushibouimg")
            }
        })


})})




function criarImagem(busca, classe, elementoPai) {
    var img = document.createElement("img");
    img.src = busca;
    img.classList.add(classe);
    elementoPai.appendChild(img);
}

const sideOriginalAkaza = document.querySelector('.side__primal-akaza');

sideOriginalAkaza.addEventListener("click", () => {

    const containerOriginalAkaza = document.querySelector('.container__akaza');
    
    containerOriginalAkaza.classList.toggle('container__akaza-click');
    sideOriginalAkaza.classList.toggle('click-akaza');

    const sideAkaza = document.querySelector('.click-akaza');
    
    const newAkazaImg = sideOriginalAkaza.childNodes[3];
    console.log(newAkazaImg);

    if (newAkazaImg) {
        sideOriginalAkaza.removeChild(newAkazaImg);
    }
    else {
        criarImagem('img/akaza/perfil/akaza.png', 'akazaImage', sideAkaza);
    }
})






const header = document.querySelector('.cabecalho');
const caixaTexto = document.querySelector('.caixa-cabecalho');
const paragrafos = document.querySelectorAll('.paragrafo-cabecalho');

// var verificaCaixa = !!document.getElementsByTagName('aj');
// if(verificaCaixa.length === 0) {
//     verificaCaixa = false;
// }
// console.log(verificaCaixa);

// function letraMaquina() {

//     var p1 = caixaTexto.childNodes[3];
//     var p2 = caixaTexto.childNodes[5];


//     paragrafos.forEach(frase => {

//         const textArray = frase.innerHTML.split('');

//         if (!p1.classList.contains('textArray') && frase == p1 && !p2.classList.contains('textArray')) {

//             frase.innerHTML = '';
//             p1.classList.add('textArray');
//             textArray.forEach((letra, numeracao) => setTimeout( () => frase.innerHTML += letra, 60 * numeracao));

        
//         }
//          if(!p2.classList.contains('textArray') && frase == p2 && p1.classList.contains('textArray')) {

//             frase.innerHTML = '';
//             p2.classList.add('textArray');
//             textArray.forEach((letra, numeracao) => setTimeout( () => frase.innerHTML += letra, 60 * numeracao));
//         }  
//     })
// }

// cabecalho.addEventListener("click", () => {
//     letraMaquina(paragrafos);
// })


// const textos = ['panama', 'madagascar']

// textos.forEach((frase, numeracao) => {
    
    
    // const textArray = frase.innerHTML.split('');
    // for (let i = 0; i < textos.length; i++) {
    

    // for(var i = 0; i < textos.length; i++ ) {
    //     const paragrafoNovo = document.createElement('p');
    //     paragrafoNovo.innerHTML = textos[i];
    //     paragrafoNovo.classList.add('textArray');
    //     caixaTexto.appendChild(paragrafoNovo);
    //     console.log(paragrafoNovo);
    
    // }
// })

let i = 1;
function apareceEscreve() {
    
    if(i < 4) {
    const paragrafo = caixaTexto.children[i];
    const textArray = paragrafo.innerHTML.split('');

    paragrafo.classList.add('textArray');
    paragrafo.innerHTML = '';
    textArray.forEach((letra, numeracao) => setTimeout( () => paragrafo.innerHTML += letra, 30 * numeracao));

    }
    i++;
    
}

const botaoProsseguir = document.querySelector('.prosseguir');

function pa () {
    header.classList.add('hide-cabecalho');
}

caixaTexto.addEventListener('click', apareceEscreve);
botaoProsseguir.addEventListener('click', pa);













var $alvo = $('.anime'),
animationClass = 'anime-start';

function animeScroll() {
    
    var distanciaTelaTop = $(document).scrollTop(),
    offset = $(window).height() * 1/6;

    $alvo.each(function() {
        var distanciaItemTop = $(this).offset().top;

        if (distanciaTelaTop > distanciaItemTop - offset) {
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(function(){
    animeScroll();
    console.log('kk');
})