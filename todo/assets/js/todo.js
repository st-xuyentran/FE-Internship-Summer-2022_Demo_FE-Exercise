function showtTodoList() {
  var todoData = getLocalStorage('todolist', []);
  var todoView = document.getElementById('todo-list')
  todoView.innerHTML = '';
  for (var item of todoData) {
    console.log(item);
    todoView.innerHTML += '<li class="todo-item">' +
      '<span class="content-todo">'+item.value+'</span>' +
      '<i class=" btn-delete fa-solid fa-trash"></i>' +
      '</li>'
  }
}

function addEnventInToBtn() {
  var btnTodoAdd = document.querySelector('.btn-add')
  btnTodoAdd.addEventListener('click', function () {
    addTodoList();
  })
}

function addTodoList() {
  var listTodo = getLocalStorage('todolist', []);

  var inputValue = document.getElementById('text-box').value;
  if (!inputValue) {
    alert('Enter your plan')
  } else {
    listTodo.push({id: Date.now(), value: inputValue});
  }
  setLocalStorage('todolist', listTodo)
  showtTodoList()
}
showtTodoList();
addEnventInToBtn()