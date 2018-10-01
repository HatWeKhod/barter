webpackJsonp(["login.module"],{

/***/ "./src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{'direction' | translate}}\">\r\n  <section class=\"login-block\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" (click)=\"useLanguage()\">{{'BUTTON_LANG' | translate}}</a>\r\n    <div class=\"container login-box\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 login-sec\">\r\n          <img class=\"img-fluid img-center\" src=\"assets/images/logo.png\">\r\n          <h2>{{'WHAT_IS_BARTER' | translate}}</h2>\r\n          <p>{{'BARTER_INFO' | translate}}</p>\r\n          <h2>{{'TRY_IT_OUT' | translate}}</h2>\r\n          <ul>\r\n            <li>1. {{'LOGIN_WITH_FB' | translate}}</li>\r\n            <li>2. {{'BROWSE_ITEMS' | translate}}</li>\r\n            <li>3. {{'FIND_ITEM' | translate}}</li>\r\n          </ul>\r\n          <h2>&nbsp;</h2>\r\n          <a type=\"button\" class=\"btn btn-primary facebook-login\" href='/auth/facebook'>\r\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> {{'LOGIN_FB' | translate}}</a>\r\n        </div>\r\n        <div class=\"col-md-8 banner-sec\">\r\n          <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\" role=\"listbox\">\r\n              <div class=\"carousel-item active\">\r\n                <img class=\"d-block img-fluid\" src=\"assets/images/login.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <div class=\"banner-text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <img class=\"d-block img-fluid\" src=\"assets/images/login-a.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <div class=\"banner-text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <img class=\"d-block img-fluid\" src=\"assets/images/login-b.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <div class=\"banner-text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(translate, router, loginService) {
        this.translate = translate;
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.translate.use(localStorage.getItem('lang_key'));
    };
    LoginComponent.prototype.useLanguage = function () {
        if (localStorage.getItem('lang_key') == "en") {
            localStorage.setItem('lang_key', 'ar');
            this.translate.use(localStorage.getItem('lang_key'));
        }
        else if (localStorage.getItem('lang_key') == "ar") {
            localStorage.setItem('lang_key', 'en');
            this.translate.use(localStorage.getItem('lang_key'));
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// core



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map