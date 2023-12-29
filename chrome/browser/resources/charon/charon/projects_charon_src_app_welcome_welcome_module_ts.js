"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["projects_charon_src_app_welcome_welcome_module_ts"],{

/***/ 97487:
/*!************************************************!*\
  !*** ./projects/charon/src/app/login/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoute": () => (/* reexport safe */ _login_route__WEBPACK_IMPORTED_MODULE_0__.LoginRoute)
/* harmony export */ });
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-route */ 79205);



/***/ }),

/***/ 52722:
/*!********************************************************!*\
  !*** ./projects/charon/src/app/welcome/pages/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WELCOME_PAGES": () => (/* binding */ WELCOME_PAGES),
/* harmony export */   "WelcomePageComponent": () => (/* reexport safe */ _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePageComponent)
/* harmony export */ });
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-page */ 31581);


const WELCOME_PAGES = [
    _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePageComponent,
];


/***/ }),

/***/ 31581:
/*!*********************************************************************!*\
  !*** ./projects/charon/src/app/welcome/pages/welcome-page/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageComponent": () => (/* reexport safe */ _welcome_page_component__WEBPACK_IMPORTED_MODULE_0__.WelcomePageComponent)
/* harmony export */ });
/* harmony import */ var _welcome_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-page.component */ 97646);



/***/ }),

/***/ 97646:
/*!**************************************************************************************!*\
  !*** ./projects/charon/src/app/welcome/pages/welcome-page/welcome-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageComponent": () => (/* binding */ WelcomePageComponent)
/* harmony export */ });
/* harmony import */ var _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/logo-icon */ 42536);
/* harmony import */ var _shared_svg_icons_new_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/new-user */ 41852);
/* harmony import */ var _shared_svg_icons_seed_phrase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/svg-icons/seed-phrase */ 63595);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../login */ 97487);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 73903);












const _c0 = function (a1, a2) { return ["/", a1, a2]; };
const _c1 = function (a1) { return ["/", a1]; };
function WelcomePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "svg-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "svg-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "svg-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("title.log_in_to"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("title.decentr"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](8, _c0, ctx_r0.appRoute.Login, ctx_r0.loginRoute.Import));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("log_in.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("log_in.subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](11, _c1, ctx_r0.appRoute.SignUp));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("sign_up.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("sign_up.subtitle"), " ");
} }
class WelcomePageComponent {
    constructor(networkSelector, svgIconRegistry) {
        this.networkSelector = networkSelector;
        this.appRoute = _app_route__WEBPACK_IMPORTED_MODULE_5__.AppRoute;
        this.loginRoute = _login__WEBPACK_IMPORTED_MODULE_4__.LoginRoute;
        svgIconRegistry.register([
            _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_0__.svgLogoIcon,
            _shared_svg_icons_new_user__WEBPACK_IMPORTED_MODULE_1__.svgNewUser,
            _shared_svg_icons_seed_phrase__WEBPACK_IMPORTED_MODULE_2__.svgSeedPhrase,
        ]);
    }
    ngOnInit() {
        this.networkSelector.setActiveNetworkId(_shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__.NetworkId.Mainnet);
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.NetworkSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconRegistry)); };
WelcomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome"]], decls: 1, vars: 1, consts: [["class", "welcome-page__card", 4, "transloco", "translocoRead"], [1, "welcome-page__card"], ["appTypeface", "subheader", 1, "welcome-page__title"], ["key", "logo-icon", "size", "lg"], [1, "welcome-page__button", "mod-blue", 3, "routerLink"], ["key", "seed-phrase", "size", "xl", 1, "welcome-page__button__icon"], ["appTypeface", "subheader", 1, "welcome-page__button__title"], ["appTypeface", "paragraph", 1, "welcome-page__button__subtitle"], [1, "welcome-page__button", "mod-green", 3, "routerLink"], ["key", "new-user", "size", "xl", 1, "welcome-page__button__icon"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, WelcomePageComponent_div_0_Template, 17, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("translocoRead", "welcome.welcome_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__.TypefaceDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.welcome-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  margin: auto;\n  padding: 40px 24px;\n  width: 436px;\n}\n\n.welcome-page__title[_ngcontent-%COMP%] {\n  align-items: center;\n  column-gap: 8px;\n  display: flex;\n  font-weight: 700;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n\n.welcome-page__button[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  color: var(--color-main-text);\n  display: block;\n  padding: 24px;\n}\n\n.welcome-page__button[_ngcontent-%COMP%]    + .welcome-page__button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.welcome-page__button.mod-blue[_ngcontent-%COMP%] {\n  background: rgba(var(--color-welcome-page-button-blue), 0.08);\n}\n\n.welcome-page__button.mod-blue[_ngcontent-%COMP%]   .welcome-page__button__icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-welcome-page-button-blue));\n}\n\n.welcome-page__button.mod-green[_ngcontent-%COMP%] {\n  background: rgba(var(--color-welcome-page-button-green), 0.08);\n}\n\n.welcome-page__button.mod-green[_ngcontent-%COMP%]   .welcome-page__button__icon[_ngcontent-%COMP%] {\n  color: rgb(var(--color-welcome-page-button-green));\n}\n\n.welcome-page__button__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-top: 12px;\n}\n\n.welcome-page__button__subtitle[_ngcontent-%COMP%] {\n  color: var(--color-welcome-page-button-subtitle);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLHVDQUFBO0VBQ0EsbUJDRGM7RURFZCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGVDUFU7RURRVixhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkNqQmM7RURrQmQsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLDZEQUFBO0FBRko7O0FBSUk7RUFDRSxpREFBQTtBQUZOOztBQU1FO0VBQ0UsOERBQUE7QUFKSjs7QUFNSTtFQUNFLGtEQUFBO0FBSk47O0FBU0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxnREFBQTtFQUNBLGVDaERVO0FEMENaIiwiZmlsZSI6IndlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ud2VsY29tZS1wYWdlX19jYXJkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiA1ICRncmlkLXN0ZXAgKiAzO1xyXG4gIHdpZHRoOiA0MzZweDtcclxufVxyXG5cclxuLndlbGNvbWUtcGFnZV9fdGl0bGUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQtc3RlcCAqIDM7XHJcbn1cclxuXHJcbi53ZWxjb21lLXBhZ2VfX2J1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4gICYgKyAmIHtcclxuICAgIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIH1cclxuXHJcbiAgJi5tb2QtYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLXdlbGNvbWUtcGFnZS1idXR0b24tYmx1ZSksIDAuMDgpO1xyXG5cclxuICAgIC53ZWxjb21lLXBhZ2VfX2J1dHRvbl9faWNvbiB7XHJcbiAgICAgIGNvbG9yOiByZ2IodmFyKC0tY29sb3Itd2VsY29tZS1wYWdlLWJ1dHRvbi1ibHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLm1vZC1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLXdlbGNvbWUtcGFnZS1idXR0b24tZ3JlZW4pLCAwLjA4KTtcclxuXHJcbiAgICAud2VsY29tZS1wYWdlX19idXR0b25fX2ljb24ge1xyXG4gICAgICBjb2xvcjogcmdiKHZhcigtLWNvbG9yLXdlbGNvbWUtcGFnZS1idXR0b24tZ3JlZW4pKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53ZWxjb21lLXBhZ2VfX2J1dHRvbl9fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLXRvcDogJGdyaWQtc3RlcCAqIDEuNTtcclxufVxyXG5cclxuLndlbGNvbWUtcGFnZV9fYnV0dG9uX19zdWJ0aXRsZSB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdlbGNvbWUtcGFnZS1idXR0b24tc3VidGl0bGUpO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXA7XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 78156:
/*!*******************************************************************!*\
  !*** ./projects/charon/src/app/welcome/welcome-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeRoutingModule": () => (/* binding */ WelcomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 52722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);




const ROUTES = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.WelcomePageComponent,
    },
];
class WelcomeRoutingModule {
}
WelcomeRoutingModule.ɵfac = function WelcomeRoutingModule_Factory(t) { return new (t || WelcomeRoutingModule)(); };
WelcomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WelcomeRoutingModule });
WelcomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 22357:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/welcome/welcome.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/directives/typeface */ 2703);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-routing.module */ 78156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _pages_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/welcome-page/welcome-page.component */ 97646);






class WelcomeModule {
}
WelcomeModule.ɵfac = function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); };
WelcomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TRANSLOCO_SCOPE,
            useValue: 'welcome',
        },
    ], imports: [[
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule,
            _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__.WelcomeRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_pages_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__.WelcomePageComponent], imports: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule,
        _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        _welcome_routing_module__WEBPACK_IMPORTED_MODULE_1__.WelcomeRoutingModule] }); })();


/***/ }),

/***/ 41852:
/*!**************************************!*\
  !*** ./shared/svg-icons/new-user.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgNewUser": () => (/* binding */ svgNewUser)
/* harmony export */ });
const svgNewUser = {
    data: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 18V12H36V18H30V22H36V28H40V22H46V18H40ZM18 24C22.42 24 26 20.42 26 16C26 11.58 22.42 8 18 8C13.58 8 10 11.58 10 16C10 20.42 13.58 24 18 24ZM18 12C20.2 12 22 13.8 22 16C22 18.2 20.2 20 18 20C15.8 20 14 18.2 14 16C14 13.8 15.8 12 18 12ZM30.78 29.12C27.42 27.4 23.06 26 18 26C12.94 26 8.58 27.4 5.22 29.12C3.22 30.14 2 32.2 2 34.44V40H34V34.44C34 32.2 32.78 30.14 30.78 29.12ZM30 36H6V34.44C6 33.68 6.4 33 7.04 32.68C9.42 31.46 13.26 30 18 30C22.74 30 26.58 31.46 28.96 32.68C29.6 33 30 33.68 30 34.44V36Z" fill="currentColor"/></svg>`,
    name: 'new-user'
};


/***/ }),

/***/ 63595:
/*!*****************************************!*\
  !*** ./shared/svg-icons/seed-phrase.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgSeedPhrase": () => (/* binding */ svgSeedPhrase)
/* harmony export */ });
const svgSeedPhrase = {
    data: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 34H44V38H4V34ZM6.3 25.9L8 22.94L9.7 25.9L12.3 24.4L10.6 21.44H14V18.44H10.6L12.3 15.5L9.7 14L8 16.94L6.3 14L3.7 15.5L5.4 18.44H2V21.44H5.4L3.7 24.4L6.3 25.9ZM19.7 24.4L22.3 25.9L24 22.94L25.7 25.9L28.3 24.4L26.6 21.44H30V18.44H26.6L28.3 15.5L25.7 14L24 16.94L22.3 14L19.7 15.5L21.4 18.44H18V21.44H21.4L19.7 24.4ZM46 18.44H42.6L44.3 15.5L41.7 14L40 16.94L38.3 14L35.7 15.5L37.4 18.44H34V21.44H37.4L35.7 24.4L38.3 25.9L40 22.94L41.7 25.9L44.3 24.4L42.6 21.44H46V18.44Z" fill="currentColor"/></svg>`,
    name: 'seed-phrase'
};


/***/ })

}]);
//# sourceMappingURL=projects_charon_src_app_welcome_welcome_module_ts.js.map