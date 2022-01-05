const createHeader = (id, text) => {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const headerText = document.createElement('h1');
    headerText.textContent = text;
    header.appendChild(headerText);
    return header;
}

const createButton = (id, text) => {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.classList.add('navBtn');
    const buttonText = document.createElement('span');
    buttonText.textContent = text;
    button.appendChild(buttonText);
    return button;
}

const createNavBar = (id) => {
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', id);

    const homeBtn = createButton ('homeBtn', 'Home');
    const menuBtn = createButton ('menuBtn', 'Menu');
    const contactBtn = createButton ('contactBtn', 'Contact');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
}

const createMain = (id) => {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    const inner = document.createElement('div');
    inner.setAttribute('id', 'inner');
    main.appendChild(inner);

    return main;
}

const createFooter = (id, text) => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const footerText = document.createElement('span');
    footerText.textContent = text;
    footer.appendChild(footerText);
    return footer;
}

const renderPage = () => {
    const content = document.getElementById('content');
    const header = createHeader('header', 'My Favourite Restaurant');
    const navBar = createNavBar('navBar');
    const main = createMain('main');
    const footer = createFooter('footer', 'Made by Phlames');

    content.appendChild(header);
    content.appendChild(navBar);
    content.appendChild(main);
    content.appendChild(footer);
}

export default renderPage;


