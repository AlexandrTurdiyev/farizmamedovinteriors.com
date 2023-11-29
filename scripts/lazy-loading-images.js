const images = document.querySelectorAll('img');

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

function handleImg( myImg, observer) {
    myImg.forEach( myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            loadImage (myImgSingle.target);
        }
    })
}

function loadImage (image) {
    let sourceElement = image.previousElementSibling;
    image.src = image.getAttribute('data-src');
    if (sourceElement && sourceElement.tagName.toLowerCase() === 'source') {
        sourceElement.srcset = sourceElement.getAttribute('data-srcset');
    }
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach( img => {
    observer.observe(img)
})
