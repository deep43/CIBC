(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./basic-login/basic-login.module": [
		"./src/app/theme/auth/login/basic-login/basic-login.module.ts",
		"basic-login-basic-login-module"
	],
	"./bulk/bulk.module": [
		"./src/app/theme/dashboard/bulk/bulk.module.ts",
		"bulk-bulk-module~trading-trading-module",
		"bulk-bulk-module"
	],
	"./landing/landing.module": [
		"./src/app/theme/auth/landing/landing.module.ts",
		"landing-landing-module"
	],
	"./login/login.module": [
		"./src/app/theme/auth/login/login.module.ts",
		"login-login-module"
	],
	"./theme/auth/auth.module": [
		"./src/app/theme/auth/auth.module.ts",
		"theme-auth-auth-module"
	],
	"./theme/dashboard/dashboard.module": [
		"./src/app/theme/dashboard/dashboard.module.ts",
		"theme-dashboard-dashboard-module"
	],
	"./trading/trading.module": [
		"./src/app/theme/dashboard/trading/trading.module.ts",
		"bulk-bulk-module~trading-trading-module",
		"trading-trading-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: '/auth/login/simple',
                pathMatch: 'full'
            },
            {
                path: 'cibc',
                loadChildren: './theme/dashboard/dashboard.module#DashboardModule'
            },
        ]
    },
    {
        path: '',
        component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: './theme/auth/auth.module#AuthModule'
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet><app-spinner></app-spinner></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'CIBC';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/admin/breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
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
                _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"],
                _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            schemas: [],
            providers: [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_8__["MenuItems"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/admin/admin.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/admin/admin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" class=\"pcoded admin\"\n     [ngClass]=\"animateSidebar\"\n     [attr.nav-type]=\"navType\"\n     [attr.theme-layout]=\"themeLayout\"\n     [attr.vertical-placement]=\"verticalPlacement\"\n     [attr.vertical-layout]=\"verticalLayout\"\n     [attr.pcoded-device-type]=\"pcodedDeviceType\"\n     [attr.vertical-nav-type]=\"verticalNavType\"\n     [attr.vertical-effect]=\"verticalEffect\"\n     [attr.vnavigation-view]=\"vnavigationView\"\n     [attr.fream-type]=\"freamType\"\n     [attr.sidebar-img]=\"sidebarImg\"\n     [attr.sidebar-img-type]=\"sidebarImgType\"\n     [attr.layout-type]=\"layoutType\"\n     (window:resize)=\"onResize($event)\"\n>\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.header-theme]=\"headerTheme\"\n         [attr.pcoded-header-position]=\"pcodedHeaderPosition\">\n      <div class=\"navbar-wrapper\">\n        <div class=\"navbar-logo\">\n          <a class=\"mobile-menu ripple light\" id=\"mobile-collapse\" href=\"javascript:\"\n             (click)=\"toggleOpened($event)\" [exclude]=\"'#main_navbar'\" (clickOutside)=\"onClickedOutsideSidebar($event)\">\n            <i class=\"feather\" [ngClass]=\"toggleIcon\"></i>\n          </a>\n          <a [routerLink]=\"['/auth/landing']\" class=\"ripple light\">\n            <img class=\"img-fluid\" src=\"assets/images/dashboard_logo.png\" alt=\"CIBC\"/>\n          </a>\n          <a href=\"javascript:\" class=\"mobile-options ripple light\" (click)=\"toggleHeaderNavRight()\">\n            <i class=\"feather icon-more-horizontal\"></i>\n          </a>\n        </div>\n        <div class=\"navbar-container container-fluid\">\n          <ul class=\"nav-left\">\n            <li class=\"ripple light menu-links-icon\">\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"icon-menu\"></i></a></div>\n            </li>\n            <li class=\"ripple light menu-links-icon\" appToggleFullScreen>\n              <a href=\"javascript:\">\n                <i class=\"feather icon-maximize full-screen\"></i>\n              </a>\n            </li>\n            <li class=\"menu-links\"><a href=\"https://notessit.cibc.com/#/\" target=\"_blank\">Structured Notes </a></li>\n            <li class=\"menu-links\"><a href=\"javascript:\">EFXO</a></li>\n            <li class=\"menu-links\"><a href=\"javascript:\">Celar Sales</a></li>\n            <li class=\"menu-links\"><a href=\"javascript:\">Global Research</a></li>\n            <li class=\"menu-links\"><a href=\"javascript:\">CMO</a></li>\n          </ul>\n          <ul [@mobileHeaderNavRight]=\"navRight\" [ngClass]=\"navRight\" class=\"nav-right \">\n            <ul class=\"settings-container\">\n              <li (clickOutside)=\"notificationOutsideClick('live')\" class=\"header-notification ripple light\"\n                  (click)=\"toggleLiveNotification()\">\n                <a href=\"javascript:\">\n                  <i class=\"feather icon-bell\"></i>\n                  <span class=\"badge bg-c-red\">3</span>\n                </a>\n                <ul [@notificationBottom]=\"liveNotification\" class=\"show-notification\"\n                    [ngClass]=\"liveNotificationClass\">\n                  <li>\n                    <h6>Notifications</h6>\n                    <label class=\"label label-danger\">New</label>\n                  </li>\n                  <li class=\"ripple\">\n                    <div class=\"media\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Spot Added</h5>\n                        <p class=\"notification-msg\">USD/EUR for $200,000</p>\n                        <span class=\"notification-time\">20 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li class=\"ripple\">\n                    <div class=\"media\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Spot Confirmed</h5>\n                        <p class=\"notification-msg\">USD/EUR for $134,000</p>\n                        <span class=\"notification-time\">34 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                  <li class=\"ripple\">\n                    <div class=\"media\">\n                      <div class=\"media-body\">\n                        <h5 class=\"notification-user\">Spot Added</h5>\n                        <p class=\"notification-msg\">USD/EUR for $424,000</p>\n                        <span class=\"notification-time\">45 minutes ago</span>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </li>\n              <li (click)=\"toggleTheme()\" class=\"header-notification\" placement=\"bottom\" ngbTooltip=\"Change Theme\">\n                <a href=\"javascript:\">\n                  <i class=\"icofont icofont-settings\"></i>\n                </a>\n              </li>\n              <li (clickOutside)=\"notificationOutsideClick('profile')\"\n                  class=\"user-profile header-notification ripple light\" (click)=\"toggleProfileNotification()\">\n                <a href=\"javascript:\">\n                  <span>Farahani</span>\n                  <i class=\"feather icon-chevron-down\"></i>\n                </a>\n                <ul [@notificationBottom]=\"profileNotification\" class=\"show-notification profile-notification\"\n                    [ngClass]=\"profileNotificationClass\">\n                  <li class=\"ripple\">\n                    <a [routerLink]=\"['/auth/login/simple/']\">\n                      <i class=\"feather icon-log-out\"></i> Logout\n                    </a>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"mobile-links-ul\">\n              <li class=\"menu-links-mobile\"><a href=\"https://notessit.cibc.com/#/\" target=\"_blank\"><i class=\"icofont icofont-files\"></i><span>\n                Structured Notes\n              </span> </a></li>\n              <li class=\"menu-links-mobile\"><a href=\"javascript:\"><i class=\"icofont icofont-chart-pie-alt\"></i>\n                <span>\n                EFXO\n              </span>\n              </a></li>\n              <li class=\"menu-links-mobile\"><a href=\"javascript:\"><i class=\"icofont icofont-bag\"></i>\n                <span>Celar Sales</span></a></li>\n              <li class=\"menu-links-mobile\"><a href=\"javascript:\"><i class=\"icofont icofont-chart-line-alt\"></i>\n                <span>Global Research</span></a></li>\n              <li class=\"menu-links-mobile\"><a href=\"javascript:\"><i class=\"icofont icofont-automation\"></i>\n                <span>CMO</span></a></li>\n            </ul>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <!-- Sidebar chat start -->\n    <div [@slideInOut]=\"chatSlideInOut\" id=\"sidebar\" class=\"users p-chat-user showChat\" [ngClass]=\"chatSlideInOut\">\n      <div class=\"had-container\">\n        <div class=\"p-fixed users-main\">\n          <div class=\"user-box\">\n            <div class=\"chat-search-box\">\n              <span class=\"back_friendlist\" (click)=\"toggleChat()\">\n                <i class=\"feather icon-x\"></i>\n              </span>\n              <div class=\"right-icon-control\">\n                <form class=\"form-material\" action=\"javascript:\">\n                  <div class=\"form-group form-primary\">\n                    <input type=\"text\" name=\"search-text\" class=\"form-control\" id=\"search-friends\" required=\"\">\n                    <span class=\"form-bar\"></span>\n                    <label class=\"float-label\"><i class=\"feather icon-search m-r-10\"></i>Search Friend</label>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"main-friend-list\">\n              <perfect-scrollbar [style.max-width]=\"'280px'\" [style.max-height]=\"'calc(100vh - 92px)'\"\n                                 [config]=\"config\">\n                <div class=\"media userlist-box ripple\" data-username=\"Josephin Doe\" placement=\"left\"\n                     ngbTooltip=\"Josephin Doe\" (click)=\"toggleInnerChat()\">\n                  <a class=\"media-left\" href=\"javascript:\">\n                    <img class=\"media-object img-radius img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Josephin Doe\">\n                    <div class=\"live-status bg-success\"></div>\n                  </a>\n                  <div class=\"media-body\">\n                    <div class=\"f-13 chat-header\">Josephin Doe</div>\n                  </div>\n                </div>\n                <div class=\"media userlist-box ripple\" data-username=\"Lary Doe\" placement=\"left\" ngbTooltip=\"Lary Doe\"\n                     (click)=\"toggleInnerChat()\">\n                  <a class=\"media-left\" href=\"javascript:\">\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Lary Doe\">\n                    <div class=\"live-status bg-danger\"></div>\n                  </a>\n                  <div class=\"media-body\">\n                    <div class=\"f-13 chat-header\">Lary Doe</div>\n                  </div>\n                </div>\n                <div class=\"media userlist-box ripple\" data-username=\"Alice\" placement=\"left\" ngbTooltip=\"Alice\"\n                     (click)=\"toggleInnerChat()\">\n                  <a class=\"media-left\" href=\"javascript:\">\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Alice\">\n                    <div class=\"live-status bg-success\"></div>\n                  </a>\n                  <div class=\"media-body\">\n                    <div class=\"f-13 chat-header\">Alice</div>\n                  </div>\n                </div>\n                <div class=\"media userlist-box ripple\" data-username=\"Alia\" placement=\"left\" ngbTooltip=\"Alia\"\n                     (click)=\"toggleInnerChat()\">\n                  <a class=\"media-left\" href=\"javascript:\">\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Alia\">\n                    <div class=\"live-status bg-success\"></div>\n                  </a>\n                  <div class=\"media-body\">\n                    <div class=\"f-13 chat-header\">Alia</div>\n                  </div>\n                </div>\n                <div class=\"media userlist-box ripple\" data-username=\"Suzen\" placement=\"left\" ngbTooltip=\"Suzen\"\n                     (click)=\"toggleInnerChat()\">\n                  <a class=\"media-left\" href=\"javascript:\">\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Suzen\">\n                    <div class=\"live-status bg-danger\"></div>\n                  </a>\n                  <div class=\"media-body\">\n                    <div class=\"f-13 chat-header\">Suzen</div>\n                  </div>\n                </div>\n              </perfect-scrollbar>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Sidebar inner chat start-->\n    <div [@slideInOut]=\"innerChatSlideInOut\" class=\"showChat_inner\">\n      <div class=\"media chat-inner-header\">\n        <a class=\"back_chatBox\">\n          <i class=\"feather icon-more\" (click)=\"toggleInnerChat()\"></i> Josephin Doe\n        </a>\n      </div>\n      <div class=\"main-friend-chat\">\n        <perfect-scrollbar [style.max-width]=\"'280px'\" [style.max-height]=\"'calc(100vh - 150px)'\" [config]=\"config\">\n          <div class=\"media chat-messages\">\n            <a class=\"media-left photo-table\" href=\"javascript:\">\n              <img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/avatar-2.jpg\"\n                   alt=\"Generic placeholder image\">\n            </a>\n            <div class=\"media-body chat-menu-content\">\n              <div class=\"\">\n                <p class=\"chat-cont\">I'm just looking around. Will you tell me something about yourself?</p>\n              </div>\n              <p class=\"chat-time\">8:20 a.m.</p>\n            </div>\n          </div>\n          <div class=\"media chat-messages\">\n            <div class=\"media-body chat-menu-reply\">\n              <div class=\"\">\n                <p class=\"chat-cont\">Ohh! very nice</p>\n              </div>\n              <p class=\"chat-time\">8:22 a.m.</p>\n            </div>\n          </div>\n          <div class=\"media chat-messages\">\n            <a class=\"media-left photo-table\" href=\"javascript:\">\n              <img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/avatar-2.jpg\"\n                   alt=\"Generic placeholder image\">\n            </a>\n            <div class=\"media-body chat-menu-content\">\n              <div class=\"\">\n                <p class=\"chat-cont\">can you come with me?</p>\n              </div>\n              <p class=\"chat-time\">8:20 a.m.</p>\n            </div>\n          </div>\n        </perfect-scrollbar>\n      </div>\n      <div class=\"chat-reply-box\">\n        <div class=\"right-icon-control\">\n          <form class=\"form-material\">\n            <div class=\"form-group form-primary\">\n              <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\n              <span class=\"form-bar\"></span>\n              <label class=\"float-label\">\n                <i class=\"feather icon-search m-r-10\"></i>Share Your Thoughts\n              </label>\n            </div>\n          </form>\n          <div class=\"form-icon \">\n            <button class=\"btn btn-success btn-icon  waves-effect ripple light\">\n              <i class=\"feather icon-message-circle\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Sidebar inner chat end-->\n\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"headerFixedMargin\"> <!--  -->\n      <div class=\"pcoded-wrapper\">\n        <nav\n          id=\"main_navbar\"\n          class=\"pcoded-navbar\"\n          (clickOutside)=\"onClickedOutsideSidebar($event)\"\n          [exclude]=\"'#mobile-collapse'\"\n          [attr.navbar-theme]=\"navBarTheme\"\n          [attr.active-item-theme]=\"activeItemTheme\"\n          sub-item-theme=\"theme2\"\n          active-item-style=\"style0\"\n          [attr.pcoded-header-position]=\"pcodedHeaderPosition\"\n          [attr.pcoded-navbar-position]=\"pcodedSidebarPosition\"\n          [style.top]=\"headerFixedTop\"\n          [style.height]=\"sidebarFixedNavHeight\"\n          (mouseleave)=\"hoverOutsideSidebar()\"\n        >\n          <perfect-scrollbar [style.max-width]=\"'235px'\" [style.max-height]=\"sidebarFixedHeight\" [config]=\"config\"\n                             [ngClass]=\"perfectDisable\">\n            <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\n              <div class=\"\">\n                <div class=\"main-menu-header\">\n                  <div class=\"user-details\">\n                    <h4 class=\"m-t-20 m-b-20\">FX Online</h4>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngFor=\"let asideItems of menuItems.getAll()\" class=\"d-color\">\n                <div class=\"pcoded-navigation-label\" [attr.menu-title-theme]=\"menuTitleTheme\">{{asideItems.label}}</div>\n                <ul class=\"pcoded-item pcoded-left-item\" [attr.item-border]=\"itemBorder\"\n                    [attr.item-border-style]=\"itemBorderStyle\" [attr.subitem-border]=\"subItemBorder\"\n                    *ngFor=\"let asideItem of asideItems.main\" appAccordionLink group=\"{{asideItem.state}}\">\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'external'\"\n                      appAccordionLink group=\"{{asideItem.state}}\">\n                    <a [routerLinkActive]=\"['active']\" class=\"ripple\" href=\"{{asideItem.external}}\"\n                       target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\"\n                            class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                  </li>\n\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\"\n                      appAccordionLink group=\"{{asideItem.state}}\">\n                    <a [routerLinkActive]=\"['active']\" class=\"ripple\"\n                       [routerLink]=\"['/', asideItem.main_state, asideItem.state]\"\n                       target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle\n                       *ngIf=\"asideItem.main_state; else mainContent\">\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\"\n                            class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                    <ng-template #mainContent>\n                      <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.state]\"\n                         target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\n                        <span class=\"pcoded-micon\"><i\n                          class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                        <span *ngFor=\"let asideBadge of asideItem.badge\"\n                              class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                    </ng-template>\n                  </li>\n                  <li (mouseleave)=\"fireClickLeave($event)\" [routerLinkActive]=\"['active']\"\n                      *ngIf=\"asideItem.type === 'sub'\"\n                      class=\"pcoded-hasmenu\" [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\"\n                      appAccordionLink group=\"{{asideItem.state}}\">\n                    <a (mouseover)=\"fireClick($event)\" [routerLinkActive]=\"['active']\" href=\"javascript:;\"\n                       appAccordionToggle>\n                      <div class=\"ripple menu-ripple\"></div>\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                      <span *ngFor=\"let asideBadge of asideItem.badge\"\n                            class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\n                      <span class=\"pcoded-mcaret\"></span>\n                    </a>\n                    <ul class=\"pcoded-submenu\">\n                      <ng-template ngFor let-asideChildren [ngForOf]=\"asideItem.children\">\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type !== 'sub'\">\n                          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/', asideItem.state, asideChildren.state]\"\n                             target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\n                            <div class=\"ripple menu-ripple\"></div>\n                            <span class=\"pcoded-micon\"><i class=\"icon-angle-right\"></i></span>\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\"\n                                  class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\n                            <span class=\"pcoded-mcaret\"></span>\n                          </a>\n                        </li>\n\n                        <li (mouseleave)=\"fireClickLeave($event)\" [routerLinkActive]=\"['active']\" class=\"pcoded-hasmenu\"\n                            [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\"\n                            *ngIf=\"asideChildren.type === 'sub'\" appAccordionLink group=\"sub-toggled\">\n                          <a (mouseover)=\"fireClick($event)\" [routerLinkActive]=\"['active']\" href=\"javascript:;\"\n                             appAccordionToggle>\n                            <div class=\"ripple menu-ripple\"></div>\n                            <span class=\"pcoded-micon\"><i class=\"icon-direction-alt\"></i></span>\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }}</span>\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\"\n                                  class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\n                            <span class=\"pcoded-mcaret\"></span>\n                          </a>\n                          <ul class=\"pcoded-submenu\">\n                            <ng-template ngFor let-asideChildrenSub [ngForOf]=\"asideChildren.children\">\n                              <li [routerLinkActive]=\"['active']\">\n                                <a [routerLinkActive]=\"['active']\"\n                                   [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildrenSub.state]\"\n                                   target=\"{{asideChildrenSub.target ? '_blank' : '_self'}}\">\n                                  <div class=\"ripple menu-ripple\"></div>\n                                  <span class=\"pcoded-micon\"><i class=\"icon-angle-right\"></i></span>\n                                  <span class=\"pcoded-mtext\">{{ asideChildrenSub.name }}</span>\n                                  <span *ngFor=\"let asideChildrenSubBadge of asideChildrenSub.badge\"\n                                        class=\"pcoded-badge label label-{{ asideChildrenSubBadge.type }}\">{{asideChildrenSubBadge.value}}</span>\n                                  <span class=\"pcoded-mcaret\"></span>\n                                </a>\n                              </li>\n                            </ng-template>\n                          </ul>\n                        </li>\n                      </ng-template>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </perfect-scrollbar>\n        </nav>\n        <div class=\"pcoded-content\">\n          <app-breadcrumbs></app-breadcrumbs>\n          <div class=\"pcoded-inner-content\">\n            <!-- Main-body start -->\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <router-outlet>\n                  <title></title>\n                  <app-spinner></app-spinner>\n                </router-outlet>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin/admin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/admin/admin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(menuItems) {
        var _this = this;
        this.menuItems = menuItems;
        this.scroll = function () {
            var scrollPosition = window.pageYOffset;
            if (scrollPosition > 50) {
                if (_this.isSidebarChecked === true) {
                    _this.pcodedSidebarPosition = 'fixed';
                }
                if (_this.pcodedDeviceType === 'desktop') {
                    _this.headerFixedTop = '0';
                }
                _this.sidebarFixedNavHeight = '100%';
            }
            else {
                if (_this.pcodedDeviceType === 'desktop') {
                    _this.headerFixedTop = 'auto';
                }
                _this.pcodedSidebarPosition = 'absolute';
                _this.sidebarFixedNavHeight = '';
            }
        };
        this.animateSidebar = '';
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light'; // light(default) dark(dark)
        this.headerTheme = 'theme1'; // theme1(default)
        this.pcodedHeaderPosition = 'fixed';
        this.headerFixedTop = 'auto';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.chatSlideInOut = 'out';
        this.innerChatSlideInOut = 'out';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.toggleOn = true;
        this.toggleIcon = 'icon-toggle-right';
        this.navBarTheme = 'themelight1'; // themelight1(default) theme1(dark)
        this.activeItemTheme = 'theme1';
        this.pcodedSidebarPosition = 'fixed';
        this.menuTitleTheme = 'theme1'; // theme1(default) theme10(dark)
        this.dropDownIcon = 'style1';
        this.subItemIcon = 'style1';
        this.displayBoxLayout = 'd-none';
        this.isVerticalLayoutChecked = false;
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        this.headerFixedMargin = '50px'; // 50px
        this.sidebarFixedHeight = 'calc(100vh - 55px)'; // calc(100vh - 190px)
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.itemBorder = true;
        this.isCollapsedSideBar = 'no-block';
        this.perfectDisable = '';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        this.setHeaderAttributes(this.windowWidth);
        // dark theme
        /*this.setLayoutType('dark');*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');*/
        // dark-light theme
        /*this.setNavBarTheme('theme1');*/
        // box layout
        /*this.setHeaderPosition();
        this.setSidebarPosition();
        this.setVerticalLayout();*/
    }
    AdminComponent.prototype.ngOnInit = function () {
        // this.setLayoutType('dark');
        this.setBackgroundPattern('theme1');
    };
    AdminComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        var reSizeFlag = true;
        if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 992) {
            reSizeFlag = false;
        }
        else if (this.pcodedDeviceType === 'phone' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    AdminComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth <= 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    AdminComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 992) {
            this.pcodedDeviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
            this.toggleIcon = 'icon-toggle-left';
            this.headerFixedTop = '50px';
            this.headerFixedMargin = '0';
        }
        else if (windowWidth < 768) {
            this.pcodedDeviceType = 'phone';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
            this.toggleIcon = 'icon-toggle-left';
            this.headerFixedTop = '50px';
            this.headerFixedMargin = '0';
        }
        else {
            this.pcodedDeviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
            this.toggleIcon = 'icon-toggle-right';
            this.headerFixedMargin = '50px';
        }
        /*else if (windowWidth >= 1024 && windowWidth < 1366) {
          this.pcodedDeviceType = 'desktop';
          this.verticalNavType = 'collapsed';
          this.verticalEffect = 'shrink';
          this.toggleIcon = 'icon-toggle-left';
          this.perfectDisable = 'disabled';
          this.sidebarFixedHeight = '100%';
        }*/
    };
    AdminComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
        this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
        if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.toggleTheme = function () {
        this.selectedTheme = this.selectedTheme === 'dark' ? 'light' : 'dark';
        this.setLayoutType(this.selectedTheme);
    };
    AdminComponent.prototype.toggleLiveNotification = function () {
        if (this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'show' : '';
        if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.toggleProfileNotification = function () {
        if (this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'show' : '';
        if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    AdminComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    AdminComponent.prototype.toggleChat = function () {
        if (this.innerChatSlideInOut === 'in') {
            this.innerChatSlideInOut = 'out';
        }
        else {
            this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
        }
    };
    AdminComponent.prototype.toggleInnerChat = function () {
        this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
    };
    AdminComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        this.searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(_this.searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    AdminComponent.prototype.searchOff = function () {
        var _this = this;
        this.searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(_this.searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        if (this.searchInterval) {
            clearInterval(this.searchInterval);
        }
    };
    AdminComponent.prototype.toggleOpened = function (e) {
        var _this = this;
        if (this.windowWidth <= 992) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            if (this.navRight === 'nav-on') {
                this.toggleHeaderNavRight();
            }
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        else {
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
        }
        this.toggleIcon = this.verticalNavType === 'expanded' ? 'icon-toggle-right' : 'icon-toggle-left';
        this.animateSidebar = 'pcoded-toggle-animate';
        if (this.verticalNavType === 'collapsed') {
            this.perfectDisable = 'disabled';
            this.sidebarFixedHeight = '100%';
        }
        else {
            this.perfectDisable = '';
        }
        if (this.verticalNavType === 'collapsed' && this.isHeaderChecked === false) {
            this.setSidebarPosition();
        }
        setTimeout(function () {
            _this.animateSidebar = '';
        }, 500);
    };
    AdminComponent.prototype.onClickedOutsideSidebar = function (e) {
        if ((this.windowWidth <= 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
            this.toggleIcon = 'icon-toggle-left';
        }
    };
    AdminComponent.prototype.toggleRightbar = function () {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    };
    AdminComponent.prototype.setNavBarTheme = function (theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.sidebarImg = 'false';
        }
        else {
            this.menuTitleTheme = 'theme9';
            this.navBarTheme = 'theme1';
            this.sidebarImg = 'false';
        }
    };
    AdminComponent.prototype.setLayoutType = function (type) {
        if (type === 'dark') {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'theme1';
            this.activeItemTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.add('dark');
            this.setBackgroundPattern('theme1');
            this.menuTitleTheme = 'theme9';
            this.layoutType = type;
            this.sidebarImg = 'false';
        }
        else if (type === 'light') {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.activeItemTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.layoutType = type;
            this.sidebarImg = 'false';
        }
        else if (type === 'img') {
            this.sidebarImg = 'true';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.activeItemTheme = 'theme1';
        }
    };
    AdminComponent.prototype.setVerticalLayout = function () {
        this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
        if (this.isVerticalLayoutChecked) {
            this.verticalLayout = 'box';
            this.displayBoxLayout = '';
            this.pcodedHeaderPosition = 'relative';
            this.pcodedSidebarPosition = 'absolute';
            this.headerFixedMargin = '';
        }
        else {
            this.verticalLayout = 'wide';
            this.displayBoxLayout = 'd-none';
            this.pcodedHeaderPosition = 'fixed';
            this.pcodedSidebarPosition = 'fixed';
            this.headerFixedMargin = '50px';
        }
    };
    AdminComponent.prototype.setBackgroundPattern = function (pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
        // this.menuTitleTheme = this.freamType = this.activeItemTheme = this.headerTheme = pattern;
    };
    AdminComponent.prototype.setSidebarPosition = function () {
        if (this.verticalNavType !== 'collapsed') {
            this.isSidebarChecked = !this.isSidebarChecked;
            this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
            this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 50px)' : '100%';
            if (this.isHeaderChecked === false) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
        }
    };
    AdminComponent.prototype.setHeaderPosition = function () {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '50px' : '';
        if (this.isHeaderChecked === false) {
            window.addEventListener('scroll', this.scroll, true);
            window.scrollTo(0, 0);
        }
        else {
            window.removeEventListener('scroll', this.scroll, true);
            if (this.pcodedDeviceType === 'desktop') {
                this.headerFixedTop = 'auto';
            }
            this.pcodedSidebarPosition = 'fixed';
            if (this.verticalNavType !== 'collapsed') {
                this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 50px)' : 'calc(100vh + 50px)';
            }
        }
    };
    AdminComponent.prototype.toggleOpenedSidebar = function () {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
        if (this.verticalNavType !== 'collapsed') {
            this.sidebarFixedHeight = this.isCollapsedSideBar === 'yes-block' ? 'calc(100vh - 50px)' : 'calc(100vh - 50px)';
        }
    };
    AdminComponent.prototype.hoverOutsideSidebar = function () {
        if (this.verticalNavType === 'collapsed') {
            var mainEle = document.querySelectorAll('.pcoded-trigger');
            for (var i = 0; i < mainEle.length; i++) {
                mainEle[i].classList.remove('pcoded-trigger');
            }
        }
    };
    AdminComponent.prototype.fireClick = function (e) {
        if (this.verticalNavType === 'collapsed') {
            var parentEle = e.target.parentNode.parentNode;
            if (parentEle.classList.contains('pcoded-trigger')) {
                var subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
                for (var i = 0; i < subEle.length; i++) {
                    if (subEle[i].classList.contains('pcoded-trigger')) {
                        subEle[i].classList.remove('pcoded-trigger');
                    }
                }
            }
            else {
                e.target.click();
            }
        }
    };
    AdminComponent.prototype.fireClickLeave = function (e) {
        if (this.verticalNavType === 'collapsed') {
            var parentEle = e.target.parentNode.parentNode;
            var subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
            for (var i = 0; i < subEle.length; i++) {
                if (subEle[i].classList.contains('pcoded-trigger')) {
                    subEle[i].classList.remove('pcoded-trigger');
                }
            }
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/layout/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/layout/admin/admin.component.scss"), __webpack_require__(/*! ../../../assets/charts/radial/css/radial.scss */ "./src/assets/charts/radial/css/radial.scss"), __webpack_require__(/*! ../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('notificationBottom', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        overflow: 'visible',
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('an-off <=> an-animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '280px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileHeaderNavRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nav-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('nav-on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('nav-off <=> nav-on', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileMenuTop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('no-block <=> yes-block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-active {\r\n    pointer-events: none;\r\n    cursor: default;\r\n}"

/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\" *ngFor=\"let breadcrumb of breadcrumbs; let last = last\">\n  <div class=\"page-header\" *ngIf=\"breadcrumb.status && last\">\n    <div class=\"page-block\" *ngIf=\"last\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-sm-4 col-md-2 breadcrumb-links\">\n          <div class=\"page-header-title\">\n            <span *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"><h4 *ngIf=\"last\" class=\"m-b-10\">{{ breadcrumb.label }}</h4></span>\n            <!--<p class=\"m-b-0\" *ngIf=\"breadcrumb.caption\">{{ breadcrumb.caption }}</p>-->\n          </div>\n          <ul class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n              <a [routerLink]=\"['/dashboard/default/']\">\n                <i class=\"feather icon-home\"></i>\n              </a>\n            </li>\n            <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs;\">\n              <a [ngClass]=\"breadcrumb.status === false ? 'not-active': ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-sm-8 col-md-8 col-xs-8 top-selects\">\n          <select name=\"select\" class=\"form-control form-control-inverse m-r-20\">\n            <option value=\"opt5\">Blackstone Solar</option>\n            <option value=\"opt1\">Entity</option>\n            <option value=\"opt2\">5N Plus</option>\n            <option value=\"opt3\">Atlantic Power</option>\n            <option value=\"opt4\">Blackstone Energy Services Inc.</option>\n            <option value=\"opt6\">Carmanah Technologies</option>\n            <option value=\"opt7\">Polaris Infrastructure</option>\n            <option value=\"opt8\">Synex International</option>\n          </select>\n          <select name=\"select\" class=\"form-control form-control-inverse\">\n            <option value=\"opt1\">Workspace</option>\n            <option value=\"opt2\">Workspace 1</option>\n            <option value=\"opt3\">Workspace 2</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts ***!
  \*******************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.tempState = [];
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })
            .subscribe(function () {
            _this.breadcrumbs = [];
            _this.tempState = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        var routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        if (routes.snapshot.data.title !== undefined) {
                            var status_1 = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status_1 = routes.snapshot.data.status;
                            }
                            var icon = false;
                            if (routes.snapshot.data.icon !== undefined) {
                                icon = routes.snapshot.data.icon;
                            }
                            var caption = false;
                            if (routes.snapshot.data.caption !== undefined) {
                                caption = routes.snapshot.data.caption;
                            }
                            if (!_this.tempState.includes(routes.snapshot.data.title)) {
                                _this.tempState.push(routes.snapshot.data.title);
                                _this.breadcrumbs.push({
                                    label: routes.snapshot.data.title,
                                    icon: icon,
                                    caption: caption,
                                    status: status_1,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/title/title.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/admin/title/title.component.ts ***!
  \*******************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = /** @class */ (function () {
    function TitleComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function () {
            var currentRoute = _this.route.root;
            var title = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.title;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            if (title !== undefined) {
                _this.titleService.setTitle(title + ' | CIBC Demo');
            }
        });
    }
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: '<span></span>'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/layout/auth/auth.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/auth/auth.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <app-spinner><app-title></app-title></app-spinner>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/layout/auth/auth.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/auth/auth.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/auth/auth.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/auth/auth.component.ts ***!
  \***********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/layout/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/layout/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 992)) {
                var toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
        }
        this.navlinks.forEach(function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.countState = 0;
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AccordionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
        __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            /*for slimscroll on and off*/
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.pcoded-trigger'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
        __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card-animation.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card-animation.ts ***!
  \***********************************************/
/*! exports provided: cardToggle, cardClose, cardIconToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardIconToggle", function() { return cardIconToggle; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
    ])
]);
var cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms')),
]);
var cardIconToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardIconToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        width: '35px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        width: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('an-off <=> an-animate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
    ])
]);


/***/ }),

/***/ "./src/app/shared/card/card-toggle.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/card/card-toggle.directive.ts ***!
  \******************************************************/
/*! exports provided: CardToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardToggleDirective", function() { return CardToggleDirective; });
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

var CardToggleDirective = /** @class */ (function () {
    function CardToggleDirective(el) {
        this.el = el;
    }
    CardToggleDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('icon-minus');
        this.el.nativeElement.classList.toggle('icon-plus');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CardToggleDirective.prototype, "onToggle", null);
    CardToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCardToggleEvent]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CardToggleDirective);
    return CardToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card {{ fullCard }} {{ cardLoad }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\n  <div class=\"card-header ripple\" *ngIf=\"title\" [ngClass]=\"headerClass\">\n    <h5>{{ title }}</h5>\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\n    <span *ngIf=\"classHeader\">\n      <ng-content select=\".code-header\"></ng-content>\n    </span>\n    <div class=\"card-header-right\" *ngIf=\"!cardOptionBlock\">\n      <ul class=\"list-unstyled card-option\" [@cardIconToggle]=\"cardIconToggle\">\n        <li *ngIf=\"!isCardToggled\" (click)=\"toggleCardOption()\"><i class=\"feather open-card-option icon-chevron-left\"></i></li>\n        <li><i class=\"feather {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i></li>\n        <li><i class=\"feather minimize-card icon-minus\" appCardToggleEvent (click)=\"toggleCard($event)\"></i></li>\n        <li><i class=\"feather icon-refresh-cw reload-card\" (click)=\"cardRefresh($event)\" ></i></li>\n        <li><i class=\"feather icon-trash close-card\" (click)=\"closeCard($event)\"></i></li>\n        <li *ngIf=\"isCardToggled\" (click)=\"toggleCardOption()\"><i class=\"feather open-card-option icon-x\"></i></li>\n      </ul>\n    </div>\n  </div>\n\n  <div [@cardToggle]=\"cardToggle\" class=\"card-block-hid\">\n    <div class=\"card-block\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"fa fa-spinner rotate-refresh\"></i></div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/card/card.component.scss":
/*!*************************************************!*\
  !*** ./src/app/shared/card/card.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card .card-header .card-header-right .card-option {\n  width: 140px;\n  transition: unset; }\n"

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-animation */ "./src/app/shared/card/card-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.classHeader = false;
        this.cardOptionBlock = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
        this.fullCardIcon = 'icon-maximize';
        this.cardIconToggle = 'an-off';
    }
    CardComponent.prototype.ngOnInit = function () {
        if (this.cardOptionBlock) {
            this.cardToggle = 'false';
        }
    };
    CardComponent.prototype.toggleCard = function (event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.toggleCardOption = function () {
        this.isCardToggled = !this.isCardToggled;
        this.cardIconToggle = this.cardIconToggle === 'an-off' ? 'an-animate' : 'an-off';
    };
    CardComponent.prototype.closeCard = function (event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    CardComponent.prototype.fullScreen = function (event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'icon-maximize' ? 'icon-minimize' : 'icon-maximize';
    };
    CardComponent.prototype.cardRefresh = function () {
        var _this = this;
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout(function () {
            _this.cardLoad = '';
            _this.loadCard = false;
        }, 3000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "headerContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "headerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "classHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "cardOptionBlock", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/shared/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/card/card.component.scss")],
            animations: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardIconToggle"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/elements/data-filter.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/elements/data-filter.pipe.ts ***!
  \*****************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = /** @class */ (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    DataFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "dataFilter"
        })
    ], DataFilterPipe);
    return DataFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullScreenDirective = /** @class */ (function () {
    function ToggleFullScreenDirective(elements) {
        this.elements = elements;
    }
    ToggleFullScreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
            (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullScreenDirective.prototype, "onClick", null);
    ToggleFullScreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullScreen]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ToggleFullScreenDirective);
    return ToggleFullScreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        label: 'CIBC Navigation',
        main: [
            {
                main_state: 'cibc',
                state: 'trading',
                short_label: 'D',
                name: 'Trading',
                type: 'link',
                icon: 'icofont icofont-exchange'
            },
            {
                main_state: 'cibc',
                state: 'bulk',
                short_label: 'N',
                name: 'Bulk',
                type: 'link',
                icon: 'icofont icofont-layers'
            },
            {
                main_state: 'dashboard',
                state: '',
                short_label: 'S',
                name: 'Settlement',
                type: 'link',
                icon: 'icofont icofont-list'
            },
            {
                main_state: 'dashboard',
                state: '',
                short_label: 'W',
                name: 'Market Insight',
                type: 'link',
                icon: 'icofont icofont-chart-line-alt'
            },
            {
                main_state: 'dashboard',
                state: '',
                short_label: 'W',
                name: 'Cash Management',
                type: 'link',
                icon: 'icofont icofont-wallet'
            },
            {
                main_state: 'dashboard',
                state: '',
                short_label: 'C',
                name: 'Chat and Help',
                type: 'link',
                icon: 'icofont icofont-ui-text-chat'
            }
        ],
    }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\n<ng-template #backDropOver>\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".md-close-btn {\n  border: 0;\n  background: none;\n  color: #ffffff;\n  position: absolute;\n  top: 15px;\n  right: 16px;\n  font-size: 1.2em;\n  cursor: pointer; }\n\n.md-perspective {\n  height: 100%;\n  overflow: hidden; }\n\n.md-perspective body {\n    height: 100%;\n    overflow: hidden;\n    background: #222;\n    -webkit-perspective: 600px;\n    perspective: 600px; }\n\n.container {\n  min-height: 100%; }\n\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%); }\n\n.md-modal p {\n    line-height: 1.3; }\n\n.md-show {\n  visibility: visible; }\n\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1100;\n  opacity: 0;\n  background: rgba(55, 58, 60, 0.65);\n  transition: all 0.3s; }\n\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible; }\n\n.md-content {\n  color: #666666;\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto; }\n\n.md-content h3 {\n    color: #fff;\n    margin: 0;\n    padding: 0.4em;\n    text-align: center;\n    line-height: 1;\n    background: #222;\n    border-radius: 3px 3px 0 0; }\n\n.md-content > div {\n    padding: 15px 40px 30px;\n    margin: 0; }\n\n.md-content > div p {\n      margin: 0;\n      padding: 10px 0; }\n\n.md-content > div ul {\n      margin: 0;\n      padding: 0 0 30px 20px; }\n\n.md-content > div ul li {\n        padding: 5px 0; }\n\n.md-content button {\n    display: block;\n    margin: 0 auto !important;\n    font-size: 0.8em; }\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n  -webkit-transform: scale(0.7);\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s; }\n\n.md-show.md-effect-1 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n  -webkit-transform: translateX(20%);\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9); }\n\n.md-show.md-effect-2 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1; }\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n  -webkit-transform: translateY(20%);\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s; }\n\n.md-show.md-effect-3 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1; }\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n  -webkit-transform: scale(0) rotate(720deg);\n  transform: scale(0) rotate(720deg);\n  opacity: 0; }\n\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s; }\n\n.md-show.md-effect-4 .md-content {\n  -webkit-transform: scale(1) rotate(0deg);\n  transform: scale(1) rotate(0deg);\n  opacity: 1; }\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-5 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(600px) rotateX(20deg);\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0; }\n\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  -webkit-transform: translateZ(0px) rotateX(0deg);\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-6 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0; }\n\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate(0%) translateZ(0) rotate(0deg);\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1; }\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7 {\n  top: 0;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n\n.md-effect-7 .md-content {\n    -webkit-transform: translateY(-200%);\n    transform: translateY(-200%);\n    transition: all .3s;\n    opacity: 0; }\n\n.md-show.md-effect-7 .md-content {\n  -webkit-transform: translateY(0%);\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1; }\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-8 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateY(-70deg);\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0; }\n\n.md-show.md-effect-8 .md-content {\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n  opacity: 1; }\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-9 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-70deg);\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0; }\n\n.md-show.md-effect-9 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-10 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(-60deg);\n  transform: rotateX(-60deg);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s; }\n\n.md-show.md-effect-10 .md-content {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n  -webkit-transform: scale(2);\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s; }\n\n.md-show.md-effect-11 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s; }\n\n.md-show.md-effect-12 ~ .md-overlay {\n  background: #0073aa; }\n\n.md-effect-12 .md-content {\n  color: #fff;\n  background: transparent; }\n\n.md-effect-12 .md-content h3 {\n    color: #fff;\n    background: transparent; }\n\n.md-show.md-effect-12 .md-content {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  border: 1px solid #fff; }\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-13 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(-3000px) rotateY(90deg);\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0; }\n\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit .7s forwards ease-out;\n  animation: slit .7s forwards ease-out; }\n\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: .5;\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n\n@keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n            transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n            transform: translateZ(0) rotateY(0deg);\n    opacity: 1; } }\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-14 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateY(100%) rotateX(90deg);\n  transform: translateY(100%) rotateX(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out; }\n\n.md-show.md-effect-14 .md-content {\n  -webkit-transform: translateY(0%) rotateX(0deg);\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1; }\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\n.md-effect-15 .md-content {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s; }\n\n.md-show.md-effect-15 .md-content {\n  -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1; }\n\n.md-show.md-effect-16 ~ .md-overlay {\n  background: rgba(180, 46, 32, 0.5); }\n\n.md-show.md-effect-16 ~ .container {\n  -webkit-filter: blur(3px);\n  -moz-filter: blur(3px);\n  filter: blur(3px); }\n\n/* Effect 16:  Blur */\n\n.md-effect-16 .md-content {\n  -webkit-transform: translateY(-5%);\n  transform: translateY(-5%);\n  opacity: 0; }\n\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s; }\n\n.md-show.md-effect-16 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1; }\n\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.md-show.md-effect-17 ~ .md-overlay {\n  -webkit-transform: rotateX(-2deg);\n  transform: rotateX(-2deg);\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\n.md-effect-17 .md-content {\n  opacity: 0;\n  -webkit-transform: translateY(200%);\n  transform: translateY(200%); }\n\n.md-show.md-effect-17 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s; }\n\n.md-show.md-effect-18 ~ .container {\n  height: 100%;\n  overflow: hidden; }\n\n.md-show.md-effect-18 ~ .md-overlay {\n  background: rgba(143, 27, 15, 0.8);\n  transition: all 0.5s; }\n\n.md-show.md-effect-18 ~ .container, .md-show.md-effect-18 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 0% 50%;\n  -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in; }\n\n/* Effect 18:  Slide from right with perspective on container */\n\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px); } }\n\n@keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n            transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  100% {\n    -webkit-transform: translateZ(-200px);\n            transform: translateZ(-200px); } }\n\n.md-effect-18 .md-content {\n  -webkit-transform: translateX(200%);\n  transform: translateX(200%);\n  opacity: 0; }\n\n.md-show.md-effect-18 .md-content {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s; }\n\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden; }\n\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s; }\n\n.md-show.md-effect-19 ~ .container, .md-show.md-effect-19 ~ .md-overlay {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in; }\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out; } }\n\n@keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n            transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; } }\n\n.md-effect-19 .md-content {\n  -webkit-transform: translateY(-200%);\n  transform: translateY(-200%);\n  opacity: 0; }\n\n.md-show.md-effect-19 .md-content {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s; }\n\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%; } }\n"

/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAnimationComponent", function() { return ModalAnimationComponent; });
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

var ModalAnimationComponent = /** @class */ (function () {
    function ModalAnimationComponent() {
        this.backDrop = false;
    }
    ModalAnimationComponent.prototype.ngOnInit = function () {
    };
    ModalAnimationComponent.prototype.close = function (event) {
        document.querySelector('#' + event).classList.remove('md-show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalAnimationComponent.prototype, "modalClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalAnimationComponent.prototype, "contentClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalAnimationComponent.prototype, "modalID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalAnimationComponent.prototype, "backDrop", void 0);
    ModalAnimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-animation',
            template: __webpack_require__(/*! ./modal-animation.component.html */ "./src/app/shared/modal-animation/modal-animation.component.html"),
            styles: [__webpack_require__(/*! ./modal-animation.component.scss */ "./src/app/shared/modal-animation/modal-animation.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ModalAnimationComponent);
    return ModalAnimationComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" [ngClass]=\"dialogClass\">\n    <div class=\"modal-content\">\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.basic.fade {\n  opacity: 0;\n  transition: opacity .15s linear; }\n\n.basic.fade.in {\n    opacity: 1; }\n\n.basic.modal.fade.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.basic.modal.fade .modal-dialog {\n  transition: all .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%); }\n\n.basic .basic-close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 16px;\n  color: #292b2c; }\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none; }\n\n.basic h5 {\n  margin-bottom: 0;\n  color: #757575;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function() { return ModalBasicComponent; });
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

var ModalBasicComponent = /** @class */ (function () {
    function ModalBasicComponent() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalBasicComponent.prototype.ngOnInit = function () {
    };
    ModalBasicComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    ModalBasicComponent.prototype.hide = function () {
        var _this = this;
        this.visibleAnimate = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    ModalBasicComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalBasicComponent.prototype, "dialogClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalBasicComponent.prototype, "hideFooter", void 0);
    ModalBasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-basic',
            template: __webpack_require__(/*! ./modal-basic.component.html */ "./src/app/shared/modal-basic/modal-basic.component.html"),
            styles: [__webpack_require__(/*! ./modal-basic.component.scss */ "./src/app/shared/modal-basic/modal-basic.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ModalBasicComponent);
    return ModalBasicComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var _accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordion/accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony import */ var _accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion/accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var _accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordion/accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/admin/title/title.component */ "./src/app/layout/admin/title/title.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-animation/modal-animation.component */ "./src/app/shared/modal-animation/modal-animation.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./elements/data-filter.pipe */ "./src/app/shared/elements/data-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"]
            ],
            exports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullScreenDirective"],
                _accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
                _accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__["AccordionLinkDirective"],
                _accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionDirective"],
                _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_11__["CardToggleDirective"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_12__["ModalBasicComponent"],
                _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_13__["ModalAnimationComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"],
                _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["DataFilterPipe"]
            ],
            declarations: [
                _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_3__["ToggleFullScreenDirective"],
                _accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"],
                _accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_5__["AccordionLinkDirective"],
                _accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_6__["AccordionDirective"],
                _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_11__["CardToggleDirective"],
                _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_9__["TitleComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_12__["ModalBasicComponent"],
                _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_13__["ModalAnimationComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
                _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["DataFilterPipe"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/spinner/spinkit-css/sk-line-material.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/spinner/spinkit-css/sk-line-material.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0); }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0); }\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8); }\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinkits.ts":
/*!********************************************!*\
  !*** ./src/app/shared/spinner/spinkits.ts ***!
  \********************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinkits */ "./src/app/shared/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        this.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/shared/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/shared/spinner/spinner.component.scss"), __webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "./src/app/shared/spinner/spinkit-css/sk-line-material.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/assets/charts/radial/css/radial.scss":
/*!**************************************************!*\
  !*** ./src/assets/charts/radial/css/radial.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* -------------------------------------\r\n * Bar container\r\n * ------------------------------------- */\n.radial-bar {\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: transparent;\n  margin-bottom: 20px;\n  box-sizing: content-box;\n  width: 80px;\n  height: 80px;\n  font-size: 18px; }\n.radial-bar:after,\n.radial-bar > img {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  color: #a1a2a3; }\n.radial-bar:after {\n  content: attr(data-label);\n  background-color: #f0f0f0;\n  z-index: 101; }\n.radial-bar > img {\n  z-index: 102; }\n.radial-bar:after,\n.radial-bar > img {\n  width: 56px;\n  height: 56px;\n  margin-left: 12px;\n  margin-top: 12px;\n  line-height: 56px; }\n.radial-bar.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-50 {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-55 {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-60 {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-65 {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-70 {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-75 {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-80 {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-85 {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-90 {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-95 {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar.radial-bar-100 {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-50 {\n  background-image: linear-gradient(270deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-55 {\n  background-image: linear-gradient(288deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-60 {\n  background-image: linear-gradient(306deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-65 {\n  background-image: linear-gradient(324deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-70 {\n  background-image: linear-gradient(342deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-75 {\n  background-image: linear-gradient(360deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-80 {\n  background-image: linear-gradient(378deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-85 {\n  background-image: linear-gradient(396deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-90 {\n  background-image: linear-gradient(414deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-95 {\n  background-image: linear-gradient(432deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-primary.radial-bar-100 {\n  background-image: linear-gradient(450deg, #4099ff 50%, transparent 50%, transparent), linear-gradient(270deg, #4099ff 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-50 {\n  background-image: linear-gradient(270deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-55 {\n  background-image: linear-gradient(288deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-60 {\n  background-image: linear-gradient(306deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-65 {\n  background-image: linear-gradient(324deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-70 {\n  background-image: linear-gradient(342deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-75 {\n  background-image: linear-gradient(360deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-80 {\n  background-image: linear-gradient(378deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-85 {\n  background-image: linear-gradient(396deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-90 {\n  background-image: linear-gradient(414deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-95 {\n  background-image: linear-gradient(432deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-success.radial-bar-100 {\n  background-image: linear-gradient(450deg, #2ed8b6 50%, transparent 50%, transparent), linear-gradient(270deg, #2ed8b6 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-50 {\n  background-image: linear-gradient(270deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-55 {\n  background-image: linear-gradient(288deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-60 {\n  background-image: linear-gradient(306deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-65 {\n  background-image: linear-gradient(324deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-70 {\n  background-image: linear-gradient(342deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-75 {\n  background-image: linear-gradient(360deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-80 {\n  background-image: linear-gradient(378deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-85 {\n  background-image: linear-gradient(396deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-90 {\n  background-image: linear-gradient(414deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-95 {\n  background-image: linear-gradient(432deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-info.radial-bar-100 {\n  background-image: linear-gradient(450deg, #00bcd4 50%, transparent 50%, transparent), linear-gradient(270deg, #00bcd4 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-50 {\n  background-image: linear-gradient(270deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-55 {\n  background-image: linear-gradient(288deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-60 {\n  background-image: linear-gradient(306deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-65 {\n  background-image: linear-gradient(324deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-70 {\n  background-image: linear-gradient(342deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-75 {\n  background-image: linear-gradient(360deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-80 {\n  background-image: linear-gradient(378deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-85 {\n  background-image: linear-gradient(396deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-90 {\n  background-image: linear-gradient(414deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-95 {\n  background-image: linear-gradient(432deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-warning.radial-bar-100 {\n  background-image: linear-gradient(450deg, #f1c40f 50%, transparent 50%, transparent), linear-gradient(270deg, #f1c40f 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-50 {\n  background-image: linear-gradient(270deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-55 {\n  background-image: linear-gradient(288deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-60 {\n  background-image: linear-gradient(306deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-65 {\n  background-image: linear-gradient(324deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-70 {\n  background-image: linear-gradient(342deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-75 {\n  background-image: linear-gradient(360deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-80 {\n  background-image: linear-gradient(378deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-85 {\n  background-image: linear-gradient(396deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-90 {\n  background-image: linear-gradient(414deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-95 {\n  background-image: linear-gradient(432deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-danger.radial-bar-100 {\n  background-image: linear-gradient(450deg, #FF5370 50%, transparent 50%, transparent), linear-gradient(270deg, #FF5370 50%, #d6d6d6 50%, #d6d6d6); }\n/* -- Radial Default -- */\n.radial-bar-default.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-50 {\n  background-image: linear-gradient(270deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-55 {\n  background-image: linear-gradient(288deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-60 {\n  background-image: linear-gradient(306deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-65 {\n  background-image: linear-gradient(324deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-70 {\n  background-image: linear-gradient(342deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-75 {\n  background-image: linear-gradient(360deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-80 {\n  background-image: linear-gradient(378deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-85 {\n  background-image: linear-gradient(396deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-90 {\n  background-image: linear-gradient(414deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-95 {\n  background-image: linear-gradient(432deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-default.radial-bar-100 {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, FE8A7D 50%, #d6d6d6 50%, #d6d6d6); }\n/* -- Radial Pink -- */\n.radial-bar-pink.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-50 {\n  background-image: linear-gradient(270deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-55 {\n  background-image: linear-gradient(288deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-60 {\n  background-image: linear-gradient(306deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-65 {\n  background-image: linear-gradient(324deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-70 {\n  background-image: linear-gradient(342deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-75 {\n  background-image: linear-gradient(360deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-80 {\n  background-image: linear-gradient(378deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-85 {\n  background-image: linear-gradient(396deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-90 {\n  background-image: linear-gradient(414deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-95 {\n  background-image: linear-gradient(432deg, #fb6d9d 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-pink.radial-bar-100 {\n  background-image: linear-gradient(450deg, FE8A7D 50%, transparent 50%, transparent), linear-gradient(270deg, #fb6d9d 50%, #d6d6d6 50%, #d6d6d6); }\n/* -- Radial Purple -- */\n.radial-bar-purple.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-50 {\n  background-image: linear-gradient(270deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-55 {\n  background-image: linear-gradient(288deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-60 {\n  background-image: linear-gradient(306deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-65 {\n  background-image: linear-gradient(324deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-70 {\n  background-image: linear-gradient(342deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-75 {\n  background-image: linear-gradient(360deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-80 {\n  background-image: linear-gradient(378deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-85 {\n  background-image: linear-gradient(396deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-90 {\n  background-image: linear-gradient(414deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-95 {\n  background-image: linear-gradient(432deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-purple.radial-bar-100 {\n  background-image: linear-gradient(450deg, #7266ba 50%, transparent 50%, transparent), linear-gradient(270deg, #7266ba 50%, #d6d6d6 50%, #d6d6d6); }\n/* -- Radial Inverse -- */\n.radial-bar-inverse.radial-bar-0 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(90deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-5 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(108deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-10 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(126deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-15 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(144deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-20 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(162deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-25 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(180deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-30 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(198deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-35 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(216deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-40 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(234deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-45 {\n  background-image: linear-gradient(90deg, #d6d6d6 50%, transparent 50%, transparent), linear-gradient(252deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-50 {\n  background-image: linear-gradient(270deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-55 {\n  background-image: linear-gradient(288deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-60 {\n  background-image: linear-gradient(306deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-65 {\n  background-image: linear-gradient(324deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-70 {\n  background-image: linear-gradient(342deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-75 {\n  background-image: linear-gradient(360deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-80 {\n  background-image: linear-gradient(378deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-85 {\n  background-image: linear-gradient(396deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-90 {\n  background-image: linear-gradient(414deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-95 {\n  background-image: linear-gradient(432deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-inverse.radial-bar-100 {\n  background-image: linear-gradient(450deg, #4c5667 50%, transparent 50%, transparent), linear-gradient(270deg, #4c5667 50%, #d6d6d6 50%, #d6d6d6); }\n.radial-bar-lg {\n  width: 100px;\n  height: 100px;\n  font-size: 20px; }\n.radial-bar-lg:after,\n.radial-bar-lg > img {\n  width: 70px;\n  height: 70px;\n  margin-left: 15px;\n  margin-top: 15px;\n  line-height: 70px; }\n.radial-bar-sm {\n  width: 50px;\n  height: 50px;\n  font-size: 12px; }\n.radial-bar-sm:after,\n.radial-bar-sm > img {\n  width: 35px;\n  height: 35px;\n  margin-left: 7.5px;\n  margin-top: 7.5px;\n  line-height: 35px; }\n.radial-bar-xs {\n  width: 30px;\n  height: 30px;\n  font-size: 8px; }\n.radial-bar-xs:after,\n.radial-bar-xs > img {\n  width: 20px;\n  height: 20px;\n  margin-left: 5.5px;\n  margin-top: 4.5px;\n  line-height: 21px; }\n.radial-bar {\n  background-clip: content-box; }\n"

/***/ }),

/***/ "./src/assets/icon/icofont/css/icofont.scss":
/*!**************************************************!*\
  !*** ./src/assets/icon/icofont/css/icofont.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @package IcoFont by ShapeBootstrap - https://shapebootstrap.net\n * @version 1.0.0 Beta\n * @author IcoFont http://icofont.com\n * @copyright Copyright (c) 2016 IcoFont\n * @license - http://icofont.com/license/\n*/\n@font-face {\n  font-family: 'icofont';\n  src: url('icofont.eot?v=1.0.0-beta');\n  src: url('icofont.eot?v=1.0.0-beta#iefix') format(\"embedded-opentype\"), url('icofont.ttf?v=1.0.0-beta') format(\"truetype\"), url('icofont.woff?v=1.0.0-beta') format(\"woff\"), url('icofont.svg?v=1.0.0-beta#icofont') format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n.icofont {\n  font-family: 'IcoFont' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.icofont-angry-monster:before {\n  content: \"\\e901\"; }\n.icofont-bathtub:before {\n  content: \"\\e902\"; }\n.icofont-bird-wings:before {\n  content: \"\\e903\"; }\n.icofont-bow:before {\n  content: \"\\e904\"; }\n.icofont-brain-alt:before {\n  content: \"\\e905\"; }\n.icofont-butterfly-alt:before {\n  content: \"\\e906\"; }\n.icofont-castle:before {\n  content: \"\\e907\"; }\n.icofont-circuit:before {\n  content: \"\\e908\"; }\n.icofont-dart:before {\n  content: \"\\e909\"; }\n.icofont-dice-alt:before {\n  content: \"\\e90a\"; }\n.icofont-disability-race:before {\n  content: \"\\e90b\"; }\n.icofont-diving-goggle:before {\n  content: \"\\e90c\"; }\n.icofont-fire-alt:before {\n  content: \"\\e90d\"; }\n.icofont-flame-torch:before {\n  content: \"\\e90e\"; }\n.icofont-flora-flower:before {\n  content: \"\\e90f\"; }\n.icofont-flora:before {\n  content: \"\\e910\"; }\n.icofont-gift-box:before {\n  content: \"\\e911\"; }\n.icofont-halloween-pumpkin:before {\n  content: \"\\e912\"; }\n.icofont-hand-power:before {\n  content: \"\\e913\"; }\n.icofont-hand-thunder:before {\n  content: \"\\e914\"; }\n.icofont-king-crown:before {\n  content: \"\\e915\"; }\n.icofont-king-monster:before {\n  content: \"\\e916\"; }\n.icofont-love:before {\n  content: \"\\e917\"; }\n.icofont-magician-hat:before {\n  content: \"\\e918\"; }\n.icofont-native-american:before {\n  content: \"\\e919\"; }\n.icofont-open-eye:before {\n  content: \"\\e91a\"; }\n.icofont-owl-look:before {\n  content: \"\\e91b\"; }\n.icofont-phoenix:before {\n  content: \"\\e91c\"; }\n.icofont-queen-crown:before {\n  content: \"\\e91d\"; }\n.icofont-robot-face:before {\n  content: \"\\e91e\"; }\n.icofont-sand-clock:before {\n  content: \"\\e91f\"; }\n.icofont-shield-alt:before {\n  content: \"\\e920\"; }\n.icofont-ship-wheel:before {\n  content: \"\\e921\"; }\n.icofont-skull-danger:before {\n  content: \"\\e922\"; }\n.icofont-skull-face:before {\n  content: \"\\e923\"; }\n.icofont-snail:before {\n  content: \"\\e924\"; }\n.icofont-snow-alt:before {\n  content: \"\\e925\"; }\n.icofont-snow-flake:before {\n  content: \"\\e926\"; }\n.icofont-snowmobile:before {\n  content: \"\\e927\"; }\n.icofont-space-shuttle:before {\n  content: \"\\e928\"; }\n.icofont-star-shape:before {\n  content: \"\\e929\"; }\n.icofont-swirl:before {\n  content: \"\\e92a\"; }\n.icofont-tattoo-wing:before {\n  content: \"\\e92b\"; }\n.icofont-throne:before {\n  content: \"\\e92c\"; }\n.icofont-touch:before {\n  content: \"\\e92d\"; }\n.icofont-tree-alt:before {\n  content: \"\\e92e\"; }\n.icofont-triangle:before {\n  content: \"\\e92f\"; }\n.icofont-unity-hand:before {\n  content: \"\\e930\"; }\n.icofont-weed:before {\n  content: \"\\e931\"; }\n.icofont-woman-bird:before {\n  content: \"\\e932\"; }\n.icofont-animal-bat:before {\n  content: \"\\e933\"; }\n.icofont-animal-bear-tracks:before {\n  content: \"\\e934\"; }\n.icofont-animal-bear:before {\n  content: \"\\e935\"; }\n.icofont-animal-bird-alt:before {\n  content: \"\\e936\"; }\n.icofont-animal-bird:before {\n  content: \"\\e937\"; }\n.icofont-animal-bone:before {\n  content: \"\\e938\"; }\n.icofont-animal-bull:before {\n  content: \"\\e939\"; }\n.icofont-animal-camel-alt:before {\n  content: \"\\e93a\"; }\n.icofont-animal-camel-head:before {\n  content: \"\\e93b\"; }\n.icofont-animal-camel:before {\n  content: \"\\e93c\"; }\n.icofont-animal-cat-alt-1:before {\n  content: \"\\e93d\"; }\n.icofont-animal-cat-alt-2:before {\n  content: \"\\e93e\"; }\n.icofont-animal-cat-alt-3:before {\n  content: \"\\e93f\"; }\n.icofont-animal-cat-alt-4:before {\n  content: \"\\e940\"; }\n.icofont-animal-cat-with-dog:before {\n  content: \"\\e941\"; }\n.icofont-animal-cat:before {\n  content: \"\\e942\"; }\n.icofont-animal-cow-head:before {\n  content: \"\\e943\"; }\n.icofont-animal-cow:before {\n  content: \"\\e944\"; }\n.icofont-animal-crab:before {\n  content: \"\\e945\"; }\n.icofont-animal-crocodile:before {\n  content: \"\\e946\"; }\n.icofont-animal-deer-head:before {\n  content: \"\\e947\"; }\n.icofont-animal-dog-alt:before {\n  content: \"\\e948\"; }\n.icofont-animal-dog-barking:before {\n  content: \"\\e949\"; }\n.icofont-animal-dog:before {\n  content: \"\\e94a\"; }\n.icofont-animal-dolphin:before {\n  content: \"\\e94b\"; }\n.icofont-animal-duck-tracks:before {\n  content: \"\\e94c\"; }\n.icofont-animal-eagle-head:before {\n  content: \"\\e94d\"; }\n.icofont-animal-eaten-fish:before {\n  content: \"\\e94e\"; }\n.icofont-animal-elephant-alt:before {\n  content: \"\\e94f\"; }\n.icofont-animal-elephant-head-alt:before {\n  content: \"\\e950\"; }\n.icofont-animal-elephant-head:before {\n  content: \"\\e951\"; }\n.icofont-animal-elephant:before {\n  content: \"\\e952\"; }\n.icofont-animal-elk:before {\n  content: \"\\e953\"; }\n.icofont-animal-fish-alt-1:before {\n  content: \"\\e954\"; }\n.icofont-animal-fish-alt-2:before {\n  content: \"\\e955\"; }\n.icofont-animal-fish-alt-3:before {\n  content: \"\\e956\"; }\n.icofont-animal-fish-alt-4:before {\n  content: \"\\e957\"; }\n.icofont-animal-fish:before {\n  content: \"\\e958\"; }\n.icofont-animal-fox-alt:before {\n  content: \"\\e959\"; }\n.icofont-animal-fox:before {\n  content: \"\\e95a\"; }\n.icofont-animal-frog-tracks:before {\n  content: \"\\e95b\"; }\n.icofont-animal-frog:before {\n  content: \"\\e95c\"; }\n.icofont-animal-froggy:before {\n  content: \"\\e95d\"; }\n.icofont-animal-giraffe-alt:before {\n  content: \"\\e95e\"; }\n.icofont-animal-giraffe:before {\n  content: \"\\e95f\"; }\n.icofont-animal-goat-head-alt-1:before {\n  content: \"\\e960\"; }\n.icofont-animal-goat-head-alt-2:before {\n  content: \"\\e961\"; }\n.icofont-animal-goat-head:before {\n  content: \"\\e962\"; }\n.icofont-animal-gorilla:before {\n  content: \"\\e963\"; }\n.icofont-animal-hen-tracks:before {\n  content: \"\\e964\"; }\n.icofont-animal-horse-head-alt-1:before {\n  content: \"\\e965\"; }\n.icofont-animal-horse-head-alt-2:before {\n  content: \"\\e966\"; }\n.icofont-animal-horse-head:before {\n  content: \"\\e967\"; }\n.icofont-animal-horse-tracks:before {\n  content: \"\\e968\"; }\n.icofont-animal-jellyfish:before {\n  content: \"\\e969\"; }\n.icofont-animal-kangaroo:before {\n  content: \"\\e96a\"; }\n.icofont-animal-lemur:before {\n  content: \"\\e96b\"; }\n.icofont-animal-lion-alt:before {\n  content: \"\\e96c\"; }\n.icofont-animal-lion-head-alt:before {\n  content: \"\\e96d\"; }\n.icofont-animal-lion-head:before {\n  content: \"\\e96e\"; }\n.icofont-animal-lion:before {\n  content: \"\\e96f\"; }\n.icofont-animal-monkey-alt-1:before {\n  content: \"\\e970\"; }\n.icofont-animal-monkey-alt-2:before {\n  content: \"\\e971\"; }\n.icofont-animal-monkey-alt-3:before {\n  content: \"\\e972\"; }\n.icofont-animal-monkey:before {\n  content: \"\\e973\"; }\n.icofont-animal-octopus-alt:before {\n  content: \"\\e974\"; }\n.icofont-animal-octopus:before {\n  content: \"\\e975\"; }\n.icofont-animal-owl:before {\n  content: \"\\e976\"; }\n.icofont-animal-panda-alt:before {\n  content: \"\\e977\"; }\n.icofont-animal-panda:before {\n  content: \"\\e978\"; }\n.icofont-animal-panther:before {\n  content: \"\\e979\"; }\n.icofont-animal-parrot-lip:before {\n  content: \"\\e97a\"; }\n.icofont-animal-parrot:before {\n  content: \"\\e97b\"; }\n.icofont-animal-paw:before {\n  content: \"\\e97c\"; }\n.icofont-animal-pelican:before {\n  content: \"\\e97d\"; }\n.icofont-animal-penguin:before {\n  content: \"\\e97e\"; }\n.icofont-animal-pig-alt:before {\n  content: \"\\e97f\"; }\n.icofont-animal-pig:before {\n  content: \"\\e980\"; }\n.icofont-animal-pigeon-alt:before {\n  content: \"\\e981\"; }\n.icofont-animal-pigeon:before {\n  content: \"\\e982\"; }\n.icofont-animal-pigeons:before {\n  content: \"\\e983\"; }\n.icofont-animal-rabbit-running:before {\n  content: \"\\e984\"; }\n.icofont-animal-rat-alt:before {\n  content: \"\\e985\"; }\n.icofont-animal-rhino-head:before {\n  content: \"\\e986\"; }\n.icofont-animal-rhino:before {\n  content: \"\\e987\"; }\n.icofont-animal-rooster:before {\n  content: \"\\e988\"; }\n.icofont-animal-seahorse:before {\n  content: \"\\e989\"; }\n.icofont-animal-seal:before {\n  content: \"\\e98a\"; }\n.icofont-animal-shrimp:before {\n  content: \"\\e98b\"; }\n.icofont-animal-snail-alt-1:before {\n  content: \"\\e98c\"; }\n.icofont-animal-snail-alt-2:before {\n  content: \"\\e98d\"; }\n.icofont-animal-snail:before {\n  content: \"\\e98e\"; }\n.icofont-animal-snake:before {\n  content: \"\\e98f\"; }\n.icofont-animal-squid:before {\n  content: \"\\e990\"; }\n.icofont-animal-squirrel:before {\n  content: \"\\e991\"; }\n.icofont-animal-tiger-alt:before {\n  content: \"\\e992\"; }\n.icofont-animal-tiger:before {\n  content: \"\\e993\"; }\n.icofont-animal-turtle:before {\n  content: \"\\e994\"; }\n.icofont-animal-whale:before {\n  content: \"\\e995\"; }\n.icofont-animal-woodpecker:before {\n  content: \"\\e996\"; }\n.icofont-animal-zebra:before {\n  content: \"\\e997\"; }\n.icofont-brand-acer:before {\n  content: \"\\e998\"; }\n.icofont-brand-adidas:before {\n  content: \"\\e999\"; }\n.icofont-brand-adobe:before {\n  content: \"\\e99a\"; }\n.icofont-brand-air-new-zealand:before {\n  content: \"\\e99b\"; }\n.icofont-brand-airbnb:before {\n  content: \"\\e99c\"; }\n.icofont-brand-aircell:before {\n  content: \"\\e99d\"; }\n.icofont-brand-airtel:before {\n  content: \"\\e99e\"; }\n.icofont-brand-alcatel:before {\n  content: \"\\e99f\"; }\n.icofont-brand-alibaba:before {\n  content: \"\\e9a0\"; }\n.icofont-brand-aliexpress:before {\n  content: \"\\e9a1\"; }\n.icofont-brand-alipay:before {\n  content: \"\\e9a2\"; }\n.icofont-brand-amazon:before {\n  content: \"\\e9a3\"; }\n.icofont-brand-amd:before {\n  content: \"\\e9a4\"; }\n.icofont-brand-american-airlines:before {\n  content: \"\\e9a5\"; }\n.icofont-brand-android-robot:before {\n  content: \"\\e9a6\"; }\n.icofont-brand-android:before {\n  content: \"\\e9a7\"; }\n.icofont-brand-aol:before {\n  content: \"\\e9a8\"; }\n.icofont-brand-apple:before {\n  content: \"\\e9a9\"; }\n.icofont-brand-appstore:before {\n  content: \"\\e9aa\"; }\n.icofont-brand-asus:before {\n  content: \"\\e9ab\"; }\n.icofont-brand-ati:before {\n  content: \"\\e9ac\"; }\n.icofont-brand-att:before {\n  content: \"\\e9ad\"; }\n.icofont-brand-audi:before {\n  content: \"\\e9ae\"; }\n.icofont-brand-axiata:before {\n  content: \"\\e9af\"; }\n.icofont-brand-bada:before {\n  content: \"\\e9b0\"; }\n.icofont-brand-bbc:before {\n  content: \"\\e9b1\"; }\n.icofont-brand-bing:before {\n  content: \"\\e9b2\"; }\n.icofont-brand-blackberry:before {\n  content: \"\\e9b3\"; }\n.icofont-brand-bmw:before {\n  content: \"\\e9b4\"; }\n.icofont-brand-box:before {\n  content: \"\\e9b5\"; }\n.icofont-brand-burger-king:before {\n  content: \"\\e9b6\"; }\n.icofont-brand-business-insider:before {\n  content: \"\\e9b7\"; }\n.icofont-brand-buzzfeed:before {\n  content: \"\\e9b8\"; }\n.icofont-brand-cannon:before {\n  content: \"\\e9b9\"; }\n.icofont-brand-casio:before {\n  content: \"\\e9ba\"; }\n.icofont-brand-china-mobile:before {\n  content: \"\\e9bb\"; }\n.icofont-brand-china-telecom:before {\n  content: \"\\e9bc\"; }\n.icofont-brand-china-unicom:before {\n  content: \"\\e9bd\"; }\n.icofont-brand-cisco:before {\n  content: \"\\e9be\"; }\n.icofont-brand-citibank:before {\n  content: \"\\e9bf\"; }\n.icofont-brand-cnet:before {\n  content: \"\\e9c0\"; }\n.icofont-brand-cnn:before {\n  content: \"\\e9c1\"; }\n.icofont-brand-cocal-cola:before {\n  content: \"\\e9c2\"; }\n.icofont-brand-compaq:before {\n  content: \"\\e9c3\"; }\n.icofont-brand-copy:before {\n  content: \"\\e9c4\"; }\n.icofont-brand-debian:before {\n  content: \"\\e9c5\"; }\n.icofont-brand-delicious:before {\n  content: \"\\e9c6\"; }\n.icofont-brand-dell:before {\n  content: \"\\e9c7\"; }\n.icofont-brand-designbump:before {\n  content: \"\\e9c8\"; }\n.icofont-brand-designfloat:before {\n  content: \"\\e9c9\"; }\n.icofont-brand-disney:before {\n  content: \"\\e9ca\"; }\n.icofont-brand-dodge:before {\n  content: \"\\e9cb\"; }\n.icofont-brand-dove:before {\n  content: \"\\e9cc\"; }\n.icofont-brand-ebay:before {\n  content: \"\\e9cd\"; }\n.icofont-brand-eleven:before {\n  content: \"\\e9ce\"; }\n.icofont-brand-emirates:before {\n  content: \"\\e9cf\"; }\n.icofont-brand-espn:before {\n  content: \"\\e9d0\"; }\n.icofont-brand-etihad-airways:before {\n  content: \"\\e9d1\"; }\n.icofont-brand-etisalat:before {\n  content: \"\\e9d2\"; }\n.icofont-brand-etsy:before {\n  content: \"\\e9d3\"; }\n.icofont-brand-facebook:before {\n  content: \"\\e9d4\"; }\n.icofont-brand-fastrack:before {\n  content: \"\\e9d5\"; }\n.icofont-brand-fedex:before {\n  content: \"\\e9d6\"; }\n.icofont-brand-ferrari:before {\n  content: \"\\e9d7\"; }\n.icofont-brand-fitbit:before {\n  content: \"\\e9d8\"; }\n.icofont-brand-flikr:before {\n  content: \"\\e9d9\"; }\n.icofont-brand-forbes:before {\n  content: \"\\e9da\"; }\n.icofont-brand-foursquare:before {\n  content: \"\\e9db\"; }\n.icofont-brand-fox:before {\n  content: \"\\e9dc\"; }\n.icofont-brand-foxconn:before {\n  content: \"\\e9dd\"; }\n.icofont-brand-fujitsu:before {\n  content: \"\\e9de\"; }\n.icofont-brand-general-electric:before {\n  content: \"\\e9df\"; }\n.icofont-brand-gillette:before {\n  content: \"\\e9e0\"; }\n.icofont-brand-gizmodo:before {\n  content: \"\\e9e1\"; }\n.icofont-brand-gnome:before {\n  content: \"\\e9e2\"; }\n.icofont-brand-google:before {\n  content: \"\\e9e3\"; }\n.icofont-brand-gopro:before {\n  content: \"\\e9e4\"; }\n.icofont-brand-gucci:before {\n  content: \"\\e9e5\"; }\n.icofont-brand-hallmark:before {\n  content: \"\\e9e6\"; }\n.icofont-brand-hi5:before {\n  content: \"\\e9e7\"; }\n.icofont-brand-honda:before {\n  content: \"\\e9e8\"; }\n.icofont-brand-hp:before {\n  content: \"\\e9e9\"; }\n.icofont-brand-hsbc:before {\n  content: \"\\e9ea\"; }\n.icofont-brand-htc:before {\n  content: \"\\e9eb\"; }\n.icofont-brand-huawei:before {\n  content: \"\\e9ec\"; }\n.icofont-brand-hulu:before {\n  content: \"\\e9ed\"; }\n.icofont-brand-hyundai:before {\n  content: \"\\e9ee\"; }\n.icofont-brand-ibm:before {\n  content: \"\\e9ef\"; }\n.icofont-brand-icofont:before {\n  content: \"\\e9f0\"; }\n.icofont-brand-icq:before {\n  content: \"\\e9f1\"; }\n.icofont-brand-ikea:before {\n  content: \"\\e9f2\"; }\n.icofont-brand-imdb:before {\n  content: \"\\e9f3\"; }\n.icofont-brand-indiegogo:before {\n  content: \"\\e9f4\"; }\n.icofont-brand-intel:before {\n  content: \"\\e9f5\"; }\n.icofont-brand-ipair:before {\n  content: \"\\e9f6\"; }\n.icofont-brand-jaguar:before {\n  content: \"\\e9f7\"; }\n.icofont-brand-java:before {\n  content: \"\\e9f8\"; }\n.icofont-brand-joomshaper:before {\n  content: \"\\e9f9\"; }\n.icofont-brand-kickstarter:before {\n  content: \"\\e9fa\"; }\n.icofont-brand-kik:before {\n  content: \"\\e9fb\"; }\n.icofont-brand-lastfm:before {\n  content: \"\\e9fc\"; }\n.icofont-brand-lego:before {\n  content: \"\\e9fd\"; }\n.icofont-brand-lenovo:before {\n  content: \"\\e9fe\"; }\n.icofont-brand-levis:before {\n  content: \"\\e9ff\"; }\n.icofont-brand-lexus:before {\n  content: \"\\ea00\"; }\n.icofont-brand-lg:before {\n  content: \"\\ea01\"; }\n.icofont-brand-life-hacker:before {\n  content: \"\\ea02\"; }\n.icofont-brand-line-messenger:before {\n  content: \"\\ea03\"; }\n.icofont-brand-linkedin:before {\n  content: \"\\ea04\"; }\n.icofont-brand-linux-mint:before {\n  content: \"\\ea05\"; }\n.icofont-brand-linux:before {\n  content: \"\\ea06\"; }\n.icofont-brand-lionix:before {\n  content: \"\\ea07\"; }\n.icofont-brand-live-messenger:before {\n  content: \"\\ea08\"; }\n.icofont-brand-loreal:before {\n  content: \"\\ea09\"; }\n.icofont-brand-louis-vuitton:before {\n  content: \"\\ea0a\"; }\n.icofont-brand-mac-os:before {\n  content: \"\\ea0b\"; }\n.icofont-brand-marvel-app:before {\n  content: \"\\ea0c\"; }\n.icofont-brand-able-pro:before {\n  content: \"\\ea0d\"; }\n.icofont-brand-mazda:before {\n  content: \"\\ea0e\"; }\n.icofont-brand-mcdonals:before {\n  content: \"\\ea0f\"; }\n.icofont-brand-mercedes:before {\n  content: \"\\ea10\"; }\n.icofont-brand-micromax:before {\n  content: \"\\ea11\"; }\n.icofont-brand-microsoft:before {\n  content: \"\\ea12\"; }\n.icofont-brand-mobileme:before {\n  content: \"\\ea13\"; }\n.icofont-brand-mobily:before {\n  content: \"\\ea14\"; }\n.icofont-brand-motorola:before {\n  content: \"\\ea15\"; }\n.icofont-brand-msi:before {\n  content: \"\\ea16\"; }\n.icofont-brand-mts:before {\n  content: \"\\ea17\"; }\n.icofont-brand-myspace:before {\n  content: \"\\ea18\"; }\n.icofont-brand-mytv:before {\n  content: \"\\ea19\"; }\n.icofont-brand-nasa:before {\n  content: \"\\ea1a\"; }\n.icofont-brand-natgeo:before {\n  content: \"\\ea1b\"; }\n.icofont-brand-nbc:before {\n  content: \"\\ea1c\"; }\n.icofont-brand-nescafe:before {\n  content: \"\\ea1d\"; }\n.icofont-brand-nestle:before {\n  content: \"\\ea1e\"; }\n.icofont-brand-netflix:before {\n  content: \"\\ea1f\"; }\n.icofont-brand-nexus:before {\n  content: \"\\ea20\"; }\n.icofont-brand-nike:before {\n  content: \"\\ea21\"; }\n.icofont-brand-nokia:before {\n  content: \"\\ea22\"; }\n.icofont-brand-nvidia:before {\n  content: \"\\ea23\"; }\n.icofont-brand-omega:before {\n  content: \"\\ea24\"; }\n.icofont-brand-opensuse:before {\n  content: \"\\ea25\"; }\n.icofont-brand-oracle:before {\n  content: \"\\ea26\"; }\n.icofont-brand-panasonic:before {\n  content: \"\\ea27\"; }\n.icofont-brand-paypal:before {\n  content: \"\\ea28\"; }\n.icofont-brand-pepsi:before {\n  content: \"\\ea29\"; }\n.icofont-brand-philips:before {\n  content: \"\\ea2a\"; }\n.icofont-brand-pizza-hut:before {\n  content: \"\\ea2b\"; }\n.icofont-brand-playstation:before {\n  content: \"\\ea2c\"; }\n.icofont-brand-puma:before {\n  content: \"\\ea2d\"; }\n.icofont-brand-qatar-air:before {\n  content: \"\\ea2e\"; }\n.icofont-brand-qvc:before {\n  content: \"\\ea2f\"; }\n.icofont-brand-readernaut:before {\n  content: \"\\ea30\"; }\n.icofont-brand-redbull:before {\n  content: \"\\ea31\"; }\n.icofont-brand-reebok:before {\n  content: \"\\ea32\"; }\n.icofont-brand-reuters:before {\n  content: \"\\ea33\"; }\n.icofont-brand-samsung:before {\n  content: \"\\ea34\"; }\n.icofont-brand-sap:before {\n  content: \"\\ea35\"; }\n.icofont-brand-saudia-airlines:before {\n  content: \"\\ea36\"; }\n.icofont-brand-scribd:before {\n  content: \"\\ea37\"; }\n.icofont-brand-shell:before {\n  content: \"\\ea38\"; }\n.icofont-brand-siemens:before {\n  content: \"\\ea39\"; }\n.icofont-brand-sk-telecom:before {\n  content: \"\\ea3a\"; }\n.icofont-brand-slideshare:before {\n  content: \"\\ea3b\"; }\n.icofont-brand-smashing-magazine:before {\n  content: \"\\ea3c\"; }\n.icofont-brand-snapchat:before {\n  content: \"\\ea3d\"; }\n.icofont-brand-sony-ericsson:before {\n  content: \"\\ea3e\"; }\n.icofont-brand-sony:before {\n  content: \"\\ea3f\"; }\n.icofont-brand-soundcloud:before {\n  content: \"\\ea40\"; }\n.icofont-brand-sprint:before {\n  content: \"\\ea41\"; }\n.icofont-brand-squidoo:before {\n  content: \"\\ea42\"; }\n.icofont-brand-starbucks:before {\n  content: \"\\ea43\"; }\n.icofont-brand-stc:before {\n  content: \"\\ea44\"; }\n.icofont-brand-steam:before {\n  content: \"\\ea45\"; }\n.icofont-brand-suzuki:before {\n  content: \"\\ea46\"; }\n.icofont-brand-symbian:before {\n  content: \"\\ea47\"; }\n.icofont-brand-t-mobile:before {\n  content: \"\\ea48\"; }\n.icofont-brand-tango:before {\n  content: \"\\ea49\"; }\n.icofont-brand-target:before {\n  content: \"\\ea4a\"; }\n.icofont-brand-tata-indicom:before {\n  content: \"\\ea4b\"; }\n.icofont-brand-techcrunch:before {\n  content: \"\\ea4c\"; }\n.icofont-brand-telenor:before {\n  content: \"\\ea4d\"; }\n.icofont-brand-teliasonera:before {\n  content: \"\\ea4e\"; }\n.icofont-brand-tesla:before {\n  content: \"\\ea4f\"; }\n.icofont-brand-the-verge:before {\n  content: \"\\ea50\"; }\n.icofont-brand-thenextweb:before {\n  content: \"\\ea51\"; }\n.icofont-brand-toshiba:before {\n  content: \"\\ea52\"; }\n.icofont-brand-toyota:before {\n  content: \"\\ea53\"; }\n.icofont-brand-tribenet:before {\n  content: \"\\ea54\"; }\n.icofont-brand-ubuntu:before {\n  content: \"\\ea55\"; }\n.icofont-brand-unilever:before {\n  content: \"\\ea56\"; }\n.icofont-brand-vaio:before {\n  content: \"\\ea57\"; }\n.icofont-brand-verizon:before {\n  content: \"\\ea58\"; }\n.icofont-brand-viber:before {\n  content: \"\\ea59\"; }\n.icofont-brand-vodafone:before {\n  content: \"\\ea5a\"; }\n.icofont-brand-volkswagen:before {\n  content: \"\\ea5b\"; }\n.icofont-brand-walmart:before {\n  content: \"\\ea5c\"; }\n.icofont-brand-warnerbros:before {\n  content: \"\\ea5d\"; }\n.icofont-brand-whatsapp:before {\n  content: \"\\ea5e\"; }\n.icofont-brand-wikipedia:before {\n  content: \"\\ea5f\"; }\n.icofont-brand-windows:before {\n  content: \"\\ea60\"; }\n.icofont-brand-wire:before {\n  content: \"\\ea61\"; }\n.icofont-brand-yahoobuzz:before {\n  content: \"\\ea62\"; }\n.icofont-brand-yamaha:before {\n  content: \"\\ea63\"; }\n.icofont-brand-youtube:before {\n  content: \"\\ea64\"; }\n.icofont-brand-zain:before {\n  content: \"\\ea65\"; }\n.icofont-bank-alt:before {\n  content: \"\\ea66\"; }\n.icofont-barcode:before {\n  content: \"\\ea67\"; }\n.icofont-basket:before {\n  content: \"\\ea68\"; }\n.icofont-bill-alt:before {\n  content: \"\\ea69\"; }\n.icofont-billboard:before {\n  content: \"\\ea6a\"; }\n.icofont-briefcase-alt-1:before {\n  content: \"\\ea6b\"; }\n.icofont-briefcase-alt-2:before {\n  content: \"\\ea6c\"; }\n.icofont-building-alt:before {\n  content: \"\\ea6d\"; }\n.icofont-businessman:before {\n  content: \"\\ea6e\"; }\n.icofont-businesswoman:before {\n  content: \"\\ea6f\"; }\n.icofont-cart-alt:before {\n  content: \"\\ea70\"; }\n.icofont-chair:before {\n  content: \"\\ea71\"; }\n.icofont-clip:before {\n  content: \"\\ea72\"; }\n.icofont-coins:before {\n  content: \"\\ea73\"; }\n.icofont-company:before {\n  content: \"\\ea74\"; }\n.icofont-contact-add:before {\n  content: \"\\ea75\"; }\n.icofont-deal:before {\n  content: \"\\ea76\"; }\n.icofont-files:before {\n  content: \"\\ea77\"; }\n.icofont-growth:before {\n  content: \"\\ea78\"; }\n.icofont-id-card:before {\n  content: \"\\ea79\"; }\n.icofont-idea:before {\n  content: \"\\ea7a\"; }\n.icofont-list:before {\n  content: \"\\ea7b\"; }\n.icofont-meeting-add:before {\n  content: \"\\ea7c\"; }\n.icofont-money-bag:before {\n  content: \"\\ea7d\"; }\n.icofont-people:before {\n  content: \"\\ea7e\"; }\n.icofont-pie-chart:before {\n  content: \"\\ea7f\"; }\n.icofont-presentation-alt:before {\n  content: \"\\ea80\"; }\n.icofont-stamp:before {\n  content: \"\\ea81\"; }\n.icofont-stock-mobile:before {\n  content: \"\\ea82\"; }\n.icofont-support:before {\n  content: \"\\ea83\"; }\n.icofont-tasks-alt:before {\n  content: \"\\ea84\"; }\n.icofont-wheel:before {\n  content: \"\\ea85\"; }\n.icofont-chart-arrows-axis:before {\n  content: \"\\ea86\"; }\n.icofont-chart-bar-graph:before {\n  content: \"\\ea87\"; }\n.icofont-chart-flow-alt-1:before {\n  content: \"\\ea88\"; }\n.icofont-chart-flow-alt-2:before {\n  content: \"\\ea89\"; }\n.icofont-chart-flow:before {\n  content: \"\\ea8a\"; }\n.icofont-chart-histogram-alt:before {\n  content: \"\\ea8b\"; }\n.icofont-chart-histogram:before {\n  content: \"\\ea8c\"; }\n.icofont-chart-line-alt:before {\n  content: \"\\ea8d\"; }\n.icofont-chart-line:before {\n  content: \"\\ea8e\"; }\n.icofont-chart-pie-alt:before {\n  content: \"\\ea8f\"; }\n.icofont-chart-pie:before {\n  content: \"\\ea90\"; }\n.icofont-chart-radar-graph:before {\n  content: \"\\ea91\"; }\n.icofont-cur-afghani-false:before {\n  content: \"\\ea92\"; }\n.icofont-cur-afghani-minus:before {\n  content: \"\\ea93\"; }\n.icofont-cur-afghani-plus:before {\n  content: \"\\ea94\"; }\n.icofont-cur-afghani-true:before {\n  content: \"\\ea95\"; }\n.icofont-cur-afghani:before {\n  content: \"\\ea96\"; }\n.icofont-cur-baht-false:before {\n  content: \"\\ea97\"; }\n.icofont-cur-baht-minus:before {\n  content: \"\\ea98\"; }\n.icofont-cur-baht-plus:before {\n  content: \"\\ea99\"; }\n.icofont-cur-baht-true:before {\n  content: \"\\ea9a\"; }\n.icofont-cur-baht:before {\n  content: \"\\ea9b\"; }\n.icofont-cur-bitcoin-false:before {\n  content: \"\\ea9c\"; }\n.icofont-cur-bitcoin-minus:before {\n  content: \"\\ea9d\"; }\n.icofont-cur-bitcoin-plus:before {\n  content: \"\\ea9e\"; }\n.icofont-cur-bitcoin-true:before {\n  content: \"\\ea9f\"; }\n.icofont-cur-bitcoin:before {\n  content: \"\\eaa0\"; }\n.icofont-cur-dollar-flase:before {\n  content: \"\\eaa1\"; }\n.icofont-cur-dollar-minus:before {\n  content: \"\\eaa2\"; }\n.icofont-cur-dollar-plus:before {\n  content: \"\\eaa3\"; }\n.icofont-cur-dollar-true:before {\n  content: \"\\eaa4\"; }\n.icofont-cur-dollar:before {\n  content: \"\\eaa5\"; }\n.icofont-cur-dong-false:before {\n  content: \"\\eaa6\"; }\n.icofont-cur-dong-minus:before {\n  content: \"\\eaa7\"; }\n.icofont-cur-dong-plus:before {\n  content: \"\\eaa8\"; }\n.icofont-cur-dong-true:before {\n  content: \"\\eaa9\"; }\n.icofont-cur-dong:before {\n  content: \"\\eaaa\"; }\n.icofont-cur-euro-false:before {\n  content: \"\\eaab\"; }\n.icofont-cur-euro-minus:before {\n  content: \"\\eaac\"; }\n.icofont-cur-euro-plus:before {\n  content: \"\\eaad\"; }\n.icofont-cur-euro-true:before {\n  content: \"\\eaae\"; }\n.icofont-cur-euro:before {\n  content: \"\\eaaf\"; }\n.icofont-cur-frank-false:before {\n  content: \"\\eab0\"; }\n.icofont-cur-frank-minus:before {\n  content: \"\\eab1\"; }\n.icofont-cur-frank-plus:before {\n  content: \"\\eab2\"; }\n.icofont-cur-frank-true:before {\n  content: \"\\eab3\"; }\n.icofont-cur-frank:before {\n  content: \"\\eab4\"; }\n.icofont-cur-hryvnia-false:before {\n  content: \"\\eab5\"; }\n.icofont-cur-hryvnia-minus:before {\n  content: \"\\eab6\"; }\n.icofont-cur-hryvnia-plus:before {\n  content: \"\\eab7\"; }\n.icofont-cur-hryvnia-true:before {\n  content: \"\\eab8\"; }\n.icofont-cur-hryvnia:before {\n  content: \"\\eab9\"; }\n.icofont-cur-lira-false:before {\n  content: \"\\eaba\"; }\n.icofont-cur-lira-minus:before {\n  content: \"\\eabb\"; }\n.icofont-cur-lira-plus:before {\n  content: \"\\eabc\"; }\n.icofont-cur-lira-true:before {\n  content: \"\\eabd\"; }\n.icofont-cur-lira:before {\n  content: \"\\eabe\"; }\n.icofont-cur-peseta-false:before {\n  content: \"\\eabf\"; }\n.icofont-cur-peseta-minus:before {\n  content: \"\\eac0\"; }\n.icofont-cur-peseta-plus:before {\n  content: \"\\eac1\"; }\n.icofont-cur-peseta-true:before {\n  content: \"\\eac2\"; }\n.icofont-cur-peseta:before {\n  content: \"\\eac3\"; }\n.icofont-cur-peso-false:before {\n  content: \"\\eac4\"; }\n.icofont-cur-peso-minus:before {\n  content: \"\\eac5\"; }\n.icofont-cur-peso-plus:before {\n  content: \"\\eac6\"; }\n.icofont-cur-peso-true:before {\n  content: \"\\eac7\"; }\n.icofont-cur-peso:before {\n  content: \"\\eac8\"; }\n.icofont-cur-pound-false:before {\n  content: \"\\eac9\"; }\n.icofont-cur-pound-minus:before {\n  content: \"\\eaca\"; }\n.icofont-cur-pound-plus:before {\n  content: \"\\eacb\"; }\n.icofont-cur-pound-true:before {\n  content: \"\\eacc\"; }\n.icofont-cur-pound:before {\n  content: \"\\eacd\"; }\n.icofont-cur-renminbi-false:before {\n  content: \"\\eace\"; }\n.icofont-cur-renminbi-minus:before {\n  content: \"\\eacf\"; }\n.icofont-cur-renminbi-plus:before {\n  content: \"\\ead0\"; }\n.icofont-cur-renminbi-true:before {\n  content: \"\\ead1\"; }\n.icofont-cur-renminbi:before {\n  content: \"\\ead2\"; }\n.icofont-cur-riyal-false:before {\n  content: \"\\ead3\"; }\n.icofont-cur-riyal-minus:before {\n  content: \"\\ead4\"; }\n.icofont-cur-riyal-plus:before {\n  content: \"\\ead5\"; }\n.icofont-cur-riyal-true:before {\n  content: \"\\ead6\"; }\n.icofont-cur-riyal:before {\n  content: \"\\ead7\"; }\n.icofont-cur-rouble-false:before {\n  content: \"\\ead8\"; }\n.icofont-cur-rouble-minus:before {\n  content: \"\\ead9\"; }\n.icofont-cur-rouble-plus:before {\n  content: \"\\eada\"; }\n.icofont-cur-rouble-true:before {\n  content: \"\\eadb\"; }\n.icofont-cur-rouble:before {\n  content: \"\\eadc\"; }\n.icofont-cur-rupee-false:before {\n  content: \"\\eadd\"; }\n.icofont-cur-rupee-minus:before {\n  content: \"\\eade\"; }\n.icofont-cur-rupee-plus:before {\n  content: \"\\eadf\"; }\n.icofont-cur-rupee-true:before {\n  content: \"\\eae0\"; }\n.icofont-cur-rupee:before {\n  content: \"\\eae1\"; }\n.icofont-cur-taka-false:before {\n  content: \"\\eae2\"; }\n.icofont-cur-taka-minus:before {\n  content: \"\\eae3\"; }\n.icofont-cur-taka-plus:before {\n  content: \"\\eae4\"; }\n.icofont-cur-taka-true:before {\n  content: \"\\eae5\"; }\n.icofont-cur-taka:before {\n  content: \"\\eae6\"; }\n.icofont-cur-turkish-lira-false:before {\n  content: \"\\eae7\"; }\n.icofont-cur-turkish-lira-minus:before {\n  content: \"\\eae8\"; }\n.icofont-cur-turkish-lira-plus:before {\n  content: \"\\eae9\"; }\n.icofont-cur-turkish-lira-true:before {\n  content: \"\\eaea\"; }\n.icofont-cur-turkish-lira:before {\n  content: \"\\eaeb\"; }\n.icofont-cur-won-false:before {\n  content: \"\\eaec\"; }\n.icofont-cur-won-minus:before {\n  content: \"\\eaed\"; }\n.icofont-cur-won-plus:before {\n  content: \"\\eaee\"; }\n.icofont-cur-won-true:before {\n  content: \"\\eaef\"; }\n.icofont-cur-won:before {\n  content: \"\\eaf0\"; }\n.icofont-cur-yen-false:before {\n  content: \"\\eaf1\"; }\n.icofont-cur-yen-minus:before {\n  content: \"\\eaf2\"; }\n.icofont-cur-yen-plus:before {\n  content: \"\\eaf3\"; }\n.icofont-cur-yen-true:before {\n  content: \"\\eaf4\"; }\n.icofont-cur-yen:before {\n  content: \"\\eaf5\"; }\n.icofont-android-nexus:before {\n  content: \"\\eaf6\"; }\n.icofont-android-tablet:before {\n  content: \"\\eaf7\"; }\n.icofont-apple-watch:before {\n  content: \"\\eaf8\"; }\n.icofont-drwaing-tablet:before {\n  content: \"\\eaf9\"; }\n.icofont-earphone:before {\n  content: \"\\eafa\"; }\n.icofont-flash-drive:before {\n  content: \"\\eafb\"; }\n.icofont-game-control:before {\n  content: \"\\eafc\"; }\n.icofont-headphone-alt:before {\n  content: \"\\eafd\"; }\n.icofont-htc-one:before {\n  content: \"\\eafe\"; }\n.icofont-imac:before {\n  content: \"\\eaff\"; }\n.icofont-ipad-touch:before {\n  content: \"\\eb00\"; }\n.icofont-iphone:before {\n  content: \"\\eb01\"; }\n.icofont-ipod-nano:before {\n  content: \"\\eb02\"; }\n.icofont-ipod-touch:before {\n  content: \"\\eb03\"; }\n.icofont-keyboard-alt:before {\n  content: \"\\eb04\"; }\n.icofont-keyboard-wireless:before {\n  content: \"\\eb05\"; }\n.icofont-laptop-alt:before {\n  content: \"\\eb06\"; }\n.icofont-macbook:before {\n  content: \"\\eb07\"; }\n.icofont-magic-mouse:before {\n  content: \"\\eb08\"; }\n.icofont-microphone-alt:before {\n  content: \"\\eb09\"; }\n.icofont-monitor:before {\n  content: \"\\eb0a\"; }\n.icofont-mouse:before {\n  content: \"\\eb0b\"; }\n.icofont-nintendo:before {\n  content: \"\\eb0c\"; }\n.icofont-playstation:before {\n  content: \"\\eb0d\"; }\n.icofont-psvita:before {\n  content: \"\\eb0e\"; }\n.icofont-radio-mic:before {\n  content: \"\\eb0f\"; }\n.icofont-refrigerator:before {\n  content: \"\\eb10\"; }\n.icofont-samsung-galaxy:before {\n  content: \"\\eb11\"; }\n.icofont-surface-tablet:before {\n  content: \"\\eb12\"; }\n.icofont-washing-machine:before {\n  content: \"\\eb13\"; }\n.icofont-wifi-router:before {\n  content: \"\\eb14\"; }\n.icofont-wii-u:before {\n  content: \"\\eb15\"; }\n.icofont-windows-lumia:before {\n  content: \"\\eb16\"; }\n.icofont-wireless-mouse:before {\n  content: \"\\eb17\"; }\n.icofont-xbox-360:before {\n  content: \"\\eb18\"; }\n.icofont-arrow-down:before {\n  content: \"\\eb19\"; }\n.icofont-arrow-left:before {\n  content: \"\\eb1a\"; }\n.icofont-arrow-right:before {\n  content: \"\\eb1b\"; }\n.icofont-arrow-up:before {\n  content: \"\\eb1c\"; }\n.icofont-block-down:before {\n  content: \"\\eb1d\"; }\n.icofont-block-left:before {\n  content: \"\\eb1e\"; }\n.icofont-block-right:before {\n  content: \"\\eb1f\"; }\n.icofont-block-up:before {\n  content: \"\\eb20\"; }\n.icofont-bubble-down:before {\n  content: \"\\eb21\"; }\n.icofont-bubble-left:before {\n  content: \"\\eb22\"; }\n.icofont-bubble-right:before {\n  content: \"\\eb23\"; }\n.icofont-bubble-up:before {\n  content: \"\\eb24\"; }\n.icofont-caret-down:before {\n  content: \"\\eb25\"; }\n.icofont-caret-left:before {\n  content: \"\\eb26\"; }\n.icofont-caret-right:before {\n  content: \"\\eb27\"; }\n.icofont-caret-up:before {\n  content: \"\\eb28\"; }\n.icofont-circled-down:before {\n  content: \"\\eb29\"; }\n.icofont-circled-left:before {\n  content: \"\\eb2a\"; }\n.icofont-circled-right:before {\n  content: \"\\eb2b\"; }\n.icofont-circled-up:before {\n  content: \"\\eb2c\"; }\n.icofont-collapse:before {\n  content: \"\\eb2d\"; }\n.icofont-cursor-drag:before {\n  content: \"\\eb2e\"; }\n.icofont-curved-double-left:before {\n  content: \"\\eb2f\"; }\n.icofont-curved-double-right:before {\n  content: \"\\eb30\"; }\n.icofont-curved-down:before {\n  content: \"\\eb31\"; }\n.icofont-curved-left:before {\n  content: \"\\eb32\"; }\n.icofont-curved-right:before {\n  content: \"\\eb33\"; }\n.icofont-curved-up:before {\n  content: \"\\eb34\"; }\n.icofont-dotted-down:before {\n  content: \"\\eb35\"; }\n.icofont-dotted-left:before {\n  content: \"\\eb36\"; }\n.icofont-dotted-right:before {\n  content: \"\\eb37\"; }\n.icofont-dotted-up:before {\n  content: \"\\eb38\"; }\n.icofont-double-left:before {\n  content: \"\\eb39\"; }\n.icofont-double-right:before {\n  content: \"\\eb3a\"; }\n.icofont-drag:before {\n  content: \"\\eb3b\"; }\n.icofont-drag1:before {\n  content: \"\\eb3c\"; }\n.icofont-drag2:before {\n  content: \"\\eb3d\"; }\n.icofont-drag3:before {\n  content: \"\\eb3e\"; }\n.icofont-expand-alt:before {\n  content: \"\\eb3f\"; }\n.icofont-hand-down:before {\n  content: \"\\eb40\"; }\n.icofont-hand-drag:before {\n  content: \"\\eb41\"; }\n.icofont-hand-drag1:before {\n  content: \"\\eb42\"; }\n.icofont-hand-drag2:before {\n  content: \"\\eb43\"; }\n.icofont-hand-drawn-alt-down:before {\n  content: \"\\eb44\"; }\n.icofont-hand-drawn-alt-left:before {\n  content: \"\\eb45\"; }\n.icofont-hand-drawn-alt-right:before {\n  content: \"\\eb46\"; }\n.icofont-hand-drawn-alt-up:before {\n  content: \"\\eb47\"; }\n.icofont-hand-drawn-down:before {\n  content: \"\\eb48\"; }\n.icofont-hand-drawn-left:before {\n  content: \"\\eb49\"; }\n.icofont-hand-drawn-right:before {\n  content: \"\\eb4a\"; }\n.icofont-hand-drawn-up:before {\n  content: \"\\eb4b\"; }\n.icofont-hand-left:before {\n  content: \"\\eb4c\"; }\n.icofont-hand-right:before {\n  content: \"\\eb4d\"; }\n.icofont-hand-up:before {\n  content: \"\\eb4e\"; }\n.icofont-line-block-down:before {\n  content: \"\\eb4f\"; }\n.icofont-line-block-left:before {\n  content: \"\\eb50\"; }\n.icofont-line-block-right:before {\n  content: \"\\eb51\"; }\n.icofont-line-block-up:before {\n  content: \"\\eb52\"; }\n.icofont-long-arrow-down:before {\n  content: \"\\eb53\"; }\n.icofont-long-arrow-left:before {\n  content: \"\\eb54\"; }\n.icofont-long-arrow-right:before {\n  content: \"\\eb55\"; }\n.icofont-long-arrow-up:before {\n  content: \"\\eb56\"; }\n.icofont-rounded-collapse:before {\n  content: \"\\eb57\"; }\n.icofont-rounded-double-left:before {\n  content: \"\\eb58\"; }\n.icofont-rounded-double-right:before {\n  content: \"\\eb59\"; }\n.icofont-rounded-down:before {\n  content: \"\\eb5a\"; }\n.icofont-rounded-expand:before {\n  content: \"\\eb5b\"; }\n.icofont-rounded-left-down:before {\n  content: \"\\eb5c\"; }\n.icofont-rounded-left-up:before {\n  content: \"\\eb5d\"; }\n.icofont-rounded-left:before {\n  content: \"\\eb5e\"; }\n.icofont-rounded-right-down:before {\n  content: \"\\eb5f\"; }\n.icofont-rounded-right-up:before {\n  content: \"\\eb60\"; }\n.icofont-rounded-right:before {\n  content: \"\\eb61\"; }\n.icofont-rounded-up:before {\n  content: \"\\eb62\"; }\n.icofont-scroll-bubble-down:before {\n  content: \"\\eb63\"; }\n.icofont-scroll-bubble-left:before {\n  content: \"\\eb64\"; }\n.icofont-scroll-bubble-right:before {\n  content: \"\\eb65\"; }\n.icofont-scroll-bubble-up:before {\n  content: \"\\eb66\"; }\n.icofont-scroll-double-down:before {\n  content: \"\\eb67\"; }\n.icofont-scroll-double-left:before {\n  content: \"\\eb68\"; }\n.icofont-scroll-double-right:before {\n  content: \"\\eb69\"; }\n.icofont-scroll-double-up:before {\n  content: \"\\eb6a\"; }\n.icofont-scroll-down:before {\n  content: \"\\eb6b\"; }\n.icofont-scroll-left:before {\n  content: \"\\eb6c\"; }\n.icofont-scroll-long-down:before {\n  content: \"\\eb6d\"; }\n.icofont-scroll-long-left:before {\n  content: \"\\eb6e\"; }\n.icofont-scroll-long-right:before {\n  content: \"\\eb6f\"; }\n.icofont-scroll-long-up:before {\n  content: \"\\eb70\"; }\n.icofont-scroll-right:before {\n  content: \"\\eb71\"; }\n.icofont-scroll-up:before {\n  content: \"\\eb72\"; }\n.icofont-simple-down:before {\n  content: \"\\eb73\"; }\n.icofont-simple-left-down:before {\n  content: \"\\eb74\"; }\n.icofont-simple-left-up:before {\n  content: \"\\eb75\"; }\n.icofont-simple-left:before {\n  content: \"\\eb76\"; }\n.icofont-simple-right-down:before {\n  content: \"\\eb77\"; }\n.icofont-simple-right-up:before {\n  content: \"\\eb78\"; }\n.icofont-simple-right:before {\n  content: \"\\eb79\"; }\n.icofont-simple-up:before {\n  content: \"\\eb7a\"; }\n.icofont-square-down:before {\n  content: \"\\eb7b\"; }\n.icofont-square-left:before {\n  content: \"\\eb7c\"; }\n.icofont-square-right:before {\n  content: \"\\eb7d\"; }\n.icofont-square-up:before {\n  content: \"\\eb7e\"; }\n.icofont-stylish-down:before {\n  content: \"\\eb7f\"; }\n.icofont-stylish-left:before {\n  content: \"\\eb80\"; }\n.icofont-stylish-right:before {\n  content: \"\\eb81\"; }\n.icofont-stylish-up:before {\n  content: \"\\eb82\"; }\n.icofont-swoosh-down:before {\n  content: \"\\eb83\"; }\n.icofont-swoosh-left:before {\n  content: \"\\eb84\"; }\n.icofont-swoosh-right:before {\n  content: \"\\eb85\"; }\n.icofont-swoosh-up:before {\n  content: \"\\eb86\"; }\n.icofont-thin-double-left:before {\n  content: \"\\eb87\"; }\n.icofont-thin-double-right:before {\n  content: \"\\eb88\"; }\n.icofont-thin-down:before {\n  content: \"\\eb89\"; }\n.icofont-thin-left:before {\n  content: \"\\eb8a\"; }\n.icofont-thin-right:before {\n  content: \"\\eb8b\"; }\n.icofont-thin-up:before {\n  content: \"\\eb8c\"; }\n.icofont-atom:before {\n  content: \"\\eb8d\"; }\n.icofont-award:before {\n  content: \"\\eb8e\"; }\n.icofont-bell-alt:before {\n  content: \"\\eb8f\"; }\n.icofont-book-alt:before {\n  content: \"\\eb90\"; }\n.icofont-brainstorming:before {\n  content: \"\\eb91\"; }\n.icofont-certificate-alt-1:before {\n  content: \"\\eb92\"; }\n.icofont-certificate-alt-2:before {\n  content: \"\\eb93\"; }\n.icofont-dna-alt-2:before {\n  content: \"\\eb94\"; }\n.icofont-education:before {\n  content: \"\\eb95\"; }\n.icofont-electron:before {\n  content: \"\\eb96\"; }\n.icofont-fountain-pen:before {\n  content: \"\\eb97\"; }\n.icofont-globe-alt:before {\n  content: \"\\eb98\"; }\n.icofont-graduate-alt:before {\n  content: \"\\eb99\"; }\n.icofont-group-students:before {\n  content: \"\\eb9a\"; }\n.icofont-hat-alt:before {\n  content: \"\\eb9b\"; }\n.icofont-hat:before {\n  content: \"\\eb9c\"; }\n.icofont-instrument:before {\n  content: \"\\eb9d\"; }\n.icofont-lamp-light:before {\n  content: \"\\eb9e\"; }\n.icofont-microscope-alt:before {\n  content: \"\\eb9f\"; }\n.icofont-paper:before {\n  content: \"\\eba0\"; }\n.icofont-pen-alt-4:before {\n  content: \"\\eba1\"; }\n.icofont-pen-nib:before {\n  content: \"\\eba2\"; }\n.icofont-pencil-alt-5:before {\n  content: \"\\eba3\"; }\n.icofont-quill-pen:before {\n  content: \"\\eba4\"; }\n.icofont-read-book-alt:before {\n  content: \"\\eba5\"; }\n.icofont-read-book:before {\n  content: \"\\eba6\"; }\n.icofont-school-bag:before {\n  content: \"\\eba7\"; }\n.icofont-school-bus:before {\n  content: \"\\eba8\"; }\n.icofont-student-alt:before {\n  content: \"\\eba9\"; }\n.icofont-student:before {\n  content: \"\\ebaa\"; }\n.icofont-teacher:before {\n  content: \"\\ebab\"; }\n.icofont-test-bulb:before {\n  content: \"\\ebac\"; }\n.icofont-test-tube-alt:before {\n  content: \"\\ebad\"; }\n.icofont-university:before {\n  content: \"\\ebae\"; }\n.icofont-emo-angry:before {\n  content: \"\\ebaf\"; }\n.icofont-emo-astonished:before {\n  content: \"\\ebb0\"; }\n.icofont-emo-confounded:before {\n  content: \"\\ebb1\"; }\n.icofont-emo-confused:before {\n  content: \"\\ebb2\"; }\n.icofont-emo-crying:before {\n  content: \"\\ebb3\"; }\n.icofont-emo-dizzy:before {\n  content: \"\\ebb4\"; }\n.icofont-emo-expressionless:before {\n  content: \"\\ebb5\"; }\n.icofont-emo-heart-eyes:before {\n  content: \"\\ebb6\"; }\n.icofont-emo-laughing:before {\n  content: \"\\ebb7\"; }\n.icofont-emo-nerd-smile:before {\n  content: \"\\ebb8\"; }\n.icofont-emo-open-mouth:before {\n  content: \"\\ebb9\"; }\n.icofont-emo-rage:before {\n  content: \"\\ebba\"; }\n.icofont-emo-rolling-eyes:before {\n  content: \"\\ebbb\"; }\n.icofont-emo-sad:before {\n  content: \"\\ebbc\"; }\n.icofont-emo-simple-smile:before {\n  content: \"\\ebbd\"; }\n.icofont-emo-slightly-smile:before {\n  content: \"\\ebbe\"; }\n.icofont-emo-smirk:before {\n  content: \"\\ebbf\"; }\n.icofont-emo-stuck-out-tongue:before {\n  content: \"\\ebc0\"; }\n.icofont-emo-wink-smile:before {\n  content: \"\\ebc1\"; }\n.icofont-emo-worried:before {\n  content: \"\\ebc2\"; }\n.icofont-architecture-alt:before {\n  content: \"\\ebc3\"; }\n.icofont-architecture:before {\n  content: \"\\ebc4\"; }\n.icofont-barricade:before {\n  content: \"\\ebc5\"; }\n.icofont-bricks:before {\n  content: \"\\ebc6\"; }\n.icofont-calculations:before {\n  content: \"\\ebc7\"; }\n.icofont-cement-mix:before {\n  content: \"\\ebc8\"; }\n.icofont-cement-mixer:before {\n  content: \"\\ebc9\"; }\n.icofont-danger-zone:before {\n  content: \"\\ebca\"; }\n.icofont-drill:before {\n  content: \"\\ebcb\"; }\n.icofont-eco-energy:before {\n  content: \"\\ebcc\"; }\n.icofont-eco-environmen:before {\n  content: \"\\ebcd\"; }\n.icofont-energy-air:before {\n  content: \"\\ebce\"; }\n.icofont-energy-oil:before {\n  content: \"\\ebcf\"; }\n.icofont-energy-savings:before {\n  content: \"\\ebd0\"; }\n.icofont-energy-solar:before {\n  content: \"\\ebd1\"; }\n.icofont-energy-water:before {\n  content: \"\\ebd2\"; }\n.icofont-engineer:before {\n  content: \"\\ebd3\"; }\n.icofont-fire-extinguisher-alt:before {\n  content: \"\\ebd4\"; }\n.icofont-fix-tools:before {\n  content: \"\\ebd5\"; }\n.icofont-glue-oil:before {\n  content: \"\\ebd6\"; }\n.icofont-hammer-alt:before {\n  content: \"\\ebd7\"; }\n.icofont-help-robot:before {\n  content: \"\\ebd8\"; }\n.icofont-industries-alt-1:before {\n  content: \"\\ebd9\"; }\n.icofont-industries-alt-2:before {\n  content: \"\\ebda\"; }\n.icofont-industries-alt-3:before {\n  content: \"\\ebdb\"; }\n.icofont-industries-alt-4:before {\n  content: \"\\ebdc\"; }\n.icofont-industries-alt-5:before {\n  content: \"\\ebdd\"; }\n.icofont-industries:before {\n  content: \"\\ebde\"; }\n.icofont-labour:before {\n  content: \"\\ebdf\"; }\n.icofont-mining:before {\n  content: \"\\ebe0\"; }\n.icofont-paint-brush:before {\n  content: \"\\ebe1\"; }\n.icofont-pollution:before {\n  content: \"\\ebe2\"; }\n.icofont-power-zone:before {\n  content: \"\\ebe3\"; }\n.icofont-radio-active:before {\n  content: \"\\ebe4\"; }\n.icofont-recycle-alt:before {\n  content: \"\\ebe5\"; }\n.icofont-recycling-man:before {\n  content: \"\\ebe6\"; }\n.icofont-safety-hat-light:before {\n  content: \"\\ebe7\"; }\n.icofont-safety-hat:before {\n  content: \"\\ebe8\"; }\n.icofont-saw:before {\n  content: \"\\ebe9\"; }\n.icofont-screw-driver:before {\n  content: \"\\ebea\"; }\n.icofont-settings-alt:before {\n  content: \"\\ebeb\"; }\n.icofont-tools-alt-1:before {\n  content: \"\\ebec\"; }\n.icofont-tools-alt-2:before {\n  content: \"\\ebed\"; }\n.icofont-tools-bag:before {\n  content: \"\\ebee\"; }\n.icofont-trolley:before {\n  content: \"\\ebef\"; }\n.icofont-trowel:before {\n  content: \"\\ebf0\"; }\n.icofont-under-construction-alt:before {\n  content: \"\\ebf1\"; }\n.icofont-under-construction:before {\n  content: \"\\ebf2\"; }\n.icofont-vehicle-cement:before {\n  content: \"\\ebf3\"; }\n.icofont-vehicle-crane:before {\n  content: \"\\ebf4\"; }\n.icofont-vehicle-delivery-van:before {\n  content: \"\\ebf5\"; }\n.icofont-vehicle-dozer:before {\n  content: \"\\ebf6\"; }\n.icofont-vehicle-excavator:before {\n  content: \"\\ebf7\"; }\n.icofont-vehicle-trucktor:before {\n  content: \"\\ebf8\"; }\n.icofont-vehicle-wrecking:before {\n  content: \"\\ebf9\"; }\n.icofont-worker-group:before {\n  content: \"\\ebfa\"; }\n.icofont-worker:before {\n  content: \"\\ebfb\"; }\n.icofont-wrench:before {\n  content: \"\\ebfc\"; }\n.icofont-file-audio:before {\n  content: \"\\ebfd\"; }\n.icofont-file-avi-mp4:before {\n  content: \"\\ebfe\"; }\n.icofont-file-bmp:before {\n  content: \"\\ebff\"; }\n.icofont-file-code:before {\n  content: \"\\ec00\"; }\n.icofont-file-css:before {\n  content: \"\\ec01\"; }\n.icofont-file-document:before {\n  content: \"\\ec02\"; }\n.icofont-file-eps:before {\n  content: \"\\ec03\"; }\n.icofont-file-excel:before {\n  content: \"\\ec04\"; }\n.icofont-file-exe:before {\n  content: \"\\ec05\"; }\n.icofont-file-file:before {\n  content: \"\\ec06\"; }\n.icofont-file-flv:before {\n  content: \"\\ec07\"; }\n.icofont-file-gif:before {\n  content: \"\\ec08\"; }\n.icofont-file-html5:before {\n  content: \"\\ec09\"; }\n.icofont-file-image:before {\n  content: \"\\ec0a\"; }\n.icofont-file-iso:before {\n  content: \"\\ec0b\"; }\n.icofont-file-java:before {\n  content: \"\\ec0c\"; }\n.icofont-file-javascript:before {\n  content: \"\\ec0d\"; }\n.icofont-file-jpg:before {\n  content: \"\\ec0e\"; }\n.icofont-file-midi:before {\n  content: \"\\ec0f\"; }\n.icofont-file-mov:before {\n  content: \"\\ec10\"; }\n.icofont-file-mp3:before {\n  content: \"\\ec11\"; }\n.icofont-file-pdf:before {\n  content: \"\\ec12\"; }\n.icofont-file-php:before {\n  content: \"\\ec13\"; }\n.icofont-file-png:before {\n  content: \"\\ec14\"; }\n.icofont-file-powerpoint:before {\n  content: \"\\ec15\"; }\n.icofont-file-presentation:before {\n  content: \"\\ec16\"; }\n.icofont-file-psb:before {\n  content: \"\\ec17\"; }\n.icofont-file-psd:before {\n  content: \"\\ec18\"; }\n.icofont-file-python:before {\n  content: \"\\ec19\"; }\n.icofont-file-ruby:before {\n  content: \"\\ec1a\"; }\n.icofont-file-spreadsheet:before {\n  content: \"\\ec1b\"; }\n.icofont-file-sql:before {\n  content: \"\\ec1c\"; }\n.icofont-file-svg:before {\n  content: \"\\ec1d\"; }\n.icofont-file-text:before {\n  content: \"\\ec1e\"; }\n.icofont-file-tiff:before {\n  content: \"\\ec1f\"; }\n.icofont-file-video:before {\n  content: \"\\ec20\"; }\n.icofont-file-wave:before {\n  content: \"\\ec21\"; }\n.icofont-file-wmv:before {\n  content: \"\\ec22\"; }\n.icofont-file-word:before {\n  content: \"\\ec23\"; }\n.icofont-file-zip:before {\n  content: \"\\ec24\"; }\n.icofont-apple:before {\n  content: \"\\ec25\"; }\n.icofont-arabian-coffee:before {\n  content: \"\\ec26\"; }\n.icofont-artichoke:before {\n  content: \"\\ec27\"; }\n.icofont-asparagus:before {\n  content: \"\\ec28\"; }\n.icofont-avocado:before {\n  content: \"\\ec29\"; }\n.icofont-baby-food:before {\n  content: \"\\ec2a\"; }\n.icofont-banana:before {\n  content: \"\\ec2b\"; }\n.icofont-bbq:before {\n  content: \"\\ec2c\"; }\n.icofont-beans:before {\n  content: \"\\ec2d\"; }\n.icofont-beer:before {\n  content: \"\\ec2e\"; }\n.icofont-bell-pepper-capsicum:before {\n  content: \"\\ec2f\"; }\n.icofont-birthday-cake:before {\n  content: \"\\ec30\"; }\n.icofont-bread:before {\n  content: \"\\ec31\"; }\n.icofont-broccoli:before {\n  content: \"\\ec32\"; }\n.icofont-burger:before {\n  content: \"\\ec33\"; }\n.icofont-cabbage:before {\n  content: \"\\ec34\"; }\n.icofont-carrot:before {\n  content: \"\\ec35\"; }\n.icofont-cauli-flower:before {\n  content: \"\\ec36\"; }\n.icofont-cheese:before {\n  content: \"\\ec37\"; }\n.icofont-chef:before {\n  content: \"\\ec38\"; }\n.icofont-cherry:before {\n  content: \"\\ec39\"; }\n.icofont-chicken-fry:before {\n  content: \"\\ec3a\"; }\n.icofont-chicken:before {\n  content: \"\\ec3b\"; }\n.icofont-cocktail:before {\n  content: \"\\ec3c\"; }\n.icofont-coconut:before {\n  content: \"\\ec3d\"; }\n.icofont-coffee-alt:before {\n  content: \"\\ec3e\"; }\n.icofont-coffee-mug:before {\n  content: \"\\ec3f\"; }\n.icofont-coffee-pot:before {\n  content: \"\\ec40\"; }\n.icofont-cola:before {\n  content: \"\\ec41\"; }\n.icofont-corn:before {\n  content: \"\\ec42\"; }\n.icofont-croissant:before {\n  content: \"\\ec43\"; }\n.icofont-crop-plant:before {\n  content: \"\\ec44\"; }\n.icofont-cucumber:before {\n  content: \"\\ec45\"; }\n.icofont-cup-cake:before {\n  content: \"\\ec46\"; }\n.icofont-dining-table:before {\n  content: \"\\ec47\"; }\n.icofont-donut:before {\n  content: \"\\ec48\"; }\n.icofont-egg-plant:before {\n  content: \"\\ec49\"; }\n.icofont-egg-poached:before {\n  content: \"\\ec4a\"; }\n.icofont-farmer:before {\n  content: \"\\ec4b\"; }\n.icofont-farmer1:before {\n  content: \"\\ec4c\"; }\n.icofont-fast-food:before {\n  content: \"\\ec4d\"; }\n.icofont-fish:before {\n  content: \"\\ec4e\"; }\n.icofont-food-basket:before {\n  content: \"\\ec4f\"; }\n.icofont-food-cart:before {\n  content: \"\\ec50\"; }\n.icofont-fork-and-knife:before {\n  content: \"\\ec51\"; }\n.icofont-french-fries:before {\n  content: \"\\ec52\"; }\n.icofont-fresh-juice:before {\n  content: \"\\ec53\"; }\n.icofont-fruits:before {\n  content: \"\\ec54\"; }\n.icofont-grapes:before {\n  content: \"\\ec55\"; }\n.icofont-honey:before {\n  content: \"\\ec56\"; }\n.icofont-hot-dog:before {\n  content: \"\\ec57\"; }\n.icofont-hotel-alt:before {\n  content: \"\\ec58\"; }\n.icofont-ice-cream-alt:before {\n  content: \"\\ec59\"; }\n.icofont-ice-cream:before {\n  content: \"\\ec5a\"; }\n.icofont-ketchup:before {\n  content: \"\\ec5b\"; }\n.icofont-kiwi:before {\n  content: \"\\ec5c\"; }\n.icofont-layered-cake:before {\n  content: \"\\ec5d\"; }\n.icofont-lemon-alt:before {\n  content: \"\\ec5e\"; }\n.icofont-lobster:before {\n  content: \"\\ec5f\"; }\n.icofont-mango:before {\n  content: \"\\ec60\"; }\n.icofont-milk:before {\n  content: \"\\ec61\"; }\n.icofont-mushroom:before {\n  content: \"\\ec62\"; }\n.icofont-noodles:before {\n  content: \"\\ec63\"; }\n.icofont-onion:before {\n  content: \"\\ec64\"; }\n.icofont-orange:before {\n  content: \"\\ec65\"; }\n.icofont-pear:before {\n  content: \"\\ec66\"; }\n.icofont-peas:before {\n  content: \"\\ec67\"; }\n.icofont-pepper:before {\n  content: \"\\ec68\"; }\n.icofont-pie-alt:before {\n  content: \"\\ec69\"; }\n.icofont-pineapple:before {\n  content: \"\\ec6a\"; }\n.icofont-pizza-slice:before {\n  content: \"\\ec6b\"; }\n.icofont-pizza:before {\n  content: \"\\ec6c\"; }\n.icofont-plant:before {\n  content: \"\\ec6d\"; }\n.icofont-popcorn:before {\n  content: \"\\ec6e\"; }\n.icofont-potato:before {\n  content: \"\\ec6f\"; }\n.icofont-pumpkin:before {\n  content: \"\\ec70\"; }\n.icofont-raddish:before {\n  content: \"\\ec71\"; }\n.icofont-restaurant-menu:before {\n  content: \"\\ec72\"; }\n.icofont-restaurant:before {\n  content: \"\\ec73\"; }\n.icofont-salt-and-pepper:before {\n  content: \"\\ec74\"; }\n.icofont-sandwich:before {\n  content: \"\\ec75\"; }\n.icofont-sausage:before {\n  content: \"\\ec76\"; }\n.icofont-shrimp:before {\n  content: \"\\ec77\"; }\n.icofont-sof-drinks:before {\n  content: \"\\ec78\"; }\n.icofont-soup-bowl:before {\n  content: \"\\ec79\"; }\n.icofont-spoon-and-fork:before {\n  content: \"\\ec7a\"; }\n.icofont-steak:before {\n  content: \"\\ec7b\"; }\n.icofont-strawberry:before {\n  content: \"\\ec7c\"; }\n.icofont-sub-sandwich:before {\n  content: \"\\ec7d\"; }\n.icofont-sushi:before {\n  content: \"\\ec7e\"; }\n.icofont-taco:before {\n  content: \"\\ec7f\"; }\n.icofont-tea-pot:before {\n  content: \"\\ec80\"; }\n.icofont-tea:before {\n  content: \"\\ec81\"; }\n.icofont-tomato:before {\n  content: \"\\ec82\"; }\n.icofont-waiter-alt:before {\n  content: \"\\ec83\"; }\n.icofont-watermelon:before {\n  content: \"\\ec84\"; }\n.icofont-wheat:before {\n  content: \"\\ec85\"; }\n.icofont-abc:before {\n  content: \"\\ec86\"; }\n.icofont-baby-cloth:before {\n  content: \"\\ec87\"; }\n.icofont-baby-milk-bottle:before {\n  content: \"\\ec88\"; }\n.icofont-baby-trolley:before {\n  content: \"\\ec89\"; }\n.icofont-back-pack:before {\n  content: \"\\ec8a\"; }\n.icofont-candy:before {\n  content: \"\\ec8b\"; }\n.icofont-cycling:before {\n  content: \"\\ec8c\"; }\n.icofont-holding-hands:before {\n  content: \"\\ec8d\"; }\n.icofont-infant-nipple:before {\n  content: \"\\ec8e\"; }\n.icofont-kids-scooter:before {\n  content: \"\\ec8f\"; }\n.icofont-safety-pin:before {\n  content: \"\\ec90\"; }\n.icofont-teddy-bear:before {\n  content: \"\\ec91\"; }\n.icofont-toy-ball:before {\n  content: \"\\ec92\"; }\n.icofont-toy-cat:before {\n  content: \"\\ec93\"; }\n.icofont-toy-duck:before {\n  content: \"\\ec94\"; }\n.icofont-toy-elephant:before {\n  content: \"\\ec95\"; }\n.icofont-toy-hand:before {\n  content: \"\\ec96\"; }\n.icofont-toy-horse:before {\n  content: \"\\ec97\"; }\n.icofont-toy-lattu:before {\n  content: \"\\ec98\"; }\n.icofont-toy-train:before {\n  content: \"\\ec99\"; }\n.icofont-unique-idea:before {\n  content: \"\\ec9a\"; }\n.icofont-bag-alt:before {\n  content: \"\\ec9b\"; }\n.icofont-burglar:before {\n  content: \"\\ec9c\"; }\n.icofont-cannon-firing:before {\n  content: \"\\ec9d\"; }\n.icofont-cc-camera:before {\n  content: \"\\ec9e\"; }\n.icofont-cop-badge:before {\n  content: \"\\ec9f\"; }\n.icofont-cop:before {\n  content: \"\\eca0\"; }\n.icofont-court-hammer:before {\n  content: \"\\eca1\"; }\n.icofont-court:before {\n  content: \"\\eca2\"; }\n.icofont-finger-print:before {\n  content: \"\\eca3\"; }\n.icofont-handcuff-alt:before {\n  content: \"\\eca4\"; }\n.icofont-handcuff:before {\n  content: \"\\eca5\"; }\n.icofont-investigation:before {\n  content: \"\\eca6\"; }\n.icofont-investigator:before {\n  content: \"\\eca7\"; }\n.icofont-jail:before {\n  content: \"\\eca8\"; }\n.icofont-judge:before {\n  content: \"\\eca9\"; }\n.icofont-law-alt-1:before {\n  content: \"\\ecaa\"; }\n.icofont-law-alt-2:before {\n  content: \"\\ecab\"; }\n.icofont-law-alt-3:before {\n  content: \"\\ecac\"; }\n.icofont-law-book:before {\n  content: \"\\ecad\"; }\n.icofont-law-document:before {\n  content: \"\\ecae\"; }\n.icofont-law:before {\n  content: \"\\ecaf\"; }\n.icofont-lawyer-alt-1:before {\n  content: \"\\ecb0\"; }\n.icofont-lawyer-alt-2:before {\n  content: \"\\ecb1\"; }\n.icofont-lawyer:before {\n  content: \"\\ecb2\"; }\n.icofont-order:before {\n  content: \"\\ecb3\"; }\n.icofont-pistol:before {\n  content: \"\\ecb4\"; }\n.icofont-police-badge:before {\n  content: \"\\ecb5\"; }\n.icofont-police-cap:before {\n  content: \"\\ecb6\"; }\n.icofont-police-car-alt-1:before {\n  content: \"\\ecb7\"; }\n.icofont-police-car-alt-2:before {\n  content: \"\\ecb8\"; }\n.icofont-police-hat:before {\n  content: \"\\ecb9\"; }\n.icofont-police-van:before {\n  content: \"\\ecba\"; }\n.icofont-police:before {\n  content: \"\\ecbb\"; }\n.icofont-protect:before {\n  content: \"\\ecbc\"; }\n.icofont-scales:before {\n  content: \"\\ecbd\"; }\n.icofont-thief-alt:before {\n  content: \"\\ecbe\"; }\n.icofont-thief:before {\n  content: \"\\ecbf\"; }\n.icofont-abacus-alt:before {\n  content: \"\\ecc0\"; }\n.icofont-abacus:before {\n  content: \"\\ecc1\"; }\n.icofont-angle:before {\n  content: \"\\ecc2\"; }\n.icofont-calculator-alt-1:before {\n  content: \"\\ecc3\"; }\n.icofont-calculator-alt-2:before {\n  content: \"\\ecc4\"; }\n.icofont-circle-ruler-alt:before {\n  content: \"\\ecc5\"; }\n.icofont-circle-ruler:before {\n  content: \"\\ecc6\"; }\n.icofont-compass-alt-1:before {\n  content: \"\\ecc7\"; }\n.icofont-compass-alt-2:before {\n  content: \"\\ecc8\"; }\n.icofont-compass-alt-3:before {\n  content: \"\\ecc9\"; }\n.icofont-compass-alt-4:before {\n  content: \"\\ecca\"; }\n.icofont-degrees-alt-1:before {\n  content: \"\\eccb\"; }\n.icofont-degrees-alt-2:before {\n  content: \"\\eccc\"; }\n.icofont-degrees:before {\n  content: \"\\eccd\"; }\n.icofont-golden-ratio:before {\n  content: \"\\ecce\"; }\n.icofont-marker-alt-1:before {\n  content: \"\\eccf\"; }\n.icofont-marker-alt-2:before {\n  content: \"\\ecd0\"; }\n.icofont-marker-alt-3:before {\n  content: \"\\ecd1\"; }\n.icofont-mathematical-alt-1:before {\n  content: \"\\ecd2\"; }\n.icofont-mathematical-alt-2:before {\n  content: \"\\ecd3\"; }\n.icofont-mathematical:before {\n  content: \"\\ecd4\"; }\n.icofont-pen-alt-1:before {\n  content: \"\\ecd5\"; }\n.icofont-pen-alt-2:before {\n  content: \"\\ecd6\"; }\n.icofont-pen-alt-3:before {\n  content: \"\\ecd7\"; }\n.icofont-pen-holder-alt-1:before {\n  content: \"\\ecd8\"; }\n.icofont-pen-holder:before {\n  content: \"\\ecd9\"; }\n.icofont-pencil-alt-1:before {\n  content: \"\\ecda\"; }\n.icofont-pencil-alt-2:before {\n  content: \"\\ecdb\"; }\n.icofont-pencil-alt-3:before {\n  content: \"\\ecdc\"; }\n.icofont-pencil-alt-4:before {\n  content: \"\\ecdd\"; }\n.icofont-ruler-alt-1:before {\n  content: \"\\ecde\"; }\n.icofont-ruler-alt-2:before {\n  content: \"\\ecdf\"; }\n.icofont-ruler-compass-alt:before {\n  content: \"\\ece0\"; }\n.icofont-ruler-compass:before {\n  content: \"\\ece1\"; }\n.icofont-ruler-pencil-alt-1:before {\n  content: \"\\ece2\"; }\n.icofont-ruler-pencil-alt-2:before {\n  content: \"\\ece3\"; }\n.icofont-ruler-pencil:before {\n  content: \"\\ece4\"; }\n.icofont-ruler:before {\n  content: \"\\ece5\"; }\n.icofont-rulers-alt:before {\n  content: \"\\ece6\"; }\n.icofont-rulers:before {\n  content: \"\\ece7\"; }\n.icofont-square-root:before {\n  content: \"\\ece8\"; }\n.icofont-aids:before {\n  content: \"\\ece9\"; }\n.icofont-ambulance:before {\n  content: \"\\ecea\"; }\n.icofont-autism:before {\n  content: \"\\eceb\"; }\n.icofont-bandage:before {\n  content: \"\\ecec\"; }\n.icofont-bed-patient:before {\n  content: \"\\eced\"; }\n.icofont-blind:before {\n  content: \"\\ecee\"; }\n.icofont-blood-drop:before {\n  content: \"\\ecef\"; }\n.icofont-blood-test:before {\n  content: \"\\ecf0\"; }\n.icofont-blood:before {\n  content: \"\\ecf1\"; }\n.icofont-capsule:before {\n  content: \"\\ecf2\"; }\n.icofont-crutches:before {\n  content: \"\\ecf3\"; }\n.icofont-dna-alt-1:before {\n  content: \"\\ecf4\"; }\n.icofont-dna:before {\n  content: \"\\ecf5\"; }\n.icofont-doctor-alt:before {\n  content: \"\\ecf6\"; }\n.icofont-doctor:before {\n  content: \"\\ecf7\"; }\n.icofont-drug-pack:before {\n  content: \"\\ecf8\"; }\n.icofont-drug:before {\n  content: \"\\ecf9\"; }\n.icofont-eye-alt:before {\n  content: \"\\ecfa\"; }\n.icofont-first-aid-alt:before {\n  content: \"\\ecfb\"; }\n.icofont-garbage:before {\n  content: \"\\ecfc\"; }\n.icofont-heart-alt:before {\n  content: \"\\ecfd\"; }\n.icofont-heartbeat:before {\n  content: \"\\ecfe\"; }\n.icofont-herbal:before {\n  content: \"\\ecff\"; }\n.icofont-hospital:before {\n  content: \"\\ed00\"; }\n.icofont-icu:before {\n  content: \"\\ed01\"; }\n.icofont-injection-syringe:before {\n  content: \"\\ed02\"; }\n.icofont-laboratory:before {\n  content: \"\\ed03\"; }\n.icofont-medical-sign-alt:before {\n  content: \"\\ed04\"; }\n.icofont-medical-sign:before {\n  content: \"\\ed05\"; }\n.icofont-nurse-alt:before {\n  content: \"\\ed06\"; }\n.icofont-nurse:before {\n  content: \"\\ed07\"; }\n.icofont-nursing-home:before {\n  content: \"\\ed08\"; }\n.icofont-operation-theater:before {\n  content: \"\\ed09\"; }\n.icofont-paralysis-disability:before {\n  content: \"\\ed0a\"; }\n.icofont-pills:before {\n  content: \"\\ed0b\"; }\n.icofont-prescription:before {\n  content: \"\\ed0c\"; }\n.icofont-pulse:before {\n  content: \"\\ed0d\"; }\n.icofont-stethoscope-alt:before {\n  content: \"\\ed0e\"; }\n.icofont-stethoscope:before {\n  content: \"\\ed0f\"; }\n.icofont-stretcher:before {\n  content: \"\\ed10\"; }\n.icofont-surgeon-alt:before {\n  content: \"\\ed11\"; }\n.icofont-surgeon:before {\n  content: \"\\ed12\"; }\n.icofont-tablets:before {\n  content: \"\\ed13\"; }\n.icofont-test-bottle:before {\n  content: \"\\ed14\"; }\n.icofont-test-tube:before {\n  content: \"\\ed15\"; }\n.icofont-thermometer-alt:before {\n  content: \"\\ed16\"; }\n.icofont-tooth:before {\n  content: \"\\ed17\"; }\n.icofont-xray:before {\n  content: \"\\ed18\"; }\n.icofont-ui-add:before {\n  content: \"\\ed19\"; }\n.icofont-ui-alarm:before {\n  content: \"\\ed1a\"; }\n.icofont-ui-battery:before {\n  content: \"\\ed1b\"; }\n.icofont-ui-block:before {\n  content: \"\\ed1c\"; }\n.icofont-ui-bluetooth:before {\n  content: \"\\ed1d\"; }\n.icofont-ui-brightness:before {\n  content: \"\\ed1e\"; }\n.icofont-ui-browser:before {\n  content: \"\\ed1f\"; }\n.icofont-ui-calculator:before {\n  content: \"\\ed20\"; }\n.icofont-ui-calendar:before {\n  content: \"\\ed21\"; }\n.icofont-ui-call:before {\n  content: \"\\ed22\"; }\n.icofont-ui-camera:before {\n  content: \"\\ed23\"; }\n.icofont-ui-cart:before {\n  content: \"\\ed24\"; }\n.icofont-ui-cell-phone:before {\n  content: \"\\ed25\"; }\n.icofont-ui-chat:before {\n  content: \"\\ed26\"; }\n.icofont-ui-check:before {\n  content: \"\\ed27\"; }\n.icofont-ui-clip-board:before {\n  content: \"\\ed28\"; }\n.icofont-ui-clip:before {\n  content: \"\\ed29\"; }\n.icofont-ui-clock:before {\n  content: \"\\ed2a\"; }\n.icofont-ui-close:before {\n  content: \"\\ed2b\"; }\n.icofont-ui-contact-list:before {\n  content: \"\\ed2c\"; }\n.icofont-ui-copy:before {\n  content: \"\\ed2d\"; }\n.icofont-ui-cut:before {\n  content: \"\\ed2e\"; }\n.icofont-ui-delete:before {\n  content: \"\\ed2f\"; }\n.icofont-ui-dial-phone:before {\n  content: \"\\ed30\"; }\n.icofont-ui-edit:before {\n  content: \"\\ed31\"; }\n.icofont-ui-email:before {\n  content: \"\\ed32\"; }\n.icofont-ui-file:before {\n  content: \"\\ed33\"; }\n.icofont-ui-fire-wall:before {\n  content: \"\\ed34\"; }\n.icofont-ui-flash-light:before {\n  content: \"\\ed35\"; }\n.icofont-ui-flight:before {\n  content: \"\\ed36\"; }\n.icofont-ui-folder:before {\n  content: \"\\ed37\"; }\n.icofont-ui-game:before {\n  content: \"\\ed38\"; }\n.icofont-ui-handicapped:before {\n  content: \"\\ed39\"; }\n.icofont-ui-head-phone:before {\n  content: \"\\ed3a\"; }\n.icofont-ui-home:before {\n  content: \"\\ed3b\"; }\n.icofont-ui-image:before {\n  content: \"\\ed3c\"; }\n.icofont-ui-keyboard:before {\n  content: \"\\ed3d\"; }\n.icofont-ui-laoding:before {\n  content: \"\\ed3e\"; }\n.icofont-ui-lock:before {\n  content: \"\\ed3f\"; }\n.icofont-ui-love-add:before {\n  content: \"\\ed40\"; }\n.icofont-ui-love-broken:before {\n  content: \"\\ed41\"; }\n.icofont-ui-love-remove:before {\n  content: \"\\ed42\"; }\n.icofont-ui-love:before {\n  content: \"\\ed43\"; }\n.icofont-ui-map:before {\n  content: \"\\ed44\"; }\n.icofont-ui-message:before {\n  content: \"\\ed45\"; }\n.icofont-ui-messaging:before {\n  content: \"\\ed46\"; }\n.icofont-ui-movie:before {\n  content: \"\\ed47\"; }\n.icofont-ui-music-player:before {\n  content: \"\\ed48\"; }\n.icofont-ui-music:before {\n  content: \"\\ed49\"; }\n.icofont-ui-mute:before {\n  content: \"\\ed4a\"; }\n.icofont-ui-network:before {\n  content: \"\\ed4b\"; }\n.icofont-ui-next:before {\n  content: \"\\ed4c\"; }\n.icofont-ui-note:before {\n  content: \"\\ed4d\"; }\n.icofont-ui-office:before {\n  content: \"\\ed4e\"; }\n.icofont-ui-password:before {\n  content: \"\\ed4f\"; }\n.icofont-ui-pause:before {\n  content: \"\\ed50\"; }\n.icofont-ui-play-stop:before {\n  content: \"\\ed51\"; }\n.icofont-ui-play:before {\n  content: \"\\ed52\"; }\n.icofont-ui-pointer:before {\n  content: \"\\ed53\"; }\n.icofont-ui-power:before {\n  content: \"\\ed54\"; }\n.icofont-ui-press:before {\n  content: \"\\ed55\"; }\n.icofont-ui-previous:before {\n  content: \"\\ed56\"; }\n.icofont-ui-rate-add:before {\n  content: \"\\ed57\"; }\n.icofont-ui-rate-blank:before {\n  content: \"\\ed58\"; }\n.icofont-ui-rate-remove:before {\n  content: \"\\ed59\"; }\n.icofont-ui-rating:before {\n  content: \"\\ed5a\"; }\n.icofont-ui-record:before {\n  content: \"\\ed5b\"; }\n.icofont-ui-remove:before {\n  content: \"\\ed5c\"; }\n.icofont-ui-reply:before {\n  content: \"\\ed5d\"; }\n.icofont-ui-rotation:before {\n  content: \"\\ed5e\"; }\n.icofont-ui-rss:before {\n  content: \"\\ed5f\"; }\n.icofont-ui-search:before {\n  content: \"\\ed60\"; }\n.icofont-ui-settings:before {\n  content: \"\\ed61\"; }\n.icofont-ui-social-link:before {\n  content: \"\\ed62\"; }\n.icofont-ui-tag:before {\n  content: \"\\ed63\"; }\n.icofont-ui-text-chat:before {\n  content: \"\\ed64\"; }\n.icofont-ui-text-loading:before {\n  content: \"\\ed65\"; }\n.icofont-ui-theme:before {\n  content: \"\\ed66\"; }\n.icofont-ui-timer:before {\n  content: \"\\ed67\"; }\n.icofont-ui-touch-phone:before {\n  content: \"\\ed68\"; }\n.icofont-ui-travel:before {\n  content: \"\\ed69\"; }\n.icofont-ui-unlock:before {\n  content: \"\\ed6a\"; }\n.icofont-ui-user-group:before {\n  content: \"\\ed6b\"; }\n.icofont-ui-user:before {\n  content: \"\\ed6c\"; }\n.icofont-ui-v-card:before {\n  content: \"\\ed6d\"; }\n.icofont-ui-video-chat:before {\n  content: \"\\ed6e\"; }\n.icofont-ui-video-message:before {\n  content: \"\\ed6f\"; }\n.icofont-ui-video-play:before {\n  content: \"\\ed70\"; }\n.icofont-ui-video:before {\n  content: \"\\ed71\"; }\n.icofont-ui-volume:before {\n  content: \"\\ed72\"; }\n.icofont-ui-weather:before {\n  content: \"\\ed73\"; }\n.icofont-ui-wifi:before {\n  content: \"\\ed74\"; }\n.icofont-ui-zoom-in:before {\n  content: \"\\ed75\"; }\n.icofont-ui-zoom-out:before {\n  content: \"\\ed76\"; }\n.icofont-cassette-player:before {\n  content: \"\\ed77\"; }\n.icofont-cassette:before {\n  content: \"\\ed78\"; }\n.icofont-forward:before {\n  content: \"\\ed79\"; }\n.icofont-game:before {\n  content: \"\\ed7a\"; }\n.icofont-guiter:before {\n  content: \"\\ed7b\"; }\n.icofont-headphone-alt-1:before {\n  content: \"\\ed7c\"; }\n.icofont-headphone-alt-2:before {\n  content: \"\\ed7d\"; }\n.icofont-headphone-alt-3:before {\n  content: \"\\ed7e\"; }\n.icofont-listening:before {\n  content: \"\\ed7f\"; }\n.icofont-megaphone-alt:before {\n  content: \"\\ed80\"; }\n.icofont-megaphone:before {\n  content: \"\\ed81\"; }\n.icofont-movie:before {\n  content: \"\\ed82\"; }\n.icofont-mp3-player:before {\n  content: \"\\ed83\"; }\n.icofont-multimedia:before {\n  content: \"\\ed84\"; }\n.icofont-music-disk:before {\n  content: \"\\ed85\"; }\n.icofont-music-note:before {\n  content: \"\\ed86\"; }\n.icofont-pause:before {\n  content: \"\\ed87\"; }\n.icofont-play-alt-1:before {\n  content: \"\\ed88\"; }\n.icofont-play-alt-2:before {\n  content: \"\\ed89\"; }\n.icofont-play-alt-3:before {\n  content: \"\\ed8a\"; }\n.icofont-play-pause:before {\n  content: \"\\ed8b\"; }\n.icofont-record:before {\n  content: \"\\ed8c\"; }\n.icofont-retro-music-disk:before {\n  content: \"\\ed8d\"; }\n.icofont-rewind:before {\n  content: \"\\ed8e\"; }\n.icofont-song-notes:before {\n  content: \"\\ed8f\"; }\n.icofont-sound-wave-alt:before {\n  content: \"\\ed90\"; }\n.icofont-sound-wave:before {\n  content: \"\\ed91\"; }\n.icofont-stop:before {\n  content: \"\\ed92\"; }\n.icofont-video-alt:before {\n  content: \"\\ed93\"; }\n.icofont-video-cam:before {\n  content: \"\\ed94\"; }\n.icofont-volume-bar:before {\n  content: \"\\ed95\"; }\n.icofont-volume-mute:before {\n  content: \"\\ed96\"; }\n.icofont-youtube-play:before {\n  content: \"\\ed97\"; }\n.icofont-amazon-alt:before {\n  content: \"\\ed98\"; }\n.icofont-amazon:before {\n  content: \"\\ed99\"; }\n.icofont-american-express-alt:before {\n  content: \"\\ed9a\"; }\n.icofont-american-express:before {\n  content: \"\\ed9b\"; }\n.icofont-apple-pay-alt:before {\n  content: \"\\ed9c\"; }\n.icofont-apple-pay:before {\n  content: \"\\ed9d\"; }\n.icofont-bank-transfer-alt:before {\n  content: \"\\ed9e\"; }\n.icofont-bank-transfer:before {\n  content: \"\\ed9f\"; }\n.icofont-braintree-alt:before {\n  content: \"\\eda0\"; }\n.icofont-braintree:before {\n  content: \"\\eda1\"; }\n.icofont-cash-on-delivery-alt:before {\n  content: \"\\eda2\"; }\n.icofont-cash-on-delivery:before {\n  content: \"\\eda3\"; }\n.icofont-checkout-alt:before {\n  content: \"\\eda4\"; }\n.icofont-checkout:before {\n  content: \"\\eda5\"; }\n.icofont-diners-club-alt-1:before {\n  content: \"\\eda6\"; }\n.icofont-diners-club-alt-2:before {\n  content: \"\\eda7\"; }\n.icofont-diners-club-alt-3:before {\n  content: \"\\eda8\"; }\n.icofont-diners-club:before {\n  content: \"\\eda9\"; }\n.icofont-discover-alt:before {\n  content: \"\\edaa\"; }\n.icofont-discover:before {\n  content: \"\\edab\"; }\n.icofont-eway-alt:before {\n  content: \"\\edac\"; }\n.icofont-eway:before {\n  content: \"\\edad\"; }\n.icofont-google-wallet-alt-1:before {\n  content: \"\\edae\"; }\n.icofont-google-wallet-alt-2:before {\n  content: \"\\edaf\"; }\n.icofont-google-wallet-alt-3:before {\n  content: \"\\edb0\"; }\n.icofont-google-wallet:before {\n  content: \"\\edb1\"; }\n.icofont-jcb-alt:before {\n  content: \"\\edb2\"; }\n.icofont-jcb:before {\n  content: \"\\edb3\"; }\n.icofont-maestro-alt:before {\n  content: \"\\edb4\"; }\n.icofont-maestro:before {\n  content: \"\\edb5\"; }\n.icofont-mastercard-alt:before {\n  content: \"\\edb6\"; }\n.icofont-mastercard:before {\n  content: \"\\edb7\"; }\n.icofont-payoneer-alt:before {\n  content: \"\\edb8\"; }\n.icofont-payoneer:before {\n  content: \"\\edb9\"; }\n.icofont-paypal-alt:before {\n  content: \"\\edba\"; }\n.icofont-paypal:before {\n  content: \"\\edbb\"; }\n.icofont-sage-alt:before {\n  content: \"\\edbc\"; }\n.icofont-sage:before {\n  content: \"\\edbd\"; }\n.icofont-skrill-alt:before {\n  content: \"\\edbe\"; }\n.icofont-skrill:before {\n  content: \"\\edbf\"; }\n.icofont-stripe-alt:before {\n  content: \"\\edc0\"; }\n.icofont-stripe:before {\n  content: \"\\edc1\"; }\n.icofont-visa-alt:before {\n  content: \"\\edc2\"; }\n.icofont-visa-electron:before {\n  content: \"\\edc3\"; }\n.icofont-visa:before {\n  content: \"\\edc4\"; }\n.icofont-western-union-alt:before {\n  content: \"\\edc5\"; }\n.icofont-western-union:before {\n  content: \"\\edc6\"; }\n.icofont-boy:before {\n  content: \"\\edc7\"; }\n.icofont-business-man-alt-1:before {\n  content: \"\\edc8\"; }\n.icofont-business-man-alt-2:before {\n  content: \"\\edc9\"; }\n.icofont-business-man-alt-3:before {\n  content: \"\\edca\"; }\n.icofont-business-man:before {\n  content: \"\\edcb\"; }\n.icofont-funky-man:before {\n  content: \"\\edcc\"; }\n.icofont-girl-alt:before {\n  content: \"\\edcd\"; }\n.icofont-girl:before {\n  content: \"\\edce\"; }\n.icofont-hotel-boy-alt:before {\n  content: \"\\edcf\"; }\n.icofont-hotel-boy:before {\n  content: \"\\edd0\"; }\n.icofont-man-in-glasses:before {\n  content: \"\\edd1\"; }\n.icofont-user-alt-1:before {\n  content: \"\\edd2\"; }\n.icofont-user-alt-2:before {\n  content: \"\\edd3\"; }\n.icofont-user-alt-3:before {\n  content: \"\\edd4\"; }\n.icofont-user-alt-4:before {\n  content: \"\\edd5\"; }\n.icofont-user-alt-5:before {\n  content: \"\\edd6\"; }\n.icofont-user-alt-6:before {\n  content: \"\\edd7\"; }\n.icofont-user-alt-7:before {\n  content: \"\\edd8\"; }\n.icofont-user-female:before {\n  content: \"\\edd9\"; }\n.icofont-user-male:before {\n  content: \"\\edda\"; }\n.icofont-user-suited:before {\n  content: \"\\eddb\"; }\n.icofont-user:before {\n  content: \"\\eddc\"; }\n.icofont-users-alt-1:before {\n  content: \"\\eddd\"; }\n.icofont-users-alt-2:before {\n  content: \"\\edde\"; }\n.icofont-users-alt-3:before {\n  content: \"\\eddf\"; }\n.icofont-users-alt-4:before {\n  content: \"\\ede0\"; }\n.icofont-users-alt-5:before {\n  content: \"\\ede1\"; }\n.icofont-users-alt-6:before {\n  content: \"\\ede2\"; }\n.icofont-users-social:before {\n  content: \"\\ede3\"; }\n.icofont-users:before {\n  content: \"\\ede4\"; }\n.icofont-waiter:before {\n  content: \"\\ede5\"; }\n.icofont-woman-in-glasses:before {\n  content: \"\\ede6\"; }\n.icofont-document-search:before {\n  content: \"\\ede7\"; }\n.icofont-folder-search:before {\n  content: \"\\ede8\"; }\n.icofont-home-search:before {\n  content: \"\\ede9\"; }\n.icofont-job-search:before {\n  content: \"\\edea\"; }\n.icofont-map-search:before {\n  content: \"\\edeb\"; }\n.icofont-restaurant-search:before {\n  content: \"\\edec\"; }\n.icofont-search-alt-1:before {\n  content: \"\\eded\"; }\n.icofont-search-alt-2:before {\n  content: \"\\edee\"; }\n.icofont-search:before {\n  content: \"\\edef\"; }\n.icofont-stock-search:before {\n  content: \"\\edf0\"; }\n.icofont-user-search:before {\n  content: \"\\edf1\"; }\n.icofont-social-aim:before {\n  content: \"\\edf2\"; }\n.icofont-social-badoo:before {\n  content: \"\\edf3\"; }\n.icofont-social-bebo:before {\n  content: \"\\edf4\"; }\n.icofont-social-behance:before {\n  content: \"\\edf5\"; }\n.icofont-social-blogger:before {\n  content: \"\\edf6\"; }\n.icofont-social-bootstrap:before {\n  content: \"\\edf7\"; }\n.icofont-social-brightkite:before {\n  content: \"\\edf8\"; }\n.icofont-social-cloudapp:before {\n  content: \"\\edf9\"; }\n.icofont-social-concrete5:before {\n  content: \"\\edfa\"; }\n.icofont-social-designbump:before {\n  content: \"\\edfb\"; }\n.icofont-social-designfloat:before {\n  content: \"\\edfc\"; }\n.icofont-social-deviantart:before {\n  content: \"\\edfd\"; }\n.icofont-social-digg:before {\n  content: \"\\edfe\"; }\n.icofont-social-dotcms:before {\n  content: \"\\edff\"; }\n.icofont-social-dribble:before {\n  content: \"\\ee00\"; }\n.icofont-social-dropbox:before {\n  content: \"\\ee01\"; }\n.icofont-brand-drupal:before {\n  content: \"\\ee02\"; }\n.icofont-social-ebuddy:before {\n  content: \"\\ee03\"; }\n.icofont-social-ello:before {\n  content: \"\\ee04\"; }\n.icofont-social-ember:before {\n  content: \"\\ee05\"; }\n.icofont-social-envato:before {\n  content: \"\\ee06\"; }\n.icofont-social-evernote:before {\n  content: \"\\ee07\"; }\n.icofont-social-facebook:before {\n  content: \"\\ee08\"; }\n.icofont-social-feedburner:before {\n  content: \"\\ee09\"; }\n.icofont-social-folkd:before {\n  content: \"\\ee0a\"; }\n.icofont-social-friendfeed:before {\n  content: \"\\ee0b\"; }\n.icofont-social-ghost:before {\n  content: \"\\ee0c\"; }\n.icofont-social-github:before {\n  content: \"\\ee0d\"; }\n.icofont-social-gnome:before {\n  content: \"\\ee0e\"; }\n.icofont-social-google-buzz:before {\n  content: \"\\ee0f\"; }\n.icofont-social-google-map:before {\n  content: \"\\ee10\"; }\n.icofont-social-google-plus:before {\n  content: \"\\ee11\"; }\n.icofont-social-google-talk:before {\n  content: \"\\ee12\"; }\n.icofont-social-hype-machine:before {\n  content: \"\\ee13\"; }\n.icofont-social-instagram:before {\n  content: \"\\ee14\"; }\n.icofont-brand-joomla:before {\n  content: \"\\ee15\"; }\n.icofont-social-kickstarter:before {\n  content: \"\\ee16\"; }\n.icofont-social-line:before {\n  content: \"\\ee17\"; }\n.icofont-social-linux-mint:before {\n  content: \"\\ee18\"; }\n.icofont-social-livejournal:before {\n  content: \"\\ee19\"; }\n.icofont-social-magento:before {\n  content: \"\\ee1a\"; }\n.icofont-social-meetup:before {\n  content: \"\\ee1b\"; }\n.icofont-social-mixx:before {\n  content: \"\\ee1c\"; }\n.icofont-social-newsvine:before {\n  content: \"\\ee1d\"; }\n.icofont-social-nimbuss:before {\n  content: \"\\ee1e\"; }\n.icofont-social-opencart:before {\n  content: \"\\ee1f\"; }\n.icofont-social-oscommerce:before {\n  content: \"\\ee20\"; }\n.icofont-social-pandora:before {\n  content: \"\\ee21\"; }\n.icofont-social-picasa:before {\n  content: \"\\ee22\"; }\n.icofont-social-pinterest:before {\n  content: \"\\ee23\"; }\n.icofont-social-prestashop:before {\n  content: \"\\ee24\"; }\n.icofont-social-qik:before {\n  content: \"\\ee25\"; }\n.icofont-social-readernaut:before {\n  content: \"\\ee26\"; }\n.icofont-social-reddit:before {\n  content: \"\\ee27\"; }\n.icofont-social-rss:before {\n  content: \"\\ee28\"; }\n.icofont-social-shopify:before {\n  content: \"\\ee29\"; }\n.icofont-social-silverstripe:before {\n  content: \"\\ee2a\"; }\n.icofont-social-skype:before {\n  content: \"\\ee2b\"; }\n.icofont-social-slashdot:before {\n  content: \"\\ee2c\"; }\n.icofont-social-smugmug:before {\n  content: \"\\ee2d\"; }\n.icofont-social-steam:before {\n  content: \"\\ee2e\"; }\n.icofont-social-stumbleupon:before {\n  content: \"\\ee2f\"; }\n.icofont-social-technorati:before {\n  content: \"\\ee30\"; }\n.icofont-social-telegram:before {\n  content: \"\\ee31\"; }\n.icofont-social-tinder:before {\n  content: \"\\ee32\"; }\n.icofont-social-tumblr:before {\n  content: \"\\ee33\"; }\n.icofont-social-twitter:before {\n  content: \"\\ee34\"; }\n.icofont-social-typo3:before {\n  content: \"\\ee35\"; }\n.icofont-social-ubercart:before {\n  content: \"\\ee36\"; }\n.icofont-social-viber:before {\n  content: \"\\ee37\"; }\n.icofont-social-viddler:before {\n  content: \"\\ee38\"; }\n.icofont-social-vimeo:before {\n  content: \"\\ee39\"; }\n.icofont-social-vine:before {\n  content: \"\\ee3a\"; }\n.icofont-social-virb:before {\n  content: \"\\ee3b\"; }\n.icofont-social-virtuemart:before {\n  content: \"\\ee3c\"; }\n.icofont-social-wechat:before {\n  content: \"\\ee3d\"; }\n.icofont-brand-wordpress:before {\n  content: \"\\ee3e\"; }\n.icofont-social-xing:before {\n  content: \"\\ee3f\"; }\n.icofont-social-yahoo:before {\n  content: \"\\ee40\"; }\n.icofont-social-yelp:before {\n  content: \"\\ee41\"; }\n.icofont-social-zencart:before {\n  content: \"\\ee42\"; }\n.icofont-badminton-birdie:before {\n  content: \"\\ee43\"; }\n.icofont-baseball:before {\n  content: \"\\ee44\"; }\n.icofont-baseballer:before {\n  content: \"\\ee45\"; }\n.icofont-basketball-hoop:before {\n  content: \"\\ee46\"; }\n.icofont-basketball:before {\n  content: \"\\ee47\"; }\n.icofont-billiard-ball:before {\n  content: \"\\ee48\"; }\n.icofont-boot-alt-1:before {\n  content: \"\\ee49\"; }\n.icofont-boot-alt-2:before {\n  content: \"\\ee4a\"; }\n.icofont-bowling-alt:before {\n  content: \"\\ee4b\"; }\n.icofont-bowling:before {\n  content: \"\\ee4c\"; }\n.icofont-canoe:before {\n  content: \"\\ee4d\"; }\n.icofont-cheer-leader:before {\n  content: \"\\ee4e\"; }\n.icofont-climbing:before {\n  content: \"\\ee4f\"; }\n.icofont-corner:before {\n  content: \"\\ee50\"; }\n.icofont-cyclist:before {\n  content: \"\\ee51\"; }\n.icofont-dumbbell-alt:before {\n  content: \"\\ee52\"; }\n.icofont-dumbbell:before {\n  content: \"\\ee53\"; }\n.icofont-field-alt:before {\n  content: \"\\ee54\"; }\n.icofont-field:before {\n  content: \"\\ee55\"; }\n.icofont-football-alt:before {\n  content: \"\\ee56\"; }\n.icofont-foul:before {\n  content: \"\\ee57\"; }\n.icofont-goal-keeper:before {\n  content: \"\\ee58\"; }\n.icofont-goal:before {\n  content: \"\\ee59\"; }\n.icofont-golf-alt:before {\n  content: \"\\ee5a\"; }\n.icofont-golf-bag:before {\n  content: \"\\ee5b\"; }\n.icofont-golf-field:before {\n  content: \"\\ee5c\"; }\n.icofont-golf:before {\n  content: \"\\ee5d\"; }\n.icofont-golfer:before {\n  content: \"\\ee5e\"; }\n.icofont-gym-alt-1:before {\n  content: \"\\ee5f\"; }\n.icofont-gym-alt-2:before {\n  content: \"\\ee60\"; }\n.icofont-gym-alt-3:before {\n  content: \"\\ee61\"; }\n.icofont-gym:before {\n  content: \"\\ee62\"; }\n.icofont-hand-grippers:before {\n  content: \"\\ee63\"; }\n.icofont-heart-beat-alt:before {\n  content: \"\\ee64\"; }\n.icofont-helmet:before {\n  content: \"\\ee65\"; }\n.icofont-hockey-alt:before {\n  content: \"\\ee66\"; }\n.icofont-hockey:before {\n  content: \"\\ee67\"; }\n.icofont-ice-skate:before {\n  content: \"\\ee68\"; }\n.icofont-jersey-alt:before {\n  content: \"\\ee69\"; }\n.icofont-jersey:before {\n  content: \"\\ee6a\"; }\n.icofont-jumping:before {\n  content: \"\\ee6b\"; }\n.icofont-kick:before {\n  content: \"\\ee6c\"; }\n.icofont-leg:before {\n  content: \"\\ee6d\"; }\n.icofont-match-review:before {\n  content: \"\\ee6e\"; }\n.icofont-medal-alt:before {\n  content: \"\\ee6f\"; }\n.icofont-muscle-alt:before {\n  content: \"\\ee70\"; }\n.icofont-muscle:before {\n  content: \"\\ee71\"; }\n.icofont-offside:before {\n  content: \"\\ee72\"; }\n.icofont-olympic-logo:before {\n  content: \"\\ee73\"; }\n.icofont-olympic:before {\n  content: \"\\ee74\"; }\n.icofont-padding:before {\n  content: \"\\ee75\"; }\n.icofont-penalty-card:before {\n  content: \"\\ee76\"; }\n.icofont-racer:before {\n  content: \"\\ee77\"; }\n.icofont-racing-car:before {\n  content: \"\\ee78\"; }\n.icofont-racing-flag-alt:before {\n  content: \"\\ee79\"; }\n.icofont-racing-flag:before {\n  content: \"\\ee7a\"; }\n.icofont-racings-wheel:before {\n  content: \"\\ee7b\"; }\n.icofont-referee:before {\n  content: \"\\ee7c\"; }\n.icofont-refree-jersey:before {\n  content: \"\\ee7d\"; }\n.icofont-result:before {\n  content: \"\\ee7e\"; }\n.icofont-rugby-ball:before {\n  content: \"\\ee7f\"; }\n.icofont-rugby-player:before {\n  content: \"\\ee80\"; }\n.icofont-rugby:before {\n  content: \"\\ee81\"; }\n.icofont-runner-alt-1:before {\n  content: \"\\ee82\"; }\n.icofont-runner-alt-2:before {\n  content: \"\\ee83\"; }\n.icofont-runner:before {\n  content: \"\\ee84\"; }\n.icofont-score-board:before {\n  content: \"\\ee85\"; }\n.icofont-skiing-man:before {\n  content: \"\\ee86\"; }\n.icofont-skydiving-goggles:before {\n  content: \"\\ee87\"; }\n.icofont-snow-mobile:before {\n  content: \"\\ee88\"; }\n.icofont-steering:before {\n  content: \"\\ee89\"; }\n.icofont-substitute:before {\n  content: \"\\ee8a\"; }\n.icofont-swimmer:before {\n  content: \"\\ee8b\"; }\n.icofont-table-tennis:before {\n  content: \"\\ee8c\"; }\n.icofont-team-alt:before {\n  content: \"\\ee8d\"; }\n.icofont-team:before {\n  content: \"\\ee8e\"; }\n.icofont-tennis-player:before {\n  content: \"\\ee8f\"; }\n.icofont-tennis:before {\n  content: \"\\ee90\"; }\n.icofont-time:before {\n  content: \"\\ee91\"; }\n.icofont-track:before {\n  content: \"\\ee92\"; }\n.icofont-tracking:before {\n  content: \"\\ee93\"; }\n.icofont-trophy-alt:before {\n  content: \"\\ee94\"; }\n.icofont-trophy:before {\n  content: \"\\ee95\"; }\n.icofont-volleyball-alt:before {\n  content: \"\\ee96\"; }\n.icofont-volleyball-fire:before {\n  content: \"\\ee97\"; }\n.icofont-volleyball:before {\n  content: \"\\ee98\"; }\n.icofont-water-bottle:before {\n  content: \"\\ee99\"; }\n.icofont-whisle:before {\n  content: \"\\ee9a\"; }\n.icofont-win-trophy:before {\n  content: \"\\ee9b\"; }\n.icofont-align-center:before {\n  content: \"\\ee9c\"; }\n.icofont-align-left:before {\n  content: \"\\ee9d\"; }\n.icofont-align-right:before {\n  content: \"\\ee9e\"; }\n.icofont-all-caps:before {\n  content: \"\\ee9f\"; }\n.icofont-bold:before {\n  content: \"\\eea0\"; }\n.icofont-brush:before {\n  content: \"\\eea1\"; }\n.icofont-clip-board:before {\n  content: \"\\eea2\"; }\n.icofont-code-alt:before {\n  content: \"\\eea3\"; }\n.icofont-color-bucket:before {\n  content: \"\\eea4\"; }\n.icofont-color-picker:before {\n  content: \"\\eea5\"; }\n.icofont-copy-alt:before {\n  content: \"\\eea6\"; }\n.icofont-copy-black:before {\n  content: \"\\eea7\"; }\n.icofont-cut:before {\n  content: \"\\eea8\"; }\n.icofont-delete-alt:before {\n  content: \"\\eea9\"; }\n.icofont-edit-alt:before {\n  content: \"\\eeaa\"; }\n.icofont-eraser-alt:before {\n  content: \"\\eeab\"; }\n.icofont-file-alt:before {\n  content: \"\\eeac\"; }\n.icofont-font:before {\n  content: \"\\eead\"; }\n.icofont-header:before {\n  content: \"\\eeae\"; }\n.icofont-indent:before {\n  content: \"\\eeaf\"; }\n.icofont-italic-alt:before {\n  content: \"\\eeb0\"; }\n.icofont-justify-all:before {\n  content: \"\\eeb1\"; }\n.icofont-justify-center:before {\n  content: \"\\eeb2\"; }\n.icofont-justify-left:before {\n  content: \"\\eeb3\"; }\n.icofont-justify-right:before {\n  content: \"\\eeb4\"; }\n.icofont-line-height:before {\n  content: \"\\eeb5\"; }\n.icofont-link-alt:before {\n  content: \"\\eeb6\"; }\n.icofont-listine-dots:before {\n  content: \"\\eeb7\"; }\n.icofont-listing-box:before {\n  content: \"\\eeb8\"; }\n.icofont-listing-number:before {\n  content: \"\\eeb9\"; }\n.icofont-marker:before {\n  content: \"\\eeba\"; }\n.icofont-outdent:before {\n  content: \"\\eebb\"; }\n.icofont-paper-clip:before {\n  content: \"\\eebc\"; }\n.icofont-paragraph:before {\n  content: \"\\eebd\"; }\n.icofont-pin:before {\n  content: \"\\eebe\"; }\n.icofont-printer:before {\n  content: \"\\eebf\"; }\n.icofont-redo:before {\n  content: \"\\eec0\"; }\n.icofont-rotation:before {\n  content: \"\\eec1\"; }\n.icofont-save:before {\n  content: \"\\eec2\"; }\n.icofont-small-cap:before {\n  content: \"\\eec3\"; }\n.icofont-strike-through:before {\n  content: \"\\eec4\"; }\n.icofont-sub-listing:before {\n  content: \"\\eec5\"; }\n.icofont-subscript:before {\n  content: \"\\eec6\"; }\n.icofont-superscript:before {\n  content: \"\\eec7\"; }\n.icofont-table:before {\n  content: \"\\eec8\"; }\n.icofont-text-height:before {\n  content: \"\\eec9\"; }\n.icofont-text-width:before {\n  content: \"\\eeca\"; }\n.icofont-trash:before {\n  content: \"\\eecb\"; }\n.icofont-underline:before {\n  content: \"\\eecc\"; }\n.icofont-undo:before {\n  content: \"\\eecd\"; }\n.icofont-unlink:before {\n  content: \"\\eece\"; }\n.icofont-air-balloon:before {\n  content: \"\\eecf\"; }\n.icofont-airplane-alt:before {\n  content: \"\\eed0\"; }\n.icofont-airplane:before {\n  content: \"\\eed1\"; }\n.icofont-ambulance-crescent:before {\n  content: \"\\eed2\"; }\n.icofont-ambulance-cross:before {\n  content: \"\\eed3\"; }\n.icofont-articulated-truck:before {\n  content: \"\\eed4\"; }\n.icofont-auto-rickshaw:before {\n  content: \"\\eed5\"; }\n.icofont-bicycle-alt-1:before {\n  content: \"\\eed6\"; }\n.icofont-bicycle-alt-2:before {\n  content: \"\\eed7\"; }\n.icofont-bull-dozer:before {\n  content: \"\\eed8\"; }\n.icofont-bus-alt-1:before {\n  content: \"\\eed9\"; }\n.icofont-bus-alt-2:before {\n  content: \"\\eeda\"; }\n.icofont-bus-alt-3:before {\n  content: \"\\eedb\"; }\n.icofont-cable-car:before {\n  content: \"\\eedc\"; }\n.icofont-car-alt-1:before {\n  content: \"\\eedd\"; }\n.icofont-car-alt-2:before {\n  content: \"\\eede\"; }\n.icofont-car-alt-3:before {\n  content: \"\\eedf\"; }\n.icofont-car-alt-4:before {\n  content: \"\\eee0\"; }\n.icofont-concrete-mixer:before {\n  content: \"\\eee1\"; }\n.icofont-delivery-time:before {\n  content: \"\\eee2\"; }\n.icofont-excavator:before {\n  content: \"\\eee3\"; }\n.icofont-fast-delivery:before {\n  content: \"\\eee4\"; }\n.icofont-fire-truck-alt:before {\n  content: \"\\eee5\"; }\n.icofont-fire-truck:before {\n  content: \"\\eee6\"; }\n.icofont-fork-lift:before {\n  content: \"\\eee7\"; }\n.icofont-free-delivery:before {\n  content: \"\\eee8\"; }\n.icofont-golf-cart:before {\n  content: \"\\eee9\"; }\n.icofont-helicopter:before {\n  content: \"\\eeea\"; }\n.icofont-motor-bike-alt:before {\n  content: \"\\eeeb\"; }\n.icofont-motor-bike:before {\n  content: \"\\eeec\"; }\n.icofont-motor-biker:before {\n  content: \"\\eeed\"; }\n.icofont-oil-truck:before {\n  content: \"\\eeee\"; }\n.icofont-police-car:before {\n  content: \"\\eeef\"; }\n.icofont-rickshaw:before {\n  content: \"\\eef0\"; }\n.icofont-rocket-alt-1:before {\n  content: \"\\eef1\"; }\n.icofont-rocket-alt-2:before {\n  content: \"\\eef2\"; }\n.icofont-sail-boat:before {\n  content: \"\\eef3\"; }\n.icofont-scooter:before {\n  content: \"\\eef4\"; }\n.icofont-sea-plane:before {\n  content: \"\\eef5\"; }\n.icofont-ship-alt:before {\n  content: \"\\eef6\"; }\n.icofont-speed-boat:before {\n  content: \"\\eef7\"; }\n.icofont-taxi:before {\n  content: \"\\eef8\"; }\n.icofont-tow-truck:before {\n  content: \"\\eef9\"; }\n.icofont-tractor:before {\n  content: \"\\eefa\"; }\n.icofont-traffic-light:before {\n  content: \"\\eefb\"; }\n.icofont-train-line:before {\n  content: \"\\eefc\"; }\n.icofont-train-steam:before {\n  content: \"\\eefd\"; }\n.icofont-tram:before {\n  content: \"\\eefe\"; }\n.icofont-truck-alt:before {\n  content: \"\\eeff\"; }\n.icofont-truck-loaded:before {\n  content: \"\\ef00\"; }\n.icofont-truck:before {\n  content: \"\\ef01\"; }\n.icofont-van-alt:before {\n  content: \"\\ef02\"; }\n.icofont-van:before {\n  content: \"\\ef03\"; }\n.icofont-yacht:before {\n  content: \"\\ef04\"; }\n.icofont-5-star-hotel:before {\n  content: \"\\ef05\"; }\n.icofont-anchor-alt:before {\n  content: \"\\ef06\"; }\n.icofont-beach-bed:before {\n  content: \"\\ef07\"; }\n.icofont-camping-vest:before {\n  content: \"\\ef08\"; }\n.icofont-coconut-alt:before {\n  content: \"\\ef09\"; }\n.icofont-direction-sign:before {\n  content: \"\\ef0a\"; }\n.icofont-hill-side:before {\n  content: \"\\ef0b\"; }\n.icofont-island-alt:before {\n  content: \"\\ef0c\"; }\n.icofont-long-drive:before {\n  content: \"\\ef0d\"; }\n.icofont-map-pins:before {\n  content: \"\\ef0e\"; }\n.icofont-plane-ticket:before {\n  content: \"\\ef0f\"; }\n.icofont-sail-boat-alt-1:before {\n  content: \"\\ef10\"; }\n.icofont-sail-boat-alt-2:before {\n  content: \"\\ef11\"; }\n.icofont-sandals-female:before {\n  content: \"\\ef12\"; }\n.icofont-sandals-male:before {\n  content: \"\\ef13\"; }\n.icofont-travelling:before {\n  content: \"\\ef14\"; }\n.icofont-breakdown:before {\n  content: \"\\ef15\"; }\n.icofont-celsius:before {\n  content: \"\\ef16\"; }\n.icofont-clouds:before {\n  content: \"\\ef17\"; }\n.icofont-cloudy:before {\n  content: \"\\ef18\"; }\n.icofont-compass-alt:before {\n  content: \"\\ef19\"; }\n.icofont-dust:before {\n  content: \"\\ef1a\"; }\n.icofont-eclipse:before {\n  content: \"\\ef1b\"; }\n.icofont-fahrenheit:before {\n  content: \"\\ef1c\"; }\n.icofont-forest-fire:before {\n  content: \"\\ef1d\"; }\n.icofont-full-night:before {\n  content: \"\\ef1e\"; }\n.icofont-full-sunny:before {\n  content: \"\\ef1f\"; }\n.icofont-hail-night:before {\n  content: \"\\ef20\"; }\n.icofont-hail-rainy-night:before {\n  content: \"\\ef21\"; }\n.icofont-hail-rainy-sunny:before {\n  content: \"\\ef22\"; }\n.icofont-hail-rainy:before {\n  content: \"\\ef23\"; }\n.icofont-hail-sunny:before {\n  content: \"\\ef24\"; }\n.icofont-hail-thunder-night:before {\n  content: \"\\ef25\"; }\n.icofont-hail-thunder-sunny:before {\n  content: \"\\ef26\"; }\n.icofont-hail-thunder:before {\n  content: \"\\ef27\"; }\n.icofont-hail:before {\n  content: \"\\ef28\"; }\n.icofont-hill-night:before {\n  content: \"\\ef29\"; }\n.icofont-hill-sunny:before {\n  content: \"\\ef2a\"; }\n.icofont-hill:before {\n  content: \"\\ef2b\"; }\n.icofont-hurricane:before {\n  content: \"\\ef2c\"; }\n.icofont-island:before {\n  content: \"\\ef2d\"; }\n.icofont-meteor:before {\n  content: \"\\ef2e\"; }\n.icofont-night:before {\n  content: \"\\ef2f\"; }\n.icofont-rainy-night:before {\n  content: \"\\ef30\"; }\n.icofont-rainy-sunny:before {\n  content: \"\\ef31\"; }\n.icofont-rainy-thunder:before {\n  content: \"\\ef32\"; }\n.icofont-rainy:before {\n  content: \"\\ef33\"; }\n.icofont-showy-night-hail:before {\n  content: \"\\ef34\"; }\n.icofont-snow-temp:before {\n  content: \"\\ef35\"; }\n.icofont-snow:before {\n  content: \"\\ef36\"; }\n.icofont-snowy-hail:before {\n  content: \"\\ef37\"; }\n.icofont-snowy-night-rainy:before {\n  content: \"\\ef38\"; }\n.icofont-snowy-night:before {\n  content: \"\\ef39\"; }\n.icofont-snowy-rainy:before {\n  content: \"\\ef3a\"; }\n.icofont-snowy-sunny-hail:before {\n  content: \"\\ef3b\"; }\n.icofont-snowy-sunny-rainy:before {\n  content: \"\\ef3c\"; }\n.icofont-snowy-sunny:before {\n  content: \"\\ef3d\"; }\n.icofont-snowy-thunder-night:before {\n  content: \"\\ef3e\"; }\n.icofont-snowy-thunder-sunny:before {\n  content: \"\\ef3f\"; }\n.icofont-snowy-thunder:before {\n  content: \"\\ef40\"; }\n.icofont-snowy-windy-night:before {\n  content: \"\\ef41\"; }\n.icofont-snowy-windy-sunny:before {\n  content: \"\\ef42\"; }\n.icofont-snowy-windy:before {\n  content: \"\\ef43\"; }\n.icofont-snowy:before {\n  content: \"\\ef44\"; }\n.icofont-sun-alt:before {\n  content: \"\\ef45\"; }\n.icofont-sun-rise:before {\n  content: \"\\ef46\"; }\n.icofont-sun-set:before {\n  content: \"\\ef47\"; }\n.icofont-sunny-day-temp:before {\n  content: \"\\ef48\"; }\n.icofont-sunny:before {\n  content: \"\\ef49\"; }\n.icofont-thermometer:before {\n  content: \"\\ef4a\"; }\n.icofont-thinder-light:before {\n  content: \"\\ef4b\"; }\n.icofont-tornado:before {\n  content: \"\\ef4c\"; }\n.icofont-umbrella-alt:before {\n  content: \"\\ef4d\"; }\n.icofont-volcano:before {\n  content: \"\\ef4e\"; }\n.icofont-wave:before {\n  content: \"\\ef4f\"; }\n.icofont-wind-scale-0:before {\n  content: \"\\ef50\"; }\n.icofont-wind-scale-1:before {\n  content: \"\\ef51\"; }\n.icofont-wind-scale-2:before {\n  content: \"\\ef52\"; }\n.icofont-wind-scale-3:before {\n  content: \"\\ef53\"; }\n.icofont-wind-scale-4:before {\n  content: \"\\ef54\"; }\n.icofont-wind-scale-5:before {\n  content: \"\\ef55\"; }\n.icofont-wind-scale-6:before {\n  content: \"\\ef56\"; }\n.icofont-wind-scale-7:before {\n  content: \"\\ef57\"; }\n.icofont-wind-scale-8:before {\n  content: \"\\ef58\"; }\n.icofont-wind-scale-9:before {\n  content: \"\\ef59\"; }\n.icofont-wind-scale-10:before {\n  content: \"\\ef5a\"; }\n.icofont-wind-scale-11:before {\n  content: \"\\ef5b\"; }\n.icofont-wind-scale-12:before {\n  content: \"\\ef5c\"; }\n.icofont-wind-waves:before {\n  content: \"\\ef5d\"; }\n.icofont-wind:before {\n  content: \"\\ef5e\"; }\n.icofont-windy-hail:before {\n  content: \"\\ef5f\"; }\n.icofont-windy-night:before {\n  content: \"\\ef60\"; }\n.icofont-windy-raining:before {\n  content: \"\\ef61\"; }\n.icofont-windy-sunny:before {\n  content: \"\\ef62\"; }\n.icofont-windy-thunder-raining:before {\n  content: \"\\ef63\"; }\n.icofont-windy-thunder:before {\n  content: \"\\ef64\"; }\n.icofont-windy:before {\n  content: \"\\ef65\"; }\n.icofont-addons:before {\n  content: \"\\ef66\"; }\n.icofont-address-book:before {\n  content: \"\\ef67\"; }\n.icofont-adjust:before {\n  content: \"\\ef68\"; }\n.icofont-alarm:before {\n  content: \"\\ef69\"; }\n.icofont-anchor:before {\n  content: \"\\ef6a\"; }\n.icofont-archive:before {\n  content: \"\\ef6b\"; }\n.icofont-at:before {\n  content: \"\\ef6c\"; }\n.icofont-attachment:before {\n  content: \"\\ef6d\"; }\n.icofont-audio:before {\n  content: \"\\ef6e\"; }\n.icofont-auto-mobile:before {\n  content: \"\\ef6f\"; }\n.icofont-automation:before {\n  content: \"\\ef70\"; }\n.icofont-baby:before {\n  content: \"\\ef71\"; }\n.icofont-badge:before {\n  content: \"\\ef72\"; }\n.icofont-bag:before {\n  content: \"\\ef73\"; }\n.icofont-ban:before {\n  content: \"\\ef74\"; }\n.icofont-bank:before {\n  content: \"\\ef75\"; }\n.icofont-bar-code:before {\n  content: \"\\ef76\"; }\n.icofont-bars:before {\n  content: \"\\ef77\"; }\n.icofont-battery-empty:before {\n  content: \"\\ef78\"; }\n.icofont-battery-full:before {\n  content: \"\\ef79\"; }\n.icofont-battery-half:before {\n  content: \"\\ef7a\"; }\n.icofont-battery-low:before {\n  content: \"\\ef7b\"; }\n.icofont-beach:before {\n  content: \"\\ef7c\"; }\n.icofont-beaker:before {\n  content: \"\\ef7d\"; }\n.icofont-bear:before {\n  content: \"\\ef7e\"; }\n.icofont-beard:before {\n  content: \"\\ef7f\"; }\n.icofont-bed:before {\n  content: \"\\ef80\"; }\n.icofont-bell:before {\n  content: \"\\ef81\"; }\n.icofont-beverage:before {\n  content: \"\\ef82\"; }\n.icofont-bicycle:before {\n  content: \"\\ef83\"; }\n.icofont-bill:before {\n  content: \"\\ef84\"; }\n.icofont-bin:before {\n  content: \"\\ef85\"; }\n.icofont-binary:before {\n  content: \"\\ef86\"; }\n.icofont-binoculars:before {\n  content: \"\\ef87\"; }\n.icofont-bird:before {\n  content: \"\\ef88\"; }\n.icofont-birds:before {\n  content: \"\\ef89\"; }\n.icofont-black-board:before {\n  content: \"\\ef8a\"; }\n.icofont-bluetooth:before {\n  content: \"\\ef8b\"; }\n.icofont-bolt:before {\n  content: \"\\ef8c\"; }\n.icofont-bomb:before {\n  content: \"\\ef8d\"; }\n.icofont-book-mark:before {\n  content: \"\\ef8e\"; }\n.icofont-book:before {\n  content: \"\\ef8f\"; }\n.icofont-boot:before {\n  content: \"\\ef90\"; }\n.icofont-box:before {\n  content: \"\\ef91\"; }\n.icofont-brain:before {\n  content: \"\\ef92\"; }\n.icofont-briefcase:before {\n  content: \"\\ef93\"; }\n.icofont-broken:before {\n  content: \"\\ef94\"; }\n.icofont-bucket:before {\n  content: \"\\ef95\"; }\n.icofont-bucket1:before {\n  content: \"\\ef96\"; }\n.icofont-bucket2:before {\n  content: \"\\ef97\"; }\n.icofont-bug:before {\n  content: \"\\ef98\"; }\n.icofont-building:before {\n  content: \"\\ef99\"; }\n.icofont-bullet:before {\n  content: \"\\ef9a\"; }\n.icofont-bullhorn:before {\n  content: \"\\ef9b\"; }\n.icofont-bullseye:before {\n  content: \"\\ef9c\"; }\n.icofont-bus:before {\n  content: \"\\ef9d\"; }\n.icofont-butterfly:before {\n  content: \"\\ef9e\"; }\n.icofont-cab:before {\n  content: \"\\ef9f\"; }\n.icofont-calculator:before {\n  content: \"\\efa0\"; }\n.icofont-calendar:before {\n  content: \"\\efa1\"; }\n.icofont-camera-alt:before {\n  content: \"\\efa2\"; }\n.icofont-camera:before {\n  content: \"\\efa3\"; }\n.icofont-car:before {\n  content: \"\\efa4\"; }\n.icofont-card:before {\n  content: \"\\efa5\"; }\n.icofont-cart:before {\n  content: \"\\efa6\"; }\n.icofont-cc:before {\n  content: \"\\efa7\"; }\n.icofont-certificate:before {\n  content: \"\\efa8\"; }\n.icofont-charging:before {\n  content: \"\\efa9\"; }\n.icofont-chat:before {\n  content: \"\\efaa\"; }\n.icofont-check-alt:before {\n  content: \"\\efab\"; }\n.icofont-check-circled:before {\n  content: \"\\efac\"; }\n.icofont-check:before {\n  content: \"\\efad\"; }\n.icofont-checked:before {\n  content: \"\\efae\"; }\n.icofont-children-care:before {\n  content: \"\\efaf\"; }\n.icofont-clock-time:before {\n  content: \"\\efb0\"; }\n.icofont-close-circled:before {\n  content: \"\\efb1\"; }\n.icofont-close-line-circled:before {\n  content: \"\\efb2\"; }\n.icofont-close-line-squared-alt:before {\n  content: \"\\efb3\"; }\n.icofont-close-line-squared:before {\n  content: \"\\efb4\"; }\n.icofont-close-line:before {\n  content: \"\\efb5\"; }\n.icofont-close-squared-alt:before {\n  content: \"\\efb6\"; }\n.icofont-close-squared:before {\n  content: \"\\efb7\"; }\n.icofont-close:before {\n  content: \"\\efb8\"; }\n.icofont-cloud-download:before {\n  content: \"\\efb9\"; }\n.icofont-cloud-refresh:before {\n  content: \"\\efba\"; }\n.icofont-cloud-upload:before {\n  content: \"\\efbb\"; }\n.icofont-cloud:before {\n  content: \"\\efbc\"; }\n.icofont-code-not-allowed:before {\n  content: \"\\efbd\"; }\n.icofont-code:before {\n  content: \"\\efbe\"; }\n.icofont-coffee-cup:before {\n  content: \"\\efbf\"; }\n.icofont-comment:before {\n  content: \"\\efc0\"; }\n.icofont-compass:before {\n  content: \"\\efc1\"; }\n.icofont-computer:before {\n  content: \"\\efc2\"; }\n.icofont-connection:before {\n  content: \"\\efc3\"; }\n.icofont-console:before {\n  content: \"\\efc4\"; }\n.icofont-contacts:before {\n  content: \"\\efc5\"; }\n.icofont-contrast:before {\n  content: \"\\efc6\"; }\n.icofont-copy:before {\n  content: \"\\efc7\"; }\n.icofont-copyright:before {\n  content: \"\\efc8\"; }\n.icofont-credit-card:before {\n  content: \"\\efc9\"; }\n.icofont-crop:before {\n  content: \"\\efca\"; }\n.icofont-crown:before {\n  content: \"\\efcb\"; }\n.icofont-cube:before {\n  content: \"\\efcc\"; }\n.icofont-cubes:before {\n  content: \"\\efcd\"; }\n.icofont-culinary:before {\n  content: \"\\efce\"; }\n.icofont-dashboard-web:before {\n  content: \"\\efcf\"; }\n.icofont-dashboard:before {\n  content: \"\\efd0\"; }\n.icofont-data:before {\n  content: \"\\efd1\"; }\n.icofont-database-add:before {\n  content: \"\\efd2\"; }\n.icofont-database-locked:before {\n  content: \"\\efd3\"; }\n.icofont-database-remove:before {\n  content: \"\\efd4\"; }\n.icofont-database:before {\n  content: \"\\efd5\"; }\n.icofont-delete:before {\n  content: \"\\efd6\"; }\n.icofont-diamond:before {\n  content: \"\\efd7\"; }\n.icofont-dice:before {\n  content: \"\\efd8\"; }\n.icofont-disabled:before {\n  content: \"\\efd9\"; }\n.icofont-disc:before {\n  content: \"\\efda\"; }\n.icofont-diskette:before {\n  content: \"\\efdb\"; }\n.icofont-document-folder:before {\n  content: \"\\efdc\"; }\n.icofont-download-alt:before {\n  content: \"\\efdd\"; }\n.icofont-download:before {\n  content: \"\\efde\"; }\n.icofont-downloaded:before {\n  content: \"\\efdf\"; }\n.icofont-earth:before {\n  content: \"\\efe0\"; }\n.icofont-ebook:before {\n  content: \"\\efe1\"; }\n.icofont-edit:before {\n  content: \"\\efe2\"; }\n.icofont-eject:before {\n  content: \"\\efe3\"; }\n.icofont-email:before {\n  content: \"\\efe4\"; }\n.icofont-envelope-open:before {\n  content: \"\\efe5\"; }\n.icofont-envelope:before {\n  content: \"\\efe6\"; }\n.icofont-eraser:before {\n  content: \"\\efe7\"; }\n.icofont-error:before {\n  content: \"\\efe8\"; }\n.icofont-exchange:before {\n  content: \"\\efe9\"; }\n.icofont-exclamation-circle:before {\n  content: \"\\efea\"; }\n.icofont-exclamation-square:before {\n  content: \"\\efeb\"; }\n.icofont-exclamation-tringle:before {\n  content: \"\\efec\"; }\n.icofont-exclamation:before {\n  content: \"\\efed\"; }\n.icofont-exit:before {\n  content: \"\\efee\"; }\n.icofont-expand:before {\n  content: \"\\efef\"; }\n.icofont-external-link:before {\n  content: \"\\eff0\"; }\n.icofont-external:before {\n  content: \"\\eff1\"; }\n.icofont-eye-blocked:before {\n  content: \"\\eff2\"; }\n.icofont-eye-dropper:before {\n  content: \"\\eff3\"; }\n.icofont-eye:before {\n  content: \"\\eff4\"; }\n.icofont-favourite:before {\n  content: \"\\eff5\"; }\n.icofont-fax:before {\n  content: \"\\eff6\"; }\n.icofont-female:before {\n  content: \"\\eff7\"; }\n.icofont-file:before {\n  content: \"\\eff8\"; }\n.icofont-film:before {\n  content: \"\\eff9\"; }\n.icofont-filter:before {\n  content: \"\\effa\"; }\n.icofont-fire-burn:before {\n  content: \"\\effb\"; }\n.icofont-fire-extinguisher:before {\n  content: \"\\effc\"; }\n.icofont-fire:before {\n  content: \"\\effd\"; }\n.icofont-first-aid:before {\n  content: \"\\effe\"; }\n.icofont-flag-alt-1:before {\n  content: \"\\efff\"; }\n.icofont-flag-alt-2:before {\n  content: \"\\f000\"; }\n.icofont-flag:before {\n  content: \"\\f001\"; }\n.icofont-flash-light:before {\n  content: \"\\f002\"; }\n.icofont-flash:before {\n  content: \"\\f003\"; }\n.icofont-flask:before {\n  content: \"\\f004\"; }\n.icofont-focus:before {\n  content: \"\\f005\"; }\n.icofont-folder-open:before {\n  content: \"\\f006\"; }\n.icofont-folder:before {\n  content: \"\\f007\"; }\n.icofont-foot-print:before {\n  content: \"\\f008\"; }\n.icofont-football-american:before {\n  content: \"\\f009\"; }\n.icofont-football:before {\n  content: \"\\f00a\"; }\n.icofont-game-console:before {\n  content: \"\\f00b\"; }\n.icofont-game-pad:before {\n  content: \"\\f00c\"; }\n.icofont-gavel:before {\n  content: \"\\f00d\"; }\n.icofont-gear:before {\n  content: \"\\f00e\"; }\n.icofont-gears:before {\n  content: \"\\f00f\"; }\n.icofont-gift:before {\n  content: \"\\f010\"; }\n.icofont-glass:before {\n  content: \"\\f011\"; }\n.icofont-globe:before {\n  content: \"\\f012\"; }\n.icofont-graduate:before {\n  content: \"\\f013\"; }\n.icofont-graffiti:before {\n  content: \"\\f014\"; }\n.icofont-grocery:before {\n  content: \"\\f015\"; }\n.icofont-group:before {\n  content: \"\\f016\"; }\n.icofont-hammer:before {\n  content: \"\\f017\"; }\n.icofont-hand:before {\n  content: \"\\f018\"; }\n.icofont-hanger:before {\n  content: \"\\f019\"; }\n.icofont-hard-disk:before {\n  content: \"\\f01a\"; }\n.icofont-headphone:before {\n  content: \"\\f01b\"; }\n.icofont-heart-beat:before {\n  content: \"\\f01c\"; }\n.icofont-heart:before {\n  content: \"\\f01d\"; }\n.icofont-history:before {\n  content: \"\\f01e\"; }\n.icofont-home:before {\n  content: \"\\f01f\"; }\n.icofont-horn:before {\n  content: \"\\f020\"; }\n.icofont-hotel:before {\n  content: \"\\f021\"; }\n.icofont-hour-glass:before {\n  content: \"\\f022\"; }\n.icofont-id:before {\n  content: \"\\f023\"; }\n.icofont-image:before {\n  content: \"\\f024\"; }\n.icofont-inbox:before {\n  content: \"\\f025\"; }\n.icofont-infinite:before {\n  content: \"\\f026\"; }\n.icofont-info-circle:before {\n  content: \"\\f027\"; }\n.icofont-info-square:before {\n  content: \"\\f028\"; }\n.icofont-info:before {\n  content: \"\\f029\"; }\n.icofont-institution:before {\n  content: \"\\f02a\"; }\n.icofont-interface:before {\n  content: \"\\f02b\"; }\n.icofont-invisible:before {\n  content: \"\\f02c\"; }\n.icofont-italic:before {\n  content: \"\\f02d\"; }\n.icofont-jacket:before {\n  content: \"\\f02e\"; }\n.icofont-jar:before {\n  content: \"\\f02f\"; }\n.icofont-jewlery:before {\n  content: \"\\f030\"; }\n.icofont-karate:before {\n  content: \"\\f031\"; }\n.icofont-key-hole:before {\n  content: \"\\f032\"; }\n.icofont-key:before {\n  content: \"\\f033\"; }\n.icofont-keyboard:before {\n  content: \"\\f034\"; }\n.icofont-kid:before {\n  content: \"\\f035\"; }\n.icofont-label:before {\n  content: \"\\f036\"; }\n.icofont-lamp:before {\n  content: \"\\f037\"; }\n.icofont-laptop:before {\n  content: \"\\f038\"; }\n.icofont-layers:before {\n  content: \"\\f039\"; }\n.icofont-layout:before {\n  content: \"\\f03a\"; }\n.icofont-leaf:before {\n  content: \"\\f03b\"; }\n.icofont-leaflet:before {\n  content: \"\\f03c\"; }\n.icofont-learn:before {\n  content: \"\\f03d\"; }\n.icofont-legal:before {\n  content: \"\\f03e\"; }\n.icofont-lego:before {\n  content: \"\\f03f\"; }\n.icofont-lemon:before {\n  content: \"\\f040\"; }\n.icofont-lens:before {\n  content: \"\\f041\"; }\n.icofont-letter:before {\n  content: \"\\f042\"; }\n.icofont-letterbox:before {\n  content: \"\\f043\"; }\n.icofont-library:before {\n  content: \"\\f044\"; }\n.icofont-license:before {\n  content: \"\\f045\"; }\n.icofont-life-bouy:before {\n  content: \"\\f046\"; }\n.icofont-life-buoy:before {\n  content: \"\\f047\"; }\n.icofont-life-jacket:before {\n  content: \"\\f048\"; }\n.icofont-life-ring:before {\n  content: \"\\f049\"; }\n.icofont-light-bulb:before {\n  content: \"\\f04a\"; }\n.icofont-lighter:before {\n  content: \"\\f04b\"; }\n.icofont-lightning-ray:before {\n  content: \"\\f04c\"; }\n.icofont-like:before {\n  content: \"\\f04d\"; }\n.icofont-link:before {\n  content: \"\\f04e\"; }\n.icofont-live-support:before {\n  content: \"\\f04f\"; }\n.icofont-location-arrow:before {\n  content: \"\\f050\"; }\n.icofont-location-pin:before {\n  content: \"\\f051\"; }\n.icofont-lock:before {\n  content: \"\\f052\"; }\n.icofont-login:before {\n  content: \"\\f053\"; }\n.icofont-logout:before {\n  content: \"\\f054\"; }\n.icofont-lollipop:before {\n  content: \"\\f055\"; }\n.icofont-look:before {\n  content: \"\\f056\"; }\n.icofont-loop:before {\n  content: \"\\f057\"; }\n.icofont-luggage:before {\n  content: \"\\f058\"; }\n.icofont-lunch:before {\n  content: \"\\f059\"; }\n.icofont-lungs:before {\n  content: \"\\f05a\"; }\n.icofont-magic-alt:before {\n  content: \"\\f05b\"; }\n.icofont-magic:before {\n  content: \"\\f05c\"; }\n.icofont-magnet:before {\n  content: \"\\f05d\"; }\n.icofont-mail-box:before {\n  content: \"\\f05e\"; }\n.icofont-mail:before {\n  content: \"\\f05f\"; }\n.icofont-male:before {\n  content: \"\\f060\"; }\n.icofont-map:before {\n  content: \"\\f061\"; }\n.icofont-math:before {\n  content: \"\\f062\"; }\n.icofont-maximize:before {\n  content: \"\\f063\"; }\n.icofont-measure:before {\n  content: \"\\f064\"; }\n.icofont-medal:before {\n  content: \"\\f065\"; }\n.icofont-medical:before {\n  content: \"\\f066\"; }\n.icofont-medicine:before {\n  content: \"\\f067\"; }\n.icofont-mega-phone:before {\n  content: \"\\f068\"; }\n.icofont-memorial:before {\n  content: \"\\f069\"; }\n.icofont-memory-card:before {\n  content: \"\\f06a\"; }\n.icofont-mic-mute:before {\n  content: \"\\f06b\"; }\n.icofont-mic:before {\n  content: \"\\f06c\"; }\n.icofont-micro-chip:before {\n  content: \"\\f06d\"; }\n.icofont-microphone:before {\n  content: \"\\f06e\"; }\n.icofont-microscope:before {\n  content: \"\\f06f\"; }\n.icofont-military:before {\n  content: \"\\f070\"; }\n.icofont-mill:before {\n  content: \"\\f071\"; }\n.icofont-minus-circle:before {\n  content: \"\\f072\"; }\n.icofont-minus-square:before {\n  content: \"\\f073\"; }\n.icofont-minus:before {\n  content: \"\\f074\"; }\n.icofont-mobile-phone:before {\n  content: \"\\f075\"; }\n.icofont-molecule:before {\n  content: \"\\f076\"; }\n.icofont-money:before {\n  content: \"\\f077\"; }\n.icofont-moon:before {\n  content: \"\\f078\"; }\n.icofont-mop:before {\n  content: \"\\f079\"; }\n.icofont-muffin:before {\n  content: \"\\f07a\"; }\n.icofont-music-alt:before {\n  content: \"\\f07b\"; }\n.icofont-music-notes:before {\n  content: \"\\f07c\"; }\n.icofont-music:before {\n  content: \"\\f07d\"; }\n.icofont-mustache:before {\n  content: \"\\f07e\"; }\n.icofont-mute-volume:before {\n  content: \"\\f07f\"; }\n.icofont-navigation-menu:before {\n  content: \"\\f080\"; }\n.icofont-navigation:before {\n  content: \"\\f081\"; }\n.icofont-network-tower:before {\n  content: \"\\f082\"; }\n.icofont-network:before {\n  content: \"\\f083\"; }\n.icofont-news:before {\n  content: \"\\f084\"; }\n.icofont-newspaper:before {\n  content: \"\\f085\"; }\n.icofont-no-smoking:before {\n  content: \"\\f086\"; }\n.icofont-not-allowed:before {\n  content: \"\\f087\"; }\n.icofont-notebook:before {\n  content: \"\\f088\"; }\n.icofont-notepad:before {\n  content: \"\\f089\"; }\n.icofont-notification:before {\n  content: \"\\f08a\"; }\n.icofont-numbered:before {\n  content: \"\\f08b\"; }\n.icofont-opposite:before {\n  content: \"\\f08c\"; }\n.icofont-optic:before {\n  content: \"\\f08d\"; }\n.icofont-options:before {\n  content: \"\\f08e\"; }\n.icofont-package:before {\n  content: \"\\f08f\"; }\n.icofont-page:before {\n  content: \"\\f090\"; }\n.icofont-paint:before {\n  content: \"\\f091\"; }\n.icofont-paper-plane:before {\n  content: \"\\f092\"; }\n.icofont-paperclip:before {\n  content: \"\\f093\"; }\n.icofont-papers:before {\n  content: \"\\f094\"; }\n.icofont-paw:before {\n  content: \"\\f095\"; }\n.icofont-pay:before {\n  content: \"\\f096\"; }\n.icofont-pen:before {\n  content: \"\\f097\"; }\n.icofont-pencil:before {\n  content: \"\\f098\"; }\n.icofont-penguin-linux:before {\n  content: \"\\f099\"; }\n.icofont-pestle:before {\n  content: \"\\f09a\"; }\n.icofont-phone-circle:before {\n  content: \"\\f09b\"; }\n.icofont-phone:before {\n  content: \"\\f09c\"; }\n.icofont-picture:before {\n  content: \"\\f09d\"; }\n.icofont-pie:before {\n  content: \"\\f09e\"; }\n.icofont-pine:before {\n  content: \"\\f09f\"; }\n.icofont-pixels:before {\n  content: \"\\f0a0\"; }\n.icofont-play:before {\n  content: \"\\f0a1\"; }\n.icofont-plugin:before {\n  content: \"\\f0a2\"; }\n.icofont-plus-circle:before {\n  content: \"\\f0a3\"; }\n.icofont-plus-square:before {\n  content: \"\\f0a4\"; }\n.icofont-plus:before {\n  content: \"\\f0a5\"; }\n.icofont-polygonal:before {\n  content: \"\\f0a6\"; }\n.icofont-power:before {\n  content: \"\\f0a7\"; }\n.icofont-presentation:before {\n  content: \"\\f0a8\"; }\n.icofont-price:before {\n  content: \"\\f0a9\"; }\n.icofont-print:before {\n  content: \"\\f0aa\"; }\n.icofont-puzzle:before {\n  content: \"\\f0ab\"; }\n.icofont-qr-code:before {\n  content: \"\\f0ac\"; }\n.icofont-queen:before {\n  content: \"\\f0ad\"; }\n.icofont-question-circle:before {\n  content: \"\\f0ae\"; }\n.icofont-question-square:before {\n  content: \"\\f0af\"; }\n.icofont-question:before {\n  content: \"\\f0b0\"; }\n.icofont-quote-left:before {\n  content: \"\\f0b1\"; }\n.icofont-quote-right:before {\n  content: \"\\f0b2\"; }\n.icofont-radio:before {\n  content: \"\\f0b3\"; }\n.icofont-random:before {\n  content: \"\\f0b4\"; }\n.icofont-recycle:before {\n  content: \"\\f0b5\"; }\n.icofont-refresh:before {\n  content: \"\\f0b6\"; }\n.icofont-repair:before {\n  content: \"\\f0b7\"; }\n.icofont-reply-all:before {\n  content: \"\\f0b8\"; }\n.icofont-reply:before {\n  content: \"\\f0b9\"; }\n.icofont-resize:before {\n  content: \"\\f0ba\"; }\n.icofont-responsive:before {\n  content: \"\\f0bb\"; }\n.icofont-retweet:before {\n  content: \"\\f0bc\"; }\n.icofont-road:before {\n  content: \"\\f0bd\"; }\n.icofont-robot:before {\n  content: \"\\f0be\"; }\n.icofont-rocket:before {\n  content: \"\\f0bf\"; }\n.icofont-royal:before {\n  content: \"\\f0c0\"; }\n.icofont-rss-feed:before {\n  content: \"\\f0c1\"; }\n.icofont-safety:before {\n  content: \"\\f0c2\"; }\n.icofont-sale-discount:before {\n  content: \"\\f0c3\"; }\n.icofont-satellite:before {\n  content: \"\\f0c4\"; }\n.icofont-send-mail:before {\n  content: \"\\f0c5\"; }\n.icofont-server:before {\n  content: \"\\f0c6\"; }\n.icofont-settings:before {\n  content: \"\\f0c7\"; }\n.icofont-share-alt:before {\n  content: \"\\f0c8\"; }\n.icofont-share-boxed:before {\n  content: \"\\f0c9\"; }\n.icofont-share:before {\n  content: \"\\f0ca\"; }\n.icofont-shield:before {\n  content: \"\\f0cb\"; }\n.icofont-ship:before {\n  content: \"\\f0cc\"; }\n.icofont-shopping-cart:before {\n  content: \"\\f0cd\"; }\n.icofont-sign-in:before {\n  content: \"\\f0ce\"; }\n.icofont-sign-out:before {\n  content: \"\\f0cf\"; }\n.icofont-signal:before {\n  content: \"\\f0d0\"; }\n.icofont-site-map:before {\n  content: \"\\f0d1\"; }\n.icofont-smart-phone:before {\n  content: \"\\f0d2\"; }\n.icofont-soccer:before {\n  content: \"\\f0d3\"; }\n.icofont-sort-alt:before {\n  content: \"\\f0d4\"; }\n.icofont-sort:before {\n  content: \"\\f0d5\"; }\n.icofont-space:before {\n  content: \"\\f0d6\"; }\n.icofont-spanner:before {\n  content: \"\\f0d7\"; }\n.icofont-speech-comments:before {\n  content: \"\\f0d8\"; }\n.icofont-speed-meter:before {\n  content: \"\\f0d9\"; }\n.icofont-spinner-alt-1:before {\n  content: \"\\f0da\"; }\n.icofont-spinner-alt-2:before {\n  content: \"\\f0db\"; }\n.icofont-spinner-alt-3:before {\n  content: \"\\f0dc\"; }\n.icofont-spinner-alt-4:before {\n  content: \"\\f0dd\"; }\n.icofont-spinner-alt-5:before {\n  content: \"\\f0de\"; }\n.icofont-spinner-alt-6:before {\n  content: \"\\f0df\"; }\n.icofont-spinner:before {\n  content: \"\\f0e0\"; }\n.icofont-spreadsheet:before {\n  content: \"\\f0e1\"; }\n.icofont-square:before {\n  content: \"\\f0e2\"; }\n.icofont-ssl-security:before {\n  content: \"\\f0e3\"; }\n.icofont-star-alt-1:before {\n  content: \"\\f0e4\"; }\n.icofont-star-alt-2:before {\n  content: \"\\f0e5\"; }\n.icofont-star:before {\n  content: \"\\f0e6\"; }\n.icofont-street-view:before {\n  content: \"\\f0e7\"; }\n.icofont-sun:before {\n  content: \"\\f0e8\"; }\n.icofont-support-faq:before {\n  content: \"\\f0e9\"; }\n.icofont-tack-pin:before {\n  content: \"\\f0ea\"; }\n.icofont-tag:before {\n  content: \"\\f0eb\"; }\n.icofont-tags:before {\n  content: \"\\f0ec\"; }\n.icofont-tasks:before {\n  content: \"\\f0ed\"; }\n.icofont-telephone:before {\n  content: \"\\f0ee\"; }\n.icofont-telescope:before {\n  content: \"\\f0ef\"; }\n.icofont-terminal:before {\n  content: \"\\f0f0\"; }\n.icofont-thumbs-down:before {\n  content: \"\\f0f1\"; }\n.icofont-thumbs-up:before {\n  content: \"\\f0f2\"; }\n.icofont-tick-boxed:before {\n  content: \"\\f0f3\"; }\n.icofont-tick-mark:before {\n  content: \"\\f0f4\"; }\n.icofont-ticket:before {\n  content: \"\\f0f5\"; }\n.icofont-tie:before {\n  content: \"\\f0f6\"; }\n.icofont-toggle-off:before {\n  content: \"\\f0f7\"; }\n.icofont-toggle-on:before {\n  content: \"\\f0f8\"; }\n.icofont-tools:before {\n  content: \"\\f0f9\"; }\n.icofont-transparent:before {\n  content: \"\\f0fa\"; }\n.icofont-tree:before {\n  content: \"\\f0fb\"; }\n.icofont-umbrella:before {\n  content: \"\\f0fc\"; }\n.icofont-unlock:before {\n  content: \"\\f0fd\"; }\n.icofont-unlocked:before {\n  content: \"\\f0fe\"; }\n.icofont-upload-alt:before {\n  content: \"\\f0ff\"; }\n.icofont-upload:before {\n  content: \"\\f100\"; }\n.icofont-usb-drive:before {\n  content: \"\\f101\"; }\n.icofont-usb:before {\n  content: \"\\f102\"; }\n.icofont-vector-path:before {\n  content: \"\\f103\"; }\n.icofont-verification-check:before {\n  content: \"\\f104\"; }\n.icofont-video-clapper:before {\n  content: \"\\f105\"; }\n.icofont-video:before {\n  content: \"\\f106\"; }\n.icofont-volume-down:before {\n  content: \"\\f107\"; }\n.icofont-volume-off:before {\n  content: \"\\f108\"; }\n.icofont-volume-up:before {\n  content: \"\\f109\"; }\n.icofont-wall-clock:before {\n  content: \"\\f10a\"; }\n.icofont-wall:before {\n  content: \"\\f10b\"; }\n.icofont-wallet:before {\n  content: \"\\f10c\"; }\n.icofont-warning-alt:before {\n  content: \"\\f10d\"; }\n.icofont-warning:before {\n  content: \"\\f10e\"; }\n.icofont-water-drop:before {\n  content: \"\\f10f\"; }\n.icofont-web:before {\n  content: \"\\f110\"; }\n.icofont-wheelchair:before {\n  content: \"\\f111\"; }\n.icofont-wifi-alt:before {\n  content: \"\\f112\"; }\n.icofont-wifi:before {\n  content: \"\\f113\"; }\n.icofont-world:before {\n  content: \"\\f114\"; }\n.icofont-zigzag:before {\n  content: \"\\f115\"; }\n.icofont-zipped:before {\n  content: \"\\f116\"; }\n.icofont-social-500px:before {\n  content: \"\\f117\"; }\n.icofont-social-baidu-tieba:before {\n  content: \"\\f118\"; }\n.icofont-social-bbm-messenger:before {\n  content: \"\\f119\"; }\n.icofont-social-delicious:before {\n  content: \"\\f11a\"; }\n.icofont-social-dribbble:before {\n  content: \"\\f11b\"; }\n.icofont-social-facebook-messenger:before {\n  content: \"\\f11c\"; }\n.icofont-social-flikr:before {\n  content: \"\\f11d\"; }\n.icofont-social-foursquare:before {\n  content: \"\\f11e\"; }\n.icofont-social-google-hangouts:before {\n  content: \"\\f11f\"; }\n.icofont-social-kakaotalk:before {\n  content: \"\\f120\"; }\n.icofont-social-kik:before {\n  content: \"\\f121\"; }\n.icofont-social-kiwibox:before {\n  content: \"\\f122\"; }\n.icofont-social-linkedin:before {\n  content: \"\\f123\"; }\n.icofont-social-meetme:before {\n  content: \"\\f124\"; }\n.icofont-social-odnoklassniki:before {\n  content: \"\\f125\"; }\n.icofont-social-photobucket:before {\n  content: \"\\f126\"; }\n.icofont-social-qq:before {\n  content: \"\\f127\"; }\n.icofont-social-renren:before {\n  content: \"\\f128\"; }\n.icofont-social-slack:before {\n  content: \"\\f129\"; }\n.icofont-social-slidshare:before {\n  content: \"\\f12a\"; }\n.icofont-social-snapchat:before {\n  content: \"\\f12b\"; }\n.icofont-social-soundcloud:before {\n  content: \"\\f12c\"; }\n.icofont-social-spotify:before {\n  content: \"\\f12d\"; }\n.icofont-social-stack-exchange:before {\n  content: \"\\f12e\"; }\n.icofont-social-stack-overflow:before {\n  content: \"\\f12f\"; }\n.icofont-social-tagged:before {\n  content: \"\\f130\"; }\n.icofont-social-trello:before {\n  content: \"\\f131\"; }\n.icofont-social-twitch:before {\n  content: \"\\f132\"; }\n.icofont-social-vk:before {\n  content: \"\\f133\"; }\n.icofont-social-weibo:before {\n  content: \"\\f134\"; }\n.icofont-social-whatsapp:before {\n  content: \"\\f135\"; }\n.icofont-social-youku:before {\n  content: \"\\f136\"; }\n.icofont-social-youtube-play:before {\n  content: \"\\f137\"; }\n.icofont-social-youtube:before {\n  content: \"\\f138\"; }\n.icofont-brand-xiaomi:before {\n  content: \"\\f139\"; }\n/*Font size*/\n.icofont-lg {\n  font-size: 1.33333333em;\n  line-height: .75em;\n  vertical-align: -15%; }\n.icofont-2x {\n  font-size: 2em; }\n.icofont-3x {\n  font-size: 3em; }\n.icofont-4x {\n  font-size: 4em; }\n.icofont-5x {\n  font-size: 5em; }\n.icofont-fw {\n  display: inline-block;\n  width: 1.28571429em;\n  text-align: center;\n  width: 1.28571429em;\n  text-align: center; }\n/*Fixed Width Icons*/\n/*Custom list icons*/\n.icofont-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n.icofont-ul > li {\n    position: relative; }\n.icofont-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: .14285714em;\n  text-align: center; }\n/*Animation*/\n.icofont-rotate {\n  -webkit-animation: icofont-rotate 2s infinite linear;\n  animation: icofont-rotate 2s infinite linear; }\n@-webkit-keyframes icofont-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n@keyframes icofont-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n"

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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MyData\Support\Nagesh\themeforest-able\Angular\Angular-6\Template\Full\Vertical\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map