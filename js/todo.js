// To-do list ul element
const todoList = document.querySelector('ul');

const impact = document.createElement('div');
impact.textContent = 'Click to add more';
impact.style.border = '1px solid blue';
let count = 0;
impact.addEventListener('click', () => {
  // Create new to-do
  const newTodo = document.createElement('li');
  const text = 'hello world'
  newTodo.textContent = `${text} ${count++}`
  newTodo.addEventListener('click', () => {
    todoList.removeChild(newTodo);
  })
  // Add new todo to the end of the list 
  todoList.appendChild(newTodo);
})

document.body.insertBefore(impact, todoList);