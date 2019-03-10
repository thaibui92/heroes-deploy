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
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_character_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/character/character.component */ "./src/app/component/character/character.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'detail/:id', component: _component_character_character_component__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailComponent"] },
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

module.exports = "h1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  color: #555;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.router-link-active {\r\n  color: #039be5;\r\n}\r\n.header-bar {\r\n  background-color: rgb(0,120,215);\r\n  height: 4px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbn1cclxubmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbn1cclxubmF2IGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxufVxyXG4uaGVhZGVyLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMTIwLDIxNSk7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _core_engine_engine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/engine/engine.service */ "./src/app/core/engine/engine.service.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _core_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/endpoint/endpoint.service */ "./src/app/core/endpoint/endpoint.service.ts");
/* harmony import */ var _core_helper_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/helper/helper.service */ "./src/app/core/helper/helper.service.ts");
/* harmony import */ var _component_character_character_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/character/character.component */ "./src/app/component/character/character.component.ts");
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
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _component_character_character_component__WEBPACK_IMPORTED_MODULE_11__["CharacterDetailComponent"]
            ],
            providers: [
                _core_helper_helper_service__WEBPACK_IMPORTED_MODULE_10__["HelperService"],
                _core_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_9__["EndpointService"],
                _core_engine_engine_service__WEBPACK_IMPORTED_MODULE_7__["EngineService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/character/character.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/character/character.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  display: inline-block;\r\n  width: 3em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  color: rgb(0,120,215);\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFFLFlBQVk7QUFDL0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogM2VtO1xyXG4gIG1hcmdpbjogLjVlbSAwO1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGNvbG9yOiByZ2IoMCwxMjAsMjE1KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pbnB1dCB7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgY3Vyc29yOiBoYW5kO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/character/character.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/character/character.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"character\">\r\n  <div>\r\n    <img [src]=\"getImageUrl(character.thumbnail)\" [alt]=\"character.name\" width=\"400\" height=\"400\">\r\n    <h2>{{character.name}}</h2>\r\n    <p>{{character.description}}</p>\r\n  </div>\r\n</div>\r\n<ul *ngIf=\"comics\">\r\n  <li *ngFor=\"let com of comics\">\r\n    <h3> {{com.title}}</h3>\r\n    <img [src]=\"getImageUrl(com.thumbnail)\" [alt]=\"com.name\" width=\"300\" height=\"300\">\r\n    <p>{{com.description}}</p>\r\n  </li>\r\n</ul>\r\n<button (click)=\"goBack()\">Back</button>"

/***/ }),

/***/ "./src/app/component/character/character.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/character/character.component.ts ***!
  \************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var _model_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../model/character */ "./src/app/model/character.ts");
/* harmony import */ var _core_engine_engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/engine/engine.service */ "./src/app/core/engine/engine.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CharacterDetailComponent = /** @class */ (function () {
    function CharacterDetailComponent(engine, route) {
        this.engine = engine;
        this.route = route;
    }
    CharacterDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id_1 = params['id'];
                _this.engine.getCharacter(id_1).subscribe(function (res) {
                    if (res) {
                        _this.character = res.data.results[0];
                        _this.engine.getComicsOfCharacter(id_1).subscribe(function (res) {
                            if (res) {
                                _this.comics = res.data.results;
                            }
                        });
                    }
                });
            }
            else {
                _this.character = new _model_character__WEBPACK_IMPORTED_MODULE_0__["Character"]();
            }
        });
    };
    CharacterDetailComponent.prototype.getImageUrl = function (image) {
        var path = image.path, extension = image.extension;
        return path + "." + extension;
    };
    CharacterDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    CharacterDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'my-hero-detail',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/component/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/component/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [_core_engine_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CharacterDetailComponent);
    return CharacterDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\r\n  float: left;\r\n}\r\n*, *:after, *:before {\r\n\tbox-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\n[class*='col-'] {\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\n.grid {\r\n  margin: 0;\r\n  display: inline-block;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n\tcolor: #eee;\r\n\tmax-height: 120px;\r\n\tmin-width: 120px;\r\n\tbackground-color: #607D8B;\r\n  background-color: rgb(0,120,215);\r\n\tborder-radius: 2px;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  background-color: #CCC;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n.list-characters .name{\r\n  width: 200px;\r\n  padding: 10px;\r\n}\r\n.list-characters .description{\r\n  width: 500px;\r\n  padding: 10px;\r\n}\r\n.list-characters .thumbnail{\r\n  width: 50px;\r\n}\r\n.list-characters .thumbnail:hover{\r\n  cursor: pointer;\r\n}\r\ntable, td, th, tr {\r\n  border: 1px solid black;\r\n  border-collapse: collapse;\r\n}\r\n@media (max-width: 600px) {\r\n\t.module {\r\n\t  font-size: 10px;\r\n\t  max-height: 75px;\r\n  }\r\n  .col-1-4 {\r\n    width: 50%;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n\t.grid {\r\n\t  margin: 0;\r\n\t}\r\n\t.module {\r\n\t  min-width: 60px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0NBR0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0IsRUFBRSxnQkFBZ0I7QUFDdEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztFQUNULHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtFQUN4QixnQ0FBZ0M7Q0FDakMsa0JBQWtCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCO0FBQ0E7Q0FDQztHQUNFLGVBQWU7R0FDZixnQkFBZ0I7RUFDakI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7Q0FDQztHQUNFLFNBQVM7Q0FDWDtDQUNBO0dBQ0UsZUFBZTtDQUNqQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuKiwgKjphZnRlciwgKjpiZWZvcmUge1xyXG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbi5ncmlkIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jb2wtMS00IHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5tb2R1bGUge1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjZWVlO1xyXG5cdG1heC1oZWlnaHQ6IDEyMHB4O1xyXG5cdG1pbi13aWR0aDogMTIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjAsMjE1KTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuaDQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubW9kdWxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjNjA3ZDhiO1xyXG59XHJcbi5ncmlkLXBhZCB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmxpc3QtY2hhcmFjdGVycyAubmFtZXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubGlzdC1jaGFyYWN0ZXJzIC5kZXNjcmlwdGlvbntcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubGlzdC1jaGFyYWN0ZXJzIC50aHVtYm5haWx7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLmxpc3QtY2hhcmFjdGVycyAudGh1bWJuYWlsOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG50YWJsZSwgdGQsIHRoLCB0ciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHQubW9kdWxlIHtcclxuXHQgIGZvbnQtc2l6ZTogMTBweDtcclxuXHQgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG4gIC5jb2wtMS00IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHQuZ3JpZCB7XHJcblx0ICBtYXJnaW46IDA7XHJcblx0fVxyXG5cdC5tb2R1bGUge1xyXG5cdCAgbWluLXdpZHRoOiA2MHB4O1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"characters.length>0\">\r\n  <h3>All Marvels</h3>\r\n  <table class=\"list-characters\">\r\n    <tr>\r\n      <th>Name</th>\r\n      <th colspan=\"2\">Description</th>\r\n    </tr>\r\n    <tr *ngFor=\"let char of characters | paginate: {itemsPerPage:10, currentPage: p}\">\r\n      <td class=\"name\">{{char.name}}</td>\r\n      <td class=\"description\">{{getLimitedString(char.description)}}</td>\r\n      <td class=\"thumbnail\"> <img [src]=\"getImageUrl(char.thumbnail)\" [alt]=\"char.name\" width=\"50\" height=\"50\" (click)=\"gotoDetail(char)\">\r\n      </td>\r\n    </tr>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"p =$event\"></pagination-controls>\r\n</ng-container>\r\n<div class=\"error\" *ngIf=\"error\">{{error}}</div>"

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_core_engine_engine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/engine/engine.service */ "./src/app/core/engine/engine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, engine) {
        this.router = router;
        this.engine = engine;
        this.characters = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var request = { limit: 100 };
        this.engine.getCharacters(request)
            .subscribe(function (res) {
            if (res) {
                _this.characters = res.data.results;
            }
        }, function (error) { return (_this.error = error); });
    };
    DashboardComponent.prototype.gotoDetail = function (c) {
        var link = ['/detail', c.id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.getImageUrl = function (image) {
        var path = image.path, extension = image.extension;
        return path + "." + extension;
    };
    DashboardComponent.prototype.getLimitedString = function (str, num) {
        if (num === void 0) { num = 100; }
        return str.length > num ? str.substring(0, num - 1) + '...' : str;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_core_engine_engine_service__WEBPACK_IMPORTED_MODULE_2__["EngineService"]])
    ], DashboardComponent);
    return DashboardComponent;
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

/***/ "./src/app/core/engine/engine.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/engine/engine.service.ts ***!
  \***********************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endpoint/endpoint.service */ "./src/app/core/endpoint/endpoint.service.ts");
/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper/helper.service */ "./src/app/core/helper/helper.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    EngineService.prototype.getCharacters = function (request) {
        var url = this.endpoint.API.CHARACTERS;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        var params = this.endpoint.DEFAULT_PARAMETERS;
        if (request) {
            params = __assign({}, params, request);
        }
        return this.helper.get(url, headers, params);
    };
    EngineService.prototype.getCharacter = function (id) {
        var url = this.endpoint.API.CHARACTERS + "/" + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.helper.get(url, headers, this.endpoint.DEFAULT_PARAMETERS);
    };
    EngineService.prototype.getComicsOfCharacter = function (id) {
        var url = this.endpoint.API.CHARACTERS + "/" + id + "/comics";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        return this.helper.get(url, headers, this.endpoint.DEFAULT_PARAMETERS);
    };
    EngineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_endpoint_endpoint_service__WEBPACK_IMPORTED_MODULE_1__["EndpointService"], _helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]])
    ], EngineService);
    return EngineService;
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

/***/ "./src/app/model/character.ts":
/*!************************************!*\
  !*** ./src/app/model/character.ts ***!
  \************************************/
/*! exports provided: Character, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());

var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/util/index.ts":
/*!*******************************!*\
  !*** ./src/app/util/index.ts ***!
  \*******************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./src/app/util/loader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _loader__WEBPACK_IMPORTED_MODULE_0__["Loader"]; });




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
        e.innerHTML = '<div class="preloader-ovl"><div class="preloader-modal"><div class="preloader"></div></div></div>';
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

module.exports = __webpack_require__(/*! C:\Thai\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map