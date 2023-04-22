function criarImagem(busca, classe, alt, elementoPai) {
    var img = document.createElement("img");
    img.src = busca;
    img.classList.add(classe);
    img.alt = alt;
    elementoPai.appendChild(img);
}

const sideOriginalAkaza = document.querySelector('.side__primal-akaza');

sideOriginalAkaza.addEventListener("click", () => {

    const containerOriginalAkaza = document.querySelector('.container__akaza');
    
    containerOriginalAkaza.classList.toggle('container__akaza-click');
    sideOriginalAkaza.classList.toggle('click-akaza');

    const sideAkaza = document.querySelector('.click-akaza');
    const newAkazaImg = sideOriginalAkaza.children[1];

    if (newAkazaImg) {
        sideOriginalAkaza.removeChild(newAkazaImg);
    } else {
        criarImagem('img/akaza/perfil/akaza.png', 'akazaImage', 'Akaza', sideAkaza);
    }
})
