import { tasks, taskFactory } from './task';

export const populateTasks = (() => {
    const gym = taskFactory('Go To Gym', 'Personal', 'Train Hard', 'Today', 'High', false);
    const shopping = taskFactory('Get Shopping', 'Personal', 'Get Carbs, Healthy Fats & Protein', 'Tomorrow', 'High', false);
    const codeWars = taskFactory('Code Wars Practice', 'Coding', 'Practice Data Structures', 'This Week', 'Medium', false)
    const toDoList = taskFactory('Build To-Do List', 'The Odin Project, Coding', 'Javascript Course', 'This Week', 'High', false);
    console.log(tasks);

})();

const createTaskDisplay = () => {
    
}