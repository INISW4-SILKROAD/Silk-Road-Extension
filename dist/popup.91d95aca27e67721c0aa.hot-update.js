self["webpackHotUpdatesilkroad"]("popup",{

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
/* harmony import */ var _components_GoodsList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__);
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

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';

// const Main = () => {
//   return (
//     <Router>
//       <div className="popup-container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/detail/:id" element={<Detail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate();

//   const handleImageClick = (id) => {
//     navigate(`/detail/${id}`);
//   };

//   return (
//     <>
//       <TouchInfo />
//       <GoodsList onImageClick={handleImageClick} />
//     </>
//   );
// };

// export default Main;







var Main = function Main() {
  var handleImageClick = function handleImageClick(id) {
    window.location.hash = "#/detail/".concat(id);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_components_GoodsList__WEBPACK_IMPORTED_MODULE_3___default()), {
      onImageClick: handleImageClick
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Detail__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/popup/components/GoodsList.jsx":
/*!********************************************!*\
  !*** ./src/popup/components/GoodsList.jsx ***!
  \********************************************/
/***/ (() => {

// import React, { useEffect, useState } from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);

//   useEffect(() => {
//     if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//       // 크롬 확장 프로그램 환경
//       chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
//         if (response && response.error) {
//           console.error('Error fetching goods:', response.error);
//         } else if (response && response.data) {
//           setGoods(response.data);
//         }
//       });
//     } else {
//       // 로컬 개발 환경
//       fetch('http://localhost:5001/goods')
//         .then((response) => response.json())
//         .then((data) => setGoods(data))
//         .catch((error) => console.error('Error fetching goods:', error));
//     }
//   }, []);

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두꺼움</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         {goods.map((item) => (
//           <div className="goods-item" key={item.ID}>
//             <img src={'/sample.png'} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
//             <p>{item.NAME}<span></span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoodsList;

// import React, { useEffect, useState } from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);

//   useEffect(() => {
//     if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//       // 크롬 확장 프로그램 환경
//       chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
//         if (response && response.error) {
//           console.error('Error fetching goods:', response.error);
//         } else if (response && response.data) {
//           setGoods(response.data);
//         }
//       });
//     } else {
//       // 로컬 개발 환경
//       fetch('http://localhost:5001/goods')
//         .then((response) => response.json())
//         .then((data) => setGoods(data))
//         .catch((error) => console.error('Error fetching goods:', error));
//     }
//   }, []);

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두꺼움</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         {goods.map((item) => (
//           <div className="goods-item" key={item.ID}>
//             <img src={'/sample.png'} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
//             <p>{item.NAME}<span></span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoodsList;

// import React, { useEffect, useState } from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//         // 크롬 확장 프로그램 환경
//         chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
//           if (response && response.error) {
//             console.error('Error fetching goods:', response.error);
//           } else if (response && response.data) {
//             setGoods(response.data);
//           }
//         });
//       } else {
//         // 로컬 개발 환경
//         try {
//           const response = await fetch('http://127.0.0.1:5001/goods');
//           const data = await response.json();
//           setGoods(data);
//         } catch (error) {
//           console.error('Error fetching goods:', error);
//         }
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두꺼움</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         {goods.map((item) => (
//           <div className="goods-item" key={item.ID}>
//             <img src={chrome.runtime.getURL("public/sample.png")} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
//             <p>{item.NAME}<span></span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoodsList;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f29a8788ded6d6292774")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.91d95aca27e67721c0aa.hot-update.js.map