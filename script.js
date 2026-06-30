// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Formspree-powered quote form
const form = document.getElementById('quote-form');
const msg = document.getElementById('form-msg');
const submitBtn = document.getElementById('submit-btn');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    msg.className = 'form-msg loading';
    msg.textContent = 'Sending your request to Matt…';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        msg.className = 'form-msg success';
        msg.textContent = "🔥 Got it! Matt will reach out within 24 hours. Thanks for choosing Back 40 BBQ!";
        form.reset();
      } else {
        const json = await response.json().catch(() => ({}));
        const errText = (json.errors && json.errors.map(e => e.message).join(', ')) || 'Something went wrong.';
        msg.className = 'form-msg error';
        msg.textContent = `Oops — ${errText} You can also call/text Matt at (563) 219-0019.`;
      }
    } catch (err) {
      msg.className = 'form-msg error';
      msg.textContent = "Couldn't connect. Please call/text Matt at (563) 219-0019.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Quote Request';
    }
  });
}

// Active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  document.querySelectorAll('.nav nav a').forEach(a => {
    // Skip the Contact CTA button — it should always stay white on red
    if (a.classList.contains('cta-sm')) return;

    const href = a.getAttribute('href');
    if (href === '#' + current) {
      a.style.color = '#f5a623';
    } else {
      a.style.color = '';
    }
  });
});
