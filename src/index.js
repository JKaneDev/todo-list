window.tasks = [];

window.taskFactory = function(title, tag, desc, dueDate, priority, status) {
	const task = {
		title,
        tag,
		desc,
		dueDate,
		priority,
		status,
	};

    window.tasks.push(task);
    console.log(window.tasks);

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
 

window.findTaskIndex = function(title) {
    let _title = title;
    const index = tasks.findIndex(task => {
        return task.title === _title;
    })
    console.log(index);
}

window.deleteTask = function(title) {
    let _title = title;
    let taskToDelete = findTaskIndex(_title);
    tasks.splice(taskToDelete, 1);
    console.log(tasks);
}



