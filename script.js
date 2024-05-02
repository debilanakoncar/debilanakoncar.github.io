
const targetDate = new Date('2024-06-21T00:00:00').getTime() / 1000;


const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const distance = targetDate - nowSeconds;


  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `${distance} sekundi`;


  if (distance <= 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = 'SJAŠI BILJANAAAAAAAAAAAAAAA!!!!!!';
  }
}
