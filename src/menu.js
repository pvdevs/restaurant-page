function menu(currentTab){
    const topMenu = document.createElement('div');
    const menuHome = document.createElement('button');
    const menuMenu = document.createElement('button');
    const menuAbout = document.createElement('button');

    menuHome.classList.add('menu-tabs');
    menuMenu.classList.add('menu-tabs');
    menuAbout.classList.add('menu-tabs');

    menuHome.textContent = 'Home';
    menuMenu.textContent = 'Menu';
    menuAbout.textContent = 'About';

    topMenu.append(menuHome, menuMenu, menuAbout);

    return topMenu;
}

export default menu;