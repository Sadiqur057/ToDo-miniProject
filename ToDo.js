const addToDo=()=>{
    let title = document.getElementById('todo-title').value;
    let desc = document.getElementById('todo-desc').value;
    localStorage.setItem(title,desc);
}