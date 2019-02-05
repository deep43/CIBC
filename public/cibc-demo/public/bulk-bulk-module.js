(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bulk-bulk-module"],{

/***/ "./src/app/theme/dashboard/bulk/bulk-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/dashboard/bulk/bulk-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BulkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkRoutingModule", function() { return BulkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bulk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk.component */ "./src/app/theme/dashboard/bulk/bulk.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _bulk_component__WEBPACK_IMPORTED_MODULE_2__["BulkComponent"],
        data: {
            title: 'Bulk',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var BulkRoutingModule = /** @class */ (function () {
    function BulkRoutingModule() {
    }
    BulkRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BulkRoutingModule);
    return BulkRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/bulk/bulk.component.html":
/*!**********************************************************!*\
  !*** ./src/app/theme/dashboard/bulk/bulk.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [title]=\"\" [classHeader]=\"true\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-9\">\r\n            <label class=\"float-left\">\r\n              <label class=\"label label-inverse-info-border label-lg\">Curreny Pair: <span\r\n                class=\"p-l-10\">GBPEUR</span></label>\r\n              <label class=\"label label-inverse-info-border label-lg\">\r\n                <i class=\"icofont icofont-exchange\"></i>\r\n              </label>\r\n              <label class=\"label label-inverse-info-border label-lg\">Trade Currency</label>\r\n            </label>\r\n          </div>\r\n            <div class=\"col-3 col-sm-1 p-r-0\">\r\n              <label class=\"p-t-5\">Search: </label>\r\n            </div>\r\n            <div class=\"col-7 col-sm-2 p-l-0\">\r\n              <div class=\"form-group\">\r\n                <input\r\n                  type='text'\r\n                  class=\"form-control input-sm\"\r\n                  placeholder='Search Name'\r\n                  (keyup)='updateFilterTop($event)'\r\n                />\r\n              </div>\r\n            <!--<div class=\"col-md-3\">\r\n              <label>Search: </label>\r\n            </div>\r\n            <div>\r\n              <label class=\"dt-cust-search float-right\">\r\n                <div class=\"form-group\">\r\n                  <input\r\n                    type='text'\r\n                    class=\"form-control input-sm m-l-10\"\r\n                    placeholder='Search Name'\r\n                    (keyup)='updateFilterTop($event)'\r\n                  />\r\n                </div>\r\n              </label>\r\n            </div>-->\r\n          </div>\r\n        </div>\r\n        <ngx-datatable\r\n          #table\r\n          class='data-table'\r\n          [columns]=\"columns\"\r\n          [columnMode]=\"'force'\"\r\n          [scrollbarH]=\"true\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"50\"\r\n          [limit]=\"10\"\r\n          [rows]='rowsFilterTop'>\r\n        </ngx-datatable>\r\n      </app-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <app-card [cardClass]=\"'tab-card'\">\r\n        <div class=\"md-tabs\">\r\n          <ngb-tabset (tabChange)=\"onClickTab()\">\r\n            <ngb-tab title=\"Blotter\">\r\n              <ng-template ngbTabContent>\r\n                <app-card [title]=\"\" [classHeader]=\"true\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-3 col-sm-1 p-r-0\">\r\n                      <label class=\"p-r-10 filter-on-mob p-t-5\">Filter: </label>\r\n                    </div>\r\n                    <div class=\"col-7 col-sm-2 p-l-0 m-b-10\">\r\n                      <select name=\"select\" class=\"form-control form-control-inverse\">\r\n                        <option value=\"MyTrades\">My Trades</option>\r\n                        <option value=\"AllTrades\">All Trades</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"col-2 col-sm-6\"></div>\r\n                    <div class=\"col-3 col-sm-1 p-r-0\">\r\n                      <label class=\"p-t-5\">Search: </label>\r\n                    </div>\r\n                    <div class=\"col-7 col-sm-2 p-l-0\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type='text'\r\n                          class=\"form-control input-sm\"\r\n                          placeholder='Search Name'\r\n                          (keyup)='updateFilter($event)'\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ngx-datatable\r\n                    #table\r\n                    class='data-table'\r\n                    [columns]=\"columns\"\r\n                    [columnMode]=\"'force'\"\r\n                    [scrollbarH]=\"true\"\r\n                    [headerHeight]=\"50\"\r\n                    [footerHeight]=\"50\"\r\n                    [rowHeight]=\"50\"\r\n                    [limit]=\"10\"\r\n                    [rows]='rowsFilter'>\r\n                  </ngx-datatable>\r\n                </app-card>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Trade Search\">\r\n              <ng-template ngbTabContent>\r\n                <ngx-datatable\r\n                  #table\r\n                  class='data-table'\r\n                  [columns]=\"tradeColumns\"\r\n                  [columnMode]=\"'force'\"\r\n                  [scrollbarH]=\"true\"\r\n                  [headerHeight]=\"50\"\r\n                  [footerHeight]=\"50\"\r\n                  [rowHeight]=\"50\"\r\n                  [rowClass]=\"getRowClass\"\r\n                  [limit]=\"10\"\r\n                  [rows]='rowsTradeFilter'>\r\n                </ngx-datatable>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n      </app-card>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/bulk/bulk.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/theme/dashboard/bulk/bulk.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  border: 1px solid #cccccc !important; }\n\n.form-control:hover {\n  border: 1px solid #cccccc !important; }\n\n.form-control:focus {\n  border: 1px solid #cccccc !important; }\n"

/***/ }),

/***/ "./src/app/theme/dashboard/bulk/bulk.component.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/dashboard/bulk/bulk.component.ts ***!
  \********************************************************/
/*! exports provided: BulkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkComponent", function() { return BulkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/amchart/amcharts.js */ "./src/assets/charts/amchart/amcharts.js");
/* harmony import */ var _assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_amcharts_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/amchart/gauge.js */ "./src/assets/charts/amchart/gauge.js");
/* harmony import */ var _assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_gauge_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/amchart/pie.js */ "./src/assets/charts/amchart/pie.js");
/* harmony import */ var _assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_pie_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/amchart/serial.js */ "./src/assets/charts/amchart/serial.js");
/* harmony import */ var _assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_serial_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/charts/amchart/light.js */ "./src/assets/charts/amchart/light.js");
/* harmony import */ var _assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_light_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/charts/amchart/ammap.js */ "./src/assets/charts/amchart/ammap.js");
/* harmony import */ var _assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_ammap_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/charts/amchart/usaLow.js */ "./src/assets/charts/amchart/usaLow.js");
/* harmony import */ var _assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_amchart_usaLow_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.js */ "./src/assets/charts/float/jquery.flot.js");
/* harmony import */ var _assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.categories.js */ "./src/assets/charts/float/jquery.flot.categories.js");
/* harmony import */ var _assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/charts/float/curvedLines.js */ "./src/assets/charts/float/curvedLines.js");
/* harmony import */ var _assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.tooltip.min.js */ "./src/assets/charts/float/jquery.flot.tooltip.min.js");
/* harmony import */ var _assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var BulkComponent = /** @class */ (function () {
    function BulkComponent() {
        var _this = this;
        this.chartOption = {
            legend: {
                show: false
            },
            series: {
                label: '',
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: 'x : %x | y : %y'
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };
        this.columns = [
            { name: 'Deal Ref No.', prop: 'Deal_No' },
            { name: 'Product', prop: 'Product' },
            { name: 'Buy/Sell', prop: 'Buy_Sell' },
            { name: 'CCY Pair', prop: 'CCY_Pair' },
            { name: 'CCY Sold', prop: 'CCY_sold' },
            { name: 'Amount Sold', prop: 'Amt_sold' },
            { name: 'CCY Bought', prop: 'CCY_bought' },
            { name: 'Amount Bought', prop: 'Amt_bought' },
            { name: 'Start Date', prop: 'date' },
            { name: 'Traded On', prop: 'Traded_On' },
            { name: 'Mature On', prop: 'Mature_on' },
            { name: 'Status', prop: 'Status' }
        ];
        this.tradeColumns = [
            { name: 'Trading Enity', prop: 'Trading_Entity' },
            { name: 'Deal Ref No.', prop: 'Deal_No' },
            { name: 'Product', prop: 'Product' },
            { name: 'Buy Sell', prop: 'Buy_Sell' },
            { name: 'CCY Pair', prop: 'CCY_Pair' },
            { name: 'CCY Sold', prop: 'CCY_sold' },
            { name: 'Amount Sold', prop: 'Amt_sold' },
            { name: 'CCY Bought', prop: 'CCY_bought' },
            { name: 'Amount Bought', prop: 'Amt_bought' },
            { name: 'Trade date and Time', prop: 'Traded_On' },
            { name: 'Mature On', prop: 'Mature_on' },
            { name: 'Source', prop: 'SOURCE' },
            { name: 'Split Ref No', prop: 'Split_Ref_No' },
            { name: 'Invoice No', prop: 'Invoice_No' },
            { name: 'Beneficiary', prop: 'Beneficiary' },
        ];
        this.rowsFilter = [];
        this.tempFilter = [];
        this.rowsFilterTop = [];
        this.tempFilterTop = [];
        this.rowsTradeFilter = [];
        this.tempTradeFilter = [];
        this.getRowClass = function (row) {
            if (row.Status && row.Status.trim().toLocaleString() === 'settlement required') {
                console.log('hi');
            }
            return {
                'row-color': (row.Status && row.Status.trim().toLowerCase() === 'settlement required')
            };
        };
        this.fetchFilterData(function (data) {
            // cache our list
            _this.tempFilter = data.slice();
            _this.tempFilterTop = data.slice();
            // push our inital complete list
            _this.rowsFilter = data;
            _this.rowsFilterTop = data;
        });
        this.fetchTradeFilterData(function (data) {
            // cache our list
            _this.tempTradeFilter = data.slice();
            // push our inital complete list
            _this.rowsTradeFilter = data;
        });
    }
    BulkComponent.prototype.onClickTab = function () {
        var _this = this;
        setTimeout(function () {
            _this.chartEcommerce = AmCharts.makeChart('seo-ecommerce-barchart', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 0,
                'marginRight': 0,
                'dataProvider': [{
                        'year': '1950',
                        'value': -0.307
                    }, {
                        'year': '1951',
                        'value': -0.168
                    }, {
                        'year': '1952',
                        'value': -0.073
                    }, {
                        'year': '1953',
                        'value': -0.027
                    }, {
                        'year': '1954',
                        'value': -0.251
                    }, {
                        'year': '1955',
                        'value': -0.281
                    }, {
                        'year': '1956',
                        'value': -0.348
                    }, {
                        'year': '1957',
                        'value': -0.074
                    }, {
                        'year': '1958',
                        'value': -0.011
                    }, {
                        'year': '1959',
                        'value': -0.074
                    }, {
                        'year': '1960',
                        'value': -0.124
                    }, {
                        'year': '1961',
                        'value': -0.024
                    }, {
                        'year': '1962',
                        'value': -0.022
                    }, {
                        'year': '1963',
                        'value': 0
                    }, {
                        'year': '1964',
                        'value': -0.296
                    }, {
                        'year': '1965',
                        'value': -0.217
                    }, {
                        'year': '1966',
                        'value': -0.147
                    }, {
                        'year': '1967',
                        'value': -0.15
                    }, {
                        'year': '1968',
                        'value': -0.16
                    }, {
                        'year': '1969',
                        'value': -0.011
                    }, {
                        'year': '1970',
                        'value': -0.068
                    }, {
                        'year': '1971',
                        'value': -0.19
                    }, {
                        'year': '1972',
                        'value': -0.056
                    }, {
                        'year': '1973',
                        'value': 0.077
                    }, {
                        'year': '1974',
                        'value': -0.213
                    }, {
                        'year': '1975',
                        'value': -0.17
                    }, {
                        'year': '1976',
                        'value': -0.254
                    }, {
                        'year': '1977',
                        'value': 0.019
                    }, {
                        'year': '1978',
                        'value': -0.063
                    }, {
                        'year': '1979',
                        'value': 0.05
                    }, {
                        'year': '1980',
                        'value': 0.077
                    }, {
                        'year': '1981',
                        'value': 0.12
                    }, {
                        'year': '1982',
                        'value': 0.011
                    }, {
                        'year': '1983',
                        'value': 0.177
                    }, {
                        'year': '1984',
                        'value': -0.021
                    }, {
                        'year': '1985',
                        'value': -0.037
                    }, {
                        'year': '1986',
                        'value': 0.03
                    }, {
                        'year': '1987',
                        'value': 0.179
                    }, {
                        'year': '1988',
                        'value': 0.18
                    }, {
                        'year': '1989',
                        'value': 0.104
                    }, {
                        'year': '1990',
                        'value': 0.255
                    }, {
                        'year': '1991',
                        'value': 0.21
                    }, {
                        'year': '1992',
                        'value': 0.065
                    }, {
                        'year': '1993',
                        'value': 0.11
                    }, {
                        'year': '1994',
                        'value': 0.172
                    }, {
                        'year': '1995',
                        'value': 0.269
                    }, {
                        'year': '1996',
                        'value': 0.141
                    }, {
                        'year': '1997',
                        'value': 0.353
                    }, {
                        'year': '1998',
                        'value': 0.548
                    }, {
                        'year': '1999',
                        'value': 0.298
                    }, {
                        'year': '2000',
                        'value': 0.267
                    }, {
                        'year': '2001',
                        'value': 0.411
                    }, {
                        'year': '2002',
                        'value': 0.462
                    }, {
                        'year': '2003',
                        'value': 0.47
                    }, {
                        'year': '2004',
                        'value': 0.445
                    }, {
                        'year': '2005',
                        'value': 0.47
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        // 'gridAlpha': 0,
                        'dashLength': 6,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'bulletSize': 8,
                        // 'fillAlphas': 0.1,
                        'lineColor': '#448aff',
                        'lineThickness': 2,
                        'negativeLineColor': '#ff5252',
                        'type': 'smoothedLine',
                        'valueField': 'value'
                    }],
                'chartScrollbar': {
                    'graph': 'g1',
                    'gridAlpha': 0,
                    'color': '#888888',
                    'scrollbarHeight': 55,
                    'backgroundAlpha': 0,
                    'selectedBackgroundAlpha': 0.1,
                    'selectedBackgroundColor': '#888888',
                    'graphFillAlpha': 0,
                    'autoGridCount': true,
                    'selectedGraphFillAlpha': 0,
                    'graphLineAlpha': 0.2,
                    'graphLineColor': '#c2c2c2',
                    'selectedGraphLineColor': '#888888',
                    'selectedGraphLineAlpha': 1
                },
                'chartCursor': {
                    'categoryBalloonDateFormat': 'YYYY',
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.5,
                    'fullWidth': true
                },
                'dataDateFormat': 'YYYY',
                'categoryField': 'year',
                'categoryAxis': {
                    'minPeriod': 'YYYY',
                    'gridAlpha': 0,
                    'parseDates': true,
                },
            });
        }, 75);
    };
    BulkComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilter.filter(function (d) {
            return d.Deal_No.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BulkComponent.prototype.updateFilterTop = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempFilterTop.filter(function (d) {
            return d.Deal_No.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rowsFilterTop = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    BulkComponent.prototype.fetchFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/blotter_data.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BulkComponent.prototype.fetchTradeFilterData = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/trade_search_data.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    BulkComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.chartEcommerce = AmCharts.makeChart('seo-ecommerce-barchart', {
                'type': 'serial',
                'theme': 'light',
                'marginTop': 0,
                'marginRight': 0,
                'dataProvider': [{
                        'year': '1950',
                        'value': -0.307
                    }, {
                        'year': '1951',
                        'value': -0.168
                    }, {
                        'year': '1952',
                        'value': -0.073
                    }, {
                        'year': '1953',
                        'value': -0.027
                    }, {
                        'year': '1954',
                        'value': -0.251
                    }, {
                        'year': '1955',
                        'value': -0.281
                    }, {
                        'year': '1956',
                        'value': -0.348
                    }, {
                        'year': '1957',
                        'value': -0.074
                    }, {
                        'year': '1958',
                        'value': -0.011
                    }, {
                        'year': '1959',
                        'value': -0.074
                    }, {
                        'year': '1960',
                        'value': -0.124
                    }, {
                        'year': '1961',
                        'value': -0.024
                    }, {
                        'year': '1962',
                        'value': -0.022
                    }, {
                        'year': '1963',
                        'value': 0
                    }, {
                        'year': '1964',
                        'value': -0.296
                    }, {
                        'year': '1965',
                        'value': -0.217
                    }, {
                        'year': '1966',
                        'value': -0.147
                    }, {
                        'year': '1967',
                        'value': -0.15
                    }, {
                        'year': '1968',
                        'value': -0.16
                    }, {
                        'year': '1969',
                        'value': -0.011
                    }, {
                        'year': '1970',
                        'value': -0.068
                    }, {
                        'year': '1971',
                        'value': -0.19
                    }, {
                        'year': '1972',
                        'value': -0.056
                    }, {
                        'year': '1973',
                        'value': 0.077
                    }, {
                        'year': '1974',
                        'value': -0.213
                    }, {
                        'year': '1975',
                        'value': -0.17
                    }, {
                        'year': '1976',
                        'value': -0.254
                    }, {
                        'year': '1977',
                        'value': 0.019
                    }, {
                        'year': '1978',
                        'value': -0.063
                    }, {
                        'year': '1979',
                        'value': 0.05
                    }, {
                        'year': '1980',
                        'value': 0.077
                    }, {
                        'year': '1981',
                        'value': 0.12
                    }, {
                        'year': '1982',
                        'value': 0.011
                    }, {
                        'year': '1983',
                        'value': 0.177
                    }, {
                        'year': '1984',
                        'value': -0.021
                    }, {
                        'year': '1985',
                        'value': -0.037
                    }, {
                        'year': '1986',
                        'value': 0.03
                    }, {
                        'year': '1987',
                        'value': 0.179
                    }, {
                        'year': '1988',
                        'value': 0.18
                    }, {
                        'year': '1989',
                        'value': 0.104
                    }, {
                        'year': '1990',
                        'value': 0.255
                    }, {
                        'year': '1991',
                        'value': 0.21
                    }, {
                        'year': '1992',
                        'value': 0.065
                    }, {
                        'year': '1993',
                        'value': 0.11
                    }, {
                        'year': '1994',
                        'value': 0.172
                    }, {
                        'year': '1995',
                        'value': 0.269
                    }, {
                        'year': '1996',
                        'value': 0.141
                    }, {
                        'year': '1997',
                        'value': 0.353
                    }, {
                        'year': '1998',
                        'value': 0.548
                    }, {
                        'year': '1999',
                        'value': 0.298
                    }, {
                        'year': '2000',
                        'value': 0.267
                    }, {
                        'year': '2001',
                        'value': 0.411
                    }, {
                        'year': '2002',
                        'value': 0.462
                    }, {
                        'year': '2003',
                        'value': 0.47
                    }, {
                        'year': '2004',
                        'value': 0.445
                    }, {
                        'year': '2005',
                        'value': 0.47
                    }],
                'valueAxes': [{
                        'axisAlpha': 0,
                        // 'gridAlpha': 0,
                        'dashLength': 6,
                        'position': 'left'
                    }],
                'graphs': [{
                        'id': 'g1',
                        'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
                        'bullet': 'round',
                        'bulletSize': 8,
                        // 'fillAlphas': 0.1,
                        'lineColor': '#448aff',
                        'lineThickness': 2,
                        'negativeLineColor': '#ff5252',
                        'type': 'smoothedLine',
                        'valueField': 'value'
                    }],
                'chartScrollbar': {
                    'graph': 'g1',
                    'gridAlpha': 0,
                    'color': '#888888',
                    'scrollbarHeight': 55,
                    'backgroundAlpha': 0,
                    'selectedBackgroundAlpha': 0.1,
                    'selectedBackgroundColor': '#888888',
                    'graphFillAlpha': 0,
                    'autoGridCount': true,
                    'selectedGraphFillAlpha': 0,
                    'graphLineAlpha': 0.2,
                    'graphLineColor': '#c2c2c2',
                    'selectedGraphLineColor': '#888888',
                    'selectedGraphLineAlpha': 1
                },
                'chartCursor': {
                    'categoryBalloonDateFormat': 'YYYY',
                    'cursorAlpha': 0,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'valueLineAlpha': 0.5,
                    'fullWidth': true
                },
                'dataDateFormat': 'YYYY',
                'categoryField': 'year',
                'categoryAxis': {
                    'minPeriod': 'YYYY',
                    'gridAlpha': 0,
                    'parseDates': true,
                },
            });
            /*$.plot($('#seo-anlytics1'), [{
              data: [
                [0, 10],
                [1, 25],
                [2, 15],
                [3, 26],
                [4, 15],
                [5, 15],
                [6, 20],
                [7, 25],
                [8, 20],
                [9, 25],
                [10, 10],
                [11, 12],
                [12, 27],
                [13, 1],
              ],
              color: '#448aff',
              lines: {
                show: true,
                fill: false,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#448aff'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);
      
            $.plot($('#seo-anlytics2'), [{
              data: [
                [0, 10],
                [1, 15],
                [2, 25],
                [3, 15],
                [4, 26],
                [5, 20],
                [6, 15],
                [7, 20],
                [8, 25],
                [9, 10],
                [10, 25],
                [11, 27],
                [12, 12],
                [13, 1],
              ],
              color: '#9ccc65',
              lines: {
                show: true,
                fill: false,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#9ccc65'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);
      
            $.plot($('#seo-anlytics3'), [{
              data: [
                [0, 10],
                [1, 25],
                [2, 15],
                [3, 26],
                [4, 15],
                [5, 15],
                [6, 20],
                [7, 25],
                [8, 20],
                [9, 25],
                [10, 10],
                [11, 12],
                [12, 27],
                [13, 1],
              ],
              color: '#ff5252',
              lines: {
                show: true,
                fill: false,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#ff5252'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);
      
            $.plot($('#seo-anlytics4'), [{
              data: [
                [0, 10],
                [1, 15],
                [2, 25],
                [3, 15],
                [4, 26],
                [5, 20],
                [6, 15],
                [7, 20],
                [8, 25],
                [9, 10],
                [10, 25],
                [11, 27],
                [12, 12],
                [13, 1],
              ],
              color: '#ffba57',
              lines: {
                show: true,
                fill: false,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#ffba57'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);
      
            $.plot($('#sec-ecommerce-chart-line'), [{
              data: [
                [0, 1],
                [1, 27],
                [2, 15],
                [3, 25],
                [4, 10],
                [5, 20],
                [6, 15],
                [7, 25],
                [8, 10],
                [9, 25],
                [10, 15],
                [11, 27],
                [12, 12],
                [13, 1],
              ],
              color: '#fff',
              lines: {
                show: true,
                fill: false,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#fff'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);
      
            $.plot($('#sec-ecommerce-chart-bar'), [{
              data: [
                [0, 18],
                [1, 10],
                [2, 20],
                [3, 10],
                [4, 27],
                [5, 15],
                [6, 20],
                [7, 24],
                [8, 20],
                [9, 16],
                [10, 18],
                [11, 10],
                [12, 20],
                [13, 10],
                [14, 27],
              ],
              color: '#558B2F',
              bars: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                  colors: [{
                    opacity: 1
                  }, {
                    opacity: 1
                  }]
                },
                barWidth: 0.6,
                align: 'center',
                horizontal: false
              },
              points: {
                show: false
              },
            }], this.chartOption);
      
            $.plot($('#monthlyprofit-1'), [{
              data: [
                [0, 10],
                [1, 25],
                [2, 15],
                [3, 26],
                [4, 15],
                [5, 15],
                [6, 20],
                [7, 25],
                [8, 20],
                [9, 25],
                [10, 10],
                [11, 12],
                [12, 27],
                [13, 20],
                [14, 25],
                [15, 20],
                [16, 25],
                [17, 10],
                [18, 12],
                [19, 27],
                [20, 1],
              ],
              color: '#448aff',
              lines: {
                show: true,
                fill: true,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 2,
                fill: true,
                fillColor: '#448aff'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);
      
            $.plot($('#monthlyprofit-2'), [{
              data: [
                [0, 10],
                [1, 15],
                [2, 25],
                [3, 15],
                [4, 26],
                [5, 20],
                [6, 15],
                [7, 20],
                [8, 25],
                [9, 10],
                [10, 25],
                [11, 27],
                [12, 12],
                [13, 1],
              ],
              color: '#9ccc65',
              lines: {
                show: true,
                fill: true,
                lineWidth: 2
              },
              points: {
                show: true,
                radius: 2,
                fill: true,
                fillColor: '#9ccc65'
              },
              curvedLines: {
                apply: false,
              }
            }], this.chartOption);*/
        }, 75);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], BulkComponent.prototype, "table", void 0);
    BulkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! ./bulk.component.html */ "./src/app/theme/dashboard/bulk/bulk.component.html"),
            styles: [__webpack_require__(/*! ./bulk.component.scss */ "./src/app/theme/dashboard/bulk/bulk.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BulkComponent);
    return BulkComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/bulk/bulk.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/dashboard/bulk/bulk.module.ts ***!
  \*****************************************************/
/*! exports provided: BulkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkModule", function() { return BulkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bulk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bulk.component */ "./src/app/theme/dashboard/bulk/bulk.component.ts");
/* harmony import */ var _bulk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulk-routing.module */ "./src/app/theme/dashboard/bulk/bulk-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BulkModule = /** @class */ (function () {
    function BulkModule() {
    }
    BulkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bulk_routing_module__WEBPACK_IMPORTED_MODULE_3__["BulkRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_5__["ChartModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
            ],
            declarations: [_bulk_component__WEBPACK_IMPORTED_MODULE_2__["BulkComponent"]]
        })
    ], BulkModule);
    return BulkModule;
}());



/***/ })

}]);
//# sourceMappingURL=bulk-bulk-module.js.map