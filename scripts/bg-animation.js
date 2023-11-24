document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;
    const interval = 5000; // Интервал смены изображений (в миллисекундах)

    function showImage(index) {
        images[currentIndex].style.opacity = 0;
        images[index].style.opacity = 1;
        changeTextColor(images, index);
        currentIndex = index;
    }

    function startImageCarousel() {
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }, interval);
    }

    // Показываем первое изображение и запускаем карусель
    showImage(currentIndex);
    startImageCarousel();
});

function changeTextColor (images, index) {
    /* bg-item-1 */
    images[index].classList.contains('image_03') ?
        images[index].style.color = '#000000'
        : images[index].style.color = '#ffffff';

    images[index].classList.contains('image_03') ?
        document.querySelector(".header__logo-link").style.color = '#000000'
        : document.querySelector(".header__logo-link").style.color = '#ffffff';

    images[index].classList.contains('image_03') ?
        document.querySelectorAll(".header__menu-link").forEach((element) => {
        element.style.color = '#000000'
        })
        : document.querySelectorAll(".header__menu-link").forEach((element) => {
        element.style.color = '#ffffff'
        })
}
    /* bg-item-1 [end] */





