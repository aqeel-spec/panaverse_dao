"use strict";
(() => {
var exports = {};
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _components_coursesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9955);

// type Data = {
//   name: string
// }
function handler(req, res) {
    {
        if (req.method === "GET") {
            const courseCode = req.query.code;
            // const commentId : any = req.query.id;
            // const comment = todos.find(
            //   (comment) => comment.id === parseInt(commentId)
            // )
            //const index = specializationCourse.findIndex((data) => data.quarter4 === courseCode)
            res.status(200).json(_components_coursesList__WEBPACK_IMPORTED_MODULE_0__/* .specializationCourse */ .C);
        }
        res.status(200).json(_components_coursesList__WEBPACK_IMPORTED_MODULE_0__/* .specializationCourse */ .C);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [955], () => (__webpack_exec__(7702)));
module.exports = __webpack_exports__;

})();