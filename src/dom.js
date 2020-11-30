import helpr from './helper';

const manyEls = (parent, arr) => {
  arr.forEach((el) => {
    const item = helpr.cel(el[0], el[1]);
    if (el.length === 3) {
      item.innerHTML = el[2];
    }
    parent.appendChild(item);
  });
  parent.setAttribute('data-in', true);
};

const alterDOM = (res) => {
  // relevant response items
  const place = res.name;
  let { temp } = res.main;
  const weather = res.weather[0];
  const wType = weather.main;
  const wDetail = weather.description;
  const weatherContainers = document.querySelectorAll('.weather-container');

  // DOM elements
  const cloud = document.querySelector('.cloudy');
  const clear = document.querySelector('.clear-day');
  const rain = document.querySelector('.rain');
  const partly = document.querySelector('.partly-cloudy');

  // make string from temp
  temp = `${temp.toString().split('.')[0]} F°`;

  weatherContainers.forEach(wc => {
    wc.classList.add('d-none');
  });

  // shows relevant animation-box
  const resArr = [['h2', 'place', place], ['h3', 'temp title is-3', temp], ['p', 'detail', wDetail]];

  const updateEls = (parent, Arr) => {
    Arr.forEach(el => {
      const item = parent.querySelector(el[0]);
      item.innerHTML = el[2];
    });
  };

  if (wType === 'Clouds') {
    cloud.classList.remove('d-none');
    if (cloud.getAttribute('data-in')) {
      updateEls(cloud, resArr);
    } else {
      manyEls(cloud, resArr);
    }
  } else if (wType === 'Clear') {
    clear.classList.remove('d-none');
    if (clear.getAttribute('data-in')) {
      updateEls(clear, resArr);
    } else {
      manyEls(clear, resArr);
    }
  } else if (wType === 'Thunderstorm' || wType === 'Rain' || wType === 'Dizzle') {
    rain.classList.remove('d-none');
    if (rain.getAttribute('data-in')) {
      updateEls(rain, resArr);
    } else {
      manyEls(rain, resArr);
    }
  } else {
    partly.classList.remove('d-none');
    if (partly.getAttribute('data-in')) {
      updateEls(partly, resArr);
    } else {
      manyEls(partly, resArr);
    }
  }
};

export default alterDOM;