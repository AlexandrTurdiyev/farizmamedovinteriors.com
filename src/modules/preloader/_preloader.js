if (
    document.querySelector('.preloader') !== null
    && document.querySelector('.preloader__logo') !== null
) {
    const preloader = document.querySelector('.preloader');
    const preloaderLogo = document.querySelector('.preloader__logo')
    setTimeout(function(){document.querySelector('.preloader__logo').classList.add('preloader__logo--visible')}, 100);
    setTimeout(function(){preloader.classList.add('preloader--invisible')}, 2000);
    setTimeout(function(){preloader.classList.add('preloader--hide')}, 2500);
}

