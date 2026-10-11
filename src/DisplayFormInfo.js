export function DisplayFormInfo(){
    const appContainer = document.querySelector('#app-container');
    const projectContent = document.querySelector('#project-content');
    const projectContainer = document.querySelector('#project-container');
        const projectCard = document.querySelector('.project-card');
        // Everything needed for card makeup    
        const priority = document.querySelector('.priority');
        const title = document.querySelector('.card-title');
            // Project description section
            const descHeader = document.querySelector('.desc-header');
            const projectDesc = document.querySelector('.project-desc');
            // Todo list section
            const todoHeader = document.querySelector('.todo-header');
            // Make a p element that has a checkbox in it to make the list items
            // the class is list-item
            const dateDueCaption = document.querySelector('.date-due-cap')
            const dateDue = document.querySelector('.date-due');
            // Side bar content
            const sideBarDiv = document.querySelector('#side-bar');
            const sideBarContent = document.querySelector('#side-bar-content');
            const projectBtn = document.querySelector('.project-title-btn');

            // Button for viewing the project the user clicked on
    projectBtn.addEventListener('click', () =>{

        const formTransactions = JSON.parse(localStorage.getItem('formTransactions')) || [];
        // Most recent Submission
        const latestProject = formTransactions[formTransactions - 1];


        // Populating the section for project viewing
        




    });
}