const TodoForm = document.getElementById("todo-form");
const TodoList = document.getElementById("todo_list");
const toDoInput = TodoForm.querySelector("input");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintTodo(newTodo);
}

function btnClick(event){
    const li = event.target.parentElement;
    li.remove();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); //li안에 span넣기
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", btnClick);
    li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);
}
TodoForm.addEventListener("submit", handleToDoSubmit);
