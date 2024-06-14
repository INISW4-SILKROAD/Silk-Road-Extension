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
// import React, { useState } from 'react';
// import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';

// const DetailWrapper = () => {
//   const { id } = useParams();
//   return <Detail productId={id} />;
// };

// const Main = () => {
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
var Home = function Home(_ref) {
  var onImageClick = _ref.onImageClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onImageClick: onImageClick
  }));
};
var Main = function Main() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var handleImageClick = function handleImageClick(id) {
    navigate("/detail/".concat(id));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, {
      onImageClick: handleImageClick
    })
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
/******/ 	__webpack_require__.h = () => ("140b36afe559d1993653")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.492bf2e577a9aeef3a19.hot-update.js.map