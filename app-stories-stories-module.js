(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-stories-stories-module"],{

/***/ "./src/app/stories/stories.component.html":
/*!************************************************!*\
  !*** ./src/app/stories/stories.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div markdown [data]=\"post\"></div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/stories/stories.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stories/stories.component.ts ***!
  \**********************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");




var StoriesComponent = /** @class */ (function () {
    function StoriesComponent(route, markdownService) {
        this.route = route;
        this.markdownService = markdownService;
    }
    StoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.markdownService.getSource('assets/blog/posts/' + params['story'] + '.md').subscribe(function (data) {
                var x = data.split('---').slice(2, 3);
                this.post = x[0];
                console.log('DEBUG: RouteEvent Log area seven' + x);
            }.bind(_this), function (errors) {
                console.log('DEBUG:E: RouteEvent Log area eight', errors);
                this.post = 'Error';
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
    StoriesComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    StoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stories',
            template: __webpack_require__(/*! ./stories.component.html */ "./src/app/stories/stories.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownService"]])
    ], StoriesComponent);
    return StoriesComponent;
}());



/***/ }),

/***/ "./src/app/stories/stories.module.ts":
/*!*******************************************!*\
  !*** ./src/app/stories/stories.module.ts ***!
  \*******************************************/
/*! exports provided: StoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesModule", function() { return StoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _stories_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stories.routes */ "./src/app/stories/stories.routes.ts");
/* harmony import */ var _stories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stories.component */ "./src/app/stories/stories.component.ts");







var StoriesModule = /** @class */ (function () {
    function StoriesModule() {
    }
    StoriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_stories_component__WEBPACK_IMPORTED_MODULE_6__["StoriesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_stories_routes__WEBPACK_IMPORTED_MODULE_5__["STORIES_ROUTES"]),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild()
            ],
            exports: []
        })
    ], StoriesModule);
    return StoriesModule;
}());



/***/ }),

/***/ "./src/app/stories/stories.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/stories/stories.routes.ts ***!
  \*******************************************/
/*! exports provided: STORIES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORIES_ROUTES", function() { return STORIES_ROUTES; });
/* harmony import */ var _stories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stories.component */ "./src/app/stories/stories.component.ts");

var STORIES_ROUTES = [
    { path: '', component: _stories_component__WEBPACK_IMPORTED_MODULE_0__["StoriesComponent"] },
    { path: ':id2', component: _stories_component__WEBPACK_IMPORTED_MODULE_0__["StoriesComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=app-stories-stories-module.js.map