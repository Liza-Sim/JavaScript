// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вывести изображение из этой папки полученное случайным образом(Math.random)

let button = document.getElementsByClassName('button');
button[0].addEventListener('click', randomImg);
let parent = document.getElementById('body');

function randomImg() {
    let arr = [1,2,3,4,5,6,7,8,9];
    arr = arr[Math.floor(Math.random() * arr.length)];
    let randomImg=document.createElement("img");
    randomImg.setAttribute("src","img/"+arr+".jpeg");
    parent.appendChild(randomImg);
}
