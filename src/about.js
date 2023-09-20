function about() {
    const textContainer = document.createElement('div');
    const text = document.createElement('p');
    const logo = document.createElement('img');

    logo.setAttribute('src', '../src/img/logo.svg');
    text.textContent = 'Testing testin test';

    return text;
}

export default about;