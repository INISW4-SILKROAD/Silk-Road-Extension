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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// import React from 'react';
// import '../css/GoodsList.css';

// const GoodsList = ({onImageClick}) => {

//   return (
//     <div className="goods-list-container">
//       <div className="category-buttons">
//         <button className="category-button">부드러움</button>
//         <button className="category-button">매끄러움</button>
//         <button className="category-button">두꺼움</button>
//         <button className="category-button">신축성</button>
//       </div>
//       <div className="goods-list">
//         <div className="goods-item">
//           <img src="https://image.msscdn.net/images/goods_img/20230313/3143788/3143788_17159297698722_500.jpg" alt="COOL 린넨라이크 오픈카라 하프 니트_9 COLOR" onClick={onImageClick} />
//           <p>COOL 린넨라이크 오픈카라 하프 니트_9 COLOR<span></span></p>
//         </div>
//         <div className="goods-item">
//           <img src="https://image.msscdn.net/images/goods_img/20240509/4116067/4116067_17171354970837_500.jpg" alt="[노마드션] 캠핑 원형 심볼 반팔 티셔츠 (JP5TSU112BL)" onClick={onImageClick} />
//           <p>[노마드션] 캠핑 원형 심볼 반팔 티셔츠 (JP5TSU112BL)<span></span></p>
//         </div>
//         <div className="goods-item">
//           <img src="https://image.msscdn.net/images/goods_img/20240514/4127967/4127967_17156503150705_500.jpg" alt="와이드 카고 하프 버뮤다 생지데님 팬츠 [흑청]" onClick={onImageClick} />
//           <p>와이드 카고 하프 버뮤다 생지데님 팬츠 [흑청]<span></span></p>
//         </div>
//         <div className="goods-item">
//           <img src="https://image.msscdn.net/images/goods_img/20240311/3938362/3938362_17102239272335_500.jpg" alt="P-ACTIVE BEAD MESHED HOODIE KNIT ZIP-UP GREEN IVORY" onClick={onImageClick} />
//           <p>P-ACTIVE BEAD MESHED HOODIE KNIT ZIP-UP GREEN IVORY<span></span></p>
//         </div>
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch('http://13.75.124.149:5000/goods').then(function (response) {
      return response.json();
    }).then(function (data) {
      return setGoods(data);
    })["catch"](function (error) {
      return console.error('Error fetching goods:', error);
    });
  }, []);
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
  }, "\uB450\uAEBC\uC6C0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "category-button"
  }, "\uC2E0\uCD95\uC131")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "goods-list"
  }, goods.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "goods-item",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.image_url,
      alt: item.name,
      onClick: function onClick() {
        return onImageClick(item.id);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, item.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null)));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoodsList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5724be5327e6baba6a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.429bf264b0532e2d0752.hot-update.js.map