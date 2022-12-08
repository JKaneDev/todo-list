import { tasks, taskFactory, checkTagsForNewCategory, findTaskIndex, deleteTask } from './task';
import { addLinkListeners } from './nav';
import edit from '../assets/edit.svg';
import remove from '../assets/remove.svg';
import { renderAddTaskModal } from './add-task-modal';
import addTask from '../assets/add-task.svg';

export const populateTasks = () => {
	const gym = taskFactory(
		'Go To Gym',
		'Personal',
		'Train Hard',
		'Today',
		'High',
		false
	);
	const shopping = taskFactory(
		'Get Shopping',
		'Personal',
		'Get Carbs, Healthy Fats & Protein',
		'Tomorrow',
		'High',
		false
	);
	const codeWars = taskFactory(
		'Code Wars Practice',
		'Coding',
		'Practice Data Structures',
		'This Week',
		'Medium',
		false
	);
	const toDoList = taskFactory(
		'Build To-Do List',
		'The Odin Project',
		'Javascript Course',
		'This Week',
		'High',
		false
	);
}

const addTaskIcon = () => {
	const btn = document.createElement('img');
	btn.setAttribute('id', 'add-task');
	btn.src = addTask;
	btn.addEventListener('click', renderAddTaskModal);
	document.querySelector('.content-main').appendChild(btn);
};

const createTaskDisplay = (name, dueDate) => {
	const taskDisplay = document.querySelector('.content-main');

	const taskLink = document.createElement('div');
	taskLink.classList.add('task-link');

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.classList.add('checkbox');
	checkbox.addEventListener('click', toggleTaskStatus);

	const taskName = document.createElement('p');
	taskName.classList.add('task-name');
	taskName.innerText = name;

	const detailsBtn = document.createElement('button');
	detailsBtn.classList.add('details-btn');
	detailsBtn.innerText = 'Details';

	const taskDueDate = document.createElement('span');
	taskDueDate.classList.add('task-due-date');
	taskDueDate.innerText = dueDate;

	const btnContainer = document.createElement('div');
	btnContainer.classList.add('btn-container');

	const editTaskBtn = document.createElement('img');
	editTaskBtn.classList.add('edit-task-btn');
	editTaskBtn.src = edit;

	const removeTaskBtn = document.createElement('img');
	removeTaskBtn.classList.add('remove-task-btn');
	removeTaskBtn.src = remove;
	removeTaskBtn.addEventListener('click', deleteTask);

	taskLink.appendChild(checkbox);
	taskLink.appendChild(taskName);
	btnContainer.appendChild(detailsBtn);
	btnContainer.appendChild(taskDueDate);
	btnContainer.appendChild(editTaskBtn);
	btnContainer.appendChild(removeTaskBtn);
	taskLink.appendChild(btnContainer);

	taskDisplay.appendChild(taskLink);
};

const clearDisplay = () => {
	const display = document.querySelector('.content-main');
	display.innerHTML = '';
	display.classList.remove('active');
};

export const renderAllTasks = (e) => {
	clearDisplay();
	const display = document.querySelector('.content-main');
	if (!display.classList.contains('active')) {
		tasks.forEach((task) => {
			createTaskDisplay(task.title, task.dueDate);
		});
		display.classList.add('active');
	} else if (display.classList.contains('active')) {
		return;
	}
	addTaskIcon();
};

export const renderTodaysTasks = (e) => {
	clearDisplay();
	tasks.forEach((task) => {
		if (task.dueDate.toLowerCase() == 'today') {
			createTaskDisplay(task.title, task.dueDate);
		}
	});
	addTaskIcon();
};

export const renderWeeksTasks = (e) => {
	clearDisplay();
	tasks.forEach((task) => {
		if (task.dueDate.toLowerCase() == 'this week') {
			createTaskDisplay(task.title, task.dueDate);
		}
	});
	addTaskIcon();
};

export const renderTasksByTag = (e) => {
	clearDisplay();
	tasks.forEach((task) => {
		if (task.tag.toLowerCase().includes(e.target.innerText.toLowerCase())) {
			createTaskDisplay(task.title, task.dueDate);
		}
	});
	addTaskIcon();
};

const toggleTaskStatus = (e) => {
	const taskTitle = e.target.nextSibling.innerText;
	// when checkbox is checked, done status = true, if unchecked, done = false
	tasks.forEach((task) => {
		if (task.title == taskTitle) {
			task.status = !task.status;
			e.target.parentNode.classList.toggle('done');
		}
	});
};

