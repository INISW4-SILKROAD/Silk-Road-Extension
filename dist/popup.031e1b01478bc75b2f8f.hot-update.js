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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/Dark.png */ "./public/Dark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-4Regular.ttf */ "./public/fonts/Freesentation-4Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-5Medium.ttf */ "./public/fonts/Freesentation-5Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.touch-info {
  margin-top: 2.5%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); /* 이미지 경로 설정 */
  background-size: cover; /* 배경 이미지 크기를 컨테이너에 맞춤 */
  background-position: center; /* 배경 이미지의 위치를 중앙으로 설정 */
  padding: 20px;
  border-radius: 4px;
  width: 475px;
  height: 200px;
  margin-bottom: 10px;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  justify-content: center;
  font-family: 'f5';
  font-size: 13pt;
  border: 0.4px solid rgba(0, 0, 0, 0.6);
  /* box-shadow: 4px 4px 4px 4px; */
  position: relative; /* 오버레이를 위한 설정 */
}

.touch-info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 반투명 오버레이 */
  border-radius: 4px;
}

.touch-info * {
  position: relative; /* 오버레이 위에 텍스트를 보이게 하기 위한 설정 */
  z-index: 1;
  color: #ffffff; /* 텍스트 색상 흰색으로 설정 */
}


.touch-area {
  width: 420px;
  border-radius: 15px;
}

.touch-info h2 {
  margin-left: -12px;
  width: 475px;
  height: 40px;
  margin-top: -16px;
  font-family: 'f5';
  font-size: 18pt;
  color: #000000;
  font-weight: bold;
  /* background-color: rgba(0, 0, 0, 0.6);; */
}

.touch-bar {
  /* background-color: rgba(61, 63, 70, 0.5); */
  display: flex;
  align-items: center;
  margin: 5px 0;
  color: #000000;
  font-family: 'f4';
  font-size: 12pt;
}

.touch-bar span {
  flex: 1;
}

.progress-bar-wrapper {
  flex: 4;
  position: relative;
}

.custom-progress-bar .progress-bar {
  background-color: transparent !important;
  background-image: none !important;
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
  width: 4px;
  height: 100%;
  background-color: #3d3f46;
}


.touch-info-text {
  margin-top: 4px;
  margin-bottom: 2px;
  width: 450px;
  height: 50px;
  /* background-color: #D1D1D1; */
  text-align: center;
}

/* Rectangle */




@font-face {
  font-family: 'f4';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
@font-face {
  font-family: 'f5';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}





`, "",{"version":3,"sources":["webpack://./src/popup/css/TouchInfo.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,yDAAiD,EAAE,cAAc;EACjE,sBAAsB,EAAE,wBAAwB;EAChD,2BAA2B,EAAE,wBAAwB;EACrD,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAE,UAAU;EAC/B,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;EACf,sCAAsC;EACtC,iCAAiC;EACjC,kBAAkB,EAAE,gBAAgB;AACtC;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,8BAA8B,EAAE,aAAa;EAC7C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB,EAAE,8BAA8B;EAClD,UAAU;EACV,cAAc,EAAE,mBAAmB;AACrC;;;AAGA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,2CAA2C;AAC7C;;AAEA;EACE,6CAA6C;EAC7C,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;;AAGA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA,cAAc;;;;;AAKd;EACE,iBAAiB;EACjB,+DAA+E;AACjF;AACA;EACE,iBAAiB;EACjB,+DAA8E;AAChF","sourcesContent":[".touch-info {\r\n  margin-top: 2.5%;\r\n  background-image: url('../../../public/Dark.png'); /* 이미지 경로 설정 */\r\n  background-size: cover; /* 배경 이미지 크기를 컨테이너에 맞춤 */\r\n  background-position: center; /* 배경 이미지의 위치를 중앙으로 설정 */\r\n  padding: 20px;\r\n  border-radius: 4px;\r\n  width: 475px;\r\n  height: 200px;\r\n  margin-bottom: 10px;\r\n  border-width: 1px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; /* 중앙 정렬 */\r\n  justify-content: center;\r\n  font-family: 'f5';\r\n  font-size: 13pt;\r\n  border: 0.4px solid rgba(0, 0, 0, 0.6);\r\n  /* box-shadow: 4px 4px 4px 4px; */\r\n  position: relative; /* 오버레이를 위한 설정 */\r\n}\r\n\r\n.touch-info::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: rgba(0, 0, 0, 0.5); /* 반투명 오버레이 */\r\n  border-radius: 4px;\r\n}\r\n\r\n.touch-info * {\r\n  position: relative; /* 오버레이 위에 텍스트를 보이게 하기 위한 설정 */\r\n  z-index: 1;\r\n  color: #ffffff; /* 텍스트 색상 흰색으로 설정 */\r\n}\r\n\r\n\r\n.touch-area {\r\n  width: 420px;\r\n  border-radius: 15px;\r\n}\r\n\r\n.touch-info h2 {\r\n  margin-left: -12px;\r\n  width: 475px;\r\n  height: 40px;\r\n  margin-top: -16px;\r\n  font-family: 'f5';\r\n  font-size: 18pt;\r\n  color: #000000;\r\n  font-weight: bold;\r\n  /* background-color: rgba(0, 0, 0, 0.6);; */\r\n}\r\n\r\n.touch-bar {\r\n  /* background-color: rgba(61, 63, 70, 0.5); */\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 5px 0;\r\n  color: #000000;\r\n  font-family: 'f4';\r\n  font-size: 12pt;\r\n}\r\n\r\n.touch-bar span {\r\n  flex: 1;\r\n}\r\n\r\n.progress-bar-wrapper {\r\n  flex: 4;\r\n  position: relative;\r\n}\r\n\r\n.custom-progress-bar .progress-bar {\r\n  background-color: transparent !important;\r\n  background-image: none !important;\r\n}\r\n\r\n.ticks {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tick {\r\n  width: 4px;\r\n  height: 100%;\r\n  background-color: #3d3f46;\r\n}\r\n\r\n\r\n.touch-info-text {\r\n  margin-top: 4px;\r\n  margin-bottom: 2px;\r\n  width: 450px;\r\n  height: 50px;\r\n  /* background-color: #D1D1D1; */\r\n  text-align: center;\r\n}\r\n\r\n/* Rectangle */\r\n\r\n\r\n\r\n\r\n@font-face {\r\n  font-family: 'f4';\r\n  src: url('../../../public/fonts/Freesentation-4Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'f5';\r\n  src: url('../../../public/fonts/Freesentation-5Medium.ttf') format('truetype');\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("681f84d80a5c1230f9b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.031e1b01478bc75b2f8f.hot-update.js.map