// aarronwarnagiris.com — reveal-on-scroll + contact form.
// Kept as an external file (not inline) so the page's Content-Security-Policy
// can use a strict script-src 'self' with no 'unsafe-inline'.
document.documentElement.classList.add('js');
const io = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));
const cf = document.getElementById('cf');
if (cf) cf.addEventListener('submit', async e => {
  e.preventDefault();
  const f = e.target, s = document.getElementById('cs');
  s.textContent = 'Sending…';
  try {
    const r = await fetch(f.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(f) });
    const j = await r.json();
    if (j.success) { s.textContent = 'Thanks! Your message was sent.'; f.reset(); } else throw 0;
  } catch (_) { s.textContent = 'Something went wrong. Please reach out via LinkedIn instead.'; }
});
