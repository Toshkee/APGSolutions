// Navigation: solid background after scrolling, mobile menu toggle
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.classList.toggle('is-open', open);
  nav.classList.toggle('menu-open', open);
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

// Respect reduced motion: pause the hero video
const video = document.querySelector('.hero__media');
if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.removeAttribute('autoplay');
  video.pause();
}

// Contact form: "Company" only matters for carriers
const form = document.getElementById('contactForm');
const companyField = document.getElementById('companyField');
const status = document.getElementById('formStatus');

const fields = form.elements;

form.querySelectorAll('input[name="type"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    companyField.hidden = fields.namedItem('type').value === 'driver';
  });
});

// Placeholder submit until the form is connected to email/CRM
form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.classList.remove('is-error');
  const name = fields.namedItem('name');
  const email = fields.namedItem('email');
  if (!name.value.trim() || !email.value.trim() || !email.checkValidity()) {
    status.textContent = 'Please enter your name and a valid email address.';
    status.classList.add('is-error');
    return;
  }
  status.textContent = 'Thanks! We will get back to you within one business day.';
  form.reset();
  companyField.hidden = false;
});

document.getElementById('year').textContent = new Date().getFullYear();
