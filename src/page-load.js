import menu from './menu';

const content = document.getElementById('content');

function pageLoad() {
    content.appendChild(menu());


}

export default pageLoad;

