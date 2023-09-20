
function nav(currentPage){
    const topNav = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const aboutTab = document.createElement('button');

    topNav.classList.add('top-nav');
    homeTab.classList.add('nav-tabs');
    menuTab.classList.add('nav-tabs');
    aboutTab.classList.add('nav-tabs');

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    aboutTab.textContent = 'About';

    switch (currentPage) {
        case 'Home':
            homeTab.classList.add('selected');
            menuTab.classList.remove('selected');
            aboutTab.classList.remove('selected');
            break;
        case 'Menu':
            menuTab.classList.add('selected');
            homeTab.classList.remove('selected');
            aboutTab.classList.remove('selected');
            break
        case 'About':
            aboutTab.classList.add('selected');
            homeTab.classList.remove('selected');
            menuTab.classList.remove('selected');
            break;
        default:
            break;
    }

    topNav.append(homeTab,menuTab,aboutTab);
    return topNav;
}

export default nav;