let myName = 'Liza';
myName = 'Lena';
console.log(myName);
const userName = 'Liza';


let user;
let superUser;
let activeUserList;
let activeUser;


let number = [1, 2, 3, 4, 5]

let myInformation = {   
    name: 'Liza',
    surname: 'Simonchuk',
    age: 26     
};
console.log(myInformation)

/*
1. false
2. true
3. true
4. false
5. false
6. hi
7. I love js
8. hi
9. error
10. 2
11. 1231
12. 1
13. Nan
14. error
15. error
*/

let world = 'Мир';
let helloWorld = `Привет ${world}`;
console.log(helloWorld);

let switchRole = 'admin';

switch (switchRole) {
    case "user":
        console.log("Hello user!");
        break;
    case "admin":
        console.log("Hello admin!");
        break;
    case "superAdmin":
        console.log("Hello super admin!");
        break;
    case "unauthorizedUser":
        console.log('Hello unauthorized user!');
        break;
    default:
        console.log("default");
        break;
}

let ifRole = 'user'
if (ifRole == 'user') {
    console.log('Hello user!');
} else if (ifRole == 'admin') {
    console.log('Hello admin!');
} else if (ifRole == 'superAdmin') {
    console.log('Hello super admin!');
} else if (ifRole == 'unauthorizedUser') {
    console.log('Hello unauthorized user!');
}


let role = 'superAdmin';
let message = (role == 'user') ? 'Hello user!' :
    (role == 'admin') ? 'Hello admin!' :
    (role == 'superAdmin') ? 'Hello super admin!' :
    (role == 'unauthorizedUser') ? 'Hello unauthorized user!':'Hello!';
console.log( message );

let food = 'celery';
switch (food) {
    case 'asparagus':
    case 'beans':
    case 'beet':
    case 'broccoli':
    case 'cabbage':
    case 'carrot':
    case 'celery':
        console.log('vegetable');
        break;
    case 'apple':
    case 'apricot':
    case 'banana':
    case 'date':
    case 'fig':
    case 'grapefruit':
    case 'grapes':
        console.log('fruit');
        break;
}

