(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_character_character_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/character/character.component */ "./src/app/page/character/character.component.ts");
/* harmony import */ var _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/dashboard/dashboard.component */ "./src/app/page/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detail/:id', component: _page_character_character_component__WEBPACK_IMPORTED_MODULE_2__["CharacterDetailComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  color: #555;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.router-link-active {\r\n  color: #039be5;\r\n}\r\n.header-bar {\r\n  background-color: rgb(0,120,215);\r\n  height: 4px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbn1cclxubmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbn1cclxubmF2IGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxufVxyXG4uaGVhZGVyLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMTIwLDIxNSk7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Marvel Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-root',
            template: "\n    <h1>{{title}}</h1>\n    <div class=\"header-bar\"></div>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _core_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/endpoint/endpoint.service */ "./src/app/core/endpoint/endpoint.service.ts");
/* harmony import */ var _core_helper_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/helper/helper.service */ "./src/app/core/helper/helper.service.ts");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/util */ "./src/app/util/util.ts");
/* harmony import */ var _component_base_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/base/base.component */ "./src/app/component/base/base.component.ts");
/* harmony import */ var _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/dashboard/dashboard.component */ "./src/app/page/dashboard/dashboard.component.ts");
/* harmony import */ var _page_character_character_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/character/character.component */ "./src/app/page/character/character.component.ts");
/* harmony import */ var _engine_engine_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engine/engine.service */ "./src/app/engine/engine.service.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_base_base_component__WEBPACK_IMPORTED_MODULE_10__["BaseComponent"],
                _page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _page_character_character_component__WEBPACK_IMPORTED_MODULE_12__["CharacterDetailComponent"]
            ],
            providers: [
                _core_helper_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
                _core_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_7__["EndpointService"],
                _engine_engine_service__WEBPACK_IMPORTED_MODULE_13__["EngineService"],
                _util_util__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/base/base.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/base/base.component.ts ***!
  \**************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    BaseComponent.prototype.initData = function () {
    };
    BaseComponent.prototype.goBack = function () {
        window.history.back();
    };
    BaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: '',
        }),
        __metadata("design:paramtypes", [])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/core/endpoint/endpoint.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/endpoint/endpoint.service.ts ***!
  \***************************************************/
/*! exports provided: EndpointService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointService", function() { return EndpointService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EndpointService = /** @class */ (function () {
    function EndpointService() {
        this.DEBUG = false;
        this.BASE_PATH = 'https://gateway.marvel.com/v1/public';
        this.TS = '1';
        this.API_KEY = '258b4e0e578c679d9479aa0eb6e2f36f';
        this.HASH = '633d81b33499ac48c4729f8d78af1201';
        this.DEFAULT_PARAMETERS = { ts: this.TS, apikey: this.API_KEY, hash: this.HASH };
        // DEFAULT_PARAMETERS_STRING = `?ts=${this.TS}&apikey=${this.API_KEY}&hash=${this.HASH}`;
        this.API = {
            CHARACTERS: this.BASE_PATH + "/characters",
            COMICS: this.BASE_PATH + "/comics"
        };
    }
    EndpointService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EndpointService);
    return EndpointService;
}());



/***/ }),

/***/ "./src/app/core/helper/helper.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/helper/helper.service.ts ***!
  \***********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/util */ "./src/app/util/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelperService = /** @class */ (function () {
    function HelperService(http) {
        this.http = http;
    }
    HelperService.prototype.get = function (url, headers, params, showLoading) {
        if (showLoading === void 0) { showLoading = false; }
        // tslint:disable-next-line:no-unused-expression
        showLoading && _app_util__WEBPACK_IMPORTED_MODULE_4__["Loader"].start();
        return this.http.get(url, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return showLoading && _app_util__WEBPACK_IMPORTED_MODULE_4__["Loader"].done(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error); }));
    };
    HelperService.prototype.post = function (url, headers, params, showLoading) {
        if (showLoading === void 0) { showLoading = false; }
        // tslint:disable-next-line:no-unused-expression
        showLoading && _app_util__WEBPACK_IMPORTED_MODULE_4__["Loader"].start();
        var options = (headers) ? { headers: headers } : { headers: { 'Content-Type': 'application/json' } };
        params = params || {};
        return this.http.post(url, params, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return showLoading && _app_util__WEBPACK_IMPORTED_MODULE_4__["Loader"].done(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error); }));
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: EndpointService, HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpoint/endpoint.service */ "./src/app/core/endpoint/endpoint.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EndpointService", function() { return _endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_0__["EndpointService"]; });

/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/helper.service */ "./src/app/core/helper/helper.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return _helper_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperService"]; });





/***/ }),

/***/ "./src/app/engine/engine.service.ts":
/*!******************************************!*\
  !*** ./src/app/engine/engine.service.ts ***!
  \******************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EngineService = /** @class */ (function () {
    function EngineService(endpoint, helper) {
        this.endpoint = endpoint;
        this.helper = helper;
    }
    EngineService.prototype.getCharacters = function (request, showLoading) {
        if (showLoading === void 0) { showLoading = false; }
        var url = this.endpoint.API.CHARACTERS;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var params = this.endpoint.DEFAULT_PARAMETERS;
        if (request) {
            params = __assign({}, params, request);
        }
        return this.helper.get(url, headers, params, showLoading);
    };
    EngineService.prototype.getCharacter = function (id, showLoading) {
        if (showLoading === void 0) { showLoading = false; }
        var url = this.endpoint.API.CHARACTERS + "/" + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        return this.helper.get(url, headers, this.endpoint.DEFAULT_PARAMETERS, showLoading);
    };
    EngineService.prototype.getComicsOfCharacter = function (id, showLoading) {
        if (showLoading === void 0) { showLoading = false; }
        var url = this.endpoint.API.CHARACTERS + "/" + id + "/comics";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        return this.helper.get(url, headers, this.endpoint.DEFAULT_PARAMETERS, showLoading);
    };
    EngineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_core__WEBPACK_IMPORTED_MODULE_1__["EndpointService"], app_core__WEBPACK_IMPORTED_MODULE_1__["HelperService"]])
    ], EngineService);
    return EngineService;
}());



/***/ }),

/***/ "./src/app/page/character/character.component.css":
/*!********************************************************!*\
  !*** ./src/app/page/character/character.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  color: rgb(0,120,215);\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBRSxZQUFZO0FBQy9CO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgY29sb3I6IHJnYigwLDEyMCwyMTUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyOyBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBjb2xvcjogI2NjYztcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/page/character/character.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/character/character.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model\">\r\n    <img [src]=\"util.getImageUrl(model.thumbnail)\" [alt]=\"model.name\" width=\"400\" height=\"400\">\r\n    <h2>{{model.name}}</h2>\r\n    <p>{{model.description}}</p>\r\n</div>\r\n<ul *ngIf=\"model && model.comics\">\r\n    <li *ngFor=\"let com of model.comics\">\r\n      <h3> {{com.title}}</h3>\r\n      <img [src]=\"util.getImageUrl(com.thumbnail)\" [alt]=\"com.title\" width=\"300\" height=\"300\">\r\n      <p>{{com.description}}</p>\r\n    </li>\r\n  </ul>\r\n<button (click)=\"goBack()\">Back</button>"

/***/ }),

/***/ "./src/app/page/character/character.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/character/character.component.ts ***!
  \*******************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_engine_engine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/engine/engine.service */ "./src/app/engine/engine.service.ts");
/* harmony import */ var app_util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/util/util */ "./src/app/util/util.ts");
/* harmony import */ var _app_component_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/component/base/base.component */ "./src/app/component/base/base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharacterDetailComponent = /** @class */ (function (_super) {
    __extends(CharacterDetailComponent, _super);
    function CharacterDetailComponent(engine, route, util) {
        var _this = _super.call(this) || this;
        _this.engine = engine;
        _this.route = route;
        _this.util = util;
        return _this;
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    CharacterDetailComponent.prototype.initData = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (id !== undefined) {
                // const character = this.engine.getCharacter(id, true)
                //   .pipe(map((res) => res), catchError(e => of('Error')));
                // const comics = this.engine.getComicsOfCharacter(id, true)
                //   .pipe(map((res) => res), catchError(e => of('Error')));
                // forkJoin([character, comics]).subscribe(results => {
                //   const [character, comics] = results;
                //   if (character !== 'Error') {
                //     this.model = character.data.results[0];
                //     this.model.comics = comics.data.results;
                //   }
                //   else {
                //     console.log('The character does not exist!');
                //     //@Todo: go to page error
                //   }
                // });
                _this.engine.getCharacter(id, true)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Error'); }))
                    .subscribe(function (res) {
                    if (res !== 'Error') {
                        _this.model = res.data.results[0];
                    }
                    else {
                        console.log('The character does not exist!'); //@Todo: go to page error
                    }
                });
                _this.engine.getComicsOfCharacter(id, true)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Error'); }))
                    .subscribe(function (res) {
                    if (res !== 'Error') {
                        _this.model.comics = res.data.results;
                    }
                    else {
                        console.log('The comics of character does not exist!');
                    }
                });
            }
        });
    };
    CharacterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-hero-detail',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/page/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/page/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [app_engine_engine_service__WEBPACK_IMPORTED_MODULE_4__["EngineService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], app_util_util__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}(_app_component_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));



/***/ }),

/***/ "./src/app/page/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\r\n  float: left;\r\n}\r\n*, *:after, *:before {\r\n\tbox-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\n[class*='col-'] {\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\n.grid {\r\n  margin: 0;\r\n  display: inline-block;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n\tcolor: #eee;\r\n\tmax-height: 120px;\r\n\tmin-width: 120px;\r\n\tbackground-color: #607D8B;\r\n  background-color: rgb(0,120,215);\r\n\tborder-radius: 2px;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  background-color: #CCC;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n.list-characters .name{\r\n  width: 200px;\r\n  padding: 10px;\r\n}\r\n.list-characters .description{\r\n  width: 500px;\r\n  padding: 10px;\r\n}\r\n.list-characters .thumbnail{\r\n  width: 50px;\r\n}\r\n.list-characters .thumbnail:hover{\r\n  cursor: pointer;\r\n}\r\ntable, td, th, tr {\r\n  border: 1px solid black;\r\n  border-collapse: collapse;\r\n}\r\n@media (max-width: 600px) {\r\n\t.module {\r\n\t  font-size: 10px;\r\n\t  max-height: 75px;\r\n  }\r\n  .col-1-4 {\r\n    width: 50%;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n\t.grid {\r\n\t  margin: 0;\r\n\t}\r\n\t.module {\r\n\t  min-width: 60px;\r\n\t}\r\n}\r\n.zoom {\r\n  transition: -webkit-transform .2s;\r\n  transition: transform .2s;\r\n  transition: transform .2s, -webkit-transform .2s; /* Animation */\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 0 auto;\r\n  border: 1px solid black;\r\n}\r\n.zoom:hover {\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtDQUdDLHNCQUFzQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCLEVBQUUsZ0JBQWdCO0FBQ3RDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix5QkFBeUI7RUFDeEIsZ0NBQWdDO0NBQ2pDLGtCQUFrQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUNBO0NBQ0M7R0FDRSxlQUFlO0dBQ2YsZ0JBQWdCO0VBQ2pCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUNBO0NBQ0M7R0FDRSxTQUFTO0NBQ1g7Q0FDQTtHQUNFLGVBQWU7Q0FDakI7QUFDRDtBQUVBO0VBQ0UsaUNBQXlCO0VBQXpCLHlCQUF5QjtFQUF6QixnREFBeUIsRUFBRSxjQUFjO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQixFQUFFLHFGQUFxRjtBQUM5RyIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj0nY29sLSddIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XHJcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmgzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuLmdyaWQge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNvbC0xLTQge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuLm1vZHVsZSB7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICNlZWU7XHJcblx0bWF4LWhlaWdodDogMTIwcHg7XHJcblx0bWluLXdpZHRoOiAxMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDEyMCwyMTUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5oNCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tb2R1bGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbn1cclxuLmdyaWQtcGFkIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuLmdyaWQtcGFkID4gW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4ubGlzdC1jaGFyYWN0ZXJzIC5uYW1le1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5saXN0LWNoYXJhY3RlcnMgLmRlc2NyaXB0aW9ue1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5saXN0LWNoYXJhY3RlcnMgLnRodW1ibmFpbHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4ubGlzdC1jaGFyYWN0ZXJzIC50aHVtYm5haWw6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnRhYmxlLCB0ZCwgdGgsIHRyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdC5tb2R1bGUge1xyXG5cdCAgZm9udC1zaXplOiAxMHB4O1xyXG5cdCAgbWF4LWhlaWdodDogNzVweDtcclxuICB9XHJcbiAgLmNvbC0xLTQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdC5ncmlkIHtcclxuXHQgIG1hcmdpbjogMDtcclxuXHR9XHJcblx0Lm1vZHVsZSB7XHJcblx0ICBtaW4td2lkdGg6IDYwcHg7XHJcblx0fVxyXG59XHJcblxyXG4uem9vbSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yczsgLyogQW5pbWF0aW9uICovXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uem9vbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAvKiAoMTUwJSB6b29tIC0gTm90ZTogaWYgdGhlIHpvb20gaXMgdG9vIGxhcmdlLCBpdCB3aWxsIGdvIG91dHNpZGUgb2YgdGhlIHZpZXdwb3J0KSAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"model.length>0\" infinite-scroll (scrolled)=\"onScrollDown()\">\r\n  <h3>All Marvels</h3>\r\n  <table class=\"list-characters\">\r\n    <tr>\r\n      <th>Name</th>\r\n      <th colspan=\"2\">Description</th>\r\n    </tr>\r\n    <!-- <tr *ngFor=\"let char of model | paginate: {itemsPerPage: limitItems, currentPage: p}\"> -->\r\n    <tr *ngFor=\"let char of model\">\r\n      <td class=\"name\">{{char.name}}</td>\r\n      <td class=\"description\">{{getLimitedString(char.description)}}</td>\r\n      <td class=\"thumbnail\"> <img class=\"zoom\" [src]=\"util.getImageUrl(char.thumbnail)\" [alt]=\"char.name\"\r\n          (click)=\"gotoDetail(char)\">\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <!-- <pagination-controls (pageChange)=\"p=$event;\" responsive=\"true\" maxSize=\"9\" previousLabel=\"Older\" nextLabel=\"Newer\" autoHide=\"true\"></pagination-controls> -->\r\n</div>"

/***/ }),

/***/ "./src/app/page/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/component/base/base.component */ "./src/app/component/base/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/util */ "./src/app/util/index.ts");
/* harmony import */ var app_engine_engine_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/engine/engine.service */ "./src/app/engine/engine.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(router, engine, util) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.engine = engine;
        _this.util = util;
        _this.model = [];
        _this.limitItems = 10;
        _this.total = 100;
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    DashboardComponent.prototype.initData = function () {
        this.getDataLazyLoad();
    };
    DashboardComponent.prototype.onScrollDown = function () {
        this.getDataLazyLoad();
    };
    DashboardComponent.prototype.getDataLazyLoad = function () {
        var _this = this;
        var len = this.model.length;
        if (len < this.total) {
            var request = { limit: 20, offset: len };
            this.engine.getCharacters(request, true)
                .subscribe(function (res) {
                if (res) {
                    _this.model = _this.model.concat(res.data.results);
                    _this.total = res.data.total;
                }
            }, function (error) { return console.log; });
        }
    };
    DashboardComponent.prototype.gotoDetail = function (c) {
        var link = ['/detail', c.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.getLimitedString = function (str, num) {
        if (num === void 0) { num = 100; }
        return str.length > num ? str.substring(0, num - 1) + '...' : str;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/page/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/page/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_engine_engine_service__WEBPACK_IMPORTED_MODULE_4__["EngineService"], _app_util__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], DashboardComponent);
    return DashboardComponent;
}(_app_component_base_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/util/index.ts":
/*!*******************************!*\
  !*** ./src/app/util/index.ts ***!
  \*******************************/
/*! exports provided: UtilityService, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./src/app/util/loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/app/util/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return _util__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]; });





/***/ }),

/***/ "./src/app/util/loader.ts":
/*!********************************!*\
  !*** ./src/app/util/loader.ts ***!
  \********************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
var loaderElm = null;
var isLoading = false;
var Loader = {
    start: function () {
        if (isLoading)
            return;
        isLoading = true;
        var d = document;
        var e = d.createElement('div');
        e.innerHTML = "<div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>";
        loaderElm = e.firstChild;
        d.body.appendChild(loaderElm);
    },
    done: function () {
        if (!isLoading)
            return;
        isLoading = false;
        if (loaderElm)
            loaderElm.parentElement.removeChild(loaderElm);
    }
};


/***/ }),

/***/ "./src/app/util/util.ts":
/*!******************************!*\
  !*** ./src/app/util/util.ts ***!
  \******************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    UtilityService.prototype.getImageUrl = function (image) {
        var path = image.path, extension = image.extension;
        return path + "." + extension;
    };
    UtilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilityService);
    return UtilityService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\angular-tour-of-heroes\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map