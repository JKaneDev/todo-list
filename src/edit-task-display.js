import { renderAddTaskModal } from './add-task-modal';
import { tasks } from './task';

const getPriorityFromTask = (title) => {
	let _task = tasks.find((task) => task.title == title);
	if (_task.priority.toLowerCase() === 'high') {
		document.getElementById('high-priority').classList.toggle('active');
	}
	if (_task.priority.toLowerCase() === 'medium') {
		document.getElementById('medium-priority').classList.toggle('active');
	}
	if (_task.priority.toLowerCase() === 'low') {
		document.getElementById('low-priority').classList.toggle('active');
	}
};

const stylePriorityBtns = () => {
	const low = document.getElementById('low-priority');
	const medium = document.getElementById('medium-priority');
	const high = document.getElementById('high-priority');

	if (low.classList.contains('active')) {
		low.style.color = 'rgb(6, 123, 6);';
		low.style.border = '1px solid rgb(6, 123, 6)';
	}
	if (medium.classList.contains('active')) {
		medium.style.color = '#d97706';
		medium.style.border = '1px solid #d97706';
	}
	if (high.classList.contains('active')) {
		high.style.color = 'rgb(178, 11, 11)';
		high.style.border = '1px solid rgb(178, 11, 11)';
	}
};

export const preventDuplicates = (title) => {
	let _task = tasks.find((task) => task.title == title);
	let _taskIdx = tasks.indexOf(_task);
	tasks.splice(_taskIdx, 1);
};

export const renderEditTaskModal = (e) => {
	console.log(tasks);
	renderAddTaskModal();
	const modal = document.querySelector('.modal-add-task');
	modal.classList.toggle('edit-mode');

	if (!modal.classList.contains('edit-mode')) return;

	let _title = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;
	let _task = tasks.find((task) => task.title == _title);

	const title = document.querySelector('.modal-title');
	const tag = document.querySelector('.tag-input');
	const desc = document.querySelector('.modal-desc');
	const dueDate = document.querySelector('.modal-due-date');
	getPriorityFromTask(_title);
	stylePriorityBtns();

	title.value = _task.title;
	tag.value = _task.tag;
	desc.value = _task.desc;
	dueDate.value = _task.dueDate;

	const confirmEdit = document.getElementById('confirm-add-task');
	confirmEdit.innerText = 'Edit';
};
