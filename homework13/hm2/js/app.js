// На странице есть две кнопки.При клике на первую кнопку просим пользователя ввести в prompt ссылку,
// при клике на вторую - переадресовывается на другой сайт(по ранее введенной ссылке).
// Реализовать проверку на http / https.Если протокол не указан - добавляем

'use strict';
const buttonGetInformation = document.getElementById('getInformation');
const buttonGoToSite = document.getElementById('goToSite');
let link;
buttonGetInformation.addEventListener('click', getInformation);
buttonGoToSite.addEventListener('click', goToSite);

function getInformation() {
    link = prompt('Введіть посилання!');
    if (!link.trim() || !isNaN(link)) {
        getInformation();
    }
    if (!/^https?:/.test(link) || !/^https?:/.test(link) ) {
        link = 'https://' + link;
    }
    return link;
}
function goToSite() {
    console.log(link);
    if (link === undefined) {
        alert('Введіть спочатку посилання!');
    } else {
        location.href = link;  
    }
}


