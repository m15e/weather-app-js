// RUBRIC

/*

1. search location

2. toggle temp

conversion C to F ; F to C


*/


const key = '0028ea367b25a551e7348f7875810282';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

//
targ = 'London'

//console.log(url)


async function getWeather(l) {
  let fetchURL = url + `${l}&appid=${key}`
  let response = await fetch(fetchURL)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let res = await response.json();
    console.log(typeof res)
  }
}

const getit = document.querySelector('#getWeather')

getit.onclick = function () {
  const locQuery = document.querySelector('#locQuery').value
  if (locQuery.length > 0) {
    getWeather(locQuery).catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });
  } else {
    let inEl = document.querySelector('#locQuery')
    inEl.setAttribute('placeholder', 'Try another location')
  }
}

