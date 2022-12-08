import '../styles/style.scss';
import { addImages } from './nav';
import { tasks, taskFactory, findTaskIndex, checkTagsForNewCategory } from './task';
import { addLinkListeners } from './nav';
import { populateTasks, renderAllTasks } from './task-display';

document.addEventListener('DOMContentLoaded', addImages);
document.addEventListener('DOMContentLoaded', populateTasks);
document.addEventListener('DOMContentLoaded', checkTagsForNewCategory);
document.addEventListener('DOMContentLoaded', renderAllTasks);
document.addEventListener('DOMContentLoaded', addLinkListeners);