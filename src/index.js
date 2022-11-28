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

    tasks.push(task);
    console.log(tasks);

	return {
        task,
		editTitle(title) {
			this.title = title;
		},
		editTag(tag) {
			this.tag = tag;
		},
		editDesc(desc) {
			this.desc = desc;
		},
		editDueDate(dueDate) {
			this.dueDate = dueDate;
		},
		editPriority(priority) {
			this.priority = priority;
		},
		editStatus(status) {
			this.status = status;
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



