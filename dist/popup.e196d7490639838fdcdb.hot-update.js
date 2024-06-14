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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _css_Main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Main.css */ "./src/popup/css/Main.css");
/* harmony import */ var _components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TouchInfo */ "./src/popup/components/TouchInfo.jsx");
/* harmony import */ var _components_GoodsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GoodsList */ "./src/popup/components/GoodsList.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Detail */ "./src/popup/Detail.jsx");
/* harmony import */ var _None__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./None */ "./src/popup/None.jsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ "./src/popup/Home.jsx");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Home__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// import React, { useEffect, useState } from 'react';
// import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import './css/Main.css';
// import TouchInfo from './components/TouchInfo';
// import GoodsList from './components/GoodsList';
// import Detail from './Detail';
// import None from './None';
// import Home from './Home';

// const Main = () => {
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
//         console.error('chrome.storage.local 에러');
//       }
//     };

//     if (chrome.runtime && chrome.runtime.onMessage) {
//       chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//         if (message.action === 'updateMain') {
//           fetchSearchResults();
//         }
//       });
//     } else {
//       console.error('chrome.runtime.onMessage 에러');
//     }

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
//   );
// };

// export default Main;









var Main = function Main() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    touchInfo = _useState2[0],
    setTouchInfo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchResults = _useState4[0],
    setSearchResults = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchSearchResults = function fetchSearchResults() {
      if (chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(['searchResults'], function (result) {
          if (result.searchResults) {
            var touchInfoData = result.searchResults.filter(function (item) {
              return item.portion && item.texture_img;
            });
            if (touchInfoData.length > 0) {
              setTouchInfo(touchInfoData[0]);
              setSearchResults(result.searchResults);
            } else {
              navigate('/none');
            }
          } else {
            navigate('/home');
          }
        });
      } else {
        console.error('chrome.storage.local is not available');
      }
    };
    if (chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        if (message.action === 'updateMain') {
          fetchSearchResults();
        }
      });
    } else {
      console.error('chrome.runtime.onMessage is not available');
    }
    fetchSearchResults();
  }, [navigate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Home__WEBPACK_IMPORTED_MODULE_6___default()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/main",
    element: touchInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TouchInfo__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onImageClick: function onImageClick(id) {
        return navigate("/detail/".concat(id));
      }
    })) : searchResults ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoodsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onImageClick: function onImageClick(id) {
        return navigate("/detail/".concat(id));
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading...")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/detail/:id",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Detail__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
    path: "/none",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_None__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ba11104583abc2bdb73a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.e196d7490639838fdcdb.hot-update.js.map