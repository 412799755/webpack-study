__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/_lodash@4.17.11@lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);


function component() {
    const element = document.createElement('div')
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
    return element;
}
document.body.appendChild(component());


//# sourceURL=webpack:///./src/index.js?
