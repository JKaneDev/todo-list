import { tasks } from './taskStore';

export const taskFactory = (title, tag, desc, dueDate, priority, status) => {
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

export const deleteTask = (title) => {
    let _title = title;
    // const index = tasks.indexOf(_title);
    // if (index > -1) tasks.splice(index, 1);
    console.log(_title);
    console.log(tasks);
}


