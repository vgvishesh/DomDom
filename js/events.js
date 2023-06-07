const p = document.querySelector('p');
const button = document.querySelector('button');
const changeText = () => {
  p.textContent = "Will I change?";
}
const alertText = () => {
  alert('Will I alert?');
}
// Multiple listeners can be added to the same event and element 
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);