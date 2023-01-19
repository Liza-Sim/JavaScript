function varificationName() {
    const str = document.forms[0].elements.name.value;
    const pattern = /([a-zA-Z]{1,}\s[a-zA-Z]{1,}|[a-zA-Z]{1,})/;
    let value = varification(str, pattern, 'name');
    return value;
}
function varificationPassword() {
    const str = document.forms[0].elements.password.value;
    const pattern =/\w{1,}/;
    let value = varification(str, pattern, 'password');
    return value;
}
function varificationAge() {
    const str = document.forms[0].elements.age.value;
    const pattern =/\d{1,3}/;
    let value = varification(str, pattern, 'age');
    return value;
}
function varificationMail() {
    const str = document.forms[0].elements.email.value;
    const pattern =/\w{1,}@\w{1,}.\w{1,}/;
    let value = varification(str, pattern, 'email');
    return value;
}
function varificationTel() {
    const str = document.forms[0].elements.tel.value;
    const pattern =/\d{10}/;
    let value = varification(str, pattern, 'tel');
    return value; 
}
function varificationCard() {
    const str = document.forms[0].elements.card.value;
    const pattern =/(\d{16})|(\d{4} \d{4} \d{4} \d{4})|(\d{4}-\d{4}-\d{4}-\d{4})/;
    let value = varification(str, pattern, 'card');
    return value; 
}
function varification(str, pattern, name) {
    const result = str.match(pattern);
    if (result) {
        const input = document.getElementsByName(name);
        let classRed = input[0].classList.contains("red");
        if (classRed) {
            input[0].classList.remove('red');
        }
        if (document.getElementById(`span${name}`)) {
            let span = document.getElementById(`span${name}`);
            span.remove();
        }
        return result[0];
    } else {
            error(name);
            return false;
    }
}
function error(className) {
    const parent = document.getElementById(className);
    const input = document.getElementsByName(className);
    let classRed = input[0].classList.contains("red");
    if (!classRed) {
        input[0].classList.add('red');
    }
    if (document.getElementById(`span${className}`)) {
        let span = document.getElementById(`span${className}`);
        span.remove();
    }
    const userInform = createElement('span', { id: `span${className}`, className: 'red'}, null, `error`, parent);
}