self["webpackHotUpdatesilkroad"]("background",{

/***/ "./background.js":
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
/***/ (() => {

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'fetchGoods') {
//       fetch('http://13.75.124.149:5001/goods')
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => sendResponse({ data }))
//         .catch(error => sendResponse({ error: error.message }));

//       return true; // 비동기 응답을 위해 true를 반환합니다.
//     }
//   });

chrome.runtime.onInstalled.addListener(function () {
  console.log('Extension installed');
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetchGoods') {
    fetch('http://13.75.124.149:5001').then(function (response) {
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
/******/ 	__webpack_require__.h = () => ("dcb1855e169aae0ca088")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=background.f7928f34bae9ff6b6875.hot-update.js.map