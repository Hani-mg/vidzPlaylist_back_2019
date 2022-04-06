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
/* harmony import */ var _pages_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/play-list/play-list.component */ "./src/app/pages/play-list/play-list.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/playList', pathMatch: 'full' },
    { path: 'playList', component: _pages_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_2__["PlayListComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

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
        this.title = 'vidzPlayList';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/play-list/play-list.component */ "./src/app/pages/play-list/play-list.component.ts");
/* harmony import */ var _pages_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/shared/header/header.component */ "./src/app/pages/shared/header/header.component.ts");
/* harmony import */ var _pages_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/shared/footer/footer.component */ "./src/app/pages/shared/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_4__["PlayListComponent"],
                _pages_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _pages_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business/service/video.service.ts":
/*!***************************************************!*\
  !*** ./src/app/business/service/video.service.ts ***!
  \***************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_webServiceConfiguration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/webServiceConfiguration */ "./src/app/business/utilities/webServiceConfiguration.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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



var VideoService = /** @class */ (function (_super) {
    __extends(VideoService, _super);
    function VideoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    VideoService.prototype.getVideosDefault = function () {
        var url = this.beginningLinkYoutubeAcces + 'search?key=AIzaSyCwxpkHS0Hl6ygZk6Whz4eIf1JZHNNiVLk&part=snippet,id&order=date&maxResults=6';
        console.log(url);
        this.http.get(url).subscribe(function (response) { return console.log(response); });
    };
    VideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], VideoService);
    return VideoService;
}(_utilities_webServiceConfiguration__WEBPACK_IMPORTED_MODULE_2__["WebServiceConfiguration"]));



/***/ }),

/***/ "./src/app/business/utilities/webServiceConfiguration.ts":
/*!***************************************************************!*\
  !*** ./src/app/business/utilities/webServiceConfiguration.ts ***!
  \***************************************************************/
/*! exports provided: WebServiceConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServiceConfiguration", function() { return WebServiceConfiguration; });
var WebServiceConfiguration = /** @class */ (function () {
    function WebServiceConfiguration() {
        //serverUrl: string = "https://kozkoz.herokuapp.com";
        this.serverUrl = "http://localhost:8080";
        this.socketUrl = this.serverUrl + "/socket";
        this.apiKeyYoutube = "AIzaSyCwxpkHS0Hl6ygZk6Whz4eIf1JZHNNiVLk";
        this.beginningLinkYoutubeAcces = "https://www.googleapis.com/youtube/v3/";
    }
    return WebServiceConfiguration;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _business_service_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../business/service/video.service */ "./src/app/business/service/video.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(videoService) {
        this.videoService = videoService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.videos();
    };
    HomeComponent.prototype.videos = function () {
        //console.log("WHY ");
        this.videoService.getVideosDefault();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_business_service_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/play-list/play-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/play-list/play-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXktbGlzdC9wbGF5LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/play-list/play-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/play-list/play-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Blog Area Start -->\n    <section class=\"razo-blog-area section-padding-80-0\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!-- Weekly News Area -->\n                <div class=\"col-12 col-md-8\">\n                    <div class=\"weekly-news-area mb-50\">\n                        <!-- Section Heading -->\n                        <div class=\"section-heading\">\n                            <h2>Blog New</h2>\n                        </div>\n\n                        <!-- Featured Post Area -->\n\t\t\t\t\t\t//\n                        <div class=\"featured-post-area bg-img bg-overlay mb-30\" style=\"background-image: url(img/bg-img/11.jpg);\">\n                            <!-- Post Overlay -->\n                            <div class=\"post-overlay\">\n                                <div class=\"post-meta\">\n                                    <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                    <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                </div>\n                                <a href=\"single-blog.html\" class=\"post-title\">The light and music exposition hits los angeles in the fashion week</a>\n                            </div>\n                        </div>\n\t\t\t\t\t\t//\n\t\t\t\t\t\t<div class=\"col-12\">\n                    <div class=\"featured-trending-video mb-30 wow fadeInUp\" data-wow-delay=\"100ms\" style=\"visibility: visible; animation-delay: 100ms; animation-name: fadeInUp;\">\n                        <iframe src=\"https://www.youtube.com/embed/zRvhQ5Rf6-U\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"\"></iframe>\n                    </div>\n                </div>\n\t\t\t\t\t\t\n                        <div class=\"row\">\n\n                            <!-- Single Post Area -->\n                            <div class=\"col-12 col-md-6\">\n                                <div class=\"razo-single-post d-flex mb-30\">\n                                    <!-- Post Thumbnail -->\n                                    <div class=\"post-thumbnail\">\n                                        <a href=\"single-blog.html\"><img src=\"img/bg-img/13.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <!-- Post Content -->\n                                    <div class=\"post-content\">\n                                        <div class=\"post-meta\">\n                                            <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                            <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                        </div>\n                                        <a href=\"single-blog.html\" class=\"post-title\">Drug bust leads police to underground tunnel</a>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- Single Post Area -->\n                            <div class=\"col-12 col-md-6\">\n                                <div class=\"razo-single-post d-flex mb-30\">\n                                    <!-- Post Thumbnail -->\n                                    <div class=\"post-thumbnail\">\n                                        <a href=\"single-blog.html\"><img src=\"img/bg-img/14.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <!-- Post Content -->\n                                    <div class=\"post-content\">\n                                        <div class=\"post-meta\">\n                                            <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                            <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                        </div>\n                                        <a href=\"single-blog.html\" class=\"post-title\">Hear abuse victims' messages for the Pope</a>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- Single Post Area -->\n                            <div class=\"col-12 col-md-6\">\n                                <div class=\"razo-single-post d-flex mb-30\">\n                                    <!-- Post Thumbnail -->\n                                    <div class=\"post-thumbnail\">\n                                        <a href=\"single-blog.html\"><img src=\"img/bg-img/15.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <!-- Post Content -->\n                                    <div class=\"post-content\">\n                                        <div class=\"post-meta\">\n                                            <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                            <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                        </div>\n                                        <a href=\"single-blog.html\" class=\"post-title\">New Mexico uspects' attorneys file to have all</a>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <!-- Single Post Area -->\n                            <div class=\"col-12 col-md-6\">\n                                <div class=\"razo-single-post d-flex mb-30\">\n                                    <!-- Post Thumbnail -->\n                                    <div class=\"post-thumbnail\">\n                                        <a href=\"single-blog.html\"><img src=\"img/bg-img/16.jpg\" alt=\"\"></a>\n                                    </div>\n                                    <!-- Post Content -->\n                                    <div class=\"post-content\">\n                                        <div class=\"post-meta\">\n                                            <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                            <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                        </div>\n                                        <a href=\"single-blog.html\" class=\"post-title\">Trump tweets false white supremacist talking</a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Trending News Area -->\n                <div class=\"col-12 col-md-4\">\n                    <div class=\"trending-news-area mb-50\">\n\n                        <!-- Section Heading -->\n                        <div class=\"section-heading\">\n                            <h2>Trending</h2>\n                        </div>\n\n                        <!-- Featured Post Area -->\n                        <div class=\"featured-post-area small-featured-post bg-img bg-overlay mb-30\" style=\"background-image: url(img/bg-img/12.jpg);\">\n                            <!-- Post Overlay -->\n                            <div class=\"post-overlay\">\n                                <div class=\"post-meta\">\n                                    <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                    <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                </div>\n                                <a href=\"single-blog.html\" class=\"post-title\">Hawaii braces for Hurricane Lane</a>\n                            </div>\n                        </div>\n\n                        <!-- Single Post Area -->\n                        <div class=\"razo-single-post d-flex mb-30\">\n                            <!-- Post Thumbnail -->\n                            <div class=\"post-thumbnail\">\n                                <a href=\"single-blog.html\"><img src=\"img/bg-img/17.jpg\" alt=\"\"></a>\n                            </div>\n                            <!-- Post Content -->\n                            <div class=\"post-content\">\n                                <div class=\"post-meta\">\n                                    <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                    <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                </div>\n                                <a href=\"single-blog.html\" class=\"post-title\">Hurricane Lane brings 19 inches of rain</a>\n                            </div>\n                        </div>\n\n                        <!-- Single Post Area -->\n                        <div class=\"razo-single-post d-flex mb-30\">\n                            <!-- Post Thumbnail -->\n                            <div class=\"post-thumbnail\">\n                                <a href=\"single-blog.html\"><img src=\"img/bg-img/18.jpg\" alt=\"\"></a>\n                            </div>\n                            <!-- Post Content -->\n                            <div class=\"post-content\">\n                                <div class=\"post-meta\">\n                                    <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                    <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                </div>\n                                <a href=\"single-blog.html\" class=\"post-title\">What these victims want the Pope to know</a>\n                            </div>\n                        </div>\n\n                        <!-- Single Post Area -->\n                        <div class=\"razo-single-post d-flex mb-30\">\n                            <!-- Post Thumbnail -->\n                            <div class=\"post-thumbnail\">\n                                <a href=\"single-blog.html\"><img src=\"img/bg-img/19.jpg\" alt=\"\"></a>\n                            </div>\n                            <!-- Post Content -->\n                            <div class=\"post-content\">\n                                <div class=\"post-meta\">\n                                    <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                    <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                </div>\n                                <a href=\"single-blog.html\" class=\"post-title\">What happens if you don't have a will?</a>\n                            </div>\n                        </div>\n\n                        <!-- Single Post Area -->\n                        <div class=\"razo-single-post d-flex mb-30\">\n                            <!-- Post Thumbnail -->\n                            <div class=\"post-thumbnail\">\n                                <a href=\"single-blog.html\"><img src=\"img/bg-img/20.jpg\" alt=\"\"></a>\n                            </div>\n                            <!-- Post Content -->\n                            <div class=\"post-content\">\n                                <div class=\"post-meta\">\n                                    <a href=\"#\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> 2.1k</a>\n                                    <a href=\"#\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 3.6k</a>\n                                </div>\n                                <a href=\"single-blog.html\" class=\"post-title\">Giuliani: No reason for Trump impeachment</a>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- Blog Area End -->\n\n    <!-- Music Charts Area Start -->\n    <section class=\"razo-music-charts-area section-padding-80 bg-overlay bg-img jarallax\" style=\"background-image: url(img/bg-img/31.jpg);\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!-- Section Heading -->\n                <div class=\"col-sm-6\">\n                    <div class=\"section-heading white\">\n                        <h2>Music Chart</h2>\n                    </div>\n                </div>\n                <!-- Show All Button -->\n                <div class=\"col-sm-6\">\n                    <div class=\"show-all-button mb-50 text-right\">\n                        <a href=\"#\" class=\"btn show-all-btn\">Show All Trending (Top 10)</a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-12\">\n\n                    <!-- Single Music Chart -->\n                    <div class=\"single-music-chart d-flex align-items-center justify-content-between wow fadeInUp\" data-wow-delay=\"100ms\">\n                        <!-- Music Content -->\n                        <div class=\"music-content d-flex align-items-center\">\n                            <div class=\"sl-number\">\n                                <h5>1.</h5>\n                            </div>\n                            <div class=\"music-thumb\">\n                                <img src=\"./assets/img/bg-img/25.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"audio-player\">\n                                <audio preload=\"auto\" controls>\n                                    <source src=\"./assets/audio/dummy-audio.mp3\">\n                                </audio>\n                            </div>\n                            <div class=\"music-title\">\n                                <h5>Way Back Home - <span>RadioDaily Show</span></h5>\n                            </div>\n                        </div>\n                        <!-- Music Price -->\n                        <div class=\"music-price\">\n                            <a href=\"#\" class=\"btn razo-btn btn-2\">$12.99</a>\n                        </div>\n                    </div>\n\n                    <!-- Single Music Chart -->\n                    <div class=\"single-music-chart d-flex align-items-center justify-content-between wow fadeInUp\" data-wow-delay=\"300ms\">\n                        <!-- Music Content -->\n                        <div class=\"music-content d-flex align-items-center\">\n                            <div class=\"sl-number\">\n                                <h5>2.</h5>\n                            </div>\n                            <div class=\"music-thumb\">\n                                <img src=\"./assets/img/bg-img/26.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"audio-player\">\n                                <audio preload=\"auto\" controls>\n                                    <source src=\"./assets/audio/dummy-audio.mp3\">\n                                </audio>\n                            </div>\n                            <div class=\"music-title\">\n                                <h5>Goodbye &amp; Good Riddance - <span>Juice World</span></h5>\n                            </div>\n                        </div>\n                        <!-- Music Price -->\n                        <div class=\"music-price\">\n                            <a href=\"#\" class=\"btn razo-btn btn-2\">$10.99</a>\n                        </div>\n                    </div>\n\n                    <!-- Single Music Chart -->\n                    <div class=\"single-music-chart d-flex align-items-center justify-content-between wow fadeInUp\" data-wow-delay=\"500ms\">\n                        <!-- Music Content -->\n                        <div class=\"music-content d-flex align-items-center\">\n                            <div class=\"sl-number\">\n                                <h5>3.</h5>\n                            </div>\n                            <div class=\"music-thumb\">\n                                <img src=\"img/bg-img/27.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"audio-player\">\n                                <audio preload=\"auto\" controls>\n                                    <source src=\"audio/dummy-audio.mp3\">\n                                </audio>\n                            </div>\n                            <div class=\"music-title\">\n                                <h5>The Greatest Showman - <span>Soundtrack</span></h5>\n                            </div>\n                        </div>\n                        <!-- Music Price -->\n                        <div class=\"music-price\">\n                            <a href=\"#\" class=\"btn razo-btn btn-2\">$10.99</a>\n                        </div>\n                    </div>\n\n                    <!-- Single Music Chart -->\n                    <div class=\"single-music-chart d-flex align-items-center justify-content-between wow fadeInUp\" data-wow-delay=\"700ms\">\n                        <!-- Music Content -->\n                        <div class=\"music-content d-flex align-items-center\">\n                            <div class=\"sl-number\">\n                                <h5>4.</h5>\n                            </div>\n                            <div class=\"music-thumb\">\n                                <img src=\"img/bg-img/28.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"audio-player\">\n                                <audio preload=\"auto\" controls>\n                                    <source src=\"audio/dummy-audio.mp3\">\n                                </audio>\n                            </div>\n                            <div class=\"music-title\">\n                                <h5>Mamma Mia! Here We Go Again - <span>Soundtrack</span></h5>\n                            </div>\n                        </div>\n                        <!-- Music Price -->\n                        <div class=\"music-price\">\n                            <a href=\"#\" class=\"btn razo-btn btn-2\">$10.99</a>\n                        </div>\n                    </div>\n\n                    <!-- Single Music Chart -->\n                    <div class=\"single-music-chart d-flex align-items-center justify-content-between wow fadeInUp\" data-wow-delay=\"900ms\">\n                        <!-- Music Content -->\n                        <div class=\"music-content d-flex align-items-center\">\n                            <div class=\"sl-number\">\n                                <h5>5.</h5>\n                            </div>\n                            <div class=\"music-thumb\">\n                                <img src=\"img/bg-img/29.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"audio-player\">\n                                <audio preload=\"auto\" controls>\n                                    <source src=\"audio/dummy-audio.mp3\">\n                                </audio>\n                            </div>\n                            <div class=\"music-title\">\n                                <h5>Pray For The Wicked - <span>Panic! At The Disco</span></h5>\n                            </div>\n                        </div>\n                        <!-- Music Price -->\n                        <div class=\"music-price\">\n                            <a href=\"#\" class=\"btn razo-btn btn-2\">$10.99</a>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- Music Charts Area End -->\n\n   \n   \n\n"

/***/ }),

/***/ "./src/app/pages/play-list/play-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/play-list/play-list.component.ts ***!
  \********************************************************/
/*! exports provided: PlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListComponent", function() { return PlayListComponent; });
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

var PlayListComponent = /** @class */ (function () {
    function PlayListComponent() {
    }
    PlayListComponent.prototype.ngOnInit = function () {
    };
    PlayListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-play-list',
            template: __webpack_require__(/*! ./play-list.component.html */ "./src/app/pages/play-list/play-list.component.html"),
            styles: [__webpack_require__(/*! ./play-list.component.css */ "./src/app/pages/play-list/play-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayListComponent);
    return PlayListComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/footer/footer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/shared/footer/footer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/shared/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/shared/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Footer Area Start -->\n <footer class=\"footer-area\">\n        \n  <!-- Copywrite Text -->\n  <div class=\"copywrite-area\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-12\">\n                  <!-- Copywrite Text -->\n                  <div class=\"copywrite-text\">\n                      <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</footer>\n<!-- Footer Area End -->\n\n"

/***/ }),

/***/ "./src/app/pages/shared/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/shared/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/header/header.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/shared/header/header.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/shared/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/shared/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Preloader -->\n <div id=\"preloader\">\n  <div>\n      <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n      </div>\n      <span>Wait, please...</span>\n  </div>\n</div>\n<!-- /Preloader -->\n\n<!-- Top Search Area Start -->\n<div class=\"top-search-area\">\n  <div class=\"modal fade\" id=\"searchModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n              <div class=\"modal-body\">\n                  <!-- Close Button -->\n                  <button type=\"button\" class=\"btn close-btn\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i></button>\n                  <!-- Form -->\n                  <form action=\"index.html\" method=\"post\">\n                      <input type=\"search\" name=\"top-search-bar\" class=\"form-control\" placeholder=\"Type keywords and hit enter...\">\n                      <button type=\"submit\">Search</button>\n                  </form>\n                  <!-- Search Button -->\n                  <div class=\"search-btn\"><i class=\"icon_search\"></i></div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n<!-- Top Search Area End -->\n\n<!-- Social Share Area Start -->\n<div class=\"razo-social-share-area\">\n  <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n  <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n  <a href=\"#\" class=\"pinterest\"><i class=\"fa fa-pinterest\"></i></a>\n  <a href=\"#\" class=\"instagram\"><i class=\"fa fa-instagram\"></i></a>\n  <a href=\"#\" class=\"youtube\"><i class=\"fa fa-youtube-play\"></i></a>\n  <a href=\"#\" class=\"ss-close-btn\"><i class=\"arrow_right\"></i></a>\n</div>\n<!-- Social Share Area End -->\n\n<!-- Header Area Start -->\n<header class=\"header-area\">\n  <!-- Main Header Start -->\n  <div class=\"main-header-area\">\n      <div class=\"classy-nav-container breakpoint-off\">\n          <div class=\"container\">\n              <!-- Classy Menu -->\n              <nav class=\"classy-navbar justify-content-between\" id=\"razoNav\">\n\n                  <!-- Logo -->\n                  <a class=\"nav-brand\" href=\"index.html\"><img src=\"./img/core-img/logo.png\" alt=\"\"></a>\n\n                  <!-- Navbar Toggler -->\n                  <div class=\"classy-navbar-toggler\">\n                      <span class=\"navbarToggler\"><span></span><span></span><span></span></span>\n                  </div>\n\n                  <!-- Menu -->\n                  <div class=\"classy-menu\">\n                      <!-- Menu Close Button -->\n                      <div class=\"classycloseIcon\">\n                          <div class=\"cross-wrap\"><span class=\"top\"></span><span class=\"bottom\"></span></div>\n                      </div>\n\n                      <!-- Nav Start -->\n                      <div class=\"classynav\">\n                          <ul id=\"nav\">\n                              <li><a href=\"./index.html\">Home</a></li>\n                              <li><a href=\"#\">Pages</a>\n                                  <ul class=\"dropdown\">\n                                      <li><a href=\"./index.html\">- Home</a></li>\n                                      <li><a href=\"./charts.html\">- Charts</a></li>\n                                      <li><a href=\"./single-charts.html\">- Charts Details</a></li>\n                                      <li><a href=\"./podcast.html\">- Podcast</a></li>\n                                      <li><a href=\"./single-podcast.html\">- Podcast Details</a></li>\n                                      <li><a href=\"./show.html\">- Show</a></li>\n                                      <li><a href=\"./events.html\">- Event</a></li>\n                                      <li><a href=\"./blog.html\">- Blog</a></li>\n                                      <li><a href=\"./single-blog.html\">- Blog Details</a></li>\n                                      <li><a href=\"#\">- Dropdown</a>\n                                          <ul class=\"dropdown\">\n                                              <li><a href=\"#\">- Dropdown Item</a></li>\n                                              <li><a href=\"#\">- Dropdown Item</a></li>\n                                              <li><a href=\"#\">- Dropdown Item</a></li>\n                                              <li><a href=\"#\">- Dropdown Item</a></li>\n                                          </ul>\n                                      </li>\n                                  </ul>\n                              </li>\n                              <li><a href=\"./show.html\">Shows</a></li>\n                              <li><a href=\"./charts.html\">Charts</a></li>\n                              <li><a href=\"./podcast.html\">Podcasts</a></li>\n                              <li><a href=\"#\">Mega</a>\n                                  <div class=\"megamenu\">\n                                      <ul class=\"single-mega cn-col-4\">\n                                          <li><a href=\"./index.html\">- Home</a></li>\n                                          <li><a href=\"./charts.html\">- Charts</a></li>\n                                          <li><a href=\"./single-charts.html\">- Charts Details</a></li>\n                                          <li><a href=\"./podcast.html\">- Podcast</a></li>\n                                          <li><a href=\"./single-podcast.html\">- Podcast Details</a></li>\n                                      </ul>\n                                      <ul class=\"single-mega cn-col-4\">\n                                          <li><a href=\"./show.html\">- Show</a></li>\n                                          <li><a href=\"./events.html\">- Event</a></li>\n                                          <li><a href=\"./blog.html\">- Blog</a></li>\n                                          <li><a href=\"./single-blog.html\">- Blog Details</a></li>\n                                          <li><a href=\"./index.html\">- Home</a></li>\n                                      </ul>\n                                      <ul class=\"single-mega cn-col-4\">\n                                          <li><a href=\"./charts.html\">- Charts</a></li>\n                                          <li><a href=\"./single-charts.html\">- Charts Details</a></li>\n                                          <li><a href=\"./podcast.html\">- Podcast</a></li>\n                                          <li><a href=\"./single-podcast.html\">- Podcast Details</a></li>\n                                          <li><a href=\"./show.html\">- Show</a></li>\n                                      </ul>\n                                      <ul class=\"single-mega cn-col-4\">\n                                          <li><a href=\"./show.html\">- Show</a></li>\n                                          <li><a href=\"./events.html\">- Event</a></li>\n                                          <li><a href=\"./blog.html\">- Blog</a></li>\n                                          <li><a href=\"./single-blog.html\">- Blog Details</a></li>\n                                          <li><a href=\"./index.html\">- Home</a></li>\n                                      </ul>\n                                  </div>\n                              </li>\n                              <li><a href=\"./events.html\">Events</a></li>\n                              <li><a href=\"./blog.html\">Blog</a></li>\n                          </ul>\n\n                          <!-- Share Icon -->\n                          <div class=\"social-share-icon\">\n                              <i class=\"social_share\"></i>\n                          </div>\n\n                          <!-- Search Icon -->\n                          <div class=\"search-icon\" data-toggle=\"modal\" data-target=\"#searchModal\">\n                              <i class=\"icon_search\"></i>\n                          </div>\n                      </div>\n                      <!-- Nav End -->\n                  </div>\n              </nav>\n          </div>\n      </div>\n  </div>\n</header>\n<!-- Header Area End -->"

/***/ }),

/***/ "./src/app/pages/shared/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/shared/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/pages/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/pages/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ITU\M1\Rojo\PlayList\VidzPlayList\vidzPlayList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map