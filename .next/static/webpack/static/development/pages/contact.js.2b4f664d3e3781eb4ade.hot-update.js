webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/styled.js":
/*!******************************!*\
  !*** ./components/styled.js ***!
  \******************************/
/*! exports provided: Text, Small, H1, H2, H3, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return Small; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jonas/WebstormProjects/next/components/styled.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Text = function Text(props) {
  return __jsx("p", {
    style: "\n        \n    ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, props.children);
};

var Small = function Small(props) {
  return __jsx("small", {
    style: "\n        \n    ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children);
};

var H1 = function H1(props) {
  return __jsx("h1", {
    style: "\n        \n    ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.children);
};

var H2 = function H2(props) {
  return __jsx("h2", {
    style: "\n        \n    ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.children);
};

var H3 = function H3(props) {
  return __jsx("h3", {
    style: "\n        \n    ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.children);
};

var Button = function Button() {};



/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styled */ "./components/styled.js");
var _jsxFileName = "/home/jonas/WebstormProjects/next/pages/contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var onChange = function onChange() {};

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    id: "form-container",
    className: "jsx-363901996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("form", {
    className: "jsx-363901996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-363901996" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "exampleInputEmail1",
    className: "jsx-363901996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Email address"), __jsx("input", {
    type: "username",
    placeholder: "Enter username",
    className: "jsx-363901996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_styled__WEBPACK_IMPORTED_MODULE_3__["Small"], {
    id: "emailHelp",
    className: "form-text text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "I don't judge you for being immature")), __jsx("div", {
    className: "jsx-363901996" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "exampleInputPassword1",
    className: "jsx-363901996",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Password"), __jsx("input", {
    type: "password",
    id: "exampleInputPassword1",
    placeholder: "Password",
    className: "jsx-363901996" + " " + "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    className: "jsx-363901996" + " " + "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Submit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "363901996",
    __self: this
  }, "#form-container.jsx-363901996{width:450px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvbmFzL1dlYnN0b3JtUHJvamVjdHMvbmV4dC9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCb0IsQUFHNkIsWUFDaEIiLCJmaWxlIjoiL2hvbWUvam9uYXMvV2Vic3Rvcm1Qcm9qZWN0cy9uZXh0L3BhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNtYWxsLCBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZWQnXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHVzZXJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbCBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+SSBkb24ndCBqdWRnZSB5b3UgZm9yIGJlaW5nIGltbWF0dXJlPC9TbWFsbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgI2Zvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdCJdfQ== */\n/*@ sourceURL=/home/jonas/WebstormProjects/next/pages/contact.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.2b4f664d3e3781eb4ade.hot-update.js.map