const init = () => {
    const mainContent = document.getElementById('main');
    const innerContent = document.getElementById('inner');
    mainContent.removeChild(innerContent);

    const body = document.createElement('div');
        body.setAttribute('id', 'inner');
        mainContent.appendChild(body);
}

const createMenuItem = (src, alt, name, price, description) => {
    const item = document.createElement('div');
        item.classList.add('item');
    const img = document.createElement('img');
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);
    const cardDiv = document.createElement('div');
        cardDiv.classList.add('card-description')
    const itemName = document.createElement('h2');
        itemName.textContent = name;
    const itemPrice = document.createElement('h2');
        itemPrice.textContent = price;
    const itemDescription = document.createElement('p');
        itemDescription.textContent = description;

    item.appendChild(img);
    item.appendChild(cardDiv)
    cardDiv.appendChild(itemName);
    cardDiv.appendChild(itemPrice);
    cardDiv.appendChild(itemDescription);
    return item;
}

const createMenu = () => {
    const body = document.getElementById('inner');
    body.classList.add('grid-layout');

    const iceCream = createMenuItem('../images/pexels-photo-1625235.jpeg', 'Picture of Ice Cream', 'Ice Cream', '$10', 'Delicious Ice Cream');
    body.appendChild(iceCream);

    const soup = createMenuItem('../images/pexels-photo-3702434.jpeg', 'Picture of Soup', 'Soup', '$6', 'Delicious Soup');
    body.appendChild(soup);

    const fries = createMenuItem('../images/pexels-photo-1583884.jpeg', 'Picture of Fries', 'Fries', '$7', 'Delicious Fries');
    body.appendChild(fries);

    const steak = createMenuItem('../images/pexels-photo-6513591.jpeg', 'Picture of Steak', 'Steak', '$21', 'Delicious Steak');
    body.appendChild(steak);

    const burger = createMenuItem('../images/pexels-photo-4809149.jpeg', 'Picture of Burger', 'Burger', '$11', 'Delicious Burger');
    body.appendChild(burger);
}


const activeBtn = () => {
    const allButtons = document.querySelectorAll('.navBtn');
    allButtons.forEach(button => {
        button.classList.remove('activeBtn')
    });

    const button = document.getElementById('menuBtn');
    button.classList.add('activeBtn');
}

const renderMenu = () => {
    init();
    createMenu();
    activeBtn();
}

export default renderMenu;