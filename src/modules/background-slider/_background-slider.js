window.onload = function() {
    let highQualityImage1 = new Image();
    highQualityImage1.src = "assets/background-image-1.webp";
    highQualityImage1.onload = function() {
        document.querySelector('.slide__1-low').style.opacity = 0;
        document.querySelector('.slide__1').style.opacity = 1;
        slidesLoadedCount++;
        headerMenuTextWhite();
    };
    let highQualityImage2 = new Image();
    highQualityImage2.src = "assets/background-image-2.webp";
    highQualityImage2.onload = function() {
        document.querySelector('.slide__2-low').style.opacity = 0;
        document.querySelector('.slide__2').style.opacity = 1;
        slidesLoadedCount++;
        headerMenuTextWhite();
    };
    let highQualityImage3 = new Image();
    highQualityImage3.src = "assets/background-image-3.webp";
    highQualityImage3.onload = function() {
        document.querySelector('.slide__3-low').style.opacity = 0;
        document.querySelector('.slide__3').style.opacity = 1;
        slidesLoadedCount++;
        headerMenuTextBlack();
    };
    let highQualityImage4 = new Image();
    highQualityImage4.src = "assets/background-image-1.webp";
    highQualityImage4.onload = function() {
        document.querySelector('.slide__4-low').style.opacity = 0;
        document.querySelector('.slide__4').style.opacity = 1;
        slidesLoadedCount++;
        headerMenuTextBlack();
    };
};

let slidesLoadedCount = 0;
const slides = document.querySelectorAll('.slide');
const headerText = document.querySelectorAll('.header-text');
const switchInterval = 5000; // Интервал смены слайдов в миллисекундах (в данном случае, 2 секунды)
switchOpacity(slides, switchInterval);

function switchOpacity(elements, switchInterval) {
    let currentIndex = 0;

    function toggleOpacity() {
        elements.forEach((element, index) => {
            if (index === currentIndex) {
                element.style.opacity = 1;
                if (slidesLoadedCount >= 4) {
                    changeTextColor(whatCurrentSlide(element));
                }
            } else {
                element.style.opacity = 0;
            }
        });
        currentIndex = (currentIndex + 1) % elements.length;
    }

    // Интервал смены слайдов
    const intervalId = setInterval(toggleOpacity, switchInterval);

    // Остановка интервала при необходимости
    return {
        stopSwitching: function () {
            clearInterval(intervalId);
        },
    };
}
function headerMenuTextWhite () {
    headerText.forEach(el => {
        el.classList.add('text--white');
    })
}
function headerMenuTextBlack () {
    headerText.forEach(el => {
        el.classList.remove('text--white');
    })
}
function whatCurrentSlide (element) {
    if (element.classList.contains('slide-1')){
        return 'slide-1';
    }
    if (element.classList.contains('slide-2')){
        return 'slide-2';
    }
    if (element.classList.contains('slide-3')){
        return 'slide-3';
    }
    if (element.classList.contains('slide-4')){
        return 'slide-4';
    }
}
function changeTextColor (currentSlide) {
    switch(currentSlide) {
        case 'slide-1':
            headerMenuTextWhite();
            break;
        case 'slide-2':
            headerMenuTextWhite();
            break;
        case 'slide-3':
            headerMenuTextBlack();
            break;
        case 'slide-4':
            headerMenuTextBlack();
            break;
        default:
            headerMenuTextBlack();
            break;
    }
}