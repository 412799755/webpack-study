var content = __webpack_require__(/*! !../node_modules/_css-loader@3.0.0@css-loader/dist/cjs.js!./style.css */ "./node_modules/_css-loader@3.0.0@css-loader/dist/cjs.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

//# sourceURL=webpack:///./src/style.css?
