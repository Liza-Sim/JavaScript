let indexActive;
function crudApplication() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    let listOfUsers = JSON.parse(localStorage.getItem('listOfUsers')) || users ;
    let parent = document.getElementById('body');
    const buttonAddParent = createElement('div', {id: 'buttonAddParent' }, null, null, main);
    const buttonAdd = createElement('button', { className: 'button', id: 'buttonAdd', type: 'button'}, { click: handlerAdd }, 'Add', buttonAddParent);
    const userList = createElement('div', { className: 'userList', id: 'main' }, null, null, main);
    for (let i = 0; i < listOfUsers.length; i++) {
        const elem = createElement('div', { id: 'user' + [i], className: 'divUser' }, null, listOfUsers[i].name + ' / ' + listOfUsers[i].number, userList);
        const buttonView = createElement('button', { className: 'button', id: 'buttonView', type: 'button', date_userView : i }, { click: handlerView }, 'View', elem);
        const buttonEdit = createElement('button', { className: 'button', id: 'buttonEdit', type: 'button', date_userEdit: i }, { click: handlerEdit }, 'Edit', elem);
        const buttonRemove = createElement('button', { className: 'button', id: 'buttonRemove', type: 'button', date_userRemove : i }, { click: handlerRemove }, 'Remove', elem);   
    }
    localStorage.setItem('listOfUsers', JSON.stringify(listOfUsers));
}
function handlerAdd() {
    cleanOut();
    const parent = document.getElementById('buttonAddParent');
    const form = document.getElementById('form');

    let openFormAdd = form.classList.contains('openFormAdd');
    if (openFormAdd) {
        form.classList.toggle('hidden')
        form.classList.remove('openFormAdd')
    } else {
        form.removeAttribute('class');
        parent.appendChild(form);
        let openForm = form.classList.contains('hidden');
        if (openForm) {
            form.classList.remove('hidden')
        }
        form.classList.add('openFormAdd');
        // form.classList.toggle('hidden');
        const legend = document.getElementById('legend').innerHTML = 'Add user';
        document.getElementById('buttonSave').removeEventListener('click', editUser, false);
        let buttonSave = document.getElementById('buttonSave').addEventListener('click', addNewUser);
    }
    
}
function addNewUser() {
    let edit = false;
    const name = varificationName();
    const password = varificationPassword();
    const age = varificationAge();
    const mail = varificationMail();
    const tel = varificationTel();
    const card = varificationCard();
    if (name && password && age && mail && tel && card) {
        let userObj = {
            name: name,
            password: password,
            age: age,
            email: mail,
            number: tel,
            card: card,
        }
        let arrUsers = JSON.parse(localStorage.getItem('listOfUsers'));
        arrUsers.push(userObj);
        localStorage.setItem('listOfUsers', JSON.stringify(arrUsers));
        const parent = document.body;
        parent.appendChild(form);
        form.classList.toggle('hidden');
        const main = document.getElementById('main').innerHTML = '';
        crudApplication()
    }
}
function handlerView(event) {
    const userIndex = event.target.getAttribute('date_userView');
    const userList = JSON.parse(localStorage.getItem('listOfUsers'));
    const parent = document.getElementById(`user${userIndex}`);
    if (document.getElementById(`information${userIndex}`)) {
        document.getElementById(`information${userIndex}`).remove();
    } else {
        const userInform = createElement('div', { id: `information${userIndex}`, className: `information${userIndex}` }, null, null, parent);
        const user = userList[userIndex];
        for (let key in user) {
            const elem = createElement('p', { id: 'user' + userIndex }, null, `${key} - ${user[key]}`, userInform);
        }
    } 
}
function handlerEdit(event) {
    cleanOut();
    const body = document.body;
    const userIndex = event.target.getAttribute('date_userEdit');
    const userList = JSON.parse(localStorage.getItem('listOfUsers'));
    const user = userList[userIndex];
    const parent = document.getElementById(`user${userIndex}`);
    const form = document.getElementById('form');
    let openFormAdd = form.classList.contains('hidden');
    if (openFormAdd) {
        form.classList.remove('hidden')
    }
    let openForm = form.classList.contains(`openForm${userIndex}`);
    if (openForm) {
        form.classList.add('hidden')
        body.appendChild(form);
        form.classList.remove(`openForm${userIndex}`)
    } else {
        form.removeAttribute('class');
        const formElements = document.forms[0].elements;
        formElements.name.value = user.name;
        formElements.password.value = user.password;
        formElements.age.value = user.age;
        formElements.email.value = user.email;
        formElements.tel.value = user.number;
        formElements.card.value = user.card;
        indexActive = userIndex;
        parent.appendChild(form);
        form.classList.add(`openForm${userIndex}`);
        form.classList.remove('hidden');
        const legend = document.getElementById('legend').innerHTML = 'Edit user';
        document.getElementById('buttonSave').removeEventListener('click', addNewUser, false);
        const buttonSave = document.getElementById('buttonSave').addEventListener('click', editUser);
    }   
}
function editUser() {
    const name = varificationName();
    const password = varificationPassword();
    const age = varificationAge();
    const mail = varificationMail();
    const tel = varificationTel();
    const card = varificationCard();
    if (name && password && age && mail && tel && card) {
        const userList = JSON.parse(localStorage.getItem('listOfUsers'));
        const user = userList[indexActive];
        if (name) {
            user.name = name;
        }
        if (password) {
            user.password = password;
        }
        if (age) {
            user.age = age;
        }
        if (mail) {
            user.email = mail;
        }
        if (tel) {
            user.number = tel;
        }
        if (card) {
            user.card = card;
        }
        localStorage.setItem('listOfUsers', JSON.stringify(userList));
        const parent = document.body;
        parent.appendChild(form);
        if (document.getElementsByClassName('hidden')) {
            form.classList.toggle('hidden');
        }
        const main = document.getElementById('main').innerHTML = '';
        crudApplication();
    }
}
function handlerRemove(event) {
    indexActive = event.target.getAttribute('date_userRemove');
    document.getElementById('modal').classList.toggle('hidden');
    const closeButton = document.getElementsByClassName('close-button');
    closeButton[0].addEventListener('click', closeModal);
    document.getElementById('no_delete').addEventListener('click', closeModal);
    let buttonDelete = document.getElementById('yes_delete').addEventListener('click', deleteUser);
}
function deleteUser() {
    let body = document.body;
    body.appendChild(form)
    form.classList.add('hidden');
    let arrUsers = JSON.parse(localStorage.getItem('listOfUsers'));
    arrUsers.splice(indexActive, 1);
    localStorage.setItem('listOfUsers', JSON.stringify(arrUsers));
    const parent = document.getElementById(`user${indexActive}`);
    parent.innerHTML = '';
    closeModal();
    crudApplication();
}
function closeModal() {
    let modal = document.getElementById('modal').classList.toggle('hidden');
}
function cleanOut() {
    const formElements = document.forms[0].elements;
    formElements.name.value = '';
    formElements.password.value = '';
    formElements.age.value = '';
    formElements.email.value = '';
    formElements.tel.value = '';
    formElements.card.value = '';
    if (document.getElementsByClassName('red')) {
        let redArr = document.getElementsByClassName('red');
        for (let i = 0; i < redArr.length; i++) {
            redArr[i].classList.toggle('red');
        }
    }
    let spanArr = ['name', 'password', 'age', 'email', 'tel', 'card']
    for (let i = 0; i < spanArr.length; i++) {
        if (document.getElementById(`span${spanArr[i]}`)) {
            let span = document.getElementById(`span${spanArr[i]}`);
            span.remove();
        }
    }
}
crudApplication();
