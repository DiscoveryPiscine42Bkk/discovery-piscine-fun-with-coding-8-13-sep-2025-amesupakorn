const btn = document.getElementById('change-bg');
btn.addEventListener('click', () => {
  const randomColor = `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
  )`;
  document.body.style.backgroundColor = randomColor;
});