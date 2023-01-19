function showTime() {
    const now = new Date;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const sec = now.getSeconds();
    let hoursSecondDigit = hours % 10;
    let hoursFirstDigit = (hours - hoursSecondDigit) / 10;
    let minutesSecondDigit = minutes % 10;
    let minutesFirstDigit = (minutes - minutesSecondDigit) / 10;
    let secSecondDigit = sec % 10;
    let secFirstDigit = (sec - secSecondDigit) / 10;
    const body = document.body;
    createElement('img', { id: 'hoursFist', src: `./img/${hoursFirstDigit}.png` }, null, null, body);
    createElement('img', { id: 'hoursSecond', src: `./img/${hoursSecondDigit}.png` }, null, null, body);
    createElement('img', { id: 'colon', src: `./img/colon.png` }, null, null, body);
    createElement('img', { id: 'minutesFist', src: `./img/${minutesFirstDigit}.png` }, null, null, body);
    createElement('img', { id: 'minutesSecond', src: `./img/${minutesSecondDigit}.png` }, null, null, body);
    createElement('img', { id: 'colon', src: `./img/colon.png` }, null, null, body);
    createElement('img', { id: 'secFist', src: `./img/${secFirstDigit}.png` }, null, null, body);
    createElement('img', { id: 'secSecond', src: `./img/${secSecondDigit}.png` }, null, null, body);
    let secInterval = setInterval(showSec, 1000);
    function showSec() {
        let secFist = document.getElementById('secFist');
        let secSecond = document.getElementById('secSecond');
        secSecondDigit = secSecondDigit + 1;
        if (secSecondDigit > 9) {
            secSecondDigit = 0;
            secFirstDigit = secFirstDigit + 1;
            secFist.setAttribute('src', `./img/${secFirstDigit}.png`);
            if (secFirstDigit > 5) {
                secFirstDigit = 0;
                secFist.setAttribute('src', `./img/${secFirstDigit}.png`);
                showMinutes();
            }
        }
        secSecond.setAttribute('src', `./img/${secSecondDigit}.png`)  
    }
    function showMinutes() {
        let minutesSecond = document.getElementById('minutesSecond');
        let minutesFist = document.getElementById('minutesFist');
        minutesSecondDigit = minutesSecondDigit + 1;
        minutesSecond.setAttribute('src', `./img/${minutesSecondDigit}.png`);
        if (minutesSecondDigit > 9) {
            minutesSecondDigit = 0;
            minutesSecond.setAttribute('src', `./img/${minutesSecondDigit}.png`);
            minutesFirstDigit = minutesFirstDigit + 1;
            minutesFist.setAttribute('src', `./img/${minutesFirstDigit}.png`);
        }
        if (minutesFirstDigit > 5) {
            minutesFirstDigit = 0;
            minutesFist.setAttribute('src', `./img/${minutesFirstDigit}.png`);
            showHours();
        }
    }
    function showHours() {
        let hoursSecond = document.getElementById('hoursSecond');
        let hoursFirst = document.getElementById('hoursFist');
        hoursSecondDigit = hoursSecondDigit + 1;
        hoursSecond.setAttribute('src', `./img/${hoursSecondDigit}.png`);
        if (hoursSecondDigit > 9) {
            hoursSecondDigit = 0;
            hoursSecond.setAttribute('src', `./img/${hoursSecondDigit}.png`);
            hoursFirstDigit = hoursFirstDigit + 1;
            hoursFirst.setAttribute('src', `./img/${hoursFirstDigit}.png`);
        }
        if (hoursFirstDigit == 2 && hoursSecondDigit == 4) {
        hoursFirstDigit = 0;
        hoursFirst.setAttribute('src', `./img/${hoursFirstDigit}.png`);
        hoursSecondDigit = 0;
        hoursSecond.setAttribute('src', `./img/${hoursSecondDigit}.png`);
    }
    }  
}
showTime()

