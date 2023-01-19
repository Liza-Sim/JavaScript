const button = document.getElementById('button').addEventListener('click', saveInformation);
function saveInformation() {
    const name = document.forms[0].elements.name.value;
    const surname = document.forms[0].elements.surname.value;
    const date = document.forms[0].elements.date.value;
    const gender = document.forms[0].elements.gender.value;
    const city = document.forms[0].elements.city.value;
    const description = document.forms[0].elements.description.value;
    const selectedLanguages = [];
    for (let i = 0; i < document.forms[0].elements.languages.length; i++) {
        if (document.forms[0].elements.languages[i].checked) {
            selectedLanguages.push(document.forms[0].elements.languages[i].value)
        }
    }
    document.getElementById('form').innerHTML = '';
    document.write('Ім\'я: ', name, '<br/>');
    document.write('Прізвище: ', surname, '<br/>');
    document.write('Дата народження: ', date, '<br/>');
    document.write('Стать: ', gender, '<br/>');
    document.write('Місто: ', city, '<br/>');
    document.write('Адреса: ', description, '<br/>');
    document.write('Мова: ', selectedLanguages, '<br/>');

}