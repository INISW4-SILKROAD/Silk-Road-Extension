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
// import '../css/GoodsList.css';

// const GoodsList = ({ onImageClick }) => {
//   const [goods, setGoods] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [activeCategory, setActiveCategory] = useState('');

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

//   const handleSort = (category) => {
//     setActiveCategory(category);
//     const sortedGoods = [...goods].sort((a, b) => {
//       if (sortOrder === 'asc') {
//         return a[category.toUpperCase()] - b[category.toUpperCase()];
//       } else {
//         return b[category.toUpperCase()] - a[category.toUpperCase()];
//       }
//     });
//     setGoods(sortedGoods);
//   };

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button" onClick={() => handleSort('softness')}>부드러움</button>
//         <button className="category-button" onClick={() => handleSort('smoothness')}>매끄러움</button>
//         <button className="category-button" onClick={() => handleSort('thickness')}>두께</button>
//         <button className="category-button" onClick={() => handleSort('flexibility')}>신축성</button>
//       </div>
//       <select 
//         className="sort-order-dropdown" 
//         value={sortOrder} 
//         onChange={(e) => setSortOrder(e.target.value)}
//       >
//         <option value="asc">오름차순</option>
//         <option value="desc">내림차순</option>
//       </select>
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
  var onImageClick = _ref.onImageClick;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    goods = _useState2[0],
    setGoods = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('asc'),
    _useState4 = _slicedToArray(_useState3, 2),
    sortOrder = _useState4[0],
    setSortOrder = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    activeCategory = _useState6[0],
    setActiveCategory = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchData = function fetchData() {
      if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
        chrome.runtime.sendMessage({
          action: 'fetchGoods'
        }, function (response) {
          if (response && response.error) {
            console.error('Error fetching goods:', response.error);
          } else if (response && response.data) {
            setGoods(response.data);
          }
        });
      } else {
        console.error('크롬 확장 프로그램 환경이 아닙니다.');
      }
    };
    fetchData();
  }, []);
  var handleSort = function handleSort(category) {
    setActiveCategory(category);
    var sortedGoods = _toConsumableArray(goods).sort(function (a, b) {
      if (sortOrder === 'asc') {
        return a.product[category.toUpperCase()] - b.product[category.toUpperCase()];
      } else {
        return b.product[category.toUpperCase()] - a.product[category.toUpperCase()];
      }
    });
    setGoods(sortedGoods);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "goods-list-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "category-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button",
    onClick: function onClick() {
      return handleSort('SOFTNESS');
    }
  }, "\uBD80\uB4DC\uB7EC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button",
    onClick: function onClick() {
      return handleSort('SMOOTHNESS');
    }
  }, "\uB9E4\uB044\uB7EC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button",
    onClick: function onClick() {
      return handleSort('THICKNESS');
    }
  }, "\uB450\uAED8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button",
    onClick: function onClick() {
      return handleSort('FLEXIBILITY');
    }
  }, "\uC2E0\uCD95\uC131")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    className: "sort-order-dropdown",
    value: sortOrder,
    onChange: function onChange(e) {
      return setSortOrder(e.target.value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "asc"
  }, "\uC624\uB984\uCC28\uC21C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "desc"
  }, "\uB0B4\uB9BC\uCC28\uC21C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "goods-list"
  }, goods.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "goods-item",
      key: item.gid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.product.image_path,
      alt: item.product.NAME,
      onClick: function onClick() {
        return onImageClick(item.product.ID);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.product.NAME, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null)));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoodsList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("70d33128e13246cefd9b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.860dbef03d6d99a7f194.hot-update.js.map