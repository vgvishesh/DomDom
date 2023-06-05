const p = document.querySelector('p');
const button = document.querySelector('button');
const changeText = () => {
  p.textContent = "Will I change?";
}
const alertText = () => {
  alert('Will I alert?');
}
// Events can be overwritten
button.onclick = changeText;
button.onclick = alertText;
