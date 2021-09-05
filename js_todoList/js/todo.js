const TodoForm = document.getElementById("todo-form");
const TodoList = document.getElementById("todo_list");
const toDoInput = TodoForm.querySelector("input");

const TODO_KEY = "todos";
let toDos =[]; //할 일 목록

function saveTodos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); //DB저장
}

function btnClick(event){   //삭제
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){ //할 일 추가
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.innerText = newTodo.text;
    //const span = document.createElement("span");
    //span.innerText=newTodo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", btnClick);
    //li.appendChild(span);
    li.appendChild(button);
    TodoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj ={
        text:newTodo,
        id :Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
TodoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
