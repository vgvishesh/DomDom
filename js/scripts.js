let button = document.getElementById('changeBackground');
let currentIndex = 0;
let colors = ['seagreen', 'fuchsia', 'skyblue']
let toggle = 0;
let intervalId1 = null;

button.addEventListener('click', () => {
  console.log(intervalId1);
  if (intervalId1) {
    clearInterval(intervalId1);
    intervalId1 = null;
  } else {
    intervalId1 = setInterval(function () {
      document.body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }, 100);
  }
})
