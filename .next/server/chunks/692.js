"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 8949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/PIAIC_Logo.svg.324458f5.png","height":1024,"width":746,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAA00lEQVR4nAHIADf/AYObmTDn8O+N7PPzPwABAP8TCwzCGBARdgFri4jzBwUFDPv8/QD7/v0ABwQEAP3+/vQBWoB9/8Dn5f1iLzIDAAAAAKXT0P49GhsCAX6Ylf6Cw8EBkElMAP7+/wByubQAfj1B/QFujYv/DQgHACQbHAAQDA0AzdrZAPb6+f4Ba4uI/h4UFQErISL/9Pb2AOHp6AHl7u39AXWSj6D9/v5fKh4f//7+/gHY4+MABQQDngEAWlQEezw/mQUDBGD/AP///P3+n4XNymj/o15yKjpb7wAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ 5508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.1e5ab9df.png","height":247,"width":147,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAjklEQVR42mMAgfviRubnRfXXHZQy7Nlm48vGcF/C2Pq8jNH95VaORWs0zTdtkNRrZ7gkbrBxp4l9IkjHMgWDzXPVjOsZjkkZrtkrbTh1tYz++WkGlgsZinJ5GLbJG03YIGvwK8/Hz5kBBmYbWvvPNLIpB7F/MTAwewUEMjK4x0RzpwaHioEEg6KimBhwAQC3mikZQDtOXQAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});

/***/ }),

/***/ 6681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/saylani-logo.23caaf7f.png","height":114,"width":419,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/Aa7Td5ouGFEaud6Vgf0Fo/bKx5UMpMogBhII+/b9/gDiAdbnwKQSCxwfm8lUhf37FAzi50z7q8siDxP89+4MAPnUZSoijiFh7sEAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 6219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DI": () => (/* binding */ paraVariant),
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "Ym": () => (/* binding */ slideIn),
/* harmony export */   "nC": () => (/* binding */ container),
/* harmony export */   "no": () => (/* binding */ navVariant2),
/* harmony export */   "pb": () => (/* binding */ list),
/* harmony export */   "qb": () => (/* binding */ listItem),
/* harmony export */   "wc": () => (/* binding */ item),
/* harmony export */   "yB": () => (/* binding */ navVariants)
/* harmony export */ });
/* unused harmony export staggerContainer */
const navVariants = {
    hidden: {
        opacity: 0,
        y: -50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 1
        }
    }
};
const navVariant2 = {
    hidden: {
        opacity: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 50,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 1
        }
    }
};
const staggerContainer = (staggerChildren, delayChildren)=>({
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    });
const paraVariant = (delay)=>({
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    });
const slideIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const fadeIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};
const item = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1
    }
};
const list = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    }
};
const listItem = {
    visible: {
        opacity: 1,
        x: 0
    },
    hidden: {
        opacity: 0,
        x: -100
    }
};


/***/ })

};
;