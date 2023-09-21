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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu(){
    const page = document.createElement('div');
    const menuMeals = document.createElement('div');
    const bgImg = document.createElement('img');
    const meal = document.createElement.

    page.classList.add('menu-page-container');
    menuMeals.classList.add('menu-meals');

    bgImg.classList.add('bg-fish');
    bgImg.setAttribute('src', '../src/img/background-fish.svg');

    page.append(bgImg);

    return page;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./src/nav.js");





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
        case 'Menu':
            createPage(content, (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(), tab);
            break;
        case 'About':
            createPage(content, (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])(), tab);
        default:
            break;
    }
}

function createPage(parent, newPage, tab) {
    removeAllChildren(parent);
    parent.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_3__["default"])(tab));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDeEJwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDakJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUc7Ozs7OztVQ3hDbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNBO0FBQ0U7QUFDSjs7QUFFeEI7O0FBRUEsbUJBQW1CLGlEQUFJLGFBQWE7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyxpREFBSTtBQUNwQztBQUNBO0FBQ0EsZ0NBQWdDLGtEQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQUc7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHF1b3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICAgIHF1b3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1b3RlLWNvbnRhaW5lcicpXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUtdGV4dCcpO1xuICAgIGF1dGhvci5jbGFzc0xpc3QuYWRkKCdhdXRob3InKTtcblxuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2ltZy9sb2dvLnN2ZycpO1xuXG4gICAgcXVvdGUudGV4dENvbnRlbnQgPSAn4oCcTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuIExpYmVybyBxdWlzIHRyaXN0aXF1ZSBmYXVjaWJ1cyBhcmN1IHF1YW0gdXQgdXQgaXBzdW0uIFNjZWxlcmlzcXVlIGFtZXQgYWMgZGljdHVtc3QgbGVjdHVzIGlkIG1hc3NhIGRpYW0gdmVsaXQgZGlhbS4gVHJpc3RpcXVlIGZ1c2NlIHF1YW0gdHJpc3RpcXVlIGNvbW1vZG8gcmhvbmN1cyBlbGVpZmVuZCBuZXF1ZS4gQW1ldCBuZXR1cyBkaWduaXNzaW0gbW9yYmkgZXUgYS4gUGVsbGVudGVzcXVlIGNvbmd1ZSB2aXRhZSBhYyBvcm5hcmUgdGluY2lkdW50IHVsbGFtY29ycGVyIHNpdCBmYXVjaWJ1cy7igJ0nO1xuICAgIGF1dGhvci50ZXh0Q29udGVudCA9ICctUGhhYmluJztcblxuICAgIHF1b3RlQ29udGFpbmVyLmFwcGVuZChxdW90ZSxhdXRob3IpO1xuICAgIHBhZ2UuYXBwZW5kKGxvZ28scXVvdGVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsImZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYWxsLXRvLWFjdGlvbicpO1xuXG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvaW1nL2xvZ28uc3ZnJyk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1NlZSB0aGUgbWVudSc7XG5cbiAgICBwYWdlLmFwcGVuZChsb2dvLCBidXR0b24pO1xuXG4gICAgcmV0dXJuIHBhZ2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJmdW5jdGlvbiBtZW51KCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVNZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJnSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuXG5cbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZS1jb250YWluZXInKTtcbiAgICBtZW51TWVhbHMuY2xhc3NMaXN0LmFkZCgnbWVudS1tZWFscycpO1xuXG4gICAgYmdJbWcuY2xhc3NMaXN0LmFkZCgnYmctZmlzaCcpO1xuICAgIGJnSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9pbWcvYmFja2dyb3VuZC1maXNoLnN2ZycpO1xuXG4gICAgcGFnZS5hcHBlbmQoYmdJbWcpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiXG5mdW5jdGlvbiBuYXYoY3VycmVudFBhZ2Upe1xuICAgIGNvbnN0IHRvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRvcE5hdi5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2Jyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKTtcbiAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuXG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGFib3V0VGFiLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIHN3aXRjaCAoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBhYm91dFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRvcE5hdi5hcHBlbmQoaG9tZVRhYixtZW51VGFiLGFib3V0VGFiKTtcbiAgICByZXR1cm4gdG9wTmF2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0JztcbmltcG9ydCBuYXYgZnJvbSAnLi9uYXYnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY3JlYXRlUGFnZShjb250ZW50LGhvbWUoKSwgJ0hvbWUnKTsgLy8gVGhpcyBzdGFydHMgdGhlIGFwcGxpY2F0aW9uIHdpdGggdGhlIEhvbWVwYWdlXG5cbmZ1bmN0aW9uIGdldE5hdkV2ZW50cygpIHtcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi10YWJzJyk7XG5cbiAgICBuYXZCdXR0b25zLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBzd2l0Y2hQYWdlKHRhYi50ZXh0Q29udGVudCkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hQYWdlKHRhYil7XG4gICAgc3dpdGNoICh0YWIpIHtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIGhvbWUoKSwgdGFiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNZW51JzpcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoY29udGVudCwgbWVudSgpLCB0YWIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIGNyZWF0ZVBhZ2UoY29udGVudCwgYWJvdXQoKSwgdGFiKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZShwYXJlbnQsIG5ld1BhZ2UsIHRhYikge1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5hdih0YWIpKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3UGFnZSk7XG4gICAgZ2V0TmF2RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKHBhcmVudCl7XG4gICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=