import home from '../assets/home.svg';
import today from '../assets/today.svg';
import thisWeek from '../assets/this-week.svg';
import checklist from '../assets/checklist.svg';
import list from '../assets/list.svg';
import addTaskBtn from '../assets/add.svg';
import logo from '../assets/logo.svg';
import deleteProject from '../assets/delete.svg';

const navLinks = Array.from(document.querySelectorAll('.navigation'));

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

export const toggleActiveOff = () => {
    navLinks.forEach(link => {
        if (link.classList.contains('active')) {
            link.classList.remove('active')
        }
    })
    return 
}

export const toggleActiveOn = (e) => {
    console.log(navLinks);
    toggleActiveOff();
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('active');
    }
    return 
}

export const addLinkListeners = ((e) => {
    navLinks.forEach(link => {
        link.addEventListener('click', toggleActiveOn);
    })
    return 
})();

export const createNewProject = () => {
    const newProject = [];
} 

export const createProjectLink = (projectName) => {
    const projectNav = document.querySelector('.project-links');

    const projectLink = document.createElement('li');
    projectLink.classList.add('navigation');

    const projectSVG = document.createElement('img');
    projectSVG.classList.add('nav-svg');
    projectSVG.src = checklist;

    projectSVG.innerText = projectName;

    const removeProject = document.createElement('img');
    removeProject.src = deleteProject;

    projectLink.appendChild(projectSVG);
    projectLink.appendChild(removeProject);
    projectNav.appendChild(projectLink);
}
