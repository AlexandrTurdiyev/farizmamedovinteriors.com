
/* Architecture sidebar buttons */
const btnArchitectureAll = document.getElementById('btnArchitectureAll'),
    btnArchitectureCommercial = document.getElementById('btnArchitectureCommercial'),
    btnArchitectureResidential = document.getElementById('btnArchitectureResidential');
/* Architecture sidebar buttons [end] */


/* Publications sidebar buttons */
const btnPublicationsAll = document.getElementById('btnAllPublications'),
    btnPublicationsProjects = document.getElementById('btnProjectsPublications'),
    btnPublicationsArticles = document.getElementById('btnArticlesPublications');
/* Publications sidebar buttons [end] */


const allArchitectureItems = document.querySelectorAll('.section-content__item'),
    commercialItems = document.querySelectorAll('.itemCommercial'),
    residentialItems = document.querySelectorAll('.itemResidential');

function categoryCompliance (object, index, compareValue, itemImgUrl, itemText, itemUrl) {
    if (object[index].category === compareValue) {
        addContentItem(itemImgUrl, itemText, itemUrl); // architectureItems[index].itemImgUrl, architectureItems[index].itemText
    } else {return false;}
}

function initArchitecturePage () {
    deleteAllContent(sectionContentWrapper);
    if (projectsCategory === "Все") {
        allActiveOnProjects();
        deleteAllContent(sectionContentWrapper);
        for (let i = 0; i < architectureItems.length; i++) {
            addContentItem(architectureItems[i].itemImgUrl,architectureItems[i].itemText, architectureItems[i].itemUrl);
        }
    } else if (projectsCategory === "Коммерческие") {
        commercialActiveOnProjects();
        deleteAllContent(sectionContentWrapper);
        for (let i = 0; i < architectureItems.length; i++) {
            categoryCompliance(architectureItems, i, "commercial",
                architectureItems[i].itemImgUrl, architectureItems[i].itemText, architectureItems[i].itemUrl);
        }
    } else if (projectsCategory === "Частные") {
        residentialActiveOnProjects();
        for (let i = 0; i < architectureItems.length; i++) {
            categoryCompliance(architectureItems, i, "residential",
                architectureItems[i].itemImgUrl, architectureItems[i].itemText, architectureItems[i].itemUrl);
        }
    }
}

function initDesignPage () {
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < designItems.length; i++) {
        addContentItem(designItems[i].itemImgUrl,designItems[i].itemText, designItems[i].itemUrl);
    }
}

function addEventListener (element, action, callback) {
    element.addEventListener(action, callback);
}


