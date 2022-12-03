const modalTitle = () => {
    const modalTaskTitle = document.createElement('input');
    modalTaskTitle.classList.add('modal-title');
    modalTaskTitle.setAttribute('type', 'text');
    modalTaskTitle.setAttribute('placeholder', "Title: E.g. 'Go To Gym', 'Cook Dinner");

    return modalTaskTitle;
}

const modalDesc = () => {
    const modalTaskDesc = document.createElement('textarea');
    modalTaskDesc.classList.add('modal-desc');
    modalTaskDesc.setAttribute('type', 'text');
    modalTaskDesc.setAttribute('placeholder', "Description: E.g. 'Upper Body High Volume Workout'");

    return modalTaskDesc;
}

const modalDueDate = () => {
    const modalDateContainer = document.createElement('div');
    const dateText = document.createElement('p');
    const modalDueDate = document.createElement('input');
    modalDateContainer.classList.add('modal-date-container');
    dateText.innerText = 'Due Date: ';
    modalDueDate.classList.add('modal-due-date');
    modalDueDate.setAttribute('type', 'date');
    modalDueDate.setAttribute('placeholder', "yyyy/mm/dd");

    modalDateContainer.appendChild(dateText)
    modalDateContainer.appendChild(modalDueDate);

    return modalDateContainer;
}

const lowPriorityBtn = () => {
    const lowBtn = document.createElement('button');
    lowBtn.classList.add('modal-btn');
    lowBtn.setAttribute('id', 'low-priority');
    lowBtn.innerText = 'Low';

    return lowBtn;
}

const medPriorityBtn = () => {
    const mediumBtn = document.createElement('button');
    mediumBtn.classList.add('modal-btn');
    mediumBtn.setAttribute('id', 'medium-priority');
    mediumBtn.innerText = 'Medium';

    return mediumBtn;
}

const highPriorityBtn = () => {
    const highBtn = document.createElement('button');
    highBtn.classList.add('modal-btn');
    highBtn.setAttribute('id', 'high-priority');
    highBtn.innerText = 'High';

    return highBtn;
}

const cancelBtn = () => {
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('modal-btn');
    cancelBtn.setAttribute('id', 'exit-modal');
    cancelBtn.innerText = 'Cancel';

    return cancelBtn;
}

const appendBtns = (low, med, high, cancel, confirm) => {
    const priorityBtnContainer = document.createElement('div');
    priorityBtnContainer.classList.add('priority-btn-container');
    priorityBtnContainer.appendChild(low);
    priorityBtnContainer.appendChild(med);
    priorityBtnContainer.appendChild(high);
    priorityBtnContainer.appendChild(cancel);
    priorityBtnContainer.appendChild(confirm);
    

    return priorityBtnContainer;
}

const confirmBtn = () => {
    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('modal-btn');
    confirmBtn.setAttribute('id', 'confirm-add-task');
    confirmBtn.innerText = 'Confirm';

    return confirmBtn;
}

export const renderAddTaskModal = () => {
	const addTaskModal = document.createElement('div');
	addTaskModal.classList.add('modal-add-task');

    const title = modalTitle();
    const desc = modalDesc();
    const date = modalDueDate();
    const low = lowPriorityBtn();
    const med = medPriorityBtn();
    const high = highPriorityBtn();
    const cancel = cancelBtn();
    const confirm = confirmBtn();

    const btns = appendBtns(low, med, high, cancel, confirm);

    addTaskModal.appendChild(title);
    addTaskModal.appendChild(desc);
    addTaskModal.appendChild(date);
    addTaskModal.appendChild(btns);

    document.querySelector('.content-main').appendChild(addTaskModal);
};
