(self["webpackChunkfarizmamedovinteriors_com"] = self["webpackChunkfarizmamedovinteriors_com"] || []).push([["src_modules_filter-content_filter-content_js"],{

/***/ "./src/modules/filter-content/filter-content.js":
/*!******************************************************!*\
  !*** ./src/modules/filter-content/filter-content.js ***!
  \******************************************************/
/***/ (() => {

const currentCatalog = document.querySelector('.catalog');
let currentPage = '';
const categorySelectors = document.querySelector('.filter__list');
const categorySelectorsArr = document.querySelectorAll('.filter__item');
let currentSelector = '';
currentPage = currentCatalog.classList.contains('projects__catalog') === true ? 'projects' : currentCatalog.classList.contains('publications__catalog') === true ? 'publications' : 'page not detected';
categorySelectors.onclick = function (event) {
  let target = event.target;
  if (target.innerText.toString() === 'Все' || target.innerText.toString() === 'Все' || target.innerText.toString() === 'Частные' || target.innerText.toString() === 'Коммерческие' || target.innerText.toString() === 'Проекты' || target.innerText.toString() === 'Статьи') {
    categorySelectorsArr.forEach(element => {
      element.style.textDecoration = 'none';
    });
    target.style.textDecoration = 'underline';
    console.log('this page is: ', currentPage);
    console.log('click to element: ', target);
    console.log('target element innerTEXT', target.innerText);
    console.log('target result', getCurrentSelector(target));
    if (getCurrentSelector(target) === 'all-projects') {
      viewAllProjects();
    }
    if (getCurrentSelector(target) === 'residential-projects') {
      viewResidentialProjects();
    }
    if (getCurrentSelector(target) === 'commercial-projects') {
      viewCommercialProjects();
    }
    if (getCurrentSelector(target) === 'all-publications') {
      viewAllPublications();
    }
    if (getCurrentSelector(target) === 'projects-publications') {
      viewProjectsPublications();
    }
    if (getCurrentSelector(target) === 'articles-publications') {
      viewArticlesPublications();
    }
  }
};
function getCurrentSelector(nowElementClick) {
  if (currentPage === 'projects') {
    if (nowElementClick.innerText.toString() === 'Все') {
      currentSelector = 'all-projects';
      return currentSelector;
    }
    if (nowElementClick.innerText.toString() === 'Частные') {
      currentSelector = 'residential-projects';
      return currentSelector;
    }
    if (nowElementClick.innerText.toString() === 'Коммерческие') {
      currentSelector = 'commercial-projects';
      return currentSelector;
    }
  } else if (currentPage === 'publications') {
    if (nowElementClick.innerText.toString() === 'Все') {
      currentSelector = 'all-publications';
      return currentSelector;
    }
    if (nowElementClick.innerText.toString() === 'Проекты') {
      currentSelector = 'projects-publications';
      return currentSelector;
    }
    if (nowElementClick.innerText.toString() === 'Статьи') {
      currentSelector = 'articles-publications';
      return currentSelector;
    }
  }
}
function viewAllProjects() {
  const projectsCatalogItems = document.querySelectorAll('.projects__catalog-item');
  projectsCatalogItems.forEach(element => element.style.display = 'block');
}
function viewResidentialProjects() {
  const projectsCatalogItems = document.querySelectorAll('.projects__catalog-item');
  const projectsResidential = document.querySelectorAll('.projects-residential');
  projectsCatalogItems.forEach(element => element.style.display = 'none');
  projectsResidential.forEach(element => element.style.display = 'block');
}
function viewCommercialProjects() {
  const projectsCatalogItems = document.querySelectorAll('.projects__catalog-item');
  const projectsResidential = document.querySelectorAll('.projects-commercial');
  projectsCatalogItems.forEach(element => element.style.display = 'none');
  projectsResidential.forEach(element => element.style.display = 'block');
}
function viewAllPublications() {
  const publicationsCatalogItems = document.querySelectorAll('.publications__catalog-item');
  publicationsCatalogItems.forEach(element => element.style.display = 'block');
}
function viewProjectsPublications() {
  const projectsCatalogItems = document.querySelectorAll('.publications__catalog-item');
  const projectsResidential = document.querySelectorAll('.projects-publications');
  projectsCatalogItems.forEach(element => element.style.display = 'none');
  projectsResidential.forEach(element => element.style.display = 'block');
}
function viewArticlesPublications() {
  const projectsCatalogItems = document.querySelectorAll('.publications__catalog-item');
  const projectsResidential = document.querySelectorAll('.articles-publications');
  projectsCatalogItems.forEach(element => element.style.display = 'none');
  projectsResidential.forEach(element => element.style.display = 'block');
}

/***/ })

}]);
//# sourceMappingURL=src_modules_filter-content_filter-content_js.bfffeaaa0c32364c9d0c.js.map