import home from '../assets/home.svg';
import today from '../assets/today.svg';
import thisWeek from '../assets/this-week.svg';
import checklist from '../assets/checklist.svg';
import list from '../assets/list.svg';
import addTaskBtn from '../assets/add.svg';
import logo from '../assets/logo.svg';

export const addImages = () => {
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
};
