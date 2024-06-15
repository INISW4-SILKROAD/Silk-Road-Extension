"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/TouchInfo.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/css/TouchInfo.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/Group 10 (1).png */ "./public/Group 10 (1).png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-4Regular.ttf */ "./public/fonts/Freesentation-4Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-5Medium.ttf */ "./public/fonts/Freesentation-5Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Pretendard-Medium.ttf */ "./public/fonts/Pretendard-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Pretendard-Regular.ttf */ "./public/fonts/Pretendard-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Pretendard-SemiBold.ttf */ "./public/fonts/Pretendard-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.goods-list-container {
  margin-top: -7px;
  width: 600px; /* 너비를 더 넓게 조정 */
  padding: 20px;
}

.category-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  align-items: center;
}

.category-button {
  background-color: #FFFFFF;
  color: #1e1f23;
  border: 0.2px solid rgba(0, 0, 0, 0.7);
  padding: 8px 16px;
  border-radius: 40px;
  cursor: pointer;
  font-size: 12pt;
  font-family: 'ps';
  flex: 1; /* 모든 버튼이 동일한 크기를 가지도록 설정 */
  margin: 0 5px; /* 버튼 간의 간격 설정 */
  transition: background-color 0.3s, color 0.3s; /* 배경색과 글자색 전환 시간 설정 */
}

.category-button:hover {
  background-color: #FFDBDA;
  color: #000000;
}

.sort-order-dropdown {
  margin-bottom: 20px;
  margin-top: -9px;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'f5';
  background-color: #e0e6ea;
  color: #000000;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 10pt;
  font-family: 'ps';
  width: calc(100% / 4 - 10px); /* 드롭다운의 너비 조정 */
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.goods-item {
  width: 48%; /* 상품 리스트 항목의 너비를 넓게 조정 */
  margin-bottom: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 11pt;
  border-radius: 8px;
  font-family: 'ps';
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2);
}

.goods-item img {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.goods-item p {
  margin: 12px 0 0 0;
  font-size: 0.9em;
}

.goods-item p span {
  display: block;
  font-size: 0.8em;
  color: #aaa;
}

.view-product-button {
  margin-top: 25px;
  background-color: #FFDBDA;
  color: #555657;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 180px;
  border-radius: 12px;
  font-family: 'f5';
  border: 0.2px solid rgba(0, 0, 0, 0.7);
}

.view-product-button:hover {
  background-color: #FFFFFF;
  color: #000000;
}

.touch-info {
  font-family: 'f5';
  margin-top: 13px;
  border-radius: 10px;
  width: 440px;
  height: 210px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); /* 경로 수정 */
  background-size: cover; /* 이미지 크기를 컨테이너에 맞춤 */
  background-position: center; /* 이미지 위치를 중앙으로 설정 */
  background-repeat: no-repeat; /* 이미지 반복을 방지 */
  transition: transform 0.3s, box-shadow 0.3s; /* 효과의 전환 시간 설정 */
}

.touch-info:hover {
  transform: scale(1.02); /* 크기 확대 효과 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
}

.touch-area {
  margin-left: 27px;
  margin-top: 15px;
  width: 350px;
  height: 120px;
  border-radius: 15px;
  font-family: 'ps';
}

.touch-bar {
  display: flex;
  align-items: center;
  margin: 7px 0;
  color: #000000;
  font-family: 'ps';
  font-size: 12pt;
  padding-right: 5px;
}

.touch-bar span {
  flex: 1;
}

.progress-bar-wrapper {
  flex: 4;
  position: relative;
  border: 1px solid #3d3f46; /* 직사각형 형태의 테두리 추가 */
  border-radius: 4px; /* 테두리 모서리 둥글게 */
}

.custom-progress-bar .progress-bar {
  background-color: transparent !important;
  background-image: none !important;
}

.custom-progress-bar {
  height: 100%; /* 바의 높이를 컨테이너에 맞춤 */
}

.custom-progress-bar .progress {
  height: 100%; /* 바의 높이를 컨테이너에 맞춤 */
}

.ticks {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}

.tick {
  width: 2px;
  height: 100%;
  background-color: #3d3f46;
}

.tick-top {
  width: 100%;
  height: 2px;
  background-color: #3d3f46;
}

.tick-bottom {
  width: 100%;
  height: 2px;
  background-color: #3d3f46;
  position: absolute;
  bottom: 0;
  left: 0;
}

.touch-info-text {
  margin-top: 4px;
  margin-bottom: 2px;
  width: 450px;
  height: 50px;
  text-align: center;
}

@font-face {
  font-family: 'f4';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
@font-face {
  font-family: 'f5';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}
@font-face {
  font-family: 'pm';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
}
@font-face {
  font-family: 'pr';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
}
@font-face {
  font-family: 'ps';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('truetype');
}
`, "",{"version":3,"sources":["webpack://./src/popup/css/TouchInfo.css"],"names":[],"mappings":"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","sourcesContent":[".goods-list-container {\r\n  margin-top: -7px;\r\n  width: 600px; /* 너비를 더 넓게 조정 */\r\n  padding: 20px;\r\n}\r\n\r\n.category-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.category-button {\r\n  background-color: #FFFFFF;\r\n  color: #1e1f23;\r\n  border: 0.2px solid rgba(0, 0, 0, 0.7);\r\n  padding: 8px 16px;\r\n  border-radius: 40px;\r\n  cursor: pointer;\r\n  font-size: 12pt;\r\n  font-family: 'ps';\r\n  flex: 1; /* 모든 버튼이 동일한 크기를 가지도록 설정 */\r\n  margin: 0 5px; /* 버튼 간의 간격 설정 */\r\n  transition: background-color 0.3s, color 0.3s; /* 배경색과 글자색 전환 시간 설정 */\r\n}\r\n\r\n.category-button:hover {\r\n  background-color: #FFDBDA;\r\n  color: #000000;\r\n}\r\n\r\n.sort-order-dropdown {\r\n  margin-bottom: 20px;\r\n  margin-top: -9px;\r\n  padding: 8px 16px;\r\n  border-radius: 40px;\r\n  font-family: 'f5';\r\n  background-color: #e0e6ea;\r\n  color: #000000;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  font-size: 10pt;\r\n  font-family: 'ps';\r\n  width: calc(100% / 4 - 10px); /* 드롭다운의 너비 조정 */\r\n}\r\n\r\n.goods-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.goods-item {\r\n  width: 48%; /* 상품 리스트 항목의 너비를 넓게 조정 */\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n  font-size: 11pt;\r\n  border-radius: 8px;\r\n  font-family: 'ps';\r\n  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.goods-item img {\r\n  width: 100%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n}\r\n\r\n.goods-item p {\r\n  margin: 12px 0 0 0;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.goods-item p span {\r\n  display: block;\r\n  font-size: 0.8em;\r\n  color: #aaa;\r\n}\r\n\r\n.view-product-button {\r\n  margin-top: 25px;\r\n  background-color: #FFDBDA;\r\n  color: #555657;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  width: 180px;\r\n  border-radius: 12px;\r\n  font-family: 'f5';\r\n  border: 0.2px solid rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.view-product-button:hover {\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n}\r\n\r\n.touch-info {\r\n  font-family: 'f5';\r\n  margin-top: 13px;\r\n  border-radius: 10px;\r\n  width: 440px;\r\n  height: 210px;\r\n  background-image: url('../../../public/Group 10 (1).png'); /* 경로 수정 */\r\n  background-size: cover; /* 이미지 크기를 컨테이너에 맞춤 */\r\n  background-position: center; /* 이미지 위치를 중앙으로 설정 */\r\n  background-repeat: no-repeat; /* 이미지 반복을 방지 */\r\n  transition: transform 0.3s, box-shadow 0.3s; /* 효과의 전환 시간 설정 */\r\n}\r\n\r\n.touch-info:hover {\r\n  transform: scale(1.02); /* 크기 확대 효과 */\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */\r\n}\r\n\r\n.touch-area {\r\n  margin-left: 27px;\r\n  margin-top: 15px;\r\n  width: 350px;\r\n  height: 120px;\r\n  border-radius: 15px;\r\n  font-family: 'ps';\r\n}\r\n\r\n.touch-bar {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 7px 0;\r\n  color: #000000;\r\n  font-family: 'ps';\r\n  font-size: 12pt;\r\n  padding-right: 5px;\r\n}\r\n\r\n.touch-bar span {\r\n  flex: 1;\r\n}\r\n\r\n.progress-bar-wrapper {\r\n  flex: 4;\r\n  position: relative;\r\n  border: 1px solid #3d3f46; /* 직사각형 형태의 테두리 추가 */\r\n  border-radius: 4px; /* 테두리 모서리 둥글게 */\r\n}\r\n\r\n.custom-progress-bar .progress-bar {\r\n  background-color: transparent !important;\r\n  background-image: none !important;\r\n}\r\n\r\n.custom-progress-bar {\r\n  height: 100%; /* 바의 높이를 컨테이너에 맞춤 */\r\n}\r\n\r\n.custom-progress-bar .progress {\r\n  height: 100%; /* 바의 높이를 컨테이너에 맞춤 */\r\n}\r\n\r\n.ticks {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tick {\r\n  width: 2px;\r\n  height: 100%;\r\n  background-color: #3d3f46;\r\n}\r\n\r\n.tick-top {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #3d3f46;\r\n}\r\n\r\n.tick-bottom {\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #3d3f46;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.touch-info-text {\r\n  margin-top: 4px;\r\n  margin-bottom: 2px;\r\n  width: 450px;\r\n  height: 50px;\r\n  text-align: center;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'f4';\r\n  src: url('../../../public/fonts/Freesentation-4Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'f5';\r\n  src: url('../../../public/fonts/Freesentation-5Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'pm';\r\n  src: url('../../../public/fonts/Pretendard-Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'pr';\r\n  src: url('../../../public/fonts/Pretendard-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'ps';\r\n  src: url('../../../public/fonts/Pretendard-SemiBold.ttf') format('truetype');\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b78920eb2c762df1b6af")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.3d35eda7023447044740.hot-update.js.map