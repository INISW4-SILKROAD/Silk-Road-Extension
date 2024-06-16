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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// import React, { useEffect, useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import axios from 'axios';
// import '../css/TouchInfo.css';

// const TouchInfo = ({ productId }) => {
//   const [touchData, setTouchData] = useState({
//     softness: 0,
//     smoothness: 0,
//     thickness: 0,
//     flexibility: 0
//   });

//   const labelMapping = {
//     softness: '부드러움',
//     smoothness: '매끄러움',
//     thickness: '두께',
//     flexibility: '신축성'
//   };

//   useEffect(() => {
//     if (productId) {
//       const fetchTouchData = async () => {
//         try {
//           const response = await axios.get(`http://127.0.0.1:5001/goods/${productId}`);
//           const data = response.data;
//           console.log("서버에서 받은 촉감 데이터:", data);

//           if (data) {
//             setTouchData({
//               softness: data.SOFTNESS || 0,
//               smoothness: data.SMOOTHNESS || 0,
//               thickness: data.THICKNESS || 0,
//               flexibility: data.FLEXIBILITY || 0
//             });
//           }
//         } catch (error) {
//           console.error("촉감 데이터를 불러오는 중 에러 발생:", error);
//         }
//       };

//       fetchTouchData();
//     }
//   }, [productId]);

//   const colorMapping = {
//     softness: '#FFDBDA',
//     smoothness: '#FFDBDA',
//     thickness: '#FFDBDA',
//     flexibility: '#FFDBDA'
//   };

//   return (
//     <div className="touch-info">
//       <div className='touch-info-text'>
//       </div>
//       <div className='touch-area'>
//         {Object.keys(touchData).map((key) => (
//           <div key={key} className="touch-bar">
//             <span>{labelMapping[key]}</span>
//             <div className="progress-bar-wrapper">
//               <ProgressBar
//                 now={(touchData[key] / 5) * 100}
//                 className="custom-progress-bar"
//                 style={{
//                   backgroundColor: 'transparent',
//                   backgroundImage: `linear-gradient(to right, ${colorMapping[key]} 0%, ${colorMapping[key]} ${(touchData[key] / 5) * 100}%, #ffffff ${(touchData[key] / 5) * 100}%, #ffffff 100%)`
//                 }}
//               />
//               <div className="ticks">
//                 {[...Array(6)].map((_, i) => (
//                   <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;


var TouchInfo = function TouchInfo(_ref) {
  var productId = _ref.productId,
    touchInfo = _ref.touchInfo;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(touchInfo),
    _useState2 = _slicedToArray(_useState, 2),
    localTouchInfo = _useState2[0],
    setLocalTouchInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (touchInfo) {
      setLocalTouchInfo(touchInfo.map(function (info) {
        return info + 1;
      }));
      setError(false);
    } else {
      setLocalTouchInfo(null);
      setError(true);
    }
  }, [touchInfo]);
  if (error && productId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "error-overlay"
    }, "\uCD09\uAC10 \uC815\uBCF4\uB97C \uAC00\uC838\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info-container"
  }, localTouchInfo ? localTouchInfo.map(function (value, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "touch-info-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, ['부드러움', '두께', '매끄러움', '신축성'][index], ":"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("progress", {
      value: value,
      max: "10"
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uCD09\uAC10 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bae049f4034278c7fd03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.543df505b41a37815b0d.hot-update.js.map