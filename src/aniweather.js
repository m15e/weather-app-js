// animation JS

// credit: https://github.com/vai0/alarmclockweather_animations author: @vai0

const animate = () => {
  const numberOfDroplets = 20;
  const numberOfSnowflakes = 10;

  function createDroplet(input) {
    const dropletContainer = document.querySelector('.droplet-container');
    dropletContainer.insertAdjacentHTML('afterbegin', '<div class="droplet"></div>');
    const droplet = dropletContainer.firstChild;
    droplet.style.left = `${input.left}%`;
    droplet.style['animation-delay'] = `${input.delay}s`;
    droplet.style.opacity = input.opacity;
  }

  for (let i = 0; i < numberOfDroplets; i += 1) {
    const left = parseInt(Math.random() * 100, 10);
    const delay = Math.random().toFixed(3) * 3;
    const opacity = Math.random().toFixed(2) * 0.5;

    createDroplet({
      left,
      delay,
      opacity,
    });
  }

  function createSnowflake(input) {
    const snowflakeContainer = document.querySelector('.snowflake-container');
    snowflakeContainer.insertAdjacentHTML('afterbegin', '<div class="snowflake"></div>');
    const snowflake = snowflakeContainer.firstChild;
    snowflake.style.left = `${input.left}%`;
    snowflake.style.width = `${input.size}px`;
    snowflake.style.height = `${input.size}px`;
    snowflake.style['animation-delay'] = `${input.delay}s`;
    snowflake.style['animation-duration'] = `${input.snowFallDuration}s, ${input.snowDriftDuration}s`;
    snowflake.style.opacity = input.opacity;
  }

  for (let i = 0; i < numberOfSnowflakes; i += 1) {
    const left = parseInt(Math.random() * 100, 10);
    const size = Math.floor(Math.random() * 11 + 5);
    const delay = Math.random().toFixed(3) * 10;
    const snowFallDuration = Math.floor(Math.random() * 5 + 10);
    const snowDriftDuration = Math.floor(Math.random() * 4 + 4);
    const opacity = Math.random().toFixed(2) * 0.7;

    createSnowflake({
      left,
      size,
      delay,
      snowFallDuration,
      snowDriftDuration,
      opacity,
    });
  }
};

export default animate;