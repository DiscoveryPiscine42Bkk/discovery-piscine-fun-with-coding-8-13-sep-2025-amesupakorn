$(document).ready(function () {
  const $list = $("#ft_list");

  function saveTodos() {
    const todos = [];
    $list.children("div").each(function () {
      todos.push($(this).text());
    });
    document.cookie =
      "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
  }

  function loadTodos() {
    const match = document.cookie.match(/(^|;)\s*todos=([^;]+)/);
    if (match) {
      const todos = JSON.parse(decodeURIComponent(match[2]));
      todos.forEach(todo => addTodo(todo, false));
    }
  }

  function addTodo(text, save = true) {
    const $div = $("<div>").text(text);
    $div.on("click", function () {
      if (confirm("Do you want to remove this task?")) {
        $div.remove();
        saveTodos();
      }
    });
    $list.prepend($div);
    if (save) saveTodos();
  }

  $("#newBtn").on("click", function () {
    const todo = prompt("Enter a new TO DO:");
    if (todo && todo.trim() !== "") {
      addTodo(todo.trim());
    }
  });

  loadTodos();
});