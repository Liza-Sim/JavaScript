const urlPeople = 'https://swapi.dev/api/people';
const urlPlanets = 'https://swapi.dev/api/planets';
const urlVehicles = 'https://swapi.dev/api/vehicles';
document.getElementById('people').addEventListener('click', () => showList(urlPeople));
document.getElementById('planets').addEventListener('click', () => showList(urlPlanets));
document.getElementById('vehicles').addEventListener('click', () => showList(urlVehicles));

function showList(url) {
    if (document.getElementById('btnNext')) {
       document.getElementById('btnNext').remove(); 
    }
    let listDiv = document.getElementById('list');
    listDiv.innerHTML = '';
    let informDiv = document.getElementById('detail');
    informDiv.innerHTML = '';
    let btnNext = document.getElementById('btnNext');
    let urlNext;
    let index = 0;
    axios.get(url)
        .then(result => {
            urlNext = result.data.next;
            let list = result.data.results;
            createElement('h3', {id: 'title'}, null, 'List:', listDiv);
            for (let key in list) {
                index++;
                let str = list[key].url;
                let patternUrl = /\d{1,3}/;
                let urlIndex= str.match(patternUrl);
                createElement('li', { date_index: urlIndex}, { click: infomation }, list[key].name, listDiv);
            };
            let button = document.getElementById('listAndButton');
            let btnNext = createElement('button', { type: 'button', id: 'btnNext'}, { click: nextList },'add more' , button);
        }
    )
    function nextList() {
        axios.get(urlNext)
            .then(resultNext => {
                let listNext = resultNext.data.results; 
                for (let key in listNext) {
                    index++;
                    let str = listNext[key].url;
                    let patternUrl = /\d{1,3}/;
                    let urlIndex= str.match(patternUrl);
                    createElement('li', { date_index: urlIndex}, { click: infomation }, listNext[key].name, listDiv);
                }
                urlNext = resultNext.data.next;
                if (index >= resultNext.data.count) {
                    document.getElementById('btnNext').remove();
                }
        }) 
    }
    function infomation(event) {
        const indexInformation = event.target.getAttribute('date_index'); 
        axios.get(`${url}/${indexInformation}`)
            .then(inform => {
                let detail = document.getElementById('detail');
                detail.innerHTML = '';
                let pattern = /https/;
                createElement('h3', {id: 'title'}, null, `Information`, detail);
                for (let key in inform.data) {
                    let str = String(inform.data[key]);
                    if (!str.match(pattern) && !Array.isArray(inform.data[key]) && key !== 'created' && key !== 'edited') {
                        createElement('li', null, null, `${key} : ${inform.data[key]}`, detail);
                    }
                }

            }
        )
    }
    
}