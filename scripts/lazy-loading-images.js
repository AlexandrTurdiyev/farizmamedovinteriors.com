const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');

const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if (lazyImages.length>0) {
    lazyImages.forEach(img => {
        if (img.dataset.src || img.dataset.srcset) {
            lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
            lazyScrollCheck();
        }
    })
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll () {
    if (document.querySelectorAll('img[data-src], source[data-srcset]').length > 0) {
        lazyScrollCheck();
        console.log(scrollY);
    }
}

function lazyScrollCheck () {
    let imgIndex = lazyImagesPositions.findIndex(
        item => scrollY > item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        } else if (lazyImages[imgIndex].dataset.srcset) {
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute('data-srcset');
        }
        delete lazyImagesPositions[imgIndex];
    }
}
