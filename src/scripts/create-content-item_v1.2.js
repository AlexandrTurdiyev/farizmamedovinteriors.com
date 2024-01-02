const sectionContentWrapper = document.querySelector('.section-content__wrapper');

/* создание элемента внутри JS */

/* создание элемента внутри JS [end] */

/* добавление элемента на страницу */
function addContentItem (itemImgUrl, itemText, itemUrl) {
    const sectionContentItem = document.createElement("div");
    sectionContentItem.className = "section-content__item";

    const sectionContentLinkWrapper = document.createElement("div");
    sectionContentLinkWrapper.className = "section-content__link-wrapper";

    const sectionContentLink = document.createElement("a");
    sectionContentLink.className = "section-content__link";

    const sectionContentLinkInner = document.createElement("div");
    sectionContentLinkInner.className = "section-content__link-inner";

    const sectionContentImageWrapper = document.createElement("div");
    sectionContentImageWrapper.className = "section-content__image-wrapper";

    const sectionContentImg = document.createElement("img");
    sectionContentImg.className = "section-content__img";
    sectionContentImg.setAttribute("alt", "content-img");

    const sectionContentTextWrapper = document.createElement("div");
    sectionContentTextWrapper.className = "section-content__text-wrapper";

    const sectionContentText = document.createElement("p");
    sectionContentText.className = "section-content__text";

    sectionContentWrapper.appendChild(sectionContentItem);
    sectionContentItem.appendChild(sectionContentLinkWrapper);
    sectionContentLinkWrapper.appendChild(sectionContentLink);
    sectionContentLink.setAttribute("href", itemUrl);

    const title = document.title;
    if (title.includes("Публикации FM Interiors")) {
        sectionContentLink.setAttribute("target", "_blank"); // Атрибут "открыть страницу в новой вкладке".
    }

    sectionContentLink.appendChild(sectionContentLinkInner);
    sectionContentLinkInner.appendChild(sectionContentImageWrapper);
    sectionContentImageWrapper.appendChild(sectionContentImg);
    sectionContentImg.setAttribute("src", itemImgUrl);
    sectionContentLinkInner.appendChild(sectionContentTextWrapper);
    sectionContentTextWrapper.appendChild(sectionContentText);
    sectionContentText.textContent = itemText;
}

function deleteAllContent (parent) {
    let contentItems = document.querySelectorAll(".section-content__item");
    if (contentItems.length > 0) {
        contentItems.forEach((element) => {
            parent.removeChild(element);
        })
    }
}
/* добавление элемента на страницу [end] */


