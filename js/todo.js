const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEYS = "todos";

let toDos = []; // for saving past to do to local storage


function saveToDos() {
    localStorage.setItem(TODOS_KEYS,JSON.stringify(toDos));
}


function sexyfilter(item, deleteId) {
    return item.id !=deleteId
}


function deleteTodo(event) {
    const li=event.target.parentElement;
    toDos=toDos.filter(item => String(item.id) !== li.id);
    // toDos=toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDO(newTodo) {
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text;
    li.classList.add("toDo")
    const button = document.createElement("button");
    button.innerText="❌";
    button.classList.add("toDoButton")
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",deleteTodo)
    
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDO(newTodoObj);
    saveToDos();    
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEYS);

if (savedToDos !==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO);
    // parsedToDos.forEach((item)=> console.log("this is the turn of ",item));
}

