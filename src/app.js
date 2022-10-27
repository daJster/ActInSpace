const loadingPage = document.querySelector('.loading-page');

window.scrollBy(0, 20000);

function loadingAnimate(){
    setTimeout( () => {
        Object.keys(loadingPage.children).forEach( (key) => {
            const child = loadingPage.children[key];
            child.classList.add('move');
        });
    }, 500);

    setTimeout(() => {
        loadingPage.classList.remove('isActive');
    }, 1200);
}

loadingAnimate();