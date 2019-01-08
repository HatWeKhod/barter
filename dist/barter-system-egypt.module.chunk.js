webpackJsonp(["barter-system-egypt.module"],{

/***/ "./src/app/barter-system-egypt/barter-system-egypt-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarterSystemEgyptRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barter_system_egypt_component__ = __webpack_require__("./src/app/barter-system-egypt/barter-system-egypt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__barter_system_egypt_component__["a" /* BarterSystemEgyptComponent */] }
];
var BarterSystemEgyptRoutingModule = /** @class */ (function () {
    function BarterSystemEgyptRoutingModule() {
    }
    BarterSystemEgyptRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], BarterSystemEgyptRoutingModule);
    return BarterSystemEgyptRoutingModule;
}());



/***/ }),

/***/ "./src/app/barter-system-egypt/barter-system-egypt.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg fixed-top derk-nav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">hat-we-khod</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto center-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link text-white\" href=\"mailto:hatwekhod@yandex.com\"><img src=\"assets/images/mail-btn.png\" alt=\"\"> hatwekhod@yandex.com</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://www.facebook.com/hatwekhodbarter/\">\r\n            <img src=\"assets/images/facebook-btn.png\" alt=\"\"> Post from facebook to friends</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\"><img src=\"assets/images/login-btn.png\" alt=\"\"> Login</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- Header - set the background image for the header in the line below -->\r\n<header class=\"py-5 bg-image-full\">\r\n  <img class=\"img-fluid d-block mx-auto\" src=\"assets/images/bater-logo.png\" alt=\"\" width=\"150\" [routerLink]=\"['/']\">\r\n  <!-- <h1><span>Explore</span> Our Products\r\n  </h1> -->\r\n  <a [routerLink]=\"['/']\">Explore our Service</a>\r\n  \r\n</header>\r\n\r\n<!-- Content section -->\r\n<section class=\"py-5 about-text\">\r\n  <div class=\"container\">\r\n    <h2 class=\"headline\">Endorsing Barter System For A Better Future</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n\r\n        <p class=\"lead\">The barter system is a way to counter currency hyperinflation.<br>It's a smarter way to immune\r\n          yourself from current currency crises across the world.\r\n        </p>\r\n        <!-- <p>\r\n          The world is connected through trade and commerce and it is great but at the same time, fluctuation in\r\n          different currency rates affect the process and world economy at large. Why not then follow our forefathers?\r\n          <b>Barter system</b> in <b>ancient Egypt</b> significantly helped in forming a robust business scenario and\r\n          economy. <br><br>\r\n\r\n          Taking a page out from the glorious history of <b>ancient Egypt</b>, Hat we Khod brings you an opportunity to\r\n          make your purpose immune to the hazards of currency hyperinflation. Though <b>Egypt currency</b> crisis is\r\n          much less but having a good alternative is a smarter plan. So we bring you a platform where you can connect\r\n          to your community and trade items with other users following the <b>barter system</b>, and even share your\r\n          story with us.<br><br>\r\n\r\n          You have been using the money to get your necessities and travel places but if there are issues with carrying\r\n          cash or the electronic system fails, you might land in trouble. Hat we Khod fosters and strives to create a\r\n          bartering community which will cushion you from such risks. Moreover, it bartering can even become the\r\n          principal way to procure things and services. Not just these, by endorsing <b>barter system</b> you can also\r\n          ensure optimal utilization of personal and natural resources without any wastage. It creates a perfect\r\n          ecosystem for the community that stands by each other. <br><br>\r\n\r\n          Often we tend to ignore what helped us make our 'present'. It's time to get back to the past and endorse\r\n          bartering as a means of procuring our needs and requirements, in a more sustainable way.\r\n        </p> -->\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<!-- Image Section - set the background image for the header in the line below -->\r\n<section class=\"py-5 process derk-nav text-center\">\r\n  <div class=\"container\">\r\n    <h2 class=\"headline\">process flow</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <img class=\"img-fluid\" src=\"assets/images/pass-word.png\" alt=\"\">\r\n        <h3>Login</h3>\r\n        <!-- <p>Browse items within your community a placerat elementum</p> -->\r\n\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <img class=\"img-fluid\" src=\"assets/images/location.png\" alt=\"\">\r\n        <h3>Choose your location</h3>\r\n        <!-- <p>Browse items within your community a placerat elementum</p> -->\r\n\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <img class=\"img-fluid\" src=\"assets/images/select.png\" alt=\"\">\r\n        <h3>Offer your product/service</h3>\r\n        <!-- <p>Browse items within your community a placerat elementum</p> -->\r\n\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <img class=\"img-fluid\" src=\"assets/images/handshake.png\" alt=\"\">\r\n        <h3>Lets barter</h3>\r\n        <!-- <p>Browse items within your community a placerat elementum</p> -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\" search-site\">\r\n  <img class=\"img-fluid\" src=\"assets/images/cover-image1.jpg\" alt=\"\">\r\n</section>\r\n\r\n\r\n<section class=\"map-location \">\r\n  <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d442764.2895154335!2d30.89581!3d29.890334000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7686c83eb4e20600!2sSphinx+International+Airport!5e0!3m2!1sen!2sus!4v1532167115357\"\r\n    frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n</section>\r\n\r\n\r\n<!-- Footer -->\r\n<footer class=\"py-3 bg-dark\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row part-ii\">\r\n\r\n\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <img class=\"img-fluid\" src=\"assets/images/bater-footer-logo.png\" alt=\"\" [routerLink]=\"['/']\">\r\n\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <h3>Social share</h3>\r\n        <ul>\r\n          <li> <a target=\"_blank\" href=\"https://www.facebook.com/hatwekhodbarter/\"><i class=\"fa fa-facebook\"\r\n                aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://twitter.com/hatwekhod\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://www.instagram.com/hatwekhod/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://www.pinterest.com/hatwekhod/\"><i class=\"fa fa-pinterest-square\"\r\n                aria-hidden=\"true\"></i></a></li>\r\n          <li> <a target=\"_blank\" href=\"https://plus.google.com/u/0/107237992379654410802\"><i class=\"fa fa-google\"\r\n                aria-hidden=\"true\"></i></a></li>\r\n        </ul>\r\n\r\n\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-12\">\r\n        <h3>What is HatWeKhod?</h3>\r\n        <p>HatWeKhod is an open source project that connects you to your community and allows you to trade items with other people in your area.</p>\r\n        <!-- <p>Barter is an interface that connects you to your community and allows you to trade items with other users\r\n          and share the story behind them.\r\n        </p> -->\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/barter-system-egypt/barter-system-egypt.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  margin-top: 75px; }\n\n@media (min-width: 992px) {\n  header {\n    margin: 56px 0 0 0; } }\n\n@media (max-width: 991px) {\n  header {\n    margin: 0; } }\n\n.derk-nav {\n  background: #000000; }\n\n.navbar-brand {\n  display: none; }\n\n.center-nav {\n  margin: 0 auto; }\n\n.center-nav a {\n  color: #fff;\n  font-size: 16px; }\n\n.center-nav li {\n  margin: 0 12px; }\n\n.center-nav a img {\n  margin-right: 10px; }\n\n.bg-image-full {\n  background: url('banner-image.26ce66d13979a8e9a49d.jpg') no-repeat 0 0;\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 0 50px; }\n\n.bg-image-full h1 {\n  color: #fff;\n  font-size: 52px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n.bg-image-full h1 span {\n  display: block;\n  color: #ff9933; }\n\n.bg-image-full a {\n  text-align: center;\n  text-transform: uppercase;\n  display: block;\n  width: 271px;\n  background: #ff9933;\n  margin: 0 auto;\n  color: #fff;\n  padding: 16px 15px;\n  border-radius: 28px;\n  font-size: 17px;\n  text-shadow: 1px 1px #777676;\n  -webkit-transition: all .40s ease-out;\n  transition: all .40s ease-out; }\n\n.bg-image-full a:hover {\n  background: #af671f;\n  -webkit-transition: all .40s ease;\n  transition: all .40s ease; }\n\n.headline {\n  text-align: center;\n  font-weight: 600;\n  font-size: 28px;\n  text-transform: uppercase;\n  margin-bottom: 50px; }\n\n.process h2 {\n  color: #fff; }\n\n.process img {\n  text-align: center;\n  margin: 0 auto 10px;\n  display: block; }\n\n.process h3 {\n  color: #fff;\n  font-weight: 600;\n  font-size: 28px; }\n\n.process p {\n  font-size: 15px;\n  color: #6f6d6d; }\n\n.process .col-md-3 {\n  border-left: 1px solid #383838;\n  border-right: 1px solid #383838; }\n\n.search-site iframe {\n  width: 100%;\n  height: 400px; }\n\n.search-site {\n  position: relative; }\n\n.search-box {\n  background: #afafaf;\n  border-radius: 3px;\n  padding: 20px;\n  width: 791px;\n  margin: 0 auto;\n  position: absolute;\n  top: 275px;\n  z-index: 1;\n  left: 21%;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }\n\n.search-btn {\n  background: #ff9933;\n  color: #fff;\n  margin-left: 30px; }\n\n.search-box input {\n  height: 46px;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }\n\n.search-box button {\n  background: #ff9933;\n  color: #fff;\n  margin-left: 30px;\n  font-size: 17px;\n  text-transform: uppercase;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }\n\n.item-headline h2 {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAPCAYAAABz7B+mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlDMTNFOEUyOEI0NjExRThBNUYzQ0I2Rjc2MzNCNUNFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDMTNFOEUzOEI0NjExRThBNUYzQ0I2Rjc2MzNCNUNFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUMxM0U4RTA4QjQ2MTFFOEE1RjNDQjZGNzYzM0I1Q0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUMxM0U4RTE4QjQ2MTFFOEE1RjNDQjZGNzYzM0I1Q0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59L7GSAAABz0lEQVR42uzbMWgTURzH8Xd3L5eTmBCkSzAoWOzQIV3bZqijm6AudRDqVIh0KZKG0qHgUDqISxV0dO5W6uDSEEgCAcVKI0UpBUGJtFAimtC+u9fSrSBNzpIzCd/Pdsf7Lz/4839/jjMajYYAEDTPkLuvb6vk5IaQMZoQ+A9MIgACbrqf71JOPl2QOyvrTmFiO/R54ZHwFL0IBMxgAwQCcrh/2f6YWTR/VWdOnuTZqWhX1bWprLqRWSMogAEI9I3Q12f3rG9vngvtJs87p2V0Q92czbmJu2VSAxiAQG8Pv63stFV7+7LtAjP8qXmrkiI5oLP47gB0+pap6nF/FZ5NagADEOh5Wkbr/gq8S6QGdJ4sF4uaGIB/Nzo+brTYAX32mJbtnCqXSvQuwAYIdPM1M/Lb3/zTEUIDAmjN1rdXABdiSOW3oq3Nc2yM3gXYAIEuZjlNfwU6RmgAAxDoee6V9KYwnQ/t7X5mzb16/yGpAZ3Hf4BAEDxlhr4sPbC+rz4V2r3+txM6MvjqcORFTjuJAwIDGIBAf1F/bLs699jcy+eE0AOn7yzn/dHQ/LSbuFMhIIABCPR34zV/xENb2Sc6PFA7Gl5eEaZ0SQUI1rEAAwC4UIVHgBjrrQAAAABJRU5ErkJggg==) no-repeat center 39px;\n  padding-bottom: 28px;\n  margin-bottom: 15px; }\n\n.button-line li a {\n  background: #313131;\n  color: #fff;\n  padding: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin: 6px;\n  border-radius: 4px;\n  text-align: center; }\n\n.button-line li {\n  display: initial; }\n\n.button-line {\n  margin: 0 auto 25px;\n  text-align: center; }\n\n.item-detail a {\n  background: #313131;\n  color: #fff;\n  padding: 10px 35px;\n  border-radius: 4px;\n  text-align: center; }\n\n.item-section {\n  border-radius: 5px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  padding-bottom: 25px; }\n\n.item-section img {\n  width: 357px;\n  height: 198px; }\n\n.item-section h3 {\n  font-size: 22px;\n  font-weight: 600; }\n\n.item-section p {\n  font-size: 13px;\n  color: #a49e9e; }\n\n.from-input-box {\n  margin: 0 auto; }\n\n.button-round {\n  background: #ff9933;\n  color: #fff;\n  border-radius: 20px;\n  padding: 10px 33px; }\n\n.section-center {\n  margin: 0 auto;\n  text-align: center; }\n\n.from-input-box .form-control {\n  border: none;\n  border-bottom: 2px solid #ced4da; }\n\n.map-location iframe {\n  width: 100%;\n  height: 333px; }\n\n.map-location {\n  position: relative; }\n\n.map-location .address-bar {\n  position: absolute;\n  top: 32px;\n  background: #fff;\n  left: 176px;\n  padding: 50px 15px;\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }\n\n.map-location .address-bar a {\n  color: #7e7e7e; }\n\n.address-bar li {\n  margin: 15px 0; }\n\n.testi-comment {\n  background: url('testimonial-border.258337431c97605e2ec4.png') no-repeat 0 0;\n  background-size: contain;\n  padding-top: 43px;\n  font-size: 12px;\n  color: #fff; }\n\n.testi-bg {\n  background: url('testi-bg.5f59a880ecb0211d391d.jpg') no-repeat 0 0;\n  background-size: cover;\n  background-attachment: fixed;\n  padding: 80px 0; }\n\n.testi-bg h2 {\n  color: #ff9933; }\n\n.from-input-box strong {\n  color: #ff9933;\n  display: block;\n  text-align: center; }\n\n.from-input-box span {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: #fff; }\n\nfooter .footer-sec {\n  border-left: 3px solid #ff9933;\n  padding-left: 10px; }\n\nfooter .footer-sec h3 {\n  color: #ff9933;\n  font-weight: bold; }\n\nfooter .footer-sec a {\n  display: block;\n  color: #fff; }\n\nfooter .part-ii p {\n  color: #fff; }\n\nfooter .part-ii {\n  margin-top: 33px; }\n\nfooter .part-ii h3 {\n  color: #fff;\n  font-weight: bold; }\n\nfooter .part-ii a {\n  color: #fff;\n  padding: 12px;\n  width: 36px;\n  height: 35px;\n  background: #181818;\n  border-radius: 50%;\n  display: inherit;\n  line-height: 11px; }\n\nfooter .part-ii a:hover {\n  background: #ff9933; }\n\nfooter .part-ii li {\n  display: inline-block; }\n\n@media screen and (max-width: 992px) {\n  .derk-nav {\n    display: none; }\n  body {\n    padding-top: 0px; }\n  .about-text {\n    text-align: justify; }\n  .bg-image-full a {\n    width: 100%; }\n  .part-ii {\n    text-align: center;\n    display: block; }\n  .headline {\n    font-size: 15px; } }\n\n.container.ng-scope {\n  width: 100%;\n  max-width: 100%;\n  padding: 0; }\n\n.navbar-nav a {\n  background: transparent;\n  width: auto; }\n"

/***/ }),

/***/ "./src/app/barter-system-egypt/barter-system-egypt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarterSystemEgyptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_seo_service__ = __webpack_require__("./src/app/core/services/seo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarterSystemEgyptComponent = /** @class */ (function () {
    function BarterSystemEgyptComponent(_seoService, activatedRoute, router) {
        this._seoService = _seoService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    BarterSystemEgyptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this._seoService.updateTitle(data['title']);
            _this._seoService.updateDescription(data['description']);
            _this._seoService.updateKeywords(data['keywords']);
        });
    };
    BarterSystemEgyptComponent.prototype.canDeactivate = function () {
        if (!localStorage.getItem('isLoggedin')) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    BarterSystemEgyptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-barter-system-egypt',
            template: __webpack_require__("./src/app/barter-system-egypt/barter-system-egypt.component.html"),
            styles: [__webpack_require__("./src/app/barter-system-egypt/barter-system-egypt.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_seo_service__["a" /* SeoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], BarterSystemEgyptComponent);
    return BarterSystemEgyptComponent;
}());



/***/ }),

/***/ "./src/app/barter-system-egypt/barter-system-egypt.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarterSystemEgyptModule", function() { return BarterSystemEgyptModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barter_system_egypt_routing_module__ = __webpack_require__("./src/app/barter-system-egypt/barter-system-egypt-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__barter_system_egypt_component__ = __webpack_require__("./src/app/barter-system-egypt/barter-system-egypt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BarterSystemEgyptModule = /** @class */ (function () {
    function BarterSystemEgyptModule() {
    }
    BarterSystemEgyptModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__barter_system_egypt_routing_module__["a" /* BarterSystemEgyptRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__barter_system_egypt_component__["a" /* BarterSystemEgyptComponent */]]
        })
    ], BarterSystemEgyptModule);
    return BarterSystemEgyptModule;
}());



/***/ })

});
//# sourceMappingURL=barter-system-egypt.module.chunk.js.map