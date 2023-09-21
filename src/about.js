import Logo from './img/logo.svg'

function about() {
    const page = document.createElement('div');
    const quoteContainer = document.createElement('div');
    const quote = document.createElement('p');
    const author = document.createElement('p');
    const logo = new Image();

    page.classList.add('page');
    quoteContainer.classList.add('quote-container')
    logo.classList.add('logo');
    quote.classList.add('quote-text');
    author.classList.add('author');

    logo.src = Logo;
    quote.textContent = '“Lorem ipsum dolor sit amet consectetur. Libero quis tristique faucibus arcu quam ut ut ipsum. Scelerisque amet ac dictumst lectus id massa diam velit diam. Tristique fusce quam tristique commodo rhoncus eleifend neque. Amet netus dignissim morbi eu a. Pellentesque congue vitae ac ornare tincidunt ullamcorper sit faucibus.”';
    author.textContent = '-Phabin';

    quoteContainer.append(quote,author);
    page.append(logo,quoteContainer);

    return page;
}

export default about;