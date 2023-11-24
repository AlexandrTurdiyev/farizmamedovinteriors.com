const articleCategory = document.querySelector('.additional-article-category');

if ( articleCategory.classList.contains("commercial") ) {
    projectsCategory = "Коммерческие";
} else if ( articleCategory.classList.contains("residential") ) {
    projectsCategory = "Частные";
} else {
    projectsCategory = "Все";
}

console.log(projectsCategory);