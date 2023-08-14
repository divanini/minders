const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
menu.onclick = function () {
  list.classList.toggle('is-opened');
}
close.onclick = function () {
  list.classList.remove('is-opened');
}

const wrapper = document.querySelector('.about__niche-wrapper');

wrapper.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { left, top, width, height } = wrapper.getBoundingClientRect();

  const x = (clientX - left) / width * 100;
  const y = (clientY - top) / height * 100;

  wrapper.style.transform = `translate(${(x - 50) * 0.1}%, ${(y - 50) * 0.1}%)`;
});
