const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');

const sale = "31 October 2021";

function countdown() {
  const saleDate = new Date(sale);
  const currentDate = new Date();

  const totalSeconds = (saleDate - currentDate) / 1000;

  const seconds = Math.floor(totalSeconds % 60);

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const days = Math.floor(totalSeconds / 3600 / 24);

  secondsEl.innerHTML = formatter(seconds);
  minutesEl.innerHTML = formatter(minutes);
  hoursEl.innerHTML = formatter(hours);
  daysEl.innerHTML = formatter(days);
}

function formatter(time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);