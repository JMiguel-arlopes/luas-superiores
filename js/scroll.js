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
