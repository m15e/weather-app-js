// constants

const key = '0028ea367b25a551e7348f7875810282';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
let weatherContainers = document.querySelectorAll('.weather-container')

weatherContainers.forEach(wc => {
  wc.classList.add('d-none')
})

const alterDOM = (res) => {
  // relevant response items
  let place = res['name']
  let temp = res['main'].temp
  let feels = res['main'].feels_like
  let weather = res['weather'][0]
  let wType = weather.main
  let wDetail = weather.description

  // DOM elements
  let cloud = document.querySelector('.cloudy')
  let clear = document.querySelector('.clear-day')
  let rain = document.querySelector('.rain')
  let partly = document.querySelector('.partly-cloudy')

  // dev testing vars
  console.log(res)
  console.log('\n')
  console.log(wType)

  weatherContainers.forEach(wc => {
    wc.classList.add('d-none')
  })

  // shows relevant animation-box

  if (wType === 'Clouds') {
    cloud.classList.remove('d-none')
  } else if (wType === 'Clear') {
    clear.classList.remove('d-none')
  } else if (wType === 'Thunderstorm' || wType === 'Rain' || wType === 'Dizzle') {
    rain.classList.remove('d-none')
  } else {
    partly.classList.remove('d-none')
  }
}



async function getWeather(l) {
  let fetchURL = url + `${l}&appid=${key}`
  let response = await fetch(fetchURL)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let res = await response.json();
    alterDOM(res)
  }
}







const getit = document.querySelector('#getWeather')

getit.onclick = function () {
  let locQuery = document.querySelector('#locQuery').value
  locQuery = 'canada'
  if (locQuery.length > 0) {
    getWeather(locQuery).catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    });
  } else {
    let inEl = document.querySelector('#locQuery')
    inEl.setAttribute('placeholder', 'Try another location')
  }
}

getit.click()









// RUBRIC

/*

1. search location

2. toggle temp

conversion C to F ; F to C

3. show hide correct weather animation

4. fill other weather content 


*/


// credit: https://github.com/vai0/alarmclockweather_animations author: @vai0

document.addEventListener('DOMContentLoaded', function () {
  var numberOfDroplets = 20;
  var numberOfSnowflakes = 10;

  function createDroplet(input) {
    var dropletContainer = document.querySelector('.droplet-container');
    dropletContainer.insertAdjacentHTML('afterbegin', '<div class="droplet"></div>');
    var droplet = dropletContainer.firstChild;
    droplet.style.left = input.left + '%';
    droplet.style['animation-delay'] = input.delay + 's';
    droplet.style.opacity = input.opacity;
  }

  for (var i = 0; i < numberOfDroplets; i++) {
    var left = parseInt(Math.random() * 100);
    var delay = Math.random().toFixed(3) * 3;
    var opacity = Math.random().toFixed(2) * 0.5;

    createDroplet({
      left: left,
      delay: delay,
      opacity: opacity
    });
  }

  function createSnowflake(input) {
    var snowflakeContainer = document.querySelector('.snowflake-container');
    snowflakeContainer.insertAdjacentHTML('afterbegin', '<div class="snowflake"></div>');
    var snowflake = snowflakeContainer.firstChild;
    snowflake.style.left = input.left + '%';
    snowflake.style.width = input.size + 'px';
    snowflake.style.height = input.size + 'px';
    snowflake.style['animation-delay'] = input.delay + 's';
    snowflake.style['animation-duration'] = input.snowFallDuration + 's, ' + input.snowDriftDuration + 's';
    snowflake.style.opacity = input.opacity;
  }

  for (var i = 0; i < numberOfSnowflakes; i++) {
    var left = parseInt(Math.random() * 100);
    var size = Math.floor(Math.random() * 11 + 5);
    var delay = Math.random().toFixed(3) * 10;
    var snowFallDuration = Math.floor(Math.random() * 5 + 10);
    var snowDriftDuration = Math.floor(Math.random() * 4 + 4);
    var opacity = Math.random().toFixed(2) * 0.7;

    createSnowflake({
      left: left,
      size: size,
      delay: delay,
      snowFallDuration: snowFallDuration,
      snowDriftDuration: snowDriftDuration,
      opacity: opacity
    });
  }
})