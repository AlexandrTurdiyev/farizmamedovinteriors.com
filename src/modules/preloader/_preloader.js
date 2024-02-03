if (
    document.querySelector('.preloader') !== null
    && document.querySelector('.preloader__logo') !== null
) {
    const preloader = document.querySelector('.preloader');
    setTimeout(function(){document.querySelector('.preloader__logo').classList.add('preloader__logo--visible')}, 100);
    setTimeout(function(){preloader.classList.add('preloader--invisible')}, 1000);
    setTimeout(function(){preloader.classList.add('preloader--hide')}, 1500);
}





