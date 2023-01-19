function sliderAvengers() {
    const imgArr = [`./img/1.png`, `./img/2.png`, `./img/3.png`, `./img/4.png`, `./img/5.png`, `./img/6.png`, `./img/7.png`];
    let indexImg = 0;
    let slider = setInterval(newImgSlider, 3000);
    document.getElementById('buttonLeft').addEventListener('click', turnBack);
    document.getElementById('buttonRight').addEventListener('click', forward);

    function newImgSlider() {
        indexImg++;
        if (indexImg > (imgArr.length - 1)) {
            indexImg = 0;
        }
        document.getElementById('imgSlider').setAttribute('src', imgArr[indexImg]);
    }

    function turnBack() {
        clearInterval(slider);
        indexImg = indexImg - 1;
        if (indexImg < 0) {
            indexImg = imgArr.length-1;
        }
        document.getElementById('imgSlider').setAttribute('src', imgArr[indexImg]);
        slider = setInterval(newImgSlider, 3000);
    }

    function forward() {
        clearInterval(slider);
        indexImg = indexImg + 1;
        if (indexImg > (imgArr.length - 1)) {
            indexImg = 0;
        }
        document.getElementById('imgSlider').setAttribute('src', imgArr[indexImg]);
        slider = setInterval(newImgSlider, 3000);
    } 
}

sliderAvengers();


