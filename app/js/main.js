/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_likeCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_likeCounter */ "./src/js/components/_likeCounter.js");
/* harmony import */ var _components_likeCounter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_likeCounter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_addMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_addMessage */ "./src/js/components/_addMessage.js");
/* harmony import */ var _components_addMessage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_addMessage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_slider */ "./src/js/components/_slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

// import '.vendor/jquery.min';
// import '.vendor/slick.min';

/***/ }),

/***/ "./src/js/components/_addMessage.js":
/*!******************************************!*\
  !*** ./src/js/components/_addMessage.js ***!
  \******************************************/
/***/ (() => {

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const addBtn = document.querySelector('.button-submit');
const textarea = document.querySelectorAll('.chat__textarea');
const chat1 = document.querySelector('.chat1');
const chat2 = document.querySelector('.chat2');
const lists = document.querySelectorAll('.list');
const chatWithUser = document.getElementById('chatWithUser');
const chatWithAdmin = document.getElementById('chatWithAdmin');
let messagesData = {};
const state = {};
let value;
chat1.addEventListener('input', e => {
  value = e.target.value;
  state['writer'] = 'chat1';
});
chat2.addEventListener('input', e => {
  value = e.target.value;
  state['writer'] = 'chat2';
});
function writeMessage(userId, time, message, avatar) {
  messages_count = Object.keys(messagesData).length;
  if (messages_count == 0) {
    messagesData[1] = {
      "userId": userId,
      "time": time,
      "message": message,
      "avatar": avatar
    };
  } else {
    messagesData[messages_count + 1] = {
      "userId": userId,
      "time": time,
      "message": message,
      "avatar": avatar
    };
  }
}
function readMessage() {
  let last_message = Object.keys(messagesData)[Object.keys(messagesData).length - 1];
  const userId = messagesData[last_message].userId;
  const time = messagesData[last_message].time;
  const message = messagesData[last_message].message;
  const avatar = messagesData[last_message].avatar;
  const container = document.createElement('div');
  const newMassageItem = document.createElement('div');
  newMassageItem.classList.add('chat__message');
  const newAvatarItem = document.createElement('img');
  newAvatarItem.classList.add('chat__image');
  newAvatarItem.src = avatar;
  const newTextItem = document.createElement('p');
  newTextItem.classList.add('chat__text');
  const newTimeItem = document.createElement('time');
  newTimeItem.classList.add('chat__time');
  newTimeItem.innerHTML = time;
  newTextItem.textContent = message;
  newMassageItem.appendChild(newAvatarItem);
  container.appendChild(newTextItem);
  newMassageItem.appendChild(container);
  container.appendChild(newTimeItem);
  if (userId == 1) {
    chatWithAdmin.appendChild(newMassageItem);
  } else {
    chatWithUser.appendChild(newMassageItem);
  }
  newMassageItem.classList.add('is-incoming');
}
function createMessage(chat) {
  const container = document.createElement('div');
  const newMassageItem = document.createElement('div');
  newMassageItem.classList.add('chat__message');

  // time
  let today = new Date();
  let now = "Сегодня в  " + today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const newAvatarItem = document.createElement('img');
  newAvatarItem.classList.add('chat__image');
  if (chat === "chat1") {
    newAvatarItem.src = './img/avatar/avatar-1@1x.png';
  } else {
    newAvatarItem.src = './img/avatar/avatar-2@1x.png';
  }
  const newTextItem = document.createElement('p');
  newTextItem.classList.add('chat__text');
  const newTimeItem = document.createElement('time');
  newTimeItem.classList.add('chat__time');
  newTimeItem.innerHTML = now;
  newTextItem.textContent = value;
  newMassageItem.appendChild(newAvatarItem);
  container.appendChild(newTextItem);
  newMassageItem.appendChild(container);
  container.appendChild(newTimeItem);
  if (chat == 'chat1') {
    chatWithUser.appendChild(newMassageItem);
    writeMessage(1, now, value, './img/avatar/avatar-1@1x.png');
    chat1.value = '';
    readMessage();
  } else {
    writeMessage(2, now, value, './img/avatar/avatar-2@1x.png');
    chatWithAdmin.appendChild(newMassageItem);
    chat2.value = '';
    readMessage();
  }
}
function printMessage() {
  if (state['writer'] == 'chat1') {
    createMessage('chat1');
  } else {
    createMessage('chat2');
  }
}
button1.addEventListener('click', printMessage);
button2.addEventListener('click', printMessage);
chat1.addEventListener('keyup', event => {
  if (event.code === 'Enter') printMessage();
});
chat2.addEventListener('keyup', event => {
  if (event.code === 'Enter') printMessage();
});

//изменяет размер поля ввода
for (let cols of textarea) {
  cols.onfocus = () => {
    cols.rows = 4;
  };
  cols.onblur = () => {
    cols.rows = 1;
  };
}

/***/ }),

/***/ "./src/js/components/_likeCounter.js":
/*!*******************************************!*\
  !*** ./src/js/components/_likeCounter.js ***!
  \*******************************************/
/***/ (() => {

const likes = document.querySelectorAll('.like');
likes.forEach(like => {
  const buttonLike = like.querySelector('.button-like');
  const counter_element = like.querySelector('.counter');
  let counter = 0;
  buttonLike.addEventListener('click', () => {
    render(++counter, counter_element);
    buttonLike.classList.add('is-true');
  }, {
    once: true
  });
});
const render = (counter, counter_element) => counter_element.innerText = counter;

/***/ }),

/***/ "./src/js/components/_slider.js":
/*!**************************************!*\
  !*** ./src/js/components/_slider.js ***!
  \**************************************/
/***/ (() => {

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  variableWidth: true,
  centerMode: false
});

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map