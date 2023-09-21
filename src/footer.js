import Github from './img/github-logo.png';

function findMe(){
    const container = document.createElement('div');
    const text = document.createElement('p');
    const link = document.createElement('a');
    const githubLogo = new Image();

    container.classList.add('find-me');
    text.classList.add('me-text');
    githubLogo.classList.add('github-logo');

    githubLogo.src = Github;
    text.textContent = ' Built and designed by pvdevs';
    link.setAttribute('href', 'https://github.com/pvdevs');
    link.setAttribute('target', '_blank');

    link.appendChild(githubLogo);
    container.append(text,link);
    
    return container;
}

export default findMe;