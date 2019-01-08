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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{'direction' | translate}}\">\r\n  <section class=\"login-block\">\r\n    <a class=\"nav-link\" [routerLink]=\"['.']\" (click)=\"useLanguage()\">{{'BUTTON_LANG' | translate}}</a>\r\n    <div class=\"container login-box\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 login-sec\">\r\n          <img class=\"img-fluid img-center\" src=\"assets/images/logo.png\">\r\n          <h2>{{'WHAT_IS_BARTER' | translate}}</h2>\r\n          <p>{{'BARTER_INFO' | translate}}</p>\r\n          <h2>{{'TRY_IT_OUT' | translate}}</h2>\r\n          <ul>\r\n            <li>{{'LOGIN_WITH_FB' | translate}}</li>\r\n            <li>{{'BROWSE_ITEMS' | translate}}</li>\r\n            <li>{{'FIND_ITEM' | translate}}</li>\r\n          </ul>\r\n          <div class='custom_login'>\r\n\t\t  \t  <button [routerLink]=\"['/user-register']\" class='btn btn-primary'>Register</button>\r\n\t\t  \t  <button [routerLink]=\"['/user-login']\" class='btn btn-primary'>Login</button>\r\n\t\t  </div>\r\n          <a type=\"button\" class=\"btn btn-primary facebook-login\" href='/auth/facebook'>\r\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> {{'LOGIN_FB' | translate}}</a>\r\n        </div>\r\n        <div class=\"col-md-8 banner-sec\">\r\n          <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n            <div class=\"carousel-inner\" role=\"listbox\">\r\n              <div class=\"carousel-item active\">\r\n                <img class=\"d-block img-fluid\" src=\"assets/images/login.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <div class=\"banner-text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <img class=\"d-block img-fluid\" src=\"assets/images/login-a.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <div class=\"banner-text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"carousel-item\">\r\n                <img class=\"d-block img-fluid\" src=\"assets/images/login-b.jpg\" alt=\"First slide\">\r\n                <div class=\"carousel-caption d-none d-md-block\">\r\n                  <div class=\"banner-text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row log_area_sec bg-dark\">\r\n\r\n        <div class=\"col-md-12\">\r\n          <ul>\r\n            <li> <a target=\"_blank\" href=\"https://www.facebook.com/hatwekhodbarter/\"><i class=\"fa fa-facebook\"\r\n                  aria-hidden=\"true\"></i></a></li>\r\n            <li> <a target=\"_blank\" href=\"https://twitter.com/hatwekhod\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n            <li> <a target=\"_blank\" href=\"https://www.instagram.com/hatwekhod/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n            <li> <a target=\"_blank\" href=\"https://www.pinterest.com/hatwekhod/\"><i class=\"fa fa-pinterest-square\"\r\n                  aria-hidden=\"true\"></i></a></li>\r\n            <li> <a target=\"_blank\" href=\"https://plus.google.com/u/0/107237992379654410802\"><i class=\"fa fa-google\"\r\n                  aria-hidden=\"true\"></i></a></li>\r\n          </ul>\r\n          <p class=\"m-0 text-white\">{{'COPYRIGHT' | translate}} &copy; HatWeKhod</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"fork-me_container\">\r\n      <div class=\"fork-me__header\">\r\n        <span class=\"fork-me__text\">\r\n          <a target=\"_blank\" href=\"https://github.com/HatWeKhod/barter\">Built at GitHub</a>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".login-block {\n  position: relative; }\n\n.fork-me_container {\n  position: absolute;\n  width: 350px;\n  height: 350px;\n  right: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden; }\n\n.fork-me__header {\n  position: absolute;\n  border: 1px solid blue;\n  right: -31.75%;\n  top: 15%;\n  width: 100%;\n  background-color: #444;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border: 1px dashed white;\n  border-left: none;\n  border-right: none;\n  -webkit-box-shadow: 0px 5px 0px 0px black, 0px -5px 0px 0px black;\n          box-shadow: 0px 5px 0px 0px black, 0px -5px 0px 0px black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.fork-me__text {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  font-size: 1em; }\n\n.fork-me__text a {\n    color: white;\n    text-decoration: none; }\n\n.right_side_view .fork-me_container {\n  right: inherit;\n  left: 0; }\n\n.right_side_view .fork-me__header {\n  right: inherit;\n  left: -31.75%;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.log_area_sec {\n  margin-top: 30px;\n  border-radius: 10px;\n  padding: 5px;\n  text-align: center; }\n\n.log_area_sec ul {\n    list-style: none;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 20px; }\n\n.log_area_sec ul li {\n      display: inline-block;\n      vertical-align: middle;\n      margin: 0 5px; }\n\n.log_area_sec ul li a {\n        color: #fff; }\n\n.log_area_sec ul li a:hover {\n          color: #3498db; }\n\n.log_area_sec p {\n    display: inline-block;\n    vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_seo_service__ = __webpack_require__("./src/app/core/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_modal_form_modal_component__ = __webpack_require__("./src/app/form-modal/form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_modal_form_login_modal_component__ = __webpack_require__("./src/app/form-modal/form-login-modal.component.ts");
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
    function LoginComponent(translate, router, loginService, _seoService, activatedRoute, modalService) {
        this.translate = translate;
        this.router = router;
        this.loginService = loginService;
        this._seoService = _seoService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.use(localStorage.getItem('lang_key'));
        this.activatedRoute.data.subscribe(function (data) {
            _this._seoService.updateTitle(data['title']);
            _this._seoService.updateDescription(data['description']);
            _this._seoService.updateKeywords(data['keywords']);
        });
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
    LoginComponent.prototype.openFormModal = function (page) {
        if (page == 'register') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__form_modal_form_modal_component__["a" /* FormModalComponent */]);
            modalRef.result.then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });
        }
        else if (page == 'login') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__form_modal_form_login_modal_component__["a" /* FormLoginModalComponent */]);
            modalRef.result.then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.canDeactivate = function () {
        if (!localStorage.getItem('isLoggedin')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_seo_service__["a" /* SeoService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
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