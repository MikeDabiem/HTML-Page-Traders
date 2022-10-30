document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const burgerBtn = document.querySelector('.burger-btn');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const menuLinks = document.querySelectorAll('.header__menu a');
    const learnMoreBtn = document.querySelector('.main__button');
    const scrollBtn = document.querySelector('.scroll-icon > svg');
    const learnMore = document.querySelector('#learn-more');
    const animItems = document.querySelectorAll('.anim');

    burgerBtn.addEventListener ('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        if (burger.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.removeAttribute('style');
        }
    });

    menu.addEventListener ('click', (e) => {
        menuLinks.forEach (item => {
            if (e.target && e.target === item) {
                burger.classList.remove('active');
                menu.classList.remove('active');
                body.removeAttribute('style');
            }
        });
    });

    learnMoreBtn.addEventListener('click', () => {
        learnMore.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    scrollBtn.addEventListener('click', () => {
        learnMore.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    window.addEventListener('scroll', () => {
        animItems.forEach(item => {
            const itemHeight = item.offsetHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const animItemOffset = item.getBoundingClientRect().top + scrollTop;
            const animStart = 4;

            let animTrigger = window.innerHeight - itemHeight / animStart;
            if (itemHeight > window.innerHeight) {
                animTrigger = window.innerHeight - window.innerHeight / animStart;
            }

            if (scrollY > (animItemOffset - animTrigger) && scrollY < (animItemOffset + itemHeight)) {
                item.classList.add('_active');
            } else if (!item.classList.contains('no-hide')) {
                item.classList.remove('_active');
            }
        });
    });
});