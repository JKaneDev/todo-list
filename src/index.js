import '../styles/style.scss';
import { addImages } from './nav';
import { tasks, taskFactory, findTaskIndex, deleteTask, checkTagsForNewCategory } from './task';
import { addLinkListeners, addProject } from './nav';
import { populateTasks } from './task-display';

checkTagsForNewCategory();