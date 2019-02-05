(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-login-basic-login-module"],{

/***/ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: BasicLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginRoutingModule", function() { return BasicLoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/theme/auth/login/basic-login/basic-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _basic_login_component__WEBPACK_IMPORTED_MODULE_2__["BasicLoginComponent"],
        data: {
            title: 'Simple Login'
        }
    }
];
var BasicLoginRoutingModule = /** @class */ (function () {
    function BasicLoginRoutingModule() {
    }
    BasicLoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicLoginRoutingModule);
    return BasicLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\n  <!-- Container-fluid starts -->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- Authentication card start -->\n        <form class=\"md-float-material form-material\" action=\"javascript:\">\n          <div class=\"auth-box card\">\n            <div class=\"card-block\">\n              <div class=\"row m-b-20\">\n                <div class=\"col-md-12\">\n                  <div class=\"text-center\">\n                    <img src=\"assets/images/login_logo.png\" alt=\"logo.png\">\n                  </div>\n                  <h6 class=\"text-center text-success p-t-30\">Sign In to your account</h6>\n                </div>\n              </div>\n              <div class=\"form-group form-primary\">\n                <input type=\"text\" name=\"email\" class=\"form-control\" required=\"\">\n                <span class=\"form-bar\"></span>\n                <label class=\"float-label text-muted\">Card ID</label>\n              </div>\n              <div class=\"form-group form-primary\">\n                <input type=\"password\" name=\"password\" class=\"form-control\" required=\"\">\n                <span class=\"form-bar\"></span>\n                <label class=\"float-label text-muted\">Password</label>\n              </div>\n              <div class=\"row m-t-25 text-left\">\n                <div class=\"col-12\">\n                  <div class=\"checkbox-fade fade-in-success d-\">\n                    <label>\n                      <input type=\"checkbox\" value=\"\" class=\"text-success\">\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check text-success\"></i></span>\n                      <span class=\"text-success\">Remember me</span>\n                    </label>\n                  </div>\n                  <!--<div class=\"forgot-phone text-right float-right\">\n                    <a [routerLink]=\"['/auth/forgot']\" class=\"text-right f-w-600 text-primary\"> Forgot Password?</a>\n                  </div>-->\n                </div>\n              </div>\n              <div class=\"row m-t-30\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" [routerLink]=\"['/cibc/trading']\"\n                          class=\"btn btn-success btn-md btn-block text-center m-b-20 ripple light color-primary\">\n                    LOG IN\n                    </button>\n                </div>\n              </div>\n              <hr/>\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <p class=\"text-inverse text-left\">\n                    <span class=\"text-muted\">Dont have an account?</span>\n                    <a class=\"text-success\">\n                    Sign up now</a>\n                  </p>\n                </div>\n                <div class=\"col-md-2\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <!-- end of form -->\n      </div>\n      <!-- end of col-sm-12 -->\n    </div>\n    <!-- end of row -->\n  </div>\n  <!-- end of container-fluid -->\n</section>\n"

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginComponent", function() { return BasicLoginComponent; });
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

var BasicLoginComponent = /** @class */ (function () {
    function BasicLoginComponent() {
    }
    BasicLoginComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    BasicLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-login',
            template: __webpack_require__(/*! ./basic-login.component.html */ "./src/app/theme/auth/login/basic-login/basic-login.component.html"),
            styles: [__webpack_require__(/*! ./basic-login.component.scss */ "./src/app/theme/auth/login/basic-login/basic-login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicLoginComponent);
    return BasicLoginComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/login/basic-login/basic-login.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/auth/login/basic-login/basic-login.module.ts ***!
  \********************************************************************/
/*! exports provided: BasicLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicLoginModule", function() { return BasicLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-login.component */ "./src/app/theme/auth/login/basic-login/basic-login.component.ts");
/* harmony import */ var _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-login-routing.module */ "./src/app/theme/auth/login/basic-login/basic-login-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicLoginModule = /** @class */ (function () {
    function BasicLoginModule() {
    }
    BasicLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _basic_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["BasicLoginRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_basic_login_component__WEBPACK_IMPORTED_MODULE_2__["BasicLoginComponent"]]
        })
    ], BasicLoginModule);
    return BasicLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-login-basic-login-module.js.map