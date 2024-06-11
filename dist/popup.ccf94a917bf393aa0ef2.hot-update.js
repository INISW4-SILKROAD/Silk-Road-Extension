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
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import '../css/TouchInfo.css';

// const TouchInfo = () => {
//   // 임시로 사용할 촉감 데이터 (1~5점)
//   const touchData = {
//     softness: 5, // 부드러움
//     smoothness: 3, // 매끄러움
//     thickness: 4, // 두꺼움
//     flexibility: 2, // 신축성
//   };

//   // 점수에 따른 색상 설정
//   const getBarColor = (score, color) => {
//     const opacity = score / 5;
//     const hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, '0');
//     return `${color}${hexOpacity}`;
//   };

//   // 촉감별 대표 색상 설정
//   const colorMapping = {
//     softness: '#3A506B', 
//     smoothness: '#3A506B', 
//     thickness: '#3A506B', 
//     flexibility: '#3A506B' 
//   };

//   return (
//     <div className="touch-info">
//       <div className='touch-info-text'>
//       <h2>촉감 정보</h2>
//       </div>
//       <div className='touch-area'>
//       <div className="touch-bar">
//         <span>부드러움</span>
//         <div className="progress-bar-wrapper">
//         <ProgressBar
//             now={(touchData.softness / 5) * 100}
//             className="custom-progress-bar"
//             style={{
//               backgroundColor: 'transparent',
//               backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.softness, colorMapping.softness)} 0%, ${getBarColor(touchData.softness, colorMapping.softness)} ${(touchData.softness / 5) * 100}%, #ffffff ${(touchData.softness / 5) * 100}%, #ffffff 100%)`
//             }}
//           />
//           <div className="ticks">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="touch-bar">
//         <span>매끄러움</span>
//         <div className="progress-bar-wrapper">
//           <ProgressBar
//             now={(touchData.smoothness / 5) * 100}
//             className="custom-progress-bar"
//             style={{
//               backgroundColor: 'transparent',
//               backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.smoothness, colorMapping.smoothness)} 0%, ${getBarColor(touchData.smoothness, colorMapping.smoothness)} ${(touchData.smoothness / 5) * 100}%, #ffffff ${(touchData.smoothness / 5) * 100}%, #ffffff 100%)`
//             }}
//           />
//           <div className="ticks">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="touch-bar">
//         <span>두께</span>
//         <div className="progress-bar-wrapper">
//           <ProgressBar
//             now={(touchData.thickness / 5) * 100}
//             className="custom-progress-bar"
//             style={{
//               backgroundColor: 'transparent',
//               backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.thickness, colorMapping.thickness)} 0%, ${getBarColor(touchData.thickness, colorMapping.thickness)} ${(touchData.thickness / 5) * 100}%, #ffffff ${(touchData.thickness / 5) * 100}%, #ffffff 100%)`
//             }}
//           />
//           <div className="ticks">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="touch-bar">
//         <span>신축성</span>
//         <div className="progress-bar-wrapper">
//           <ProgressBar
//             now={(touchData.flexibility / 5) * 100}
//             className="custom-progress-bar"
//             style={{
//               backgroundColor: 'transparent',
//               backgroundImage: `linear-gradient(to right, ${getBarColor(touchData.flexibility, colorMapping.flexibility)} 0%, ${getBarColor(touchData.flexibility, colorMapping.flexibility)} ${(touchData.flexibility / 5) * 100}%, #ffffff ${(touchData.flexibility / 5) * 100}%, #ffffff 100%)`
//             }}
//           />
//           <div className="ticks">
//             {[...Array(6)].map((_, i) => (
//               <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//             ))}
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;




var TouchInfo = function TouchInfo() {
  // 임시로 사용할 촉감 데이터 (1~5점)
  var touchData = {
    softness: 5,
    // 부드러움
    smoothness: 3,
    // 매끄러움
    thickness: 4,
    // 두꺼움
    flexibility: 2 // 신축성
  };

  // 촉감별 대표 색상 설정
  var colorMapping = {
    softness: '#f78e69',
    smoothness: '#f78e69',
    thickness: '#f78e69',
    flexibility: '#3A506B'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\uCD09\uAC10 \uC815\uBCF4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uBD80\uB4DC\uB7EC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.softness / 5 * 100,
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(colorMapping.softness, " 0%, ").concat(colorMapping.softness, " ").concat(touchData.softness / 5 * 100, "%, #ffffff ").concat(touchData.softness / 5 * 100, "%, #ffffff 100%)")
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB9E4\uB044\uB7EC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.smoothness / 5 * 100,
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(colorMapping.smoothness, " 0%, ").concat(colorMapping.smoothness, " ").concat(touchData.smoothness / 5 * 100, "%, #ffffff ").concat(touchData.smoothness / 5 * 100, "%, #ffffff 100%)")
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uB450\uAED8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.thickness / 5 * 100,
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(colorMapping.thickness, " 0%, ").concat(colorMapping.thickness, " ").concat(touchData.thickness / 5 * 100, "%, #ffffff ").concat(touchData.thickness / 5 * 100, "%, #ffffff 100%)")
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC2E0\uCD95\uC131"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "progress-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    now: touchData.flexibility / 5 * 100,
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(colorMapping.flexibility, " 0%, ").concat(colorMapping.flexibility, " ").concat(touchData.flexibility / 5 * 100, "%, #ffffff ").concat(touchData.flexibility / 5 * 100, "%, #ffffff 100%)")
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
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7aa3da92278d8520254")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.ccf94a917bf393aa0ef2.hot-update.js.map