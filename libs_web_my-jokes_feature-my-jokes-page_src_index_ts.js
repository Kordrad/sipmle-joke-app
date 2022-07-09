"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["libs_web_my-jokes_feature-my-jokes-page_src_index_ts"],{

/***/ 9578:
/*!**************************************************************!*\
  !*** ./libs/web/my-jokes/feature-my-jokes-page/src/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebMyJokesFeatureMyJokesPageComponent": () => (/* reexport safe */ _lib_web_my_jokes_feature_my_jokes_page_component__WEBPACK_IMPORTED_MODULE_0__.WebMyJokesFeatureMyJokesPageComponent)
/* harmony export */ });
/* harmony import */ var _lib_web_my_jokes_feature_my_jokes_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-my-jokes-feature-my-jokes-page.component */ 4449);



/***/ }),

/***/ 4449:
/*!*********************************************************************************************************!*\
  !*** ./libs/web/my-jokes/feature-my-jokes-page/src/lib/web-my-jokes-feature-my-jokes-page.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebMyJokesFeatureMyJokesPageComponent": () => (/* binding */ WebMyJokesFeatureMyJokesPageComponent)
/* harmony export */ });
/* harmony import */ var _joke_web_shared_data_access_jokes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joke/web-shared-data-access-jokes */ 8125);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _joke_web_my_jokes_ui_jokes_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joke/web/my-jokes/ui/jokes-view */ 7149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





 // noinspection AngularMissingOrInvalidDeclarationInModule

class WebMyJokesFeatureMyJokesPageComponent {
  constructor(jokesFacade) {
    this.jokesFacade = jokesFacade;
    this.allJokes$ = this.jokesFacade.allJokes$;
    this.deleteJokeLoading$ = this.jokesFacade.deleteJokeLoading$;
  }

  ngOnInit() {
    this.jokesFacade.getJokes();
  }

  deleteJoke(jokeGuid) {
    this.jokesFacade.deleteJoke(jokeGuid);
  }

}

WebMyJokesFeatureMyJokesPageComponent.ɵfac = function WebMyJokesFeatureMyJokesPageComponent_Factory(t) {
  return new (t || WebMyJokesFeatureMyJokesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_joke_web_shared_data_access_jokes__WEBPACK_IMPORTED_MODULE_0__.JokesFacade));
};

WebMyJokesFeatureMyJokesPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WebMyJokesFeatureMyJokesPageComponent,
  selectors: [["joke-my-jokes-page"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 6,
  consts: [[3, "jokes", "deleteJokeLoading", "delete"]],
  template: function WebMyJokesFeatureMyJokesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "joke-web-my-jokes-ui-jokes-view", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("delete", function WebMyJokesFeatureMyJokesPageComponent_Template_joke_web_my_jokes_ui_jokes_view_delete_0_listener($event) {
        return ctx.deleteJoke($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("jokes", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.allJokes$))("deleteJokeLoading", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx.deleteJokeLoading$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _joke_web_my_jokes_ui_jokes_view__WEBPACK_IMPORTED_MODULE_1__.WebMyJokesUiJokesViewComponent, _joke_web_shared_data_access_jokes__WEBPACK_IMPORTED_MODULE_0__.WebSharedDataAccessJokesModule],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 7149:
/*!******************************************************!*\
  !*** ./libs/web/my-jokes/ui/jokes-view/src/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebMyJokesUiJokesViewComponent": () => (/* reexport safe */ _lib_web_my_jokes_ui_jokes_view_web_my_jokes_ui_jokes_view_component__WEBPACK_IMPORTED_MODULE_0__.WebMyJokesUiJokesViewComponent)
/* harmony export */ });
/* harmony import */ var _lib_web_my_jokes_ui_jokes_view_web_my_jokes_ui_jokes_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/web-my-jokes-ui-jokes-view/web-my-jokes-ui-jokes-view.component */ 5202);



/***/ }),

/***/ 5202:
/*!********************************************************************************************************************!*\
  !*** ./libs/web/my-jokes/ui/jokes-view/src/lib/web-my-jokes-ui-jokes-view/web-my-jokes-ui-jokes-view.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebMyJokesUiJokesViewComponent": () => (/* binding */ WebMyJokesUiJokesViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _joke_web_shared_feature_joke_add_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @joke/web-shared-feature-joke-add-dialog */ 6483);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _joke_web_shared_ui_joke_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @joke/web-shared-ui-joke-card */ 574);










const _c0 = ["jokes", ""];
function WebMyJokesUiJokesViewComponent_joke_web_jokes_ui_joke_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "joke-web-jokes-ui-joke-card", 4)(1, "div", 5)(2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebMyJokesUiJokesViewComponent_joke_web_jokes_ui_joke_card_4_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const joke_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.deleteJoke(joke_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Usu\u0144 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const joke_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("category", joke_r1.category)("content", joke_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.deleteJokeLoading);
} }
// noinspection AngularMissingOrInvalidDeclarationInModule
class WebMyJokesUiJokesViewComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.deleteJokeLoading = false;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._jokes = [];
    }
    set jokes(jokes) {
        if (Array.isArray(jokes)) {
            this._jokes = jokes;
        }
    }
    get jokes() {
        return this._jokes;
    }
    openAddModal() {
        this.dialog.open(_joke_web_shared_feature_joke_add_dialog__WEBPACK_IMPORTED_MODULE_0__.FeatureJokeAddDialogComponent, {
            data: {
                getNewJokesAfterAddJoke: true,
            },
        });
        // dialogRef.afterClosed().subscribe(() => );
    }
    deleteJoke(id) {
        if (this.deleteJokeLoading) {
            return;
        }
        this.delete.emit(id);
    }
}
WebMyJokesUiJokesViewComponent.ɵfac = function WebMyJokesUiJokesViewComponent_Factory(t) { return new (t || WebMyJokesUiJokesViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
WebMyJokesUiJokesViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WebMyJokesUiJokesViewComponent, selectors: [["joke-web-my-jokes-ui-jokes-view", "jokes", ""]], inputs: { jokes: "jokes", deleteJokeLoading: "deleteJokeLoading" }, outputs: { delete: "delete" }, standalone: true, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]], attrs: _c0, decls: 5, vars: 1, consts: [[1, "joke-view"], ["mat-raised-button", "", "color", "primary", 1, "btn-add", 3, "click"], [1, "joke-view__list"], [3, "category", "content", 4, "ngFor", "ngForOf"], [3, "category", "content"], [1, "card__action"], ["mat-raised-button", "", "color", "warn", 1, "card__btn-delete", 3, "disabled", "click"]], template: function WebMyJokesUiJokesViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WebMyJokesUiJokesViewComponent_Template_button_click_1_listener() { return ctx.openAddModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Dodaj ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, WebMyJokesUiJokesViewComponent_joke_web_jokes_ui_joke_card_4_Template, 4, 3, "joke-web-jokes-ui-joke-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jokes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _joke_web_shared_ui_joke_card__WEBPACK_IMPORTED_MODULE_1__.WebSharedUiJokeCardComponent], styles: [".card__action[_ngcontent-%COMP%] {\n  display: flex;\n}\n.card__btn-delete[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.joke-view__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .joke-view__list[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    flex: 1 0 calc(50% - 7px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi1teS1qb2tlcy11aS1qb2tlcy12aWV3LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcdWlcXHN0eWxlc1xcc3JjXFxsaWJcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7QUFGSjtBQUlFO0VBQ0UsaUJBQUE7QUFGSjtBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQ0dJO0VEQ0Y7SUFFSSx5QkFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoid2ViLW15LWpva2VzLXVpLWpva2VzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAam9rZS93ZWItdWktc3R5bGVzL2xpYi9taXhpbnMnO1xuXG4uY2FyZCB7XG4gICZfX2FjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAmX19idG4tZGVsZXRlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuXG4uam9rZS12aWV3X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgPiAqIHtcbiAgICBAaW5jbHVkZSBtaXhpbnMucmVzcG9uZC10bygnbWQnKSB7XG4gICAgICBmbGV4OiAxIDAgY2FsYyg1MCUgLSA3cHgpO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAndmFyaWFibGVzJztcbkBtaXhpbiBzZXRWYXJpYWJsZXNGcm9tTWFwKCRtYXApIHtcbiAgQGVhY2ggJHByb3BlcnR5LCAkdmFsdWUgaW4gJG1hcCB7XG4gICAgLS0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgfVxufVxuXG4vLy8gTWl4aW4gdG8gbWFuYWdlIHJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRicmVha3BvaW50IC0gQnJlYWtwb2ludCBuYW1lXG4vLy8gQHJlcXVpcmUgJGJyZWFrcG9pbnRzXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICAvLyBJZiB0aGUga2V5IGV4aXN0cyBpbiB0aGUgbWFwXG4gIEBpZiBtYXAtaGFzLWtleSh2YXJpYWJsZXMuJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgLy8gUHJpbnRzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gdGhlIHZhbHVlXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQodmFyaWFibGVzLiRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHRoZSBrZXkgZG9lc24ndCBleGlzdCBpbiB0aGUgbWFwXG4gIEBlbHNlIHtcbiAgICBAd2FybiBcIlVuZm9ydHVuYXRlbHksIG5vIHZhbHVlIGNvdWxkIGJlIHJldHJpZXZlZCBmcm9tIGAjeyRicmVha3BvaW50fWAuIFwiXG4gICAgICAgICsgXCJBdmFpbGFibGUgYnJlYWtwb2ludHMgYXJlOiAje21hcC1rZXlzKHZhcmlhYmxlcy4kZ3JpZC1icmVha3BvaW50cyl9LlwiO1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=libs_web_my-jokes_feature-my-jokes-page_src_index_ts.js.map