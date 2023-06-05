const changeText = () => {
  const p = document.querySelector('p');
  p.textContent = "I changed because of an event handler property.";
}
// Add event handler as a property of the button element
const button = document.querySelector('button'); button.onclick = changeText;