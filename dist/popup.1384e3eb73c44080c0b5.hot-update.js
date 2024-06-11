self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/Detail.jsx":
/*!******************************!*\
  !*** ./src/popup/Detail.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _css_Detail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Detail.css */ "./src/popup/css/Detail.css");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TouchInfo */ "./src/popup/components/TouchInfo.jsx");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Detail = function Detail() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://localhost:5001/goods/".concat(id)).then(function (response) {
      return response.json();
    }).then(function (data) {
      return setProduct(data);
    })["catch"](function (error) {
      return console.error('Error fetching product:', error);
    });
  }, [id]);
  if (!product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "detail-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "back-button",
    onClick: function onClick() {
      return navigate('/');
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: './sample2.jpeg',
    alt: product.NAME
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "product-name"
  }, product.NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, product.PRICE, " \uC6D0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tactile-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "view-product-button",
    onClick: function onClick() {
      return window.open(product.LINK, '_blank');
    }
  }, "\uC0C1\uD488 \uBCF4\uB7EC\uAC00\uAE30"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);

/***/ }),

/***/ "./src/popup/Main.jsx":
/*!****************************!*\
  !*** ./src/popup/Main.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _css_Main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Main.css */ "./src/popup/css/Main.css");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TouchInfo */ "./src/popup/components/TouchInfo.jsx");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GoodsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoodsList */ "./src/popup/components/GoodsList.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Detail */ "./src/popup/Detail.jsx");






var Main = function Main() {
  var handleImageClick = function handleImageClick(id) {
    window.location.hash = "#/detail/".concat(id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onImageClick: handleImageClick
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Detail__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/popup/components/TouchInfo.jsx":
/*!********************************************!*\
  !*** ./src/popup/components/TouchInfo.jsx ***!
  \********************************************/
/***/ (() => {

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4049bd206002c1256c60")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.1384e3eb73c44080c0b5.hot-update.js.map