const hamburgerBtn = document.querySelector('.header--Top--hamburger'); 
const mobileMenu = document.querySelector('.navMobile');


const showMenu = () => {
    mobileMenu.classList.toggle('hidden');
    const anglesDown = document.querySelector('.fa-angles-down');
    mobileMenu.classList.contains('hidden') ? anglesDown.style.display = 'block' : anglesDown.style.display = 'none';
    changeIcon();
}


const changeIcon = () => {
    const bars = document.querySelector('.fa-bars');
    const xmark = document.querySelector('.fa-xmark');

    if(bars.classList.contains('active')) {
        bars.classList.remove('active');
        xmark.classList.add('active');
    } else if(xmark.classList.contains('active')) {
        xmark.classList.remove('active');
        bars.classList.add('active');
    }
}

hamburgerBtn.addEventListener('click', showMenu)
