document.body.onload = function () {

    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');
        let loader = document.querySelector('.loader');
        if ( !preloader.classList.contains('done') ) {
            preloader.classList.add('done');
            loader.classList.add('loader--hide');
        }
    }, 2000 ) // 1000 - мало; 3000 - много;
}