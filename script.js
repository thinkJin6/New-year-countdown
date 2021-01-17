'use stric';
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
const updateCountdown = function () {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.trunc(diff / 1000 / 60 / 60 / 24);
  const h = Math.trunc((diff / 1000 / 60 / 60) % 24);
  const m = Math.trunc((diff / 1000 / 60) % 60);
  const s = Math.trunc((diff / 1000) % 60);

  const plusZero = function (input) {
    return input < 10 ? '0' + input : input;
  };

  // Add values to DOM
  days.innerHTML = plusZero(d);
  hours.innerHTML = plusZero(h);
  minutes.innerHTML = plusZero(m);
  seconds.innerHTML = plusZero(s);
};

// Show spinner before countdown
setTimeout(() => {
  loading.remove();

  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);
