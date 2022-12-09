/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-task-modal.js":
/*!*******************************!*\
  !*** ./src/add-task-modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAddTaskModal": () => (/* binding */ renderAddTaskModal)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");

var modalTitle = function modalTitle() {
  var modalTaskTitle = document.createElement('input');
  modalTaskTitle.classList.add('modal-title');
  modalTaskTitle.setAttribute('type', 'text');
  modalTaskTitle.setAttribute('placeholder', "Title: E.g. 'Go To Gym', 'Cook Dinner");
  return modalTaskTitle;
};
var modalDesc = function modalDesc() {
  var modalTaskDesc = document.createElement('textarea');
  modalTaskDesc.classList.add('modal-desc');
  modalTaskDesc.setAttribute('type', 'text');
  modalTaskDesc.setAttribute('placeholder', "Description: E.g. 'Upper Body High Volume Workout'");
  return modalTaskDesc;
};
var modalDueDate = function modalDueDate() {
  var modalDateContainer = document.createElement('div');
  var dateText = document.createElement('p');
  var modalDueDate = document.createElement('input');
  modalDateContainer.classList.add('modal-date-container');
  dateText.innerText = 'Due Date: ';
  modalDueDate.classList.add('modal-due-date');
  modalDueDate.setAttribute('type', 'date');
  modalDueDate.setAttribute('placeholder', "yyyy/mm/dd");
  modalDateContainer.appendChild(dateText);
  modalDateContainer.appendChild(modalDueDate);
  return modalDateContainer;
};
var modalTagInput = function modalTagInput() {
  var tagInput = document.createElement('input');
  tagInput.setAttribute('type', 'text');
  tagInput.setAttribute('placeholder', "Tag: E.g. 'The Odin Project', 'Personal'");
  tagInput.classList.add('tag-input');
  return tagInput;
};
var dateTagWrapper = function dateTagWrapper() {
  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'date-tag-wrapper');
  return wrapper;
};
var appendDateAndTag = function appendDateAndTag() {
  var wrapper = dateTagWrapper();
  var date = modalDueDate();
  var tag = modalTagInput();
  wrapper.appendChild(date);
  wrapper.appendChild(tag);
  return wrapper;
};
var lowPriorityBtn = function lowPriorityBtn() {
  var lowBtn = document.createElement('button');
  lowBtn.classList.add('priority-btn', 'modal-btn');
  lowBtn.setAttribute('id', 'low-priority');
  lowBtn.innerText = 'Low';
  return lowBtn;
};
var medPriorityBtn = function medPriorityBtn() {
  var mediumBtn = document.createElement('button');
  mediumBtn.classList.add('priority-btn', 'modal-btn');
  mediumBtn.setAttribute('id', 'medium-priority');
  mediumBtn.innerText = 'Medium';
  return mediumBtn;
};
var highPriorityBtn = function highPriorityBtn() {
  var highBtn = document.createElement('button');
  highBtn.classList.add('priority-btn', 'modal-btn');
  highBtn.setAttribute('id', 'high-priority');
  highBtn.innerText = 'High';
  return highBtn;
};
var cancelBtn = function cancelBtn() {
  var cancelBtn = document.createElement('button');
  cancelBtn.classList.add('modal-btn');
  cancelBtn.setAttribute('id', 'exit-modal');
  cancelBtn.innerText = 'Cancel';
  return cancelBtn;
};
var appendBtns = function appendBtns(low, med, high, cancel, confirm) {
  var btnWrapper = document.createElement('div');
  btnWrapper.setAttribute('id', 'modal-btn-wrapper');
  var priorityBtnContainer = document.createElement('div');
  priorityBtnContainer.classList.add('priority-btn-container');
  var toggleModalBtns = document.createElement('div');
  toggleModalBtns.classList.add('toggle-modal-btns');
  priorityBtnContainer.appendChild(low);
  priorityBtnContainer.appendChild(med);
  priorityBtnContainer.appendChild(high);
  toggleModalBtns.appendChild(cancel);
  toggleModalBtns.appendChild(confirm);
  btnWrapper.appendChild(priorityBtnContainer);
  btnWrapper.appendChild(toggleModalBtns);
  return btnWrapper;
};
var confirmBtn = function confirmBtn() {
  var confirmBtn = document.createElement('button');
  confirmBtn.classList.add('modal-btn');
  confirmBtn.setAttribute('id', 'confirm-add-task');
  confirmBtn.innerText = 'Confirm';
  return confirmBtn;
};
var toggleModalActive = function toggleModalActive() {
  var container = document.querySelector('.container');
  var modal = document.querySelector('.modal-add-task');
  container.classList.toggle('modal-active');
  if (container.classList.contains('modal-active')) {
    modal.style.filter = 'blur(0)';
    container.style.filter = 'blur(3px)';
  }
};
var addListeners = function addListeners() {
  document.getElementById('exit-modal').addEventListener('click', closeModal);
  document.getElementById('confirm-add-task').addEventListener('click', getTaskFromInput);
  var priorityBtns = Array.from(document.querySelectorAll('.priority-btn'));
  priorityBtns.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      return btn.classList.add('active');
    });
  });
};
var renderAddTaskModal = function renderAddTaskModal() {
  var addTaskModal = document.createElement('div');
  addTaskModal.classList.add('modal-add-task');
  var title = modalTitle();
  var desc = modalDesc();
  var dateAndTag = appendDateAndTag();
  var low = lowPriorityBtn();
  var med = medPriorityBtn();
  var high = highPriorityBtn();
  var cancel = cancelBtn();
  var confirm = confirmBtn();
  var btns = appendBtns(low, med, high, cancel, confirm);
  addTaskModal.appendChild(title);
  addTaskModal.appendChild(desc);
  addTaskModal.appendChild(dateAndTag);
  addTaskModal.appendChild(btns);
  document.querySelector('.body').appendChild(addTaskModal);
  toggleModalActive();
  addListeners();
};
var closeModal = function closeModal() {
  var body = document.querySelector('.body');
  body.removeChild(document.querySelector('.modal-add-task'));
  toggleModalActive();
  document.querySelector('.container').style.filter = 'blur(0)';
};
var getPriorityFromModal = function getPriorityFromModal() {
  var priority;
  Array.from(document.querySelectorAll('.priority-btn')).forEach(function (btn) {
    if (btn.classList.contains('active')) {
      priority = btn.innerText;
    }
  });
  return priority;
};
var getTaskFromInput = function getTaskFromInput() {
  var title = document.querySelector('.modal-title').value;
  var tag = document.querySelector('.tag-input').value;
  var desc = document.querySelector('.modal-desc').value;
  var date = document.querySelector('.modal-due-date').value;
  var priority = getPriorityFromModal();
  var status = false;
  var newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(title, tag, desc, date, priority, status);
  (0,_task__WEBPACK_IMPORTED_MODULE_0__.updateProjectLinks)();
  (0,_task__WEBPACK_IMPORTED_MODULE_0__.checkTagsForNewCategory)();
  closeModal();
};

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addImages": () => (/* binding */ addImages),
/* harmony export */   "addLinkListeners": () => (/* binding */ addLinkListeners),
/* harmony export */   "createProjectLink": () => (/* binding */ createProjectLink)
/* harmony export */ });
/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home.svg */ "./assets/home.svg");
/* harmony import */ var _assets_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/today.svg */ "./assets/today.svg");
/* harmony import */ var _assets_this_week_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/this-week.svg */ "./assets/this-week.svg");
/* harmony import */ var _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/checklist.svg */ "./assets/checklist.svg");
/* harmony import */ var _assets_list_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/list.svg */ "./assets/list.svg");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/add.svg */ "./assets/add.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/logo.svg */ "./assets/logo.svg");
/* harmony import */ var _assets_add_task_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/add-task.svg */ "./assets/add-task.svg");
/* harmony import */ var _task_display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-display */ "./src/task-display.js");
/* harmony import */ var _add_task_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-task-modal */ "./src/add-task-modal.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task */ "./src/task.js");











var navLinks = Array.from(document.querySelectorAll('.navigation'));
var projectLinks = document.querySelector('.project-links');
var addImages = function addImages() {
  var sideNav = document.querySelector('.side-nav');
  var navLinks = document.querySelector('.nav-links');
  var navSVGs = Array.from(document.querySelectorAll('.nav-svg'));
  var siteLogo = document.getElementById('logo');
  siteLogo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__;
  var homeLink = document.getElementById('home-svg');
  homeLink.src = _assets_home_svg__WEBPACK_IMPORTED_MODULE_0__;
  var todayLink = document.getElementById('today-svg');
  todayLink.src = _assets_today_svg__WEBPACK_IMPORTED_MODULE_1__;
  var thisWeekLink = document.getElementById('this-week-svg');
  thisWeekLink.src = _assets_this_week_svg__WEBPACK_IMPORTED_MODULE_2__;
  var addLink = document.getElementById('add-project');
  addLink.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_5__;
  var addTaskSVG = document.getElementById('add-task');
  addTaskSVG.src = _assets_add_task_svg__WEBPACK_IMPORTED_MODULE_7__;
};
var toggleActiveOff = function toggleActiveOff() {
  navLinks.forEach(function (link) {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
  return;
};
var toggleActiveOn = function toggleActiveOn(e) {
  toggleActiveOff();
  if (!e.target.classList.contains('active')) {
    e.target.classList.add('active');
  }
  return;
};
var openAddProjectModal = function openAddProjectModal(e) {
  document.getElementById('add-project-link').style.display = 'none';
  document.querySelector('.add-project-modal').style.display = 'grid';
  console.log(document.querySelector('.add-book-btn'));
  document.querySelector('.add-book-btn').onclick = addProject;
};
var closeAddProjectModal = function closeAddProjectModal() {
  document.getElementById('add-project-link').style.display = '';
  document.querySelector('.project-name-input').value = '';
  document.querySelector('.add-project-modal').style.display = 'none';
};
var addLinkListeners = function addLinkListeners(e) {
  navLinks.forEach(function (link) {
    return link.addEventListener('click', toggleActiveOn);
  });
  var addProjectLink = document.getElementById('add-project-link');
  addProjectLink.addEventListener('click', openAddProjectModal);
  var closeAddProject = document.querySelector('.close-add-project');
  closeAddProject.addEventListener('click', closeAddProjectModal);
  var homeLink = document.getElementById('home-link');
  homeLink.addEventListener('click', _task_display__WEBPACK_IMPORTED_MODULE_8__.renderAllTasks);
  var todayLink = document.getElementById('today-link');
  todayLink.addEventListener('click', _task_display__WEBPACK_IMPORTED_MODULE_8__.renderTodaysTasks);
  var weekLink = document.getElementById('this-week-link');
  weekLink.addEventListener('click', _task_display__WEBPACK_IMPORTED_MODULE_8__.renderWeeksTasks);
  var addTask = document.getElementById('add-task');
  addTask.addEventListener('click', _add_task_modal__WEBPACK_IMPORTED_MODULE_9__.renderAddTaskModal);
};
var createProjectLink = function createProjectLink(projectName) {
  var projectNav = document.querySelector('.project-links');
  var projectLink = document.createElement('li');
  projectLink.classList.add('navigation', 'project');
  projectLink.setAttribute('id', "".concat(projectName));
  var projectSVG = document.createElement('img');
  projectSVG.classList.add('nav-svg');
  projectSVG.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_3__;
  var name = document.createElement('p');
  name.innerHTML = projectName;
  var remove = _removeButton();
  projectLink.appendChild(projectSVG);
  projectLink.appendChild(name);
  projectLink.appendChild(remove);
  projectNav.appendChild(projectLink);
  projectLink.addEventListener('click', _task_display__WEBPACK_IMPORTED_MODULE_8__.renderTasksByTag);
};
var addProject = function addProject(e) {
  var _projectName = document.querySelector('.project-name-input').value;
  createProjectLink(_projectName);
  closeAddProjectModal();
  toggleActiveOff();
};
var _removeButton = function _removeButton() {
  var btn = document.createElement('button');
  btn.innerText = 'Remove';
  btn.classList.add('remove-project-btn');
  btn.addEventListener('click', removeProject);
  return btn;
};
var removeProject = function removeProject(e) {
  var _projectName = e.target.parentNode.firstChild.nextSibling.innerText;
  var _project = _task__WEBPACK_IMPORTED_MODULE_10__.projects.find(function (project) {
    return project == _projectName;
  });
  var _projectIdx = _task__WEBPACK_IMPORTED_MODULE_10__.projects.indexOf(_project);
  document.getElementById("".concat(_project)).remove();
  if (_projectIdx != -1) _task__WEBPACK_IMPORTED_MODULE_10__.projects.splice(_projectIdx, 1);
  console.log(_task__WEBPACK_IMPORTED_MODULE_10__.projects);
};

/***/ }),

/***/ "./src/task-details-modal.js":
/*!***********************************!*\
  !*** ./src/task-details-modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDetailsModal": () => (/* binding */ taskDetailsModal)
/* harmony export */ });
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delete.svg */ "./assets/delete.svg");

var _title = function _title() {
  var taskTitle = document.createElement('h1');
  taskTitle.classList.add('details-task-title');
  taskTitle.innerText = 'Title';
  return taskTitle;
};
var _project = function _project() {
  var projectField = document.createElement('li');
  projectField.classList.add('details-li');
  var projectLabel = document.createElement('p');
  projectLabel.innerText = 'Project: ';
  var projectName = document.createElement('p');
  projectName.classList.add('details-project-name');
  projectField.appendChild(projectLabel);
  projectField.appendChild(projectName);
  return projectField;
};
var _priority = function _priority() {
  var priorityField = document.createElement('li');
  priorityField.classList.add('details-li');
  var priorityLabel = document.createElement('p');
  priorityLabel.innerText = 'Priority: ';
  var priorityValue = document.createElement('p');
  priorityValue.classList.add('details-priority-value');
  priorityField.appendChild(priorityLabel);
  priorityField.appendChild(priorityValue);
  return priorityField;
};
var _date = function _date() {
  var dateField = document.createElement('li');
  dateField.classList.add('details-li');
  var dateLabel = document.createElement('p');
  dateLabel.innerText = 'Date: ';
  var dateValue = document.createElement('p');
  dateValue.classList.add('details-date-value');
  dateField.appendChild(dateLabel);
  dateField.appendChild(dateValue);
  return dateField;
};
var _desc = function _desc() {
  var descField = document.createElement('li');
  descField.classList.add('desc-li');
  var descLabel = document.createElement('p');
  descLabel.innerText = 'Description: ';
  var descText = document.createElement('p');
  descText.classList.add('details-desc-text');
  descField.appendChild(descLabel);
  descField.appendChild(descText);
  return descField;
};
var _exit = function _exit() {
  var btn = document.createElement('img');
  btn.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
  btn.classList.add('exit-details-modal');
  btn.addEventListener('click', closeDetailsModal);
  return btn;
};
var taskDetailsModal = function taskDetailsModal() {
  var container = document.createElement('div');
  container.classList.add('task-details');
  var details = document.createElement('ul');
  details.classList.add('details-ul');
  var title = _title();
  var project = _project();
  var priority = _priority();
  var date = _date();
  var desc = _desc();
  var exit = _exit();
  details.appendChild(title);
  details.appendChild(project);
  details.appendChild(priority);
  details.appendChild(date);
  details.appendChild(desc);
  container.appendChild(details);
  container.appendChild(exit);
  return container;
};
var closeDetailsModal = function closeDetailsModal(e) {
  var body = document.querySelector('.body');
  var modal = document.querySelector('.task-details');
  body.removeChild(modal);
  document.querySelector('.container').style.filter = 'blur(0)';
};

/***/ }),

/***/ "./src/task-display.js":
/*!*****************************!*\
  !*** ./src/task-display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateTasks": () => (/* binding */ populateTasks),
/* harmony export */   "renderAllTasks": () => (/* binding */ renderAllTasks),
/* harmony export */   "renderTasksByTag": () => (/* binding */ renderTasksByTag),
/* harmony export */   "renderTodaysTasks": () => (/* binding */ renderTodaysTasks),
/* harmony export */   "renderWeeksTasks": () => (/* binding */ renderWeeksTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/edit.svg */ "./assets/edit.svg");
/* harmony import */ var _assets_remove_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/remove.svg */ "./assets/remove.svg");
/* harmony import */ var _add_task_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-task-modal */ "./src/add-task-modal.js");
/* harmony import */ var _assets_add_task_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/add-task.svg */ "./assets/add-task.svg");
/* harmony import */ var _task_details_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-details-modal */ "./src/task-details-modal.js");






var populateTasks = function populateTasks() {
  var gym = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Go To Gym', 'Personal', 'Train Hard', 'Today', 'High', false);
  var shopping = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Get Shopping', 'Personal', 'Get Something Delicious', 'Tomorrow', 'High', false);
  var codeWars = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Code Wars Practice', 'Coding', 'Practice Data Structures', 'This Week', 'Medium', false);
  var toDoList = (0,_task__WEBPACK_IMPORTED_MODULE_0__.taskFactory)('Build To-Do List', 'The Odin Project', 'Javascript Course', 'This Week', 'High', false);
};
var addTaskIcon = function addTaskIcon() {
  var btn = document.createElement('img');
  btn.setAttribute('id', 'add-task');
  btn.src = _assets_add_task_svg__WEBPACK_IMPORTED_MODULE_4__;
  btn.addEventListener('click', _add_task_modal__WEBPACK_IMPORTED_MODULE_3__.renderAddTaskModal);
  document.querySelector('.content-main').appendChild(btn);
};
var createTaskDisplay = function createTaskDisplay(name, dueDate) {
  var taskDisplay = document.querySelector('.content-main');
  var taskLink = document.createElement('div');
  taskLink.classList.add('task-link');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.addEventListener('click', toggleTaskStatus);
  var taskName = document.createElement('p');
  taskName.classList.add('task-name');
  taskName.innerText = name;
  var detailsBtn = document.createElement('button');
  detailsBtn.classList.add('details-btn');
  detailsBtn.innerText = 'Details';
  detailsBtn.addEventListener('click', viewTaskDetails);
  var taskDueDate = document.createElement('span');
  taskDueDate.classList.add('task-due-date');
  taskDueDate.innerText = dueDate;
  var btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  var editTaskBtn = document.createElement('img');
  editTaskBtn.classList.add('edit-task-btn');
  editTaskBtn.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
  var removeTaskBtn = document.createElement('img');
  removeTaskBtn.classList.add('remove-task-btn');
  removeTaskBtn.src = _assets_remove_svg__WEBPACK_IMPORTED_MODULE_2__;
  removeTaskBtn.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_0__.deleteTask);
  taskLink.appendChild(checkbox);
  taskLink.appendChild(taskName);
  btnContainer.appendChild(detailsBtn);
  btnContainer.appendChild(taskDueDate);
  btnContainer.appendChild(editTaskBtn);
  btnContainer.appendChild(removeTaskBtn);
  taskLink.appendChild(btnContainer);
  taskDisplay.appendChild(taskLink);
};
var clearDisplay = function clearDisplay() {
  var display = document.querySelector('.content-main');
  display.innerHTML = '';
  display.classList.remove('active');
};
var renderAllTasks = function renderAllTasks(e) {
  clearDisplay();
  var display = document.querySelector('.content-main');
  if (!display.classList.contains('active')) {
    _task__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (task) {
      createTaskDisplay(task.title, task.dueDate);
    });
    display.classList.add('active');
  } else if (display.classList.contains('active')) {
    return;
  }
  addTaskIcon();
};
var renderTodaysTasks = function renderTodaysTasks(e) {
  clearDisplay();
  _task__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (task) {
    if (task.dueDate.toLowerCase() == 'today') {
      createTaskDisplay(task.title, task.dueDate);
    }
  });
  addTaskIcon();
};
var renderWeeksTasks = function renderWeeksTasks(e) {
  clearDisplay();
  _task__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (task) {
    if (task.dueDate.toLowerCase() == 'this week') {
      createTaskDisplay(task.title, task.dueDate);
    }
  });
  addTaskIcon();
};
var renderTasksByTag = function renderTasksByTag(e) {
  clearDisplay();
  _task__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (task) {
    if (task.tag.toLowerCase().includes(e.target.innerText.toLowerCase())) {
      createTaskDisplay(task.title, task.dueDate);
    }
  });
  toggleRemoveBtn();
  addTaskIcon();
};
var toggleTaskStatus = function toggleTaskStatus(e) {
  var taskTitle = e.target.nextSibling.innerText;
  // when checkbox is checked, done status = true, if unchecked, done = false
  _task__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (task) {
    if (task.title == taskTitle) {
      task.status = !task.status;
      e.target.parentNode.classList.toggle('done');
    }
  });
};
var viewTaskDetails = function viewTaskDetails(e) {
  var _title = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;
  var task = _task__WEBPACK_IMPORTED_MODULE_0__.tasks.find(function (task) {
    return task.title === _title;
  });
  console.log(task);
  var modal = (0,_task_details_modal__WEBPACK_IMPORTED_MODULE_5__.taskDetailsModal)();
  document.querySelector('.body').appendChild(modal);
  document.querySelector('.container').style.filter = 'blur(3px)';
  document.querySelector('.details-task-title').innerText = task.title;
  document.querySelector('.details-project-name').innerText = task.tag;
  document.querySelector('.details-priority-value').innerText = task.priority;
  document.querySelector('.details-date-value').innerText = task.dueDate;
  document.querySelector('.details-desc-text').innerText = task.desc;
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTagsForNewCategory": () => (/* binding */ checkTagsForNewCategory),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "findTaskIndex": () => (/* binding */ findTaskIndex),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory),
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "updateProjectLinks": () => (/* binding */ updateProjectLinks)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tasks = [];
var projects = [];
var taskFactory = function taskFactory(title, tag, desc, dueDate, priority, status) {
  var task = {
    title: title,
    tag: tag,
    desc: desc,
    dueDate: dueDate,
    priority: priority,
    status: false
  };
  tasks.push(task);
  if (!projects.includes(task.tag)) projects.push(task.tag);
  return {
    task: task,
    editTitle: function editTitle(title) {
      task.title = title;
    },
    editTag: function editTag(tag) {
      task.tag = tag;
    },
    editDesc: function editDesc(desc) {
      task.desc = desc;
    },
    editDueDate: function editDueDate(dueDate) {
      task.dueDate = dueDate;
    },
    editPriority: function editPriority(priority) {
      task.priority = priority;
    },
    editStatus: function editStatus(status) {
      task.status = status;
    }
  };
};
var findTaskIndex = function findTaskIndex(title) {
  var _title = title;
  var index = tasks.findIndex(function (task) {
    return task.title === _title;
  });
};
var projectStillExists = function projectStillExists(tag) {
  tasks.forEach(function (task) {
    if (task.tag === tag) {
      return true;
    }
  });
  return false;
};
var getDeletedTaskTag = function getDeletedTaskTag(title) {
  var task = tasks.find(function (task) {
    return task.title == title;
  });
  var tag = task.tag;
  return tag;
};
var deleteTask = function deleteTask(e) {
  //assign title of task in current link to title
  var _title = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;

  //gets deleted task tag from tasks array
  var tag = getDeletedTaskTag(_title);

  //replaces old projects array with updated array, excluding deleted tasks project 
  var updatedProjects = projects.filter(function (project) {
    return project !== tag;
  });
  projects.splice.apply(projects, [0, projects.length].concat(_toConsumableArray(updatedProjects)));

  //find task index, removes task from task array
  var taskToDelete = findTaskIndex(_title);
  tasks.splice(taskToDelete, 1);

  //iterate back over tasks, if tag is still present in other tasks, add back to projects array
  updateProjectsArray();

  //remove target link from task display
  document.querySelector('.content-main').removeChild(e.target.parentNode.parentNode);
  updateProjectLinks();
};
var updateProjectsArray = function updateProjectsArray() {
  tasks.forEach(function (task) {
    if (!projects.includes(task.tag)) projects.push(task.tag);
  });
};
var updateProjectLinks = function updateProjectLinks() {
  var links = document.querySelectorAll('.project');
  for (var i = 0; i < links.length; i++) {
    links[i].remove();
  }
};
var checkTagsForNewCategory = function checkTagsForNewCategory() {
  projects.forEach(function (project) {
    (0,_nav__WEBPACK_IMPORTED_MODULE_0__.createProjectLink)(project);
  });
  var projectLinks = document.querySelectorAll('.project');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  color: var(--font-main-color);\n}\n\n:root {\n  --container-main-color: #171717;\n  --subcontainer-main-color: #404040;\n  --subcontainer-secondary-color: #262626;\n  --container-alt-color: #d97706;\n  --font-main-color: #fafafa;\n  --transition-main: all 0.35s ease-in-out;\n  --shadow-main: var(--container-main-color) 0px 19px 38px,\n  \tvar(--container-main-color) 0px 15px 12px;\n  --shadow-alt: var(--container-main-color) 4px 4px 20px;\n}\n\n.container {\n  background-color: var(--subcontainer-secondary-color);\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-areas: \"header header header\" \"nav content content\" \"nav content content\" \"footer footer footer\";\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 100px 1fr 80px;\n  gap: 1rem;\n}\n\n/*** Header Styling ***/\n.header {\n  grid-area: header;\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  padding: 2rem 1.5rem;\n  box-shadow: var(--shadow-alt);\n  margin: 1rem 0.5rem 0 0.5rem;\n  background-color: var(--container-main-color);\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n.site-header-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.site-header-wrapper img {\n  height: 48px;\n  width: 48px;\n}\n\n.site-header-wrapper h1 {\n  letter-spacing: 0.2rem;\n  color: var(--container-alt-color);\n}\n\n/*** Nav Styling ***/\n.side-nav {\n  grid-area: nav;\n  background-color: var(--subcontainer-secondary-color);\n  box-shadow: var(--shadow-alt);\n  margin-left: 0.5rem;\n  border-bottom: 2px solid var(--font-main-color);\n  overflow: scroll;\n}\n\n.nav-links,\n.project-links {\n  display: flex;\n  flex-direction: column;\n}\n\n.side-nav li {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 1.5rem;\n  letter-spacing: 0.1rem;\n  transition: var(--transition-main);\n}\n\n.side-nav li.active {\n  background-color: var(--subcontainer-main-color);\n  border-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav li:hover {\n  cursor: pointer;\n  background-color: var(--subcontainer-main-color);\n  border-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav h2 {\n  padding: 1.5rem 1.25rem;\n  letter-spacing: 0.1rem;\n  background-color: var(--container-main-color);\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n.side-nav img {\n  filter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg) brightness(92%) contrast(95%);\n  height: 2rem;\n  width: 2rem;\n}\n\n.side-nav #add-project {\n  width: 2rem;\n  height: 2rem;\n}\n\n.side-nav .project-links .remove-project {\n  height: 15px;\n  width: 15px;\n  transition: var(--transition-main);\n  margin-left: 4rem;\n}\n\n.side-nav .project-links .remove-project:hover {\n  transform: scale(1.25);\n}\n\n.project button {\n  display: inline;\n  color: var(--font-main-color);\n  padding: 0.2rem 0.75rem;\n  margin-left: auto;\n  background-color: var(--container-main-color);\n  letter-spacing: 0.1rem;\n  appearance: none;\n  outline: none;\n  border: 1px solid var(--font-main-color);\n  border-radius: 4px;\n  transition: var(--transition-main);\n}\n\n.project button:hover {\n  cursor: pointer;\n  transform: translateY(-5%);\n  color: var(--container-alt-color);\n  border: 1px solid var(--container-alt-color);\n}\n\n/* add project modal styling */\n.add-project-modal {\n  margin-top: 1rem;\n  display: none;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 10px;\n  width: 92%;\n  height: 100px;\n  overflow: scroll;\n  position: relative;\n  right: -0.7rem;\n  box-shadow: var(--shadow-alt);\n  background-color: var(--subcontainer-secondary-color);\n}\n\n.project-name-input {\n  grid-column: 1/-1;\n  appearance: none;\n  outline: none;\n  border: 1px solid var(--subcontainer-main-color);\n  background-color: var(--subcontainer-main-color);\n  font-size: 1.3rem;\n  padding-left: 1rem;\n  border-radius: 4px;\n}\n\n.project-name-input:active,\n.project-name-input:focus {\n  border: 2px solid var(--font-main-color);\n}\n\n.add-book-btn {\n  background-color: rgb(6, 123, 6);\n  border: 2px solid rgb(6, 123, 6);\n  transition: var(--transition-main);\n}\n\n.close-add-project {\n  background-color: rgb(178, 11, 11);\n  border: 1px solid rgb(178, 11, 11);\n  transition: var(--transition-main);\n}\n\n.add-book-btn,\n.close-add-project {\n  border-radius: 4px;\n}\n\n.add-book-btn:hover,\n.close-add-project:hover {\n  transform: translateY(-2.5%);\n  cursor: pointer;\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n/* content container styling */\n.content-main {\n  grid-area: content;\n  background-color: var(--subcontainer-main-color);\n  box-shadow: var(--shadow-alt);\n  margin-right: 0.5rem;\n  border-bottom: 2px solid var(--font-main-color);\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n#add-task {\n  height: 38px;\n  width: 38px;\n  filter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg) brightness(92%);\n  transition: var(--transition-main);\n  margin: auto 0.5rem 0.5rem auto;\n}\n\n#add-task:hover {\n  transform: scale(1.2) rotate(-180deg);\n  cursor: pointer;\n}\n\n.task-link {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0.35rem 0.5rem 0.35rem 1rem;\n  gap: 1rem;\n  background-color: var(--container-main-color);\n  border-radius: 0.2rem;\n  font-size: 1.5ch;\n  border-left: 2px solid var(--font-main-color);\n  transition: all 0.2s ease;\n}\n\n.task-link:hover {\n  border-left: 2px solid var(--container-alt-color);\n  transform: translateY(-5%);\n}\n\n.task-link.done {\n  text-decoration: line-through;\n  opacity: 70%;\n}\n\n.task-link .checkbox {\n  appearance: none;\n  background-color: var(--subcontainer-main-color);\n  border: 1px solid var(--font-main-color);\n  padding: 6px;\n  border-radius: 8px;\n  display: inline-block;\n  position: relative;\n}\n\n.checkbox {\n  appearance: none;\n  background-color: var(--body-color);\n  border: 1px solid var(--main-font-color);\n  padding: 6px;\n  display: inline-block;\n  border-radius: 8px;\n  position: relative;\n  cursor: pointer;\n}\n\n.checkbox:hover {\n  border: 2px solid var(--main-font-color);\n  cursor: pointer;\n}\n\n.checkbox:active,\n.checkbox:checked:active {\n  background-color: var(--container-alt-color);\n  color: var(--alternate-color);\n}\n\n.checkbox:checked:after {\n  content: \"✔\";\n  font-size: 11px;\n  border: 1px solid var(--special-font-color);\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  padding: 0.25px 2.5px 1px 2.5px;\n  border-radius: 8px;\n  background-color: var(--container-alt-color);\n  color: var(--subcontainer-main-color);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);\n}\n\n.task-link p {\n  letter-spacing: 0.1rem;\n}\n\n.task-link .details-btn {\n  color: var(--font-main-color);\n  background-color: var(--subcontainer-main-color);\n  border: none;\n  padding: 0.15rem 0.5rem;\n  border-radius: 4px;\n  margin-right: 0.35rem;\n  transition: var(--transition-main);\n}\n\n.task-link .details-btn:hover {\n  cursor: pointer;\n  color: var(--container-alt-color);\n}\n\n.task-link .task-due-date {\n  margin-left: auto;\n  margin-right: 0.35rem;\n}\n\n.task-link .btn-container {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  margin-left: auto;\n}\n\n.task-link .btn-container img {\n  transition: var(--transition-main);\n}\n\n.task-link .btn-container img:hover {\n  transform: scale(1.2) translateY(-2.5%);\n  cursor: pointer;\n}\n\n.task-link div img {\n  filter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg) brightness(92%) contrast(95%);\n}\n\n/* Modal Styling */\n.modal-add-task {\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  gap: 2rem;\n  background-color: var(--container-main-color);\n  color: var(--container-main-color);\n  border: 2px solid var(--font-main-color);\n  border-radius: 2px;\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  width: 600px;\n  height: 300px;\n  box-shadow: var(--shadow-alt);\n}\n\n.modal-add-task .modal-date-container input {\n  color: var(--container-main-color);\n}\n\n.modal-add-task .modal-title {\n  height: 2rem;\n  padding: 0.5rem;\n  color: var(--font-main-color);\n  appearance: none;\n  outline: none;\n  background-color: var(--subcontainer-main-color);\n  border: 1px solid var(--font-main-color);\n  letter-spacing: 0.1rem;\n  margin-top: 0.5rem;\n}\n\n.modal-add-task .modal-desc {\n  height: 5rem;\n  padding: 0.5rem;\n  color: var(--font-main-color);\n  appearance: none;\n  outline: none;\n  background-color: var(--subcontainer-main-color);\n  border: 1px solid var(--font-main-color);\n  letter-spacing: 0.1rem;\n}\n\n.modal-title:active,\n.modal-title:focus,\n.modal-desc:active,\n.modal-desc:focus,\n.modal-due-date:active,\n.modal-due-date:focus,\n.modal-btn:active,\n.modal-btn:focus,\n.tag-input:active,\n.tag-input:focus {\n  border: 1px solid var(--container-alt-color);\n}\n\n.modal-add-task .modal-priority-label {\n  padding-right: 2.25rem;\n}\n\n.modal-add-task #date-tag-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.tag-input {\n  margin-left: auto;\n  width: 190px;\n  padding: 0.25rem 0.5rem;\n  background-color: var(--subcontainer-main-color);\n  appearance: none;\n  outline: none;\n  border: 1px solid var(--font-main-color);\n  letter-spacing: 0.1rem;\n}\n\n.modal-add-task .modal-date-container {\n  display: flex;\n  align-items: center;\n}\n\n.modal-due-date {\n  appearance: none;\n  outline: none;\n  border: 1px solid var(--font-main-color);\n  padding: 0.2rem 0.75rem;\n  background-color: var(--subcontainer-main-color);\n}\n\n.modal-due-date:hover {\n  cursor: pointer;\n}\n\n.modal-add-task .modal-date-container p {\n  letter-spacing: 0.1rem;\n  font-size: 1.7ch;\n  margin-right: 1rem;\n}\n\n.modal-add-task #modal-btn-wrapper {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n\n#modal-btn-wrapper .priority-btn-container,\n#modal-btn-wrapper .toggle-modal-btns {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n#modal-btn-wrapper .toggle-modal-btns {\n  margin-left: auto;\n}\n\n.modal-add-task .modal-btn {\n  color: var(--font-main-color);\n  padding: 0.25rem 1rem;\n  background-color: var(--container-main-color);\n  border: 1px solid var(--font-main-color);\n  appearance: none;\n  outline: none;\n  transition: var(--transition-main);\n  letter-spacing: 0.1rem;\n}\n\n.modal-add-task .modal-btn:hover {\n  cursor: pointer;\n  transform: translateY(-5%);\n}\n\n#low-priority:hover,\n#low-priority:active,\n#low-priority:focus {\n  color: rgb(6, 123, 6);\n  border: 1px solid rgb(6, 123, 6);\n}\n\n#medium-priority:hover,\n#medium-priority:active,\n#medium-priority:focus {\n  color: var(--container-alt-color);\n  border: 1px solid var(--container-alt-color);\n}\n\n#high-priority:hover,\n#high-priority:active,\n#high-priority:focus {\n  color: rgb(178, 11, 11);\n  border: 1px solid rgb(178, 11, 11);\n}\n\n#exit-modal:hover,\n#exit-modal:active,\n#exit-modal:focus {\n  color: rgb(178, 11, 11);\n  border: 1px solid rgb(178, 11, 11);\n  transform: scale(1.1);\n}\n\n#confirm-add-task:hover,\n#confirm-add-task:active,\n#confirm-add-task:focus {\n  color: rgb(6, 123, 6);\n  border: 1px solid rgb(6, 123, 6);\n  transform: scale(1.1);\n}\n\n.modal-add-task .modal-btn:nth-child(4) {\n  margin-left: auto;\n}\n\n/* End of Modal Styling */\n/* Task Details Modal Styling */\n.task-details {\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: var(--container-main-color);\n  color: var(--font-main-color);\n  position: absolute;\n  top: 35%;\n  left: 22%;\n  padding: 2.25rem;\n  letter-spacing: 0.1rem;\n  box-shadow: var(--shadow-main);\n  border: 1px solid var(--font-main-color);\n}\n\n.task-details ul {\n  width: 350px;\n}\n\n.task-details li {\n  display: flex;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n\n.task-details li p:nth-child(2) {\n  margin-left: auto;\n  font-style: italic;\n}\n\n.task-details h1 {\n  color: var(--container-alt-color);\n  margin-bottom: 1.5rem;\n}\n\n.task-details .exit-details-modal {\n  width: 35px;\n  height: 35px;\n  filter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg) brightness(92%) contrast(95%);\n  position: absolute;\n  right: 0.75rem;\n  bottom: 12.25rem;\n  transition: var(--transition-main);\n}\n\n.task-details .exit-details-modal:hover {\n  transform: scale(1.25) rotate(-180deg);\n  cursor: pointer;\n}\n\n/* End Of Task Details Modal Styling */\n/* Footer Styling */\n.footer {\n  grid-area: footer;\n  background-color: var(--container-main-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  letter-spacing: 0.2rem;\n  box-shadow: var(--shadow-alt);\n}\n\n.footer a {\n  transition: var(--transition-main);\n  margin-left: 0.25rem;\n  text-decoration: none;\n}\n\n.footer a:hover {\n  transform: translateY(-10%);\n  letter-spacing: 0.3rem;\n  color: var(--container-alt-color);\n}", "",{"version":3,"sources":["webpack://./styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["* { \n\tbox-sizing: border-box;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: var(--font-main-color);\n}\n\n:root {\n\t--container-main-color: #171717;\n\t--subcontainer-main-color: #404040;\n\t--subcontainer-secondary-color: #262626;\n\t--container-alt-color: #d97706;\n\t--font-main-color: #fafafa;\n\t--transition-main: all 0.35s ease-in-out;\n\t--shadow-main: var(--container-main-color) 0px 19px 38px,\n\t\tvar(--container-main-color) 0px 15px 12px;\n\t--shadow-alt: var(--container-main-color) 4px 4px 20px;\n}\n\n.container {\n\tbackground-color: var(--subcontainer-secondary-color);\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'header header header'\n\t\t'nav content content'\n\t\t'nav content content'\n\t\t'footer footer footer';\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: 100px 1fr 80px;\n\tgap: 1rem;\n}\n\n/*** Header Styling ***/\n\n.header {\n\tgrid-area: header;\n\tgrid-column: 1 / -1;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 2rem 1.5rem;\n\tbox-shadow: var(--shadow-alt);\n\tmargin: 1rem 0.5rem 0 0.5rem;\n\tbackground-color: var(--container-main-color);\n\tborder-bottom: 2px solid var(--font-main-color);\n}\n\n.site-header-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.site-header-wrapper img {\n\theight: 48px;\n\twidth: 48px;\n}\n\n.site-header-wrapper h1 {\n\tletter-spacing: 0.2rem;\n\tcolor: var(--container-alt-color);\n}\n\n/*** Nav Styling ***/\n\n.side-nav {\n\tgrid-area: nav;\n\tbackground-color: var(--subcontainer-secondary-color);\n\tbox-shadow: var(--shadow-alt);\n\tmargin-left: 0.5rem;\n\tborder-bottom: 2px solid var(--font-main-color);\n\toverflow: scroll;\n}\n\n.nav-links,\n.project-links {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.side-nav li {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1.5rem;\n\tpadding: 1rem 1.5rem;\n\tletter-spacing: 0.1rem;\n\ttransition: var(--transition-main);\n}\n\n.side-nav li.active {\n\tbackground-color: var(--subcontainer-main-color);\n\tborder-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav li:hover {\n\tcursor: pointer;\n\tbackground-color: var(--subcontainer-main-color);\n\tborder-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav h2 {\n\tpadding: 1.5rem 1.25rem;\n\tletter-spacing: 0.1rem;\n\tbackground-color: var(--container-main-color);\n\tborder-bottom: 2px solid var(--font-main-color);\n}\n\n.side-nav img {\n\tfilter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg)\n\t\tbrightness(92%) contrast(95%);\n\theight: 2rem;\n\twidth: 2rem;\n}\n\n.side-nav #add-project {\n\twidth: 2rem;\n\theight: 2rem;\n}\n\n.side-nav .project-links .remove-project {\n\theight: 15px;\n\twidth: 15px;\n\ttransition: var(--transition-main);\n\tmargin-left: 4rem;\n}\n\n.side-nav .project-links .remove-project:hover {\n\ttransform: scale(1.25);\n}\n\n.project button {\n\tdisplay: inline;\n\tcolor: var(--font-main-color);\n\tpadding: .2rem .75rem;\n\tmargin-left: auto;\n\tbackground-color: var(--container-main-color);\n\tletter-spacing: .1rem;\n\tappearance: none;\n\toutline: none;\n\tborder: 1px solid var(--font-main-color);\n\tborder-radius: 4px;\n\ttransition: var(--transition-main);\n}\n\n.project button:hover {\n\tcursor: pointer;\n\ttransform: translateY(-5%);\n\tcolor: var(--container-alt-color);\n\tborder: 1px solid var(--container-alt-color);\n}\n/* add project modal styling */\n\n.add-project-modal {\n\tmargin-top: 1rem;\n\tdisplay: none;\n\tgrid-template-columns: repeat(2, 1fr);\n\tgrid-template-rows: repeat(2, 1fr);\n\tgap: 10px;\n\twidth: 92%;\n\theight: 100px;\n\toverflow: scroll;\n\tposition: relative;\n\tright: -0.7rem;\n\tbox-shadow: var(--shadow-alt);\n\tbackground-color: var(--subcontainer-secondary-color);\n}\n\n.project-name-input {\n\tgrid-column: 1 / -1;\n\tappearance: none;\n\toutline: none;\n\tborder: 1px solid var(--subcontainer-main-color);\n\tbackground-color: var(--subcontainer-main-color);\n\tfont-size: 1.3rem;\n\tpadding-left: 1rem;\n\tborder-radius: 4px;\n}\n\n.project-name-input:active,\n.project-name-input:focus {\n\tborder: 2px solid var(--font-main-color);\n}\n\n.add-book-btn {\n\tbackground-color: rgb(6, 123, 6);\n\tborder: 2px solid rgb(6, 123, 6);\n\ttransition: var(--transition-main);\n}\n\n.close-add-project {\n\tbackground-color: rgb(178, 11, 11);\n\tborder: 1px solid rgb(178, 11, 11);\n\ttransition: var(--transition-main);\n}\n\n.add-book-btn,\n.close-add-project {\n\tborder-radius: 4px;\n}\n\n.add-book-btn:hover,\n.close-add-project:hover {\n\ttransform: translateY(-2.5%);\n\tcursor: pointer;\n\tborder-bottom: 2px solid var(--font-main-color);\n}\n\n/* content container styling */\n\n.content-main {\n\tgrid-area: content;\n\tbackground-color: var(--subcontainer-main-color);\n\tbox-shadow: var(--shadow-alt);\n\tmargin-right: 0.5rem;\n\tborder-bottom: 2px solid var(--font-main-color);\n\tpadding: 0.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.25rem;\n}\n\n#add-task {\n\theight: 38px;\n\twidth: 38px;\n\tfilter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg)\n\t\tbrightness(92%);\n\ttransition: var(--transition-main);\n\tmargin: auto 0.5rem 0.5rem auto;\n}\n\n#add-task:hover {\n\ttransform: scale(1.2) rotate(-180deg);\n\tcursor: pointer;\n}\n\n.task-link {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding: 0.35rem 0.5rem 0.35rem 1rem;\n\tgap: 1rem;\n\tbackground-color: var(--container-main-color);\n\tborder-radius: 0.2rem;\n\tfont-size: 1.5ch;\n\tborder-left: 2px solid var(--font-main-color);\n\ttransition: all 0.2s ease;\n}\n\n.task-link:hover {\n\tborder-left: 2px solid var(--container-alt-color);\n\ttransform: translateY(-5%);\n}\n\n.task-link.done {\n\ttext-decoration: line-through;\n\topacity: 70%;\n}\n\n.task-link .checkbox {\n\tappearance: none;\n\tbackground-color: var(--subcontainer-main-color);\n\tborder: 1px solid var(--font-main-color);\n\tpadding: 6px;\n\tborder-radius: 8px;\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n.checkbox {\n\tappearance: none;\n\tbackground-color: var(--body-color);\n\tborder: 1px solid var(--main-font-color);\n\tpadding: 6px;\n\tdisplay: inline-block;\n\tborder-radius: 8px;\n\tposition: relative;\n\tcursor: pointer;\n}\n\n.checkbox:hover {\n\tborder: 2px solid var(--main-font-color);\n\tcursor: pointer;\n}\n\n.checkbox:active,\n.checkbox:checked:active {\n\tbackground-color: var(--container-alt-color);\n\tcolor: var(--alternate-color);\n}\n\n.checkbox:checked:after {\n\tcontent: '\\2714';\n\tfont-size: 11px;\n\tborder: 1px solid var(--special-font-color);\n\tposition: absolute;\n\ttop: -1px;\n\tright: -1px;\n\tpadding: 0.25px 2.5px 1px 2.5px;\n\tborder-radius: 8px;\n\tbackground-color: var(--container-alt-color);\n\tcolor: var(--subcontainer-main-color);\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),\n\t\tinset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),\n\t\tinset 15px 10px -12px rgba(255, 255, 255, 0.1);\n}\n\n.task-link p {\n\tletter-spacing: 0.1rem;\n}\n\n.task-link .details-btn {\n\tcolor: var(--font-main-color);\n\tbackground-color: var(--subcontainer-main-color);\n\tborder: none;\n\tpadding: 0.15rem 0.5rem;\n\tborder-radius: 4px;\n\tmargin-right: 0.35rem;\n\ttransition: var(--transition-main);\n}\n\n.task-link .details-btn:hover {\n\tcursor: pointer;\n\tcolor: var(--container-alt-color);\n}\n\n.task-link .task-due-date {\n\tmargin-left: auto;\n\tmargin-right: 0.35rem;\n}\n\n.task-link .btn-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.2rem;\n\tmargin-left: auto;\n}\n\n.task-link .btn-container img {\n\ttransition: var(--transition-main);\n}\n\n.task-link .btn-container img:hover {\n\ttransform: scale(1.2) translateY(-2.5%);\n\tcursor: pointer;\n}\n\n.task-link div img {\n\tfilter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg)\n\t\tbrightness(92%) contrast(95%);\n}\n\n/* Modal Styling */\n\n.modal-add-task {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 2rem;\n\tgap: 2rem;\n\tbackground-color: var(--container-main-color);\n\tcolor: var(--container-main-color);\n\tborder: 2px solid var(--font-main-color);\n\tborder-radius: 2px;\n\tposition: absolute;\n\ttop: 30%;\n\tleft: 0;\n\tright: 0;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 600px;\n\theight: 300px;\n\tbox-shadow: var(--shadow-alt);\n}\n\n.modal-add-task .modal-date-container input {\n\tcolor: var(--container-main-color);\n}\n\n.modal-add-task .modal-title {\n\theight: 2rem;\n\tpadding: 0.5rem;\n\tcolor: var(--font-main-color);\n\tappearance: none;\n\toutline: none;\n\tbackground-color: var(--subcontainer-main-color);\n\tborder: 1px solid var(--font-main-color);\n\tletter-spacing: 0.1rem;\n\tmargin-top: 0.5rem;\n}\n\n.modal-add-task .modal-desc {\n\theight: 5rem;\n\tpadding: 0.5rem;\n\tcolor: var(--font-main-color);\n\tappearance: none;\n\toutline: none;\n\tbackground-color: var(--subcontainer-main-color);\n\tborder: 1px solid var(--font-main-color);\n\tletter-spacing: 0.1rem;\n}\n\n.modal-title:active,\n.modal-title:focus,\n.modal-desc:active,\n.modal-desc:focus,\n.modal-due-date:active,\n.modal-due-date:focus,\n.modal-btn:active,\n.modal-btn:focus,\n.tag-input:active,\n.tag-input:focus {\n\tborder: 1px solid var(--container-alt-color);\n}\n\n.modal-add-task .modal-priority-label {\n\tpadding-right: 2.25rem;\n}\n\n.modal-add-task #date-tag-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.tag-input {\n\tmargin-left: auto;\n\twidth: 190px;\n\tpadding: .25rem .5rem;\n\tbackground-color: var(--subcontainer-main-color);\n\tappearance: none;\n\toutline: none;\n\tborder: 1px solid var(--font-main-color);\n\tletter-spacing: .1rem;\n}\n\n\n.modal-add-task .modal-date-container {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.modal-due-date {\n\tappearance: none;\n\toutline: none;\n\tborder: 1px solid var(--font-main-color);\n\tpadding: 0.2rem 0.75rem;\n\tbackground-color: var(--subcontainer-main-color);\n}\n\n.modal-due-date:hover {\n\tcursor: pointer;\n}\n\n.modal-add-task .modal-date-container p {\n\tletter-spacing: 0.1rem;\n\tfont-size: 1.7ch;\n\tmargin-right: 1rem;\n}\n\n.modal-add-task #modal-btn-wrapper {\n\tdisplay: flex;\n\tgap: 0.75rem;\n\talign-items: center;\n}\n\n#modal-btn-wrapper .priority-btn-container,\n#modal-btn-wrapper .toggle-modal-btns {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#modal-btn-wrapper .toggle-modal-btns {\n\tmargin-left: auto;\n}\n\n.modal-add-task .modal-btn {\n\tcolor: var(--font-main-color);\n\tpadding: 0.25rem 1rem;\n\tbackground-color: var(--container-main-color);\n\tborder: 1px solid var(--font-main-color);\n\tappearance: none;\n\toutline: none;\n\ttransition: var(--transition-main);\n\tletter-spacing: 0.1rem;\n}\n\n.modal-add-task .modal-btn:hover {\n\tcursor: pointer;\n\ttransform: translateY(-5%);\n}\n\n#low-priority:hover,\n#low-priority:active,\n#low-priority:focus {\n\tcolor: rgb(6, 123, 6);\n\tborder: 1px solid rgb(6, 123, 6);\n}\n\n#medium-priority:hover,\n#medium-priority:active,\n#medium-priority:focus {\n\tcolor: var(--container-alt-color);\n\tborder: 1px solid var(--container-alt-color);\n}\n\n#high-priority:hover,\n#high-priority:active,\n#high-priority:focus {\n\tcolor: rgb(178, 11, 11);\n\tborder: 1px solid rgb(178, 11, 11);\n}\n\n#exit-modal:hover,\n#exit-modal:active,\n#exit-modal:focus {\n\tcolor: rgb(178, 11, 11);\n\tborder: 1px solid rgb(178, 11, 11);\n\ttransform: scale(1.1);\n}\n\n#confirm-add-task:hover,\n#confirm-add-task:active,\n#confirm-add-task:focus {\n\tcolor: rgb(6, 123, 6);\n\tborder: 1px solid rgb(6, 123, 6);\n\ttransform: scale(1.1);\n}\n\n.modal-add-task .modal-btn:nth-child(4) {\n\tmargin-left: auto;\n}\n\n/* End of Modal Styling */\n\n/* Task Details Modal Styling */\n\n.task-details {\n\twidth: 600px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\tbackground-color: var(--container-main-color);\n\tcolor: var(--font-main-color);\n\tposition: absolute;\n\ttop: 35%;\n\tleft: 22%;\n\tpadding: 2.25rem;\n\tletter-spacing: .1rem;\n\tbox-shadow: var(--shadow-main);\n\tborder: 1px solid var(--font-main-color);\n}\n\n.task-details ul {\n\twidth: 350px;\n}\n\n.task-details li {\n\tdisplay: flex;\n\tgap: 1rem;\n\tmargin-top: .75rem;\n}\n\n.task-details li p:nth-child(2) {\n\tmargin-left: auto;\n\tfont-style: italic;\n}\n\n.task-details h1 {\n\tcolor: var(--container-alt-color);\n\tmargin-bottom: 1.5rem;\n}\n.task-details .exit-details-modal {\n\twidth: 35px;\n\theight: 35px;\n\tfilter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg)\n\t\tbrightness(92%) contrast(95%);\n\tposition: absolute;\n\tright: .75rem;\n\tbottom: 12.25rem;\n\ttransition: var(--transition-main);\n}\n\n.task-details .exit-details-modal:hover {\n\ttransform: scale(1.25) rotate(-180deg);\n\tcursor: pointer;\n}\n\n/* End Of Task Details Modal Styling */\n\n/* Footer Styling */\n\n.footer {\n\tgrid-area: footer;\n\tbackground-color: var(--container-main-color);\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 1.5rem;\n\tletter-spacing: 0.2rem;\n\tbox-shadow: var(--shadow-alt);\n}\n\n.footer a {\n\ttransition: var(--transition-main);\n\tmargin-left: 0.25rem;\n\ttext-decoration: none;\n}\n\n.footer a:hover {\n\ttransform: translateY(-10%);\n\tletter-spacing: 0.3rem;\n\tcolor: var(--container-alt-color);\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/add-task.svg":
/*!*****************************!*\
  !*** ./assets/add-task.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add-task.svg";

/***/ }),

/***/ "./assets/add.svg":
/*!************************!*\
  !*** ./assets/add.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add.svg";

/***/ }),

/***/ "./assets/checklist.svg":
/*!******************************!*\
  !*** ./assets/checklist.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "checklist.svg";

/***/ }),

/***/ "./assets/delete.svg":
/*!***************************!*\
  !*** ./assets/delete.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete.svg";

/***/ }),

/***/ "./assets/edit.svg":
/*!*************************!*\
  !*** ./assets/edit.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit.svg";

/***/ }),

/***/ "./assets/home.svg":
/*!*************************!*\
  !*** ./assets/home.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.svg";

/***/ }),

/***/ "./assets/list.svg":
/*!*************************!*\
  !*** ./assets/list.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "list.svg";

/***/ }),

/***/ "./assets/logo.svg":
/*!*************************!*\
  !*** ./assets/logo.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./assets/remove.svg":
/*!***************************!*\
  !*** ./assets/remove.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "remove.svg";

/***/ }),

/***/ "./assets/this-week.svg":
/*!******************************!*\
  !*** ./assets/this-week.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "this-week.svg";

/***/ }),

/***/ "./assets/today.svg":
/*!**************************!*\
  !*** ./assets/today.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "today.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _task_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-display */ "./src/task-display.js");





document.addEventListener('DOMContentLoaded', _nav__WEBPACK_IMPORTED_MODULE_1__.addImages);
document.addEventListener('DOMContentLoaded', _task_display__WEBPACK_IMPORTED_MODULE_3__.populateTasks);
document.addEventListener('DOMContentLoaded', _task__WEBPACK_IMPORTED_MODULE_2__.checkTagsForNewCategory);
document.addEventListener('DOMContentLoaded', _task_display__WEBPACK_IMPORTED_MODULE_3__.renderAllTasks);
document.addEventListener('DOMContentLoaded', _nav__WEBPACK_IMPORTED_MODULE_1__.addLinkListeners);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map