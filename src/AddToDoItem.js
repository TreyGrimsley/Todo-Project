export function addToDoItem(){

    const addItemBtn = document.querySelector('#add-new-todo');
    const todoItemDiv = document.querySelector('#todo-item-div');

    addItemBtn.addEventListener('click', () =>{
        const newInputField = document.createElement('input');
        newInputField.classList = 'todo-item';
        newInputField.placeholder = "Insert new todo item";
        newInputField.type = 'text'
        todoItemDiv.append(newInputField);
    })

    
}