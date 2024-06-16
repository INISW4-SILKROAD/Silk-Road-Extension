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
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ProgressBar */ "./node_modules/react-bootstrap/esm/ProgressBar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _css_TouchInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/TouchInfo.css */ "./src/popup/css/TouchInfo.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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

// import React, { useEffect, useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import axios from 'axios';
// import '../css/TouchInfo.css';
// import io from 'socket.io-client';

// const TouchInfo = ({ productId, dataSource }) => {
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
//     const fetchTouchData = async () => {
//       try {
//         if (dataSource === 'model') {
//           const socket = io('http://127.0.0.1:5001');
//           socket.emit('joinRoom', productId);
//           socket.on('touchInfo', (data) => {
//             console.log('Received touchInfo:', data);
//             if (data.productId === productId) {
//               setTouchData({
//                 softness: data.touchInfo[0],
//                 smoothness: data.touchInfo[1],
//                 thickness: data.touchInfo[2],
//                 flexibility: data.touchInfo[3]
//               });
//             }
//           });
//         } else if (dataSource === 'search') {
//           const response = await axios.get(`http://127.0.0.1:5001/goods/${productId}`);
//           const data = response.data;
//           console.log('Received touchData:', data);
//           setTouchData({
//             softness: data.SOFTNESS + 1,
//             smoothness: data.SMOOTHNESS + 1,
//             thickness: data.THICKNESS + 1,
//             flexibility: data.FLEXIBILITY + 1
//           });
//         }
//       } catch (error) {
//         console.error("촉감 데이터를 불러오는 중 에러 발생:", error);
//       }
//     };

//     fetchTouchData();
//   }, [productId, dataSource]);

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





var TouchInfo = function TouchInfo() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      softness: 0,
      smoothness: 0,
      thickness: 0,
      flexibility: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    touchData = _useState2[0],
    setTouchData = _useState2[1];
  var labelMapping = {
    softness: '부드러움',
    smoothness: '매끄러움',
    thickness: '두께',
    flexibility: '신축성'
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchTouchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, touchInfo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get('http://127.0.0.1:5001/touchinfo');
            case 3:
              response = _context.sent;
              touchInfo = response.data;
              console.log('Fetched touch data from server:', touchInfo);
              setTouchData({
                softness: touchInfo[0],
                smoothness: touchInfo[1],
                thickness: touchInfo[2],
                flexibility: touchInfo[3]
              });
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching touch data:', _context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
      }));
      return function fetchTouchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchTouchData();
  }, []);
  var colorMapping = {
    softness: '#FFDBDA',
    smoothness: '#FFDBDA',
    thickness: '#FFDBDA',
    flexibility: '#FFDBDA'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-info-text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "touch-area"
  }, Object.keys(touchData).map(function (key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      className: "touch-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, labelMapping[key]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "progress-bar-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      now: touchData[key] / 5 * 100,
      className: "custom-progress-bar",
      style: {
        backgroundColor: 'transparent',
        backgroundImage: "linear-gradient(to right, ".concat(colorMapping[key], " 0%, ").concat(colorMapping[key], " ").concat(touchData[key] / 5 * 100, "%, #ffffff ").concat(touchData[key] / 5 * 100, "%, #ffffff 100%)")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ticks"
    }, _toConsumableArray(Array(6)).map(function (_, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        className: "tick",
        style: {
          left: "".concat(i / 5 * 100, "%")
        }
      });
    }))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TouchInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89304bd7f6db24838fc1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.818aecbc47b27665eb34.hot-update.js.map