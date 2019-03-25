(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-categories-categories-module"],{

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content -->\n<section>\n    <div markdown [data]=\"category\"></div>\n    <!--<markdown [data]=\"category\"></markdown>-->\n</section>\n\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(route, markdownService) {
        this.route = route;
        this.markdownService = markdownService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.markdownService.getSource('assets/blog/categories/' + params['category'] + '.md').subscribe(function (data) {
                var x = data.split('---').slice(2, 3);
                this.category = x[0];
            }.bind(_this), function (errors) {
                console.log('DEBUG:E: RouteEvent Log area eight', errors);
                this.category = 'Error';
            }.bind(_this));
        });
        this.markdownService.renderer.heading = function (text, level) {
            var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            return '<header class="main">' + '<h' + level + '>' + text + '</h' + level + '>' + '</header>';
        };
        this.markdownService.renderer.image = function (href, title, text) {
            var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
            return '<span class="image main"> <img src="' + href + '" title="' + title + '" alt="' + text + '" /> </span>';
        };
    };
    CategoriesComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _categories_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories.routes */ "./src/app/categories/categories.routes.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");







var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_categories_routes__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES_ROUTES"]),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild()
            ],
            exports: []
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.routes.ts ***!
  \*************************************************/
/*! exports provided: CATEGORIES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES_ROUTES", function() { return CATEGORIES_ROUTES; });
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");

var CATEGORIES_ROUTES = [
    { path: '', component: _categories_component__WEBPACK_IMPORTED_MODULE_0__["CategoriesComponent"] },
    { path: ':story', loadChildren: 'app/stories/stories.module#StoriesModule' }
];


/***/ })

}]);
//# sourceMappingURL=app-categories-categories-module.js.map