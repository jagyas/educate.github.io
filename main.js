(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/categories/categories.module": [
		"./src/app/categories/categories.module.ts",
		"app-categories-categories-module"
	],
	"app/stories/stories.module": [
		"./src/app/stories/stories.module.ts",
		"app-stories-stories-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['home']\" style=\"display:none\">Homepage</a>\n<a [routerLink]=\"['/java/test2']\" style=\"display:none\">Homepage</a>\n<a [routerLink]=\"['/java/test3']\" style=\"display:none\" >Homepage</a>\n<a [routerLink]=\"['/posts/test3']\"  style=\"display:none\">Homepage</a>\n<div id=\"wrapper\">\n    <!-- Main -->\n    <div id=\"main\">\n            <div class=\"inner\">\n\n                <!-- Header -->\n                    <header id=\"header\">\n                        <a href=\"index.html\" class=\"logo\"><strong>Editorial</strong> by HTML5 UP</a>\n                        <ul class=\"icons\">\n                            <li><a href=\"#\" class=\"icon fa-twitter\"><span class=\"label\">Twitter</span></a></li>\n                            <li><a href=\"#\" class=\"icon fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n                            <li><a href=\"#\" class=\"icon fa-snapchat-ghost\"><span class=\"label\">Snapchat</span></a></li>\n                            <li><a href=\"#\" class=\"icon fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n                            <li><a href=\"#\" class=\"icon fa-medium\"><span class=\"label\">Medium</span></a></li>\n                        </ul>\n                    </header>\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n<!-- Sidebar -->\n<div id=\"sidebar\">\n    <div class=\"inner\">\n\n        <!-- Search -->\n            <section id=\"search\" class=\"alt\">\n                <form method=\"post\" action=\"#\">\n                    <input type=\"text\" name=\"query\" id=\"query\" placeholder=\"Search\" />\n                </form>\n            </section>\n\n        <!-- Menu -->\n            <nav id=\"menu\">\n                <header class=\"major\">\n                    <h2>Menu</h2>\n                </header>\n                <ul>\n                    <li><a [routerLink]=\"['']\">Homepage</a></li>\n                    <li><a routerLink=\"{{postsLink}}\">Generic</a></li>\n                    <li><a href=\"elements.html\">Elements</a></li>\n                    <li>\n                        <span class=\"opener\">Submenu</span>\n                        <markdown [src]=\"'assets/blog/sidemenu.md'\"></markdown>\n                    </li>\n                    <li><a href=\"#\">Etiam Dolore</a></li>\n                    <li><a href=\"#\">Adipiscing</a></li>\n                    <li>\n                        <span class=\"opener\">Another Submenu</span>\n                        <ul>\n                            <li><a href=\"#\">Lorem Dolor</a></li>\n                            <li><a href=\"#\">Ipsum Adipiscing</a></li>\n                            <li><a href=\"#\">Tempus Magna</a></li>\n                            <li><a href=\"#\">Feugiat Veroeros</a></li>\n                        </ul>\n                    </li>\n                    <li><a href=\"#\">Maximus Erat</a></li>\n                    <li><a href=\"#\">Sapien Mauris</a></li>\n                    <li><a href=\"#\">Amet Lacinia</a></li>\n                </ul>\n            </nav>\n\n        <!-- Section -->\n            <section>\n                <header class=\"major\">\n                    <h2>Ante interdum</h2>\n                </header>\n                <div class=\"mini-posts\">\n                    <article>\n                        <a href=\"#\" class=\"image\"><img src=\"assets/images/pic07.jpg\" alt=\"\" /></a>\n                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>\n                    </article>\n                    <article>\n                        <a href=\"#\" class=\"image\"><img src=\"assets/images/pic08.jpg\" alt=\"\" /></a>\n                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>\n                    </article>\n                    <article>\n                        <a href=\"#\" class=\"image\"><img src=\"assets/images/pic09.jpg\" alt=\"\" /></a>\n                        <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>\n                    </article>\n                </div>\n                <ul class=\"actions\">\n                    <li><a href=\"#\" class=\"button\">More</a></li>\n                </ul>\n            </section>\n\n        <!-- Section -->\n            <section>\n                <header class=\"major\">\n                    <h2>Get in touch</h2>\n                </header>\n                <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n                <ul class=\"contact\">\n                    <li class=\"fa-envelope-o\"><a href=\"#\">information@untitled.tld</a></li>\n                    <li class=\"fa-phone\">(000) 000-0000</li>\n                    <li class=\"fa-home\">1234 Somewhere Road #8254<br />\n                    Nashville, TN 00000-0000</li>\n                </ul>\n            </section>\n\n        <!-- Footer -->\n            <footer id=\"footer\">\n                <p class=\"copyright\">&copy; Untitled. All rights reserved. Demo Images: <a href=\"https://unsplash.com\">Unsplash</a>. Design: <a href=\"https://html5up.net\">HTML5 UP</a>.</p>\n            </footer>\n\n    </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _homepage_homepage_routes_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.routes.names */ "./src/app/homepage/homepage.routes.names.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_document) {
        this._document = _document;
        this.postsLink = "./" + _homepage_homepage_routes_names__WEBPACK_IMPORTED_MODULE_3__["homepageRoutesNames"].POSTS;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadScript('assets/js/jquery.min.js')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('assets/js/browser.min.js')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('assets/js/breakpoints.min.js')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('assets/js/util.js')];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadScript('assets/js/main1.js')];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.loadScript = function (scriptUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var scriptElement = _this._document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            _this._document.body.appendChild(scriptElement);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-educator',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nguniversal/common */ "./node_modules/@nguniversal/common/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.module */ "./src/app/homepage/homepage.module.ts");
/* harmony import */ var _homepage_homepage_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./homepage/homepage.routes */ "./src/app/homepage/homepage.routes.ts");
/* harmony import */ var _http_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./http-interceptor.service */ "./src/app/http-interceptor.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'educate' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _homepage_homepage_module__WEBPACK_IMPORTED_MODULE_15__["HomepageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_homepage_homepage_routes__WEBPACK_IMPORTED_MODULE_16__["HOMEPAGE_ROUTES"]),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownModule"].forRoot({
                    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
                }),
                _nguniversal_common__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _http_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["HttpInterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!-- Banner -->\n      <section id=\"banner\">\n        <div class=\"content\">\n          <header>\n            <h1>Hi, I’m Editorial<br />\n            by HTML5 UP</h1>\n            <p>A free and fully responsive site template</p>\n          </header>\n          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>\n          <ul class=\"actions\">\n            <li><a href=\"#\" class=\"button big\">Learn More</a></li>\n          </ul>\n        </div>\n        <span class=\"image object\">\n          <img src=\"assets/images/pic10.jpg\" alt=\"\" />\n        </span>\n      </section>\n\n    <!-- Section -->\n      <section>\n        <header class=\"major\">\n          <h2>Erat lacinia</h2>\n        </header>\n        <div class=\"features\">\n          <article>\n            <span class=\"icon fa-diamond\"></span>\n            <div class=\"content\">\n              <h3>Portitor ullamcorper</h3>\n              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            </div>\n          </article>\n          <article>\n            <span class=\"icon fa-paper-plane\"></span>\n            <div class=\"content\">\n              <h3>Sapien veroeros</h3>\n              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            </div>\n          </article>\n          <article>\n            <span class=\"icon fa-rocket\"></span>\n            <div class=\"content\">\n              <h3>Quam lorem ipsum</h3>\n              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            </div>\n          </article>\n          <article>\n            <span class=\"icon fa-signal\"></span>\n            <div class=\"content\">\n              <h3>Sed magna finibus</h3>\n              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            </div>\n          </article>\n        </div>\n      </section>\n\n    <!-- Section -->\n      <section>\n        <header class=\"major\">\n          <h2>Ipsum sed dolor</h2>\n        </header>\n        <div class=\"posts\">\n          <article>\n            <a href=\"#\" class=\"image\"><img src=\"assets/images/pic01.jpg\" alt=\"\" /></a>\n            <h3>Interdum aenean</h3>\n            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            <ul class=\"actions\">\n              <li><a href=\"#\" class=\"button\">More</a></li>\n            </ul>\n          </article>\n          <article>\n            <a href=\"#\" class=\"image\"><img src=\"assets/images/pic02.jpg\" alt=\"\" /></a>\n            <h3>Nulla amet dolore</h3>\n            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            <ul class=\"actions\">\n              <li><a href=\"#\" class=\"button\">More</a></li>\n            </ul>\n          </article>\n          <article>\n            <a href=\"#\" class=\"image\"><img src=\"assets/images/pic03.jpg\" alt=\"\" /></a>\n            <h3>Tempus ullamcorper</h3>\n            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            <ul class=\"actions\">\n              <li><a href=\"#\" class=\"button\">More</a></li>\n            </ul>\n          </article>\n          <article>\n            <a href=\"#\" class=\"image\"><img src=\"assets/images/pic04.jpg\" alt=\"\" /></a>\n            <h3>Sed etiam facilis</h3>\n            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            <ul class=\"actions\">\n              <li><a href=\"#\" class=\"button\">More</a></li>\n            </ul>\n          </article>\n          <article>\n            <a href=\"#\" class=\"image\"><img src=\"assets/images/pic05.jpg\" alt=\"\" /></a>\n            <h3>Feugiat lorem aenean</h3>\n            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            <ul class=\"actions\">\n              <li><a href=\"#\" class=\"button\">More</a></li>\n            </ul>\n          </article>\n          <article>\n            <a href=\"#\" class=\"image\"><img src=\"assets/images/pic06.jpg\" alt=\"\" /></a>\n            <h3>Amet varius aliquam</h3>\n            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>\n            <ul class=\"actions\">\n              <li><a href=\"#\" class=\"button\">More</a></li>\n            </ul>\n          </article>\n        </div>\n      </section>\n\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html")
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.module.ts ***!
  \*********************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/homepage/page-not-found.component.ts");







var HomepageModule = /** @class */ (function () {
    function HomepageModule() {
    }
    HomepageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forChild()
            ],
            exports: [ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]]
        })
    ], HomepageModule);
    return HomepageModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.routes.names.ts":
/*!***************************************************!*\
  !*** ./src/app/homepage/homepage.routes.names.ts ***!
  \***************************************************/
/*! exports provided: homepageRoutesNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homepageRoutesNames", function() { return homepageRoutesNames; });
var homepageRoutesNames = {
    POSTS: 'posts', JAVA: 'java'
};


/***/ }),

/***/ "./src/app/homepage/homepage.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/homepage/homepage.routes.ts ***!
  \*********************************************/
/*! exports provided: HOMEPAGE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOMEPAGE_ROUTES", function() { return HOMEPAGE_ROUTES; });
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/homepage/page-not-found.component.ts");


var HOMEPAGE_ROUTES = [
    { path: '', component: _homepage_component__WEBPACK_IMPORTED_MODULE_0__["HomepageComponent"] },
    { path: ':id', loadChildren: 'app/categories/categories.module#CategoriesModule' },
    { path: 'page-not-found', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"] },
    { path: '**', redirectTo: 'page-not-found' }
];


/***/ }),

/***/ "./src/app/homepage/page-not-found.component.ts":
/*!******************************************************!*\
  !*** ./src/app/homepage/page-not-found.component.ts ***!
  \******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: "\n    <br />\n    <h2>Page not found !</h2>\n  "
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptor.service.ts":
/*!*********************************************!*\
  !*** ./src/app/http-interceptor.service.ts ***!
  \*********************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(platformId) {
        this.platformId = platformId;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        console.log('Platform ID: ' + this.platformId);
        console.log('Request URL: ' + req.url);
        if (req.url.includes('./')) {
            // return next.handle(req.clone({
            // url: `https://dig2logic.com/${req.url.replace('./', '')}`
            // }));
        }
        console.log('Corrected URL: ' + req.url);
        return next.handle(req);
    };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/jagyas/educate/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map