/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCard.js */ \"./src/js/renderCard.js\");\n\nfunction CreateFilmCard(title, director, releaseYear, episodeID, openingCrawl, imageUrl) {\n  this.Title = title, this.Director = director, this.ReleaseYear = releaseYear, this.EpisodeID = episodeID, this.OpeningCrawl = openingCrawl, this.ImageUrl = imageUrl;\n}\nconst attackOfTheClones = new CreateFilmCard(\"Attack of the clones\", \"George Lucas\", 2002, 2, \"There is unrest in the Galactic\\r\\nSenate. Several thousand solar\\r\\nsystems have declared their\\r\\nintentions to leave the Republic.\\r\\n\\r\\nThis separatist movement,\\r\\nunder the leadership of the\\r\\nmysterious Count Dooku, has\\r\\nmade it difficult for the limited\\r\\nnumber of Jedi Knights to maintain \\r\\npeace and order in the galaxy.\\r\\n\\r\\nSenator Amidala, the former\\r\\nQueen of Naboo\", \"assets/images/films/attack-of-the-clones.jpeg\");\nconst aNewHope = new CreateFilmCard(\"A New Hope\", \"George Lucas\", 1977, 4, \"It is a period of civil war.\\r\\nRebel spaceships, striking\\r\\nfrom a hidden base, have won\\r\\ntheir first victory against\\r\\nthe evil Galactic Empire.\\r\\n\\r\\nDuring the battle, Rebel\\r\\nspies managed to steal secret\\r\\nplans to the Empire's\\r\\nultimate weapon, the DEATH\\r\\nSTAR, an armored space\\r\\nstation with enough power\\r\\nto destroy an entire planet.\", \"assets/images/films/A_ New _Hope.jpeg\");\nconst empireStrikesBack = new CreateFilmCard(\"The Empire Strikes Back\", \"Irvin Kershner\", 1980, 5, \"It is a dark time for the Rebellion.\\r\\nAlthough the Death Star has been\\r\\ndestroyed, Imperial troops have\\r\\ndriven the Rebel forces from their\\r\\nhidden base and pursued them\\r\\nacross the galaxy.\\r\\n\\r\\nEvading the dreaded Imperial\\r\\nStarfleet, a group of freedom\\r\\nfighters led by Luke Skywalker has\\r\\nestablished a new secret base on\\r\\nthe remote ice world of Hoth.\", \"assets/images/films/empireStrikesBack.jpeg\");\n(0,_renderCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(attackOfTheClones);\n(0,_renderCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(aNewHope);\n(0,_renderCard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(empireStrikesBack);\n\n//# sourceURL=webpack://1-assignment/./src/js/main.js?");

/***/ }),

/***/ "./src/js/renderCard.js":
/*!******************************!*\
  !*** ./src/js/renderCard.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst renderCard = objectToRender => {\n  const cardContainer = document.querySelector(\".cards\");\n  const card = document.createElement(\"div\");\n  card.classList.add(\"cards__card\");\n  cardContainer.appendChild(card);\n  const imageContainer = document.createElement(\"img\");\n  imageContainer.classList.add(\"card__image\");\n  imageContainer.setAttribute(\"src\", objectToRender.ImageUrl);\n  const cardContent = document.createElement(\"div\");\n  cardContent.classList.add(\"card__content\");\n  const cardTitle = document.createElement(\"h5\");\n  cardTitle.textContent = objectToRender.Title;\n  cardContent.appendChild(cardTitle);\n  card.append(imageContainer, cardContent);\n  const cardContentList = document.createElement(\"ul\");\n  cardContent.append(cardTitle, cardContentList);\n  for (let key in objectToRender) {\n    if (key === \"Title\" || key === \"ImageUrl\") {\n      continue;\n    }\n    const listItem = document.createElement(\"li\");\n    cardContentList.appendChild(listItem);\n    const keySpan = document.createElement(\"span\");\n    keySpan.textContent = `${key}: `;\n    const valueSpan = document.createElement(\"span\");\n    valueSpan.textContent = objectToRender[key];\n    listItem.append(keySpan, valueSpan);\n  }\n  const lightSaber = document.createElement(\"div\");\n  lightSaber.classList.add(\"light-saber\");\n  card.appendChild(lightSaber);\n  const saberHandle = document.createElement(\"div\");\n  const saberLight = document.createElement(\"div\");\n  const saberLight2 = document.createElement(\"div\");\n  lightSaber.append(saberLight, saberHandle, saberLight2);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCard);\n\n//# sourceURL=webpack://1-assignment/./src/js/renderCard.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;