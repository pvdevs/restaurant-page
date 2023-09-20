import pageLoad from './page-load';
import about from './about';
//import {menu, getSelectedTab} from './menu';

const content = document.getElementById('content');


createPage(content,pageLoad());


let selected;

function nav(){
    const topNav = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const aboutTab = document.createElement('button');

    topNav.classList.add('top-menu');
    homeTab.classList.add('menu-tabs');
    menuTab.classList.add('menu-tabs');
    aboutTab.classList.add('menu-tabs');

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    aboutTab.textContent = 'About';

    homeTab.addEventListener('click', e => {
        homeTab.classList.add('selected');
        menuTab.classList.remove('selected');
        aboutTab.classList.remove('selected');
        selected = 'Home';
        switchPage(selected)
    });

    menuTab.addEventListener('click', e => {
        menuTab.classList.add('selected');
        homeTab.classList.remove('selected');
        aboutTab.classList.remove('selected');
        selected = 'Menu';
    })

    aboutTab.addEventListener('click', e => {
        aboutTab.classList.add('selected');
        homeTab.classList.remove('selected');
        menuTab.classList.remove('selected');
        selected = 'About';
        switchPage(selected)
    })

    topNav.append(homeTab,menuTab,aboutTab);
    return topNav;
}

function switchPage(tab){
    switch (tab) {
        case 'Home':
            createPage(content, pageLoad());
            break;
        case 'About':
            createPage(content, about());
        default:
            break;
    }
}

function removeAllChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createPage(parent, newPage) {
    removeAllChildren(parent);
    parent.appendChild(nav());
    parent.appendChild(newPage);
}