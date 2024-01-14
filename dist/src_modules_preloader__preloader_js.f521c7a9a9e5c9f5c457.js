(self["webpackChunkfarizmamedovinteriors_com"] = self["webpackChunkfarizmamedovinteriors_com"] || []).push([["src_modules_preloader__preloader_js"],{

/***/ "./src/modules/preloader/_preloader.js":
/*!*********************************************!*\
  !*** ./src/modules/preloader/_preloader.js ***!
  \*********************************************/
/***/ (() => {

if (document.querySelector('.preloader') !== null && document.querySelector('.preloader__logo') !== null) {
  const preloader = document.querySelector('.preloader');
  const preloaderLogo = document.querySelector('.preloader__logo');
  setTimeout(function () {
    document.querySelector('.preloader__logo').classList.add('preloader__logo--visible');
  }, 100);
  setTimeout(function () {
    preloader.classList.add('preloader--invisible');
  }, 2000);
  setTimeout(function () {
    preloader.classList.add('preloader--hide');
  }, 2500);
}

/***/ })

}]);
//# sourceMappingURL=src_modules_preloader__preloader_js.f521c7a9a9e5c9f5c457.js.map