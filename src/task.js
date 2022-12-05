import { createProjectLink } from './nav';

export const tasks = [];
export const projects = [];

export const taskFactory = (title, tag, desc, dueDate, priority, status) => {
	const task = {
		title,
		tag,
		desc,
		dueDate,
		priority,
		status: false,
	};
	
	tasks.push(task);
	if (!projects.includes(task.tag)) projects.push(task.tag);
	

	return {
		task,
		editTitle(title) {
			task.title = title;
		},
		editTag(tag) {
			task.tag = tag;
		},
		editDesc(desc) {
			task.desc = desc;
		},
		editDueDate(dueDate) {
			task.dueDate = dueDate;
		},
		editPriority(priority) {
			task.priority = priority;
		},
		editStatus(status) {
			task.status = status;
		},
	};
};

export const findTaskIndex = (title) => {
	let _title = title;
	const index = tasks.findIndex((task) => {
		return task.title === _title;
	});
	console.log(index);
};

export const deleteTask = (e) => {
	//assign title of task in current link to title
	let _title = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;

	let taskToDelete = findTaskIndex(_title);
	tasks.splice(taskToDelete, 1);

	//remove target link from task display
	document.querySelector('.content-main').removeChild(e.target.parentNode.parentNode);
};

export const checkTagsForNewCategory = () => {
	const projectNames = Array.from(document.querySelectorAll('.project-name'));
	projects.forEach(project => {
		console.log(project);
		createProjectLink(project);
	})
};
