import flatpickr from 'flatpickr';

// const flatpickr = require('flatpickr');
// const flatpickr = document.querySelector('.flatpickr');

const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  minDate: 'today',
});

let countdown;

function startTimer() {
  startButton.disabled = true;
  const endDate = new Date(document.getElementById('datetime-picker').value);
  if (isNaN(endDate.getTime())) {
    alert('Please select a valid date and time.');
    return;
  }

  function updateTimer() {
    startButton.disabled = false;
    const totalSeconds = Math.floor((endDate - new Date()) / 1000);
    if (totalSeconds <= 0) {
      clearInterval(countdown);
      alert('Timer has ended.');
      secondsElement.textContent = '00';
      return;
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }

  countdown = setInterval(updateTimer, 1000);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startButton.addEventListener('click', startTimer);
