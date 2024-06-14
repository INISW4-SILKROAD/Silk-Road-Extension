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
// <<<<<<< HEAD
// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import './css/Detail.css';
// // import TouchInfo from './components/TouchInfo';

// // const Detail = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     fetch(`http://127.0.0.1:5001/goods/${id}`)
// //       .then((response) => response.json())
// //       .then((data) => setProduct(data))
// //       .catch((error) => console.error('Error fetching product:', error));
// //   }, [id]);

// //   if (!product) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <div className="detail-container">
// //       <div className="navbar">
// //         <button className="back-button" onClick={() => navigate('/')}></button>
// //       </div>
// //       <div className="image-container">
// //         <img className="product-image" src={product.image_path} alt={product.NAME} />
// //       </div>
// //       <div className="product-info">
// //         <h1 className="product-name">{product.NAME}</h1>
// //         <p className="price">{product.PRICE} 원</p>
// //       </div>
// //       <div className="tactile-info-container">
// //         <TouchInfo />
// //       </div>
// //       <button className="view-product-button" onClick={() => window.open(product.LINK, '_blank')}>상품 보러가기</button>
// //     </div>
// //   );
// // };

// // export default Detail;

// =======
// >>>>>>> 0ad9f2a398404718073465b839a79dc2e94fc849
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './css/Detail.css';
// import TouchInfo from './components/TouchInfo';

// const Detail = ({ productId }) => {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     console.log(`Fetching product with ID: ${productId}`);
//     fetch(`http://127.0.0.1:5001/goods/${productId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Fetched product data:', data);
//         setProduct(data);
//       })
//       .catch((error) => console.error('Error fetching product:', error));
//   }, [productId]);

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
//         <TouchInfo productId={productId} />
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
// <<<<<<< HEAD
// // import React from 'react';
// // import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// // import './css/Main.css';
// // import TouchInfo from './components/TouchInfo';
// // import GoodsList from './components/GoodsList';
// // import Detail from './Detail';

// // const Main = () => {
// //   const handleImageClick = (id) => {
// //     window.location.hash = `#/detail/${id}`;
// //   };

// //   return (
// //     <Router>
// //       <div className="popup-container">
// //         <Routes>
// //           <Route
// //             path="/"
// //             element={
// //               <>
// //                 <TouchInfo />
// //                 <GoodsList onImageClick={handleImageClick} />
// //               </>
// //             }
// //           />
// //           <Route path="/detail/:id" element={<Detail />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default Main;

// import React, { useState } from 'react';
// import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
// =======
// import React, { useEffect, useState } from 'react';
// import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// >>>>>>> 0ad9f2a398404718073465b839a79dc2e94fc849
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';
// import None from './None';
// import Home from './Home';

// const DetailWrapper = () => {
//   const { id } = useParams();
//   return <Detail productId={id} />;
// };

// const Main = () => {
// <<<<<<< HEAD
//   const [selectedProductId, setSelectedProductId] = useState(null);

//   const handleImageClick = (id) => {
//     setSelectedProductId(id);
//     window.location.hash = `#/detail/${id}`;
//   };

//   return (
//     <Router>
//       <div className="popup-container">
//         <TouchInfo productId={selectedProductId} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <GoodsList onImageClick={handleImageClick} />
//               </>
//             }
//           />
//           <Route path="/detail/:id" element={<DetailWrapper />} />
//         </Routes>
//       </div>
//     </Router>
// =======
//   const navigate = useNavigate();
//   const [touchInfo, setTouchInfo] = useState(null);
//   const [searchResults, setSearchResults] = useState(null);

//   useEffect(() => {
//     const fetchSearchResults = () => {
//       if (chrome.storage && chrome.storage.local) {
//         chrome.storage.local.get(['searchResults'], (result) => {
//           if (result.searchResults) {
//             const touchInfoData = result.searchResults.filter(item => item.portion && item.texture_img);
//             if (touchInfoData.length > 0) {
//               setTouchInfo(touchInfoData[0]);
//               setSearchResults(result.searchResults);
//               navigate('/main');
//             } else {
//               navigate('/none');
//             }
//           } else {
//             navigate('/home');
//           }
//         });
//       } else {
//         console.error('chrome.storage.local is not available');
//       }
//     };

//     if (chrome.runtime && chrome.runtime.onMessage) {
//       chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//         if (message.action === 'updateMain') {
//           fetchSearchResults();
//         }
//       });
//     } else {
//       console.error('chrome.runtime.onMessage is not available');
//     }

//     // Only call fetchSearchResults if there is a relevant action
//     // fetchSearchResults();
//   }, [navigate]);

//   return (
//     <div className="popup-container">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/main" element={
//           touchInfo ? (
//             <>
//               <TouchInfo />
//               <GoodsList onImageClick={(id) => navigate(`/detail/${id}`)} />
//             </>
//           ) : searchResults ? (
//             <>
//               <GoodsList onImageClick={(id) => navigate(`/detail/${id}`)} />
//             </>
//           ) : (
//             <div>Loading...</div>
//           )
//         } />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/none" element={<None />} />
//       </Routes>
//     </div>
// >>>>>>> 0ad9f2a398404718073465b839a79dc2e94fc849
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../public/left_arrow_white.png */ "./public/left_arrow_white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-4Regular.ttf */ "./public/fonts/Freesentation-4Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../public/fonts/Freesentation-5Medium.ttf */ "./public/fonts/Freesentation-5Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#root {
  background-color: #1e1f23;
}

.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #1e1f23; /* 백그라운드 색상 추가 */
}

.navbar {
  margin-top: -10px;
  width: 100%; /* 너비를 100%로 설정 */
  height: 40px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  background-color: #1e1f23;
}

.back-button {
  margin-left: -10px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center;
  background-size: contain;
  border: none;
  width: 33px; /* 버튼 크기 조정 */
  height: 33px; /* 버튼 크기 조정 */
  cursor: pointer;
  border-radius: 90px;
}

.image-container {
  border-radius: 8px;
  margin-top: 10px; /* 상단 마진 조정 */
  width: 400px; /* 컨테이너 너비 */
  height: 400px; /* 컨테이너 높이 */
  display: flex;
  justify-content: center; 
  align-items: center;
  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 설정 */
  border-radius: 8px;
  box-shadow:  7px 7px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%; /* 컨테이너 너비에 맞추기 */
  height: auto; /* 높이는 자동으로 조정 */
  object-fit: contain; /* 비율을 유지하며 컨테이너에 맞추기 */
}

.product-info {
  width: 100%;
  padding: 20px;
  color: #FFFFFF;
}

.product-info h1 {
  margin-top: 10px;
  text-align: left;
  font-family: 'f5';
  font-size: 15pt;
  font-weight: bold;
}

.product-info p {
  margin-top: 10px;
  text-align: right;
  font-family: 'f4';
  font-size: 12pt;
}

.tactile-info-container {
  margin-top: -30px;
}


.view-product-button {
  margin-top: 10px;
  background-color: #20edc7;
  color: #1e1f23;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 220px;
  border-radius: 12px;
  font-family: 'f5';
}

.view-product-button:hover {
  background-color: #FFFFFF;
  color: #000000;
}

@font-face {
  font-family: 'f4';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');
}
@font-face {
  font-family: 'f5';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');
}
`, "",{"version":3,"sources":["webpack://./src/popup/css/Detail.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,yBAAyB,EAAE,gBAAgB;AAC7C;;AAEA;EACE,iBAAiB;EACjB,WAAW,EAAE,iBAAiB;EAC9B,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,2EAAwE;EACxE,wBAAwB;EACxB,YAAY;EACZ,WAAW,EAAE,aAAa;EAC1B,YAAY,EAAE,aAAa;EAC3B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB,EAAE,aAAa;EAC/B,YAAY,EAAE,YAAY;EAC1B,aAAa,EAAE,YAAY;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB,EAAE,yBAAyB;EAC3C,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,WAAW,EAAE,iBAAiB;EAC9B,YAAY,EAAE,gBAAgB;EAC9B,mBAAmB,EAAE,uBAAuB;AAC9C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;;AAGA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,+DAA+E;AACjF;AACA;EACE,iBAAiB;EACjB,+DAA8E;AAChF","sourcesContent":["#root {\r\n  background-color: #1e1f23;\r\n}\r\n\r\n.detail-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 20px;\r\n  background-color: #1e1f23; /* 백그라운드 색상 추가 */\r\n}\r\n\r\n.navbar {\r\n  margin-top: -10px;\r\n  width: 100%; /* 너비를 100%로 설정 */\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  padding: 10px;\r\n  background-color: #1e1f23;\r\n}\r\n\r\n.back-button {\r\n  margin-left: -10px;\r\n  background: url('~/public/left_arrow_white.png') no-repeat center center;\r\n  background-size: contain;\r\n  border: none;\r\n  width: 33px; /* 버튼 크기 조정 */\r\n  height: 33px; /* 버튼 크기 조정 */\r\n  cursor: pointer;\r\n  border-radius: 90px;\r\n}\r\n\r\n.image-container {\r\n  border-radius: 8px;\r\n  margin-top: 10px; /* 상단 마진 조정 */\r\n  width: 400px; /* 컨테이너 너비 */\r\n  height: 400px; /* 컨테이너 높이 */\r\n  display: flex;\r\n  justify-content: center; \r\n  align-items: center;\r\n  overflow: hidden; /* 이미지가 컨테이너를 넘지 않도록 설정 */\r\n  border-radius: 8px;\r\n  box-shadow:  7px 7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.product-image {\r\n  width: 100%; /* 컨테이너 너비에 맞추기 */\r\n  height: auto; /* 높이는 자동으로 조정 */\r\n  object-fit: contain; /* 비율을 유지하며 컨테이너에 맞추기 */\r\n}\r\n\r\n.product-info {\r\n  width: 100%;\r\n  padding: 20px;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.product-info h1 {\r\n  margin-top: 10px;\r\n  text-align: left;\r\n  font-family: 'f5';\r\n  font-size: 15pt;\r\n  font-weight: bold;\r\n}\r\n\r\n.product-info p {\r\n  margin-top: 10px;\r\n  text-align: right;\r\n  font-family: 'f4';\r\n  font-size: 12pt;\r\n}\r\n\r\n.tactile-info-container {\r\n  margin-top: -30px;\r\n}\r\n\r\n\r\n.view-product-button {\r\n  margin-top: 10px;\r\n  background-color: #20edc7;\r\n  color: #1e1f23;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  width: 220px;\r\n  border-radius: 12px;\r\n  font-family: 'f5';\r\n}\r\n\r\n.view-product-button:hover {\r\n  background-color: #FFFFFF;\r\n  color: #000000;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'f4';\r\n  src: url('../../../public/fonts/Freesentation-4Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'f5';\r\n  src: url('../../../public/fonts/Freesentation-5Medium.ttf') format('truetype');\r\n}\r\n"],"sourceRoot":""}]);
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


/***/ }),

/***/ "./public/left_arrow_white.png":
/*!*************************************!*\
  !*** ./public/left_arrow_white.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cf89b0d19a9118ee548.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3cb52a6146e6be9f0ab7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.4cb77f65bcde285ed76b.hot-update.js.map