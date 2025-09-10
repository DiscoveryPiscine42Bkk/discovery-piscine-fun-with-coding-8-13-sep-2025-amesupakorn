const balloon = document.getElementById('balloon');
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let size = 200;

balloon.addEventListener('click', () => {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.backgroundColor = colors[colorIndex];
  if (size > 420) {
    size = 200;
    colorIndex = 0;
    setTimeout(() => {
      balloon.style.width = '200px';
      balloon.style.height = '200px';
      balloon.style.backgroundColor = colors[0];
    }, 200);
  }
});

balloon.addEventListener('mouseleave', () => {
  size = Math.max(200, size - 5);
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.backgroundColor = colors[colorIndex];
});