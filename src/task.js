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
};

const projectStillExists = (tag) => {
	tasks.forEach(task => {
		if (task.tag === tag) {
			return true;
		}
	})
	return false;
}

const getDeletedTaskTag = (title) => {
	let task = tasks.find(task => task.title == title);
	let tag = task.tag;
	return tag;
}

export const deleteTask = (e) => {
	//assign title of task in current link to title
	let _title = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;

	//gets deleted task tag from tasks array
	const tag = getDeletedTaskTag(_title);
	console.log(projects);

	//replaces old projects array with updated array, excluding deleted tasks project 
	const updatedProjects = projects.filter(project => project !== tag);
	projects.splice(0, projects.length, ...updatedProjects);

	//find task index, removes task from task array
	let taskToDelete = findTaskIndex(_title);
	tasks.splice(taskToDelete, 1);

	//iterate back over tasks, if tag is still present in other tasks, add back to projects array
	updateProjectsArray();

	//remove target link from task display
	document.querySelector('.content-main').removeChild(e.target.parentNode.parentNode);
	console.log(projects);

	updateProjectLinks();
};

const updateProjectsArray = () => {
	tasks.forEach(task => {
		if (!projects.includes(task.tag)) projects.push(task.tag);
	})
}

const updateProjectLinks = () => {
	const links = document.querySelectorAll('.project');
	for (let i = 0; i < links.length; i++) {
		links[i].remove();
	}
	checkTagsForNewCategory();
	console.log(links);
}

export const checkTagsForNewCategory = () => {
	projects.forEach(project => {
		createProjectLink(project);
	})
};
