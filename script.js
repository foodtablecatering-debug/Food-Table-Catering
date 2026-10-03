const nav = document.getElementById('mainNav');
document.querySelector('.menu-toggle').addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.lang').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll('.lang').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
    document.documentElement.lang = lang;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('#mainNav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
