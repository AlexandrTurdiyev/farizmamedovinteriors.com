// Получите ссылку на элементы HTML и SVG
const colorChanger = document.getElementById("fmInteriorsLogoText");
const svgElement = document.getElementById("svg7");

// Получите цвет фона элемента HTML
const backgroundColor = window.getComputedStyle(colorChanger).backgroundColor;

// Установите цвет заливки элемента SVG равным цвету фона элемента HTML
svgElement.style.fill = backgroundColor;