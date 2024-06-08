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
// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/Detail.css';
// import TouchInfo from './components/TouchInfo';

// const Detail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const productData = {
//     "3143788": {
//       image: "https://image.msscdn.net/images/goods_img/20230313/3143788/3143788_17159297698722_500.jpg",
//       category: "상의 &gt; 후드 티셔츠",
//       name: "에센셜 후드 스웻 셔츠",
//       color: "MELANGE GREY",
//       price: "37000 원"
//     },
//     // 다른 상품 데이터 추가
//   };

//   const product = productData[id];

//   if (!product) {
//     return <div>상품 정보를 찾을 수 없습니다.</div>;
//   }

//   const handleViewProductClick = () => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="detail-container">
//       <div className="image-container">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className="product-info">
//         <p className="category">{product.category}</p>
//         <h1 className="product-name">{product.name}<span>({product.color})</span></h1>
//         <p className="price">{product.price}</p>
//       </div>
//       <div className="tactile-info-container">
//         <h2>촉감 정보</h2>
//         <TouchInfo />
//       </div>
//       <button className="view-product-button" onClick={handleViewProductClick}>상품 보러가기</button>
//     </div>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './css/Detail';
// import TouchInfo from './components/TouchInfo';

// const Detail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5001/goods/${id}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((error) => console.error('Error fetching product:', error));
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="detail-container">
//       <div className="image-container">
//         <img src={product.image_url || '/sample.png'} alt={product.name} />
//       </div>
//       <div className="product-info">
//         <h1 className="product-name">{product.NAME}</h1>
//         <p className="price">{product.PRICE} 원</p>
//       </div>
//       <div className="tactile-info-container">
//         <TouchInfo />
//       </div>
//       <button className="view-product-button" onClick={() => window.open(product.url, '_blank')}>상품 보러가기</button>
//     </div>
//   );
// };

// export default Detail;





var Detail = function Detail() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    id = _useParams.id;
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
    className: "image-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: product.image_url || '/sample.png',
    alt: product.NAME
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "product-name"
  }, product.NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "price"
  }, product.PRICE, " \uC6D0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tactile-info-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/* harmony import */ var _components_GoodsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoodsList */ "./src/popup/components/GoodsList.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Detail */ "./src/popup/Detail.jsx");
// import React from 'react';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';

// const handleImageClick = () => {
//     console.log('Image clicked!');
// };

// const Main = () => {
//   return (
//     <div className="popup-container">
//       <TouchInfo />
//       <GoodsList onImageClick={handleImageClick} />
//     </div>
//   );
// };

// export default Main;







var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Detail__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }))));
};
var Home = function Home() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
  var handleImageClick = function handleImageClick(id) {
    navigate("/detail/".concat(id));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onImageClick: handleImageClick
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css ***!
  \************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.detail-container {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    color: #333;
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .image-container img {
    width: 100%;
    border-radius: 8px;
  }
  
  .product-info {
    text-align: center;
    margin: 20px 0;
  }
  
  .category {
    font-size: 0.9em;
    color: #777;
  }
  
  .product-name {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .product-name span {
    font-size: 0.8em;
    color: #777;
  }
  
  .price {
    font-size: 1.2em;
    color: #333;
    margin: 10px 0;
  }
  
  .tactile-info-container {
    background-color: #000;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
  
  .tactile-info-container h2 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
  }
  
  .view-product-button {
    display: block;
    width: 100%;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
  }
  
  .view-product-button:hover {
    background-color: #555;
  }
`, "",{"version":3,"sources":["webpack://./src/popup/css/Detail.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,uCAAuC;EACzC;;EAEA;IACE,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,WAAW;IACX,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB","sourcesContent":[".detail-container {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 20px;\n    box-sizing: border-box;\n    background-color: #f5f5f5;\n    color: #333;\n    width: 100%;\n    max-width: 400px;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  }\n  \n  .image-container img {\n    width: 100%;\n    border-radius: 8px;\n  }\n  \n  .product-info {\n    text-align: center;\n    margin: 20px 0;\n  }\n  \n  .category {\n    font-size: 0.9em;\n    color: #777;\n  }\n  \n  .product-name {\n    font-size: 1.5em;\n    margin: 10px 0;\n  }\n  \n  .product-name span {\n    font-size: 0.8em;\n    color: #777;\n  }\n  \n  .price {\n    font-size: 1.2em;\n    color: #333;\n    margin: 10px 0;\n  }\n  \n  .tactile-info-container {\n    background-color: #000;\n    color: #fff;\n    padding: 20px;\n    border-radius: 8px;\n  }\n  \n  .tactile-info-container h2 {\n    margin: 0 0 10px 0;\n    font-size: 1.2em;\n  }\n  \n  .view-product-button {\n    display: block;\n    width: 100%;\n    background-color: #333;\n    color: #fff;\n    border: none;\n    border-radius: 8px;\n    padding: 10px;\n    font-size: 1em;\n    cursor: pointer;\n    margin-top: 20px;\n    text-align: center;\n  }\n  \n  .view-product-button:hover {\n    background-color: #555;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/css/Detail.css":
/*!**********************************!*\
  !*** ./src/popup/css/Detail.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Detail.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!./Detail.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Detail.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/css/Detail.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25846ab5b308ff47addc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.0aeff2c40b9e8933d405.hot-update.js.map