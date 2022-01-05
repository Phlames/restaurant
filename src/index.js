import renderPage from './modules/page';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';


const initialize = (() => {
    renderPage();
    renderHome();
})();


const homeTab = document.getElementById('homeBtn');
const menuTab = document.getElementById('menuBtn');
const contactTab = document.getElementById('contactBtn');

homeTab.addEventListener('click', renderHome);
menuTab.addEventListener('click', renderMenu);
contactTab.addEventListener('click', renderContact);