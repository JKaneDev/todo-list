import { tasks, taskFactory } from './task';
import { addLinkListeners } from './nav-ui';
import edit from '../assets/edit.svg';
import remove from '../assets/remove.svg';

export const populateTasks = (() => {
    const gym = taskFactory('Go To Gym', 'Personal', 'Train Hard', 'Today', 'High', false);
    const shopping = taskFactory('Get Shopping', 'Personal', 'Get Carbs, Healthy Fats & Protein', 'Tomorrow', 'High', false);
    const codeWars = taskFactory('Code Wars Practice', 'Coding', 'Practice Data Structures', 'This Week', 'Medium', false)
    const toDoList = taskFactory('Build To-Do List', 'The Odin Project, Coding', 'Javascript Course', 'This Week', 'High', false);

})();

const createTaskDisplay = (name) => {
    const taskDisplay = document.querySelector('.content-main');

    const taskLink = document.createElement('div');
    taskLink.classList.add('task-link');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskName = document.createElement('p');
    taskName.innerText = taskName;

    const detailsBtn = document.createElement('button');
    detailsBtn.classList.add('details-btn');

    const taskDueDate = document.createElement('span');
    taskDueDate.classList.add('task-due-date');

    const editTaskBtn = document.createElement('img');
    editTaskBtn.classList.add('edit-task-btn');
    editTaskBtn.src = edit;

    const removeTaskBtn = document.createElement('img');
    removeTaskBtn.classList.add('remove-task-btn');
    removeTaskBtn.src = remove;

    taskLink.appendChild(checkbox);
    taskLink.appendChild(taskName);
    taskLink.appendChild(detailsBtn);
    taskLink.appendChild(taskDueDate);
    taskLink.appendChild(editTaskBtn);
    taskLink.appendChild(removeTaskBtn);   

    taskDisplay.appendChild(taskLink);
}

export const renderAllTasks = (e) => {
    tasks.forEach(task => {
        createTaskDisplay(task.title);
    })
}

const renderTasksByTag = () => {
    
}

const renderTasksByDueDate = () => {
    
}
