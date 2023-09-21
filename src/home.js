import Logo from './img/logo.svg';

function home() {
    const page = document.createElement('div');
    const button = document.createElement('button');
    const logo = new Image();

    page.classList.add('page');
    logo.classList.add('logo');
    button.classList.add('call-to-action');

    logo.src = Logo;
    button.textContent = 'See the menu';

    page.append(logo, button);

    return page
}

export default home;