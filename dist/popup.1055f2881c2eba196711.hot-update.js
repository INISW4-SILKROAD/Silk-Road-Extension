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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.touch-info {
  margin-top: 3%;
  background-color: #3A506B;
  padding: 20px;
  border-radius: 15px;
  width: 450px;
  height: 200px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
  justify-content: center;
}

.touch-area {
  width: 420px;
  background-color: #FFFFFF;
  border-radius: 15px;
}

.touch-info h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #FFFFFF;
}

.touch-bar {
  display: flex;
  align-items: center;
  margin: 5px 0;
  color: #000000;
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
  background-color: #3A506B;
}


.touch-info-text {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 420px;
  height: 35px;
  background-color: #d9dcd6;
  border-radius: 15px;
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/popup/css/TouchInfo.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAE,UAAU;EAC/B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;AAC3B;;;AAGA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;AACpB","sourcesContent":[".touch-info {\n  margin-top: 3%;\n  background-color: #3A506B;\n  padding: 20px;\n  border-radius: 15px;\n  width: 450px;\n  height: 200px;\n  margin-bottom: 20px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center; /* 중앙 정렬 */\n  justify-content: center;\n}\n\n.touch-area {\n  width: 420px;\n  background-color: #FFFFFF;\n  border-radius: 15px;\n}\n\n.touch-info h2 {\n  font-size: 1.5em;\n  margin-bottom: 10px;\n  color: #FFFFFF;\n}\n\n.touch-bar {\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  color: #000000;\n}\n\n.touch-bar span {\n  flex: 1;\n}\n\n.progress-bar-wrapper {\n  flex: 4;\n  position: relative;\n}\n\n.custom-progress-bar .progress-bar {\n  background-color: transparent !important;\n  background-image: none !important;\n}\n\n.ticks {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.tick {\n  width: 4px;\n  height: 100%;\n  background-color: #3A506B;\n}\n\n\n.touch-info-text {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 420px;\n  height: 35px;\n  background-color: #d9dcd6;\n  border-radius: 15px;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a131d5ed0bf7be5e0a3d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.1055f2881c2eba196711.hot-update.js.map