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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/github-logo.png */ "./src/img/github-logo.png");


function findMe(){
    const container = document.createElement('div');
    const text = document.createElement('p');
    const link = document.createElement('a');
    const githubLogo = new Image();

    container.classList.add('find-me');
    text.classList.add('me-text');
    githubLogo.classList.add('github-logo');

    githubLogo.src = _img_github_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    text.textContent = ' Built and designed by pvdevs';
    link.setAttribute('href', 'https://github.com/pvdevs');
    link.setAttribute('target', '_blank');

    link.appendChild(githubLogo);
    container.append(text,link);
    
    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findMe);

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

/***/ "./src/img/github-logo.png":
/*!*********************************!*\
  !*** ./src/img/github-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7615be16eed41f806def.png";

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
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");






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
    parent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__["default"])());
}

function removeAllChildren(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwwQ0FBSTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnVCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsaURBQU07QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwwQ0FBSTtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CNEI7QUFDWDtBQUNBO0FBQ0E7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IscURBQU07O0FBRXRCOztBQUVBLHlFQUF5RSwyQ0FBSztBQUM5RSxxRUFBcUUsMkNBQUs7QUFDMUUsMEVBQTBFLDJDQUFLOztBQUUvRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDNURuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENsQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEI7QUFDQTtBQUNFO0FBQ0o7QUFDTTs7QUFFOUI7O0FBRUEsbUJBQW1CLGlEQUFJLGFBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsaURBQUk7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFJO0FBQ3BDO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQUk7QUFDcEM7QUFDQTtBQUNBLGdDQUFnQyxrREFBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtREFBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vaW1nL2xvZ28uc3ZnJ1xuXG5mdW5jdGlvbiBhYm91dCgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcXVvdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gICAgcXVvdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVvdGUtY29udGFpbmVyJylcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBxdW90ZS5jbGFzc0xpc3QuYWRkKCdxdW90ZS10ZXh0Jyk7XG4gICAgYXV0aG9yLmNsYXNzTGlzdC5hZGQoJ2F1dGhvcicpO1xuXG4gICAgbG9nby5zcmMgPSBMb2dvO1xuICAgIHF1b3RlLnRleHRDb250ZW50ID0gJ+KAnExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLiBMaWJlcm8gcXVpcyB0cmlzdGlxdWUgZmF1Y2lidXMgYXJjdSBxdWFtIHV0IHV0IGlwc3VtLiBTY2VsZXJpc3F1ZSBhbWV0IGFjIGRpY3R1bXN0IGxlY3R1cyBpZCBtYXNzYSBkaWFtIHZlbGl0IGRpYW0uIFRyaXN0aXF1ZSBmdXNjZSBxdWFtIHRyaXN0aXF1ZSBjb21tb2RvIHJob25jdXMgZWxlaWZlbmQgbmVxdWUuIEFtZXQgbmV0dXMgZGlnbmlzc2ltIG1vcmJpIGV1IGEuIFBlbGxlbnRlc3F1ZSBjb25ndWUgdml0YWUgYWMgb3JuYXJlIHRpbmNpZHVudCB1bGxhbWNvcnBlciBzaXQgZmF1Y2lidXMu4oCdJztcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSAnLVBoYWJpbic7XG5cbiAgICBxdW90ZUNvbnRhaW5lci5hcHBlbmQocXVvdGUsYXV0aG9yKTtcbiAgICBwYWdlLmFwcGVuZChsb2dvLHF1b3RlQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBwYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiLCJpbXBvcnQgR2l0aHViIGZyb20gJy4vaW1nL2dpdGh1Yi1sb2dvLnBuZyc7XG5cbmZ1bmN0aW9uIGZpbmRNZSgpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBnaXRodWJMb2dvID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmluZC1tZScpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnbWUtdGV4dCcpO1xuICAgIGdpdGh1YkxvZ28uY2xhc3NMaXN0LmFkZCgnZ2l0aHViLWxvZ28nKTtcblxuICAgIGdpdGh1YkxvZ28uc3JjID0gR2l0aHViO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSAnIEJ1aWx0IGFuZCBkZXNpZ25lZCBieSBwdmRldnMnO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9wdmRldnMnKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXG4gICAgbGluay5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHRleHQsbGluayk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZE1lOyIsImltcG9ydCBMb2dvIGZyb20gJy4vaW1nL2xvZ28uc3ZnJztcblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbGwtdG8tYWN0aW9uJyk7XG5cbiAgICBsb2dvLnNyYyA9IExvZ287XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1NlZSB0aGUgbWVudSc7XG5cbiAgICBwYWdlLmFwcGVuZChsb2dvLCBidXR0b24pO1xuXG4gICAgcmV0dXJuIHBhZ2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJpbXBvcnQgRmlzaEJnIGZyb20gJy4vaW1nL2JhY2tncm91bmQtZmlzaC5zdmcnO1xuaW1wb3J0IE1lYWwxIGZyb20gJy4vaW1nL21lYWwxLmpwZyc7XG5pbXBvcnQgTWVhbDIgZnJvbSAnLi9pbWcvbWVhbDIuanBnJztcbmltcG9ydCBNZWFsMyBmcm9tICcuL2ltZy9tZWFsMy5qcGcnO1xuXG5mdW5jdGlvbiBtZW51KCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVNZWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJnSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZS1jb250YWluZXInKTtcbiAgICBtZW51TWVhbHMuY2xhc3NMaXN0LmFkZCgnbWVudS1tZWFscycpO1xuXG4gICAgYmdJbWcuY2xhc3NMaXN0LmFkZCgnYmctZmlzaCcpO1xuICAgIGJnSW1nLnNyYyA9IEZpc2hCZztcblxuICAgIGNvbnN0IGRldGFpbFBsYWNlSG9sZGVyID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLiBQZWxsZW50ZXNxdWUgYWNjdW1zYW4gcGVuYXRpYnVzIHZlbGl0IHB1cnVzIHZlbGl0IHF1aXNxdWUgaGFjLiBVdCBhbWV0IGFkaXBpc2Npbmcgc2l0IHByb2luIGp1c3RvIHF1aXMuIEF1Z3VlIGZldWdpYXQgZXQgaWQuJztcblxuICAgIGNvbnN0IG1lYWwxID0gc2V0TWVhbCgnQW5jaG92byBsYSBQaGFiaW4nLCAnMzkkJywgZGV0YWlsUGxhY2VIb2xkZXIsIE1lYWwxKTtcbiAgICBjb25zdCBtZWFsMiA9IHNldE1lYWwoJ0NoaWNvcyBTYWxtb24nLCAnMzckJywgZGV0YWlsUGxhY2VIb2xkZXIsIE1lYWwyKTtcbiAgICBjb25zdCBtZWFsMyA9IHNldE1lYWwoJ0thd2NhIE5pbmEgU2hyaW1wcycsICc0MiQnLCBkZXRhaWxQbGFjZUhvbGRlciwgTWVhbDMpO1xuXG4gICAgbWVudU1lYWxzLmFwcGVuZChtZWFsMSwgbWVhbDIsIG1lYWwzKTtcbiAgICBwYWdlLmFwcGVuZChtZW51TWVhbHMsYmdJbWcpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59XG5cbmZ1bmN0aW9uIHNldE1lYWwodGl0bGUscHJpY2UsZGV0YWlscyxpbWFnZSl7XG4gICAgY29uc3QgbWVhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lYWxUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lYWxJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVhbEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBjb25zdCBtZWFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IG1lYWxEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG1lYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgbWVhbEltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1hZ2UtY29udGFpbmVyJyk7XG4gICAgbWVhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWFsLWNvbnRhaW5lcicpO1xuICAgIG1lYWxUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWFsLXRpdGxlLWNvbnRhaW5lcicpO1xuICAgIG1lYWxJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW5mby1jb250YWluZXInKTtcbiAgICBtZWFsVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVhbC10aXRsZScpO1xuICAgIG1lYWxQcmljZS5jbGFzc0xpc3QuYWRkKCdtZWFsLXByaWNlJyk7XG4gICAgbWVhbERldGFpbHMuY2xhc3NMaXN0LmFkZCgnbWVhbC1kZXRhaWxzJyk7XG4gICAgbWVhbEltYWdlLmNsYXNzTGlzdC5hZGQoJ21lYWwtaW1hZ2UnKTtcblxuICAgIG1lYWxUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIG1lYWxQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgIG1lYWxEZXRhaWxzLnRleHRDb250ZW50ID0gZGV0YWlscztcbiAgICBtZWFsSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cblxuICAgIG1lYWxUaXRsZUNvbnRhaW5lci5hcHBlbmQobWVhbFRpdGxlLCBtZWFsUHJpY2UpO1xuICAgIG1lYWxJbmZvQ29udGFpbmVyLmFwcGVuZChtZWFsVGl0bGVDb250YWluZXIsIG1lYWxEZXRhaWxzKTtcblxuICAgIG1lYWxJbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsSW1hZ2UpO1xuICAgIG1lYWxDb250YWluZXIuYXBwZW5kKG1lYWxJbWFnZUNvbnRhaW5lcixtZWFsSW5mb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIG1lYWxDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiXG5mdW5jdGlvbiBuYXYoY3VycmVudFBhZ2Upe1xuICAgIGNvbnN0IHRvcE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRvcE5hdi5jbGFzc0xpc3QuYWRkKCd0b3AtbmF2Jyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbmF2LXRhYnMnKTtcbiAgICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCduYXYtdGFicycpO1xuXG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGFib3V0VGFiLnRleHRDb250ZW50ID0gJ0Fib3V0JztcblxuICAgIHN3aXRjaCAoY3VycmVudFBhZ2UpIHtcbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBhYm91dFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01lbnUnOlxuICAgICAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgYWJvdXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0Fib3V0JzpcbiAgICAgICAgICAgIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRvcE5hdi5hcHBlbmQoaG9tZVRhYixtZW51VGFiLGFib3V0VGFiKTtcbiAgICByZXR1cm4gdG9wTmF2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IG5hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgZmluZE1lIGZyb20gJy4vZm9vdGVyJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNyZWF0ZVBhZ2UoY29udGVudCxob21lKCksICdIb21lJyk7IC8vIFRoaXMgc3RhcnRzIHRoZSBhcHBsaWNhdGlvbiB3aXRoIHRoZSBIb21lcGFnZVxuXG5mdW5jdGlvbiBnZXROYXZFdmVudHMoKSB7XG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtdGFicycpO1xuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoUGFnZSh0YWIudGV4dENvbnRlbnQpKSk7XG59XG5cbmZ1bmN0aW9uIGdldENUQSgpIHtcbiAgICBjb25zdCBjdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbC10by1hY3Rpb24nKTtcbiAgICBjdGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGNyZWF0ZVBhZ2UoY29udGVudCwgbWVudSgpLCAnTWVudScpKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoUGFnZSh0YWIpe1xuICAgIHN3aXRjaCAodGFiKSB7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgY3JlYXRlUGFnZShjb250ZW50LCBob21lKCksIHRhYik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTWVudSc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIG1lbnUoKSwgdGFiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBYm91dCc6XG4gICAgICAgICAgICBjcmVhdGVQYWdlKGNvbnRlbnQsIGFib3V0KCksIHRhYik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UocGFyZW50LCBuZXdQYWdlLCB0YWIpIHtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuYXYodGFiKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld1BhZ2UpO1xuICAgIGdldE5hdkV2ZW50cygpO1xuICAgIGlmKHRhYiA9PT0gJ0hvbWUnKSBnZXRDVEEoKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZmluZE1lKCkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpe1xuICAgIHdoaWxlKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9