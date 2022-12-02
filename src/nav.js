import home from '../assets/home.svg';
import today from '../assets/today.svg';
import thisWeek from '../assets/this-week.svg';
import checklist from '../assets/checklist.svg';
import list from '../assets/list.svg';
import addTaskBtn from '../assets/add.svg';
import logo from '../assets/logo.svg';
import deleteProject from '../assets/delete.svg';
import { renderAllTasks, renderTodaysTasks, renderWeeksTasks } from './task-display';

const navLinks = Array.from(document.querySelectorAll('.navigation'));
const projectLinks = document.querySelector('.project-links');

export const addImages = (() => {
	const sideNav = document.querySelector('.side-nav');
	const navLinks = document.querySelector('.nav-links');
	const navSVGs = Array.from(document.querySelectorAll('.nav-svg'));

	const siteLogo = document.getElementById('logo');
	siteLogo.src = logo;

	const homeLink = document.getElementById('home-svg');
	homeLink.src = home;

	const todayLink = document.getElementById('today-svg');
	todayLink.src = today;

	const thisWeekLink = document.getElementById('this-week-svg');
	thisWeekLink.src = thisWeek;

	const projectsLink = document.getElementById('projects-svg');
	projectsLink.src = checklist;

	const addLink = document.getElementById('add-project');
	addLink.src = addTaskBtn;
})();

const toggleActiveOff = () => {
	navLinks.forEach((link) => {
		if (link.classList.contains('active')) {
			link.classList.remove('active');
		}
	});
	return;
};

const toggleActiveOn = (e) => {
	toggleActiveOff();
	if (!e.target.classList.contains('active')) {
		e.target.classList.add('active');
	}
	return;
};

const openAddProjectModal = (e) => {
	document.getElementById('add-project-link').style.display = 'none';
	document.querySelector('.add-project-modal').style.display = 'grid';
    console.log(document.querySelector('.add-book-btn'));

    document.querySelector('.add-book-btn').onclick = addProject;
};

const closeAddProjectModal = () => {
	document.getElementById('add-project-link').style.display = '';
	document.querySelector('.project-name-input').value = '';
	document.querySelector('.add-project-modal').style.display = 'none';
};

export const addLinkListeners = ((e) => {
	navLinks.forEach((link) => link.addEventListener('click', toggleActiveOn));

	const addProjectLink = document.getElementById('add-project-link');
	addProjectLink.addEventListener('click', openAddProjectModal);

	const closeAddProject = document.querySelector('.close-add-project');
	closeAddProject.addEventListener('click', closeAddProjectModal);

    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', renderAllTasks);
    
    const todayLink = document.getElementById('today-link');
    todayLink.addEventListener('click', renderTodaysTasks);

    const weekLink = document.getElementById('this-week-link');
    weekLink.addEventListener('click', renderWeeksTasks);

})();

const createProjectLink = (projectName) => {
	const projectNav = document.querySelector('.project-links');

	const projectLink = document.createElement('li');
	projectLink.classList.add('navigation');

	const projectSVG = document.createElement('img');
	projectSVG.classList.add('nav-svg');
	projectSVG.src = checklist;

    const name = document.createElement('p');
    name.innerHTML = projectName;

	projectLink.appendChild(projectSVG);
    projectLink.appendChild(name);
	projectNav.appendChild(projectLink);
};

const addProject = (e) => {
    let _projectName = document.querySelector('.project-name-input').value;
    createProjectLink(_projectName);
    closeAddProjectModal();
    toggleActiveOff();
}

const renderTasks = (tag, dueDate) => {

    return 
}


