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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error("Cannot find module '‘https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff’'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.goods-list-container {
    width: 450px;
    padding: 20px;
    background-color: #1C2541;
    color: black;
    border-radius: 15px;
  }
  
  .category-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    font-family: 'yangjin';
  }
  
  .category-button {
    background-color: #5BC0BE;
    color: #1C2541;
    border: none;
    padding: 10px 20px;
    border-radius: 40px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .category-button:hover {
    background-color: #FFFFFF;
    color: #000000;
  }
  
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  
  }
  
  .goods-item {
    width: 45%;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    background-color: white;
    text-size-adjust: 1.0em;
    border-radius: 15px;
  }
  
  .goods-item img {
    width: 100%;
    border-top-left-radius: 15px; /* 상단 왼쪽 모서리 둥글게 */
    border-top-right-radius: 15px; /* 상단 오른쪽 모서리 둥글게 */
  }
  
  .goods-item p {
    margin: 10px 0 0 0;
    font-size: 0.9em;
  }
  
  .goods-item p span {
    display: block;
    font-size: 0.8em;
    color: #aaa;
  }
  
  @font-face { 
    font-family: 'yangjin'; 
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(‘woff’); 
    font-weight: normal; 
    font-style: normal; 
  }`, "",{"version":3,"sources":["webpack://./src/popup/css/GoodsList.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;IACzB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,6BAA6B;;EAE/B;;EAEA;IACE,UAAU;IACV,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,4BAA4B,EAAE,kBAAkB;IAChD,6BAA6B,EAAE,mBAAmB;EACpD;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,sBAAsB;IACtB,2DAA4F;IAC5F,mBAAmB;IACnB,kBAAkB;EACpB","sourcesContent":[".goods-list-container {\n    width: 450px;\n    padding: 20px;\n    background-color: #1C2541;\n    color: black;\n    border-radius: 15px;\n  }\n  \n  .category-buttons {\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 20px;\n    font-family: 'yangjin';\n  }\n  \n  .category-button {\n    background-color: #5BC0BE;\n    color: #1C2541;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 40px;\n    cursor: pointer;\n    font-weight: bold;\n  }\n  \n  .category-button:hover {\n    background-color: #FFFFFF;\n    color: #000000;\n  }\n  \n  .goods-list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n  \n  }\n  \n  .goods-item {\n    width: 45%;\n    margin-bottom: 20px;\n    text-align: center;\n    cursor: pointer;\n    background-color: white;\n    text-size-adjust: 1.0em;\n    border-radius: 15px;\n  }\n  \n  .goods-item img {\n    width: 100%;\n    border-top-left-radius: 15px; /* 상단 왼쪽 모서리 둥글게 */\n    border-top-right-radius: 15px; /* 상단 오른쪽 모서리 둥글게 */\n  }\n  \n  .goods-item p {\n    margin: 10px 0 0 0;\n    font-size: 0.9em;\n  }\n  \n  .goods-item p span {\n    display: block;\n    font-size: 0.8em;\n    color: #aaa;\n  }\n  \n  @font-face { \n    font-family: 'yangjin'; \n    src: url(‘https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff’) format(‘woff’); \n    font-weight: normal; \n    font-style: normal; \n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c0889ab1d5a66cf2ef21")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.6b32b1540b2611cbca1e.hot-update.js.map