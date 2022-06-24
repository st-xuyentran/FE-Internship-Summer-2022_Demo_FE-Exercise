function showtTodoList() {
  var todoData = getLocalStorage('todolist', []);
  var todoView = document.getElementById('todo-list')
  todoView.innerHTML = '';
  for (var item of todoData) {
    todoView.innerHTML += '<li class="todo-item">' +
      '<p class="content-todo">'+item.value+'</p>' +
      '<button data-id="' +item.id +'" class="btn js-btn-delete">X</button>' +
      '</li>'
  }
  AddEventIntoBtnDelete();
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
function deleteTodo(listId) {
 var dataId = getLocalStorage('todolist')
 for(var i = 0; i < dataId.length; i++) {
   if(listId == dataId[i].id){
     dataId.splice(i, 1);
     break
    }
  }
  console.log(dataId);
console.log(listId);
setLocalStorage('todolist',dataId );
showtTodoList()
}
function AddEventIntoBtnDelete() {
  var listToDoBtn = document.querySelectorAll('.js-btn-delete')
  listToDoBtn.forEach(function(item){
    var listId = item.getAttribute('data-id')
    item.addEventListener('click', function(){
      deleteTodo(listId)
    });
  })
}

showtTodoList();
addEnventInToBtn()
