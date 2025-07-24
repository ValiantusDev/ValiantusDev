// Placeholder for future interactivity
console.log("Welcome to my portfolio site!");

function showMessage(message) {
  alert(message);
  console.log("Alert shown with message:", message);
}

const timeElement = document.getElementById('myTime');

function updateMyTime() {
  const now = new Date();
  const options = {
    timeZone: 'Europe/Vilnius',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  timeElement.textContent = now.toLocaleTimeString([], options);
}

updateMyTime();
setInterval(updateMyTime, 1000);

const header = document.getElementById('PortfolioHeader');

header.addEventListener('click', () => {
  header.classList.toggle('collapsed');
});
