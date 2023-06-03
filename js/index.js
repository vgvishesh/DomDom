const paragraph = document.createElement('p');
paragraph.textContent = "I'm a brand new paragraph.";

paragraph.innerHTML = "I'm a paragraph with<strong>bold</strong> text.";
console.log(paragraph)

const text = document.createTextNode("I'm a new text node.");
console.log(text)