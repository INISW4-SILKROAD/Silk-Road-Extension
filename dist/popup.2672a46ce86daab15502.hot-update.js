"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/GoodsList.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/css/GoodsList.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-4Regular.ttf */ "./public/fonts/Freesentation-4Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-5Medium.ttf */ "./public/fonts/Freesentation-5Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Pretendard-Medium.ttf */ "./public/fonts/Pretendard-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Pretendard-Regular.ttf */ "./public/fonts/Pretendard-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Pretendard-SemiBold.ttf */ "./public/fonts/Pretendard-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.goods-list-container {
  margin-top: -4px;
  width: 480px; /* 너비를 더 넓게 조정 */
  padding: 20px;
}

.category-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
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
  margin: 0 8px; /* 버튼 간의 간격 설정 */
}

.category-button:hover {
  background-color: #FFFFFF;
  color: #000000;
}

.sort-order-dropdown {
  margin-bottom: 10px;
  margin-top: -25px;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'f5';
  background-color: #e0e6ea;
  color: #000000;
  border: none;
  cursor: pointer;
  /* font-weight: bold; */
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
  font-family: 'pm';
  /* box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2); */
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

@font-face {
  font-family: 'f4';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}
@font-face {
  font-family: 'f5';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
@font-face {
  font-family: 'pm';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}
@font-face {
  font-family: 'pr';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
}
@font-face {
  font-family: 'ps';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
}
`, "",{"version":3,"sources":["webpack://./src/popup/css/GoodsList.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY,EAAE,gBAAgB;EAC9B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,sCAAsC;EACtC,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,OAAO,EAAE,2BAA2B;EACpC,aAAa,EAAE,gBAAgB;AACjC;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,4BAA4B,EAAE,gBAAgB;AAChD;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,UAAU,EAAE,yBAAyB;EACrC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,gDAAgD;AAClD;;AAEA;EACE,WAAW;EACX,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,+DAA+E;AACjF;AACA;EACE,iBAAiB;EACjB,+DAA8E;AAChF;AACA;EACE,iBAAiB;EACjB,+DAA0E;AAC5E;AACA;EACE,iBAAiB;EACjB,+DAA2E;AAC7E;AACA;EACE,iBAAiB;EACjB,+DAA4E;AAC9E","sourcesContent":[".goods-list-container {\r\n  margin-top: -4px;\r\n  width: 480px; /* 너비를 더 넓게 조정 */\r\n  padding: 20px;\r\n}\r\n\r\n.category-buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 15px;\r\n  align-items: center;\r\n}\r\n\r\n.category-button {\r\n  background-color: #FFFFFF;\r\n  color: #1e1f23;\r\n  border: 0.2px solid rgba(0, 0, 0, 0.7);\r\n  padding: 8px 16px;\r\n  border-radius: 40px;\r\n  cursor: pointer;\r\n  font-size: 12pt;\r\n  font-family: 'ps';\r\n  flex: 1; /* 모든 버튼이 동일한 크기를 가지도록 설정 */\r\n  margin: 0 8px; /* 버튼 간의 간격 설정 */\r\n}\r\n\r\n.category-button:hover {\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n}\r\n\r\n.sort-order-dropdown {\r\n  margin-bottom: 10px;\r\n  margin-top: -25px;\r\n  padding: 8px 16px;\r\n  border-radius: 40px;\r\n  font-family: 'f5';\r\n  background-color: #e0e6ea;\r\n  color: #000000;\r\n  border: none;\r\n  cursor: pointer;\r\n  /* font-weight: bold; */\r\n  font-size: 10pt;\r\n  font-family: 'ps';\r\n  width: calc(100% / 4 - 10px); /* 드롭다운의 너비 조정 */\r\n}\r\n\r\n.goods-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.goods-item {\r\n  width: 48%; /* 상품 리스트 항목의 너비를 넓게 조정 */\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n  font-size: 11pt;\r\n  border-radius: 8px;\r\n  font-family: 'pm';\r\n  /* box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.goods-item img {\r\n  width: 100%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n}\r\n\r\n.goods-item p {\r\n  margin: 12px 0 0 0;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.goods-item p span {\r\n  display: block;\r\n  font-size: 0.8em;\r\n  color: #aaa;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'f4';\r\n  src: url('../../../public/fonts/Freesentation-4Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'f5';\r\n  src: url('../../../public/fonts/Freesentation-5Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'pm';\r\n  src: url('../../../public/fonts/Pretendard-Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'pr';\r\n  src: url('../../../public/fonts/Pretendard-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'ps';\r\n  src: url('../../../public/fonts/Pretendard-SemiBold.ttf') format('truetype');\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9690c76f16c442a99f1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.2672a46ce86daab15502.hot-update.js.map