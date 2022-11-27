export const taskFactory = (title, desc, dueDate, priority, status, destination) => {
	let task = {
		title,
		desc,
		dueDate,
		priority,
		status,
        destination
	};

    `${destination}`.push(task);

	return {
		editTitle() {
			return prompt('New Title: ');
		},
		editDesc() {
			return prompt('New Desc: ');
		},
		editDueDate() {
			return prompt('New DueDate: ');
		},
		editPriority() {
			return prompt('New Priority: ');
		},
		editStatus() {
			return prompt('New Status: ');
		},
        editDestination() {
			return prompt('New Destination: ');
		},
	};
};

export const deleteTask = (arg) => {
    return 
}


