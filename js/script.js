function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// ==================================

const iconMenu = document.querySelector('.header__burger-icon');
const menuBody = document.querySelector('.header__menu');
const body = document.querySelector('body');

if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        body.classList.toggle('lock')

    })
}


