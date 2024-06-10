"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css ***!
  \************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../public/left_arrow_white.png */ "./public/left_arrow_white.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ` #root {
  background-color: #1e3a56;
 }
 
 .detail-container {
    width: 500px;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .navbar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    background-color: #1e3a56;
  }
  
  .back-button {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center;
    background-size: contain;
    border: none;
    width: 40px; /* 버튼 크기 조정 */
    height: 40px; /* 버튼 크기 조정 */
    cursor: pointer;
  }
  
  .back-button:hover {
    background-color: #000000;
  }
  
  .image-container {
    width: 400px;
    height: 450px;
    margin-top: 20px;
  }
  
  .product-info {
    margin-top: 20px;
    text-align: center;
  }
  
  .tactile-info-container {
    margin-top: 20px;
  }
  
  .view-product-button {
    margin-top: 20px;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .view-product-button:hover {
    background-color: #000000;
    color: #FFFFFF;
  }
  `, "",{"version":3,"sources":["webpack://./src/popup/css/Detail.css"],"names":[],"mappings":"CAAC;EACC,yBAAyB;CAC1B;;CAEA;IACG,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,yBAAyB;EAC3B;;EAEA;IACE,2EAAwE;IACxE,wBAAwB;IACxB,YAAY;IACZ,WAAW,EAAE,aAAa;IAC1B,YAAY,EAAE,aAAa;IAC3B,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,yBAAyB;IACzB,cAAc;EAChB","sourcesContent":[" #root {\n  background-color: #1e3a56;\n }\n \n .detail-container {\n    width: 500px;\n    height: 800px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n  }\n  \n  .navbar {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    padding: 10px;\n    background-color: #1e3a56;\n  }\n  \n  .back-button {\n    background: url('~/public/left_arrow_white.png') no-repeat center center;\n    background-size: contain;\n    border: none;\n    width: 40px; /* 버튼 크기 조정 */\n    height: 40px; /* 버튼 크기 조정 */\n    cursor: pointer;\n  }\n  \n  .back-button:hover {\n    background-color: #000000;\n  }\n  \n  .image-container {\n    width: 400px;\n    height: 450px;\n    margin-top: 20px;\n  }\n  \n  .product-info {\n    margin-top: 20px;\n    text-align: center;\n  }\n  \n  .tactile-info-container {\n    margin-top: 20px;\n  }\n  \n  .view-product-button {\n    margin-top: 20px;\n    background-color: #FFFFFF;\n    color: #000000;\n    border: none;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 16px;\n  }\n  \n  .view-product-button:hover {\n    background-color: #000000;\n    color: #FFFFFF;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("99b2fc4d64da5b7046cc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.b7eec9afe77f8517aa47.hot-update.js.map