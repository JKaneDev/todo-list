/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
var tasks = [];
var taskFactory = function taskFactory(title, tag, desc, dueDate, priority, status) {
  var task = {
    title: title,
    tag: tag,
    desc: desc,
    dueDate: dueDate,
    priority: priority,
    status: status
  };
  tasks.push(task);
  console.log(tasks);
  return {
    task: task,
    editTitle: function editTitle(title) {
      this.title = title;
    },
    editTag: function editTag(tag) {
      this.tag = tag;
    },
    editDesc: function editDesc(desc) {
      this.desc = desc;
    },
    editDueDate: function editDueDate(dueDate) {
      this.dueDate = dueDate;
    },
    editPriority: function editPriority(priority) {
      this.priority = priority;
    },
    editStatus: function editStatus(status) {
      this.status = status;
    }
  };
};
var deleteTask = function deleteTask(title) {
  var _title = title;
  // const index = tasks.indexOf(_title);
  // if (index > -1) tasks.splice(index, 1);
  console.log(_title);
  console.log(tasks);
};
/******/ })()
;
//# sourceMappingURL=bundle.js.map