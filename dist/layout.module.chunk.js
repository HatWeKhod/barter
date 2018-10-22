webpackJsonp(["layout.module"],{

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<loading [state]=\"loading\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 main-color  min-height-700 \">\r\n                <a [routerLink]=\"['']\"><img class=\"img-fluid img-center\" src=\"assets/images/logo.png\"></a>\r\n                <h1 class=\"text-white text-center text-size-20\">{{'TAKE_LOOK' | translate}}</h1>\r\n                <div class=\"search-sec\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"{{'SEARCH_IN' | translate}} {{items.length}} {{'POSTS' | translate}}\" [(ngModel)]=\"search_key\" (keyup)=\"search(search_key)\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary half-btn\" (click)=\"yourPost()\">\r\n            <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> {{ 'YOUR_POSTS' | translate }} </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary half-btn\" (click)=\"yourRequest()\">\r\n            <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i> {{ 'YOUR_REQUESTS' | translate }}</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary half-btn\" (click)=\"yourOffer()\">\r\n            <i class=\"fa fa-tag\" aria-hidden=\"true\"></i> {{ 'YOUR_OFFERS' | translate }} </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary half-btn\" (click)=\"yourCompletedPost()\">\r\n            <i class=\"fa fa-gavel\" aria-hidden=\"true\"></i> {{ 'COMPLETED' | translate }}</button>\r\n                    <button type=\"button\" class=\"btn btn-secondary full-btn\" (click)=\"back()\">\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> {{ 'BACK' | translate }}</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-9\">\r\n                <h4 class=\"mt-xl-5\">{{post_type}}</h4>\r\n                <div class=\"card-outline-secondary my-4\" *ngIf=\"all_post_list.length > 0\">\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"full-card-sec col-md-6\" *ngFor=\"let post of all_post_list\">\r\n                            <div class=\"card-sec main-color shadow \">\r\n                                <a class=\"edit shadow \" (click)=\"deletePost(post._id)\">\r\n                                    <i class=\"fa fa-trash-o\" aria-hidden=\"true \"></i>\r\n                                </a>\r\n                                <img class=\"product-img \" [src]=\"getImage(post.image)\" />\r\n                                <div class=\"contact-details text-white \">\r\n                                    <ul>\r\n                                        <li>\r\n                                            <span>{{ 'ITEM_NAME' | translate }}:</span> {{post.itemName}}</li>\r\n                                        <li>\r\n                                            <span>{{ 'DESCRIPTION' | translate }}:</span> {{post.description}}</li>\r\n                                        <li>\r\n                                            <span>{{ 'CONDITION' | translate }}:</span> {{post.condition}}</li>\r\n                                        <li>\r\n                                            <span>{{ 'CONTACT' | translate }}:</span> {{post.name}}</li>\r\n                                        <li>\r\n                                            <ngb-rating [(rate)]=\"post.user_average_score\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                                        </li>\r\n                                        <li>\r\n                                            <span>{{ 'CREATED' | translate }}:</span> {{post.createdAt| date:'MM/dd @ h:mma'}}</li>\r\n                                    </ul>\r\n                                    <div class='conversation' *ngFor=\"let conversation of post.conversations\">\r\n                                        <hr/>\r\n                                        <div style=\"margin:10px 0px;\">\r\n                                            <div *ngIf=\"post.fbId == fbId\">\r\n                                                <span class='underline'>{{ 'CONVERSATION_WITH' | translate }}</span>: {{conversation.requestingUser.name}}\r\n                                            </div>\r\n                                            <div *ngIf=\"post.fbId != fbId\">\r\n                                                <span class='underline'>{{ 'CONVERSATION_WITH' | translate }}</span>: {{post.name}}\r\n\r\n\r\n                                            </div>\r\n                                            <!-- \r\n                                        <img *ngIf='post.completed && conversation.accepted' class='thumb' src='assets/images/thumbs-up.png' />\r\n\r\n                                        <img *ngIf='conversation.accepted == false' class='thumb' src='assets/images/thumbs-down.png' /> -->\r\n\r\n                                        </div>\r\n                                        <i *ngIf='conversation.accepted == false' class=\"fa fa-thumbs-down thumb\" aria-hidden=\"true\"></i>\r\n                                        <i *ngIf='post.completed && conversation.accepted' class=\"fa fa-thumbs-up thumb\" aria-hidden=\"true\"></i>\r\n                                        <button class=\"btn btn-chat\" (click)='toggleConversationModal(conversation, post)'>{{ 'CONVERSATION_VIEW' | translate }}</button>\r\n                                        <button *ngIf=\"post_type == 'Completed Posts' && (fbId == post.fbId || fbId == conversation.requestingUser.fbId) && ((fbId == post.fbId && post.requester_barter_rating == 0) || (fbId == conversation.requestingUser.fbId && post.poster_barter_rating == 0))\"\r\n                                            (click)='toggleRatingModal(conversation, post)'>{{ 'GIVE_RATING' | translate }}</button>\r\n                                        <ngb-rating [rate]=\"getRatingValue(post)\" [readonly]=\"true\" max=\"5\" *ngIf=\"post_type == 'Completed Posts' && (fbId == post.fbId || fbId == conversation.requestingUser.fbId) && ((fbId == post.fbId && post.requester_barter_rating == 0) || (fbId == conversation.requestingUser.fbId && post.poster_barter_rating == 0))\"></ngb-rating>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"clearfix \"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</loading>"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__ = __webpack_require__("./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_components_view_conversation_view_conversation_component__ = __webpack_require__("./src/app/core/components/view-conversation/view-conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_conversation_rating_conversation_rating_component__ = __webpack_require__("./src/app/core/components/conversation-rating/conversation-rating.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(postService, _sanitizer, router, dialog) {
        this.postService = postService;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.dialog = dialog;
        this.all_post_list = [];
        this.items = [];
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].NotReady;
        this.post_list = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.name = localStorage.getItem('name');
        this.fbId = localStorage.getItem('fbId');
        this.getPostList();
    };
    DashboardComponent.prototype.getPostList = function () {
        var _this = this;
        this.postService.getDashboardPosts().subscribe(function (res) {
            console.log(res);
            _this.post_list = res;
            _this.yourPost();
            _this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
            console.log(_this.post_list);
        }, function (error) {
            _this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
            console.log(error);
        });
    };
    DashboardComponent.prototype.assignCopy = function () {
        this.all_post_list = Object.assign([], this.items);
    };
    DashboardComponent.prototype.search = function (value) {
        if (!value)
            this.assignCopy();
        this.all_post_list = Object.assign([], this.items).filter(function (item) { return item.itemName.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.condition.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    DashboardComponent.prototype.getImage = function (image) {
        return this._sanitizer.bypassSecurityTrustUrl(image);
    };
    DashboardComponent.prototype.yourPost = function () {
        var _this = this;
        this.post_type = 'Your Posts';
        this.items = this.post_list.filter(function (x) { return x.fbId == _this.fbId; });
        this.assignCopy();
    };
    DashboardComponent.prototype.yourRequest = function () {
        var _this = this;
        this.post_type = 'Your Requests';
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.items = [];
        this.post_list.forEach(function (x) {
            var d = x.conversations.filter(function (y) { return y.requestingUser.fbId == _this.fbId; });
            if (d.length > 0) {
                _this.items.push(x);
            }
        });
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
        console.log(this.items);
        this.assignCopy();
    };
    DashboardComponent.prototype.yourOffer = function () {
        var _this = this;
        this.post_type = 'Your Offers';
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.items = [];
        this.post_list.forEach(function (x) {
            if (x.fbId == _this.fbId) {
                var d = x.conversations.filter(function (y) { return y.requestingUser.fbId != _this.fbId; });
                if (d.length > 0) {
                    _this.items.push(x);
                }
            }
        });
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
        console.log(this.items);
        this.assignCopy();
    };
    DashboardComponent.prototype.yourCompletedPost = function () {
        var _this = this;
        this.post_type = 'Completed Posts';
        this.items = this.post_list.filter(function (x) { return x.fbId == _this.fbId && x.completed == true; });
        this.assignCopy();
    };
    DashboardComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    DashboardComponent.prototype.toggleConversationModal = function (conversation, post) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__core_components_view_conversation_view_conversation_component__["a" /* ViewConversationComponent */], {
            width: '700px',
            data: { conversation: conversation, post: post, fbId: this.fbId, user_name: this.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
                console.log(result);
                _this.getPostList();
            }
        });
    };
    DashboardComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.postService.deletePost(id).subscribe(function (res) {
            console.log(res);
            _this.getPostList();
        }, function (error) {
            console.log(error);
            _this.getPostList();
        });
    };
    DashboardComponent.prototype.getRatingValue = function (post) {
        if (post.fbId == this.fbId) {
            return post.requester_barter_rating;
        }
        else {
            for (var k = 0; k < post.conversations.length; k++) {
                var conversation = post.conversations[k];
                if (conversation.requestingUser.fbId.toString() === this.fbId) {
                    return post.poster_barter_rating;
                }
            }
        }
    };
    DashboardComponent.prototype.toggleRatingModal = function (conversation, post) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__core_components_conversation_rating_conversation_rating_component__["a" /* ConversationRatingComponent */], {
            width: '700px',
            data: { conversation: conversation, post: post, fbId: this.fbId, user_name: this.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                _this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
                console.log(result);
                _this.getPostList();
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/edit-post/edit-post.component.html":
/***/ (function(module, exports) {

module.exports = "<loading [state]=\"loading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 main-color  min-height-700 \">\n        <a [routerLink]=\"['']\"><img class=\"img-fluid img-center\" src=\"assets/images/logo.png\"></a>\n        <h1 class=\"text-white text-center text-size-20\">{{'TAKE_LOOK' | translate}}</h1>\n        <div class=\"search-sec\">\n          <button type=\"button\" class=\"btn btn-secondary full-btn\" (click)=\"back()\">\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> {{ 'BACK' | translate }}</button>\n        </div>\n      </div>\n      <div class=\"col-lg-9 reg-sec-full\">\n        <div class=\"row\">\n          <div class=\"login-form d-flex align-middle\">\n            <div class=\"main-div margin-10 shadow\">\n              <div class=\"panel\">\n                <h2>{{'POSTYOURITEM' | translate}}</h2>\n              </div>\n              <form id=\"Login\" role=\"form\" [formGroup]=\"form\" novalidate>\n                <div class=\"d-flex justify-content-between\">\n                  <div class=\"form-group\">\n                    <label>{{'WHAT_ITS_CALLED' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"postDetails.itemName\"\n                      formControlName=\"itemName\" [ngClass]=\"displayFieldCss('itemName')\">\n                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('itemName')\">\n                      {{'ERR_TITLE' | translate}}\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>{{'TELL_US' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"postDetails.description\"\n                      formControlName=\"description\" [ngClass]=\"displayFieldCss('description')\">\n                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('description')\">\n                      {{'ERR_DESC' | translate}}\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>{{'WHAT_IS_CONDITION' | translate}}</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"postDetails.condition\"\n                      formControlName=\"condition\" [ngClass]=\"displayFieldCss('condition')\">\n                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('condition')\">\n                      {{'ERR_CONDITION' | translate}}\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label>{{'UPLOAD_IMAGE' | translate}}</label>\n                  <input type=\"file\" class=\"form-control is-invalid\" (change)=\"onImageChange($event)\" accept=\"image/*\"\n                    [ngClass]=\"{\n                          'is-invalid': file_error,\n                          'is-valid': !file_error\n                        }\">\n                  <div class=\"invalid-feedback\" *ngIf=\"file_error\">\n                    {{'ERR_IMAGE' | translate}}\n                  </div>\n                </div>\n                <img class=\"post_image\" *ngIf=\"base64textString\" [src]=\"sanitizer.bypassSecurityTrustUrl(base64textString)\"\n                  height=\"300\" width=\"250\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updatePost()\">{{'SUBMIT' | translate}}</button>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"reSet()\">{{'CLEAR' | translate}}</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</loading>\n"

/***/ }),

/***/ "./src/app/layout/edit-post/edit-post.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/edit-post/edit-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__ = __webpack_require__("./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(formBuilder, router, postService, sanitizer, route, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.postService = postService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.toastr = toastr;
        this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].NotReady;
        this.image = {
            dataURL: '',
            resized: {
                dataURL: ''
            }
        };
        this.isTracking = false;
        this.postDetails = {
            post_id: '',
            fbId: '',
            name: '',
            itemName: '',
            condition: '',
            description: '',
            location: [],
            image: ''
        };
    }
    EditPostComponent.prototype.ngOnInit = function () {
        this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.name = localStorage.getItem('name');
        this.fbId = localStorage.getItem('fbId');
        // this.trackMe();
        this.form = this.formBuilder.group({
            name: [this.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            condition: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            image: [this.image, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            itemName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            location: [''],
            fbId: [this.fbId, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        console.log(this.route.snapshot.params['id']);
        this.getPostDetails(this.route.snapshot.params['id']);
    };
    EditPostComponent.prototype.getPostDetails = function (id) {
        var _this = this;
        this.postService.getPostDetails(id).subscribe(function (res) {
            console.log(res);
            _this.postDetails = {
                post_id: _this.route.snapshot.params['id'],
                fbId: _this.fbId,
                name: _this.name,
                itemName: res['itemName'],
                condition: res['condition'],
                description: res['description'],
                location: [res['loc'].coordinates[1], res['loc'].coordinates[0]],
                image: _this.image
            };
            _this.image.dataURL = res['image_full'];
            _this.image.resized.dataURL = res['image'];
            _this.base64textString = res['image'];
            _this.file_error = false;
            _this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
        }, function (error) {
            console.log(error);
        });
    };
    // trackMe() {
    //   if (navigator.geolocation) {
    //     this.isTracking = true;
    //     navigator.geolocation.watchPosition((position) => {
    //       this.showTrackingPosition(position);
    //     });
    //   } else {
    //     alert("Geolocation is not supported by this browser.");
    //   }
    // }
    // showTrackingPosition(position) {
    //   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    //   this.currentLat = position.coords.latitude;
    //   this.currentLong = position.coords.longitude;
    // }
    EditPostComponent.prototype.onImageChange = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EditPostComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        var base64 = 'data:image/png;base64,' + btoa(binaryString);
        this.image.dataURL = base64;
        this.base64textString = base64;
        // this.base64textString = resizebase64(base64, 250, 300);
        this.image.resized.dataURL = this.base64textString;
        console.log(this.base64textString);
        this.file_error = false;
    };
    EditPostComponent.prototype.updatePost = function () {
        var _this = this;
        console.log(this.postDetails);
        if (this.base64textString == undefined) {
            this.file_error = true;
        }
        if (this.form.valid) {
            this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
            console.log(this.form.value);
            if (!this.file_error) {
                this.postService.updatePost(this.postDetails).subscribe(function (res) {
                    _this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
                    _this.toastr.success("Post updated successfully", '', {
                        timeOut: 3000,
                    });
                    _this.router.navigate(['/home']);
                    console.log(res);
                }, function (error) {
                    _this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
                    _this.toastr.success("Post updated successfully", '', {
                        timeOut: 3000,
                    });
                    _this.router.navigate(['/home']);
                    console.log(error);
                });
            }
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    EditPostComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    EditPostComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    EditPostComponent.prototype.reSet = function () {
        this.form.reset();
    };
    EditPostComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    EditPostComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    EditPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-post',
            template: __webpack_require__("./src/app/layout/edit-post/edit-post.component.html"),
            styles: [__webpack_require__("./src/app/layout/edit-post/edit-post.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]])
    ], EditPostComponent);
    return EditPostComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<loading [state]=\"loading\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 main-color min-height-700   pull-right\">\r\n        <img class=\"img-fluid img-center\" src=\"assets/images/logo.png\">\r\n        <h1 class=\"text-white text-center text-size-20\">{{'TAKE_LOOK' | translate}}</h1>\r\n        <div class=\"search-sec\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{'SEARCH_IN' | translate}} {{items.length}} {{'POSTS' | translate}}\"\r\n              [(ngModel)]=\"search_key\" (keyup)=\"search(search_key)\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary half-btn\" (click)=\"searchNearby()\">\r\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{'SEARCH_NEARBY' | translate}}</button>\r\n          <button type=\"button\" class=\"btn btn-secondary half-btn\" [routerLink]=\"['/post-item']\">\r\n            <i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> {{'POST_ITEM' | translate}}</button>\r\n          <button type=\"button\" class=\"btn btn-secondary full-btn\" *ngIf=\"!fb_friends\" (click)=\"toggleFbPostList()\">\r\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> {{'POSTS_FB_FRIENDS' | translate}} </button>\r\n          <button type=\"button\" class=\"btn btn-secondary full-btn\" *ngIf=\"fb_friends\" (click)=\"toggleFbPostList()\">\r\n            {{'ALL_POSTS' | translate}} </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-9 pull-left\">\r\n        <div class=\"card mt-4 \">\r\n          <div class=\"set_loaction\" [style.visibility]=\"manual_loc_key ? 'visible' : 'hidden'\">\r\n            <input placeholder=\"Set Location Manually\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\"\r\n              class=\"form-control\" #search [formControl]=\"searchControl\">\r\n          </div>\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n            <agm-marker-cluster imagePath=\"assets/images/m\" averageCenter=\"true\" minimumClusterSize=\"2\">\r\n              <agm-marker *ngFor=\"let m of items; let i = index\" (markerClick)=\"openWindow(m._id)\" [latitude]=\"m.loc.coordinates[1] + offsets[i].lat\"\r\n                [longitude]=\"m.loc.coordinates[0] + offsets[i].lon\">\r\n\r\n                <agm-info-window [isOpen]=\"isInfoWindowOpen(m._id)\" [latitude]=\"m.loc.coordinates[1] + offsets[i].lat\"\r\n                  [longitude]=\"m.loc.coordinates[0] + offsets[i].lon\">\r\n                  <div class=\"infobox\">\r\n                    <div class=\"imgBarterDiv\">\r\n                      <img class=\"imgBarter\" [src]=\"getImage(m.image)\" />\r\n\r\n                    </div>\r\n                    <ul>\r\n                      <li>\r\n                        <h2 id=\"itemName\">\r\n                          <span>{{ 'ITEM_NAME' | translate }}:</span> {{m.itemName}}</h2>\r\n                      </li>\r\n                      <li>\r\n                        <h2 id=\"description\">\r\n                          <span>{{ 'DESCRIPTION' | translate }}:</span> {{m.description}}</h2>\r\n                      </li>\r\n                      <li>\r\n                        <h2 id=\"condition\">\r\n                          <span>{{ 'CONDITION' | translate }}:</span> {{m.condition}}</h2>\r\n                      </li>\r\n                      <li>\r\n                        <h2 id=\"name\">\r\n                          <span>{{ 'CONTACT' | translate }}:</span> {{m.name}}</h2>\r\n                      </li>\r\n                    </ul>\r\n                    <button id=\"barterButton\" (click)=\"openConversation(m)\" *ngIf=\"m.fbId != fbId\">{{ 'TITLE' |\r\n                      translate }}</button>\r\n                  </div>\r\n                </agm-info-window>\r\n              </agm-marker>\r\n            </agm-marker-cluster>\r\n          </agm-map>\r\n        </div>\r\n        <div class=\"card-outline-secondary my-4\" *ngIf=\"all_post_list.length > 0\">\r\n          <div class=\"row\">\r\n            <div class=\"full-card-sec col-md-6 \" *ngFor=\"let post of all_post_list\">\r\n              <div class=\"card-sec main-color shadow \">\r\n                <a class=\"edit shadow \" *ngIf=\"post.fbId == fbId\" [routerLink]=\"['/post-item', post._id]\">\r\n                  <i class=\"fa fa-pencil \" aria-hidden=\"true \"></i>\r\n                </a>\r\n                <img class=\"product-img \" [src]=\"getImage(post.image)\" />\r\n                <div class=\"contact-details text-white \">\r\n                  <ul>\r\n                    <li>\r\n                      <span>{{ 'ITEM_NAME' | translate }}:</span> {{post.itemName}}</li>\r\n                    <li>\r\n                      <span>{{ 'DESCRIPTION' | translate }}:</span> {{post.description}}</li>\r\n                    <li>\r\n                      <span>{{ 'CONDITION' | translate }}:</span> {{post.condition}}</li>\r\n                    <li>\r\n                      <span>{{ 'CONTACT' | translate }}:</span> {{post.name}}</li>\r\n                    <li>\r\n                      <ngb-rating [(rate)]=\"post.user_average_score\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                    </li>\r\n                    <li>\r\n                      <span>{{ 'CREATED' | translate }}:</span> {{post.createdAt| date:'MM/dd @ h:mma'}}</li>\r\n                  </ul>\r\n                  <button type=\"button \" class=\"btn btn-warning \" (click)=\"openWindow(post._id)\">{{ 'BARTER_LOC' |\r\n                    translate }}</button>\r\n                </div>\r\n                <div class=\"clearfix \"></div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</loading>\r\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__ = __webpack_require__("./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_components_conversation_conversation_component__ = __webpack_require__("./src/app/core/components/conversation/conversation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeComponent = /** @class */ (function () {
    function HomeComponent(postService, _sanitizer, dialog, toastr, mapsAPILoader, ngZone, route) {
        this.postService = postService;
        this._sanitizer = _sanitizer;
        this.dialog = dialog;
        this.toastr = toastr;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.route = route;
        this.all_post_list = [];
        this.fb_friends = false;
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].NotReady;
        this.items = [];
        this.isTracking = false;
        this.zoom = 8;
        this.lat = 30.0444;
        this.lng = 31.2357;
        this.markers = [];
        this.offsets = [];
        this.openedWindow = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.name = localStorage.getItem('name');
        this.fbId = localStorage.getItem('fbId');
        this.getPostList();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]();
        this.setManualPosition();
    };
    HomeComponent.prototype.setManualPosition = function () {
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    localStorage.setItem('current_lat', _this.lat.toString());
                    localStorage.setItem('current_lng', _this.lng.toString());
                });
            });
        });
        if ((localStorage.getItem('current_lat') && localStorage.getItem('current_lng')) || localStorage.getItem('set_loc')) {
            this.manual_loc_key = true;
        }
    };
    HomeComponent.prototype.openConversation = function (data) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__core_components_conversation_conversation_component__["a" /* ConversationComponent */], {
            width: '400px',
            data: { info: data, posts: this.items, fbId: this.fbId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                console.log(result);
            }
        });
    };
    HomeComponent.prototype.openWindow = function (id) {
        this.openedWindow = id;
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.isInfoWindowOpen = function (id) {
        return this.openedWindow == id;
    };
    HomeComponent.prototype.getOffset = function (index) {
        var r = 0.05;
        var degree = index * 2 * Math.PI / this.markers.length;
        var scaleFactor = this.markers.length / 5000;
        return {
            lat: Math.cos(degree) * scaleFactor,
            lon: Math.sin(degree) * scaleFactor
        };
    };
    HomeComponent.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition(function (position) {
                _this.showTrackingPosition(position);
            }, function (error) {
                if (localStorage.getItem('current_lat') && localStorage.getItem('current_lng')) {
                    _this.lat = +localStorage.getItem('current_lat');
                    _this.lng = +localStorage.getItem('current_lng');
                }
                else {
                    _this.manual_loc_key = true;
                    _this.toastr.error("Please allow your location, or set it manually on map", '', {
                        timeOut: 3000,
                    });
                }
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    HomeComponent.prototype.showTrackingPosition = function (position) {
        console.log("tracking postion:  " + position.coords.latitude + " - " + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
    };
    HomeComponent.prototype.getImage = function (image) {
        return this._sanitizer.bypassSecurityTrustUrl(image);
    };
    HomeComponent.prototype.toggleFbPostList = function () {
        this.fb_friends = !this.fb_friends;
        this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.getPostList();
    };
    HomeComponent.prototype.assignCopy = function () {
        this.all_post_list = Object.assign([], this.items);
    };
    HomeComponent.prototype.search = function (value) {
        if (!value)
            this.assignCopy();
        this.all_post_list = Object.assign([], this.items).filter(function (item) { return item.itemName.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.condition.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    HomeComponent.prototype.searchNearby = function () {
        this.trackMe();
    };
    HomeComponent.prototype.getPostList = function () {
        var _this = this;
        var data = { "fb_friends": this.fb_friends };
        this.postService.getAllPost(data).subscribe(function (res) {
            console.log(res);
            _this.items = [];
            _this.markers = [];
            _this.all_post_list = [];
            _this.items = res;
            _this.markers = res;
            _this.markers.forEach(function (marker, index) {
                _this.offsets.push(_this.getOffset(index));
            });
            _this.assignCopy();
            _this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
        }, function (error) {
            _this.loading = __WEBPACK_IMPORTED_MODULE_2__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "searchElementRef", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__("./src/app/layout/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_7__agm_core__["c" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/layout/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_item_post_item_component__ = __webpack_require__("./src/app/layout/post-item/post-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_post_edit_post_component__ = __webpack_require__("./src/app/layout/edit-post/edit-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '/', redirectTo: '/home', pathMatch: 'full' },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '_=_', redirectTo: '/home', pathMatch: 'full' },
            { path: '#_=_', redirectTo: '/home', pathMatch: 'full' },
            { path: '_', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'post-item', component: __WEBPACK_IMPORTED_MODULE_5__post_item_post_item_component__["a" /* PostItemComponent */] },
            { path: 'post-item/:id', component: __WEBPACK_IMPORTED_MODULE_6__edit_post_edit_post_component__["a" /* EditPostComponent */] }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"{{'direction' | translate}}\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__ = __webpack_require__("./src/app/core/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(translate, loginService) {
        this.translate = translate;
        this.loginService = loginService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.translate.use(localStorage.getItem('lang_key'));
        // this.getLoginData();
    };
    LayoutComponent.prototype.getLoginData = function () {
        this.loginService.getLoginData().subscribe(function (res) {
            console.log(res);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('fbId', res['fbId']);
            localStorage.setItem('name', res['name']);
        }, function (error) {
            console.log(error);
        });
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_login_service__["a" /* LoginService */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__ = __webpack_require__("./src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/layout/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_item_post_item_component__ = __webpack_require__("./src/app/layout/post-item/post-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_post_edit_post_component__ = __webpack_require__("./src/app/layout/edit-post/edit-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// core







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_7__post_item_post_item_component__["a" /* PostItemComponent */], __WEBPACK_IMPORTED_MODULE_8__edit_post_edit_post_component__["a" /* EditPostComponent */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/post-item/post-item.component.html":
/***/ (function(module, exports) {

module.exports = "<loading [state]=\"loading\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 main-color  min-height-700 \">\r\n                <a [routerLink]=\"['']\"><img class=\"img-fluid img-center\" src=\"assets/images/logo.png\"></a>\r\n                <h1 class=\"text-white text-center text-size-20\">{{'TAKE_LOOK' | translate}}</h1>\r\n                <div class=\"search-sec\">\r\n                    <button type=\"button\" class=\"btn btn-secondary full-btn\" (click)=\"back()\">\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i> {{ 'BACK' | translate }}</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-9 reg-sec-full\">\r\n                <div class=\"row\">\r\n                    <div class=\"login-form d-flex align-middle\">\r\n                        <div class=\"main-div margin-10 shadow\">\r\n                            <div class=\"panel\">\r\n                                <h2>{{'POSTYOURITEM' | translate}}</h2>\r\n                            </div>\r\n                            <form id=\"Login\" role=\"form\" [formGroup]=\"form\" novalidate>\r\n                                <div class=\"d-flex justify-content-between\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>{{'WHAT_ITS_CALLED' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"itemName\" [ngClass]=\"displayFieldCss('itemName')\">\r\n                                        <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('itemName')\">\r\n                                            {{'ERR_TITLE' | translate}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group mr-1 ml-1\">\r\n                                        <label>{{'TELL_US' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"description\" [ngClass]=\"displayFieldCss('description')\">\r\n                                        <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('description')\">\r\n                                            {{'ERR_DESC' | translate}}\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label>{{'WHAT_IS_CONDITION' | translate}}</label>\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"condition\" [ngClass]=\"displayFieldCss('condition')\">\r\n                                        <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('condition')\">\r\n                                            {{'ERR_CONDITION' | translate}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label>{{'UPLOAD_IMAGE' | translate}}</label>\r\n                                    <input type=\"file\" class=\"form-control is-invalid\" (change)=\"onImageChange($event)\" accept=\"image/*\" [ngClass]=\"{\r\n              'is-invalid': file_error,\r\n              'is-valid': !file_error\r\n            }\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"file_error\">\r\n                                        {{'ERR_IMAGE' | translate}}\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                <img class=\"post_image\" *ngIf=\"base64textString\" [src]=\"sanitizer.bypassSecurityTrustUrl(base64textString)\" height=\"300\" width=\"250\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addPost()\">{{'SUBMIT' | translate}}</button>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"reSet()\">{{'CLEAR' | translate}}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</loading>"

/***/ }),

/***/ "./src/app/layout/post-item/post-item.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/post-item/post-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_post_service__ = __webpack_require__("./src/app/core/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__ = __webpack_require__("./src/app/core/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostItemComponent = /** @class */ (function () {
    function PostItemComponent(formBuilder, router, postService, sanitizer, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.postService = postService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].NotReady;
        this.image = {
            dataURL: '',
            resized: {
                dataURL: ''
            }
        };
        this.isTracking = false;
    }
    PostItemComponent.prototype.ngOnInit = function () {
        this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
        this.name = localStorage.getItem('name');
        this.fbId = localStorage.getItem('fbId');
        this.trackMe();
        this.form = this.formBuilder.group({
            name: [this.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            condition: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            image: [this.image, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            itemName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            fbId: [this.fbId, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
    };
    PostItemComponent.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition(function (position) {
                _this.showTrackingPosition(position);
            }, function (error) {
                if (localStorage.getItem('current_lat') && localStorage.getItem('current_lng')) {
                    _this.currentLat = +localStorage.getItem('current_lat');
                    _this.currentLong = +localStorage.getItem('current_lng');
                }
                else {
                }
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    PostItemComponent.prototype.showTrackingPosition = function (position) {
        console.log("tracking postion:  " + position.coords.latitude + " - " + position.coords.longitude);
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
    };
    PostItemComponent.prototype.onImageChange = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    PostItemComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        var base64 = 'data:image/png;base64,' + btoa(binaryString);
        this.image.dataURL = base64;
        this.base64textString = base64;
        // this.base64textString = resizebase64(base64, 250, 300);
        this.image.resized.dataURL = this.base64textString;
        console.log(this.base64textString);
        this.file_error = false;
    };
    PostItemComponent.prototype.addPost = function () {
        var _this = this;
        if (this.currentLat == undefined && this.currentLong == undefined) {
            this.toastr.error("Please allow your location, or set it manually on map", '', {
                timeOut: 3000,
            });
            localStorage.setItem('set_loc', 'true');
            this.router.navigate(['/home']);
        }
        else {
            this.form.patchValue({
                location: [this.currentLat, this.currentLong]
            });
            console.log(this.form.value);
            if (this.base64textString == undefined) {
                this.file_error = true;
            }
            if (this.form.valid) {
                this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Processing;
                console.log(this.form.value);
                if (!this.file_error) {
                    this.postService.postItem(this.form.value).subscribe(function (res) {
                        _this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
                        _this.form.reset();
                        _this.toastr.success("Post uploaded successfully", '', {
                            timeOut: 3000,
                        });
                        _this.router.navigate(['/home']);
                        console.log(res);
                    }, function (error) {
                        _this.loading = __WEBPACK_IMPORTED_MODULE_4__core_components_loading_loading_component__["b" /* LoadingState */].Ready;
                        _this.form.reset();
                        _this.toastr.success("Post uploaded successfully", '', {
                            timeOut: 3000,
                        });
                        _this.router.navigate(['/home']);
                        console.log(error);
                    });
                }
            }
            else {
                this.markFormGroupTouched(this.form);
            }
        }
    };
    PostItemComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    PostItemComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    PostItemComponent.prototype.reSet = function () {
        this.form.reset();
    };
    PostItemComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched);
    };
    PostItemComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    PostItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-item',
            template: __webpack_require__("./src/app/layout/post-item/post-item.component.html"),
            styles: [__webpack_require__("./src/app/layout/post-item/post-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]])
    ], PostItemComponent);
    return PostItemComponent;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map