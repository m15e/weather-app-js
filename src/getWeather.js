import alterDOM from './dom'

async function getWeather(url, loc, key) {
  let fetchURL = url + `${loc}&appid=${key}`
  console.log(fetchURL)
  let response = await fetch(fetchURL)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let res = await response.json();
    alterDOM(res)
    document.querySelector('.switch-light').style.opacity = 0.5;
  }
}

export default getWeather;