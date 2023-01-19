let yearOfBirth = Number(prompt('What year/time you were born?'));
if (yearOfBirth) {
    yearOfBirth = `Your year of birth is ${yearOfBirth}`;
} else {
    alert('Too bad you didn\'t want to enter your year of birth!');
    yearOfBirth = 'There is no information about the date of birth';
}

let city = prompt(' In which city you are living?');
if (city === 'Kyiv') {
    city = 'You live in the capital of Ukraine';
} else if (city === 'USA') {
    city = 'You live in the US capital!';
} else if (city === 'London') {
    city = 'You live in the capital of Great Britain!';
} else if (!city) {
    alert('It is a pity that you did not want to enter your city!');
    city = 'There is no information about the city';
} else {
    city = `You live in the city of ${city}`;
}

let kindOfSport = prompt('What kind of sport do you like?');
if (kindOfSport === 'football') {
    kindOfSport = 'Cool! Do you want to be like Cristiano Ronaldo?';
} else if (kindOfSport === 'volleyball') {
    kindOfSport = 'Cool! Do you want to be like Paola Egonu?';
} else if (kindOfSport === 'basketball') {
    kindOfSport = 'Cool! Do you want to be like Michael Jordan?';
} else if (!kindOfSport) {
    alert('Too bad you didn\'t want to introduce your favorite sport!');
    kindOfSport = 'There is no information about the sport';
} else {
    kindOfSport = `Your favorite sport is ${kindOfSport}`;
}

alert(`Hi! ${yearOfBirth} ${city} ${kindOfSport}`);

