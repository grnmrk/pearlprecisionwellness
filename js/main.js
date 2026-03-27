/* Pearl Precision Wellness — main.js */

// ── NAV ──────────────────────────────────────────────
const nav       = document.getElementById('nav');
const toggle    = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Nav scroll shadow
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 8
    ? '0 2px 24px rgba(42,40,32,0.08)'
    : 'none';
}, { passive: true });


// ── REVEAL ON SCROLL ─────────────────────────────────
const revealEls = document.querySelectorAll(
  '.intro__text, .intro__image-wrap, ' +
  '.focus__item, ' +
  '.service-card, ' +
  '.provider__image-wrap, .provider__text, ' +
  '.tool-card, ' +
  '.contact__text, .contact__form, ' +
  '.footer__brand, .footer__nav'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings a bit
        const siblings = [...entry.target.parentElement.children].filter(
          c => c.classList.contains('reveal')
        );
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(el => observer.observe(el));


// ── CONTACT FORM ─────────────────────────────────────
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;

  // Basic validation
  const required = form.querySelectorAll('[required]');
  let valid = true;

  required.forEach(field => {
    field.style.borderColor = '';
    if (!field.value.trim()) {
      field.style.borderColor = '#B85A5A';
      valid = false;
    }
  });

  if (!valid) return;

  // Simulate submission
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#4E6151';
    btn.style.borderColor = '#4E6151';

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
      btn.style.borderColor = '';
      form.reset();
    }, 3000);
  }, 1200);
});
