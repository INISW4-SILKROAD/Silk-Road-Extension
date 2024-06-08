"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/components/TouchInfo.jsx":
/*!********************************************!*\
  !*** ./src/popup/components/TouchInfo.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_TouchInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/TouchInfo.css */ "./src/popup/css/TouchInfo.css");
// import React from 'react';
// import '../css/TouchInfo.css';

// const TouchInfo = () => {
//   return (
//     <div className="touch-info">
//       <h2>촉감 정보</h2>
//       <div className="touch-bar">
//         <span>딱딱한</span>
//         <div className="bar red"></div>
//         <span>부드러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>거친</span>
//         <div className="bar green"></div>
//         <span>매끄러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>얇은</span>
//         <div className="bar blue"></div>
//         <span>두꺼운</span>
//       </div>
//       <div className="touch-bar">
//         <span>신축성 없는</span>
//         <div className="bar purple"></div>
//         <span>신축성 있는</span>
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;



var TouchInfo = function TouchInfo() {
  // 임시로 사용할 촉감 데이터 (1~5점)
  var touchData = {
    hardness: 3,
    // 딱딱함 정도
    roughness: 2,
    // 거칠음 정도
    thickness: 4,
    // 두꺼움 정도
    elasticity: 5 // 신축성 정도
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\uCD09\uAC10 \uC815\uBCF4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB531\uB531\uD55C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar red",
    style: {
      flex: touchData.hardness
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uBD80\uB4DC\uB7EC\uC6B4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uAC70\uCE5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar green",
    style: {
      flex: touchData.roughness
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB9E4\uB044\uB7EC\uC6B4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC587\uC740"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar blue",
    style: {
      flex: touchData.thickness
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB450\uAEBC\uC6B4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC2E0\uCD95\uC131 \uC5C6\uB294"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bar purple",
    style: {
      flex: touchData.elasticity
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC2E0\uCD95\uC131 \uC788\uB294")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, `/* .touch-info {
    background-color: #000000;
    padding: 20px;
    border-radius: 8px;
    width: 460px;
    height: 180px;
    margin-bottom: 20px;
  }
  
  .touch-info h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #FFFFFF;
  }
  
  .touch-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    color: #FFFFFF;
  }
  
  .bar {
    flex-grow: 1;
    height: 15px;
    margin: 0 10px;
    border-radius: 5px;
  }
  
  .red {
    background-color: red;
  }
  
  .green {
    background-color: green;
  }
  
  .blue {
    background-color: blue;
  }
  
  .purple {
    background-color: purple;
  }
   */
   .touch-info {
    background-color: #000000;
    padding: 20px;
    border-radius: 8px;
    width: 460px;
    height: auto;
    margin-bottom: 20px;
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
    color: #FFFFFF;
  }
  
  .bar {
    height: 15px;
    margin: 0 10px;
    border-radius: 5px;
    background-color: grey; /* 기본 배경색 */
  }
  
  .red {
    background-color: red;
  }
  
  .green {
    background-color: green;
  }
  
  .blue {
    background-color: blue;
  }
  
  .purple {
    background-color: purple;
  }
  `, "",{"version":3,"sources":["webpack://./src/popup/css/TouchInfo.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6CI;GACD;IACC,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,sBAAsB,EAAE,WAAW;EACrC;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,wBAAwB;EAC1B","sourcesContent":["/* .touch-info {\n    background-color: #000000;\n    padding: 20px;\n    border-radius: 8px;\n    width: 460px;\n    height: 180px;\n    margin-bottom: 20px;\n  }\n  \n  .touch-info h2 {\n    font-size: 1.5em;\n    margin-bottom: 10px;\n    color: #FFFFFF;\n  }\n  \n  .touch-bar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 5px 0;\n    color: #FFFFFF;\n  }\n  \n  .bar {\n    flex-grow: 1;\n    height: 15px;\n    margin: 0 10px;\n    border-radius: 5px;\n  }\n  \n  .red {\n    background-color: red;\n  }\n  \n  .green {\n    background-color: green;\n  }\n  \n  .blue {\n    background-color: blue;\n  }\n  \n  .purple {\n    background-color: purple;\n  }\n   */\n   .touch-info {\n    background-color: #000000;\n    padding: 20px;\n    border-radius: 8px;\n    width: 460px;\n    height: auto;\n    margin-bottom: 20px;\n  }\n  \n  .touch-info h2 {\n    font-size: 1.5em;\n    margin-bottom: 10px;\n    color: #FFFFFF;\n  }\n  \n  .touch-bar {\n    display: flex;\n    align-items: center;\n    margin: 5px 0;\n    color: #FFFFFF;\n  }\n  \n  .bar {\n    height: 15px;\n    margin: 0 10px;\n    border-radius: 5px;\n    background-color: grey; /* 기본 배경색 */\n  }\n  \n  .red {\n    background-color: red;\n  }\n  \n  .green {\n    background-color: green;\n  }\n  \n  .blue {\n    background-color: blue;\n  }\n  \n  .purple {\n    background-color: purple;\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/css/TouchInfo.css":
/*!*************************************!*\
  !*** ./src/popup/css/TouchInfo.css ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TouchInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/TouchInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!./TouchInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/TouchInfo.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./TouchInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/TouchInfo.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TouchInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56a90b60d047c1b2a868")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.2a02f5f31612a3b37df7.hot-update.js.map