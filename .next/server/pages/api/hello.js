"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _components_coursesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9955);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// type Data = {
//   name: string
// }
function handler(req, res) {
    res.status(200).json(_components_coursesList__WEBPACK_IMPORTED_MODULE_0__/* .courses */ .ru);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [955], () => (__webpack_exec__(641)));
module.exports = __webpack_exports__;

})();