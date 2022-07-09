"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["libs_web_shell_src_index_ts"],{

/***/ 7910:
/*!*************************************!*\
  !*** ./libs/web/shell/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebShellModule": () => (/* reexport safe */ _lib_web_shell_module__WEBPACK_IMPORTED_MODULE_0__.WebShellModule),
/* harmony export */   "routes": () => (/* reexport safe */ _lib_web_shell_module__WEBPACK_IMPORTED_MODULE_0__.routes)
/* harmony export */ });
/* harmony import */ var _lib_web_shell_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-shell.module */ 9589);



/***/ }),

/***/ 1465:
/*!*********************************************************!*\
  !*** ./libs/web/shell/src/lib/shell/shell.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellComponent": () => (/* binding */ ShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _joke_web_ui_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joke/web/ui/nav */ 1593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





// noinspection AngularMissingOrInvalidDeclarationInModule
class ShellComponent {
}
ShellComponent.ɵfac = function ShellComponent_Factory(t) { return new (t || ShellComponent)(); };
ShellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShellComponent, selectors: [["joke-web-shell"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]], decls: 3, vars: 0, consts: [["logoSrc", "../assets/logo.png"], [1, "container"]], template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "joke-web-ui-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _joke_web_ui_nav__WEBPACK_IMPORTED_MODULE_0__.WebUiNavComponent], styles: ["joke-web-ui-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: var(--space--default);\n  margin-top: 80px;\n  min-height: calc(\n    100vh - 80px - var(--space--default) * 2\n  );\n  max-width: 768px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.container[_ngcontent-%COMP%]   router-outlet[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoZWxsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHVpXFxzdHlsZXNcXHNyY1xcbGliXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUNQVztBRE1iOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxnQkNaVztFRGFYOztHQUFBO0VBR0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFHRTtFQUNFLFdBQUE7QUFESiIsImZpbGUiOiJzaGVsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bqb2tlL3dlYi11aS1zdHlsZXMvbGliL3ZhcmlhYmxlcyc7XG5cbmpva2Utd2ViLXVpLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB2YXJpYWJsZXMuJG5hdi1oZWlnaHQ7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0tZGVmYXVsdCk7XG4gIG1hcmdpbi10b3A6IHZhcmlhYmxlcy4kbmF2LWhlaWdodDtcbiAgbWluLWhlaWdodDogY2FsYyhcbiAgICAxMDB2aCAtICN7dmFyaWFibGVzLiRuYXYtaGVpZ2h0fSAtIHZhcigtLXNwYWNlLS1kZWZhdWx0KSAqIDJcbiAgKTtcbiAgbWF4LXdpZHRoOiBtYXAtZ2V0KHZhcmlhYmxlcy4kZ3JpZC1icmVha3BvaW50cywgJ21kJyk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiJG5hdi1oZWlnaHQ6IDgwcHg7XG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4gICd4cyc6IDAsXG4gIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG4gICdzbSc6IDU3NnB4LFxuICAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XG4gICdtZCc6IDc2OHB4LFxuICAvLyBMYXJnZSBzY3JlZW4gLyBkZXNrdG9wXG4gICdsZyc6IDk5MnB4LFxuICAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbiAgJ3hsJzogMTIwMHB4XG4pICFkZWZhdWx0O1xuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 9589:
/*!****************************************************!*\
  !*** ./libs/web/shell/src/lib/web-shell.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebShellModule": () => (/* binding */ WebShellModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell/shell.component */ 1465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent,
        children: [
            {
                path: 'my-jokes',
                loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_feature-joke-add-dialog_src_index_ts-libs_web_shared_ui_joke-card_src-6e497e"), __webpack_require__.e("libs_web_my-jokes_feature-my-jokes-page_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @joke/web/my-jokes/feature-my-jokes-page */ 9578)).then((m) => m.WebMyJokesFeatureMyJokesPageComponent),
            },
            {
                path: 'joke',
                pathMatch: 'full',
                loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-libs_web_shared_feature-joke-add-dialog_src_index_ts-libs_web_shared_ui_joke-card_src-6e497e"), __webpack_require__.e("libs_web_jokes_feature-joke-page_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @joke/web-jokes-feature-joke-page */ 513)).then((m) => m.WebJokesFeatureJokePageComponent),
            },
            {
                path: '',
                redirectTo: 'joke',
                pathMatch: 'full',
            },
        ],
    },
];
class WebShellModule {
}
WebShellModule.ɵfac = function WebShellModule_Factory(t) { return new (t || WebShellModule)(); };
WebShellModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WebShellModule });
WebShellModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebShellModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1593:
/*!**************************************!*\
  !*** ./libs/web/ui/nav/src/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebUiNavComponent": () => (/* reexport safe */ _lib_web_ui_nav_web_ui_nav_component__WEBPACK_IMPORTED_MODULE_0__.WebUiNavComponent)
/* harmony export */ });
/* harmony import */ var _lib_web_ui_nav_web_ui_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-ui-nav/web-ui-nav.component */ 7170);



/***/ }),

/***/ 7170:
/*!********************************************************************!*\
  !*** ./libs/web/ui/nav/src/lib/web-ui-nav/web-ui-nav.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebUiNavComponent": () => (/* binding */ WebUiNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);





const _c0 = ["logoSrc", ""];
function WebUiNavComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](route_r1.label);
} }
// noinspection AngularMissingOrInvalidDeclarationInModule
class WebUiNavComponent {
    constructor() {
        this.logoSrc = '';
        this.routes = [
            {
                label: 'Żarty',
                url: '/joke',
            },
            {
                label: 'Moje żarty',
                url: '/my-jokes',
            },
        ];
    }
}
WebUiNavComponent.ɵfac = function WebUiNavComponent_Factory(t) { return new (t || WebUiNavComponent)(); };
WebUiNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebUiNavComponent, selectors: [["joke-web-ui-nav", "logoSrc", ""]], inputs: { logoSrc: "logoSrc" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], attrs: _c0, decls: 5, vars: 3, consts: [[1, "nav"], [3, "routerLink"], ["alt", "Logo", 1, "nav__logo", 3, "src"], [1, "list"], ["class", "list__element", 4, "ngFor", "ngForOf"], [1, "list__element"], ["routerLinkActive", "active", 1, "list__link", 3, "routerLink"]], template: function WebUiNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WebUiNavComponent_li_4_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routes[0].url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["[_nghost-%COMP%] {\n  z-index: 1000;\n}\n\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 var(--space--default);\n  box-sizing: border-box;\n  box-shadow: var(--box-shadow--default);\n  background-color: var(--background-color);\n  height: 100%;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n}\n\n.list[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.list__element[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: var(--space--default);\n}\n\n.list__link[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight--bold);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi11aS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQU9FLGdCQUFBO0VBQ0EsYUFBQTtBQUxGOztBQUZFO0VBRUUsU0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFLRTtFQUNFLGtDQUFBO0FBRko7O0FBTUE7RUFDRSxxQ0FBQTtBQUhGIiwiZmlsZSI6IndlYi11aS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLS1kZWZhdWx0KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctLWRlZmF1bHQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICYsXHJcbiAgJiAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5saXN0X19lbGVtZW50IHtcclxuICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNlLS1kZWZhdWx0KTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0X19saW5rIHtcclxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtLWJvbGQpO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=libs_web_shell_src_index_ts.js.map