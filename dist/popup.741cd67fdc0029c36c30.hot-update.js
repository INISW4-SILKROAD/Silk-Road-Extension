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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../public/left_arrow_white.png */ "./public/left_arrow_white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-4Regular.ttf */ "./public/fonts/Freesentation-4Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-5Medium.ttf */ "./public/fonts/Freesentation-5Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#root {
  background-color: #e0e6ea;
}

.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #e0e6ea; /* 백그라운드 색상 추가 */
}

.navbar {
  margin-top: -10px;
  width: 100%; /* 너비를 100%로 설정 */
  height: 40px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  background-color: #e0e6ea;
}

.back-button {
  margin-left: -10px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center;
  background-size: contain;
  border: none;
  width: 33px; /* 버튼 크기 조정 */
  height: 33px; /* 버튼 크기 조정 */
  cursor: pointer;
  border-radius: 90px;
}

.image-container {
  border-radius: 8px;
  margin-top: 10px; /* 상단 마진 조정 */
  width: 400px; /* 컨테이너 너비 */
  height: 400px; /* 컨테이너 높이 */
  display: flex;
  justify-content: center; 
  align-items: center;
  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 설정 */
  border-radius: 8px;
  box-shadow:  7px 7px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%; /* 컨테이너 너비에 맞추기 */
  height: auto; /* 높이는 자동으로 조정 */
  object-fit: contain; /* 비율을 유지하며 컨테이너에 맞추기 */
}

.product-info {
  width: 100%;
  padding: 20px;
  color: #555657;
}

.product-info h1 {
  margin-top: 10px;
  text-align: left;
  font-family: 'pm';
  font-size: 15pt;
  font-weight: bold;
}

.product-info p {
  margin-top: 10px;
  text-align: right;
  font-family: 'f4';
  font-size: 12pt;
}

.tactile-info-container {
  margin-top: -30px;
}


.view-product-button {
  margin-top: 10px;
  background-color: #B7B597;
  color: #1e1f23;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 220px;
  border-radius: 12px;
  font-family: 'f5';
}

.view-product-button:hover {
  background-color: #FFFFFF;
  color: #000000;
}

@font-face {
  font-family: 'f4';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
@font-face {
  font-family: 'f5';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}
`, "",{"version":3,"sources":["webpack://./src/popup/css/Detail.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,yBAAyB,EAAE,gBAAgB;AAC7C;;AAEA;EACE,iBAAiB;EACjB,WAAW,EAAE,iBAAiB;EAC9B,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,2EAAwE;EACxE,wBAAwB;EACxB,YAAY;EACZ,WAAW,EAAE,aAAa;EAC1B,YAAY,EAAE,aAAa;EAC3B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB,EAAE,aAAa;EAC/B,YAAY,EAAE,YAAY;EAC1B,aAAa,EAAE,YAAY;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB,EAAE,yBAAyB;EAC3C,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,WAAW,EAAE,iBAAiB;EAC9B,YAAY,EAAE,gBAAgB;EAC9B,mBAAmB,EAAE,uBAAuB;AAC9C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;;AAGA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,+DAA+E;AACjF;AACA;EACE,iBAAiB;EACjB,+DAA8E;AAChF","sourcesContent":["#root {\r\n  background-color: #e0e6ea;\r\n}\r\n\r\n.detail-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  background-color: #e0e6ea; /* 백그라운드 색상 추가 */\r\n}\r\n\r\n.navbar {\r\n  margin-top: -10px;\r\n  width: 100%; /* 너비를 100%로 설정 */\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 10px;\r\n  background-color: #e0e6ea;\r\n}\r\n\r\n.back-button {\r\n  margin-left: -10px;\r\n  background: url('~/public/left_arrow_white.png') no-repeat center center;\r\n  background-size: contain;\r\n  border: none;\r\n  width: 33px; /* 버튼 크기 조정 */\r\n  height: 33px; /* 버튼 크기 조정 */\r\n  cursor: pointer;\r\n  border-radius: 90px;\r\n}\r\n\r\n.image-container {\r\n  border-radius: 8px;\r\n  margin-top: 10px; /* 상단 마진 조정 */\r\n  width: 400px; /* 컨테이너 너비 */\r\n  height: 400px; /* 컨테이너 높이 */\r\n  display: flex;\r\n  justify-content: center; \r\n  align-items: center;\r\n  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 설정 */\r\n  border-radius: 8px;\r\n  box-shadow:  7px 7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.product-image {\r\n  width: 100%; /* 컨테이너 너비에 맞추기 */\r\n  height: auto; /* 높이는 자동으로 조정 */\r\n  object-fit: contain; /* 비율을 유지하며 컨테이너에 맞추기 */\r\n}\r\n\r\n.product-info {\r\n  width: 100%;\r\n  padding: 20px;\r\n  color: #555657;\r\n}\r\n\r\n.product-info h1 {\r\n  margin-top: 10px;\r\n  text-align: left;\r\n  font-family: 'pm';\r\n  font-size: 15pt;\r\n  font-weight: bold;\r\n}\r\n\r\n.product-info p {\r\n  margin-top: 10px;\r\n  text-align: right;\r\n  font-family: 'f4';\r\n  font-size: 12pt;\r\n}\r\n\r\n.tactile-info-container {\r\n  margin-top: -30px;\r\n}\r\n\r\n\r\n.view-product-button {\r\n  margin-top: 10px;\r\n  background-color: #B7B597;\r\n  color: #1e1f23;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  width: 220px;\r\n  border-radius: 12px;\r\n  font-family: 'f5';\r\n}\r\n\r\n.view-product-button:hover {\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'f4';\r\n  src: url('../../../public/fonts/Freesentation-4Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'f5';\r\n  src: url('../../../public/fonts/Freesentation-5Medium.ttf') format('truetype');\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9085d0a3fff3efe0a881")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.741cd67fdc0029c36c30.hot-update.js.map