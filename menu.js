document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('#header');
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    header.classList.toggle('rolagem', window.scrollY > 100);
  });

  toggle.addEventListener('click', function () {
    nav.classList.toggle('ativo');
  });
});