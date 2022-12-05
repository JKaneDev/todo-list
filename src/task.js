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

export const deleteTask = (title) => {
	let _title = title;
	let taskToDelete = findTaskIndex(_title);
	tasks.splice(taskToDelete, 1);
	console.log(tasks);
};

export const checkTagsForNewCategory = () => {
	const projectNames = Array.from(document.querySelectorAll('.project-name'));
	projects.forEach(project => {
		console.log(project);
		createProjectLink(project);
	})
};
