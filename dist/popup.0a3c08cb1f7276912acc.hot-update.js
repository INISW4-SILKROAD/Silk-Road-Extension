"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/Detail.jsx":
/*!******************************!*\
  !*** ./src/popup/Detail.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _css_Detail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Detail.css */ "./src/popup/css/Detail.css");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TouchInfo */ "./src/popup/components/TouchInfo.jsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/Detail.css';
// import TouchInfo from './components/TouchInfo';

// const Detail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5001/goods/${id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((error) => console.error('Error fetching product:', error));
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="detail-container">
//       <div className="navbar">
//         <button className="back-button" onClick={() => navigate('/')}></button>
//       </div>
//       <div className="image-container">
//         <img className="product-image" src={product.image_path} alt={product.NAME} />
//       </div>
//       <div className="product-info">
//         <h1 className="product-name">{product.NAME}</h1>
//         <p className="price">{product.PRICE} 원</p>
//       </div>
//       <div className="tactile-info-container">
//         <TouchInfo />
//       </div>
//       <button className="view-product-button" onClick={() => window.open(product.LINK, '_blank')}>상품 보러가기</button>
//     </div>
//   );
// };

// export default Detail;





var Detail = function Detail(_ref) {
  var productId = _ref.productId;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    product = _useState2[0],
    setProduct = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("Fetching product with ID: ".concat(productId));
    fetch("http://127.0.0.1:5001/goods/".concat(productId)).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Fetched product data:', data);
      setProduct(data);
    })["catch"](function (error) {
      return console.error('Error fetching product:', error);
    });
  }, [productId]);
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
    className: "product-image",
    src: product.image_path,
    alt: product.NAME
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "product-name"
  }, product.NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, product.PRICE, " \uC6D0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tactile-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productId: productId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "view-product-button",
    onClick: function onClick() {
      return window.open(product.LINK, '_blank');
    }
  }, "\uC0C1\uD488 \uBCF4\uB7EC\uAC00\uAE30"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f85d763250acb4b3d70b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.0a3c08cb1f7276912acc.hot-update.js.map