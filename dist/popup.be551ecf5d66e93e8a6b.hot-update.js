"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/components/GoodsList.jsx":
/*!********************************************!*\
  !*** ./src/popup/components/GoodsList.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_GoodsList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/GoodsList.css */ "./src/popup/css/GoodsList.css");
// import React, { useEffect, useState } from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);

//   useEffect(() => {
//     const fetchData = async (gids) => {
//       try {
//         const response = await fetch('http://127.0.0.1:5001/fetch-goods', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ gids })
//         });
//         const data = await response.json();
//         setGoods(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error('Error fetching goods:', error);
//       }
//     };

//     if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
//       chrome.runtime.sendMessage({ action: 'fetchGoods' }, (response) => {
//         if (response && response.error) {
//           console.error('Error fetching goods:', response.error);
//         } else if (response && response.data) {
//           const gids = response.data.map(item => item.gid);
//           fetchData(gids);
//         }
//       });
//     } else {
//       console.error('크롬 확장 프로그램 환경이 아닙니다.');
//     }
//   }, []);

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두께</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         {goods.map((item) => (
//           <div className="goods-item" key={item.ID}>
//             <img src={item.image_path} alt={item.NAME} onClick={() => onImageClick(item.ID)} />
//             <p>{item.NAME}<span></span></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GoodsList;



var GoodsList = function GoodsList(_ref) {
  var goods = _ref.goods,
    onImageClick = _ref.onImageClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "goods-list-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "category-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button"
  }, "\uBD80\uB4DC\uB7EC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button"
  }, "\uB9E4\uB044\uB7EC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button"
  }, "\uB450\uAED8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button"
  }, "\uC2E0\uCD95\uC131")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "goods-list"
  }, goods.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "goods-item",
      key: item.ID
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.image_path,
      alt: item.NAME,
      onClick: function onClick() {
        return onImageClick(item.ID);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.NAME, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null)));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoodsList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("253d5a1ea5f795a48d65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.be551ecf5d66e93e8a6b.hot-update.js.map