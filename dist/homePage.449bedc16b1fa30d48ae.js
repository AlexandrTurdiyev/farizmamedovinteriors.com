/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./styles/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-Bold.ttf */ "./src/fonts/cormorant/Cormorant-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-BoldItalic.ttf */ "./src/fonts/cormorant/Cormorant-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-Italic.ttf */ "./src/fonts/cormorant/Cormorant-Italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-Light.ttf */ "./src/fonts/cormorant/Cormorant-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-LightItalic.ttf */ "./src/fonts/cormorant/Cormorant-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-Medium.ttf */ "./src/fonts/cormorant/Cormorant-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-MediumItalic.ttf */ "./src/fonts/cormorant/Cormorant-MediumItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-Regular.ttf */ "./src/fonts/cormorant/Cormorant-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-SemiBold.ttf */ "./src/fonts/cormorant/Cormorant-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! fonts/cormorant/Cormorant-SemiBoldItalic.ttf */ "./src/fonts/cormorant/Cormorant-SemiBoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! fonts/poiret-one/PoiretOne-Regular.ttf */ "./src/fonts/poiret-one/PoiretOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! images/background-slider/background-image-1.jpg */ "./src/images/background-slider/background-image-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! images/background-slider/background-image-2.jpg */ "./src/images/background-slider/background-image-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! images/background-slider/background-image-3.jpg */ "./src/images/background-slider/background-image-3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! images/background-slider/background-image-4.jpg */ "./src/images/background-slider/background-image-4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_14___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("TrueType");
  font-weight: 700; /* Bold */
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("TrueType");
  font-weight: 700; /* Bold */
  font-style: italic;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("TrueType");
  font-style: italic;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("TrueType");
  font-weight: 300; /* Lighter */
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("TrueType");
  font-weight: 300; /* Lighter */
  font-style: italic;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("TrueType");
  font-weight: 500; /* Medium */
  font-display: swap;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("TrueType");
  font-weight: 500; /* Medium */
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("TrueType");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("TrueType");
  font-weight: 600; /* SemiBold */
  font-display: swap;
}
@font-face {
  font-family: "Cormorant";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("TrueType");
  font-weight: 600; /* SemiBold */
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "PoiretOne";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format("TrueType");
  font-display: swap;
}
html {
  font-family: Cormorant, serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
}

main {
  padding: 0 3rem;
}

h1.header-logo {
  margin: 0;
  padding: 0;
  font-family: Cormorant, serif;
  font-size: 1rem;
  font-weight: 700;
}

h2 {
  color: #58697c;
  margin-bottom: 2rem;
}

p {
  color: #58697c;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.5rem;
}

.container {
  position: relative;
  max-width: 1920px;
  height: calc(100% - 1.6rem);
  margin: 0 auto;
}

.header {
  font-family: Cormorant, serif;
  font-weight: 400;
  margin-bottom: 8rem;
}
.header__inner {
  display: flex;
  gap: 2rem;
  padding: 1.6rem 0 0 1.6rem;
}

.header-menu {
  display: flex;
  gap: 2rem;
}

.header a {
  position: relative;
  white-space: nowrap;
}

.header a::before {
  background-color: black;
  position: absolute;
  content: "";
  width: 100%;
  height: 0.12rem;
  left: 0;
  bottom: -0.3rem;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.header a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  transition: transform 0.3s;
}

.social-media {
  position: relative;
  max-width: -moz-fit-content;
  max-width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.social-media__icon {
  transition: all 0.3s;
}
.social-media:hover .social-media__icon {
  rotate: -15deg;
}
.social-media__link {
  font-weight: 700;
  color: #58697c;
  transition: color 0.2s ease-in-out;
}
.social-media__link:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.social-media__link:hover {
  color: black;
}

.footer__signature {
  padding: 1.6rem;
}

.projects,
.publications {
  display: grid;
  grid-template-columns: 1fr 4fr 0.5fr;
}
.projects__filter,
.publications__filter {
  min-width: 10rem;
  margin-bottom: 2rem;
}
.projects__filter-item,
.publications__filter-item {
  cursor: pointer;
  line-height: 125%;
  margin-bottom: 0.5rem;
}
.projects__catalog,
.publications__catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  justify-content: space-evenly;
  min-height: -moz-fit-content;
  min-height: fit-content;
  padding-bottom: 5rem;
}
.projects__catalog-item,
.publications__catalog-item {
  position: relative;
  justify-self: center;
  align-self: start;
  max-width: 375px;
}
.projects__catalog-item-preview-img,
.publications__catalog-item-preview-img {
  width: 100%;
  margin-bottom: 0.5rem;
}
.projects__catalog-item-link,
.publications__catalog-item-link {
  color: #000000;
  font-weight: 500;
  font-size: 1.1rem;
}
.projects__catalog-item-link::after,
.publications__catalog-item-link::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@media (max-width: 1200px) {
  .projects,
  .publications {
    grid-template-columns: 1fr 4fr 0.2fr;
  }
  .projects__catalog,
  .publications__catalog {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 769px) {
  .header {
    margin-bottom: 5rem;
  }
  .projects__catalog,
  .publications__catalog {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 610px) {
  .projects,
  .publications {
    grid-template-columns: 1fr;
    height: -moz-fit-content;
    height: fit-content;
  }
  .projects__catalog,
  .publications__catalog {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 769px) {
  .header__inner {
    gap: 1.5rem;
  }
  .header-menu {
    gap: 1rem;
  }
}
@media (max-width: 481px) {
  main {
    padding: 0 1.5rem;
  }
}
.preloader {
  opacity: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
  transition: opacity 0.2s ease-in-out;
}
.preloader__logo {
  transition: opacity 0.2s ease-in-out;
}

.preloader__logo--visible {
  opacity: 1;
}

.preloader--invisible {
  opacity: 0;
}

.preloader--hide {
  z-index: -1;
  display: none;
}

body {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
}

.background-slider {
  position: absolute;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  background-position: center;
  background-size: cover;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: background-slider 20s infinite;
}
.background-slider__images-preloader {
  animation: background-images-preloader 1s linear;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.footer__signature {
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
}

@keyframes background-images-preloader {
  0% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  }
  25% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  }
  50% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  }
  75% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  }
}
@keyframes background-slider {
  0% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  }
  20% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  }
  25% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  }
  45% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  }
  50% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  }
  70% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
  }
  75% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  }
  95% {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
  }
}
h1.header-logo,
.header-menu__link,
.footer__signature {
  animation: change-text-color 20s infinite;
  color: white;
}

@keyframes change-text-color {
  1% {
    color: white;
  }
  20% {
    color: white;
  }
  25% {
    color: white;
  }
  45% {
    color: white;
  }
  50% {
    color: black;
  }
  70% {
    color: black;
  }
  75% {
    color: black;
  }
  95% {
    color: black;
  }
  98% {
    color: white;
  }
}
header a::before {
  animation: change-underline-links-color 20s infinite;
  color: white;
}

@keyframes change-underline-links-color {
  1% {
    background-color: white;
  }
  20% {
    background-color: white;
  }
  25% {
    background-color: white;
  }
  45% {
    background-color: white;
  }
  50% {
    background-color: black;
  }
  70% {
    background-color: black;
  }
  75% {
    background-color: black;
  }
  95% {
    background-color: black;
  }
  98% {
    background-color: white;
  }
}
body {
  background-color: #ffffff;
}

nav {
  font-family: Cormorant, serif;
  font-size: 1rem;
  font-weight: 700;
}

a {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
}

.container {
  position: relative;
  max-width: 1920px;
  height: calc(100vh - 1.6rem);
  margin: 0 auto;
}

.header {
  font-family: Cormorant, serif;
  font-weight: 700;
}
.header__inner {
  display: flex;
  gap: 2rem;
  padding: 1.6rem 0 0 1.6rem;
}

.header-menu {
  display: flex;
  gap: 2rem;
}

.header a {
  position: relative;
  white-space: nowrap;
}

.header a::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.12rem;
  left: 0;
  bottom: -0.3rem;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.header a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
  transition: transform 0.3s;
}

@media (max-width: 680px) {
  .header__inner,
  .header-menu {
    flex-wrap: wrap;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/_fonts.scss","webpack://./src/index.scss","webpack://./src/styles/_base-styles.scss","webpack://./src/styles/_variables.scss","webpack://./src/modules/preloader/_preloader.scss","webpack://./src/styles/_background-slider.scss","webpack://./src/styles/_style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url('fonts/cormorant/Cormorant-Bold.ttf') format('TrueType');\r\n  font-weight: 700; /* Bold */\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-BoldItalic.ttf\") format('TrueType');\r\n  font-weight: 700; /* Bold */\r\n  font-style: italic;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-Italic.ttf\") format('TrueType');\r\n  font-style: italic;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-Light.ttf\") format('TrueType');\r\n  font-weight: 300; /* Lighter */\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-LightItalic.ttf\") format('TrueType');\r\n  font-weight: 300; /* Lighter */\r\n  font-style: italic;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-Medium.ttf\") format('TrueType');\r\n  font-weight: 500; /* Medium */\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-MediumItalic.ttf\") format('TrueType');\r\n  font-weight: 500; /* Medium */\r\n  font-style: italic;\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-Regular.ttf\") format('TrueType');\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-SemiBold.ttf\") format('TrueType');\r\n  font-weight: 600; /* SemiBold */\r\n  font-display: swap;\r\n}\r\n@font-face {\r\n  font-family: 'Cormorant';\r\n  src: url(\"fonts/cormorant/Cormorant-SemiBoldItalic.ttf\") format('TrueType');\r\n  font-weight: 600; /* SemiBold */\r\n  font-style: italic;\r\n  font-display: swap;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'PoiretOne';\r\n  src: url('fonts/poiret-one/PoiretOne-Regular.ttf') format('TrueType');\r\n  font-display: swap;\r\n}","@import \"styles/normalize.css\";\r\n@import \"styles/variables\";\r\n@import \"styles/fonts\";\r\n@import \"styles/base-styles\";\r\n@import \"modules/preloader/preloader\";\r\n@import \"styles/background-slider\";\r\n@import \"styles/style\";\r\n","html {\r\n  font-family: $htmlFontFamily;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nmain {\r\n  padding: 0 3rem;\r\n}\r\n\r\nh1.header-logo {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: $headerFontFamily;\r\n  font-size: $headerFontSize;\r\n  font-weight: $headerFontWeight;\r\n}\r\n\r\nh2 {\r\n  color: $contentTextColor;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\np {\r\n  color: $contentTextColor;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  margin-bottom: 1rem;\r\n  line-height: 1.5rem;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 1920px;\r\n  height: calc(100% - 1.6rem);\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  font-family: Cormorant, serif;\r\n  font-weight: 400;\r\n  margin-bottom: 8rem;\r\n  &__inner {\r\n    display: flex;\r\n    gap: 2rem;\r\n    padding: 1.6rem 0 0 1.6rem;\r\n  }\r\n}\r\n\r\n.header-menu {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.header a{\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n\r\n.header a:hover {}\r\n.header a::before {\r\n  background-color: black;\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0.12rem;\r\n  left: 0;\r\n  bottom: -0.3rem;\r\n  transform-origin: right;\r\n  transform: scaleX(0);\r\n  transition: transform .3s;\r\n}\r\n.header a:hover::before {\r\n  transform-origin: left;\r\n  transform: scaleX(1);\r\n  transition: transform .3s;\r\n}\r\n\r\n.social-media {\r\n  position: relative;\r\n  max-width: fit-content;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  &__icon {\r\n    transition: all 0.3s;\r\n  }\r\n  &:hover .social-media__icon {\r\n    rotate: -15deg;\r\n  }\r\n  &__link {\r\n    font-weight: 700;\r\n    color: $contentTextColor;\r\n    transition: color .2s ease-in-out;\r\n  }\r\n  &__link:after {\r\n    content: '';\r\n    position: absolute;\r\n    inset: 0;\r\n  }\r\n  &__link:hover {\r\n    color: black;\r\n  }\r\n}\r\n\r\n.footer {\r\n  &__signature {\r\n    padding: 1.6rem;\r\n  }\r\n}\r\n\r\n.projects,\r\n.publications {\r\n  display: grid;\r\n  grid-template-columns: 1fr 4fr 0.5fr;\r\n  &__filter {\r\n    min-width: 10rem;\r\n    margin-bottom: 2rem;\r\n  }\r\n  &__filter-item {\r\n    cursor: pointer;\r\n    line-height: 125%;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  &__catalog {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 3rem;\r\n    justify-content: space-evenly;\r\n    min-height: fit-content;\r\n    padding-bottom: 5rem;\r\n  }\r\n  &__catalog-item {\r\n    position: relative;\r\n    justify-self: center;\r\n    align-self: start;\r\n    max-width: 375px;\r\n  }\r\n  &__catalog-item-preview-img {\r\n    width: 100%;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  &__catalog-item-link {\r\n    color: $previewsTitleTextColor;\r\n    font-weight: $previewsTitleTextWeight;\r\n    font-size: $previewsTitleTextSize;\r\n  }\r\n  &__catalog-item-link::after {\r\n    content: '';\r\n    position: absolute;\r\n    inset: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .projects,\r\n  .publications {\r\n    grid-template-columns: 1fr 4fr 0.2fr;\r\n    &__catalog {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 769px) {\r\n  .header {\r\n    margin-bottom: 5rem;\r\n  }\r\n  .projects,\r\n  .publications {\r\n    &__catalog {\r\n      grid-template-columns: repeat(1, 1fr);\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 610px) {\r\n  .projects,\r\n  .publications {\r\n    grid-template-columns: 1fr;\r\n    height: fit-content;\r\n    &__catalog {\r\n      grid-template-columns: repeat(1, 1fr);\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 769px) {\r\n  .header__inner {\r\n    gap: 1.5rem;\r\n  }\r\n  .header-menu {\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 481px) {\r\n  main {\r\n    padding: 0 1.5rem;\r\n  }\r\n}","$headerFontFamily: Cormorant, serif;\r\n$headerFontWeight: 700;\r\n$headerFontSize: 1rem;\r\n\r\n$bodyBackgroundColor: #ffffff;\r\n\r\n$htmlFontFamily: Cormorant, serif;\r\n$contentTextColor: #58697c; //#718096;\r\n\r\n$previewsTitleTextColor: #000000;\r\n$previewsTitleTextSize: 1.1rem;\r\n$previewsTitleTextWeight: 500;",".preloader {\r\n  opacity: 1;\r\n  background-color: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  z-index: 1;\r\n  transition: opacity .2s ease-in-out;\r\n  &__logo {\r\n    transition: opacity .2s ease-in-out;\r\n  }\r\n}\r\n\r\n.preloader__logo--visible {\r\n  opacity: 1;\r\n}\r\n\r\n.preloader--invisible {\r\n  opacity: 0;\r\n}\r\n\r\n.preloader--hide {\r\n  z-index: -1;\r\n  display: none;\r\n}","body {\r\n  position: relative;\r\n  min-height: 100vh;\r\n  min-width: 100vw;\r\n}\r\n\r\n.background-slider {\r\n  position: absolute;\r\n  background-image: url(\"images/background-slider/background-image-1.jpg\");\r\n  background-position: center;\r\n  background-size: cover;\r\n  inset: 0;\r\n  animation: background-slider 20s infinite;\r\n  &__images-preloader {\r\n    animation: background-images-preloader 1s linear;\r\n  }\r\n}\r\n\r\n.footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  &__signature {\r\n    position: absolute;\r\n    bottom: 1.6rem;\r\n    left: 1.6rem;\r\n  }\r\n}\r\n\r\n\r\n@keyframes background-images-preloader {\r\n  0% {background-image: url(\"images/background-slider/background-image-1.jpg\")}\r\n  25% {background-image: url(\"images/background-slider/background-image-2.jpg\")}\r\n  50% {background-image: url(\"images/background-slider/background-image-3.jpg\")}\r\n  75% {background-image: url(\"images/background-slider/background-image-4.jpg\")}\r\n}\r\n\r\n@keyframes background-slider  {\r\n  0% {background-image: url(\"images/background-slider/background-image-1.jpg\")}\r\n  20% {background-image: url(\"images/background-slider/background-image-1.jpg\")}\r\n\r\n  25% {background-image: url(\"images/background-slider/background-image-2.jpg\")}\r\n  45% {background-image: url(\"images/background-slider/background-image-2.jpg\")}\r\n\r\n  50% {background-image: url(\"images/background-slider/background-image-3.jpg\")}\r\n  70% {background-image: url(\"images/background-slider/background-image-3.jpg\")}\r\n\r\n  75% {background-image: url(\"images/background-slider/background-image-4.jpg\")}\r\n  95% {background-image: url(\"images/background-slider/background-image-4.jpg\")}\r\n}\r\n\r\nh1.header-logo,\r\n.header-menu__link,\r\n.footer__signature {\r\n  animation: change-text-color 20s infinite;\r\n  color: white;\r\n}\r\n\r\n@keyframes change-text-color  {\r\n  1% {color: white;} //white\r\n  20% {color: white;} //white\r\n\r\n  25% {color: white;} //white\r\n  45% {color: white;} //white\r\n\r\n  50% {color: black;} //black\r\n  70% {color: black;} //black\r\n  75% {color: black;}\r\n  95% {color: black;}\r\n  98% {color: white;}\r\n}\r\n\r\n\r\nheader a::before {\r\n  animation: change-underline-links-color 20s infinite;\r\n  color: white;\r\n}\r\n\r\n@keyframes change-underline-links-color {\r\n  1% {background-color: white;}\r\n  20% {background-color: white;}\r\n\r\n  25% {background-color: white;}\r\n  45% {background-color: white;}\r\n\r\n  50% {background-color: black;}\r\n  70% {background-color: black;}\r\n  75% {background-color: black;}\r\n  95% {background-color: black;}\r\n  98% {background-color: white;}\r\n}","body {\r\n  background-color: $bodyBackgroundColor;\r\n}\r\n\r\nnav {\r\n  font-family: $headerFontFamily;\r\n  font-size: $headerFontSize;\r\n  font-weight: $headerFontWeight;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  max-width: 1920px;\r\n  height: calc(100vh - 1.6rem);\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  font-family: Cormorant, serif;\r\n  font-weight: 700;\r\n  &__inner {\r\n    display: flex;\r\n    gap: 2rem;\r\n    padding: 1.6rem 0 0 1.6rem;\r\n  }\r\n}\r\n.header-menu {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.header a{\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n.header a:hover {}\r\n.header a::before {\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0.12rem;\r\n  left: 0;\r\n  bottom: -0.3rem;\r\n  transform-origin: right;\r\n  transform: scaleX(0);\r\n  transition: transform .3s;\r\n}\r\n.header a:hover::before {\r\n  transform-origin: left;\r\n  transform: scaleX(1);\r\n  transition: transform .3s;\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .header__inner,\r\n  .header-menu {\r\n    flex-wrap: wrap;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./manifest. webmanifest */ "./src/manifest. webmanifest"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./favicon.ico */ "./src/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icon.svg */ "./src/icon.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./apple-touch-icon.png */ "./src/apple-touch-icon.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/preloaders/fm-interiors-logo_compress.svg */ "./src/images/preloaders/fm-interiors-logo_compress.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!doctype html>\r\n<html lang=\"ru\" id=\"content\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\"\r\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Fariz Mamedov Interiors</title>\r\n    <link rel=\"manifest\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" sizes=\"any\">\r\n    <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" type=\"image/svg+xml\">\r\n    <link rel=\"apple-touch-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\r\n\r\n    <style> .page-content {display: none;} .preloader__logo {opacity: 0;}</style>\r\n\r\n</head>\r\n<body>\r\n\r\n<div class=\"preloader preloader--visible\">\r\n    <img class=\"preloader__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"preloader-img\">\r\n</div>\r\n\r\n<div class=\"page-content\">\r\n    <div class=\"background-slider\">\r\n        <div class=\"background-slider__images-preloader\"></div>\r\n    </div>\r\n    <div class=\"container\">\r\n        <header class=\"header\">\r\n            <div class=\"header__inner\">\r\n                <a href=\"index.html\" class=\"header-logo-link\"><h1 class=\"header-logo\">FM INTERIORS</h1></a>\r\n                <nav>\r\n                    <ul class=\"header-menu\">\r\n                        <li class=\"header-menu__item\">\r\n                            <a href=\"about-us.html\" class=\"header-menu__link\">О НАС</a>\r\n                        </li>\r\n                        <li class=\"header-menu__item\">\r\n                            <a href=\"projects.html\" class=\"header-menu__link\">ПРОЕКТЫ</a>\r\n                        </li>\r\n                        <li class=\"header-menu__item\">\r\n                            <a href=\"publications.html\" class=\"header-menu__link\">ПУБЛИКАЦИИ</a>\r\n                        </li>\r\n                        <li class=\"header-menu__item\">\r\n                            <a href=\"blog.html\" class=\"header-menu__link\">БЛОГ</a>\r\n                        </li>\r\n                        <li class=\"header-menu__item\">\r\n                            <a href=\"contact.html\" class=\"header-menu__link\">СВЯЗАТЬСЯ</a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n        </header>\r\n        <main>\r\n\r\n        </main>\r\n        <footer class=\"footer\">\r\n            <p class=\"footer__signature\">Fariz Mamedov</p>\r\n        </footer>\r\n    </div>\r\n</div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apple-touch-icon.png":
/*!**********************************!*\
  !*** ./src/apple-touch-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/apple-touch-icon.png";

/***/ }),

/***/ "./src/favicon.ico":
/*!*************************!*\
  !*** ./src/favicon.ico ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/favicon.ico";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-Bold.ttf":
/*!************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-Bold.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-Bold.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-BoldItalic.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-BoldItalic.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-BoldItalic.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-Italic.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-Italic.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-Italic.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-Light.ttf":
/*!*************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-Light.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-Light.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-LightItalic.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-LightItalic.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-LightItalic.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-Medium.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-Medium.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-Medium.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-MediumItalic.ttf":
/*!********************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-MediumItalic.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-MediumItalic.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-Regular.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-SemiBold.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-SemiBold.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-SemiBold.ttf";

/***/ }),

/***/ "./src/fonts/cormorant/Cormorant-SemiBoldItalic.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/cormorant/Cormorant-SemiBoldItalic.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/Cormorant-SemiBoldItalic.ttf";

/***/ }),

/***/ "./src/fonts/poiret-one/PoiretOne-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/poiret-one/PoiretOne-Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/PoiretOne-Regular.ttf";

/***/ }),

/***/ "./src/icon.svg":
/*!**********************!*\
  !*** ./src/icon.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icon.svg";

/***/ }),

/***/ "./src/images/background-slider/background-image-1.jpg":
/*!*************************************************************!*\
  !*** ./src/images/background-slider/background-image-1.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/background-image-1.jpg";

/***/ }),

/***/ "./src/images/background-slider/background-image-2.jpg":
/*!*************************************************************!*\
  !*** ./src/images/background-slider/background-image-2.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/background-image-2.jpg";

/***/ }),

/***/ "./src/images/background-slider/background-image-3.jpg":
/*!*************************************************************!*\
  !*** ./src/images/background-slider/background-image-3.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/background-image-3.jpg";

/***/ }),

/***/ "./src/images/background-slider/background-image-4.jpg":
/*!*************************************************************!*\
  !*** ./src/images/background-slider/background-image-4.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/background-image-4.jpg";

/***/ }),

/***/ "./src/images/preloaders/fm-interiors-logo_compress.svg":
/*!**************************************************************!*\
  !*** ./src/images/preloaders/fm-interiors-logo_compress.svg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fm-interiors-logo_compress.svg";

/***/ }),

/***/ "./src/manifest. webmanifest":
/*!***********************************!*\
  !*** ./src/manifest. webmanifest ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/manifest. webmanifest";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + "4dc1c2076a8ac08eb008" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "farizmamedovinteriors.com:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"homePage": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfarizmamedovinteriors_com"] = self["webpackChunkfarizmamedovinteriors_com"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/preloader/_preloader */ "./src/modules/preloader/_preloader.js");
/* harmony import */ var _modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_2__);


__webpack_require__.e(/*! import() */ "src_modules_content-load_content-load_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/content-load/content-load */ "./src/modules/content-load/content-load.js", 23));

__webpack_require__.e(/*! import() */ "src_modules_content-load_content-load_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./modules/content-load/content-load */ "./src/modules/content-load/content-load.js", 23));
})();

/******/ })()
;
//# sourceMappingURL=homePage.449bedc16b1fa30d48ae.js.map