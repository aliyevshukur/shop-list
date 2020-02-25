const list = document.querySelector('.tabs'),
    texts = Array.from(document.querySelector('.tabs-content').children),
    tabs = Array.from(document.querySelector('.tabs').children);
let currentIndex = null;

hideText();
texts[0].hidden = false;

list.addEventListener('click', (e) => {
    hideText();
    removeActive();

    currentIndex = tabs.indexOf(e.target);
    texts[currentIndex].hidden = false;
    tabs[currentIndex].classList.add('active');

});


function hideText() {
    for (let text of texts) {
        text.hidden = true;
    }
}

function removeActive() {
    for (let nav of tabs) {
        nav.classList.remove('active');
    }
}