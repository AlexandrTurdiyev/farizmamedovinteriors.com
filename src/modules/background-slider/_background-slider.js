document.addEventListener("DOMContentLoaded", function() {
    let highQualityImage1 = new Image();
    highQualityImage1.src = "../images/background-slider/background-image-1.webp";
    console.log('image-1-onload-WARNING');
    highQualityImage1.onload = function() {
        console.log('image-1-onload-OK');
        // При загрузке основного изображения
        document.querySelector('.slide__1-low').style.opacity = 0;
        document.querySelector('.slide__1').style.opacity = 1;
    };

    let highQualityImage2 = new Image();
    highQualityImage2.src = "images/background-image-2.webp";
    highQualityImage2.onload = function() {
        // При загрузке основного изображения
        document.querySelector('.slide__2-low').style.opacity = 0;
        document.querySelector('.slide__2').style.opacity = 1;
    };

    let highQualityImage3 = new Image();
    highQualityImage3.src = "images/background-image-3.webp";
    highQualityImage3.onload = function() {
        // При загрузке основного изображения
        document.querySelector('.slide__3-low').style.opacity = 0;
        document.querySelector('.slide__3').style.opacity = 1;
    };

    let highQualityImage4 = new Image();
    highQualityImage4.src = "images/background-image-4.webp";
    highQualityImage4.onload = function() {
        // При загрузке основного изображения
        document.querySelector('.slide__4-low').style.opacity = 0;
        document.querySelector('.slide__4').style.opacity = 1;
    };
});

const slides = document.querySelectorAll('.slide');
const switchInterval = 5000; // Интервал смены слайдов в миллисекундах (в данном случае, 2 секунды)
switchOpacity(slides, switchInterval);

function switchOpacity(elements, switchInterval) {
    let currentIndex = 0;

    function toggleOpacity() {
        elements.forEach((element, index) => {
            if (index === currentIndex) {
                element.style.opacity = 1;
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

