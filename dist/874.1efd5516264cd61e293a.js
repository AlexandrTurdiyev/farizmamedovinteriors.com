(self.webpackChunkfarizmamedovinteriors_com=self.webpackChunkfarizmamedovinteriors_com||[]).push([[874],{874:function(){const t=document.querySelector(".catalog");let e="";const o=document.querySelector(".filter__list"),l=document.querySelectorAll(".filter__item");let n="";function c(t){if("projects"===e){if("Все"===t.innerText.toString())return n="all-projects",n;if("Частные"===t.innerText.toString())return n="residential-projects",n;if("Коммерческие"===t.innerText.toString())return n="commercial-projects",n}else if("publications"===e){if("Все"===t.innerText.toString())return n="all-publications",n;if("Проекты"===t.innerText.toString())return n="projects-publications",n;if("Статьи"===t.innerText.toString())return n="articles-publications",n}}e=!0===t.classList.contains("projects__catalog")?"projects":!0===t.classList.contains("publications__catalog")?"publications":"page not detected",o.onclick=function(t){let o=t.target;"Все"!==o.innerText.toString()&&"Все"!==o.innerText.toString()&&"Частные"!==o.innerText.toString()&&"Коммерческие"!==o.innerText.toString()&&"Проекты"!==o.innerText.toString()&&"Статьи"!==o.innerText.toString()||(l.forEach((t=>{t.style.textDecoration="none"})),o.style.textDecoration="underline",console.log("this page is: ",e),console.log("click to element: ",o),console.log("target element innerTEXT",o.innerText),console.log("target result",c(o)),"all-projects"===c(o)&&document.querySelectorAll(".projects__catalog-item").forEach((t=>t.style.display="block")),"residential-projects"===c(o)&&function(){const t=document.querySelectorAll(".projects__catalog-item"),e=document.querySelectorAll(".projects-residential");t.forEach((t=>t.style.display="none")),e.forEach((t=>t.style.display="block"))}(),"commercial-projects"===c(o)&&function(){const t=document.querySelectorAll(".projects__catalog-item"),e=document.querySelectorAll(".projects-commercial");t.forEach((t=>t.style.display="none")),e.forEach((t=>t.style.display="block"))}(),"all-publications"===c(o)&&document.querySelectorAll(".publications__catalog-item").forEach((t=>t.style.display="block")),"projects-publications"===c(o)&&function(){const t=document.querySelectorAll(".publications__catalog-item"),e=document.querySelectorAll(".projects-publications");t.forEach((t=>t.style.display="none")),e.forEach((t=>t.style.display="block"))}(),"articles-publications"===c(o)&&function(){const t=document.querySelectorAll(".publications__catalog-item"),e=document.querySelectorAll(".articles-publications");t.forEach((t=>t.style.display="none")),e.forEach((t=>t.style.display="block"))}())}}}]);