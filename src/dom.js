import helpr from './helper'

const manyEls = (parent, arr) => {
  arr.forEach((el, ix) => {
    let item = helpr.cel(el[0], el[1])
    if (el.length === 3) {
      item.innerHTML = el[2]
    }
    parent.appendChild(item)
  })
}

const alterDOM = (res) => {
  // relevant response items
  let place = res['name']
  let country = res['sys'].country
  let temp = res['main'].temp
  let feels = res['main'].feels_like
  let weather = res['weather'][0]
  let wType = weather.main
  let wDetail = weather.description
  let weatherContainers = document.querySelectorAll('.weather-container')

  // DOM elements 
  let cloud = document.querySelector('.cloudy')
  let clear = document.querySelector('.clear-day')
  let rain = document.querySelector('.rain')
  let partly = document.querySelector('.partly-cloudy')


  // make string from temp
  temp = temp.toString().split('.')[0] + ' F°'


  weatherContainers.forEach(wc => {
    wc.classList.add('d-none')
  })

  // shows relevant animation-box
  let resArr = [['h2', 'place', place], ['h3', 'temp title is-3', temp], ['p', 'detail', wDetail]]

  if (wType === 'Clouds') {
    cloud.classList.remove('d-none')
    manyEls(cloud, resArr)
  } else if (wType === 'Clear') {
    clear.classList.remove('d-none')
    manyEls(clear, resArr)
  } else if (wType === 'Thunderstorm' || wType === 'Rain' || wType === 'Dizzle') {
    rain.classList.remove('d-none')
    manyEls(rain, resArr)
  } else {
    partly.classList.remove('d-none')
    manyEls(partly, resArr)
  }
}

export default alterDOM;