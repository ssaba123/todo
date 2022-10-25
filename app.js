const list = document.querySelector('.list-wrapper');
const toDoBtn = document.querySelector('.todo-btn');
const toDo = document.querySelector('.todo-input');

toDoBtn.addEventListener('click', addToDo);
toDo.addEventListener('change', newToDo)

function newToDo(e){
toDo.textContent = e.target.value
}

function addToDo(){
    const newItem = document.createElement('li');
    newItem.classList.add('task');
    newItem.textContent = toDo.textContent;
    list.appendChild(newItem);
    toDo.value = '';
}


