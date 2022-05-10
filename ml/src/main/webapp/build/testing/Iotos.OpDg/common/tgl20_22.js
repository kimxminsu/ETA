(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TGL"] = factory();
	else
		root["TGL"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/baseDrawComponent.ts":
/*!*****************************************!*\
  !*** ./src/common/baseDrawComponent.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDrawComponent = void 0;
const drawableGroup_1 = __webpack_require__(/*! ./drawableGroup */ "./src/common/drawableGroup.ts");
const eventableProps_1 = __webpack_require__(/*! ./eventableProps */ "./src/common/eventableProps.ts");
const function_1 = __webpack_require__(/*! ./function */ "./src/common/function.ts");
class BaseDrawComponent extends drawableGroup_1.DrawableGroup {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
        super(props);
        this.selected = false;
        this.surface = (_a = props.surface) !== null && _a !== void 0 ? _a : undefined;
        this.surfaceId = (_b = props.surfaceId) !== null && _b !== void 0 ? _b : function_1.generateUUID();
        this.canvas = (_c = props.canvas) !== null && _c !== void 0 ? _c : undefined;
        this.canvasId = (_d = props.canvasId) !== null && _d !== void 0 ? _d : function_1.generateUUID();
        /**
         * 클릭 이벤트
         *
         * @remarkss
         * 클릭 이벤트와 관련된 콜백과 프로퍼티를 포함한다
         *
         * @param func - 좌클릭 콜백함수
         * @param funcRight - 우클릭 콜백함수
         * @param color - 색상
         * @param isEnabled - 사용유무
         * @param isLimit - 클릭 제한(사용하지 않음)
         */
        this.click = new eventableProps_1.ClickEvent({
            func: (_f = (_e = props.click) === null || _e === void 0 ? void 0 : _e.func) !== null && _f !== void 0 ? _f : function () { },
            funcRight: (_h = (_g = props.click) === null || _g === void 0 ? void 0 : _g.funcRight) !== null && _h !== void 0 ? _h : function () { },
            color: (_k = (_j = props.click) === null || _j === void 0 ? void 0 : _j.color) !== null && _k !== void 0 ? _k : { over: "#FFFE00" },
            isEnabled: (_m = (_l = props.click) === null || _l === void 0 ? void 0 : _l.isEnabled) !== null && _m !== void 0 ? _m : false,
            isLimit: (_p = (_o = props.click) === null || _o === void 0 ? void 0 : _o.isLimit) !== null && _p !== void 0 ? _p : false,
        });
        this.select = new eventableProps_1.SelectEvent({
            func: (_r = (_q = props.select) === null || _q === void 0 ? void 0 : _q.func) !== null && _r !== void 0 ? _r : function () { },
            color: (_t = (_s = props.select) === null || _s === void 0 ? void 0 : _s.color) !== null && _t !== void 0 ? _t : {
                over: "rgba(255, 0, 0, 0.3)",
                selected: "rgba(255, 0, 0, 0.3)",
            },
            width: (_v = (_u = props.select) === null || _u === void 0 ? void 0 : _u.width) !== null && _v !== void 0 ? _v : 4,
            isEnabled: (_x = (_w = props.select) === null || _w === void 0 ? void 0 : _w.isEnabled) !== null && _x !== void 0 ? _x : false,
            isLimit: (_z = (_y = props.click) === null || _y === void 0 ? void 0 : _y.isLimit) !== null && _z !== void 0 ? _z : false,
            type: (_1 = (_0 = props.select) === null || _0 === void 0 ? void 0 : _0.type) !== null && _1 !== void 0 ? _1 : { circle: false },
        });
        this.beforeDraw = new eventableProps_1.BeforeDrawEvent({
            func: (_3 = (_2 = props.beforeDraw) === null || _2 === void 0 ? void 0 : _2.func) !== null && _3 !== void 0 ? _3 : function () { },
            isEnabled: (_5 = (_4 = props.beforeDraw) === null || _4 === void 0 ? void 0 : _4.isEnabled) !== null && _5 !== void 0 ? _5 : false,
        });
        this.mouseover = new eventableProps_1.MouseOverEvent({
            func: (_7 = (_6 = props.mouseover) === null || _6 === void 0 ? void 0 : _6.func) !== null && _7 !== void 0 ? _7 : function () { },
            color: (_9 = (_8 = props.mouseover) === null || _8 === void 0 ? void 0 : _8.color) !== null && _9 !== void 0 ? _9 : { over: "#FFFE00" },
            isEnabled: (_11 = (_10 = props.mouseover) === null || _10 === void 0 ? void 0 : _10.isEnabled) !== null && _11 !== void 0 ? _11 : false,
            isLimit: (_13 = (_12 = props.mouseover) === null || _12 === void 0 ? void 0 : _12.isLimit) !== null && _13 !== void 0 ? _13 : false,
        });
        if (props.afterCreate)
            props.afterCreate();
    }
    /**
     * 클릭 처리
     *
     * @remarkss
     * 클릭 이벤트시 실행된다(각 Renderer에서 오버라이드해서 사용)
     *
     * @param e - 마우스 이벤트
     */
    clickProcess(e) {
        // if (this.click.isEnabled) this.click.func(this);
    }
    selectProcess() {
        if (this.select.isEnabled)
            this.select.func(this);
    }
    // select후 child 속성에 따라 slot, container, component ... LIST 로 묶어 fun 한번 호출
    // MA.Yang 2021.07.07 수정
    selectAllComponent(selectedList){
        var isSelectChk
        if (this.select.isEnabled)
        isSelectChk = this.select.func(selectedList);
        return isSelectChk;
    }

    beforeDrawProcess() {
        if (this.beforeDraw.isEnabled) {
            if (this.beforeDraw.func)
                this.beforeDraw.func(this);
            if (this.beforeDraw.funcs && this.beforeDraw.funcs.length) {
                this.beforeDraw.funcs.forEach((f) => f(this));
            }
        }
    }
    mouseoverProcess(e) {
        if (this.mouseover.isEnabled) {
            this.mouseover.func(this);
        }
    }
    checkSelectedWithoutStroke() {
        this.selected = true;
    }
    checkSelected() {
        if (this.selected)
            return;
        this.checkSelectedWithoutStroke(); //this.selected = true;
        if (this.select.type.circle &&
            this.addSelectCircle) {
            this.addSelectCircle();
        }
        else {
            this.unselectStroke = Object.assign({}, this.stroke);
            if (this.select.color.selected !== "" &&
                this.select.color.selected !== "#FFFFFF" &&
                this.select.width !== 0) {
                this.stroke = {
                    color: this.select.color.selected,
                    width: this.select.width,
                };
            }
        }
        if (this.parent)
            this.parent.draw();
        else
            this.draw();
        // this.draw();
    }
    removeSelected() {
        if (!this.selected)
            return;
        if (this.select.type.circle &&
            this.addSelectCircle) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].id === "selectedCircle") {
                    this.children.splice(i, 1);
                }
            }
        }
        else {
            this.stroke = Object.assign({}, this.unselectStroke);
        }
        this.selected = false;
        if (this.parent)
            this.parent.draw();
        else
            this.draw();
    }
    draw(isRefresh = false) {
        if (this.beforeDraw.isEnabled)
            this.beforeDrawProcess();
        // if (this.selected)
        //   this.checkSelected();
        super.draw(isRefresh);
    }
}
exports.BaseDrawComponent = BaseDrawComponent;


/***/ }),

/***/ "./src/common/drawable.ts":
/*!********************************!*\
  !*** ./src/common/drawable.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawable = void 0;
const function_1 = __webpack_require__(/*! ./function */ "./src/common/function.ts");
const LineType = (p1, p2) => ({ p1, p2 });
class Drawable {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        this.position = {};
        this.offset = {};
        this.areaPointAndLines = {
            points: [
                { x: 0, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: 0 },
            ],
            lines: [],
        };
        this.selectedPointAndLines = {
            points: [
                { x: 0, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: 0 },
                { x: 0, y: 0 },
            ],
            lines: [],
        };
        this.size = {};
        this.children = [];
        this.fill = {};
        this.stroke = {};
        this.setLinesAreaAndSelected();
        this.dpr = (_a = window.devicePixelRatio) !== null && _a !== void 0 ? _a : 1;
        this.isVisible = true;
        this._zoom = (_b = props._zoom) !== null && _b !== void 0 ? _b : 1;
        this.isContainerType = (_c = props.isContainerType) !== null && _c !== void 0 ? _c : false;
        this.data = props.data;
        this.position = (_d = props.position) !== null && _d !== void 0 ? _d : {
            x: (_f = (_e = props.position) === null || _e === void 0 ? void 0 : _e.x) !== null && _f !== void 0 ? _f : 0,
            y: (_h = (_g = props.position) === null || _g === void 0 ? void 0 : _g.y) !== null && _h !== void 0 ? _h : 0,
        };
        this.originalPosition = {
            x: (_k = (_j = props.position) === null || _j === void 0 ? void 0 : _j.x) !== null && _k !== void 0 ? _k : 0,
            y: (_m = (_l = props.position) === null || _l === void 0 ? void 0 : _l.y) !== null && _m !== void 0 ? _m : 0,
        };
        this.size = {
            width: (_p = (_o = props.size) === null || _o === void 0 ? void 0 : _o.width) !== null && _p !== void 0 ? _p : 0,
            height: (_r = (_q = props.size) === null || _q === void 0 ? void 0 : _q.height) !== null && _r !== void 0 ? _r : 0,
        };
        this.originalSize = {
            width: (_t = (_s = props.size) === null || _s === void 0 ? void 0 : _s.width) !== null && _t !== void 0 ? _t : 0,
            height: (_v = (_u = props.size) === null || _u === void 0 ? void 0 : _u.height) !== null && _v !== void 0 ? _v : 0,
        };
        this.rotate = (_w = props.rotate) !== null && _w !== void 0 ? _w : 0;
        this.fill = {
            color: (_y = (_x = props.fill) === null || _x === void 0 ? void 0 : _x.color) !== null && _y !== void 0 ? _y : "#FFFFFF",
            isEnabled: (_0 = (_z = props.fill) === null || _z === void 0 ? void 0 : _z.isEnabled) !== null && _0 !== void 0 ? _0 : true,
        };
        this.stroke = {
            color: (_2 = (_1 = props.stroke) === null || _1 === void 0 ? void 0 : _1.color) !== null && _2 !== void 0 ? _2 : "#000000",
            width: (_4 = (_3 = props.stroke) === null || _3 === void 0 ? void 0 : _3.width) !== null && _4 !== void 0 ? _4 : 0,
        };
        this.id = (_5 = props.id) !== null && _5 !== void 0 ? _5 : function_1.generateUUID();
        // this.data = props.data || undefined;
        this.rotate = (_6 = props.rotate) !== null && _6 !== void 0 ? _6 : 0;
        this.offset = { x: 0, y: 0 };
        this.translatePosition = { x: 0, y: 0 };
        this.ctx = (_9 = (_7 = props.ctx) !== null && _7 !== void 0 ? _7 : (_8 = this.parent) === null || _8 === void 0 ? void 0 : _8.ctx) !== null && _9 !== void 0 ? _9 : null;
        this.isFitToSize = props.isFitToSize;
        this.isFitToFill = props.isFitToFill;
        this.isReflect = props.isReflect;
        this.parent = props.parent;
        if (this.isFitToSize && this.parent) {
            const multiWidth = this.parent.size.width / this.size.width;
            const multiHeight = this.parent.size.height / this.size.height;
            this.multipleResize = multiWidth < multiHeight ? multiWidth : multiHeight;
            // this.resizeToMultiple(this, this.multipleResize);
        }
        else if (this.isFitToFill && this.parent) {
            const multiWidth = this.parent.size.width / this.size.width;
            const multiHeight = this.parent.size.height / this.size.height;
            this.multipleResize = multiWidth > multiHeight ? multiWidth : multiHeight;
        }
        else {
            this.multipleResize = 1.0;
        }
        this.multipleResizeTo = 1.0;
    }
    setLinesAreaAndSelected() {
        this.areaPointAndLines.lines = [
            LineType(this.areaPointAndLines.points[0], this.areaPointAndLines.points[1]),
            LineType(this.areaPointAndLines.points[1], this.areaPointAndLines.points[2]),
            LineType(this.areaPointAndLines.points[2], this.areaPointAndLines.points[3]),
            LineType(this.areaPointAndLines.points[3], this.areaPointAndLines.points[0]),
        ];
        this.selectedPointAndLines.lines = [
            LineType(this.selectedPointAndLines.points[0], this.selectedPointAndLines.points[1]),
            LineType(this.selectedPointAndLines.points[1], this.selectedPointAndLines.points[2]),
            LineType(this.selectedPointAndLines.points[2], this.selectedPointAndLines.points[3]),
            LineType(this.selectedPointAndLines.points[3], this.selectedPointAndLines.points[0]),
        ];
    }
    /**
     * 점이 영역안에 속하는지 검사
     *
     * @remarks
     * 점이 내부에 속하는지 검사한다
     *
     * @param point 검사할 점
     * @param points 검사 대상 영역
     */
    isInside(point, points) {
        var i = 0, p1 = points[points.length - 1];
        while (i < points.length) {
            const p2 = points[i++];
            if ((p2.x - p1.x) * (point.y - p1.y) - (p2.y - p1.y) * (point.x - p1.x) <
                0) {
                return false;
            }
            p1 = p2;
        }
        return true;
    }
    /**
     * 교차선 검사
     *
     * @remarkss
     * 네개의 점을 가지고 있는 LineType 두개를 서로 비교하여 교차하는 선이 존재하는지 검사한다.
     *
     * @param l1 - LineType 1
     * @param l2 - LineType 1
     * @returns 교차 유무
     */
    doLinesIntercept(l1, l2) {
        const v1x = l1.p2.x - l1.p1.x;
        const v1y = l1.p2.y - l1.p1.y;
        const v2x = l2.p2.x - l2.p1.x;
        const v2y = l2.p2.y - l2.p1.y;
        const c = v1x * v2y - v1y * v2x;
        if (c !== 0) {
            const u = (v2x * (l1.p1.y - l2.p1.y) - v2y * (l1.p1.x - l2.p1.x)) / c;
            if (u >= 0 && u <= 1) {
                const u = (v1x * (l1.p1.y - l2.p1.y) - v1y * (l1.p1.x - l2.p1.x)) / c;
                return u >= 0 && u <= 1;
            }
        }
        return false;
    }
    /*
    모서리가 영역에 속하는지
    선이 서로 교차하는지
    두가지를 통해 영역이 서로 교차하는지 구한
     */
    isPolyOver(p1, p2) {
        // is poly p2 under any part of poly p1
        if (p2.points.some((p) => this.isInside(p, p1.points))) {
            return true;
        }
        if (p1.points.some((p) => this.isInside(p, p2.points))) {
            return true;
        }
        return p1.lines.some((l1) => p2.lines.some((l2) => this.doLinesIntercept(l1, l2)));
    }
    isPointInDrawArea(e) {
        if (!this.currentTransform)
            return;
        if (!this.isVisible)
            return;
        try {
            let rad = Math.atan2(this.currentTransform.b, this.currentTransform.a);
            if (rad < 0) {
                // angle is > Math.PI
                rad += Math.PI * 2;
            }
            // rotation = (rad * 180) / Math.PI;
            const posInTransformX = this.currentTransform.e /
                Math.sqrt(Math.pow(this.currentTransform.a, 2) +
                    Math.pow(this.currentTransform.b, 2));
            const posInTransformY = this.currentTransform.f /
                Math.sqrt(Math.pow(this.currentTransform.c, 2) +
                    Math.pow(this.currentTransform.d, 2));
            var dx = e.offsetX - posInTransformX;
            var dy = e.offsetY - posInTransformY;
            var mouseAngle = Math.atan2(dy, dx);
            var mouseDistance = Math.sqrt(dx * dx + dy * dy);
            var rotatedMouseX = posInTransformX + mouseDistance * Math.cos(mouseAngle - rad);
            var rotatedMouseY = posInTransformY + mouseDistance * Math.sin(mouseAngle - rad);
            // test if rotated mouse is inside rotated rect
            if (rotatedMouseX > posInTransformX &&
                rotatedMouseX < posInTransformX + this.size.width &&
                rotatedMouseY > posInTransformY &&
                rotatedMouseY < posInTransformY + this.size.height) {
                return true;
            }
        }
        catch (e) {
            console.log(e);
            console.log(this);
            return false;
        }
    }
    // isPointInDrawArea(e: MouseEvent): boolean {
    //   if (
    //       this.drawArea.x < e.offsetX &&
    //     this.drawArea.x + this.size.width > e.offsetX &&
    //     this.drawArea.y < e.offsetY &&
    //     this.drawArea.y + this.size.height > e.offsetY
    //   ) {
    //     return true;
    //   }
    // }
    /*
    사각형 범위의 각 모서리를 점으로 구한다
     */
    calculateDrawAreaToPoints() {
        if (!this.currentTransform)
            return;
        let rad = Math.atan2(this.currentTransform.b, this.currentTransform.a);
        if (rad < 0) {
            // angle is > Math.PI
            rad += Math.PI * 2;
        }
        const xAx = Math.cos(rad);
        const xAy = Math.sin(rad);
        // rotation = (rad * 180) / Math.PI;
        const posInTransformX = this.currentTransform.e /
            Math.sqrt(Math.pow(this.currentTransform.a, 2) +
                Math.pow(this.currentTransform.b, 2));
        const posInTransformY = this.currentTransform.f /
            Math.sqrt(Math.pow(this.currentTransform.c, 2) +
                Math.pow(this.currentTransform.d, 2));
        const x = posInTransformX, y = posInTransformY;
        const w = this.size.width, h = this.size.height;
        this.areaPointAndLines.points[0] = {
            x: 0 * xAx - 0 * xAy + x,
            y: 0 * xAy + 0 * xAx + y,
        };
        this.areaPointAndLines.points[1] = {
            x: w * xAx - 0 * xAy + x,
            y: w * xAy + 0 * xAx + y,
        };
        this.areaPointAndLines.points[2] = {
            x: w * xAx - h * xAy + x,
            y: w * xAy + h * xAx + y,
        };
        this.areaPointAndLines.points[3] = {
            x: 0 * xAx - h * xAy + x,
            y: 0 * xAy + h * xAx + y,
        };
    }
    /**
     * @remarks
     * 선택 영역과 오브젝트가 교차하는지 검사한다
     *
     * @param selectedArea 선택 영역
     * @returns boolean 교차 유무
     */
    isIntersect(selectedArea) {
        if (!this.isVisible)
            return;
        const left = Math.min(selectedArea.x, selectedArea.x + selectedArea.width);
        const top = Math.min(selectedArea.y, selectedArea.y + selectedArea.height);
        const w = Math.max(selectedArea.x, selectedArea.x + selectedArea.width) - left;
        const h = Math.max(selectedArea.y, selectedArea.y + selectedArea.height) - top;
        if (w > 0 || h > 0) {
            this.selectedPointAndLines.points[0] = { x: left, y: top };
            this.selectedPointAndLines.points[1] = { x: left + w, y: top };
            this.selectedPointAndLines.points[2] = { x: left + w, y: top + h };
            this.selectedPointAndLines.points[3] = { x: left, y: top + h };
        }
        this.setLinesAreaAndSelected();
        return this.isPolyOver(this.selectedPointAndLines, this.areaPointAndLines);
    }
    /**
     * Drawable을 자식으로 추가한다.
     *
     * @param child 자식으로 추가할 Drawable
     */
    appendChild(child, index = undefined) {
        if (this.beforeAppendChild)
            this.beforeAppendChild(child);
        child.parent = this;
        if (!child.ctx)
            child.ctx = this.ctx;
        child.multipleResizeTo = this.findParentFitToSize(child);
        if (child.multipleResizeTo === undefined)
            child.multipleResizeTo = 1.0;
        child._zoom = this._zoom;
        // this.resizeToMultiple(child, this.findParentFitToSize(child));
        if (index) {
            this.children.splice(index, 0, child);
        }
        else {
            this.children.push(child);
        }
        // if (this.currentTransform)
        //   child.currentTransform = deepClone(this.currentTransform);
        return child;
    }
    removeAllChildren() {
        this.children.forEach((child) => {
            child.parent = undefined;
        });
        this.children = [];
    }
    calculateOffset() {
        var _a, _b;
        if (this.parent) {
            if (this.parent.offset) {
                this.offset = {
                    x: ((_a = this.parent.offset) === null || _a === void 0 ? void 0 : _a.x) + this.parent.position.x,
                    y: ((_b = this.parent.offset) === null || _b === void 0 ? void 0 : _b.y) + this.parent.position.y,
                };
            }
            else {
                this.offset = {
                    x: this.parent.position.x,
                    y: this.parent.position.y,
                };
            }
        }
        else {
            this.offset = {
                x: 0,
                y: 0,
            };
        }
    }
    calculateTranslatePosition() {
        this.translatePosition.x = this.position.x;
        this.translatePosition.y = this.position.y;
        // if (!this.parent) {
        //   this.drawArea.x = this.translatePosition.x;
        //   this.drawArea.y = this.translatePosition.y;
        // }
        // this.children.forEach((child) => {
        //   child.drawArea.x = this.drawArea.x + child.position.x * this._zoom;
        //   child.drawArea.y = this.drawArea.y + child.position.y * this._zoom;
        //   child.drawArea.width = child.size.width * this._zoom;
        //   child.drawArea.height = child.size.height * this._zoom;
        // });
    }
    setPosition(position) {
        this.position = position;
        this.originalPosition = Object.assign({}, this.position);
        this.calculateOffset();
        this.calculateTranslatePosition();
    }
    setSize(size) {
        this.size = size;
        this.originalSize = Object.assign({}, this.size);
        this.calculateOffset();
        this.calculateTranslatePosition();
    }
    calculateZoom() {
        if (!this.isContainerType) {
            this.position.x =
                this.originalPosition.x *
                    this._zoom *
                    this.multipleResizeTo *
                    this.multipleResize;
            this.position.y =
                this.originalPosition.y *
                    this._zoom *
                    this.multipleResizeTo *
                    this.multipleResize;
            this.size.width =
                this.originalSize.width *
                    this._zoom *
                    this.multipleResizeTo *
                    this.multipleResize;
            this.size.height =
                this.originalSize.height *
                    this._zoom *
                    this.multipleResizeTo *
                    this.multipleResize;
            this.calculateOffset();
            this.calculateTranslatePosition();
        }
    }
    findParentFitToSize(obj) {
        if (obj.parent instanceof Drawable &&
            (obj.parent.isFitToSize === true || obj.parent.isFitToFill === true)) {
            return obj.parent.multipleResize;
        }
        if (obj.parent)
            return obj.findParentFitToSize(obj.parent);
    }
    // resizeToMultiple(obj: Drawable, multipleResize: number) {
    //   obj.setSize({
    //     width: obj.size.width * multipleResize,
    //     height: obj.size.height * multipleResize
    //   });
    //
    //   obj.setPosition({
    //     x: obj.position.x * multipleResize,
    //     y: obj.position.y * multipleResize
    //   })
    //
    //   if (obj instanceof Path.Text) {
    //     (<Text>obj).setFontSize( (<Text>obj).font.size *= multipleResize);
    //     // console.log((<Text>obj).font.size);
    //   }
    //
    //   // this.children.forEach((child) => {
    //   //   child.resizeToMultiple(child, multipleResize);
    //   // })
    // }
    draw(isRefresh = false) {
        if (!this.isVisible)
            return;
        // if (isRefresh) this.ctx.setTransform(this.currentTransform);
        this.path = new Path2D();
        if (!this.ctx)
            this.ctx = this.parent.ctx;
        this.ctx.save();
        //원점좌표를 회전축에 맞춰 수정
        // this.calculateTranslatePosition();
        this.calculateZoom();
        //회전축
        // this.calculateDrawArea();
        if (isRefresh) {
            this.ctx.setTransform(this.currentTransform);
        }
        else {
            // this.ctx.setTransform(1, 0, 0, 1, 0, this.size.height);
            this.ctx.translate(this.translatePosition.x, this.translatePosition.y);
            if (this.isReflect)
                this.ctx.scale(-1, 1);
            this.ctx.rotate((this.rotate * Math.PI) / 180);
        }
        this.ctx.beginPath();
        this.drawPath();
        this.path.closePath();
        if (!isRefresh)
            this.currentTransform = this.ctx.getTransform();
        // console.log(this.currentTransform);
        // if (this.rotate !== 0) {
        //   let rad = Math.atan2(this.currentTransform.b, this.currentTransform.a);
        //
        //   if (rad < 0) {
        //     // angle is > Math.PI
        //     rad += Math.PI * 2;
        //   }
        //
        //   // console.log((rad * 180) / Math.PI);
        //   // console.log(this.drawArea);
        // }
        this.drawFillAndStroke();
        this.children.forEach((child) => child.draw());
        this.ctx.restore();
        this.calculateDrawAreaToPoints();
        // } else {
        //   let queue: Function[] = [];
        //   let parent = { ...this.parent };
        //   while (parent.hasOwnProperty("parent")) {
        //     queue.push((<Drawable>parent).translateOnly);
        //     parent = { ...parent.parent };
        //   }
        //
        //   let func = queue.shift();
        //   while (queue.length > 0) {
        //     func();
        //     func = queue.shift();
        //   }
        //   this.draw();
        // }
    }
    translateOnly() {
        if (!this.ctx)
            this.ctx = this.parent.ctx;
        this.ctx.save();
        this.calculateZoom();
        this.ctx.translate(this.translatePosition.x, this.translatePosition.y);
        this.ctx.rotate((this.rotate * Math.PI) / 180);
        this.currentTransform = this.ctx.getTransform();
        this.ctx.restore();
    }
    drawFillAndStroke() {
        if (this.fill.isEnabled) {
            this.ctx.fillStyle = this.fill.color;
            this.ctx.fill(this.path);
        }
        if (this.stroke.width > 0) {
            this.ctx.lineWidth = this.stroke.width;
            this.ctx.strokeStyle = this.stroke.color;
            this.ctx.stroke(this.path);
        }
    }
    getChildById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.id === id) {
                return child;
            }
        }
    }
    getChildIncludeId(id) {
        let result = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.id.includes(id)) {
                result.push(child);
            }
        }
        return result;
    }
    removeChildByObject(obj) {
        const index = this.children.indexOf(obj);
        if (index > -1) {
            this.children[index].parent = undefined;
            this.children.splice(index, 1);
        }
    }
    removeChildById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child.id === id) {
                this.children[i].parent = undefined;
                this.children.splice(i, 1);
            }
        }
    }
    removeChildByType(type) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof type) {
                this.children[i].parent = undefined;
                this.children.splice(i, 1);
            }
        }
    }
    zoom(_zoom) {
        this._zoom = _zoom;
        // this.searchApplyZoom(_zoom, this);
        this.draw();
    }
    searchApplyZoom(zoom, obj) {
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            child._zoom = zoom;
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.searchApplyZoom(zoom, child);
            }
        });
    }
    searchApplyCtx(ctx, obj) {
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            child.ctx = ctx;
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.searchApplyCtx(ctx, child);
            }
        });
    }
}
exports.Drawable = Drawable;


/***/ }),

/***/ "./src/common/drawableGroup.ts":
/*!*************************************!*\
  !*** ./src/common/drawableGroup.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawableGroup = void 0;
const drawable_1 = __webpack_require__(/*! ./drawable */ "./src/common/drawable.ts");
class DrawableGroup extends drawable_1.Drawable {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f;
        super(props);
        this.stackInfo = {
            isEnabled: (_b = (_a = props.stackInfo) === null || _a === void 0 ? void 0 : _a.isEnabled) !== null && _b !== void 0 ? _b : false,
            columnSize: (_d = (_c = props.stackInfo) === null || _c === void 0 ? void 0 : _c.columnSize) !== null && _d !== void 0 ? _d : 5,
            clientWidth: (_e = props.stackInfo) === null || _e === void 0 ? void 0 : _e.clientWidth,
            clientHeight: (_f = props.stackInfo) === null || _f === void 0 ? void 0 : _f.clientHeight,
        };
        this.stackState = {
            columnNo: 1,
            rowNo: 0,
            sumWidthInLastRow: 0,
            maxHeightInLastRow: 0,
            sumHeight: 0,
            maxWidth: 0,
            maxHeight: 0,
        };
    }
    appendChild(child, index = undefined) {
        super.appendChild(child, index);
        if (this.stackInfo.isEnabled) {
            this.calculateChildDrawablePositionForStack(child);
        }
        return child;
    }
    /*
    여러개가 적재되는 경우 새로 적재될 위치를 계산한다.
     */
    calculateChildDrawablePositionForStack(child) {
        // console.log(child.position, this.stackState.sumWidthInLastRow);
        child.position.x += this.stackState.sumWidthInLastRow;
        // child.position.y += this.stackState.sumHeight;
        // this.stackState.sumWidthInLastRow += child.size.width;
        if ((child.position.x + child.size.width) * child._zoom > this.stackInfo.clientWidth) {
            // if (this.stackState.sumWidthInLastRow > this.stackInfo.clientWidth) {
            console.log("flood width");
            this.stackState.rowNo++;
            this.stackState.columnNo = 1;
            child.position.x = 0;
            this.stackState.sumWidthInLastRow = child.size.width;
            this.stackState.sumHeight += this.stackState.maxHeightInLastRow;
            this.stackState.maxHeightInLastRow = 0;
        }
        else if (this.stackState.columnNo > this.stackInfo.columnSize) {
            console.log("floow column size" + this.stackState.columnNo);
            this.stackState.rowNo++;
            this.stackState.columnNo = 2;
            this.stackState.sumWidthInLastRow = child.size.width;
            child.position.x = 0;
            this.stackState.sumHeight += this.stackState.maxHeightInLastRow;
            this.stackState.maxHeightInLastRow = 0;
        }
        else {
            this.stackState.sumWidthInLastRow += child.size.width;
            this.stackState.columnNo++;
        }
        child.position.y += this.stackState.sumHeight;
        child.setPosition({
            x: child.position.x,
            y: child.position.y,
        });
        if (this.stackState.maxWidth < this.stackState.sumWidthInLastRow) {
            this.stackState.maxWidth = this.stackState.sumWidthInLastRow;
        }
        if (this.stackState.maxHeight < child.position.y + child.size.height) {
            this.stackState.maxHeight = child.position.y + child.size.height;
        }
        if (this.stackState.maxHeightInLastRow < child.size.height) {
            this.stackState.maxHeightInLastRow = child.size.height;
        }
    }
    drawPath() {
        this.path.rect(this.stroke.width / 2, this.stroke.width / 2, this.size.width - this.stroke.width, this.size.height - this.stroke.width);
    }
}
exports.DrawableGroup = DrawableGroup;


/***/ }),

/***/ "./src/common/eventable.ts":
/*!*********************************!*\
  !*** ./src/common/eventable.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Eventable = void 0;
const eventableProps_1 = __webpack_require__(/*! ./eventableProps */ "./src/common/eventableProps.ts");
class Eventable {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.click = new eventableProps_1.ClickEvent({
            func: ((_a = props.click) === null || _a === void 0 ? void 0 : _a.func) || function () { },
            funcRight: ((_b = props.click) === null || _b === void 0 ? void 0 : _b.funcRight) || function () { },
            color: ((_c = props.click) === null || _c === void 0 ? void 0 : _c.color) || { over: "#FFFF00" },
            isEnabled: ((_d = props.click) === null || _d === void 0 ? void 0 : _d.isEnabled) || false,
            isLimit: ((_e = props.click) === null || _e === void 0 ? void 0 : _e.isLimit) || false,
        });
        this.select = new eventableProps_1.SelectEvent({
            func: ((_f = props.select) === null || _f === void 0 ? void 0 : _f.func) || function () { },
            color: ((_g = props.select) === null || _g === void 0 ? void 0 : _g.color) || {
                over: "rgba(255, 0, 0, 0.3)",
                selected: "rgba(255, 0, 0, 0.3)",
            },
            width: ((_h = props.select) === null || _h === void 0 ? void 0 : _h.width) === undefined ? 4 : props.select.width,
            isEnabled: ((_j = props.select) === null || _j === void 0 ? void 0 : _j.isEnabled) || false,
            isLimit: ((_k = props.click) === null || _k === void 0 ? void 0 : _k.isLimit) || false,
            type: ((_l = props.select) === null || _l === void 0 ? void 0 : _l.type) || { circle: false },
        });
        this.beforeDraw = new eventableProps_1.BeforeDrawEvent({
            func: ((_m = props.beforeDraw) === null || _m === void 0 ? void 0 : _m.func) || function () { },
            isEnabled: ((_o = props.beforeDraw) === null || _o === void 0 ? void 0 : _o.isEnabled) || false,
        });
        this.mouseover = new eventableProps_1.MouseOverEvent({
            func: ((_p = props.click) === null || _p === void 0 ? void 0 : _p.func) || function () { },
            color: ((_q = props.click) === null || _q === void 0 ? void 0 : _q.color) || { over: "#FFFF00" },
            isEnabled: ((_r = props.click) === null || _r === void 0 ? void 0 : _r.isEnabled) || false,
            isLimit: ((_s = props.click) === null || _s === void 0 ? void 0 : _s.isLimit) || false,
        });
    }
    beforeDrawProcess() {
        if (this.beforeDraw.isEnabled)
            this.beforeDraw.func(this);
    }
    clickProcess(e) {
        if (this.click.isEnabled)
            this.click.func(this);
    }
    selectProcess(e) {
        if (this.select.isEnabled)
            this.select.func(this);
    }
    mouseoverProcess(e) {
        if (this.mouseover.isEnabled)
            this.mouseover.func(this);
    }
}
exports.Eventable = Eventable;


/***/ }),

/***/ "./src/common/eventableProps.ts":
/*!**************************************!*\
  !*** ./src/common/eventableProps.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeDrawEvent = exports.MouseOverEvent = exports.SelectEvent = exports.ClickEvent = void 0;
class ClickEvent {
    constructor(props) {
        var _a;
        this.func = props.func || function () { };
        this.funcRight = props.funcRight || function () { };
        this.color = {};
        this.color.over = ((_a = props.color) === null || _a === void 0 ? void 0 : _a.over) || "FFFF00";
        this.alpha = 0.3;
        this.isEnabled = props.isEnabled || false;
        this.isLimit = props.isLimit || false;
    }
}
exports.ClickEvent = ClickEvent;
class SelectEvent extends ClickEvent {
    constructor(props) {
        var _a, _b;
        super(props);
        this.color = this.color || {};
        this.color.selected = ((_a = props.color) === null || _a === void 0 ? void 0 : _a.selected) || "rgba(255, 0, 0, 0.5)";
        this.width = props.width === undefined ? 4 : props.width;
        this.type = this.type || {};
        this.type.circle = ((_b = props.type) === null || _b === void 0 ? void 0 : _b.circle) || false;
    }
}
exports.SelectEvent = SelectEvent;
class MouseOverEvent extends ClickEvent {
}
exports.MouseOverEvent = MouseOverEvent;
class BeforeDrawEvent {
    constructor(props) {
        this.func = props.func;
        this.funcs = props.funcs || [];
        this.isEnabled = props.isEnabled;
    }
}
exports.BeforeDrawEvent = BeforeDrawEvent;


/***/ }),

/***/ "./src/common/function.ts":
/*!********************************!*\
  !*** ./src/common/function.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = exports.generateUUID = void 0;
function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.generateUUID = generateUUID;
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
exports.applyMixins = applyMixins;


/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
const drawable_1 = __webpack_require__(/*! ./drawable */ "./src/common/drawable.ts");
const drawableGroup_1 = __webpack_require__(/*! ./drawableGroup */ "./src/common/drawableGroup.ts");
const renderer_1 = __webpack_require__(/*! ./renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ./baseDrawComponent */ "./src/common/baseDrawComponent.ts");
var Common;
(function (Common) {
    Common.Drawable = drawable_1.Drawable;
    Common.DrawableGroup = drawableGroup_1.DrawableGroup;
    Common.BaseDrawComponent = baseDrawComponent_1.BaseDrawComponent;
    Common.Renderer = renderer_1.Renderer;
})(Common = exports.Common || (exports.Common = {}));


/***/ }),

/***/ "./src/common/renderer.ts":
/*!********************************!*\
  !*** ./src/common/renderer.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const function_1 = __webpack_require__(/*! ./function */ "./src/common/function.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ./baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const eventable_1 = __webpack_require__(/*! ./eventable */ "./src/common/eventable.ts");
// export interface BaseRenderer extends LayoutDescription, Eventable {}
// export class BaseRenderer {}
// applyMixins(BaseRenderer, [LayoutDescription, Eventable]);
class Renderer extends eventable_1.Eventable {
    // selectedDiv: HTMLElement;
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        super(props);
        this.children = [];
        this.clickedList = [];
        this.selectedList = [];
        this.selectedCheckedList = [];
        // this.yardDefine = props.yardDefine;
        this.surface = props.surface;
        this.afterDraw = (_a = props.afterDraw) !== null && _a !== void 0 ? _a : undefined;
        this.rotate = (_b = props.rotate) !== null && _b !== void 0 ? _b : 0;
        this.fill = {
            color: (_d = (_c = props.fill) === null || _c === void 0 ? void 0 : _c.color) !== null && _d !== void 0 ? _d : "#FFFFFF",
        };
        this.stroke = {
            color: (_f = (_e = props.stroke) === null || _e === void 0 ? void 0 : _e.color) !== null && _f !== void 0 ? _f : "#000000",
            width: (_h = (_g = props.stroke) === null || _g === void 0 ? void 0 : _g.width) !== null && _h !== void 0 ? _h : 0,
        };
        this.id = (_j = props.id) !== null && _j !== void 0 ? _j : function_1.generateUUID();
        this.ctx = (_k = props.ctx) !== null && _k !== void 0 ? _k : null;
        this.position = {
            x: (_m = (_l = props.position) === null || _l === void 0 ? void 0 : _l.x) !== null && _m !== void 0 ? _m : 0,
            y: (_p = (_o = props.position) === null || _o === void 0 ? void 0 : _o.y) !== null && _p !== void 0 ? _p : 0,
        };
        this.size = {
            width: (_r = (_q = props.size) === null || _q === void 0 ? void 0 : _q.width) !== null && _r !== void 0 ? _r : 0,
            height: (_t = (_s = props.size) === null || _s === void 0 ? void 0 : _s.height) !== null && _t !== void 0 ? _t : 0,
        };
        this.originalSize = {
            width: (_v = (_u = props.size) === null || _u === void 0 ? void 0 : _u.width) !== null && _v !== void 0 ? _v : 0,
            height: (_x = (_w = props.size) === null || _w === void 0 ? void 0 : _w.height) !== null && _x !== void 0 ? _x : 0,
        };
        this.id = (_y = props.id) !== null && _y !== void 0 ? _y : function_1.generateUUID();
        // this.data = props.data || undefined;
        this.rotate = (_z = props.rotate) !== null && _z !== void 0 ? _z : 0;
        this.dragInfo = {
            dragging: false,
            selected: {
                start: {
                    x: 0,
                    y: 0,
                },
                end: {
                    x: 0,
                    y: 0,
                },
            },
            drawArea: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            },
        };
        this._zoom = 1;
        this.dpr = (_0 = window.devicePixelRatio) !== null && _0 !== void 0 ? _0 : 1;
        this.createAndAppendCanvas(props);
        this.adjustCtxScale();
        this.createAndAppendSelectedDiv();
        this.clickEventMe = this.clickEvent.bind(this);
        this.mouseDownEventMe = this.mouseDownEvent.bind(this);
        this.mouseMoveEventMe = this.mouseMoveEvent.bind(this);
        this.mouseUpEventMe = this.mouseUpEvent.bind(this);
        this.rightClickEventMe = this.rightClickEvent.bind(this);
        this.addEventListener();
        // this.surface.addEventListener("mouseleave", this.mouseUpEvent.bind(this));
    }
    addEventListener() {
        this.surface.addEventListener("click", this.clickEventMe);
        this.surface.addEventListener("mousedown", this.mouseDownEventMe);
        this.surface.addEventListener("mousemove", this.mouseMoveEventMe);
        this.surface.addEventListener("mouseup", this.mouseUpEventMe);
        this.surface.addEventListener("contextmenu", this.rightClickEventMe);
        // console.log(this.clickEventMe);
        // this.surface.addEventListener("click", this.clickEvent.bind(this));
        // this.surface.addEventListener("mousedown", this.mouseDownEvent.bind(this));
        // this.surface.addEventListener("mousemove", this.mouseMoveEvent.bind(this));
        // this.surface.addEventListener("mouseup", this.mouseUpEvent.bind(this));
        // this.surface.addEventListener("contextmenu", this.rightClickEvent.bind(this));
    }
    removeEventListener() {
        this.surface.removeEventListener("click", this.clickEventMe);
        this.surface.removeEventListener("mousedown", this.mouseDownEventMe);
        this.surface.removeEventListener("mousemove", this.mouseMoveEventMe);
        this.surface.removeEventListener("mouseup", this.mouseUpEventMe);
        this.surface.removeEventListener("contextmenu", this.rightClickEventMe);
    }
    createAndAppendSelectedDiv() {
        this.selectedDiv = document.createElement("div");
        this.selectedDiv.id = function_1.generateUUID();
        this.selectedDiv.style.position = "absolute";
        this.selectedDiv.style.backgroundColor = "#0000ff";
        this.selectedDiv.style.opacity = "0.3";
        this.selectedDiv.style.pointerEvents = "none";
        this.surface.appendChild(this.selectedDiv);
    }
    adjustCtxScale() {
        this.ctx.scale(this.dpr, this.dpr);
    }
    resizeCanvas(multipleCanvasSize = 1.0) {
        this.multipleCanvasSize = multipleCanvasSize;
        this.surface.style.width = this.size.width * multipleCanvasSize + "px";
        this.surface.style.height = this.size.height * multipleCanvasSize + "px";
        this.canvas.width = this.size.width * multipleCanvasSize * this.dpr;
        this.canvas.height = this.size.height * multipleCanvasSize * this.dpr;
        this.canvas.style.width = this.size.width * multipleCanvasSize + "px";
        this.canvas.style.height = this.size.height * multipleCanvasSize + "px";
    }
    removeCanvas() {
        this.ctx = undefined;
        this.searchApplyCtx(undefined, this);
        this.surface.removeChild(this.canvas);
    }
    createAndAppendCanvas(props, multipleCanvasSize = 1.0) {
        this.canvas = document.createElement("canvas");
        this.canvas.id = props.canvasId || function_1.generateUUID();
        this.resizeCanvas(multipleCanvasSize);
        this.surface.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        // canvas.style.position = "absolute";
        // canvas.style.border = "1px solid";
    }
    searchSelectedCheckObject(obj) {
        if (!obj) {
            obj = this;
            this.selectedCheckedList = [];
        }
        obj.children.forEach((child) => {
            var _a;
            if (child instanceof baseDrawComponent_1.BaseDrawComponent && child.selected) {
                this.selectedCheckedList.push(child);
                child.clickProcess(undefined);
            }
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.selectedCheckedList = this.searchSelectedCheckObject(child);
            }
        });
        return this.selectedCheckedList;
    }
    clearSelectedCheckList(obj) {
        if (!obj)
            obj = this;
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            if (child instanceof baseDrawComponent_1.BaseDrawComponent && child.selected) {
                child.removeSelected();
            }
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.clearSelectedCheckList(child);
            }
        });
    }
    searchOveredObject(e, obj) {
        // return;
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            if (child.isPointInDrawArea(e)) {
                if (child instanceof baseDrawComponent_1.BaseDrawComponent) {
                    child.mouseoverProcess(e);
                }
                if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.searchOveredObject(e, child);
                }
            }
        });
    }
    searchClickedObject(e, obj) {
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            if (child.isPointInDrawArea(e)) {
                if (child instanceof baseDrawComponent_1.BaseDrawComponent) {
                    if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        this.searchClickedObject(e, child);
                    }
                    if (child.click.isEnabled) {
                        this.clickedList.push(child);
                        // select후 child 속성에 따라 slot, container, component ... 각각 function 반복 호출 되는 부분 제거
                        // MA.Yang 2021.07.07 수정
                        // child.clickProcess(e);
                    }
                }
            }
        });
    }
    searchSelectedObject(area, obj) {
        obj.children.forEach((child) => {
            var _a;
            if (child.isIntersect(area)) {
                if (child instanceof baseDrawComponent_1.BaseDrawComponent) {
                    if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        this.searchSelectedObject(area, child);
                    }
                    if (child.select.isEnabled) {
                        this.selectedList.push(child);
                    // select후 child 속성에 따라 slot, container, component ... 각각 function 호출 되는 부분 제거
                    // MA.Yang 2021.07.07 수정
                        // child.selectProcess();
                    }
                }
            }
        });
        
    }
    clickProcess(e) {
        // if (this.click.isEnabled && !this.dragInfo.dragging) {
        //   if (e.type === "mouseup" && e.button === 0) {
        //     this.click.func(this);
        //   } else if (
        //     e.type === "contextmenu" ||
        //     (e.type === "mouseup" && e.button === 2)
        //   ) {
        //     this.click.funcRight(this);
        //   }
        // }
        // if (this.click.isEnabled && this.click.func) this.click.func(this);
    }
    clickEvent(e) {
        e.preventDefault();
    }
    rightClickEvent(e) {
        e.preventDefault();
    }
    displaySelectedArea() {
        const selectedWidth = this.dragInfo.selected.end.x - this.dragInfo.selected.start.x;
        const selectedHeight = this.dragInfo.selected.end.y - this.dragInfo.selected.start.y;
        if (selectedWidth > 0) {
            this.dragInfo.drawArea.width = selectedWidth;
            this.dragInfo.drawArea.x = this.dragInfo.selected.start.x;
        }
        else {
            this.dragInfo.drawArea.width = Math.abs(selectedWidth);
            this.dragInfo.drawArea.x = this.dragInfo.selected.end.x;
        }
        if (selectedHeight > 0) {
            this.dragInfo.drawArea.height = selectedHeight;
            this.dragInfo.drawArea.y = this.dragInfo.selected.start.y;
        }
        else {
            this.dragInfo.drawArea.height = Math.abs(selectedHeight);
            this.dragInfo.drawArea.y = this.dragInfo.selected.end.y;
        }
        /*
        "x-panel-body"를 포함하는 경우
        sencha 컴포넌트라고 판단하고 div position을 변경한다
         */
        if (this.surface.parentNode.className.indexOf("x-panel-body") > -1) {
            this.selectedDiv.style.left =
                String(this.dragInfo.drawArea.x + window.scrollX) + "px";
            this.selectedDiv.style.top =
                String(this.dragInfo.drawArea.y + window.scrollY) + "px";
        }
        else {
            const bound = this.surface.getBoundingClientRect();
            this.selectedDiv.style.left =
                String(this.dragInfo.drawArea.x + bound.left + window.scrollX) + "px";
            this.selectedDiv.style.top =
                String(this.dragInfo.drawArea.y + bound.top + window.scrollY) + "px";
        }
        this.selectedDiv.style.width = this.dragInfo.drawArea.width + "px";
        this.selectedDiv.style.height = this.dragInfo.drawArea.height + "px";
        this.selectedDiv.style.display = "";
    }
    mouseDownEvent(e) {
        e.preventDefault();
        if (e.button === 0) {
            this.dragInfo = {
                dragging: true,
                selected: {
                    start: {
                        x: e.offsetX,
                        y: e.offsetY,
                    },
                    end: {
                        x: e.offsetX,
                        y: e.offsetY,
                    },
                },
                drawArea: {
                    x: e.offsetX,
                    y: e.offsetY,
                    width: 0,
                    height: 0,
                },
            };
        }
    }
    mouseMoveEvent(e) {
        // console.log(e.offsetX, e.offsetY);
        if (this.select.isEnabled && this.dragInfo.dragging) {
            if (e.target instanceof HTMLCanvasElement &&
                e.target.id === this.canvas.id) {
                this.dragInfo.selected.end = {
                    x: e.offsetX,
                    y: e.offsetY,
                };
                this.displaySelectedArea();
            }
        }
        if (this.mouseover.isEnabled) {
            this.searchOveredObject(e, this);
        }
    }
    checkAndProcessSelect(obj) { }
    checkAndProcessClick(e, obj) { }
    mouseUpEvent(e) {
        if (this.dragInfo.dragging &&
            this.select.isEnabled &&
            Math.abs(this.dragInfo.selected.start.x -
                this.dragInfo.selected.end.x +
                this.dragInfo.selected.start.y -
                this.dragInfo.selected.end.y) > 3) {
            if (e.button === 0) {
                this.checkAndProcessSelect(this);
            }
        }
        else {
            this.checkAndProcessClick(e, this);
        }
        this.selectedDiv.style.display = "none";
        this.dragInfo.dragging = false;
    }
    selectProcess() {
        if (this.select.isEnabled && this.select.func)
            this.select.func(this);
    }
    // select후 child 속성에 따라 slot, container, component ... 각각 function 호출 되는 부분 제거
    // MA.Yang 2021.07.07 수정
    selectAllComponent(selectedList){
        var isSelectChk
        if (this.select.isEnabled && this.select.func)
        isSelectChk = this.select.func(selectedList);
        return isSelectChk;
    }

    addDrawComponent(child) {
        // if (drawable instanceof Container) {
        child.surface = child.surface || this.surface;
        child.ctx = child.ctx || this.ctx;
        // } else {
        //   drawable.ctx = drawable.ctx || this.ctx;
        // }
        this.children.push(child);
    }
    clearDrawComponent() {
        this.children.forEach((child) => (child.parent = undefined));
        this.children = [];
    }
    clearDrawComponentBy(type) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] instanceof type) {
                this.children.splice(i, 1);
            }
        }
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.searchApplyZoom(this._zoom, this);
        // const starttime: any = new Date();
        this.children.forEach((child) => {
            child.draw();
        });
        if (this.afterDraw)
            this.afterDraw(this);
        // const endtime: any = new Date();
        // return endtime - starttime;
        // console.log("draw process time: " + (endtime - starttime));
    }
    zoom(_zoom) {
        this._zoom = _zoom;
        // this.resizeCanvas(_zoom);
        // this.searchApplyZoom(_zoom, this);
        this.draw();
        // this.canvas.width = 1000;
        // this.canvas.height = 1000;
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.searchApplyZoom(this._zoom, this);
        // this.children.forEach((child) => {
        //   child.draw();
        // });
    }
    zoomAndResize(_zoom) {
        this._zoom = _zoom;
        this.resizeCanvas(_zoom);
        this.adjustCtxScale();
        this.draw();
    }
    searchApplyZoom(zoom, obj) {
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            child._zoom = zoom;
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.searchApplyZoom(zoom, child);
            }
        });
    }
    searchApplyCtx(ctx, obj) {
        obj.children.forEach((child) => {
            var _a;
            // console.log(child);
            child.ctx = ctx;
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.searchApplyCtx(ctx, child);
            }
        });
    }
    unselectAll() {
        this.searchApplyUnselect(this);
    }
    searchApplyUnselect(obj) {
        obj.children.forEach((child) => {
            var _a;
            if (child instanceof baseDrawComponent_1.BaseDrawComponent)
                child.removeSelected();
            if (((_a = child.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.searchApplyUnselect(child);
            }
        });
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/common/type.ts":
/*!****************************!*\
  !*** ./src/common/type.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YardConstant = exports.MarkingTypes = exports.ViewDirection = exports.OrderType = exports.OrderDirection = void 0;
var OrderDirection;
(function (OrderDirection) {
    OrderDirection[OrderDirection["Asc"] = 0] = "Asc";
    OrderDirection[OrderDirection["Desc"] = 1] = "Desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["TopLeft"] = 0] = "TopLeft";
    OrderType[OrderType["TopRight"] = 1] = "TopRight";
    OrderType[OrderType["BottomLeft"] = 2] = "BottomLeft";
    OrderType[OrderType["BottomRight"] = 3] = "BottomRight";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var ViewDirection;
(function (ViewDirection) {
    ViewDirection[ViewDirection["Front"] = 0] = "Front";
    ViewDirection[ViewDirection["Side"] = 1] = "Side";
})(ViewDirection = exports.ViewDirection || (exports.ViewDirection = {}));
var MarkingTypes;
(function (MarkingTypes) {
    MarkingTypes[MarkingTypes["CIRCLE"] = 0] = "CIRCLE";
    MarkingTypes[MarkingTypes["TRIANGLE"] = 1] = "TRIANGLE";
    MarkingTypes[MarkingTypes["INVERT_TRIANGLE"] = 2] = "INVERT_TRIANGLE";
})(MarkingTypes = exports.MarkingTypes || (exports.MarkingTypes = {}));
exports.YardConstant = {
    MIN_OccupiedSlotCount: 1,
    CNTR_SIZE_20: "2",
    CNTR_SIZE_30: "3",
    CNTR_SIZE_40: "4",
    CNTR_SIZE_45: "45",
    CNTR_SIZE_48: "48",
    CNTR_SIZE_L: "45",
    CNTR_SIZE_M: "48",
    CNTR_SIZE_P: "5", // 53
};


/***/ }),

/***/ "./src/component/areaItem.ts":
/*!***********************************!*\
  !*** ./src/component/areaItem.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaItem = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class AreaItem extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.areaName = props.areaName;
        this.index = props.index;
        this.area = props.area;
        this.backColorInt = props.backColorInt;
        this.backColorStr = props.backColorStr;
        this.back_color = props.back_color;
        this.capacity = props.capacity;
        this.carrierType = props.carrierType;
        this.deg = props.deg;
        this.foreColorInt = props.foreColorInt;
        this.foreColorStr = props.foreColorStr;
        this.fore_color = props.fore_color;
        this.icChk = props.icChk;
        this.maxBay = props.maxBay;
        this.maxRow = props.maxRow;
        this.maxTier = props.maxTier;
        this.remark = props.remark;
        this.sideLift = props.sideLift;
        this.tgs = props.tgs;
        this.use1 = props.use1;
        this.use2 = props.use2;
        this.wdChk = props.wdChk;
        this.workQty = props.workQty;
        this.workQtyBackColor = props.workQtyBackColor;
        this.workQtyForeColor = props.workQtyForeColor;
        this.key = props.key;
    }
    drawPath() {
        this.drawAreaText();
    }
    drawAreaText() {
        this.areaText = new path_1.Path.Text({
            text: this.areaName,
            font: {
                size: 14,
            },
            fill: { color: "#000000" },
            position: {
                x: 0,
                y: 0,
            },
            size: { width: this.size.width, height: this.size.height },
        });
        if (this.areaText) {
            this.appendChild(this.areaText);
        }
    }
}
exports.AreaItem = AreaItem;


/***/ }),

/***/ "./src/component/bayBlock.ts":
/*!***********************************!*\
  !*** ./src/component/bayBlock.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BayBlock = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const slot_1 = __webpack_require__(/*! ./slot */ "./src/component/slot.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const container_1 = __webpack_require__(/*! ./container */ "./src/component/container.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/component/index.ts");
const buttonClose_1 = __webpack_require__(/*! ./buttonClose */ "./src/component/buttonClose.ts");
class BayBlock extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.id = props.id;
        this.layout = props.layout;
        this.slotProps = props.slotProps;
        this.blockItem = props.blockItem;
        this.viewType = props.viewType;
        this.viewDir = props.viewDir;
        this.blockGap = (_a = props.blockGap) !== null && _a !== void 0 ? _a : 20;
        this.blockName = props.blockName;
        this.data = props.data;
        this.ytInfo = props.ytInfo;
        this.isEnabledLockToolTip = props.isEnabledLockToolTip;
        this.isVisibleBlockNameText = props.isVisibleBlockNameText;
        this.slotBeforeDraw = props.slotBeforeDraw;
        this.hasCloseButton = props.hasCloseButton; //SL.Choi add
        this.lockRects = [];
        this.surface.addEventListener("mousemove", this.mouseMoveEvent.bind(this));
        this.bayRowTierOrder = props.bayRowTierOrder;
        if (props.hasCloseButton) {
            this.addCloseButton(); //SL.Choi add
        }
        this.addBlock();
        this.select = (_b = props.select) !== null && _b !== void 0 ? _b : { isEnabled: false, func: () => { } };
        this.click = (_c = props.click) !== null && _c !== void 0 ? _c : { isEnabled: false, func: () => { } };
    }
    addBlock() {
        let slotWidth;
        if (this.viewDir === type_1.ViewDirection.Side) {
            slotWidth = this.slotProps.size.width;
        }
        else {
            slotWidth = this.slotProps.size.height;
        }
        if (this.isVisibleBlockNameText)
            this.addBlockNameText();
        this.addYtDirectionPath(slotWidth);
        this.addTierText();
        this.addBayRowText(slotWidth);
        this.addCposPath(slotWidth);
        this.lockNumbers = [];
        this.addIsLockedPath(slotWidth);
        this.addSlots(slotWidth);
    }
    addCloseButton() {
        const buttonClose = new buttonClose_1.ButtonClose({ // modified MA.Yang, fill, stroke 추가 및 위치 조정
            data: undefined,
            marking: undefined,
            position: { x: this.size.width - 10, y: 10 },
            size: { width: 10, height: 10 },
            slotGap: 0,
            stackInfo: undefined,
            fill: {
                color: "rgba(255, 0, 0, 1)",
            },
            stroke: {
                width: 1,
                color: "rgba(255, 255,255, 1)",
            },
            click: {
                isEnabled: true,
                func: () => {
                    console.log("11");
                },
            },
        });
        buttonClose.data = this.data;
        this.appendChild(buttonClose);
    }
    addSlots(slotWidth) {
        var _a;
        let maxBayRow = (_a = this.data.maxRow) !== null && _a !== void 0 ? _a : this.data.maxBay;
        for (let tier = 0; tier < this.data.maxTier; tier++) {
            for (let row = 0; row < maxBayRow; row++) {
                const slot = new slot_1.Slot(Object.assign({}, this.slotProps));
                slot.setSize({
                    width: slotWidth,
                    height: slot.size.height,
                });
                slot.data = {
                    blockName: this.blockName,
                    bayRow: this.bayRowTierOrder.bayRow === type_1.OrderDirection.Asc
                        ? row + 1
                        : maxBayRow - row,
                    tier: this.bayRowTierOrder.tier === type_1.OrderDirection.Desc
                        ? tier + 1
                        : this.data.maxTier - tier,
                };
                this.viewDir === type_1.ViewDirection.Side
                    ? (slot.data.row = slot.data.bayRow)
                    : (slot.data.bay = slot.data.bayRow);
                this.viewDir === type_1.ViewDirection.Side
                    ? (slot.id = this.id + "-" + slot.data.bayRow + "-" + slot.data.tier)
                    : (slot.id = this.id + "-" + slot.data.bayRow + "-" + slot.data.tier);
                slot.click = Object.assign({}, this.click);
                slot.select = Object.assign({}, this.select);
                slot.setPosition({
                    x: slot.position.x +
                        this.blockGap +
                        row * (slot.size.width + this.slotProps.slotGap),
                    y: slot.position.y +
                        this.blockGap +
                        tier * (slot.size.height + this.slotProps.slotGap),
                });
                // slot.markingType = MarkingTypes.CIRCLE;
                slot.parent = this;
                slot.id = this.id + "-" + slot.data.bayRow + "-" + slot.data.tier;
                if (this.lockNumbers.indexOf(row + 1) >= 0) {
                    slot.select.isEnabled = false;
                }
                else {
                    slot.select.isEnabled = true;
                }
                if (this.slotBeforeDraw) {
                    slot.beforeDraw = {
                        isEnabled: true,
                        func: this.slotBeforeDraw,
                    };
                }
                this.appendChild(slot);
            }
        }
    }
    getIsLocked(row) {
        return this.viewDir === type_1.ViewDirection.Side
            ? this.blockItem.bayList[row].isLocked
            : this.blockItem.rowList[row].isLocked;
    }
    addIsLockedPath(slotWidth) {
        for (let row = 1; row <= (this.data.maxRow || this.data.maxBay); row++) {
            let isLocked = this.getIsLocked(row);
            if (isLocked) {
                this.lockNumbers.push(row);
                const rect = new path_1.Path.Rect({
                    stroke: {
                        color: "#FF0000",
                        width: 1,
                    },
                    fill: {
                        color: "#FF0000",
                    },
                    position: {
                        x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
                        y: this.blockGap +
                            this.data.maxTier *
                                (this.slotProps.size.height + this.slotProps.slotGap),
                    },
                    id: "LOCKEDPATH-" + this.id,
                    size: {
                        width: slotWidth,
                        height: 2,
                    },
                });
                this.appendChild(rect);
                this.lockRects.push(rect);
                this.hasLock = true;
            }
        }
    }
    addCposPath(slotWidth) {
        for (let row = 1; row <= (this.data.maxRow || this.data.maxBay); row++) {
            let isCPOs = false;
            if (this.data.CPOs && this.data.CPOs[row - 1] === 0) {
                isCPOs = true;
            }
            if (isCPOs) {
                const rect = new path_1.Path.Rect({
                    stroke: {
                        color: "#D3D3D3",
                        width: 1,
                    },
                    fill: {
                        color: "#D3D3D3",
                    },
                    id: "CPOS-" + row,
                    position: {
                        x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
                        y: this.blockGap +
                            this.data.maxTier *
                                (this.slotProps.size.height + this.slotProps.slotGap),
                    },
                    size: {
                        width: slotWidth,
                        height: 2,
                    },
                });
                this.appendChild(rect);
            }
            else {
                const rect = new path_1.Path.Rect({
                    stroke: {
                        color: "#808080",
                        width: 1,
                    },
                    fill: {
                        color: "#808080",
                    },
                    id: "CPOS-" + row,
                    position: {
                        x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
                        y: this.blockGap +
                            this.data.maxTier *
                                (this.slotProps.size.height + this.slotProps.slotGap),
                    },
                    size: {
                        width: slotWidth,
                        height: 2,
                    },
                });
                this.appendChild(rect);
            }
        }
    }
    addBayRowText(slotWidth) {
        for (let row = 1; row <= (this.data.maxRow || this.data.maxBay); row++) {
            let rowNo = row;
            if (this.bayRowTierOrder.bayRow == type_1.OrderDirection.Desc)
                rowNo = this.data.maxRow - row + 1;
            const text = new path_1.Path.Text({
                font: {
                    size: 10,
                },
                maxWidth: 0,
                position: {
                    x: this.blockGap +
                        (row - 1) * (slotWidth + this.slotProps.slotGap) +
                        slotWidth / 2 -
                        7,
                    y: this.blockGap +
                        this.data.maxTier *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        3,
                },
                size: {
                    width: 6,
                    height: 6,
                },
                text: this.viewDir === type_1.ViewDirection.Side
                    ? this.blockItem.bayList[rowNo].name2
                    : this.blockItem.rowList[rowNo].name,
                fill: { color: "#000000" },
            });
            text.id = "BAYROWTEXT-" + this.id + "-" + text.text;
            this.appendChild(text);
        }
    }
    addTierText() {
        for (let tier = 1; tier <= this.data.maxTier; tier++) {
            let tierNo = tier;
            if (this.bayRowTierOrder.tier == type_1.OrderDirection.Desc)
                tierNo = this.data.maxRow - tier + 2;
            const text = new path_1.Path.Text({
                font: {
                    size: 10,
                },
                maxWidth: 0,
                id: "TIERTEXT-" + this.id + "-" + tierNo,
                position: {
                    x: 10,
                    y: this.blockGap +
                        (this.blockItem.maxTier - tier) *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5,
                },
                size: {
                    width: 6,
                    height: 6,
                },
                text: String(tierNo),
                fill: { color: "#000000" },
            });
            // this.blockItem.maxTier
            this.appendChild(text);
        }
    }
    addYtDirectionPath(slotWidth) {
        if (this.blockItem.ytPos === "S") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: 10,
                    y: this.blockGap +
                        this.blockItem.maxTier *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5,
                },
                rotate: this.blockItem.ytEnter === "E" ? -90 : 90,
                id: "YTDIR-" + this.blockName,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
        else if (this.blockItem.ytPos === "E") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: this.blockGap +
                        (this.viewDir === type_1.ViewDirection.Side
                            ? this.blockItem.maxBay
                            : this.blockItem.maxRow) *
                            (slotWidth + this.slotProps.slotGap),
                    y: this.blockGap +
                        this.blockItem.maxTier *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5 +
                        this.ytInfo.size.height,
                },
                rotate: this.blockItem.ytEnter === "E" ? 90 : -90,
                id: "YTDIR-" + this.blockName,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
    }
    addEquipment() {
        const equipment = new index_1.Component.Equipment({
            stackInfo: undefined,
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.originalSize.width,
                height: this.originalSize.height,
            },
            fill: {
                isEnabled: false,
                color: "#000000",
            },
            stroke: {
                width: 0,
                color: "#000000",
            },
        });
        this.appendChild(equipment);
        const equipment0 = new path_1.Path.Equipment0({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.originalSize.width,
                height: this.originalSize.height,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        equipment.appendChild(equipment0);
        return equipment;
    }
    addBlockNameText() {
        var _a, _b, _c;
        const blockNameText = new path_1.Path.Text({
            font: {
                size: 12,
            },
            maxWidth: 0,
            position: {
                x: 20,
                y: 7,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.blockName + "-" + ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : (_c = this.data) === null || _c === void 0 ? void 0 : _c.name2),
            fill: { color: "#000000" },
        });
        this.appendChild(blockNameText);
    }
    findSlotById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof slot_1.Slot && child.id === id)
                return child;
        }
    }
    getSlot(blockName, bayRow1, bayRow2, tier) {
        return this.findSlotById(blockName + "-" + bayRow1 + "-" + bayRow2 + "-" + tier);
    }
    findContainerById(id) {
        let containers = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                containers.push(child);
            }
        }
        return containers;
    }
    // Tgl 추가 method (MA.YANG)
    findContainerByContainerNo(id, containerNo) {
        let containers = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id && child.containerBayItem.containerNo == containerNo) {
                containers.push(child);
            }
        }
        return containers;
    }
    removeContainer(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                child.parent = undefined;
                this.children.splice(i, 1);
                break;
            }
        }
    }
    // containerNo로 container를 remove 합니다
    // Tgl 추가 method (MA.YANG)
    removeSelectedContainer(id, containerNo) {
        for (let i = this.children.length - 1; i >= 0; i--) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.containerBayItem.containerNo === containerNo && child.id === id) {
                this.children.splice(i, 1);
                break;
            }
        }
    }
    setIsVisibleAllContainers(isVisible) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container) {
                child.isVisible = isVisible;
            }
        }
    }
    removeAllContainers() {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container) {
                child.parent = undefined;
                this.children.splice(i, 1);
            }
        }
    }
    mouseMoveEvent(e) {
        if (!this.isEnabledLockToolTip)
            return;
        let found = false;
        for (let i = 0; i < this.lockRects.length; i++) {
            const rect = this.lockRects[i];
            if (rect.isPointInDrawArea(e)) {
                found = true;
            }
        }
        // console.log(found);
        if (found)
            this.mouseoverProcess(e);
    }
}
exports.BayBlock = BayBlock;


/***/ }),

/***/ "./src/component/berthItem.ts":
/*!************************************!*\
  !*** ./src/component/berthItem.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BerthItem = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class BerthItem extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.startX = props.startX;
        this.berthName = props.berthName;
        this.index = props.index;
        this.depth = props.depth;
        this.height = props.height;
        this.length = props.length;
        this.width = props.width;
        this.group = props.group;
        this.berthId = props.berthId;
        this.position = props.position;
        this.deg = props.deg;
        this.berthType = props.berthType;
        this.yardID = props.yardID;
        this.endBerth = props.endBerth;
        this.isEndBerth = props.isEndBerth;
        this.endBerthLeft = props.endBerthLeft;
        this.endBerthRight = props.endBerthRight;
        this.overhanging = props.overhanging;
        this.isOverhanging = props.isOverhanging;
        this.overhangingLeft = props.overhangingLeft;
        this.overhangingRight = props.overhangingRight;
        this.vesselType = props.vesselType;
        this.overlapping = props.overlapping;
        this.bondCode = props.bondCode;
        this.seaPos = props.seaPos;
        this.fore_color = props.fore_color;
        this.foreColorInt = props.foreColorInt;
        this.back_color = props.back_color;
        this.backColorInt = props.backColorInt;
        this.berthVesselTypSourceList = props.berthVesselTypSourceList;
        this.berthOverlappingSourceList = props.berthOverlappingSourceList;
        this.berthVesselTypeList = props.berthVesselTypeList;
        this.berthOverlappingList = props.berthOverlappingList;
        this.bittItemList = props.bittItemList;
        this.fenderItemList = props.fenderItemList;
        this.maxLaneNo = props.maxLaneNo;
        this.berthLaneItemList = props.berthLaneItemList;
        this.key = props.key;
        this.addBerthRect();
        this.addBerthText();
    }
    addBerthRect() {
        const rect = new path_1.Path.Rect({
            size: this.size,
            position: {
                x: 0,
                y: 0,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(rect);
    }
    addBerthText() {
        let berthText = new path_1.Path.Text({
            position: {
                x: this.length / 2 + this.berthName.length * 3,
                y: this.size.height,
            },
            size: { width: 1, height: 1 },
            text: this.berthName,
            // rotate: -this.rotate,
            fill: { color: "#000000" },
            font: {
                size: 10,
            },
        });
        this.appendChild(berthText);
    }
}
exports.BerthItem = BerthItem;


/***/ }),

/***/ "./src/component/berthItem4qc.ts":
/*!***************************************!*\
  !*** ./src/component/berthItem4qc.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BerthItem4qc = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class BerthItem4qc extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.startX = props.startX;
        this.berthName = props.berthName;
        this.index = props.index;
        this.depth = props.depth;
        this.height = props.height;
        this.length = props.length;
        this.width = props.width;
        this.group = props.group;
        this.berthId = props.berthId;
        this.position = props.position;
        this.deg = props.deg;
        this.berthType = props.berthType;
        this.yardID = props.yardID;
        this.endBerth = props.endBerth;
        this.isEndBerth = props.isEndBerth;
        this.endBerthLeft = props.endBerthLeft;
        this.endBerthRight = props.endBerthRight;
        this.overhanging = props.overhanging;
        this.isOverhanging = props.isOverhanging;
        this.overhangingLeft = props.overhangingLeft;
        this.overhangingRight = props.overhangingRight;
        this.vesselType = props.vesselType;
        this.overlapping = props.overlapping;
        this.bondCode = props.bondCode;
        this.seaPos = props.seaPos;
        this.fore_color = props.fore_color;
        this.foreColorInt = props.foreColorInt;
        this.back_color = props.back_color;
        this.backColorInt = props.backColorInt;
        this.berthVesselTypSourceList = props.berthVesselTypSourceList;
        this.berthOverlappingSourceList = props.berthOverlappingSourceList;
        this.berthVesselTypeList = props.berthVesselTypeList;
        this.berthOverlappingList = props.berthOverlappingList;
        this.bittItemList = props.bittItemList;
        this.fenderItemList = props.fenderItemList;
        this.maxLaneNo = props.maxLaneNo;
        this.berthLaneItemList = props.berthLaneItemList;
        this.key = props.key;
        this.addBerthRect();
        this.addBerthText();
    }
    addBerthRect() {
        const rect = new path_1.Path.Rect({
            size: this.size,
            position: {
                x: 0,
                y: 0,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFA0",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(rect);
    }
    addBerthText() {
        let berthText = new path_1.Path.Text({
            position: {
                x: this.size.width / 2,
                y: 4,
            },
            size: { width: 1, height: 1 },
            text: this.berthName,
            fill: { color: "#000000" },
            font: {
                size: 10,
            },
        });
        this.appendChild(berthText);
    }
}
exports.BerthItem4qc = BerthItem4qc;


/***/ }),

/***/ "./src/component/berthVessel.ts":
/*!**************************************!*\
  !*** ./src/component/berthVessel.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BerthVessel = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const rect_1 = __webpack_require__(/*! ../path/rect */ "./src/path/rect.ts");
const vesselOutline_1 = __webpack_require__(/*! ../path/vesselOutline */ "./src/path/vesselOutline.ts");
const vesselDeckHouse_1 = __webpack_require__(/*! ../path/vesselDeckHouse */ "./src/path/vesselDeckHouse.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const lineDash_1 = __webpack_require__(/*! ../path/lineDash */ "./src/path/lineDash.ts");
const text_1 = __webpack_require__(/*! ../path/text */ "./src/path/text.ts");
class BerthVessel extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.hatchBayPositions = {};
        this.data = props.data;
        this.vesselInnerPadding = (_a = props.vesselInnerPadding) !== null && _a !== void 0 ? _a : {
            fore: 5,
            atf: 5,
            top: 2,
            bottom: 2,
        };
        this.bowWidth = (_b = props.bowWidth) !== null && _b !== void 0 ? _b : 50;
        this.hatchGap = (_c = props.hatchGap) !== null && _c !== void 0 ? _c : 1;
        this.stackInfo = {
            isEnabled: false,
        };
        this.setPosition({ x: props.data.fromPosition, y: this.position.y });
        if (this.data.alongSide === 0) {
            this.setPosition({
                x: this.originalPosition.x + this.data.vesselParticular.loa,
                y: this.originalPosition.y + this.data.vesselParticular.width,
            });
            this.rotate = 180;
        }
        this.setSize({
            width: this.data.vesselParticular.loa,
            height: this.data.vesselParticular.width,
        });
        const hatchSize = {
            width: (this.data.vesselParticular.loa -
                this.vesselInnerPadding.atf -
                this.vesselInnerPadding.fore) /
                (this.data.vesselParticular.maxHatchNo + 1) -
                this.hatchGap,
            height: this.data.vesselParticular.width -
                this.vesselInnerPadding.top -
                this.vesselInnerPadding.bottom,
        };
        if (this.data.vesselParticular.width > 0) {
            this.addVesselOutLine(hatchSize);
            this.drawVesselHatchsAndDeckHouse(hatchSize);
            this.addVesselName();
        }
        this.stroke = {
            width: 0,
            color: "#000000",
        };
        this.fill = {
            isEnabled: false,
        };
    }
    addVesselOutLine(hatchSize) {
        //this.data.alongSide = 0; // port
        const vesselOutlne = new vesselOutline_1.VesselOutline({
            bowWidth: this.bowWidth,
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.data.vesselParticular.loa,
                height: this.data.vesselParticular.width,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                color: "#000000",
                width: 1,
            },
        });
        this.appendChild(vesselOutlne);
    }
    is20OnlyHatch(hatchIndex) {
        if (hatchIndex === 0)
            return false;
        try {
            if (this.data.vesselHatchs[hatchIndex].startBay ===
                this.data.vesselHatchs[hatchIndex].endBay &&
                this.is20Bay(this.data.vesselHatchs[hatchIndex].startBay))
                return true;
        }
        catch (e) { }
        return false;
    }
    is20Bay(bayIndex) {
        try {
            if (this.getBayNo(bayIndex) === 0)
                return true;
            if (bayIndex === 0 || bayIndex > this.data.vesselParticular.maxBays)
                return false;
            return this.getBayNo(bayIndex) % 2 > 0 ? true : false;
        }
        catch (e) {
            return false;
        }
    }
    is40OnlyHatch(hatchIndex) {
        if (hatchIndex === 0)
            return false;
        try {
            if (this.data.vesselHatchs[hatchIndex].startBay ===
                this.data.vesselHatchs[hatchIndex].endBay &&
                this.is40Bay(this.data.vesselHatchs[hatchIndex].startBay))
                return true;
        }
        catch (e) { }
        return false;
    }
    is40Bay(bayIndex) {
        try {
            if (this.getBayNo(bayIndex) === 0)
                return true;
            if (bayIndex === 0 || bayIndex > this.data.vesselParticular.maxBays)
                return false;
            return this.getBayNo(bayIndex) % 2 === 0 ? true : false;
        }
        catch (e) {
            return false;
        }
    }
    drawVesselHatchsAndDeckHouse(hatchSize) {
        var _a, _b, _c, _d, _e;
        let hatchIndex = 1;
        for (let i = 0; i < this.data.vesselParticular.maxHatchNo + 1; i++) {
            if (i === this.data.vesselParticular.deckHousePos) {
                /*
                            DeckHouse를 그린다
                            */
                const deckHouse = new vesselDeckHouse_1.VesselDeckHouse({
                    position: {
                        x: this.vesselInnerPadding.fore +
                            hatchSize.width * i +
                            this.hatchGap * i,
                        y: this.vesselInnerPadding.top,
                    },
                    size: {
                        width: hatchSize.width,
                        height: hatchSize.height,
                    },
                    fill: {
                        isEnabled: false,
                        color: "#DEDEDE",
                    },
                    stroke: {
                        width: 1,
                        color: "#000000",
                    },
                });
                this.appendChild(deckHouse);
            }
            else {
                let rectProps = {
                    position: {
                        x: this.vesselInnerPadding.fore +
                            hatchSize.width * i +
                            this.hatchGap * i,
                        y: this.vesselInnerPadding.top,
                    },
                    size: {
                        width: hatchSize.width,
                        height: hatchSize.height,
                    },
                    fill: {
                        isEnabled: false,
                        color: "#FF00FF",
                    },
                    stroke: {
                        color: "#000000",
                        width: 1,
                    },
                };
                if (i === 0) {
                    rectProps.position.y += rectProps.size.height / 4;
                    rectProps.size.height = rectProps.size.height / 2;
                }
                else if (i === 1) {
                    rectProps.position.y += rectProps.size.height / 6;
                    rectProps.size.height = (rectProps.size.height * 2) / 3;
                }
                try {
                    if (this.data.vesselHatchs[hatchIndex].startBay !==
                        this.data.vesselHatchs[hatchIndex].endBay) {
                        const hatchLine = new lineDash_1.LineDash({
                            position: {
                                x: rectProps.position.x + rectProps.size.width / 2,
                                y: rectProps.position.y,
                            },
                            size: {
                                width: 0,
                                height: rectProps.size.height,
                            },
                            // fill: {
                            //   isEnabled: true,
                            //   color: "#000000",
                            // },
                            stroke: {
                                width: 0.5,
                                color: "#000000",
                            },
                        });
                        this.appendChild(hatchLine);
                    }
                }
                catch (e) { }
                let rectHatch = new rect_1.Rect(rectProps);
                rectHatch.data = {};
                rectHatch.data.type = "hatch";
                rectHatch.data.bayNos = [];
                this.appendChild(rectHatch);
                if ((_a = this.data.vesselHatchs[hatchIndex]) === null || _a === void 0 ? void 0 : _a.startBay) {
                    if (this.data.vesselHatchs[hatchIndex].startBay ===
                        this.data.vesselHatchs[hatchIndex].endBay) {
                        const hatchTextNo = (_b = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].startBay]) === null || _b === void 0 ? void 0 : _b.no;
                        const hatchText = new path_1.Path.Text({
                            rotate: this.data.alongSide === 0 ? 180 : 0,
                            position: {
                                x: rectProps.position.x +
                                    (this.data.alongSide === 0
                                        ? rectProps.size.width / 2 + rectProps.size.width / 3
                                        : rectProps.size.width / 3),
                                y: this.data.alongSide === 0 ? this.size.height + 10 : -10,
                            },
                            size: {
                                width: rectProps.size.width,
                                height: rectProps.size.height,
                            },
                            text: hatchTextNo,
                            fill: {
                                isEnabled: true,
                                color: "#FF0000",
                            },
                            font: {
                                size: 6,
                            },
                        });
                        this.appendChild(hatchText);
                        rectHatch.data.bayNos.push(hatchTextNo);
                    }
                    else {
                        const hatchText1No = (_c = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].startBay]) === null || _c === void 0 ? void 0 : _c.no;
                        const hatchText1 = new path_1.Path.Text({
                            rotate: this.data.alongSide === 0 ? 180 : 0,
                            position: {
                                x: rectProps.position.x +
                                    (this.data.alongSide === 0 ? rectProps.size.width / 2 : 0),
                                y: this.data.alongSide === 0 ? this.size.height + 5 : -5,
                            },
                            size: {
                                width: rectProps.size.width / 2,
                                height: 10,
                            },
                            text: hatchText1No,
                            fill: {
                                isEnabled: true,
                                color: "#000000",
                            },
                            font: {
                                size: 6,
                            },
                        });
                        this.appendChild(hatchText1);
                        rectHatch.data.bayNos.push(hatchText1No);
                        const hatchText2No = (_d = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].endBay]) === null || _d === void 0 ? void 0 : _d.no;
                        const hatchText2 = new path_1.Path.Text({
                            rotate: this.data.alongSide === 0 ? 180 : 0,
                            position: {
                                x: rectProps.position.x +
                                    rectProps.size.width / 2 +
                                    (this.data.alongSide === 0 ? rectProps.size.width / 2 : 0),
                                y: this.data.alongSide === 0 ? this.size.height + 5 : -5,
                            },
                            size: {
                                width: rectProps.size.width / 2,
                                height: 10,
                            },
                            text: hatchText2No,
                            fill: {
                                isEnabled: true,
                                color: "#000000",
                            },
                            font: {
                                size: 6,
                            },
                        });
                        this.appendChild(hatchText2);
                        rectHatch.data.bayNos.push(hatchText2No);
                        const hatchTextNo = (_e = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].startBay + 1]) === null || _e === void 0 ? void 0 : _e.no;
                        const hatchText = new path_1.Path.Text({
                            rotate: this.data.alongSide === 0 ? 180 : 0,
                            position: {
                                x: rectProps.position.x +
                                    (this.data.alongSide === 0
                                        ? rectProps.size.width / 2 + rectProps.size.width / 3
                                        : rectProps.size.width / 3),
                                y: this.data.alongSide === 0 ? this.size.height + 10 : -10,
                            },
                            size: {
                                width: rectProps.size.width,
                                height: rectProps.size.height,
                            },
                            text: hatchTextNo,
                            fill: {
                                isEnabled: true,
                                color: "#FF0000",
                            },
                            font: {
                                size: 6,
                            },
                        });
                        this.appendChild(hatchText);
                        rectHatch.data.bayNos.push(hatchTextNo);
                    }
                    hatchIndex++;
                }
            }
        }
    }
    addVesselName() {
        const vesselText = new path_1.Path.Text({
            position: {
                x: this.data.alongSide === 0 ? this.size.width : 0,
                y: this.data.alongSide === 0 ? this.size.height + 20 : -20,
            },
            size: {
                width: this.size.width,
                height: this.size.height,
            },
            font: {
                size: 12,
                weight: "bold",
            },
            rotate: this.data.alongSide === 0 ? 180 : 0,
            text: this.data.vslCd +
                "-" +
                this.data.callSeq +
                "(" +
                (this.data.alongSide === 0 ? "S" : "P") +
                ")",
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            align: text_1.TextAlign.center,
        });
        this.appendChild(vesselText);
    }
    draw(isRefresh) {
        // this.ctx.setTransform(1, 0, 0, 0, -1, this.size.height);
        super.draw(isRefresh);
        this.calculateHatchBayPosition();
    }
    getBayNo(bayIndex) {
        let tempBayNo = -1;
        try {
            const hatchIndex = this.data.vesselBays[bayIndex].hatchIndex;
            const startBay = this.data.vesselHatchs[hatchIndex].startBay;
            const endBay = this.data.vesselHatchs[hatchIndex].endBay;
            const isIntType = Number.isInteger(Number(this.data.vesselBays[bayIndex].no));
            if (isIntType) {
                return bayIndex;
            }
            else {
                if (startBay - endBay !== 0) {
                    tempBayNo = 1;
                }
                else {
                    tempBayNo = 2;
                }
            }
        }
        catch (e) {
            tempBayNo = -1;
        }
        return tempBayNo;
    }
    findAllHatchRect() {
        let hatchRects = [];
        this.children.forEach((child) => {
            var _a;
            if (child instanceof rect_1.Rect && ((_a = child.data) === null || _a === void 0 ? void 0 : _a.type) === "hatch") {
                hatchRects.push(child);
            }
        });
        return hatchRects;
    }
    calculateHatchBayPosition() {
        this.children.forEach((child) => {
            var _a, _b, _c;
            if (child instanceof rect_1.Rect && ((_a = child.data) === null || _a === void 0 ? void 0 : _a.type) === "hatch") {
                const rectStartPos = child.areaPointAndLines.points[0].x <
                    child.areaPointAndLines.points[1].x
                    ? child.areaPointAndLines.points[0].x
                    : child.areaPointAndLines.points[1].x;
                const rectWidth = Math.abs(child.areaPointAndLines.points[0].x -
                    child.areaPointAndLines.points[1].x);
                if (((_b = child.data) === null || _b === void 0 ? void 0 : _b.bayNos.length) === 1) {
                    // @ts-ignore
                    this.hatchBayPositions[child.data.bayNos[0]] = {
                        x: rectStartPos,
                        width: rectWidth,
                    };
                }
                else if (((_c = child.data) === null || _c === void 0 ? void 0 : _c.bayNos.length) === 3) {
                    if (this.data.alongSide === 0) {
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[1]] = {
                            x: rectStartPos,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[0]] = {
                            x: rectStartPos + rectWidth / 2,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[2]] = {
                            x: rectStartPos,
                            width: rectWidth,
                        };
                    }
                    else {
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[0]] = {
                            x: rectStartPos,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[1]] = {
                            x: rectStartPos + rectWidth / 2,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[2]] = {
                            x: rectStartPos,
                            width: rectWidth,
                        };
                    }
                }
            }
        });
    }
}
exports.BerthVessel = BerthVessel;


/***/ }),

/***/ "./src/component/berthVessel4side.ts":
/*!*******************************************!*\
  !*** ./src/component/berthVessel4side.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BerthVessel4side = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const rect_1 = __webpack_require__(/*! ../path/rect */ "./src/path/rect.ts");
const vesselOutline4side_1 = __webpack_require__(/*! ../path/vesselOutline4side */ "./src/path/vesselOutline4side.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const text_1 = __webpack_require__(/*! ../path/text */ "./src/path/text.ts");
const vesselBow_1 = __webpack_require__(/*! ../path/vesselBow */ "./src/path/vesselBow.ts");
const vesselPropeller_1 = __webpack_require__(/*! ../path/vesselPropeller */ "./src/path/vesselPropeller.ts");
const vesselPropeller2_1 = __webpack_require__(/*! ../path/vesselPropeller2 */ "./src/path/vesselPropeller2.ts");
const vesselDeckHouse4side_1 = __webpack_require__(/*! ../path/vesselDeckHouse4side */ "./src/path/vesselDeckHouse4side.ts");
const vesselDeckHouse4side2_1 = __webpack_require__(/*! ../path/vesselDeckHouse4side2 */ "./src/path/vesselDeckHouse4side2.ts");
const vesselDeckHouse4side3_1 = __webpack_require__(/*! ../path/vesselDeckHouse4side3 */ "./src/path/vesselDeckHouse4side3.ts");
class BerthVessel4side extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super(props);
        this.hatchBayPositions = {};
        this.data = props.data;
        this.vesselInnerPadding = (_a = props.vesselInnerPadding) !== null && _a !== void 0 ? _a : {
            fore: 55,
            atf: 5,
            top: 2,
            bottom: 2,
        };
        this.bowWidth = (_b = props.bowWidth) !== null && _b !== void 0 ? _b : 50;
        this.hatchGap = (_c = props.hatchGap) !== null && _c !== void 0 ? _c : 1;
        this.stackInfo = {
            isEnabled: false,
        };
        this.bayHeight = (_d = props.bayHeight) !== null && _d !== void 0 ? _d : 5;
        this.lcgHeight = (_e = props.lcgHeight) !== null && _e !== void 0 ? _e : 50;
        this.bayCountByHatch = (_f = props.bayCountByHatch) !== null && _f !== void 0 ? _f : 2;
        this.hatchBorderColor = (_g = props.hatchBorderColor) !== null && _g !== void 0 ? _g : "#000000";
        this.only20HatchBorderColor = (_h = props.only20HatchBorderColor) !== null && _h !== void 0 ? _h : "#00FFFF";
        this.only40HatchBorderColor = (_j = props.only40HatchBorderColor) !== null && _j !== void 0 ? _j : "#FF0000";
        this.slimCellGuideHatchBorderColor =
            (_k = props.slimCellGuideHatchBorderColor) !== null && _k !== void 0 ? _k : "#00FF00";
        // this.data.alongSide = 0;
        if (this.data.alongSide === 0)
            this.setPosition({
                x: this.originalPosition.x * 2 + this.data.vesselParticular.loa,
                y: this.position.y,
            });
        this.isReflect = this.data.alongSide === 0;
        // if (this.data.alongSide === 0) {
        //   this.setPosition({
        //     x: this.originalPosition.x + this.data.vesselParticular.loa,
        //     y: this.originalPosition.y + this.data.vesselParticular.width,
        //   });
        //   this.rotate = 180;
        // }
        this.setSize({
            width: this.data.vesselParticular.loa,
            height: this.bayHeight * (this.data.vesselParticular.maxDeckTier + 1) +
                this.lcgHeight,
        });
        const hatchSize = {
            width: (this.data.vesselParticular.loa -
                this.vesselInnerPadding.atf -
                this.vesselInnerPadding.fore -
                this.bowWidth) /
                (this.data.vesselParticular.maxHatchNo + 1) -
                this.hatchGap,
            height: this.data.vesselParticular.width -
                this.vesselInnerPadding.top -
                this.vesselInnerPadding.bottom,
        };
        if (this.data.vesselParticular.width > 0) {
            this.addVesselOutLine(hatchSize);
            this.drawVesselHatchsAndDeckHouse(hatchSize);
            // this.addVesselName();
        }
        this.stroke = {
            width: 0,
            color: "#000000",
        };
        this.fill = {
            isEnabled: false,
        };
    }
    addVesselOutLine(hatchSize) {
        //this.data.alongSide = 0; // port
        const vesselOutlne = new vesselOutline4side_1.VesselOutline4side({
            bowWidth: this.bowWidth,
            lcgHeight: this.lcgHeight,
            position: {
                x: this.bowWidth,
                y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                    this.bayHeight,
            },
            size: {
                width: this.data.vesselParticular.loa,
                height: this.size.height -
                    ((this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                        this.bayHeight * 2) -
                    3,
            },
            stroke: {
                color: "#000000",
                width: 1,
            },
        });
        this.appendChild(vesselOutlne);
        const vesselBow = new vesselBow_1.VesselBow({
            bowWidth: this.bowWidth,
            lcgHeight: this.lcgHeight,
            position: {
                x: this.bowWidth,
                y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                    this.bayHeight,
            },
            size: {
                width: this.bowWidth,
                height: this.size.height -
                    ((this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                        this.bayHeight * 2) -
                    3,
            },
            stroke: {
                color: "#000000",
                width: 1,
            },
        });
        this.appendChild(vesselBow);
        const vesselPropeller = new vesselPropeller_1.VesselPropeller({
            position: {
                x: vesselOutlne.size.width +
                    this.bowWidth -
                    vesselOutlne.size.width / 30,
                y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                    this.bayHeight +
                    vesselOutlne.size.height,
            },
            size: {
                width: vesselOutlne.size.width / 30,
                height: vesselOutlne.size.height / 3,
            },
            stroke: {
                color: "#000000",
                width: 1,
            },
        });
        this.appendChild(vesselPropeller);
        const vesselPropeller2 = new vesselPropeller2_1.VesselPropeller2({
            position: {
                x: vesselOutlne.size.width +
                    this.bowWidth -
                    vesselOutlne.size.width / 30,
                y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                    this.bayHeight +
                    vesselOutlne.size.height,
            },
            size: {
                width: vesselOutlne.size.width / 30,
                height: vesselOutlne.size.height / 3,
            },
            fill: {
                isEnabled: true,
                color: "#8f8f1f",
            },
            stroke: {
                color: "#000000",
                width: 0,
            },
        });
        this.appendChild(vesselPropeller2);
    }
    is20OnlyHatch(hatchIndex) {
        if (hatchIndex === 0)
            return false;
        try {
            if (this.data.vesselHatchs[hatchIndex].startBay ===
                this.data.vesselHatchs[hatchIndex].endBay &&
                this.is20Bay(this.data.vesselHatchs[hatchIndex].startBay))
                return true;
        }
        catch (e) { }
        return false;
    }
    is20Bay(bayIndex) {
        try {
            if (this.getBayNo(bayIndex) === 0)
                return true;
            if (bayIndex === 0 || bayIndex > this.data.vesselParticular.maxBays)
                return false;
            return this.getBayNo(bayIndex) % 2 > 0 ? true : false;
        }
        catch (e) {
            return false;
        }
    }
    is40OnlyHatch(hatchIndex) {
        if (hatchIndex === 0)
            return false;
        try {
            if (this.data.vesselHatchs[hatchIndex].startBay ===
                this.data.vesselHatchs[hatchIndex].endBay &&
                this.is40Bay(this.data.vesselHatchs[hatchIndex].startBay))
                return true;
        }
        catch (e) { }
        return false;
    }
    is40Bay(bayIndex) {
        try {
            if (this.getBayNo(bayIndex) === 0)
                return true;
            if (bayIndex === 0 || bayIndex > this.data.vesselParticular.maxBays)
                return false;
            return this.getBayNo(bayIndex) % 2 === 0 ? true : false;
        }
        catch (e) {
            return false;
        }
    }
    drawVesselHatchsAndDeckHouse(hatchSize) {
        var _a, _b, _c, _d, _e;
        let hatchIndex = 1;
        for (let i = 0; i < this.data.vesselParticular.maxHatchNo + 1; i++) {
            const lcgText = new path_1.Path.Text({
                text: this.data.vesselBays[hatchIndex].DeckLCG,
                position: {
                    x: this.bowWidth +
                        this.vesselInnerPadding.fore +
                        hatchSize.width * i +
                        this.hatchGap * i +
                        (this.data.alongSide === 0 ? hatchSize.width : 0),
                    y: this.size.height - this.lcgHeight / 3,
                },
                font: {
                    size: 8,
                },
                fill: {
                    isEnabled: true,
                    color: "#000000",
                },
                size: {
                    width: hatchSize.width,
                    height: this.bayHeight * this.data.vesselParticular.maxDeckTier,
                },
                isReflect: this.data.alongSide === 0,
            });
            this.appendChild(lcgText);
            if (i === this.data.vesselParticular.deckHousePos) {
                /*
                DeckHouse를 그린다
                */
                // const deckHouse = new VesselDeckHouse({
                //   position: {
                //     x:
                //       this.vesselInnerPadding.fore +
                //       hatchSize.width * i +
                //       this.hatchGap * i,
                //     y: this.vesselInnerPadding.top,
                //   },
                //   size: {
                //     width: hatchSize.width,
                //     height: hatchSize.height,
                //   },
                //   fill: {
                //     isEnabled: true,
                //     color: "#DEDEDE",
                //   },
                //   stroke: {
                //     width: 1,
                //     color: "#000000",
                //   },
                // });
                //
                // this.appendChild(deckHouse);
                const vesselDeckHouse = new vesselDeckHouse4side_1.VesselDeckHouse4side({
                    position: {
                        x: this.vesselInnerPadding.fore +
                            hatchSize.width * i +
                            this.hatchGap * i +
                            this.bowWidth,
                        y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                            this.bayHeight,
                    },
                    size: {
                        width: hatchSize.width,
                        height: hatchSize.height * 1.5,
                    },
                    fill: {
                        isEnabled: false,
                    },
                    stroke: {
                        color: "#000000",
                        width: 1,
                    },
                });
                this.appendChild(vesselDeckHouse);
                const vesselDeckHouse2 = new vesselDeckHouse4side2_1.VesselDeckHouse4side2({
                    position: {
                        x: this.vesselInnerPadding.fore +
                            hatchSize.width * i +
                            this.hatchGap * i +
                            this.bowWidth,
                        y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                            this.bayHeight,
                    },
                    size: {
                        width: hatchSize.width,
                        height: hatchSize.height * 1.5,
                    },
                    fill: {
                        isEnabled: true,
                        color: "#FF0000",
                    },
                    stroke: {
                        color: "#FF0000",
                        width: 1,
                    },
                });
                this.appendChild(vesselDeckHouse2);
                const vesselDeckHouse3 = new vesselDeckHouse4side3_1.VesselDeckHouse4side3({
                    position: {
                        x: this.vesselInnerPadding.fore +
                            hatchSize.width * i +
                            this.hatchGap * i +
                            this.bowWidth,
                        y: (this.bayHeight * this.data.vesselParticular.maxDeckTier) / 2 +
                            this.bayHeight,
                    },
                    size: {
                        width: hatchSize.width,
                        height: hatchSize.height * 1.5,
                    },
                    fill: {
                        isEnabled: false,
                    },
                    stroke: {
                        color: "#939393",
                        width: 1,
                    },
                });
                this.appendChild(vesselDeckHouse3);
            }
            else {
                let rectProps = {
                    position: {
                        x: this.bowWidth +
                            this.vesselInnerPadding.fore +
                            hatchSize.width * i +
                            this.hatchGap * i,
                        y: 0,
                    },
                    size: {
                        width: hatchSize.width,
                        height: this.bayHeight * this.data.vesselParticular.maxDeckTier,
                    },
                    fill: {
                        isEnabled: false,
                        color: "#FF00FF",
                    },
                    stroke: {
                        color: "#000000",
                        width: 0,
                    },
                };
                // if (i === 0) {
                //   rectProps.position.y += rectProps.size.height / 4;
                //   rectProps.size.height = rectProps.size.height / 2;
                // } else if (i === 1) {
                //   rectProps.position.y += rectProps.size.height / 6;
                //   rectProps.size.height = (rectProps.size.height * 2) / 3;
                // }
                // try {
                //   if (
                //     this.data.vesselHatchs[hatchIndex].startBay !==
                //     this.data.vesselHatchs[hatchIndex].endBay
                //   ) {
                //     const hatchLine = new LineDash({
                //       position: {
                //         x: rectProps.position.x + rectProps.size.width / 2,
                //         y: rectProps.position.y,
                //       },
                //       size: {
                //         width: 0,
                //         height: rectProps.size.height,
                //       },
                //       // fill: {
                //       //   isEnabled: true,
                //       //   color: "#000000",
                //       // },
                //
                //       stroke: {
                //         width: 0.5,
                //         color: "#000000",
                //       },
                //     });
                //     this.appendChild(hatchLine);
                //   }
                // } catch (e) {}
                let rectHatch = new rect_1.Rect(rectProps);
                rectHatch.data = {};
                rectHatch.data.type = "hatch";
                rectHatch.data.bayNos = [];
                this.appendChild(rectHatch);
                if ((_a = this.data.vesselHatchs[hatchIndex]) === null || _a === void 0 ? void 0 : _a.startBay) {
                    if (this.data.vesselHatchs[hatchIndex].startBay ===
                        this.data.vesselHatchs[hatchIndex].endBay) {
                        const hatchTextNo = (_b = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].startBay]) === null || _b === void 0 ? void 0 : _b.no;
                        const hatchText = new path_1.Path.Text({
                            position: {
                                x: rectProps.position.x +
                                    rectProps.size.width / 3 +
                                    (this.data.alongSide === 0 ? 10 : 0),
                                y: -10,
                            },
                            size: {
                                width: rectProps.size.width,
                                height: rectProps.size.height,
                            },
                            text: hatchTextNo,
                            fill: {
                                isEnabled: true,
                                color: "#FF0000",
                            },
                            font: {
                                size: 6,
                            },
                            isReflect: this.data.alongSide === 0,
                        });
                        this.appendChild(hatchText);
                        rectHatch.data.bayNos.push(hatchTextNo);
                    }
                    else {
                        const hatchText1No = (_c = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].startBay]) === null || _c === void 0 ? void 0 : _c.no;
                        const hatchText1 = new path_1.Path.Text({
                            position: {
                                x: rectProps.position.x +
                                    5 +
                                    (this.data.alongSide === 0 ? 10 : 0),
                                y: -5,
                            },
                            size: {
                                width: rectProps.size.width / 2,
                                height: 10,
                            },
                            text: hatchText1No,
                            fill: {
                                isEnabled: true,
                                color: "#000000",
                            },
                            font: {
                                size: 6,
                            },
                            isReflect: this.data.alongSide === 0,
                        });
                        this.appendChild(hatchText1);
                        rectHatch.data.bayNos.push(hatchText1No);
                        const hatchText2No = (_d = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].endBay]) === null || _d === void 0 ? void 0 : _d.no;
                        const hatchText2 = new path_1.Path.Text({
                            position: {
                                x: rectProps.position.x +
                                    rectProps.size.width / 2 +
                                    (this.data.alongSide === 0 ? 10 : 0),
                                y: -5,
                            },
                            size: {
                                width: rectProps.size.width / 2,
                                height: 10,
                            },
                            text: hatchText2No,
                            fill: {
                                isEnabled: true,
                                color: "#000000",
                            },
                            font: {
                                size: 6,
                            },
                            isReflect: this.data.alongSide === 0,
                        });
                        this.appendChild(hatchText2);
                        rectHatch.data.bayNos.push(hatchText2No);
                        const hatchTextNo = (_e = this.data.vesselBays[this.data.vesselHatchs[hatchIndex].startBay + 1]) === null || _e === void 0 ? void 0 : _e.no;
                        const hatchText = new path_1.Path.Text({
                            position: {
                                x: rectProps.position.x +
                                    rectProps.size.width / 3 +
                                    (this.data.alongSide === 0 ? 10 : 0),
                                y: -10,
                            },
                            size: {
                                width: rectProps.size.width,
                                height: rectProps.size.height,
                            },
                            text: hatchTextNo,
                            fill: {
                                isEnabled: true,
                                color: "#FF0000",
                            },
                            font: {
                                size: 6,
                            },
                            isReflect: this.data.alongSide === 0,
                        });
                        this.appendChild(hatchText);
                        rectHatch.data.bayNos.push(hatchTextNo);
                    }
                    this.drawDeck(hatchIndex, rectProps, rectHatch, this.bayHeight);
                    this.drawHold(hatchIndex, rectProps, rectHatch, this.bayHeight);
                    hatchIndex++;
                }
            }
        }
    }
    isCPO(bayIndex, tierIndex) {
        for (let row = this.data.vesselParticular.portRowWidth; row <= this.data.vesselParticular.starRowWidth; row++) {
            if (this.data.vesselBays[bayIndex].slotItem.cpo[row][tierIndex] > 0) {
                return true;
            }
        }
        return false;
    }
    isVisibleBay(hatchIndex, bayIndex) {
        let startBay = this.data.vesselHatchs[hatchIndex].startBay;
        let endBay = this.data.vesselHatchs[hatchIndex].endBay;
        let bayNo = this.getBayNo(bayIndex);
        let isOverlap = true;
        if (bayIndex == startBay && startBay != endBay) {
            isOverlap = false;
        }
        if (startBay - endBay == 0) {
            isOverlap = false;
        }
        if (isOverlap && bayNo % 2 == 0)
            return false;
        return true;
    }
    isSlimCellGuide(bayIndex, tierIndex) {
        for (let row = this.data.vesselParticular.portRowWidth; row <= this.data.vesselParticular.starRowWidth; row++) {
            return this.data.vesselBays[bayIndex].slotItem.slimCellGuide[row][tierIndex];
        }
    }
    drawDeck(hatchIndex, rectProps, rectHatch, bayHeight) {
        let regTierDic = new Map();
        if (this.is20OnlyHatch(hatchIndex) || this.is40OnlyHatch(hatchIndex)) {
            let bay = this.data.vesselHatchs[hatchIndex].startBay;
            // borderColor = getbordercolor()???
            for (let tier = this.data.vesselBays[bay].holdTopTierIndex; tier <= this.data.vesselParticular.maxDeckTier; tier++) {
                if (this.isCPO(bay, tier)) {
                    let borderColor = this.is20OnlyHatch(hatchIndex)
                        ? this.only20HatchBorderColor
                        : this.only40HatchBorderColor;
                    const bayRect = new path_1.Path.Rect({
                        position: {
                            x: 0,
                            y: rectProps.size.height / 2 -
                                bayHeight *
                                    (tier - this.data.vesselBays[bay].holdTopTierIndex) -
                                bayHeight / 2,
                        },
                        size: {
                            width: rectProps.size.width,
                            height: bayHeight,
                        },
                        fill: {
                            isEnabled: false,
                        },
                        stroke: {
                            width: 1,
                            color: borderColor,
                        },
                    });
                    rectHatch.appendChild(bayRect);
                }
            }
        }
        else {
            for (let bay = this.data.vesselHatchs[hatchIndex].startBay; bay <= this.data.vesselHatchs[hatchIndex].endBay; bay++) {
                if (!this.isVisibleBay(hatchIndex, bay))
                    continue;
                for (let tier = this.data.vesselBays[bay].holdTopTierIndex; tier <= this.data.vesselParticular.maxDeckTier; tier++) {
                    if (this.isCPO(bay, tier)) {
                        let borderColor = this.hatchBorderColor;
                        if (this.isSlimCellGuide(hatchIndex, tier))
                            borderColor = this.slimCellGuideHatchBorderColor;
                        const bayRect = new path_1.Path.Rect({
                            position: {
                                x: (rectProps.size.width / this.bayCountByHatch) *
                                    (regTierDic.get(tier) === undefined
                                        ? 0
                                        : regTierDic.get(tier)),
                                y: rectProps.size.height / 2 -
                                    bayHeight *
                                        (tier - this.data.vesselBays[bay].holdTopTierIndex) -
                                    bayHeight / 2,
                            },
                            size: {
                                width: rectProps.size.width / this.bayCountByHatch,
                                height: bayHeight,
                            },
                            fill: {
                                isEnabled: false,
                            },
                            stroke: {
                                width: 1,
                                color: borderColor,
                            },
                        });
                        rectHatch.appendChild(bayRect);
                        if (regTierDic.get(tier) === undefined)
                            regTierDic.set(tier, 1);
                        else
                            regTierDic.set(tier, regTierDic.get(tier) + 1);
                    }
                }
            }
            if (this.data.vesselHatchs[hatchIndex].startBay !==
                this.data.vesselHatchs[hatchIndex].endBay &&
                this.is40Bay(this.data.vesselHatchs[hatchIndex].startBay + 1)) {
                const bay = this.data.vesselHatchs[hatchIndex].startBay + 1;
                for (let tier = this.data.vesselBays[bay].holdTopTierIndex; tier <= this.data.vesselParticular.maxDeckTier; tier++) {
                    if (this.isCPO(bay, tier) && regTierDic.get(tier) === undefined) {
                        let borderColor = this.hatchBorderColor;
                        const bayRect = new path_1.Path.Rect({
                            position: {
                                x: 0,
                                y: rectProps.size.height / 2 -
                                    bayHeight *
                                        (tier - this.data.vesselBays[bay].holdTopTierIndex) -
                                    bayHeight / 2,
                            },
                            size: {
                                width: rectProps.size.width,
                                height: bayHeight,
                            },
                            fill: {
                                isEnabled: false,
                            },
                            stroke: {
                                width: 1,
                                color: borderColor,
                            },
                        });
                        rectHatch.appendChild(bayRect);
                    }
                }
            }
            regTierDic.clear();
        }
    }
    drawHold(hatchIndex, rectProps, rectHatch, bayHeight) {
        var _a;
        let regTierDic = new Map();
        if (this.is20OnlyHatch(hatchIndex) || this.is40OnlyHatch(hatchIndex)) {
            let bay = this.data.vesselHatchs[hatchIndex].startBay;
            // borderColor = getbordercolor()???
            for (let tier = this.data.vesselBays[bay].holdTopTierIndex - 1; tier >= this.data.vesselParticular.maxHoldTier; tier--) {
                if (this.isCPO(bay, tier)) {
                    let borderColor = this.is20OnlyHatch(hatchIndex)
                        ? this.only20HatchBorderColor
                        : this.only40HatchBorderColor;
                    const bayRect = new path_1.Path.Rect({
                        position: {
                            x: 0,
                            y: rectProps.size.height / 2 +
                                bayHeight *
                                    (this.data.vesselBays[bay].holdTopTierIndex - tier) +
                                bayHeight / 2,
                        },
                        size: {
                            width: rectProps.size.width,
                            height: bayHeight,
                        },
                        fill: {
                            isEnabled: false,
                        },
                        stroke: {
                            width: 1,
                            color: borderColor,
                        },
                    });
                    rectHatch.appendChild(bayRect);
                }
            }
        }
        else {
            for (let bay = this.data.vesselHatchs[hatchIndex].startBay; bay <= this.data.vesselHatchs[hatchIndex].endBay; bay++) {
                if (!this.isVisibleBay(hatchIndex, bay))
                    continue;
                if ((_a = this.data.vesselBays[bay]) === null || _a === void 0 ? void 0 : _a.HoldTopTierIndex) {
                    for (let tier = this.data.vesselBays[bay].holdTopTierIndex - 1; tier >= this.data.vesselParticular.maxHoldTier; tier--) {
                        if (this.isCPO(bay, tier)) {
                            let borderColor = this.hatchBorderColor;
                            if (this.isSlimCellGuide(hatchIndex, tier))
                                borderColor = this.slimCellGuideHatchBorderColor;
                            const bayRect = new path_1.Path.Rect({
                                position: {
                                    x: (rectProps.size.width / this.bayCountByHatch) *
                                        (regTierDic.get(tier) === undefined
                                            ? 0
                                            : regTierDic.get(tier)),
                                    y: rectProps.size.height / 2 +
                                        bayHeight *
                                            (this.data.vesselBays[bay].holdTopTierIndex - tier) +
                                        bayHeight / 2,
                                },
                                size: {
                                    width: rectProps.size.width / this.bayCountByHatch,
                                    height: bayHeight,
                                },
                                fill: {
                                    isEnabled: false,
                                },
                                stroke: {
                                    width: 1,
                                    color: borderColor,
                                },
                            });
                            rectHatch.appendChild(bayRect);
                            if (regTierDic.get(tier) === undefined)
                                regTierDic.set(tier, 1);
                            else
                                regTierDic.set(tier, regTierDic.get(tier) + 1);
                        }
                    }
                }
            }
            if (this.data.vesselHatchs[hatchIndex].startBay !==
                this.data.vesselHatchs[hatchIndex].endBay &&
                this.is40Bay(this.data.vesselHatchs[hatchIndex].startBay + 1)) {
                let bay = this.data.vesselHatchs[hatchIndex].startBay + 1;
                for (let tier = this.data.vesselBays[bay].holdTopTierIndex - 1; tier >= this.data.vesselParticular.maxHoldTier; tier--) {
                    let borderColor = "#0000FF";
                    if (this.isCPO(bay, tier) && regTierDic.get(tier) === undefined) {
                        const bayRect = new path_1.Path.Rect({
                            position: {
                                x: 0,
                                y: rectProps.size.height / 2 +
                                    bayHeight *
                                        (this.data.vesselBays[bay].holdTopTierIndex - tier) +
                                    bayHeight / 2,
                            },
                            size: {
                                width: rectProps.size.width,
                                height: bayHeight,
                            },
                            fill: {
                                isEnabled: false,
                            },
                            stroke: {
                                width: 1,
                                color: borderColor,
                            },
                        });
                        rectHatch.appendChild(bayRect);
                    }
                }
            }
            regTierDic.clear();
        }
    }
    addVesselName() {
        const vesselText = new path_1.Path.Text({
            position: {
                x: 0,
                y: -30,
            },
            size: {
                width: this.size.width,
                height: this.size.height,
            },
            font: {
                size: 12,
                weight: "bold",
            },
            rotate: 0,
            text: this.data.vslCd + "-" + this.data.callSeq,
            // +
            //   "(" +
            //   (this.data.alongSide === 0 ? "S" : "P") +
            //   ")",
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            align: text_1.TextAlign.center,
        });
        this.appendChild(vesselText);
    }
    draw(isRefresh) {
        super.draw(isRefresh);
        this.calculateHatchBayPosition();
    }
    getBayNo(bayIndex) {
        let tempBayNo = -1;
        try {
            const hatchIndex = this.data.vesselBays[bayIndex].hatchIndex;
            const startBay = this.data.vesselHatchs[hatchIndex].startBay;
            const endBay = this.data.vesselHatchs[hatchIndex].endBay;
            const isIntType = Number.isInteger(Number(this.data.vesselBays[bayIndex].no));
            if (isIntType) {
                return Number(this.data.vesselBays[bayIndex].no);
            }
            else {
                if (startBay - endBay !== 0) {
                    tempBayNo = 1;
                }
                else {
                    tempBayNo = 2;
                }
            }
        }
        catch (e) {
            tempBayNo = -1;
        }
        return tempBayNo;
    }
    findAllHatchRect() {
        let hatchRects = [];
        this.children.forEach((child) => {
            var _a;
            if (child instanceof rect_1.Rect && ((_a = child.data) === null || _a === void 0 ? void 0 : _a.type) === "hatch") {
                hatchRects.push(child);
            }
        });
        return hatchRects;
    }
    calculateHatchBayPosition() {
        this.children.forEach((child) => {
            var _a, _b, _c;
            if (child instanceof rect_1.Rect && ((_a = child.data) === null || _a === void 0 ? void 0 : _a.type) === "hatch") {
                const rectStartPos = child.areaPointAndLines.points[0].x <
                    child.areaPointAndLines.points[1].x
                    ? child.areaPointAndLines.points[0].x
                    : child.areaPointAndLines.points[1].x;
                const rectWidth = Math.abs(child.areaPointAndLines.points[0].x -
                    child.areaPointAndLines.points[1].x);
                if (((_b = child.data) === null || _b === void 0 ? void 0 : _b.bayNos.length) === 1) {
                    // @ts-ignore
                    this.hatchBayPositions[child.data.bayNos[0]] = {
                        x: rectStartPos,
                        width: rectWidth,
                    };
                }
                else if (((_c = child.data) === null || _c === void 0 ? void 0 : _c.bayNos.length) === 3) {
                    if (this.data.alongSide === 0) {
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[1]] = {
                            x: rectStartPos,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[0]] = {
                            x: rectStartPos + rectWidth / 2,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[2]] = {
                            x: rectStartPos,
                            width: rectWidth,
                        };
                    }
                    else {
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[0]] = {
                            x: rectStartPos,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[1]] = {
                            x: rectStartPos + rectWidth / 2,
                            width: rectWidth / 2,
                        };
                        // @ts-ignore
                        this.hatchBayPositions[child.data.bayNos[2]] = {
                            x: rectStartPos,
                            width: rectWidth,
                        };
                    }
                }
            }
        });
    }
}
exports.BerthVessel4side = BerthVessel4side;


/***/ }),

/***/ "./src/component/bitItem.ts":
/*!**********************************!*\
  !*** ./src/component/bitItem.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*{
    "eX":0.0,
    "pX":0.0,
    "Name":"1",
    "Berth":"13",
    "Index":0,
    "X":56.0,
    "Y":2.5,
    "Position":0.0,
    "YardID":"",
    "Fore_color":"Black",
    "ForeColorInt":0,
    "Back_color":"White",
    "BackColorInt":16777215,
    "Key":"13/1"
},
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitItem = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class BitItem extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.eX = props.eX;
        this.pX = props.pX;
        this.bitName = props.bitName;
        this.berth = props.berth;
        this.index = props.index;
        this.position = props.position;
        this.bitPosition = props.bitPosition;
        this.yardID = props.yardID;
        this.foreColor = props.foreColor;
        this.ForeColorInt = props.ForeColorInt;
        this.backColor = props.backColor;
        this.backColorInt = props.backColorInt;
        this.Key = props.Key;
        this.addBitCircle();
        this.addBitText();
    }
    addBitCircle() {
        const circle = new path_1.Path.Circle({
            size: { width: 3, height: 3 },
            position: {
                x: -1.4,
                y: 0,
            },
            fill: {
                color: "#000000",
            },
        });
        this.appendChild(circle);
    }
    addBitText() {
        let berthText = new path_1.Path.Text({
            position: {
                x: -2,
                y: 4,
            },
            size: { width: 0.4, height: 0.4 },
            text: this.bitName,
            fill: { color: "#000000" },
            font: {
                size: 6,
            },
        });
        this.appendChild(berthText);
    }
}
exports.BitItem = BitItem;


/***/ }),

/***/ "./src/component/bitItem4qc.ts":
/*!*************************************!*\
  !*** ./src/component/bitItem4qc.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*{
    "eX":0.0,
    "pX":0.0,
    "Name":"1",
    "Berth":"13",
    "Index":0,
    "X":56.0,
    "Y":2.5,
    "Position":0.0,
    "YardID":"",
    "Fore_color":"Black",
    "ForeColorInt":0,
    "Back_color":"White",
    "BackColorInt":16777215,
    "Key":"13/1"
},
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitItem4qc = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class BitItem4qc extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.eX = props.eX;
        this.pX = props.pX;
        this.bitName = props.bitName;
        this.berth = props.berth;
        this.index = props.index;
        this.position = props.position;
        this.bitPosition = props.bitPosition;
        this.yardID = props.yardID;
        this.foreColor = props.foreColor;
        this.ForeColorInt = props.ForeColorInt;
        this.backColor = props.backColor;
        this.backColorInt = props.backColorInt;
        this.Key = props.Key;
        this.addBitCircle();
        this.addBitText();
        this.addBitXText();
    }
    addBitXText() {
        // const rect = new Path.Rect({
        //   size: this.size,
        //   position: {
        //     x: 0,
        //     y: 0,
        //   },
        //   fill: {
        //     isEnabled: true,
        //     color: "#FFFFA0",
        //   },
        //   stroke: {
        //     width: 1,
        //     color: "#000000",
        //   },
        // });
        //
        // this.appendChild(rect);
        let y = 3;
        if (Number(this.bitName) % 2 === 0)
            y = 10;
        let berthText = new path_1.Path.Text({
            position: {
                x: -1.6 * (this.bitName.length + 1),
                y: y,
            },
            size: { width: 0.4, height: 0.4 },
            text: String(this.position.x),
            fill: { color: "#000000" },
            font: {
                size: 6,
            },
        });
        this.appendChild(berthText);
    }
    addBitCircle() {
        const circle = new path_1.Path.Circle({
            size: { width: 3, height: 3 },
            position: {
                x: -1.6 + (this.bitName.length - 1) * 1.6,
                y: 27,
            },
            fill: {
                color: "#000000",
            },
        });
        this.appendChild(circle);
    }
    addBitText() {
        if (Number(this.bitName) % 2 === 1)
            return;
        let berthText = new path_1.Path.Text({
            position: {
                x: -2,
                y: 20,
            },
            size: { width: 0.4, height: 0.4 },
            text: this.bitName,
            fill: { color: "#000000" },
            font: {
                size: 6,
                weight: "bold",
            },
        });
        this.appendChild(berthText);
    }
}
exports.BitItem4qc = BitItem4qc;


/***/ }),

/***/ "./src/component/blockTop.ts":
/*!***********************************!*\
  !*** ./src/component/blockTop.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockTop = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const slot_1 = __webpack_require__(/*! ./slot */ "./src/component/slot.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const container_1 = __webpack_require__(/*! ./container */ "./src/component/container.ts");
const buttonClose_1 = __webpack_require__(/*! ./buttonClose */ "./src/component/buttonClose.ts");
const text_1 = __webpack_require__(/*! ../path/text */ "./src/path/text.ts");
class BlockTop extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a;
        super(props);
        this.layout = props.layout;
        this.slotProps = props.slotProps;
        this.blockItem = props.blockItem;
        this.blockGap = (_a = props.blockGap) !== null && _a !== void 0 ? _a : 20;
        this.blockName = props.blockName;
        this.data = props.data;
        this.ytInfo = props.ytInfo;
        this.isEnabledLockToolTip = props.isEnabledLockToolTip;
        this.isVisibleBlockNameText = props.isVisibleBlockNameText;
        this.isVisibleBayRowLocked = props.isVisibleBayRowLocked;
        this.isDisplayBayTextNames = props.isDisplayBayTextNames;
        this.hasCloseButton = props.hasCloseButton;
        this.lockRects = [];
        this.surface.addEventListener("mousemove", this.mouseMoveEvent.bind(this));
        this.bayRowOrder = props.bayRowOrder;
        if (props.hasCloseButton)
            this.addCloseButton();
        this.addSlot();
    }
    addSlot() {
        let slotWidth = this.slotProps.size.width;
        if (this.isVisibleBlockNameText)
            this.addBlockNameText();
        this.addYtDirectionPath(slotWidth);
        this.addRowText();
        if (this.isDisplayBayTextNames)
            this.addBayTextNames(slotWidth);
        else
            this.addBayText(slotWidth);
        this.containerCountList = Array.from(Array(this.data.maxBay), () => new Array(2).fill(0));
        this.addCountText(slotWidth);
        // this.addCposPath(slotWidth);
        this.addIsLockedPath();
        this.addSlots(slotWidth);
    }
    addSlots(slotWidth) {
        for (let bay = 0; bay < this.data.maxBay; bay++) {
            for (let row = 0; row < this.data.maxRow; row++) {
                const slot = new slot_1.Slot(Object.assign({}, this.slotProps));
                slot.setSize({
                    width: slotWidth,
                    height: slot.size.height,
                });
                slot.data = {
                    blockName: this.blockName,
                    bay: this.bayRowOrder.bay === type_1.OrderDirection.Asc
                        ? bay + 1
                        : this.data.maxBay - bay,
                    row: this.bayRowOrder.row === type_1.OrderDirection.Asc //.Desc
                        ? row + 1
                        : this.data.maxRow - row,
                };
                if (!!this.data.yslotUsageList) {
                    var index = this.data.yslotUsageList.findIndex((x) => x.bay === bay + 1 && x.row === row + 1);
                    if (index >= 0) {
                        var yslotUsageItem = this.data.yslotUsageList[index];
                        var dgCheck = yslotUsageItem.dgChk;
                        var rfCheck = yslotUsageItem.rfChk;
                        var akCheck = yslotUsageItem.akChk;
                        var tempTypeInfo = '';
                        if (!(dgCheck === "N" && rfCheck === "N" && akCheck === "N")) {
                            if (akCheck === "Y") {
                                tempTypeInfo = tempTypeInfo + "A";
                            }
                            if (dgCheck === "Y") {
                                tempTypeInfo = tempTypeInfo + "D";
                            }
                            if (rfCheck === "Y") {
                                tempTypeInfo = tempTypeInfo + "R";
                            }
                            slot.addSlotUsageText(tempTypeInfo);
                        }
                    }
                }
                slot.click = this.click;
                slot.select = this.select;
                slot.setPosition({
                    x: slot.position.x +
                        this.blockGap +
                        bay * (slot.size.width + this.slotProps.slotGap),
                    y: slot.position.y +
                        this.blockGap +
                        row * (slot.size.height + this.slotProps.slotGap),
                });
                // slot.markingType = MarkingTypes.CIRCLE;
                slot.parent = this;
                slot.id = this.blockName + "-" + slot.data.bay + "-" + slot.data.row;
                this.appendChild(slot);
            }
        }
    }
    addIsLockedPath() {
        if (this.isVisibleBayRowLocked) {
            if (this.blockItem.yardLocks) {
                for (let bay = 1; bay < this.blockItem.maxBay; bay++) {
                    for (let row = 1; row < this.blockItem.maxRow; row++) {
                        this.addBayLockBar(bay);
                        this.addRowLockBar(row);
                    }
                }
            }
        }
    }
    addBayLockBar(bay) {
        const slotHeight = this.slotProps.size.height;
        const rect = new path_1.Path.Rect({
            stroke: {
                color: "#FF0000",
                width: 1,
            },
            fill: {
                color: "#FF0000",
            },
            position: {
                x: this.blockGap - 2,
                y: this.blockGap +
                    bay * (this.slotProps.size.height + this.slotProps.slotGap),
            },
            size: {
                width: 2,
                height: slotHeight,
            },
        });
        this.appendChild(rect);
        this.lockRects.push(rect);
        this.hasLock = true;
    }
    addRowLockBar(row) {
        const slotWidth = this.slotProps.size.width;
        const rect = new path_1.Path.Rect({
            stroke: {
                color: "#FF0000",
                width: 1,
            },
            fill: {
                color: "#FF0000",
            },
            position: {
                x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
                y: this.blockGap +
                    this.data.maxRow *
                        (this.slotProps.size.height + this.slotProps.slotGap),
            },
            size: {
                width: slotWidth,
                height: 2,
            },
        });
        this.appendChild(rect);
        this.lockRects.push(rect);
        this.hasLock = true;
    }
    // private addCposPath(slotWidth: number) {
    //   for (let row = 1; row <= (this.data.maxRow || this.data.maxBay); row++) {
    //     let isCPOs = false;
    //     if (this.data.CPOs && this.data.CPOs[bay-1, row-1] === 0) {
    //       isCPOs = true;
    //     }
    //
    //     if (isCPOs) {
    //       const rect = new Path.Rect({
    //         stroke: {
    //           color: "#D3D3D3",
    //           width: 1,
    //         },
    //         fill: {
    //           color: "#D3D3D3"
    //         },
    //         position: {
    //           x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
    //           y: this.blockGap + this.data.maxTier * (this.slotProps.size.height + this.slotProps.slotGap)
    //         },
    //         size: {
    //           width: slotWidth,
    //           height: 2
    //         }
    //       });
    //       this.appendChild(rect);
    //     } else {
    //       const rect = new Path.Rect({
    //         stroke: {
    //           color: "#808080",
    //           width: 1,
    //         },
    //         fill: {
    //           color: "#808080"
    //         },
    //         position: {
    //           x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
    //           y: this.blockGap + this.data.maxTier * (this.slotProps.size.height + this.slotProps.slotGap)
    //         },
    //         size: {
    //           width: slotWidth,
    //           height: 2
    //         }
    //       });
    //       this.appendChild(rect);
    //     }
    //   }
    // }
    addBayText(slotWidth) {
        for (let bay = 1; bay <= this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxBay - bay + 1;
                const text = new path_1.Path.Text({
                    font: {
                        size: this.blockItem.bayList[bayNo].displayName.length > 3 ? 8 : 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockItem.bayList[bayNo].displayName.length > 3
                            ? this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                10
                            : this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                7,
                        y: 7, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
                    },
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: this.blockItem.bayList[bayNo].displayName,
                    fill: { color: "#000000" },
                });
                this.appendChild(text);
            }
        }
    }
    addBayTextNames(slotWidth) {
        for (let bay = 1; bay <= this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxBay - bay + 1;
                const text2 = new path_1.Path.Text({
                    font: {
                        size: this.blockItem.bayList[bayNo].name2.length > 3 ? 8 : 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockItem.bayList[bayNo].name2.length > 3
                            ? this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                10
                            : this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                7,
                        y: 9, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
                    },
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: this.blockItem.bayList[bayNo].name2,
                    fill: { color: "#000000" },
                });
                this.appendChild(text2);
                const text4 = new path_1.Path.Text({
                    font: {
                        size: this.blockItem.bayList[bayNo].name4.length > 3 ? 8 : 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockItem.bayList[bayNo].name4.length > 3
                            ? this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                10
                            : this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                7,
                        y: 0, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
                    },
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: this.blockItem.bayList[bayNo].name4,
                    fill: { color: "#000000" },
                });
                this.appendChild(text4);
            }
        }
    }
    addRowText() {
        for (let row = 1; row <= this.data.maxRow; row++) {
            let rowNo = row;
            if (this.bayRowOrder.row == type_1.OrderDirection.Asc) //.Desc)
                rowNo = this.data.maxRow - row + 1;
            const text = new path_1.Path.Text({
                font: {
                    size: 10,
                },
                maxWidth: 0,
                position: {
                    x: 12,
                    y: this.blockGap +
                        (this.blockItem.maxRow - row) *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5,
                },
                size: {
                    width: 6,
                    height: 6,
                },
                text: this.blockItem.rowList[rowNo].name,
                fill: { color: "#000000" },
                align: text_1.TextAlign.right, // SL.Choi
            });
            // this.blockItem.maxTier
            this.appendChild(text);
        }
    }
    addCountText(slotWidth) {
        var _a;
        for (let bay = 0; bay < this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxRow - bay + 1;
                const totalCount = this.containerCountList[bay][0] + this.containerCountList[bay][1] * 2;
                const rect = new path_1.Path.Rect({
                    position: {
                        x: this.blockGap +
                            (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                            slotWidth / 2 +
                            15,
                        y: this.blockGap +
                            this.data.maxRow *
                                (this.slotProps.size.height + this.slotProps.slotGap) +
                            3,
                    },
                    id: "COUNTTEXT_RECT-" + this.id,
                    size: {
                        width: this.containerCountList[bay][1] === 0
                            ? this.slotProps.size.width
                            : this.slotProps.size.width * 2 + this.slotProps.slotGap,
                        height: 0.2 * totalCount,
                    },
                    fill: {
                        isEnabled: true,
                        color: "#FFFF00",
                    },
                });
                this.appendChild(rect);
                const text = new path_1.Path.Text({
                    font: {
                        size: 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockGap +
                            (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                            slotWidth / 2 +
                            15,
                        y: this.blockGap +
                            this.data.maxRow *
                                (this.slotProps.size.height + this.slotProps.slotGap) +
                            3,
                    },
                    id: "COUNTTEXT-" + this.id,
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: ((_a = this.containerCountList[bay][0] !== 0) !== null && _a !== void 0 ? _a : this.containerCountList[bay][1] !== 0)
                        ? this.containerCountList[bay][0] +
                            "/" +
                            this.containerCountList[bay][1]
                        : "",
                    // text: this.containerCountList[bay][0]+"/"+this.containerCountList[bay][1],
                    fill: { color: "#000000" },
                });
                this.appendChild(text);
            }
        }
    }
    removeAllCountText() {
        for (let i = this.children.length - 1; i > -1; i--) {
            let child = this.children[i];
            if (child.id.indexOf("_COUNT_TEXT_") > -1) {
                this.children.splice(i, 1);
            }
        }
    }
    addYtDirectionPath(slotWidth) {
        const y = (this.bayRowOrder.row == type_1.OrderDirection.Desc && this.blockItem.ytPos === "S") ||
            (this.bayRowOrder.row == type_1.OrderDirection.Asc && this.blockItem.ytPos === "E")
            ? this.blockGap + this.blockItem.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 0.2
            : this.blockGap - 0.2;
        // this.blockGap +
        // this.blockItem.maxRow *
        //   (this.slotProps.size.height + this.slotProps.slotGap);
        const ytLine = new path_1.Path.Line({
            position: {
                x: this.blockGap,
                y: y,
            },
            size: {
                width: this.blockItem.maxBay * (slotWidth + this.slotProps.slotGap),
                height: 0,
            },
            stroke: {
                color: "rgba(200, 0, 0, 255)",
                width: 2,
            },
        });
        this.appendChild(ytLine);
        // if (this.blockItem.ytPos === "E") {
        if (this.blockItem.ytEnter === "E") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: 10,
                    y: y,
                },
                rotate: this.blockItem.ytEnter === "E" ? -90 : 90,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
            // } else if (this.blockItem.ytPos === "S") {
        }
        else if (this.blockItem.ytEnter === "S") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: this.blockGap +
                        this.blockItem.maxBay * (slotWidth + this.slotProps.slotGap),
                    y: y,
                },
                rotate: this.blockItem.ytEnter === "E" ? 90 : -90,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
    }
    addEquipment(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap +
            (bayNo - 1) * (slotWidth + this.slotProps.slotGap) +
            slotWidth / 2 -
            7;
        const equipment = new path_1.Path.Equipment0({
            position: {
                x: x,
                y: 0,
            },
            size: {
                width: this.originalSize.width - 0,
                height: this.originalSize.height - 0,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    addEquipment1(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new path_1.Path.Equipment1({
            position: {
                x: x + slotWidth / 2,
                y: 0,
            },
            size: {
                width: slotWidth,
                height: (this.slotProps.size.height + this.slotProps.slotGap) *
                    this.data.maxRow +
                    this.blockGap * 2,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    addEquipment2(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new path_1.Path.Equipment2({
            position: {
                x: x + slotWidth / 2,
                y: 0,
            },
            size: {
                width: slotWidth,
                height: (this.slotProps.size.height + this.slotProps.slotGap) *
                    this.data.maxRow +
                    this.blockGap * 2,
            },
            fill: {
                isEnabled: true,
                color: "#00FF00",
            },
            stroke: {
                width: 1,
                color: "#00FF00",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    addEquipment3(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new path_1.Path.Equipment3({
            position: {
                x: x + slotWidth / 2,
                y: 3, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
            },
            size: {
                width: slotWidth,
                height: this.blockGap - 3,
            },
            fill: {
                isEnabled: false,
                color: "#FF0000",
            },
            stroke: {
                width: 1,
                color: "#FF0000",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    addSpTopBlockBox(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new path_1.Path.Equipment3({
            data: bay,
            position: {
                x: x + slotWidth / 2,
                y: 0, //SL.Choi add
            },
            size: {
                width: slotWidth,
                height: this.blockGap, //SL.Choi add
            },
            fill: {
                isEnabled: false,
                color: "#FF0000",
            },
            stroke: {
                width: 1,
                color: "#FF0000",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    addYtEquipment(bay, sequence) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const ytEquipment = new path_1.Path.Rect({
            position: {
                x: x,
                y: this.blockGap +
                    this.blockItem.maxRow *
                        (this.slotProps.size.height + this.slotProps.slotGap) +
                    5 +
                    sequence * 15,
            },
            size: {
                width: slotWidth * 2,
                height: this.slotProps.size.height + this.slotProps.slotGap,
            },
            fill: {
                isEnabled: true,
                color: "#FF0000",
            },
            stroke: {
                width: 1,
                color: "#FFFF00",
            },
        });
        this.appendChild(ytEquipment);
        return ytEquipment;
    }
    addCloseButton() {
        const buttonClose = new buttonClose_1.ButtonClose({
            data: undefined,
            marking: undefined,
            position: { x: this.size.width - 10, y: 0 },
            size: { width: 10, height: 10 },
            slotGap: 0,
            stackInfo: undefined,
            fill: {
                color: "rgba(255, 0, 0, 1)",
            },
            stroke: {
                width: 1,
                color: "rgba(255, 255,255, 1)",
            },
            click: {
                isEnabled: true,
                func: () => {
                    console.log("11");
                },
            },
        });
        buttonClose.blockName = this.blockName;
        this.appendChild(buttonClose);
    }
    addBlockNameText() {
        const blockNameText = new path_1.Path.Text({
            font: {
                size: 12,
            },
            maxWidth: 0,
            position: {
                x: 4,
                y: 6,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.blockName,
            fill: { color: "#000000" },
        });
        this.appendChild(blockNameText);
    }
    findSlotById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof slot_1.Slot && child.id === id)
                return child;
        }
    }
    getSlot(blockName, bay, row) {
        return this.findSlotById(blockName + "-" + bay + "-" + row);
    }
    findContainerById(id) {
        let containers = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                containers.push(child);
            }
        }
        return containers;
    }
    removeContainer(id) {
        for (let i = this.children.length - 1; i >= 0; i--) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                this.children.splice(i, 1);
                break;
            }
        }
    }
    removeSelectedBox(id) {
        for (let i = this.children.length - 1; i >= 0; i--) {
            const child = this.children[i];
            if (child instanceof path_1.Path.Equipment3 && child.data === id) {
                this.children.splice(i, 1);
                break;
            }
        }
    }
    mouseMoveEvent(e) {
        if (!this.isEnabledLockToolTip)
            return;
        let found = false;
        for (let i = 0; i < this.lockRects.length; i++) {
            const rect = this.lockRects[i];
            if (rect.isPointInDrawArea(e)) {
                found = true;
            }
        }
        // console.log(found);
        if (found)
            this.mouseoverProcess(e);
    }
}
exports.BlockTop = BlockTop;


/***/ }),

/***/ "./src/component/blockTop4Layout.ts":
/*!******************************************!*\
  !*** ./src/component/blockTop4Layout.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockTop4Layout = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const slot_1 = __webpack_require__(/*! ./slot */ "./src/component/slot.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const container_1 = __webpack_require__(/*! ./container */ "./src/component/container.ts");
const buttonClose_1 = __webpack_require__(/*! ./buttonClose */ "./src/component/buttonClose.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/component/index.ts");
const countInfo_1 = __webpack_require__(/*! ./countInfo */ "./src/component/countInfo.ts");
class BlockTop4Layout extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a;
        super(props);
        this.layout = props.layout;
        this.slotProps = props.slotProps;
        this.blockItem = props.blockItem;
        this.blockGap = (_a = props.blockGap) !== null && _a !== void 0 ? _a : 0.4;
        this.horizontalGap = props.horizontalGap;
        this.verticalGap = props.verticalGap;
        this.blockName = props.blockName;
        this.data = props.data;
        this.ytInfo = props.ytInfo;
        this.isEnabledLockToolTip = props.isEnabledLockToolTip;
        this.isVisibleBlockNameText = props.isVisibleBlockNameText;
        this.isVisibleBayRowLocked = props.isVisibleBayRowLocked;
        this.isDisplayBayTextNames = props.isDisplayBayTextNames;
        this.isVisibleCountInfo = props.isVisibleCountInfo;
        this.hasCloseButton = props.hasCloseButton;
        this.lockRects = [];
        this.surface.addEventListener("mousemove", this.mouseMoveEvent.bind(this));
        this.bayRowOrder = props.bayRowOrder;
        if (props.hasCloseButton)
            this.addCloseButton();
        this.addSlot();
        if (this.isVisibleCountInfo)
            this.addCountInfo();
        this.addCountInfoText();
    }
    getCountInfo() {
        return this.countInfo;
    }
    addCountInfo() {
        this.countInfo = new countInfo_1.CountInfo({
            position: {
                x: -25,
                y: 10,
            },
            size: {
                width: 25,
                height: 20,
            },
            stackInfo: undefined,
        });
        this.appendChild(this.countInfo);
    }
    addCountInfoText() {
        if (!this.countText) {
            this.countText = new path_1.Path.Text({
                position: {
                    x: -10,
                    y: this.size.height - 10,
                },
                size: {
                    width: 25,
                    height: 20,
                },
                font: {
                    size: 10,
                },
                fill: {
                    isEnabled: true,
                    color: "#000000",
                },
                text: "",
                id: "CountInfoText-" + this.blockName,
            });
            this.appendChild(this.countText);
        }
    }
    setCountInfoText(text) {
        this.countText.text = text;
    }
    /**
     * 슬롯을 추가
     */
    addSlot() {
        let slotWidth = this.slotProps.size.width;
        if (this.isVisibleBlockNameText)
            this.addBlockNameText();
        if (this.isDisplayBayTextNames)
            this.addBayTextNames(slotWidth);
        else
            this.addBayText(slotWidth);
        // this.addRowText();
        this.generateContainerCountList();
        // this.addCountText(slotWidth);
        // this.addCposPath(slotWidth);
        // this.addIsLockedPath();
        this.addSlots(slotWidth);
        this.addYtDirectionPath(slotWidth);
    }
    /**
     *  추가된 컨테이너 개수를 센다
     * @private
     */
    generateContainerCountList() {
        this.containerCountList = Array.from(Array(this.data.maxBay), () => new Array(2).fill(0));
    }
    /**
     * 사이즈 크기로 maxBay, maxRow만큼 슬롯을 만든다
     * @param slotWidth 슬롯사이즈(폭)
     * @private
     */
    addSlots(slotWidth) {
        for (let bay = 0; bay < this.data.maxBay; bay++) {
            for (let row = 0; row < this.data.maxRow; row++) {
                const slot = new slot_1.Slot(Object.assign({}, this.slotProps, {
                    size: {
                        width: slotWidth - this.horizontalGap,
                        height: this.slotProps.size.height - this.verticalGap / 2,
                    },
                    position: {
                        x: this.blockGap +
                            this.horizontalGap / 2 +
                            bay * (this.slotProps.size.width + this.slotProps.slotGap),
                        y: this.blockGap +
                            this.verticalGap / 2 +
                            row * (this.slotProps.size.height + this.slotProps.slotGap),
                    },
                    data: {
                        blockName: this.blockName,
                        bay: this.bayRowOrder.bay === type_1.OrderDirection.Asc
                            ? bay + 1
                            : this.data.maxBay - bay,
                        row: this.bayRowOrder.row === type_1.OrderDirection.Asc //.Desc
                            ? row + 1
                            : this.data.maxRow - row,
                    },
                    click: this.click,
                    select: this.select,
                }));
                // slot.data = {
                //   blockName: this.blockName,
                //   bay:
                //     this.bayRowOrder.bay === OrderDirection.Asc
                //       ? bay + 1
                //       : this.data.maxBay - bay,
                //   row:
                //     this.bayRowOrder.row === OrderDirection.Desc
                //       ? row + 1
                //       : this.data.maxRow - row,
                // };
                // slot.click = this.click;
                // slot.select = this.select;
                // slot.setPosition({
                //   x:
                //     slot.position.x +
                //     this.blockGap +
                //     bay * (slot.size.width + this.slotProps.slotGap),
                //   y:
                //     slot.position.y +
                //     this.blockGap +
                //     row * (slot.size.height + this.slotProps.slotGap),
                // });
                // slot.markingType = MarkingTypes.CIRCLE;
                slot.parent = this;
                slot.id = this.blockName + "-" + slot.data.bay + "-" + slot.data.row;
                this.appendChild(slot);
            }
        }
    }
    /**
     * isLocked을 표시하기 위한 바를 추가한다.
     * @private
     */
    addIsLockedPath() {
        if (this.isVisibleBayRowLocked) {
            if (this.blockItem.yardLocks) {
                for (let bay = 1; bay < this.blockItem.maxBay; bay++) {
                    for (let row = 1; row < this.blockItem.maxRow; row++) {
                        this.addBayLockBar(bay);
                        this.addRowLockBar(row);
                    }
                }
            }
        }
    }
    /**
     * bayLock 상태를 표시하기 위한 오브젝트를 추가한다.
     * @param bay
     */
    addBayLockBar(bay) {
        const slotHeight = this.slotProps.size.height;
        const rect = new path_1.Path.Rect({
            stroke: {
                color: "#FF0000",
                width: 1,
            },
            fill: {
                color: "#FF0000",
            },
            position: {
                x: this.blockGap - 0.3,
                y: this.blockGap +
                    bay * (this.slotProps.size.height + this.slotProps.slotGap),
            },
            size: {
                width: 0.3,
                height: slotHeight,
            },
        });
        this.appendChild(rect);
        this.lockRects.push(rect);
        this.hasLock = true;
    }
    /**
     * RowLock상태를 표시하기 위한 오브젝트를 추가한다.
     * @param row
     */
    addRowLockBar(row) {
        const slotWidth = this.slotProps.size.width;
        const rect = new path_1.Path.Rect({
            stroke: {
                color: "#FF0000",
                width: 0.13,
            },
            fill: {
                color: "#FF0000",
            },
            position: {
                x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
                y: this.blockGap +
                    this.data.maxRow *
                        (this.slotProps.size.height + this.slotProps.slotGap),
            },
            size: {
                width: slotWidth,
                height: 0.3,
            },
        });
        this.appendChild(rect);
        this.lockRects.push(rect);
        this.hasLock = true;
    }
    // private addCposPath(slotWidth: number) {
    //   for (let row = 1; row <= (this.data.maxRow || this.data.maxBay); row++) {
    //     let isCPOs = false;
    //     if (this.data.CPOs && this.data.CPOs[bay-1, row-1] === 0) {
    //       isCPOs = true;
    //     }
    //
    //     if (isCPOs) {
    //       const rect = new Path.Rect({
    //         stroke: {
    //           color: "#D3D3D3",
    //           width: 1,
    //         },
    //         fill: {
    //           color: "#D3D3D3"
    //         },
    //         position: {
    //           x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
    //           y: this.blockGap + this.data.maxTier * (this.slotProps.size.height + this.slotProps.slotGap)
    //         },
    //         size: {
    //           width: slotWidth,
    //           height: 2
    //         }
    //       });
    //       this.appendChild(rect);
    //     } else {
    //       const rect = new Path.Rect({
    //         stroke: {
    //           color: "#808080",
    //           width: 1,
    //         },
    //         fill: {
    //           color: "#808080"
    //         },
    //         position: {
    //           x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
    //           y: this.blockGap + this.data.maxTier * (this.slotProps.size.height + this.slotProps.slotGap)
    //         },
    //         size: {
    //           width: slotWidth,
    //           height: 2
    //         }
    //       });
    //       this.appendChild(rect);
    //     }
    //   }
    // }
    /**
     * 베이넘버를 표시하는 텍스트를 추가한다
     * @param slotWidth 슬롯폭
     * @private
     */
    addBayText(slotWidth) {
        for (let bay = 1; bay <= this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxBay - bay + 1;
                const text = new path_1.Path.Text({
                    font: {
                        size: this.blockItem.bayList[bayNo].displayName.length > 3 ? 1.4 : 3,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockGap +
                            (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                            slotWidth / 2 -
                            1.4,
                        y: this.bayRowOrder.row
                            ? this.blockGap +
                                this.data.maxRow *
                                    (this.slotProps.size.height + this.slotProps.slotGap)
                            : this.blockItem.bayList[bayNo].displayName.length > 3
                                ? 0.3
                                : 0.3, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
                    },
                    size: {
                        width: 1,
                        height: 1,
                    },
                    text: this.blockItem.bayList[bayNo].displayName,
                    fill: { color: "#000000" },
                });
                this.appendChild(text);
            }
        }
    }
    addBayTextNames(slotWidth) {
        for (let bay = 1; bay <= this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxBay - bay + 1;
                const text2 = new path_1.Path.Text({
                    font: {
                        size: this.blockItem.bayList[bayNo].name2.length > 3 ? 8 : 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockItem.bayList[bayNo].name2.length > 3
                            ? this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                10
                            : this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                7,
                        y: 9, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
                    },
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: this.blockItem.bayList[bayNo].name2,
                    fill: { color: "#000000" },
                });
                this.appendChild(text2);
                const text4 = new path_1.Path.Text({
                    font: {
                        size: this.blockItem.bayList[bayNo].name4.length > 3 ? 8 : 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockItem.bayList[bayNo].name4.length > 3
                            ? this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                10
                            : this.blockGap +
                                (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                                slotWidth / 2 -
                                7,
                        y: 0, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
                    },
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: this.blockItem.bayList[bayNo].name4,
                    fill: { color: "#000000" },
                });
                this.appendChild(text4);
            }
        }
    }
    /**
     * Row넘버를 표시하기 위한 텍스트를 추가한다
     * @private
     */
    addRowText() {
        for (let row = 1; row <= this.data.maxRow; row++) {
            let rowNo = row;
            if (this.bayRowOrder.row == type_1.OrderDirection.Asc) //.Desc)
                rowNo = this.data.maxRow - row + 1;
            const text = new path_1.Path.Text({
                font: {
                    size: 3,
                },
                maxWidth: 0,
                position: {
                    x: -0,
                    y: this.blockGap +
                        (this.blockItem.maxRow - row) *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        0.7,
                },
                size: {
                    width: 0.8,
                    height: 0.8,
                },
                text: this.blockItem.rowList[rowNo].name,
                fill: { color: "#000000" },
            });
            // this.blockItem.maxTier
            this.appendChild(text);
        }
    }
    /**
     * 개수 표시를 위한 텍스트(레이아웃에서는 사용하지 않음)
     * @param slotWidth 슬롯폭
     */
    addCountText(slotWidth) {
        for (let bay = 0; bay < this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxRow - bay + 1;
                const text = new path_1.Path.Text({
                    font: {
                        size: 1.4,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockGap +
                            (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                            slotWidth / 2 +
                            2,
                        y: this.blockGap +
                            this.data.maxRow *
                                (this.slotProps.size.height + this.slotProps.slotGap) +
                            0.4,
                    },
                    size: {
                        width: 1,
                        height: 1,
                    },
                    text: this.containerCountList[bay][0] !== 0 ||
                        this.containerCountList[bay][1] !== 0
                        ? this.containerCountList[bay][0] +
                            "/" +
                            this.containerCountList[bay][1]
                        : "",
                    // text: this.containerCountList[bay][0]+"/"+this.containerCountList[bay][1],
                    fill: { color: "#000000" },
                    id: "_COUNT_TEXT_" + bay,
                });
                this.appendChild(text);
            }
        }
    }
    /**
     * 카운트를 표시하는 텍스트를 모두 제거한다
     */
    removeAllCountText() {
        for (let i = this.children.length - 1; i > -1; i--) {
            let child = this.children[i];
            if (child.id.indexOf("_COUNT_TEXT_") > -1) {
                this.children.splice(i, 1);
            }
        }
    }
    /**
     * YT 방향 표시
     * @param slotWidth
     * @private
     */
    addYtDirectionPath(slotWidth) {
        const y = (this.bayRowOrder.row == type_1.OrderDirection.Desc && this.blockItem.ytPos === "S") ||
            (this.bayRowOrder.row == type_1.OrderDirection.Asc && this.blockItem.ytPos === "E")
            ? this.blockGap + this.blockItem.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 0.2
            : this.blockGap - 0.2;
        const ytLine = new path_1.Path.Line({
            position: {
                x: this.blockGap,
                y: y,
            },
            size: {
                width: this.blockItem.maxBay * (slotWidth + this.slotProps.slotGap),
                height: 0,
            },
            stroke: {
                color: "rgba(200, 0, 0, 255)",
                width: 2,
            },
        });
        this.appendChild(ytLine);
        if (this.blockItem.ytEnter === "E") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: 3,
                    y: y,
                },
                rotate: this.blockItem.ytEnter === "E" ? -90 : 90,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
        else if (this.blockItem.ytEnter === "S") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: this.blockGap +
                        this.blockItem.maxBay * (slotWidth + this.slotProps.slotGap),
                    y: y,
                },
                rotate: this.blockItem.ytEnter === "E" ? 90 : -90,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
    }
    /**
     * 1번 타입 장비를 표시한다
     * @param bay 베이넘버
     * @param equipmentName 장비명
     */
    addEquipment1(bay, equipmentName) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new index_1.Component.Equipment1({
            stackInfo: { isEnabled: false },
            position: {
                x: x + slotWidth / 2,
                y: 0,
            },
            size: {
                width: slotWidth,
                height: (this.slotProps.size.height + this.slotProps.slotGap) *
                    this.data.maxRow +
                    this.blockGap * 2,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
            equipmentName: equipmentName,
        });
        this.appendChild(equipment);
        return equipment;
    }
    /**
     * 2번 타입 장비를 추가한다
     * @param bay 베이넘버
     */
    addEquipment2(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new path_1.Path.Equipment2({
            position: {
                x: x + slotWidth / 2,
                y: 0,
            },
            size: {
                width: slotWidth,
                height: (this.slotProps.size.height + this.slotProps.slotGap) *
                    this.data.maxRow +
                    this.blockGap * 2,
            },
            fill: {
                isEnabled: true,
                color: "#00FF00",
            },
            stroke: {
                width: 1,
                color: "#00FF00",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    /**
     * 3번 타입 장비를 추가한다
     * @param bay 베이넘버
     */
    addEquipment3(bay) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const equipment = new path_1.Path.Equipment3({
            position: {
                x: x + slotWidth / 2,
                y: 0, //this.blockGap + this.data.maxRow * (this.slotProps.size.height + this.slotProps.slotGap) + 3
            },
            size: {
                width: slotWidth,
                height: (this.slotProps.size.height) //this.blockGap - 3,
            },
            fill: {
                isEnabled: false,
                color: "#FF0000",
            },
            stroke: {
                width: 1,
                color: "#FF0000",
            },
        });
        this.appendChild(equipment);
        return equipment;
    }
    /**
     * YT장비를 추가한다
     * @param bay 베이넘버
     * @param sequence 순번(동일 베이에 2개 이상이 있는 경우 아래쪽에 표시된다)
     */
    addYtEquipment(bay, sequence) {
        let bayNo = bay;
        const slotWidth = this.slotProps.size.width;
        if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
            bayNo = this.data.maxBay - bay + 1;
        const x = this.blockGap + (bayNo - 1) * (slotWidth + this.slotProps.slotGap);
        const ytEquipment = new path_1.Path.Rect({
            position: {
                x: x,
                y: this.blockGap +
                    this.blockItem.maxRow *
                        (this.slotProps.size.height + this.slotProps.slotGap) +
                    5 +
                    sequence * 15,
            },
            size: {
                width: slotWidth * 2,
                height: this.slotProps.size.height + this.slotProps.slotGap,
            },
            fill: {
                isEnabled: true,
                color: "#FF0000",
            },
            stroke: {
                width: 0.14,
                color: "#FFFF00",
            },
        });
        this.appendChild(ytEquipment);
        return ytEquipment;
    }
    /**
     * 닫기 버튼을 추가한다.
     * @private
     */
    addCloseButton() {
        const buttonClose = new buttonClose_1.ButtonClose({
            data: undefined,
            marking: undefined,
            position: { x: this.size.width - 10, y: 0 },
            size: { width: 10, height: 10 },
            slotGap: 0,
            stackInfo: undefined,
            click: {
                func: () => {
                    console.log("11");
                },
            },
        });
        buttonClose.blockName = this.blockName;
        this.appendChild(buttonClose);
    }
    /**
     * 블록명을 표시한다
     * @private
     */
    addBlockNameText() {
        const blockNameText = new path_1.Path.Text({
            font: {
                size: 6,
            },
            maxWidth: 0,
            position: {
                x: -6,
                y: 4,
            },
            size: {
                width: 1,
                height: 1,
            },
            text: this.blockName,
            fill: { color: "#000000" },
        });
        this.appendChild(blockNameText);
    }
    /**
     * 슬롯을 아이디로 찾는다
     * @param id
     * @returns Slot
     */
    findSlotById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof slot_1.Slot && child.id === id)
                return child;
        }
    }
    /**
     * 슬롯을 블록명, 베이넘버, 로우넘버로 찾는다
     * @param blockName
     * @param bay
     * @param row
     */
    getSlot(blockName, bay, row) {
        return this.findSlotById(blockName + "-" + bay + "-" + row);
    }
    /**
     * 컨테이너를 아이디로 찾는다
     * @param id
     */
    findContainerById(id) {
        let containers = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                containers.push(child);
            }
        }
        return containers;
    }
    /**
     * 해당 아이디의 컨테이너를 제거한다
     * @param id
     */
    removeContainer(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                this.children.splice(i, 1);
                break;
            }
        }
    }
    /**
     * 락 상태의 툴팁을 표시하기 위해 마우스 이동 이벤트 처리
     * @param e
     */
    mouseMoveEvent(e) {
        if (!this.isEnabledLockToolTip)
            return;
        let found = false;
        for (let i = 0; i < this.lockRects.length; i++) {
            const rect = this.lockRects[i];
            if (rect.isPointInDrawArea(e)) {
                found = true;
            }
        }
        // console.log(found);
        if (found)
            this.mouseoverProcess(e);
    }
    calcuateSlotRect() {
        let minPos = {
            x: 999999,
            y: 999999,
        };
        let maxPos = {
            x: 0,
            y: 0,
        };
        this.children.forEach((child) => {
            if (child instanceof slot_1.Slot) {
                if (child.originalPosition.x < minPos.x)
                    minPos.x = child.originalPosition.x;
                if (child.originalPosition.y < minPos.y)
                    minPos.y = child.originalPosition.y;
                if (child.originalPosition.x + child.originalSize.width > maxPos.x)
                    maxPos.x = child.originalPosition.x + child.originalSize.width;
                if (child.originalPosition.y + child.originalSize.height > maxPos.y)
                    maxPos.y = child.originalPosition.y + child.originalSize.height;
            }
        });
        return {
            x: minPos.x,
            y: minPos.y,
            width: maxPos.x - minPos.x,
            height: maxPos.y - minPos.y,
        };
    }
    /**
     * 블록 선택 표시
     */
    checkSelected() {
        const area = this.calcuateSlotRect();
        const rect = new path_1.Path.Rect({
            position: {
                x: area.x,
                y: area.y,
            },
            size: {
                width: area.width,
                height: area.height,
            },
            fill: {
                isEnabled: true,
                color: this.select.color.selected,
            },
        });
        this.appendChild(rect);
        this.draw();
    }
}
exports.BlockTop4Layout = BlockTop4Layout;


/***/ }),

/***/ "./src/component/button.ts":
/*!*********************************!*\
  !*** ./src/component/button.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class Button extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.drawButton();
    }
    drawButton() {
        let xMark = new path_1.Path.XMark({
            size: this.size,
            fill: { color: "#000000" },
            stroke: { color: "#000000", width: 1 },
        });
        this.appendChild(xMark);
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/component/buttonClose.ts":
/*!**************************************!*\
  !*** ./src/component/buttonClose.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonClose = void 0;
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const button_1 = __webpack_require__(/*! ./button */ "./src/component/button.ts");
class ButtonClose extends button_1.Button {
    constructor(props) {
        super(props);
        this.drawButton();
    }
    drawButton() {
        let closeMark = new path_1.Path.closeMark({
            size: this.size,
            fill: this.fill,
            stroke: this.stroke,
        });
        this.appendChild(closeMark);
    }
}
exports.ButtonClose = ButtonClose;


/***/ }),

/***/ "./src/component/container.ts":
/*!************************************!*\
  !*** ./src/component/container.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const text_1 = __webpack_require__(/*! ../path/text */ "./src/path/text.ts");
class Container extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a;
        super(props);
        // this.click = {
        //   isEnabled: true,
        //     func: function(self: any) {
        //     // console.log(self);
        //   }
        // };
        //
        // this.select = {
        //   isEnabled: true,
        //     func: function(self: any) {
        //     // console.log(self);
        //   }
        // };
        this.containerBayItem = props.containerBayItem;
        this.textSizeMultiple = props.textSizeMultiple;
        this.isTopView = props.isTopView;
        this.stroke.color = "#000000";
        this.stroke.width = 0; //this.select.width+0;
        // this.stroke.width = this.select.width+2;
        this.fill.color = (_a = props.containerBayItem.fillColor) !== null && _a !== void 0 ? _a : "#FFFFFF";
        this.beforeDraw.isEnabled = true;
        this.beforeDraw.funcs.push(this.beforeDrawForSelect);
        // this.selectedColor = props.selectedColor;
    }
    // selectedColor: string;
    addSpContainerOutLine() {
        const rect = new path_1.Path.Rect({
            position: {
                x: this.containerBayItem.outerBorderMargin || 0,
                y: this.containerBayItem.outerBorderMargin || 0,
            },
            size: {
                width: this.originalSize.width -
                    (this.containerBayItem.outerBorderMargin || 0) * 2,
                height: this.originalSize.height -
                    (this.containerBayItem.outerBorderMargin || 0) * 2,
            },
            fill: {
                color: this.containerBayItem.fillColor,
            },
            stroke: {
                color: this.containerBayItem.outerBorderColor,
                width: this.containerBayItem.outerBorderWidth === undefined
                    ? 1
                    : this.containerBayItem.outerBorderWidth,
            },
        });
        rect.id = "ContainerOuterLine_" + this.id;
        this.appendChild(rect);
        return rect;
    }
    addSpDiamondLine() {
        const rect = new path_1.Path.Rect({
            position: {
                x: this.originalSize.width / 2,
                y: this.originalSize.height / 8,
            },
            size: {
                width: this.originalSize.width -
                    this.originalSize.width / 2,
                height: this.originalSize.height -
                    this.originalSize.height / 2,
            },
            rotate: 45,
            fill: {
                color: 'transparent',
            },
            stroke: {
                color: 'black',
                width: this.containerBayItem.outerBorderWidth === undefined
                    ? 1
                    : this.containerBayItem.outerBorderWidth,
            },
        });
        rect.id = "DiamondLine_" + this.id;
        this.appendChild(rect);
        return rect;
    }
    //SL.Choi add
    addSpAllPaths() {
        this.outerLine = this.addSpContainerOutLine();
        // this.addInnerLine();
        if (!this.isTopView && this.containerBayItem.visibleInfoText !== false) {
            //this.addContainerSlotText();
            const containerSize = this.originalSize.width > 20 ? 2 : 1;
            const margin = this.originalSize.width / 100 + 4;
            const leftMargin = margin / 2;
            const minMargin = margin / 5;
            const sztp = this.containerBayItem.size; /* === '20' ? '2' : '4';*/
            let textColor = 'black';
            if (this.containerBayItem.visibleObliqueLine)
                textColor = this.containerBayItem.obliqueLineColor;
            //sztp 첫글자 left top side
            const sztpText = new path_1.Path.Text({
                font: {
                    size: 5 * this.textSizeMultiple,
                    // weight: "bold",
                },
                maxWidth: 0,
                position: {
                    x: minMargin,
                    y: minMargin,
                },
                size: {
                    width: containerSize - minMargin,
                    height: containerSize - minMargin,
                },
                text: sztp,
                align: text_1.TextAlign.left,
                valign: text_1.TextVAlign.top,
                fill: { color: textColor },
            });
            this.appendChild(sztpText);
            //weight or sequence(center) jobSequence 
            const centerText = new path_1.Path.Text({
                font: {
                    size: (this.containerBayItem.planSequence !== undefined && this.containerBayItem.planSequence != null ? 7 : 5) * this.textSizeMultiple,
                    weight: this.containerBayItem.planSequence !== undefined ? "bold" : "",
                },
                maxWidth: 0,
                position: {
                    x: 0,
                    y: 0,
                },
                size: {
                    width: this.originalSize.width,
                    height: this.originalSize.height,
                },
                text: this.containerBayItem.planSequence !== undefined && this.containerBayItem.planSequence != null ? this.containerBayItem.planSequence : (this.containerBayItem.weight !== undefined ? this.containerBayItem.weight : ""),
                align: text_1.TextAlign.center,
                valign: text_1.TextVAlign.middle,
                fill: { color: textColor },
            });
            this.appendChild(centerText);
            //rst cntr draw circle - visibleCircle
            //bottomText lowerCaption
            const lowerCaption = new path_1.Path.Text({
                font: {
                    size: 5 * this.textSizeMultiple,
                    // weight: "bold",
                },
                maxWidth: 0,
                position: {
                    x: minMargin,
                    y: minMargin,
                },
                size: {
                    width: this.originalSize.width - minMargin,
                    height: this.originalSize.height - minMargin,
                },
                text: this.containerBayItem.lowerCaption !== undefined ? this.containerBayItem.lowerCaption : "",
                align: text_1.TextAlign.center,
                valign: text_1.TextVAlign.bottom,
                fill: { color: textColor },
                // background: { color: this.containerBayItem.lowerCaptionBackColor, isEnabled: true, isFitToSize : true }
            });
            this.appendChild(lowerCaption);
            //qc Number to right top side - shipBayNo, draw Rectangle(shipBayBackColor)
            const equipText = new path_1.Path.Text({
                font: {
                    size: 4 * this.textSizeMultiple,
                    // weight: "bold",
                },
                maxWidth: 0,
                position: {
                    x: minMargin,
                    y: minMargin,
                },
                size: {
                    width: this.originalSize.width - minMargin,
                    height: this.originalSize.height - minMargin,
                },
                text: this.containerBayItem.equipmentName !== undefined ? this.containerBayItem.equipmentName : "",
                align: text_1.TextAlign.right,
                valign: text_1.TextVAlign.top,
                fill: { color: "#ffffff" },
                // background: { color: this.containerBayItem.equipmentColor, isEnabled: true, isFitToSize : true }
            });
            this.appendChild(equipText);
            //qc Number background
            const equipBox = new path_1.Path.Rect({
                position: {
                    x: this.originalSize.width - this.originalSize.width / 5 - minMargin,
                    y: minMargin,
                },
                size: {
                    width: this.originalSize.width / 5 + minMargin,
                    height: this.originalSize.height / 5,
                },
                fill: { color: this.containerBayItem.equipmentColor },
            });
            this.appendChild(equipBox);
            //visibleObliqueLine (true) 이면 대각선 그린다 obliqueLineColor
            if (this.containerBayItem.visibleObliqueLine)
                this.addObliqueLine();
            //visibleOccupied occupiedColor
            if (this.containerBayItem.visibleOccupied)
                this.addSpXMark();
            //rst container draw circle
            if (this.containerBayItem.visibleCircle) {
                const circleWidth = (this.originalSize.width > this.originalSize.height
                    ? this.originalSize.height
                    : this.originalSize.width) - 10;
                this.addCircleStroke({
                    position: {
                        x: (this.originalSize.width - circleWidth) / 2 - 1,
                        y: (this.originalSize.height - circleWidth) / 2 - 1,
                    },
                    stroke: {
                        color: this.containerBayItem.circleColor,
                        width: 1,
                    },
                    fill: {
                        color: "transparent",
                        isEnabled: false,
                    },
                    size: {
                        width: circleWidth + 2,
                        height: circleWidth + 2,
                    },
                });
            }
            //draw diamond(when imdg code exist)
            if (this.containerBayItem.IMDG != null) {
                this.addSpDiamondLine();
            }
            //booked Cntr - right bottom side triangle
            if (this.containerBayItem.visibleCntrState && this.containerBayItem.isBookedCntr) {
                const revertTriangle = new path_1.Path.RightTriangle({
                    position: {
                        x: this.originalSize.width - 3,
                        y: this.originalSize.height - 5,
                    },
                    fill: {
                        color: 'black',
                    },
                    // rotate: 30,  
                    size: {
                        width: 6,
                        height: 5,
                    },
                });
                this.appendChild(revertTriangle);
            }
            //occupiedSlotCount ?
        }
    }
    addAllPaths() {
        this.outerLine = this.addOuterLine();
        this.addInnerLine();
        //SL.Choi add //blocktopview 그릴 때 block내에 containerText 있으면 표시
        if (this.containerBayItem.containerText != null) {
            const containerSize = this.originalSize.width > 20 ? 2 : 1;
            const margin = this.originalSize.width / 100 + 4;
            const leftMargin = margin / 2;
            const containerNoText = new path_1.Path.Text({
                font: {
                    size: 10 * this.textSizeMultiple,
                    // weight: "bold",
                },
                maxWidth: 0,
                position: {
                    x: 7.5 * containerSize,
                    y: 7,
                },
                size: {
                    width: this.originalSize.width - 2,
                    height: this.originalSize.height - 2,
                },
                text: this.containerBayItem.containerText !== undefined
                    ? this.containerBayItem.containerText
                    : "",
                fill: { color: this.containerBayItem.containerTextColor },
            });
            this.appendChild(containerNoText);
        }
        if (this.containerBayItem.visibleTriangle)
            this.addTriangle({
                position: {
                    x: 1,
                    y: 1,
                },
                fill: {
                    color: this.containerBayItem.triangleColor,
                },
                size: {
                    width: this.originalSize.width - 2,
                    height: this.originalSize.height - 2,
                },
            });
        if (this.containerBayItem.visibleCircle) {
            const circleWidth = (this.originalSize.width > this.originalSize.height
                ? this.originalSize.height
                : this.originalSize.width) - 10;
            this.addCircleFill({
                position: {
                    x: (this.originalSize.width - circleWidth) / 2,
                    y: (this.originalSize.height - circleWidth) / 2,
                },
                fill: {
                    color: this.containerBayItem.circleColor,
                },
                size: {
                    width: circleWidth,
                    height: circleWidth,
                },
            });
        }
        if (this.containerBayItem.visibleInvertedTriangle)
            this.addInvertedTriangle({
                position: {
                    x: 1 + this.originalSize.width - 2,
                    y: 1 + this.originalSize.height - 2,
                },
                fill: {
                    color: this.containerBayItem.occupiedColor,
                },
                rotate: 180,
                size: {
                    width: this.originalSize.width - 2,
                    height: this.originalSize.height - 2,
                },
            });
        if (this.containerBayItem.visibleCircleStroke) {
            const circleWidth = (this.originalSize.width > this.originalSize.height
                ? this.originalSize.height
                : this.originalSize.width) - 10;
            this.addCircleStroke({
                position: {
                    x: (this.originalSize.width - circleWidth) / 2 + 1,
                    y: (this.originalSize.height - circleWidth) / 2 + 1,
                },
                stroke: {
                    color: this.containerBayItem.circleStrokeColor,
                    width: 2,
                },
                fill: {
                    color: "",
                    isEnabled: false,
                },
                size: {
                    width: circleWidth - 2,
                    height: circleWidth - 2,
                },
            });
        }
        if (this.containerBayItem.visibleUnsync)
            this.addUnsyncLine();
        if (this.containerBayItem.visibleObliqueLine)
            this.addObliqueLine();
        // this.addXMark();
        if (!this.isTopView && this.containerBayItem.visibleInfoText !== false)
            this.addConainterInfoText();
    }
    addOccupied() {
        const revertTriangle = new path_1.Path.Triangle({
            position: {
                x: 20,
                y: 5,
            },
            fill: {
                color: this.containerBayItem.occupiedColor,
            },
            rotate: 180,
            size: {
                width: 10,
                height: 10,
            },
        });
        this.appendChild(revertTriangle);
    }
    addConainterCountText() {
        const containerNoText = new path_1.Path.Text({
            font: {
                size: 2 * this.textSizeMultiple,
                weight: "bold",
            },
            maxWidth: 0,
            position: {
                x: 1.4,
                y: 1.5,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: '1',
            fill: { color: "#000000" },
        });
        this.appendChild(containerNoText);
    }
    addConainterInfoText() {
        const containerSize = this.originalSize.width > 20 ? 2 : 1;
        const margin = this.originalSize.width / 100 + 4;
        const leftMargin = margin / 2;
        const containerNoText = new path_1.Path.Text({
            font: {
                size: 2 * this.textSizeMultiple,
                weight: "bold",
            },
            maxWidth: 0,
            position: {
                x: 1.7 * containerSize,
                y: 1.7,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.containerNo !== undefined
                ? this.containerBayItem.containerNo
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(containerNoText);
        // const classCodeBackColorRect = new Path.Rect({
        //   position: {
        //     x: 2*containerSize,
        //     y: 3.5
        //   },
        //   size: {
        //     width: 2,
        //     height: 2
        //   },
        //   fill: {
        //     color:
        //   },
        // });
        // this.appendChild(classCodeBackColorRect);
        const classCodeText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 2*containerSize,
                x: leftMargin,
                y: 5,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.classCode !== undefined
                ? this.containerBayItem.classCode
                : "",
            fill: { color: "#0000ff" },
            background: {
                isEnabled: this.containerBayItem.classCodeBackColor !== "",
                color: this.containerBayItem.classCodeBackColor,
                isFitToSize: true,
            },
        });
        this.appendChild(classCodeText);
        const cargoTypeText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 5*containerSize,
                x: leftMargin + (this.size.width - margin) * 0.25,
                y: 5,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.cargoType !== undefined
                ? this.containerBayItem.cargoType
                : "",
            fill: { color: "#000000" },
            background: {
                isEnabled: this.containerBayItem.cargoTypeBackColor !== "",
                color: this.containerBayItem.cargoTypeBackColor,
                isFitToSize: true,
            },
        });
        this.appendChild(cargoTypeText);
        const sizeTypeText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 8.5*containerSize,
                x: leftMargin + (this.size.width - margin) * 0.5,
                y: 5,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.sizeType !== undefined
                ? this.containerBayItem.sizeType
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(sizeTypeText);
        const operationCodeText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 12.5*containerSize,
                x: leftMargin + (this.size.width - margin) * 0.8,
                y: 5,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.operatorCode !== undefined
                ? this.containerBayItem.operatorCode
                : "",
            fill: { color: "#000000" },
            background: {
                isEnabled: this.containerBayItem.operatorBackColor !== "",
                color: this.containerBayItem.operatorBackColor,
                isFitToSize: true,
            },
        });
        this.appendChild(operationCodeText);
        const imdgText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 2*containerSize,
                x: leftMargin,
                y: 8,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.IMDG !== undefined
                ? this.containerBayItem.IMDG
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(imdgText);
        const plugCheckText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 6.5*containerSize,
                x: leftMargin + (this.size.width - margin) * 0.3,
                y: 8,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.plugCheck !== undefined
                ? this.containerBayItem.plugCheck
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(plugCheckText);
        const equipmentNameText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 8.5*containerSize,
                x: leftMargin + (this.size.width - margin) * 0.5,
                y: 8,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.equipmentName !== undefined
                ? this.containerBayItem.equipmentName
                : "",
            fill: { color: this.containerBayItem.equipmentColor },
        });
        this.appendChild(equipmentNameText);
        const weightGroupText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                // x: 12.5*containerSize,
                x: leftMargin + (this.size.width - margin) * 0.8,
                y: 8,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.weightGroup !== undefined
                ? this.containerBayItem.weightGroup
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(weightGroupText);
        const inboundVVDText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                x: leftMargin,
                y: 11,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.inboundVVD !== undefined
                ? this.containerBayItem.inboundVVD
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(inboundVVDText);
        const polText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                x: leftMargin + (this.size.width - margin) * 0.65,
                y: 11,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.POL !== undefined
                ? this.containerBayItem.POL
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(polText);
        const outboundVVDText = new path_1.Path.Text({
            font: {
                size: 1.8 * this.textSizeMultiple,
                weight: "bold",
            },
            maxWidth: 0,
            position: {
                x: leftMargin,
                y: 15,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.outboundVVD !== undefined
                ? this.containerBayItem.outboundVVD
                : "",
            fill: { color: "#000000" },
        });
        this.appendChild(outboundVVDText);
        const podText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
                weight: "bold",
            },
            maxWidth: 0,
            position: {
                x: leftMargin + (this.size.width - margin) * 0.65,
                y: 13,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.POD !== undefined
                ? this.containerBayItem.POD
                : "",
            fill: { color: "#000000" },
            background: {
                isEnabled: this.containerBayItem.podBackColor !== "",
                color: this.containerBayItem.podBackColor,
                isFitToSize: true,
            },
        });
        this.appendChild(podText);
        const lowerCaptionText = new path_1.Path.Text({
            font: {
                size: 4 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                x: 1 * containerSize,
                y: 15,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.containerBayItem.lowerCaption !== undefined
                ? this.containerBayItem.lowerCaption
                : "",
            fill: { color: "#000000" },
            background: {
                isEnabled: this.containerBayItem.lowerCaptionBackColor !== "",
                color: this.containerBayItem.lowerCaptionBackColor,
                isFitToSize: true,
            },
        });
        this.appendChild(lowerCaptionText);
        const pECntText = new path_1.Path.Text({
            font: {
                size: 1.7 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                x: 17 * containerSize,
                y: 16,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: String(this.containerBayItem.pECnt !== undefined
                ? this.containerBayItem.pECnt
                : ""),
            fill: { color: "#FF0000" },
        });
        pECntText.id = "pECnt";
        this.appendChild(pECntText);
        const jobCodeText = new path_1.Path.Text({
            font: {
                size: 3 * this.textSizeMultiple,
                weight: "bold",
            },
            maxWidth: 0,
            position: {
                x: 1.4 * containerSize,
                y: 17,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: String(this.containerBayItem.jobCode !== undefined
                ? this.containerBayItem.jobCode
                : ""),
            fill: { color: "#000000" },
        });
        this.appendChild(jobCodeText);
        const handlingInstruction = new path_1.Path.Text({
            font: {
                size: 1.4 * this.textSizeMultiple,
            },
            maxWidth: 0,
            position: {
                x: 10 * containerSize,
                y: 15,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: String(this.containerBayItem.handlingInstruction !== undefined
                ? this.containerBayItem.handlingInstruction
                : ""),
            fill: { color: "#000000" },
        });
        this.appendChild(handlingInstruction);
    }
    invertColor(hex) {
        if (hex.indexOf("#") === 0) {
            hex = hex.slice(1);
        }
        // convert 3-digit hex to 6-digits.
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        if (hex.length !== 6) {
            throw new Error("Invalid HEX color.");
        }
        // invert color components
        var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16), g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16), b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
        // pad each with zeros and return
        return "#" + this.padZero(r) + this.padZero(g) + this.padZero(b);
    }
    padZero(str) {
        const len = 2;
        let zeros = new Array(len).join("0");
        return (zeros + str).slice(-len);
    }
    invertAllColors(obj) {
        obj.fill.color = this.invertColor(obj.fill.color);
        if (obj.children.length) {
            obj.children.forEach((child) => this.invertAllColors(child));
        }
    }
    invertBlockColor() {
        this.invertAllColors(this);
    }
    addSelectCircle() {
        const circleWidth = (this.originalSize.width > this.originalSize.height
            ? this.originalSize.height
            : this.originalSize.width) - 10;
        const circle = new path_1.Path.Circle({
            position: {
                x: (this.originalSize.width - circleWidth) / 2,
                y: (this.originalSize.height - circleWidth) / 2,
            },
            fill: {
                color: "#008000",
            },
            size: {
                width: circleWidth,
                height: circleWidth,
            },
        });
        circle.id = "selectedCircle";
        this.appendChild(circle);
        return circle;
    }
    addUnsyncLine() {
        const unsyncLine = new path_1.Path.UnsyncLine({
            position: {
                x: 1,
                y: 1,
            },
            size: {
                width: this.originalSize.width - 2,
                height: this.originalSize.height - 2,
            },
            fill: {
                color: this.containerBayItem.unsyncColor,
            },
            stroke: {
                color: this.containerBayItem.unsyncColor,
                width: 1,
            },
        });
        this.appendChild(unsyncLine);
        return unsyncLine;
    }
    addObliqueLine() {
        const obliqueLine = new path_1.Path.ObliqueLine({
            position: {
                x: 1,
                y: 1,
            },
            size: {
                width: this.originalSize.width - 2,
                height: this.originalSize.height - 2,
            },
            fill: {
                color: this.containerBayItem.obliqueLineColor,
            },
            stroke: {
                color: this.containerBayItem.obliqueLineColor,
                width: 1,
            },
        });
        this.appendChild(obliqueLine);
        return obliqueLine;
    }
    addXMark() {
        const xMark = new path_1.Path.XMark({
            position: {
                x: 4,
                y: 4,
            },
            fill: {
                color: this.containerBayItem.obliqueLineColor,
            },
            stroke: {
                color: this.containerBayItem.obliqueLineColor,
                width: 6,
            },
            size: {
                width: this.originalSize.width - 8,
                height: this.originalSize.height - 8,
            },
        });
        this.appendChild(xMark);
        return xMark;
    }
    addSpXMark() {
        const xMark = new path_1.Path.XMark({
            position: {
                x: 1,
                y: 1,
            },
            fill: {
                color: this.containerBayItem.obliqueLineColor,
            },
            stroke: {
                color: this.containerBayItem.obliqueLineColor,
                width: 1,
            },
            size: {
                width: this.originalSize.width - 2,
                height: this.originalSize.height - 2,
            },
        });
        this.appendChild(xMark);
        return xMark;
    }
    addInnerLine() {
        var _a, _b;
        const innerBorderMargin = (_a = this.containerBayItem.innerBorderMargin) !== null && _a !== void 0 ? _a : 1;
        const rect = new path_1.Path.Rect({
            position: {
                x: innerBorderMargin,
                y: innerBorderMargin,
            },
            size: {
                width: this.originalSize.width - innerBorderMargin * 2,
                height: this.originalSize.height - innerBorderMargin * 2,
            },
            fill: {
                color: this.fill.color,
            },
            stroke: {
                color: this.containerBayItem.innerBorderColor,
                width: (_b = this.containerBayItem.innerBorderWidth) !== null && _b !== void 0 ? _b : 2,
            },
            _zoom: this._zoom,
        });
        rect.id = "innerRect";
        this.appendChild(rect);
        return rect;
    }
    addOuterLine() {
        var _a, _b, _c, _d;
        const rect = new path_1.Path.Rect({
            position: {
                x: (_a = this.containerBayItem.outerBorderMargin) !== null && _a !== void 0 ? _a : 0,
                y: (_b = this.containerBayItem.outerBorderMargin) !== null && _b !== void 0 ? _b : 0,
            },
            size: {
                width: this.originalSize.width -
                    ((_c = this.containerBayItem.outerBorderMargin) !== null && _c !== void 0 ? _c : 0) * 2,
                height: this.originalSize.height -
                    ((_d = this.containerBayItem.outerBorderMargin) !== null && _d !== void 0 ? _d : 0) * 2,
            },
            fill: {
                color: "#FFFFFF",
            },
            stroke: {
                color: this.containerBayItem.outerBorderColor,
                width: this.containerBayItem.outerBorderWidth === undefined
                    ? 1
                    : this.containerBayItem.outerBorderWidth,
            },
        });
        rect.id = "ContainerOuterLine_" + this.id;
        this.appendChild(rect);
        return rect;
    }
    /*
    addTriangle() {
      const triangle = new Path.Triangle({
        position: {
          x: 1,
          y: 1
        },
        fill: {
          color: this.containerBayItem.triangleColor
        },
  
        size: {
          width: this.originalSize.width-2,
          height: this.originalSize.height-2
        }
      });
      this.appendChild(triangle);
  
      return triangle;
    }
  
    addInvertedTriangle() {
      const revertTriangle = new Path.Triangle({
        position: {
          x: 1+this.originalSize.width-2,
          y: 1+this.originalSize.height-2
        },
        fill: {
          color: this.containerBayItem.occupiedColor
        },
        rotate: 180,
        size: {
          width: this.originalSize.width-2,
          height: this.originalSize.height-2
        }
      });
      this.appendChild(revertTriangle);
  
      return revertTriangle;
    }
  
    addCircleStroke() {
      const circleWidth = (this.originalSize.width>this.originalSize.height?this.originalSize.height:this.originalSize.width)-2;
      const circle = new Path.Circle({
        position: {
          x: (this.originalSize.width-circleWidth)/2+1,
          y: (this.originalSize.height-circleWidth)/2+1
        },
        stroke: {
          color: this.containerBayItem.circleStrokeColor,
          width: 2
        },
        fill: {
          color: "",
          isEnabled: false
        },
        size: {
          width: circleWidth-2,
          height: circleWidth-2
        }
      });
      this.appendChild(circle);
  
      return circle;
    }
  
    addCircleFill() {
      const circleWidth = (this.originalSize.width>this.originalSize.height?this.originalSize.height:this.originalSize.width)-10;
      const circle = new Path.Circle({
        position: {
          x: (this.originalSize.width-circleWidth)/2,
          y: (this.originalSize.height-circleWidth)/2
        },
        fill: {
          color: this.containerBayItem.circleColor,
        },
        size: {
          width: circleWidth,
          height: circleWidth
        }
      });
  
      this.appendChild(circle);
  
      return circle;
    }
     */
    addRectangle(props) {
        const rect = new path_1.Path.Rect(props);
        this.appendChild(rect);
        return rect;
    }
    addTriangle(props) {
        const triangle = new path_1.Path.Triangle(props);
        this.appendChild(triangle);
        return triangle;
    }
    addInvertedTriangle(props) {
        // props.position.x += (this.originalSize.width-2)/2;
        // props.position.y += (this.originalSize.height-2)/4;
        props.position.x += props.size.width;
        props.position.y += props.size.height;
        props.rotate = 180;
        const revertTriangle = new path_1.Path.Triangle(props);
        this.appendChild(revertTriangle);
        return revertTriangle;
    }
    addCircleStroke(props) {
        const circle = new path_1.Path.Circle(props);
        this.appendChild(circle);
        return circle;
    }
    addCircleFill(props) {
        const circle = new path_1.Path.Circle(props);
        this.appendChild(circle);
        return circle;
    }
    draw(isRefresh = false) {
        const outerLine = this.getChildById("ContainerOuterLine_" + this.id);
        if (this.selected) {
            outerLine.isVisible = false;
        }
        else {
            outerLine.isVisible = true;
        }
        super.draw(isRefresh);
    }
    beforeDrawForSelect(self) {
        if (self.selected && !self.select.type.circle) {
            self.outerLine.isVisible = false;
        }
        else {
            self.outerLine.isVisible = true;
        }
    }
    appendChild(child) {
        return super.appendChild(child, 3);
    }
}
exports.Container = Container;


/***/ }),

/***/ "./src/component/countInfo.ts":
/*!************************************!*\
  !*** ./src/component/countInfo.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CountInfo = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class CountInfo extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a;
        super(props);
        this.countInfo = (_a = props.countInfo) !== null && _a !== void 0 ? _a : {
            isEnabled: true,
            data: [0, 0, 0, 0, 0, 0],
        };
        this.addInfoRect();
        this.addInfoText1();
        this.addInfoText2();
    }
    addInfoText2() {
        this.infoText2 = new path_1.Path.Text({
            size: {
                width: 20,
                height: 10,
            },
            font: {
                size: 8,
            },
            position: {
                x: 3,
                y: 12,
            },
            text: this.countInfo.data[3] +
                "/" +
                this.countInfo.data[4] +
                "/" +
                this.countInfo.data[5],
            fill: { color: "#000000" },
        });
        this.appendChild(this.infoText2);
    }
    addInfoText1() {
        this.infoText1 = new path_1.Path.Text({
            size: {
                width: 20,
                height: 10,
            },
            font: {
                size: 8,
            },
            position: {
                x: 3,
                y: 2,
            },
            text: this.countInfo.data[0] +
                "/" +
                this.countInfo.data[1] +
                "/" +
                this.countInfo.data[2],
            fill: { color: "#000000" },
        });
        this.appendChild(this.infoText1);
    }
    addInfoRect() {
        this.infoRect = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: 25,
                height: 20,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFFF",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(this.infoRect);
    }
    /**
     * 표시할 countInfo의 data를 변경한다
     * @param index
     * @param datum
     */
    setData(index, datum) {
        this.countInfo.data[index] = datum;
        this.infoText1.text =
            this.countInfo.data[0] +
                "/" +
                this.countInfo.data[1] +
                "/" +
                this.countInfo.data[2];
        this.infoText2.text =
            this.countInfo.data[3] +
                "/" +
                this.countInfo.data[4] +
                "/" +
                this.countInfo.data[5];
    }
}
exports.CountInfo = CountInfo;


/***/ }),

/***/ "./src/component/equipment.ts":
/*!************************************!*\
  !*** ./src/component/equipment.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
class Equipment extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
    }
}
exports.Equipment = Equipment;


/***/ }),

/***/ "./src/component/equipment1.ts":
/*!*************************************!*\
  !*** ./src/component/equipment1.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment1 = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class Equipment1 extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.equipmentName = props.equipmentName;
        this.fill4Equipment = Object.assign({}, props.fill);
        this.stroke4Equipment = Object.assign({}, props.stroke);
        this.fill = { isEnabled: false };
        this.stroke = { width: 0, color: "#000000" };
        this.addEquipmentPath(props);
        const line = new path_1.Path.Line({
            position: {
                x: -this.size.width / 2,
                y: this.size.height / 2,
            },
            size: {
                width: 20,
                height: -this.size.height / 2,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(line);
        this.addEquipmentRect();
        this.addEquipmentText();
        // const equipment1Name = new Path.Equipment1Name(props);
        // this.appendChild(equipment1Name);
    }
    addEquipmentText() {
        const text = new path_1.Path.Text({
            font: {
                size: 10,
            },
            position: {
                x: -this.size.width / 2 + 25,
                y: 3,
            },
            size: undefined,
            text: this.equipmentName,
            fill: { color: "#FFFF00" },
        });
        this.appendChild(text);
    }
    addEquipmentRect() {
        const rect = new path_1.Path.Rect({
            position: {
                x: -this.size.width / 2 + 20,
                y: 0,
            },
            size: {
                width: 40,
                height: 14,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
        });
        this.appendChild(rect);
    }
    addEquipmentPath(props) {
        const equipment1 = new path_1.Path.Equipment1(Object.assign({}, props, {
            position: { x: 0, y: 0 },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        }));
        this.appendChild(equipment1);
    }
}
exports.Equipment1 = Equipment1;


/***/ }),

/***/ "./src/component/facilityItem.ts":
/*!***************************************!*\
  !*** ./src/component/facilityItem.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 {
    "Name":"GAS",
    "FacUse":"T",
    "X":1400.0,
    "Y":520.0,
    "W":40.0,
    "L":45.0,
    "Deg":0.0,
    "YardID":"",
    "Fore_color":"Black",
    "ForeColorInt":0,
    "Back_color":"White",
    "BackColorInt":16777215,
    "Key":"GAS"
  },
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityItem = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const text_1 = __webpack_require__(/*! ../path/text */ "./src/path/text.ts");
class FacilityItem extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.facilityName = props.facilityName;
        this.FacUse = props.FacUse;
        this.facilityArea = props.facilityArea;
        this.deg = props.deg;
        this.yardID = props.yardID;
        this.foreColor = props.foreColor;
        this.foreColorInt = props.foreColorInt;
        this.backColor = props.backColor;
        this.backColorInt = props.backColorInt;
        this.key = props.key;
        this.addFacilityRect();
        this.addFacilityText();
    }
    addFacilityRect() {
        const rect = new path_1.Path.Rect({
            size: this.size,
            position: {
                x: 0,
                y: 0,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(rect);
    }
    addFacilityText() {
        let facilityText = new path_1.Path.Text({
            position: {
                x: 0,
                y: 0,
            },
            size: { width: this.size.width, height: this.size.height },
            text: this.facilityName,
            fill: { color: "#000000" },
            font: {
                size: 10,
            },
            align: text_1.TextAlign.center,
            valign: text_1.TextVAlign.middle,
        });
        this.appendChild(facilityText);
    }
}
exports.FacilityItem = FacilityItem;


/***/ }),

/***/ "./src/component/index.ts":
/*!********************************!*\
  !*** ./src/component/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const bayBlock_1 = __webpack_require__(/*! ./bayBlock */ "./src/component/bayBlock.ts");
const blockTop_1 = __webpack_require__(/*! ./blockTop */ "./src/component/blockTop.ts");
const blockTop4Layout_1 = __webpack_require__(/*! ./blockTop4Layout */ "./src/component/blockTop4Layout.ts");
const slot_1 = __webpack_require__(/*! ./slot */ "./src/component/slot.ts");
const equipment_1 = __webpack_require__(/*! ./equipment */ "./src/component/equipment.ts");
const equipment1_1 = __webpack_require__(/*! ./equipment1 */ "./src/component/equipment1.ts");
const container_1 = __webpack_require__(/*! ./container */ "./src/component/container.ts");
const button_1 = __webpack_require__(/*! ./button */ "./src/component/button.ts");
const buttonClose_1 = __webpack_require__(/*! ./buttonClose */ "./src/component/buttonClose.ts");
const berthVessel_1 = __webpack_require__(/*! ./berthVessel */ "./src/component/berthVessel.ts");
const berthVessel4side_1 = __webpack_require__(/*! ./berthVessel4side */ "./src/component/berthVessel4side.ts");
const berthItem_1 = __webpack_require__(/*! ./berthItem */ "./src/component/berthItem.ts");
const berthItem4qc_1 = __webpack_require__(/*! ./berthItem4qc */ "./src/component/berthItem4qc.ts");
const bitItem_1 = __webpack_require__(/*! ./bitItem */ "./src/component/bitItem.ts");
const bitItem4qc_1 = __webpack_require__(/*! ./bitItem4qc */ "./src/component/bitItem4qc.ts");
const qc_1 = __webpack_require__(/*! ./qc */ "./src/component/qc.ts");
const schedule_1 = __webpack_require__(/*! ./schedule */ "./src/component/schedule.ts");
const countInfo_1 = __webpack_require__(/*! ./countInfo */ "./src/component/countInfo.ts");
const selectedBlock_1 = __webpack_require__(/*! ./selectedBlock */ "./src/component/selectedBlock.ts");
var Component;
(function (Component) {
    Component.BayBlock = bayBlock_1.BayBlock;
    Component.BlockTop = blockTop_1.BlockTop;
    Component.BlockTop4Layout = blockTop4Layout_1.BlockTop4Layout;
    Component.Slot = slot_1.Slot;
    Component.Equipment = equipment_1.Equipment;
    Component.Equipment1 = equipment1_1.Equipment1;
    Component.Container = container_1.Container;
    Component.Button = button_1.Button;
    Component.ButtonClose = buttonClose_1.ButtonClose;
    Component.BerthVessel = berthVessel_1.BerthVessel;
    Component.BerthVessel4side = berthVessel4side_1.BerthVessel4side;
    Component.BerthItem = berthItem_1.BerthItem;
    Component.BerthItem4qc = berthItem4qc_1.BerthItem4qc;
    Component.BitItem = bitItem_1.BitItem;
    Component.BitItem4qc = bitItem4qc_1.BitItem4qc;
    Component.Qc = qc_1.Qc;
    Component.Schedule = schedule_1.Schedule;
    Component.CountInfo = countInfo_1.CountInfo;
    Component.SelectedBlock = selectedBlock_1.SelectedBlock;
})(Component = exports.Component || (exports.Component = {}));


/***/ }),

/***/ "./src/component/qc.ts":
/*!*****************************!*\
  !*** ./src/component/qc.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Qc = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class Qc extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.equipmentName = props.equipmentName;
        this.fill4Equipment = Object.assign({}, props.fill);
        this.stroke4Equipment = Object.assign({}, props.stroke);
        this.fill.isEnabled = false;
        this.stroke.width = 0;
        const rect1 = new path_1.Path.Rect({
            position: {
                x: -8 + 18,
                y: 0,
            },
            size: {
                width: 5,
                height: 100,
            },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        });
        this.appendChild(rect1);
        const rect2 = new path_1.Path.Rect({
            position: {
                x: 3 + 18,
                y: 0,
            },
            size: {
                width: 5,
                height: 100,
            },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        });
        this.appendChild(rect2);
        const rect3 = new path_1.Path.Rect({
            position: {
                x: -8 + 18,
                y: 0,
            },
            size: {
                width: 16,
                height: 5,
            },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        });
        this.appendChild(rect3);
        const rect4 = new path_1.Path.Rect({
            position: {
                x: -18 + 18,
                y: -10 + 70,
            },
            size: {
                width: 5,
                height: 25,
            },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        });
        this.appendChild(rect4);
        const rect5 = new path_1.Path.Rect({
            position: {
                x: 13 + 18,
                y: -10 + 70,
            },
            size: {
                width: 5,
                height: 25,
            },
            fill: this.fill4Equipment,
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(rect5);
        const rect6 = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 60,
            },
            size: {
                width: 36,
                height: 5,
            },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        });
        this.appendChild(rect6);
        const rect7 = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 80,
            },
            size: {
                width: 36,
                height: 5,
            },
            fill: this.fill4Equipment,
            stroke: this.stroke4Equipment,
        });
        this.appendChild(rect7);
    }
}
exports.Qc = Qc;


/***/ }),

/***/ "./src/component/schedule.ts":
/*!***********************************!*\
  !*** ./src/component/schedule.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class Schedule extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.isDrawContainerPlan = (_a = props.isDrawContainerPlan) !== null && _a !== void 0 ? _a : false;
        this.timeLineVertGap = (_b = props.timeLineVertGap) !== null && _b !== void 0 ? _b : 5;
        this.timeGap = (_c = props.timeGap) !== null && _c !== void 0 ? _c : 3;
        if (this.isDrawContainerPlan) {
            for (let i = 0; i < this.originalSize.height / this.timeLineVertGap; i++) {
                const rect = new path_1.Path.Rect({
                    position: {
                        x: 0,
                        y: i * this.timeLineVertGap,
                    },
                    size: {
                        width: this.size.width,
                        height: this.timeLineVertGap,
                    },
                    stroke: {
                        width: this.stroke.width,
                        color: this.stroke.color,
                    },
                    fill: {
                        isEnabled: this.fill.isEnabled,
                        color: this.fill.color,
                    },
                });
                this.appendChild(rect);
            }
            this.fill = {
                isEnabled: false,
            };
            this.stroke = {
                width: 0,
                color: "#000000",
            };
        }
        if (this.data.IsStoppage) {
            const rectStoppageOuter = new path_1.Path.Rect({
                position: {
                    x: 0,
                    y: this.size.height,
                },
                size: {
                    width: this.size.width,
                    height: this.size.width,
                },
                fill: {
                    isEnabled: true,
                    color: "#007777",
                },
            });
            this.appendChild(rectStoppageOuter);
            const circleStoppage = new path_1.Path.Circle({
                position: {
                    x: 1,
                    y: this.size.height + 1,
                },
                size: {
                    width: this.size.width - 2,
                    height: this.size.width - 2,
                },
                fill: {
                    isEnabled: true,
                    color: "#FFFFFF",
                },
            });
            this.appendChild(circleStoppage);
            const rectStoppage = new path_1.Path.Rect({
                position: {
                    x: this.size.width / 4,
                    y: this.size.height + this.size.width / 4,
                },
                size: {
                    width: (this.size.width / 4) * 2,
                    height: (this.size.width / 4) * 2,
                },
                fill: {
                    isEnabled: true,
                    color: "#007777",
                },
            });
            this.appendChild(rectStoppage);
        }
    }
}
exports.Schedule = Schedule;


/***/ }),

/***/ "./src/component/selectedBlock.ts":
/*!****************************************!*\
  !*** ./src/component/selectedBlock.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedBlock = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
class SelectedBlock extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
    }
}
exports.SelectedBlock = SelectedBlock;


/***/ }),

/***/ "./src/component/slot.ts":
/*!*******************************!*\
  !*** ./src/component/slot.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
class Slot extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        // this.layout = props.layout;
        this.data = props.data;
        this.marking = props.marking;
        this.slotGap = props.slotGap;
        this.drawMarkingType();
        // this.positionBeforeResize = {
        //   x: props.position.x,
        //   y: props.position.y,
        // }
    }
    drawMarkingType() {
        var _a;
        let slotMarkSize = {
            width: this.size.width - 2,
            height: this.size.height - 2,
        };
        if (this.marking) {
            switch ((_a = this.marking) === null || _a === void 0 ? void 0 : _a.type) {
                case type_1.MarkingTypes.CIRCLE:
                    this.slotMark = new path_1.Path.Circle({
                        size: slotMarkSize,
                        fill: this.marking.fill,
                        stroke: this.marking.stroke,
                    });
                    break;
                case type_1.MarkingTypes.TRIANGLE:
                    this.slotMark = new path_1.Path.Triangle({
                        size: slotMarkSize,
                        fill: this.marking.fill,
                        stroke: this.marking.stroke,
                    });
                    break;
                case type_1.MarkingTypes.INVERT_TRIANGLE:
                    this.slotMark = new path_1.Path.Triangle({
                        size: slotMarkSize,
                        fill: this.marking.fill,
                        stroke: this.marking.stroke,
                        rotate: 180,
                        position: {
                            x: this.size.width,
                            y: this.size.height,
                        },
                    });
                    break;
            }
            this.slotMark.id = "slotMark";
        }
        if (this.slotMark)
            this.appendChild(this.slotMark);
    }
    addSlotUsageText(typeInfo) {
        const jobCodeText = new path_1.Path.Text({
            font: {
                size: 10,
            },
            maxWidth: 0,
            position: {
                x: this.originalSize.width * 0.32,
                y: this.originalSize.height * 0.32,
            },
            size: {
                width: this.originalSize.width * 0.5,
                height: this.originalSize.height * 0.5,
            },
            text: String(typeInfo),
            fill: { color: "rgba(0, 0, 0, 0.5)" },
        });
        this.appendChild(jobCodeText);
    }
    clearMarkingType() {
        for (let i = this.children.length - 1; i >= 0; i--) {
            const child = this.children[i];
            if (child.id === "slotMark") {
                this.children.splice(i, 1);
            }
        }
    }
}
exports.Slot = Slot;


/***/ }),

/***/ "./src/component/terminalItem.ts":
/*!***************************************!*\
  !*** ./src/component/terminalItem.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalItem = void 0;
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
class TerminalItem extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        super(props);
        this.tmnlCD = props.tmnlCD;
        this.tmnlNM = props.tmnlCD;
        this.size = props.size;
        // this.addTerminalRect();
    }
}
exports.TerminalItem = TerminalItem;


/***/ }),

/***/ "./src/component/topBlock.ts":
/*!***********************************!*\
  !*** ./src/component/topBlock.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBlock = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const slot_1 = __webpack_require__(/*! ./slot */ "./src/component/slot.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const container_1 = __webpack_require__(/*! ./container */ "./src/component/container.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/component/index.ts");
class TopBlock extends baseDrawComponent_1.BaseDrawComponent {
    constructor(props) {
        var _a;
        super(props);
        this.layout = props.layout;
        this.slotProps = props.slotProps;
        this.blockItem = props.blockItem;
        this.blockGap = (_a = props.blockGap) !== null && _a !== void 0 ? _a : 20;
        this.blockName = props.blockName;
        this.data = props.data;
        this.ytInfo = props.ytInfo;
        this.isEnabledLockToolTip = props.isEnabledLockToolTip;
        this.isVisibleBlockNameText = props.isVisibleBlockNameText;
        this.isVisibleBayRowLocked = props.isVisibleBayRowLocked;
        this.lockRects = [];
        this.surface.addEventListener("mousemove", this.mouseMoveEvent.bind(this));
        this.bayRowOrder = props.bayRowOrder;
        this.addSlot();
    }
    addSlot() {
        let slotWidth = this.slotProps.size.width;
        if (this.isVisibleBlockNameText)
            this.addBlockNameText();
        this.addYtDirectionPath(slotWidth);
        this.addRowText();
        this.addBayText(slotWidth);
        // this.addCposPath(slotWidth);
        this.addIsLockedPath();
        this.addSlots(slotWidth);
    }
    addSlots(slotWidth) {
        for (let bay = 0; bay < this.data.maxBay; bay++) {
            for (let row = 0; row < this.data.maxRow; row++) {
                const slot = new slot_1.Slot(Object.assign({}, this.slotProps));
                slot.setSize({
                    width: slotWidth,
                    height: slot.size.height,
                });
                slot.data = {
                    blockName: this.blockName,
                    bay: this.bayRowOrder.bay === type_1.OrderDirection.Asc
                        ? bay + 1
                        : this.data.maxBay - bay,
                    row: this.bayRowOrder.row === type_1.OrderDirection.Desc
                        ? row + 1
                        : this.data.maxRow - row,
                };
                slot.click = this.click;
                slot.select = this.select;
                slot.setPosition({
                    x: slot.position.x +
                        this.blockGap +
                        bay * (slot.size.width + this.slotProps.slotGap),
                    y: slot.position.y +
                        this.blockGap +
                        row * (slot.size.height + this.slotProps.slotGap),
                });
                // slot.markingType = MarkingTypes.CIRCLE;
                slot.parent = this;
                slot.id = this.blockName + "-" + slot.data.bay + "-" + slot.data.row;
                this.appendChild(slot);
            }
        }
    }
    addIsLockedPath() {
        if (this.isVisibleBayRowLocked) {
            if (this.blockItem.yardLocks) {
                for (let bay = 1; bay < this.blockItem.maxBay; bay++) {
                    for (let row = 1; row < this.blockItem.maxRow; row++) {
                        this.addBayLockBar(bay);
                        this.addRowLockBar(row);
                    }
                }
            }
        }
    }
    addBayLockBar(bay) {
        const slotHeight = this.slotProps.size.height;
        const rect = new path_1.Path.Rect({
            stroke: {
                color: "#FF0000",
                width: 1,
            },
            fill: {
                color: "#FF0000",
            },
            position: {
                x: this.blockGap - 2,
                y: this.blockGap +
                    bay * (this.slotProps.size.height + this.slotProps.slotGap),
            },
            size: {
                width: 2,
                height: slotHeight,
            },
        });
        this.appendChild(rect);
        this.lockRects.push(rect);
        this.hasLock = true;
    }
    addRowLockBar(row) {
        const slotWidth = this.slotProps.size.width;
        const rect = new path_1.Path.Rect({
            stroke: {
                color: "#FF0000",
                width: 1,
            },
            fill: {
                color: "#FF0000",
            },
            position: {
                x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
                y: this.blockGap +
                    this.data.maxRow *
                        (this.slotProps.size.height + this.slotProps.slotGap),
            },
            size: {
                width: slotWidth,
                height: 2,
            },
        });
        this.appendChild(rect);
        this.lockRects.push(rect);
        this.hasLock = true;
    }
    // private addCposPath(slotWidth: number) {
    //   for (let row = 1; row <= (this.data.maxRow || this.data.maxBay); row++) {
    //     let isCPOs = false;
    //     if (this.data.CPOs && this.data.CPOs[bay-1, row-1] === 0) {
    //       isCPOs = true;
    //     }
    //
    //     if (isCPOs) {
    //       const rect = new Path.Rect({
    //         stroke: {
    //           color: "#D3D3D3",
    //           width: 1,
    //         },
    //         fill: {
    //           color: "#D3D3D3"
    //         },
    //         position: {
    //           x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
    //           y: this.blockGap + this.data.maxTier * (this.slotProps.size.height + this.slotProps.slotGap)
    //         },
    //         size: {
    //           width: slotWidth,
    //           height: 2
    //         }
    //       });
    //       this.appendChild(rect);
    //     } else {
    //       const rect = new Path.Rect({
    //         stroke: {
    //           color: "#808080",
    //           width: 1,
    //         },
    //         fill: {
    //           color: "#808080"
    //         },
    //         position: {
    //           x: this.blockGap + (row - 1) * (slotWidth + this.slotProps.slotGap),
    //           y: this.blockGap + this.data.maxTier * (this.slotProps.size.height + this.slotProps.slotGap)
    //         },
    //         size: {
    //           width: slotWidth,
    //           height: 2
    //         }
    //       });
    //       this.appendChild(rect);
    //     }
    //   }
    // }
    addBayText(slotWidth) {
        for (let bay = 1; bay <= this.data.maxBay; bay++) {
            if (!!this.blockItem.bayList[this.data.maxBay]) {
                let bayNo = bay;
                if (this.bayRowOrder.bay == type_1.OrderDirection.Desc)
                    bayNo = this.data.maxRow - bay + 1;
                const text = new path_1.Path.Text({
                    font: {
                        size: 10,
                    },
                    maxWidth: 0,
                    position: {
                        x: this.blockGap +
                            (bay - 1) * (slotWidth + this.slotProps.slotGap) +
                            slotWidth / 2 -
                            7,
                        y: this.blockGap +
                            this.data.maxRow *
                                (this.slotProps.size.height + this.slotProps.slotGap) +
                            3,
                    },
                    size: {
                        width: 6,
                        height: 6,
                    },
                    text: this.blockItem.bayList[bay].name2,
                    fill: { color: "#000000" },
                });
                this.appendChild(text);
            }
        }
    }
    addRowText() {
        for (let row = 1; row <= this.data.maxRow; row++) {
            let rowNo = row;
            if (this.bayRowOrder.row == type_1.OrderDirection.Asc) //.Desc)
                rowNo = this.data.maxRow - row + 1;
            const text = new path_1.Path.Text({
                font: {
                    size: 10,
                },
                maxWidth: 0,
                position: {
                    x: 8,
                    y: this.blockGap +
                        (this.blockItem.maxRow - row) *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5,
                },
                size: {
                    width: 6,
                    height: 6,
                },
                text: this.blockItem.rowList[rowNo].name,
                fill: { color: "#000000" },
            });
            // this.blockItem.maxTier
            this.appendChild(text);
        }
    }
    addYtDirectionPath(slotWidth) {
        if (this.blockItem.ytPos === "S") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: 10,
                    y: this.blockGap +
                        this.blockItem.maxRow *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5,
                },
                rotate: this.blockItem.ytEnter === "E" ? 90 : -90,
                id: "YTDIR-" + this.blockName,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
        else if (this.blockItem.ytPos === "E") {
            const ytTriangle = new path_1.Path.Triangle(Object.assign({}, {
                position: {
                    x: this.blockGap +
                        this.blockItem.maxBay * (slotWidth + this.slotProps.slotGap),
                    y: this.blockGap +
                        this.blockItem.maxRow *
                            (this.slotProps.size.height + this.slotProps.slotGap) +
                        5,
                },
                rotate: this.blockItem.ytEnter === "E" ? 90 : -90,
                id: "YTDIR-" + this.blockName,
            }, this.ytInfo));
            this.appendChild(ytTriangle);
        }
    }
    addEquipment() {
        const equipment = new index_1.Component.Equipment({
            stackInfo: undefined,
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.originalSize.width - 0,
                height: this.originalSize.height - 0,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        const equipment0 = new path_1.Path.Equipment0({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.originalSize.width - 0,
                height: this.originalSize.height - 0,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.appendChild(equipment);
    }
    addBlockNameText() {
        const blockNameText = new path_1.Path.Text({
            font: {
                size: 12,
            },
            maxWidth: 0,
            position: {
                x: 20,
                y: 7,
            },
            size: {
                width: 6,
                height: 6,
            },
            text: this.blockName,
            fill: { color: "#000000" },
        });
        this.appendChild(blockNameText);
    }
    findSlotById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof slot_1.Slot && child.id === id)
                return child;
        }
    }
    getSlot(blockName, bay, row) {
        return this.findSlotById(blockName + "-" + bay + "-" + row);
    }
    findContainerById(id) {
        let containers = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                containers.push(child);
            }
        }
        return containers;
    }
    removeContainer(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (child instanceof container_1.Container && child.id === id) {
                this.children.splice(i, 1);
                break;
            }
        }
    }
    mouseMoveEvent(e) {
        if (!this.isEnabledLockToolTip)
            return;
        let found = false;
        for (let i = 0; i < this.lockRects.length; i++) {
            const rect = this.lockRects[i];
            if (rect.isPointInDrawArea(e)) {
                found = true;
            }
        }
        // console.log(found);
        if (found)
            this.mouseoverProcess(e);
    }
}
exports.TopBlock = TopBlock;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./path */ "./src/path/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./common */ "./src/common/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./layoutDescription/slotLayoutDescription */ "./src/layoutDescription/slotLayoutDescription.ts"), exports);
__exportStar(__webpack_require__(/*! ./component */ "./src/component/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./view */ "./src/view/index.ts"), exports);


/***/ }),

/***/ "./src/layoutDescription/layoutDescription.ts":
/*!****************************************************!*\
  !*** ./src/layoutDescription/layoutDescription.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutDescription = void 0;
const function_1 = __webpack_require__(/*! ../common/function */ "./src/common/function.ts");
class LayoutDescription {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.parent_surface = props.parent_surface;
        this.margin = {};
        this.margin.top = ((_a = props.margin) === null || _a === void 0 ? void 0 : _a.top) || 0;
        this.margin.bottom = ((_b = props.margin) === null || _b === void 0 ? void 0 : _b.bottom) || 0;
        this.margin.left = ((_c = props.margin) === null || _c === void 0 ? void 0 : _c.left) || 0;
        this.margin.right = ((_d = props.margin) === null || _d === void 0 ? void 0 : _d.right) || 0;
        this.rotate = props.rotate || 0;
        this.fill = {};
        this.fill.color = ((_e = props.fill) === null || _e === void 0 ? void 0 : _e.color) || "#FFFFFF";
        this.stroke = {};
        this.stroke.color = ((_f = props.stroke) === null || _f === void 0 ? void 0 : _f.color) || "#000000";
        this.stroke.width = ((_g = props.stroke) === null || _g === void 0 ? void 0 : _g.width) || 1;
        this.z_index = props.z_index;
        this.id = props.id || function_1.generateUUID();
        this.ctx = props.ctx || null;
        // this.ctx = props.ctx || this.parent?.ctx || null;
        this.children = props.children || new Map();
    }
}
exports.LayoutDescription = LayoutDescription;


/***/ }),

/***/ "./src/layoutDescription/slotLayoutDescription.ts":
/*!********************************************************!*\
  !*** ./src/layoutDescription/slotLayoutDescription.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotLayoutDescription = void 0;
const layoutDescription_1 = __webpack_require__(/*! ./layoutDescription */ "./src/layoutDescription/layoutDescription.ts");
class SlotLayoutDescription extends layoutDescription_1.LayoutDescription {
}
exports.SlotLayoutDescription = SlotLayoutDescription;


/***/ }),

/***/ "./src/path/boundaryText.ts":
/*!**********************************!*\
  !*** ./src/path/boundaryText.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundaryText = exports.BoundaryTextVAlign = exports.BoundaryTextAlign = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
const rect_1 = __webpack_require__(/*! ./rect */ "./src/path/rect.ts");
var BoundaryTextAlign;
(function (BoundaryTextAlign) {
    BoundaryTextAlign[BoundaryTextAlign["left"] = 0] = "left";
    BoundaryTextAlign[BoundaryTextAlign["center"] = 1] = "center";
    BoundaryTextAlign[BoundaryTextAlign["right"] = 2] = "right";
})(BoundaryTextAlign = exports.BoundaryTextAlign || (exports.BoundaryTextAlign = {}));
var BoundaryTextVAlign;
(function (BoundaryTextVAlign) {
    BoundaryTextVAlign[BoundaryTextVAlign["top"] = 0] = "top";
    BoundaryTextVAlign[BoundaryTextVAlign["middle"] = 1] = "middle";
    BoundaryTextVAlign[BoundaryTextVAlign["bottom"] = 2] = "bottom";
})(BoundaryTextVAlign = exports.BoundaryTextVAlign || (exports.BoundaryTextVAlign = {}));
class BoundaryText extends drawable_1.Drawable {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.font = {};
        this.screenSize = {};
        this.font.name = ((_a = props.font) === null || _a === void 0 ? void 0 : _a.name) || "Arial";
        this.font.size = ((_b = props.font) === null || _b === void 0 ? void 0 : _b.size) || 12;
        this.originalFontSize = this.font.size;
        this.font.weight = ((_c = props.font) === null || _c === void 0 ? void 0 : _c.weight) || "";
        this.text = props.text || "";
        this.maxWidth = props.maxWidth;
        this.background = props.background || undefined;
        this.align = props.align || BoundaryTextAlign.left;
        this.valign = props.valign || BoundaryTextVAlign.top;
        // this.boundaryType = props.boundaryType;
    }
    setFontSize(size) {
        this.font.size = size;
        this.originalFontSize = size;
    }
    calculateScreenSize() {
        this.ctx.textBaseline = "top";
        this.ctx.fillStyle = this.fill.color;
        this.ctx.font =
            this.font.weight +
                " " +
                this.originalFontSize * this._zoom * this.multipleResizeTo +
                "px " +
                this.font.name;
        /*
        background 배경색을 그리기 위해서 글자의 실제 가로 세로 크기를 구한다.
        30%마진을 준다
         */
        const metrics = this.ctx.measureText(this.text);
        this.screenSize.width = metrics.width;
        /*
        ancutalBoundingBox로 계산 정확하지 않음
         */
        this.screenSize.height =
            metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent * 1.4;
    }
    drawPath() {
        var _a, _b;
        let textPosition = { x: 0, y: 0 };
        if (this.align !== BoundaryTextAlign.left) {
            this.calculateScreenSize();
            if (this.align === BoundaryTextAlign.center) {
                textPosition.x = (this.size.width - this.screenSize.width) / 2;
            }
            else {
                textPosition.x = this.size.width - this.screenSize.width;
            }
        }
        if (this.valign !== BoundaryTextVAlign.top) {
            this.calculateScreenSize();
            if (this.valign === BoundaryTextVAlign.middle) {
                textPosition.y = (this.size.height - this.screenSize.height) / 2;
            }
            else {
                textPosition.y = this.size.height - this.screenSize.height;
            }
        }
        /*
        배경색을 그려야 하는 경우
        측정된 사이즈와 마진에 맞게 그린다
         */
        if ((_a = this.background) === null || _a === void 0 ? void 0 : _a.isEnabled) {
            if (!this.backGroundRect) {
                this.backGroundRect = new rect_1.Rect({
                    position: { x: 0, y: 0 },
                    size: { width: 0, height: 0 },
                    fill: { color: (_b = this.background) === null || _b === void 0 ? void 0 : _b.color },
                    stroke: { color: "#FF0000", width: 0 },
                });
                this.backGroundRect.ctx = this.ctx;
            }
            if (this.background.isFitToSize) {
                this.calculateScreenSize();
                this.backGroundRect.setPosition({
                    x: 0,
                    y: -(this.screenSize.height * 0.1),
                });
                this.backGroundRect.setSize(this.screenSize);
            }
            else {
                this.backGroundRect.setSize(this.size);
            }
            this.backGroundRect.draw();
        }
        this.ctx.textBaseline = "top";
        this.ctx.fillStyle = this.fill.color;
        this.ctx.font =
            this.font.weight +
                " " +
                this.originalFontSize * this._zoom * this.multipleResizeTo +
                "px " +
                this.font.name;
        this.ctx.fillText(this.text, textPosition.x, textPosition.y);
    }
}
exports.BoundaryText = BoundaryText;


/***/ }),

/***/ "./src/path/circle.ts":
/*!****************************!*\
  !*** ./src/path/circle.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Circle extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.path.ellipse(this.size.width / 2, this.size.height / 2, this.size.width / 2 - this.stroke.width, this.size.height / 2 - this.stroke.width, 0, 0, 360);
    }
}
exports.Circle = Circle;


/***/ }),

/***/ "./src/path/closeMark.ts":
/*!*******************************!*\
  !*** ./src/path/closeMark.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMark = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class closeMark extends drawable_1.Drawable {
    // isIntersection(): boolean {
    //   throw new Error("Method not implemented.");
    // } dfdf
    // clickEvent() {
    //   this.click.func(this);
    // }
    drawPath() {
        // this.path.rect(
        //   this.stroke.width,
        //   this.stroke.width,
        //   this.size.width,
        //   this.size.height,
        // ); 
        this.ctx.beginPath();
        // this.path.moveTo(0, 0);
        // this.path.lineTo(this.size.width, this.size.height);
        // this.path.moveTo(0, this.size.height);
        // this.path.lineTo(this.size.width, 0);
        this.path.moveTo(this.size.width * 0.2, this.size.height * 0.2);
        this.path.lineTo(this.size.width - (this.size.width * 0.2), this.size.height - (this.size.height * 0.2));
        this.path.moveTo(this.size.width * 0.2, this.size.height - (this.size.height * 0.2));
        this.path.lineTo(this.size.width - (this.size.width * 0.2), this.size.height * 0.2);
        this.ctx.stroke();
    }
}
exports.closeMark = closeMark;


/***/ }),

/***/ "./src/path/equipment0.ts":
/*!********************************!*\
  !*** ./src/path/equipment0.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment0 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Equipment0 extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.path.moveTo(0, this.size.height * 0.9);
        this.path.lineTo(0, this.size.height * 0.01);
        this.path.lineTo(this.size.width - 3, this.size.height * 0.01);
        this.path.lineTo(this.size.width - 3, this.size.height * 0.9);
        this.path.lineTo(this.size.width - 6, this.size.height * 0.9);
        this.path.lineTo(this.size.width - 6, this.size.height * 0.03);
        this.path.lineTo(3, this.size.height * 0.03);
        this.path.lineTo(3, this.size.height * 0.9);
    }
}
exports.Equipment0 = Equipment0;


/***/ }),

/***/ "./src/path/equipment1.ts":
/*!********************************!*\
  !*** ./src/path/equipment1.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment1 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Equipment1 extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.path.moveTo(-(this.size.width / 2), 0);
        this.path.lineTo(this.size.width / 2, 0);
        this.path.lineTo(this.size.width / 2, 5);
        this.path.lineTo(1, 5);
        this.path.lineTo(1, this.size.height - 5);
        this.path.lineTo(this.size.width / 2, this.size.height - 5);
        this.path.lineTo(this.size.width / 2, this.size.height);
        this.path.lineTo(-(this.size.width / 2), this.size.height);
        this.path.lineTo(-(this.size.width / 2), this.size.height - 5);
        this.path.lineTo(-1, this.size.height - 5);
        this.path.lineTo(-1, 5);
        this.path.lineTo(-(this.size.width / 2), 5);
        this.path.moveTo(-(this.size.width / 2), 0);
    }
}
exports.Equipment1 = Equipment1;


/***/ }),

/***/ "./src/path/equipment1Name.ts":
/*!************************************!*\
  !*** ./src/path/equipment1Name.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment1Name = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Equipment1Name extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.path.moveTo(-(this.size.width / 2), this.size.height / 2);
        this.path.lineTo(20, 0);
    }
}
exports.Equipment1Name = Equipment1Name;


/***/ }),

/***/ "./src/path/equipment2.ts":
/*!********************************!*\
  !*** ./src/path/equipment2.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment2 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Equipment2 extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        const pathWidth = 4;
        this.path.moveTo(-(this.size.width / 2), 0);
        this.path.lineTo(-(this.size.width / 2), this.size.height);
        this.path.lineTo(-(this.size.width / 2) + pathWidth, this.size.height);
        this.path.lineTo(-(this.size.width / 2) + pathWidth, 0);
        this.path.lineTo(-(this.size.width / 2), 0);
        this.path.moveTo(this.size.width / 2, 0);
        this.path.lineTo(this.size.width / 2, this.size.height);
        this.path.lineTo(this.size.width / 2 - pathWidth, this.size.height);
        this.path.lineTo(this.size.width / 2 - pathWidth, 0);
        this.path.lineTo(this.size.width / 2, 0);
        this.path.moveTo(-(this.size.width / 2), this.size.height * 0.2);
        this.path.lineTo(-(this.size.width / 2), this.size.height * 0.2 + pathWidth);
        this.path.lineTo(this.size.width / 2, this.size.height * 0.2 + pathWidth);
        this.path.lineTo(this.size.width / 2, this.size.height * 0.2);
        this.path.lineTo(-(this.size.width / 2), this.size.height * 0.2);
        this.path.moveTo(-(this.size.width / 2), this.size.height * 0.8);
        this.path.lineTo(-(this.size.width / 2), this.size.height * 0.8 - pathWidth);
        this.path.lineTo(this.size.width / 2, this.size.height * 0.8 - pathWidth);
        this.path.lineTo(this.size.width / 2, this.size.height * 0.8);
        this.path.lineTo(-(this.size.width / 2), this.size.height * 0.8);
    }
}
exports.Equipment2 = Equipment2;


/***/ }),

/***/ "./src/path/equipment3.ts":
/*!********************************!*\
  !*** ./src/path/equipment3.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment3 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Equipment3 extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.ctx.strokeStyle = this.fill.color;
        this.ctx.strokeRect(-this.size.width / 2, 0, this.size.width, this.size.height);
    }
}
exports.Equipment3 = Equipment3;


/***/ }),

/***/ "./src/path/index.ts":
/*!***************************!*\
  !*** ./src/path/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const circle_1 = __webpack_require__(/*! ./circle */ "./src/path/circle.ts");
const rect_1 = __webpack_require__(/*! ./rect */ "./src/path/rect.ts");
const triangle_1 = __webpack_require__(/*! ./triangle */ "./src/path/triangle.ts");
const righttriangle_1 = __webpack_require__(/*! ./righttriangle */ "./src/path/righttriangle.ts");
const text_1 = __webpack_require__(/*! ./text */ "./src/path/text.ts");
const boundaryText_1 = __webpack_require__(/*! ./boundaryText */ "./src/path/boundaryText.ts");
const xmark_1 = __webpack_require__(/*! ./xmark */ "./src/path/xmark.ts");
const closeMark_1 = __webpack_require__(/*! ./closeMark */ "./src/path/closeMark.ts");
const obliqueLine_1 = __webpack_require__(/*! ./obliqueLine */ "./src/path/obliqueLine.ts");
const unsyncLine_1 = __webpack_require__(/*! ./unsyncLine */ "./src/path/unsyncLine.ts");
const line_1 = __webpack_require__(/*! ./line */ "./src/path/line.ts");
const lineDash_1 = __webpack_require__(/*! ./lineDash */ "./src/path/lineDash.ts");
const equipment0_1 = __webpack_require__(/*! ./equipment0 */ "./src/path/equipment0.ts");
const equipment1_1 = __webpack_require__(/*! ./equipment1 */ "./src/path/equipment1.ts");
const equipment2_1 = __webpack_require__(/*! ./equipment2 */ "./src/path/equipment2.ts");
const equipment3_1 = __webpack_require__(/*! ./equipment3 */ "./src/path/equipment3.ts");
const equipment1Name_1 = __webpack_require__(/*! ./equipment1Name */ "./src/path/equipment1Name.ts");
const vesselDeckHouse_1 = __webpack_require__(/*! ./vesselDeckHouse */ "./src/path/vesselDeckHouse.ts");
const vesselOutline_1 = __webpack_require__(/*! ./vesselOutline */ "./src/path/vesselOutline.ts");
const vesselOutline4side_1 = __webpack_require__(/*! ./vesselOutline4side */ "./src/path/vesselOutline4side.ts");
const vesselPropeller_1 = __webpack_require__(/*! ./vesselPropeller */ "./src/path/vesselPropeller.ts");
const vesselPropeller2_1 = __webpack_require__(/*! ./vesselPropeller2 */ "./src/path/vesselPropeller2.ts");
const vesselDeckHouse4side_1 = __webpack_require__(/*! ./vesselDeckHouse4side */ "./src/path/vesselDeckHouse4side.ts");
const vesselDeckHouse4side2_1 = __webpack_require__(/*! ./vesselDeckHouse4side2 */ "./src/path/vesselDeckHouse4side2.ts");
const vesselDeckHouse4side3_1 = __webpack_require__(/*! ./vesselDeckHouse4side3 */ "./src/path/vesselDeckHouse4side3.ts");
var Path;
(function (Path) {
    Path.Circle = circle_1.Circle;
    Path.Rect = rect_1.Rect;
    Path.Triangle = triangle_1.Triangle;
    Path.RightTriangle = righttriangle_1.RightTriangle;
    Path.Text = text_1.Text;
    Path.BoundaryText = boundaryText_1.BoundaryText;
    Path.XMark = xmark_1.XMark;
    Path.closeMark = closeMark_1.closeMark;
    Path.ObliqueLine = obliqueLine_1.ObliqueLine;
    Path.UnsyncLine = unsyncLine_1.UnsyncLine;
    Path.Line = line_1.Line;
    Path.LineDash = lineDash_1.LineDash;
    Path.Equipment0 = equipment0_1.Equipment0;
    Path.Equipment1 = equipment1_1.Equipment1;
    Path.Equipment2 = equipment2_1.Equipment2;
    Path.Equipment3 = equipment3_1.Equipment3;
    Path.Equipment1Name = equipment1Name_1.Equipment1Name;
    Path.VesselDeckHouse = vesselDeckHouse_1.VesselDeckHouse;
    Path.VesselOutline = vesselOutline_1.VesselOutline;
    Path.VesselOutline4side = vesselOutline4side_1.VesselOutline4side;
    Path.VesselPropeller = vesselPropeller_1.VesselPropeller;
    Path.VesselPropeller2 = vesselPropeller2_1.VesselPropeller2;
    Path.VesselDeckHouse4side = vesselDeckHouse4side_1.VesselDeckHouse4side;
    Path.VesselDeckHouse4side2 = vesselDeckHouse4side2_1.VesselDeckHouse4side2;
    Path.VesselDeckHouse4side3 = vesselDeckHouse4side3_1.VesselDeckHouse4side3;
})(Path = exports.Path || (exports.Path = {}));


/***/ }),

/***/ "./src/path/line.ts":
/*!**************************!*\
  !*** ./src/path/line.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Line extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.path.moveTo(0, 0);
        this.path.lineTo(this.size.width, this.size.height);
    }
}
exports.Line = Line;


/***/ }),

/***/ "./src/path/lineDash.ts":
/*!******************************!*\
  !*** ./src/path/lineDash.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LineDash = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class LineDash extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.ctx.setLineDash([2, 2]);
        this.path.moveTo(0, 0);
        this.path.lineTo(this.size.width, this.size.height);
    }
}
exports.LineDash = LineDash;


/***/ }),

/***/ "./src/path/obliqueLine.ts":
/*!*********************************!*\
  !*** ./src/path/obliqueLine.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObliqueLine = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class ObliqueLine extends drawable_1.Drawable {
    // isIntersection(): boolean {
    //   throw new Error("Method not implemented.");
    // }
    // clickEvent() {
    //   this.click.func(this);
    // }
    drawPath() {
        this.ctx.beginPath();
        this.path.moveTo(0, this.size.height);
        this.path.lineTo(this.size.width, 0);
        this.ctx.stroke();
    }
}
exports.ObliqueLine = ObliqueLine;


/***/ }),

/***/ "./src/path/rect.ts":
/*!**************************!*\
  !*** ./src/path/rect.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rect = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Rect extends drawable_1.Drawable {
    // isIntersection(): boolean {
    //   throw new Error("Method not implemented.");
    // }
    // clickEvent() {
    //   this.click.func(this);
    // }
    drawPath() {
        this.path.rect(this.stroke.width / 2, this.stroke.width / 2, this.size.width - this.stroke.width, this.size.height - this.stroke.width);
    }
}
exports.Rect = Rect;


/***/ }),

/***/ "./src/path/righttriangle.ts":
/*!***********************************!*\
  !*** ./src/path/righttriangle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RightTriangle = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class RightTriangle extends drawable_1.Drawable {
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    // calculateTranslatePosition() {
    //   /*
    //   회전축이 삼각형은 다른 도형과 다름 x좌표 + width/2a
    //   */
    //   this.translate_position.x = this.offset.x + this.width / 2;
    //   this.translate_position.y = this.offset.y;
    // }
    drawPath() {
        this.path.moveTo(0 + (this.size.width - this.stroke.width) / 2, this.stroke.width);
        this.path.lineTo(
        // this.size.width - this.stroke.width,
        0 + (this.size.width - this.stroke.width) / 2, this.size.height - this.stroke.width / 2);
        this.path.lineTo(this.stroke.width / 2, this.size.height - this.stroke.width / 2);
        this.path.lineTo(0 + (this.size.width - this.stroke.width) / 2, this.stroke.width);
    }
}
exports.RightTriangle = RightTriangle;


/***/ }),

/***/ "./src/path/text.ts":
/*!**************************!*\
  !*** ./src/path/text.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.TextVAlign = exports.TextAlign = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
const rect_1 = __webpack_require__(/*! ./rect */ "./src/path/rect.ts");
var TextAlign;
(function (TextAlign) {
    TextAlign[TextAlign["left"] = 0] = "left";
    TextAlign[TextAlign["center"] = 1] = "center";
    TextAlign[TextAlign["right"] = 2] = "right";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
var TextVAlign;
(function (TextVAlign) {
    TextVAlign[TextVAlign["top"] = 0] = "top";
    TextVAlign[TextVAlign["middle"] = 1] = "middle";
    TextVAlign[TextVAlign["bottom"] = 2] = "bottom";
})(TextVAlign = exports.TextVAlign || (exports.TextVAlign = {}));
class Text extends drawable_1.Drawable {
    constructor(props) {
        var _a, _b, _c;
        super(props);
        this.font = {};
        this.screenSize = {};
        this.font.name = ((_a = props.font) === null || _a === void 0 ? void 0 : _a.name) || "Arial";
        this.font.size = ((_b = props.font) === null || _b === void 0 ? void 0 : _b.size) || 12;
        this.originalFontSize = this.font.size;
        this.font.weight = ((_c = props.font) === null || _c === void 0 ? void 0 : _c.weight) || "";
        this.text = props.text || "";
        this.maxWidth = props.maxWidth;
        this.background = props.background || undefined;
        this.align = props.align || TextAlign.left;
        this.valign = props.valign || TextVAlign.top;
    }
    setFontSize(size) {
        this.font.size = size;
        this.originalFontSize = size;
    }
    calculateScreenSize() {
        this.ctx.textBaseline = "top";
        this.ctx.fillStyle = this.fill.color;
        this.ctx.font =
            this.font.weight +
                " " +
                this.originalFontSize * this._zoom * this.multipleResizeTo +
                "px " +
                this.font.name;
        /*
        background 배경색을 그리기 위해서 글자의 실제 가로 세로 크기를 구한다.
        30%마진을 준다
         */
        const metrics = this.ctx.measureText(this.text);
        this.screenSize.width = metrics.width;
        /*
        ancutalBoundingBox로 계산 정확하지 않음
         */
        this.screenSize.height =
            metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent * 1.4;
    }
    drawPath() {
        var _a, _b;
        let textPosition = { x: 0, y: 0 };
        if (this.align !== TextAlign.left) {
            this.calculateScreenSize();
            if (this.align === TextAlign.center) {
                textPosition.x = (this.size.width - this.screenSize.width) / 2;
            }
            else {
                textPosition.x = this.size.width - this.screenSize.width;
            }
        }
        if (this.valign !== TextVAlign.top) {
            this.calculateScreenSize();
            if (this.valign === TextVAlign.middle) {
                textPosition.y = (this.size.height - this.screenSize.height) / 2;
            }
            else {
                textPosition.y = this.size.height - this.screenSize.height;
            }
        }
        /*
        배경색을 그려야 하는 경우
        측정된 사이즈와 마진에 맞게 그린다
         */
        if ((_a = this.background) === null || _a === void 0 ? void 0 : _a.isEnabled) {
            if (!this.backGroundRect) {
                this.backGroundRect = new rect_1.Rect({
                    position: { x: 0, y: 0 },
                    size: { width: 0, height: 0 },
                    fill: { color: (_b = this.background) === null || _b === void 0 ? void 0 : _b.color },
                    stroke: { color: "#FF0000", width: 0 },
                });
                this.backGroundRect.ctx = this.ctx;
            }
            if (this.background.isFitToSize) {
                this.calculateScreenSize();
                this.backGroundRect.setPosition({
                    x: 0,
                    y: -(this.screenSize.height * 0.1),
                });
                this.backGroundRect.setSize(this.screenSize);
            }
            else {
                this.backGroundRect.setSize(this.size);
            }
            this.backGroundRect.draw();
        }
        this.ctx.textBaseline = "top";
        this.ctx.fillStyle = this.fill.color;
        this.ctx.font =
            this.font.weight +
                " " +
                this.originalFontSize * this._zoom * this.multipleResizeTo +
                "px " +
                this.font.name;
        this.ctx.fillText(this.text, textPosition.x, textPosition.y);
    }
}
exports.Text = Text;


/***/ }),

/***/ "./src/path/triangle.ts":
/*!******************************!*\
  !*** ./src/path/triangle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class Triangle extends drawable_1.Drawable {
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    // calculateTranslatePosition() {
    //   /*
    //   회전축이 삼각형은 다른 도형과 다름 x좌표 + width/2a
    //   */
    //   this.translate_position.x = this.offset.x + this.width / 2;
    //   this.translate_position.y = this.offset.y;
    // }
    drawPath() {
        this.path.moveTo(0 + (this.size.width - this.stroke.width) / 2, this.stroke.width);
        this.path.lineTo(this.size.width - this.stroke.width, this.size.height - this.stroke.width / 2);
        this.path.lineTo(this.stroke.width / 2, this.size.height - this.stroke.width / 2);
        this.path.lineTo(0 + (this.size.width - this.stroke.width) / 2, this.stroke.width);
    }
}
exports.Triangle = Triangle;


/***/ }),

/***/ "./src/path/unsyncLine.ts":
/*!********************************!*\
  !*** ./src/path/unsyncLine.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsyncLine = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class UnsyncLine extends drawable_1.Drawable {
    // isIntersection(): boolean {
    //   throw new Error("Method not implemented.");
    // }
    // clickEvent() {
    //   this.click.func(this);
    // }
    drawPath() {
        this.ctx.beginPath();
        this.path.moveTo(0, 0);
        this.path.lineTo(this.size.width, this.size.height);
        this.ctx.stroke();
    }
}
exports.UnsyncLine = UnsyncLine;


/***/ }),

/***/ "./src/path/vesselBow.ts":
/*!*******************************!*\
  !*** ./src/path/vesselBow.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselBow = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselBow extends drawable_1.Drawable {
    constructor(props) {
        var _a, _b;
        super(props);
        this.bowWidth = (_a = props.bowWidth) !== null && _a !== void 0 ? _a : 50;
        this.lcgHeight = (_b = props.lcgHeight) !== null && _b !== void 0 ? _b : 50;
    }
    drawPath() {
        // this.path.rect(
        //   this.stroke.width / 2,
        //   this.stroke.width / 2,
        //   this.size.width - this.stroke.width,
        //   this.size.height - this.stroke.width
        // );
        this.ctx.scale(1, this.size.height / 51.85);
        this.path.addPath(new Path2D("m -9.7119127,-2.4471248 c 2.4525809,2.67233959 3.442966,6.296481 4.6553693,9.6571271 1.88606,5.2279467 3.4626093,10.6511017 " +
            "4.0146515,16.1793607 0.14654383,1.467524 0.21859845,3.00416 -0.1954613,4.420029 -0.457064,1.562918 -1.5846479,2.848862 -2.4483162,4.230656 " +
            "-1.6794083,2.686913 -4.4135032,4.84879 -5.3098775,7.885669 -0.4467427,1.513543 -0.5576003,3.292354 0.089597,4.732167" +
            " 1.3116894,2.918116 4.189093,5.092837 7.0602609,6.520059 0.5646942,0.280703 1.86321404,0.334086 1.86321404,0.134086"));
        this.path.addPath(new Path2D("M 0,0 V -2.4670443 H -9.7933462"));
        this.path.addPath(new Path2D("M -3.3810182,-2.4945013 V -6.9829658 H -3.890805 v -4.0306532 h -1.3701635 v 3.9923746 h -0.5433409 v 4.5357121"));
        this.path.addPath(new Path2D("m -4.5149463,-10.963528 c 0,-1.996187 0,-3.992375 0,-5.988563"));
        this.path.addPath(new Path2D("m -5.9009748,-13.904657 c 0.8740699,0 1.74814,0 2.62221,0"));
    }
}
exports.VesselBow = VesselBow;


/***/ }),

/***/ "./src/path/vesselDeckHouse.ts":
/*!*************************************!*\
  !*** ./src/path/vesselDeckHouse.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselDeckHouse = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselDeckHouse extends drawable_1.Drawable {
    // x: number;
    // y: number;
    // width: number;
    // height: number;
    // ctx: CanvasRenderingContext2D;
    // constructor(props: IGeometry) {
    //   super(props);
    // }
    // setCanvas(ctx: CanvasRenderingContext2D) {
    //   this.ctx = ctx;
    // }
    drawPath() {
        this.path.moveTo(this.ctx.lineWidth / 2, this.ctx.lineWidth / 2);
        this.path.lineTo(this.size.width / 2, this.ctx.lineWidth / 2);
        this.path.lineTo(this.size.width / 2, this.size.height / 4);
        this.path.lineTo(this.size.width - this.ctx.lineWidth / 2, this.size.height / 4);
        this.path.lineTo(this.size.width - this.ctx.lineWidth / 2, (this.size.height / 4) * 3);
        this.path.lineTo(this.size.width / 2, (this.size.height / 4) * 3);
        this.path.lineTo(this.size.width / 2, this.size.height - this.ctx.lineWidth / 2);
        this.path.lineTo(this.ctx.lineWidth / 2, this.size.height - this.ctx.lineWidth / 2);
        this.path.lineTo(this.ctx.lineWidth / 2, this.ctx.lineWidth / 2);
    }
}
exports.VesselDeckHouse = VesselDeckHouse;


/***/ }),

/***/ "./src/path/vesselDeckHouse4side.ts":
/*!******************************************!*\
  !*** ./src/path/vesselDeckHouse4side.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselDeckHouse4side = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselDeckHouse4side extends drawable_1.Drawable {
    constructor(props) {
        super(props);
    }
    drawPath() {
        this.ctx.scale(this.size.width / 17.462, this.size.height / 34.623);
        this.path.ellipse(4.6213689, -33.547157, 0.61421132, 0.94494045, 0, 0, 360);
        this.path.addPath(new Path2D("M 0.13288296,-0.00176509 V -23.908762 H 9.298793 v 6.803567 h 8.032 v 17.10342991"));
        this.path.addPath(new Path2D("m 0.22736296,-24.003256 v -2.362351 H 8.070383 v 2.456845"));
        this.path.addPath(new Path2D("m 10.338233,-17.010695 v -12.000746 h 3.68527 c 0,0 1.83767,4.97832 1.95826,7.308357 v 4.692389"));
        this.path.addPath(new Path2D("m 4.668583,-26.365607 v -6.331102"));
        this.path.addPath(new Path2D("m 3.440173,-30.806828 h 2.55132"));
        this.ctx.scale(1, 1);
    }
}
exports.VesselDeckHouse4side = VesselDeckHouse4side;


/***/ }),

/***/ "./src/path/vesselDeckHouse4side2.ts":
/*!*******************************************!*\
  !*** ./src/path/vesselDeckHouse4side2.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselDeckHouse4side2 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselDeckHouse4side2 extends drawable_1.Drawable {
    constructor(props) {
        super(props);
    }
    drawPath() {
        this.ctx.scale(this.size.width / 17.462, this.size.height / 34.623);
        this.path.rect(12.394531, -25.420671, 0.5954266, 0.8898809);
        this.path.addPath(new Path2D("m 12.678523,-25.919353 v 2.873147"));
        this.path.addPath(new Path2D("m 11.392283,-24.415962 h 2.60588"));
        // <path
        //     style="display:inline;fill:none;stroke:#ff0000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
        // d="m 12.678523,-25.919353 v 2.873147"
        // id="path939" />
        // <path
        //     style="fill:none;stroke:#ff0000;stroke-width:0.293239px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
        // d="m 11.392283,-24.415962 h 2.60588"
        // id="path965" />
    }
}
exports.VesselDeckHouse4side2 = VesselDeckHouse4side2;


/***/ }),

/***/ "./src/path/vesselDeckHouse4side3.ts":
/*!*******************************************!*\
  !*** ./src/path/vesselDeckHouse4side3.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselDeckHouse4side3 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselDeckHouse4side3 extends drawable_1.Drawable {
    constructor(props) {
        super(props);
    }
    drawPath() {
        this.ctx.scale(this.size.width / 17.462, this.size.height / 34.623);
        this.path.rect(1.102417, -22.210993, 1.4699824, 2.0713389);
        this.path.rect(3.85849, -22.210993, 1.4699824, 2.0713389);
        this.path.rect(6.7609258, -22.210993, 1.4699824, 2.0713389);
        this.path.rect(1.102417, -18.817324, 1.4699824, 2.0713389);
        this.path.rect(3.85849, -18.817324, 1.4699824, 2.0713389);
        this.path.rect(6.7609258, -18.817324, 1.4699824, 2.0713389);
        this.path.rect(1.102417, -15.476449, 1.4699824, 2.0713389);
        this.path.rect(3.85849, -15.476449, 1.4699824, 2.0713389);
        this.path.rect(6.7609258, -15.476449, 1.4699824, 2.0713389);
        this.path.rect(9.7218628, -15.476449, 1.4699824, 2.0713389);
        this.path.rect(1.102417, -12.059068, 1.4699824, 2.0713389);
        this.path.rect(3.85849, -12.059068, 1.4699824, 2.0713389);
        this.path.rect(6.7609258, -12.059068, 1.4699824, 2.0713389);
        this.path.rect(9.7218628, -12.059068, 1.4699824, 2.0713389);
        this.path.rect(12.528198, -12.059068, 1.4699824, 2.0713389);
        this.path.rect(1.102417, -8.5845652, 1.4699824, 2.0713389);
        this.path.rect(3.85849, -8.5845652, 1.4699824, 2.0713389);
        this.path.rect(6.7609258, -8.5845652, 1.4699824, 2.0713389);
        this.path.rect(9.7218628, -8.5845652, 1.4699824, 2.0713389);
        this.path.rect(12.528198, -8.5845652, 1.4699824, 2.0713389);
        this.path.rect(1.102417, -3.5064476, 1.4699824, 2.0713389);
        this.path.rect(3.85849, -3.5064476, 1.4699824, 2.0713389);
        this.path.rect(6.7609258, -3.5064476, 1.4699824, 2.0713389);
        this.path.rect(9.7218628, -3.5064476, 1.4699824, 2.0713389);
        this.path.rect(12.528198, -3.5064476, 1.4699824, 2.0713389);
        this.path.addPath(new Path2D("m 0.26511296,-5.0389152 16.94029004,0.0668"));
    }
}
exports.VesselDeckHouse4side3 = VesselDeckHouse4side3;


/***/ }),

/***/ "./src/path/vesselOutline.ts":
/*!***********************************!*\
  !*** ./src/path/vesselOutline.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselOutline = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselOutline extends drawable_1.Drawable {
    constructor(props) {
        super(props);
        this.bowWidth = props.bowWidth || 50;
    }
    drawPath() {
        /*
            선박 외곽 직선을 그린다
            */
        this.path.moveTo(this.bowWidth, this.ctx.lineWidth / 2);
        this.path.lineTo(this.size.width, this.ctx.lineWidth / 2);
        this.path.lineTo(this.size.width, this.size.height - this.ctx.lineWidth / 2);
        this.path.lineTo(this.bowWidth, this.size.height - this.ctx.lineWidth / 2);
        /*
            선수를 그린다.
            */
        this.path.ellipse(this.bowWidth, this.size.height / 2, this.bowWidth - this.ctx.lineWidth / 2, this.size.height / 2 - this.ctx.lineWidth / 2, 0, Math.PI / 2, (Math.PI / 2) * 3);
    }
}
exports.VesselOutline = VesselOutline;


/***/ }),

/***/ "./src/path/vesselOutline4side.ts":
/*!****************************************!*\
  !*** ./src/path/vesselOutline4side.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselOutline4side = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselOutline4side extends drawable_1.Drawable {
    constructor(props) {
        var _a, _b;
        super(props);
        this.bowWidth = (_a = props.bowWidth) !== null && _a !== void 0 ? _a : 50;
        this.lcgHeight = (_b = props.lcgHeight) !== null && _b !== void 0 ? _b : 50;
    }
    drawPath() {
        /*
            선박 외곽 직선을 그린다
            */
        this.path.moveTo(0, this.ctx.lineWidth / 2);
        this.path.lineTo(this.size.width, this.ctx.lineWidth / 2);
        this.path.lineTo(this.size.width, (this.size.height / 3) * 2 - this.ctx.lineWidth / 2);
        this.path.moveTo((this.size.width / 30) * 29, this.size.height - this.ctx.lineWidth / 2);
        this.path.lineTo(0, this.size.height - this.ctx.lineWidth / 2);
    }
}
exports.VesselOutline4side = VesselOutline4side;


/***/ }),

/***/ "./src/path/vesselPropeller.ts":
/*!*************************************!*\
  !*** ./src/path/vesselPropeller.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselPropeller = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselPropeller extends drawable_1.Drawable {
    constructor(props) {
        super(props);
    }
    drawPath() {
        this.ctx.scale(this.size.width / 16.989, this.size.height / 22.351);
        this.path.addPath(new Path2D("m 0.00368021,0.00118194 c 0,0 5.66964989,-4.15773994 6.04763989,-7.37053994 0.37795,-3.21279 -0.35436,-6.16573 -2.29151,-9.00055 v -2.8112 c 0,0 0.92134,-2.22061 2.24425,-2.92932 H 16.82363"));
        this.path.addPath(new Path2D("m 10.02007,-22.063178 c 0,0 1.08667,17.10342 3.35452,22.4895799 h 2.92933 V -19.275608 h -4.06325 v -2.78757"));
    }
}
exports.VesselPropeller = VesselPropeller;


/***/ }),

/***/ "./src/path/vesselPropeller2.ts":
/*!**************************************!*\
  !*** ./src/path/vesselPropeller2.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VesselPropeller2 = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class VesselPropeller2 extends drawable_1.Drawable {
    constructor(props) {
        super(props);
    }
    drawPath() {
        this.ctx.scale(this.size.width / 16.989, this.size.height / 22.351);
        this.path.rect(6.2402873, -10.771144, 2.3623469, 2.7403262);
        this.path.rect(6.901755, -19.464588, 1.0866816, 20.127232);
        this.path.rect(8.5554113, -10.298672, 0.70870537, 1.6536458);
    }
}
exports.VesselPropeller2 = VesselPropeller2;


/***/ }),

/***/ "./src/path/xmark.ts":
/*!***************************!*\
  !*** ./src/path/xmark.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XMark = void 0;
const drawable_1 = __webpack_require__(/*! ../common/drawable */ "./src/common/drawable.ts");
class XMark extends drawable_1.Drawable {
    // isIntersection(): boolean {
    //   throw new Error("Method not implemented.");
    // }
    // clickEvent() {
    //   this.click.func(this);
    // }
    drawPath() {
        // this.path.rect(
        //   this.stroke.width,
        //   this.stroke.width,
        //   this.size.width,
        //   this.size.height,
        // ); 
        this.ctx.beginPath();
        this.path.moveTo(0, 0);
        this.path.lineTo(this.size.width, this.size.height);
        this.path.moveTo(0, this.size.height);
        this.path.lineTo(this.size.width, 0);
        // this.path.moveTo(this.size.width*0.2,this.size.height*0.2);
        // this.path.lineTo(this.size.width-(this.size.width*0.2), this.size.height-(this.size.height*0.2));
        // this.path.moveTo(this.size.width*0.2, this.size.height-(this.size.height*0.2));
        // this.path.lineTo(this.size.width-(this.size.width*0.2), this.size.height*0.2);
        this.ctx.stroke();
    }
}
exports.XMark = XMark;


/***/ }),

/***/ "./src/view/baseView.ts":
/*!******************************!*\
  !*** ./src/view/baseView.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseView = void 0;
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
class BaseView {
    constructor(props) {
        var _a;
        this.layout = (_a = props.layout) !== null && _a !== void 0 ? _a : new Map();
        this.data = props.data;
        this.event = props.event;
        this.renderer = new renderer_1.Renderer({
            surface: document.body,
            position: {
                x: this.layout.position.x,
                y: this.layout.position.y,
            },
            size: {
                width: this.layout.size.width,
                height: this.layout.size.height,
            },
        });
    }
}
exports.BaseView = BaseView;


/***/ }),

/***/ "./src/view/bayView.ts":
/*!*****************************!*\
  !*** ./src/view/bayView.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BayView = void 0;
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
const baseView_1 = __webpack_require__(/*! ./baseView */ "./src/view/baseView.ts");
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
class BayView extends baseView_1.BaseView {
    constructor(props) {
        super(props);
    }
    setBlockName(blockName) {
        this.blockName = blockName;
    }
    draw(blockName) {
        if (blockName)
            this.blockName = blockName;
        const bayViewRenderer = new renderer_1.Renderer(this.layout.bayView);
        //new Renderer(bayViewRendererProps);
        const bayBlock = new component_1.Component.BayBlock({
            layout: this.layout.bayBlockLayout,
            // slotProps: {
            //   layout: slotLayoutDescription,
            // },
            blockDefine: this.data[this.blockName],
        });
        // const slot = new TGL.Slot(slotLayoutDescriptionProps);
        bayViewRenderer.addDrawComponent(bayBlock);
        bayViewRenderer.draw();
    }
}
exports.BayView = BayView;


/***/ }),

/***/ "./src/view/bayViewRenderer.ts":
/*!*************************************!*\
  !*** ./src/view/bayViewRenderer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BayViewRenderer = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const bayBlock_1 = __webpack_require__(/*! ../component/bayBlock */ "./src/component/bayBlock.ts");
const container_1 = __webpack_require__(/*! ../component/container */ "./src/component/container.ts");
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
class BayViewRenderer extends renderer_1.Renderer {
    constructor(props) {
        var _a, _b;
        super(props);
        this.viewDir = props.viewDir;
        this.blockName = props.blockName;
        this.yardDefine = props.yardDefine;
        this.bayBlockLayoutDescription = props.bayBlockLayoutDescription;
        this.selectedBlockBayList = props.selectedBlockBayList;
        this.blockGap =
            ((_a = props.bayBlockProps) === null || _a === void 0 ? void 0 : _a.blockGap) === undefined
                ? 20
                : (_b = props.bayBlockProps) === null || _b === void 0 ? void 0 : _b.blockGap;
        this.viewType = props.viewType;
        this.isSelectMode = props.isSelectMode;
        this.isSelectContainer = props.isSelectContainer;
        this.isSelectSlot = props.isSelectSlot;
        this.isSelectBlock = props.isSelectBlock;
        this.isFitToSize = props.isFitToSize;
        this.isFitToFill = props.isFitToFill;
        this.closeButtonClick = props.closeButtonClick; //SL.Choi add
        this.bayBlockProps = Object.assign({}, Object.assign({}, props.bayBlockProps), {
            surface: this.surface,
            viewDir: this.viewDir,
            click: this.click,
            select: this.select,
            layout: this.bayBlockLayoutDescription,
            bayRow: this.yardDefine[this.blockName].maxRow,
            size: {
                width: this.surface.clientWidth,
                height: this.surface.clientHeight,
            },
            blockItem: this.yardDefine[this.blockName],
            // viewType: ViewDirection.Side,
            blockGap: this.blockGap,
            blockName: this.blockName,
            isFitToSize: this.isFitToSize,
            isFitToFill: this.isFitToFill,
            parent: this,
        });
        this.bayBlockProps.stackInfo.clientWidth = this.surface.clientWidth;
        this.bayBlockProps.stackInfo.clientHeight = this.surface.clientHeight;
        if (!this.isSelectMode) {
            this.clearBayBlock();
            this.addBayBlockList();
        }
        this.isMultiSelect = props.isMultiSelect;
    }
    rightClickEvent(e) {
        e.preventDefault();
        this.checkAndProcessClick(e, this);
        // if (this.click.isEnabled && this.click.funcRight) this.click.funcRight(this);
    }
    checkAndProcessSelect(obj) {
        if (this.select.isEnabled) {
            /*
          다중 선택 모드가 꺼져 있는 경우
          이미 선택된 대상이 있으면 초기화를 한다
           */
            if (!this.isMultiSelect) {
                this.clearSelectedCheckList(this);
            }
            if (this.dragInfo.dragging) {
                this.selectedDiv.style.display = "none";
                this.selectedList = [];
                this.searchSelectedObject(this.dragInfo.drawArea, obj);
                // select후 child 속성에 따라 slot, container, component ... 각각 function 반복 호출 되는 부분 제거
                // MA.Yang 2021.07.07 수정
                var isSelectChk = this.selectAllComponent(this.selectedList);
                if(isSelectChk)return;
            }
            /*
            IsLocked 제거
             */
            for (let i = this.selectedList.length - 1; i >= 0; i--) {
                const obj = this.selectedList[i];
                if (obj instanceof component_1.Component.Slot && obj.parent instanceof bayBlock_1.BayBlock) {
                    const bayBlock = obj.parent;
                    if (bayBlock.getIsLocked(obj.data.bayRow))
                        this.selectedList.splice(i, 1);
                }
            }
            let hasContainer = false;
            for (let i = 0; i < this.selectedList.length; i++) {
                let obj = this.selectedList[i];
                if (obj instanceof component_1.Component.Container) {
                    hasContainer = true;
                }
            }
            if (!this.isSelectContainer) {
                for (let i = this.selectedList.length - 1; i >= 0; i--) {
                    if (this.selectedList[i] instanceof component_1.Component.Container)
                        this.selectedList.splice(i, 1);
                }
            }
            if (!this.isSelectSlot) {
                for (let i = this.selectedList.length - 1; i >= 0; i--) {
                    if (this.selectedList[i] instanceof component_1.Component.Slot)
                        this.selectedList.splice(i, 1);
                }
            }
            if (!this.select.isEnabled) {
                for (let i = this.selectedList.length - 1; i >= 0; i--) {
                    if (this.selectedList[i] === this)
                        this.selectedList.splice(i, 1);
                }
            }
            if (this.isSelectBlock) {
                for (let i = this.selectedList.length - 1; i >= 0; i--) {
                    let obj = this.selectedList[i];
                    if (obj instanceof component_1.Component.Container ||
                        obj instanceof component_1.Component.Slot) {
                        this.selectedList.splice(i, 1);
                    }
                }
            }
            else if (hasContainer && this.isSelectContainer) {
                for (let i = this.selectedList.length - 1; i >= 0; i--) {
                    let obj = this.selectedList[i];
                    if (obj instanceof component_1.Component.Slot) {
                        this.selectedList.splice(i, 1);
                    }
                }
            }
            // else if (this.isSelectSlot) {
            //   for (let i=this.selectedList.length-1; i>=0; i--) {
            //     let obj = this.selectedList[i];
            //     if (obj instanceof Component.BayBlock) {
            //       this.selectedList.splice(i, 1);
            //     }
            //   }
            // }
            if (this.selectedList.length > 0) {
                for (let i = 0; i < this.selectedList.length; i++) {
                    const selectedObject = this.selectedList[i];
                    if (selectedObject instanceof component_1.Component.Container){
                        if(selectedObject.containerBayItem.planSequence != null){
                            selectedObject.selected = true;
                        }
                        selectedObject.select.type.circle = this.select.type.circle;
                    }
                    if ((selectedObject instanceof component_1.Component.Container &&
                        this.isSelectContainer) ||
                        (selectedObject instanceof component_1.Component.Slot && this.isSelectSlot) ||
                        (selectedObject instanceof component_1.Component.BayBlock && this.isSelectBlock))
                        selectedObject.checkSelected();
                }
                // this.draw();
            }
        }
        this.dragInfo.dragging = false;
    }
    checkAndProcessClick(e, obj) {
        if (this.click.isEnabled) {
            /*
            다중 선택 모드가 꺼져 있는 경우
            이미 선택된 대상이 있으면 초기화를 한다
           */
            if (!this.isMultiSelect) {
                this.clearSelectedCheckList(this);
            }
            this.clickedList = [];
            this.searchClickedObject(e, obj);
            for (let i = this.clickedList.length - 1; i >= 0; i--) { //SL.Choi add
                let obj = this.clickedList[i];
                if (obj instanceof component_1.Component.ButtonClose) {
                    this.closeButtonClick(obj);
                }
            }
            
            
            /*
            IsLocked 제거
             */
            for (let i = this.clickedList.length - 1; i >= 0; i--) {
                const obj = this.clickedList[i];
                if (obj instanceof component_1.Component.Slot && obj.parent instanceof bayBlock_1.BayBlock) {
                    const bayBlock = obj.parent;
                    if (bayBlock.getIsLocked(obj.data.bayRow))
                        this.clickedList.splice(i, 1);
                }
            }
            // console.log(this.clickedList);
            let hasContainer = false;
            let hasSlot = false;
            for (let i = 0; i < this.clickedList.length; i++) {
                let obj = this.clickedList[i];
                if (obj instanceof component_1.Component.Container) {
                    hasContainer = true;
                }
                if (obj instanceof component_1.Component.Slot) {
                    hasSlot = true;
                }
            }
            if (!this.isSelectContainer) {
                for (let i = this.clickedList.length - 1; i >= 0; i--) {
                    if (this.clickedList[i] instanceof component_1.Component.Container)
                        this.clickedList.splice(i, 1);
                }
            }
            if (!this.isSelectSlot) {
                for (let i = this.clickedList.length - 1; i >= 0; i--) {
                    if (this.clickedList[i] instanceof component_1.Component.Slot)
                        this.clickedList.splice(i, 1);
                }
            }
            // if (!this.isSelectContainer && !this.isSelectSlot) {
            //   for (let i = this.clickedList.length - 1; i >= 0; i--) {
            //     this.clickedList.splice(i, 1);
            //   }
            // }
            if (this.isSelectBlock) {
                for (let i = this.clickedList.length - 1; i >= 0; i--) {
                    let obj = this.clickedList[i];
                    if (obj instanceof component_1.Component.Container ||
                        obj instanceof component_1.Component.Slot) {
                        this.clickedList.splice(i, 1);
                    }
                }
            }
            else if (hasContainer && this.isSelectContainer) {
                for (let i = this.clickedList.length - 1; i >= 0; i--) {
                    let obj = this.clickedList[i];
                    if (obj instanceof component_1.Component.Slot) {
                        this.clickedList.splice(i, 1);
                    }
                }
            }
            // else if (this.isSelectSlot) {
            //   for (let i=this.clickedList.length-1; i>=0; i--) {
            //     let obj = this.clickedList[i];
            //     if (obj instanceof Component.BayBlock) {
            //       this.clickedList.splice(i, 1);
            //     }
            //   }
            // }
            if (this.clickedList.length > 0) {
                if (this.isMultiSelect) {
                    for (let i = 0; i < this.clickedList.length; i++) {
                        const clickedObject = this.clickedList[i];
                        if (e.type === "mouseup" && e.button === 0) {
                            // select후 child 속성에 따라 slot, container, component ... 각각 반복 호출 X LIST로 묶어서 한번 전달
                            // MA.Yang 2021.07.07 수정
                            // this.selectAllComponent(this.clickedList);
                            // console.log(this.clickedList[i]);
                            if (clickedObject instanceof component_1.Component.Container){
                                if(clickedObject.containerBayItem.planSequence != null){
                                    clickedObject.selected = true;
                                }
                                clickedObject.select.type.circle = this.select.type.circle;
                            }
                            if ((clickedObject instanceof component_1.Component.Container &&
                                this.isSelectContainer) ||
                                (clickedObject instanceof component_1.Component.Slot &&
                                    this.isSelectSlot) ||
                                (clickedObject instanceof component_1.Component.BayBlock &&
                                    this.isSelectBlock))
                                clickedObject.checkSelected();
                        }
                        else if (e.type === "contextmenu" ||
                            (e.type === "mouseup" && e.button === 2)) {
                            this.click.funcRight(clickedObject);
                        }
                    }
                }
                else {
                    for (let i = 0; i < this.clickedList.length; i++) {
                        const clickedObject = this.clickedList[i];
                        if (e.type === "mouseup" && e.button === 0) {
                            // this.click.func(clickedObject);

                            if (clickedObject instanceof component_1.Component.Container){
                                if(clickedObject.containerBayItem.planSequence != null){
                                    clickedObject.selected = true;
                                }
                                clickedObject.select.type.circle = this.select.type.circle;
                            }
                            if ((clickedObject instanceof component_1.Component.Container &&
                                this.isSelectContainer) ||
                                (clickedObject instanceof component_1.Component.Slot &&
                                    this.isSelectSlot) ||
                                (clickedObject instanceof component_1.Component.BayBlock &&
                                    this.isSelectBlock))
                                clickedObject.checkSelected();
                        }
                        else if (e.type === "contextmenu" ||
                            (e.type === "mouseup" && e.button === 2)) {
                            this.click.funcRight(clickedObject);
                        }
                    }
                    // click slot container data list로 전달
                    // MA.Yang 2021.07.07 수정
                    if(e.type === "mouseup" && e.button === 0)this.selectAllComponent(this.clickedList);
                }
                // this.draw();
                this.zoom(this._zoom);
            }
        }
    }

    changeBlock(blockName) {
        this.blockName = blockName;
        this.bayBlockProps.blockName = blockName;
        this.generateBayBlock();
    }
    changeSpBlock(blockName) {
        this.clearBayBlock();
        this.generateSpBayBlock();
    }
    generateSpBayBlock() {
        const _zoom = this._zoom;
        this.addSpBayBlockList();
        this.zoom(_zoom);
    }
    addSelectedBay(blockName, bay) {
        if (this.selectedBlockBayList[blockName] === undefined) {
            this.selectedBlockBayList[blockName] = new Array();
        }
        this.selectedBlockBayList[blockName].push(bay);
        console.log(this.selectedBlockBayList);
    }
    addSpBayBlockList() {
        for (var key in this.selectedBlockBayList) {
            this.blockName = key;
            this.bayBlockProps.blockName = key;
            for (var i = 0; i < this.selectedBlockBayList[key].length; i++) {
                this.addBayBlock(key, this.selectedBlockBayList[key][i]);
            }
        }
    }
    toFrontView() {
        this.viewDir = type_1.ViewDirection.Front;
        this.viewType = type_1.ViewDirection.Front;
        this.bayBlockProps.viewDir = type_1.ViewDirection.Front;
        this.bayBlockProps.viewType = type_1.ViewDirection.Front;
    }
    toSideView() {
        this.viewDir = type_1.ViewDirection.Side;
        this.viewType = type_1.ViewDirection.Side;
        this.bayBlockProps.viewDir = type_1.ViewDirection.Side;
        this.bayBlockProps.viewType = type_1.ViewDirection.Side;
    }
    generateBayBlock() {
        const _zoom = this._zoom;
        this.clearBayBlock();
        this.addBayBlockList();
        this.zoom(_zoom);
    }
    clearBayBlock() {
        this.clearDrawComponent();
        this.bayBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, {
            size: {
                width: this.bayBlockLayoutDescription.size.width,
                height: this.bayBlockLayoutDescription.size.height,
            },
        }, this.bayBlockProps, { isFitToFll: false, isFitToSize: false, isContainerType: true }));
        this.addDrawComponent(this.bayBlockGroup);
    }
    addBayBlockList() {
        if (this.viewDir == type_1.ViewDirection.Side) {
            for (let row = 1; row <= this.yardDefine[this.blockName].maxRow; row++) {
                this.addBayBlock(this.blockName, row);
            }
        }
        else {
            for (let bay = 1; bay <= this.yardDefine[this.blockName].maxBay; bay++) {
                this.addBayBlock(this.blockName, bay);
            }
        }
    }
    addBayBlock(blockName, bayRow) {
        if (!this.bayBlockGroup)
            this.clearBayBlock();
        if (this.viewDir == type_1.ViewDirection.Side) {
            const bayBlockProps2 = Object.assign(Object.assign({}, this.bayBlockProps), {
                position: {
                    x: 0,
                    y: 0,
                },
            }, {
                stackInfo: {
                    isEnabled: false,
                },
                bayRow: bayRow,
                size: {
                    width: this.yardDefine[blockName].rowList[bayRow].maxBay *
                        (this.bayBlockProps.slotProps.size.width +
                            this.bayBlockProps.slotProps.slotGap) +
                        this.blockGap * 2,
                    height: this.yardDefine[blockName].maxTier *
                        (this.bayBlockProps.slotProps.size.height +
                            this.bayBlockProps.slotProps.slotGap) +
                        this.blockGap * 2 +
                        15,
                },
                blockItem: this.yardDefine[blockName],
                data: this.yardDefine[blockName].rowList[bayRow],
            });
            bayBlockProps2.id = blockName + "-" + String(bayRow);
            const bayBlock = new bayBlock_1.BayBlock(bayBlockProps2);
            bayBlock.parent = this.bayBlockGroup;
            this.bayBlockGroup.appendChild(bayBlock);
        }
        else {
            const bayBlockProps2 = Object.assign(Object.assign({}, this.bayBlockProps), {
                position: {
                    x: 0,
                    y: 0,
                },
            }, {
                stackInfo: {
                    isEnabled: false,
                },
                bayRow: bayRow,
                size: {
                    width: this.yardDefine[blockName].bayList[bayRow].maxRow *
                        (this.bayBlockProps.slotProps.size.height +
                            this.bayBlockProps.slotProps.slotGap) +
                        this.blockGap * 2,
                    height: this.yardDefine[blockName].maxTier *
                        (this.bayBlockProps.slotProps.size.height +
                            this.bayBlockProps.slotProps.slotGap) +
                        this.blockGap * 2 +
                        15,
                },
                blockItem: this.yardDefine[blockName],
                data: this.yardDefine[blockName].bayList[bayRow],
            });
            bayBlockProps2.id = blockName + "-" + String(bayRow);
            const bayBlock = new bayBlock_1.BayBlock(bayBlockProps2);
            bayBlock.parent = this.bayBlockGroup;
            this.bayBlockGroup.appendChild(bayBlock);
        }
    }
    findBayBlock(blockName, bayRow) {
        return this.findBayBlockById(blockName + "-" + bayRow);
    }
    findBayBlockById(id) {
        for (let i = 0; i < this.bayBlockGroup.children.length; i++) {
            const child = this.bayBlockGroup.children[i];
            if (child.id === id)
                return child;
        }
    }
    findSlotById(blockName, bayRow, row, tier) {
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        return bayBlock.findSlotById(blockName + "-" + bayRow + "-" + row + "-" + tier);
    }
    addContainer(blockName, bayRow, row, tier, containerBayItem) {
        const slot = this.findSlotById(blockName, bayRow, row, tier);
        if (!slot)
            throw new Error("cannot find slot");
        let containerWidth = this.getContainerWidth(row, tier, containerBayItem);
        const container = new container_1.Container({
            textSizeMultiple: 1,
            containerBayItem: containerBayItem,
            size: {
                width: containerWidth,
                height: this.bayBlockProps.slotProps.size.height,
            },
            fill: {
                color: "#FFFFFF",
            },
            stackInfo: undefined,
            position: {
                x: slot.originalPosition.x,
                y: slot.originalPosition.y,
            },
            click: this.click,
            select: this.select,
            isTopView: false,
        });
        container._zoom = this._zoom;
        container.id = blockName + "-" + bayRow + "-" + row + "-" + tier;
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        if (!bayBlock)
            throw new Error("cannot find block");
        bayBlock.appendChild(container);
        container.addAllPaths();
        this.searchApplyZoom(1 / container.multipleResizeTo, container);
        return container;
        // this.zoom(this._zoom);
    }
    addSpContainer(blockName, bayRow, row, tier, containerBayItem) {
        const slot = this.findSlotById(blockName, bayRow, row, tier);
        if (!slot)
            throw new Error("cannot find slot");
        let containerWidth = this.getContainerWidth(row, tier, containerBayItem);
        const container = new container_1.Container({
            textSizeMultiple: 1,
            containerBayItem: containerBayItem,
            size: {
                width: containerWidth,
                height: this.bayBlockProps.slotProps.size.height,
            },
            fill: {
                color: containerBayItem.fillColor, //"#FFFFFF",
            },
            stackInfo: undefined,
            position: {
                x: slot.originalPosition.x,
                y: slot.originalPosition.y,
            },
            click: this.click,
            select: this.select,
            isTopView: false,
        });
        container._zoom = this._zoom;
        container.id = blockName + "-" + bayRow + "-" + row + "-" + tier;
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        if (!bayBlock)
            throw new Error("cannot find block");
        bayBlock.appendChild(container);
        container.addSpAllPaths(); //SL.Choi add
        this.searchApplyZoom(1 / container.multipleResizeTo, container);
        return container;
        // this.zoom(this._zoom);
    }
    getSelectedContainer() {
        let containers = [];
        for (let i = 0; i < this.bayBlockGroup.children[0].children.length; i++) {
            const child = this.bayBlockGroup.children[0].children[i];
            if (child instanceof component_1.Component.Container)
                if (child.selected)
                    containers.push(child);
        }
        return containers;
    }
    getSelectedObject() {
        let objects = [];
        for (let i = 0; i < this.bayBlockGroup.children[0].children.length; i++) {
            const child = this.bayBlockGroup.children[0].children[i];
            if (child.selected)
                objects.push(child);
        }
        return objects;
    }
    getContainer(blockName, bayRow, row, tier) {
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        return bayBlock.findContainerById(blockName + "-" + bayRow + "-" + row + "-" + tier);
    }
    // Duplicated container find by containerNo;
    // Tgl 추가 method (MA.YANG)
    getContainerByNo(blockName, bayRow, row, tier, containerNo) {
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        return bayBlock.findContainerByContainerNo(blockName + "-" + bayRow + "-" + row + "-" + tier, containerNo);
    }
    removeContainer(blockName, bayRow, row, tier) {
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        bayBlock.removeContainer(blockName + "-" + bayRow + "-" + row + "-" + tier);
    }
    // containerNo로 container를 remove 합니다.
    // Tgl 추가 method (MA.YANG)
    removeSelectedContainer(blockName, bayRow, row, tier, containerNo) {
        const bayBlock = this.findBayBlockById(blockName + "-" + bayRow);
        bayBlock.removeSelectedContainer(blockName + "-" + bayRow + "-" + row + "-" + tier, containerNo);
    }
    setIsVisibleAllContainers(isVisible) {
        for (let i = 0; i < this.bayBlockGroup.children.length; i++) {
            const bayBlock = this.bayBlockGroup.children[i];
            bayBlock.setIsVisibleAllContainers(isVisible);
        }
    }
    removeAllContainers() {
        for (let i = 0; i < this.bayBlockGroup.children.length; i++) {
            const bayBlock = this.bayBlockGroup.children[i];
            bayBlock.removeAllContainers();
        }
    }
    getContainerWidth(bayRow, tier, containerBayItem) {
        if (containerBayItem.OccupiedSlotCount > type_1.YardConstant.MIN_OccupiedSlotCount) {
            return this.getContainerWidth_NEW(bayRow, tier, containerBayItem);
        }
        return this.getContainerWidth_OLD(bayRow, tier, containerBayItem);
    }
    getContainerWidth_NEW(bayRow, tier, containerBayItem) {
        let tempWidth = this.bayBlockProps.slotProps.size.width;
        if (this.viewType == type_1.ViewDirection.Side) {
            let occupiedSlotCount = containerBayItem.OccupiedSlotCount;
            let realWidth = this.bayBlockProps.slotProps.size.width * occupiedSlotCount +
                this.bayBlockProps.slotProps.slotGap * Number(occupiedSlotCount - 1);
            tempWidth = realWidth;
        }
        return tempWidth;
    }
    getContainerWidth_OLD(bayRow, tier, containerBayItem) {
        let tempWidth = this.bayBlockProps.slotProps.size.height;
        if (this.viewType == type_1.ViewDirection.Side) {
            let nosVoid = 2;
            let cntrSize = containerBayItem.sizeType.length === 0
                ? containerBayItem.size
                : containerBayItem.sizeType;
            if (cntrSize.length === 0)
                cntrSize = type_1.YardConstant.CNTR_SIZE_20;
            switch (cntrSize.substring(0, 1)) {
                case type_1.YardConstant.CNTR_SIZE_20: // 20
                    tempWidth = this.bayBlockProps.slotProps.size.width;
                    break;
                case type_1.YardConstant.CNTR_SIZE_30: // 30
                case type_1.YardConstant.CNTR_SIZE_40: // 40
                    tempWidth =
                        this.bayBlockProps.slotProps.size.width * 2 +
                            this.bayBlockProps.slotProps.slotGap;
                    break;
                case type_1.YardConstant.CNTR_SIZE_45:
                case type_1.YardConstant.CNTR_SIZE_48:
                case type_1.YardConstant.CNTR_SIZE_L: // 45
                case type_1.YardConstant.CNTR_SIZE_M: // 48
                case type_1.YardConstant.CNTR_SIZE_P: // 53
                    if (containerBayItem.xBay != 0 &&
                        containerBayItem.xBay != containerBayItem.bay) {
                        if (containerBayItem.xBay < containerBayItem.bay) {
                            tempWidth = Math.round(this.bayBlockProps.slotProps.size.width * 2.25 +
                                this.bayBlockProps.slotProps.slotGap * 2);
                        }
                        else {
                            tempWidth = Math.round(this.bayBlockProps.slotProps.size.width * 2.25 +
                                this.bayBlockProps.slotProps.slotGap * 2);
                        }
                    }
                    else {
                        nosVoid = this.yardDefine[this.blockName].BayList[containerBayItem.bay].NosVoid;
                        tempWidth =
                            this.bayBlockProps.slotProps.size.width * nosVoid +
                                this.bayBlockProps.slotProps.slotGap * (nosVoid - 1);
                    }
                    break;
                default:
                    tempWidth = this.bayBlockProps.slotProps.size.width;
                    break;
            }
        }
        return tempWidth;
    }
    setBlockName(blockName) {
        this.blockName = blockName;
        this.bayBlockProps.blockName = blockName;
    }
    setVisibleYtBlock(isVisible) {
        this.bayBlockGroup.children.forEach((child) => {
            child.children.forEach((child) => {
                if (child.id.includes("YTDIR-")) {
                    child.isVisible = isVisible;
                }
            });
        });
    }
}
exports.BayViewRenderer = BayViewRenderer;


/***/ }),

/***/ "./src/view/blockTopViewRenderer.ts":
/*!******************************************!*\
  !*** ./src/view/blockTopViewRenderer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockTopViewRenderer = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const blockTop_1 = __webpack_require__(/*! ../component/blockTop */ "./src/component/blockTop.ts");
const container_1 = __webpack_require__(/*! ../component/container */ "./src/component/container.ts");
const slot_1 = __webpack_require__(/*! ../component/slot */ "./src/component/slot.ts");
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
const selectedBlock_1 = __webpack_require__(/*! ../component/selectedBlock */ "./src/component/selectedBlock.ts");
const function_1 = __webpack_require__(/*! ../common/function */ "./src/common/function.ts");
class BlockTopViewRenderer extends renderer_1.Renderer {
    constructor(props) {
        var _a, _b;
        super(props);
        this.yardDefine = props.yardDefine;
        this.blockTopLayoutDescription = props.blockTopLayoutDescription;
        this.blockGap =
            ((_a = props.blockTopProps) === null || _a === void 0 ? void 0 : _a.blockGap) === undefined
                ? 20
                : (_b = props.blockTopProps) === null || _b === void 0 ? void 0 : _b.blockGap;
        this.isSelectMode = props.isSelectMode;
        this.isFitToSize = props.isFitToSize;
        this.isFitToFill = props.isFitToFill;
        this.closeButtonClick = props.closeButtonClick;
        this.blockTopProps = Object.assign({}, props.blockTopProps, {
            surface: this.surface,
            click: this.click,
            select: this.select,
            layout: this.blockTopLayoutDescription,
            size: {
                width: this.surface.clientWidth,
                height: this.surface.clientHeight,
            },
            blockGap: this.blockGap,
            isFitToSize: this.isFitToSize,
            isFitToFill: this.isFitToFill,
            parent: this,
        });
        this.blockTopProps.stackInfo.clientWidth = this.surface.clientWidth;
        this.blockTopProps.stackInfo.clientHeight = this.surface.clientHeight;
        if (!this.isSelectMode) {
            this.clearTopBlock();
            this.addTopBlockList(this.yardDefine);
        }
        this.isMultiSelect = props.isMultiSelect;
        this.selectedBlocks = [];
        this.afterSelect = props.afterSelect || (() => { });
    }
    getSelectedBlocks() {
        return this.selectedBlocks;
    }
    rightClickEvent(e) {
        e.preventDefault();
        this.checkAndProcessClick(e, this);
        // if (this.click.isEnabled && this.click.funcRight) this.click.funcRight(this);
    }
    checkAndProcessSelect(obj) {
        if (this.select.isEnabled && this.dragInfo.dragging) {
            this.selectedDiv.style.display = "none";
            this.selectedList = [];
            this.searchSelectedObject(this.dragInfo.drawArea, obj);
        }
        if (this.selectedList.length > 0) {
            let selectedSlotWithBlock = {};
            this.selectedList.forEach((obj) => {
                if (obj instanceof slot_1.Slot) {
                    const blockName = obj.parent.blockName;
                    if (!selectedSlotWithBlock.hasOwnProperty(blockName)) {
                        selectedSlotWithBlock[blockName] = {};
                        selectedSlotWithBlock[blockName]["slots"] = [];
                    }
                    selectedSlotWithBlock[blockName]["slots"].push(obj);
                }
            });
            this.findSelectedAreaAndDraw(selectedSlotWithBlock);
        }
        this.dragInfo.dragging = false;
    }
    /*
    선택 영역을 찾아서 그린다
     */
    findSelectedAreaAndDraw(selectedSlotWithBlock) {
        if (Object.keys(selectedSlotWithBlock).length < 1)
            return;
        this.getSelectedArea(selectedSlotWithBlock);
        for (let key in selectedSlotWithBlock) {
            const selected = selectedSlotWithBlock[key];
            const selectedRect = new selectedBlock_1.SelectedBlock({
                id: "SELECTEDBLOCK-" + function_1.generateUUID(),
                stackInfo: undefined,
                position: {
                    x: selected.area.x,
                    y: selected.area.y,
                },
                size: {
                    width: selected.area.width,
                    height: selected.area.height,
                },
                fill: {
                    isEnabled: false,
                },
                stroke: {
                    color: "#FF0000",
                    width: 3,
                },
                select: {
                    isEnabled: true,
                    func: undefined,
                },
                data: {
                    slot: Object.assign(Object.assign({}, selected.data), selected.slots),
                },
            });
            let selectedBlock = {
                slots: selected.slots,
                block: selectedRect,
                area: selected.area,
                data: selected.data,
                parent: selected.parent,
            };
            var isReturn = this.afterSelect(selectedBlock);
            if (isReturn != false) {
                this.selectedBlocks.push(selectedBlock);
                selected.parent.appendChild(selectedRect);
                selectedRect.parent.draw();
            }
            // this.selectedBlocks.push(selectedBlock);
            // selected.parent.appendChild(selectedRect);
            // this.afterSelect(selectedBlock);
            // selectedRect.parent.draw();
        }
    }
    /*
      선택 영역을 찾아서 그린다2
       */
    SelectedAreaAndDraw(selectedSlotWithBlock) {
        if (Object.keys(selectedSlotWithBlock).length < 1)
            return;
        this.getSelectedArea(selectedSlotWithBlock);
        for (let key in selectedSlotWithBlock) {
            const selected = selectedSlotWithBlock[key];
            const selectedRect = new selectedBlock_1.SelectedBlock({
                id: "SELECTEDBLOCK-" + function_1.generateUUID(),
                stackInfo: undefined,
                position: {
                    x: selected.area.x,
                    y: selected.area.y,
                },
                size: {
                    width: selected.area.width,
                    height: selected.area.height,
                },
                fill: {
                    isEnabled: false,
                },
                stroke: {
                    color: selected.data.color,
                    width: 3,
                },
                data: {
                    slot: Object.assign(Object.assign({}, selected.data), selected.slots),
                },
            });
            let selectedBlock = {
                slots: selected.slots,
                block: selectedRect,
                area: selected.area,
                data: selected.data,
                parent: selected.parent,
            };
            this.selectedBlocks.push(selectedBlock);
            selected.parent.appendChild(selectedRect);
            // this.afterSelect(selectedBlock);
            selectedRect.parent.draw();
        }
    }
    /*
      화면이 갱신되면 갖고 있는 데이터로 선택 영역을 재구성한다
      슬롯 정보 또한 이전에 화면에 그려진 정보를 참조하므로 해당 슬롯을 전부 변경해 줄 필요성이 있다.
      화면에 존재하지 않는 블록과 화면에 존재하는 블록도 위치 변경을 경우를 대비해 전부 재구성하게 되어 있으므로
      모든 정보를 갱신하도록 한다.
      갱신하지 않으면, 현재 갖고 있는 데이터가 gabage collection이 되지 않아 메모리 누수를 유발하게 됨.
       */
    recalculateSelectedBlocksAndDraw() {
        this.selectBlockGroup.children = [];
        this.selectedBlocks.forEach((block) => {
            /*
            slot의 parent(block)을 재설정한다.
            */
            this.reassignParentBlock(block);
            this.calculateSelectedBlockArea(block);
            const selectedArea = block.area;
            const selectedBlock = new selectedBlock_1.SelectedBlock({
                stackInfo: undefined,
                position: {
                    x: selectedArea.x,
                    y: selectedArea.y,
                },
                size: {
                    width: selectedArea.width,
                    height: selectedArea.height,
                },
                fill: {
                    isEnabled: block.block.fill.isEnabled,
                    color: block.block.fill.color,
                },
                stroke: {
                    color: block.block.stroke.color,
                    width: block.block.stroke.width,
                },
                data: {
                    slot: block.slots,
                },
            });
            // this.selectBlockGroup.removeChildByObject(block.rect);
            // this.selectBlockGroup.appendChild(selectedRect);
            // this.afterSelect(block);
            block.parent.removeChildByObject(block.block);
            this.findTopBlockByName(block.parent.blockName).appendChild(selectedBlock);
            block.block = selectedBlock;
            selectedBlock.parent.draw();
        });
    }
    removeBlockItem(blockName) {
        for (let i = this.selectedBlocks.length - 1; i >= 0; i--) {
            const block = this.selectedBlocks[i];
            if (block.parent.blockName === blockName) {
                if (this.selectedBlocks[i].block)
                    this.selectedBlocks[i].block.parent = undefined;
                this.selectedBlocks[i].parent = undefined;
                this.selectedBlocks.splice(i, 1);
            }
        }
    }
    reassignParentBlock(selectedBlock) {
        let selectedList = selectedBlock.slots;
        selectedList.forEach((slot) => {
            const parent = slot.parent;
            const blockTop = this.findTopBlockByName(parent.blockName);
            /*
                  슬롯의 부모 block이 화면에 표시중이면 표시중인 블록으로 다시 치환한다
                  화면에 없으면 block에서 child관계를 제거한다
                   */
            if (blockTop) {
                if (blockTop !== parent) {
                    slot.parent = blockTop;
                    parent.removeChildById(slot.id);
                }
            }
            else {
                parent.removeChildById(slot.id);
            }
        });
    }
    getSelectedArea(selectedSlotWithBlock) {
        for (let key in selectedSlotWithBlock) {
            const selectedBlock = selectedSlotWithBlock[key];
            this.calculateSelectedBlockArea(selectedBlock);
        }
        return selectedSlotWithBlock;
    }
    calculateSelectedBlockArea(selectedBlock) {
        let area = {};
        let minPosition = {
            x: 999999,
            y: 999999,
        };
        let maxPosition = {
            x: 0,
            y: 0,
        };
        let selectedList = selectedBlock.slots;
        selectedList.forEach((obj) => {
            if (obj instanceof slot_1.Slot) {
                // parentPosition 사용 하지 않음으로 제거
                // const parentPosition = obj.parent.originalPosition;
                const slotArea = {
                    // x: obj.originalPosition.x + parentPosition.x,
                    // y: obj.originalPosition.y + parentPosition.y,
                    x: obj.originalPosition.x,
                    y: obj.originalPosition.y,
                    width: obj.originalPosition.x + obj.originalSize.width,
                    height: obj.originalPosition.y + obj.originalSize.height,
                };
                if (slotArea.x < minPosition.x)
                    minPosition.x = slotArea.x;
                // if (slotArea.y + parentPosition.y < minPosition.y)
                if (slotArea.y < minPosition.y)
                    minPosition.y = slotArea.y;
                if (slotArea.width > maxPosition.x)
                    maxPosition.x = slotArea.width;
                if (slotArea.height > maxPosition.y)
                    maxPosition.y = slotArea.height;
                if (!selectedBlock.parent) {
                    selectedBlock.parent = obj.parent;
                }
                if (!selectedBlock.currentTransform)
                    selectedBlock.currentTransform = Object.assign({}, obj.currentTransform);
            }
        });
        area.x = minPosition.x;
        area.y = minPosition.y;
        area.width = maxPosition.x - minPosition.x;
        area.height = maxPosition.y - minPosition.y;
        selectedBlock.area = area;
        return area;
    }
    checkAndProcessClick(e, obj) {
        // return;
        // console.log(e);
        // if (!this.isMultiSelect) {
        //     this.clearSelectedCheckList(this);
        // }
        if (this.click.isEnabled) {
            this.clickedList = [];
            this.searchClickedObject(e, obj);
            for (let i = this.clickedList.length - 1; i >= 0; i--) {
                let obj = this.clickedList[i];
                if (obj instanceof component_1.Component.ButtonClose) {
                    this.closeButtonClick(obj);
                }
            }
            for (let i = this.clickedList.length - 1; i >= 0; i--) {
                let obj = this.clickedList[i];
                if (!(obj instanceof component_1.Component.Slot) &&
                    !(obj instanceof component_1.Component.SelectedBlock)) {
                    this.clickedList.splice(i, 1);
                }
            }
            if (this.clickedList.length > 0) {
                if (this.isMultiSelect) {
                    for (let i = 0; i < this.clickedList.length; i++) {
                        // console.log(this.clickedList[i]);
                        let clickedObject = this.clickedList[i];
                        clickedObject.select.type.circle = false;
                        // clickedObject.checkSelected();
                        let selectedSlotWithBlock = {};
                        const blockName = clickedObject.parent.blockName;
                        if (!selectedSlotWithBlock.hasOwnProperty(blockName)) {
                            selectedSlotWithBlock[blockName] = {};
                            selectedSlotWithBlock[blockName]["slots"] = [];
                        }
                        selectedSlotWithBlock[blockName]["slots"].push(clickedObject);
                        this.findSelectedAreaAndDraw(selectedSlotWithBlock);
                    }
                }
                else {
                    let clickedObject = this.clickedList[this.clickedList.length - 1];
                    if (e.type === "mouseup" && e.button === 0) {
                        this.click.func(clickedObject);
                        if (clickedObject instanceof component_1.Component.Container) {
                            clickedObject.select.type.circle = true;
                        }
                        else {
                            clickedObject.select.type.circle = false;
                        }
                        // clickedObject.checkSelected();
                        let selectedSlotWithBlock = {};
                        const blockName = clickedObject.parent.blockName;
                        if (!selectedSlotWithBlock.hasOwnProperty(blockName)) {
                            selectedSlotWithBlock[blockName] = {};
                            selectedSlotWithBlock[blockName]["slots"] = [];
                        }
                        selectedSlotWithBlock[blockName]["slots"].push(clickedObject);
                        this.findSelectedAreaAndDraw(selectedSlotWithBlock);
                    }
                    else if (e.type === "contextmenu" ||
                        (e.type === "mouseup" && e.button === 2)) {
                        for (let i = 0; i < this.clickedList.length; i++) {
                            let clickedObject = this.clickedList[i];
                            this.click.funcRight(clickedObject);
                        }
                    }
                }
                // this.draw();
                // this.zoom(this._zoom);
            }
        }
    }
    calculateSelectedArea(slotList) {
        let selectedArea = { x: 999999, y: 999999, width: -1, height: -1 };
        let minX = 999999, minY = 999999, maxX = -1, maxY = -1;
        for (let i = 0; i < slotList.length; i++) {
            let slot = slotList[i];
            if (minX > slot.position.x) {
                minX = slot.position.x;
            }
            if (minY > slot.position.y) {
                minY = slot.position.y;
            }
            if (maxX < slot.position.x + slot.size.width) {
                maxX = slot.position.x + slot.size.width;
            }
            if (maxY < slot.position.y + slot.size.height) {
                maxY = slot.position.y + slot.size.height;
            }
        }
        selectedArea = {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
        return selectedArea;
    }
    // toFrontView() {
    //   this.viewDir = ViewDirection.Front;
    //   this.viewType = ViewDirection.Front;
    //   this.TopBlockProps.viewDir = ViewDirection.Front;
    //   this.TopBlockProps.viewType = ViewDirection.Front;
    //
    // }
    //
    // toSideView() {
    //   this.viewDir = ViewDirection.Side;
    //   this.viewType = ViewDirection.Side;
    //   this.TopBlockProps.viewDir = ViewDirection.Side;
    //   this.TopBlockProps.viewType = ViewDirection.Side;
    // }
    generateTopBlock() {
        const _zoom = this._zoom;
        this.clearTopBlock();
        this.addTopBlockList(this.yardDefine);
        this.draw();
        this.zoom(_zoom);
    }
    clearTopBlock() {
        this.clearDrawComponent();
        this.topBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            isFitToSize: false,
            isFitToTill: false,
        }));
        this.selectBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            isFitToSize: false,
            isFitToTill: false,
            stackInfo: {},
            fill: { isEnabled: false },
        }));
        this.addDrawComponent(this.topBlockGroup);
        this.addDrawComponent(this.selectBlockGroup);
    }
    addTopBlockList(yardDefine) {
        Object.keys(yardDefine).forEach(function (key) {
            this.addTopBlock(key);
        }.bind(this));
    }
    addTopBlock(blockName) {
        if (!this.topBlockGroup)
            this.clearTopBlock();
        // var size = this.originalSize;
        let blockTopProps2 = Object.assign(Object.assign({}, this.blockTopProps), {
            position: {
                x: 0,
                y: 0,
            },
        }, {
            rotate: 0,
            stackInfo: {
                isEnabled: false,
            },
            blockName: blockName,
            size: {
                width: this.yardDefine[blockName].maxBay *
                    (this.blockTopProps.slotProps.size.width +
                        this.blockTopProps.slotProps.slotGap) +
                    this.blockGap * 2,
                height: this.yardDefine[blockName].maxRow *
                    (this.blockTopProps.slotProps.size.height +
                        this.blockTopProps.slotProps.slotGap) +
                    this.blockGap * 2 +
                    15,
            },
            blockItem: this.yardDefine[blockName],
            data: this.yardDefine[blockName],
            bayRowOrder: {
                bay: this.yardDefine[blockName].bayDir === "R" ? 1 : 0,
                row: this.yardDefine[blockName].rowDir === "R" ? 1 : 0,
            },
        });
        const topBlock = new blockTop_1.BlockTop(blockTopProps2);
        topBlock.id = blockName;
        topBlock.parent = this.topBlockGroup;
        this.topBlockGroup.appendChild(topBlock);
        return topBlock;
    }
    findTopBlock(blockName, bayRow) {
        return this.findTopBlockByName(blockName + "-" + bayRow);
    }
    findTopBlockByName(blockName) {
        for (let i = 0; i < this.topBlockGroup.children.length; i++) {
            const child = this.topBlockGroup.children[i];
            if (child instanceof blockTop_1.BlockTop &&
                child.blockName === blockName)
                return child;
        }
    }
    findSlot(blockName, bay, row) {
        const topBlock = this.findTopBlockByName(blockName);
        return topBlock.findSlotById(blockName + "-" + bay + "-" + row);
    }
    addContainer(blockName, bay, row, tier, containerBayItem) {
        const topBlock = this.findTopBlockByName(blockName);
        if (!topBlock)
            throw new Error("cannot find block");
        const containerWidth = this.getContainerWidth(containerBayItem);
        /*
            bay가 역순이고 40피트(2칸)이면 bay+1의 Slot을 시작위치로 가져온다
             */
        try {
            const slot = containerWidth === 40 &&
                topBlock.bayRowOrder.bay === type_1.OrderDirection.Desc
                ? topBlock.findSlotById(blockName + "-" + (Number(bay) + 1) + "-" + row)
                : topBlock.findSlotById(blockName + "-" + Number(bay) + "-" + row);
            if (!slot)
                throw new Error("cannot find slot");
            const container = new container_1.Container({
                textSizeMultiple: 1,
                containerBayItem: containerBayItem,
                size: {
                    width: containerWidth === 40
                        ? containerWidth + this.blockTopProps.slotProps.slotGap
                        : containerWidth,
                    height: this.blockTopProps.slotProps.size.height,
                },
                fill: {
                    color: "#FFFFFF",
                },
                stackInfo: undefined,
                position: {
                    x: slot.originalPosition.x,
                    y: slot.originalPosition.y,
                },
                click: this.click,
                select: this.select,
                isTopView: true,
            });
            container._zoom = this._zoom;
            container.id = blockName + "-" + bay + "-" + row + "-" + tier;
            topBlock.appendChild(container);
            container.addAllPaths();
            this.searchApplyZoom(1 / container.multipleResizeTo, container);
            // for (let i=0; i<this.children[0].children.length; i++) {
            // const blockTop = <BlockTop>this.children[0].children[i];
            // if (topBlock.blockName === blockName) {
            //     if (containerBayItem.size === "20")
            //         topBlock.containerCountList[bay][0]++;
            //     else if (containerBayItem.size === "40")
            //         topBlock.containerCountList[bay+1][1]++;
            // }
            // }
            if (String(containerBayItem.size) === "20")
                topBlock.containerCountList[bay][0]++;
            else if (String(containerBayItem.size) === "40") {
                if (topBlock.bayRowOrder.bay === type_1.OrderDirection.Desc) {
                    topBlock.containerCountList[bay - 1][1]++;
                }
                else {
                    topBlock.containerCountList[bay + 1][1]++;
                }
            }
            return this.getContainer(blockName, bay, row, tier);
        }
        catch (e) {
            new Error(e);
        }
        // this.zoom(this._zoom);
    }
    reDrawCountText() {
        for (let i = 0; i < this.children[0].children.length; i++) {
            const blockTop = this.children[0].children[i];
            blockTop.removeAllCountText();
            blockTop.addCountText(blockTop.slotProps.size.width);
            blockTop.draw();
        }
    }
    getSelectedContainer() {
        for (let i = 0; i < this.topBlockGroup.children[0].children.length; i++) {
            const child = this.topBlockGroup.children[0].children[i];
            if (child instanceof component_1.Component.Container)
                if (child.selected)
                    return child;
        }
    }
    findContainerById(id) {
        const ids = id.split("-");
        return this.getContainer(ids[0], Number(ids[1]), Number(ids[2]), Number(ids[3]));
    }
    getContainer(blockName, bay, row, tier) {
        const topBlock = this.findTopBlockByName(blockName);
        return topBlock.findContainerById(blockName + "-" + bay + "-" + row + "-" + tier);
    }
    removeContainerById(id) {
        const ids = id.split("-");
        this.removeContainer(ids[0], Number(ids[1]), Number(ids[2]), Number(ids[3]));
    }
    removeContainer(blockName, bay, row, tier) {
        const topBlock = this.findTopBlockByName(blockName);
        topBlock.removeContainer(blockName + "-" + bay + "-" + row + "-" + tier);
    }
    getContainerWidth(containerBayItem) {
        // containerBayItem.Is20
        // if (containerBayItem.OccupiedSlotCount > YardConstant.MIN_OccupiedSlotCount) {
        //     return this.getContainerWidth_NEW(containerBayItem);
        // }
        return Number(containerBayItem.size);
        // return this.getContainerWidth_OLD(containerBayItem);
    }
    getContainerWidth_NEW(containerBayItem) {
        // let tempWidth = this.TopBlockProps.slotProps.size.width;
        let occupiedSlotCount = containerBayItem.OccupiedSlotCount;
        let realWidth = this.blockTopProps.slotProps.size.width * occupiedSlotCount +
            this.blockTopProps.slotProps.slotGap * Number(occupiedSlotCount - 1);
        // tempWidth = realWidth;
        return realWidth;
    }
    getContainerWidth_OLD(containerBayItem) {
        let tempWidth = this.blockTopProps.slotProps.size.height;
        let nosVoid = 2;
        let cntrSize = containerBayItem.sizeType.length === 0
            ? containerBayItem.size
            : containerBayItem.sizeType;
        if (cntrSize.length === 0)
            cntrSize = type_1.YardConstant.CNTR_SIZE_20;
        switch (cntrSize.substring(0, 1)) {
            case type_1.YardConstant.CNTR_SIZE_20: // 20
                tempWidth = this.blockTopProps.slotProps.size.width;
                break;
            case type_1.YardConstant.CNTR_SIZE_30: // 30
            case type_1.YardConstant.CNTR_SIZE_40: // 40
                tempWidth =
                    this.blockTopProps.slotProps.size.width * 2 +
                        this.blockTopProps.slotProps.slotGap;
                break;
            case type_1.YardConstant.CNTR_SIZE_45:
            case type_1.YardConstant.CNTR_SIZE_48:
            case type_1.YardConstant.CNTR_SIZE_L: // 45
            case type_1.YardConstant.CNTR_SIZE_M: // 48
            case type_1.YardConstant.CNTR_SIZE_P: // 53
                if (containerBayItem.xBay != 0 &&
                    containerBayItem.xBay != containerBayItem.bay) {
                    if (containerBayItem.xBay < containerBayItem.bay) {
                        tempWidth = Math.round(this.blockTopProps.slotProps.size.width * 2.25 +
                            this.blockTopProps.slotProps.slotGap * 2);
                    }
                    else {
                        tempWidth = Math.round(this.blockTopProps.slotProps.size.width * 2.25 +
                            this.blockTopProps.slotProps.slotGap * 2);
                    }
                }
                else {
                    // nosVoid = this.yardDefine[this.blockName].BayList[containerBayItem.bay].NosVoid;
                    tempWidth =
                        this.blockTopProps.slotProps.size.width * nosVoid +
                            this.blockTopProps.slotProps.slotGap * (nosVoid - 1);
                }
                break;
            default:
                tempWidth = this.blockTopProps.slotProps.size.width;
                break;
        }
        return tempWidth;
    }
    setVisibleYtBlock(isVisible) {
        this.topBlockGroup.children.forEach((child) => {
            child.children.forEach((child) => {
                if (child.id.includes("YTDIR-")) {
                    child.isVisible = isVisible;
                }
            });
        });
    }
}
exports.BlockTopViewRenderer = BlockTopViewRenderer;


/***/ }),

/***/ "./src/view/index.ts":
/*!***************************!*\
  !*** ./src/view/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const baseView_1 = __webpack_require__(/*! ./baseView */ "./src/view/baseView.ts");
const bayView_1 = __webpack_require__(/*! ./bayView */ "./src/view/bayView.ts");
const bayViewRenderer_1 = __webpack_require__(/*! ./bayViewRenderer */ "./src/view/bayViewRenderer.ts");
const topViewRenderer_1 = __webpack_require__(/*! ./topViewRenderer */ "./src/view/topViewRenderer.ts");
const blockTopViewRenderer_1 = __webpack_require__(/*! ./blockTopViewRenderer */ "./src/view/blockTopViewRenderer.ts");
const layoutViewRenderer_1 = __webpack_require__(/*! ./layoutViewRenderer */ "./src/view/layoutViewRenderer.ts");
const qcWorkingRenderer_1 = __webpack_require__(/*! ./qcWorkingRenderer */ "./src/view/qcWorkingRenderer.ts");
const qcWorkingSideRenderer_1 = __webpack_require__(/*! ./qcWorkingSideRenderer */ "./src/view/qcWorkingSideRenderer.ts");
var View;
(function (View) {
    View.BaseView = baseView_1.BaseView;
    View.BayView = bayView_1.BayView;
    View.BayViewRenderer = bayViewRenderer_1.BayViewRenderer;
    View.TopViewRenderer = topViewRenderer_1.TopViewRenderer;
    View.BlockTopViewRenderer = blockTopViewRenderer_1.BlockTopViewRenderer;
    View.LayoutViewRenderer = layoutViewRenderer_1.LayoutViewRenderer;
    View.QcWorkingRenderer = qcWorkingRenderer_1.QcWorkingRenderer;
    View.QcWorkingSideRenderer = qcWorkingSideRenderer_1.QcWorkingSideRenderer;
})(View = exports.View || (exports.View = {}));


/***/ }),

/***/ "./src/view/layoutViewRenderer.ts":
/*!****************************************!*\
  !*** ./src/view/layoutViewRenderer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutViewRenderer = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const container_1 = __webpack_require__(/*! ../component/container */ "./src/component/container.ts");
const slot_1 = __webpack_require__(/*! ../component/slot */ "./src/component/slot.ts");
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
const berthItem_1 = __webpack_require__(/*! ../component/berthItem */ "./src/component/berthItem.ts");
const bitItem_1 = __webpack_require__(/*! ../component/bitItem */ "./src/component/bitItem.ts");
const topBlock_1 = __webpack_require__(/*! ../component/topBlock */ "./src/component/topBlock.ts");
const blockTop4Layout_1 = __webpack_require__(/*! ../component/blockTop4Layout */ "./src/component/blockTop4Layout.ts");
const facilityItem_1 = __webpack_require__(/*! ../component/facilityItem */ "./src/component/facilityItem.ts");
const areaItem_1 = __webpack_require__(/*! ../component/areaItem */ "./src/component/areaItem.ts");
const terminalItem_1 = __webpack_require__(/*! ../component/terminalItem */ "./src/component/terminalItem.ts");
const berthVessel_1 = __webpack_require__(/*! ../component/berthVessel */ "./src/component/berthVessel.ts");
const function_1 = __webpack_require__(/*! ../common/function */ "./src/common/function.ts");
const selectedBlock_1 = __webpack_require__(/*! ../component/selectedBlock */ "./src/component/selectedBlock.ts");
class LayoutViewRenderer extends renderer_1.Renderer {
    constructor(props) {
        var _a, _b;
        super(props);
        this.multiply = 1;
        this.seaHeight = 100;
        this.yardDefine = props.yardDefine;
        this.blockTopLayoutDescription = props.blockTopLayoutDescription;
        this.blockGap =
            ((_a = props.blockTopProps) === null || _a === void 0 ? void 0 : _a.blockGap) === undefined
                ? 20
                : (_b = props.blockTopProps) === null || _b === void 0 ? void 0 : _b.blockGap;
        this.isSelectMode = props.isSelectMode;
        this.isSelectContainer = props.isSelectContainer;
        this.isSelectSlot = props.isSelectSlot;
        this.isSelectBlock = props.isSelectBlock;
        this.isFitToSize = props.isFitToSize;
        this.isFitToFill = props.isFitToFill;
        this.closeButtonClick = props.closeButtonClick;
        this.blockTopProps = Object.assign({}, props.blockTopProps, {
            surface: this.surface,
            click: this.click,
            select: this.select,
            layout: this.blockTopLayoutDescription,
            size: {
                width: this.surface.clientWidth,
                height: this.surface.clientHeight,
            },
            blockGap: this.blockGap,
            isFitToSize: this.isFitToSize,
            isFitToFill: this.isFitToFill,
            parent: this,
        });
        this.blockTopProps.stackInfo.clientWidth = this.surface.clientWidth;
        this.blockTopProps.stackInfo.clientHeight = this.surface.clientHeight;
        if (!this.isSelectMode) {
            this.clearTopBlock();
            this.addTopBlockList();
        }
        this.isMultiSelect = props.isMultiSelect;
        this.selectedBlocks = [];
        this.afterSelect = props.afterSelect || (() => { });
        this.multiply = props.multiply || 1;
        this.seaHeight = props.seaHeight || 100;
        this.isDrawSeaArea = props.isDrawSeaArea || false;
        this.seaBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            position: { x: 0, y: 0 },
            size: {
                width: this.size.width,
                height: this.seaHeight * this.multiply,
            },
            isFitToSize: false,
            isFitToTill: false,
            fill: { color: "#87CEEB", isEnabled: true },
        }));
        this.layoutBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            position: { x: 0, y: 0 },
            isFitToSize: false,
            isFitToTill: false,
        }));
        // const rect = new Path.Rect({
        //   position: { x: 0, y: 0 },
        //   size: {
        //     width: this.size.width,
        //     height: this.seaHeight * this.multiply,
        //   },
        //   fill: { color: "#87CEEB", isEnabled: true },
        // });
        // this.layoutBlockGroup.appendChild(rect);
        this.qcBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            position: { x: 0, y: 0 },
            isFitToSize: false,
            isFitToTill: false,
            stackInfo: {},
            fill: { isEnabled: false },
        }));
        if (this.isDrawSeaArea) {
            this.layoutBlockGroup.beforeAppendChild = function (child) {
                child.setPosition({
                    x: child.originalPosition.x,
                    y: child.originalPosition.y + this.seaHeight,
                });
            }.bind(this);
            this.qcBlockGroup.beforeAppendChild = function (child) {
                child.setPosition({
                    x: child.originalPosition.x,
                    y: child.originalPosition.y + this.seaHeight,
                });
            }.bind(this);
        }
        this.addDrawComponent(this.layoutBlockGroup);
        if (this.isDrawSeaArea)
            this.addDrawComponent(this.seaBlockGroup);
        this.addDrawComponent(this.qcBlockGroup);
        this.draw();
    }
    getSelectedBlocks() {
        return this.selectedBlocks;
    }
    rightClickEvent(e) {
        e.preventDefault();
        this.checkAndProcessClick(e, this);
        // if (this.click.isEnabled && this.click.funcRight) this.click.funcRight(this);
    }
    checkAndProcessSelect(obj) {
        if (this.select.isEnabled && this.dragInfo.dragging) {
            this.selectedDiv.style.display = "none";
            this.selectedList = [];
            this.searchSelectedObject(this.dragInfo.drawArea, obj);
        }
        if (this.isSelectBlock) {
            let selectedTemp = [];
            for (let i = this.selectedList.length - 1; i >= 0; i--) {
                let obj = this.selectedList[i];
                if (obj instanceof component_1.Component.BlockTop4Layout) {
                    selectedTemp.push(obj);
                }
                this.selectedList.splice(i, 1);
            }
            selectedTemp.forEach((obj) => {
                obj.children.forEach((child) => {
                    if (child instanceof component_1.Component.Slot) {
                        this.selectedList.push(child);
                    }
                });
            });
        }
        else if (this.isSelectSlot) {
            for (let i = this.selectedList.length - 1; i >= 0; i--) {
                let obj = this.selectedList[i];
                if (!(obj instanceof component_1.Component.Slot)) {
                    this.selectedList.splice(i, 1);
                }
            }
        }
        if (this.selectedList.length > 0) {
            let selectedSlotWithBlock = {};
            this.selectedList.forEach((obj) => {
                if (obj instanceof slot_1.Slot) {
                    const blockName = obj.parent.blockName;
                    if (!selectedSlotWithBlock.hasOwnProperty(blockName)) {
                        selectedSlotWithBlock[blockName] = {};
                        selectedSlotWithBlock[blockName]["slots"] = [];
                    }
                    selectedSlotWithBlock[blockName]["slots"].push(obj);
                }
            });
            this.findSelectedAreaAndDraw(selectedSlotWithBlock);
        }
        this.dragInfo.dragging = false;
    }
    /*
    선택 영역을 찾아서 그린다
     */
    findSelectedAreaAndDraw(selectedSlotWithBlock) {
        if (Object.keys(selectedSlotWithBlock).length < 1)
            return;
        this.getSelectedArea(selectedSlotWithBlock);
        for (let key in selectedSlotWithBlock) {
            const selected = selectedSlotWithBlock[key];
            const selectedRect = new selectedBlock_1.SelectedBlock({
                id: "SELECTEDBLOCK-" + function_1.generateUUID(),
                stackInfo: undefined,
                position: {
                    x: selected.area.x,
                    y: selected.area.y,
                },
                size: {
                    width: selected.area.width,
                    height: selected.area.height,
                },
                fill: {
                    isEnabled: false,
                },
                stroke: {
                    color: "#FF0000",
                    width: 3,
                },
                data: {
                    slot: Object.assign(Object.assign({}, selected.data), selected.slots),
                },
            });
            let selectedBlock = {
                slots: selected.slots,
                block: selectedRect,
                area: selected.area,
                data: selected.data,
                parent: selected.parent,
            };
            var isReturn = this.afterSelect(selectedBlock);
            if (isReturn != false) {
                this.selectedBlocks.push(selectedBlock);
                selected.parent.appendChild(selectedRect);
                selectedRect.parent.draw();
            }
        }
    }
    /*
      선택 영역을 찾아서 그린다2
       */
    SelectedAreaAndDraw(selectedSlotWithBlock) {
        if (Object.keys(selectedSlotWithBlock).length < 1)
            return;
        this.getSelectedArea(selectedSlotWithBlock);
        for (let key in selectedSlotWithBlock) {
            const selected = selectedSlotWithBlock[key];
            const selectedRect = new selectedBlock_1.SelectedBlock({
                id: "SELECTEDBLOCK-" + function_1.generateUUID(),
                stackInfo: undefined,
                position: {
                    x: selected.area.x,
                    y: selected.area.y,
                },
                size: {
                    width: selected.area.width,
                    height: selected.area.height,
                },
                fill: {
                    isEnabled: false,
                },
                stroke: {
                    color: selected.data.color,
                    width: 3,
                },
                data: {
                    slot: Object.assign(Object.assign({}, selected.data), selected.slots),
                },
            });
            let selectedBlock = {
                slots: selected.slots,
                block: selectedRect,
                area: selected.area,
                data: selected.data,
                parent: selected.parent,
            };
            this.selectedBlocks.push(selectedBlock);
            selected.parent.appendChild(selectedRect);
            // this.afterSelect(selectedBlock);
            selectedRect.parent.draw();
        }
    }
    /*
      화면이 갱신되면 갖고 있는 데이터로 선택 영역을 재구성한다
      슬롯 정보 또한 이전에 화면에 그려진 정보를 참조하므로 해당 슬롯을 전부 변경해 줄 필요성이 있다.
      화면에 존재하지 않는 블록과 화면에 존재하는 블록도 위치 변경을 경우를 대비해 전부 재구성하게 되어 있으므로
      모든 정보를 갱신하도록 한다.
      갱신하지 않으면, 현재 갖고 있는 데이터가 gabage collection이 되지 않아 메모리 누수를 유발하게 됨.
       */
    recalculateSelectedBlocksAndDraw() {
        this.selectBlockGroup.children = [];
        this.selectedBlocks.forEach((block) => {
            /*
            slot의 parent(block)을 재설정한다.
            */
            this.reassignParentBlock(block);
            this.calculateSelectedBlockArea(block);
            const selectedArea = block.area;
            const selectedBlock = new selectedBlock_1.SelectedBlock({
                stackInfo: undefined,
                position: {
                    x: selectedArea.x,
                    y: selectedArea.y,
                },
                size: {
                    width: selectedArea.width,
                    height: selectedArea.height,
                },
                fill: {
                    isEnabled: block.block.fill.isEnabled,
                    color: block.block.fill.color,
                },
                stroke: {
                    color: block.block.stroke.color,
                    width: block.block.stroke.width,
                },
                data: {
                    slot: block.slots,
                },
            });
            // this.selectBlockGroup.removeChildByObject(block.rect);
            // this.selectBlockGroup.appendChild(selectedRect);
            // this.afterSelect(block);
            block.parent.removeChildByObject(block.block);
            this.findTopBlockByName(block.parent.blockName).appendChild(selectedBlock);
            block.block = selectedBlock;
            selectedBlock.parent.draw();
        });
    }
    reassignParentBlock(selectedBlock) {
        let selectedList = selectedBlock.slots;
        selectedList.forEach((obj) => {
            const parent = obj.parent;
            const blockTop = this.findTopBlockByName(parent.blockName);
            /*
                  슬롯의 부모 block이 화면에 표시중이면 표시중인 블록으로 다시 치환한다
                  화면에 없으면 block에서 child관계를 제거한다
                   */
            if (blockTop) {
                if (blockTop !== parent) {
                    obj.parent = blockTop;
                    parent.removeChildById(obj.id);
                }
            }
            else {
                parent.removeChildById(obj.id);
            }
        });
    }
    getSelectedArea(selectedSlotWithBlock) {
        for (let key in selectedSlotWithBlock) {
            const selectedBlock = selectedSlotWithBlock[key];
            this.calculateSelectedBlockArea(selectedBlock);
        }
        return selectedSlotWithBlock;
    }
    calculateSelectedBlockArea(selectedBlock) {
        let area = {};
        let minPosition = {
            x: 999999,
            y: 999999,
        };
        let maxPosition = {
            x: 0,
            y: 0,
        };
        let selectedList = selectedBlock.slots;
        selectedList.forEach((obj) => {
            if (obj instanceof slot_1.Slot) {
                const parentPosition = obj.parent.originalPosition;
                const slotArea = {
                    x: obj.originalPosition.x,
                    y: obj.originalPosition.y,
                    width: obj.originalPosition.x + obj.originalSize.width,
                    height: obj.originalPosition.y + obj.originalSize.height,
                };
                if (slotArea.x < minPosition.x)
                    minPosition.x = slotArea.x;
                // if (slotArea.y + parentPosition.y < minPosition.y)
                if (slotArea.y < minPosition.y)
                    minPosition.y = slotArea.y;
                if (slotArea.width > maxPosition.x)
                    maxPosition.x = slotArea.width;
                if (slotArea.height > maxPosition.y)
                    maxPosition.y = slotArea.height;
                if (!selectedBlock.parent) {
                    selectedBlock.parent = obj.parent;
                }
                if (!selectedBlock.currentTransform)
                    selectedBlock.currentTransform = Object.assign({}, obj.currentTransform);
            }
        });
        area.x = minPosition.x;
        area.y = minPosition.y;
        area.width = maxPosition.x - minPosition.x;
        area.height = maxPosition.y - minPosition.y;
        selectedBlock.area = area;
        return area;
    }
    findTopBlockByName(blockName) {
        for (let i = 0; i < this.layoutBlockGroup.children.length; i++) {
            const child = this.layoutBlockGroup.children[i];
            if (child instanceof blockTop4Layout_1.BlockTop4Layout &&
                child.blockName === blockName)
                return child;
        }
    }
    checkAndProcessClick(e, obj) {
        // return;
        // console.log(e);
        // if (!this.isMultiSelect) {
        //     this.clearSelectedCheckList(this);
        // }
        if (this.click.isEnabled) {
            this.clickedList = [];
            this.searchClickedObject(e, obj);
            for (let i = this.clickedList.length - 1; i >= 0; i--) {
                let obj = this.clickedList[i];
                if (obj instanceof component_1.Component.ButtonClose) {
                    this.closeButtonClick(obj);
                }
            }
            for (let i = this.clickedList.length - 1; i >= 0; i--) {
                let obj = this.clickedList[i];
                if (!(obj instanceof component_1.Component.Slot) &&
                    !(obj instanceof component_1.Component.SelectedBlock) &&
                    !(obj instanceof component_1.Component.BlockTop4Layout)) {
                    this.clickedList.splice(i, 1);
                }
            }
            if (this.clickedList.length > 0) {
                if (e.type === "mouseup" && e.button === 0) {
                    if (this.isSelectBlock) {
                        let selectedTemp = [];
                        for (let i = this.clickedList.length - 1; i >= 0; i--) {
                            let obj = this.clickedList[i];
                            if (obj instanceof component_1.Component.BlockTop4Layout) {
                                selectedTemp.push(obj);
                            }
                            this.clickedList.splice(i, 1);
                        }
                        selectedTemp.forEach((obj) => {
                            obj.children.forEach((child) => {
                                if (child instanceof component_1.Component.Slot) {
                                    this.clickedList.push(child);
                                }
                            });
                        });
                    }
                    else if (this.isSelectSlot) {
                        for (let i = this.clickedList.length - 1; i >= 0; i--) {
                            let obj = this.clickedList[i];
                            if (!(obj instanceof component_1.Component.Slot)) {
                                this.clickedList.splice(i, 1);
                            }
                        }
                    }
                    let selectedSlotWithBlock = {};
                    this.clickedList.forEach((obj) => {
                        if (obj instanceof slot_1.Slot) {
                            const blockName = obj.parent.blockName;
                            if (!selectedSlotWithBlock.hasOwnProperty(blockName)) {
                                selectedSlotWithBlock[blockName] = {};
                                selectedSlotWithBlock[blockName]["slots"] = [];
                            }
                            selectedSlotWithBlock[blockName]["slots"].push(obj);
                        }
                    });
                    this.findSelectedAreaAndDraw(selectedSlotWithBlock);
                }
                else if (e.type === "contextmenu" ||
                    (e.type === "mouseup" && e.button === 2)) {
                    for (let i = 0; i < this.clickedList.length; i++) {
                        let clickedObject = this.clickedList[i];
                        this.click.funcRight(clickedObject);
                    }
                }
            }
        }
    }
    calculateSelectedArea(slotList) {
        let selectedArea = { x: 999999, y: 999999, width: -1, height: -1 };
        let minX = 999999, minY = 999999, maxX = -1, maxY = -1;
        for (let i = 0; i < slotList.length; i++) {
            let slot = slotList[i];
            if (minX > slot.position.x) {
                minX = slot.position.x;
            }
            if (minY > slot.position.y) {
                minY = slot.position.y;
            }
            if (maxX < slot.position.x + slot.size.width) {
                maxX = slot.position.x + slot.size.width;
            }
            if (maxY < slot.position.y + slot.size.height) {
                maxY = slot.position.y + slot.size.height;
            }
        }
        selectedArea = {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
        return selectedArea;
    }
    // toFrontView() {
    //   this.viewDir = ViewDirection.Front;
    //   this.viewType = ViewDirection.Front;
    //   this.TopBlockProps.viewDir = ViewDirection.Front;
    //   this.TopBlockProps.viewType = ViewDirection.Front;
    //
    // }
    //
    // toSideView() {
    //   this.viewDir = ViewDirection.Side;
    //   this.viewType = ViewDirection.Side;
    //   this.TopBlockProps.viewDir = ViewDirection.Side;
    //   this.TopBlockProps.viewType = ViewDirection.Side;
    // }
    generateTopBlock() {
        const _zoom = this._zoom;
        this.clearTopBlock();
        this.addTopBlockList();
        this.draw();
        this.zoom(_zoom);
    }
    clearTopBlock() {
        this.clearDrawComponentBy(topBlock_1.TopBlock);
        this.layoutBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            isFitToSize: false,
            isFitToTill: false,
        }));
        this.qcBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.blockTopProps, {
            isFitToSize: false,
            isFitToTill: false,
            stackInfo: {},
            fill: { isEnabled: false },
        }));
        this.addDrawComponent(this.layoutBlockGroup);
        this.addDrawComponent(this.qcBlockGroup);
    }
    addTopBlockList() {
        Object.keys(this.yardDefine).forEach(function (key) {
            this.addTopBlock(key);
        }.bind(this));
    }
    addTopBlock(blockName) {
        // if (!this.layoutBlockGroup) this.clearTopBlock();
        let layoutProps2 = Object.assign({}, this.blockTopProps, {
            stackInfo: {
                isEnabled: false,
            },
            blockName: blockName,
            position: this.yardDefine[blockName].position,
            size: {
                width: this.yardDefine[blockName].maxBay *
                    (this.yardDefine[blockName].slotLength * this.multiply) +
                    this.blockGap * 2,
                height: this.yardDefine[blockName].maxRow *
                    (this.yardDefine[blockName].slotWidth * this.multiply) +
                    this.blockGap * 2,
            },
            blockItem: this.yardDefine[blockName],
            data: this.yardDefine[blockName],
            bayRowOrder: {
                bay: this.yardDefine[blockName].bayDir === "R" ? 1 : 0,
                row: this.yardDefine[blockName].rowDir === "R" ? 1 : 0,
            },
            fill: {
                isEnabled: false,
            },
            rotate: this.yardDefine[blockName].deg,
        });
        layoutProps2.slotProps.slotGap = 0;
        layoutProps2.slotProps.size.width =
            this.yardDefine[blockName].slotLength * this.multiply -
                layoutProps2.slotProps.slotGap;
        layoutProps2.slotProps.size.height =
            this.yardDefine[blockName].slotWidth * this.multiply -
                layoutProps2.slotProps.slotGap;
        layoutProps2.horizontalGap = this.yardDefine[blockName].horizontalGap;
        layoutProps2.verticalGap = this.yardDefine[blockName].verticalGap;
        const topBlock = new blockTop4Layout_1.BlockTop4Layout(layoutProps2);
        topBlock.id = blockName;
        topBlock.parent = this.layoutBlockGroup;
        this.layoutBlockGroup.appendChild(topBlock);
        return topBlock;
    }
    getTopBlockList() {
        const topBlockList = [];
        this.layoutBlockGroup.children.forEach((child) => {
            if (child instanceof blockTop4Layout_1.BlockTop4Layout)
                topBlockList.push(child);
        });
        return topBlockList;
    }
    getCountInfo(blockName, index, datum) {
        const block = this.findTopBlockById(blockName);
        if (block) {
            return block.countInfo;
        }
    }
    setCountInfo(blockName, index, datum) {
        const block = this.findTopBlockById(blockName);
        if (block) {
            block.getCountInfo().setData(index, datum);
            return block.countInfo;
        }
    }
    findTopBlock(blockName) {
        return this.findTopBlockById(blockName);
    }
    findTopBlockById(id) {
        for (let i = 0; i < this.layoutBlockGroup.children.length; i++) {
            const child = this.layoutBlockGroup.children[i];
            if (child instanceof blockTop4Layout_1.BlockTop4Layout && child.id === id)
                return child;
        }
    }
    findBitItemByName(bitName) {
        for (let i = 0; i < this.layoutBlockGroup.children.length; i++) {
            const child = this.layoutBlockGroup.children[i];
            if (child instanceof bitItem_1.BitItem && child.bitName === bitName)
                return child;
        }
    }
    findSlot(blockName, bay, row) {
        const topBlock = this.findTopBlockById(blockName);
        return topBlock.findSlotById(blockName + "-" + bay + "-" + row);
    }
    addQc(bitName, qcName, fillColor) {
        const bitItem = this.findBitItemByName(bitName);
        // console.log(bitItem.originalPosition);
        const qc = new component_1.Component.Qc({
            position: {
                x: bitItem.originalPosition.x - 18,
                y: bitItem.originalPosition.y - this.seaHeight - 70,
            },
            size: {
                width: 36,
                height: 80,
            },
            stackInfo: undefined,
            // size: {
            //   width: bitItem.size.width,
            //   height: bitItem.size.height,
            // },
            fill: {
                isEnabled: true,
                color: fillColor,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
            equipmentName: qcName,
        });
        // console.log(qc.originalPosition);
        this.qcBlockGroup.appendChild(qc);
        return qc;
    }
    addTc(blockId, bay, equipmentName) {
        return this.findTopBlockById(blockId).addEquipment1(bay, equipmentName);
    }
    addContainer(blockName, bay, row, containerBayItem) {
        const topBlock = this.findTopBlockById(blockName);
        if (!topBlock)
            throw new Error("cannot find block");
        const selctedBlocks = topBlock.getChildIncludeId("SELCTEDBLOCK");
        let addIndex = topBlock.children.length - 1;
        if (selctedBlocks && this.selectedBlocks.length > 0) {
            selctedBlocks.forEach((block) => {
                const blockIndex = topBlock.children.indexOf(block);
                if (addIndex > blockIndex)
                    addIndex = blockIndex;
            });
        }
        const containerWidth = this.getContainerWidth(containerBayItem);
        const slot = containerWidth === 40 && topBlock.bayRowOrder.bay === type_1.OrderDirection.Desc
            ? topBlock.findSlotById(blockName + "-" + (Number(bay) + 1) + "-" + row)
            : topBlock.findSlotById(blockName + "-" + bay + "-" + row);
        if (!slot)
            throw new Error("cannot find slot");
        const container = new container_1.Container({
            textSizeMultiple: 1,
            containerBayItem: containerBayItem,
            size: {
                // width: containerWidth-2,
                // height: this.blockTopProps.slotProps.size.height-2
                width: containerWidth === 40
                    ? slot.originalSize.width * 2 +
                        slot.parent.horizontalGap
                    : slot.originalSize.width,
                height: slot.originalSize.height,
            },
            fill: {
                color: containerBayItem.fillColor || "#FFFFFF",
            },
            stroke: {
                width: 0,
                color: "#000000",
            },
            stackInfo: undefined,
            position: {
                x: slot.originalPosition.x,
                y: slot.originalPosition.y,
            },
            click: undefined,
            select: {
                isEnabled: false,
                func: undefined,
            },
            isTopView: true,
        });
        container._zoom = this._zoom;
        container.id = blockName + "-" + bay + "-" + row;
        topBlock.appendChild(container, addIndex);
        container.addAllPaths();
        this.searchApplyZoom(1 / container.multipleResizeTo, container);
        for (let i = 0; i < this.children[0].children.length; i++) {
            const layout = this.children[0].children[i];
            if (layout.blockName === blockName) {
                if (containerBayItem.size === "20")
                    layout.containerCountList[bay][0]++;
                else if (containerBayItem.size === "40")
                    layout.containerCountList[bay + 1][1]++;
            }
        }
        return this.getContainer(blockName, bay, row);
        // this.zoom(this._zoom);
    }
    // reDrawCountText() {
    //     for (let i=0; i<this.children[0].children.length; i++) {
    //         const layout = <BlockTop>this.children[0].children[i];
    //         layout.removeAllCountText();
    //         layout.addCountText(layout.slotProps.size.width);
    //         layout.draw();
    //     }
    // }
    // setIsVisibleAllContainers(isVisible: boolean) {
    //   for (let i = 0; i < this.layoutBlockGroup.children.length; i++) {
    //     const topBlock: TopBlock = <TopBlock>this.layoutBlockGroup.children[i];
    //     topBlock.setIsVisibleAllContainers(isVisible);
    //   }
    // }
    getSelectedContainer() {
        for (let i = 0; i < this.layoutBlockGroup.children[0].children.length; i++) {
            const child = this.layoutBlockGroup.children[0].children[i];
            if (child instanceof component_1.Component.Container)
                if (child.selected)
                    return child;
        }
    }
    findContainerById(id) {
        const ids = id.split("-");
        return this.getContainer(ids[0], Number(ids[1]), Number(ids[2]));
    }
    getContainer(blockName, bay, row) {
        const topBlock = this.findTopBlockById(blockName);
        return topBlock.findContainerById(blockName + "-" + bay + "-" + row);
    }
    removeContainerById(id) {
        const ids = id.split("-");
        this.removeContainer(ids[0], Number(ids[1]), Number(ids[2]));
    }
    removeContainer(blockName, bay, row) {
        const topBlock = this.findTopBlockById(blockName);
        topBlock.removeContainer(blockName + "-" + bay + "-" + row);
    }
    getContainerWidth(containerBayItem) {
        // containerBayItem.Is20
        // if (containerBayItem.OccupiedSlotCount > YardConstant.MIN_OccupiedSlotCount) {
        //     return this.getContainerWidth_NEW(containerBayItem);
        // }
        return Number(containerBayItem.size);
        // return this.getContainerWidth_OLD(containerBayItem);
    }
    getContainerWidth_NEW(containerBayItem) {
        // let tempWidth = this.TopBlockProps.slotProps.size.width;
        let occupiedSlotCount = containerBayItem.OccupiedSlotCount;
        let realWidth = this.blockTopProps.slotProps.size.width * occupiedSlotCount +
            this.blockTopProps.slotProps.slotGap * Number(occupiedSlotCount - 1);
        // tempWidth = realWidth;
        return realWidth;
    }
    getContainerWidth_OLD(containerBayItem) {
        let tempWidth = this.blockTopProps.slotProps.size.height;
        let nosVoid = 2;
        let cntrSize = containerBayItem.sizeType.length === 0
            ? containerBayItem.size
            : containerBayItem.sizeType;
        if (cntrSize.length === 0)
            cntrSize = type_1.YardConstant.CNTR_SIZE_20;
        switch (cntrSize.substring(0, 1)) {
            case type_1.YardConstant.CNTR_SIZE_20: // 20
                tempWidth = this.blockTopProps.slotProps.size.width;
                break;
            case type_1.YardConstant.CNTR_SIZE_30: // 30
            case type_1.YardConstant.CNTR_SIZE_40: // 40
                tempWidth =
                    this.blockTopProps.slotProps.size.width * 2 +
                        this.blockTopProps.slotProps.slotGap;
                break;
            case type_1.YardConstant.CNTR_SIZE_45:
            case type_1.YardConstant.CNTR_SIZE_48:
            case type_1.YardConstant.CNTR_SIZE_L: // 45
            case type_1.YardConstant.CNTR_SIZE_M: // 48
            case type_1.YardConstant.CNTR_SIZE_P: // 53
                if (containerBayItem.xBay != 0 &&
                    containerBayItem.xBay != containerBayItem.bay) {
                    if (containerBayItem.xBay < containerBayItem.bay) {
                        tempWidth = Math.round(this.blockTopProps.slotProps.size.width * 2.25 +
                            this.blockTopProps.slotProps.slotGap * 2);
                    }
                    else {
                        tempWidth = Math.round(this.blockTopProps.slotProps.size.width * 2.25 +
                            this.blockTopProps.slotProps.slotGap * 2);
                    }
                }
                else {
                    // nosVoid = this.yardDefine[this.blockName].BayList[containerBayItem.bay].NosVoid;
                    tempWidth =
                        this.blockTopProps.slotProps.size.width * nosVoid +
                            this.blockTopProps.slotProps.slotGap * (nosVoid - 1);
                }
                break;
            default:
                tempWidth = this.blockTopProps.slotProps.size.width;
                break;
        }
        return tempWidth;
    }
    addBerthItemByProps(berthItemProps) {
        const berthItem = new berthItem_1.BerthItem(berthItemProps);
        this.layoutBlockGroup.appendChild(berthItem);
        return berthItem;
    }
    addBitItemByProps(bitItemProps) {
        const bitItem = new bitItem_1.BitItem(bitItemProps);
        this.layoutBlockGroup.appendChild(bitItem);
        return bitItem;
    }
    addFacilityItemByProps(facilityItemProps) {
        const facilityItem = new facilityItem_1.FacilityItem(facilityItemProps);
        this.layoutBlockGroup.appendChild(facilityItem);
        return facilityItem;
    }
    addAreaItemByProps(areaItemProps) {
        const areaItem = new areaItem_1.AreaItem(areaItemProps);
        this.layoutBlockGroup.appendChild(areaItem);
        return areaItem;
    }
    addTerminalItemByProps(terminalItemProps) {
        const terminalItem = new terminalItem_1.TerminalItem(terminalItemProps);
        this.layoutBlockGroup.appendChild(terminalItem);
        // this.seaBlockGroup.setSize({
        //   height: this.seaBlockGroup.originalSize.height,
        //   width: terminalItem.size.width,
        // });
        // this.seaBlockGroup.draw();
        return terminalItem;
    }
    addBerthVessel(berthVessel) {
        const vesselStartTopPos = this.seaHeight - berthVessel.vesselParticular.width;
        const berthVesselProps = {
            data: berthVessel,
            stroke: { color: "#000000", width: 1 },
            position: { x: 0, y: vesselStartTopPos },
        };
        const vessel = new berthVessel_1.BerthVessel(berthVesselProps);
        this.seaBlockGroup.appendChild(vessel);
        // vessel.draw(false);
        return vessel;
        // vesselStartTopPos += 80;
    }
    draw() {
        super.draw();
        this.getTopBlockList().forEach((block) => {
            var _a;
            (_a = block.getCountInfo()) === null || _a === void 0 ? void 0 : _a.draw(true);
        });
    }
    getHatchBayPosition(vslCD, callYear, callSeq, bayNo) {
        const berthVessel = this.findVesselByInfo(vslCD, callYear, callSeq);
        if (berthVessel) {
            // @ts-ignore
            return berthVessel.hatchBayPositions[bayNo];
        }
    }
    findVesselByInfo(vslCD, callYear, callSeq) {
        for (let i = 0; i < this.seaBlockGroup.children.length; i++) {
            const child = this.seaBlockGroup.children[i];
            if (child instanceof berthVessel_1.BerthVessel) {
                if (child.data.vslCd === vslCD &&
                    child.data.callYear === callYear &&
                    child.data.callSeq === callSeq) {
                    return child;
                }
            }
        }
        return null;
    }
    setVisibleCountInfo(isVisible) {
        this.layoutBlockGroup.children.forEach((child) => {
            if (child instanceof component_1.Component.BlockTop4Layout) {
                child.children.forEach((child) => {
                    if (child instanceof component_1.Component.CountInfo) {
                        child.isVisible = isVisible;
                    }
                });
            }
        });
    }
    setVisibleCountInfoText(isVisible) {
        this.layoutBlockGroup.children.forEach((child) => {
            if (child instanceof component_1.Component.BlockTop4Layout) {
                child
                    .getChildIncludeId("CountInfoText")
                    .forEach((txt) => (txt.isVisible = isVisible));
            }
        });
    }
}
exports.LayoutViewRenderer = LayoutViewRenderer;


/***/ }),

/***/ "./src/view/qcWorkingRenderer.ts":
/*!***************************************!*\
  !*** ./src/view/qcWorkingRenderer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QcWorkingRenderer = void 0;
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const berthVessel_1 = __webpack_require__(/*! ../component/berthVessel */ "./src/component/berthVessel.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
const berthItem4qc_1 = __webpack_require__(/*! ../component/berthItem4qc */ "./src/component/berthItem4qc.ts");
const function_1 = __webpack_require__(/*! ../common/function */ "./src/common/function.ts");
class QcWorkingRenderer extends renderer_1.Renderer {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        super(props);
        this.multiply = (_a = props.multiply) !== null && _a !== void 0 ? _a : 1;
        this.seaHeight = (_b = props.seaHeight) !== null && _b !== void 0 ? _b : 100;
        this.dateTimeGridPositionY = (_c = props.dateTimeGridPositionY) !== null && _c !== void 0 ? _c : 160;
        this.timeLineVertGap = (_d = props.timeLineVertGap) !== null && _d !== void 0 ? _d : 5;
        this.timeGap = (_e = props.timeGap) !== null && _e !== void 0 ? _e : 3;
        this.startDateTime = (_f = props.startDateTime) !== null && _f !== void 0 ? _f : new Date();
        this.endDateTime = (_g = props.endDateTime) !== null && _g !== void 0 ? _g : new Date();
        this.timeLineWidth = (_h = props.timeLineWidth) !== null && _h !== void 0 ? _h : 5;
        this.gridWidth = (_j = props.gridWidth) !== null && _j !== void 0 ? _j : 50;
        this.isDrawCrossLine = (_k = props.isDrawCrossLine) !== null && _k !== void 0 ? _k : false;
        this.isDrawContainerPlan = (_l = props.isDrawContainerPlan) !== null && _l !== void 0 ? _l : false;
        this.totalMinute =
            (this.endDateTime.getTime() - this.startDateTime.getTime()) / 1000 / 60;
        this.totalMinuteLine = this.totalMinute / this.timeGap;
        const bound = this.surface.getBoundingClientRect();
        this.mousePosDiv = document.createElement("div");
        this.mousePosDiv.id = function_1.generateUUID();
        this.mousePosDiv.style.position = "absolute";
        // this.mousePosDiv.style.opacity = "0.3";
        this.mousePosDiv.style.pointerEvents = "none";
        // this.mousePosDiv.style.backgroundColor = "#0000ff";
        this.mousePosDiv.style.width = this.surface.style.width;
        this.mousePosDiv.style.height = this.surface.style.height;
        /*
        "x-panel-body"를 포함하는 경우
        sencha 컴포넌트라고 판단하고 div position을 변경한다
         */
        if (this.surface.parentNode.className.indexOf("x-panel-body") > -1) {
            this.mousePosDiv.style.left = "0px";
            this.mousePosDiv.style.top = "0px";
        }
        else {
            this.mousePosDiv.style.left = bound.x + "px";
            this.mousePosDiv.style.top = bound.y + "px";
        }
        this.mousePosDiv.style.zIndex = String(1000);
        this.surface.appendChild(this.mousePosDiv);
        const mousePosCanvas = document.createElement("canvas");
        mousePosCanvas.width = Number(this.mousePosDiv.style.width.replace("px", ""));
        mousePosCanvas.height = Number(this.mousePosDiv.style.height.replace("px", ""));
        this.mousePosDiv.appendChild(mousePosCanvas);
        this.mousePosCtx = mousePosCanvas.getContext("2d");
        this.qcBlockGroup = new baseDrawComponent_1.BaseDrawComponent({
            size: {
                width: 1900,
                height: 2000,
            },
            stackInfo: {
                isEnabled: false,
            },
        });
        this.addDrawComponent(this.qcBlockGroup);
        this.rectDateTime = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFFF",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(this.rectDateTime);
        this.rectDateTimeSchedule = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: this.dateTimeGridPositionY,
            },
            size: {
                width: this.berthLength,
                height: this.totalMinuteLine * this.timeLineVertGap,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFFF",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(this.rectDateTimeSchedule);
        this.setDateTime();
    }
    rightClickEvent(e) {
        e.preventDefault();
        this.checkAndProcessClick(e, this);
        // if (this.click.isEnabled && this.click.funcRight) this.click.funcRight(this);
    }
    checkAndProcessSelect(obj) {
        if (this.select.isEnabled && this.dragInfo.dragging) {
            this.selectedDiv.style.display = "none";
            this.selectedList = [];
            this.searchSelectedObject(this.dragInfo.drawArea, obj);
        }
        this.dragInfo.dragging = false;
    }
    checkAndProcessClick(e, obj) {
        this.searchClickedObject(e, obj);
        // if (e.type === "mouseup" && e.button === 0) {
        //   this.click.func(obj);
        // } else if (
        //   e.type === "contextmenu" ||
        //   (e.type === "mouseup" && e.button === 2)
        // ) {
        //   this.click.funcRight(obj);
        // }
        // this.isCancelClick = false;
    }
    getHatchBayPosition(vslCD, callYear, callSeq, bayIndex) {
        const berthVessel = this.findVesselByInfo(vslCD, callYear, callSeq);
        if (berthVessel) {
            let bayNo = berthVessel.data.vesselBays[bayIndex].no;
            // @ts-ignore
            return berthVessel.hatchBayPositions[bayNo];
        }
    }
    getHatchPosition(vslCD, callYear, callSeq, hatchIndex) {
        const berthVessel = this.findVesselByInfo(vslCD, callYear, callSeq);
        if (berthVessel) {
            const hatchRect = berthVessel.findAllHatchRect()[hatchIndex];
            // @ts-ignore
            return {
                x: hatchRect.position.x,
                width: hatchRect.size.width,
            };
        }
    }
    findVesselByInfo(vslCD, callYear, callSeq) {
        for (let i = 0; i < this.qcBlockGroup.children.length; i++) {
            const child = this.qcBlockGroup.children[i];
            if (child instanceof berthVessel_1.BerthVessel) {
                if (child.data.vslCd === vslCD &&
                    child.data.callYear === callYear &&
                    child.data.callSeq === callSeq) {
                    return child;
                }
            }
        }
        return null;
    }
    findAllVessel() {
        let vessels = [];
        for (let i = 0; i < this.qcBlockGroup.children.length; i++) {
            const child = this.qcBlockGroup.children[i];
            if (child instanceof berthVessel_1.BerthVessel) {
                vessels.push(child);
            }
        }
        return vessels;
    }
    addAndDrawHatchLines() {
        var _a;
        for (let i = this.qcBlockGroup.children.length - 1; i >= 0; i--) {
            let child = this.qcBlockGroup.children[i];
            if (child instanceof path_1.Path.Line &&
                ((_a = child.data) === null || _a === void 0 ? void 0 : _a.type.indexOf("HATCHLINE")) > -1) {
                child.parent = undefined;
                this.qcBlockGroup.children.splice(i, 1);
            }
        }
        this.findAllVessel().forEach((vessel) => vessel.findAllHatchRect().forEach((hatchRect) => {
            if (vessel.data.alongSide !== 10) {
                const line1 = new path_1.Path.Line({
                    data: {
                        type: "HATCHLINE1",
                    },
                    position: {
                        x: (hatchRect.areaPointAndLines.points[0].x +
                            (hatchRect.areaPointAndLines.points[0].x <
                                hatchRect.areaPointAndLines.points[1].x
                                ? hatchRect.stroke.width / 2
                                : -hatchRect.stroke.width / 2)) /
                            this._zoom,
                        y: this.dateTimeGridPositionY,
                    },
                    size: {
                        width: 0,
                        height: this.totalMinuteLine * this.timeLineVertGap,
                    },
                    stroke: {
                        width: 1,
                        color: "#BBBBBB",
                    },
                });
                this.qcBlockGroup.appendChild(line1);
                line1.draw();
                const line2 = new path_1.Path.Line({
                    data: {
                        type: "HATCHLINE2",
                    },
                    position: {
                        x: (hatchRect.areaPointAndLines.points[1].x +
                            (hatchRect.areaPointAndLines.points[0].x <
                                hatchRect.areaPointAndLines.points[1].x
                                ? -hatchRect.stroke.width / 2
                                : hatchRect.stroke.width / 2)) /
                            this._zoom,
                        y: this.dateTimeGridPositionY,
                    },
                    size: {
                        width: 0,
                        height: this.totalMinuteLine * this.timeLineVertGap,
                    },
                    stroke: {
                        width: 1,
                        color: "#BBBBBB",
                    },
                });
                this.qcBlockGroup.appendChild(line2);
                line2.draw();
            }
        }));
    }
    setDateTime(startDateTime = undefined, endDateTime = undefined) {
        if (startDateTime)
            this.startDateTime = startDateTime;
        if (endDateTime)
            this.endDateTime = endDateTime;
        this.totalMinute =
            (this.endDateTime.getTime() - this.startDateTime.getTime()) / 1000 / 60;
        this.totalMinuteLine = this.totalMinute / this.timeGap;
        let dateTimeDay = this.startDateTime.getDate() - 1;
        this.rectDateTime.ctx.clearRect(this.rectDateTime.position.x, this.rectDateTime.position.y, this.rectDateTime.size.width, this.rectDateTime.size.height);
        this.rectDateTime.removeAllChildren();
        this.rectDateTime.setSize({
            width: this.gridWidth,
            height: this.dateTimeGridPositionY +
                this.totalMinuteLine * this.timeLineVertGap,
        });
        this.rectDateTime.draw();
        const rectDateSpace = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY +
                    this.totalMinuteLine * this.timeLineVertGap,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.rectDateTime.appendChild(rectDateSpace).draw();
        const rectDateTimeGrid = new path_1.Path.Rect({
            position: {
                x: 0,
                y: this.dateTimeGridPositionY,
            },
            size: {
                width: this.gridWidth,
                height: this.totalMinuteLine * this.timeLineVertGap,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFA0",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.rectDateTime.appendChild(rectDateTimeGrid).draw();
        let startDateTime4Grid = new Date(this.startDateTime.getTime());
        let prevDate = -1;
        for (let i = 0; i < this.totalMinuteLine; i++) {
            const timeLineProps = {
                position: {
                    x: this.gridWidth - this.timeLineWidth,
                    y: this.dateTimeGridPositionY + this.timeLineVertGap * i,
                },
                size: {
                    width: this.timeLineWidth - 1,
                    height: 0,
                },
                stroke: {
                    width: 1,
                    color: "#000000",
                },
            };
            if (i % 10 === 0) {
                timeLineProps.position.x -= this.timeLineWidth;
                timeLineProps.size.width += this.timeLineWidth;
                timeLineProps.stroke.width = 2;
                if (i === 0)
                    timeLineProps.stroke.width = 0;
                const timeText = new path_1.Path.Text({
                    size: undefined,
                    position: {
                        x: timeLineProps.position.x - 30,
                        y: timeLineProps.position.y + 3,
                    },
                    text: (prevDate !== startDateTime4Grid.getDate()
                        ? "(" + ("0" + startDateTime4Grid.getDate()).slice(-2) + ") "
                        : "      ") +
                        (("0" + startDateTime4Grid.getHours()).slice(-2) +
                            ":" +
                            ("0" + startDateTime4Grid.getMinutes()).slice(-2)),
                    fill: { color: "#000000" },
                    font: {
                        size: 6,
                    },
                });
                prevDate = startDateTime4Grid.getDate();
                if (dateTimeDay !== startDateTime4Grid.getDate())
                    dateTimeDay = startDateTime4Grid.getDate();
                this.rectDateTime.appendChild(timeText).draw();
            }
            startDateTime4Grid.setMinutes(startDateTime4Grid.getMinutes() + this.timeGap);
            const timeLine = new path_1.Path.Line(timeLineProps);
            this.rectDateTime.appendChild(timeLine).draw();
        }
    }
    addAndDrawChartBerth(chartBerthItem) {
        this.berthLength = 0;
        chartBerthItem.forEach((berthItem) => {
            this.berthLength += berthItem.Length;
            // @ts-ignore
            const berthItemProps = {
                position: {
                    x: berthItem.X + this.gridWidth,
                    y: berthItem.Y,
                },
                size: {
                    width: berthItem.Length,
                    height: 15,
                },
                length: berthItem.Length,
                berthName: berthItem.Name,
            };
            const berth = new berthItem4qc_1.BerthItem4qc(berthItemProps);
            this.qcBlockGroup.appendChild(berth).draw();
        });
        const rectBitX = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 15,
            },
            size: {
                width: this.berthLength,
                height: 18,
            },
            fill: {
                isEnabled: true,
                color: "#ffa2d8",
            },
        });
        this.qcBlockGroup.appendChild(rectBitX).draw();
        const rectBitNo = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 33,
            },
            size: {
                width: this.berthLength,
                height: 15,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFA0",
            },
        });
        this.qcBlockGroup.appendChild(rectBitNo).draw();
        const rectBitAll = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 0,
            },
            size: {
                width: this.berthLength,
                height: 48,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(rectBitAll).draw();
        const rectShipArea = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 0,
            },
            size: {
                width: this.berthLength,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(rectShipArea).draw();
    }
    // addAndDrawChartBitt(chartBittItem" ") {
    //   chartBittItem.forEach(bitItem => {
    //     const bitItem4qc = new TGL.Component.BitItem4qc(
    //         Object.assign(
    //             {},
    //             bitItem,
    //             {
    //               position: {
    //                 x: bitItem.X+gridWidth,
    //                 y: 15
    //               },
    //               bitName: bitItem.Name
    //             }
    //         )
    //     );
    //     qcWorkingRenderer.children[0].appendChild(bitItem4qc).draw();
    //   })
    // }
    addAndDrawSchedule(vesselQCScheduleItem, props = undefined) {
        this.rectDateTimeSchedule.ctx.clearRect(this.rectDateTimeSchedule.position.x, this.rectDateTimeSchedule.position.y, this.rectDateTimeSchedule.size.width, this.rectDateTimeSchedule.size.height);
        this.rectDateTimeSchedule.removeAllChildren();
        this.rectDateTimeSchedule.setPosition({
            x: this.gridWidth,
            y: this.dateTimeGridPositionY,
        });
        this.rectDateTimeSchedule.setSize({
            width: this.berthLength,
            height: this.totalMinuteLine * this.timeLineVertGap,
        });
        this.qcBlockGroup.appendChild(this.rectDateTimeSchedule).draw();
        for (let i = 0; i < vesselQCScheduleItem.length; i++) {
            const hatchPosition = vesselQCScheduleItem[i].IsTwin
                ? this.getHatchPosition(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ, vesselQCScheduleItem[i].HatchIndex)
                : this.getHatchBayPosition(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ, vesselQCScheduleItem[i].BayIndex);
            if (hatchPosition) {
                let startY = this.calculateDateTimeToYPos(new Date(vesselQCScheduleItem[i].StartTime));
                const endY = this.calculateDateTimeToYPos(new Date(vesselQCScheduleItem[i].EndTime));
                if (endY > startY && endY > this.dateTimeGridPositionY) {
                    if (startY < this.dateTimeGridPositionY)
                        startY = this.dateTimeGridPositionY;
                    // console.log(startY);
                    const schedule = new component_1.Component.Schedule(Object.assign({
                        data: vesselQCScheduleItem[i],
                        position: {
                            x: hatchPosition.x / this._zoom - this.gridWidth + 1,
                            y: startY - this.dateTimeGridPositionY + 1,
                        },
                        size: {
                            width: hatchPosition.width / this._zoom - 2,
                            height: endY - startY - 2,
                        },
                        fill: {
                            isEnabled: true,
                            color: "rgb(" + vesselQCScheduleItem[i].BackColor + ")",
                        },
                        stroke: {
                            width: 1,
                            color: "rgb(" + vesselQCScheduleItem[i].ForeColor + ")",
                        },
                        isDrawContainerPlan: this.isDrawContainerPlan,
                        stackInfo: undefined,
                        timeGap: this.timeGap,
                        timeLineVertGap: this.timeLineVertGap,
                    }, props));
                    this.rectDateTimeSchedule.appendChild(schedule);
                    if (vesselQCScheduleItem[i].IsTwin) {
                        const vessel = this.findVesselByInfo(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ);
                        const bayNo = vessel.data.vesselBays[vesselQCScheduleItem[i].BayIndex].no;
                        let twinBayNo = undefined;
                        const allHatchRect = vessel.findAllHatchRect();
                        for (let i = 0; i < allHatchRect.length; i++) {
                            const rect = allHatchRect[i];
                            const bayIndex = rect.data.bayNos.indexOf(bayNo);
                            if (bayIndex > -1) {
                                twinBayNo = rect.data.bayNos[bayIndex === 0 ? 1 : 0];
                            }
                        }
                        if (twinBayNo) {
                            // @ts-ignore
                            const hatchPosition2 = vessel.hatchBayPositions[twinBayNo];
                            const schedule2 = new component_1.Component.Schedule(Object.assign({
                                data: vesselQCScheduleItem[i],
                                position: {
                                    x: hatchPosition2.x / this._zoom - this.gridWidth + 1,
                                    y: startY - this.dateTimeGridPositionY + 1,
                                },
                                size: {
                                    width: hatchPosition2.width / this._zoom - 2,
                                    height: endY - startY - 2,
                                },
                                fill: {
                                    isEnabled: true,
                                    color: "rgb(" + vesselQCScheduleItem[i].BackColor + ")",
                                },
                                stroke: {
                                    width: 1,
                                    color: "rgb(" + vesselQCScheduleItem[i].ForeColor + ")",
                                },
                                isDrawContainerPlan: this.isDrawContainerPlan,
                                stackInfo: undefined,
                                timeGap: this.timeGap,
                                timeLineVertGap: this.timeLineVertGap,
                            }, props));
                            this.rectDateTimeSchedule.appendChild(schedule2);
                        }
                    }
                }
            }
            else
                console.log(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].callSEQ, vesselQCScheduleItem[i].BayIndex, vesselQCScheduleItem[i].startTime);
        }
        this.draw();
        /*
        해치 라인을 추가한다.
         */
        this.addAndDrawHatchLines();
    }
    calculateDateTimeToYPos(scheduleTime) {
        const timeDiffMinutes = (scheduleTime.getTime() - this.startDateTime.getTime()) / 1000 / 60;
        return (this.dateTimeGridPositionY +
            (timeDiffMinutes / this.timeGap) * this.timeLineVertGap);
    }
    mouseMoveEvent(e) {
        super.mouseMoveEvent(e);
        const style = this.mousePosDiv.style;
        const ctxArea = {
            x: Number(style.left.replace("px", "")),
            y: Number(style.top.replace("px", "")),
            width: Number(style.width.replace("px", "")),
            height: Number(style.height.replace("px", "")),
        };
        this.mousePosCtx.clearRect(0, 0, ctxArea.width, ctxArea.height);
        if (this.isDrawCrossLine &&
            e.offsetX > this.gridWidth * this._zoom &&
            e.offsetY > this.dateTimeGridPositionY * this._zoom) {
            // this.mousePosCtx.fillStyle = "#0000FF";
            // this.mousePosCtx.fillRect(0, 0, 1000, 1000);
            this.mousePosCtx.setLineDash([2, 2]);
            this.mousePosCtx.strokeStyle = "#FF0000";
            //
            const bound = this.surface.getBoundingClientRect();
            // if (e.offsetX + bound.top + window.scrollY > this.dateTimeGridPositionY) {
            this.mousePosCtx.beginPath();
            this.mousePosCtx.moveTo(this.gridWidth * this._zoom, e.offsetY);
            this.mousePosCtx.lineTo(ctxArea.width, e.offsetY);
            this.mousePosCtx.moveTo(e.offsetX, this.dateTimeGridPositionY * this._zoom);
            this.mousePosCtx.lineTo(e.offsetX, ctxArea.height);
            this.mousePosCtx.moveTo(0, 0);
            this.mousePosCtx.closePath();
            this.mousePosCtx.stroke();
        }
        // }
    }
}
exports.QcWorkingRenderer = QcWorkingRenderer;


/***/ }),

/***/ "./src/view/qcWorkingSideRenderer.ts":
/*!*******************************************!*\
  !*** ./src/view/qcWorkingSideRenderer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QcWorkingSideRenderer = void 0;
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const path_1 = __webpack_require__(/*! ../path */ "./src/path/index.ts");
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
const berthItem4qc_1 = __webpack_require__(/*! ../component/berthItem4qc */ "./src/component/berthItem4qc.ts");
const function_1 = __webpack_require__(/*! ../common/function */ "./src/common/function.ts");
const berthVessel4side_1 = __webpack_require__(/*! ../component/berthVessel4side */ "./src/component/berthVessel4side.ts");
class QcWorkingSideRenderer extends renderer_1.Renderer {
    constructor(props) {
        super(props);
        this.multiply = props.multiply || 1;
        this.seaHeight = props.seaHeight || 100;
        this.dateTimeGridPositionY = props.dateTimeGridPositionY || 160;
        this.timeLineVertGap = props.timeLineVertGap || 5;
        this.timeGap = props.timeGap || 3;
        this.startDateTime = props.startDateTime || new Date();
        this.endDateTime = props.endDateTime || new Date();
        this.timeLineWidth = props.timeLineWidth || 5;
        this.gridWidth = props.gridWidth || 50;
        this.isDrawCrossLine = props.isDrawCrossLine || false;
        this.isDrawContainerPlan = props.isDrawContainerPlan || false;
        this.totalMinute =
            (this.endDateTime.getTime() - this.startDateTime.getTime()) / 1000 / 60;
        this.totalMinuteLine = this.totalMinute / this.timeGap;
        const bound = this.surface.getBoundingClientRect();
        this.mousePosDiv = document.createElement("div");
        this.mousePosDiv.id = function_1.generateUUID();
        this.mousePosDiv.style.position = "absolute";
        // this.mousePosDiv.style.opacity = "0.3";
        this.mousePosDiv.style.pointerEvents = "none";
        // this.mousePosDiv.style.backgroundColor = "#0000ff";
        this.mousePosDiv.style.width = this.surface.style.width;
        this.mousePosDiv.style.height = this.surface.style.height;
        /*
        "x-panel-body"를 포함하는 경우
        sencha 컴포넌트라고 판단하고 div position을 변경한다
         */
        if (this.surface.parentNode.className.indexOf("x-panel-body") > -1) {
            this.mousePosDiv.style.left = "0px";
            this.mousePosDiv.style.top = "0px";
        }
        else {
            this.mousePosDiv.style.left = bound.x + "px";
            this.mousePosDiv.style.top = bound.y + "px";
        }
        this.mousePosDiv.style.zIndex = String(1000);
        this.surface.appendChild(this.mousePosDiv);
        const mousePosCanvas = document.createElement("canvas");
        mousePosCanvas.width = Number(this.mousePosDiv.style.width.replace("px", ""));
        mousePosCanvas.height = Number(this.mousePosDiv.style.height.replace("px", ""));
        this.mousePosDiv.appendChild(mousePosCanvas);
        this.mousePosCtx = mousePosCanvas.getContext("2d");
        this.qcBlockGroup = new baseDrawComponent_1.BaseDrawComponent({
            size: {
                width: 1900,
                height: 2000,
            },
            stackInfo: {
                isEnabled: false,
            },
        });
        this.addDrawComponent(this.qcBlockGroup);
        this.rectDateTime = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFFF",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(this.rectDateTime);
        this.rectDateTimeSchedule = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: this.dateTimeGridPositionY,
            },
            size: {
                width: this.qcBlockGroup.size.width,
                height: this.totalMinuteLine * this.timeLineVertGap,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFFF",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(this.rectDateTimeSchedule);
        this.setDateTime();
    }
    rightClickEvent(e) {
        e.preventDefault();
        this.checkAndProcessClick(e, this);
        // if (this.click.isEnabled && this.click.funcRight) this.click.funcRight(this);
    }
    checkAndProcessSelect(obj) {
        if (this.select.isEnabled && this.dragInfo.dragging) {
            this.selectedDiv.style.display = "none";
            this.selectedList = [];
            this.searchSelectedObject(this.dragInfo.drawArea, obj);
        }
        this.dragInfo.dragging = false;
    }
    checkAndProcessClick(e, obj) {
        this.searchClickedObject(e, obj);
        // if (e.type === "mouseup" && e.button === 0) {
        //   this.click.func(obj);
        // } else if (
        //   e.type === "contextmenu" ||
        //   (e.type === "mouseup" && e.button === 2)
        // ) {
        //   this.click.funcRight(obj);
        // }
        // this.isCancelClick = false;
    }
    getHatchBayPosition(vslCD, callYear, callSeq, bayIndex) {
        const berthVessel4side = this.findVesselByInfo(vslCD, callYear, callSeq);
        if (berthVessel4side) {
            let bayNo = berthVessel4side.data.vesselBays[bayIndex].no;
            // @ts-ignore
            return berthVessel4side.hatchBayPositions[bayNo];
        }
    }
    getHatchPosition(vslCD, callYear, callSeq, hatchIndex) {
        const berthVessel = this.findVesselByInfo(vslCD, callYear, callSeq);
        if (berthVessel) {
            const hatchRect = berthVessel.findAllHatchRect()[hatchIndex];
            // @ts-ignore
            return {
                x: hatchRect.position.x,
                width: hatchRect.size.width,
            };
        }
    }
    findVesselByInfo(vslCD, callYear, callSeq) {
        for (let i = 0; i < this.qcBlockGroup.children.length; i++) {
            const child = this.qcBlockGroup.children[i];
            if (child instanceof berthVessel4side_1.BerthVessel4side) {
                if (child.data.vslCd === vslCD &&
                    child.data.callYear === callYear &&
                    child.data.callSeq === callSeq) {
                    return child;
                }
            }
        }
        return null;
    }
    findAllVessel() {
        let vessels = [];
        for (let i = 0; i < this.qcBlockGroup.children.length; i++) {
            const child = this.qcBlockGroup.children[i];
            if (child instanceof berthVessel4side_1.BerthVessel4side) {
                vessels.push(child);
            }
        }
        return vessels;
    }
    addAndDrawHatchLines() {
        var _a;
        for (let i = this.qcBlockGroup.children.length - 1; i >= 0; i--) {
            let child = this.qcBlockGroup.children[i];
            if (child instanceof path_1.Path.Line &&
                ((_a = child.data) === null || _a === void 0 ? void 0 : _a.type.indexOf("HATCHLINE")) > -1) {
                child.parent = undefined;
                this.qcBlockGroup.children.splice(i, 1);
            }
        }
        this.findAllVessel().forEach((vessel) => vessel.findAllHatchRect().forEach((hatchRect) => {
            if (vessel.data.alongSide !== 10) {
                const line1 = new path_1.Path.Line({
                    data: {
                        type: "HATCHLINE1",
                    },
                    position: {
                        x: (hatchRect.areaPointAndLines.points[0].x +
                            (hatchRect.areaPointAndLines.points[0].x <
                                hatchRect.areaPointAndLines.points[1].x
                                ? hatchRect.stroke.width / 2
                                : -hatchRect.stroke.width / 2)) /
                            this._zoom,
                        y: this.dateTimeGridPositionY,
                    },
                    size: {
                        width: 0,
                        height: this.totalMinuteLine * this.timeLineVertGap,
                    },
                    stroke: {
                        width: 1,
                        color: "#BBBBBB",
                    },
                });
                this.qcBlockGroup.appendChild(line1);
                line1.draw();
                const line2 = new path_1.Path.Line({
                    data: {
                        type: "HATCHLINE2",
                    },
                    position: {
                        x: (hatchRect.areaPointAndLines.points[1].x +
                            (hatchRect.areaPointAndLines.points[0].x <
                                hatchRect.areaPointAndLines.points[1].x
                                ? -hatchRect.stroke.width / 2
                                : hatchRect.stroke.width / 2)) /
                            this._zoom,
                        y: this.dateTimeGridPositionY,
                    },
                    size: {
                        width: 0,
                        height: this.totalMinuteLine * this.timeLineVertGap,
                    },
                    stroke: {
                        width: 1,
                        color: "#BBBBBB",
                    },
                });
                this.qcBlockGroup.appendChild(line2);
                line2.draw();
            }
        }));
    }
    setDateTime(startDateTime = undefined, endDateTime = undefined) {
        if (startDateTime)
            this.startDateTime = startDateTime;
        if (endDateTime)
            this.endDateTime = endDateTime;
        this.totalMinute =
            (this.endDateTime.getTime() - this.startDateTime.getTime()) / 1000 / 60;
        this.totalMinuteLine = this.totalMinute / this.timeGap;
        let dateTimeDay = this.startDateTime.getDate() - 1;
        this.rectDateTime.ctx.clearRect(this.rectDateTime.position.x, this.rectDateTime.position.y, this.rectDateTime.size.width, this.rectDateTime.size.height);
        this.rectDateTime.removeAllChildren();
        this.rectDateTime.setSize({
            width: this.gridWidth,
            height: this.dateTimeGridPositionY +
                this.totalMinuteLine * this.timeLineVertGap,
        });
        this.rectDateTime.draw();
        const rectDateSpace = new path_1.Path.Rect({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY +
                    this.totalMinuteLine * this.timeLineVertGap,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.rectDateTime.appendChild(rectDateSpace).draw();
        const rectDateLine = new path_1.Path.Line({
            position: {
                x: 0,
                y: 0,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        console.log(this.gridWidth);
        this.rectDateTime.appendChild(rectDateLine).draw();
        const rectDateTimeText1 = new path_1.Path.Text({
            position: {
                x: this.gridWidth - 30,
                y: 5,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
            font: {
                size: 8,
            },
            text: "Vessel",
        });
        this.rectDateTime.appendChild(rectDateTimeText1).draw();
        const rectDateTimeText2 = new path_1.Path.Text({
            position: {
                x: 5,
                y: this.dateTimeGridPositionY - 10,
            },
            size: {
                width: this.gridWidth,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: true,
                color: "#000000",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
            font: {
                size: 8,
            },
            text: "Date",
        });
        this.rectDateTime.appendChild(rectDateTimeText2).draw();
        const rectDateTimeGrid = new path_1.Path.Rect({
            position: {
                x: 0,
                y: this.dateTimeGridPositionY,
            },
            size: {
                width: this.gridWidth,
                height: this.totalMinuteLine * this.timeLineVertGap,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFA0",
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.rectDateTime.appendChild(rectDateTimeGrid).draw();
        let startDateTime4Grid = new Date(this.startDateTime.getTime());
        let prevDate = -1;
        for (let i = 0; i < this.totalMinuteLine; i++) {
            const timeLineProps = {
                position: {
                    x: this.gridWidth - this.timeLineWidth,
                    y: this.dateTimeGridPositionY + this.timeLineVertGap * i,
                },
                size: {
                    width: this.timeLineWidth - 1,
                    height: 0,
                },
                stroke: {
                    width: 1,
                    color: "#000000",
                },
            };
            if (i % 10 === 0) {
                timeLineProps.position.x -= this.timeLineWidth;
                timeLineProps.size.width += this.timeLineWidth;
                timeLineProps.stroke.width = 2;
                if (i === 0)
                    timeLineProps.stroke.width = 0;
                const timeText = new path_1.Path.Text({
                    size: undefined,
                    position: {
                        x: timeLineProps.position.x - 30,
                        y: timeLineProps.position.y + 3,
                    },
                    text: (prevDate !== startDateTime4Grid.getDate()
                        ? "(" + ("0" + startDateTime4Grid.getDate()).slice(-2) + ") "
                        : "      ") +
                        (("0" + startDateTime4Grid.getHours()).slice(-2) +
                            ":" +
                            ("0" + startDateTime4Grid.getMinutes()).slice(-2)),
                    fill: { color: "#000000" },
                    font: {
                        size: 6,
                    },
                });
                prevDate = startDateTime4Grid.getDate();
                if (dateTimeDay !== startDateTime4Grid.getDate())
                    dateTimeDay = startDateTime4Grid.getDate();
                this.rectDateTime.appendChild(timeText).draw();
            }
            startDateTime4Grid.setMinutes(startDateTime4Grid.getMinutes() + this.timeGap);
            const timeLine = new path_1.Path.Line(timeLineProps);
            this.rectDateTime.appendChild(timeLine).draw();
        }
    }
    addAndDrawChartBerth(chartBerthItem) {
        this.berthLength = 0;
        chartBerthItem.forEach((berthItem) => {
            this.berthLength += berthItem.Length;
            // @ts-ignore
            const berthItemProps = {
                position: {
                    x: berthItem.X + this.gridWidth,
                    y: berthItem.Y,
                },
                size: {
                    width: berthItem.Length,
                    height: 15,
                },
                length: berthItem.Length,
                berthName: berthItem.Name,
            };
            const berth = new berthItem4qc_1.BerthItem4qc(berthItemProps);
            this.qcBlockGroup.appendChild(berth).draw();
        });
        const rectBitX = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 15,
            },
            size: {
                width: this.berthLength,
                height: 18,
            },
            fill: {
                isEnabled: true,
                color: "#ffa2d8",
            },
        });
        this.qcBlockGroup.appendChild(rectBitX).draw();
        const rectBitNo = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 33,
            },
            size: {
                width: this.berthLength,
                height: 15,
            },
            fill: {
                isEnabled: true,
                color: "#FFFFA0",
            },
        });
        this.qcBlockGroup.appendChild(rectBitNo).draw();
        const rectBitAll = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 0,
            },
            size: {
                width: this.berthLength,
                height: 48,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(rectBitAll).draw();
        const rectShipArea = new path_1.Path.Rect({
            position: {
                x: this.gridWidth,
                y: 0,
            },
            size: {
                width: this.berthLength,
                height: this.dateTimeGridPositionY,
            },
            fill: {
                isEnabled: false,
            },
            stroke: {
                width: 1,
                color: "#000000",
            },
        });
        this.qcBlockGroup.appendChild(rectShipArea).draw();
    }
    // addAndDrawChartBitt(chartBittItem" ") {
    //   chartBittItem.forEach(bitItem => {
    //     const bitItem4qc = new TGL.Component.BitItem4qc(
    //         Object.assign(
    //             {},
    //             bitItem,
    //             {
    //               position: {
    //                 x: bitItem.X+gridWidth,
    //                 y: 15
    //               },
    //               bitName: bitItem.Name
    //             }
    //         )
    //     );
    //     qcWorkingRenderer.children[0].appendChild(bitItem4qc).draw();
    //   })
    // }
    addAndDrawSchedule(vesselQCScheduleItem, props = undefined) {
        this.rectDateTimeSchedule.ctx.clearRect(this.rectDateTimeSchedule.position.x, this.rectDateTimeSchedule.position.y, this.rectDateTimeSchedule.size.width, this.rectDateTimeSchedule.size.height);
        this.rectDateTimeSchedule.removeAllChildren();
        this.rectDateTimeSchedule.setPosition({
            x: this.gridWidth,
            y: this.dateTimeGridPositionY,
        });
        this.rectDateTimeSchedule.setSize({
            width: this.qcBlockGroup.size.width,
            height: this.totalMinuteLine * this.timeLineVertGap,
        });
        this.rectDateTimeSchedule.draw();
        for (let i = 0; i < vesselQCScheduleItem.length; i++) {
            // const hatchPosition = vesselQCScheduleItem[i].IsTwin
            const hatchPosition = vesselQCScheduleItem[i].IsStoppage
                ? this.getHatchPosition(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ, vesselQCScheduleItem[i].HatchIndex)
                : this.getHatchBayPosition(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ, vesselQCScheduleItem[i].BayIndex);
            if (hatchPosition) {
                let startY = this.calculateDateTimeToYPos(new Date(vesselQCScheduleItem[i].StartTime));
                const endY = this.calculateDateTimeToYPos(new Date(vesselQCScheduleItem[i].EndTime));
                if (endY > startY && endY > this.dateTimeGridPositionY) {
                    if (startY < this.dateTimeGridPositionY)
                        startY = this.dateTimeGridPositionY;
                    // console.log(startY);
                    const schedule = new component_1.Component.Schedule(Object.assign({
                        data: vesselQCScheduleItem[i],
                        position: {
                            x: hatchPosition.x / this._zoom - this.gridWidth + 1,
                            y: startY - this.dateTimeGridPositionY + 1,
                        },
                        size: {
                            width: hatchPosition.width / this._zoom - 2,
                            height: endY - startY - 2,
                        },
                        fill: {
                            isEnabled: true,
                            color: "rgb(" + vesselQCScheduleItem[i].BackColor + ")",
                        },
                        stroke: {
                            width: 1,
                            color: "rgb(" + vesselQCScheduleItem[i].ForeColor + ")",
                        },
                        isDrawContainerPlan: this.isDrawContainerPlan,
                        stackInfo: undefined,
                        timeGap: this.timeGap,
                        timeLineVertGap: this.timeLineVertGap,
                    }, props));
                    this.rectDateTimeSchedule.appendChild(schedule);
                    if (vesselQCScheduleItem[i].IsTwin) {
                        const vessel = this.findVesselByInfo(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ);
                        const bayNo = vessel.data.vesselBays[vesselQCScheduleItem[i].BayIndex].no;
                        let twinBayNo = undefined;
                        const allHatchRect = vessel.findAllHatchRect();
                        for (let i = 0; i < allHatchRect.length; i++) {
                            const rect = allHatchRect[i];
                            const bayIndex = rect.data.bayNos.indexOf(bayNo);
                            if (bayIndex > -1) {
                                twinBayNo = rect.data.bayNos[bayIndex === 0 ? 1 : 0];
                            }
                        }
                        if (twinBayNo) {
                            // @ts-ignore
                            const hatchPosition2 = vessel.hatchBayPositions[twinBayNo];
                            const schedule2 = new component_1.Component.Schedule(Object.assign({
                                data: vesselQCScheduleItem[i],
                                position: {
                                    x: hatchPosition2.x / this._zoom - this.gridWidth + 1,
                                    y: startY - this.dateTimeGridPositionY + 1,
                                },
                                size: {
                                    width: hatchPosition2.width / this._zoom - 2,
                                    height: endY - startY - 2,
                                },
                                fill: {
                                    isEnabled: true,
                                    color: "rgb(" + vesselQCScheduleItem[i].BackColor + ")",
                                },
                                stroke: {
                                    width: 1,
                                    color: "rgb(" + vesselQCScheduleItem[i].ForeColor + ")",
                                },
                                isDrawContainerPlan: this.isDrawContainerPlan,
                                stackInfo: undefined,
                                timeGap: this.timeGap,
                                timeLineVertGap: this.timeLineVertGap,
                            }, props));
                            this.rectDateTimeSchedule.appendChild(schedule2);
                        }
                    }
                }
            }
            else
                console.log(vesselQCScheduleItem[i].vslCd, vesselQCScheduleItem[i].callYear, vesselQCScheduleItem[i].CallSEQ, vesselQCScheduleItem[i].bayIndex, vesselQCScheduleItem[i].StartTime);
        }
        this.draw();
        /*
        해치 라인을 추가한다.
         */
        this.addAndDrawHatchLines();
    }
    calculateDateTimeToYPos(scheduleTime) {
        const timeDiffMinutes = (scheduleTime.getTime() - this.startDateTime.getTime()) / 1000 / 60;
        return (this.dateTimeGridPositionY +
            (timeDiffMinutes / this.timeGap) * this.timeLineVertGap);
    }
    mouseMoveEvent(e) {
        super.mouseMoveEvent(e);
        const style = this.mousePosDiv.style;
        const ctxArea = {
            x: Number(style.left.replace("px", "")),
            y: Number(style.top.replace("px", "")),
            width: Number(style.width.replace("px", "")),
            height: Number(style.height.replace("px", "")),
        };
        this.mousePosCtx.clearRect(0, 0, ctxArea.width, ctxArea.height);
        if (this.isDrawCrossLine &&
            e.offsetX > this.gridWidth * this._zoom &&
            e.offsetY > this.dateTimeGridPositionY * this._zoom) {
            // this.mousePosCtx.fillStyle = "#0000FF";
            // this.mousePosCtx.fillRect(0, 0, 1000, 1000);
            this.mousePosCtx.setLineDash([2, 2]);
            this.mousePosCtx.strokeStyle = "#FF0000";
            //
            const bound = this.surface.getBoundingClientRect();
            // if (e.offsetX + bound.top + window.scrollY > this.dateTimeGridPositionY) {
            this.mousePosCtx.beginPath();
            this.mousePosCtx.moveTo(this.gridWidth * this._zoom, e.offsetY);
            this.mousePosCtx.lineTo(ctxArea.width, e.offsetY);
            this.mousePosCtx.moveTo(e.offsetX, this.dateTimeGridPositionY * this._zoom);
            this.mousePosCtx.lineTo(e.offsetX, ctxArea.height);
            this.mousePosCtx.moveTo(0, 0);
            this.mousePosCtx.closePath();
            this.mousePosCtx.stroke();
        }
        // }
    }
}
exports.QcWorkingSideRenderer = QcWorkingSideRenderer;


/***/ }),

/***/ "./src/view/topViewRenderer.ts":
/*!*************************************!*\
  !*** ./src/view/topViewRenderer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TopViewRenderer = void 0;
const type_1 = __webpack_require__(/*! ../common/type */ "./src/common/type.ts");
const topBlock_1 = __webpack_require__(/*! ../component/topBlock */ "./src/component/topBlock.ts");
const container_1 = __webpack_require__(/*! ../component/container */ "./src/component/container.ts");
const renderer_1 = __webpack_require__(/*! ../common/renderer */ "./src/common/renderer.ts");
const baseDrawComponent_1 = __webpack_require__(/*! ../common/baseDrawComponent */ "./src/common/baseDrawComponent.ts");
const component_1 = __webpack_require__(/*! ../component */ "./src/component/index.ts");
class TopViewRenderer extends renderer_1.Renderer {
    constructor(props) {
        var _a, _b;
        super(props);
        this.yardDefine = props.yardDefine;
        this.topBlockLayoutDescription = props.topBlockLayoutDescription;
        this.blockGap =
            ((_a = props.topBlockProps) === null || _a === void 0 ? void 0 : _a.blockGap) === undefined
                ? 20
                : (_b = props.topBlockProps) === null || _b === void 0 ? void 0 : _b.blockGap;
        this.isSelectMode = props.isSelectMode;
        this.isFitToSize = props.isFitToSize;
        this.isFitToFill = props.isFitToFill;
        this.topBlockProps = Object.assign({}, props.topBlockProps, {
            surface: this.surface,
            click: this.click,
            select: this.select,
            layout: this.topBlockLayoutDescription,
            size: {
                width: this.surface.clientWidth,
                height: this.surface.clientHeight,
            },
            blockGap: this.blockGap,
            isFitToSize: this.isFitToSize,
            isFitToFill: this.isFitToFill,
            parent: this,
        });
        this.topBlockProps.stackInfo.clientWidth = this.surface.clientWidth;
        this.topBlockProps.stackInfo.clientHeight = this.surface.clientHeight;
        if (!this.isSelectMode) {
            this.clearTopBlock();
            this.addTopBlockList();
        }
        this.isMultiSelect = props.isMultiSelect;
    }
    rightClickEvent(e) {
        e.preventDefault();
        this.checkAndProcessClick(e, this);
        // if (this.click.isEnabled && this.click.funcRight) this.click.funcRight(this);
    }
    checkAndProcessSelect(obj) {
        if (this.select.isEnabled && this.dragInfo.dragging) {
            this.selectedDiv.style.display = "none";
            this.selectedList = [];
            this.searchSelectedObject(this.dragInfo.drawArea, obj);
        }
        let hasContainer = false;
        for (let i = 0; i < this.selectedList.length; i++) {
            let obj = this.selectedList[i];
            if (obj instanceof component_1.Component.Container) {
                hasContainer = true;
            }
        }
        if (hasContainer) {
            for (let i = this.selectedList.length - 1; i >= 0; i--) {
                let obj = this.selectedList[i];
                if (!(obj instanceof component_1.Component.Container)) {
                    this.selectedList.splice(i, 1);
                }
            }
        }
        else {
            for (let i = this.selectedList.length - 1; i >= 0; i--) {
                let obj = this.selectedList[i];
                if (!(obj instanceof component_1.Component.Slot)) {
                    this.selectedList.splice(i, 1);
                }
            }
        }
        if (this.selectedList.length > 0) {
            for (let i = 0; i < this.selectedList.length; i++) {
                this.selectedList[i].checkSelected();
            }
            this.draw();
        }
        this.dragInfo.dragging = false;
    }
    checkAndProcessClick(e, obj) {
        // console.log(e);
        if (!this.isMultiSelect) {
            this.clearSelectedCheckList(this);
        }
        if (this.click.isEnabled) {
            this.clickedList = [];
            this.searchClickedObject(e, obj);
            // console.log(this.clickedList);
            let hasContainer = false;
            for (let i = 0; i < this.clickedList.length; i++) {
                let obj = this.clickedList[i];
                if (obj instanceof component_1.Component.Container) {
                    hasContainer = true;
                }
            }
            if (hasContainer) {
                for (let i = this.clickedList.length - 1; i >= 0; i--) {
                    let obj = this.clickedList[i];
                    if (!(obj instanceof component_1.Component.Container)) {
                        this.clickedList.splice(i, 1);
                    }
                }
            }
            else {
                for (let i = this.clickedList.length - 1; i >= 0; i--) {
                    let obj = this.clickedList[i];
                    if (!(obj instanceof component_1.Component.Slot)) {
                        this.clickedList.splice(i, 1);
                    }
                }
            }
            if (this.clickedList.length > 0) {
                if (this.isMultiSelect) {
                    for (let i = 0; i < this.clickedList.length; i++) {
                        // console.log(this.clickedList[i]);
                        let clickedObject = this.clickedList[i];
                        clickedObject.select.type.circle = false;
                        clickedObject.checkSelected();
                    }
                }
                else {
                    let clickedObject = this.clickedList[this.clickedList.length - 1];
                    if (e.type === "mouseup" && e.button === 0) {
                        this.click.func(clickedObject);
                        if (clickedObject instanceof component_1.Component.Container) {
                            clickedObject.select.type.circle = true;
                        }
                        else {
                            clickedObject.select.type.circle = false;
                        }
                        clickedObject.checkSelected();
                    }
                    else if (e.type === "contextmenu" ||
                        (e.type === "mouseup" && e.button === 2)) {
                        this.click.funcRight(clickedObject);
                    }
                }
                // this.draw();
                this.zoom(this._zoom);
            }
        }
    }
    // toFrontView() {
    //   this.viewDir = ViewDirection.Front;
    //   this.viewType = ViewDirection.Front;
    //   this.TopBlockProps.viewDir = ViewDirection.Front;
    //   this.TopBlockProps.viewType = ViewDirection.Front;
    //
    // }
    //
    // toSideView() {
    //   this.viewDir = ViewDirection.Side;
    //   this.viewType = ViewDirection.Side;
    //   this.TopBlockProps.viewDir = ViewDirection.Side;
    //   this.TopBlockProps.viewType = ViewDirection.Side;
    // }
    generateTopBlock() {
        const _zoom = this._zoom;
        this.clearTopBlock();
        this.addTopBlockList();
        this.draw();
        this.zoom(_zoom);
    }
    clearTopBlock() {
        this.clearDrawComponent();
        this.topBlockGroup = new baseDrawComponent_1.BaseDrawComponent(Object.assign({}, this.topBlockProps, {
            isFitToSize: false,
            isFitToTill: false,
        }));
        this.addDrawComponent(this.topBlockGroup);
    }
    addTopBlockList() {
        Object.keys(this.yardDefine).forEach(function (key) {
            this.addTopBlock(key);
        }.bind(this));
    }
    addTopBlock(blockName) {
        if (!this.topBlockGroup)
            this.clearTopBlock();
        let topBlockProps2 = Object.assign({}, this.topBlockProps, {
            stackInfo: {
                isEnabled: false,
            },
            blockName: blockName,
            size: {
                width: this.yardDefine[blockName].maxBay *
                    (this.topBlockProps.slotProps.size.width +
                        this.topBlockProps.slotProps.slotGap) +
                    this.blockGap * 2,
                height: this.yardDefine[blockName].maxRow *
                    (this.topBlockProps.slotProps.size.height +
                        this.topBlockProps.slotProps.slotGap) +
                    this.blockGap * 2 +
                    15,
            },
            blockItem: this.yardDefine[blockName],
            data: this.yardDefine[blockName],
        });
        const topBlock = new topBlock_1.TopBlock(topBlockProps2);
        topBlock.id = blockName;
        topBlock.parent = this.topBlockGroup;
        this.topBlockGroup.appendChild(topBlock);
    }
    findTopBlock(blockName, bayRow) {
        return this.findTopBlockById(blockName + "-" + bayRow);
    }
    findTopBlockById(id) {
        for (let i = 0; i < this.topBlockGroup.children.length; i++) {
            const child = this.topBlockGroup.children[i];
            if (child.id === id)
                return child;
        }
    }
    findSlot(blockName, bay, row) {
        const TopBlock = this.findTopBlockById(blockName);
        return TopBlock.findSlotById(blockName + "-" + bay + "-" + row);
    }
    addContainer(blockName, bay, row, containerBayItem) {
        const topBlock = this.findTopBlockById(blockName);
        if (!topBlock)
            throw new Error("cannot find block");
        const slot = topBlock.findSlotById(blockName + "-" + bay + "-" + row);
        if (!slot)
            throw new Error("cannot find slot");
        const containerWidth = this.getContainerWidth(containerBayItem);
        const container = new container_1.Container({
            textSizeMultiple: 1,
            containerBayItem: containerBayItem,
            size: {
                width: containerWidth - 2,
                height: this.topBlockProps.slotProps.size.height - 2,
            },
            fill: {
                color: "#FFFFFF",
            },
            stackInfo: undefined,
            position: {
                x: slot.originalPosition.x + 1,
                y: slot.originalPosition.y + 1,
            },
            click: this.click,
            select: this.select,
            isTopView: true,
        });
        container._zoom = this._zoom;
        container.id = blockName + "-" + bay + "-" + row;
        topBlock.appendChild(container);
        container.addAllPaths();
        this.searchApplyZoom(1 / container.multipleResizeTo, container);
        return this.getContainer(blockName, bay, row);
        // this.zoom(this._zoom);
    }
    getSelectedContainer() {
        for (let i = 0; i < this.topBlockGroup.children[0].children.length; i++) {
            const child = this.topBlockGroup.children[0].children[i];
            if (child instanceof component_1.Component.Container)
                if (child.selected)
                    return child;
        }
    }
    findContainerById(id) {
        const ids = id.split("-");
        return this.getContainer(ids[0], Number(ids[1]), Number(ids[2]));
    }
    getContainer(blockName, bay, row) {
        const TopBlock = this.findTopBlockById(blockName);
        return TopBlock.findContainerById(blockName + "-" + bay + "-" + row);
    }
    removeContainerById(id) {
        const ids = id.split("-");
        this.removeContainer(ids[0], Number(ids[1]), Number(ids[2]));
    }
    removeContainer(blockName, bay, row) {
        const TopBlock = this.findTopBlockById(blockName);
        TopBlock.removeContainer(blockName + "-" + bay + "-" + row);
    }
    getContainerWidth(containerBayItem) {
        if (containerBayItem.OccupiedSlotCount > type_1.YardConstant.MIN_OccupiedSlotCount) {
            return this.getContainerWidth_NEW(containerBayItem);
        }
        return this.getContainerWidth_OLD(containerBayItem);
    }
    getContainerWidth_NEW(containerBayItem) {
        // let tempWidth = this.TopBlockProps.slotProps.size.width;
        let occupiedSlotCount = containerBayItem.OccupiedSlotCount;
        let realWidth = this.topBlockProps.slotProps.size.width * occupiedSlotCount +
            this.topBlockProps.slotProps.slotGap * Number(occupiedSlotCount - 1);
        // tempWidth = realWidth;
        return realWidth;
    }
    getContainerWidth_OLD(containerBayItem) {
        let tempWidth = this.topBlockProps.slotProps.size.height;
        let nosVoid = 2;
        let cntrSize = containerBayItem.sizeType.length === 0
            ? containerBayItem.size
            : containerBayItem.sizeType;
        if (cntrSize.length === 0)
            cntrSize = type_1.YardConstant.CNTR_SIZE_20;
        switch (cntrSize.substring(0, 1)) {
            case type_1.YardConstant.CNTR_SIZE_20: // 20
                tempWidth = this.topBlockProps.slotProps.size.width;
                break;
            case type_1.YardConstant.CNTR_SIZE_30: // 30
            case type_1.YardConstant.CNTR_SIZE_40: // 40
                tempWidth =
                    this.topBlockProps.slotProps.size.width * 2 +
                        this.topBlockProps.slotProps.slotGap;
                break;
            case type_1.YardConstant.CNTR_SIZE_45:
            case type_1.YardConstant.CNTR_SIZE_48:
            case type_1.YardConstant.CNTR_SIZE_L: // 45
            case type_1.YardConstant.CNTR_SIZE_M: // 48
            case type_1.YardConstant.CNTR_SIZE_P: // 53
                if (containerBayItem.xBay != 0 &&
                    containerBayItem.xBay != containerBayItem.bay) {
                    if (containerBayItem.xBay < containerBayItem.bay) {
                        tempWidth = Math.round(this.topBlockProps.slotProps.size.width * 2.25 +
                            this.topBlockProps.slotProps.slotGap * 2);
                    }
                    else {
                        tempWidth = Math.round(this.topBlockProps.slotProps.size.width * 2.25 +
                            this.topBlockProps.slotProps.slotGap * 2);
                    }
                }
                else {
                    // nosVoid = this.yardDefine[this.blockName].BayList[containerBayItem.bay].NosVoid;
                    tempWidth =
                        this.topBlockProps.slotProps.size.width * nosVoid +
                            this.topBlockProps.slotProps.slotGap * (nosVoid - 1);
                }
                break;
            default:
                tempWidth = this.topBlockProps.slotProps.size.width;
                break;
        }
        return tempWidth;
    }
}
exports.TopViewRenderer = TopViewRenderer;


/***/ })

/******/ });
});