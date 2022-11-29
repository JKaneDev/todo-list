/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.tasks = [];
window.taskFactory = function (title, tag, desc, dueDate, priority, status) {
  var task = {
    title: title,
    tag: tag,
    desc: desc,
    dueDate: dueDate,
    priority: priority,
    status: status
  };
  window.tasks.push(task);
  console.log(window.tasks);
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
window.findTaskIndex = function (title) {
  var _title = title;
  var index = tasks.findIndex(function (task) {
    return task.title === _title;
  });
  console.log(index);
};
window.deleteTask = function (title) {
  var _title = title;
  var taskToDelete = findTaskIndex(_title);
  tasks.splice(taskToDelete, 1);
  console.log(tasks);
};
/******/ })()
;
//# sourceMappingURL=bundle.js.map