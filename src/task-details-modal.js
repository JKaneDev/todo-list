import exit from '../assets/delete.svg';

const _title = () => {
    const taskTitle = document.createElement('h1');
    taskTitle.classList.add('details-task-title');
    taskTitle.innerText = 'Title';

    return taskTitle;
}

const _project = () => {
    const projectField = document.createElement('li');
    projectField.classList.add('details-li');
    const projectLabel = document.createElement('p');
    projectLabel.innerText = 'Project: ';
    const projectName = document.createElement('p');
    projectName.classList.add('details-project-name');

    projectField.appendChild(projectLabel);
    projectField.appendChild(projectName);

    return projectField;
}

const _priority = () => {
    const priorityField = document.createElement('li');
    priorityField.classList.add('details-li');
    const priorityLabel = document.createElement('p');
    priorityLabel.innerText = 'Priority: ';
    const priorityValue = document.createElement('p');
    priorityValue.classList.add('details-priority-value');

    priorityField.appendChild(priorityLabel);
    priorityField.appendChild(priorityValue);

    return priorityField;
}

const _date = () => {
    const dateField = document.createElement('li');
    dateField.classList.add('details-li');
    const dateLabel = document.createElement('p');
    dateLabel.innerText = 'Date: ';
    const dateValue = document.createElement('p');
    dateValue.classList.add('details-date-value');

    dateField.appendChild(dateLabel);
    dateField.appendChild(dateValue);

    return dateField;
}

const _desc = () => {
    const descField = document.createElement('li');
    descField.classList.add('desc-li');
    const descLabel = document.createElement('p');
    descLabel.innerText = 'Description: ';
    const descText = document.createElement('p')
    descText.classList.add('details-desc-text');

    descField.appendChild(descLabel);
    descField.appendChild(descText);

    return descField;
}

const _exit = () => {
    const btn = document.createElement('img');
    btn.src = exit;
    btn.classList.add('exit-details-modal');
    btn.addEventListener('click', closeDetailsModal);

    return btn;
}

export const taskDetailsModal = () => {
    const container = document.createElement('div');
    container.classList.add('task-details');

    const details = document.createElement('ul');
    details.classList.add('details-ul');

    const title = _title();
    const project = _project();
    const priority = _priority();
    const date = _date();
    const desc = _desc();
    const exit = _exit();
    
    details.appendChild(title);
    details.appendChild(project);
    details.appendChild(priority);
    details.appendChild(date);
    details.appendChild(desc);

    container.appendChild(details);
    container.appendChild(exit);

    return container;
}

const closeDetailsModal = (e) => {
    const body = document.querySelector('.body');
    const modal = document.querySelector('.task-details');
    body.removeChild(modal);
    document.querySelector('.container').style.filter = 'blur(0)';
}