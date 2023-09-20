/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function about() {
    const textContainer = document.createElement('div');
    const text = document.createElement('p');
    const logo = document.createElement('img');

    logo.setAttribute('src', '../src/img/logo.svg');
    text.textContent = 'Testing testin test';

    return text;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function home() {
    const page = document.createElement('div');
    const logo = document.createElement('img');
    const button = document.createElement('button');

    page.classList.add('page');
    logo.classList.add('logo');
    button.classList.add('call-to-action');

    logo.setAttribute('src', '../src/img/logo.svg');
    button.textContent = 'See the menu';

    page.append(logo, button);

    return page
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function nav(currentPage){
    const topNav = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const aboutTab = document.createElement('button');

    topNav.classList.add('top-nav');
    homeTab.classList.add('nav-tabs');
    menuTab.classList.add('nav-tabs');
    aboutTab.classList.add('nav-tabs');

    homeTab.textContent = 'Home';
    menuTab.textContent = 'Menu';
    aboutTab.textContent = 'About';

    switch (currentPage) {
        case 'Home':
            homeTab.classList.add('selected');
            menuTab.classList.remove('selected');
            aboutTab.classList.remove('selected');
            break;
        case 'Menu':
            menuTab.classList.add('selected');
            homeTab.classList.remove('selected');
            aboutTab.classList.remove('selected');
            break
        case 'About':
            aboutTab.classList.add('selected');
            homeTab.classList.remove('selected');
            menuTab.classList.remove('selected');
            break;
        default:
            break;
    }

    topNav.append(homeTab,menuTab,aboutTab);
    return topNav;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./src/nav.js");




const content = document.getElementById('content');

createPage(content,(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(), 'Home'); // This starts the application with the Homepage

function getNavEvents() {
    const navButtons = document.querySelectorAll('.nav-tabs');

    navButtons.forEach(tab => {
        tab.addEventListener('click', e => switchPage(tab.textContent));
    });
}

function switchPage(tab){
    switch (tab) {
        case 'Home':
            createPage(content, (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(), tab);
            break;
        case 'About':
            createPage(content, (0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])(), tab);
        default:
            break;
    }
}

function createPage(parent, newPage, tab) {
    removeAllChildren(parent);
    parent.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_2__["default"])(tab));
    parent.appendChild(newPage);
    getNavEvents();
}

function removeAllChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7OztBQ1hwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUc7Ozs7OztVQ3hDbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ0U7QUFDSjs7QUFFeEI7O0FBRUEsbUJBQW1CLGlEQUFJLGFBQWE7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyxrREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFHO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFib3V0KCkge1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZy9sb2dvLnN2ZycpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAnVGVzdGluZyB0ZXN0aW4gdGVzdCc7XG5cbiAgICByZXR1cm4gdGV4dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbGwtdG8tYWN0aW9uJyk7XG5cbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWcvbG9nby5zdmcnKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU2VlIHRoZSBtZW51JztcblxuICAgIHBhZ2UuYXBwZW5kKGxvZ28sIGJ1dHRvbik7XG5cbiAgICByZXR1cm4gcGFnZVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsIlxuZnVuY3Rpb24gbmF2KGN1cnJlbnRQYWdlKXtcbiAgICBjb25zdCB0b3BOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0b3BOYXYuY2xhc3NMaXN0LmFkZCgndG9wLW5hdicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJyk7XG4gICAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKTtcblxuICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbWVudVRhYi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBhYm91dFRhYi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgICBzd2l0Y2ggKGN1cnJlbnRQYWdlKSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGFib3V0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0b3BOYXYuYXBwZW5kKGhvbWVUYWIsbWVudVRhYixhYm91dFRhYik7XG4gICAgcmV0dXJuIHRvcE5hdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBuYXYgZnJvbSAnLi9uYXYnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY3JlYXRlUGFnZShjb250ZW50LGhvbWUoKSwgJ0hvbWUnKTsgLy8gVGhpcyBzdGFydHMgdGhlIGFwcGxpY2F0aW9uIHdpdGggdGhlIEhvbWVwYWdlXG5cbmZ1bmN0aW9uIGdldE5hdkV2ZW50cygpIHtcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi10YWJzJyk7XG5cbiAgICBuYXZCdXR0b25zLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBzd2l0Y2hQYWdlKHRhYi50ZXh0Q29udGVudCkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hQYWdlKHRhYil7XG4gICAgc3dpdGNoICh0YWIpIHtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIGhvbWUoKSwgdGFiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIGFib3V0KCksIHRhYik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UocGFyZW50LCBuZXdQYWdlLCB0YWIpIHtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuYXYodGFiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1BhZ2UpO1xuICAgIGdldE5hdkV2ZW50cygpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpe1xuICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9