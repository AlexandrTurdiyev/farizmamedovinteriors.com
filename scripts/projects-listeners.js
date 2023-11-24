// "ПРОЕКТЫ"
addEventListener(btnArchitectureAll, 'click', () => {
    projectsCategory = "Все";
    allActiveOnProjects();
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < architectureItems.length; i++) {
        addContentItem(architectureItems[i].itemImgUrl,architectureItems[i].itemText, architectureItems[i].itemUrl);
    }
})

addEventListener(btnArchitectureCommercial, 'click', () => {
    projectsCategory = "Коммерческие";
    commercialActiveOnProjects();
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < architectureItems.length; i++) {
        categoryCompliance(architectureItems, i, "commercial",
            architectureItems[i].itemImgUrl, architectureItems[i].itemText, architectureItems[i].itemUrl);
    }
})

addEventListener(btnArchitectureResidential, 'click', () => {
    projectsCategory = "Частные";
    residentialActiveOnProjects();
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < architectureItems.length; i++) {
        categoryCompliance(architectureItems, i, "residential",
            architectureItems[i].itemImgUrl, architectureItems[i].itemText,  architectureItems[i].itemUrl);
    }
})

initArchitecturePage();

console.log(projectsCategory);