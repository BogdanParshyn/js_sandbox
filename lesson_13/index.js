"use strict";

import allHTMLs from './*'

function main() {
    const pathname = window.location.pathname;
    let targetId;

    const links = document.getElementsByClassName('page');

    for(let i = 0; i < links.length; i += 1) {
        page[i].style.displey = 'none';     
        };
    

    switch (pathname) {
        case '/contact':
            targetId = 'contact';
            break;
        case '/':
        default:
            targetId = 'main';
            break;
    }

    const page = document.getElementById(targetId);

    if (page.children.length > 0) {

    } else {
        fetch('/${targetId}.html')
            .then(res => res.text())
            .then(markup => page.innerHTML = markup)
            .catch(() => page.innerHTML = 'Unable to load page')
            .then(() => page.style.display = 'block');
    }

    page.style.displey = 'block';
}

function mutatelinks() {
    const links = document.getElementsByTagName('a');

    for(let i = 0; i < links.length; i += 1) {
        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            window.history.pushState({}, null, links[i].href);
            main();
        });
    }
}

main();
mutatelinks();
//window.location.pathname
//window.history.pushState({}, null, '/contact')