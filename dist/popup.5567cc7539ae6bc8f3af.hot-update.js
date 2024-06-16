"use strict";
self["webpackHotUpdatesilkroad"]("popup",{

/***/ "./src/popup/components/TouchInfo.jsx":
/*!********************************************!*\
  !*** ./src/popup/components/TouchInfo.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// import React, { useEffect, useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import axios from 'axios';
// import '../css/TouchInfo.css';

// const TouchInfo = ({ productId }) => {
//   const [touchData, setTouchData] = useState({
//     softness: 0,
//     smoothness: 0,
//     thickness: 0,
//     flexibility: 0
//   });

//   const labelMapping = {
//     softness: '부드러움',
//     smoothness: '매끄러움',
//     thickness: '두께',
//     flexibility: '신축성'
//   };

//   useEffect(() => {
//     if (productId) {
//       const fetchTouchData = async () => {
//         try {
//           const response = await axios.get(`http://127.0.0.1:5001/goods/${productId}`);
//           const data = response.data;
//           console.log("서버에서 받은 촉감 데이터:", data);

//           if (data) {
//             setTouchData({
//               softness: data.SOFTNESS || 0,
//               smoothness: data.SMOOTHNESS || 0,
//               thickness: data.THICKNESS || 0,
//               flexibility: data.FLEXIBILITY || 0
//             });
//           }
//         } catch (error) {
//           console.error("촉감 데이터를 불러오는 중 에러 발생:", error);
//         }
//       };

//       fetchTouchData();
//     }
//   }, [productId]);

//   const colorMapping = {
//     softness: '#FFDBDA',
//     smoothness: '#FFDBDA',
//     thickness: '#FFDBDA',
//     flexibility: '#FFDBDA'
//   };

//   return (
//     <div className="touch-info">
//       <div className='touch-info-text'>
//       </div>
//       <div className='touch-area'>
//         {Object.keys(touchData).map((key) => (
//           <div key={key} className="touch-bar">
//             <span>{labelMapping[key]}</span>
//             <div className="progress-bar-wrapper">
//               <ProgressBar
//                 now={(touchData[key] / 5) * 100}
//                 className="custom-progress-bar"
//                 style={{
//                   backgroundColor: 'transparent',
//                   backgroundImage: `linear-gradient(to right, ${colorMapping[key]} 0%, ${colorMapping[key]} ${(touchData[key] / 5) * 100}%, #ffffff ${(touchData[key] / 5) * 100}%, #ffffff 100%)`
//                 }}
//               />
//               <div className="ticks">
//                 {[...Array(6)].map((_, i) => (
//                   <div key={i} className="tick" style={{ left: `${(i / 5) * 100}%` }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TouchInfo;


var TouchInfo = function TouchInfo(_ref) {
  var productId = _ref.productId,
    touchInfo = _ref.touchInfo;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log('TouchInfo component received touchInfo:', touchInfo); // 로그 추가
    if (touchInfo === null) {
      // 경고창 표시
      alert('해당 상품의 촉감 정보를 알 수 없습니다');
    }
  }, [touchInfo]);
  if (!touchInfo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uCD09\uAC10 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911...");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uBD80\uB4DC\uB7EC\uC6C0: ", touchInfo[0] + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uB450\uAED8: ", touchInfo[1] + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uB9E4\uB044\uB7EC\uC6C0: ", touchInfo[2] + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\uC2E0\uCD95\uC131: ", touchInfo[3] + 1));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("946502c6b14d5c905a77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.5567cc7539ae6bc8f3af.hot-update.js.map