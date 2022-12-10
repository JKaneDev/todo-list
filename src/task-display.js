import { tasks, taskFactory, deleteTask } from './task';
import edit from '../assets/edit.svg';
import remove from '../assets/remove.svg';
import { renderAddTaskModal } from './add-task-modal';
import addTask from '../assets/add-task.svg';
import { taskDetailsModal } from './task-details-modal';
import { renderEditTaskModal } from './edit-task-display';

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
		'Get Something Delicious',
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

export const getCurrentDate = () => {
	const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

	return currentDate;
}

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
	detailsBtn.addEventListener('click', viewTaskDetails);

	const taskDueDate = document.createElement('span');
	taskDueDate.classList.add('task-due-date');
	taskDueDate.innerText = dueDate;

	const btnContainer = document.createElement('div');
	btnContainer.classList.add('btn-container');

	const editTaskBtn = document.createElement('img');
	editTaskBtn.classList.add('edit-task-btn');
	editTaskBtn.src = edit;
	editTaskBtn.addEventListener('click', renderEditTaskModal);

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
	display.removeAttribute('class');
	display.classList.add('content-main');
};

export const renderAllTasks = (e) => {
	clearDisplay();
	const display = document.querySelector('.content-main');
	if (!display.classList.contains('active')) {
		tasks.forEach((task) => {
			createTaskDisplay(task.title, task.dueDate);
		});
		display.classList.add('active', 'home-view');
	} else if (display.classList.contains('active')) {
		return;
	}
	addTaskIcon();
};

export const renderTodaysTasks = (e) => {
	clearDisplay();
	document.querySelector('.content-main').classList.add('today-view');
	tasks.forEach((task) => {
		if (task.dueDate.toLowerCase() == 'today') {
			createTaskDisplay(task.title, task.dueDate);
		}
	});
	addTaskIcon();
};

export const renderWeeksTasks = (e) => {
	clearDisplay();
	document.querySelector('.content-main').classList.add('week-view');
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

	let _projectName = e.target.parentNode.firstChild.nextSibling.innerText;
	document.querySelector('.content-main').classList.add(`${_projectName}-view`);
	console.log(_projectName);
	console.log(document.querySelector('.content-main').classList);
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

const viewTaskDetails = (e) => {
	let _title = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;
	let task = tasks.find(task => task.title === _title);
	console.log(task);

	const modal = taskDetailsModal();
	document.querySelector('.body').appendChild(modal);
	document.querySelector('.container').style.filter = 'blur(3px)';
	

	document.querySelector('.details-task-title').innerText = task.title;
	document.querySelector('.details-project-name').innerText = task.tag;
	document.querySelector('.details-priority-value').innerText = task.priority;
	document.querySelector('.details-date-value').innerText = task.dueDate;
	document.querySelector('.details-desc-text').innerText = task.desc;

}
