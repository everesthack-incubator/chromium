"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["projects_charon_src_app_sign-up_sign-up_module_ts"],{

/***/ 59692:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEVER": () => (/* binding */ NEVER),
/* harmony export */   "never": () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 59442);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 75485);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
    return NEVER;
}


/***/ }),

/***/ 93922:
/*!*******************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/components/account-form/account-form.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountFormComponent": () => (/* binding */ AccountFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/directives/submit-source/submit-source.directive */ 387);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/input-container/input-container.component */ 29130);
/* harmony import */ var _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/controls/input/input.component */ 49874);
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/form-error/form-error.component */ 61926);
/* harmony import */ var _shared_components_password_password_validation_state_password_validation_state_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/password/password-validation-state/password-validation-state.component */ 85984);
/* harmony import */ var _shared_components_password_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/password/password-form/password-form.component */ 15205);
/* harmony import */ var _shared_components_controls_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/controls/checkbox/checkbox.component */ 74085);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);


















const _c0 = function () { return { read: "shared.password.validation_state", scope: "shared" }; };
const _c1 = function () { return { read: "core.profile_form", scope: "core" }; };
function AccountFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function AccountFormComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r3.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "app-input-container", 6)(7, "app-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "app-form-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "section", 3)(12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-password-validation-state", 10)(15, "app-password-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "app-input-container", 6)(17, "app-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "app-form-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const translate_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("id", ctx_r0.formId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r2("email.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r2("email.subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r2("email.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r2("password.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("password", ctx_r0.passwordControl.value)("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](13, _c1))("required", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r2("terms_of_use.have_read"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r2("terms_of_use.link"), " ");
} }
function AccountFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 16)(3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AccountFormComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r6.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const translate_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r5("back"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("form", ctx_r1.formId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r5("submit"), " ");
} }
class AccountFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
        this.formId = 'SIGN_UP_ACCOUNT_FORM';
    }
    get passwordControl() {
        return this.form.get('password');
    }
    ngOnInit() {
        this.form = this.createForm();
    }
    onBack() {
        this.back.emit();
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        this.submitted.emit(this.form.getRawValue());
    }
    createForm() {
        return this.formBuilder.group({
            agreeTerms: [
                false,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.requiredTrue,
                ],
            ],
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__.RxwebValidators.email(),
                ],
            ],
            password: [''],
        });
    }
}
AccountFormComponent.ɵfac = function AccountFormComponent_Factory(t) { return new (t || AccountFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder)); };
AccountFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AccountFormComponent, selectors: [["app-account-form"]], outputs: { back: "back", submitted: "submitted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'sign_up.account_form_page.form',
            },
        ])], decls: 2, vars: 2, consts: [["class", "account-form__form", "appSubmitSource", "", 3, "formGroup", "ngSubmit", 4, "transloco", "translocoRead"], [4, "transloco", "translocoRead"], ["appSubmitSource", "", 1, "account-form__form", 3, "formGroup", "ngSubmit"], [1, "account-form__section"], ["appTypeface", "subheader", 1, "account-form__section__title"], ["appTypeface", "paragraph", 1, "account-form__section__subtitle"], [1, "account-form__form-field"], ["formControlName", "email", 1, "account-form__input"], ["ngProjectAs", "[label]", 5, ["", "label", ""]], ["controlName", "email", "i18nControlKey", "email"], [1, "account-form__section__subtitle", 3, "password", "translationsConfig"], ["formControlName", "password", 1, "account-form__form-field", 3, "translationsConfig", "required"], ["formControlName", "agreeTerms"], ["href", "https://decentr.net/terms.html", "target", "_blank", 1, "account-form__link"], ["controlName", "agreeTerms", "i18nControlKey", "terms_of_use"], [1, "account-form__divider"], [1, "account-form__actions"], ["app-button", "", "color", "grey", 1, "account-form__action-button", 3, "click"], ["app-button", "", "type", "submit", 1, "account-form__action-button"]], template: function AccountFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AccountFormComponent_form_0_Template, 22, 14, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AccountFormComponent_div_1_Template, 7, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translocoRead", "sign_up.account_form_page.form");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translocoRead", "sign_up.account_form_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_14__.TranslocoDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_1__.SubmitSourceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__["ɵa"], _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__.TypefaceDirective, _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_3__.InputContainerComponent, _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_12__["ɵe"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_5__.FormErrorComponent, _shared_components_password_password_validation_state_password_validation_state_component__WEBPACK_IMPORTED_MODULE_6__.PasswordValidationStateComponent, _shared_components_password_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_7__.PasswordFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _shared_components_controls_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__.CheckboxComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n\n.account-form__section[_ngcontent-%COMP%]    + .account-form__section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.account-form__section__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.account-form__section__subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.account-form__form-field[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  width: 100%;\n}\n\n.account-form__checkbox[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.account-form__link[_ngcontent-%COMP%] {\n  color: var(--color-account-form-link);\n}\n\n.account-form__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  height: 2px;\n  margin: 16px -16px;\n}\n\n.account-form__actions[_ngcontent-%COMP%] {\n  column-gap: 12px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.account-form__action-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFLRTtFQUNFLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUNSVTtBREtaOztBQU1BO0VBQ0UsZUNaVTtFRGFWLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGVDakJVO0FEY1o7O0FBTUE7RUFDRSxxQ0FBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEYiLCJmaWxlIjoiYWNjb3VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmFjY291bnQtZm9ybV9fc2VjdGlvbiB7XHJcbiAgJiArICYge1xyXG4gICAgbWFyZ2luLXRvcDogJGdyaWQtc3RlcCAqIDU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWNjb3VudC1mb3JtX19zZWN0aW9uX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmFjY291bnQtZm9ybV9fc2VjdGlvbl9fc3VidGl0bGUge1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXA7XHJcbn1cclxuXHJcbi5hY2NvdW50LWZvcm1fX2Zvcm0tZmllbGQge1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hY2NvdW50LWZvcm1fX2NoZWNrYm94IHtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwO1xyXG59XHJcblxyXG4uYWNjb3VudC1mb3JtX19saW5rIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjb3VudC1mb3JtLWxpbmspO1xyXG59XHJcblxyXG4uYWNjb3VudC1mb3JtX19kaXZpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAkZ3JpZC1zdGVwICogMiAoLSRncmlkLXN0ZXAgKiAyKTtcclxufVxyXG5cclxuLmFjY291bnQtZm9ybV9fYWN0aW9ucyB7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcCAqIDEuNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5hY2NvdW50LWZvcm1fX2FjdGlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 88422:
/*!*******************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/components/profile-card/profile-card.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileCardComponent": () => (/* binding */ ProfileCardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var _shared_svg_icons_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/wallet */ 94034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/avatar/avatar.component */ 43191);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/directives/text-ellipsis/text-ellipsis.directive */ 50262);
/* harmony import */ var _shared_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/tooltip/tooltip.directive */ 31049);
/* harmony import */ var _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-skeleton-loader */ 39752);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);
















function ProfileCardComponent_ng_container_0_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appTooltip", translate_r3("banned.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r3("banned.label"), " ");
} }
function ProfileCardComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-avatar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProfileCardComponent_ng_container_0_div_1_span_5_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "svg-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-currency-symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const profile_r5 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("avatarUrl", profile_r5.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", profile_r5.firstName, " ", profile_r5.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", profile_r5.banned);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](10, 6, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 10, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 12, ctx_r4.balance$)), null, true), "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", profile_r5.bio, " ");
} }
function ProfileCardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileCardComponent_ng_container_0_div_1_Template, 16, 14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r0.profile$))("ngIfElse", _r1);
} }
const _c0 = function () { return { height: "80px" }; };
function ProfileCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ngx-skeleton-loader", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c0));
} }
class ProfileCardComponent {
    constructor(authService, bankService, svgIconRegistry, userService) {
        this.authService = authService;
        this.bankService = bankService;
        this.svgIconRegistry = svgIconRegistry;
        this.userService = userService;
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_wallet__WEBPACK_IMPORTED_MODULE_0__.svgWallet,
        ]);
        this.balance$ = this.bankService.getDECBalance();
        this.profile$ = this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((walletAddress) => this.userService.getProfile(walletAddress)));
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.BankService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.UserService)); };
ProfileCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], decls: 3, vars: 1, consts: [[4, "transloco", "translocoRead"], ["loader", ""], ["class", "profile-card__container", 4, "ngIf", "ngIfElse"], [1, "profile-card__container"], [1, "profile-card__avatar", 3, "avatarUrl"], ["appTypeface", "header-4", 1, "profile-card__name"], ["appTextEllipsis", ""], ["class", "profile-card__name__ban-label", "appTypeface", "caption", 3, "appTooltip", 4, "ngIf"], ["appTypeface", "paragraph", 1, "profile-card__balance"], ["key", "wallet", 1, "profile-card__balance__icon"], ["appTypeface", "paragraph", 1, "profile-card__bio"], ["appTypeface", "caption", 1, "profile-card__name__ban-label", 3, "appTooltip"], [3, "theme"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProfileCardComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileCardComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translocoRead", "sign_up.pdv_consent");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__.AvatarComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__.TypefaceDirective, _shared_directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_5__.TextEllipsisDirective, _shared_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_6__.TooltipDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__.SvgIconComponent, _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_7__.CurrencySymbolComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__.NgxSkeletonLoaderComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_8__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_9__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.profile-card__container[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--color-card-background);\n  border-radius: 12px;\n  grid-column-gap: 8px;\n  column-gap: 8px;\n  display: grid;\n  grid-template-areas: \"avatar name balance\" \"empty bio bio\";\n  grid-template-columns: max-content minmax(0, 1fr) max-content;\n  padding: 16px;\n}\n\n.profile-card__avatar[_ngcontent-%COMP%] {\n  grid-area: avatar;\n  height: 54px;\n  min-width: 54px;\n}\n\n.profile-card__name[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  font-weight: 500;\n  grid-area: name;\n}\n\n.profile-card__name__ban-label[_ngcontent-%COMP%] {\n  background: rgba(var(--color-profile-card-ban-label), 0.08);\n  border-radius: 12px;\n  color: rgb(var(--color-profile-card-ban-label));\n  margin-left: 8px;\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n\n.profile-card__balance[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: rgba(var(--color-profile-card-balance-background), 0.08);\n  border-radius: 12px;\n  column-gap: 8px;\n  display: inline-flex;\n  font-weight: 500;\n  height: min-content;\n  grid-area: balance;\n  padding: 8px 16px;\n}\n\n.profile-card__balance__icon[_ngcontent-%COMP%] {\n  color: var(--color-profile-card-balance-icon);\n}\n\n.profile-card__bio[_ngcontent-%COMP%] {\n  color: var(--color-profile-card-balance-bio);\n  grid-area: bio;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJDQ2M7RURBZCxvQkNFVTtFREZWLGVDRVU7RUREVixhQUFBO0VBQ0EsMERBQUE7RUFFQSw2REFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsMkRBQUE7RUFDQSxtQkN2QmM7RUR3QmQsK0NBQUE7RUFDQSxnQkN2QlU7RUR3QlYsZ0JBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSwwRUFBQTtFQUNBLG1CQ2pDYztFRGtDZCxlQ2hDVTtFRGlDVixvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSw2Q0FBQTtBQUZGOztBQUtBO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0FBRkYiLCJmaWxlIjoicHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZF9fY29udGFpbmVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdhdmF0YXIgbmFtZSBiYWxhbmNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICdlbXB0eSBiaW8gYmlvJztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1pbm1heCgwLCAxZnIpIG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jYXJkX19hdmF0YXIge1xyXG4gIGdyaWQtYXJlYTogYXZhdGFyO1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtaW4td2lkdGg6IDU0cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmRfX25hbWUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGdyaWQtYXJlYTogbmFtZTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZF9fbmFtZV9fYmFuLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLXByb2ZpbGUtY2FyZC1iYW4tbGFiZWwpLCAuMDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGNvbG9yOiByZ2IodmFyKC0tY29sb3ItcHJvZmlsZS1jYXJkLWJhbi1sYWJlbCkpO1xyXG4gIG1hcmdpbi1sZWZ0OiAkZ3JpZC1zdGVwO1xyXG4gIHBhZGRpbmc6ICRncmlkLWhhbGYtc3RlcCAkZ3JpZC1zdGVwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmRfX2JhbGFuY2Uge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1wcm9maWxlLWNhcmQtYmFsYW5jZS1iYWNrZ3JvdW5kKSwgMC4wOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZ3JpZC1hcmVhOiBiYWxhbmNlO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgJGdyaWQtc3RlcCAqIDI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmRfX2JhbGFuY2VfX2ljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9maWxlLWNhcmQtYmFsYW5jZS1pY29uKTtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZF9fYmlvIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJvZmlsZS1jYXJkLWJhbGFuY2UtYmlvKTtcclxuICBncmlkLWFyZWE6IGJpbztcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 53822:
/*!*****************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/components/seed-phrase/seed-phrase.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeedPhraseComponent": () => (/* binding */ SeedPhraseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_svg_icons_loud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/loud */ 71892);
/* harmony import */ var _shared_svg_icons_referral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/referral */ 52132);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_seed_seed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/seed/seed.component */ 80563);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);









function SeedPhraseComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section")(2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-seed", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "svg-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div")(10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "svg-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div")(20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 7)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 11)(32, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SeedPhraseComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SeedPhraseComponent_ng_container_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.onNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r0.seedPhrase);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("careful.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("careful.text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("careful.text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("warning.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("warning.text1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("warning.text2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("warning.text3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("back"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("next"), " ");
} }
class SeedPhraseComponent {
    constructor(svgIconRegistry) {
        this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        svgIconRegistry.register([
            _shared_svg_icons_loud__WEBPACK_IMPORTED_MODULE_0__.svgLoud,
            _shared_svg_icons_referral__WEBPACK_IMPORTED_MODULE_1__.svgReferral,
        ]);
    }
    onBack() {
        this.back.emit();
    }
    onNext() {
        this.next.emit();
    }
}
SeedPhraseComponent.ɵfac = function SeedPhraseComponent_Factory(t) { return new (t || SeedPhraseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconRegistry)); };
SeedPhraseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SeedPhraseComponent, selectors: [["app-seed-phrase"]], inputs: { seedPhrase: "seedPhrase" }, outputs: { back: "back", next: "next" }, decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["appTypeface", "subheader", 1, "seed-phrase__title"], ["appTypeface", "paragraph", 1, "seed-phrase__subtitle"], [3, "value"], ["appTypeface", "paragraph", 1, "seed-phrase__message", "mod-careful"], ["key", "referral"], [1, "seed-phrase__message__label"], [1, "seed-phrase__message__text"], ["appTypeface", "paragraph", 1, "seed-phrase__message", "mod-warning"], ["key", "loud"], [1, "seed-phrase__divider"], [1, "seed-phrase__actions"], ["app-button", "", "color", "grey", 1, "seed-phrase__action-button", 3, "click"], ["app-button", "", 1, "seed-phrase__action-button", 3, "click"]], template: function SeedPhraseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SeedPhraseComponent_ng_container_0_Template, 36, 12, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translocoRead", "sign_up.seed_phrase_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__.TypefaceDirective, _shared_components_seed_seed_component__WEBPACK_IMPORTED_MODULE_3__.SeedComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n\n.seed-phrase__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.seed-phrase__subtitle[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.seed-phrase__message[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  column-gap: 8px;\n  display: flex;\n  margin-top: 16px;\n  padding: 16px;\n}\n\n.seed-phrase__message.mod-careful[_ngcontent-%COMP%] {\n  background: rgba(var(--color-seed-phrase-careful), 0.08);\n  color: rgb(var(--color-seed-phrase-careful));\n}\n\n.seed-phrase__message.mod-warning[_ngcontent-%COMP%] {\n  background: rgba(var(--color-seed-phrase-warning), 0.08);\n  color: rgb(var(--color-seed-phrase-warning));\n}\n\n.seed-phrase__message__label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.seed-phrase__message__text[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n}\n\n.seed-phrase__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  height: 2px;\n  margin: 16px -16px;\n}\n\n.seed-phrase__actions[_ngcontent-%COMP%] {\n  column-gap: 12px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.seed-phrase__action-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZWQtcGhyYXNlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGVDRlU7QURDWjs7QUFJQTtFQUNFLG1CQ1JjO0VEU2QsZUNQVTtFRFFWLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFHRTtFQUNFLHdEQUFBO0VBQ0EsNENBQUE7QUFESjs7QUFJRTtFQUNFLHdEQUFBO0VBQ0EsNENBQUE7QUFGSjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0FBSEYiLCJmaWxlIjoic2VlZC1waHJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2VlZC1waHJhc2VfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2VlZC1waHJhc2VfX3N1YnRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwO1xyXG59XHJcblxyXG4uc2VlZC1waHJhc2VfX21lc3NhZ2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGNvbHVtbi1nYXA6ICRncmlkLXN0ZXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogMjtcclxuICBwYWRkaW5nOiAkZ3JpZC1zdGVwICogMjtcclxuXHJcbiAgJi5tb2QtY2FyZWZ1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLXNlZWQtcGhyYXNlLWNhcmVmdWwpLCAwLjA4KTtcclxuICAgIGNvbG9yOiByZ2IodmFyKC0tY29sb3Itc2VlZC1waHJhc2UtY2FyZWZ1bCkpO1xyXG4gIH1cclxuXHJcbiAgJi5tb2Qtd2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLXNlZWQtcGhyYXNlLXdhcm5pbmcpLCAwLjA4KTtcclxuICAgIGNvbG9yOiByZ2IodmFyKC0tY29sb3Itc2VlZC1waHJhc2Utd2FybmluZykpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlZWQtcGhyYXNlX19tZXNzYWdlX19sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNlZWQtcGhyYXNlX19tZXNzYWdlX190ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcclxufVxyXG5cclxuLnNlZWQtcGhyYXNlX19kaXZpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAkZ3JpZC1zdGVwICogMiAoLSRncmlkLXN0ZXAgKiAyKTtcclxufVxyXG5cclxuLnNlZWQtcGhyYXNlX19hY3Rpb25zIHtcclxuICBjb2x1bW4tZ2FwOiAkZ3JpZC1zdGVwICogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnNlZWQtcGhyYXNlX19hY3Rpb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 20205:
/*!*******************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/guards/complete-registration.guard.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationGuard": () => (/* binding */ CompleteRegistrationGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _shared_utils_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/routing */ 79945);
/* harmony import */ var _core_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/guards */ 61179);
/* harmony import */ var _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-confirmation.guard */ 47108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);








class CompleteRegistrationGuard {
    constructor(authService, spinnerService, userService, router) {
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.router = router;
    }
    static canActivate(authService, userService) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!authService.isLoggedIn) {
                return false;
            }
            const emailUnconfirmed = yield _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_2__.EmailConfirmationGuard.canActivate(authService, userService);
            if (emailUnconfirmed) {
                return false;
            }
            const isProfileFilledIn = yield _core_guards__WEBPACK_IMPORTED_MODULE_1__.AuthCompletedRegistrationGuard.isProfileFilledIn(authService, userService);
            return !isProfileFilledIn;
        });
    }
    canActivate(route, routerState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.spinnerService.showSpinner();
            const canActivate = yield CompleteRegistrationGuard.canActivate(this.authService, this.userService);
            this.spinnerService.hideSpinner();
            return canActivate || this.router.createUrlTree([(0,_shared_utils_routing__WEBPACK_IMPORTED_MODULE_0__.getParentUrlFromSnapshots)(route, routerState)]);
        });
    }
}
CompleteRegistrationGuard.ɵfac = function CompleteRegistrationGuard_Factory(t) { return new (t || CompleteRegistrationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_4__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
CompleteRegistrationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CompleteRegistrationGuard, factory: CompleteRegistrationGuard.ɵfac });


/***/ }),

/***/ 47108:
/*!****************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/guards/email-confirmation.guard.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmationGuard": () => (/* binding */ EmailConfirmationGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 74672);
/* harmony import */ var _shared_utils_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/routing */ 79945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 73903);







class EmailConfirmationGuard {
    constructor(authService, spinnerService, userService, router) {
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.router = router;
    }
    static canActivate(authService, userService) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!authService.isLoggedIn) {
                return false;
            }
            const wallet = authService.getActiveUserInstant().wallet;
            const account = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(userService.getAccount(wallet.address));
            return !account;
        });
    }
    canActivate(route, routerState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.spinnerService.showSpinner();
            const canActivate = yield EmailConfirmationGuard.canActivate(this.authService, this.userService);
            this.spinnerService.hideSpinner();
            return canActivate || this.router.createUrlTree([(0,_shared_utils_routing__WEBPACK_IMPORTED_MODULE_0__.getParentUrlFromSnapshots)(route, routerState)]);
        });
    }
}
EmailConfirmationGuard.ɵfac = function EmailConfirmationGuard_Factory(t) { return new (t || EmailConfirmationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
EmailConfirmationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EmailConfirmationGuard, factory: EmailConfirmationGuard.ɵfac });


/***/ }),

/***/ 76545:
/*!*********************************************************!*\
  !*** ./projects/charon/src/app/sign-up/guards/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationGuard": () => (/* reexport safe */ _complete_registration_guard__WEBPACK_IMPORTED_MODULE_2__.CompleteRegistrationGuard),
/* harmony export */   "EmailConfirmationGuard": () => (/* reexport safe */ _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmationGuard),
/* harmony export */   "PDVConsentGuard": () => (/* reexport safe */ _pdv_consent_guard__WEBPACK_IMPORTED_MODULE_3__.PDVConsentGuard),
/* harmony export */   "SIGN_UP_GUARDS": () => (/* binding */ SIGN_UP_GUARDS),
/* harmony export */   "SignUpGuard": () => (/* reexport safe */ _sign_up_guard__WEBPACK_IMPORTED_MODULE_0__.SignUpGuard)
/* harmony export */ });
/* harmony import */ var _sign_up_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.guard */ 211);
/* harmony import */ var _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-confirmation.guard */ 47108);
/* harmony import */ var _complete_registration_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete-registration.guard */ 20205);
/* harmony import */ var _pdv_consent_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdv-consent.guard */ 16270);








const SIGN_UP_GUARDS = [
    _complete_registration_guard__WEBPACK_IMPORTED_MODULE_2__.CompleteRegistrationGuard,
    _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmationGuard,
    _pdv_consent_guard__WEBPACK_IMPORTED_MODULE_3__.PDVConsentGuard,
    _sign_up_guard__WEBPACK_IMPORTED_MODULE_0__.SignUpGuard,
];


/***/ }),

/***/ 16270:
/*!*********************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/guards/pdv-consent.guard.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVConsentGuard": () => (/* binding */ PDVConsentGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _shared_utils_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/routing */ 79945);
/* harmony import */ var _core_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/guards */ 61179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/settings */ 31922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 73903);








class PDVConsentGuard {
    constructor(authService, userService, settingsService, spinnerService, router) {
        this.authService = authService;
        this.userService = userService;
        this.settingsService = settingsService;
        this.spinnerService = spinnerService;
        this.router = router;
    }
    static canActivate(authService, userService, settingsService) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!authService.isLoggedIn) {
                return false;
            }
            const isProfileFilledIn = yield _core_guards__WEBPACK_IMPORTED_MODULE_1__.AuthCompletedRegistrationGuard.isProfileFilledIn(authService, userService);
            if (!isProfileFilledIn) {
                return false;
            }
            return _core_guards__WEBPACK_IMPORTED_MODULE_1__.AuthCompletedRegistrationGuard.isPDVCollectionConfirmed(authService, settingsService)
                .then((isPDVCollectionConfirmed) => !isPDVCollectionConfirmed);
        });
    }
    canActivate(route, routerState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.spinnerService.showSpinner();
            const canActivate = yield PDVConsentGuard.canActivate(this.authService, this.userService, this.settingsService);
            this.spinnerService.hideSpinner();
            return canActivate || this.router.createUrlTree([(0,_shared_utils_routing__WEBPACK_IMPORTED_MODULE_0__.getParentUrlFromSnapshots)(route, routerState)]);
        });
    }
}
PDVConsentGuard.ɵfac = function PDVConsentGuard_Factory(t) { return new (t || PDVConsentGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_settings__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
PDVConsentGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: PDVConsentGuard, factory: PDVConsentGuard.ɵfac });


/***/ }),

/***/ 211:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/guards/sign-up.guard.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpGuard": () => (/* binding */ SignUpGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _sign_up_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sign-up-route */ 88295);
/* harmony import */ var _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-confirmation.guard */ 47108);
/* harmony import */ var _complete_registration_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complete-registration.guard */ 20205);
/* harmony import */ var _pdv_consent_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdv-consent.guard */ 16270);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/settings */ 31922);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 73903);










class SignUpGuard {
    constructor(authService, settingsService, spinnerService, userService, router) {
        this.authService = authService;
        this.settingsService = settingsService;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.router = router;
    }
    canActivate({}, routerState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.authService.isLoggedIn) {
                return true;
            }
            this.spinnerService.showSpinner();
            const shouldRedirectToEmailConfirmation = yield _email_confirmation_guard__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmationGuard.canActivate(this.authService, this.userService);
            if (shouldRedirectToEmailConfirmation) {
                return this.router.createUrlTree([routerState.url, _sign_up_route__WEBPACK_IMPORTED_MODULE_0__.SignUpRoute.EmailConfirmation]);
            }
            const shouldRedirectToCompleteRegistration = yield _complete_registration_guard__WEBPACK_IMPORTED_MODULE_2__.CompleteRegistrationGuard.canActivate(this.authService, this.userService);
            if (shouldRedirectToCompleteRegistration) {
                return this.router.createUrlTree([routerState.url, _sign_up_route__WEBPACK_IMPORTED_MODULE_0__.SignUpRoute.CompleteRegistration]);
            }
            const shouldRedirectToPDVConsent = yield _pdv_consent_guard__WEBPACK_IMPORTED_MODULE_3__.PDVConsentGuard.canActivate(this.authService, this.userService, this.settingsService);
            if (shouldRedirectToPDVConsent) {
                return this.router.createUrlTree([routerState.url, _sign_up_route__WEBPACK_IMPORTED_MODULE_0__.SignUpRoute.PDVConsent]);
            }
            this.spinnerService.hideSpinner();
            return this.router.createUrlTree(['/']);
        });
    }
}
SignUpGuard.ɵfac = function SignUpGuard_Factory(t) { return new (t || SignUpGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_settings__WEBPACK_IMPORTED_MODULE_5__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
SignUpGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: SignUpGuard, factory: SignUpGuard.ɵfac });


/***/ }),

/***/ 73522:
/*!******************************************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/complete-registration-page/complete-registration-page.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPageComponent": () => (/* binding */ CompleteRegistrationPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 94850);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _sign_up_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sign-up-route */ 88295);
/* harmony import */ var _complete_registration_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complete-registration-page.service */ 71549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/directives/submit-source/submit-source.directive */ 387);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/profile-form/profile-form.component */ 19268);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);





















const _c0 = function () { return { read: "core.profile_form", scope: "core" }; };
function CompleteRegistrationPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function CompleteRegistrationPageComponent_div_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r2.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "app-profile-form", 5)(6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", translate_r1("submit"), " ");
} }
let CompleteRegistrationPageComponent = class CompleteRegistrationPageComponent {
    constructor(authService, completeRegistrationPageService, formBuilder, notificationService, router, spinnerService, userService) {
        this.authService = authService;
        this.completeRegistrationPageService = completeRegistrationPageService;
        this.formBuilder = formBuilder;
        this.notificationService = notificationService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.useContainerClass = true;
    }
    ngOnInit() {
        this.form = this.createForm();
        const user = this.authService.getActiveUserInstant();
        this.userService.getProfile(user.wallet.address, user.wallet.privateKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((profile) => profile || {}), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this)).subscribe((profile) => {
            var _a;
            if (!((_a = profile.emails) === null || _a === void 0 ? void 0 : _a.length) && user.primaryEmail) {
                profile.emails = [user.primaryEmail];
            }
            this.form.get('profile').patchValue(profile);
        });
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        const formValue = this.form.getRawValue();
        this.spinnerService.showSpinner();
        this.completeRegistrationPageService.updateUser(formValue.profile)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => this.spinnerService.hideSpinner()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.untilDestroyed)(this))
            .subscribe({
            next: () => this.router.navigate([_app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.SignUp, _sign_up_route__WEBPACK_IMPORTED_MODULE_2__.SignUpRoute.PDVConsent]),
            error: (error) => this.notificationService.error(error),
        });
    }
    createForm() {
        return this.formBuilder.group({
            profile: undefined,
        });
    }
};
CompleteRegistrationPageComponent.ɵfac = function CompleteRegistrationPageComponent_Factory(t) { return new (t || CompleteRegistrationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_complete_registration_page_service__WEBPACK_IMPORTED_MODULE_3__.CompleteRegistrationPageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.UserService)); };
CompleteRegistrationPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: CompleteRegistrationPageComponent, selectors: [["app-complete-registration-page"]], hostVars: 2, hostBindings: function CompleteRegistrationPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx.useContainerClass);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([
            _complete_registration_page_service__WEBPACK_IMPORTED_MODULE_3__.CompleteRegistrationPageService,
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'core.profile_form',
            },
        ])], decls: 1, vars: 1, consts: [["class", "complete-registration-page__card", 4, "transloco", "translocoRead"], [1, "complete-registration-page__card"], ["appTypeface", "subheader", 1, "complete-registration-page__title"], [1, "complete-registration-page__divider"], ["autocomplete", "off", "appSubmitSource", "", 3, "formGroup", "ngSubmit"], ["formControlName", "profile", 3, "translationsConfig"], [1, "complete-registration-page__actions-container"], ["app-button", "", "type", "submit", 1, "complete-registration-page__action-button"]], template: function CompleteRegistrationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, CompleteRegistrationPageComponent_div_0_Template, 10, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("translocoRead", "sign_up.complete_registration");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_17__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__.TypefaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_8__.SubmitSourceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_19__["ɵa"], _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_9__.ProfileFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_19__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_19__["ɵe"], _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding-bottom: 40px;\n}\n\n.complete-registration-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding: 16px;\n  width: 792px;\n}\n\n.complete-registration-page__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  flex-shrink: 0;\n  height: 2px;\n  margin: 16px -16px;\n}\n\n.complete-registration-page__actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.complete-registration-page__action-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlLXJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsdUNBQUE7RUFDQSxtQkNDYztFREFkLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERiIsImZpbGUiOiJjb21wbGV0ZS1yZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1ib3R0b206ICRncmlkLXN0ZXAgKiA1O1xyXG59XHJcblxyXG4uY29tcGxldGUtcmVnaXN0cmF0aW9uLXBhZ2VfX2NhcmQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmVzKTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHdpZHRoOiA3OTJweDtcclxufVxyXG5cclxuLmNvbXBsZXRlLXJlZ2lzdHJhdGlvbi1wYWdlX19kaXZpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAkZ3JpZC1zdGVwICogMiAoLSRncmlkLXN0ZXAgKiAyKTtcclxufVxyXG5cclxuLmNvbXBsZXRlLXJlZ2lzdHJhdGlvbi1wYWdlX19hY3Rpb25zLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY29tcGxldGUtcmVnaXN0cmF0aW9uLXBhZ2VfX2FjdGlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxNjBweDtcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });
CompleteRegistrationPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__.UntilDestroy)()
], CompleteRegistrationPageComponent);



/***/ }),

/***/ 71549:
/*!****************************************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/complete-registration-page/complete-registration-page.service.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPageService": () => (/* binding */ CompleteRegistrationPageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 23531);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var _core_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/notifications */ 21796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 88718);






class CompleteRegistrationPageService {
    constructor(translocoService, userService) {
        this.translocoService = translocoService;
        this.userService = userService;
    }
    updateUser(update) {
        return this.userService.setProfile(update).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            var _a;
            switch ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) {
                case 429 /* TooManyRequests */:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new _core_notifications__WEBPACK_IMPORTED_MODULE_0__.TranslatedError(this.translocoService.translate(`sign_up.complete_registration.toastr.errors.${429 /* TooManyRequests */}`, null)));
                default:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
            }
        }));
    }
}
CompleteRegistrationPageService.ɵfac = function CompleteRegistrationPageService_Factory(t) { return new (t || CompleteRegistrationPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
CompleteRegistrationPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: CompleteRegistrationPageService, factory: CompleteRegistrationPageService.ɵfac });


/***/ }),

/***/ 86777:
/*!***********************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/complete-registration-page/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPageComponent": () => (/* reexport safe */ _complete_registration_page_component__WEBPACK_IMPORTED_MODULE_0__.CompleteRegistrationPageComponent)
/* harmony export */ });
/* harmony import */ var _complete_registration_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-registration-page.component */ 73522);



/***/ }),

/***/ 57201:
/*!************************************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/email-confirmation-page/email-confirmation-page.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmationPageComponent": () => (/* binding */ EmailConfirmationPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 84225);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 94850);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _sign_up_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sign-up-route */ 88295);
/* harmony import */ var _email_confirmation_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-confirmation-page.service */ 47064);
/* harmony import */ var _shared_svg_icons_email_confirmation_wait__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/svg-icons/email-confirmation-wait */ 79344);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/code-input/code-input.component */ 56409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/analytics/directives/analytics-click-event.directive */ 30229);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);



























function EmailConfirmationPageComponent_form_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("did_not_get_code"), " ");
} }
const _c0 = function (a0) { return { time: a0 }; };
function EmailConfirmationPageComponent_form_0_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](0);
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("resend_code_will_able", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](1, _c0, ctx_r4.secondsLeftToResend)), " ");
} }
function EmailConfirmationPageComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function EmailConfirmationPageComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r7.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "svg-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "app-code-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 11)(16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, EmailConfirmationPageComponent_form_0_div_17_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, EmailConfirmationPageComponent_form_0_ng_template_18_Template, 1, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmailConfirmationPageComponent_form_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return !ctx_r9.secondsLeftToResend && ctx_r9.sendEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 17)(24, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EmailConfirmationPageComponent_form_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r10.registerNewAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.codeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("sent"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.email, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("ensure"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("check_spam"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("autofocus", true)("length", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r0.secondsLeftToResend)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("mod-disabled", ctx_r0.secondsLeftToResend);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("resend_code"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appAnalyticsClickEvent", ctx_r0.analyticsEvent.RegisterNewAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("register_new_account"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx_r0.codeForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("submit"), " ");
} }
let EmailConfirmationPageComponent = class EmailConfirmationPageComponent {
    constructor(authService, changeDetectorRef, emailConfirmationPageService, formBuilder, notificationService, router, spinnerService, svgIconRegistry) {
        this.authService = authService;
        this.changeDetectorRef = changeDetectorRef;
        this.emailConfirmationPageService = emailConfirmationPageService;
        this.formBuilder = formBuilder;
        this.notificationService = notificationService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.svgIconRegistry = svgIconRegistry;
        this.useContainerClass = true;
        this.analyticsEvent = _shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsEvent;
        this.timerReset$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_email_confirmation_wait__WEBPACK_IMPORTED_MODULE_5__.svgEmailConfirmationWait,
        ]);
        this.codeForm = this.createForm();
        this.email = this.authService.getActiveUserInstant().primaryEmail;
        this.emailConfirmationPageService.getEmailTimer(this.timerReset$)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this))
            .subscribe((timerValue) => {
            this.secondsLeftToResend = timerValue;
            this.changeDetectorRef.markForCheck();
        });
    }
    confirm() {
        const { code } = this.codeForm.getRawValue();
        this.spinnerService.showSpinner();
        this.emailConfirmationPageService.confirmEmail(code)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.spinnerService.hideSpinner()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this))
            .subscribe({
            next: () => {
                this.emailConfirmationPageService.dispose();
                this.router.navigate([_app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.SignUp, _sign_up_route__WEBPACK_IMPORTED_MODULE_3__.SignUpRoute.CompleteRegistration]);
            },
            error: (error) => this.notificationService.error(error),
        });
    }
    sendEmail() {
        this.spinnerService.showSpinner();
        this.emailConfirmationPageService.sendEmail()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.finalize)(() => this.spinnerService.hideSpinner()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this))
            .subscribe({
            next: () => this.resetTimer(),
            error: (error) => this.notificationService.error(error),
        });
    }
    registerNewAccount() {
        this.emailConfirmationPageService.resetSignUp()
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.untilDestroyed)(this))
            .subscribe(() => {
            this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.SignUp]);
        });
    }
    createForm() {
        return this.formBuilder.group({
            code: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required,
            ],
        });
    }
    resetTimer() {
        this.timerReset$.next();
    }
};
EmailConfirmationPageComponent.ɵfac = function EmailConfirmationPageComponent_Factory(t) { return new (t || EmailConfirmationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_email_confirmation_page_service__WEBPACK_IMPORTED_MODULE_4__.EmailConfirmationPageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_8__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_20__.SvgIconRegistry)); };
EmailConfirmationPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: EmailConfirmationPageComponent, selectors: [["app-email-confirmation-page"]], hostVars: 2, hostBindings: function EmailConfirmationPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("container", ctx.useContainerClass);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([
            _email_confirmation_page_service__WEBPACK_IMPORTED_MODULE_4__.EmailConfirmationPageService,
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_1__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'sign_up.email_confirmation_page.form',
            },
        ])], decls: 1, vars: 1, consts: [["class", "email-confirmation-page__card", 3, "formGroup", "ngSubmit", 4, "transloco", "translocoRead"], [1, "email-confirmation-page__card", 3, "formGroup", "ngSubmit"], [1, "email-confirmation-page__card__header"], ["key", "email-confirmation-wait", 1, "email-confirmation-page__card__wait-icon"], ["appTypeface", "subheader", 1, "email-confirmation-page__card__title"], ["appTypeface", "paragraph"], [1, "email-confirmation-page__card__sent"], [1, "email-confirmation-page__card__sent-email"], [1, "email-confirmation-page__card__ensure"], ["appTypeface", "caption"], ["formControlName", "code", 1, "email-confirmation-page__card__code-input", 3, "autofocus", "length"], [1, "email-confirmation-page__card__resend-code"], ["appTypeface", "paragraph", 1, "email-confirmation-page__card__resend-code-label"], [4, "ngIf", "ngIfElse"], ["timer", ""], ["type", "button", "appTypeface", "paragraph", 1, "email-confirmation-page__card__resend-code-button", 3, "click"], [1, "email-confirmation-page__card__divider"], [1, "email-confirmation-page__card__actions"], ["type", "button", 1, "email-confirmation-page__card__back-button", 3, "appAnalyticsClickEvent", "click"], ["type", "submit", "app-button", "", "size", "md", 1, "email-confirmation-page__card__submit-button", 3, "disabled"]], template: function EmailConfirmationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, EmailConfirmationPageComponent_form_0_Template, 28, 17, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("translocoRead", "sign_up.email_confirmation_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_21__.TranslocoDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__["ɵa"], _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_20__.SvgIconComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_9__.TypefaceDirective, _shared_components_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_10__.CodeInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__["ɵe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_11__.AnalyticsClickEventDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding-bottom: 40px;\n}\n\n.email-confirmation-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto;\n  padding: 16px;\n  text-align: center;\n  width: 792px;\n}\n\n.email-confirmation-page__card__wait-icon[_ngcontent-%COMP%] {\n  color: var(--color-email-confirmation-page-card-wait-icon);\n  height: 96px;\n  margin: 0 auto 16px;\n  width: 96px;\n}\n\n.email-confirmation-page__card__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n\n.email-confirmation-page__card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n}\n\n.email-confirmation-page__card__sent[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.email-confirmation-page__card__sent-email[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.email-confirmation-page__card__ensure[_ngcontent-%COMP%] {\n  color: var(--color-email-confirmation-page-card-ensure);\n}\n\n.email-confirmation-page__card__code-input[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin: 40px auto;\n}\n\n.email-confirmation-page__card__resend-code-label[_ngcontent-%COMP%] {\n  color: var(--color-email-confirmation-page-card-code-label);\n}\n\n.email-confirmation-page__card__resend-code-button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-email-confirmation-page-card-code-button);\n  cursor: pointer;\n  font-weight: 500;\n  padding: 0;\n}\n\n.email-confirmation-page__card__resend-code-button.mod-disabled[_ngcontent-%COMP%] {\n  color: var(--color-email-confirmation-page-card-code-button-disabled);\n  cursor: not-allowed;\n}\n\n.email-confirmation-page__card__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  height: 2px;\n  margin: 16px -16px;\n}\n\n.email-confirmation-page__card__actions[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.email-confirmation-page__card__back-button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-email-confirmation-page-card-back-button);\n  cursor: pointer;\n  font-weight: 500;\n  padding: 0;\n}\n\n.email-confirmation-page__card__submit-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFJQTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkNqQlU7QURnQlo7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQzVCVTtBRDJCWjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSx1REFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsMkRBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBREY7O0FBR0U7RUFDRSxxRUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkYiLCJmaWxlIjoiZW1haWwtY29uZmlybWF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogJGdyaWQtc3RlcCAqIDU7XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNzkycHg7XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZF9fd2FpdC1pY29uIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1haWwtY29uZmlybWF0aW9uLXBhZ2UtY2FyZC13YWl0LWljb24pO1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAkZ3JpZC1zdGVwICogMjtcclxuICB3aWR0aDogOTZweDtcclxufVxyXG5cclxuLmVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlX19jYXJkX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3JpZC1zdGVwO1xyXG59XHJcblxyXG4uZW1haWwtY29uZmlybWF0aW9uLXBhZ2VfX2NhcmRfX2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlX19jYXJkX19zZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3JpZC1zdGVwO1xyXG59XHJcblxyXG4uZW1haWwtY29uZmlybWF0aW9uLXBhZ2VfX2NhcmRfX3NlbnQtZW1haWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZF9fZW5zdXJlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1haWwtY29uZmlybWF0aW9uLXBhZ2UtY2FyZC1lbnN1cmUpO1xyXG59XHJcblxyXG4uZW1haWwtY29uZmlybWF0aW9uLXBhZ2VfX2NhcmRfX2NvZGUtaW5wdXQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogJGdyaWQtc3RlcCAqIDUgYXV0bztcclxufVxyXG5cclxuLmVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlX19jYXJkX19yZXNlbmQtY29kZS1sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlLWNhcmQtY29kZS1sYWJlbCk7XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZF9fcmVzZW5kLWNvZGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItZW1haWwtY29uZmlybWF0aW9uLXBhZ2UtY2FyZC1jb2RlLWJ1dHRvbik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgJi5tb2QtZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlLWNhcmQtY29kZS1idXR0b24tZGlzYWJsZWQpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZF9fZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbjogJGdyaWQtc3RlcCAqIDIgKC0kZ3JpZC1zdGVwICogMik7XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZF9fYWN0aW9ucyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlX19jYXJkX19iYWNrLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVtYWlsLWNvbmZpcm1hdGlvbi1wYWdlLWNhcmQtYmFjay1idXR0b24pO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5lbWFpbC1jb25maXJtYXRpb24tcGFnZV9fY2FyZF9fc3VibWl0LWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcblxyXG5AZnVuY3Rpb24gaGV4VG9SR0JTdHJpbmcoJGhleENvbG9yKSB7XHJcbiAgQHJldHVybiAnI3tyZWQoJGhleENvbG9yKX0sI3tncmVlbigkaGV4Q29sb3IpfSwje2JsdWUoJGhleENvbG9yKX0nO1xyXG59XHJcblxyXG4kbWFpbi1mb250LXNpemU6IDE2cHg7XHJcbiRtYWluLWZvbnQtZmFtaWx5OiAjeydJbnRlciwgQXJpYWwsIHNhbnMtc2VyaWYnfTtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuJGdyaWQtc3RlcDogOHB4O1xyXG4kZ3JpZC1oYWxmLXN0ZXA6IG1hdGguZGl2KCRncmlkLXN0ZXAsIDIpO1xyXG5cclxuJHBhZ2Utd2lkdGg6IDEyMDBweDtcclxuJHBhZ2Utc2lkZS1wYWRkaW5nOiAkZ3JpZC1zdGVwICogMztcclxuXHJcbiRjb2xvci1mb250LWJhc2U6ICRjb2xvci1ibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1ibHVlO1xyXG4kY29sb3ItbmVnYXRpdmU6ICRjb2xvci1yZWQ7XHJcbiRjb2xvci1uZXV0cmFsOiAkY29sb3ItZ3JleTtcclxuJGNvbG9yLXBvc2l0aXZlOiAkY29sb3ItZ3JlZW47XHJcbiJdfQ== */"], changeDetection: 0 });
EmailConfirmationPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_15__.UntilDestroy)()
], EmailConfirmationPageComponent);



/***/ }),

/***/ 47064:
/*!**********************************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/email-confirmation-page/email-confirmation-page.service.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmationPageService": () => (/* binding */ EmailConfirmationPageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 34122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 36566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7048);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _shared_utils_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/timer */ 89548);
/* harmony import */ var _core_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/notifications */ 21796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ 36378);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ 88718);











const RESEND_DELAY_SEC = 60;
class EmailConfirmationPageService {
    constructor(analyticsService, authService, signUpStoreService, translocoService, userService) {
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.signUpStoreService = signUpStoreService;
        this.translocoService = translocoService;
        this.userService = userService;
    }
    confirmEmail(code) {
        const user = this.authService.getActiveUserInstant();
        return this.userService.confirmUser(code, user.primaryEmail).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            var _a;
            switch ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) {
                case 409 /* Conflict */:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new _core_notifications__WEBPACK_IMPORTED_MODULE_2__.TranslatedError(this.translocoService.translate('email_confirmation_page.errors.account_conflict', null, 'sign-up')));
                case 404 /* NotFound */:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new _core_notifications__WEBPACK_IMPORTED_MODULE_2__.TranslatedError(this.translocoService.translate('email_confirmation_page.errors.account_not_found', null, 'sign-up')));
                default:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => error);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.userService.createTestnetAccount(user.wallet.address)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.userService.waitAccount(user.wallet.address)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => void 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.analyticsService.sendEvent(_shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsEvent.ConfirmRegistration)));
    }
    // Call this method before leaving email confirmation page to clear related stuff
    dispose() {
        return this.signUpStoreService.clear();
    }
    getEmailTimer(resetSource) {
        return this.signUpStoreService.getLastEmailSendingTime().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((lastSendingTime) => (Date.now() - (lastSendingTime || RESEND_DELAY_SEC * 1000)) / 1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(Math.floor), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)((sentSecondsLast) => (0,_shared_utils_timer__WEBPACK_IMPORTED_MODULE_1__.createSecondsTimer)(RESEND_DELAY_SEC, Math.max(Math.ceil(RESEND_DELAY_SEC - sentSecondsLast), 0), resetSource)));
    }
    resetSignUp() {
        const { id } = this.authService.getActiveUserInstant();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([
            this.authService.removeUser(id),
            this.dispose(),
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => void 0));
    }
    sendEmail() {
        const { primaryEmail, wallet: { address: walletAddress } } = this.authService.getActiveUserInstant();
        return this.userService.createUser(primaryEmail, walletAddress)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            const errorToThrow = (error.status === 409 /* Conflict */)
                ? new _core_notifications__WEBPACK_IMPORTED_MODULE_2__.TranslatedError(this.translocoService.translate('email_confirmation_page.errors.account_conflict', null, 'sign-up'))
                : error;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => errorToThrow);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.signUpStoreService.setLastEmailSendingTime()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => this.analyticsService.sendEvent(_shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsEvent.SendEmailCode)));
    }
}
EmailConfirmationPageService.ɵfac = function EmailConfirmationPageService_Factory(t) { return new (t || EmailConfirmationPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_4__.SignUpStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.UserService)); };
EmailConfirmationPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: EmailConfirmationPageService, factory: EmailConfirmationPageService.ɵfac });


/***/ }),

/***/ 45228:
/*!********************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/email-confirmation-page/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmationPageComponent": () => (/* reexport safe */ _email_confirmation_page_component__WEBPACK_IMPORTED_MODULE_0__.EmailConfirmationPageComponent)
/* harmony export */ });
/* harmony import */ var _email_confirmation_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-confirmation-page.component */ 57201);



/***/ }),

/***/ 56786:
/*!********************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteRegistrationPageComponent": () => (/* reexport safe */ _complete_registration_page__WEBPACK_IMPORTED_MODULE_0__.CompleteRegistrationPageComponent),
/* harmony export */   "EmailConfirmationPageComponent": () => (/* reexport safe */ _email_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmationPageComponent),
/* harmony export */   "PDVConsentPageComponent": () => (/* reexport safe */ _pdv_consent_page__WEBPACK_IMPORTED_MODULE_2__.PDVConsentPageComponent),
/* harmony export */   "SIGN_UP_PAGES": () => (/* binding */ SIGN_UP_PAGES),
/* harmony export */   "SignUpPageComponent": () => (/* reexport safe */ _sign_up_page__WEBPACK_IMPORTED_MODULE_3__.SignUpPageComponent),
/* harmony export */   "SuccessPageComponent": () => (/* reexport safe */ _success_page__WEBPACK_IMPORTED_MODULE_4__.SuccessPageComponent)
/* harmony export */ });
/* harmony import */ var _complete_registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complete-registration-page */ 86777);
/* harmony import */ var _email_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-confirmation-page */ 45228);
/* harmony import */ var _pdv_consent_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdv-consent-page */ 79033);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-page */ 16467);
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./success-page */ 95765);










const SIGN_UP_PAGES = [
    _complete_registration_page__WEBPACK_IMPORTED_MODULE_0__.CompleteRegistrationPageComponent,
    _email_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmationPageComponent,
    _pdv_consent_page__WEBPACK_IMPORTED_MODULE_2__.PDVConsentPageComponent,
    _sign_up_page__WEBPACK_IMPORTED_MODULE_3__.SignUpPageComponent,
    _success_page__WEBPACK_IMPORTED_MODULE_4__.SuccessPageComponent,
];


/***/ }),

/***/ 79033:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/pdv-consent-page/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVConsentPageComponent": () => (/* reexport safe */ _pdv_consent_page_component__WEBPACK_IMPORTED_MODULE_0__.PDVConsentPageComponent)
/* harmony export */ });
/* harmony import */ var _pdv_consent_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv-consent-page.component */ 21000);



/***/ }),

/***/ 21000:
/*!**********************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/pdv-consent-page/pdv-consent-page.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVConsentPageComponent": () => (/* binding */ PDVConsentPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 31682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var _sign_up_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sign-up-route */ 88295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/services */ 71453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/settings */ 31922);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile-card/profile-card.component */ 88422);
/* harmony import */ var _shared_components_pdv_types_settings_pdv_types_settings_pdv_types_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/pdv-types-settings/pdv-types-settings/pdv-types-settings.component */ 30642);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 48750);














function PDVConsentPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "section")(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-profile-card", 3)(5, "app-pdv-types-settings", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PDVConsentPageComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r2.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("translations", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, ctx_r0.translations$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("hint"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("confirm"), " ");
} }
class PDVConsentPageComponent {
    constructor(authService, router, activatedRoute, userService, settingsService, translocoService) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.settingsService = settingsService;
        this.translocoService = translocoService;
    }
    ngOnInit() {
        this.translations$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
            this.translocoService.selectTranslateObject('pdv_types_settings', null, 'shared'),
            this.translocoService.selectTranslateObject('pdv_types_toggle', null, 'shared'),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(([pdvTypesSettings, pdvTypesToggle]) => (Object.assign(Object.assign({}, pdvTypesSettings), { types: pdvTypesToggle }))));
        this.hasProfile$ = this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)((walletAddress) => this.userService.getProfile(walletAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((profile) => !!profile));
    }
    confirm() {
        const walletAddress = this.authService.getActiveUserInstant().wallet.address;
        this.settingsService.getUserSettingsService(walletAddress).pdv.setCollectionConfirmed(true).then(() => {
            return this.router.navigate(['../', _sign_up_route__WEBPACK_IMPORTED_MODULE_0__.SignUpRoute.Success], { relativeTo: this.activatedRoute });
        });
    }
}
PDVConsentPageComponent.ɵfac = function PDVConsentPageComponent_Factory(t) { return new (t || PDVConsentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auth_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_settings__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoService)); };
PDVConsentPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PDVConsentPageComponent, selectors: [["app-pdv-consent-page"]], decls: 1, vars: 1, consts: [["class", "pdv-consent__card", 4, "transloco", "translocoRead"], [1, "pdv-consent__card"], ["appTypeface", "subheader", 1, "pdv-consent__title"], [1, "pdv-consent__profile-card"], ["font", "large", 1, "pdv-consent__settings", 3, "translations"], ["appTypeface", "caption", 1, "pdv-consent__hint"], [1, "pdv-consent__divider"], [1, "pdv-consent__actions-container"], ["app-button", "", "color", "primary", 1, "pdv-consent__action-button", 3, "click"]], template: function PDVConsentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PDVConsentPageComponent_div_0_Template, 14, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("translocoRead", "sign_up.pdv_consent");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__.TypefaceDirective, _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__.ProfileCardComponent, _shared_components_pdv_types_settings_pdv_types_settings_pdv_types_settings_component__WEBPACK_IMPORTED_MODULE_6__.PdvTypesSettingsComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding-bottom: 40px;\n}\n\n.pdv-consent__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 16px;\n  width: 792px;\n}\n\n.pdv-consent__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.pdv-consent__profile-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.pdv-consent__settings[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.pdv-consent__hint[_ngcontent-%COMP%] {\n  color: var(--color-pdv-consent-hint);\n  margin-top: 8px;\n}\n\n.pdv-consent__divider[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-outlines);\n  margin: 16px -16px;\n}\n\n.pdv-consent__actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.pdv-consent__action-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBkdi1jb25zZW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsdUNBQUE7RUFDQSxtQkNIYztFRElkLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQWhCMkI7RUFpQjNCLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLG9DQUFBO0VBQ0EsZUN6QlU7QURxQlo7O0FBT0E7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRiIsImZpbGUiOiJwZHYtY29uc2VudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbiRib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLW91dGxpbmVzKTtcclxuJHBkdi1jb25zZW50LS1jYXJkLS1wYWRkaW5nOiAkZ3JpZC1zdGVwICogMjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1ib3R0b206ICRncmlkLXN0ZXAgKiA1O1xyXG59XHJcblxyXG4ucGR2LWNvbnNlbnRfX2NhcmQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogJHBkdi1jb25zZW50LS1jYXJkLS1wYWRkaW5nO1xyXG4gIHdpZHRoOiA3OTJweDtcclxufVxyXG5cclxuLnBkdi1jb25zZW50X190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnBkdi1jb25zZW50X19wcm9maWxlLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiAyO1xyXG59XHJcblxyXG4ucGR2LWNvbnNlbnRfX3NldHRpbmdzIHtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogNTtcclxufVxyXG5cclxuLnBkdi1jb25zZW50X19oaW50IHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcGR2LWNvbnNlbnQtaGludCk7XHJcbiAgbWFyZ2luLXRvcDogJGdyaWQtc3RlcDtcclxufVxyXG5cclxuLnBkdi1jb25zZW50X19kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBtYXJnaW46ICRwZHYtY29uc2VudC0tY2FyZC0tcGFkZGluZyAoLSRwZHYtY29uc2VudC0tY2FyZC0tcGFkZGluZyk7XHJcbn1cclxuXHJcbi5wZHYtY29uc2VudF9fYWN0aW9ucy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnBkdi1jb25zZW50X19hY3Rpb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 16467:
/*!*********************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/sign-up-page/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageComponent": () => (/* reexport safe */ _sign_up_page_component__WEBPACK_IMPORTED_MODULE_0__.SignUpPageComponent)
/* harmony export */ });
/* harmony import */ var _sign_up_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-page.component */ 25987);



/***/ }),

/***/ 25987:
/*!**************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/sign-up-page/sign-up-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageComponent": () => (/* binding */ SignUpPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 94850);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 17198);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _sign_up_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up-page.service */ 47842);
/* harmony import */ var _sign_up_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sign-up-route */ 88295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/navigation */ 12089);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _components_seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/seed-phrase/seed-phrase.component */ 53822);
/* harmony import */ var _components_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/account-form/account-form.component */ 93922);


















function SignUpPageComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-seed-phrase", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("back", function SignUpPageComponent_div_0_ng_container_7_Template_app_seed_phrase_back_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r4.navigateBack(); })("next", function SignUpPageComponent_div_0_ng_container_7_Template_app_seed_phrase_next_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r6.switchTab(ctx_r6.tab.AccountForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("seedPhrase", ctx_r2.seedPhrase);
} }
function SignUpPageComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-account-form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("back", function SignUpPageComponent_div_0_ng_container_8_Template_app_account_form_back_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r7.navigateBack(); })("submitted", function SignUpPageComponent_div_0_ng_container_8_Template_app_account_form_submitted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r9.onSubmitAccountForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} }
function SignUpPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, SignUpPageComponent_div_0_ng_container_7_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, SignUpPageComponent_div_0_ng_container_8_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", ctx_r0.activeTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", translate_r1("step"), " ", ctx_r0.activeTab === ctx_r0.tab.SeedPhrase ? 1 : 2, "/2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r0.tab.SeedPhrase);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", ctx_r0.tab.AccountForm);
} }
var SignUpTab;
(function (SignUpTab) {
    SignUpTab[SignUpTab["AccountForm"] = 0] = "AccountForm";
    SignUpTab[SignUpTab["SeedPhrase"] = 1] = "SeedPhrase";
})(SignUpTab || (SignUpTab = {}));
let SignUpPageComponent = class SignUpPageComponent {
    constructor(activatedRoute, navigationService, ngZone, notificationService, router, signUpPageService, spinnerService) {
        this.activatedRoute = activatedRoute;
        this.navigationService = navigationService;
        this.ngZone = ngZone;
        this.notificationService = notificationService;
        this.router = router;
        this.signUpPageService = signUpPageService;
        this.spinnerService = spinnerService;
        this.activeTab = SignUpTab.SeedPhrase;
        this.tab = SignUpTab;
    }
    ngOnInit() {
        this.seedPhrase = (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.generateMnemonic)();
        // this.loadScript('https://06514a597723.us-west-2.captcha-sdk.awswaf.com/06514a597723/jsapi.js');
    }
    // private loadScript(src: any): void {
    //   const script = document.createElement('script');
    //   script.src = 'scripts/aws.js';
    //   script.type = 'text/javascript';
    //   document.head.appendChild(script);
    // }
    navigateBack() {
        switch (this.activeTab) {
            case SignUpTab.AccountForm:
                this.activeTab = SignUpTab.SeedPhrase;
                break;
            default:
                this.navigationService.back([_app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Welcome]);
        }
    }
    onSubmitAccountForm(accountData) {
        this.accountData = accountData;
        this.signUp();
    }
    signUp() {
        this.spinnerService.showSpinner();
        this.signUpPageService.signUp(this.seedPhrase, {
            primaryEmail: this.accountData.email,
            password: this.accountData.password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => this.spinnerService.hideSpinner()))
            .subscribe({
            next: () => this.ngZone.run(() => {
                this.router.navigate([_sign_up_route__WEBPACK_IMPORTED_MODULE_3__.SignUpRoute.EmailConfirmation], {
                    relativeTo: this.activatedRoute,
                });
            }),
            error: (error) => this.notificationService.error(error),
        });
    }
    switchTab(tab) {
        this.activeTab = tab;
    }
};
SignUpPageComponent.ɵfac = function SignUpPageComponent_Factory(t) { return new (t || SignUpPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_navigation__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_sign_up_page_service__WEBPACK_IMPORTED_MODULE_2__.SignUpPageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_6__.SpinnerService)); };
SignUpPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SignUpPageComponent, selectors: [["app-sign-up-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([
            _sign_up_page_service__WEBPACK_IMPORTED_MODULE_2__.SignUpPageService,
        ])], decls: 1, vars: 1, consts: [["class", "sign-up-page__card", 3, "ngSwitch", 4, "transloco", "translocoRead"], [1, "sign-up-page__card", 3, "ngSwitch"], ["appTypeface", "subheader"], [1, "sign-up-page__card__title"], [1, "sign-up-page__card__step"], [1, "sign-up-page__card__divider"], [4, "ngSwitchCase"], [3, "seedPhrase", "back", "next"], [3, "back", "submitted"]], template: function SignUpPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, SignUpPageComponent_div_0_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translocoRead", "sign_up.sign_up_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_13__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _components_seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_8__.SeedPhraseComponent, _components_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_9__.AccountFormComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding-bottom: 40px;\n}\n\n.sign-up-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto;\n  padding: 16px;\n  width: 792px;\n}\n\n.sign-up-page__card__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.sign-up-page__card__step[_ngcontent-%COMP%] {\n  color: var(--color-sign-up-page-card-step);\n  margin-left: 4px;\n}\n\n.sign-up-page__card__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  height: 2px;\n  margin: 16px -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDBDQUFBO0VBQ0EsZ0JDWmU7QURXakI7O0FBSUE7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURGIiwiZmlsZSI6InNpZ24tdXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAkZ3JpZC1zdGVwICogNTtcclxufVxyXG5cclxuLnNpZ24tdXAtcGFnZV9fY2FyZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHdpZHRoOiA3OTJweDtcclxufVxyXG5cclxuLnNpZ24tdXAtcGFnZV9fY2FyZF9fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zaWduLXVwLXBhZ2VfX2NhcmRfX3N0ZXAge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zaWduLXVwLXBhZ2UtY2FyZC1zdGVwKTtcclxuICBtYXJnaW4tbGVmdDogJGdyaWQtaGFsZi1zdGVwO1xyXG59XHJcblxyXG4uc2lnbi11cC1wYWdlX19jYXJkX19kaXZpZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgbWFyZ2luOiAkZ3JpZC1zdGVwICogMiAoLSRncmlkLXN0ZXAgKiAyKTtcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });
SignUpPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()
], SignUpPageComponent);



/***/ }),

/***/ 47842:
/*!************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/sign-up-page/sign-up-page.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageService": () => (/* binding */ SignUpPageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 7964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 36566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7048);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 17198);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _core_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/notifications */ 21796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ 36378);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ 88718);











class SignUpPageService {
    constructor(analyticsService, authService, signUpStoreService, translocoService, userService) {
        this.analyticsService = analyticsService;
        this.authService = authService;
        this.signUpStoreService = signUpStoreService;
        this.translocoService = translocoService;
        this.userService = userService;
    }
    signUp(seedPhrase, user) {
        const wallet = (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createWalletFromMnemonic)(seedPhrase);
        return this.userService.createUser(user.primaryEmail, wallet.address).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            var _a;
            let errorToThrow = error;
            switch ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) {
                case 400 /* BadRequest */:
                    errorToThrow = new _core_notifications__WEBPACK_IMPORTED_MODULE_2__.TranslatedError(this.translocoService.translate('sign_up_page.errors.invalid_email', null, 'sign-up'));
                    break;
                case 409 /* Conflict */: {
                    errorToThrow = new _core_notifications__WEBPACK_IMPORTED_MODULE_2__.TranslatedError(this.translocoService.translate('sign_up_page.errors.account_conflict', null, 'sign-up'));
                    break;
                }
                case 429 /* TooManyRequests */: {
                    errorToThrow = new _core_notifications__WEBPACK_IMPORTED_MODULE_2__.TranslatedError(this.translocoService.translate('sign_up_page.errors.too_many_requests', null, 'sign-up'));
                    break;
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => errorToThrow);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.signUpStoreService.setLastEmailSendingTime()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.authService.createUser(Object.assign(Object.assign({ wallet }, user), { seed: seedPhrase }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(id => this.authService.changeUser(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => this.analyticsService.sendEvent(_shared_analytics__WEBPACK_IMPORTED_MODULE_1__.AnalyticsEvent.CreateAccount)));
    }
}
SignUpPageService.ɵfac = function SignUpPageService_Factory(t) { return new (t || SignUpPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_analytics__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_4__.SignUpStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.UserService)); };
SignUpPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: SignUpPageService, factory: SignUpPageService.ɵfac });


/***/ }),

/***/ 95765:
/*!*********************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/success-page/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageComponent": () => (/* reexport safe */ _success_page_component__WEBPACK_IMPORTED_MODULE_0__.SuccessPageComponent)
/* harmony export */ });
/* harmony import */ var _success_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-page.component */ 52950);



/***/ }),

/***/ 52950:
/*!**************************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/pages/success-page/success-page.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessPageComponent": () => (/* binding */ SuccessPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 73903);





const _c0 = function () { return ["/"]; };
function SuccessPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "ul", 7)(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", translate_r1("subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](translate_r1("tips.tip1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](translate_r1("tips.tip2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", translate_r1("tips.tip3"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", translate_r1("hint.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", translate_r1("done"), " ");
} }
class SuccessPageComponent {
}
SuccessPageComponent.ɵfac = function SuccessPageComponent_Factory(t) { return new (t || SuccessPageComponent)(); };
SuccessPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SuccessPageComponent, selectors: [["app-success-page"]], decls: 1, vars: 1, consts: [["class", "success-page__card", 4, "transloco", "translocoRead"], [1, "success-page__card"], [1, "success-page__card__header"], [1, "success-page__icon"], ["appTypeface", "subheader", 1, "success-page__title"], ["appTypeface", "paragraph", 1, "success-page__subtitle"], ["appTypeface", "caption", 1, "success-page__tips"], [1, "success-page__tips-list"], [3, "innerHTML"], [1, "success-page__divider"], [1, "success-page__actions"], ["app-button", "", 1, "success-page__actions__button", 3, "routerLink"]], template: function SuccessPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SuccessPageComponent_div_0_Template, 21, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translocoRead", "sign_up.success_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_0__.TypefaceDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  padding-bottom: 40px;\n}\n\n.success-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n  margin: auto;\n  padding: 16px;\n  text-align: center;\n  width: 792px;\n}\n\n.success-page__card__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n}\n\n.success-page__icon[_ngcontent-%COMP%] {\n  background-image: var(--image-congratulations);\n  background-repeat: no-repeat;\n  height: 96px;\n  margin: 0 auto 16px;\n  width: 96px;\n}\n\n.success-page__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n\n.success-page__subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.success-page__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  height: 2px;\n  margin: 16px -16px;\n}\n\n.success-page__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.success-page__tips[_ngcontent-%COMP%] {\n  color: var(--color-success-page-tips);\n}\n\n.success-page__tips-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 16px;\n}\n\n.success-page__tips-list[_ngcontent-%COMP%]     a {\n  color: var(--color-success-page-tips-link);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBR0UsOENBQUE7RUFDQSw0QkFBQTtFQUNBLFlBSlc7RUFLWCxtQkFBQTtFQUNBLFdBTlc7QUFHYjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esa0JDNUJVO0FEeUJaOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFDQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUk7RUFDRSwwQ0FBQTtBQUpOIiwiZmlsZSI6InN1Y2Nlc3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAkZ3JpZC1zdGVwICogNTtcclxufVxyXG5cclxuLnN1Y2Nlc3MtcGFnZV9fY2FyZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAkZ3JpZC1zdGVwICogMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDc5MnB4O1xyXG59XHJcblxyXG4uc3VjY2Vzcy1wYWdlX19jYXJkX19oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zdWNjZXNzLXBhZ2VfX2ljb24ge1xyXG4gICRpY29uLXNpZTogOTZweDtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taW1hZ2UtY29uZ3JhdHVsYXRpb25zKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogJGljb24tc2llO1xyXG4gIG1hcmdpbjogMCBhdXRvICRncmlkLXN0ZXAgKiAyO1xyXG4gIHdpZHRoOiAkaWNvbi1zaWU7XHJcbn1cclxuXHJcbi5zdWNjZXNzLXBhZ2VfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206ICRncmlkLXN0ZXA7XHJcbn1cclxuXHJcbi5zdWNjZXNzLXBhZ2VfX3N1YnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3JpZC1zdGVwICogMjtcclxufVxyXG5cclxuLnN1Y2Nlc3MtcGFnZV9fZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbjogJGdyaWQtc3RlcCAqIDIgKC0kZ3JpZC1zdGVwICogMik7XHJcbn1cclxuXHJcbi5zdWNjZXNzLXBhZ2VfX2FjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnN1Y2Nlc3MtcGFnZV9fdGlwcyB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MtcGFnZS10aXBzKTtcclxufVxyXG5cclxuLnN1Y2Nlc3MtcGFnZV9fdGlwcy1saXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206ICRncmlkLXN0ZXAgKiAyO1xyXG5cclxuICA6Om5nLWRlZXAge1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzLXBhZ2UtdGlwcy1saW5rKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 36378:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/sign-up/services/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SIGN_UP_SERVICES": () => (/* binding */ SIGN_UP_SERVICES),
/* harmony export */   "SignUpStoreService": () => (/* reexport safe */ _sign_up_store_service__WEBPACK_IMPORTED_MODULE_0__.SignUpStoreService)
/* harmony export */ });
/* harmony import */ var _sign_up_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-store.service */ 87857);


const SIGN_UP_SERVICES = [
    _sign_up_store_service__WEBPACK_IMPORTED_MODULE_0__.SignUpStoreService,
];


/***/ }),

/***/ 87857:
/*!***************************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/services/sign-up-store.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpStoreService": () => (/* binding */ SignUpStoreService)
/* harmony export */ });
/* harmony import */ var _shared_services_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/storage */ 42363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);


class SignUpStoreService {
    constructor() {
        this.store = _shared_services_storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance().useSection('signUp');
    }
    setLastEmailSendingTime(time = Date.now()) {
        return this.store.set('lastEmailSendingTime', time);
    }
    getLastEmailSendingTime() {
        return this.store.observe('lastEmailSendingTime');
    }
    clear() {
        return this.store.clear();
    }
}
SignUpStoreService.ɵfac = function SignUpStoreService_Factory(t) { return new (t || SignUpStoreService)(); };
SignUpStoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SignUpStoreService, factory: SignUpStoreService.ɵfac });


/***/ }),

/***/ 88295:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/sign-up/sign-up-route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpRoute": () => (/* binding */ SignUpRoute)
/* harmony export */ });
var SignUpRoute;
(function (SignUpRoute) {
    SignUpRoute["CompleteRegistration"] = "complete-registration";
    SignUpRoute["EmailConfirmation"] = "email-confirmation";
    SignUpRoute["PDVConsent"] = "pdv-consent";
    SignUpRoute["Success"] = "success";
})(SignUpRoute || (SignUpRoute = {}));


/***/ }),

/***/ 71111:
/*!*******************************************************************!*\
  !*** ./projects/charon/src/app/sign-up/sign-up-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpRoutingModule": () => (/* binding */ SignUpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/guards */ 61179);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards */ 76545);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 56786);
/* harmony import */ var _sign_up_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-route */ 88295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);







const ROUTES = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.SignUpPageComponent,
        pathMatch: 'full',
        canActivate: [
            _guards__WEBPACK_IMPORTED_MODULE_1__.SignUpGuard,
        ],
    },
    {
        path: _sign_up_route__WEBPACK_IMPORTED_MODULE_3__.SignUpRoute.EmailConfirmation,
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.EmailConfirmationPageComponent,
        canActivate: [
            _guards__WEBPACK_IMPORTED_MODULE_1__.EmailConfirmationGuard,
        ],
    },
    {
        path: _sign_up_route__WEBPACK_IMPORTED_MODULE_3__.SignUpRoute.CompleteRegistration,
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.CompleteRegistrationPageComponent,
        canActivate: [
            _guards__WEBPACK_IMPORTED_MODULE_1__.CompleteRegistrationGuard,
        ],
    },
    {
        path: _sign_up_route__WEBPACK_IMPORTED_MODULE_3__.SignUpRoute.PDVConsent,
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.PDVConsentPageComponent,
        canActivate: [
            _guards__WEBPACK_IMPORTED_MODULE_1__.PDVConsentGuard,
        ],
    },
    {
        path: _sign_up_route__WEBPACK_IMPORTED_MODULE_3__.SignUpRoute.Success,
        component: _pages__WEBPACK_IMPORTED_MODULE_2__.SuccessPageComponent,
        canActivate: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard,
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class SignUpRoutingModule {
}
SignUpRoutingModule.ɵfac = function SignUpRoutingModule_Factory(t) { return new (t || SignUpRoutingModule)(); };
SignUpRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SignUpRoutingModule });
SignUpRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _guards__WEBPACK_IMPORTED_MODULE_1__.SIGN_UP_GUARDS,
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SignUpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 64939:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/sign-up/sign-up.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpModule": () => (/* binding */ SignUpModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/clipboard */ 60425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 99110);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-skeleton-loader */ 39752);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _shared_components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/avatar */ 5066);
/* harmony import */ var _shared_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/button */ 29149);
/* harmony import */ var _shared_components_controls_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/controls/checkbox */ 39575);
/* harmony import */ var _shared_components_code_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/code-input */ 81963);
/* harmony import */ var _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/currency-symbol */ 54411);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _shared_components_input_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/input-container */ 10401);
/* harmony import */ var _shared_components_controls_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/controls/input */ 43101);
/* harmony import */ var _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes/number-format */ 68259);
/* harmony import */ var _shared_components_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/password */ 35197);
/* harmony import */ var _shared_components_pdv_types_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/pdv-types-settings */ 5989);
/* harmony import */ var _shared_components_profile_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/profile-form */ 36092);
/* harmony import */ var _shared_components_seed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/seed */ 2147);
/* harmony import */ var _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/directives/submit-source */ 71019);
/* harmony import */ var _shared_directives_text_ellipsis__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/directives/text-ellipsis */ 1451);
/* harmony import */ var _shared_components_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/tooltip */ 93227);
/* harmony import */ var _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/directives/typeface */ 2703);
/* harmony import */ var _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/pipes/micro-value */ 55219);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services */ 36378);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sign-up-routing.module */ 71111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _components_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/account-form/account-form.component */ 93922);
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/profile-card/profile-card.component */ 88422);
/* harmony import */ var _components_seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/seed-phrase/seed-phrase.component */ 53822);
/* harmony import */ var _pages_complete_registration_page_complete_registration_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/complete-registration-page/complete-registration-page.component */ 73522);
/* harmony import */ var _pages_email_confirmation_page_email_confirmation_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/email-confirmation-page/email-confirmation-page.component */ 57201);
/* harmony import */ var _pages_pdv_consent_page_pdv_consent_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/pdv-consent-page/pdv-consent-page.component */ 21000);
/* harmony import */ var _pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/sign-up-page/sign-up-page.component */ 25987);
/* harmony import */ var _pages_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/success-page/success-page.component */ 52950);






































class SignUpModule {
}
SignUpModule.ɵfac = function SignUpModule_Factory(t) { return new (t || SignUpModule)(); };
SignUpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({ type: SignUpModule });
SignUpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({ providers: [
        _services__WEBPACK_IMPORTED_MODULE_19__.SIGN_UP_SERVICES,
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_30__.TRANSLOCO_SCOPE,
            useValue: { scope: 'sign-up', alias: 'sign_up' },
        },
    ], imports: [[
            _shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsModule,
            _shared_components_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarModule,
            _shared_components_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule,
            _shared_components_controls_checkbox__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_31__.ClipboardModule,
            _shared_components_code_input__WEBPACK_IMPORTED_MODULE_4__.CodeInputModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
            _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_5__.CurrencySymbolModule,
            _shared_components_form_error__WEBPACK_IMPORTED_MODULE_6__.FormErrorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
            _shared_components_input_container__WEBPACK_IMPORTED_MODULE_7__.InputContainerModule,
            _shared_components_controls_input__WEBPACK_IMPORTED_MODULE_8__.InputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule,
            _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_18__.MicroValueModule,
            _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_9__.NumberFormatModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_35__.NgxSkeletonLoaderModule,
            _shared_components_password__WEBPACK_IMPORTED_MODULE_10__.PasswordModule,
            _shared_components_profile_form__WEBPACK_IMPORTED_MODULE_12__.ProfileFormModule,
            _shared_components_pdv_types_settings__WEBPACK_IMPORTED_MODULE_11__.PdvTypesSettingsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_36__.RxReactiveFormsModule,
            _shared_components_seed__WEBPACK_IMPORTED_MODULE_13__.SeedModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_20__.SignUpRoutingModule,
            _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_14__.SubmitSourceModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_37__.SvgIconsModule,
            _shared_directives_text_ellipsis__WEBPACK_IMPORTED_MODULE_15__.TextEllipsisModule,
            _shared_components_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_30__.TranslocoModule,
            _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_17__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](SignUpModule, { declarations: [_components_account_form_account_form_component__WEBPACK_IMPORTED_MODULE_21__.AccountFormComponent, _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_22__.ProfileCardComponent, _components_seed_phrase_seed_phrase_component__WEBPACK_IMPORTED_MODULE_23__.SeedPhraseComponent, _pages_complete_registration_page_complete_registration_page_component__WEBPACK_IMPORTED_MODULE_24__.CompleteRegistrationPageComponent, _pages_email_confirmation_page_email_confirmation_page_component__WEBPACK_IMPORTED_MODULE_25__.EmailConfirmationPageComponent, _pages_pdv_consent_page_pdv_consent_page_component__WEBPACK_IMPORTED_MODULE_26__.PDVConsentPageComponent, _pages_sign_up_page_sign_up_page_component__WEBPACK_IMPORTED_MODULE_27__.SignUpPageComponent, _pages_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_28__.SuccessPageComponent], imports: [_shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsModule,
        _shared_components_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarModule,
        _shared_components_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule,
        _shared_components_controls_checkbox__WEBPACK_IMPORTED_MODULE_3__.CheckboxModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_31__.ClipboardModule,
        _shared_components_code_input__WEBPACK_IMPORTED_MODULE_4__.CodeInputModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_32__.CommonModule,
        _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_5__.CurrencySymbolModule,
        _shared_components_form_error__WEBPACK_IMPORTED_MODULE_6__.FormErrorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
        _shared_components_input_container__WEBPACK_IMPORTED_MODULE_7__.InputContainerModule,
        _shared_components_controls_input__WEBPACK_IMPORTED_MODULE_8__.InputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButtonModule,
        _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_18__.MicroValueModule,
        _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_9__.NumberFormatModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_35__.NgxSkeletonLoaderModule,
        _shared_components_password__WEBPACK_IMPORTED_MODULE_10__.PasswordModule,
        _shared_components_profile_form__WEBPACK_IMPORTED_MODULE_12__.ProfileFormModule,
        _shared_components_pdv_types_settings__WEBPACK_IMPORTED_MODULE_11__.PdvTypesSettingsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_36__.RxReactiveFormsModule,
        _shared_components_seed__WEBPACK_IMPORTED_MODULE_13__.SeedModule,
        _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_20__.SignUpRoutingModule,
        _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_14__.SubmitSourceModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_37__.SvgIconsModule,
        _shared_directives_text_ellipsis__WEBPACK_IMPORTED_MODULE_15__.TextEllipsisModule,
        _shared_components_tooltip__WEBPACK_IMPORTED_MODULE_16__.TooltipModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_30__.TranslocoModule,
        _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_17__.TypefaceModule] }); })();


/***/ }),

/***/ 56409:
/*!**************************************************************!*\
  !*** ./shared/components/code-input/code-input.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeInputComponent": () => (/* binding */ CodeInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 57140);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75485);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 14474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/typeface/typeface.directive */ 31857);
var CodeInputComponent_1;












const _c0 = ["inputElement"];
function CodeInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "input", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function CodeInputComponent_div_0_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onTouched(); })("input", function CodeInputComponent_div_0_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onInput($event); })("paste", function CodeInputComponent_div_0_Template_input_paste_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onPaste($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const control_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", control_r1);
} }
let CodeInputComponent = CodeInputComponent_1 = class CodeInputComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.autofocus = false;
        this.tabIndex = -1;
        this.formArray = new _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([]);
        this.onChange = rxjs__WEBPACK_IMPORTED_MODULE_3__.noop;
        this.onTouched = rxjs__WEBPACK_IMPORTED_MODULE_3__.noop;
        this.trackByElem = ({}, elem) => elem;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, 'keydown', { capture: true })
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this))
            .subscribe((event) => this.onKeydown(event));
    }
    set length(length) {
        this.setCharsLength(length);
    }
    ngOnInit() {
        this.formArray.value$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(chars => chars.join('')), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(code => {
            const value = code.length === this.formArray.length ? code : null;
            this.onChange(value);
        });
    }
    ngAfterViewInit() {
        if (this.autofocus) {
            this.getInputAt(0).focus();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        const chars = value.split('');
        this.formArray.patchValue(chars);
    }
    onInput(event) {
        if (event.inputType !== 'deleteContentBackward') {
            this.moveFrom(event.target, 'right');
        }
    }
    onKeydown(event) {
        const target = event.target;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER: {
                break;
            }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.BACKSPACE: {
                const hasValue = target.value;
                const controlIndex = this.inputElementsRefs.toArray()
                    .findIndex((ref) => ref.nativeElement === event.target);
                if (hasValue) {
                    this.getControlAt(controlIndex).setValue('');
                }
                else {
                    const prevControl = this.getControlAt(controlIndex - 1);
                    if (prevControl) {
                        prevControl.setValue('');
                    }
                }
                this.moveFrom(event.target, 'left');
                event.preventDefault();
                break;
            }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE: {
                event.preventDefault();
                break;
            }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW: {
                this.moveFrom(event.target, 'left');
                break;
            }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW: {
                this.moveFrom(event.target, 'right');
                break;
            }
            default: {
                if (!(event.keyCode >= 48 && event.keyCode <= 57)
                    && !(event.keyCode >= 65 && event.keyCode <= 90)
                    && !(event.keyCode >= 96 && event.keyCode <= 105)) {
                    break;
                }
                const controlIndex = this.inputElementsRefs.toArray()
                    .findIndex((ref) => ref.nativeElement === event.target);
                if (!event.altKey && !event.ctrlKey && !event.shiftKey) {
                    this.getControlAt(controlIndex).setValue('');
                }
            }
        }
    }
    onPaste(pasteEvent) {
        const text = pasteEvent.clipboardData.getData('Text');
        const inputToFocus = this.getInputAt(Math.min(text.length, this.formArray.length - 1));
        inputToFocus.focus();
        this.writeValue(text);
    }
    setCharsLength(length) {
        while (this.formArray.length > length) {
            this.formArray.removeAt(this.formArray.length - 1);
        }
        while (this.formArray.length < length) {
            this.formArray.push(new _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required));
        }
    }
    getControlAt(index) {
        return this.formArray.controls[index];
    }
    getInputAt(index) {
        return this.inputElementsRefs.toArray()[index].nativeElement;
    }
    moveFrom(from, direction) {
        const fromElementRef = this.inputElementsRefs.toArray()
            .findIndex((ref) => ref.nativeElement === from);
        const nextElementRef = this.inputElementsRefs.toArray()[fromElementRef + (direction === 'left' ? -1 : 1)];
        if (nextElementRef) {
            nextElementRef.nativeElement.focus();
            return nextElementRef.nativeElement;
        }
        return null;
    }
};
CodeInputComponent.ɵfac = function CodeInputComponent_Factory(t) { return new (t || CodeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
CodeInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CodeInputComponent, selectors: [["app-code-input"]], viewQuery: function CodeInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputElementsRefs = _t);
    } }, hostVars: 1, hostBindings: function CodeInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.tabIndex);
    } }, inputs: { length: "length", autofocus: "autofocus" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
                useExisting: CodeInputComponent_1,
                multi: true,
            },
        ])], decls: 1, vars: 2, consts: [["class", "code-input__field", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "code-input__field"], ["appTypeface", "header-4", "autocomplete", "off", "maxlength", "1", 1, "code-input__input", 3, "formControl", "blur", "input", "paste"], ["inputElement", ""]], template: function CodeInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CodeInputComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formArray.controls)("ngForTrackBy", ctx.trackByElem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_0__.TypefaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n\n.code-input__field[_ngcontent-%COMP%]    + .code-input__field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.code-input__input[_ngcontent-%COMP%] {\n  background-color: var(--color-input-background);\n  border: 1px solid transparent;\n  border-radius: 12px;\n  color: var(--color-input-text);\n  height: 78px;\n  text-align: center;\n  width: 72px;\n}\n\n.code-input__input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-input-invalid-border);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7O0FBS0U7RUFDRSxnQkNJUTtBRE5aOztBQU1BO0VBQ0UsK0NBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQ0xjO0VETWQsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUk7RUFDRSxtREFBQTtBQUpOIiwiZmlsZSI6ImNvZGUtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29kZS1pbnB1dF9fZmllbGQge1xyXG4gICYgKyAmIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkZ3JpZC1zdGVwO1xyXG4gIH1cclxufVxyXG5cclxuLmNvZGUtaW5wdXRfX2lucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbnB1dC1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItaW5wdXQtdGV4dCk7XHJcbiAgaGVpZ2h0OiA3OHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNzJweDtcclxuXHJcbiAgJi5uZy10b3VjaGVkIHtcclxuICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWlucHV0LWludmFsaWQtYm9yZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });
CodeInputComponent = CodeInputComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], CodeInputComponent);



/***/ }),

/***/ 10521:
/*!***********************************************************!*\
  !*** ./shared/components/code-input/code-input.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeInputModule": () => (/* binding */ CodeInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _code_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-input.component */ 56409);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/typeface */ 2703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);





class CodeInputModule {
}
CodeInputModule.ɵfac = function CodeInputModule_Factory(t) { return new (t || CodeInputModule)(); };
CodeInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CodeInputModule });
CodeInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _directives_typeface__WEBPACK_IMPORTED_MODULE_1__.TypefaceModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CodeInputModule, { declarations: [_code_input_component__WEBPACK_IMPORTED_MODULE_0__.CodeInputComponent], imports: [_directives_typeface__WEBPACK_IMPORTED_MODULE_1__.TypefaceModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule], exports: [_code_input_component__WEBPACK_IMPORTED_MODULE_0__.CodeInputComponent] }); })();


/***/ }),

/***/ 81963:
/*!***********************************************!*\
  !*** ./shared/components/code-input/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeInputModule": () => (/* reexport safe */ _code_input_module__WEBPACK_IMPORTED_MODULE_0__.CodeInputModule)
/* harmony export */ });
/* harmony import */ var _code_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-input.module */ 10521);



/***/ }),

/***/ 79344:
/*!*****************************************************!*\
  !*** ./shared/svg-icons/email-confirmation-wait.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgEmailConfirmationWait": () => (/* binding */ svgEmailConfirmationWait)
/* harmony export */ });
const svgEmailConfirmationWait = {
    data: `<svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M80 16H16C11.6 16 8.04 19.6 8.04 24L8 72C8 76.4 11.6 80 16 80H45.1595C44.4051 77.4652 44 74.7799 44 72H16V32L48 52L80 32V45.1595C82.8897 46.0195 85.584 47.3335 88 49.0188V24C88 19.6 84.4 16 80 16ZM48 44L16 24H80L48 44ZM52 72C52 60.96 60.96 52 72 52C83.04 52 92 60.96 92 72C92 83.04 83.04 92 72 92C60.96 92 52 83.04 52 72ZM70 72.8L78.6 81.4L81.4 78.56L74 71.16V60H70V72.8Z" fill="currentColor"/></svg>`,
    name: 'email-confirmation-wait'
};


/***/ }),

/***/ 71892:
/*!**********************************!*\
  !*** ./shared/svg-icons/loud.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLoud": () => (/* binding */ svgLoud)
/* harmony export */ });
const svgLoud = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 11C18 11.67 18 12.33 18 13C19.2 13 20.76 13 22 13C22 12.33 22 11.67 22 11C20.76 11 19.2 11 18 11Z" fill="currentColor"/><path d="M16 17.61C16.96 18.32 18.21 19.26 19.2 20C19.6 19.47 20 18.93 20.4 18.4C19.41 17.66 18.16 16.72 17.2 16C16.8 16.54 16.4 17.08 16 17.61Z" fill="currentColor"/><path d="M20.4 5.6C20 5.07 19.6 4.53 19.2 4C18.21 4.74 16.96 5.68 16 6.4C16.4 6.93 16.8 7.47 17.2 8C18.16 7.28 19.41 6.35 20.4 5.6Z" fill="currentColor"/><path d="M4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19H7V15H8L13 18V6L8 9H4ZM9.03 10.71L11 9.53V14.47L9.03 13.29L8.55 13H8H4V11H8H8.55L9.03 10.71Z" fill="currentColor"/><path d="M15.5 11.9999C15.5 10.6699 14.92 9.4699 14 8.6499V15.3399C14.92 14.5299 15.5 13.3299 15.5 11.9999Z" fill="currentColor"/></svg>`,
    name: 'loud'
};


/***/ }),

/***/ 89548:
/*!*************************************!*\
  !*** ./shared/utils/timer/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSecondsTimer": () => (/* binding */ createSecondsTimer)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59692);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12336);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 39754);


const createSecondsTimer = (secondsPeriod, initialSeconds = secondsPeriod, resetSource = rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER) => {
    const tickPeriod = 1000;
    return resetSource.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => secondsPeriod), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(initialSeconds), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((seconds) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, tickPeriod).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((secondsLast) => seconds - secondsLast))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((value) => value >= 0));
};


/***/ }),

/***/ 99110:
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/button.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatAnchor": () => (/* binding */ MatAnchor),
/* harmony export */   "MatButton": () => (/* binding */ MatButton),
/* harmony export */   "MatButtonModule": () => (/* binding */ MatButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 52503);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 76263);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 74006);






/** Default color palette for round buttons (mat-fab and mat-mini-fab) */

const _c0 = ["mat-button", ""];
const _c1 = ["*"];
const _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n";
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */

const BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

const _MatButtonBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisableRipple)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

})));
/**
 * Material design button.
 */


class MatButton extends _MatButtonBase {
  constructor(elementRef, _focusMonitor, _animationMode) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;
    this._animationMode = _animationMode;
    /** Whether the button is round. */

    this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab');
    /** Whether the button is icon button. */

    this.isIconButton = this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding class.

    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        this._getHostElement().classList.add(attr);
      }
    } // Add a class that applies to all buttons. This makes it easier to target if somebody
    // wants to target all Material buttons. We do it here rather than `host` to ensure that
    // the class is applied to derived classes.


    elementRef.nativeElement.classList.add('mat-button-base');

    if (this.isRoundButton) {
      this.color = DEFAULT_ROUND_BUTTON_COLOR;
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  /** Focuses the button. */


  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Gets whether the button has one of the given attributes. */


  _hasHostAttributes(...attributes) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

}

MatButton.ɵfac = function MatButton_Factory(t) {
  return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8));
};

MatButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatButton,
  selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
  viewQuery: function MatButton_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 5,
  hostBindings: function MatButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color"
  },
  exportAs: ["matButton"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 5,
  consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
  template: function MatButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1)(3, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple],
  styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `button[mat-button], button[mat-raised-button], button[mat-icon-button],
             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
             button[mat-flat-button]`,
      exportAs: 'matButton',
      host: {
        '[attr.disabled]': 'disabled || null',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        // Add a class for disabled button styling instead of the using attribute
        // selector or pseudo-selector.  This allows users to create focusabled
        // disabled buttons without recreating the styles.
        '[class.mat-button-disabled]': 'disabled',
        'class': 'mat-focus-indicator'
      },
      inputs: ['disabled', 'disableRipple', 'color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple]
    }]
  });
})();
/**
 * Material design anchor button.
 */


class MatAnchor extends MatButton {
  constructor(focusMonitor, elementRef, animationMode,
  /** @breaking-change 14.0.0 _ngZone will be required. */
  _ngZone) {
    super(elementRef, focusMonitor, animationMode);
    this._ngZone = _ngZone;

    this._haltDisabledEvents = event => {
      // A disabled button shouldn't apply any actions
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    /** @breaking-change 14.0.0 _ngZone will be required. */

    if (this._ngZone) {
      this._ngZone.runOutsideAngular(() => {
        this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
      });
    } else {
      this._elementRef.nativeElement.addEventListener('click', this._haltDisabledEvents);
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this._elementRef.nativeElement.removeEventListener('click', this._haltDisabledEvents);
  }

}

MatAnchor.ɵfac = function MatAnchor_Factory(t) {
  return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone, 8));
};

MatAnchor.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatAnchor,
  selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 7,
  hostBindings: function MatAnchor_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex"
  },
  exportAs: ["matButton", "matAnchor"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 5,
  consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
  template: function MatAnchor_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1)(3, "span", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    }
  },
  directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRipple],
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: `a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]`,
      exportAs: 'matButton, matAnchor',
      host: {
        // Note that we ignore the user-specified tabindex when it's disabled for
        // consistency with the `mat-button` applied on native buttons where even
        // though they have an index, they're not tabbable.
        '[attr.tabindex]': 'disabled ? -1 : tabIndex',
        '[attr.disabled]': 'disabled || null',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-button-disabled]': 'disabled',
        'class': 'mat-focus-indicator'
      },
      inputs: ['disabled', 'disableRipple', 'color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatButtonModule {}

MatButtonModule.ɵfac = function MatButtonModule_Factory(t) {
  return new (t || MatButtonModule)();
};

MatButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatButtonModule
});
MatButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatButton, MatAnchor]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=projects_charon_src_app_sign-up_sign-up_module_ts.js.map