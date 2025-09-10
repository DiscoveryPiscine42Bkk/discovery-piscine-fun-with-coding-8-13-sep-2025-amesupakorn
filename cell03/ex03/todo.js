const list = document.getElementById('ft_list');
const btn  = document.getElementById('newBtn');

function saveTodos() {
  const todos = [];
  list.querySelectorAll('div').forEach(div => todos.push(div.textContent));
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadTodos() {
  const match = document.cookie.match(/(^|;)\\s*todos=([^;]+)/);
  if (match) {
    const todos = JSON.parse(decodeURIComponent(match[2]));
    todos.forEach(todo => addTodo(todo, false));
  }
}

function addTodo(text, save=true) {
  const div = document.createElement('div');
  div.textContent = text;
  div.addEventListener('click', () => {
    if (confirm("Do you want to remove this task?")) {
      div.remove();
      saveTodos();
    }
  });
  list.insertBefore(div, list.firstChild);
  if (save) saveTodos();
}

btn.addEventListener('click', () => {
  const todo = prompt("Enter a new TO DO:");
  if (todo && todo.trim() !== "") addTodo(todo.trim());
});

loadTodos();