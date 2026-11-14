// aarronwarnagiris.com — reveal-on-scroll.
// Kept as an external file (not inline) so the page's Content-Security-Policy
// can use a strict script-src 'self' with no 'unsafe-inline'.
document.documentElement.classList.add('js');
const io = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));
