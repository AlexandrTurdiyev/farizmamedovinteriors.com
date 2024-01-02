const preloader = document.getElementById('page-preloader');

// Добавьте это внутри обработчика DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    let images = document.images;
    let iframes = document.querySelectorAll("iframe");

    if (images.length > 1 ) {
        pagesWithImagesPreloader(images);
    } else if (iframes.length > 1) {
        pagesWithoutImages(iframes);
    } else {
        let loaderPercent = document.querySelector('.loader-percent');
        preloader.classList.add('done');
    }
});

// Функция для отслеживания загрузки изображений
function pagesWithImagesPreloader(images) {
    preloader.classList.add('preloader-percent--visible');

    let imagesTotalCount = images.length;
    let imagesLoadedCount = 0;

    function imageLoaded() {
        imagesLoadedCount++;
        console.log(imagesLoadedCount);

        if (imagesLoadedCount >= imagesTotalCount) {
            setTimeout(function () {
                hidePreloader();
                containerVisible();
            }, 1000);
        }
    }

    for (let i = 0; i < imagesTotalCount; i++) {
        let imageClone = new Image();
        imageClone.onload = imageLoaded;
        imageClone.onerror = imageLoaded;
        imageClone.src = images[i].src;
    }
}

// Функция для отслеживания загрузки iframe'ов
function pagesWithoutImages(iframes) {
    preloader.classList.add('preloader-percent--visible');

    let iframesTotalCount = iframes.length;
    let iframesLoadedCount = 0;

    function iframeLoaded() {
        iframesLoadedCount++;
        console.log(iframesLoadedCount);

        if (iframesLoadedCount >= iframesTotalCount) {
            setTimeout(function () {
                hidePreloader();
                containerVisible();
            }, 1000);
        }
    }

    for (let i = 0; i < iframesTotalCount; i++) {
        iframes[i].onload = iframeLoaded;
        iframes[i].onerror = iframeLoaded;
    }
}

// Функция для скрытия прелоадера
function hidePreloader() {
    let loaderPercent = document.querySelector('.loader-percent');
    preloader.classList.add('done');
    loaderPercent.classList.add('loader-percent--hide');
}

function containerVisible() {
    const container = document.querySelector('.container');
    container.classList.remove('container--hide');
}