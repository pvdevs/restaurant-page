import pageLoad from './page-load'
import menu from './menu'

const content = document.getElementById('content');
content.appendChild(menu());

console.log('Works');