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
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var _css_TouchInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/TouchInfo.css */ "./src/popup/css/TouchInfo.css");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

// import React from 'react';
// import '../css/TouchInfo.css';

// const TouchInfo = () => {
//   // 임시로 사용할 촉감 데이터 (1~5점)
//   const touchData = {
//     hardness: 3, // 딱딱함 정도
//     roughness: 2, // 거칠음 정도
//     thickness: 4, // 두꺼움 정도
//     elasticity: 5, // 신축성 정도
//   };

//   // 점수에 따른 색상 및 길이 설정
//   const getBarStyle = (score, color) => ({
//     width: `${(score / 5) * 100}%`,
//     backgroundColor: color,
//     opacity: score / 5,
//   });

//   return (
//     <div className="touch-info">
//       <h2>촉감 정보</h2>
//       <div className="touch-bar">
//         <span>딱딱한</span>
//         <div className="bar" style={getBarStyle(touchData.hardness, 'red')}></div>
//         <span>부드러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>거친</span>
//         <div className="bar" style={getBarStyle(touchData.roughness, 'green')}></div>
//         <span>매끄러운</span>
//       </div>
//       <div className="touch-bar">
//         <span>얇은</span>
//         <div className="bar" style={getBarStyle(touchData.thickness, 'blue')}></div>
//         <span>두꺼운</span>
//       </div>
//       <div className="touch-bar">
//         <span>신축성 없는</span>
//         <div className="bar" style={getBarStyle(touchData.elasticity, 'purple')}></div>
//         <span>신축성 있는</span>
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;




var TouchInfo = function TouchInfo() {
  // 임시로 사용할 촉감 데이터 (1~5점)
  var touchData = {
    hardness: 5,
    // 딱딱함 정도
    roughness: 2,
    // 거칠음 정도
    thickness: 4,
    // 두꺼움 정도
    elasticity: 5 // 신축성 정도
  };

  // 점수에 따른 색상 설정
  var getBarColor = function getBarColor(score, color) {
    var opacity = score / 5;
    return "".concat(color).concat(Math.round(opacity * 255).toString(16).padStart(2, '0'));
  };

  // 점수에 따른 배경 색상 설정
  var getBackgroundColor = function getBackgroundColor(score, color) {
    var opacity = (5 - score) / 5;
    return "".concat(color).concat(Math.round(opacity * 255).toString(16).padStart(2, '0'));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\uCD09\uAC10 \uC815\uBCF4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB531\uB531\uD55C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.hardness / 5 * 100,
    style: {
      backgroundColor: getBarColor(touchData.hardness, 'ff0000'),
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.hardness, '#ff0000'), ", ").concat(getBackgroundColor(touchData.hardness, '#ffffff'), ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ticks"
  }, _toConsumableArray(Array(6)).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "tick",
      style: {
        left: "".concat(i / 5 * 100, "%")
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uBD80\uB4DC\uB7EC\uC6B4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uAC70\uCE5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.roughness / 5 * 100,
    style: {
      backgroundColor: getBarColor(touchData.roughness, '00ff00'),
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.roughness, '#00ff00'), ", ").concat(getBackgroundColor(touchData.roughness, '#ffffff'), ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ticks"
  }, _toConsumableArray(Array(6)).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "tick",
      style: {
        left: "".concat(i / 5 * 100, "%")
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB9E4\uB044\uB7EC\uC6B4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC587\uC740"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.thickness / 5 * 100,
    style: {
      backgroundColor: getBarColor(touchData.thickness, '0000ff'),
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.thickness, '#0000ff'), ", ").concat(getBackgroundColor(touchData.thickness, '#ffffff'), ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ticks"
  }, _toConsumableArray(Array(6)).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "tick",
      style: {
        left: "".concat(i / 5 * 100, "%")
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB450\uAEBC\uC6B4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC2E0\uCD95\uC131 \uC5C6\uB294"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.elasticity / 5 * 100,
    style: {
      backgroundColor: getBarColor(touchData.elasticity, '800080'),
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.elasticity, '#800080'), ", ").concat(getBackgroundColor(touchData.elasticity, '#ffffff'), ")")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ticks"
  }, _toConsumableArray(Array(6)).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i,
      className: "tick",
      style: {
        left: "".concat(i / 5 * 100, "%")
      }
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC2E0\uCD95\uC131 \uC788\uB294")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9e37808d0399eed05c81")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.46b053211b1868b9626b.hot-update.js.map