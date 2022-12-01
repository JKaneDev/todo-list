/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/nav-ui.js":
/*!***********************!*\
  !*** ./src/nav-ui.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addImages": () => (/* binding */ addImages),
/* harmony export */   "addLinkListeners": () => (/* binding */ addLinkListeners),
/* harmony export */   "addProjectModal": () => (/* binding */ addProjectModal),
/* harmony export */   "closeAddProjectModal": () => (/* binding */ closeAddProjectModal),
/* harmony export */   "createProjectLink": () => (/* binding */ createProjectLink),
/* harmony export */   "openAddProjectModal": () => (/* binding */ openAddProjectModal),
/* harmony export */   "toggleActiveOff": () => (/* binding */ toggleActiveOff),
/* harmony export */   "toggleActiveOn": () => (/* binding */ toggleActiveOn)
/* harmony export */ });
/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/home.svg */ "./assets/home.svg");
/* harmony import */ var _assets_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/today.svg */ "./assets/today.svg");
/* harmony import */ var _assets_this_week_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/this-week.svg */ "./assets/this-week.svg");
/* harmony import */ var _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/checklist.svg */ "./assets/checklist.svg");
/* harmony import */ var _assets_list_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/list.svg */ "./assets/list.svg");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/add.svg */ "./assets/add.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/logo.svg */ "./assets/logo.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/delete.svg */ "./assets/delete.svg");








var navLinks = Array.from(document.querySelectorAll('.navigation'));
var projectLinks = document.querySelector('.project-links');
var addProjectLink = document.getElementById('add-project');
var addImages = function () {
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
  var projectsLink = document.getElementById('projects-svg');
  projectsLink.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_3__;
  var addLink = document.getElementById('add-project');
  addLink.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_5__;
}();
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
var addProjectModal = function addProjectModal() {};
var openAddProjectModal = function openAddProjectModal(e) {
  var addProjectModal = document.createElement('div');
  addProjectModal.classList.add('add-project-modal');
  var projectNameInput = document.createElement('input');
  projectNameInput.classList.add('project-name-input');
  projectNameInput.type = 'text';
  var addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.innerText = 'Add';
  var closeModalBtn = document.createElement('button');
  closeModalBtn.classList.add('close-modal-btn');
  closeModalBtn.innerText = 'Cancel';
  addProjectModal.appendChild(projectNameInput);
  addProjectModal.appendChild(addProjectBtn);
  addProjectModal.appendChild(closeModalBtn);
  projectLinks.appendChild(addProjectModal);
};
var closeAddProjectModal = function closeAddProjectModal() {
  var modal = document.querySelector('.add-project-modal');
  projectLinks.removeChild(modal);
};
var addLinkListeners = function (e) {
  navLinks.forEach(function (link) {
    link.addEventListener('click', toggleActiveOn);
  });
}();
var createProjectLink = function createProjectLink(projectName) {
  var projectNav = document.querySelector('.project-links');
  var projectLink = document.createElement('li');
  projectLink.classList.add('navigation');
  var projectSVG = document.createElement('img');
  projectSVG.classList.add('nav-svg');
  projectSVG.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_3__;
  projectSVG.innerText = projectName;
  var removeProject = document.createElement('img');
  removeProject.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__;
  projectLink.appendChild(projectSVG);
  projectLink.appendChild(removeProject);
  projectNav.appendChild(projectLink);
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "findTaskIndex": () => (/* binding */ findTaskIndex),
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
    status: false
  };
  tasks.push(task);
  console.log(tasks);
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
  console.log(index);
};
var deleteTask = function deleteTask(title) {
  var _title = title;
  var taskToDelete = findTaskIndex(_title);
  tasks.splice(taskToDelete, 1);
  console.log(tasks);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  color: var(--font-main-color);\n}\n\n:root {\n  --container-main-color: #171717;\n  --subcontainer-main-color: #404040;\n  --subcontainer-secondary-color: #262626;\n  --container-alt-color: #d97706;\n  --font-main-color: #fafafa;\n  --transition-main: all .35s ease-in-out;\n  --shadow-main: var(--container-main-color) 0px 19px 38px, var(--container-main-color) 0px 15px 12px;\n  --shadow-alt: var(--container-main-color) 4px 4px 20px;\n}\n\n.container {\n  background-color: var(--subcontainer-secondary-color);\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-areas: \"header header header\" \"nav content content\" \"nav content content\" \"footer footer footer\";\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 100px 1fr 80px;\n  gap: 1rem;\n}\n\n/*** Header Styling ***/\n.header {\n  grid-area: header;\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  padding: 2rem 1.5rem;\n  box-shadow: var(--shadow-alt);\n  margin: 1rem 0.5rem 0 0.5rem;\n  background-color: var(--container-main-color);\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n.site-header-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.site-header-wrapper img {\n  height: 48px;\n  width: 48px;\n}\n\n.site-header-wrapper h1 {\n  letter-spacing: 0.2rem;\n  color: var(--container-alt-color);\n}\n\n/*** Nav Styling ***/\n.side-nav {\n  grid-area: nav;\n  background-color: var(--subcontainer-secondary-color);\n  box-shadow: var(--shadow-alt);\n  margin-left: 0.5rem;\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n.nav-links, .project-links {\n  display: flex;\n  flex-direction: column;\n}\n\n.side-nav li {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1rem 1.5rem;\n  letter-spacing: 0.1rem;\n  transition: var(--transition-main);\n}\n\n.side-nav li.active {\n  background-color: var(--subcontainer-main-color);\n  border-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav li:hover {\n  cursor: pointer;\n  background-color: var(--subcontainer-main-color);\n  border-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav h2 {\n  padding: 1.5rem 1.25rem;\n  letter-spacing: 0.1rem;\n  background-color: var(--container-main-color);\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n.side-nav img {\n  filter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg) brightness(92%) contrast(95%);\n  height: 2.5rem;\n  width: 2.5rem;\n}\n\n.side-nav #add-project {\n  width: 2rem;\n  height: 2rem;\n}\n\n/* content container styling */\n.content-main {\n  grid-area: content;\n  background-color: var(--subcontainer-main-color);\n  box-shadow: var(--shadow-alt);\n  margin-right: 0.5rem;\n  border-bottom: 2px solid var(--font-main-color);\n}\n\n/* add project modal styling */\n.add-project-modal {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  width: 100%;\n  height: 140px;\n  background-color: var(--subcontainer-main-color);\n}\n\n.footer {\n  grid-area: footer;\n  background-color: var(--container-main-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  letter-spacing: 0.2rem;\n  box-shadow: var(--shadow-alt);\n}\n\n.footer a {\n  transition: var(--transition-main);\n  margin-left: 0.25rem;\n  text-decoration: none;\n}\n\n.footer a:hover {\n  transform: translateY(-10%);\n  letter-spacing: 0.3rem;\n  color: var(--container-alt-color);\n}", "",{"version":3,"sources":["webpack://./styles/style.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,yCAAA;EACA,SAAA;EACA,UAAA;EACA,6BAAA;AACJ;;AAEA;EACI,+BAAA;EACA,kCAAA;EACA,uCAAA;EACA,8BAAA;EACA,0BAAA;EACA,uCAAA;EACA,mGAAA;EACA,sDAAA;AACJ;;AAEA;EACI,qDAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,8GACI;EAIJ,qCAAA;EACA,kCAAA;EACA,SAAA;AAHJ;;AAMA,uBAAA;AAEA;EACI,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,6BAAA;EACA,4BAAA;EACA,6CAAA;EACA,+CAAA;AAJJ;;AAOA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAJJ;;AAOA;EACI,YAAA;EACA,WAAA;AAJJ;;AAOA;EACI,sBAAA;EACA,iCAAA;AAJJ;;AAOA,oBAAA;AAEA;EACI,cAAA;EACA,qDAAA;EACA,6BAAA;EACA,mBAAA;EACA,+CAAA;AALJ;;AAQA;EACI,aAAA;EACA,sBAAA;AALJ;;AAQA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;EACA,sBAAA;EACA,kCAAA;AALJ;;AAQA;EACI,gDAAA;EACA,mDAAA;AALJ;;AAQA;EACI,eAAA;EACA,gDAAA;EACA,mDAAA;AALJ;;AAQA;EACI,uBAAA;EACA,sBAAA;EACA,6CAAA;EACA,+CAAA;AALJ;;AAQA;EACI,6FAAA;EACA,cAAA;EACA,aAAA;AALJ;;AAQA;EACI,WAAA;EACA,YAAA;AALJ;;AAQA,8BAAA;AAEA;EACI,kBAAA;EACA,gDAAA;EACA,6BAAA;EACA,oBAAA;EACA,+CAAA;AANJ;;AASA,8BAAA;AAEA;EACI,aAAA;EACA,qCAAA;EACA,kCAAA;EACA,WAAA;EACA,aAAA;EACA,gDAAA;AAPJ;;AAYA;EACI,iBAAA;EACA,6CAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,sBAAA;EACA,6BAAA;AATJ;;AAYA;EACI,kCAAA;EACA,oBAAA;EACA,qBAAA;AATJ;;AAYA;EACI,2BAAA;EACA,sBAAA;EACA,iCAAA;AATJ","sourcesContent":["* {\n    box-sizing: border-box;\n    font-family: Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    color: var(--font-main-color);\n}\n\n:root {\n    --container-main-color: #171717;\n    --subcontainer-main-color: #404040;\n    --subcontainer-secondary-color: #262626;\n    --container-alt-color: #d97706;\n    --font-main-color: #fafafa;\n    --transition-main: all .35s ease-in-out;\n    --shadow-main: var(--container-main-color) 0px 19px 38px,  var(--container-main-color) 0px 15px 12px;\n    --shadow-alt: var(--container-main-color) 4px 4px 20px;\n}\n\n.container {\n    background-color: var(--subcontainer-secondary-color);\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-areas:\n        'header header header'\n        'nav content content'\n        'nav content content'\n        'footer footer footer';\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 100px 1fr 80px;\n    gap: 1rem;\n}\n\n/*** Header Styling ***/\n\n.header {\n    grid-area: header;\n    grid-column: 1 / -1;\n    display: flex;\n    align-items: center;\n    padding: 2rem 1.5rem;\n    box-shadow: var(--shadow-alt);\n    margin: 1rem .5rem 0 .5rem;\n    background-color: var(--container-main-color);\n    border-bottom: 2px solid var(--font-main-color);\n}\n\n.site-header-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.site-header-wrapper img {\n    height: 48px;\n    width: 48px;\n}\n\n.site-header-wrapper h1 {\n    letter-spacing: .2rem;\n    color: var(--container-alt-color);\n}\n\n/*** Nav Styling ***/\n\n.side-nav {\n    grid-area: nav;\n    background-color: var(--subcontainer-secondary-color);\n    box-shadow: var(--shadow-alt);\n    margin-left: .5rem;\n    border-bottom: 2px solid var(--font-main-color);\n}\n\n.nav-links, .project-links {\n    display: flex;\n    flex-direction: column;\n}\n\n.side-nav li {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n    padding: 1rem 1.5rem;\n    letter-spacing: .1rem;\n    transition: var(--transition-main);\n}\n\n.side-nav li.active {\n    background-color: var(--subcontainer-main-color);\n    border-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav li:hover {\n    cursor: pointer;\n    background-color: var(--subcontainer-main-color);\n    border-bottom: 2px solid var(--container-alt-color);\n}\n\n.side-nav h2 {\n    padding: 1.5rem 1.25rem;\n    letter-spacing: .1rem;\n    background-color: var(--container-main-color);\n    border-bottom: 2px solid var(--font-main-color);\n}\n\n.side-nav img {\n    filter: invert(47%) sepia(99%) saturate(1654%) hue-rotate(6deg) brightness(92%) contrast(95%);\n    height: 2.5rem;\n    width: 2.5rem;\n}\n\n.side-nav #add-project {\n    width: 2rem;\n    height: 2rem;\n}\n\n/* content container styling */\n\n.content-main {\n    grid-area: content;\n    background-color: var(--subcontainer-main-color);\n    box-shadow: var(--shadow-alt);\n    margin-right: .5rem;\n    border-bottom: 2px solid var(--font-main-color);\n}\n\n/* add project modal styling */\n\n.add-project-modal {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    width: 100%;\n    height: 140px;\n    background-color: var(--subcontainer-main-color);\n}\n\n\n\n.footer {\n    grid-area: footer;\n    background-color: var(--container-main-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    letter-spacing: .2rem;\n    box-shadow: var(--shadow-alt);\n}\n\n.footer a {\n    transition: var(--transition-main);\n    margin-left: .25rem;\n    text-decoration: none;\n}\n\n.footer a:hover {\n    transform: translateY(-10%); \n    letter-spacing: .3rem;\n    color: var(--container-alt-color);\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _nav_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-ui */ "./src/nav-ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map