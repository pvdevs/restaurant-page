import './style.css';
import home from './home';
import menu from './menu';
import about from './about';
import nav from './nav';
import findMe from './footer';

const content = document.getElementById('content');

createPage(content,home(), 'Home'); // This starts the application with the Homepage

function getNavEvents() {
    const navButtons = document.querySelectorAll('.nav-tabs');
    navButtons.forEach(tab => tab.addEventListener('click', () => switchPage(tab.textContent)));
}

function getCTA() {
    const cta = document.querySelector('.call-to-action');
    cta.addEventListener('click', e => createPage(content, menu(), 'Menu'));
}

function switchPage(tab){
    switch (tab) {
        case 'Home':
            createPage(content, home(), tab);
            break;
        case 'Menu':
            createPage(content, menu(), tab);
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
    if(tab === 'Home') getCTA();
    parent.appendChild(findMe());
}

function removeAllChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
