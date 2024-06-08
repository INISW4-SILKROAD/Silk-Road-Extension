self["webpackHotUpdatesilkroad"]("background",{

/***/ "./background.js":
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
/***/ (() => {

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetchGoods') {
    fetch('http://13.75.124.149:5001/goods').then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(function (data) {
      return sendResponse({
        data: data
      });
    })["catch"](function (error) {
      return sendResponse({
        error: error.message
      });
    });
    return true; // 비동기 응답을 위해 true를 반환합니다.
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1edcb30841dd602210b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=background.3362ee1fd19ad05b325b.hot-update.js.map