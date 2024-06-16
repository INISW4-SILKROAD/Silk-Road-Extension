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
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var _css_TouchInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/TouchInfo.css */ "./src/popup/css/TouchInfo.css");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
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

// import React, { useEffect, useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import axios from 'axios';
// import '../css/TouchInfo.css';
// import io from 'socket.io-client';

// const TouchInfo = ({ productId, dataSource }) => {
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
//     const fetchTouchDataFromServer = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:5001/goods/${productId}`);
//         const data = response.data;
//         console.log("서버에서 받은 촉감 데이터:", data);
//         setTouchData({
//           softness: data.SOFTNESS + 1,
//           smoothness: data.SMOOTHNESS + 1,
//           thickness: data.THICKNESS + 1,
//           flexibility: data.FLEXIBILITY + 1
//         });
//       } catch (error) {
//         console.error("촉감 데이터를 불러오는 중 에러 발생:", error);
//       }
//     };

//     if (dataSource === 'model') {
//       const socket = io('http://127.0.0.1:5001');
//       socket.on('connect', () => {
//         console.log('Socket connected');
//         socket.emit('joinRoom', productId);
//       });

//       socket.on('touchInfo', (data) => {
//         console.log('Received touch info from server:', data);
//         setTouchData({
//           softness: data.touchInfo[0],
//           smoothness: data.touchInfo[1],
//           thickness: data.touchInfo[2],
//           flexibility: data.touchInfo[3]
//         });
//       });

//       socket.on('disconnect', () => {
//         console.log('Socket disconnected');
//       });

//       return () => {
//         socket.disconnect();
//       };
//     } else if (dataSource === 'search') {
//       fetchTouchDataFromServer();
//     }
//   }, [productId, dataSource]);

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
    dataSource = _ref.dataSource;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      softness: 0,
      smoothness: 0,
      thickness: 0,
      flexibility: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    touchData = _useState2[0],
    setTouchData = _useState2[1];
  var labelMapping = {
    softness: '부드러움',
    smoothness: '매끄러움',
    thickness: '두께',
    flexibility: '신축성'
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("Joining room for product: ".concat(productId));
    var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__["default"])('http://127.0.0.1:5001');
    socket.emit('joinRoom', productId);
    socket.on('touchInfo', function (data) {
      console.log('Received touch data:', data);
      if (data.productId === productId) {
        setTouchData({
          softness: data.touchInfo[0],
          smoothness: data.touchInfo[1],
          thickness: data.touchInfo[2],
          flexibility: data.touchInfo[3]
        });
      }
    });
    return function () {
      socket.disconnect();
    };
  }, [productId]);
  var colorMapping = {
    softness: '#FFDBDA',
    smoothness: '#FFDBDA',
    thickness: '#FFDBDA',
    flexibility: '#FFDBDA'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info-text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-area"
  }, Object.keys(touchData).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      className: "touch-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, labelMapping[key]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      now: touchData[key] / 5 * 100,
      className: "custom-progress-bar",
      style: {
        backgroundColor: 'transparent',
        backgroundImage: "linear-gradient(to right, ".concat(colorMapping[key], " 0%, ").concat(colorMapping[key], " ").concat(touchData[key] / 5 * 100, "%, #ffffff ").concat(touchData[key] / 5 * 100, "%, #ffffff 100%)")
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
    }))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df07c51350486802f197")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.173649c31579f97a00f3.hot-update.js.map