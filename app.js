const list = document.querySelector('.list-wrapper');
const toDoBtn = document.querySelector('.todo-btn');
const toDo = document.querySelector('.todo');


toDoBtn.addEventListener('click', addToDo);

toDo.addEventListener('change', function(e){
    newItem.textContent = e.target.value;
})

function addToDo(){
    const newItem = document.createElement('li');
    list.appendChild(newItem);
}


