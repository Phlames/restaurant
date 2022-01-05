const init = () => {
    const mainContent = document.getElementById('main');
    const innerContent = document.getElementById('inner');
    mainContent.removeChild(innerContent);

    const body = document.createElement('div');
        body.setAttribute('id', 'inner');
        mainContent.appendChild(body);
}

const createContact = () => {
    const body = document.getElementById('inner');
    const contact = document.createElement('div');
        contact.classList.add('contact');
    const contactHeader = document.createElement('h2');
        contactHeader.setAttribute('id', 'contactHeader');
        contactHeader.textContent = 'Contact';
    const contactText = document.createElement('p');
        //need white space: pre in order to separate lines
        contactText.setAttribute('style', 'white-space: pre;');
        contactText.setAttribute('id', 'contactText');
        contactText.textContent = "Please contact us at the following: \r\n";
        contactText.textContent += 'Phone: 403-123-4567 \r\n';
        contactText.textContent += 'Address: 123 Commerce Ave SE \r\n' ;
    body.appendChild(contact);
    contact.appendChild(contactHeader);
    contact.appendChild(contactText);
}
const createForm = () => {
    const body = document.getElementById('inner');
    const formDiv = document.createElement('div');
    formDiv.classList.add('contactForm');
    const formHeader = document.createElement('h1');
        formHeader.setAttribute('id', 'formHeader');
        formHeader.textContent = 'Send us an email!';
            const form = document.createElement('form');
            form.setAttribute('class', 'form');
                const nameForm = document.createElement('label');
                nameForm.textContent = 'Name:';
                form.appendChild(nameForm)
                const nameField = document.createElement('input');
                form.appendChild(nameField);
                const emailForm = document.createElement('label');
                emailForm.textContent = 'Email:';
                form.appendChild(emailForm)
                const emailField = document.createElement('input');
                form.appendChild(emailField);
                const commentForm = document.createElement('label');
                commentForm.textContent = 'comment:';
                form.appendChild(commentForm);
                const commentField = document.createElement('input');
                commentField.setAttribute('id', 'commentField');
                form.appendChild(commentField);
                const submit = document.createElement('button');
                submit.setAttribute('id', 'submitButton');
                submit.textContent = 'Submit';
                form.appendChild(submit);

            formDiv.appendChild(formHeader);
            formDiv.appendChild(form);
            body.appendChild(formDiv);

}




const activeBtn = () => {
    const allButtons = document.querySelectorAll('.navBtn');
    allButtons.forEach(button => {
        button.classList.remove('activeBtn')
    });

    const button = document.getElementById('contactBtn');
    button.classList.add('activeBtn');
}
const renderContact = () => {
    init();
    createContact();
    createForm();
    activeBtn();
}

export default renderContact;