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
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg");


function about() {
    const page = document.createElement('div');
    const quoteContainer = document.createElement('div');
    const quote = document.createElement('p');
    const author = document.createElement('p');
    const logo = new Image();

    page.classList.add('page');
    quoteContainer.classList.add('quote-container')
    logo.classList.add('logo');
    quote.classList.add('quote-text');
    author.classList.add('author');

    logo.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.svg */ "./src/img/logo.svg");


function home() {
    const page = document.createElement('div');
    const button = document.createElement('button');
    const logo = new Image();

    page.classList.add('page');
    logo.classList.add('logo');
    button.classList.add('call-to-action');

    logo.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _img_background_fish_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/background-fish.svg */ "./src/img/background-fish.svg");
/* harmony import */ var _img_meal1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/meal1.jpg */ "./src/img/meal1.jpg");
/* harmony import */ var _img_meal2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/meal2.jpg */ "./src/img/meal2.jpg");
/* harmony import */ var _img_meal3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/meal3.jpg */ "./src/img/meal3.jpg");





function menu(){
    const page = document.createElement('div');
    const menuMeals = document.createElement('div');
    const bgImg = new Image();

    page.classList.add('menu-page-container');
    menuMeals.classList.add('menu-meals');

    bgImg.classList.add('bg-fish');
    bgImg.src = _img_background_fish_svg__WEBPACK_IMPORTED_MODULE_0__;

    const detailPlaceHolder = 'Lorem ipsum dolor sit amet consectetur. Pellentesque accumsan penatibus velit purus velit quisque hac. Ut amet adipiscing sit proin justo quis. Augue feugiat et id.';

    const meal1 = setMeal('Anchovo la Phabin', '39$', detailPlaceHolder, _img_meal1_jpg__WEBPACK_IMPORTED_MODULE_1__);
    const meal2 = setMeal('Chicos Salmon', '37$', detailPlaceHolder, _img_meal2_jpg__WEBPACK_IMPORTED_MODULE_2__);
    const meal3 = setMeal('Kawca Nina Shrimps', '42$', detailPlaceHolder, _img_meal3_jpg__WEBPACK_IMPORTED_MODULE_3__);

    menuMeals.append(meal1, meal2, meal3);
    page.append(menuMeals,bgImg);

    return page;
}

function setMeal(title,price,details,image){
    const mealContainer = document.createElement('div');
    const mealTitleContainer = document.createElement('div');
    const mealInfoContainer = document.createElement('div');
    const mealImageContainer = document.createElement('div');
    const mealTitle = document.createElement('h4');
    const mealPrice = document.createElement('h4');
    const mealDetails = document.createElement('p');
    const mealImage = new Image();

    mealImageContainer.classList.add('meal-image-container');
    mealContainer.classList.add('meal-container');
    mealTitleContainer.classList.add('meal-title-container');
    mealInfoContainer.classList.add('meal-info-container');
    mealTitle.classList.add('meal-title');
    mealPrice.classList.add('meal-price');
    mealDetails.classList.add('meal-details');
    mealImage.classList.add('meal-image');

    mealTitle.textContent = title;
    mealPrice.textContent = price;
    mealDetails.textContent = details;
    mealImage.src = image;


    mealTitleContainer.append(mealTitle, mealPrice);
    mealInfoContainer.append(mealTitleContainer, mealDetails);

    mealImageContainer.appendChild(mealImage);
    mealContainer.append(mealImageContainer,mealInfoContainer);
    return mealContainer;
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

/***/ }),

/***/ "./src/img/background-fish.svg":
/*!*************************************!*\
  !*** ./src/img/background-fish.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e7fc31486f88a265c9c.svg";

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0127bad14309b84a495c.svg";

/***/ }),

/***/ "./src/img/meal1.jpg":
/*!***************************!*\
  !*** ./src/img/meal1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dedc6857cd96dde28d38.jpg";

/***/ }),

/***/ "./src/img/meal2.jpg":
/*!***************************!*\
  !*** ./src/img/meal2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a59faee0bc7d9c7b28e5.jpg";

/***/ }),

/***/ "./src/img/meal3.jpg":
/*!***************************!*\
  !*** ./src/img/meal3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ac59c5040ae8da7e407.jpg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
    navButtons.forEach(tab => tab.addEventListener('click', () => switchPage(tab.textContent)));
}

function getCTA() {
    const cta = document.querySelector('.call-to-action');
    cta.addEventListener('click', e => createPage(content, (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(), 'Menu'));
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
    if(tab === 'Home') getCTA();
}

function removeAllChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwwQ0FBSTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDBDQUFJO0FBQ25COztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkI0QjtBQUNYO0FBQ0E7QUFDQTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBTTs7QUFFdEI7O0FBRUEseUVBQXlFLDJDQUFLO0FBQzlFLHFFQUFxRSwyQ0FBSztBQUMxRSwwRUFBMEUsMkNBQUs7O0FBRS9FO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUM1RG5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEI7QUFDQTtBQUNFO0FBQ0o7O0FBRXhCOztBQUVBLG1CQUFtQixpREFBSSxhQUFhOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELGlEQUFJO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBSTtBQUNwQztBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFJO0FBQ3BDO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixnREFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2ltZy9sb2dvLnN2ZydcblxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHF1b3RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcblxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICAgIHF1b3RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1b3RlLWNvbnRhaW5lcicpXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUtdGV4dCcpO1xuICAgIGF1dGhvci5jbGFzc0xpc3QuYWRkKCdhdXRob3InKTtcblxuICAgIGxvZ28uc3JjID0gTG9nbztcbiAgICBxdW90ZS50ZXh0Q29udGVudCA9ICfigJxMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ci4gTGliZXJvIHF1aXMgdHJpc3RpcXVlIGZhdWNpYnVzIGFyY3UgcXVhbSB1dCB1dCBpcHN1bS4gU2NlbGVyaXNxdWUgYW1ldCBhYyBkaWN0dW1zdCBsZWN0dXMgaWQgbWFzc2EgZGlhbSB2ZWxpdCBkaWFtLiBUcmlzdGlxdWUgZnVzY2UgcXVhbSB0cmlzdGlxdWUgY29tbW9kbyByaG9uY3VzIGVsZWlmZW5kIG5lcXVlLiBBbWV0IG5ldHVzIGRpZ25pc3NpbSBtb3JiaSBldSBhLiBQZWxsZW50ZXNxdWUgY29uZ3VlIHZpdGFlIGFjIG9ybmFyZSB0aW5jaWR1bnQgdWxsYW1jb3JwZXIgc2l0IGZhdWNpYnVzLuKAnSc7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gJy1QaGFiaW4nO1xuXG4gICAgcXVvdGVDb250YWluZXIuYXBwZW5kKHF1b3RlLGF1dGhvcik7XG4gICAgcGFnZS5hcHBlbmQobG9nbyxxdW90ZUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiaW1wb3J0IExvZ28gZnJvbSAnLi9pbWcvbG9nby5zdmcnO1xuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG5cbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnY2FsbC10by1hY3Rpb24nKTtcblxuICAgIGxvZ28uc3JjID0gTG9nbztcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU2VlIHRoZSBtZW51JztcblxuICAgIHBhZ2UuYXBwZW5kKGxvZ28sIGJ1dHRvbik7XG5cbiAgICByZXR1cm4gcGFnZVxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCBGaXNoQmcgZnJvbSAnLi9pbWcvYmFja2dyb3VuZC1maXNoLnN2Zyc7XG5pbXBvcnQgTWVhbDEgZnJvbSAnLi9pbWcvbWVhbDEuanBnJztcbmltcG9ydCBNZWFsMiBmcm9tICcuL2ltZy9tZWFsMi5qcGcnO1xuaW1wb3J0IE1lYWwzIGZyb20gJy4vaW1nL21lYWwzLmpwZyc7XG5cbmZ1bmN0aW9uIG1lbnUoKXtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudU1lYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYmdJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlLWNvbnRhaW5lcicpO1xuICAgIG1lbnVNZWFscy5jbGFzc0xpc3QuYWRkKCdtZW51LW1lYWxzJyk7XG5cbiAgICBiZ0ltZy5jbGFzc0xpc3QuYWRkKCdiZy1maXNoJyk7XG4gICAgYmdJbWcuc3JjID0gRmlzaEJnO1xuXG4gICAgY29uc3QgZGV0YWlsUGxhY2VIb2xkZXIgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuIFBlbGxlbnRlc3F1ZSBhY2N1bXNhbiBwZW5hdGlidXMgdmVsaXQgcHVydXMgdmVsaXQgcXVpc3F1ZSBoYWMuIFV0IGFtZXQgYWRpcGlzY2luZyBzaXQgcHJvaW4ganVzdG8gcXVpcy4gQXVndWUgZmV1Z2lhdCBldCBpZC4nO1xuXG4gICAgY29uc3QgbWVhbDEgPSBzZXRNZWFsKCdBbmNob3ZvIGxhIFBoYWJpbicsICczOSQnLCBkZXRhaWxQbGFjZUhvbGRlciwgTWVhbDEpO1xuICAgIGNvbnN0IG1lYWwyID0gc2V0TWVhbCgnQ2hpY29zIFNhbG1vbicsICczNyQnLCBkZXRhaWxQbGFjZUhvbGRlciwgTWVhbDIpO1xuICAgIGNvbnN0IG1lYWwzID0gc2V0TWVhbCgnS2F3Y2EgTmluYSBTaHJpbXBzJywgJzQyJCcsIGRldGFpbFBsYWNlSG9sZGVyLCBNZWFsMyk7XG5cbiAgICBtZW51TWVhbHMuYXBwZW5kKG1lYWwxLCBtZWFsMiwgbWVhbDMpO1xuICAgIHBhZ2UuYXBwZW5kKG1lbnVNZWFscyxiZ0ltZyk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuZnVuY3Rpb24gc2V0TWVhbCh0aXRsZSxwcmljZSxkZXRhaWxzLGltYWdlKXtcbiAgICBjb25zdCBtZWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVhbFRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVhbEluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZWFsSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IG1lYWxQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgbWVhbERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbWVhbEltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICBtZWFsSW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVhbC1pbWFnZS1jb250YWluZXInKTtcbiAgICBtZWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYWwtY29udGFpbmVyJyk7XG4gICAgbWVhbFRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYWwtdGl0bGUtY29udGFpbmVyJyk7XG4gICAgbWVhbEluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVhbC1pbmZvLWNvbnRhaW5lcicpO1xuICAgIG1lYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXRpdGxlJyk7XG4gICAgbWVhbFByaWNlLmNsYXNzTGlzdC5hZGQoJ21lYWwtcHJpY2UnKTtcbiAgICBtZWFsRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdtZWFsLWRldGFpbHMnKTtcbiAgICBtZWFsSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVhbC1pbWFnZScpO1xuXG4gICAgbWVhbFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgbWVhbFByaWNlLnRleHRDb250ZW50ID0gcHJpY2U7XG4gICAgbWVhbERldGFpbHMudGV4dENvbnRlbnQgPSBkZXRhaWxzO1xuICAgIG1lYWxJbWFnZS5zcmMgPSBpbWFnZTtcblxuXG4gICAgbWVhbFRpdGxlQ29udGFpbmVyLmFwcGVuZChtZWFsVGl0bGUsIG1lYWxQcmljZSk7XG4gICAgbWVhbEluZm9Db250YWluZXIuYXBwZW5kKG1lYWxUaXRsZUNvbnRhaW5lciwgbWVhbERldGFpbHMpO1xuXG4gICAgbWVhbEltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWxJbWFnZSk7XG4gICAgbWVhbENvbnRhaW5lci5hcHBlbmQobWVhbEltYWdlQ29udGFpbmVyLG1lYWxJbmZvQ29udGFpbmVyKTtcbiAgICByZXR1cm4gbWVhbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJcbmZ1bmN0aW9uIG5hdihjdXJyZW50UGFnZSl7XG4gICAgY29uc3QgdG9wTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdG9wTmF2LmNsYXNzTGlzdC5hZGQoJ3RvcC1uYXYnKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJyk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuICAgIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ25hdi10YWJzJyk7XG5cbiAgICBob21lVGFiLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgYWJvdXRUYWIudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuXG4gICAgc3dpdGNoIChjdXJyZW50UGFnZSkge1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGFib3V0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBhYm91dFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnQWJvdXQnOlxuICAgICAgICAgICAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdG9wTmF2LmFwcGVuZChob21lVGFiLG1lbnVUYWIsYWJvdXRUYWIpO1xuICAgIHJldHVybiB0b3BOYXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgbmF2IGZyb20gJy4vbmF2JztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNyZWF0ZVBhZ2UoY29udGVudCxob21lKCksICdIb21lJyk7IC8vIFRoaXMgc3RhcnRzIHRoZSBhcHBsaWNhdGlvbiB3aXRoIHRoZSBIb21lcGFnZVxuXG5mdW5jdGlvbiBnZXROYXZFdmVudHMoKSB7XG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtdGFicycpO1xuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoUGFnZSh0YWIudGV4dENvbnRlbnQpKSk7XG59XG5cbmZ1bmN0aW9uIGdldENUQSgpIHtcbiAgICBjb25zdCBjdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbC10by1hY3Rpb24nKTtcbiAgICBjdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGNyZWF0ZVBhZ2UoY29udGVudCwgbWVudSgpLCAnTWVudScpKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoUGFnZSh0YWIpe1xuICAgIHN3aXRjaCAodGFiKSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgY3JlYXRlUGFnZShjb250ZW50LCBob21lKCksIHRhYik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIG1lbnUoKSwgdGFiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIGFib3V0KCksIHRhYik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UocGFyZW50LCBuZXdQYWdlLCB0YWIpIHtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuYXYodGFiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1BhZ2UpO1xuICAgIGdldE5hdkV2ZW50cygpO1xuICAgIGlmKHRhYiA9PT0gJ0hvbWUnKSBnZXRDVEEoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KXtcbiAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==