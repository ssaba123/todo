const list = document.querySelector('.list-wrapper');
const toDoBtn = document.querySelector('.todo-btn');
const toDo = document.querySelector('.todo-input');
const darkMode = document.querySelector('.dark-mode')
const body = document.body

darkMode.addEventListener('click', function turnDark(){
   body.classList.toggle('dark')
})

toDoBtn.addEventListener('click', addToDo);
toDo.addEventListener('change', newToDo)

function newToDo(e){
toDo.textContent = e.target.value
}

function addToDo(){
    if(toDo.textContent.length > 1){
        const newItem = document.createElement('li');
        newItem.classList.add('task');
        newItem.textContent = toDo.textContent;
        list.appendChild(newItem);
        toDo.value = '';
        toDo.textContent = '';
    } else {
        alert('Task cannot be empty!')
    }   
}


