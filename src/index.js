import getWeather from './getWeather';
import animate from './aniweather';

// constants

const key = '0028ea367b25a551e7348f7875810282';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const weatherContainers = document.querySelectorAll('.weather-container');

// hides weather containers

weatherContainers.forEach(wc => {
  wc.classList.add('d-none');
});

// temp swap functionality

const tempSwap = document.querySelector('input[type="checkbox"]');

tempSwap.onclick = function () {
  const tempEl = document.querySelector('.temp');
  const temp = parseFloat(tempEl.innerHTML.split(' ')[0]);

  const tempType = (el) => {
    const res = el.innerHTML.toString().split('').splice(-2)[0];
    return res;
  };

  if (tempType(tempEl) === 'F') {
    const tempStr = ((temp - 32) * (5 / 9)).toString().split('.')[0];
    tempEl.innerHTML = `${tempStr} C°`;
  } else if (tempType(tempEl) === 'C') {
    const tempStr = (temp * (9 / 5) + 32).toString().split('.')[0];
    tempEl.innerHTML = `${tempStr} F°`;
  }
};

// get query on button click
const getit = document.querySelector('#getWeather');

getit.onclick = function () {
  const locQuery = document.querySelector('#locQuery').value;
  if (locQuery.length > 0) {
    getWeather(url, locQuery, key).catch(e => {
      alert(`There has been a problem with your fetch operation: ${e.message}`);
    });
    document.querySelector('#locQuery').value = '';
  } else {
    const inEl = document.querySelector('#locQuery');
    inEl.setAttribute('placeholder', 'Try another location');
    inEl.value = '';
  }
};

// get query on enter

document.querySelector('.input-container').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getit.click();
  }
});

document.addEventListener('DOMContentLoaded', animate());

// startup behaviour - focuses input on load

document.querySelector('#locQuery').focus();
