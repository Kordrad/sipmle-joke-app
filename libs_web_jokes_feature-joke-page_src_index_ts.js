"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["libs_web_jokes_feature-joke-page_src_index_ts"],{

/***/ 513:
/*!*******************************************************!*\
  !*** ./libs/web/jokes/feature-joke-page/src/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebJokesFeatureJokePageComponent": () => (/* reexport safe */ _lib_web_jokes_feature_joke_page_component__WEBPACK_IMPORTED_MODULE_0__.WebJokesFeatureJokePageComponent)
/* harmony export */ });
/* harmony import */ var _lib_web_jokes_feature_joke_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-jokes-feature-joke-page.component */ 5899);



/***/ }),

/***/ 5899:
/*!*******************************************************************************************!*\
  !*** ./libs/web/jokes/feature-joke-page/src/lib/web-jokes-feature-joke-page.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebJokesFeatureJokePageComponent": () => (/* binding */ WebJokesFeatureJokePageComponent)
/* harmony export */ });
/* harmony import */ var _joke_web_shared_data_access_jokes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joke/web-shared-data-access-jokes */ 8125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _joke_web_jokes_ui_joke_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joke/web/jokes/ui/joke-view */ 4326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





 // noinspection AngularMissingOrInvalidDeclarationInModule

class WebJokesFeatureJokePageComponent {
  constructor(jokesFacade$) {
    this.jokesFacade$ = jokesFacade$;
    this.randomJoke$ = this.jokesFacade$.randomJoke$;
  }

  ngOnInit() {
    this.getRandom();
  }

  getRandom() {
    this.jokesFacade$.getRandomJoke();
  }

}

WebJokesFeatureJokePageComponent.ɵfac = function WebJokesFeatureJokePageComponent_Factory(t) {
  return new (t || WebJokesFeatureJokePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_joke_web_shared_data_access_jokes__WEBPACK_IMPORTED_MODULE_0__.JokesFacade));
};

WebJokesFeatureJokePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WebJokesFeatureJokePageComponent,
  selectors: [["joke-web-feature"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[3, "joke", "getRandomJoke"]],
  template: function WebJokesFeatureJokePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "joke-web-jokes-ui-joke-view", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("getRandomJoke", function WebJokesFeatureJokePageComponent_Template_joke_web_jokes_ui_joke_view_getRandomJoke_0_listener() {
        return ctx.getRandom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("joke", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.randomJoke$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _joke_web_shared_data_access_jokes__WEBPACK_IMPORTED_MODULE_0__.WebSharedDataAccessJokesModule, _joke_web_jokes_ui_joke_view__WEBPACK_IMPORTED_MODULE_1__.WebJokesUiJokeViewComponent],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 4326:
/*!**************************************************!*\
  !*** ./libs/web/jokes/ui/joke-view/src/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebJokesUiJokeViewComponent": () => (/* reexport safe */ _lib_web_jokes_ui_joke_view_component__WEBPACK_IMPORTED_MODULE_0__.WebJokesUiJokeViewComponent)
/* harmony export */ });
/* harmony import */ var _lib_web_jokes_ui_joke_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-jokes-ui-joke-view.component */ 3338);



/***/ }),

/***/ 3338:
/*!*********************************************************************************!*\
  !*** ./libs/web/jokes/ui/joke-view/src/lib/web-jokes-ui-joke-view.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebJokesUiJokeViewComponent": () => (/* binding */ WebJokesUiJokeViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _joke_web_shared_feature_joke_add_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joke/web-shared-feature-joke-add-dialog */ 6483);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _joke_web_shared_ui_joke_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joke/web-shared-ui-joke-card */ 574);










const _c0 = ["joke", ""];
function WebJokesUiJokeViewComponent_joke_web_jokes_ui_joke_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "joke-web-jokes-ui-joke-card", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("category", ctx_r0.joke.category)("content", ctx_r0.joke.content);
} }
// noinspection AngularMissingOrInvalidDeclarationInModule
class WebJokesUiJokeViewComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.getRandomJoke = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    openAddModal() {
        this.dialog.open(_joke_web_shared_feature_joke_add_dialog__WEBPACK_IMPORTED_MODULE_0__.FeatureJokeAddDialogComponent);
    }
}
WebJokesUiJokeViewComponent.ɵfac = function WebJokesUiJokeViewComponent_Factory(t) { return new (t || WebJokesUiJokeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
WebJokesUiJokeViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebJokesUiJokeViewComponent, selectors: [["joke-web-jokes-ui-joke-view", "joke", ""]], inputs: { joke: "joke" }, outputs: { getRandomJoke: "getRandomJoke" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], attrs: _c0, decls: 6, vars: 1, consts: [[1, "joke-view"], ["mat-raised-button", "", "color", "primary", 1, "btn-add", 3, "click"], [3, "category", "content", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn-next", 3, "click"], [3, "category", "content"]], template: function WebJokesUiJokeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebJokesUiJokeViewComponent_Template_button_click_1_listener() { return ctx.openAddModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Dodaj ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, WebJokesUiJokeViewComponent_joke_web_jokes_ui_joke_card_3_Template, 1, 2, "joke-web-jokes-ui-joke-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebJokesUiJokeViewComponent_Template_button_click_4_listener() { return ctx.getRandomJoke.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Poka\u017C nast\u0119pny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.joke);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _joke_web_shared_ui_joke_card__WEBPACK_IMPORTED_MODULE_1__.WebSharedUiJokeCardComponent,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule], styles: [".joke-view[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  flex-direction: column;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\n.btn-next[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi1qb2tlcy11aS1qb2tlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsaUJBQUE7QUFDSiIsImZpbGUiOiJ3ZWItam9rZXMtdWktam9rZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpva2UtdmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDMycHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uYnRuIHtcclxuICAmLWFkZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gICYtbmV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=libs_web_jokes_feature-joke-page_src_index_ts.js.map