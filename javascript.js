const todoInput = document.querySelector('.todo-input')
const todobutton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filteroption = document.querySelector('.filter-todo')

todobutton.addEventListener('click', addtodo)
todoList.addEventListener('click', deleteAndCheck)
filteroption.addEventListener('click', filtertodo)


function addtodo(event) {
    event.preventDefault();
// Make div of class todo
    const addDiv = document.createElement("div");
    addDiv.classList.add('todo');
// Create li of class todo-item
    const newtodo = document.createElement('li');
    newtodo.innerText = todoInput.value
    newtodo.classList.add('todo-Item')

    addDiv.appendChild(newtodo)

// create complete button of class complete-btn
    const completeButton = document.createElement('button')
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('complete-btn')

    addDiv.appendChild(completeButton)

// Create edit button of class edit-btn
    const editButton = document.createElement('button')
    editButton.innerHTML = '<i class="fas fa-edit"></i>'
    editButton.classList.add('edit-btn') 
    addDiv.appendChild(editButton)   


// Create Delete button of class delete-btn
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn')

    addDiv.appendChild(deleteButton)

// empty the input 
    todoInput.value = "";     


// append to list
    todoList.appendChild(addDiv);
}


function deleteAndCheck(event) {
    // console.log(event.target); 
    const item = event.target
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall")
        // todo.remove()
        todo.addEventListener('transitionend', function() {
            todo.remove()
        })
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
    if (item.classList[0] === "edit-btn") {
        const todo = item.parentElement;
        todo.value = todoInput;
    }

}
// function filtertodo (event) {
//     const todos = todoList.childNodes;
//     console.log(todos);
//     console.log(event.target.value);
//     console.log(event.target);
// }

    // todos.forEach(function(todo) {
    //     switch (event.target.value) {
    //         case "all":
    //             todo.style.display = "flex";
    //             break;
    //         case "completed":
    //             if(todo.classList.contains('completed')) {
    //                 todo.style.display = "flex";
    //             }
    //             else{
    //                 todo.style.display = "none";
    //             }
    //             break;
    //         case "uncompleted":
    //             if (!todo.classList.contains('completed')) {
    //                 todo.style.display = "flex";
    //             }
    //             else{
    //                 todo.style.display = "none";
    //             }
    //             break; 
    //     }
    // })
