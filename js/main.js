var hitBox = document.querySelectorAll(".chao");

for(let i = 0; i < hitBox.length; i++) {

    const grama = hitBox[i];


    grama.addEventListener("click", function() {
        const container = document.querySelector(".container__conteudo-terciario");
        const containerCentral = document.querySelector(".conteudo-mid");
    
        container.classList.toggle("dd1");
        containerCentral.classList.toggle("mid");
    
    })
}

