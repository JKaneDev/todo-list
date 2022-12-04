import { taskFactory } from "./task";

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

const modalTagInput = () => {
    const tagInput = document.createElement('input');
    tagInput.setAttribute('type', 'text');
    tagInput.setAttribute('placeholder', "Tag: E.g. 'The Odin Project', 'Personal'");
    tagInput.classList.add('tag-input');
    return tagInput;
}

const dateTagWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'date-tag-wrapper');
    return wrapper;
}

const appendDateAndTag = () => {
    const wrapper = dateTagWrapper();
    const date = modalDueDate();
    const tag = modalTagInput();

    wrapper.appendChild(date);
    wrapper.appendChild(tag);

    return wrapper;
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
    const btnWrapper = document.createElement('div');
    btnWrapper.setAttribute('id', 'modal-btn-wrapper');

    const priorityBtnContainer = document.createElement('div');
    priorityBtnContainer.classList.add('priority-btn-container');

    const toggleModalBtns = document.createElement('div');
    toggleModalBtns.classList.add('toggle-modal-btns');

    priorityBtnContainer.appendChild(low);
    priorityBtnContainer.appendChild(med);
    priorityBtnContainer.appendChild(high);
    toggleModalBtns.appendChild(cancel);
    toggleModalBtns.appendChild(confirm);
    
    btnWrapper.appendChild(priorityBtnContainer);
    btnWrapper.appendChild(toggleModalBtns);

    return btnWrapper;
}

const confirmBtn = () => {
    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('modal-btn');
    confirmBtn.setAttribute('id', 'confirm-add-task');
    confirmBtn.innerText = 'Confirm';

    return confirmBtn;
}

const toggleModalActive = () => {
    const container = document.querySelector('.container');
    const modal = document.querySelector('.modal-add-task');
    container.classList.toggle('modal-active');
    if (container.classList.contains('modal-active')) {
        modal.style.filter = 'blur(0)';
        container.style.filter = 'blur(3px)';
    }
}


const addListeners = () => {
    document.getElementById('exit-modal').addEventListener('click', closeModal);
    document.getElementById('confirm-add-task').addEventListener('click', getTaskFromInput);
}


export const renderAddTaskModal = () => {
	const addTaskModal = document.createElement('div');
	addTaskModal.classList.add('modal-add-task');

    const title = modalTitle();
    const desc = modalDesc();
    const dateAndTag = appendDateAndTag();
    const low = lowPriorityBtn();
    const med = medPriorityBtn();
    const high = highPriorityBtn();
    const cancel = cancelBtn();
    const confirm = confirmBtn();

    const btns = appendBtns(low, med, high, cancel, confirm);

    addTaskModal.appendChild(title);
    addTaskModal.appendChild(desc);
    addTaskModal.appendChild(dateAndTag);
    addTaskModal.appendChild(btns);

    document.querySelector('.body').appendChild(addTaskModal);
    toggleModalActive();
    addListeners();
};

 const closeModal = () => {
    const body = document.querySelector('.body');
    body.removeChild(document.querySelector('.modal-add-task'));
    toggleModalActive();
    document.querySelector('.container').style.filter = 'blur(0)';
 }

 const getPriorityFromModal = () => {
    
 }

 const getTaskFromInput = () => {
    const newTask = taskFactory('title', 'tag', 'desc', 'due date', 'priority', false);

    newTask.title = document.querySelector('.modal-title').value;
    newTask.desc = document.querySelector('.modal-desc').value;
    newTask.date = document.querySelector('.modal-due-date').value;

 }