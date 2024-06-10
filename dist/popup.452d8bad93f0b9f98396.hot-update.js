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
___CSS_LOADER_EXPORT___.push([module.id, `#root {
  background-color: #0B132B;
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
  height: 15px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  background-color: #1e3a56;
}

.back-button {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center;
  background-size: contain;
  border: none;
  width: 30px; /* 버튼 크기 조정 */
  height: 30px; /* 버튼 크기 조정 */
  cursor: pointer;
  
}

.back-button:hover {
  background-color: #1e3a56;
}

.image-container {
  margin-top: 35px;
  width: 100px; /* 컨테이너 너비 */
  height: 450px;
  display: flex;
  justify-content: center; /* 가운데 정렬 */
}

.product-image {
  max-width: 300px; 
  max-height: 150px; /* 이미지 최대 높이 지정 */
  object-fit: contain; /* 이미지 비율을 유지하며 크기 조정 */
}

.product-info {
  margin-top: 20px;
  text-align: center;
  color: #FFFFFF;
}

.tactile-info-container {
  margin-top: 20px;
}

.view-product-button {
  margin-top: 20px;
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  width: 220px;
}

.view-product-button:hover {
  background-color: #FFFFFF;
  color: #000000;
}
`, "",{"version":3,"sources":["webpack://./src/popup/css/Detail.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,2EAAwE;EACxE,wBAAwB;EACxB,YAAY;EACZ,WAAW,EAAE,aAAa;EAC1B,YAAY,EAAE,aAAa;EAC3B,eAAe;;AAEjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,YAAY,EAAE,YAAY;EAC1B,aAAa;EACb,aAAa;EACb,uBAAuB,EAAE,WAAW;AACtC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB,EAAE,iBAAiB;EACpC,mBAAmB,EAAE,uBAAuB;AAC9C;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB","sourcesContent":["#root {\n  background-color: #0B132B;\n}\n\n.detail-container {\n  width: 500px;\n  height: 800px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.navbar {\n  width: 100%;\n  height: 15px;\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  background-color: #1e3a56;\n}\n\n.back-button {\n  background: url('~/public/left_arrow_white.png') no-repeat center center;\n  background-size: contain;\n  border: none;\n  width: 30px; /* 버튼 크기 조정 */\n  height: 30px; /* 버튼 크기 조정 */\n  cursor: pointer;\n  \n}\n\n.back-button:hover {\n  background-color: #1e3a56;\n}\n\n.image-container {\n  margin-top: 35px;\n  width: 100px; /* 컨테이너 너비 */\n  height: 450px;\n  display: flex;\n  justify-content: center; /* 가운데 정렬 */\n}\n\n.product-image {\n  max-width: 300px; \n  max-height: 150px; /* 이미지 최대 높이 지정 */\n  object-fit: contain; /* 이미지 비율을 유지하며 크기 조정 */\n}\n\n.product-info {\n  margin-top: 20px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.tactile-info-container {\n  margin-top: 20px;\n}\n\n.view-product-button {\n  margin-top: 20px;\n  background-color: #000000;\n  color: #FFFFFF;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 16px;\n  width: 220px;\n}\n\n.view-product-button:hover {\n  background-color: #FFFFFF;\n  color: #000000;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44687f8b589a07b92095")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.452d8bad93f0b9f98396.hot-update.js.map