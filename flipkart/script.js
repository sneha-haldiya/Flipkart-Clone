/*for banner  */
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    }
    else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 5000);
function reloadSlider() {
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkleft + 'px';
}

/* for subgroup */

const productContainers = [...document.querySelectorAll('.slide3')];
const nxtBtn = [...document.querySelectorAll('#next1')];
const prevBtn = [...document.querySelectorAll('#prev1')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
