"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["main"],{

/***/ 1165:
/*!*******************************************!*\
  !*** ./apps/web/src/app/app.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




// noinspection AngularMissingOrInvalidDeclarationInModule
class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["joke-root"]], standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9439:
/*!*****************************************!*\
  !*** ./apps/web/src/app/app.routing.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "libs_web_shell_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @joke/web-shell */ 7910)).then((m) => m.WebShellModule),
    },
];


/***/ }),

/***/ 9415:
/*!******************************!*\
  !*** ./apps/web/src/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 1165);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nrwl/angular */ 9027);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/router-store */ 1611);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env */ 3629);
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.routing */ 9439);












if (_env__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
const providers = [
    _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(_app_app_routing__WEBPACK_IMPORTED_MODULE_2__.routes),
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
    _nrwl_angular__WEBPACK_IMPORTED_MODULE_6__.NxModule.forRoot(),
    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forRoot([]),
    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__.StoreRouterConnectingModule.forRoot(),
    _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forRoot({}, {
        runtimeChecks: {
            strictActionImmutability: true,
            strictStateImmutability: true,
        },
    }),
    !_env__WEBPACK_IMPORTED_MODULE_1__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule.instrument() : [],
];
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
    providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(...providers)],
}).catch((err) => console.error(err));


/***/ }),

/***/ 3629:
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    demo: true,
    apiUrl: 'https://YOUR.API',
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9415)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map