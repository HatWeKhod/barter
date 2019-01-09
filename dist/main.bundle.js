webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./barter-system-egypt/barter-system-egypt.module": [
		"./src/app/barter-system-egypt/barter-system-egypt.module.ts",
		"barter-system-egypt.module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"layout.module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_guard_auth_guard__ = __webpack_require__("./src/app/core/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_guard_candeativate_guard__ = __webpack_require__("./src/app/core/guard/candeativate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_user_login_user_login_component__ = __webpack_require__("./src/app/layout/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_user_register_user_register_component__ = __webpack_require__("./src/app/layout/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/layout/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'user-login', component: __WEBPACK_IMPORTED_MODULE_4__layout_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'user-register', component: __WEBPACK_IMPORTED_MODULE_5__layout_user_register_user_register_component__["a" /* UserRegisterComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_6__layout_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_guard_candeativate_guard__["a" /* CandeativateGuard */]],
        data: {
            title: 'Bartering Online, Barter your items, goods and services - Hatwekhod.net',
            description: 'Bartering online in egypt and venezuela is the most innovative solution to become better at the art of survival.',
            keywords: 'bartering online in egypt, bartering onlinr in venezuela'
        }
    },
    {
        path: 'barter-system-egypt', loadChildren: './barter-system-egypt/barter-system-egypt.module#BarterSystemEgyptModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_guard_candeativate_guard__["a" /* CandeativateGuard */]],
        data: {
            title: 'Barter System in Egypt - Best Places to Trade Stuff Online',
            description: 'Barter system in egypt is back to improve your life and make it better than before. Visit the hatwekhod.net community for amazing bartering experience and more.',
            keywords: 'barter system in egypt,  bartering system in egypt, barter service in egypt'
        }
    },
    {
        path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_guard_auth_guard__["a" /* AuthGuard */]],
        data: {
            title: 'Bartering Online, Barter your items, goods and services - Hatwekhod.net',
            description: 'Bartering online in egypt and venezuela is the most innovative solution to become better at the art of survival.',
            keywords: 'bartering online in egypt, bartering onlinr in venezuela'
        }
    }
    // { path: 'barter-trade-venezuela', loadChildren: './barter-trade-venezuela/barter-trade-venezuela.module#BarterTradeVenezuelaModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// {
//   path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard],
//   data: {
//     title: 'Bartering Online, Barter your items, goods and services - Hatwekhod.net',
//     description: 'Bartering online in egypt and venezuela is the most innovative solution to become better at the art of survival.',
//     keywords: 'bartering online in egypt, bartering onlinr in venezuela'
//   }
// },
// {
//   path: 'barter-system-egypt', loadChildren: './barter-system-egypt/barter-system-egypt.module#BarterSystemEgyptModule',
//   data: {
//     title: 'Barter System in Egypt - Best Places to Trade Stuff Online',
//     description: 'Barter system in egypt is back to improve your life and make it better than before. Visit the hatwekhod.net community for amazing bartering experience and more.',
//     keywords: 'barter system in egypt,  bartering system in egypt, barter service in egypt'
//   }
// },


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_yandex_metrika__ = __webpack_require__("./node_modules/ng-yandex-metrika/ng-yandex-metrika.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_modal_form_modal_component__ = __webpack_require__("./src/app/form-modal/form-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, metrika, location, modalService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.metrika = metrika;
        this.location = location;
        this.modalService = modalService;
        this.title = 'app';
        translate.setDefaultLang('en');
        if (localStorage.getItem('lang_key') == "en") {
            localStorage.setItem('lang_key', 'en');
        }
        else if (localStorage.getItem('lang_key') == "ar") {
            localStorage.setItem('lang_key', 'ar');
        }
        else {
            localStorage.setItem('lang_key', 'en');
        }
        var prevPath = this.location.path();
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
                var newPath = _this.location.path();
                _this.metrika.hit(newPath, {
                    referer: prevPath,
                });
                prevPath = newPath;
            }
        });
    }
    AppComponent.prototype.openFormModal = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__form_modal_form_modal_component__["a" /* FormModalComponent */]);
        modalRef.result.then(function (result) {
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng_yandex_metrika__["a" /* Metrika */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_modal_form_modal_component__ = __webpack_require__("./src/app/form-modal/form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_modal_form_login_modal_component__ = __webpack_require__("./src/app/form-modal/form-login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_modal_form_forgot_pass_modal_component__ = __webpack_require__("./src/app/form-modal/form-forgot-pass-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_user_login_user_login_component__ = __webpack_require__("./src/app/layout/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_user_register_user_register_component__ = __webpack_require__("./src/app/layout/user-register/user-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_forgot_password_forgot_password_component__ = __webpack_require__("./src/app/layout/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// core








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__form_modal_form_modal_component__["a" /* FormModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__form_modal_form_login_modal_component__["a" /* FormLoginModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__form_modal_form_forgot_pass_modal_component__["a" /* FormForgotPassModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__layout_user_login_user_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_user_register_user_register_component__["a" /* UserRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__form_modal_form_modal_component__["a" /* FormModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__form_modal_form_login_modal_component__["a" /* FormLoginModalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__form_modal_form_forgot_pass_modal_component__["a" /* FormForgotPassModalComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/conversation-rating/conversation-rating.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ 'RATE_EXPERIENCE' | translate }} {{userNameRatingPopup}}</h2>\r\n<a class=\"close\" (click)=\"close()\">×</a>\r\n<mat-dialog-content class=\"{{'direction' | translate}} rating_sec\">\r\n  <ngb-rating [(rate)]=\"ratingValue\" [readonly]=\"false\" max=\"5\" (rateChange)=\"rate()\"></ngb-rating>\r\n  <p>{{ 'YOUR_RATING_VALUE' | translate }}{{ratingValue}} / 5</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions class=\"{{'direction' | translate}} rating_sec\">\r\n  <button class=\"round-g-btn\" (click)=\"onSubmit()\">{{ 'SEND' | translate }}</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/core/components/conversation-rating/conversation-rating.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/conversation-rating/conversation-rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/core/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ConversationRatingComponent = /** @class */ (function () {
    function ConversationRatingComponent(dialogRef, data, formBuilder, _sanitizer, messageService, postService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this._sanitizer = _sanitizer;
        this.messageService = messageService;
        this.postService = postService;
    }
    ConversationRatingComponent.prototype.ngOnInit = function () {
        this.conversation = this.data.conversation;
        this.post = this.data.post;
        this.fbId = this.data.fbId;
        this.user_name = this.data.user_name;
        console.log(this.conversation);
        console.log(this.post);
        this.userNameRatingPopup = this.post.name;
        if (this.post.fbId == this.fbId) {
            this.userNameRatingPopup = this.conversation.requestingUser.name;
        }
        this.getRatingValue(this.post);
    };
    ConversationRatingComponent.prototype.rate = function () {
        console.log(this.ratingValue);
    };
    ConversationRatingComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ConversationRatingComponent.prototype.getRatingValue = function (post) {
        if (post.fbId == this.fbId) {
            this.ratingValue = post.requester_barter_rating;
        }
        else {
            for (var k = 0; k < post.conversations.length; k++) {
                var conversation = post.conversations[k];
                if (conversation.requestingUser.fbId.toString() === this.fbId) {
                    this.ratingValue = post.poster_barter_rating;
                }
            }
        }
    };
    ConversationRatingComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            _id: this.conversation._id,
            from: this.user_name,
            rating_from_fbId: this.fbId,
            post_id: this.post._id,
            post_requesting_user_fbId: this.conversation.requestingUser.fbId,
            poster_fbId: this.post.fbId,
            ratingValue: this.ratingValue
        };
        this.messageService.ratingConversation(data).subscribe(function (res) {
            _this.dialogRef.close(true);
            console.log(res);
        }, function (error) {
            _this.dialogRef.close(true);
            console.log(error);
        });
    };
    ConversationRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversation-rating',
            template: __webpack_require__("./src/app/core/components/conversation-rating/conversation-rating.component.html"),
            styles: [__webpack_require__("./src/app/core/components/conversation-rating/conversation-rating.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_post_service__["a" /* PostService */]])
    ], ConversationRatingComponent);
    return ConversationRatingComponent;
}());



/***/ }),

/***/ "./src/app/core/components/conversation/conversation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup-model-barter\">\r\n    <a class=\"close\" (click)=\"close()\">×</a>\r\n    <mat-dialog-content class=\"{{'direction' | translate}}\">\r\n        <form class=\"conversation_form\" [formGroup]=\"form\" novalidate>\r\n            <p>\r\n                <span class='underline'>{{ 'TO' | translate }}</span>: {{info_data.name}}</p>\r\n            <p>\r\n                <span class='underline'>{{ 'ITEM_NAME' | translate }}</span>: {{info_data.itemName}}</p>\r\n            <div class=\"form-group\">\r\n                <label>{{ 'RETURN_ITEM' | translate }}</label>\r\n                <ng-select class=\"form-control over-lap-form\" placeholder=\"{{ 'SEARCH_YOUR_POSTS' | translate }}\" [clearable]=\"true\" name=\"post\" formControlName=\"post\" [ngClass]=\"displayFieldCss('post')\">\r\n                    <ng-option *ngFor=\"let item of items\" [value]=\"item._id\">{{item.itemName}}</ng-option>\r\n                </ng-select>\r\n                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('post')\">\r\n                    select post\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>{{ 'MESSAGE' | translate }}</label>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"{{ 'WHAT_DID_YOU_WANT_TO_SAY' | translate }}\" formControlName=\"message\" [ngClass]=\"displayFieldCss('message')\">\r\n                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('message')\">\r\n                    please enter message\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n        <button class=\"btn btn-warning\" (click)=\"onSubmit()\">{{ 'SEND_MESSAGE' | translate }}</button>\r\n    </mat-dialog-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/core/components/conversation/conversation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/conversation/conversation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/core/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ConversationComponent = /** @class */ (function () {
    function ConversationComponent(dialogRef, data, formBuilder, _sanitizer, messageService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this._sanitizer = _sanitizer;
        this.messageService = messageService;
        this.items = [];
    }
    ConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.data);
        this.info_data = this.data.info;
        this.items = this.data.posts;
        this.fbId = this.data.fbId;
        this.items = this.items.filter(function (x) { return x.fbId == _this.fbId; });
        console.log(this.info_data);
        console.log(this.items);
        this.form = this.formBuilder.group({
            post: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required]
        });
    };
    ConversationComponent.prototype.getImage = function (image) {
        return this._sanitizer.bypassSecurityTrustUrl(image);
    };
    ConversationComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ConversationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            var data = {
                requestingUser: {
                    fbId: this.fbId,
                    name: this.info_data.name,
                    return_post_id: this.form.value.post
                },
                message: this.form.value.message,
                from: this.info_data.name,
                _id: this.info_data._id
            };
            console.log(data);
            this.messageService.sendNewConversation(data).subscribe(function (res) {
                console.log(res);
                _this.dialogRef.close(true);
            }, function (error) {
                _this.dialogRef.close(true);
                console.log(error);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    ConversationComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    ConversationComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    ConversationComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    ConversationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-conversation',
            template: __webpack_require__("./src/app/core/components/conversation/conversation.component.html"),
            styles: [__webpack_require__("./src/app/core/components/conversation/conversation.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"py-2 bg-dark\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 text-right\">\r\n        <ul>\r\n          <li> <a target=\"_blank\" href=\"https://www.facebook.com/hatwekhodbarter/\"><i class=\"fa fa-facebook\"\r\n                aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://twitter.com/hatwekhod\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://www.instagram.com/hatwekhod/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://www.pinterest.com/hatwekhod/\"><i class=\"fa fa-pinterest-square\"\r\n                aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://plus.google.com/u/0/107237992379654410802\"><i class=\"fa fa-google\"\r\n                aria-hidden=\"true\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-4 text-left\">\r\n        <p class=\"m-0 text-white\">{{'COPYRIGHT' | translate}} &copy; HatWeKhod</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style: none; }\n  ul li {\n    display: inline-block;\n    margin: 0 5px; }\n  ul li a {\n      color: #fff; }\n  ul li a:hover {\n        color: #3498db; }\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/core/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark shadow\">\r\n    <div class=\"container\">\r\n        <!-- <a class=\"navbar-brand\" [routerLink]=\"['']\">Hat-we-khod</a> -->\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\r\n                        <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i> {{'DASHBOARD' | translate}}</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['.']\" (click)=\"logout()\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> {{'LOGOUT' | translate}}</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['.']\" (click)=\"useLanguage()\">{{'BUTTON_LANG' | translate}}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/core/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, loginService) {
        this.translate = translate;
        this.router = router;
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.translate.use(localStorage.getItem('lang_key'));
    };
    HeaderComponent.prototype.useLanguage = function () {
        if (localStorage.getItem('lang_key') == "en") {
            localStorage.setItem('lang_key', 'ar');
            this.translate.use(localStorage.getItem('lang_key'));
        }
        else if (localStorage.getItem('lang_key') == "ar") {
            localStorage.setItem('lang_key', 'en');
            this.translate.use(localStorage.getItem('lang_key'));
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (res) {
            console.log(res);
            localStorage.removeItem('isLoggedin');
            localStorage.removeItem('fbId');
            localStorage.removeItem('name');
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log(error);
            localStorage.removeItem('isLoggedin');
            localStorage.removeItem('fbId');
            localStorage.removeItem('name');
            _this.router.navigate(['/login']);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/core/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/left-panel/left-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-3 main-color shadow min-height-700\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['']\">\r\n        <img class=\"img-fluid img-center\" src=\"assets/images/logo.png\"></a>\r\n    <h1 class=\"text-white text-center text-size-20\">{{'TAKE_LOOK' | translate}}</h1>\r\n    <div class=\"search-sec\">\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"{{'SEARCH_IN' | translate}} 20 {{'POSTS' | translate}}\">\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-secondary half-btn\">\r\n      <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{'SEARCH_NEARBY' | translate}}</button>\r\n        <button type=\"button\" class=\"btn btn-secondary half-btn\">\r\n      <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> {{'POST_ITEM' | translate}}</button>\r\n        <button type=\"button\" class=\"btn btn-secondary full-btn\">\r\n      <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> {{'POSTS_FB_FRIENDS' | translate}} </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/components/left-panel/left-panel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/left-panel/left-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftPanelComponent = /** @class */ (function () {
    function LeftPanelComponent() {
    }
    LeftPanelComponent.prototype.ngOnInit = function () {
    };
    LeftPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-left-panel',
            template: __webpack_require__("./src/app/core/components/left-panel/left-panel.component.html"),
            styles: [__webpack_require__("./src/app/core/components/left-panel/left-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftPanelComponent);
    return LeftPanelComponent;
}());



/***/ }),

/***/ "./src/app/core/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{ loading: state !== LoadingStateType.Ready }\">\r\n  <div *ngIf=\"state !== LoadingStateType.Ready\" class=\"loading-spinner\"></div>\r\n  <div *ngIf=\"state !== LoadingStateType.NotReady\" [ngClass]=\"{ hidden: state === LoadingStateType.NotReady }\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/components/loading/loading.component.scss":
/***/ (function(module, exports) {

module.exports = ".loading {\n  position: relative; }\n\n.loading:before {\n  content: ' ';\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #a0d4ec;\n  opacity: 0.6;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: block;\n  z-index: 1001; }\n\n.loading-spinner {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  border: 6px solid #fff;\n  border-radius: 50%;\n  border-top: 6px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n.hidden {\n  visibility: hidden;\n  min-height: 400px; }\n\n.top-info {\n  padding-bottom: 30px; }\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/core/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["NotReady"] = 0] = "NotReady";
    LoadingState[LoadingState["Processing"] = 1] = "Processing";
    LoadingState[LoadingState["Ready"] = 2] = "Ready";
})(LoadingState || (LoadingState = {}));
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.LoadingStateType = LoadingState; // pass type to template
        this.loading = LoadingState.NotReady;
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('state'),
        __metadata("design:type", Number)
    ], LoadingComponent.prototype, "state", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'loading',
            template: __webpack_require__("./src/app/core/components/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/core/components/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/components/view-conversation/view-conversation.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"head-line\" mat-dialog-title>\r\n    {{ 'CONVERSATION_WITH' | translate }}: {{userNamePopup}}</h2>\r\n<a class=\"close\" (click)=\"close()\">×</a>\r\n<mat-dialog-content>\r\n    <button class=\"delete-btn\" *ngIf=\"button_key\" (click)='respondToBarter(conversation, post, \"accept\")'>{{ 'ACCEPT_BARTER' | translate }}</button>\r\n    <button class=\"delete-btn\" *ngIf=\"button_key\" (click)='respondToBarter(conversation, post, \"reject\")'>{{ 'REJECT_BARTER' | translate }}</button>\r\n    <button class=\"delete-btn\" (click)='deleteConversation(conversation, post)'><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete Conversation</button>\r\n    <div class='sub-head-line' *ngIf=\"showReturnPost\">\r\n        <h4>{{returnItemText}}</h4>\r\n        <section class='post'>\r\n            <img [src]=\"getImage(returnPost_details.image)\" />\r\n            <div class='postText conversation-chat'>\r\n                <h2 id='itemName'>\r\n                    <span class='underline '>{{ 'ITEM_NAME' | translate }}</span>: {{returnPost_details.itemName}}</h2>\r\n                <h2 id='description'>\r\n                    <span class='underline'>{{ 'DESCRIPTION' | translate }}</span>: {{returnPost_details.description}}</h2>\r\n                <h2 id='condition'>\r\n                    <span class='underline'>{{ 'CONDITION' | translate }}</span>: {{returnPost_details.condition}}</h2>\r\n                <h2 id='name'>\r\n                    <span class='underline'>{{ 'CONTACT' | translate }}</span>: {{returnPost_details.name}}</h2>\r\n                <h2 id='date'>\r\n                    <span class='underline'>{{ 'CREATED' | translate }}</span>: {{returnPost_details.createdAt| date:'MM/dd @ h:mma'}}</h2>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class='messageContainer'>\r\n        <div class='messages' *ngFor='let message of conversation.messages'>\r\n\r\n            <span class='underline'>{{message.from}}</span>:\r\n            <p> <span class='date'> ({{message.sentAt| date:'MM/dd @ h:mma'}})</span> {{message.message}}</p>\r\n        </div>\r\n    </div>\r\n    <form class=\"\" [formGroup]=\"form\" novalidate>\r\n        <div class=\"form-group\">\r\n            <textarea rows=\"4\" cols=\"4\" class='form-control' type='text' formControlName=\"reply\" placeholder=\"{{ 'TYPE_MESSAGE' | translate }}\" [ngClass]=\"displayFieldCss('reply')\"></textarea>\r\n            <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('reply')\">\r\n                please enter message\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button class=\"round-g-btn \" (click)=\"onSubmit()\">{{ 'SEND' | translate }}</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/core/components/view-conversation/view-conversation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/view-conversation/view-conversation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewConversationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/core/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ViewConversationComponent = /** @class */ (function () {
    function ViewConversationComponent(dialogRef, data, formBuilder, _sanitizer, messageService, postService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this._sanitizer = _sanitizer;
        this.messageService = messageService;
        this.postService = postService;
        this.returnItemText = "Requester's Post Item Details";
    }
    ViewConversationComponent.prototype.ngOnInit = function () {
        this.conversation = this.data.conversation;
        this.post = this.data.post;
        this.fbId = this.data.fbId;
        this.user_name = this.data.user_name;
        console.log(this.conversation);
        console.log(this.post);
        this.userNamePopup = this.post.name;
        if (this.post.fbId == this.fbId) {
            this.userNamePopup = this.conversation.requestingUser.name;
        }
        if (this.post.fbId != this.fbId) {
            this.returnItemText = 'Your  Return Item Details';
        }
        if (!this.post.completed) {
            if (this.post.fbId == this.fbId && this.conversation.accepted == null) {
                this.button_key = true;
            }
            else {
                this.button_key = false;
            }
        }
        else {
            this.button_key = false;
        }
        this.getReturnPostDetails(this.conversation.requestingUser.return_post_id);
        this.form = this.formBuilder.group({
            reply: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required]
        });
    };
    ViewConversationComponent.prototype.getReturnPostDetails = function (id) {
        var _this = this;
        this.postService.getPostDetails(id).subscribe(function (res) {
            _this.returnPost_details = res;
            _this.showReturnPost = true;
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ViewConversationComponent.prototype.getImage = function (image) {
        return this._sanitizer.bypassSecurityTrustUrl(image);
    };
    ViewConversationComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ViewConversationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            var data = {
                _id: this.conversation._id,
                message: this.form.value.reply,
                from: this.user_name
            };
            this.messageService.replyConversation(data).subscribe(function (res) {
                console.log(res);
                _this.dialogRef.close(true);
            }, function (error) {
                console.log(error);
                _this.dialogRef.close(true);
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    ViewConversationComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    ViewConversationComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    ViewConversationComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    ViewConversationComponent.prototype.respondToBarter = function (conversation, post, type) {
        var _this = this;
        var return_post_id = '';
        if (conversation.requestingUser.return_post_id) {
            return_post_id = conversation.requestingUser.return_post_id;
        }
        var data = {
            return_post_id: return_post_id
        };
        this.messageService.acceptAndRejectConversation(conversation._id, data, type).subscribe(function (res) {
            console.log(res);
            _this.dialogRef.close(true);
        }, function (error) {
            console.log(error);
            _this.dialogRef.close(true);
        });
    };
    ViewConversationComponent.prototype.deleteConversation = function (conversation, post) {
        var _this = this;
        this.messageService.deleteConversation(conversation._id).subscribe(function (res) {
            console.log(res);
            _this.dialogRef.close(true);
        }, function (error) {
            _this.dialogRef.close(true);
        });
    };
    ViewConversationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-conversation',
            template: __webpack_require__("./src/app/core/components/view-conversation/view-conversation.component.html"),
            styles: [__webpack_require__("./src/app/core/components/view-conversation/view-conversation.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_post_service__["a" /* PostService */]])
    ], ViewConversationComponent);
    return ViewConversationComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_img_max__ = __webpack_require__("./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agm_js_marker_clusterer__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_message_service__ = __webpack_require__("./src/app/core/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_seo_service__ = __webpack_require__("./src/app/core/services/seo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__ = __webpack_require__("./src/app/core/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guard_candeativate_guard__ = __webpack_require__("./src/app/core/guard/candeativate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_mat_select_search__ = __webpack_require__("./node_modules/ngx-mat-select-search/esm5/ngx-mat-select-search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_header_header_component__ = __webpack_require__("./src/app/core/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__ = __webpack_require__("./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_left_panel_left_panel_component__ = __webpack_require__("./src/app/core/components/left-panel/left-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_loading_loading_component__ = __webpack_require__("./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_conversation_conversation_component__ = __webpack_require__("./src/app/core/components/conversation/conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_view_conversation_view_conversation_component__ = __webpack_require__("./src/app/core/components/view-conversation/view-conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_conversation_rating_conversation_rating_component__ = __webpack_require__("./src/app/core/components/conversation-rating/conversation-rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng_yandex_metrika__ = __webpack_require__("./node_modules/ng-yandex-metrika/ng-yandex-metrika.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//===========================services===============================//





//===========================guard===============================//


// Material


//===========================components===============================//







function httpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/i18n/', '.json');
}
// ng-yandex-metrika

var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_19__guard_candeativate_guard__["a" /* CandeativateGuard */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_16__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_17__services_seo_service__["a" /* SeoService */]
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: httpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                    // please get your own API key here:
                    apiKey: 'AIzaSyB3FKbaqonmY-bDPanbzJSH9U7HXF8dpS4',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_11__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */],
                __WEBPACK_IMPORTED_MODULE_12__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng_yandex_metrika__["b" /* MetrikaModule */].forRoot({ id: 47293767, webvisor: true }),
                //----------------Material----------------//
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["b" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["f" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["g" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["F" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["j" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["l" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["n" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["o" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["p" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["r" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["s" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["t" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["v" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["w" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["x" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["m" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["z" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["C" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["B" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["D" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["E" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["H" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["I" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["J" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_21_ngx_mat_select_search__["a" /* NgxMatSelectSearchModule */]
                //----------------Material----------------//
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_left_panel_left_panel_component__["a" /* LeftPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_conversation_conversation_component__["a" /* ConversationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_view_conversation_view_conversation_component__["a" /* ViewConversationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_conversation_rating_conversation_rating_component__["a" /* ConversationRatingComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_img_max__["a" /* Ng2ImgMaxModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_left_panel_left_panel_component__["a" /* LeftPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */],
                __WEBPACK_IMPORTED_MODULE_11__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */],
                __WEBPACK_IMPORTED_MODULE_12__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_29_ng_yandex_metrika__["b" /* MetrikaModule */],
                //----------------Material----------------//
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["b" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["f" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["g" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["F" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["j" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["l" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["n" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["o" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["p" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["r" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["s" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["t" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["v" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["w" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["x" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["m" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["z" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["A" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["C" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["B" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["D" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["E" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["H" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["I" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_20__angular_material__["J" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_21_ngx_mat_select_search__["a" /* NgxMatSelectSearchModule */]
                //----------------Material----------------//
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_26__components_conversation_conversation_component__["a" /* ConversationComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_view_conversation_view_conversation_component__["a" /* ViewConversationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_conversation_rating_conversation_rating_component__["a" /* ConversationRatingComponent */]
            ]
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        else {
            this.loginService.getLoginData().subscribe(function (res) {
                console.log('here is coming response1');
                console.log(res);
                if (res['fbId'] != undefined) {
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('fbId', res['fbId']);
                    localStorage.setItem('name', res['name']);
                    _this.router.navigate(['/home']);
                    return false;
                }
                else {
                    _this.router.navigate(['/barter-system-egypt']);
                    return false;
                }
            }, function (error) {
                console.log(error);
                _this.router.navigate(['/barter-system-egypt']);
                return false;
            });
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guard/candeativate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandeativateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CandeativateGuard = /** @class */ (function () {
    function CandeativateGuard(router) {
        this.router = router;
    }
    CandeativateGuard.prototype.canActivate = function (next, state) {
        if (!localStorage.getItem('isLoggedin')) {
            console.log("check 1");
            return true;
        }
        else {
            console.log("check 2");
            this.router.navigate(['/']);
            return false;
        }
    };
    CandeativateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CandeativateGuard);
    return CandeativateGuard;
}());



/***/ }),

/***/ "./src/app/core/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    LoginService.prototype.loginWithFb = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'auth/facebook');
    };
    LoginService.prototype.postRegister = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'register', data);
    };
    LoginService.prototype.postLoginUser = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'login_user', data);
    };
    LoginService.prototype.postForgotPass = function (data) {
        console.log('forgotpass data');
        console.log(data);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'forgot_pass', data);
    };
    LoginService.prototype.postLogin = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'login', data);
    };
    LoginService.prototype.getLoginData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'loggedIn');
    };
    LoginService.prototype.logout = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'logout');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/core/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageService = /** @class */ (function () {
    function MessageService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    MessageService.prototype.sendNewConversation = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'conversation', data);
    };
    MessageService.prototype.replyConversation = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'message', data);
    };
    MessageService.prototype.deleteConversation = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'conversation/' + id);
    };
    MessageService.prototype.acceptAndRejectConversation = function (id, data, type) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'barter/' + type + '/' + id, data);
    };
    MessageService.prototype.ratingConversation = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'rating', data);
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/core/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getAllPost = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'posts', data);
    };
    PostService.prototype.postItem = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'post', data);
    };
    PostService.prototype.getDashboardPosts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'posts');
    };
    PostService.prototype.getPostDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'post/' + id);
    };
    PostService.prototype.getPostImage = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'getpostimage', data);
    };
    PostService.prototype.updatePost = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'updatePost', data);
    };
    PostService.prototype.deletePost = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'post/' + id);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/core/services/seo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeoService = /** @class */ (function () {
    function SeoService(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    SeoService.prototype.updateTitle = function (title) {
        this.title.setTitle(title);
    };
    SeoService.prototype.updateDescription = function (desc) {
        this.meta.updateTag({ name: 'description', content: desc });
    };
    SeoService.prototype.updateKeywords = function (category) {
        this.meta.updateTag({ name: 'keywords', content: category });
    };
    SeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Meta */]])
    ], SeoService);
    return SeoService;
}());



/***/ }),

/***/ "./src/app/form-modal/form--login-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title cus_modal_header\">Login</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n   (click)=\"activeModal.dismiss('Cross click')\">\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\t<p class='login_form_err_msg'>{{form_error}}</p>\r\n  \t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n        <div id=\"user-data\">\t\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input\r\n              type=\"email\"\r\n              id=\"email\"\r\n              formControlName=\"email\"\r\n              class=\"form-control\" ng-model=\"email\"required >\r\n\t\t\t<p class='err_msg'>{{email_err}}</p>\t\t\t  \r\n          </div>\r\n\t\t<div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input\r\n              type=\"password\"\r\n              id=\"password\"\r\n              formControlName=\"password\"\r\n              class=\"form-control\" ng-model=\"password\" >\r\n\t\t\t  <p class='err_msg'>{{pass_error}}</p>\r\n          </div>\r\n        </div>\t\r\n\t\t<div class=\"form_btn\">\r\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Login</button>\r\n\t\t\t <button class=\"btn btn-danger close_btn\"(click)=\"activeModal.dismiss('Close clicked')\">Close</button>\r\n\t\t  </div>\r\n\t  </form>\r\n\t\r\n</div>\r\n<div class=\"modal-footer\">\r\n\t<div class=\"forgot_pass\">\r\n\t\t<button type=\"button\" (click)=\"activeModal.dismiss('Close clicked')\" (click)=\"openFormModal('register')\"  class=\"btn btn-link\">Register</button>\r\n\t\t<button type=\"button\" (click)=\"activeModal.dismiss('Close clicked')\"(click)=\"openFormModal('forgotpass')\"  class=\"btn btn-link\">Forgot Password</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/form-modal/form-forgot-pass-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title cus_modal_header\">Change Password</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n   (click)=\"activeModal.dismiss('Cross click')\">\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  \t<form [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotPass()\">\r\n        <div id=\"user-data\">\t\r\n\t\t<div *ngIf=\"!forgotForm.valid && (forgotForm.dirty || forgotForm.touched) \"\r\n\t\t\tclass=\"alert alert-danger\">\r\n\t\t  <div>\r\n\t\t\tPlease enter valid details\r\n\t\t  </div>\r\n\t\t  </div>\r\n\t\t\t<h5 class='err_msg'>{{form_error}}</h5>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input\r\n              type=\"email\"\r\n              id=\"email\"\r\n              formControlName=\"email\"\r\n              class=\"form-control\" ng-model=\"email\"required >\t\t \r\n          </div>\r\n\t\t<div class=\"form-group\">\r\n            <label for=\"password\">New Password</label>\r\n            <input\r\n              type=\"password\"\r\n              id=\"password\"\r\n              formControlName=\"password\"\r\n              class=\"form-control\" ng-model=\"password\" >\r\n          </div>\r\n\t\t  <div class=\"form-group\">\r\n            <label for=\"password\">Confirm Password</label>\r\n            <input\r\n              type=\"password\"\r\n              id=\"c_password\"\r\n              formControlName=\"c_password\"\r\n              class=\"form-control\" ng-model=\"c_password\" >\r\n          </div>\r\n        </div>\t\r\n\t\t<div class=\"form_btn\">\r\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Submit</button>\r\n\t\t\t <button class=\"btn btn-danger close_btn\"(click)=\"activeModal.dismiss('Close clicked')\">Close</button>\r\n\t\t  </div>\r\n\t  </form>\r\n\t\r\n</div>\r\n<div class=\"modal-footer\">\r\n\t<div class=\"forgot_pass\">\r\n\t\t<button type=\"button\" (click)=\"activeModal.dismiss('Close clicked')\" (click)=\"openFormModal('register')\"  class=\"btn btn-link\">Register</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/form-modal/form-forgot-pass-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormForgotPassModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_modal_component__ = __webpack_require__("./src/app/form-modal/form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormForgotPassModalComponent = /** @class */ (function () {
    function FormForgotPassModalComponent(router, activeModal, modalService, loginService) {
        this.router = router;
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.loginService = loginService;
        this.form_error = '';
    }
    FormForgotPassModalComponent.prototype.ngOnInit = function () {
        this.forgotForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null),
            'c_password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](null),
        });
    };
    FormForgotPassModalComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    FormForgotPassModalComponent.prototype.openFormModal = function (page) {
        if (page == 'forgotpass') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__form_modal_component__["a" /* FormModalComponent */]);
            modalRef.result.then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    FormForgotPassModalComponent.prototype.forgotPass = function () {
        console.log(this.forgotForm);
        if (this.forgotForm.value.email != null && this.forgotForm.value.password != null) {
            if (this.forgotForm.value.password != this.forgotForm.value.c_password) {
                this.form_error = 'Password did not match';
                return false;
            }
            if (this.forgotForm.value.email != '' && this.forgotForm.value.password != '' && this.forgotForm.value.c_password != '')
                this.loginService.postForgotPass(this.forgotForm.value).subscribe(function (res) {
                    console.log('here is result coming');
                    console.log(res);
                }, function (error) {
                    console.log(error);
                });
        }
    };
    FormForgotPassModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-modal',
            template: __webpack_require__("./src/app/form-modal/form-forgot-pass-modal.component.html"),
            styles: [__webpack_require__("./src/app/form-modal/form-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_login_service__["a" /* LoginService */]])
    ], FormForgotPassModalComponent);
    return FormForgotPassModalComponent;
}());



/***/ }),

/***/ "./src/app/form-modal/form-login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_modal_component__ = __webpack_require__("./src/app/form-modal/form-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_forgot_pass_modal_component__ = __webpack_require__("./src/app/form-modal/form-forgot-pass-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormLoginModalComponent = /** @class */ (function () {
    function FormLoginModalComponent(router, activeModal, modalService, loginService) {
        this.router = router;
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.loginService = loginService;
        this.random_no = '';
        this.form_error = '';
        this.pass_error = '';
        this.c_pass_error = '';
        this.email_err = '';
        this.username_err = '';
    }
    FormLoginModalComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null),
            'password': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null)
        });
    };
    FormLoginModalComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    FormLoginModalComponent.prototype.openFormModal = function (page) {
        console.log(page);
        if (page == 'register') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__form_modal_component__["a" /* FormModalComponent */]);
            modalRef.result.then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });
        }
        if (page == 'forgotpass') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__form_forgot_pass_modal_component__["a" /* FormForgotPassModalComponent */]);
            modalRef.result.then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    FormLoginModalComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.loginForm);
        if (this.loginForm.value.email == '' || this.loginForm.value.email == null) {
            this.email_err = '*Please enter a valid email address';
            return false;
        }
        else {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = this.loginForm.value.email;
            if (email.match(mailformat)) {
                //nothing to do
            }
            else {
                this.email_err = '*Please enter a valid email address';
                return false;
            }
        }
        if (this.loginForm.value.password == '' || this.loginForm.value.password == null) {
            this.pass_error = '*Please enter a password';
            return false;
        }
        this.loginService.postLoginUser(this.loginForm.value).subscribe(function (res) {
            if (res['status'] == '422') {
                _this.form_error = 'Wrong password. Try again or click Forgot password to reset it.';
            }
            else {
                console.log(res);
                _this.random_no = Math.random().toString();
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('fbId', _this.random_no);
                localStorage.setItem('login_type', _this.random_no);
                localStorage.setItem('name', res['user'].name);
                localStorage.setItem('user_email', res['user'].email);
                _this.router.navigate(['/home']);
                return false;
            }
            /* localStorage.setItem('isLoggedin', 'true')
            localStorage.setItem('fbId', '')
            localStorage.setItem('name', res['name'])
            this.router.navigate(['/home']);  */
        }, function (error) {
            console.log(error);
        });
        return false;
    };
    FormLoginModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-modal',
            template: __webpack_require__("./src/app/form-modal/form--login-modal.component.html"),
            styles: [__webpack_require__("./src/app/form-modal/form-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_login_service__["a" /* LoginService */]])
    ], FormLoginModalComponent);
    return FormLoginModalComponent;
}());



/***/ }),

/***/ "./src/app/form-modal/form-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title cus_modal_header\">Register Your Account</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"\n   (click)=\"activeModal.dismiss('Cross click')\">\n  </button>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n\t<p class='form_err_msg'>{{form_error}}</p>\n      <form [formGroup]=\"sigupForm\" (ngSubmit)=\"onSubmit()\">\n        <div id=\"user-data\">\t\t\t  \n          <div class=\"form-group\">\n            <label for=\"username\">Full Name</label>\n            <input\n              type=\"text\"\n              id=\"username\"\n              formControlName=\"username\"\n              class=\"form-control\" required\n\t\t\t   >\t\n\t\t\t\t<p class='err_msg'>{{username_err}}</p>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input\n              type=\"email\"\n              id=\"email\"\n              formControlName=\"email\"\n              class=\"form-control\" ng-model=\"email\"required >\n\t\t\t <p class='err_msg'>{{email_err}}</p>\n          </div>\n\t\t<div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n              type=\"password\"\n              id=\"password\"\n              formControlName=\"password\"\n              class=\"form-control\" ng-model=\"password\" >\n\t\t\t  <p class='err_msg'>{{pass_error}}</p>\n          </div>\n\t\t  <div class=\"form-group\">\n            <label for=\"password\">Confirm Password</label>\n            <input\n              type=\"password\"\n              id=\"c_password\"\n              formControlName=\"c_password\"\n              class=\"form-control\" ng-model=\"c_password\" >\n\t\t\t  <p class='err_msg'>{{c_pass_error}}</p>\n          </div> \n        </div>\n\t\t<div class=\"form_btn\">\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Register</button>\n\t\t\t<button class=\"btn btn-danger close_btn\"(click)=\"activeModal.dismiss('Close clicked')\"> Close</button>\n\t\t</div>\n      </form>\n\t \n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n   <div class=\"forgot_pass\">\n\t\t\tAlready a member? <a  (click)=\"activeModal.dismiss('Close clicked')\" (click)=\"openFormModal('login')\"  class=\"btn-link custom_lnk\">Click here</a> to login to your account.\n\t\t</div>\n</div>"

/***/ }),

/***/ "./src/app/form-modal/form-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-modal/form-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_login_modal_component__ = __webpack_require__("./src/app/form-modal/form-login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormModalComponent = /** @class */ (function () {
    function FormModalComponent(router, activeModal, modalService, http, loginService) {
        this.router = router;
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.http = http;
        this.loginService = loginService;
        this.genders = ['male', 'female'];
        this.pass_error = '';
        this.c_pass_error = '';
        this.form_error = '';
        this.email_err = '';
        this.username_err = '';
    }
    FormModalComponent.prototype.ngOnInit = function () {
        this.sigupForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null),
            'email': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null),
            'password': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null),
            'c_password': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](null)
        });
    };
    FormModalComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.sigupForm.value.username == '' || this.sigupForm.value.username == null) {
            this.username_err = '*Please enter your username';
            return false;
        }
        if (this.sigupForm.value.email == '' || this.sigupForm.value.email == null) {
            this.email_err = '*Please enter a valid email address';
            return false;
        }
        else {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = this.sigupForm.value.email;
            if (email.match(mailformat)) {
                //nothing to do
            }
            else {
                this.email_err = '*Please enter a valid email address';
                return false;
            }
        }
        if (this.sigupForm.value.password == '' || this.sigupForm.value.password == null) {
            this.pass_error = '*Please enter a password';
            return false;
        }
        if (this.sigupForm.value.c_password == '' || this.sigupForm.value.c_password == null) {
            this.c_pass_error = '*Confirm your password';
            return false;
        }
        if (this.sigupForm.value.password != this.sigupForm.value.c_password) {
            this.c_pass_error = '*Those passwords did not match. Try again.';
            return false;
        }
        this.loginService.postRegister(this.sigupForm.value).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('fbId', '');
            localStorage.setItem('name', res['name']);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    FormModalComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    FormModalComponent.prototype.openFormModal = function (page) {
        if (page == 'login') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__form_login_modal_component__["a" /* FormLoginModalComponent */]);
            modalRef.result.then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    FormModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-form-modal',
            template: __webpack_require__("./src/app/form-modal/form-modal.component.html"),
            styles: [__webpack_require__("./src/app/form-modal/form-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_login_service__["a" /* LoginService */]])
    ], FormModalComponent);
    return FormModalComponent;
}());



/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <div class=\"login-logo\">\n         <a href=''><img class=\"img-fluid img-center login-logo\" src=\"assets/images/logo.png\"></a>\n    </div><!-- /.login-logo -->\n    <div class=\"login-box-body\">\n\t\t\t<p class='head_cap'>Forgot password</p>\n        \t<p class='login_form_err_msg'>{{email_err}}</p>\n        \t<p class='forgot_form_success_msg'>{{form_error}}</p>\n\t\t\t\t<form [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotPass()\">\n\t\t\t\t\t<div id=\"user-data\">\t\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"email\"\n\t\t\t\t\t\t  id=\"email\"\n\t\t\t\t\t\t  formControlName=\"email\"\n\t\t\t\t\t\t  class=\"form-control\" ng-model=\"email\"required >\t\t \n\t\t\t\t\t  </div>\n\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"form_btn\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  </form>\n\t\t\t\t  <div class='other_links'>\n\t\t\t\t\t  <button type=\"button\" [routerLink]=\"['/user-login']\"  class=\"btn btn-link\">Sign in</button>\n\t\t\t\t\t  <button type=\"button\" [routerLink]=\"['/user-register']\" class=\"btn btn-link\">Register</button>\n\t\t\t\t  </div>\n            </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-control {\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #999999;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  color: #333333;\n  display: block;\n  font-size: 14px;\n  height: 34px;\n  line-height: 1.42857;\n  padding: 6px 12px;\n  -webkit-transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  width: 100%; }\n\n.login-box, .register-box {\n  width: 360px;\n  margin: 7% auto; }\n\n.login-page, .register-page {\n  background: #d2d6de; }\n\n.login-logo, .register-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300; }\n\n.login-box-msg, .register-box-msg {\n  margin: 0;\n  text-align: center;\n  padding: 0 20px 20px 20px; }\n\n.login-box-body, .register-box-body {\n  background: #fff;\n  padding: 20px;\n  border-top: 0;\n  color: #666; }\n\n.has-feedback {\n  position: relative; }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.has-feedback .form-control {\n  padding-right: 42.5px; }\n\n.login-box-body .form-control-feedback, .register-box-body .form-control-feedback {\n  color: #777; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.icheck > label {\n  padding-left: 0; }\n\n.checkbox label, .radio label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: 400;\n  cursor: pointer; }\n\n.head_cap {\n  font-size: 22px;\n  text-align: center; }\n\n.other_links {\n  text-align: center;\n  margin-top: 10px; }\n\n.forgot_form_success_msg {\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 15px;\n  color: green; }\n"

/***/ }),

/***/ "./src/app/layout/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.form_error = '';
        this.email_err = '';
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
    };
    ForgotPasswordComponent.prototype.forgotPass = function () {
        var _this = this;
        console.log(this.forgotForm);
        if (this.forgotForm.value.email == '' || this.forgotForm.value.email == null) {
            this.email_err = '*Please enter a valid email address';
            return false;
        }
        else {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = this.forgotForm.value.email;
            if (email.match(mailformat)) {
                //nothing to do
            }
            else {
                this.email_err = '*Please enter a valid email address';
                return false;
            }
        }
        this.loginService.postForgotPass(this.forgotForm.value).subscribe(function (res) {
            if (res['status'] == '422') {
                _this.form_error = res['message'];
                return false;
            }
            else {
                console.log(res);
                _this.form_error = 'We have sent an email with password!';
                return false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("./src/app/layout/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("./src/app/layout/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__["a" /* LoginService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <div class=\"login-logo\">\n         <a href=''><img class=\"img-fluid img-center login-logo\" src=\"assets/images/logo.png\"></a>\n    </div><!-- /.login-logo -->\n    <div class=\"login-box-body\">\n\t\t\t<p class='head_cap'>Login</p>\n        \t<p class='login_form_err_msg'>{{form_error}}</p>\n\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\n\t\t\t\t\t<div id=\"user-data\">\t\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"email\"\n\t\t\t\t\t\t  id=\"email\"\n\t\t\t\t\t\t  formControlName=\"email\"\n\t\t\t\t\t\t  class=\"form-control\" ng-model=\"email\"required >\n\t\t\t\t\t\t<p class='err_msg'>{{email_err}}</p>\t\t\t  \n\t\t\t\t\t  </div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"password\"\n\t\t\t\t\t\t  id=\"password\"\n\t\t\t\t\t\t  formControlName=\"password\"\n\t\t\t\t\t\t  class=\"form-control\" ng-model=\"password\" >\n\t\t\t\t\t\t  <p class='err_msg'>{{pass_error}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<div class=\"form_btn\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Login</button>\n\t\t\t\t\t  </div>\n\t\t\t\t  </form>\n\t\t\t\t  <div class='other_links'>\n\t\t\t\t\t  <button type=\"button\" [routerLink]=\"['/forgot-password']\" class=\"btn btn-link\">Forgot Password?</button>\n\t\t\t\t\t  <button type=\"button\" [routerLink]=\"['/user-register']\" class=\"btn btn-link\">Register</button>\n\t\t\t\t  </div>\n            </div><!-- /.login-box-body -->\n</div>"

/***/ }),

/***/ "./src/app/layout/user-login/user-login.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-control {\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #999999;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  color: #333333;\n  display: block;\n  font-size: 14px;\n  height: 34px;\n  line-height: 1.42857;\n  padding: 6px 12px;\n  -webkit-transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  width: 100%; }\n\n.login-box, .register-box {\n  width: 360px;\n  margin: 7% auto; }\n\n.login-page, .register-page {\n  background: #d2d6de; }\n\n.login-logo, .register-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300; }\n\n.login-box-msg, .register-box-msg {\n  margin: 0;\n  text-align: center;\n  padding: 0 20px 20px 20px; }\n\n.login-box-body, .register-box-body {\n  background: #fff;\n  padding: 20px;\n  border-top: 0;\n  color: #666; }\n\n.has-feedback {\n  position: relative; }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.has-feedback .form-control {\n  padding-right: 42.5px; }\n\n.login-box-body .form-control-feedback, .register-box-body .form-control-feedback {\n  color: #777; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.icheck > label {\n  padding-left: 0; }\n\n.checkbox label, .radio label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: 400;\n  cursor: pointer; }\n\n.head_cap {\n  font-size: 22px;\n  text-align: center; }\n\n.other_links {\n  text-align: center;\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.random_no = '';
        this.form_error = '';
        this.pass_error = '';
        this.c_pass_error = '';
        this.email_err = '';
        this.username_err = '';
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
    };
    UserLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.loginForm);
        if (this.loginForm.value.email == '' || this.loginForm.value.email == null) {
            this.email_err = '*Please enter a valid email address';
            return false;
        }
        else {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = this.loginForm.value.email;
            if (email.match(mailformat)) {
                //nothing to do
            }
            else {
                this.email_err = '*Please enter a valid email address';
                return false;
            }
        }
        if (this.loginForm.value.password == '' || this.loginForm.value.password == null) {
            this.pass_error = '*Please enter a password';
            return false;
        }
        this.loginService.postLoginUser(this.loginForm.value).subscribe(function (res) {
            if (res['status'] == '422') {
                _this.form_error = 'Wrong password. Try again or click Forgot password to reset it.';
            }
            else {
                console.log(res);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('fbId', res['user'].fbId);
                localStorage.setItem('login_type', res['user'].login_type);
                localStorage.setItem('name', res['user'].name);
                localStorage.setItem('user_email', res['user'].email);
                _this.router.navigate(['/home']);
            }
            /* localStorage.setItem('isLoggedin', 'true')
            localStorage.setItem('fbId', '')
            localStorage.setItem('name', res['name'])
            this.router.navigate(['/home']);  */
        }, function (error) {
            console.log(error);
        });
        return false;
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-login',
            template: __webpack_require__("./src/app/layout/user-login/user-login.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__["a" /* LoginService */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-register/user-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n    <div class=\"login-logo\">\n        <a href=''><img class=\"img-fluid img-center login-logo\" src=\"assets/images/logo.png\"></a>\n    </div><!-- /.login-logo -->\n    <div class=\"login-box-body\">\n\t\t\t<p class='head_cap'>Register</p>\n        \t<p class='form_err_msg'>{{form_error}}</p>\n\t\t\t\t  <form [formGroup]=\"sigupForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t<div id=\"user-data\">\t\t\t  \n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"username\">Full Name</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"text\"\n\t\t\t\t\t\t  id=\"username\"\n\t\t\t\t\t\t  formControlName=\"username\"\n\t\t\t\t\t\t  class=\"form-control\" required\n\t\t\t\t\t\t   >\t\n\t\t\t\t\t\t\t<p class='err_msg'>{{username_err}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"email\"\n\t\t\t\t\t\t  id=\"email\"\n\t\t\t\t\t\t  formControlName=\"email\"\n\t\t\t\t\t\t  class=\"form-control\" ng-model=\"email\"required >\n\t\t\t\t\t\t <p class='err_msg'>{{email_err}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"password\"\n\t\t\t\t\t\t  id=\"password\"\n\t\t\t\t\t\t  formControlName=\"password\"\n\t\t\t\t\t\t  class=\"form-control\" ng-model=\"password\" >\n\t\t\t\t\t\t  <p class='err_msg'>{{pass_error}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Confirm Password</label>\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t  type=\"password\"\n\t\t\t\t\t\t  id=\"c_password\"\n\t\t\t\t\t\t  formControlName=\"c_password\"\n\t\t\t\t\t\t  class=\"form-control\" ng-model=\"c_password\" >\n\t\t\t\t\t\t  <p class='err_msg'>{{c_pass_error}}</p>\n\t\t\t\t\t  </div> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form_btn\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Register</button>\n\t\t\t\t\t</div>\n\t\t\t\t  </form>\n\t\t\t\t <div class='other_links'>\n\t\t\t\t\t<button type=\"button\" [routerLink]=\"['/user-login']\"  class=\"btn btn-link\">Sign in</button>\n\t\t\t\t  </div>\n            </div><!-- /.login-box-body -->\n</div>"

/***/ }),

/***/ "./src/app/layout/user-register/user-register.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-control {\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #999999;\n  border-radius: 0;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n  color: #333333;\n  display: block;\n  font-size: 14px;\n  height: 34px;\n  line-height: 1.42857;\n  padding: 6px 12px;\n  -webkit-transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s;\n  width: 100%; }\n\n.login-box, .register-box {\n  width: 360px;\n  margin: 7% auto; }\n\n.login-page, .register-page {\n  background: #d2d6de; }\n\n.login-logo, .register-logo {\n  font-size: 35px;\n  text-align: center;\n  margin-bottom: 25px;\n  font-weight: 300; }\n\n.login-box-msg, .register-box-msg {\n  margin: 0;\n  text-align: center;\n  padding: 0 20px 20px 20px; }\n\n.login-box-body, .register-box-body {\n  background: #fff;\n  padding: 20px;\n  border-top: 0;\n  color: #666; }\n\n.has-feedback {\n  position: relative; }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.has-feedback .form-control {\n  padding-right: 42.5px; }\n\n.login-box-body .form-control-feedback, .register-box-body .form-control-feedback {\n  color: #777; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.icheck > label {\n  padding-left: 0; }\n\n.checkbox label, .radio label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: 400;\n  cursor: pointer; }\n\n.head_cap {\n  font-size: 22px;\n  text-align: center; }\n\n.other_links {\n  text-align: center;\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/user-register/user-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.pass_error = '';
        this.c_pass_error = '';
        this.form_error = '';
        this.email_err = '';
        this.username_err = '';
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
        this.sigupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null),
            'c_password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null)
        });
    };
    UserRegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.sigupForm.value.username == '' || this.sigupForm.value.username == null) {
            this.username_err = '*Please enter your username';
            return false;
        }
        if (this.sigupForm.value.email == '' || this.sigupForm.value.email == null) {
            this.email_err = '*Please enter a valid email address';
            return false;
        }
        else {
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = this.sigupForm.value.email;
            if (email.match(mailformat)) {
                //nothing to do
            }
            else {
                this.email_err = '*Please enter a valid email address';
                return false;
            }
        }
        if (this.sigupForm.value.password == '' || this.sigupForm.value.password == null) {
            this.pass_error = '*Please enter a password';
            return false;
        }
        if (this.sigupForm.value.c_password == '' || this.sigupForm.value.c_password == null) {
            this.c_pass_error = '*Confirm your password';
            return false;
        }
        if (this.sigupForm.value.password != this.sigupForm.value.c_password) {
            this.c_pass_error = '*Those passwords did not match. Try again.';
            return false;
        }
        this.loginService.postRegister(this.sigupForm.value).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('fbId', res['user'].fbId);
            localStorage.setItem('name', res['user'].name);
            localStorage.setItem('user_email', res['user'].email);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    UserRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-register',
            template: __webpack_require__("./src/app/layout/user-register/user-register.component.html"),
            styles: [__webpack_require__("./src/app/layout/user-register/user-register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__["a" /* LoginService */]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiEndpoint: '/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map