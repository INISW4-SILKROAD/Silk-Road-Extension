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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../yangjin.otf */ "./yangjin.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./laundry_bold.ttf */ "./laundry_bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./laundry_regular.ttf */ "./laundry_regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./Freesentation-4Regular.ttf */ "./Freesentation-4Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./Freesentation-5Medium.ttf */ "./Freesentation-5Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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
  background-color: #0B132B;
}

.navbar {
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  /* padding: 10px; */
  background-color: #0B132B;
}

.back-button {
  margin-top: 5px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center;
  background-size: contain;
  border: none;
  width: 30px; /* 버튼 크기 조정 */
  height: 30px; /* 버튼 크기 조정 */
  cursor: pointer;
  border-radius: 90px;
}


.image-container {
  margin-top: 30px;
  width: 400px; /* 컨테이너 너비 */
  height: 350px;
  display: flex;
  justify-content: center; /* 가운데 정렬 */
}

.product-image {
  /* max-width: 300px;  */
  max-height: 150px; /* 이미지 최대 높이 지정 */
  object-fit: contain;
}

.product-info h1 {
  margin-top: 20px;
  text-align: left;
  color: #FFFFFF;
  font-family: 'laundry-regular';
  font-size: 20pt;
}

.product-info p {
  margin-top: 10px;
  text-align: right;
  color: #FFFFFF;
  font-family: 'laundry-regular';
  font-size: 18pt;
}

.view-product-button {
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  width: 220px;
  border-radius: 18px;
  font-family: 'laundry-regular';
}

.view-product-button:hover {
  background-color: #FFFFFF;
  color: #000000;
}


@font-face {
  font-family: 'yangjin';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}

@font-face {
  font-family: 'laundry-bold';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}

@font-face {
  font-family: 'laundry-regular';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
}


@font-face {
  font-family: 'f4';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format('truetype');
}

@font-face {
  font-family: 'f5';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('truetype');
}`, "",{"version":3,"sources":["webpack://./src/popup/css/Detail.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,2EAAwE;EACxE,wBAAwB;EACxB,YAAY;EACZ,WAAW,EAAE,aAAa;EAC1B,YAAY,EAAE,aAAa;EAC3B,eAAe;EACf,mBAAmB;AACrB;;;AAGA;EACE,gBAAgB;EAChB,YAAY,EAAE,YAAY;EAC1B,aAAa;EACb,aAAa;EACb,uBAAuB,EAAE,WAAW;AACtC;;AAEA;EACE,uBAAuB;EACvB,iBAAiB,EAAE,iBAAiB;EACpC,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;;AAGA;EACE,sBAAsB;EACtB,+DAA4C;AAC9C;;AAEA;EACE,2BAA2B;EAC3B,+DAA2E;AAC7E;;AAEA;EACE,8BAA8B;EAC9B,+DAA8E;AAChF;;;AAGA;EACE,iBAAiB;EACjB,+DAAqF;AACvF;;AAEA;EACE,iBAAiB;EACjB,+DAAoF;AACtF","sourcesContent":["#root {\n  background-color: #0B132B;\n}\n\n.detail-container {\n  width: 500px;\n  height: 800px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background-color: #0B132B;\n}\n\n.navbar {\n  width: 100%;\n  height: 15px;\n  display: flex;\n  justify-content: flex-start;\n  /* padding: 10px; */\n  background-color: #0B132B;\n}\n\n.back-button {\n  margin-top: 5px;\n  background: url('~/public/left_arrow_white.png') no-repeat center center;\n  background-size: contain;\n  border: none;\n  width: 30px; /* 버튼 크기 조정 */\n  height: 30px; /* 버튼 크기 조정 */\n  cursor: pointer;\n  border-radius: 90px;\n}\n\n\n.image-container {\n  margin-top: 30px;\n  width: 400px; /* 컨테이너 너비 */\n  height: 350px;\n  display: flex;\n  justify-content: center; /* 가운데 정렬 */\n}\n\n.product-image {\n  /* max-width: 300px;  */\n  max-height: 150px; /* 이미지 최대 높이 지정 */\n  object-fit: contain;\n}\n\n.product-info h1 {\n  margin-top: 20px;\n  text-align: left;\n  color: #FFFFFF;\n  font-family: 'laundry-regular';\n  font-size: 20pt;\n}\n\n.product-info p {\n  margin-top: 10px;\n  text-align: right;\n  color: #FFFFFF;\n  font-family: 'laundry-regular';\n  font-size: 18pt;\n}\n\n.view-product-button {\n  background-color: #000000;\n  color: #FFFFFF;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 16px;\n  width: 220px;\n  border-radius: 18px;\n  font-family: 'laundry-regular';\n}\n\n.view-product-button:hover {\n  background-color: #FFFFFF;\n  color: #000000;\n}\n\n\n@font-face {\n  font-family: 'yangjin';\n  src: url('~/yangjin.otf') format('truetype');\n}\n\n@font-face {\n  font-family: 'laundry-bold';\n  src: url('/Users/kdj/Desktop/silkroad/laundry_bold.ttf') format('truetype');\n}\n\n@font-face {\n  font-family: 'laundry-regular';\n  src: url('/Users/kdj/Desktop/silkroad/laundry_regular.ttf') format('truetype');\n}\n\n\n@font-face {\n  font-family: 'f4';\n  src: url('/Users/kdj/Desktop/silkroad/Freesentation-4Regular.ttf') format('truetype');\n}\n\n@font-face {\n  font-family: 'f5';\n  src: url('/Users/kdj/Desktop/silkroad/Freesentation-5Medium.ttf') format('truetype');\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cee6ac3050d40fc3719d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.6c3b336f9869cf69a4db.hot-update.js.map