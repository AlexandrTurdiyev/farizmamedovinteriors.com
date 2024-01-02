/* Для категорий на странице "ПРОЕКТЫ" */
let projectsCategory = "Все"
let isAllCategorySelected = true;

const sideBarLinkActiveClass = "sidebar__link--active"

const allOnProjects = document.querySelector('.all'),
    commercialOnProjects = document.querySelector('.commercial'),
    residentialOnProjects = document.querySelector('.residential');

function allActiveOnProjects () {
    allOnProjects.classList.add(sideBarLinkActiveClass);
    commercialOnProjects.classList.remove(sideBarLinkActiveClass);
    residentialOnProjects.classList.remove(sideBarLinkActiveClass);
}

function commercialActiveOnProjects () {
    commercialOnProjects.classList.add(sideBarLinkActiveClass);
    allOnProjects.classList.remove(sideBarLinkActiveClass);
    residentialOnProjects.classList.remove(sideBarLinkActiveClass);
}

function residentialActiveOnProjects () {
    residentialOnProjects.classList.add(sideBarLinkActiveClass);
    allOnProjects.classList.remove(sideBarLinkActiveClass);
    commercialOnProjects.classList.remove(sideBarLinkActiveClass);
}
/* [end] Для категорий на странице "ПРОЕКТЫ" */

/* Для категорий на странице "ПУБЛИКАЦИИ" */
const allOnDesign = document.querySelector('.all-design'),
    categoryOneOnDesign = document.querySelector('.category-1-design'),
    categoryTwoOnDesign = document.querySelector('.category-2-design');
/* [end] Для категорий на странице "ПУБЛИКАЦИИ" */

function allActiveOnDesign () {
    allOnDesign.classList.add(sideBarLinkActiveClass);
    categoryOneOnDesign.classList.remove(sideBarLinkActiveClass);
    categoryTwoOnDesign.classList.remove(sideBarLinkActiveClass);
}

function categoryOneActiveOnDesign () {
    categoryOneOnDesign.classList.add(sideBarLinkActiveClass);
    allOnDesign.classList.remove(sideBarLinkActiveClass);
    categoryTwoOnDesign.classList.remove(sideBarLinkActiveClass);
}

function categoryTwoActiveOnDesign () {
    categoryTwoOnDesign.classList.add(sideBarLinkActiveClass);
    allOnDesign.classList.remove(sideBarLinkActiveClass);
    categoryOneOnDesign.classList.remove(sideBarLinkActiveClass);
}

const arr1 = [1, 2, 3, 4]
