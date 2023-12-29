"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["common"],{

/***/ 79205:
/*!******************************************************!*\
  !*** ./projects/charon/src/app/login/login-route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoute": () => (/* binding */ LoginRoute)
/* harmony export */ });
var LoginRoute;
(function (LoginRoute) {
    LoginRoute["Import"] = "import";
    LoginRoute["Restore"] = "restore";
    LoginRoute["Login"] = "login";
})(LoginRoute || (LoginRoute = {}));


/***/ }),

/***/ 3451:
/*!*************************************************!*\
  !*** ./projects/charon/src/app/portal/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalRoute": () => (/* reexport safe */ _portal_route__WEBPACK_IMPORTED_MODULE_0__.PortalRoute)
/* harmony export */ });
/* harmony import */ var _portal_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-route */ 81716);



/***/ }),

/***/ 81716:
/*!********************************************************!*\
  !*** ./projects/charon/src/app/portal/portal-route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalRoute": () => (/* binding */ PortalRoute)
/* harmony export */ });
var PortalRoute;
(function (PortalRoute) {
    PortalRoute["Activity"] = "activity";
    PortalRoute["Assets"] = "assets";
    PortalRoute["PDVRate"] = "pdv-rate";
    PortalRoute["Staking"] = "staking";
    PortalRoute["Transfer"] = "transfer";
    PortalRoute["Vpn"] = "vpn";
    PortalRoute["Loan"] = "loan";
    PortalRoute["Ai"] = "ai";
})(PortalRoute || (PortalRoute = {}));


/***/ }),

/***/ 87710:
/*!****************************************************************************************************!*\
  !*** ./shared/directives/clipboard-copied-notification/clipboard-copied-notification.directive.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardCopiedNotificationDirective": () => (/* binding */ ClipboardCopiedNotificationDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 84608);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ 60425);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 44812);







let ClipboardCopiedNotificationDirective = class ClipboardCopiedNotificationDirective {
    constructor(cdkCopyToClipboard, notificationService, translocoService) {
        this.cdkCopyToClipboard = cdkCopyToClipboard;
        this.notificationService = notificationService;
        this.translocoService = translocoService;
    }
    ngOnInit() {
        this.cdkCopyToClipboard.copied.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.translocoService.selectTranslate(this.notificationI18nKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1))), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe((notification) => this.notificationService.success(notification));
    }
};
ClipboardCopiedNotificationDirective.ɵfac = function ClipboardCopiedNotificationDirective_Factory(t) { return new (t || ClipboardCopiedNotificationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__.CdkCopyToClipboard, 1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoService)); };
ClipboardCopiedNotificationDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: ClipboardCopiedNotificationDirective, selectors: [["", "appClipboardCopiedNotification", ""]], inputs: { notificationI18nKey: ["appClipboardCopiedNotification", "notificationI18nKey"] } });
ClipboardCopiedNotificationDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], ClipboardCopiedNotificationDirective);



/***/ }),

/***/ 71396:
/*!*************************************************************************************************!*\
  !*** ./shared/directives/clipboard-copied-notification/clipboard-copied-notification.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardCopiedNotificationModule": () => (/* binding */ ClipboardCopiedNotificationModule)
/* harmony export */ });
/* harmony import */ var _clipboard_copied_notification_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard-copied-notification.directive */ 87710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);


class ClipboardCopiedNotificationModule {
}
ClipboardCopiedNotificationModule.ɵfac = function ClipboardCopiedNotificationModule_Factory(t) { return new (t || ClipboardCopiedNotificationModule)(); };
ClipboardCopiedNotificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClipboardCopiedNotificationModule });
ClipboardCopiedNotificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClipboardCopiedNotificationModule, { declarations: [_clipboard_copied_notification_directive__WEBPACK_IMPORTED_MODULE_0__.ClipboardCopiedNotificationDirective], exports: [_clipboard_copied_notification_directive__WEBPACK_IMPORTED_MODULE_0__.ClipboardCopiedNotificationDirective] }); })();


/***/ }),

/***/ 5701:
/*!******************************************************************!*\
  !*** ./shared/directives/clipboard-copied-notification/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardCopiedNotificationModule": () => (/* reexport safe */ _clipboard_copied_notification_module__WEBPACK_IMPORTED_MODULE_0__.ClipboardCopiedNotificationModule)
/* harmony export */ });
/* harmony import */ var _clipboard_copied_notification_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard-copied-notification.module */ 71396);



/***/ }),

/***/ 78969:
/*!**********************************!*\
  !*** ./shared/svg-icons/edit.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgEdit": () => (/* binding */ svgEdit)
/* harmony export */ });
const svgEdit = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" fill="currentColor"/></svg>`,
    name: 'edit'
};


/***/ })

}]);
//# sourceMappingURL=common.js.map