// Theme toggle logic
const themeToggleBtn = document.getElementById('themeToggleBtn');
const iconLight = document.getElementById('iconLight');
const iconDark = document.getElementById('iconDark');

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    iconLight.classList.add('hidden');
    iconDark.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    iconLight.classList.remove('hidden');
    iconDark.classList.add('hidden');
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setTheme(true);
} else {
  setTheme(false);
}

themeToggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(!isDark);
});

// Local time display
function updateTime() {
  const timeElem = document.getElementById('myTime');
  if (!timeElem) return;
  const now = new Date();
  timeElem.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

updateTime();
setInterval(updateTime, 60000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElem = document.getElementById(targetId) || document.body;

    if (targetElem) {
      e.preventDefault();
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form toggle — improved: focus + center on open, scroll to bottom on close
const toggleFormBtn = document.getElementById('toggleForm');
const contactForm = document.getElementById('contactForm');
const firstInput = contactForm ? contactForm.querySelector('input, textarea, select') : null;
const footerEl = document.querySelector('footer');

if (toggleFormBtn && contactForm) {
  // ensure initial state is hidden and aria is correct
  contactForm.classList.add('hidden');
  toggleFormBtn.setAttribute('aria-expanded', 'false');

  toggleFormBtn.addEventListener('click', () => {
    const isHidden = contactForm.classList.toggle('hidden'); // true if now hidden

    // update button text and aria
    toggleFormBtn.textContent = isHidden ? 'Open Contact Form' : 'Close Contact Form';
    toggleFormBtn.setAttribute('aria-expanded', String(!isHidden));

    if (!isHidden) {
      // opened: center the form in viewport and focus first input
      // small timeout helps if you have CSS transitions
      setTimeout(() => {
        // scroll so the form is centered
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // focus the first focusable element for keyboard users
        if (firstInput) firstInput.focus({ preventScroll: true });
      }, 50);
    } else {
      // closed: scroll to bottom (footer). fallback to scrolling to document bottom.
      const scrollTarget = footerEl || document.body;
      if (scrollTarget.scrollIntoView) {
        scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'end' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }
  });
}
