document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    new Dics({
        container: document.querySelectorAll('.b-dics')[0],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[1],
        hideTexts: false,
        textPosition: "bottom"
    });
    new Dics({
        container: document.querySelectorAll('.b-dics')[2],
        hideTexts: false,
        textPosition: "bottom"
    });
}

function objectSceneEvent(idx,selector_id,navld) {
    let dics = document.querySelectorAll('.b-dics')[selector_id];
    let sections = dics.getElementsByClassName('b-dics__section');
    console.log(document.querySelectorAll('.b-dics'));
    let imagesLength = 3;

    updateImages(sections, idx, imagesLength, 'object');
    updateTabStates(navld, idx);
}

function updateImages(sections, idx, imagesLength, sliderType) {
    for (let i = 0; i < imagesLength; i++) {
        let imageContainer = sections[i].getElementsByClassName('b-dics__image-container')[0];
        if (imageContainer) {
            let image = imageContainer.getElementsByClassName('b-dics__image')[0];
            if (image) {
                let imageFolder = getImageFolder(idx, sliderType);
                let imageFileName = getImageFileName(i, sliderType);
                image.src = `https://jiaweizhao123.github.io/ca-gs.github.io/static/images/${imageFolder}/${imageFileName}`;
            }
        }
    }
}

function updateTabStates(navId, activeIdx) {
    let navItems = document.getElementById(navId).getElementsByClassName('nav-item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].children[0].className = (activeIdx === i) ? "nav-link active" : "nav-link";
    }
}

function getImageFolder(idx, sliderType) {
    let folders = ['garden', 'bonsai',  'flowers', 'bicycle', 'stump', 'train', 'treehill','truck',
        'flowers_ocl', 'bicycle_pts', 'flowers_pts', 'garden_pts', 'stump_pts', 'truck_pts'];
    return folders[idx];
}

function getImageFileName(imageIndex, sliderType) {
    let filenames = ['3dgs.png', 'ours.png', 'gt.png'];
    return filenames[imageIndex];
}
