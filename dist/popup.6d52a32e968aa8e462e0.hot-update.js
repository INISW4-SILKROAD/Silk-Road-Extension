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



var TouchInfo = function TouchInfo() {
  // 임시로 사용할 촉감 데이터 (1~5점)
  var touchData = {
    softness: 5,
    // 부드러움
    smoothness: 3,
    // 매끄러움
    thickness: 4,
    // 두꺼움
    flexibility: 1 // 신축성
  };

  // 점수에 따른 색상 설정
  var getBarColor = function getBarColor(score, color) {
    var opacity = score / 5;
    var hexOpacity = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return "".concat(color).concat(hexOpacity);
  };

  // 촉감별 대표 색상 설정
  var colorMapping = {
    softness: '#FF6984',
    smoothness: '#5CC0FF',
    thickness: '#AFFF7D',
    flexibility: '#FFFB94'
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
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.softness, colorMapping.softness), " 0%, ").concat(getBarColor(touchData.softness, colorMapping.softness), " ").concat(touchData.softness / 5 * 100, "%, #ffffff ").concat(touchData.softness / 5 * 100, "%, #ffffff 100%)")
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
    now: touchData.smoothness / 5 * 100,
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.smoothness, colorMapping.smoothness), " 0%, ").concat(getBarColor(touchData.smoothness, colorMapping.smoothness), " ").concat(touchData.smoothness / 5 * 100, "%, #ffffff ").concat(touchData.smoothness / 5 * 100, "%, #ffffff 100%)")
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
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.thickness, colorMapping.thickness), " 0%, ").concat(getBarColor(touchData.thickness, colorMapping.thickness), " ").concat(touchData.thickness / 5 * 100, "%, #ffffff ").concat(touchData.thickness / 5 * 100, "%, #ffffff 100%)")
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
    now: touchData.flexibility / 5 * 100,
    className: "custom-progress-bar",
    style: {
      backgroundColor: 'transparent',
      backgroundImage: "linear-gradient(to right, ".concat(getBarColor(touchData.flexibility, colorMapping.flexibility), " 0%, ").concat(getBarColor(touchData.flexibility, colorMapping.flexibility), " ").concat(touchData.flexibility / 5 * 100, "%, #ffffff ").concat(touchData.flexibility / 5 * 100, "%, #ffffff 100%)")
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uC2E0\uCD95\uC131 \uC788\uB294"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("faf70897d76ea31666b5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.6d52a32e968aa8e462e0.hot-update.js.map