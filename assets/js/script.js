// Update clock
const timeElement = document.getElementById('myTime');
function updateMyTime() {
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Vilnius',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
updateMyTime();
setInterval(updateMyTime, 1000);

// Dark mode toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');
const iconLight = document.getElementById('iconLight');
const iconDark = document.getElementById('iconDark');
const htmlEl = document.documentElement;
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  htmlEl.classList.add('dark');
  iconLight.classList.add('hidden');
  iconDark.classList.remove('hidden');
}
themeToggleBtn.addEventListener('click', () => {
  const isDark = htmlEl.classList.toggle('dark');
  iconLight.classList.toggle('hidden');
  iconDark.classList.toggle('hidden');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});