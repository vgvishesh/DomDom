let button = document.getElementById('changeBackground');
let count = 0;
let colors = ['seagreen', 'fuchsia', 'white']
button.addEventListener('click', () => {
  const index = count++ % 3;
  document.body.style.backgroundColor = colors[index];
})
