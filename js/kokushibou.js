const botoes = document.querySelectorAll(".chao, .img__kokushibou");

botoes.forEach(hitBox => {
    hitBox.addEventListener("click", () => {
        const container = document.querySelector(".container__conteudo-terciario");
        const containerCentral = document.querySelector(".conteudo-mid");
    
        container.classList.toggle("newContainer");
        containerCentral.classList.toggle("mid");
        botoes.forEach(i => {
            if(i.classList.contains("img__kokushibou")) {
                i.classList.toggle("kokushibouimg")
            }
        })
    })
})
