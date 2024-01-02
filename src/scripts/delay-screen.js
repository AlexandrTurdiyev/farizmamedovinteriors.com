const delayScreen = document.querySelector('.delay-screen');

setTimeout(function () {
    delayScreen.classList.add('delay-screen--hidden');
}, 1000);