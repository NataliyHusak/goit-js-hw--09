'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');
let timerColor = null;

btnStart.addEventListener('click', () => {
  timerColor = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
  clearInterval(timerColor);
  btnStart.disabled = false;
});
