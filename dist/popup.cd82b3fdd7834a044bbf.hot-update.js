self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/Detail.jsx":
/*!******************************!*\
  !*** ./src/popup/Detail.jsx ***!
  \******************************/
/***/ (() => {

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
/* harmony import */ var _components_GoodsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoodsList */ "./src/popup/components/GoodsList.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Detail */ "./src/popup/Detail.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Detail__WEBPACK_IMPORTED_MODULE_4__);
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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Detail__WEBPACK_IMPORTED_MODULE_4___default()), null)
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0aeff2c40b9e8933d405")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.cd82b3fdd7834a044bbf.hot-update.js.map