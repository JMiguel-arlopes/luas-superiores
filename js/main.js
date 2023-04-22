const header = document.querySelector('.cabecalho');
const caixaTexto = document.querySelector('.caixa-cabecalho');
const paragrafos = document.querySelectorAll('.paragrafo-cabecalho');
const botaoProsseguir = document.querySelector('.prosseguir');

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

function hide() {
    header.classList.add('hide-cabecalho');
}

caixaTexto.addEventListener('click', apareceEscreve);
botaoProsseguir.addEventListener('click', hide);
