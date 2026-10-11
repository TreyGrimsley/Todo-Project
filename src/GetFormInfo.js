//Get form info to help NewTodo.js get its info

import { id } from "date-fns/locale";

export function GetFormInfo(){


    const titleInput = document.querySelector('.title');
    const descInput = document.querySelector('.input-desc');
    const dateInput = document.querySelector('.project-date');
    const priorityInput = document.querySelector('.priority-btn');
    const todoInput = document.querySelector('.todo-item');

    
    const submitBtn = document.querySelector('#submit-form-btn');


    const buttonContainer = document.querySelector('#side-bar-content');
    const cardContainer = document.querySelector('.project-card');

let formInfoArray = JSON.parse(localStorage.getItem('formTransactions')) || [];

function renderProjectButtons(){
   buttonContainer.innerHTML = ''

   const addProjectBtn = document.createElement('button')
   addProjectBtn.setAttribute('popovertarget', 'add-new-project');
   addProjectBtn.classList.add('add-project-btn');
   addProjectBtn.textContent = "Add New Project";
   buttonContainer.appendChild(addProjectBtn);

    formInfoArray.forEach((project) => {
        const newProjectBtn = document.createElement('button');
        newProjectBtn.classList = 'project-title-btn';
        newProjectBtn.textContent = project.title;

        // Store the unique ID onto the html remove project button
        newProjectBtn.dataset.id = project.id;

        // Use the project button to populate the field
        newProjectBtn.addEventListener('click', () => {
            openProjectCard(project);
           
        });
         buttonContainer.appendChild(newProjectBtn);
    });
};

function openProjectCard(project){
            const projectCard = document.querySelector('.project-card');
            // Everything needed for card makeup    
            const priority = document.querySelector('.priority');
            const title = document.querySelector('.card-title');
            // Project description section
            const projectDesc = document.querySelector('.project-desc');
            // Todo list section
            // Make a p element that has a checkbox in it to make the list items
            const todoCheckbox = document.querySelectorAll('.todo-list');
            // the class is list-item
            const dateDue = document.querySelector('.date-due');
            // the todo container
            const todoContainer = document.querySelector('.todo-container');
            
            

            const oldRemoveBtn = document.querySelector('.remove');
            if (oldRemoveBtn) oldRemoveBtn.remove();


    if (!todoContainer){
        console.error("Could not find the element with id='todo-container' in the HTML layout");
        
        return;
        
    }
    

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove Project";
    removeBtn.classList.add('remove');


  removeBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        
        const userChoice = confirm("Are you sure you want to delete this project?");

        if(userChoice){

            formInfoArray = formInfoArray.filter(item => item.id !== project.id);

            localStorage.setItem('formTransactions', JSON.stringify(formInfoArray));

            location.reload();
            renderProjectButtons();
            alert('Project is deleted')
        }
        else{
            console.log("Action canceled")
        }
      });
      const removeBtnDiv = document.querySelector('#removeBtn-div');
      removeBtnDiv.append(removeBtn);
            
     



            // Looping through every todo list item
            project.todoItem.forEach((todo) =>{
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('todo-list')
                checkbox.checked = todo.isCompleted;
                checkbox.name = 'todo-list'
                checkbox.value = 'todo-list'
                const label = document.createElement('label');
                label.textContent = todo.text;
                label.classList.add('todo-list');
                const row = document.createElement('div');
                row.classList.add('row-wrapper');


                checkbox.addEventListener('change',(e) =>{
                    todo.isCompleted = e.target.checked;
                    localStorage.setItem('formTransactions', JSON.stringify(formInfoArray));

                });
                row.append(checkbox, label);
                todoContainer.append(row);
            })


            if (removeBtn){
                removeBtn.dataset.id = project.id;
            }


            priority.textContent = project.priority;
            title.textContent = project.title;
            projectDesc.textContent = project.description;
            dateDue.textContent = project.date;
            


            if (priority.textContent === "HIGH"){
                priority.style.backgroundColor = 'rgba(248, 0, 0, 0.7)';
            } else if (priority.textContent === "Medium"){
                       priority.style.backgroundColor = 'rgba(255, 120, 10, 0.7)';
            } else {
                       priority.style.backgroundColor = 'rgba(10, 239, 255, 0.7)';
                   }
        }



      
      
    



    submitBtn.addEventListener('click',(e) => {
        e.preventDefault();

        // This section is for putting all todo inputs
        // into an array so all inputs will be displayed
        const todoInput = document.querySelectorAll('.todo-item');
        const todoListArray = [];
        console.log(todoListArray)

        todoInput.forEach((input, index) => {
            if (input.value.trim() !== ""){ // skip empty elements
                todoListArray.push({
                    id: `${Date.now()}-${index}`, // Unique sub-id for task
                    text: input.value,
                    isCompleted: false  // Defaults to unchecked
                });
            }
        });






        const title = titleInput.value;
        const description = descInput.value;
        const date = dateInput.value;
        
        const todoItem = todoInput.value;
        const currentDate = new Date(Date.now());
        const currentDMY = currentDate.toLocaleDateString();

        const checkedRadioBtn = document.querySelector('input[name="priority-btn"]:checked');
        const priorityValue = checkedRadioBtn ? checkedRadioBtn.value : 'low'


        const newFormInfo = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            date: date,
            priority: priorityValue,
            todoItem: todoListArray
        };
        formInfoArray.push(newFormInfo);

        localStorage.setItem('formTransactions', JSON.stringify(formInfoArray));

        

        

        titleInput.value = '';
        descInput.value = '';
        dateInput.value = '';
        priorityInput.value = '';
        todoInput.value = '';
        alert('Information Saved');

        renderProjectButtons();
        console.log(renderProjectButtons())
    });

    renderProjectButtons();
    
}


