
const scrollBtn = document.querySelector('.arrow-to-top');
window.onscroll = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.remove('arrow-to-top--hide')
    } else if (window.scrollY < 400) {
        scrollBtn.classList.add('arrow-to-top--hide')
    }
}

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
}