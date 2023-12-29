"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["default-shared_components_button-back_index_ts-shared_components_margin-label_index_ts-shared-188ea3"],{

/***/ 62414:
/*!****************************************************************!*\
  !*** ./shared/components/button-back/button-back.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBackComponent": () => (/* binding */ ButtonBackComponent)
/* harmony export */ });
/* harmony import */ var _svg_icons_arrow_left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg-icons/arrow-left */ 11890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);



const _c0 = ["app-button-back", ""];
class ButtonBackComponent {
    constructor(svgIconRegistry) {
        svgIconRegistry.register([
            _svg_icons_arrow_left__WEBPACK_IMPORTED_MODULE_0__.svgArrowLeft,
        ]);
    }
}
ButtonBackComponent.ɵfac = function ButtonBackComponent_Factory(t) { return new (t || ButtonBackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconRegistry)); };
ButtonBackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonBackComponent, selectors: [["button", "app-button-back", ""], ["a", "app-button-back", ""]], attrs: _c0, decls: 1, vars: 0, consts: [["key", "arrow-left"]], template: function ButtonBackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "svg-icon", 0);
    } }, directives: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconComponent], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  background: rgb(var(--color-button-back-background));\n  border-radius: 12px;\n  color: rgb(var(--color-button-back-text));\n  cursor: pointer;\n  display: inline-flex;\n  padding: 8px;\n  transition: background 0.3s ease;\n}\n[_nghost-%COMP%]:hover {\n  background: rgb(var(--color-button-back-background-hover));\n  color: rgb(var(--color-button-back-text-hover));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1iYWNrLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxvREFBQTtFQUNBLG1CQ0tjO0VESmQseUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQ0dVO0VERlYsZ0NBQUE7QUFERjtBQUdFO0VBQ0UsMERBQUE7RUFDQSwrQ0FBQTtBQURKIiwiZmlsZSI6ImJ1dHRvbi1iYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2IodmFyKC0tY29sb3ItYnV0dG9uLWJhY2stYmFja2dyb3VuZCkpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItYnV0dG9uLWJhY2stdGV4dCkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAkZ3JpZC1zdGVwO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKHZhcigtLWNvbG9yLWJ1dHRvbi1iYWNrLWJhY2tncm91bmQtaG92ZXIpKTtcclxuICAgIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItYnV0dG9uLWJhY2stdGV4dC1ob3ZlcikpO1xyXG4gIH1cclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 66134:
/*!*************************************************************!*\
  !*** ./shared/components/button-back/button-back.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBackModule": () => (/* binding */ ButtonBackModule)
/* harmony export */ });
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _button_back_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-back.component */ 62414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);



class ButtonBackModule {
}
ButtonBackModule.ɵfac = function ButtonBackModule_Factory(t) { return new (t || ButtonBackModule)(); };
ButtonBackModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ButtonBackModule });
ButtonBackModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonBackModule, { declarations: [_button_back_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBackComponent], imports: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconsModule], exports: [_button_back_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBackComponent] }); })();


/***/ }),

/***/ 43158:
/*!************************************************!*\
  !*** ./shared/components/button-back/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBackModule": () => (/* reexport safe */ _button_back_module__WEBPACK_IMPORTED_MODULE_0__.ButtonBackModule)
/* harmony export */ });
/* harmony import */ var _button_back_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-back.module */ 66134);



/***/ }),

/***/ 54912:
/*!*************************************************!*\
  !*** ./shared/components/margin-label/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginLabelModule": () => (/* reexport safe */ _margin_label_module__WEBPACK_IMPORTED_MODULE_0__.MarginLabelModule)
/* harmony export */ });
/* harmony import */ var _margin_label_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin-label.module */ 75512);



/***/ }),

/***/ 32863:
/*!******************************************************************!*\
  !*** ./shared/components/margin-label/margin-label.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginLabelComponent": () => (/* binding */ MarginLabelComponent)
/* harmony export */ });
/* harmony import */ var _svg_icons_chart_arrow_down__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg-icons/chart-arrow-down */ 8877);
/* harmony import */ var _svg_icons_chart_arrow_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg-icons/chart-arrow-flat */ 43915);
/* harmony import */ var _svg_icons_chart_arrow_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg-icons/chart-arrow-up */ 50523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _pipes_positiveNumber_positive_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/positiveNumber/positive-number.pipe */ 59600);







class MarginLabelComponent {
    constructor(svgIconRegistry) {
        svgIconRegistry.register([
            _svg_icons_chart_arrow_down__WEBPACK_IMPORTED_MODULE_0__.svgChartArrowDown,
            _svg_icons_chart_arrow_flat__WEBPACK_IMPORTED_MODULE_1__.svgChartArrowFlat,
            _svg_icons_chart_arrow_up__WEBPACK_IMPORTED_MODULE_2__.svgChartArrowUp,
        ]);
    }
    get isNegative() {
        return this.dayMargin < 0;
    }
    get isNeutral() {
        return this.dayMargin === 0;
    }
    get isPositive() {
        return this.dayMargin > 0;
    }
    ngOnChanges() {
        this.marginIcon = this.isNegative
            ? 'chart-arrow-down'
            : this.isPositive
                ? 'chart-arrow-up'
                : 'chart-arrow-flat';
    }
}
MarginLabelComponent.ɵfac = function MarginLabelComponent_Factory(t) { return new (t || MarginLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconRegistry)); };
MarginLabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MarginLabelComponent, selectors: [["app-margin-label"]], hostVars: 6, hostBindings: function MarginLabelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mod-negative", ctx.isNegative)("mod-neutral", ctx.isNeutral)("mod-positive", ctx.isPositive);
    } }, inputs: { dayMargin: "dayMargin", digitsInfo: "digitsInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 7, consts: [["fontSize", "1.142857143em", 1, "color-margin-label-icon", 3, "key"]], template: function MarginLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "positiveNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "svg-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, ctx.dayMargin), ctx.digitsInfo || "1.0-2"), "%\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("key", ctx.marginIcon);
    } }, directives: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _pipes_positiveNumber_positive_number_pipe__WEBPACK_IMPORTED_MODULE_3__.PositiveNumberPipe], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n}\n.mod-negative[_nghost-%COMP%] {\n  color: #FA5454;\n}\n.mod-neutral[_nghost-%COMP%] {\n  color: #929297;\n}\n.mod-positive[_nghost-%COMP%] {\n  color: #03B15E;\n}\n[_nghost-%COMP%]   .color-margin-label-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmdpbi1sYWJlbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUdFO0VBQ0UsY0NEUTtBREFaO0FBSUU7RUFDRSxjQ0NTO0FESGI7QUFLRTtFQUNFLGNDWFU7QURRZDtBQU1FO0VBQ0Usb0JBQUE7QUFKSiIsImZpbGUiOiJtYXJnaW4tbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cclxuICAmLm1vZC1uZWdhdGl2ZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLW5lZ2F0aXZlO1xyXG4gIH1cclxuXHJcbiAgJi5tb2QtbmV1dHJhbCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLW5ldXRyYWw7XHJcbiAgfVxyXG5cclxuICAmLm1vZC1wb3NpdGl2ZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXBvc2l0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNvbG9yLW1hcmdpbi1sYWJlbC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIH1cclxufVxyXG4iLCIkY29sb3ItYmx1ZTogIzRGODBGRjtcclxuJGNvbG9yLWJsdWUtbmlnaHQ6ICM2OTkzRkY7XHJcbiRjb2xvci1ibHVlLWhvdmVyOiAjMkI1REUwO1xyXG4kY29sb3ItYmx1ZS1uaWdodC1ob3ZlcjogIzU4N0VFMDtcclxuJGNvbG9yLWdyZWVuOiAjMDNCMTVFO1xyXG4kY29sb3ItZ3JlZW4tbmlnaHQ6ICM0MEM5ODg7XHJcbiRjb2xvci1yZWQ6ICNGQTU0NTQ7XHJcbiRjb2xvci1yZWQtbmlnaHQ6ICNGRjcwNzA7XHJcblxyXG4kY29sb3ItYmxhY2s6ICMxQzFEMjY7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICM0OTRBNTI7XHJcbiRjb2xvci1kYXJrLWdyZXktbmlnaHQ6ICNEMkQyRDQ7XHJcbiRjb2xvci1ncmV5OiAjOTI5Mjk3O1xyXG4kY29sb3ItZ3JleS1uaWdodDogIzg5OEE4RTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNCNkI3QkE7XHJcbiRjb2xvci1saWdodC1ncmV5LW5pZ2h0OiAjNTM1MzVBO1xyXG4kY29sb3Itb3V0bGluZXM6ICNFREVERUU7XHJcbiRjb2xvci1vdXRsaW5lcy1uaWdodDogIzJFMkYzNztcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNGNkY2Rjc7XHJcbiRjb2xvci1iYWNrZ3JvdW5kLW5pZ2h0OiAjMjUyNjJGO1xyXG4kY29sb3Itd2hpdGU6ICNGRkZGRkY7XHJcblxyXG4kY29sb3Itb3JhbmdlOiAjRkY4QzA0O1xyXG4kY29sb3Itb3JhbmdlLW5pZ2h0OiAjRkZBNDM4O1xyXG4kY29sb3IteWVsbG93OiAjRjhENzJBO1xyXG4kY29sb3IteWVsbG93LW5pZ2h0OiAjRjhERjVDO1xyXG4kY29sb3ItbGlnaHQtYmx1ZTogIzczRDFGOTtcclxuJGNvbG9yLWxpZ2h0LWJsdWUtbmlnaHQ6ICNBNERGRjk7XHJcbiRjb2xvci12aW9sZXQ6ICM5RjY1RkQ7XHJcbiRjb2xvci12aW9sZXQtbmlnaHQ6ICNCRTk4RkQ7XHJcbiRjb2xvci1waW5rOiAjRTg3Q0M5O1xyXG4kY29sb3ItcGluay1uaWdodDogI0U4QTlENjtcclxuJGNvbG9yLW1pbnQ6ICMzRURDRDM7XHJcbiRjb2xvci1taW50LW5pZ2h0OiAjODBEQ0Q2O1xyXG4kY29sb3ItcHVycGxlOiAjQTk1NEEwO1xyXG4kY29sb3ItcHVycGxlLW5pZ2h0OiAjQzI4OEJDO1xyXG5cclxuLy8gZXh0cmEgY29sb3IgdmFyc1xyXG4kY29sb3ItaW5wdXQtYmFja2dyb3VuZC1uaWdodDogIzI4MjgzMjtcclxuJGNvbG9yLWNhcmQtYmFja2dyb3VuZC1uaWdodDogIzI4MjgzMjtcclxuJGNvbG9yLXNrZWxldG9uLWJhY2tncm91bmQ6ICNFRkYxRjY7XHJcbiRjb2xvci1za2VsZXRvbi1iYWNrZ3JvdW5kLWFuaW1hdGlvbjogbGluZWFyLWdyYWRpZW50KDkwZGVnLGhzbGEoMCwwJSwxMDAlLDApLHJnYigyNTUgMjU1IDI1NSAvIDYwJSksaHNsYSgwLDAlLDEwMCUsMCkpO1xyXG4kY29sb3Itc2tlbGV0b24tYmFja2dyb3VuZC1hbmltYXRpb24tbmlnaHQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4yKSx0cmFuc3BhcmVudCk7XHJcblxyXG4kY29sb3ItcG9zdC1jYXRlZ29yaWVzOiAkY29sb3ItYmx1ZSAkY29sb3ItZ3JlZW4gJGNvbG9yLXJlZCAkY29sb3Itb3JhbmdlICRjb2xvci15ZWxsb3cgJGNvbG9yLWxpZ2h0LWJsdWUgJGNvbG9yLXZpb2xldCAkY29sb3ItcGluayAkY29sb3ItbWludDtcclxuJGNvbG9yLXBvc3QtY2F0ZWdvcmllcy1uaWdodDogJGNvbG9yLWJsdWUtbmlnaHQgJGNvbG9yLWdyZWVuLW5pZ2h0ICRjb2xvci1yZWQtbmlnaHQgJGNvbG9yLW9yYW5nZS1uaWdodCAkY29sb3IteWVsbG93LW5pZ2h0ICRjb2xvci1saWdodC1ibHVlLW5pZ2h0ICRjb2xvci12aW9sZXQtbmlnaHQgJGNvbG9yLXBpbmstbmlnaHQgJGNvbG9yLW1pbnQtbmlnaHQ7XHJcblxyXG5AbWl4aW4gcG9zdENhdGVnb3J5Q29sb3IoJHBhbGV0dGUpIHtcclxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkcGFsZXR0ZSkge1xyXG4gICAgLS1jb2xvci1wb3N0LWNhdGVnb3J5LSN7JGl9OiAje250aCgkcGFsZXR0ZSwgJGkpfTtcclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 75512:
/*!***************************************************************!*\
  !*** ./shared/components/margin-label/margin-label.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginLabelModule": () => (/* binding */ MarginLabelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _margin_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin-label.component */ 32863);
/* harmony import */ var _pipes_positiveNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/positiveNumber */ 95247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);





class MarginLabelModule {
}
MarginLabelModule.ɵfac = function MarginLabelModule_Factory(t) { return new (t || MarginLabelModule)(); };
MarginLabelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MarginLabelModule });
MarginLabelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pipes_positiveNumber__WEBPACK_IMPORTED_MODULE_1__.PositiveNumberModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarginLabelModule, { declarations: [_margin_label_component__WEBPACK_IMPORTED_MODULE_0__.MarginLabelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _pipes_positiveNumber__WEBPACK_IMPORTED_MODULE_1__.PositiveNumberModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule], exports: [_margin_label_component__WEBPACK_IMPORTED_MODULE_0__.MarginLabelComponent] }); })();


/***/ }),

/***/ 95247:
/*!**********************************************!*\
  !*** ./shared/pipes/positiveNumber/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositiveNumberModule": () => (/* reexport safe */ _positive_number_module__WEBPACK_IMPORTED_MODULE_0__.PositiveNumberModule)
/* harmony export */ });
/* harmony import */ var _positive_number_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positive-number.module */ 84624);



/***/ }),

/***/ 84624:
/*!***************************************************************!*\
  !*** ./shared/pipes/positiveNumber/positive-number.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositiveNumberModule": () => (/* binding */ PositiveNumberModule)
/* harmony export */ });
/* harmony import */ var _positive_number_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positive-number.pipe */ 59600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);


class PositiveNumberModule {
}
PositiveNumberModule.ɵfac = function PositiveNumberModule_Factory(t) { return new (t || PositiveNumberModule)(); };
PositiveNumberModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PositiveNumberModule });
PositiveNumberModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PositiveNumberModule, { declarations: [_positive_number_pipe__WEBPACK_IMPORTED_MODULE_0__.PositiveNumberPipe], exports: [_positive_number_pipe__WEBPACK_IMPORTED_MODULE_0__.PositiveNumberPipe] }); })();


/***/ }),

/***/ 59600:
/*!*************************************************************!*\
  !*** ./shared/pipes/positiveNumber/positive-number.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositiveNumberPipe": () => (/* binding */ PositiveNumberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);

class PositiveNumberPipe {
    transform(num) {
        return Math.abs(num);
    }
}
PositiveNumberPipe.ɵfac = function PositiveNumberPipe_Factory(t) { return new (t || PositiveNumberPipe)(); };
PositiveNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "positiveNumber", type: PositiveNumberPipe, pure: true });


/***/ }),

/***/ 8877:
/*!**********************************************!*\
  !*** ./shared/svg-icons/chart-arrow-down.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgChartArrowDown": () => (/* binding */ svgChartArrowDown)
/* harmony export */ });
const svgChartArrowDown = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 12H14.6667V8H13.3333V9.72386L9.33333 5.72386L6.66666 8.39052L2.4714 4.19526L1.52859 5.13807L6.66666 10.2761L9.33333 7.60948L12.3905 10.6667H10.6667V12Z" fill="currentColor"/></svg>`,
    name: 'chart-arrow-down'
};


/***/ }),

/***/ 43915:
/*!**********************************************!*\
  !*** ./shared/svg-icons/chart-arrow-flat.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgChartArrowFlat": () => (/* binding */ svgChartArrowFlat)
/* harmony export */ });
const svgChartArrowFlat = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8619 4.86194L14 8.00001L10.8619 11.1381L9.91912 10.1953L11.4477 8.66668H2V7.33334H11.4477L9.91912 5.80475L10.8619 4.86194Z" fill="currentColor"/></svg>`,
    name: 'chart-arrow-flat'
};


/***/ }),

/***/ 50523:
/*!********************************************!*\
  !*** ./shared/svg-icons/chart-arrow-up.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgChartArrowUp": () => (/* binding */ svgChartArrowUp)
/* harmony export */ });
const svgChartArrowUp = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 4H14.6667V8H13.3333V6.27614L9.33333 10.2761L6.66666 7.60948L2.4714 11.8047L1.52859 10.8619L6.66666 5.72386L9.33333 8.39052L12.3905 5.33333H10.6667V4Z" fill="currentColor"/></svg>`,
    name: 'chart-arrow-up'
};


/***/ }),

/***/ 31919:
/*!************************************!*\
  !*** ./shared/svg-icons/delete.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgDelete": () => (/* binding */ svgDelete)
/* harmony export */ });
const svgDelete = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 1.33325L5.99984 1.99992H2.6665V3.33325H3.33317V13.3333C3.33317 14.062 3.9378 14.6666 4.6665 14.6666H11.3332C12.0619 14.6666 12.6665 14.062 12.6665 13.3333V3.33325H13.3332V1.99992H11.9998H9.99984L9.33317 1.33325H6.6665ZM4.6665 3.33325H11.3332V13.3333H4.6665V3.33325ZM6.47119 5.52856L5.52848 6.47127L7.05713 7.99992L5.52848 9.52856L6.47119 10.4713L7.99984 8.94263L9.52848 10.4713L10.4712 9.52856L8.94254 7.99992L10.4712 6.47127L9.52848 5.52856L7.99984 7.05721L6.47119 5.52856Z" fill="currentColor"/></svg>`,
    name: 'delete'
};


/***/ }),

/***/ 40329:
/*!**********************************!*\
  !*** ./shared/svg-icons/link.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLink": () => (/* binding */ svgLink)
/* harmony export */ });
const svgLink = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.92892L9.17158 7.75735L10.5858 9.17156L13.4142 6.34313C14.5809 5.17641 16.4901 5.17641 17.6569 6.34313C18.8236 7.50986 18.8236 9.41905 17.6569 10.5858L14.8284 13.4142L16.2426 14.8284L19.0711 12C21.0227 10.0484 21.0227 6.88054 19.0711 4.92892C17.1195 2.97731 13.9516 2.97731 12 4.92892ZM13.4142 14.8284L10.5858 17.6568C9.41906 18.8236 7.50988 18.8236 6.34315 17.6568C5.17642 16.4901 5.17642 14.5809 6.34315 13.4142L9.17158 10.5858L7.75736 9.17156L4.92894 12C2.97732 13.9516 2.97732 17.1194 4.92894 19.0711C6.88055 21.0227 10.0484 21.0227 12 19.0711L14.8284 16.2426L13.4142 14.8284ZM8.46447 14.1213L14.1213 8.46445L15.5355 9.87867L9.87868 15.5355L8.46447 14.1213Z" fill="currentColor"/></svg>`,
    name: 'link'
};


/***/ }),

/***/ 5507:
/*!**********************************!*\
  !*** ./shared/svg-icons/send.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgSend": () => (/* binding */ svgSend)
/* harmony export */ });
const svgSend = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H11V4L4 4V20H20V13H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM18.5858 4H13V2H22V11H20V5.41421L12.7071 12.7071L11.2929 11.2929L18.5858 4Z" fill="currentColor"/></svg>`,
    name: 'send'
};


/***/ })

}]);
//# sourceMappingURL=default-shared_components_button-back_index_ts-shared_components_margin-label_index_ts-shared-188ea3.js.map