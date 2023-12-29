"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["projects_charon_src_app_login_login_module_ts"],{

/***/ 82467:
/*!*******************************************************!*\
  !*** ./projects/charon/src/app/login/guards/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_GUARDS": () => (/* binding */ LOGIN_GUARDS),
/* harmony export */   "LoginGuard": () => (/* reexport safe */ _login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard)
/* harmony export */ });
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.guard */ 8927);


const LOGIN_GUARDS = [
    _login_guard__WEBPACK_IMPORTED_MODULE_0__.LoginGuard,
];


/***/ }),

/***/ 8927:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/login/guards/login.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/lock */ 86126);



class LoginGuard {
    constructor(lockService) {
        this.lockService = lockService;
    }
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.lockService.lockedState$);
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_lock__WEBPACK_IMPORTED_MODULE_0__.LockService)); };
LoginGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac });


/***/ }),

/***/ 98656:
/*!***************************************************************!*\
  !*** ./projects/charon/src/app/login/login-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/guards */ 61179);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 44849);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ 82467);
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-route */ 79205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);







const ROUTES = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent,
        canActivate: [
            _guards__WEBPACK_IMPORTED_MODULE_2__.LoginGuard,
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard,
        ],
    },
    {
        path: _login_route__WEBPACK_IMPORTED_MODULE_3__.LoginRoute.Import,
        component: _pages__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageComponent,
        data: { pageType: _pages__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageType.IMPORT_ACCOUNT },
        canActivate: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.BrowserTabGuard,
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.UnauthGuard,
        ],
    },
    {
        path: _login_route__WEBPACK_IMPORTED_MODULE_3__.LoginRoute.Restore,
        component: _pages__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageComponent,
        data: { pageType: _pages__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageType.RESTORE_ACCOUNT },
        canActivate: [
            _guards__WEBPACK_IMPORTED_MODULE_2__.LoginGuard,
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.BrowserTabGuard,
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard,
        ],
    },
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _guards__WEBPACK_IMPORTED_MODULE_2__.LOGIN_GUARDS,
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 19748:
/*!*******************************************************!*\
  !*** ./projects/charon/src/app/login/login.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_auto_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/directives/auto-focus */ 2228);
/* harmony import */ var _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/directives/browser-view */ 61349);
/* harmony import */ var _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/directives/submit-source */ 71019);
/* harmony import */ var _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/directives/typeface */ 2703);
/* harmony import */ var _shared_components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/button */ 29149);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _shared_components_input_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/input-container */ 10401);
/* harmony import */ var _shared_components_controls_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/controls/input */ 43101);
/* harmony import */ var _shared_components_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/password */ 35197);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-routing.module */ 98656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _pages_import_restore_import_restore_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/import-restore/import-restore-page.component */ 2086);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 61465);


















class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TRANSLOCO_SCOPE,
            useValue: 'login',
        },
    ], imports: [[
            _shared_directives_auto_focus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
            _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_1__.BrowserViewModule,
            _shared_components_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _shared_components_form_error__WEBPACK_IMPORTED_MODULE_5__.FormErrorModule,
            _shared_components_input_container__WEBPACK_IMPORTED_MODULE_6__.InputContainerModule,
            _shared_components_controls_input__WEBPACK_IMPORTED_MODULE_7__.InputModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_9__.LoginRoutingModule,
            _shared_components_password__WEBPACK_IMPORTED_MODULE_8__.PasswordModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__.RxReactiveFormsModule,
            _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_2__.SubmitSourceModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_17__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoModule,
            _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_3__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_pages_import_restore_import_restore_page_component__WEBPACK_IMPORTED_MODULE_10__.ImportRestorePageComponent, _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__.LoginPageComponent], imports: [_shared_directives_auto_focus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
        _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_1__.BrowserViewModule,
        _shared_components_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _shared_components_form_error__WEBPACK_IMPORTED_MODULE_5__.FormErrorModule,
        _shared_components_input_container__WEBPACK_IMPORTED_MODULE_6__.InputContainerModule,
        _shared_components_controls_input__WEBPACK_IMPORTED_MODULE_7__.InputModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_9__.LoginRoutingModule,
        _shared_components_password__WEBPACK_IMPORTED_MODULE_8__.PasswordModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__.RxReactiveFormsModule,
        _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_2__.SubmitSourceModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_17__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoModule,
        _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_3__.TypefaceModule] }); })();


/***/ }),

/***/ 2086:
/*!*********************************************************************************************!*\
  !*** ./projects/charon/src/app/login/pages/import-restore/import-restore-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportRestorePageComponent": () => (/* binding */ ImportRestorePageComponent),
/* harmony export */   "ImportRestorePageType": () => (/* binding */ ImportRestorePageType)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 93794);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 94850);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _shared_utils_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/validation */ 19343);
/* harmony import */ var _import_restore_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import-restore-page.service */ 22704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/navigation */ 12089);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/directives/submit-source/submit-source.directive */ 387);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/input-container/input-container.component */ 29130);
/* harmony import */ var _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/controls/input/input.component */ 49874);
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/components/form-error/form-error.component */ 61926);
/* harmony import */ var _shared_components_password_password_validation_state_password_validation_state_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/components/password/password-validation-state/password-validation-state.component */ 85984);
/* harmony import */ var _shared_components_password_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../shared/components/password/password-form/password-form.component */ 15205);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);




























function ImportRestorePageComponent_form_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](translate_r1("import.title"));
} }
function ImportRestorePageComponent_form_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](translate_r1("restore.title"));
} }
function ImportRestorePageComponent_form_0_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](translate_r1("import.submit"));
} }
function ImportRestorePageComponent_form_0_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](translate_r1("restore.submit"));
} }
const _c0 = function () { return { read: "shared.password.validation_state", scope: "shared" }; };
const _c1 = function () { return { read: "core.profile_form", scope: "core" }; };
function ImportRestorePageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function ImportRestorePageComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "section", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ImportRestorePageComponent_form_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ImportRestorePageComponent_form_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "app-input-container", 7)(8, "app-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](9, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "app-form-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "section", 2)(13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "app-password-validation-state", 12)(16, "app-password-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 15)(19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ImportRestorePageComponent_form_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r12.navigateBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, ImportRestorePageComponent_form_0_ng_container_22_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](23, ImportRestorePageComponent_form_0_ng_container_23_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r0.currentPageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r0.pageType.IMPORT_ACCOUNT);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", translate_r1("form.seed.subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", translate_r1("form.seed.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", translate_r1("form.password.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("password", ctx_r0.passwordControl.value)("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("required", true)("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", translate_r1("back"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r0.currentPageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r0.pageType.IMPORT_ACCOUNT);
} }
var ImportRestorePageType;
(function (ImportRestorePageType) {
    ImportRestorePageType["IMPORT_ACCOUNT"] = "import-account";
    ImportRestorePageType["RESTORE_ACCOUNT"] = "restore-account";
})(ImportRestorePageType || (ImportRestorePageType = {}));
let ImportRestorePageComponent = class ImportRestorePageComponent {
    constructor(formBuilder, activatedRoute, navigationService, ngZone, notificationService, router, spinnerService, svgIconRegistry, pageService) {
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
        this.ngZone = ngZone;
        this.notificationService = notificationService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.svgIconRegistry = svgIconRegistry;
        this.pageService = pageService;
        this.pageType = ImportRestorePageType;
    }
    get passwordControl() {
        return this.form.get('password');
    }
    ngOnInit() {
        this.form = this.createForm();
        this.activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pluck)('pageType'), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe((currentPageType) => this.currentPageType = currentPageType);
        const seedPhraseControl = this.form.get('seedPhrase');
        seedPhraseControl.valueChanges
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this))
            .subscribe((value) => {
            seedPhraseControl.setValue(value.replace(/\s+/g, ' ').toLowerCase(), { emitEvent: false });
        });
    }
    navigateBack() {
        const urlToNavigate = (this.currentPageType === ImportRestorePageType.IMPORT_ACCOUNT)
            ? [_app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Welcome]
            : [_app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Login];
        this.navigationService.back(urlToNavigate);
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        const { seedPhrase, password } = this.form.getRawValue();
        const trimmedSeedPhrase = seedPhrase.trim();
        const method = this.currentPageType === ImportRestorePageType.IMPORT_ACCOUNT
            ? this.pageService.importUser(trimmedSeedPhrase, password)
            : this.pageService.restoreUser(trimmedSeedPhrase, password);
        this.spinnerService.showSpinner();
        method.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.finalize)(() => this.spinnerService.hideSpinner()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe({
            next: () => this.ngZone.run(() => this.router.navigate(['/'])),
            error: (error) => this.notificationService.error(error),
        });
    }
    createForm() {
        return this.formBuilder.group({
            password: '',
            seedPhrase: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required,
                    _shared_utils_validation__WEBPACK_IMPORTED_MODULE_2__.BaseValidationUtil.isSeedPhraseCorrect,
                ],
                [
                    this.pageService.createSeedAsyncValidator(),
                ],
            ],
        });
    }
};
ImportRestorePageComponent.ɵfac = function ImportRestorePageComponent_Factory(t) { return new (t || ImportRestorePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_navigation__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_22__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_import_restore_page_service__WEBPACK_IMPORTED_MODULE_3__.ImportRestorePageService)); };
ImportRestorePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: ImportRestorePageComponent, selectors: [["app-import-account-seed-phrase"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([
            _import_restore_page_service__WEBPACK_IMPORTED_MODULE_3__.ImportRestorePageService,
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'login.import_restore_page.form',
            },
        ])], decls: 1, vars: 1, consts: [["class", "import-restore-page__form", "appSubmitSource", "", 3, "formGroup", "ngSubmit", 4, "transloco", "translocoRead"], ["appSubmitSource", "", 1, "import-restore-page__form", 3, "formGroup", "ngSubmit"], [1, "import-restore-page__section"], ["appTypeface", "subheader", 1, "import-restore-page__section__title", 3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["appTypeface", "paragraph", 1, "import-restore-page__section__subtitle"], [1, "import-restore-page__field"], ["type", "password", "rows", "2", "formControlName", "seedPhrase", 1, "import-restore-page__input"], ["ngProjectAs", "[label]", 5, ["", "label", ""]], ["controlName", "seedPhrase", "i18nControlKey", "seed"], ["appTypeface", "subheader", 1, "import-restore-page__section__title"], [1, "import-restore-page__section__subtitle", 3, "password", "translationsConfig"], ["formControlName", "password", 1, "import-restore-page__field", 3, "required", "translationsConfig"], [1, "import-restore-page__divider"], [1, "import-restore-page__actions"], ["app-button", "", "color", "grey", "size", "md", 1, "import-restore-page__action-button", 3, "click"], ["app-button", "", "color", "primary", "size", "md", "type", "submit", 1, "import-restore-page__action-button", 3, "ngSwitch"]], template: function ImportRestorePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, ImportRestorePageComponent_form_0_Template, 24, 15, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("translocoRead", "login.import_restore_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__.TranslocoDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_7__.SubmitSourceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_24__["ɵa"], _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_8__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchDefault, _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_9__.InputContainerComponent, _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_10__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_24__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_24__["ɵe"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_11__.FormErrorComponent, _shared_components_password_password_validation_state_password_validation_state_component__WEBPACK_IMPORTED_MODULE_12__.PasswordValidationStateComponent, _shared_components_password_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_13__.PasswordFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.RequiredValidator, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  margin: auto;\n  padding-bottom: 40px;\n  width: 800px;\n}\n\n.import-restore-page__form[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 16px;\n}\n\n.import-restore-page__section[_ngcontent-%COMP%]    + .import-restore-page__section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.import-restore-page__section__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.import-restore-page__section__subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.import-restore-page__field[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n}\n\n.import-restore-page__divider[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-outlines);\n  margin: auto -16px 16px;\n}\n\n.import-restore-page__actions[_ngcontent-%COMP%] {\n  column-gap: 12px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.import-restore-page__action-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcG9ydC1yZXN0b3JlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSx1Q0FBQTtFQUNBLG1CQ0xjO0VETWQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBaEI2QjtBQVkvQjs7QUFRRTtFQUNFLGdCQUFBO0FBTEo7O0FBU0E7RUFDRSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsZUNyQlU7QURlWjs7QUFTQTtFQUNFLGVDekJVO0VEMEJWLFdBQUE7QUFORjs7QUFTQTtFQUNFLDhDQUFBO0VBQ0EsdUJBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0FBTkYiLCJmaWxlIjoiaW1wb3J0LXJlc3RvcmUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4kaW1wb3J0LXJlc3RvcmUtcGFnZS0tYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiRpbXBvcnQtcmVzdG9yZS1wYWdlLS1wYWRkaW5nOiAkZ3JpZC1zdGVwICogMjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAkZ3JpZC1zdGVwICogNTtcclxuICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5pbXBvcnQtcmVzdG9yZS1wYWdlX19mb3JtIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkaW1wb3J0LXJlc3RvcmUtcGFnZS0tYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogJGltcG9ydC1yZXN0b3JlLXBhZ2UtLXBhZGRpbmc7XHJcbn1cclxuXHJcbi5pbXBvcnQtcmVzdG9yZS1wYWdlX19zZWN0aW9uIHtcclxuICAmICsgJiB7XHJcbiAgICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogNTtcclxuICB9XHJcbn1cclxuXHJcbi5pbXBvcnQtcmVzdG9yZS1wYWdlX19zZWN0aW9uX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmltcG9ydC1yZXN0b3JlLXBhZ2VfX3NlY3Rpb25fX3N1YnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwO1xyXG59XHJcblxyXG4uaW1wb3J0LXJlc3RvcmUtcGFnZV9fZmllbGQge1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbXBvcnQtcmVzdG9yZS1wYWdlX19kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGltcG9ydC1yZXN0b3JlLXBhZ2UtLWJvcmRlci1jb2xvcjtcclxuICBtYXJnaW46IGF1dG8gKC0kaW1wb3J0LXJlc3RvcmUtcGFnZS0tcGFkZGluZykgJGdyaWQtc3RlcCAqIDI7XHJcbn1cclxuXHJcbi5pbXBvcnQtcmVzdG9yZS1wYWdlX19hY3Rpb25zIHtcclxuICBjb2x1bW4tZ2FwOiAkZ3JpZC1zdGVwICogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmltcG9ydC1yZXN0b3JlLXBhZ2VfX2FjdGlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });
ImportRestorePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.UntilDestroy)()
], ImportRestorePageComponent);



/***/ }),

/***/ 22704:
/*!*******************************************************************************************!*\
  !*** ./projects/charon/src/app/login/pages/import-restore/import-restore-page.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportRestorePageService": () => (/* binding */ ImportRestorePageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 63696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 12336);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 36566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 7048);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 17198);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/lock */ 86126);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/transloco */ 44812);











class ImportRestorePageService {
    constructor(authService, lockService, referralService, router, translocoService, userService) {
        this.authService = authService;
        this.lockService = lockService;
        this.referralService = referralService;
        this.router = router;
        this.translocoService = translocoService;
        this.userService = userService;
    }
    importUser(seedPhrase, password, skipTrackInstall = false) {
        const wallet = (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createWalletFromMnemonic)(seedPhrase);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.defer)(() => this.authService.createUser({
            wallet,
            password,
            seed: seedPhrase,
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)((id) => this.authService.changeUser(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => (!skipTrackInstall && (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_2__.detectBrowser)() === _shared_utils_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserType.Decentr)
            ? this.referralService.trackInstall(wallet.address)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(void 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => this.userService.createTestnetAccount(wallet.address)));
    }
    restoreUser(seedPhrase, password) {
        const activeUser = this.authService.getActiveUserInstant();
        return this.importUser(seedPhrase, password, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => {
            const userId = activeUser && activeUser.id;
            return userId
                ? this.authService.removeUser(userId)
                : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(void 0);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => this.lockService.unlock()));
    }
    createSeedAsyncValidator() {
        return (control) => {
            if (!control.value) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
            }
            const wallet = (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createWalletFromMnemonic)(control.value);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(300).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.userService.getAccount(wallet.address, _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Mainnet)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((account) => account ? null : { exists: false }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)((error) => control.setErrors(error)));
        };
    }
}
ImportRestorePageService.ɵfac = function ImportRestorePageService_Factory(t) { return new (t || ImportRestorePageService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_lock__WEBPACK_IMPORTED_MODULE_4__.LockService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.ReferralService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_16__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.UserService)); };
ImportRestorePageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: ImportRestorePageService, factory: ImportRestorePageService.ɵfac });


/***/ }),

/***/ 21831:
/*!*********************************************************************!*\
  !*** ./projects/charon/src/app/login/pages/import-restore/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportRestorePageComponent": () => (/* reexport safe */ _import_restore_page_component__WEBPACK_IMPORTED_MODULE_0__.ImportRestorePageComponent),
/* harmony export */   "ImportRestorePageType": () => (/* reexport safe */ _import_restore_page_component__WEBPACK_IMPORTED_MODULE_0__.ImportRestorePageType)
/* harmony export */ });
/* harmony import */ var _import_restore_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-restore-page.component */ 2086);



/***/ }),

/***/ 44849:
/*!******************************************************!*\
  !*** ./projects/charon/src/app/login/pages/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportRestorePageComponent": () => (/* reexport safe */ _import_restore__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageComponent),
/* harmony export */   "ImportRestorePageType": () => (/* reexport safe */ _import_restore__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageType),
/* harmony export */   "LOGIN_PAGES": () => (/* binding */ LOGIN_PAGES),
/* harmony export */   "LoginPageComponent": () => (/* reexport safe */ _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page */ 63620);
/* harmony import */ var _import_restore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import-restore */ 21831);




const LOGIN_PAGES = [
    _import_restore__WEBPACK_IMPORTED_MODULE_1__.ImportRestorePageComponent,
    _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent,
];


/***/ }),

/***/ 63620:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/login/pages/login-page/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* reexport safe */ _login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.component */ 61465);



/***/ }),

/***/ 61465:
/*!********************************************************************************!*\
  !*** ./projects/charon/src/app/login/pages/login-page/login-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../login-route */ 79205);
/* harmony import */ var _login_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page.service */ 99249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/directives/submit-source/submit-source.directive */ 387);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/input-container/input-container.component */ 29130);
/* harmony import */ var _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/controls/input/input.component */ 49874);
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/form-error/form-error.component */ 61926);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_browser_view_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/directives/browser-view/browser-popup-view.directive */ 88431);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);




















function LoginPageComponent_form_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
} }
function LoginPageComponent_form_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](7, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](12);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](translate_r1("forgot_password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function LoginPageComponent_form_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainer"](3, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](14);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function LoginPageComponent_form_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function LoginPageComponent_form_0_ng_template_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r11.navigateToRestorePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("restore"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("with_seed"), " ");
} }
function LoginPageComponent_form_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("form.submit"), " ");
} }
function LoginPageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r15.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, LoginPageComponent_form_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "app-input-container", 4)(5, "app-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "app-form-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, LoginPageComponent_form_0_ng_container_9_Template, 8, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, LoginPageComponent_form_0_ng_container_10_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, LoginPageComponent_form_0_ng_template_11_Template, 3, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, LoginPageComponent_form_0_ng_template_13_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("form.password.label"), " ");
} }
class LoginPageComponent {
    constructor(loginPageService, formBuilder) {
        this.loginPageService = loginPageService;
        this.formBuilder = formBuilder;
        this.loginRoute = _login_route__WEBPACK_IMPORTED_MODULE_1__.LoginRoute;
    }
    ngOnInit() {
        this.form = this.createForm();
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const passwordControl = this.form.controls.password;
            const unlocked = yield this.loginPageService.tryUnlock(passwordControl.value);
            if (!unlocked) {
                passwordControl.setErrors({
                    invalid: true,
                });
            }
        });
    }
    navigateToRestorePage() {
        this.loginPageService.navigateToRestorePage();
    }
    createForm() {
        return this.formBuilder.group({
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                ],
            ],
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_login_page_service__WEBPACK_IMPORTED_MODULE_2__.LoginPageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([
            _login_page_service__WEBPACK_IMPORTED_MODULE_2__.LoginPageService,
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'login.login_page.form',
            },
        ])], decls: 1, vars: 1, consts: [["class", "login-page__card", "appSubmitSource", "", 3, "formGroup", "ngSubmit", 4, "transloco", "translocoRead"], ["appSubmitSource", "", 1, "login-page__card", 3, "formGroup", "ngSubmit"], ["class", "login-page__title", "appTypeface", "subheader", 4, "appBrowserTabView"], ["appTypeface", "paragraph", 1, "login-page__subtitle"], [1, "login-page__input-container"], ["type", "password", "formControlName", "password", 3, "autofocus"], ["ngProjectAs", "[label]", 5, ["", "label", ""]], ["controlName", "password"], [4, "appBrowserTabView"], [4, "appBrowserPopupView"], ["restore", ""], ["submitButton", ""], ["appTypeface", "subheader", 1, "login-page__title"], [1, "login-page__hint"], ["appTypeface", "paragraph"], [3, "ngTemplateOutlet"], [1, "login-page__divider"], [1, "login-page__actions-container"], ["appTypeface", "paragraph", 1, "login-page__restore-link", 3, "click"], ["app-button", "", "type", "submit", 1, "login-page__submit-button"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, LoginPageComponent_form_0_Template, 15, 4, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("translocoRead", "login.login_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_15__.TranslocoDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_3__.SubmitSourceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__["ɵa"], _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_4__.BrowserTabViewDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__.TypefaceDirective, _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_6__.InputContainerComponent, _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_7__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_16__["ɵe"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_8__.FormErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgTemplateOutlet, _shared_directives_browser_view_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_9__.BrowserPopupViewDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0 16px 16px;\n}\n.mod-tab-view   [_nghost-%COMP%] {\n  padding: 0;\n}\n.mod-tab-view   [_nghost-%COMP%]   .login-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n}\n.mod-tab-view   [_nghost-%COMP%]   .login-page__input-container[_ngcontent-%COMP%] {\n  width: 372px;\n}\n.mod-tab-view   [_nghost-%COMP%]   .login-page__hint[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.mod-tab-view   [_nghost-%COMP%]   .login-page__submit-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.login-page__card[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  max-width: 792px;\n}\n.login-page__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 16px;\n}\n.login-page__subtitle[_ngcontent-%COMP%] {\n  color: var(--color-login-subtitle);\n}\n.login-page__input-container[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  margin-top: 16px;\n  width: 100%;\n}\n.login-page__hint[_ngcontent-%COMP%] {\n  color: var(--color-login-hint);\n  margin-top: 16px;\n  text-align: center;\n}\n.login-page__restore-link[_ngcontent-%COMP%] {\n  color: var(--color-login-restore-link);\n  cursor: pointer;\n  font-weight: 500;\n}\n.login-page__divider[_ngcontent-%COMP%] {\n  background-color: var(--color-outlines);\n  flex-shrink: 0;\n  height: 2px;\n  margin-top: 40px;\n  width: 100%;\n}\n.login-page__actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 16px;\n  width: 100%;\n}\n.login-page__submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLFVBQUE7QUFESjtBQUdJO0VBQ0UsdUNBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFNSTtFQUNFLFlBQUE7QUFKTjtBQVNBO0VBQ0UsbUJBQUE7RUFDQSxtQkNuQmM7RURvQmQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTkY7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVNBO0VBQ0Usa0NBQUE7QUFORjtBQVNBO0VBQ0Usa0JDbENVO0VEbUNWLGdCQUFBO0VBQ0EsV0FBQTtBQU5GO0FBU0E7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNBO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVNBO0VBQ0UsdUNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU5GO0FBU0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQU5GO0FBU0E7RUFDRSxXQUFBO0FBTkYiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMCAkZ3JpZC1zdGVwICogMiAkZ3JpZC1zdGVwICogMjtcclxuXHJcbiAgLm1vZC10YWItdmlldyAmIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLmxvZ2luLXBhZ2VfX2NhcmQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLXBhZ2VfX2lucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiAzNzJweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tcGFnZV9faGludCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLXBhZ2VfX3N1Ym1pdC1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tcGFnZV9fY2FyZCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogNzkycHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogMjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2VfX3N1YnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItbG9naW4tc3VidGl0bGUpO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZV9faW5wdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3JpZC1zdGVwO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZV9faGludCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxvZ2luLWhpbnQpO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2VfX3Jlc3RvcmUtbGluayB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxvZ2luLXJlc3RvcmUtbGluayk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlX19kaXZpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luLXRvcDogJGdyaWQtc3RlcCAqIDU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlX19hY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZV9fc3VibWl0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 99249:
/*!******************************************************************************!*\
  !*** ./projects/charon/src/app/login/pages/login-page/login-page.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageService": () => (/* binding */ LoginPageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login-route */ 79205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/lock */ 86126);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/navigation */ 12089);









class LoginPageService {
    constructor(activatedRoute, authService, lockService, navigationService, router) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.lockService = lockService;
        this.navigationService = navigationService;
        this.router = router;
    }
    tryUnlock(password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const isPasswordValid = yield this.authService.validateCurrentUserPassword(password);
            if (!isPasswordValid) {
                return false;
            }
            yield this.lockService.unlock();
            return true;
        });
    }
    navigateToRestorePage() {
        if (!(0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)()) {
            this.navigationService.openInNewTab(`${_app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Login}/${_login_route__WEBPACK_IMPORTED_MODULE_2__.LoginRoute.Restore}`);
            return window.close();
        }
        this.router.navigate([_login_route__WEBPACK_IMPORTED_MODULE_2__.LoginRoute.Restore], {
            relativeTo: this.activatedRoute,
        });
    }
}
LoginPageService.ɵfac = function LoginPageService_Factory(t) { return new (t || LoginPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_lock__WEBPACK_IMPORTED_MODULE_4__.LockService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_navigation__WEBPACK_IMPORTED_MODULE_5__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
LoginPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: LoginPageService, factory: LoginPageService.ɵfac });


/***/ }),

/***/ 24521:
/*!********************************************************!*\
  !*** ./shared/utils/html/fragment-wrapped-fragment.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFragmentWrappedContainer": () => (/* binding */ createFragmentWrappedContainer)
/* harmony export */ });
const createFragmentWrappedContainer = () => {
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
    fragment.appendChild(container);
    return container;
};


/***/ }),

/***/ 47902:
/*!*********************************************!*\
  !*** ./shared/utils/html/get-plain-text.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlainText": () => (/* binding */ getPlainText)
/* harmony export */ });
/* harmony import */ var _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-wrapped-fragment */ 24521);

const getPlainText = (html) => {
    const container = (0,_fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragmentWrappedContainer)();
    container.innerHTML = html;
    return container.innerText;
};


/***/ }),

/***/ 44655:
/*!*******************************************!*\
  !*** ./shared/utils/html/images-count.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHTMLImagesCount": () => (/* binding */ getHTMLImagesCount)
/* harmony export */ });
/* harmony import */ var _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-wrapped-fragment */ 24521);

const getHTMLImagesCount = (html) => {
    const container = (0,_fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragmentWrappedContainer)();
    container.innerHTML = html;
    return container.querySelectorAll('img').length;
};


/***/ }),

/***/ 67068:
/*!************************************!*\
  !*** ./shared/utils/html/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFragmentWrappedContainer": () => (/* reexport safe */ _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragmentWrappedContainer),
/* harmony export */   "getHTMLImagesCount": () => (/* reexport safe */ _images_count__WEBPACK_IMPORTED_MODULE_2__.getHTMLImagesCount),
/* harmony export */   "getNodeRect": () => (/* reexport safe */ _node_rect__WEBPACK_IMPORTED_MODULE_3__.getNodeRect),
/* harmony export */   "getPlainText": () => (/* reexport safe */ _get_plain_text__WEBPACK_IMPORTED_MODULE_1__.getPlainText),
/* harmony export */   "observeDocumentVisibility": () => (/* reexport safe */ _visibility__WEBPACK_IMPORTED_MODULE_4__.observeDocumentVisibility)
/* harmony export */ });
/* harmony import */ var _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-wrapped-fragment */ 24521);
/* harmony import */ var _get_plain_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-plain-text */ 47902);
/* harmony import */ var _images_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images-count */ 44655);
/* harmony import */ var _node_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node-rect */ 6812);
/* harmony import */ var _visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visibility */ 60585);







/***/ }),

/***/ 6812:
/*!****************************************!*\
  !*** ./shared/utils/html/node-rect.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNodeRect": () => (/* binding */ getNodeRect)
/* harmony export */ });
const getNodeRect = (node) => {
    const range = document.createRange();
    range.selectNode(node);
    return range.getBoundingClientRect();
};


/***/ }),

/***/ 60585:
/*!*****************************************!*\
  !*** ./shared/utils/html/visibility.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeDocumentVisibility": () => (/* binding */ observeDocumentVisibility)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59442);

const observeDocumentVisibility = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
        const listener = () => {
            const visible = document.visibilityState === 'visible';
            subscriber.next(visible);
        };
        window.addEventListener('visibilitychange', listener);
        return () => window.removeEventListener('visibilitychange', listener);
    });
};


/***/ }),

/***/ 14647:
/*!**************************************************************!*\
  !*** ./shared/utils/validation/base/base-validation.util.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseValidationUtil": () => (/* binding */ BaseValidationUtil)
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html */ 67068);

class BaseValidationUtil {
    static isSeedPhraseCorrect(control) {
        if (!control || !control.value) {
            return null;
        }
        const controlValueArr = control.value.trim().split(' ');
        const isInvalid = typeof control.value === 'string'
            && (controlValueArr.length !== 24
                || controlValueArr[controlValueArr.length - 1] === ''
                || controlValueArr[0] === '');
        return isInvalid ? { length: true } : null;
    }
    static minDate(minDate, parseFn) {
        return (control) => {
            return new Date(minDate) > (parseFn ? parseFn(control.value) : new Date(control.value))
                ? {
                    minDate: { value: BaseValidationUtil.dateToString(minDate) },
                }
                : null;
        };
    }
    static maxDate(maxDate, parseFn) {
        return (control) => {
            return new Date(maxDate) < (parseFn ? parseFn(control.value) : new Date(control.value))
                ? {
                    maxDate: { value: BaseValidationUtil.dateToString(maxDate) },
                }
                : null;
        };
    }
    static minHtmlTextLength(minLength) {
        return (control) => {
            const html = control.value;
            const textarea = document.createElement('div');
            textarea.innerHTML = html;
            const htmlTextLength = textarea.textContent.trim().length;
            return htmlTextLength < minLength
                ? {
                    minHtmlTextLength: {
                        current: htmlTextLength,
                        min: minLength,
                    },
                }
                : null;
        };
    }
    static maxStringBytes(maxBytes) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const bytesLength = new TextEncoder().encode(control.value).length;
            return bytesLength > maxBytes
                ? {
                    maxBytes: {
                        current: bytesLength,
                        max: maxBytes,
                    },
                }
                : null;
        };
    }
    static maxHTMLImages(maxImages) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const imagesCount = (0,_html__WEBPACK_IMPORTED_MODULE_0__.getHTMLImagesCount)(control.value);
            return imagesCount > maxImages
                ? {
                    maxImages: {
                        current: imagesCount,
                        max: maxImages,
                    },
                }
                : null;
        };
    }
    static dateToString(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return [year, month, day].join('-');
    }
}


/***/ }),

/***/ 19343:
/*!******************************************!*\
  !*** ./shared/utils/validation/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseValidationUtil": () => (/* reexport safe */ _base_base_validation_util__WEBPACK_IMPORTED_MODULE_0__.BaseValidationUtil)
/* harmony export */ });
/* harmony import */ var _base_base_validation_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base-validation.util */ 14647);



/***/ })

}]);
//# sourceMappingURL=projects_charon_src_app_login_login_module_ts.js.map