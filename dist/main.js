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
    const page = document.createElement('div');
    const quoteContainer = document.createElement('div');
    const quote = document.createElement('p');
    const author = document.createElement('p');
    const logo = document.createElement('img');

    page.classList.add('page');
    quoteContainer.classList.add('quote-container')
    logo.classList.add('logo');
    quote.classList.add('quote-text');
    author.classList.add('author');

    logo.setAttribute('src', '../src/img/logo.svg');

    quote.textContent = '“Lorem ipsum dolor sit amet consectetur. Libero quis tristique faucibus arcu quam ut ut ipsum. Scelerisque amet ac dictumst lectus id massa diam velit diam. Tristique fusce quam tristique commodo rhoncus eleifend neque. Amet netus dignissim morbi eu a. Pellentesque congue vitae ac ornare tincidunt ullamcorper sit faucibus.”';
    author.textContent = '-Phabin';

    quoteContainer.append(quote,author);
    page.append(logo,quoteContainer);

    return page;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDeEJwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUc7Ozs7OztVQ3hDbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ0U7QUFDSjs7QUFFeEI7O0FBRUEsbUJBQW1CLGlEQUFJLGFBQWE7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyxrREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFHO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFib3V0KCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBxdW90ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgICBxdW90ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdxdW90ZS1jb250YWluZXInKVxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlLXRleHQnKTtcbiAgICBhdXRob3IuY2xhc3NMaXN0LmFkZCgnYXV0aG9yJyk7XG5cbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWcvbG9nby5zdmcnKTtcblxuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ+KAnExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLiBMaWJlcm8gcXVpcyB0cmlzdGlxdWUgZmF1Y2lidXMgYXJjdSBxdWFtIHV0IHV0IGlwc3VtLiBTY2VsZXJpc3F1ZSBhbWV0IGFjIGRpY3R1bXN0IGxlY3R1cyBpZCBtYXNzYSBkaWFtIHZlbGl0IGRpYW0uIFRyaXN0aXF1ZSBmdXNjZSBxdWFtIHRyaXN0aXF1ZSBjb21tb2RvIHJob25jdXMgZWxlaWZlbmQgbmVxdWUuIEFtZXQgbmV0dXMgZGlnbmlzc2ltIG1vcmJpIGV1IGEuIFBlbGxlbnRlc3F1ZSBjb25ndWUgdml0YWUgYWMgb3JuYXJlIHRpbmNpZHVudCB1bGxhbWNvcnBlciBzaXQgZmF1Y2lidXMu4oCdJztcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSAnLVBoYWJpbic7XG5cbiAgICBxdW90ZUNvbnRhaW5lci5hcHBlbmQocXVvdGUsYXV0aG9yKTtcbiAgICBwYWdlLmFwcGVuZChsb2dvLHF1b3RlQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBwYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiLCJmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2FsbC10by1hY3Rpb24nKTtcblxuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZy9sb2dvLnN2ZycpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWUgdGhlIG1lbnUnO1xuXG4gICAgcGFnZS5hcHBlbmQobG9nbywgYnV0dG9uKTtcblxuICAgIHJldHVybiBwYWdlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiXG5mdW5jdGlvbiBuYXYoY3VycmVudFBhZ2Upe1xuICAgIGNvbnN0IHRvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRvcE5hdi5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2Jyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKTtcbiAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuXG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGFib3V0VGFiLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIHN3aXRjaCAoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBhYm91dFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRvcE5hdi5hcHBlbmQoaG9tZVRhYixtZW51VGFiLGFib3V0VGFiKTtcbiAgICByZXR1cm4gdG9wTmF2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdic7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jcmVhdGVQYWdlKGNvbnRlbnQsaG9tZSgpLCAnSG9tZScpOyAvLyBUaGlzIHN0YXJ0cyB0aGUgYXBwbGljYXRpb24gd2l0aCB0aGUgSG9tZXBhZ2VcblxuZnVuY3Rpb24gZ2V0TmF2RXZlbnRzKCkge1xuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LXRhYnMnKTtcblxuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHN3aXRjaFBhZ2UodGFiLnRleHRDb250ZW50KSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFBhZ2UodGFiKXtcbiAgICBzd2l0Y2ggKHRhYikge1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoY29udGVudCwgaG9tZSgpLCB0YWIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoY29udGVudCwgYWJvdXQoKSwgdGFiKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZShwYXJlbnQsIG5ld1BhZ2UsIHRhYikge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5hdih0YWIpKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3UGFnZSk7XG4gICAgZ2V0TmF2RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCl7XG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=