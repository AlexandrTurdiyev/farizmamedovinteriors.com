addEventListener(btnPublicationsAll, 'click', () => {
    allActiveOnDesign();
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < designItems.length; i++) {
        addContentItem(designItems[i].itemImgUrl,designItems[i].itemText, designItems[i].itemUrl);
    }
})

addEventListener(btnPublicationsProjects, 'click', () => {
    categoryOneActiveOnDesign();
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < designItems.length; i++) {
        categoryCompliance(designItems, i, "projects",
            designItems[i].itemImgUrl, designItems[i].itemText, designItems[i].itemUrl);
    }
})

addEventListener(btnPublicationsArticles, 'click', () => {
    categoryTwoActiveOnDesign();
    deleteAllContent(sectionContentWrapper);
    for (let i = 0; i < designItems.length; i++) {
        categoryCompliance(designItems, i, "articles",
            designItems[i].itemImgUrl, designItems[i].itemText, designItems[i].itemUrl);
    }
})

initDesignPage();