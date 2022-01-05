const init = () => {
    const mainContent = document.getElementById('main');
    const innerContent = document.getElementById('inner');
    mainContent.removeChild(innerContent);

    const body = document.createElement('div');
        body.setAttribute('id', 'inner');
        mainContent.appendChild(body);
}

const covid = () => {
    const body = document.getElementById('inner');
    const covid = document.createElement('div');
        covid.classList.add('covid');
    const covidHeader = document.createElement('h2');
        covidHeader.setAttribute('id', 'covidHeader');
        covidHeader.textContent = 'Covid-19 Restrictions';
    const covidText = document.createElement('p');
        covidText.setAttribute('id', 'covidText');
        covidText.textContent = 'Due to the ongoing pandemic, indoor dining is temporarily closed. We are still offering our pick-up and drive-thru services. Masks must be worn when inside the building.';
    body.appendChild(covid);
    covid.appendChild(covidHeader);
    covid.appendChild(covidText);
}

const aboutSection = () => {
    const body = document.getElementById('inner');
    const about = document.createElement('div');
        about.classList.add('about');
    const aboutHeader = document.createElement('h2');
        aboutHeader.setAttribute('id', 'aboutHeader');
        aboutHeader.textContent = 'About';
    const aboutText = document.createElement('p');
        aboutText.setAttribute('id', 'aboutText');
        aboutText.textContent = 'This restaurant contains all the best foods from lorem ipsum.';
    body.appendChild(about);
    about.appendChild(aboutHeader);
    about.appendChild(aboutText);
}

const activeBtn = () => {
    const allButtons = document.querySelectorAll('.navBtn');
    allButtons.forEach(button => {
        button.classList.remove('activeBtn')
    });

    const button = document.getElementById('homeBtn');
    button.classList.add('activeBtn');
}

const renderHome = () => {
    init();
    covid();
    aboutSection();
    activeBtn();
}

export default renderHome;