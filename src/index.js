import home from './home';
import about from './about';
import nav from './nav';

const content = document.getElementById('content');

createPage(content,home(), 'Home'); // This starts the application with the Homepage

function getNavEvents() {
    const navButtons = document.querySelectorAll('.nav-tabs');

    navButtons.forEach(tab => {
        tab.addEventListener('click', e => switchPage(tab.textContent));
    });
}

function switchPage(tab){
    switch (tab) {
        case 'Home':
            createPage(content, home(), tab);
            break;
        case 'About':
            createPage(content, about(), tab);
        default:
            break;
    }
}

function createPage(parent, newPage, tab) {
    removeAllChildren(parent);
    parent.appendChild(nav(tab));
    parent.appendChild(newPage);
    getNavEvents();
}

function removeAllChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
