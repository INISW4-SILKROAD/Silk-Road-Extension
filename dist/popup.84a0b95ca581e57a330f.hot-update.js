"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/Main.jsx":
/*!****************************!*\
  !*** ./src/popup/Main.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _css_Main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Main.css */ "./src/popup/css/Main.css");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TouchInfo */ "./src/popup/components/TouchInfo.jsx");
/* harmony import */ var _components_GoodsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoodsList */ "./src/popup/components/GoodsList.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Detail */ "./src/popup/Detail.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// import React from 'react';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';

// const Main = () => {
//   const handleImageClick = (id) => {
//     window.location.hash = `#/detail/${id}`;
//   };

//   return (
//     <Router>
//       <div className="popup-container">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <TouchInfo />
//                 <GoodsList onImageClick={handleImageClick} />
//               </>
//             }
//           />
//           <Route path="/detail/:id" element={<Detail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Main;







var DetailWrapper = function DetailWrapper() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    id = _useParams.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Detail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    productId: id
  });
};
var Main = function Main() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedProductId = _useState2[0],
    setSelectedProductId = _useState2[1];
  var handleImageClick = function handleImageClick(id) {
    setSelectedProductId(id);
    window.location.hash = "#/detail/".concat(id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productId: selectedProductId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onImageClick: handleImageClick
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DetailWrapper, null)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("54cd84ed0486dc640bcc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.84a0b95ca581e57a330f.hot-update.js.map