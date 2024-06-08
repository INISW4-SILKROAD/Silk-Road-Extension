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
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    hardness: 1,
    // 딱딱함 정도
    roughness: 2,
    // 거칠음 정도
    thickness: 4,
    // 두꺼움 정도
    elasticity: 5 // 신축성 정도
  };

  // 점수에 따른 색상 설정
  var getBarColor = function getBarColor(score) {
    if (score === 1) return '#ffcccc';
    if (score === 2) return '#ff9999';
    if (score === 3) return '#ff6666';
    if (score === 4) return '#ff3333';
    return '#ff0000';
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "\uCD09\uAC10 \uC815\uBCF4"), Object.entries(touchData).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "touch-bar",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      now: value / 5 * 100,
      style: {
        backgroundColor: getBarColor(value)
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, key === '딱' ? '부드러운' : key === 'roughness' ? '매끄러운' : key === 'thickness' ? '두꺼운' : '신축성 있는'));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3ceae45ee9ab218ff51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.e160944f2d6531c40c30.hot-update.js.map