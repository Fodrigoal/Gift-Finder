(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answers.service.ts":
/*!************************************!*\
  !*** ./src/app/answers.service.ts ***!
  \************************************/
/*! exports provided: AnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersService", function() { return AnswersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AnswersService {
    constructor(http) {
        this.http = http;
        this.answers = [];
    }
    addAnswers(userInput) {
        this.answers.push(userInput);
        this.answers.push(AnswersService.priceFrom);
        this.answers.push(AnswersService.priceTo);
        this.answers.push(AnswersService.maxPrice);
    }
    getAnswers() {
        return this.answers;
    }
    clearAnswers() {
        this.answers = [];
        return this.answers;
    }
}
AnswersService.ɵfac = function AnswersService_Factory(t) { return new (t || AnswersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AnswersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnswersService, factory: AnswersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'gift-finder';
    }
    ngOnInit() {
        if (location.pathname != "/") {
            location.replace("/");
        }
        ;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _finder_finder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finder/finder.component */ "./src/app/finder/finder.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");


















class AppModule {
    constructor(library) {
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faPlusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faMinusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faSearch"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faGift"]);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconLibrary"])); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _finder_finder_component__WEBPACK_IMPORTED_MODULE_7__["FinderComponent"] },
                { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"] },
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _finder_finder_component__WEBPACK_IMPORTED_MODULE_7__["FinderComponent"],
        _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _finder_finder_component__WEBPACK_IMPORTED_MODULE_7__["FinderComponent"],
                    _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _finder_finder_component__WEBPACK_IMPORTED_MODULE_7__["FinderComponent"] },
                        { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"] },
                    ]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/finder/finder.component.ts":
/*!********************************************!*\
  !*** ./src/app/finder/finder.component.ts ***!
  \********************************************/
/*! exports provided: FinderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinderComponent", function() { return FinderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _answers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../answers.service */ "./src/app/answers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");










class FinderComponent {
    constructor(answersService, formBuilder, router) {
        this.answersService = answersService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.password = '';
        this.c_password = '';
        this.toggle1 = false;
        this.toggle2 = false;
        this.status = false;
        this.bgBook = 'a20025';
        this.iconBook = 'plus';
        this.bgCA = 'a20025';
        this.iconCA = 'plus';
        this.bgEDS = 'a20025';
        this.iconEDS = 'plus';
        this.bgFPF = 'a20025';
        this.iconFPF = 'plus';
        this.bgHB = 'a20025';
        this.iconHB = 'plus';
        this.bgHG = 'a20025';
        this.iconHG = 'plus';
        this.bgGPC = 'a20025';
        this.iconGPC = 'plus';
        this.bgMusic = 'a20025';
        this.iconMusic = 'plus';
        this.bgPet = 'a20025';
        this.iconPet = 'plus';
        this.bgSports = 'a20025';
        this.iconSports = 'plus';
        this.bgTech = 'a20025';
        this.iconTech = 'plus';
        this.bgTPB = 'a20025';
        this.iconTPB = 'plus';
        this.bgTravel = 'a20025';
        this.iconTravel = 'plus';
        this.bgVideogame = 'a20025';
        this.iconVideogame = 'plus';
        this.checkoutForm = this.formBuilder.group({
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            book: false,
            cA: false,
            eDS: false,
            fPF: false,
            hB: false,
            hG: false,
            gPC: false,
            music: false,
            pet: false,
            sports: false,
            technology: false,
            tPB: false,
            travel: false,
            videogame: false,
        });
    }
    ngOnInit() {
        var $range = $('.js-range-slider'), $inputFrom = $('.js-input-from'), $inputTo = $('.js-input-to'), instance, min = 1, max = 500, from, to;
        $range.ionRangeSlider({
            skin: 'flat',
            type: 'double',
            prefix: 'C$',
            max_postfix: '+',
            min: min,
            max: max,
            from: min,
            to: max,
            onStart: updateInputs,
            onChange: updateInputs,
        });
        instance = $range.data('ionRangeSlider');
        function updateInputs(data) {
            from = data.from;
            if (data.to != max) {
                to = data.to;
            }
            else {
                to = data.to + '+';
            }
            _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceFrom = data.from;
            _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceTo = data.to;
            _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].maxPrice = data.max;
            $inputFrom.prop('value', from);
            $inputTo.prop('value', to);
        }
        $inputFrom.on('input', function () {
            var val = $(this).prop('value');
            // validate
            if (val < min) {
                val = min;
            }
            else if (val > to) {
                val = to;
            }
            instance.update({
                from: val,
            });
        });
        $inputTo.on('input', function () {
            var val = $(this).prop('value');
            // validate
            if (val < from) {
                val = from;
            }
            else if (val > to) {
                val = to;
            }
            instance.update({
                to: val,
            });
        });
    }
    checkData(customerData) {
        if (customerData.gender == null && customerData.age == null) {
            document.getElementById('popup1').style.visibility = 'visible';
            return;
        }
        if (customerData.gender == null) {
            document.getElementById('popup2').style.visibility = 'visible';
            return;
        }
        if (customerData.age == null) {
            document.getElementById('popup3').style.visibility = 'visible';
            return;
        }
        else {
            return true;
        }
    }
    clickEvent() {
        this.status = !this.status;
    }
    closeAlert() {
        document.getElementById('popup1').style.visibility = 'hidden';
        document.getElementById('popup2').style.visibility = 'hidden';
        document.getElementById('popup3').style.visibility = 'hidden';
    }
    goResults(customerData) {
        if (this.checkData(customerData) &&
            this.checkoutForm.dirty &&
            this.checkoutForm.valid) {
            this.answersService.addAnswers(customerData);
            this.checkoutForm.reset();
            this.router.navigate(['/results']);
        }
    }
    firstStepClick(customerData) {
        if (this.checkData(customerData) &&
            this.checkoutForm.dirty &&
            this.checkoutForm.valid) {
            this.clickEvent();
        }
    }
    toggleIcon(e) {
        switch (e.id) {
            case 'book':
                if (this.iconBook === 'plus') {
                    this.iconBook = 'check';
                    this.bgBook = 'ed5565';
                }
                else {
                    this.iconBook = 'plus';
                    this.bgBook = 'a20025';
                }
                break;
            case 'cA':
                if (this.iconCA === 'plus') {
                    this.iconCA = 'check';
                    this.bgCA = 'ed5565';
                }
                else {
                    this.iconCA = 'plus';
                    this.bgCA = 'a20025';
                }
                break;
            case 'eDS':
                if (this.iconEDS === 'plus') {
                    this.iconEDS = 'check';
                    this.bgEDS = 'ed5565';
                }
                else {
                    this.iconEDS = 'plus';
                    this.bgEDS = 'a20025';
                }
                break;
            case 'fPF':
                if (this.iconFPF === 'plus') {
                    this.iconFPF = 'check';
                    this.bgFPF = 'ed5565';
                }
                else {
                    this.iconFPF = 'plus';
                    this.bgFPF = 'a20025';
                }
                break;
            case 'hB':
                if (this.iconHB === 'plus') {
                    this.iconHB = 'check';
                    this.bgHB = 'ed5565';
                }
                else {
                    this.iconHB = 'plus';
                    this.bgHB = 'a20025';
                }
                break;
            case 'hG':
                if (this.iconHG === 'plus') {
                    this.iconHG = 'check';
                    this.bgHG = 'ed5565';
                }
                else {
                    this.iconHG = 'plus';
                    this.bgHG = 'a20025';
                }
                break;
            case 'gPC':
                if (this.iconGPC === 'plus') {
                    this.iconGPC = 'check';
                    this.bgGPC = 'ed5565';
                }
                else {
                    this.iconGPC = 'plus';
                    this.bgGPC = 'a20025';
                }
                break;
            case 'music':
                if (this.iconMusic === 'plus') {
                    this.iconMusic = 'check';
                    this.bgMusic = 'ed5565';
                }
                else {
                    this.iconMusic = 'plus';
                    this.bgMusic = 'a20025';
                }
                break;
            case 'pet':
                if (this.iconPet === 'plus') {
                    this.iconPet = 'check';
                    this.bgPet = 'ed5565';
                }
                else {
                    this.iconPet = 'plus';
                    this.bgPet = 'a20025';
                }
                break;
            case 'sports':
                if (this.iconSports === 'plus') {
                    this.iconSports = 'check';
                    this.bgSports = 'ed5565';
                }
                else {
                    this.iconSports = 'plus';
                    this.bgSports = 'a20025';
                }
                break;
            case 'technology':
                if (this.iconTech === 'plus') {
                    this.iconTech = 'check';
                    this.bgTech = 'ed5565';
                }
                else {
                    this.iconTech = 'plus';
                    this.bgTech = 'a20025';
                }
                break;
            case 'tPB':
                if (this.iconTPB === 'plus') {
                    this.iconTPB = 'check';
                    this.bgTPB = 'ed5565';
                }
                else {
                    this.iconTPB = 'plus';
                    this.bgTPB = 'a20025';
                }
                break;
            case 'travel':
                if (this.iconTravel === 'plus') {
                    this.iconTravel = 'check';
                    this.bgTravel = 'ed5565';
                }
                else {
                    this.iconTravel = 'plus';
                    this.bgTravel = 'a20025';
                }
                break;
            case 'videogame':
                if (this.iconVideogame === 'plus') {
                    this.iconVideogame = 'check';
                    this.bgVideogame = 'ed5565';
                }
                else {
                    this.iconVideogame = 'plus';
                    this.bgVideogame = 'a20025';
                }
        }
    }
    changeType(input_field_password, num) {
        if (input_field_password.type == 'password')
            input_field_password.type = 'text';
        else
            input_field_password.type = 'password';
        if (num == 1)
            this.toggle1 = !this.toggle1;
        else
            this.toggle2 = !this.toggle2;
    }
}
FinderComponent.ɵfac = function FinderComponent_Factory(t) { return new (t || FinderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FinderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinderComponent, selectors: [["app-finder"]], decls: 122, vars: 22, consts: [[3, "formGroup", "ngSubmit"], ["id", "container", 1, "total-container", 3, "ngClass"], [1, "form", "first-step-container"], [1, "gender"], ["data-style", "rounded", "data-color", "red", 1, "toggle-radio"], ["type", "radio", "id", "female", "value", "female", "name", "gender", "formControlName", "gender"], ["for", "female"], ["type", "radio", "id", "male", "value", "male", "name", "gender", "formControlName", "gender"], ["for", "male"], ["type", "radio", "id", "non-binary/third gender", "value", "non-binary/third gender", "name", "gender", "formControlName", "gender"], ["for", "non-binary/third gender"], [1, "age"], ["type", "radio", "id", "baby", "value", "baby", "name", "age", "formControlName", "age"], ["for", "baby"], ["type", "radio", "id", "child", "value", "child", "name", "age", "formControlName", "age"], ["for", "child"], ["type", "radio", "id", "teen", "value", "teen", "name", "age", "formControlName", "age"], ["for", "teen"], ["type", "radio", "id", "adult", "value", "adult", "name", "age", "formControlName", "age"], ["for", "adult"], ["type", "radio", "id", "senior", "value", "senior", "name", "age", "formControlName", "age"], ["for", "senior"], [1, "cost"], [1, "slider"], [1, "range-slider"], ["type", "text", "value", "", 1, "js-range-slider"], [1, "extra-controls"], [1, "cost-from"], ["for", "js-input-from", 1, "js-input-from"], [1, "textbox-from"], ["type", "text", "name", "js-input-from", "value", "0", 1, "js-input-from"], [1, "cost-to"], ["for", "js-input-to", 1, "js-input-to"], [1, "textbox-to"], ["type", "text", "name", "js-input-to", "value", "0", 1, "js-input-to"], [1, "form", "second-step-container"], [1, "categories"], ["type", "checkbox", "value", "book", "id", "book", "name", "book", "formControlName", "book", 1, "hobby", 3, "click"], [3, "icon"], ["type", "checkbox", "value", "cA", "id", "cA", "name", "cA", "formControlName", "cA", 1, "hobby", 3, "click"], ["type", "checkbox", "value", "eDS", "id", "eDS", "name", "eDS", "formControlName", "eDS", 1, "hobby", 3, "click"], ["type", "checkbox", "value", "hB", "id", "hB", "name", "hB", "formControlName", "hB", 1, "hobby", 3, "click"], ["type", "checkbox", "value", "hG", "id", "hG", "name", "hG", "formControlName", "hG", 1, "hobby", 3, "click"], ["type", "submit", 1, "submit-btn"], [1, "overlay-container"], [1, "overlay"], [1, "overlay-panel", "overlay-left"], ["id", "signIn", 1, "ghost", "custom-button", 3, "click"], [1, "overlay-panel", "overlay-right"], ["id", "signUp", 1, "ghost", "custom-button", 3, "click"], ["id", "popup1", 1, "alert"], [1, "popup"], ["href", "#", 1, "close", 3, "click"], [1, "content"], ["id", "popup2", 1, "alert"], ["id", "popup3", 1, "alert"]], template: function FinderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FinderComponent_Template_form_ngSubmit_0_listener() { return ctx.goResults(ctx.checkoutForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To which gender identity does the receiver most identify?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Non-binary/third gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "What is the receiver's age?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Baby/Toddler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Child");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Teenager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Adult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Senior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "How much do you want to spend?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "CAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "CAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Tell us some of the receiver's hobbies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_input_click_60_listener($event) { return ctx.toggleIcon($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "fa-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Book, Comics & Manga ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_input_click_64_listener($event) { return ctx.toggleIcon($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "fa-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Clothing & Accessories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_input_click_68_listener($event) { return ctx.toggleIcon($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "fa-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Eat, Drink & Smoke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_input_click_72_listener($event) { return ctx.toggleIcon($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "fa-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Health & Beauty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_input_click_76_listener($event) { return ctx.toggleIcon($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "fa-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Home & Garden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "See gifts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Great! Now we just need to figure out the hobbies!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Do you remember what does the receiver likes to do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_span_click_89_listener() { return ctx.clickEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Tell us about the person you are giving the gift.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "This way we can find the better present!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_span_click_96_listener() { return ctx.firstStepClick(ctx.checkoutForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Please enter the persons age and gender.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_a_click_102_listener() { return ctx.closeAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " This is important so we can offer you better results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Please enter the persons gender.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_a_click_110_listener() { return ctx.closeAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " This is important so we can offer you better results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Please enter the persons age. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinderComponent_Template_a_click_118_listener() { return ctx.closeAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " This is important so we can offer you better results. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status ? "right-panel-active" : "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", ctx.bgBook, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("icon", ctx.iconBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", ctx.bgCA, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("icon", ctx.iconCA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", ctx.bgEDS, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("icon", ctx.iconEDS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", ctx.bgHB, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("icon", ctx.iconHB);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", ctx.bgHG, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("icon", ctx.iconHG);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["a[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  font-size: 14px;\r\n  text-decoration: none;\r\n  margin: 15px 0;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  background: #000;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], span.custom-button[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n  border: 1px solid #ff4b2b;\r\n  color: #ffffff;\r\n  font-size: 0.75em;\r\n  font-weight: bold;\r\n  padding: 12px 45px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  transition: transform 80ms ease-in;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover, span.custom-button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 5px 5px 10px #ccc;\r\n  background-color: #ff416c;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  transition: all 0.6s ease-in-out;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  min-height: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 1.5em;\r\n  text-align: left;\r\n  margin-left: 1em;\r\n  margin-right: 1em;\r\n  margin-bottom: 0.3em;\r\n  margin-top: 2em;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 0.8em;\r\n  margin-top: 1em;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1.4em;\r\n  font-weight: 100;\r\n  line-height: 20px;\r\n  letter-spacing: 0.5px;\r\n  margin: 20px 0 30px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\nspan[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\nspan.ghost[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-color: #ffffff;\r\n}\r\n\r\nspan.textbox-from[_ngcontent-%COMP%], span.textbox-to[_ngcontent-%COMP%] {\r\n  padding: 1px 2px;\r\n  border: 2px #888 solid;\r\n  line-height: 20px;\r\n  height: 20px;\r\n  border-top: 0;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  border-color: #fb8c34;\r\n  padding-bottom: 2px;\r\n  float: left;\r\n}\r\n\r\nspan.textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  border-top: 0;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  border-color: #fb8c34;\r\n  padding-bottom: 2px;\r\n}\r\n\r\n.age[_ngcontent-%COMP%], .cost[_ngcontent-%COMP%], .gender[_ngcontent-%COMP%] {\r\n  height: 20%;\r\n  margin-top: 55px;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  visibility: hidden;\r\n}\r\n\r\n.categories[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.cost[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.cost-from[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.cost-from[_ngcontent-%COMP%], .cost-to[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  max-width: 220px;\r\n  min-width: 220px;\r\n}\r\n\r\n.cost-to[_ngcontent-%COMP%] {\r\n  margin-right: -90px;\r\n  float: right;\r\n  margin-top: -46px;\r\n}\r\n\r\n.extra-controls[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  float: right;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  background: rgba(64, 64, 64, .1);\r\n  -webkit-backdrop-filter: blur(8px);\r\n          backdrop-filter: blur(8px);\r\n  position: fixed;\r\n  left: 2.5%;\r\n  right: 2.5%;\r\n  bottom: -2px;\r\n  --aug-border: 2px;\r\n  --aug-border-bg: cyan;\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  text-align: center;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: cyan;\r\n  text-decoration: none;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  text-decoration: underline;\r\n}\r\n\r\n.hobby[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.js-input-from[_ngcontent-%COMP%], .js-input-to[_ngcontent-%COMP%] {\r\n  border-top: 0;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  border-color: #fb8c34;\r\n  width: 40%;\r\n  text-align: left;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%] {\r\n  background: #a20025;\r\n  background-size: cover;\r\n  background-position: 0 0;\r\n  color: #ffffff;\r\n  position: relative;\r\n  left: -100%;\r\n  height: 100%;\r\n  width: 200%;\r\n  transform: translateX(0);\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-container[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.overlay-left[_ngcontent-%COMP%] {\r\n  transform: translateX(-20%);\r\n}\r\n\r\n.overlay-panel[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 50%;\r\n  transform: translateX(0);\r\n  transition: transform 0.6s ease-in-out;\r\n}\r\n\r\n.overlay-right[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  transform: translateX(0);\r\n}\r\n\r\n.popup[_ngcontent-%COMP%] {\r\n  margin: 70px auto;\r\n  padding: 30px;\r\n  color: #fff;\r\n  background: #a20025;\r\n  border: 2px solid white;\r\n  border-radius: 5px;\r\n  width: 30%;\r\n  position: relative;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  font-family: Tahoma, Arial, sans-serif;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: -15px;\r\n  right: 10px;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\r\n  color: #FF9FB5;\r\n}\r\n\r\n.popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  max-height: 30%;\r\n  overflow: auto;\r\n}\r\n\r\n.range-slider[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-right: 0px;\r\n}\r\n\r\n.second-step-container[_ngcontent-%COMP%] {\r\n  margin-left: 1.5em;\r\n  margin-right: 1.5em;\r\n  text-align: center;\r\n}\r\n\r\n.second-step-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 0.6em;\r\n  vertical-align: middle;\r\n  padding-right: 5px;\r\n}\r\n\r\n.second-step-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.second-step-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.second-step-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  display: inline-table;\r\n  background: #a20025;\r\n  color: #fff;\r\n  width: 16px;\r\n  margin: 0.3rem;\r\n  margin-bottom: 0.4em;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  align-items: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  background-color: transparent;\r\n  border: 4px solid #a20025;\r\n  color: #a20025;\r\n  font-size: 1.3rem;\r\n  transition: all 0.3s ease 0s;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #FF9FB5;\r\n  transition: all 0.3s ease 0s;\r\n  font-weight: 700 !important;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.toggle-radio[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 0.50rem;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath style='fill:%23000;' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'/%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 16px 16px;\r\n}\r\n\r\n\r\n\r\n.toggle-radio[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.toggle-radio[_ngcontent-%COMP%] > input[type='radio'][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.toggle-radio[_ngcontent-%COMP%] > input[disabled][_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\r\n  opacity: 0.50;\r\n}\r\n\r\n.toggle-radio[_ngcontent-%COMP%] > input[disabled][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.toggle-radio[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: 0;\r\n  padding: 5px 15px;\r\n  cursor: pointer;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.toggle-radio[data-color][_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.toggle-radio[data-color][_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath style='fill:%23fff;' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.toggle-radio[data-color][_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath style='fill:%23fff;' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n\r\n\r\n.toggle-radio[data-color='red'][_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\r\n  background-color: #a20025;\r\n}\r\n\r\n.toggle-radio[data-color='red'][_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:hover + label[_ngcontent-%COMP%] {\r\n  background: #ff416c;\r\n}\r\n\r\n.toggle-radio[data-color='red'][_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] {\r\n  background: #ff416c;\r\n}\r\n\r\n\r\n\r\n.total-container[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  position: relative;\r\n  overflow: hidden;\r\n  min-height: 550px;\r\n}\r\n\r\n.total-container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n  transform: translateX(50%);\r\n}\r\n\r\n.total-container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.total-container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n}\r\n\r\n.total-container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%] {\r\n  transform: translateX(20%);\r\n}\r\n\r\n.total-container.right-panel-active[_ngcontent-%COMP%]   .second-step-container[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 5;\r\n  -webkit-animation: show 0.6s;\r\n          animation: show 0.6s;\r\n  top: 0;\r\n}\r\n\r\n@-webkit-keyframes show {\r\n\r\n  0%,\r\n  49.99% {\r\n    opacity: 0;\r\n    z-index: 1;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    opacity: 1;\r\n    z-index: 5;\r\n  }\r\n}\r\n\r\n@keyframes show {\r\n\r\n  0%,\r\n  49.99% {\r\n    opacity: 0;\r\n    z-index: 1;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    opacity: 1;\r\n    z-index: 5;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width:847px) {\r\n\r\n  form[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 0 50px;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    margin-bottom: 0.5em;\r\n    margin-top: 1.2em;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 0.5em;\r\n    margin-top: 0px;\r\n    border-radius: 0px;\r\n  }\r\n\r\n  label.js-input-from[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n    font-weight: bold;\r\n  }\r\n\r\n  label.js-input-to[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n    font-weight: bold;\r\n    float: none;\r\n    margin-top: 9px !important;\r\n  }\r\n\r\n  .toggle-radio[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .cost-from[_ngcontent-%COMP%], .cost-to[_ngcontent-%COMP%] {\r\n    min-width: 95px;\r\n  }\r\n\r\n  .cost-to[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    margin-right: -35px;\r\n    margin-top: -19px;\r\n  }\r\n\r\n  .extra-controls[_ngcontent-%COMP%] {\r\n    margin-top: -54px;\r\n    margin-right: -30px;\r\n  }\r\n\r\n  .extra-controls[_ngcontent-%COMP%], .range-slider[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n\r\n  .first-step-container[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    width: 50%;\r\n    z-index: 2;\r\n  }\r\n\r\n  .js-input-from[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n\r\n  .overlay-container[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    transition: transform 0.6s ease-in-out;\r\n    z-index: 100;\r\n  }\r\n\r\n  .second-step-container[_ngcontent-%COMP%] {\r\n    transform: translateX(100%);\r\n    left: 0;\r\n    width: 50%;\r\n    opacity: 0;\r\n    z-index: 1;\r\n    position: absolute;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .second-step-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-top: 55px;\r\n    margin-left: 1em;\r\n    margin-right: 1em;\r\n  }\r\n\r\n  .second-step-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 0.8em;\r\n  }\r\n\r\n  .slider[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n    margin-right: 4em;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .toggle-radio[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border-width: 1px 0 1px 1px;\r\n  }\r\n\r\n  .toggle-radio[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before {\r\n    display: none;\r\n  }\r\n\r\n  \r\n  .toggle-radio[data-style='rounded'][_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:first-of-type + label[_ngcontent-%COMP%] {\r\n    border-radius: 500px 0 0 500px;\r\n  }\r\n\r\n  .toggle-radio[data-style='rounded'][_ngcontent-%COMP%] > input[_ngcontent-%COMP%]:last-of-type + label[_ngcontent-%COMP%] {\r\n    border-radius: 0 500px 500px 0;\r\n  }\r\n\r\n  .total-container[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    min-width: 800px;\r\n    display: flex;\r\n    position: fixed;\r\n    height: 60%;\r\n    width: 90%;\r\n    top: 5%;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 910px) {\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 0.85rem;\r\n  }\r\n\r\n  .total-container[_ngcontent-%COMP%] {\r\n    min-height: 420px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .second-step-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n  }\r\n\r\n  .slider[_ngcontent-%COMP%] {\r\n    margin-right: 3em;\r\n  }\r\n\r\n  .total-container[_ngcontent-%COMP%] {\r\n    min-height: 440px;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width:1130px) {\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.6em;\r\n  }\r\n\r\n  label[_ngcontent-%COMP%] {\r\n    font-size: 0.7em;\r\n  }\r\n\r\n  .slider[_ngcontent-%COMP%] {\r\n    margin-left: 2em;\r\n    margin-right: 3em;\r\n  }\r\n\r\n  .total-container[_ngcontent-%COMP%] {\r\n    min-height: 490px;\r\n    min-width: 1000px;\r\n    left: 6%;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width:1561px) {\r\n}\r\n\r\n\r\n\r\n@media (max-width:319px) {\r\n\r\n  .cost-from[_ngcontent-%COMP%], .cost-to[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    min-width: 100px;\r\n  }\r\n\r\n  .cost-to[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .popup[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n@media (max-width:846px) {\r\n  label[_ngcontent-%COMP%] {\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .first-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .slider[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n  }\r\n\r\n  .toggle-radio[_ngcontent-%COMP%] {\r\n    margin-left: 1.4em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZGVyL2ZpbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFJRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxRQUFRO0VBQ1Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBR0E7Ozs7Q0FJQzs7QUFFRCx3QkFBd0I7O0FBRXhCLDZDQUE2Qzs7QUFDN0M7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtPQUFrTztFQUNsTyw0QkFBNEI7RUFDNUIsa0NBQWtDO0VBQ2xDLDBCQUEwQjtBQUM1Qjs7QUFFQTs7NEJBRTRCOztBQUM1QjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOzs0QkFFNEI7O0FBRTVCLFVBQVU7O0FBQ1Y7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrT0FBa087QUFDcE87O0FBRUE7RUFDRSxpZ0JBQWlnQjtBQUNuZ0I7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxtQ0FBbUM7O0FBRW5DO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw0RUFBNEU7RUFDNUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLDRCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsTUFBTTtBQUNSOztBQUVBOztFQUVFOztJQUVFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUNGOztBQWJBOztFQUVFOztJQUVFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsVUFBVTtJQUNWLFVBQVU7RUFDWjtBQUNGOztBQUdBLHNCQUFzQjs7QUFFdEIsc0JBQXNCOztBQUN0Qjs7RUFFRTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsWUFBWTtFQUNaO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsT0FBTztFQUNUOztBQUVGOztBQUVBOztFQUVFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGOztBQUVBOztFQUVFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUY7O0FBRUE7O0VBRUU7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixRQUFRO0VBQ1Y7QUFDRjs7QUFFQSw0QkFBNEI7O0FBQzVCO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0Qjs7RUFFRTs7SUFFRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9maW5kZXIvZmluZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5zcGFuLmN1c3RvbS1idXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNGIyYjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyLFxyXG5zcGFuLmN1c3RvbS1idXR0b246aG92ZXIge1xyXG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNjY2M7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2NjYztcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MTZjO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zZW07XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcclxufVxyXG5cclxuc3BhbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbnNwYW46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnNwYW4uZ2hvc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuc3Bhbi50ZXh0Ym94LWZyb20sXHJcbnNwYW4udGV4dGJveC10byB7XHJcbiAgcGFkZGluZzogMXB4IDJweDtcclxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItY29sb3I6ICNmYjhjMzQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuc3Bhbi50ZXh0Ym94IGlucHV0IHtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItY29sb3I6ICNmYjhjMzQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweDtcclxufVxyXG5cclxuLmFnZSxcclxuLmNvc3QsXHJcbi5nZW5kZXIge1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIG1hcmdpbi10b3A6IDU1cHg7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY29zdCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29zdC1mcm9tIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb3N0LWZyb20sXHJcbi5jb3N0LXRvIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1heC13aWR0aDogMjIwcHg7XHJcbiAgbWluLXdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmNvc3QtdG8ge1xyXG4gIG1hcmdpbi1yaWdodDogLTkwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC00NnB4O1xyXG59XHJcblxyXG4uZXh0cmEtY29udHJvbHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg2NCwgNjQsIDY0LCAuMSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDIuNSU7XHJcbiAgcmlnaHQ6IDIuNSU7XHJcbiAgYm90dG9tOiAtMnB4O1xyXG4gIC0tYXVnLWJvcmRlcjogMnB4O1xyXG4gIC0tYXVnLWJvcmRlci1iZzogY3lhbjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xyXG59XHJcblxyXG4uZm9vdGVyIGEge1xyXG4gIGNvbG9yOiBjeWFuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3RlciBhOmhvdmVyLFxyXG4uZm9vdGVyIGE6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uaG9iYnkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5qcy1pbnB1dC1mcm9tLFxyXG4uanMtaW5wdXQtdG8ge1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZiOGMzNDtcclxuICB3aWR0aDogNDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGJhY2tncm91bmQ6ICNhMjAwMjU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm92ZXJsYXktbGVmdCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1yaWdodCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ucG9wdXAge1xyXG4gIG1hcmdpbjogNzBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2EyMDAyNTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wb3B1cCBoMiB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBvcHVwIC5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wb3B1cCAuY2xvc2U6aG92ZXIge1xyXG4gIGNvbG9yOiAjRkY5RkI1O1xyXG59XHJcblxyXG4ucG9wdXAgLmNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDMwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnJhbmdlLXNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zZWNvbmQtc3RlcC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjVlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZC1zdGVwLWNvbnRhaW5lciBmYS1pY29uIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zZWNvbmQtc3RlcC1jb250YWluZXIgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc2Vjb25kLXN0ZXAtY29udGFpbmVyIGgxIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNlY29uZC1zdGVwLWNvbnRhaW5lciBsYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGJhY2tncm91bmQ6ICNhMjAwMjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luOiAwLjNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2EyMDAyNTtcclxuICBjb2xvcjogI2EyMDAyNTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUZCNTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcblxyXG5cclxuLypcclxuVG9nZ2xlIFJhZGlvcyB2MS40XHJcbmJ5IEFkYW0gQ3VscGVwcGVyIHwgQGFkYW1jdWxwZXBwZXJcclxuaHR0cHM6Ly9naXRodWIuY29tL2FkYW1jdWxwZXBwZXIvdG9nZ2xlLXJhZGlvc1xyXG4qL1xyXG5cclxuLyogQ3VzdG9taXphYmxlIHN0eWxlcyAqL1xyXG5cclxuLyogSW5kaWNhdG9ycyBmb3Igc21hbGxlciBkZXZpY2VzIChzdGFja2VkKSAqL1xyXG4udG9nZ2xlLXJhZGlvPmlucHV0K2xhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNTByZW07XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggc3R5bGU9J2ZpbGw6JTIzMDAwOycgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcclxufVxyXG5cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuQ09SRSBTVFlMRVMgQkVMT1cgLSBOTyBUT1VDSFlcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLnRvZ2dsZS1yYWRpbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50b2dnbGUtcmFkaW8+aW5wdXRbdHlwZT0ncmFkaW8nXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZ2dsZS1yYWRpbz5pbnB1dFtkaXNhYmxlZF0rbGFiZWwge1xyXG4gIG9wYWNpdHk6IDAuNTA7XHJcbn1cclxuXHJcbi50b2dnbGUtcmFkaW8+aW5wdXRbZGlzYWJsZWRdK2xhYmVsOmhvdmVyIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4udG9nZ2xlLXJhZGlvPmlucHV0K2xhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbkNPUkUgU1RZTEVTIEFCT1ZFIC0gTk8gVE9VQ0hZXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4vKiBDb2xvciAqL1xyXG4udG9nZ2xlLXJhZGlvW2RhdGEtY29sb3JdPmlucHV0K2xhYmVsIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvZ2dsZS1yYWRpb1tkYXRhLWNvbG9yXT5pbnB1dCtsYWJlbDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIHN0eWxlPSdmaWxsOiUyM2ZmZjsnIGQ9J00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4eicvJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLnRvZ2dsZS1yYWRpb1tkYXRhLWNvbG9yXT5pbnB1dDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggc3R5bGU9J2ZpbGw6JTIzZmZmOycgZD0nTTUwNCAyNTZjMCAxMzYuOTY3LTExMS4wMzMgMjQ4LTI0OCAyNDhTOCAzOTIuOTY3IDggMjU2IDExOS4wMzMgOCAyNTYgOHMyNDggMTExLjAzMyAyNDggMjQ4ek0yMjcuMzE0IDM4Ny4zMTRsMTg0LTE4NGM2LjI0OC02LjI0OCA2LjI0OC0xNi4zNzkgMC0yMi42MjdsLTIyLjYyNy0yMi42MjdjLTYuMjQ4LTYuMjQ5LTE2LjM3OS02LjI0OS0yMi42MjggMEwyMTYgMzA4LjExOGwtNzAuMDU5LTcwLjA1OWMtNi4yNDgtNi4yNDgtMTYuMzc5LTYuMjQ4LTIyLjYyOCAwbC0yMi42MjcgMjIuNjI3Yy02LjI0OCA2LjI0OC02LjI0OCAxNi4zNzkgMCAyMi42MjdsMTA0IDEwNGM2LjI0OSA2LjI0OSAxNi4zNzkgNi4yNDkgMjIuNjI4LjAwMXonLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi8qIENvbG9yOiBSZWQgKi9cclxuLnRvZ2dsZS1yYWRpb1tkYXRhLWNvbG9yPSdyZWQnXT5pbnB1dCtsYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyMDAyNTtcclxufVxyXG5cclxuLnRvZ2dsZS1yYWRpb1tkYXRhLWNvbG9yPSdyZWQnXT5pbnB1dDpob3ZlcitsYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmNDE2YztcclxufVxyXG5cclxuLnRvZ2dsZS1yYWRpb1tkYXRhLWNvbG9yPSdyZWQnXT5pbnB1dDpjaGVja2VkK2xhYmVsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY0MTZjO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi50b3RhbC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IDU1MHB4O1xyXG59XHJcblxyXG4udG90YWwtY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi50b3RhbC1jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLnRvdGFsLWNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4udG90YWwtY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbn1cclxuXHJcbi50b3RhbC1jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zZWNvbmQtc3RlcC1jb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogNTtcclxuICBhbmltYXRpb246IHNob3cgMC42cztcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcblxyXG4gIDAlLFxyXG4gIDQ5Ljk5JSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIDUwJSxcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIEJyZWFrcG9pbnRzIC0gTWluICovXHJcblxyXG4vKiBMYXJnZSAobGcpIGFuZCB1cCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDo4NDdweCkge1xyXG5cclxuICBmb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDEuMmVtO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcblxyXG4gIGxhYmVsLmpzLWlucHV0LWZyb20ge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwuanMtaW5wdXQtdG8ge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50b2dnbGUtcmFkaW8ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29zdC1mcm9tLFxyXG4gIC5jb3N0LXRvIHtcclxuICAgIG1pbi13aWR0aDogOTVweDtcclxuICB9XHJcblxyXG4gIC5jb3N0LXRvIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE5cHg7XHJcbiAgfVxyXG5cclxuICAuZXh0cmEtY29udHJvbHMge1xyXG4gICAgbWFyZ2luLXRvcDogLTU0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4dHJhLWNvbnRyb2xzLFxyXG4gIC5yYW5nZS1zbGlkZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIC5maXJzdC1zdGVwLWNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAuanMtaW5wdXQtZnJvbSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZC1zdGVwLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4gIC5zZWNvbmQtc3RlcC1jb250YWluZXIgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICB9XHJcblxyXG4gIC5zZWNvbmQtc3RlcC1jb250YWluZXIgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC50b2dnbGUtcmFkaW8+aW5wdXQrbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMCAxcHggMXB4O1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZS1yYWRpbz5pbnB1dCtsYWJlbDpiZWZvcmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIFJvdW5kZWQgKi9cclxuICAudG9nZ2xlLXJhZGlvW2RhdGEtc3R5bGU9J3JvdW5kZWQnXT5pbnB1dDpmaXJzdC1vZi10eXBlK2xhYmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4IDAgMCA1MDBweDtcclxuICB9XHJcblxyXG4gIC50b2dnbGUtcmFkaW9bZGF0YS1zdHlsZT0ncm91bmRlZCddPmlucHV0Omxhc3Qtb2YtdHlwZStsYWJlbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDUwMHB4IDUwMHB4IDA7XHJcbiAgfVxyXG5cclxuICAudG90YWwtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0b3A6IDUlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MTBweCkge1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG5cclxuICAudG90YWwtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZC1zdGVwLWNvbnRhaW5lciBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XHJcbiAgfVxyXG5cclxuICAudG90YWwtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ0MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjExMzBweCkge1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xyXG4gIH1cclxuXHJcbiAgLnRvdGFsLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0OTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gICAgbGVmdDogNiU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFeHRyYSBMYXJnZSAoeGwpIGFuZCB1cCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDoxNTYxcHgpIHtcclxufVxyXG5cclxuLyogQnJlYWtwb2ludHMgLSBNYXggKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjMxOXB4KSB7XHJcblxyXG4gIC5jb3N0LWZyb20sXHJcbiAgLmNvc3QtdG8ge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuY29zdC10byB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAucG9wdXAge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjg0NnB4KSB7XHJcbiAgbGFiZWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcblxyXG4gIC5maXJzdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC50b2dnbGUtcmFkaW8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNGVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-finder',
                templateUrl: './finder.component.html',
                styleUrls: ['./finder.component.css'],
            }]
    }], function () { return [{ type: _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/gifts.ts":
/*!**************************!*\
  !*** ./src/app/gifts.ts ***!
  \**************************/
/*! exports provided: allGifts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allGifts", function() { return allGifts; });
const allGifts = [
    {
        id: 10101,
        name: 'The Lives of the Artists - Giorgio Vasari',
        checker: 'Lives of the Artists',
        description: 'Entertaining collection of chronological Renaissance artists biographies, such as Leonardo da Vinci, Raphael, and Michelangelo.\nPacked with facts, attributions, and entertaining anecdotes. Truly a classic.',
        image: 'assets/img/10101.jpg',
        alt: "Cover of the book 'The ' by Giorgio Vasari",
        link: 'https://www.amazon.ca/dp/1420970844',
        price: '17.36',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Art', 'Biography', 'History'],
    },
    {
        id: 10102,
        name: 'A World History of Art - Hugh Honour',
        checker: 'World History of Art',
        description: "This - huge! - book consistently proved to be the classic introduction to humanity's artistic heritage.\nFrom our paleolithic past to our digitised present, every continent and culture is covered in an articulate and well- balanced discussion and superb illustrations.",
        image: 'assets/img/10102.jpg',
        alt: "Cover of the book 'A World History of Art' by Hugh Honour",
        link: 'https://www.amazon.ca/dp/1856695840',
        price: '74.81',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Art', 'History'],
    },
    {
        id: 10103,
        name: 'Women, Art, And Power And Other Essays - Linda Nochlin',
        checker: 'Women, Art, And Power And Other Essays',
        description: "Seven landmark essays on women artists and women in art history.\nFor all those who're interested in art, art history, or feminist criticism (which the book gives terrific grounding).",
        image: 'assets/img/10103.jpg',
        alt: "Cover of the book 'Women, Art, And Power And Other Essays' by Linda Nochlin",
        link: 'https://www.amazon.ca/dp/0064301834/',
        price: '76.00',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Art', 'History'],
    },
    {
        id: 10104,
        name: 'The Allure of Chanel - Paul Morand',
        checker: 'Allure of Chanel',
        description: "The memories of Chanel told in her own words provide vivid sketches and portray the strength of Coco's character, leaving us with an extraordinary insight into Chanel the woman and the woman who created Chanel.\nThis is an interesting memoir because it's all about what the fashion icon thinks not what she did.",
        image: 'assets/img/10104.jpg',
        alt: "Cover of the book 'The Allure of Chanel' by Paul Morand",
        link: 'https://www.amazon.ca/dp/1782273670',
        price: '21.95',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Art', 'Biography'],
    },
    {
        id: 10105,
        name: 'The Ongoing Moment - Geoff Dyer',
        checker: 'The Ongoing Moment',
        description: 'Great photographs change the way we see the world; The Ongoing Moment changes the way we look at both. An original book that will help the reader understand an art that most people are unaware of.',
        image: 'assets/img/10105.jpg',
        alt: "Cover of the book 'The Ongoing Moment' by Geoff Dyer",
        link: 'https://www.amazon.ca/dp/0857864017',
        price: '22.11',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Art'],
    },
    {
        id: 10106,
        name: 'Creative Block: Get Unstuck, Discover New Ideas - Danielle Krysa',
        checker: 'Get Unstuck, Discover New Idea',
        description: 'Creative block presents the most crippling—and unfortunately universal—challenge for artists. This chunky blockbuster of a book is chock-full of solutions for overcoming all manner of artistic impediment and conquer self-doubt, stay motivated, and get new ideas to flow.',
        image: 'assets/img/10106.jpg',
        alt: "Cover of the book 'Creative Block: Get Unstuck, Discover New Ideas' by Danielle Krysa",
        link: 'https://www.amazon.ca/dp/1452118884',
        price: '48.28',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Art', 'Self-Improvement'],
    },
    {
        id: 10201,
        name: 'A Beautiful Mind - Sylvia Nasar',
        checker: 'Beautiful Mind',
        description: 'You probably already watched the classic movie about the mathematician John Nash, who overcame serious mental illness and schizophrenia to win the Nobel Prize. This powerful, dramatic biography of the math genius is even better!',
        image: 'assets/img/10201.jpg',
        alt: "Cover of the book 'A Beautiful Mind' by Sylvia Nasar",
        link: 'https://www.amazon.ca/dp/1451628420',
        price: '28.00',
        gender: [''],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'Science'],
    },
    {
        id: 10202,
        name: 'Barracoon: The Story of the Last "Black Cargo" - Zora Neale Hurston',
        checker: 'Barracoon',
        description: 'Barracoon is the down to earth reminiscences of the last surviving man in America who was enslaved and brought over from Africa.\nThe author perfectly express why she wrote this book: “All these words from the seller, but not one word from the sold.”',
        image: 'assets/img/10202.jpg',
        alt: 'Cover of the book \'Barracoon: The Story of the Last "Black Cargo"\' by Zora Neale Hurston',
        link: 'https://www.amazon.ca/dp/0062748211',
        price: '20.79',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History'],
    },
    {
        id: 10203,
        name: 'The Morning Deluge: Mao Tsetung and the Chinese Revolution, 1893-1954 - Han Suyin',
        checker: 'Morning Deluge',
        description: "Different from the usual anti-mao hysteria, of Communist China in the 20th century, Han Suyin is openly sympathetic to Mao and to the revolution, which makes reading it all the better.\nThis first volume talk about Mao's early days as the armed prophet, while the second volume - Wind In the Tower - deals with Mao's years in power.",
        image: 'assets/img/10203.jpg',
        alt: "Cover of the book 'The Morning Deluge I: From Mao's Childhood to The Long March' by Han Suyin",
        link: 'https://www.amazon.ca/dp/0316342890',
        price: '67.91',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History', 'Politics'],
    },
    {
        id: 10204,
        name: 'Wind in the Tower: Mao Tsetung & The Chinese Revolution, 1949-1975 - Han Suyin',
        checker: 'Wind in the Tower',
        description: "Different from the usual anti-mao hysteria, of Communist China in the 20th century, Han Suyin is openly sympathetic to Mao and to the revolution, which makes reading it all the better.\nThis second volume talk about Mao's years in power, while the first volume - The Morning Deluge - deals with Mao's early days as the armed prophet.",
        image: 'assets/img/10204.jpg',
        alt: "Cover of the book 'Wind in the Tower: Mao Tsetung & The Chinese Revolution, 1949-1975' by Han Suyin",
        link: 'https://www.amazon.ca/dp/0586045058/',
        price: '67.71',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History', 'Politics'],
    },
    {
        id: 10205,
        name: 'Napoleon: A Life - Andrew Roberts',
        checker: 'Napoleon',
        description: 'Like Mao Tse-tung, George Washington and his own hero Julius Caesar, he was one of the greatest soldier-statesmen of all times. But Napoleon Bonaparte was far more than a military genius and astute leader of men. Even if Napoleon hadn’t been one of the great military geniuses of history, he would still be a giant of the modern era because of his influence in the world until today.',
        image: 'assets/img/10205.jpg',
        alt: "Cover of the book 'Napoleon: A Life' by Andrew Roberts",
        link: 'https://www.amazon.ca/dp/0143127853',
        price: '40.40',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History'],
    },
    {
        id: 10206,
        name: 'Julius Caesar - Philip Freeman',
        checker: 'Julius Caesar',
        description: 'More than two thousand years after his death, Julius Caesar remains one of the great figures of history. He shaped Rome for generations, and his name became a synonym for "emperor". A brilliant orator, an accomplished writer, a skilled politician, and much more. Julius Caesar was a complex man, both hero and villain.',
        image: 'assets/img/10206.jpg',
        alt: "Cover of the book 'Julius Caesar' by Philip Freeman",
        link: 'https://www.amazon.ca/dp/0743289536',
        price: '30.83',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History'],
    },
    {
        id: 10207,
        name: 'Augustus: First Emperor of Rome - Adrian Goldsworthy',
        checker: 'First Emperor of Rome',
        description: 'The dramatic story of Rome’s first emperor, who plunged into Rome’s violent power struggles at the age of nineteen, proceeded to destroy all rivals, and more than anyone else created the Roman Empire.',
        image: 'assets/img/10207.jpg',
        alt: "Cover of the book 'Augustus: First Emperor of Rome' by Adrian Goldsworthy",
        link: 'https://www.amazon.ca/dp/0812970586',
        price: '26.73',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History'],
    },
    {
        id: 10208,
        name: 'Steve Jobs - Walter Isaacson',
        checker: 'Steve Jobs',
        description: 'Based on many interviews with Steve Jobs conducted over two years, Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries.',
        image: 'assets/img/10208.jpg',
        alt: "Cover of the book 'Steve Jobs' by Walter Isaacson",
        link: 'https://www.amazon.ca/dp/1501127624',
        price: '29.70',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'technology'],
    },
    {
        id: 10209,
        name: 'Mozart: A Life - Peter Gay',
        checker: 'Mozart',
        description: "'Mozart' traces the development of the - arguably - the greatest Western musician of all time, whose life was a whirlwind of achievement, and the composer who pushed every instrument to its limit and every genre of classical music into new realms.\nThis biography is short but concise and academic. Very informative, especially for classical music admirers and listeners.",
        image: 'assets/img/10209.jpg',
        alt: "Cover of the book 'Mozart: A Life' by Peter Gay",
        link: 'https://www.amazon.ca/dp/0670882380',
        price: '14.57',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'Musician', 'Listeners'],
    },
    {
        id: 10210,
        name: 'Beethoven - Maynard Solomon',
        checker: 'Beethoven',
        description: "Hailed as a masterpiece for its original interpretations of Beethoven's life and music, this edition takes into account the latest information and literature.\nIf you wish to preserve your view of Beethoven, the genius who lived a perfect - trouble free life, do not read this book.",
        image: 'assets/img/10210.jpg',
        alt: "Cover of the book 'Beethoven' by Maynard Solomon",
        link: 'https://www.amazon.ca/dp/002872240X',
        price: '13.49',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'Musician', 'Listeners'],
    },
    {
        id: 10211,
        name: 'Anthony Bourdain Remembered - CNN',
        checker: 'Anthony Bourdain Remembered',
        description: 'Anthony was a communicator, provocateur and humanist. His empathy and curious nature let him experience and see the world as few do. He inspired us to be better and more open minded people and showed us that people are around the world aren’t so different.',
        image: 'assets/img/10211.jpg',
        alt: "Cover of the book 'Anthony Bourdain Remembered' by CNN",
        link: 'https://www.amazon.ca/dp/0062956582',
        price: '35.75',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'Food'],
    },
    {
        id: 10212,
        name: 'Stalin: Volume I: Paradoxes of Power, 1878-1928 - Stephen Kotkin',
        checker: 'Paradoxes of Power',
        description: 'A magnificent new biography with 2 volumes (until now) that revolutionizes our understanding of Stalin and his world.',
        image: 'assets/img/10212.jpg',
        alt: "Cover of the book 'Stalin: Volume I: Paradoxes of Power, 1878-1928' by Stephen Kotkin",
        link: 'https://www.amazon.ca/dp/0143127861',
        price: '32.77',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History', 'Politics'],
    },
    {
        id: 10213,
        name: 'Stalin: Volume II: Waiting for Hitler 1929-1941 - Stephen Kotkin',
        checker: 'Waiting for Hitler',
        description: "Pulitzer Prize-finalist Stephen Kotkin continues his definitive biography of Stalin, from collectivization and the Great Terror through to the coming of the conflict with Hitler's Germany that is the signal event of modern world history.",
        image: 'assets/img/10213.jpg',
        alt: "Cover of the book 'Stalin: Waiting for Hitler 1929-1941' by Stephen Kotkin",
        link: 'https://www.amazon.ca/dp/0141027959',
        price: '39.54',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History', 'Politics'],
    },
    {
        id: 10214,
        name: 'Leonardo da Vinci - Walter Isaacson',
        checker: 'da Vinci',
        description: "Based on thousands of pages from Leonardo's astonishing notebooks and new discoveries about the life and work of history's most creative genius, Walter Isaacson weaves a narrative that connects his art to his science.",
        image: 'assets/img/10214.jpg',
        alt: "Cover of the book 'Leonardo da Vinci' by Walter Isaacson",
        link: 'https://www.amazon.ca/dp/1501139169',
        price: '29.70',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'Art'],
    },
    {
        id: 10215,
        name: 'Genghis Khan and the Making of the Modern World - Jack Weatherford',
        checker: 'Genghis Khan',
        description: 'From the his relentless rise through Mongol tribal culture to the waging of his devastatingly successful wars and the explosion of civilization that the Mongol Empire unleashed. This dazzling work of revisionist history doesn’t just paint an unprecedented portrait of a great leader and his legacy, but challenges us to reconsider how the modern world was made.',
        image: 'assets/img/10215.jpg',
        alt: "Cover of the book 'Genghis Khan and the Making of the Modern World' by Jack Weatherford",
        link: 'https://www.amazon.ca/dp/0609809644',
        price: '22.77',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'History'],
    },
    {
        id: 10216,
        name: 'Dostoevsky: A Writer in His Time - Joseph Frank',
        checker: 'Dostoevsky',
        description: 'More than a biography in the usual sense, this is a cultural history of nineteenth - century Russia, providing both a rich picture of the world in which Dostoevsky lived and a major reinterpretation of his life and work.',
        image: 'assets/img/10216.jpg',
        alt: "Cover of the book 'Dostoevsky: A Writer in His Time' by Joseph Frank",
        link: 'https://www.amazon.ca/dp/0691155992',
        price: '44.54',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography'],
    },
    {
        id: 10217,
        name: 'King of the World: Muhammad Ali and the Rise of an American Hero - David Remnick',
        checker: 'Muhammad Ali',
        description: 'He changed the world of sports and went on to change the world itself. Ali was a transcendent athlete and entertainer. He was a mirror of his era, a dynamic figure in the racial and cultural battles of his time. This unforgettable story of his rise and self-creation, and takes us back to the days when his life was a series of battles, inside the ring and out.',
        image: 'assets/img/10217.jpg',
        alt: "Cover of the book 'King of the World: Muhammad Ali and the Rise of an American Hero' by David Remnick",
        link: 'https://www.amazon.ca/dp/0375702296',
        price: '19.95',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Biography', 'Sports', 'Boxing, Martial Arts & MMA'],
    },
    {
        id: 10301,
        name: 'The Intelligent Investor - Benjamin Graham',
        checker: 'Intelligent Investor',
        description: 'Graham\'s philosophy of "value investing" has made The Intelligent Investor the stock market bible ever since its original publication in 1949.\nVital and indispensable, this is the most important book you will ever read on how to reach your financial goals.',
        image: 'assets/img/10301.jpg',
        alt: "Cover of the book 'The Intelligent Investor' by Benjamin Graham",
        link: 'https://www.amazon.ca/dp/B017MYI5CQ',
        price: '68.50',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10302,
        name: "The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business - Clayton M. Christensen",
        checker: 'Dilemma',
        description: 'Harvard professor Clayton M. Christensen says outstanding companies can do everything right and still lose their market leadership -- or worse, disappear completely. And he not only proves what he says, he tells others how to avoid a similar fate.',
        image: 'assets/img/10302.jpg',
        alt: "Cover of the book 'The Innovator's Dilemma: The Revolutionary Book that Will Change the Way You Do Business' by Clayton M. Christensen",
        link: 'https://www.amazon.ca/dp/1633691780',
        price: '32.81',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10303,
        name: 'The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success - William N. Thorndike Jr.',
        checker: 'Outsiders',
        description: 'This refreshing, counterintuitive book, brings to bear the analytical wisdom of a successful career in investing, closely evaluating the performance of companies and their leaders.',
        image: 'assets/img/10303.jpg',
        alt: "Cover of the book 'The Outsiders: Eight Unconventional CEOs and Their Radically Rational Blueprint for Success' by William N. Thorndike Jr.",
        link: 'https://www.amazon.ca/dp/1422162672',
        price: '38.90',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10304,
        name: 'The Lean Startup - Eric Ries',
        checker: 'Lean Startup',
        description: 'Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.',
        image: 'assets/img/10304.jpg',
        alt: "Cover of the book 'The Lean Startup' by Eric Ries",
        link: 'https://www.amazon.ca/dp/0670921602',
        price: '24.38',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10305,
        name: 'Guerilla Marketing - Jay Conrad Levinson',
        checker: 'Guerilla Marketing',
        description: 'Based on hundreds of solid ideas that really work, Levinson’s philosophy has given birth to a new way of learning about market share and how to gain it.',
        image: 'assets/img/10305.jpg',
        alt: "Cover of the book 'Guerilla Marketing' by Jay Conrad Levinson",
        link: 'https://www.amazon.ca/dp/0395906253',
        price: '12.43',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10306,
        name: "First, Break All the Rules: What the World's Greatest Managers Do Differently - Gallup Organization",
        checker: 'Break All the Rules',
        description: 'Gallup presents the remarkable findings of its revolutionary study of more than 80,000 managers in First, Break All the Rules, revealing what the world’s greatest managers do differently.',
        image: 'assets/img/10306.jpg',
        alt: "Cover of the book 'First, Break All the Rules: What the World's Greatest Managers Do Differently' by Gallup Organization",
        link: 'https://www.amazon.ca/dp/1595621113',
        price: '34.57',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10307,
        name: 'Lean In: Women, Work, and the Will to Lead - Sheryl Sandberg',
        checker: 'Lean In',
        description: 'Lean In is a massive cultural phenomenon and its title has become an instant catchphrase for empowering women. The book soared to the top of bestseller lists internationally, igniting global conversations about women and ambition.',
        image: 'assets/img/10307.jpg',
        alt: "Cover of the book 'Lean In: Women, Work, and the Will to Lead' by Sheryl Sandberg",
        link: 'https://www.amazon.ca/dp/0385349947',
        price: '30.50',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10308,
        name: "Good to Great: Why Some Companies Make the Leap... and Others Don't - James C. Collins",
        checker: 'Good to Great',
        description: "To find the keys to greatness, Collins's 21-person research team read and coded 6,000 articles, generated more than 2,000 pages of interview transcripts and created 384 megabytes of computer data in a five-year project. The findings will surprise many readers and, quite frankly, upset others.",
        image: 'assets/img/10308.jpg',
        alt: "Cover of the book 'Good to Great: Why Some Companies Make the Leap... and Others Don't' by James C. Collins",
        link: 'https://www.amazon.ca/dp/0066621003',
        price: '11.99 ',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Business'],
    },
    {
        id: 10401,
        name: 'To Kill a Mockingbird - Harper Lee',
        checker: 'Kill a Mockingbird',
        description: 'Compassionate, dramatic, and deeply moving, "To Kill A Mockingbird" takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.',
        image: 'assets/img/10401.jpg',
        alt: "Cover of the book 'To Kill a Mockingbird' by Harper Lee",
        link: 'https://www.amazon.ca/dp/0446310786',
        price: '12.86',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Classic', 'Fiction'],
    },
    {
        id: 10402,
        name: '1984 - George Orwell',
        checker: '1984',
        description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real.',
        image: 'assets/img/10402.jpg',
        alt: "Cover of the book '1984' by George Orwell",
        link: 'https://www.amazon.ca/dp/B09PK6F3J8',
        price: '14.64',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Classic', 'Science Fiction'],
    },
    {
        id: 10403,
        name: "Harry Potter Box Set: The Complete Collection (children's Paperback) - J.K. Rowling",
        checker: 'Harry Potter',
        description: 'The perfect gift for collectors and new readers alike, this beautiful boxed set contains all seven Harry Potter novels in paperback. These new editions feature new jackets by Jonny Duddle, with huge child appeal, to bring Harry Potter to the next generation of readers.',
        image: 'assets/img/10403.jpg',
        alt: "Cover of 'Harry Potter Box Set: The Complete Collection (children's Paperback)' by J.K. Rowling",
        link: 'https://www.amazon.ca/dp/1408856778',
        price: '69.99 ',
        gender: ['all'],
        age: ['child', 'teen'],
        tags: ['book', 'Classic', 'Fantasy'],
    },
    {
        id: 10404,
        name: 'Harry Potter Boxed Set: The Complete Collection (adult Paperback) - J.K. Rowling',
        checker: 'Harry Potter Boxed Set',
        description: "The perfect gift for collectors and new readers alike, this beautiful boxed set contains all seven Harry Potter novels in paperback. These adult editions of J.K. Rowling's Harry Potter novels have been stylishly redesigned to showcase beautiful jackets by renowned woodcut artist Andrew Davidson.",
        image: 'assets/img/10404.jpg',
        alt: "Cover of 'Harry Potter Boxed Set: The Complete Collection (adult Paperback)' by J.K. Rowling",
        link: 'https://www.amazon.ca/dp/1408898659',
        price: '104.45',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Classic', 'Fantasy'],
    },
    {
        id: 10405,
        name: 'Harry Potter Adult Hardback Box Set - J.K. Rowling',
        checker: 'Harry Potter',
        description: 'The perfect gift for collectors and new readers alike, this stunning box set contains all seven of the classic, multi-award-winning Harry Potter novels in beautiful new hardback editions, featuring elegant new interiors and stylish cover art by noted artist Andrew Davidson, to appeal to an adult readership. ',
        image: 'assets/img/10405.jpg',
        alt: "Cover of 'Harry Potter Adult Hardback Box Set' by J.K. Rowling",
        link: 'https://www.amazon.ca/dp/1408868377',
        price: '69.99 ',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Classic', 'Fantasy'],
    },
    {
        id: 10406,
        name: 'The Hobbit & The Lord Of The Rings: Boxed Set - J. R. R. Tolkien (Paperback)',
        checker: 'Hobbit',
        description: "This four-volume, boxed set contains J.R.R. Tolkien's epic masterpiece in Middle-earth. it contains Tolkien's epic works The Hobbit and the three volumes of The Lord of the Rings.",
        image: 'assets/img/10406.jpg',
        alt: "Cover of 'The Hobbit & The Lord Of The Rings Boxed Set' by J. R. R. Tolkien (Paperback)",
        link: 'https://www.amazon.ca/dp/0007525516',
        price: '75.58',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Classic', 'Fantasy', 'The Lord of The Rings'],
    },
    {
        id: 10407,
        name: 'The Great Gatsby - F. Scott Fitzgerald',
        checker: 'Gatsby',
        description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career.This exemplary novel of the Jazz Age has been acclaimed by generations of readers.The story is an exquisitely crafted tale of America in the 1920s.",
        image: 'assets/img/10407.jpg',
        alt: "Cover of 'The Great Gatsby' by F. Scott Fitzgerald",
        link: 'https://www.amazon.ca/dp/3903352489',
        price: '4.69',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['book', 'Classic', 'Fiction'],
    },
    {
        id: 10408,
        name: 'Pride and Prejudice - Jane Austen',
        checker: 'Pride and Prejudice',
        description: 'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print."',
        image: 'assets/img/10408.jpg',
        alt: "Cover of 'Pride and Prejudice' by Jane Austen",
        link: 'https://www.amazon.ca/dp/B0948LNYPP',
        price: '16.39',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Classic', 'Fiction', 'Romance'],
    },
    {
        id: 10409,
        name: 'The Diary Of A Young Girl - Anne Frank',
        checker: 'Anne Frank',
        description: 'Discovered in the attic in which she spent the last years of her life, Anne Frank’s remarkable diary has become a world classic—a powerful reminder of the horrors of war and an eloquent testament to the human spirit.',
        image: 'assets/img/10409.jpg',
        alt: "Cover of 'The Diary Of A Young Girl' by Anne Frank",
        link: 'https://www.amazon.ca/dp/0553577123',
        price: '10.88',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Classic'],
    },
    {
        id: 10410,
        name: 'The Book Thief - Markus Zusak',
        checker: 'Book Thief',
        description: "Set in Germany during 1939, The Book Thief follows Liesel as she rescues books from the tyranny of Nazi rule. It's a superbly crafted writing that burns with intensity in one of the most enduring stories of our time.",
        image: 'assets/img/10410.jpg',
        alt: "Cover of 'The Book Thief' by Markus Zusak",
        link: 'https://www.amazon.ca/dp/0375842209',
        price: '19.79',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Classic', 'Fiction'],
    },
    {
        id: 10411,
        name: 'Little Women - Louisa May Alcott',
        checker: 'Little Women',
        description: 'Join four sisters, each with their own prominent personality, as they come of age in charming 19th Century New England. Experience their struggles and revel in their flaws, as these girls become strong women.',
        image: 'assets/img/10411.jpg',
        alt: "Cover of 'Little Women' by Louisa May Alcott",
        link: 'https://www.amazon.ca/dp/0147514010',
        price: '17.82',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['teen', 'adult'],
        tags: ['Classic', 'Fiction'],
    },
    {
        id: 10412,
        name: 'Jane Eyre - Charlotte Brontë',
        checker: 'Jane Eyre',
        description: 'Arguably one of the most influential fictional heroines of all time, Jane Eyre is a strong, unbroken women despite her troubled childhood and repressed Victorian society.',
        image: 'assets/img/10412.jpg',
        alt: "Cover of 'Jane Eyre' by Charlotte Brontë",
        link: 'https://www.amazon.ca/dp/0486424499',
        price: '9.50',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['book', 'Classic', 'Fiction'],
    },
    {
        id: 10413,
        name: 'The Catcher in the Rye - J.D. Salinger',
        checker: 'Catcher in the Rye',
        description: 'The hero-narrator of The Catcher in the Rye is an exquisitely rendered character with whom nearly anyone can identify due to the teenage dilemma about the way life works, feelings of alienation and the struggle against the artificial world.',
        image: 'assets/img/10413.jpg',
        alt: "Cover of 'The Catcher in the Rye' by J.D. Salinger",
        link: 'https://www.amazon.ca/dp/0316769487',
        price: '12.86',
        gender: ['all'],
        age: ['teen'],
        tags: ['book', 'Classic', 'Fiction'],
    },
    {
        id: 10414,
        name: "Charlotte's Web - E.B. White",
        checker: 'Charlotte',
        description: 'A classic of children\'s literature that is "just about perfect." Charlotte’s Web is a compelling reminder to bask in the simplistic wonders of everyday life, and to be kind to all living creatures.\nThis book is a tender novel of friendship, love, life, and death that will continue to be enjoyed by generations to come.',
        image: 'assets/img/10414.jpg',
        alt: "Cover of 'Charlotte’s Web' by E.B. White",
        link: 'https://www.amazon.ca/dp/0064400557',
        price: '10.88',
        gender: ['all'],
        age: ['child'],
        tags: ['book', 'Classic'],
    },
    {
        id: 10415,
        name: 'The Lion, the Witch and the Wardrobe - C.S. Lewis',
        checker: 'the Witch and the Wardrobe',
        description: "Narnia is a country buried under the evil enchantment of the White Witch. When four kids meet the Lion Aslan, they realize they've been called to a great adventure and bravely join the battle to free Narnia from the Witch's sinister spell.\nLet you imagination run wild as you enter the wardrobe and meet some of the most famous literary characters in history.",
        image: 'assets/img/10415.jpg',
        alt: "Cover of 'The Lion, the Witch and the Wardrobe' by C.S. Lewis",
        link: 'https://www.amazon.ca/dp/0064471047',
        price: '10.33',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['book', 'Classic', 'Fantasy'],
    },
    {
        id: 10416,
        name: 'A Tale of Two Cities - Charles Dickens',
        checker: 'Tale of Two Citie',
        description: 'A Tale of Two Cities is Charles Dickens’s great historical novel, set against the violent upheaval of the French Revolution. The most famous and perhaps the most popular of his works, it compresses an event of immense complexity to the scale of a family history, with a cast of characters that includes a bloodthirsty ogress and an antihero as believably flawed as any in modern fiction.',
        image: 'assets/img/10416.jpg',
        alt: "Cover of 'A Tale of Two Cities' by Charles Dickens",
        link: 'https://www.amazon.ca/dp/1679260790',
        price: '14.99',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Classic', 'Fiction'],
    },
    {
        id: 10417,
        name: 'Romeo and Juliet - William Shakespeare',
        checker: 'Romeo and Juliet',
        description: 'Perhaps the most famous love story ever written, Romeo and Juliet is an epic tragedy that explores the euphoria of desire and the tragedy of revenge.',
        image: 'assets/img/10417.jpg',
        alt: "Cover of 'Romeo and Juliet' by William Shakespeare",
        link: 'https://www.amazon.ca/dp/B09HVGPH85',
        price: '7.79',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Classic', 'Romance'],
    },
    {
        id: 10418,
        name: 'The Color Purple - Alice Walker',
        checker: 'Color Purple',
        description: 'A powerful cultural touchstone of modern American literature, The Color Purple depicts the lives of African American women in early twentieth-century rural Georgia.\nThe Color Purple broke the silence around domestic and sexual abuse, narrating the lives of women through their pain and struggle, companionship and growth, resilience and bravery.',
        image: 'assets/img/10418.jpg',
        alt: "Cover of 'The Color Purple' by Alice Walker",
        link: 'https://www.amazon.ca/dp/1690382694',
        price: '37.25',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Classic', 'Fiction', 'LGBTQIA+'],
    },
    {
        id: 10419,
        name: 'The Hobbit & The Lord Of The Rings: Boxed Set - J. R. R. Tolkien (Hardcover)',
        checker: 'Hobbit',
        description: "This four-volume, boxed set contains J.R.R. Tolkien's epic masterpiece in Middle-earth. deluxe pocket boxed set contains Tolkien's epic works The Hobbit and the three volumes of The Lord of the Rings.",
        image: 'assets/img/10419.jpg',
        alt: "Cover of 'The Hobbit & The Lord Of The Rings Boxed Set' by J. R. R. Tolkien (Hardcover)",
        link: 'https://www.amazon.ca/dp/0544445783',
        price: '75.58',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Classic', 'Fantasy', 'The Lord of The Rings'],
    },
    {
        id: 10420,
        name: 'Where the Wild Things Are - Maurice Sendak',
        checker: 'Wild Things',
        description: 'The adventure that has inspired generations of children to let out their inner monsters, showing how imagination allows for an escape from life’s doldrums.',
        image: 'assets/img/10420.jpg',
        alt: "Cover of 'Where the Wild Things Are' by Maurice Sendak",
        link: 'https://www.amazon.ca/dp/0064431789',
        price: '75.58',
        gender: ['all'],
        age: ['child'],
        tags: ['Classic', 'Fantasy', 'Fiction'],
    },
    {
        id: 10421,
        name: 'Peter Pan - J. M. Barrie',
        checker: 'Peter Pan',
        description: 'This book is a classic because it surpasses time and culture to the journey and growth that every child experiences as they progress toward maturity.',
        image: 'assets/img/10421.jpg',
        alt: "Cover of 'Peter Pan' by J. M. Barrie",
        link: 'https://www.amazon.ca/dp/0064431789',
        price: '75.58',
        gender: ['all'],
        age: ['child'],
        tags: ['book', 'Classic', 'Fantasy'],
    },
    {
        id: 10501,
        name: 'Watchmen - Alan Moore',
        checker: 'Watchmen',
        description: 'One of the most influential graphic novels of all time and a perennial best-seller, Watchmen has been studied on college campuses across the nation and is considered a gateway title.',
        image: 'assets/img/10501.jpg',
        alt: "Cover of 'Watchmen' by Alan Moore",
        link: 'https://www.amazon.ca/dp/1401238963',
        price: '53.45',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Comics'],
    },
    {
        id: 10502,
        name: 'Batman: The Killing Joke - Alan Moore',
        checker: 'Killing Joke',
        description: "For the first time the Joker's origin is revealed in one of the classic and most brutal Joker vs Batman graphic novels. The Joker is as sinister and terrifying as ever and Batman is pushed to his limits and beyond. A fantastic fast-moving and beautifully drawn epic!",
        image: 'assets/img/10502.jpg',
        alt: "Cover of 'Batman: The Killing Joke' by Alan Moore",
        link: 'https://www.amazon.ca/dp/1401294057',
        price: '22.55',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Comics'],
    },
    {
        id: 10503,
        name: 'The Sandman (Box Set) - Neil Gaiman',
        checker: 'Sandman',
        description: 'The Sandman universe is a master-creation following Dream, also known as Morpheus, lord of the Dreaming. This comic weaves together ancient mythology, folklore, and fairy tales with his own distinct narrative vision, Gaiman created an unforgettable tale of the forces that exist beyond life and death.',
        image: 'assets/img/10503.jpg',
        alt: "Cover of 'The Sandman (Box Set)' by Neil Gaiman",
        link: 'https://www.chapters.indigo.ca/en-ca/books/product/9781401294700-item.html',
        price: '290.54 ',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Comics', 'Fantasy'],
    },
    {
        id: 10504,
        name: 'Batman: The Dark Knight Returns - Frank Miller',
        checker: ' Dark Knight Returns',
        description: "Frank Miller completely reinvents the legend of Batman in his saga of a near-future Gotham City gone to rot, ten years after the Dark Knight's retirement.\nOver fifteen years after its debut, Batman: The Dark Knight Returns remains an undisputed classic and one of the most influential stories ever told in the comics medium.",
        image: 'assets/img/10504.jpg',
        alt: "Cover of 'Batman: The Dark Knight Returns' by Frank Miller",
        link: 'https://www.amazon.ca/dp/1401263119',
        price: '25.73',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Comics'],
    },
    {
        id: 10505,
        name: 'The Complete Maus - Art Spiegelman',
        checker: 'Maus',
        description: 'By addressing the horror of the Holocaust through cartoons, the author captures the everyday reality of fear and is able to explore the guilt, relief and extraordinary sensation of survival - and how the children of survivors are in their own way affected by the trials of their parents. A contemporary classic of immeasurable significance.',
        image: 'assets/img/10505.jpg',
        alt: "Cover of 'The Complete Maus' by Art Spiegelman",
        link: 'https://www.amazon.ca/dp/0141014083',
        price: '36.76',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Comics', 'History'],
    },
    {
        id: 10506,
        name: '300 - Frank Miller',
        checker: 'Frank Miller',
        description: 'The armies of Persia -- a vast horde greater than any the world has ever known -- are poised to crush Greece, an island of reason and freedom in a sea of madness and tyranny. Standing between Greece and this tidal wave of destruction are a tiny detachment of but three hundred warriors.',
        image: 'assets/img/10506.jpg',
        alt: "Cover of '300' by Frank Miller",
        link: 'https://www.amazon.ca/dp/B00A7H2MG6',
        price: ' = A.',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Comics'],
    },
    {
        id: 10507,
        name: 'Big Damn Sin City - Frank Miller',
        checker: 'Sin City',
        description: 'The biggest, baddest Sin City ever. All seven Sin City yarns are collected here, in this one monster volume, suitable for home defense — over 1300 big damn pages of unmatched intensity in which no corner of Basin City is left unturned and no bloody deed is left undone.',
        image: 'assets/img/10507.jpg',
        alt: "Cover of 'Big Damn Sin City' by Frank Miller",
        link: 'https://www.amazon.ca/dp/1616552379',
        price: '300.00                ',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Comics'],
    },
    {
        id: 10601,
        name: 'Capital in the Twenty-First Century - Thomas Piketty',
        checker: 'Capital',
        description: 'Questions about the long-term evolution of inequality, the concentration of wealth, and the prospects for economic growth is analyzed to uncover key economic and social patterns.',
        image: 'assets/img/10601.jpg',
        alt: "Cover of 'Capital in the Twenty-First Century' by Thomas Piketty",
        link: 'https://www.amazon.ca/dp/0674979850',
        price: '25.69',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Economics'],
    },
    {
        id: 10602,
        name: 'Das Kapital - Karl Marx',
        checker: 'Kapital',
        description: "Das Kapital, Karl Marx's seminal work, is the book that above all others formed the twentieth century. From Kapital ideas sprung the inspiration for economic and political systems that since then have had an ideological war against capitalism, a struggle that helped to shape the world today.",
        image: 'assets/img/10602.jpg',
        alt: "Cover of 'Das Kapital' by Karl Marx",
        link: 'https://www.amazon.ca/dp/145388632X',
        price: '13.03',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Economics', 'Politics', 'Philosophy'],
    },
    {
        id: 10603,
        name: 'The Wealth of Nations - Adam Smith',
        checker: 'Wealth of Nations',
        description: "Adam Smith paved the way for modern capitalism, arguing that a truly free market - fired by competition yet guided as if by an 'invisible hand' to ensure justice and equality - was the engine of a fair and productive society.",
        image: 'assets/img/10603.jpg',
        alt: "Cover of 'The Wealth of Nations' by Adam Smith",
        link: 'https://www.amazon.ca/dp/1680920960',
        price: '24.77',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Economics', 'Politics'],
    },
    {
        id: 10701,
        name: 'American Gods - Neil Gaiman',
        checker: 'American Gods',
        description: "Scary, gripping and deeply unsettling, American Gods takes a long, hard look into the soul of America. You'll be surprised by what - and who - it finds there...",
        image: 'assets/img/10701.jpg',
        alt: "Cover of 'American Gods' by Neil Gaiman",
        link: 'https://www.amazon.ca/dp/0755322819',
        price: '5.62',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fantasy'],
    },
    {
        id: 10702,
        name: 'On the Road - Jack Kerouac',
        checker: 'On the Road',
        description: 'Kerouac\'s love of America, compassion for humanity & sense of language as jazz combine to make this book an inspirational work of lasting importance. This classic novel of freedom & longing defined what it meant to be "Beat" & has inspired every generation since its initial publication.',
        image: 'assets/img/10702.jpg',
        alt: "Cover of 'On the Road' by Jack Kerouac",
        link: 'https://www.amazon.ca/dp/0140042598',
        price: '21.41',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Fiction'],
    },
    {
        id: 10703,
        name: 'Don Quixote - Miguel de Cervantes Saavedra',
        checker: 'Don Quixote',
        description: 'With its experimental form and literary playfulness, Don Quixote has been generally recognized as the first modern novel. The book has been enormously influential on a host of writers, like Faulkner, who reread it once a year, "just as some people read the Bible."',
        image: 'assets/img/10703.jpg',
        alt: "Cover of 'Don Quixote' by Miguel de Cervantes Saavedra",
        link: 'https://www.amazon.ca/dp/0060934344',
        price: '22.95',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Fiction', 'Classic', 'book'],
    },
    {
        id: 10704,
        name: 'Moby-Dick - Herman Melville',
        checker: 'Moby',
        description: "A masterpiece, one of the greatest works of imagination in literary history. More than just a novel of adventure, more than an encyclopaedia of whaling lore and legend, the book can be seen as part of its author's lifelong meditation on America. Written with wonderfully redemptive humour, Moby-Dick is also a profound inquiry into character, faith, and the nature of perception.",
        image: 'assets/img/10704.jpg',
        alt: "Cover of 'Moby-Dick' by Herman Melville",
        link: 'https://www.amazon.ca/dp/0486432157',
        price: '7.50',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Fiction', 'Classic'],
    },
    {
        id: 10705,
        name: 'The Picture of Dorian Gray - Oscar Wilde',
        checker: 'Dorian Gray',
        description: 'Written in his distinctively dazzling manner, Oscar Wilde’s story of a fashionable young man who sells his soul for eternal youth and beauty is the author’s most popular work.\nJust a few years later, the book and the aesthetic/moral dilemma it presented became issues in the trials occasioned by Wilde’s homosexual liaisons, which resulted in his imprisonment.',
        image: 'assets/img/10705.jpg',
        alt: "Cover of 'The Picture of Dorian Gray' by Oscar Wilde",
        link: 'https://www.amazon.ca/dp/B08TZ7HNCK',
        price: '19.03',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Fiction', 'LGBTQIA+', 'Classic'],
    },
    {
        id: 10706,
        name: 'Goodnight Moon - Margaret Wise Brown',
        checker: 'Goodnight Moon',
        description: "In this classic of children's literature, the quiet poetry of the words and the gentle, lulling illustrations combine to make the ultimate going-to-bed book.",
        image: 'assets/img/10706.jpg',
        alt: "Cover of 'Goodnight Moon' by Margaret Wise Brown",
        link: 'https://www.amazon.ca/dp/0694003611',
        price: '19.03',
        gender: ['all'],
        age: ['child'],
        tags: ['Fiction', 'Classic'],
    },
    {
        id: 10801,
        name: 'Pride: The Story of Harvey Milk and the Rainbow Flag - Rob Sanders',
        checker: 'Harvey Milk',
        description: 'In this deeply moving and empowering true story, young readers will trace the life of the Gay Pride Flag, from its beginnings in 1978 with social activist Harvey Milk and designer Gilbert Baker to its spanning of the globe and its role in today’s world.',
        image: 'assets/img/10801.jpg',
        alt: "Cover of 'Pride: The Story of Harvey Milk and the Rainbow Flag' by Rob Sanders",
        link: 'https://www.amazon.ca/dp/0399555315',
        price: '23.75',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['LGBTQIA+'],
    },
    {
        id: 10802,
        name: 'Aristotle and Dante Discover the Secrets of the Universe - Benjamin Alire Sáenz',
        checker: 'Aristotle',
        description: 'Aristotle is an angry teen with a brother in prison. Dante is a know-it-all who has an unusual way of looking at the world that through their friendship will learn the most important truths about themselves and the kind of people they want to be.',
        image: 'assets/img/10802.jpg',
        alt: "Cover of 'Aristotle and Dante Discover the Secrets of the Universe' by Benjamin Alire Sáenz",
        link: 'https://www.amazon.ca/dp/1442408936',
        price: '19.79',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['LGBTQIA+'],
    },
    {
        id: 10803,
        name: 'We Are Everywhere: Protest, Power, and Pride in the History of Queer Liberation - Matthew Riemer and Leighton Brown',
        checker: 'We Are Everywhere',
        description: 'A rich and sweeping photographic history of the Queer Liberation Movement, from the creators and curators of the massively popular Instagram account @lgbt_history, released in time for the 50th anniversary of the Stonewall Riots.',
        image: 'assets/img/10803.jpg',
        alt: "Cover of 'We Are Everywhere' by Matthew Riemer and Leighton Brown",
        link: 'https://www.amazon.ca/dp/0399581812',
        price: '52.24',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['LGBTQIA+'],
    },
    {
        id: 10901,
        name: 'Guns, Germs, and Steel: The Fates of Human Societies - Jared Diamond',
        checker: 'Fates of Human Societies',
        description: 'A major advance in our understanding of human societies, Guns, Germs, and Steel chronicles the way that the modern world came to be and stunningly dismantles racially based theories of human history by convincingly arguing that geographical and environmental factors shaped the modern world.',
        image: 'assets/img/10901.jpg',
        alt: "Cover of 'Guns, Germs, and Steel: The Fates of Human Societies' by Jared Diamond",
        link: 'https://www.amazon.ca/dp/0606412735',
        price: '41.31',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['History'],
    },
    {
        id: 10902,
        name: 'History of the Ancient World: From The Earliest Accounts To The Fall Of Rome - Susan Wise Bauer',
        checker: 'Ancient World',
        description: 'This is the first volume in a bold new series that tells the stories of all peoples, connecting historical events from Europe to the Middle East to the far coast of China, while still giving weight to the characteristics of each country.\nSusan Wise Bauer provides both sweeping scope and vivid attention to the individual lives that give flesh to abstract assertions about human history.',
        image: 'assets/img/10902.jpg',
        alt: "Cover of 'The History of the Ancient World' by Susan Wise Bauer",
        link: 'https://www.amazon.ca/dp/039305974X',
        price: '35.30',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['History'],
    },
    {
        id: 10903,
        name: "The Rise of Rome: The Making of the World's Greatest Empire - Anthony Everitt",
        checker: 'Rise of Rome',
        description: 'Rome’s decline and fall have long fascinated historians, but the story of how the empire was won is every bit as compelling. With The Rise of Rome, one of our most revered chroniclers of the ancient world tells that tale in a way that will galvanize, inform, and enlighten modern readers.',
        image: 'assets/img/10903.jpg',
        alt: "Cover of 'The Rise of Rome: The Making of the World's Greatest Empire' by Anthony Everitt",
        link: 'https://www.amazon.ca/dp/0812978153',
        price: '19.00',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['History'],
    },
    {
        id: 10904,
        name: 'Sapiens: A Brief History of Humankind - Yuval Noah Harari',
        checker: 'Sapiens',
        description: 'Drawing on insights from biology, anthropology, paleontology and economics, Dr Harari explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities.\nBold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.',
        image: 'assets/img/10904.jpg',
        alt: "Cover of 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari",
        link: 'https://www.amazon.ca/dp/0771038518',
        price: '22.77',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['History', 'book'],
    },
    {
        id: 11001,
        name: 'The Cask of Amontillado - Edgar Allan Poe',
        checker: 'Cask of Amontillado',
        description: 'Short story by Edgar Allan Poe set in a nameless Italian city in an unspecified year (possibly sometime during the eighteenth century) and concerns the deadly revenge taken by the narrator on a friend who he claims has insulted him.',
        image: 'assets/img/11001.jpg',
        alt: "Cover of 'The Cask of Amontillado' by Edgar Allan Poe",
        link: 'https://www.amazon.ca/dp/1512063258',
        price: '9.15',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Horror'],
    },
    {
        id: 11002,
        name: 'Dracula - Bram Stoker',
        checker: 'Dracula',
        description: 'Although Stoker did not invent the vampire, he defined its modern form, and the novel has spawned numerous theatrical, film and television interpretations.',
        image: 'assets/img/11002.jpg',
        alt: "Cover of 'Dracula' by Bram Stoker",
        link: 'https://www.amazon.ca/dp/1954839383',
        price: '16.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Horror', 'Classic'],
    },
    {
        id: 11003,
        name: 'The Woman in Black - Susan Hill',
        checker: 'Woman in Black',
        description: "The Woman In Black is both a brilliant exercise in atmosphere and controlled horror and a delicious spine-tingler--proof positive that this neglected genre, the ghost story, isn't dead after all, with a chilling tale about a menacing spectre haunting a small English town",
        image: 'assets/img/11003.jpg',
        alt: "Cover of 'The Woman in Black' by Susan Hill",
        link: 'https://www.amazon.ca/dp/0140071334',
        price: '2.49',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Horror'],
    },
    {
        id: 11101,
        name: 'Fear And Loathing In Las Vegas - Hunter S. Thompson',
        checker: 'Loathing',
        description: 'Fear and Loathing in Las Vegas is the best chronicle of drug- soaked, addle - brained, rollicking good times ever committed to the printed page.It is also the tale of a long weekend road trip that has gone down in the annals of American pop culture as one of the strangest journeys ever undertaken.',
        image: 'assets/img/11101.jpg',
        alt: "Cover of 'Fear And Loathing In Las Vegas' by Hunter S. Thompson",
        link: 'https://www.amazon.ca/dp/B01LB7JVEQ',
        price: '41.90 ',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Humor'],
    },
    {
        id: 11102,
        name: 'Good Omens - Terry Pratchett and Neil Gaiman',
        checker: 'Good Omens',
        description: 'People have been predicting the end of the world almost from its very beginning, so it’s only natural to be sceptical when a new date is set for Judgement Day. This time though, the armies of Good and Evil really do appear to be massing. But both the angels and demons – well, one fast-living demon and a somewhat fussy angel – would quite like the Rapture not to happen.',
        image: 'assets/img/11102.jpg',
        alt: "Cover of 'Good Omens",
        link: 'https://www.amazon.ca/dp/0552137030',
        price: '13.85',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Humor'],
    },
    {
        id: 11103,
        name: 'Me Talk Pretty One Day - David Sedaris',
        checker: 'Talk Pretty',
        description: "David Sedaris' - one of the true masters of the witty one-liner - move to Paris from New York inspired this compilation of hilarious stories with a unique and funny way of looking at situations.",
        image: 'assets/img/11103.jpg',
        alt: "Cover of 'Me Talk Pretty One Day' by David Sedaris",
        link: 'https://www.amazon.ca/dp/0316776963',
        price: '10.92',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Humor'],
    },
    {
        id: 11201,
        name: 'Death Note Complete Box Set- Tsugumi Ohba',
        checker: 'Death Note',
        description: 'Death Note is a great thriller, with good characters, surprisingly good humor (given the dark tone of the story), and it even manages to address some real-world issues. This custom box set includes all 12 books from the Death Note series, the information How To Read "Death Note 13" and exclusive Death Note premium gifts!',
        image: 'assets/img/11201.jpg',
        alt: "Cover of 'Death Note Complete Box Set' by Tsugumi Ohba",
        link: 'https://www.amazon.ca/dp/142152581X',
        price: '234.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Manga', 'book'],
    },
    {
        id: 11202,
        name: 'Akira 35th Anniversary Box Set - Katsuhiro Otomo',
        checker: 'Akira',
        description: 'An all-new, complete 35th anniversary hardcover box set of one of the most acclaimed and influential comics of all time, with the original Japanese art and right-to-left reading format for the first time! The story is fast-paced and has plenty of existential concepts. This science fiction epic changed anime and manga forever',
        image: 'assets/img/11202.jpg',
        alt: "Cover of 'Akira 35th Anniversary Box Set' by Katsuhiro Otomo",
        link: 'https://www.amazon.ca/dp/1632364611',
        price: '243.23',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Manga'],
    },
    {
        id: 11203,
        name: 'All You Need Is Kill - Hiroshi Sakurazaka',
        checker: 'Need Is Kill',
        description: 'When the alien Gitai invade, Keiji Kiriya is just one of many raw recruits shoved into a suit of battle armor and sent out to kill. Keiji dies on the battlefield, only to find himself reborn each morning to fight and die again and again.',
        image: 'assets/img/11203.jpg',
        alt: "Cover of 'All You Need Is Kill' by Hiroshi Sakurazaka",
        link: 'https://www.amazon.ca/dp/1421527618',
        price: '15.30',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Manga'],
    },
    {
        id: 11301,
        name: 'The Girl with the Dragon Tattoo - Stieg Larssona',
        checker: 'Dragon Tattoo',
        description: 'An amazing book that combines murder mystery, family saga, love story, and financial intrigue into one satisfyingly complex and entertainingly atmospheric novel.',
        image: 'assets/img/11301.jpg',
        alt: "Cover of 'The Girl with the Dragon Tattoo' by Stieg Larsson",
        link: 'https://www.amazon.ca//dp/1785861735',
        price: '25.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Mistery'],
    },
    {
        id: 11302,
        name: 'Hannibal Lecter Series Collection 4 Books Set - Thomas Harris',
        checker: 'Hannibal',
        description: 'All the novels that created legendary Hannibal Lecter. The ultimate villain of modern fiction.',
        image: 'assets/img/11302.jpg',
        alt: "Cover of 'Hannibal Lecter Series Collection 4 Books Set' by Thomas Harris",
        link: 'https://www.amazon.ca/dp/9526530454',
        price: '42.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Mistery'],
    },
    {
        id: 11303,
        name: 'In Cold Blood - Truman Capote',
        checker: 'Cold Blood',
        description: 'An absolute masterpiece of True Crime literature. In Cold Blood is both gritty and intelligent!',
        image: 'assets/img/11303.jpg',
        alt: "Cover of 'In Cold Blood' by Truman Capote",
        link: 'https://www.amazon.ca/dp/0679745580',
        price: '21.00',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Mistery'],
    },
    {
        id: 11401,
        name: 'History of Western Philosophy - Bertrand Russell',
        checker: 'Western Philosophy',
        description: 'This book has been universally acclaimed as the outstanding one-volume work on the subject—unparalleled in its comprehensiveness, its clarity, its erudition, its grace and wit.',
        image: 'assets/img/11401.jpg',
        alt: "Cover of 'A History of Western Philosophy' by Bertrand Russell",
        link: 'https://www.amazon.ca/dp/0671201581',
        price: '28.70',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Philosophy', 'History'],
    },
    {
        id: 11402,
        name: 'The Art of War - Sun Tzu',
        checker: 'Art of War',
        description: 'The Art of War is a book which should be used to gain advantage of opponents in politics, business and everyday life.',
        image: 'assets/img/11402.jpg',
        alt: "Cover of 'The Art of War' by Sun Tzu",
        link: 'https://www.amazon.ca/dp/1502449374',
        price: '5.04',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['book', 'Philosophy'],
    },
    {
        id: 11403,
        name: 'The Prince - Niccolò Machiavelli',
        checker: 'Prince',
        description: 'The Art of War is a book which should be used to gain advantage of opponents in politics, business and everyday life.',
        image: 'assets/img/11403.jpg',
        alt: "Cover of 'The Prince' by Niccolò Machiavelli",
        link: 'https://www.amazon.ca/dp/1954839278',
        price: '10.99',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Philosophy', 'Classics'],
    },
    {
        id: 11404,
        name: 'The Republic - Plato',
        checker: 'Republic',
        description: 'Written around 380 BCE, this text is considered to be one of the most influential pieces ever written. The Republic observes justice in man and politics and discusses the role of the philosopher in society.',
        image: 'assets/img/11404.jpg',
        alt: "Cover of 'The Republic' by Plato",
        link: 'https://www.amazon.ca/dp/0140455116',
        price: '17.33',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Philosophy', 'Classics'],
    },
    {
        id: 11501,
        name: 'Milk and Honey - Rupi Kaur',
        checker: 'Milk and Honey',
        description: 'A collection of poetry and prose about the most bitter moments in life and how to find sweetness in them because there is sweetness everywhere if you are just willing to look.',
        image: 'assets/img/11501.jpg',
        alt: "Cover of 'Milk and Honey' by Rupi Kaur",
        link: 'https://www.amazon.ca/dp/144947425X',
        price: '19.72',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Poetry'],
    },
    {
        id: 11502,
        name: 'I Wrote This For You - Iain S. Thomas',
        checker: 'Wrote This For You',
        description: 'A collaborative photography and prose project. (The photographer sends the writer a new photograph from wherever he is in the world. The writer creates a poem or short piece of prose inspired by the photograph and focused on whoever might be reading the work, or "you." The writer and the photographer have never met.',
        image: 'assets/img/11502.jpg',
        alt: "Cover of 'I Wrote This For You' by Iain S. Thomas",
        link: 'https://www.amazon.ca/dp/1449497012',
        price: '22.33',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Poetry'],
    },
    {
        id: 11503,
        name: 'Autobiography of Death - Kim Hyesoon',
        checker: 'Autobiography of Death',
        description: 'Forty-nine poems, each poem representing a single day during which the spirit roams after death before it enters the cycle of reincarnation.',
        image: 'assets/img/11503.jpg',
        alt: "Cover of 'Autobiography of Death' by Kim Hyesoon",
        link: 'https://www.amazon.ca/dp/0811227340',
        price: '22.95',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Poetry'],
    },
    {
        id: 11601,
        name: 'The Communist Manifesto - Karl Marx, Friedrich Engels',
        checker: 'Communist Manifesto',
        description: "A rousing call to arms whose influence is still felt today. The Communist Manifesto is a good introduction to Marx's philosophy and ideals.",
        image: 'assets/img/11601.jpg',
        alt: "Cover of 'The Communist Manifesto' by Karl Marx and Friedrich Engels",
        link: 'https://www.amazon.ca/dp/1945186259',
        price: '12.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Politics'],
    },
    {
        id: 11602,
        name: 'Orientalism - Edward W. Said',
        checker: 'Orientalism',
        description: 'Orientalism discusses how historical, cultural, and political perceptions of the Eastern world are bound to the structures and societies that create them. Since these patronizing and exaggerated depictions of difference are designed in such a way that Western superiority is highlighted in comparison, Orientalism becomes a critique of Westerns politics and power.',
        image: 'assets/img/11602.jpg',
        alt: "Cover of 'Orientalism' by Edward W. Said",
        link: 'https://www.amazon.ca/dp/039474067X',
        price: '23.00',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11603,
        name: 'Women, Race & Class - Angela Y. Davis',
        checker: 'Race',
        description: "A powerful study of the women's movement in the U.S. from abolitionist days to the present that demonstrates how it has always been hampered by the racist and classist biases of its leaders.",
        image: 'assets/img/11603.jpg',
        alt: "Cover of 'Women, Race & Class' by Angela Y. Davis",
        link: 'https://www.amazon.ca/dp/0394713516',
        price: '21.35',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11604,
        name: 'Deterring Democracy - Noam Chomsky',
        checker: 'Deterring',
        description: 'Chomsky criticizes the imperialistic behavior of the United States in the country’s quest to remain a dominant economic and militaristic world superpower, linking this domination to authoritarian regimes.',
        image: 'assets/img/11604.jpg',
        alt: "Cover of 'Deterring Democracy' by Noam Chomsky",
        link: 'https://www.amazon.ca/dp/0374523495',
        price: '33.17',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11605,
        name: 'Long Walk to Freedom - Nelson Mandela',
        checker: 'Long Walk',
        description: 'Though this is an autobiography, rather than a political essay, it is crucial text about racial oppression by governments, and how South Africa moved to a majority-rule governance system under Mandela’s leadership.',
        image: 'assets/img/11605.jpg',
        alt: "Cover of 'Long Walk to Freedom' by Nelson Mandela",
        link: 'https://www.amazon.ca/dp/0316548189',
        price: '18.91',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics', 'Biography'],
    },
    {
        id: 11606,
        name: 'How to Spot a Fascist - Umberto Eco',
        checker: 'Spot a Fascist',
        description: 'An essay that goes on to list the 14 defining characteristics of a fascist regime, including, traditionalism, rejection of modernism, appeals to people who feel deprived of social identity, populism, contempt for others, propaganda, and more.',
        image: 'assets/img/11606.jpg',
        alt: "Cover of 'How to Spot a Fascist' by Umberto Eco",
        link: 'https://www.amazon.ca/dp/1787302660',
        price: '3.95                ',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11607,
        name: 'We the Corporations: How American Businesses Won Their Civil Rights - Adam Winkler',
        checker: 'We the Corporations',
        description: 'Corporations have been arguing that they deserve the same rights as people under the United States Constitution since 1809. Corporations used lobbying, legal gymnastics, and even civil disobedience to make the case they, too, deserve unalienable human rights.\nAnd these corporations have been remarkably successful. Headway for corporates rights cases was made long before civil or women’s rights, after all.',
        image: 'assets/img/11607.jpg',
        alt: "Cover of 'We the Corporations: How American Businesses Won Their Civil Rights' by Adam Winkler",
        link: 'https://www.amazon.ca/dp/1631495445',
        price: '25.69',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11608,
        name: 'As Long as Grass Grows - Dina Gilio-Whitaker',
        checker: 'Grass Grows',
        description: 'This collection engages with the relationship between Indigenous people and American colonizers, and covers a brief history of the Indigenous resistance movements responding to colonization of their land. It is an important exploration of civil disobedience movements, and the leadership Indigenous people have offered these movements throughout centuries.',
        image: 'assets/img/11608.jpg',
        alt: "Cover of 'As Long as Grass Grows' by Dina Gilio-Whitaker",
        link: 'https://www.amazon.ca/dp/0807028363',
        price: '21.78',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics', 'History'],
    },
    {
        id: 11609,
        name: 'Winning the Green New Deal: Why We Must, How We Can - Guido Girgenti',
        checker: 'Green New Deal',
        description: 'As electorate demographics rapidly change, and the American left undergoes a political realignment, this movement will play a crucial role in the future of politics.',
        image: 'assets/img/11609.jpg',
        alt: "Cover of 'Winning the Green New Deal: Why We Must, How We Can' by Guido Girgenti",
        link: 'https://www.amazon.ca/dp/198214243X',
        price: '24.22',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11610,
        name: 'Politics Is for Power - Eitan D. Hersh',
        checker: 'Politics',
        description: 'Taking part in politics goes far beyond reading about the news online, complaining about politicians, signing petitions, and making donations. This book will teach you about lobbying, advocacy, and mobilizing communities and coalitions to make a difference for the causes you care about.',
        image: 'assets/img/11610.jpg',
        alt: "Cover of 'Politics Is for Power' by Eitan D. Hersh",
        link: 'https://www.amazon.ca/dp/198211679X',
        price: '22.77',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Politics'],
    },
    {
        id: 11701,
        name: 'The Roots of Hinduism - Asko Parpola',
        checker: 'Roots of Hinduism',
        description: 'Asko Parpola has spent fifty years researching the roots of Hinduism and is the most knowledgeable and intelligent of the ancient Indus script explorers. His comprehensive assessment of the Indus language and religion is based on all available textual, linguistic and archaeological evidence, including West Asian sources and the Indus script.',
        image: 'assets/img/11701.jpg',
        alt: "Cover of 'The Roots of Hinduism' by Asko Parpola",
        link: 'https://www.amazon.ca/dp/0190226927',
        price: '31.38 ',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Religion', 'History'],
    },
    {
        id: 11702,
        name: 'The Issue at Hand - Gil Fronsdal',
        checker: 'Issue at Hand',
        description: 'This slim volume is more than just an introduction; it contains gems of insight that will continue to stimulate and deepen your practice as it unfolds.',
        image: 'assets/img/11702.jpg',
        alt: "Cover of 'The Issue at Hand' by Gil Fronsdal",
        link: 'https://www.amazon.ca/dp/061516286X',
        price: '17.59',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Religion'],
    },
    {
        id: 11703,
        name: 'The Indestructible Jews - Max I. Dimont',
        checker: 'Indestructible Jews',
        description: 'This amazing journey through thousands of years explores the survival of Judaism in the face of countless threats and challenges.',
        image: 'assets/img/11703.jpg',
        alt: "Cover of 'The Indestructible Jews' by Max I. Dimont",
        link: 'https://www.amazon.ca/dp/B001JYDSXC',
        price: '89.10',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Religion', 'History'],
    },
    {
        id: 11704,
        name: 'Welcome to the Episcopal Church - Christopher Webber',
        checker: 'Episcopal Church',
        description: 'The perfect book for inquirers and new members, as well as current Church members who may be unfamiliar with some of the Church s history, beliefs, and practices.',
        image: 'assets/img/11704.jpg',
        alt: "Cover of 'Welcome to the Episcopal Church' by Christopher Webber",
        link: 'https://www.amazon.ca/dp/0819218200',
        price: '17.50',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Religion', 'History'],
    },
    {
        id: 11705,
        name: "The Story of the Qur'an: Its History and Place in Muslim Life - Ingrid Mattson",
        checker: 'Muslim Life',
        description: "An essential introductory text for the study of the Qur'an, its content, and its place in Muslim society.",
        image: 'assets/img/11705.jpg',
        alt: "Cover of 'The Story of the Qur'an: Its History and Place in Muslim Life' by Ingrid Mattson",
        link: 'https://www.amazon.ca/dp/0470673494',
        price: '40.54',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Religion', 'History'],
    },
    {
        id: 11801,
        name: 'Outlander - Diana Gabaldon',
        checker: 'Outlander',
        description: 'Claire is thrust back in time to Scotland in the 1700s, where she meets Jamie Fraser, a Scotts warrior who teaches Claire love that she’s never known. But she still has a husband back in her own time, one patently different from the wild and wonderful Scotsman. Who will she choose?',
        image: 'assets/img/11801.jpg',
        alt: "Cover of 'Outlander' by Diana Gabaldon",
        link: 'https://www.amazon.ca/dp/0770428797',
        price: '12.86',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Romance'],
    },
    {
        id: 11802,
        name: 'Gone with the Wind - Margaret Mitchell',
        checker: 'Gone with the Wind',
        description: 'Spoiled, headstrong Scarlett O’Hara finds herself in dire straights during the Civil War. Her family’s fortune and plantation are in tatters, and Scarlett uses every wile in her toolkit to keep her family and land out of poverty. The infamous Rhett Butler offers her a way out, but will she lose her heart in the process?',
        image: 'assets/img/11802.jpg',
        alt: "Cover of 'Gone with the Wind' by Margaret Mitchell",
        link: 'https://www.amazon.ca/dp/1451635621',
        price: '23.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Romance'],
    },
    {
        id: 11803,
        name: 'The Notebook - Nicholas Sparks',
        checker: 'Notebook',
        description: 'This man can write a love story. An older gentleman visits a woman with a fading memory every morning to read to her from a well-worn notebook. The notebook he reads contains the love story of Noah Calhoun and Allie Nelson and Allie’s quandary: to marry her fiancé or give it all up for Noah.',
        image: 'assets/img/11803.jpg',
        alt: "Cover of 'The Notebook' by Nicholas Sparks",
        link: 'https://www.amazon.ca/dp/1538745321',
        price: '20.78',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Romance'],
    },
    {
        id: 11901,
        name: 'A Brief History of Time - Stephen Hawking',
        checker: 'Brief History of Time',
        description: 'Stephen Hawking attempts to explain a range of subjects in cosmology, including the Big Bang, black holes and light cones, to the non-specialist reader.',
        image: 'assets/img/11901.jpg',
        alt: "Cover of 'A Brief History of Time' by Stephen Hawking",
        link: 'https://www.amazon.ca/dp/0553380168',
        price: '19.80',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science'],
    },
    {
        id: 11902,
        name: 'On the Origin of Species - Charles Darwin',
        checker: 'Origin of Species',
        description: 'The book that introduced the scientific theory that populations evolve over the course of generations through a process of natural selection. Darwin included evidence that he had collected on the Beagle expedition in the 1830s and his subsequent findings from research, correspondence, and experimentation.',
        image: 'assets/img/11902.jpg',
        alt: "Cover of 'On the Origin of Species' by Charles Darwin",
        link: 'https://www.amazon.ca/dp/0451529065',
        price: '8.42',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science'],
    },
    {
        id: 11903,
        name: 'Cosmos - Carl Sagan',
        checker: 'Cosmos',
        description: "Cosmos traces the origins of knowledge and the scientific method, mixing science and philosophy, and speculates to the future of science in 13 heavily illustrated chapters comprising Sagan's reflections on anthropological, cosmological, biological, historical, and astronomical matters from antiquity to contemporary times.",
        image: 'assets/img/11903.jpg',
        alt: "Cover of 'Cosmos' by Carl Sagan",
        link: 'https://www.amazon.ca/dp/0345539435',
        price: '23.76',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Science'],
    },
    {
        id: 11904,
        name: 'Pale Blue Dot - Carl Sagan',
        checker: 'Pale Blue Dot',
        description: 'Pulitzer Prize-winning author Carl Sagan traces our exploration of space and suggests that our very survival may depend on the wise use of other worlds.',
        image: 'assets/img/11904.jpg',
        alt: "Cover of 'Pale Blue Dot' by Carl Sagan",
        link: 'https://www.amazon.ca/dp/0345376595/',
        price: '23.76',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science'],
    },
    {
        id: 11905,
        name: 'The Universe in a Nutshell - Stephen Hawking',
        checker: 'Universe in a Nutshell',
        description: 'After the phenomenal, multimillion-copy bestseller, A Brief History of Time, Hawking returns with a lavishly illustrated sequel that unravels the mysteries of the major breakthroughs that have occurred in the years since the release of his acclaimed first book.',
        image: 'assets/img/11905.jpg',
        alt: "Cover of 'The Universe in a Nutshell' by Stephen Hawking",
        link: 'https://www.amazon.ca/dp/0965326942',
        price: '24.86',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Science'],
    },
    {
        id: 12001,
        name: 'Dune - Frank Herbert',
        checker: 'Dune',
        description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.',
        image: 'assets/img/12001.jpg',
        alt: "Cover of 'Dune' by Frank Herbert",
        link: 'https://www.amazon.ca/dp/0441172717',
        price: '10.41',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science Fiction'],
    },
    {
        id: 12002,
        name: 'Foundation - Isaac Asimov',
        checker: 'Foundation',
        description: 'One of the seminal works of hard science fiction, Foundation reimagines the fall of the Roman Empire as taking place on a galactic scale and an effort on a remote planet to protect humanity from a 30,000-year-long dark age.',
        image: 'assets/img/12002.jpg',
        alt: "Cover of 'Foundation' by Isaac Asimov",
        link: 'https://www.amazon.ca/dp/0553293354',
        price: '10.88',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science Fiction'],
    },
    {
        id: 12003,
        name: 'Frankenstein - Mary Shelley',
        checker: 'Frankenstein',
        description: 'It would be difficult to overstate the influence of Frankenstein and its enormous impact on both literature and pop culture. In the 200 years since its initial publication, the narrative DNA of the tale of Victor Frankenstein and his creature can be found in the countless stories that have followed in its considerable wake.',
        image: 'assets/img/12003.jpg',
        alt: "Cover of 'Frankenstein' by Mary Shelley",
        link: 'https://www.amazon.ca/dp/B09QNCW7YY',
        price: '12.66',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science Fiction'],
    },
    {
        id: 12004,
        name: 'The Hitchhiker’s Guide to the Galaxy - Douglas Adams',
        checker: 'Hitchhiker',
        description: 'For sheer absurdist audacity, imagination, bombast, and pure fun, The Hitchhiker’s Guide is tough to beat. It’s biting satire and pure absurdist humor, all shot through with a vein of cynicism and a surprisingly firm internal logic. Basically, there’s nothing quite like it.',
        image: 'assets/img/12004.jpg',
        alt: "Cover of 'The Hitchhiker’s Guide to the Galaxy' by Douglas Adams",
        link: 'https://www.amazon.ca/dp/0330508113',
        price: '16.40',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['book', 'Science Fiction', 'Humor'],
    },
    {
        id: 12005,
        name: 'Neuromancer - William Gibson',
        checker: 'Neuromancer',
        description: 'The definitive cyberpunk novel. Set in a dystopian Japanese underworld, the novel touches on all manner of futuristic technology, from AI to cryonics, and features a cast of creative characters that will stick with you long after you turn the last page.',
        image: 'assets/img/12005.jpg',
        alt: "Cover of 'Neuromancer' by William Gibson",
        link: 'https://www.amazon.ca/dp/0441007465/',
        price: '22.77',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science Fiction'],
    },
    {
        id: 12006,
        name: "Childhood's End - Arthur C. Clarke",
        checker: 'Childhood',
        description: 'The Overlords appeared suddenly over every city--intellectually, technologically, and militarily superior to humankind. Benevolent, they made few demands: unify earth, eliminate poverty, and end war. With little rebellion, humankind agreed, and a golden age began. But at what cost?\n(Also my favorite book)',
        image: 'assets/img/12006.jpg',
        alt: "Cover of 'Childhood's End' by Arthur C. Clarke",
        link: 'https://www.amazon.ca/dp/0345347951',
        price: '10.88',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science Fiction'],
    },
    {
        id: 12007,
        name: '2001: A Space Odyssey - Arthur C. Clarke',
        checker: 'Space Odyssey',
        description: 'On the Moon, an enigma is uncovered. So great are the implications of this discovery that for the first time men are sent out deep into our solar system. But long before their destination is reached, things begin to go horribly, inexplicably wrong...\nOne of the greatest-selling science fiction novels of our time, this classic book will grip you to the very end.',
        image: 'assets/img/12007.jpg',
        alt: "Cover of '2001: A Space Odyssey' by Arthur C. Clarke",
        link: 'https://www.amazon.ca/dp/0451457994',
        price: '11.87',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Science Fiction'],
    },
    {
        id: 12101,
        name: "Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think - Hans Rosling",
        checker: 'Factfulness',
        description: 'The stress-reducing habit of only carrying opinions for which you have strong supporting facts.\nInspiring and revelatory, filled with lively anecdotes and moving stories, Factfulness is an urgent and essential book that will change the way you see the world.',
        image: 'assets/img/12101.jpg',
        alt: "Cover of 'Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think' by Hans Rosling",
        link: 'https://www.amazon.ca/dp/1250107814',
        price: '27.02',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Self-Improvement'],
    },
    {
        id: 12102,
        name: 'Emotional Intelligence: Why It Can Matter More Than IQ - Daniel Goleman',
        checker: 'Emotional Intelligence',
        description: 'Everyone knows that high IQ is no guarantee of success, happiness, or virtue, but until Emotional Intelligence, we could only guess why.',
        image: 'assets/img/12102.jpg',
        alt: "Cover of 'Emotional Intelligence: Why It Can Matter More Than IQ' by Daniel Goleman",
        link: 'https://www.amazon.ca/dp/055338371X',
        price: '19.58',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Self-Improvement'],
    },
    {
        id: 12103,
        name: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change - Stephen R. Covey',
        checker: 'Highly Effective People',
        description: 'Author Stephen R. Covey presents seven habits that if you really understand and implement it, there should be no aspect of your life that should go untouched.',
        image: 'assets/img/12103.jpg',
        alt: "Cover of 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change' by Stephen R. Covey",
        link: 'https://www.amazon.ca/dp/1471131823/',
        price: '24.00',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Self-Improvement'],
    },
    {
        id: 12201,
        name: 'Friday Night Lights - H.G. Bissinger',
        checker: 'Friday Night Lights',
        description: "The book that launched the critically acclaimed film and television show. With frankness and compassion, Bissinger chronicles one of the Panthers' dramatic seasons and shows how single-minded devotion to the team shapes the community and inspires-and sometimes shatters-the teenagers who wear the Panthers' uniforms.",
        image: 'assets/img/12201.jpg',
        alt: "Cover of 'Friday Night Lights' by H.G. Bissinger",
        link: 'https://www.amazon.ca/dp/0306824205',
        price: '20.99',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['sports', 'Sports', 'American Football'],
    },
    {
        id: 12202,
        name: 'Moneyball: The Art of Winning an Unfair Game - Michael Lewis',
        checker: 'Moneyball',
        description: '“Moneyball” — the story of the rise of baseball analytics, using the Billy Beane-era Oakland Athletics as the focus — changed everything. It was a brilliant idea, expertly executed. And 17 years later, with baseball front offices filled with executives from what is known as the Moneyball Generation, it continues to resonate.',
        image: 'assets/img/12202.jpg',
        alt: "Cover of 'Moneyball: The Art of Winning an Unfair Game' by Michael Lewis",
        link: 'https://www.amazon.ca/dp/0393324818',
        price: '21.73',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Sports', 'Baseball'],
    },
    {
        id: 12203,
        name: 'Paper Lion - George Plimpton',
        checker: 'Paper Lion',
        description: 'What would happen if a regular guy suited up for an NFL team? That’s what the legendary writer George Plimpton tried to find out in his 1966 classic of participatory journalism. Seeking to explore the difference between regular people and professional athletes, Plimpton went through training camp with the Detroit Lions.',
        image: 'assets/img/12203.jpg',
        alt: "Cover of 'Paper Lion' by George Plimpton",
        link: 'https://www.amazon.ca/dp/B000H2EJPI',
        price: '9.78',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['American Football', 'Sports'],
    },
    {
        id: 20101,
        name: 'Padded Sports Bra Tank Top',
        checker: 'Padded Sports Bra',
        description: "It's a workout top with built-in bra with removable pads for light support. Amazing, right?",
        image: 'assets/img/20101.jpg',
        alt: "Picture of 'Padded Sports Bra Tank Top'",
        link: 'https://www.amazon.ca/dp/B0895HJPM7',
        price: '20.91',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['sports', 'Activewear & Sportswear', 'Top', 'Gym', 'Running'],
    },
    {
        id: 20102,
        name: 'Converse Unisex-Adult Chuck Taylor All Star Canvas High Top',
        checker: 'All Star',
        description: 'These high-top sneakers offers great ankle security and the flat heel and minimal midfoot cushioning are optimal for deadlifting. Also comes in a big variety of colours!',
        image: 'assets/img/20102.jpg',
        alt: "Picture of 'All Star Hi Top Sneaker'",
        link: 'https://www.amazon.ca/dp/B0001Y90UQ',
        price: '80.61',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Activewear & Sportswear', 'Gym', 'Footwear'],
    },
    {
        id: 20103,
        name: 'New Balance FuelCore Nergize V1 Sneaker',
        checker: 'FuelCore Nergize',
        description: 'These New Balance trainers are especially cushioned and responsive. Perfect for beginner runners.',
        image: 'assets/img/20103.jpg',
        alt: "Picture of 'New Balance FuelCore Nergize V1 Sneaker'",
        link: 'https://www.amazon.ca/dp/B07C2Y985T',
        price: '82.81',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: [
            'sports',
            'Running',
            'Activewear & Sportswear',
            'Footwear',
            'Running',
        ],
    },
    {
        id: 20104,
        name: 'High Waist Compression Shorts With Pockets',
        checker: 'Compression',
        description: 'These high waist compression shorts have it all, including hidden pockets. So smart.',
        image: 'assets/img/20104.jpg',
        alt: "Picture of 'High Waist Compression Shorts With Pockets'",
        link: 'https://www.amazon.ca/dp/B07TVH8Z3B',
        price: '22.85',
        gender: ['female', 'trans female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: [
            'Running',
            'Activewear & Sportswear',
            'Shorts',
            'Gym',
            'Yoga',
            'Cycling',
        ],
    },
    {
        id: 20106,
        name: 'Peak Velocity Thermal Tight',
        checker: 'Peak Velocity',
        description: 'Well, Canada is cold, right? These Peak Velocity tights are built to provide the necessary warmth but also manage temperature and sweat to improve performance. Mesh paneling improves airflow while the polyester-spandex fabric wicks moisture.',
        image: 'assets/img/20106.jpg',
        alt: "Picture of 'Peak Velocity Thermal Tight'",
        link: 'https://www.amazon.ca/dp/B07CLN4YGX',
        price: '30.00',
        gender: ['male', 'trans male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Running', 'Activewear & Sportswear', 'Underwear', 'Winter Sports'],
    },
    {
        id: 20108,
        name: 'Hooded Windbreaker Waterproof Jacket',
        checker: 'Waterproof',
        description: 'Both wind and water-proof, this jacket will provide protection during your runs in weather that’s less than optimal. Plus, there are reflective details for road runners and many colours available.',
        image: 'assets/img/20108.jpg',
        alt: "Picture of 'Hooded Windbreaker Waterproof Jacket'",
        link: 'https://www.amazon.ca/dp/B08XK62WJ1',
        price: '60.43',
        gender: ['male', 'trans male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: [
            'cA',
            'Running',
            'Activewear & Sportswear',
            'Coats & Jackets',
            'Cycling',
            'Winter Sports',
        ],
    },
    {
        id: 20201,
        name: "The Drop Women's Blake Long Blazer",
        checker: 'Blake Long Blazer',
        description: 'A power blazer with long, lean lines. 3 different colours available.',
        image: 'assets/img/20201.jpg',
        alt: "Picture of 'The Drop Women's Blake Long Blazer'",
        link: 'https://www.amazon.ca/dp/B07YFW44RN',
        price: '94.90',
        gender: ['female', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Coats & Jackets', 'Blazers & Suits'],
    },
    {
        id: 20202,
        name: "Heo Clothing's Comfy Casual Blazer",
        checker: 'Casual Office',
        description: 'Looking for a more relaxed-fit style? This one has 24 different colours for you to choose.',
        image: 'assets/img/20202.jpg',
        alt: "Picture of 'Heo Clothing's Comfy Casual Blazer'",
        link: 'https://www.amazon.ca/dp/B07FTTF8WM',
        price: '49.47',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets', 'Blazers & Suits'],
    },
    {
        id: 20203,
        name: "Goodthreads Men's Slim-fit Stretch Twill Blazer",
        checker: 'Twill Blazer',
        description: 'Made of cotton and with a modern cut, this blazer is perfect for who prefer their fits on the slim side. 4 colours available.',
        image: 'assets/img/20203.jpg',
        alt: "Picture of 'Goodthreads Men's Slim-fit Stretch Twill Blazer'",
        link: 'https://www.amazon.ca/dp/B07J2HW346',
        price: '73.27',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Coats & Jackets', 'Blazers & Suits'],
    },
    {
        id: 20204,
        name: 'Paul Jones Casual Blazer',
        checker: 'PAUL JONES',
        description: 'Nice looking blazer for daily casual wear.',
        image: 'assets/img/20204.jpg',
        alt: "Picture of 'Paul Jones Casual Blazer'",
        link: 'https://www.amazon.ca/dp/B08R752TNM',
        price: '76.99',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Coats & Jackets', 'Blazers & Suits'],
    },
    {
        id: 20301,
        name: 'Astylish Cozy Oversized Women’s Cardigan',
        checker: 'Cardigan',
        description: 'This cardigan has a thick, chunky build that will help keep you warm and cozy throughout the winter. Available in 10 colours.',
        image: 'assets/img/20301.jpg',
        alt: "Picture of 'Astylish Cozy Oversized Women's Cardigan'",
        link: 'https://www.amazon.ca/dp/B07MV7YVLQ',
        price: '28.97',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20302,
        name: 'Traleubie Lightweight Pocketed Women’s Cardigans',
        checker: 'Traleubie',
        description: "Designed for more of a loose fit, this women's cardigan adds a touch of style to your favorite pair of jeans. Available in 19 colours",
        image: 'assets/img/20302.jpg',
        alt: "Picture of 'Traleubie Lightweight Pocketed Women’s Cardigans'",
        link: 'https://www.amazon.ca/dp/B0882ZQBXX',
        price: '29.50',
        gender: ['female', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20304,
        name: "Chicgal's Floral Cardigan",
        checker: 'Floral',
        description: 'Daily casual cardigan with 7 different designs.',
        image: 'assets/img/20304.jpg',
        alt: "Picture of 'Chicgal's Floral Cardigan'",
        link: 'https://www.amazon.ca/dp/B07SN9RS13',
        price: '47.31',
        gender: ['female', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['cA', 'Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20305,
        name: "Urban CoCo's Long Sleeve Sweater",
        checker: 'Urban CoCo',
        description: 'Super soft and lightweight knit sweater offers comfortable feeling and a contemporary fit.',
        image: 'assets/img/20305.jpg',
        alt: "Picture of 'Urban CoCo's Long Sleeve Sweater'",
        link: 'https://www.amazon.ca/dp/B092L92R55',
        price: '30.86',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20306,
        name: "Alinfu's Pullover Sweater",
        checker: 'Alinfu',
        description: "The kind of sweater you'll reach for without even thinking about it.",
        image: 'assets/img/20306.jpg',
        alt: "Picture of 'Alinfu's Pullover Sweater'",
        link: 'https://www.amazon.ca/dp/B014MCFMFO',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20307,
        name: "Pendleton's The Original Westerley Zip Up Cardigan Sweater",
        checker: 'Pendleton',
        description: 'If his winter style icon is The Dude from “The Big Lebowski,” he needs this cardigan.',
        image: 'assets/img/20307.jpg',
        alt: "Picture of 'Pendleton's The Original Westerley Zip Up Cardigan Sweater'",
        link: 'https://www.amazon.ca/dp/B004L63RA4',
        price: '51.99',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20308,
        name: "Tommy Hilfiger's Cotton Cardigan Sweater",
        checker: 'Hilfiger',
        description: 'Solid design with long sleeves and a button closure on front.',
        image: 'assets/img/20308.jpg',
        alt: "Picture of 'Tommy Hilfiger's Cotton Cardigan Sweater'",
        link: 'https://www.amazon.ca/dp/B08B46TLV3',
        price: '83.38',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20309,
        name: "Supima's Cotton Cardigan Sweater",
        checker: 'Cardigan Sweater',
        description: 'Comfortable and versatile, this sweater is perfect on its own or as a layer under a blazer or jacket.',
        image: 'assets/img/20309.jpg',
        alt: "Picture of 'Supima's Cotton Cardigan Sweater'",
        link: 'https://www.amazon.ca/dp/B07W72L365',
        price: '29.66',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20310,
        name: 'Carhartt Pocketed Crew Neck',
        checker: 'Carhartt',
        description: "Made from a cotton and polyester blend, this isn't a sweater you have to worry about beating up. All because the thick material offers a decent amount of warmth and some serious durability. The design also makes it very versatile.",
        image: 'assets/img/20310.jpg',
        alt: "Picture of 'Carhartt Pocketed Crew Neck'",
        link: 'https://www.amazon.ca/dp/B07SBGSCTN',
        price: '53.99',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20311,
        name: "H2H's Slim Fit Turtleneck Pullover",
        checker: 'Turtleneck',
        description: 'The brushed interior is soft and comfortable on the skin, while the stretch of the fabric provides for unrestricted movement.',
        image: 'assets/img/20311.jpg',
        alt: "Picture of 'H2H's Slim Fit Turtleneck Pullover'",
        link: 'https://www.amazon.ca/dp/B07DT9Q99W',
        price: '50.19',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets', 'Cardigans & Sweaters'],
    },
    {
        id: 20401,
        name: 'A2Z Izzie Puffer Jacket',
        checker: 'Puffer',
        description: "It's a metallic puffer jacket, what else do I have to say?",
        image: 'assets/img/20401.jpg',
        alt: "Picture of 'A2Z Izzie Puffer Jacket'",
        link: 'https://www.amazon.ca/dp/B07BWFCMZ6',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20402,
        name: 'SAM Belted Down Puffer Jacket',
        checker: 'Belted Down',
        description: "It's a metallic puffer jacket, what else do I have to say?",
        image: 'assets/img/20402.jpg',
        alt: "Picture of 'SAM Belted Down Puffer Jacket'",
        link: 'https://www.amazon.ca/dp/B07SFKFDVS',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20403,
        name: "Levi's Sherpa Oversized Belted Motorcycle Jacket",
        checker: 'Motorcycle Jacket',
        description: "If you're lookin' for an edgy yet chic look, this teal number from Levi's is just the jacket for you.",
        image: 'assets/img/20403.jpg',
        alt: "Picture of 'Levi's Sherpa Oversized Belted Motorcycle Jacket'",
        link: 'https://www.amazon.ca/dp/B07FKYC9WX',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets'],
    },
    {
        id: 20404,
        name: 'The Drop Loose-Fit Long Faux Fur Coat',
        checker: 'Faux Fur Coat',
        description: "Three words: Cozy. Cuddly. Blankets. And that's basically what it is.",
        image: 'assets/img/20404.jpg',
        alt: "Picture of 'The Drop Loose-Fit Long Faux Fur Coat'",
        link: 'https://www.amazon.ca/dp/B09B7FYX7D',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets'],
    },
    {
        id: 20405,
        name: 'Alpha Industries MA-1 Slim Fit Bomber Jacket',
        checker: 'Alpha Industries',
        description: 'The classic iconic flight jacket from alpha industries the leading manufacturer of the ma-1 for the U.S. Military now available in a slim fit.',
        image: 'assets/img/20405.jpg',
        alt: "Picture of 'Alpha Industries MA-1 slim fit bomber jacket'",
        link: 'https://www.amazon.ca/dp/B0119N86O8',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coats & Jackets'],
    },
    {
        id: 20406,
        name: 'Pendleton Brownsville Shearling Collar Wool Coat Jacket',
        checker: 'Brownsvilles',
        description: "100% Wool, genuine shearling collar, and Pendleton's iconic jacquard print.",
        image: 'assets/img/20406.jpg',
        alt: "Picture of 'Pendleton Brownsville shearling collar wool coat jacket'",
        link: 'https://www.amazon.ca/dp/B08VDPVQJP',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20407,
        name: 'Wrangler Western Sherpa Trucker Jacket',
        checker: 'Wrangler',
        description: 'Is there a more luscious combo than corduroy and sherpa? (No!)',
        image: 'assets/img/20407.jpg',
        alt: "Picture of 'Wrangler Western sherpa trucker jacket'",
        link: 'https://www.amazon.ca/dp/B096KZNK7G',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20408,
        name: 'Columbia Steens Mountainprinted Jacket',
        checker: 'Mountainprinted',
        description: 'Why not add some pattern to your fleece? This joint adds heaps of texture and gives you 11 pattern options to your outfit!',
        image: 'assets/img/20408.jpg',
        alt: "Picture of 'Columbia Steens Mountainprinted jacket'",
        link: 'https://www.amazon.ca/dp/B08MQKF5HQ',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20409,
        name: 'Barbour Classic Bedale Wax Cotton Jacket',
        checker: 'Classic Bedale',
        description: 'Classic. Comfortable. Elegant.',
        image: 'assets/img/20409.jpg',
        alt: "Picture of 'Barbour Classic Bedale Wax Cotton Jacket'",
        link: 'https://www.amazon.ca/dp/B009ZDILP4',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20410,
        name: "Levi's Trucker Jacket",
        checker: 'Trucker Jacket',
        description: "Classics stay classic. Pair this with some succulent cords and a wild sweater and you can't go wrong.",
        image: 'assets/img/20410.jpg',
        alt: "Picture of 'Levi's Trucker Jacket'",
        link: 'https://www.amazon.ca/dp/B086C25Z7Q',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20411,
        name: "The North Face's Gotham Jacket III",
        checker: 'Gotham',
        description: 'A waterproof, windproof, faux-fur lined, full-length parka made for the arctic-like days.',
        image: 'assets/img/20411.jpg',
        alt: "Picture of 'The North Face's Gotham Jacket III'",
        link: 'https://www.amazon.ca/dp/B01N9D7SAR',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20412,
        name: 'Columbia Autumn Park Down Jacket',
        checker: 'Autumn Park',
        description: 'Water and wind resistant with 3 colour options.',
        image: 'assets/img/20412.jpg',
        alt: "Picture of 'Columbia Autumn Park Down Jacket'",
        link: 'https://www.amazon.ca/dp/B0814BW26S',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20413,
        name: 'Adidas Soccer Training Jacket',
        checker: 'Soccer Training Jacket',
        description: 'A quick-drying jacket to play soccer! The AEROREADY technology absorbs moisture and makes you feel dry.',
        image: 'assets/img/20413.jpg',
        alt: "Picture of 'Adidas Soccer Training Jacket'",
        link: 'https://www.amazon.ca/dp/B07RWWMZW6',
        price: '36.13',
        gender: ['all'],
        age: ['child'],
        tags: ['cA', 'Coats & Jackets'],
    },
    {
        id: 20501,
        name: 'Adidas Originals Stan Smith Leather Sneaker',
        checker: 'Stan Smith',
        description: 'The white sneaker takes many forms, but none quite as iconic as the Stan Smith from Adidas.',
        image: 'assets/img/20501.jpg',
        alt: "Picture of 'Adidas Originals Stan Smith Leather Sneaker'",
        link: 'https://www.amazon.ca/dp/B00LUIKRHC',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Footwear'],
    },
    {
        id: 20502,
        name: 'Cole Haan Original Waterproof Grand Boot',
        checker: 'Cole Haan',
        description: "A dress boot that is also waterproof and slip resistant. This is the perfect combination! Wear it to the office, out on the weekends, on rainy days, or even on the hiking trail. Form meets function at a price that can't be beat.",
        image: 'assets/img/20502.jpg',
        alt: "Picture of 'Cole Haan Original Waterproof Grand Boot'",
        link: 'https://www.amazon.ca/dp/B07MQ34WPC',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Footwear'],
    },
    {
        id: 20503,
        name: 'Semai Water Shoes',
        checker: 'Water Shoes',
        description: 'These water shoes really make swimming in lakes or rivers so much less gross! You can stand on the hard reef and coral with these swimming socks, like walking barefoot but preventing your feet from being scratched or bitten by bugs. They are also portable, lightweight, comfortable and anti-slip.',
        image: 'assets/img/20503.jpg',
        alt: "Picture of 'Semai Water Shoes'",
        link: 'https://www.amazon.ca/dp/B08BZLX3G9',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Footwear', 'Swimwear', 'Water Sports'],
    },
    {
        id: 20504,
        name: 'Crocs Classic Clog',
        checker: 'Crocs',
        description: 'These Crocs are not only comfortable, durable and light but also easy to clean just using soap and water and allowing for a quick dry.',
        image: 'assets/img/20504.jpg',
        alt: "Picture of Crocs Classic Clog'",
        link: 'https://www.amazon.ca/dp/B072M7ZKSF',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Footwear'],
    },
    {
        id: 20505,
        name: 'Calvin Klein Brodie Oxford Shoes',
        checker: 'Brodie Oxford',
        description: 'These shoes are sharp, go with anything, and from a quality brand that you can trust. Plus, they add an extra inch to your height.',
        image: 'assets/img/20505.jpg',
        alt: "Picture of 'Calvin Klein Brodie Oxford Shoes'",
        link: 'https://www.amazon.ca/dp/B009H1OMD4',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Footwear'],
    },
    {
        id: 21201,
        name: 'Gisele Long PJ Set',
        checker: 'Gisele',
        description: "This pajama is known for it's softness and lightweightness. And that's how pajamas should be, right?",
        image: 'assets/img/21201.jpg',
        alt: "Picture of 'Gisele Long PJ Set'",
        link: 'https://www.amazon.ca/dp/B077T5SD1V',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Sleepwear'],
    },
    {
        id: 21202,
        name: 'Fishers Finery’s Silk Short Sleeve Pajama Set',
        checker: 'Fishers Finery',
        description: 'A very durable and smooth pajamas. Worth every penny!',
        image: 'assets/img/21202.jpg',
        alt: "Picture of 'Fishers Finery’s Silk Short Sleeve Pajama Set'",
        link: 'https://www.amazon.ca/dp/B00G4CPTRC',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Sleepwear'],
    },
    {
        id: 21203,
        name: "David Archy's Button-Down Pajama Set",
        checker: 'Button-Down',
        description: "It's 100% cotton and made a little larger to accommodate for slight shrinking in the wash.",
        image: 'assets/img/21203.jpg',
        alt: "Picture of 'David Archy's Button-Down Pajama Set'",
        link: 'https://www.amazon.ca/dp/B075R49FH5',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Sleepwear'],
    },
    {
        id: 21204,
        name: 'AjezMax Plaid Long Pajama Set',
        checker: 'AjezMax',
        description: "It's 100% cotton and made a little larger to accommodate for slight shrinking in the wash.",
        image: 'assets/img/21204.jpg',
        alt: "Picture of 'AjezMax Plaid Long Pajama Set'",
        link: 'https://www.amazon.ca/dp/B08Q3WKKDW',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Sleepwear'],
    },
    {
        id: 21301,
        name: "Mcool Mary Women's Crew Socks",
        checker: 'Crew Socks',
        description: 'Ruffly, frilly socks? Here you go.',
        image: 'assets/img/21301.jpg',
        alt: "Picture of 'Mcool Mary Women's Crew Socks'",
        link: 'https://www.amazon.ca/dp/B08X6JB1SN',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Socks'],
    },
    {
        id: 21302,
        name: "Gold Toe Women's Classic Turn Cuff Socks",
        checker: 'Cuff Socks',
        description: 'Neutral socks are very easy to match. And they look so aesthetic!',
        image: 'assets/img/21302.jpg',
        alt: "Picture of 'Gold Toe Women's Classic Turn Cuff Socks'",
        link: 'https://www.amazon.ca/dp/B01NC2KT4U',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Socks'],
    },
    {
        id: 21303,
        name: "Jinny's Casual Ankle Socks",
        checker: 'Casual Ankle',
        description: 'Just some socks with a French bulldog in it. why not?',
        image: 'assets/img/21303.jpg',
        alt: "Picture of 'Jinny's Socks Casual Ankle Socks'",
        link: 'https://www.amazon.ca/dp/B0BNK933L2',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Socks'],
    },
    {
        id: 21304,
        name: "Empino's Cute Animal Socks",
        checker: 'Cute Animal',
        description: 'Who can resist these socks?',
        image: 'assets/img/21304.jpg',
        alt: "Picture of 'Empino's Cute Animal Socks'",
        link: 'https://www.amazon.ca/dp/B07H8X43LD',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Socks'],
    },
    {
        id: 21305,
        name: "Ambielly's Vintage Style Knit Wool Socks",
        checker: 'Ambielly',
        description: 'A classic.',
        image: 'assets/img/21305.jpg',
        alt: "Picture of 'Ambielly's Vintage Style Knit Wool Socks'",
        link: 'https://www.amazon.ca/dp/B07DB5XN23',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Socks'],
    },
    {
        id: 21306,
        name: "Empino's Casual Ankle Socks",
        checker: 'Empino',
        description: 'Some comfortable socks with funky colours.',
        image: 'assets/img/21306.jpg',
        alt: "Picture of 'Empino's Socks Casual Ankle Socks'",
        link: 'https://www.amazon.ca/dp/B07S2R79L1',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Socks'],
    },
    {
        id: 21307,
        name: "Gold Toe's Harrington Crew Sock",
        checker: 'Harrington Crew',
        description: 'Long lasting and comfortable!',
        image: 'assets/img/21307.jpg',
        alt: "Picture of 'Gold Toe's Harrington Crew Sock'",
        link: 'https://www.amazon.ca/dp/B07TK9HQRC',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['cA', 'Socks'],
    },
    {
        id: 21309,
        name: "CVAYU's Superhero Children Socks",
        checker: 'Superhero Children',
        description: "Can't go wrong with superhero socks!",
        image: 'assets/img/21309.jpg',
        alt: "Picture of 'CVAYU's Superhero Children Socks'",
        link: 'https://www.amazon.ca/dp/B087BCL4ZG',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Socks', 'gPC', 'DC Comics', 'Marvel'],
    },
    {
        id: 21310,
        name: "ANTSANG's Unicorn Children Socks",
        checker: 'ANTSANG',
        description: "I'm not sure if unicorns exist. But socks with them, certainly do!",
        image: 'assets/img/21310.jpg',
        alt: "Picture of 'CVAYU's Unicorn Children Socks'",
        link: 'https://www.amazon.ca/dp/B08DTWLKBN',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Socks'],
    },
    {
        id: 21311,
        name: "Moon Tree's Thermal Socks",
        checker: 'Moon Tree',
        description: 'They have so many options: Dinosaurs, Monsters, Animals and much more! Oh, did I mention they are great to keep the feet warm in the winter?',
        image: 'assets/img/21311.jpg',
        alt: "Picture of 'Moon Tree's Thermal Socks'",
        link: 'https://www.amazon.ca/dp/B09H4GQ1FW',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Socks'],
    },
    {
        id: 21401,
        name: 'Ray-Ban New Wayfarer Polarized Sunglasses',
        checker: 'Wayfarer',
        description: 'The most classic of the classics. Polarized and available in 10 different colours and patterns, as well as three different sizes.',
        image: 'assets/img/21401.jpg',
        alt: "Picture of 'Ray-Ban New Wayfarer Polarized Sunglasses'",
        link: 'https://www.amazon.ca/dp/B0054QI8UO',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['cA', 'Sunglasses'],
    },
    {
        id: 21402,
        name: 'KALIYADI Polarized Sunglasses',
        checker: 'KALIYADI',
        description: 'A very cheap three-pack of Kaliyadi shades. Each matte black pair comes with HD polarized lenses in a variety of colours, and you can mix and match your pack however you want!',
        image: 'assets/img/21402.jpg',
        alt: "Picture of 'KALIYADI Polarized Sunglasses'",
        link: 'https://www.amazon.ca/dp/B07MRD7118',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Sunglasses'],
    },
    {
        id: 21403,
        name: 'WOODIES Sunglasses with Dark Polarized Lenses',
        checker: 'WOODIES',
        description: 'Made with real, eco-friendly wood and it looks great.',
        image: 'assets/img/21403.jpg',
        alt: "Picture of 'WOODIES Sunglasses with Dark Polarized Lenses'",
        link: 'https://www.amazon.ca/dp/B01HN83BPC',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['cA', 'Sunglasses'],
    },
    {
        id: 21801,
        name: 'Carhartt Billfold Wallet',
        checker: 'Carhartt',
        description: 'This beautiful wallet is 100% leather and hand washed.',
        image: 'assets/img/21801.jpg',
        alt: "Picture of 'Carhartt Billfold Wallet'",
        link: 'https://www.amazon.ca/dp/B07B49V8G2',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Wallet'],
    },
    {
        id: 21802,
        name: 'Mountain Voyage Minimalist Wallet',
        checker: 'Mountain Voyage',
        description: "An elegant, practical and extremely versatile wallet, with an modern and unique design you can't find anywhere else.",
        image: 'assets/img/21802.jpg',
        alt: "Picture of 'Mountain Voyage Minimalist Wallet'",
        link: 'https://www.amazon.ca/dp/B096SSSSNT',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Wallet'],
    },
    {
        id: 21803,
        name: 'GSOIAX Slim Wallet',
        checker: 'GSOIAX',
        description: 'This wallet is ultra-thin but has a large capacity! It also comes in many different colours.',
        image: 'assets/img/21803.jpg',
        alt: "Picture of 'GSOIAX Slim Wallet'",
        link: 'https://www.amazon.ca/dp/B09P3QGR1D',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21804,
        name: 'Buffway Leather Wallet',
        checker: 'Buffway',
        description: 'Stylishness for an affordable price. Also come in a great variety of colours.',
        image: 'assets/img/21804.jpg',
        alt: "Picture of 'Buffway Leather Wallet'",
        link: 'https://www.amazon.ca/dp/B079DCW7GB',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Wallet'],
    },
    {
        id: 21805,
        name: 'VULKIT Credit Card Holder',
        checker: 'BVULKIT',
        description: "It's very compact but can hold 5 cards. Comes in a luxurious box, perfect as a gift.",
        image: 'assets/img/21805.jpg',
        alt: "Picture of 'VULKIT Credit Card Holder'",
        link: 'https://www.amazon.ca/dp//B09YLZPBTY',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21806,
        name: 'GOLD HORSE Minimalist Leather Wallet',
        checker: 'GOLD HORSE',
        description: 'Beautiful with many colours to choose for an affordable price.',
        image: 'assets/img/21806.jpg',
        alt: "Picture of 'GOLD HORSE Minimalist Leather Wallet'",
        link: 'https://www.amazon.ca/dp/B07519F3Y2',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21807,
        name: 'SENDEFN Zipper Coin Wallet',
        checker: 'SENDEFN',
        description: "This is a small but roomy wallet that can also holds coins because of it's zipper. Comes in a big variety of colours and has an affordable price!",
        image: 'assets/img/21807.jpg',
        alt: "Picture of 'SENDEFN Zipper Coin Wallet'",
        link: 'https://www.amazon.ca/dp/B085DW2HWZ',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21808,
        name: 'Falan Mule Small Wallet Genuine Leather Bifold',
        checker: 'Falan Mule',
        description: 'A bestseller that comes in an endless range of colours for a very good price.',
        image: 'assets/img/21808.jpg',
        alt: "Picture of 'Falan Mule Small Wallet Genuine Leather Bifold'",
        link: 'https://www.amazon.ca/dp/B091YBCY1C',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21809,
        name: 'CLUCI Women Wallet',
        checker: 'CLUCI',
        description: 'Designed with high quality synthetic leather, classic pale gold hardware and buckle closure make this wallet stylish and sturdy. Handmade stitching joints have been reinforced for durability.',
        image: 'assets/img/21809.jpg',
        alt: "Picture of 'CLUCI Women Wallet'",
        link: 'https://www.amazon.ca/dp/B096ZNMRMV',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Wallet'],
    },
    {
        id: 21810,
        name: 'Kate Spade New York Wallet',
        checker: 'Kate Spade',
        description: 'The best selling wallet from one of the most popular brands between women.',
        image: 'assets/img/21810.jpg',
        alt: "Picture of 'Kate Spade New York Wallet'",
        link: 'https://www.amazon.ca/dp/B08XMGHS3R',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21811,
        name: 'FT Funtor RFID Wallet',
        checker: 'Funtor',
        description: 'This super-soft synthetic leather wallet almost passes for the real deal, but for a fraction of the price.',
        image: 'assets/img/21811.jpg',
        alt: "Picture of 'FT Funtor RFID Wallet'",
        link: 'https://www.amazon.ca/dp/B07WK4V5F1',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21812,
        name: 'Loungefly Star Wars Greedo Wallet',
        checker: 'Greedo',
        description: 'This iconic scene was a very good choice for the wallet design!',
        image: 'assets/img/21812.jpg',
        alt: "Picture of 'Loungefly Star Wars Greedo Wallet'",
        link: 'https://www.amazon.ca/dp/B09QC15RNG',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Wallet'],
    },
    {
        id: 21901,
        name: "Citizen's Eco-Drive",
        checker: 'Citizen',
        description: "The beauty of the Citizen Eco-Drive Chandler is in its simplicity. While relatively small at 37mm, it's dial is uncluttered and yet offers everything you need from a field watch; time, day, and date. And it's water resistant!",
        image: 'assets/img/21901.jpg',
        alt: "Picture of 'Citizen Eco-Drive'",
        link: 'https://www.amazon.ca/dp/B000EQS1JW',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Watch'],
    },
    {
        id: 21902,
        name: "CASIO's Digital World TIME",
        checker: 'CASIO',
        description: 'The digital World Time is a fun and functional watch to wear on the weekend with a sweatshirt or a sweater.',
        image: 'assets/img/21902.jpg',
        alt: "Picture of 'CASIO's Digital World TIME'",
        link: 'https://www.amazon.ca/dp/B00N7IYN0U',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Watch'],
    },
    {
        id: 21903,
        name: "Hamilton Men's Pilot",
        checker: 'Hamilton',
        description: 'Certainly one of the best watches on Amazon, the Khaki Aviation Pilot’s watch is a superb timepiece for any collector, regardless of pricepoint.',
        image: 'assets/img/21903.jpg',
        alt: "Picture of 'Hamilton Men's Pilot'",
        link: 'https://www.amazon.ca/dp/B00DDVQ098',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Watch'],
    },
    {
        id: 21904,
        name: 'CASIO G-Shock GBD800UC-5 Digital Watch',
        checker: 'GBD800UC',
        description: 'Hands down, G-Shock makes the toughest watches on the market. This digital, black resin GB800UC-5 would look as at home on the wrist of a soldier as it would on a hardcore mountain biker.',
        image: 'assets/img/21904.jpg',
        alt: "Picture of 'CASIO G-Shock GBD800UC-5 Digital Watch'",
        link: 'https://www.amazon.ca/dp/B07MZX1D86',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: [
            'cA',
            'Watch',
            'Cycling',
            'Hunting',
            'Mountain Sports',
            'Water Sports',
            'Winter Sports',
        ],
    },
    {
        id: 21905,
        name: 'Casio Classic Black Resin Strap Watch Digital',
        checker: 'CASIO',
        description: "A classic that never gets old. Specially for it's affordable price.",
        image: 'assets/img/21905.jpg',
        alt: "Picture of 'Casio Classic Black Resin Strap Watch Digital'",
        link: 'https://www.amazon.ca/dp/B000GAWSDG',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Watch'],
    },
    {
        id: 21906,
        name: 'IFOLO Smart Watch for Android and iOS Phone',
        checker: 'IFOLO',
        description: 'An awesome smart watch for an affordable price!',
        image: 'assets/img/21906.jpg',
        alt: "Picture of 'IFOLO Smart Watch for Android and iOS Phone'",
        link: 'https://www.amazon.ca/dp/B08JK2HZMC',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Watch'],
    },
    {
        id: 21907,
        name: 'Apple Watch Series 8',
        checker: 'Apple',
        description: "I'm pretty sure you already know this one.",
        image: 'assets/img/21907.jpg',
        alt: "Picture of 'Apple Watch Series 8'",
        link: 'https://www.amazon.ca/dp/B0BDHHW156',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Watch'],
    },
    {
        id: 21908,
        name: 'Armitron Sport Women’s Digital Chronograph Watch',
        checker: 'Armitron',
        description: "It's water resistant and the backlit function allows you to read the time and date in low-light conditions. All that for an affordable price.",
        image: 'assets/img/21908.jpg',
        alt: "Picture of 'Armitron Sport Women’s Digital Chronograph Watch'",
        link: 'https://www.amazon.ca/dp/B078HJQWSV',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['all'],
        tags: ['Watch'],
    },
    {
        id: 21909,
        name: 'Timex Easy Reader',
        checker: 'Timex',
        description: 'A beautiful and elegand watch for a very good price!',
        image: 'assets/img/21909.jpg',
        alt: "Picture of 'Timex Easy Reader'",
        link: 'https://www.amazon.ca/dp/B000AYW0KO',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Watch'],
    },
    {
        id: 21910,
        name: 'Anne Klein Bracelet Watch',
        checker: 'Anne Klein',
        description: 'This amazing watch comes in a lot of colours. You must check it out!',
        image: 'assets/img/21910.jpg',
        alt: "Picture of 'Anne Klein Bracelet Watch'",
        link: 'https://www.amazon.ca/dp/B08G1XQ99P',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Watch'],
    },
    {
        id: 21911,
        name: 'Swatch Casual Blue',
        checker: 'Casual',
        description: 'Swatch shook up the traditional watch scene with its playful, fashionable designs, which rose to fame as youthful alternatives to the more established European watches.',
        image: 'assets/img/21911.jpg',
        alt: "Picture of 'Swatch Casual Blue'",
        link: 'https://www.amazon.ca/dp/B083TKGBF8',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['all'],
        tags: ['cA', 'Watch'],
    },
    {
        id: 21912,
        name: 'Timex Indiglo Easy Reader Watch',
        checker: 'Timex',
        description: 'Without any distractions, this women’s watch boasts a simple yet stylish clock face. Comfortable leather band. It can blend with most outfits.',
        image: 'assets/img/21912.jpg',
        alt: "Picture of 'Timex Indiglo Easy Reader Watch'",
        link: 'https://www.amazon.ca/dp/B000AYW0M2',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Watch'],
    },
    {
        id: 21913,
        name: 'Michael Kors Slim Runway Watch',
        checker: 'Kors',
        description: 'The Michael Kors brand is world renowned and goes hand in hand with high-quality, luxurious accessories. This is typified by the attractive Runway Watch. The metallic designer watch is available in a wide range of colours combinations, meaning there’s a colours to suit every personality. The elegant yet functional style makes it ideal for both formal and everyday occasions!',
        image: 'assets/img/21913.jpg',
        alt: "Picture of 'Michael Kors Slim Runway Watch'",
        link: 'https://www.amazon.ca/dp/B00C6PH61I',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Watch'],
    },
    {
        id: 21914,
        name: "Fossil's Mini Carlie Watch",
        checker: 'Fossil',
        description: 'The metal and leather combination oozes timeless style. Leather band is comfortable on the wrist.',
        image: 'assets/img/21914.jpg',
        alt: "Picture of 'Fossil Mini Carlie Watch'",
        link: 'https://www.amazon.ca/dp/B07XYWS79G',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Watch'],
    },
    {
        id: 21915,
        name: 'Casio Women’s Watch',
        checker: 'Casio',
        description: 'With its all-white design, this Casio Women’s Watch is a great choice for ladies looking for a wrist piece to stand out a little more than the average watch does. And the 100-meter water resistance makes this watch ideal for swimming and snorkeling.',
        image: 'assets/img/21915.jpg',
        alt: "Picture of 'Casio Women’s Watch'",
        link: 'https://www.amazon.ca/dp/B00791QYMQ',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['all'],
        tags: [
            'cA',
            'Watch',
            'Cycling',
            'Hunting',
            'Mountain Sports',
            'Water Sports',
            'Winter Sports',
        ],
    },
    {
        id: 21916,
        name: 'Anne Klein Diamond Dial Bracelet Watch',
        checker: 'Klein',
        description: 'The attractive gold/silver exterior with a diamond in the face is hard to beat. Ideal for formal outfits. This stylish watch also comes in a range of gold, silver options, including a number of two-tone choices.',
        image: 'assets/img/21916.jpg',
        alt: "Picture of 'Anne Klein Diamond Dial Bracelet Watch'",
        link: 'https://www.amazon.ca/dp/B00AJS4GY4',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['cA', 'Watch'],
    },
    {
        id: 30101,
        name: 'Project Smoke - Steven Raichlen',
        checker: 'Project',
        description: 'This cookbook by Steven Raichlen provides a step-by-step guide to becoming a smoke master—it covers everything from choosing the right smoker and selecting smoking woods to essential techniques like hot-smoking, cold-smoking, rotisserie-smoking and more.',
        image: 'assets/img/30101.jpg',
        alt: "Picture of 'Project Smoke'",
        link: 'https://www.amazon.ca/dp/0761181865',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Barbecue', 'Hobbies'],
    },
    {
        id: 30102,
        name: 'YETI Tundra 65 Cooler',
        checker: 'YETI',
        description: "Say you're throwing a weekend-long bash and want to keep burger patties and hot dogs chilled and at the ready for grilling at all times, along with a supply of ice-cold beer and soda: A Yeti is the cooler for you. It's design is second-to-none, with insulation that can keep ice frozen for 72 hours or more, plus construction and materials that will last for many years. It's quite expensive, but the cost is worth it.",
        image: 'assets/img/30102.jpg',
        alt: "Picture of 'YETI Tundra 65 Cooler'",
        link: 'https://www.amazon.ca/dp/B003V53GFM',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Barbecue', 'Food'],
    },
    {
        id: 30103,
        name: 'Cuisinart 20-Piece Deluxe BBQ Grill Tool Set',
        checker: 'Cuisinart',
        description: "Grilling utensils get a lot of wear and tear. So whether you're shopping for someone who just got their first grill or an experienced grill master who could use an upgrade, this 20-piece grilling tool set from Cuisinart is a solid bet. Everything—including corn holders, skewers, a grill brush, spatula and tongs—is packaged in an aluminum carrying case for easy gifting. There's even a carving fork with a built-in digital thermometer to check doneness.",
        image: 'assets/img/30103.jpg',
        alt: "Picture of 'Cuisinart 20-Piece Deluxe BBQ Grill Tool Set'",
        link: 'https://www.amazon.ca/dp/B013TR2ENQ',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Barbecue'],
    },
    {
        id: 30104,
        name: 'Grillfather BBQ Apron',
        checker: 'Grillfather',
        description: 'This apron is the perfect gift for the master of the grill. It is a one size fits all with its adjustable neck strap and long waist ties. It has two large pockets right on front to hold all your grilling tools. Also on front is the perfect dad joke that will make any “GrillFather” and all those he encounters chuckle.',
        image: 'assets/img/30104.jpg',
        alt: "Picture of 'Grillfather'",
        link: 'https://www.amazon.ca/dp/B0100CHGQI',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Barbecue'],
    },
    {
        id: 30105,
        name: 'Weber Kettle Grill',
        checker: 'Weber',
        description: "The world's most iconic grill has stood the test of time ever since its first build, and it’s not hard to see why. This little kettle is one of the best charcoal grills out there owing to its durable build, airtight chamber, and ​big​ cooking surface area. Great for home use, it’s also easily portable so just as fantastic for tailgating or camping.",
        image: 'assets/img/30105.jpg',
        alt: "Picture of 'Weber Kettle Grill'",
        link: 'https://www.amazon.ca/dp/B00MKB5TXA',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Barbecue'],
    },
    {
        id: 30106,
        name: 'LED Concepts BBQ Grill Light',
        checker: 'Concepts',
        description: 'Grilling: It’s not just for weekend afternoons. A grill light makes outdoor cooking easy as the night sets in. It’s also good for anyone planning a smoking session that starts at 5 a.m.',
        image: 'assets/img/30106.jpg',
        alt: "Picture of 'LED Concepts BBQ Grill Light'",
        link: 'https://www.amazon.ca/dp/B01F7RO4YS',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Barbecue'],
    },
    {
        id: 30107,
        name: 'Rapicca BBQ Grill Oven Gloves',
        checker: 'Rapicca',
        description: 'A searingly hot grill is no joke. A good pair of gloves will let your giftee work over burning hot fires comfortably. Gloves are particularly important for smoker enthusiasts who have to constantly feed an already-blazing fire.',
        image: 'assets/img/30107.jpg',
        alt: "Picture of 'Rapicca BBQ Grill Oven Gloves'",
        link: 'https://www.amazon.ca/dp/B0748DCDGC',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Barbecue'],
    },
    {
        id: 30201,
        name: 'Reef Fanning Sandals',
        checker: 'Fanning',
        description: "There's a secret bottle opener built into the sole so you can crack into a cold one anywhere. A thicker instep and heel- and arch-supporting shape make room for the opener without interfering with walking, which makes these both useful and more comfortable than cheap plastic flip-flops.\nThere are also more than 30 different colours options available to fit any style!",
        image: 'assets/img/30201.jpg',
        alt: "Picture of 'Reef Fanning Sandals'",
        link: 'https://www.amazon.ca/dp/B00ZUY66AO',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Beer', 'cA', 'Footwear'],
    },
    {
        id: 30202,
        name: 'Tasting Beer - Randy Mosher',
        checker: 'Randy Mosher',
        description: 'Along with a series of illustrations and diagrams, this encyclopedic book touches on the history of brewing, how to discern an APA from an IPA, and how to identify different scents and flavors in beers. A section on serving beer and pairing foods is particularly useful for planning dinners and parties.\nFrom casual sippers to serious enthusiasts, this book is aimed at educating beer drinkers of all levels.',
        image: 'assets/img/30202.jpg',
        alt: "Picture of 'Tasting Beer' by Randy Mosher",
        link: 'https://www.amazon.ca/dp/1612127770',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Beer', 'Hobbies'],
    },
    {
        id: 30203,
        name: 'Stanley Classic 64 oz Easy-Pour Vacuum Insulated Growler',
        checker: 'Stanley',
        description: "The tight-sealing insulated container holds a half-gallon of beer, and will keep it both cold and carbonated for up to 24 hours. And the container is of course not limited to holding only beer; it'll keep soup or cocoa hot for up to 18 hours, or ice frozen for up to four days.",
        image: 'assets/img/30203.jpg',
        alt: "Picture of 'Stanley Classic 64 oz Easy-Pour Vacuum Insulated Growler'",
        link: 'https://www.amazon.ca/dp/B07NSVC384',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Beer'],
    },
    {
        id: 30204,
        name: 'Spiegelau IPA Glass Set',
        checker: 'Spiegelau',
        description: "Sure, the actual beer you're drinking affects what it tastes like, but so does the vessel you drink it from. Spiegelau makes glasses shaped to enhance the flavor of several different wine and beer styles, and this unusual design helps bring out the bitter and citrusy notes of IPA beers.",
        image: 'assets/img/30204.jpg',
        alt: "Picture of 'Spiegelau IPA Glass Set'",
        link: 'https://www.amazon.ca/dp/B00BTPUT3S',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Beer'],
    },
    {
        id: 30301,
        name: 'Wiscky Ice Cube Molds',
        checker: 'Wiscky',
        description: "Great cocktails always involve great ice. That's because serving drinks over large ice cubes makes a big difference and goes a long way in impressing your guests. These cube and sphere-shaped molds allow for slow dilution and satisfying presentation.",
        image: 'assets/img/30301.jpg',
        alt: "Picture of 'Wiscky Ice Cube Molds'",
        link: 'https://www.amazon.ca/dp/B0722VR5FZ',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cocktail'],
    },
    {
        id: 30302,
        name: 'I’m Just Here For the Drinks: A Guide to Spirits, Drinking, and More Than One Hundred Extraordinary Cocktails - Sother Teague',
        checker: 'Spirits',
        description: "Great cocktails always involve great ice. That's because serving drinks over large ice cubes makes a big difference and goes a long way in impressing your guests. These cube and sphere-shaped molds allow for slow dilution and satisfying presentation.",
        image: 'assets/img/30302.jpg',
        alt: "Picture of 'I’m Just Here For the Drinks: A Guide to Spirits, Drinking, and More Than One Hundred Extraordinary Cocktails' by Sother Teague",
        link: 'https://www.amazon.ca/dp/0998789844',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cocktail', 'Hobbies'],
    },
    {
        id: 30303,
        name: 'A History of the World in 6 Glasses - Tom Standage',
        checker: 'Glasses',
        description: 'This book is both a crash course on world history and the history of beverages (including beer, wine, spirits, coffee, tea and Coca-Cola), sharing the story of humanity through the perspective of these drinks.',
        image: 'assets/img/30303.jpg',
        alt: "Picture of 'A History of the World in 6 Glasses' by Tom Standage",
        link: 'https://www.amazon.ca/dp/0802715524',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Beer', 'Cocktail', 'Wine', 'book', 'Hobbies'],
    },
    {
        id: 30304,
        name: 'Fortessa Crafthouse Cocktail Set, 4 Piece',
        checker: 'Fortessa',
        description: "If you're looking for a suitable gift for someone who recently developed an interest in cocktail making, you can't go wrong with a one of the best cocktail shaker as a gift.",
        image: 'assets/img/30304.jpg',
        alt: "Picture of 'Fortessa Crafthouse Cocktail Set, 4 Piece'",
        link: 'https://www.amazon.ca/dp/B01M9CK9H2',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cocktail'],
    },
    {
        id: 30305,
        name: 'Delish Ultimate Cocktails',
        checker: 'Delish',
        description: "Our Ultimate Cocktails book will guide you through all the classic drinks, unique sips, and seasonal favorites. Plus, there's a guide to all the glassware every aspiring bartender should have.",
        image: 'assets/img/30305.jpg',
        alt: "Picture of 'Delish Ultimate Cocktails",
        link: 'https://www.amazon.ca/dp/1950785157',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cocktail', 'Hobbies'],
    },
    {
        id: 30401,
        name: 'Espro P3 French Press',
        checker: 'Espro',
        description: 'The Espro P3 not only does it make great-tasting coffee, it also keeps that coffee hotter longer, thanks to its thick beaker glass. And best of all, the Espro is dishwasher-safe, so cleanup is a breeze.Not only does it make great-tasting coffee, it also keeps that coffee hotter longer, thanks to its thick beaker glass. And best of all, the Espro is dishwasher-safe, so cleanup is a breeze.',
        image: 'assets/img/30401.jpg',
        alt: "Picture of 'Espro P3 French Press'",
        link: 'https://www.amazon.ca/dp/B011WTM622',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee'],
    },
    {
        id: 30402,
        name: 'Jirushi Slim Pot',
        checker: 'Jirushi',
        description: "This pot’s pour spout provides excellent precision and control, and because of it's slender profile and elegant design, the Jirushi Slim Pot sits tidily and looks beautiful on any shelf. Some people even water plants with it!",
        image: 'assets/img/30402.jpg',
        alt: "Picture of 'Jirushi Slim Pot'",
        link: 'https://www.amazon.ca/dp/B0007CM3C4',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee'],
    },
    {
        id: 30403,
        name: 'Cafflano Klassic Original All-in-One Pour-Over Coffee Maker',
        checker: 'Cafflano',
        description: "The Cafflano Klassic contains everything someone would need to brew and hold their coffee: a ceramic burr grinder, a kettle, a stainless filter dripper, an insulated tumbler, and a lid. It's very lightweight and practical, and it can be used anywhere.",
        image: 'assets/img/30403.jpg',
        alt: "Picture of 'Cafflano Klassic Original All-in-One Pour-Over Coffee Maker'",
        link: 'https://www.amazon.ca/dp/B00VRYMTR0',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee'],
    },
    {
        id: 30404,
        name: 'Fellow Stagg EKG Electric Pour-over Kettle',
        checker: 'EKG',
        description: 'There’s no kettle more recommended by coffee professionals, who praise it for just about everything. It heats quickly and allows you to adjust the temperature setting in one-degree increments and will even regulate and hold at your temp preference.',
        image: 'assets/img/30404.jpg',
        alt: "Picture of 'Fellow Stagg EKG Electric Pour-over Kettle'",
        link: 'https://www.amazon.ca/dp/B077JBQZPX',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee', 'Tea'],
    },
    {
        id: 30405,
        name: 'Breville Infuser',
        checker: 'Breville',
        description: 'While certainly a splurge, you can’t get much more solid than Breville machines if you’re searching for an espresso-maker to gift someone.',
        image: 'assets/img/30405.jpg',
        alt: "Picture of 'Breville Infuser'",
        link: 'https://www.amazon.ca/dp/B0089SSOR6',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee'],
    },
    {
        id: 30406,
        name: 'Ovalware RJ3 Cold Brew Maker and Tea Infuser',
        checker: 'Ovalware',
        description: 'This is a handsome device made with glass and steel, two materials that are much easier to clean and last far longer than similarly priced contraptions made of plastic.\nThis gift is also particularly thoughtful for a coffee drinker who dabbles in tea (or lives with a tea lover) because it doubles as a nice iced-tea-maker.',
        image: 'assets/img/30406.jpg',
        alt: "Picture of 'Ovalware RJ3 Cold Brew Maker and Tea Infuser'",
        link: 'https://www.amazon.ca/dp/B01CTIYU60',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Coffee', 'Tea'],
    },
    {
        id: 30407,
        name: 'Takeya Deluxe Cold Brew Coffee Maker',
        checker: 'Takeya',
        description: 'One of the best-rated cold brew makers on Amazon with almost 47,000 five-star reviews, this gadget is popular for being easy to use. Plus, its sleek and simple design is easy to store in any fridge.',
        image: 'assets/img/30407.jpg',
        alt: "Picture of 'Takeya Deluxe Cold Brew Coffee Maker'",
        link: 'https://www.amazon.ca/dp/B00FFLY64U',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee'],
    },
    {
        id: 30408,
        name: 'Ember Temperature Control Smart Mug 2',
        checker: 'Ember',
        description: "If you're looking for something that will keep their coffee's temperature consistent for hours, Ember's heated mug makes a nice luxury pick. They can easily set their preferred drinking temperature via an app on their smartphone.",
        image: 'assets/img/30408.jpg',
        alt: "Picture of 'Ember Temperature Control Smart Mug 2'",
        link: 'https://www.amazon.ca/dp/B07Z5H4TF5',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Coffee', 'Tea', 'Sleep', 'HomeTec'],
    },
    {
        id: 30501,
        name: 'The Tobacconist Handbook: An Essential Guide to Cigars & Pipes - Jorge Armentero',
        checker: 'Tobacconist',
        description: 'Explore the world and legacy of the tobacco plant in The Tobacconist Handbook. Connoisseurs of a good smoke will enjoy poring over the text, which is packed with information about how the best tobacco is grown, how to find the right cigar for you, how to set up a humidor, and more.',
        image: 'assets/img/30501.jpg',
        alt: "Picture of 'The Tobacconist Handbook: An Essential Guide to Cigars & Pipes' by Jorge Armentero",
        link: 'https://www.amazon.ca/dp/1510752129',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cigars', 'Hobbies'],
    },
    {
        id: 30502,
        name: 'Cigar Socks',
        checker: 'Cigar',
        description: 'When wearing these underneath a business casual dress slacks, the wearer will feel one step closer to the 5 pm hour.',
        image: 'assets/img/30502.jpg',
        alt: "Picture of 'Cigar Socks'",
        link: 'https://www.amazon.ca/dp/B07KWG9Z4F',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cigars', 'Socks'],
    },
    {
        id: 30503,
        name: 'Sealing Wind & Odor Resistant Ash Tray',
        checker: 'Sealing',
        description: "Keep your space looking and smelling fresh with an ashtray built for cleanliness. The melamine tray is covered and seals ash and odors inside while you smoke. Its cigar rests are covered when not in use so an accidental bump or gust of wind won't send the ashes flying.",
        image: 'assets/img/30503.jpg',
        alt: "Picture of 'Sealing Wind & Odor Resistant Ash Tray'",
        link: 'https://www.amazon.ca/dp/B07W11ZB5Y',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cigars', 'Weed'],
    },
    {
        id: 30504,
        name: 'Cigar Whiskey Glass',
        checker: 'Whiskey',
        description: "Sip and smoke at the same time while keeping one hand free to gesture around the room with a unique whiskey glass. This lead-free crystal glass exudes class and has a divot in the side to hold his stogie that doesn't take away from the volume of the glass.",
        image: 'assets/img/30504.jpg',
        alt: "Picture of 'Cigar Whiskey Glass'",
        link: 'https://www.amazon.ca/dp/B07KX64VT8',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Cigars', 'Cocktail'],
    },
    {
        id: 30505,
        name: 'Tesla Coil Arc Lighter',
        checker: 'Tesla',
        description: 'Get high-tech in the cigar lighting experience with a Tesla Coil arc lighter that truly looks like the way of the future. Available in four different colours, the lighter runs on electricity and has a battery that lasts up to a week or about 100-300 lights.',
        image: 'assets/img/30505.jpg',
        alt: "Picture of 'Tesla Coil Arc Lighter'",
        link: 'https://www.amazon.ca/dp/B016P8A1K4',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cigars'],
    },
    {
        id: 30506,
        name: 'Redwood Cigar Cutter',
        checker: 'Redwood',
        description: 'Cigar cutters is the #1 best gift for cigar lovers for a reason. Having a good cigar can totally change your experience with cigars and it’s typically something that people skimp on. A nice, clean and consistent cut on a cigar can make a good cigar, great.',
        image: 'assets/img/30506.jpg',
        alt: "Picture of 'Redwood Cigar Cutter'",
        link: 'https://www.amazon.ca/dp/B005QOO0TW',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cigars'],
    },
    {
        id: 30507,
        name: 'Cohiba Travel Cigar Case',
        checker: 'Cohiba',
        description: 'This Cohiba travel case boasts one of the most familiar and popular Cuban cigar brands. With cedar interior and brown leather on the exterior, this travel cigar case is sharp and will keep your cigars protected.  It comes with a lot of extras as well: black gift box, velvet gift bag, cigar cutter, and a humidification device.',
        image: 'assets/img/30507.jpg',
        alt: "Picture of 'Cohiba Travel Cigar Case'",
        link: 'https://www.amazon.ca/dp/B01EABRLUG',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Cigars'],
    },
    {
        id: 30601,
        name: 'Le Creuset Enameled Cast Iron Signature Round Dutch Oven',
        checker: 'Creuset',
        description: "There are two camps of home chefs: those who have and love a piece from Le Creuset and those who covet one. The enameled cast iron kitchen tool is durable and perfect for slow-cooking, braising, and roasting, and is sure to become a staple in the recipient's kitchen.",
        image: 'assets/img/30601.jpg',
        alt: "Picture of 'Le Creuset Enameled Cast Iron Signature Round Dutch Oven, 5.5 qt'",
        link: 'https://www.amazon.ca/dp/B01AXZ6IUW',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Food', 'eDS'],
    },
    {
        id: 30602,
        name: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking - Samin Nosrat',
        checker: 'Nosrat',
        description: "For that friend who binged the Netflix show Salt, Fat, Acid, Heat, the book that inspired the series will teach them more about mastering the four elements of cooking. It's also great for the cooking-curious friend who needs a little help in the kitchen, as it'll teach them the foundation of food from the ground up.",
        image: 'assets/img/30602.jpg',
        alt: "Picture of 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking' by Samin Nosrat",
        link: 'https://www.amazon.ca/dp/B01AXZ14767538306IUW',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Food', 'book', 'Hobbies'],
    },
    {
        id: 30603,
        name: 'Delish: Eat Like Every Day’s the Weekend',
        checker: 'Delish',
        description: "We're a little biased, but we think every person who loves to eat needs this amazing cookbook. Inside you'll find some of our best recipes, like a quesadilla cake, chicken fried cauliflower, and cookie dough cheesecake.",
        image: 'assets/img/30603.jpg',
        alt: "Picture of 'Delish: Eat Like Every Day’s the Weekend'",
        link: 'https://www.amazon.ca/dp/1328498867',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Food', 'Hobbies'],
    },
    {
        id: 30604,
        name: 'Thoughtfully Master Hot Sauce Collection Gift Set',
        checker: 'Thoughtfully',
        description: "Give the gift of a hot sauce party, or host your own version of Hot Ones with all these different flavored sauces. There's Garlic Herb, Cayenne Smoky Bourbon, Jalapeno Bacon, Mango Habanero, Chipotle, and more!",
        image: 'assets/img/30604.jpg',
        alt: "Picture of 'Thoughtfully Master Hot Sauce Collection Gift Set'",
        link: 'https://www.amazon.ca/dp/B07LB5J3QM',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Food'],
    },
    {
        id: 30605,
        name: 'HAST 8 Inch-Professional Kitchen Knife',
        checker: 'HAST',
        description: "This chef's knife is a stunner and comes in black as well. It's super sharp, relatively lightweight and has a comfortable handle that sits in the palm of your hand well.",
        image: 'assets/img/30605.jpg',
        alt: "Picture of 'HAST 8 Inch-Professional Kitchen Knife'",
        link: 'https://www.amazon.ca/dp/B08QN3BQQR',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Food'],
    },
    {
        id: 30606,
        name: 'Cuisinart Electric Griddler',
        checker: 'Cuisinart',
        description: 'From pressing a panini to whipping up a big batch of pancakes, this easy-to-clean griddle is a mealtime game changer. It features the function, temperature and timer digitally for easy use, and it comes with a 3-year warranty.',
        image: 'assets/img/30606.jpg',
        alt: "Picture of 'Cuisinart Electric Griddler'",
        link: 'https://www.amazon.ca/dp/B0778XLPB7',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Food'],
    },
    {
        id: 30607,
        name: 'Fly By Jing Sichuan Chili Crisp',
        checker: 'Sichuan',
        description: 'Chili crisp has gained a cult-like following over the past year for its ability to go on everything. The popular spicy condiment is the perfect stocking stuffer for the heat-loving.',
        image: 'assets/img/30607.jpg',
        alt: "Picture of 'Fly By Jing Sichuan Chili Crisp'",
        link: 'https://www.amazon.ca/dp/B08ZZG1M8F',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Food'],
    },
    {
        id: 30608,
        name: 'SMIRLY Charcuterie Boards Gift Set',
        checker: 'Charcuterie',
        description: 'This bad boy has an expandable design that features two drawers that hold serving knives and utensils, three ceramic serving bowls for sauces and dips, a round fruit tray, and a separate serving platter stone for even more decadent delectables.',
        image: 'assets/img/30608.jpg',
        alt: "Picture of 'SMIRLY Charcuterie Boards Gift Set'",
        link: 'https://www.amazon.ca/dp/B084ZXFS8B',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Food'],
    },
    {
        id: 30609,
        name: 'Rongyuxuan Electric Spice Grinder Set',
        checker: 'Rongyuxuan',
        description: "If your friend's always coming back from their travels with fun, new spices to test out, they'll love this set of electric spice grinders that'll help keep their fave seasonings fresh till it's time to mill them out. These even come outfitted with LED lights to make sure they can see exactly how much spice they're adding.",
        image: 'assets/img/30609.jpg',
        alt: "Picture of 'Rongyuxuan Electric Spice Grinder Set'",
        link: 'https://www.amazon.ca/dp/B07X7MMH8Q',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Food'],
    },
    {
        id: 30610,
        name: 'A Cook’s Tour - Anthony Bourdain',
        checker: 'Bourdain',
        description: 'Anthony Bourdain made a name for himself as a distinguished, experienced food writer. As a record of his trip around the world to find “the perfect meal,” his book A Cook’s Tour shares and celebrates all his incredible travels and the meals he enjoyed.\nThis book is the perfect gift for someone who loves to experience others’ views and finds inspiration from them.',
        image: 'assets/img/30610.jpg',
        alt: "Picture of 'A Cook’s Tour' by Anthony Bourdain",
        link: 'https://www.amazon.ca/dp/0060012781',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Food', 'Hobbies'],
    },
    {
        id: 30701,
        name: 'Sweejar Royal Ceramic Teapot',
        checker: 'Sweejar',
        description: "This beautiful teapot has a classic design and comes in many different colours. It's also very durable!",
        image: 'assets/img/30701.jpg',
        alt: "Picture of 'Sweejar Royal Ceramic Teapot'",
        link: 'https://www.amazon.ca/dp/B07X39XLR9',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea'],
    },
    {
        id: 30702,
        name: 'Volar Fashion Elephant Tea Mug',
        checker: 'Volar',
        description: 'This adorable tea mug even comes with a perfect little spot for the teabag!',
        image: 'assets/img/30702.jpg',
        alt: "Picture of 'Volar Fashion Elephant Tea Mug'",
        link: 'https://www.amazon.ca/dp/B071HLGYN9',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea', 'Sleep'],
    },
    {
        id: 30703,
        name: 'SWEEJAR Porcelain Tea Set',
        checker: 'SWEEJAR',
        description: 'Every tea lover needs a fancy tea set. This simple and beautiful ombre set comes in shades of pink, blue, and purple.',
        image: 'assets/img/30703.jpg',
        alt: "Picture of 'SWEEJAR Porcelain Tea Set'",
        link: 'https://www.amazon.ca/dp/B09C8D46VD',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea'],
    },
    {
        id: 30704,
        name: "Hario 'Ka-Ku' Cold Brew Tea Bottle",
        checker: 'Hario',
        description: "For tea lovers who like their cups cold, this gadget brews tea to go over ice. Outfitted with mesh filter and a square shape that fits snugly in the fridge, it's just the thing to make a refreshing round of iced tea.",
        image: 'assets/img/30704.jpg',
        alt: "Picture of 'Hario Ka-Ku Cold Brew Tea Bottle'",
        link: 'https://www.amazon.ca/dp/B07BK97DBT',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea'],
    },
    {
        id: 30705,
        name: 'Pipishell Bamboo Bed Tray Table',
        checker: 'Pipishell',
        description: 'This tray table is perfect for tea or coffee in bed on a lazy Sunday. The legs also fold inward, making storage a breeze.',
        image: 'assets/img/30705.jpg',
        alt: "Picture of 'Pipishell Bamboo Bed Tray Table'",
        link: 'https://www.amazon.ca/dp/B088K4X3YJ',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['eDS', 'Tea', 'Coffee', 'Food'],
    },
    {
        id: 30706,
        name: 'Pinky Up Cat Mug',
        checker: 'Cat Mug',
        description: "Is your tea-loving friend also a cat lover? If so, you'll hit the jackpot with this ceramic mug. There's a cute message on the inside.",
        image: 'assets/img/30706.jpg',
        alt: "Picture of 'Pinky Up Cat Mug'",
        link: 'https://www.amazon.ca/dp/B071NJYX6Z',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea', 'Cat', 'Sleep'],
    },
    {
        id: 30707,
        name: 'Ten Speed Press The Story of Tea: A Cultural History and Drinking Guide - Mary Lou Heiss and Robert J. Heiss',
        checker: 'Speed Press',
        description: "If they really an avid tea connoisseur, then this book might be the ideal gift for them. In this fascinating tour through the world of tea, veteran tea traders Mary Lou Heiss and Robert J. Heiss chronicle tea's influence across the globe and provide a complete reference for choosing, drinking, and enjoying this beverage.",
        image: 'assets/img/30707.jpg',
        alt: "Picture of 'Ten Speed Press The Story of Tea: A Cultural History and Drinking Guide' by Mary Lou Heiss and Robert J. Heiss",
        link: 'https://www.amazon.ca/dp/1580087450',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea', 'Hobbies'],
    },
    {
        id: 30708,
        name: 'Le Creuset Stoneware Tea Mug',
        checker: 'Creuset',
        description: "This strong, 14 oz. mug from the beloved brand Le Creuset can withstand the oven, microwave, broiler, dishwasher, and freezer. As if that weren't impressive enough, it can also endure temperatures between -65° F and 500° F.",
        image: 'assets/img/30708.jpg',
        alt: "Picture of 'Le Creuset Stoneware Tea Mug'",
        link: 'https://www.amazon.ca/dp/B00FJDM3I0',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea', 'Sleep'],
    },
    {
        id: 30709,
        name: 'Grace Teaware Porcelain 4-Piece Tea For One',
        checker: 'Grace',
        description: 'What is a tea lover without their own teapot and cup? This beautifully elegant and very proper tea for one allows them to make two cups of tea with one pot, perfectly sized for one person.',
        image: 'assets/img/30709.jpg',
        alt: "Picture of 'Grace Teaware Porcelain 4-Piece Tea For One'",
        link: 'https://www.amazon.ca/dp/B01MXLAXGR',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Tea'],
    },
    {
        id: 30801,
        name: 'Weed: Everything You Want To Know But Are Always Too Stoned To Ask - Michelle Lhooq',
        checker: 'Weed',
        description: "A coffee table book for the stoner who wants to educate themselves on the interesting ins and outs of weed culture. Or, the newbie who still doesn't have a handle on indica and sativa, but is eager to learn.",
        image: 'assets/img/30801.jpg',
        alt: "Picture of 'Weed: Everything You Want To Know But Are Always Too Stoned To Ask' by Michelle Lhooq",
        link: 'https://www.amazon.ca/dp/3791384899',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed', 'Hobbies'],
    },
    {
        id: 30802,
        name: 'HIGH Ball Handheld Electronic Game',
        checker: 'Handheld',
        description: "Here's a new activity for after they become a little blazed—instead of putting on The Office for the 800th time: a light ball that'll test their memory and reflex skills.",
        image: 'assets/img/30802.jpg',
        alt: "Picture of 'HIGH Ball Handheld Electronic Game'",
        link: 'https://www.amazon.ca/dp/B07XBV42WJ',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed'],
    },
    {
        id: 30803,
        name: 'FireDog Smell-Proof Pouch',
        checker: 'FireDog',
        description: "Just 'cause it's legal doesn't mean they've got to walk around reeking of it.",
        image: 'assets/img/30803.jpg',
        alt: "Picture of 'FireDog Smell-Proof Pouch'",
        link: 'https://www.amazon.ca/dp/B07YZ1XXNLy',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed'],
    },
    {
        id: 30804,
        name: 'RAW Triple Flip Rolling Foldable Tray',
        checker: 'RAW',
        description: "This bamboo tray, with all the compartments, holders, and stands, is an organized stoner's dream. It has a built-in ashtray, too.",
        image: 'assets/img/30804.jpg',
        alt: "Picture of 'RAW Triple Flip Rolling Foldable Tray'",
        link: 'https://www.amazon.ca/dp/B079V13LGJ',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed'],
    },
    {
        id: 30805,
        name: 'Mamba V2-50 Portable Electric Herb Grinder',
        checker: 'Mamba',
        description: 'This is a one-hand-operable grinder that is as affordable as it is neat at slicing, dicing, and dispensing weed. Pretty convenient, if you ask us.',
        image: 'assets/img/30805.jpg',
        alt: "Picture of 'Mamba V2-50 Portable Electric Herb Grinder'",
        link: 'https://www.amazon.ca/dp/B08P1HJ5P5',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed'],
    },
    {
        id: 30806,
        name: 'Bong Appétit: Mastering the Art of Cooking with Weed',
        checker: 'Bong',
        description: 'For the culinary mastermind, a book all about cooking with cannabis is perfect for breakfast, lunch, and dinner. It goes so much further than pot brownies.',
        image: 'assets/img/30806.jpg',
        alt: "Picture of 'Bong Appétit: Mastering the Art of Cooking with Weed'",
        link: 'https://www.amazon.ca/dp/0399580107',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed', 'Hobbies'],
    },
    {
        id: 30807,
        name: 'High Art - Robert Lambrechts and Estefanio Holtz',
        checker: 'Lambrechts',
        description: 'An art history book about high art—as in, high art. Get cultured with fifty works featuring cannabis. Who knew Van Gogh was a stoner, too?',
        image: 'assets/img/30807.jpg',
        alt: "Picture of 'High Art' by Robert Lambrechts and Estefanio Holtz",
        link: 'https://www.amazon.ca/dp/0593135776',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed', 'Hobbies', 'Art'],
    },
    {
        id: 30808,
        name: 'Missouri Meerschaum Legend Corn Cob Tobacco Pipe',
        checker: 'Meerschaum',
        description: "Feel like Frosty the Snowman with this corncob pipe. You'll definitely have some high thoughts while smoking out of this.",
        image: 'assets/img/30808.jpg',
        alt: "Picture of 'Missouri Meerschaum Legend Corn Cob Tobacco Pipe'",
        link: 'https://www.amazon.ca/dp/B00735KXN4',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed'],
    },
    {
        id: 30809,
        name: 'LED Mushroom Night Light',
        checker: 'Mushroom',
        description: 'Give these LED mushroom night lights to your stoner pal who wants to replace the tapestry on their wall, but also wants to preserve the psychedelic ~vibes~ they’ve spent so long cultivating.',
        image: 'assets/img/30809.jpg',
        alt: "Picture of 'LED Mushroom Night Light'",
        link: 'https://www.amazon.ca/dp/B09YHPPY4K',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed'],
    },
    {
        id: 30810,
        name: ' Sunday Scaries CBD Gummies',
        checker: 'CBD',
        description: "With a little help from Sunday Scaries gummies, the Sunday scareis won't be a thing for you anymore. Each of the tasty gummies has 10mg of CBD in them, take 2-3 at bedtime to take the edge off your anxiety.",
        image: 'assets/img/30810.jpg',
        alt: "Picture of 'Sunday Scaries CBD Gummies'",
        link: 'https://sundayscaries.com/products/cbd-gummies',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Weed', 'Natural & Alternative Medicine'],
    },
    {
        id: 30901,
        name: 'Wine Food: New Adventures In Drinking And Cooking - Dana Frank',
        checker: 'Wine Food',
        description: 'Putting together a pairing dinner has never been easier. This cookbook, filled with tasty recipes and handy pairing guides, makes it simpler than ever to make your next dinner party sommelier-level.',
        image: 'assets/img/30901.jpg',
        alt: "Picture of 'Wine Food: New Adventures In Drinking And Cooking' by Dana Frank ",
        link: 'https://www.amazon.ca/dp/0399579591',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Wine', 'Hobbies'],
    },
    {
        id: 30902,
        name: 'Riedel Winewings Tasting Wine Glass Set (Set of 4)',
        checker: 'Riedel',
        description: 'hese wine glasses have an eye-catching shape, but the design isn’t just for aesthetic appeal. The Winewings collection from Riedel features flat-bottomed glasses that increase the surface area of the wine, which speeds up the rate of evaporation and produces a more distinct aroma.',
        image: 'assets/img/30902.jpg',
        alt: "Picture of 'Riedel Winewings Tasting Wine Glass Set (Set of 4)'",
        link: 'https://www.amazon.ca/dp/B0855BSVD2',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Wine'],
    },
    {
        id: 30903,
        name: 'Avery Wine Folly: Magnum Edition - Madeline Puckette',
        checker: 'Folly',
        description: 'If you’re wondering whether this book is any good, Wine Folly won a James Beard award—a huge honor in the culinary world. The hardcover guide is attractive enough to use as decor on a coffee table, but it’s also an amazing educational resource on all things wine, including types of grapes and wines, wine labeling and classification, food pairings and much more.',
        image: 'assets/img/30903.jpg',
        alt: "Picture of 'Avery Wine Folly: Magnum Edition' by Madeline Puckette",
        link: 'https://www.amazon.ca/dp/0525533893',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Wine', 'Hobbies'],
    },
    {
        id: 30904,
        name: 'Wine Glass For Dog Lovers',
        checker: 'Dog Lovers',
        description: 'I can guarantee most people will see themselves in this glass!',
        image: 'assets/img/30904.jpg',
        alt: "Picture of 'Wine Glass For Dog Lovers'",
        link: 'https://www.amazon.ca/dp/B09QB94G2M',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Wine', 'Dog'],
    },
    {
        id: 30905,
        name: 'Wine Glass For Cat Lovers',
        checker: 'Cat Lovers',
        description: 'This is my favorite wine glass ever!',
        image: 'assets/img/30905.jpg',
        alt: "Picture of 'Wine Glass For Cat Lovers'",
        link: 'https://www.amazon.ca/dp/B08S5ZRS9V',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Wine', 'Cat'],
    },
    {
        id: 30906,
        name: 'Peugeot Baltaz Lever Corkscrew',
        checker: 'Peugeot',
        description: "This solid metal corkscrew makes it easy to gently extract even the most stuck-in-place corks. It's sturdy and durable, so the lever-style mechanism removes corks with ease. This corkscrew is an elegant and efficient way to eliminate any cork-pulling anxiety or confusion.",
        image: 'assets/img/30906.jpg',
        alt: "Picture of 'Peugeot Baltaz Lever Corkscrew'",
        link: 'https://www.amazon.ca/dp/B004ZLW1FM',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Wine'],
    },
    {
        id: 30907,
        name: 'Peugeot Capitaine 10.25 Inch Wine Decanter',
        checker: 'Peugeot',
        description: "Wine decanters make the perfect gift because they're just as much a functional gadget as they are a decorative piece of art. This option from Peugeot has a unique base that allows it to stand upright or sit tilted on its side, and the wide base allows for maximum air exposure in a brief amount of time. The solid glass stopper also helps with aeration, making this a great decanter for younger wines that need help opening up.",
        image: 'assets/img/30907.jpg',
        alt: "Picture of 'Peugeot Capitaine 10.25 Inch Wine Decanter'",
        link: 'https://www.amazon.ca/dp/B0013SSXHU',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Wine'],
    },
    {
        id: 30908,
        name: 'Riedel Eve Clear Wine Decanter',
        checker: 'Riedel',
        description: 'Named after the Riedel family matriarch, this elegant decanter is free-blown by a master glass artist. Its sumptuous curves are not just beautiful: They also help to double-decant the wine.',
        image: 'assets/img/30908.jpg',
        alt: "Picture of 'Riedel Eve Clear Wine Decanter'",
        link: 'https://www.amazon.ca/dp/B002YT8FSO',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Wine'],
    },
    {
        id: 30909,
        name: 'Wine Country Tote with Cheese Service and Corkscrew',
        checker: 'Corkscrew',
        description: 'For serious picnickers, only the most organized wine and cheese tote will do.',
        image: 'assets/img/30909.jpg',
        alt: "Picture of 'Wine Country Tote with Cheese Service and Corkscrew'",
        link: 'https://www.amazon.ca/dp/B001Q73WJC',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['eDS', 'Wine', 'Food'],
    },
    {
        id: 40601,
        name: 'Brass Easel & Calendar',
        checker: 'Brass',
        description: 'Create a one-of-a-kind gift by personalizing a calendar with your loved one’s favorite photos. They’ll be able to relive their most treasured moments one month at a time.',
        image: 'assets/img/40601.jpg',
        alt: "Picture of 'Brass Easel & Calendar'",
        link: 'https://www.artifactuprising.com/photo-calendars/brass-easel-desk-calendar',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['fPF', 'Partner'],
    },
    {
        id: 40602,
        name: 'Dual-Zone Climate Smart Duvet',
        checker: 'Climate',
        description: 'Forget mattress firmness, the real issue tearing marriages apart is how hot or cold the bedroom should be. Meet your relationship saver. This dual-zone smart duvet allows you to choose the temperature of your blanket on your side of the bed.',
        image: 'assets/img/40602.jpg',
        alt: "Picture of 'Dual-Zone Climate Smart Duvet'",
        link: 'https://www.smartduvet.com/',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Sleep', 'Partner'],
    },
    {
        id: 50101,
        name: 'Personalized Leather Toiletry',
        checker: 'Toiletry',
        description: 'This bag comes in 6 colors and has a nylon liner inside to ensure that products don’t accidentally leak into his luggage when traveling. It also comes with a lifetime warranty against defects and you can put initials monogrammed onto the handcrafted, authentic full grain leather kit. How cool is that?!',
        image: 'assets/img/50101.jpg',
        alt: "Picture of 'Personalized Leather Toiletry'",
        link: 'https://www.etsy.com/ca/listing/158013182/',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['hB', 'Bath & Body', 'cA', 'travel', 'Business', 'Vacation'],
    },
    {
        id: 50102,
        name: 'Turkish Cotton Terry Men’s Bathrobe',
        checker: 'Turkish',
        description: 'This hooded long robe is textured, has a rice weave trip and comes in 4 colors: grey, white, navy blue and beige.\nMade from very high quality 100% Turkish cotton, this Turkish Cotton Terry Men’s Bathrobe gets softer with each wash.',
        image: 'assets/img/50102.jpg',
        alt: "Picture of 'Turkish Cotton Terry Men’s Bathrobe'",
        link: 'https://www.etsy.com/ca/listing/1025592495/',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Bath & Body', 'cA', 'Sleepwear'],
    },
    {
        id: 50103,
        name: 'Beard Kit for Men’s Grooming and Care by FULLIGHT TECH Store',
        checker: 'Beard',
        description: 'This beard kit contains unscented beard wash, beard oil, beard balm, a comb, a boars’ hairbrush, stainless steel scissors and a bag to hold the products.\nThe beard wash is formulated so that it doesn’t strip the natural oils from the beard. It will grow healthy and shiny with this pure and organic beard kit!',
        image: 'assets/img/50103.jpg',
        alt: "Picture of 'Beard Kit for Men’s Grooming and Care' by FULLIGHT TECH Store",
        link: 'https://www.amazon.ca/dp/B0797VH3MJ',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Bath & Body', 'Beard', 'Hair'],
    },
    {
        id: 50104,
        name: 'Philips Norelco Shaver 3800',
        checker: 'Norelco',
        description: 'It can be difficult to find a wet and dry shaver that provides a great shave, but this rechargeable shaver will! The battery lasts for one hour after it has been charged. However, if it is charged for just 5 minutes, it will be ready for one quick shave.',
        image: 'assets/img/50104.jpg',
        alt: "Picture of 'Philips Norelco Shaver 3800'",
        link: 'https://www.amazon.ca/dp/B083JCXPY1',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['hB', 'Bath & Body', 'Beard', 'Hair'],
    },
    {
        id: 50105,
        name: 'VIP Men’s Skin Care Set by Thrive Natural Care Store',
        checker: 'Thrive',
        description: 'This organic skincare set will revitalize the appearance of the skin without irritating it. This set includes face wash, face scrub, shaving oil, and face balm. Also, when you purchase from Thrive Natural, you support the rural Costa Rican farmers whose plants help make these one-of-a-kind, skin-soothing products. Good for a environmentally conscious person!',
        image: 'assets/img/50105.jpg',
        alt: "Picture of 'VIP Men’s Skin Care Set' by Thrive Natural Care Store",
        link: 'https://www.amazon.ca/dp/B06ZYZ696H',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Bath & Body', 'Skin & Nail'],
    },
    {
        id: 50106,
        name: "Aromasong's Muscle Soak",
        checker: "Aromasong's Muscle Soak",
        description: "The Aromasong's Muscle Soak formula consists of fast-absorbing magnesium flakes from the Dead Sea, which help with faster absorption and faster results. Additionally, it's also infused with 9 pure essential oils for an awesome aromatherapy relaxation, including tea tree oil and lavender that promotes feelings of calmness.\nNothing’s quite like soaking into the goodness of a warm bath after a long day of an extreme workout, a physically demanding job, or an outdoor adventure. Am I right?!",
        image: 'assets/img/50106.jpg',
        alt: "Picture of 'Aromasong's Muscle Soak'",
        link: 'https://www.amazon.ca/dp/B0BFYRTNPZ',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Bath & Body', 'sports'],
    },
    {
        id: 50107,
        name: 'KORRES Olive Body Cream',
        checker: 'KORRES',
        description: "Breaking news: A Mediterranean diet is good for health and your skin. Pure Greek olive oil is the star of the show here, packed with omega fatty acids and antioxidants, and famous for it's quality.",
        image: 'assets/img/50107.jpg',
        alt: "Picture of 'KORRES Olive Body Cream'",
        link: 'https://www.amazon.ca/dp/B01HMU97RW',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hB', 'Bath & Body', 'Skin & Nail'],
    },
    {
        id: 50108,
        name: 'VOESH Clean Ocean Vitamin C Shower Filter',
        checker: 'VOESH',
        description: "Ok, this one is really unique. It's a vitamin C-infused shower filter that removes impurities and adds in nourishing vitamin C to your shower! This clean, refreshing scent will have you dreaming of a seaside walk on the beach, with the cool, crisp ocean breeze caressing your skin.",
        image: 'assets/img/50108.jpg',
        alt: "Picture of 'VOESH Clean Ocean Vitamin C Shower Filter'",
        link: 'https://www.amazon.ca/dp/B099QN7JDF',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Bath & Body', 'Skin & Nail'],
    },
    {
        id: 50109,
        name: 'Spa Luxetique Spa Gift Set',
        checker: 'Luxetique',
        description: 'If lavender is your go-to relaxation scent, hi, welcome to your new fave bath gift set. Literally every product in this set is lavender scented, from the massage oil to the bubble bath. Even better: It comes with a really cute purple towel.',
        image: 'assets/img/50109.jpg',
        alt: "Picture of 'Spa Luxetique Spa Gift Set'",
        link: 'https://www.amazon.ca/dp/B07V2XJLN1',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hB', 'Bath & Body', 'Skin & Nail'],
    },
    {
        id: 50110,
        name: 'Aofmee Bath Bombs Gift Set',
        checker: 'Aofmee',
        description: 'Swap traditional bath gift sets for bath bombs if bubbles are more their thing. This one comes with 6 lovingly handcrafted bath bombs, all with longer-lasting perfuming effects, give you an special multilayered explosion of color and scent. Each bath bomb is unique, but ultimately perfect in its own little way. Perfect for kids and teenagers!',
        image: 'assets/img/50110.jpg',
        alt: "Picture of 'Aofmee Bath Bombs Gift Set'",
        link: 'https://www.amazon.ca/dp/B07Q8XDQYJ',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen'],
        tags: ['hB', 'Bath & Body', 'Skin & Nail'],
    },
    {
        id: 50111,
        name: 'BEAUTY BY EARTH Bath Bomb Gift Set',
        checker: 'BEAUTY',
        description: 'You will love these organic gifts and relaxing bath products. Our bath bombs contain epsom salt, detoxifying clays & luxurious butters and oils. The most popular bath bombs in Amazon!',
        image: 'assets/img/50111.jpg',
        alt: "Picture of 'BEAUTY BY EARTH Bath Bomb Gift Set'",
        link: 'https://www.amazon.ca/dp/B00W2EH98I',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hB', 'Bath & Body', 'Skin & Nail'],
    },
    {
        id: 50112,
        name: 'Waterproof Hanging Travel Toiletry Bag',
        checker: 'Waterproof',
        description: 'YThis waterproof toiletry bag has soft & padded fabric, reliable zippers and velcro. It also comes with multiple storage compartments and a smart hook. Very cool.',
        image: 'assets/img/50112.jpg',
        alt: "Picture of 'aterproof Hanging Travel Toiletry Bag'",
        link: 'https://www.amazon.ca/dp/B07JQN74BH',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['hB', 'Bath & Body', 'cA', 'travel', 'Business', 'Vacation'],
    },
    {
        id: 50113,
        name: 'NY Threads Womens Fleece Bathrobe',
        checker: 'Threads',
        description: 'This bathrobe is soft and fluffy, which can be worn all day long; perfect for lounging, relaxation. It also has front pockers, adjustable waist belt and has 19 different colour options!',
        image: 'assets/img/50113.jpg',
        alt: "Picture of 'NY Threads Womens Fleece Bathrobe'",
        link: 'https://www.amazon.ca/dp/B07QJ9JT95',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Bath & Body', 'cA', 'Sleepwear'],
    },
    {
        id: 50114,
        name: 'Dusen Dusen Stripe Cotton Bathrobe',
        checker: 'Dusen',
        description: 'Gift this super-soft robe to anyone who considers bathlesiure an Olympic sport. The fit is loose, and it typically hits below the knee, so you get a lot of coziness for the cost, and the bright hues are sure to make the wearer smile.',
        image: 'assets/img/50114.jpg',
        alt: "Picture of 'Dusen Dusen Stripe Cotton Bathrobe'",
        link: 'https://www.nordstrom.com/s/dusen-dusen-stripe-cotton-bathrobe/5700332',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Bath & Body', 'cA', 'Sleepwear'],
    },
    {
        id: 50201,
        name: 'Funny Beardiful Mug',
        checker: 'Beardiful',
        description: 'We are all beardiful inside, at least if you believe this funny beard mug that is.',
        image: 'assets/img/50201.jpg',
        alt: "Picture of 'Funny Beardiful Mug'",
        link: 'https://www.amazon.ca/dp/B07WJR43JW',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Bath & Body', 'Beard', 'Hair', 'Coffee', 'Tea'],
    },
    {
        id: 50202,
        name: 'My Beard My Rules Novelty Socks',
        checker: 'Rules',
        description: 'Very soft and durable cotton socks for the bearded guy!',
        image: 'assets/img/50202.jpg',
        alt: "Picture of 'My Beard My Rules Novelty Socks'",
        link: 'https://www.etsy.com/ca/listing/592240251',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Bath & Body', 'Beard', 'Socks'],
    },
    {
        id: 50203,
        name: 'Organic Honest Amish Beard Balm Leave-in Conditioner',
        checker: 'Amish',
        description: 'This revolutionary balm softens coarse and rogue hair and keeps frizz at bay. It also helps with beard-ruff and itchiness, thanks to its selection of naturally soothing ingredients.',
        image: 'assets/img/50203.jpg',
        alt: "Picture of 'Organic Honest Amish Beard Balm Leave-in Conditioner'",
        link: 'https://www.amazon.ca/dp/B009NNFB0O1',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['adult', 'senior'],
        tags: ['Bath & Body', 'Beard'],
    },
    {
        id: 50301,
        name: 'Dior Sauvage',
        checker: 'Sauvage',
        description: 'Being at the top of men’s fragrance lists since it dropped, Dior’s Sauvage is inspired by nature and its raw materials, this scent is earthy and woody. Warm notes of bergamot, pepper, and amberwood take cues from a desert landscape—but can still be worn in the dead of winter, thanks to its refined, non-overpowering finish. This beast of a fragrance scores ten out of ten on projection, longevity, sillage, and scent.',
        image: 'assets/img/50301.jpg',
        alt: "Picture of 'Dior Sauvage'",
        link: 'https://www.amazon.ca/dp/B079TR2JHT',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hB', 'Fragrance'],
    },
    {
        id: 50302,
        name: 'Chanel Bleu de Chanel',
        checker: 'Bleu',
        description: 'Since its debut over a decade ago, its intoxicating blend of incense, ginger, and citrus has converted thousands of customers year after year. With a scent that has instant connotations of elegance and sophistication, it’s no wonder this cologne has consistently been called one of the best in the world and the king of the citrus cologne category. The scent itself is also very strong, meaning one spray of this can last the entire day, but you can still apply it generously if you choose.',
        image: 'assets/img/50302.jpg',
        alt: "Picture of 'Chanel Bleu de Chanel'",
        link: 'https://shop.shoppersdrugmart.ca/Luxury/CHANEL/Categories/MENS-FRAGRANCES/BLEU-DE-CHANEL/Eau-de-Toilette-Spray/p/BB_3145891074802://www.amazon.ca/dp/B079TR2JHT',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50303,
        name: 'Tom Ford Oud Wood',
        checker: 'Ford',
        description: 'Oud wood is one of the most precious and expensive ingredients for any perfumer, and this cologne by Tom Ford nails the woody scent. Combined with cardamom, sandalwood, and vetiver—with hints of tonka bean and amber—a few spritzes of this signature scent is like warming up to a nice cozy fire.\nDark, woody, creamy, and effortlessly sexy, Oud Wood is one of the best moody masculine scents to have in your collection. Yes, it’s great for date night, but you can also wear it to the office on chilly fall and winter days.',
        image: 'assets/img/50303.jpg',
        alt: "Picture of 'Tom Ford Oud Wood'",
        link: 'https://www.sephora.com/ca/en/product/oud-wood-P393167',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50304,
        name: 'Ralph Lauren Polo Black',
        checker: 'Lauren',
        description: 'Some classics never die, and Ralph Lauren’s Polo Black fragrance stands the test of time. A bold fusion of iced mango, lemon, and tangerine is combined with sandalwood, sage, and patchouli noir for a bittersweet end result. Bold and aromatic, it’s the ultimate scent to get noticed in.',
        image: 'assets/img/50304.jpg',
        alt: "Picture of 'Ralph Lauren Polo Black'",
        link: 'https://www.amazon.ca/dp/B000C1W3JS',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50305,
        name: 'Chanel No.5',
        checker: 'Chanel',
        description: 'Perhaps the most popular and high-end ladies perfume in the world, Chanel No.5 needs no introduction. This legendary perfume is a cult icon and offers a refined, elegant bouquet that’s softly inviting with underlying and steely power. Amble among the blooming meadows of jasmine, while the honeyed reticence of vanilla enlivens your senses. Wander the rolling hills, and inhale the majesty of the Pyrenees with the grounding base of vetiver and sandalwood.',
        image: 'assets/img/50305.jpg',
        alt: "Picture of 'Chanel No.5'",
        link: 'https://www.amazon.ca/dp/B000VOJ9BG',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hB', 'Fragrance'],
    },
    {
        id: 50306,
        name: 'Yves Saint Laurent Black Opium',
        checker: 'Opium',
        description: "We like to call this scent the date clincher. Wear it on a first (or second) date and that person will be calling ASAP to ask you on the next one. Why? The opening note is coffee — and I know that scent sure brings a smile to my face. Then it melts into a sophisticated vanilla and white flower layer. It's easy to liken it to the LBD tucked in your closet — it's sleek, iconic, and too intriguing to resist. However, sexiness is not this fragrance's only strong suit. The warm gourmand and spicy combo is well-balanced enough to make a memorable impression without being cloying.",
        image: 'assets/img/50306.jpg',
        alt: "Picture of 'Yves Saint Laurent Black Opium'",
        link: 'https://www.amazon.ca/dp/B00NBK5JHK    ',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50307,
        name: 'Maison Francis Kurkdjian Baccarat Rouge 540',
        checker: 'Kurkdjian',
        description: "Created as a collaboration between the perfumer and Baccarat to celebrate the crystal manufacturer’s 250th birthday, this popular scent is, frankly, a masterpiece. A combination of woody notes, amber, jasmine and other florals, it's sophisticated and never overpowering.\nThis perfume gives a decadent and unique scent that is sweet without being over the top. It’s not exactly floral, but more of a sweet and rich scent that is absolutely worth the splurge.",
        image: 'assets/img/50307.jpg',
        alt: "Picture of 'Maison Francis Kurkdjian Baccarat Rouge 540'",
        link: 'https://www.amazon.ca/dp/B074V34X4C',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50308,
        name: 'Chanel Coco Mademoiselle',
        checker: 'Mademoiselle',
        description: 'Acclaimed French perfumer Jacques Polge debuted this elixir in 2001, inspired by a spirited young Coco Chanel. Thus, the scent offers a bright, yet sensual scent sure suitable for the modern woman, frequently on the go. This perfume has beautiful structure, composition and lift. Falling squarely in the Ambery fragrance family, it’s one of Chanel’s best perfumes featuring hints of fresh, energizing orange with accords of jasmine and May Rose, topped with vetiver’s grassy accents.',
        image: 'assets/img/50308.jpg',
        alt: "Picture of 'Chanel Coco Mademoiselle'",
        link: 'https://shop.shoppersdrugmart.ca/Luxury/CHANEL/Categories/LADIES-FRAGRANCES/COCO-MADEMOISELLE/Eau-De-Parfum-Spray/p/BB_3145891165708',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50309,
        name: 'Gucci Bloom',
        checker: 'Bloom',
        description: 'There’s a reason many of the top perfumes for women ooze floral notes. Delighting our senses, the natural beauty of flowers has been a muse for artists, designers, and of course, perfumers, since time immemorial. But who does it best? Gucci Bloom wins the medal.\nDelicate, sophisticated, and beautifully feminine, this women’s perfume is a must-have for your scent repertoire.',
        image: 'assets/img/50309.jpg',
        alt: "Picture of 'Gucci Bloom'",
        link: 'https://www.amazon.ca/dp/B07BTJJVWL',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Fragrance'],
    },
    {
        id: 50401,
        name: 'Hanz De Fuko Gravity Paste',
        checker: 'Fuko',
        description: 'Gravity Paste is an award-winning hair paste that uses "Super-Grip" technology that activates once the product is worked in the palm of the hands and then applied to the hair. This styling innovation lets you sculpt your style and ensures it stays all day.\nGravity paste has a high-hold, low gloss shine and can be used for nearly any hairstyle. Plus, it uses natural, cruelty-free ingredients to promote hair health.',
        image: 'assets/img/50401.jpg',
        alt: "Picture of 'Hanz De Fuko Gravity Paste'",
        link: 'https://shopmasc.com/products/hanz-de-fuko-gravity-paste-60ml?variant=22050162241&currency=CAD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad=1&gclid=CjwKCAjwvdajBhBEEiwAeMh1UyIiGxmBeRlUt6m1_cGNcZVV20E9mHoyDMxPcG0rktVypc-w9lHLdhoCL1IQAvD_BwE',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50402,
        name: 'Blu Atlas Shampoo',
        checker: 'Atlas',
        description: 'Shampoo is the ultimate men’s hair essential. And if you had to choose just one product to elevate your hair care game, this is where you should start.\nThis shampoo strengthens hair, prevents oil buildup, and promotes a healthy scalp environment with nutrient-rich ingredients like aloe vera leaf juice, jojoba protein, saw palmetto, and vegan biotin.',
        image: 'assets/img/50402.jpg',
        alt: "Picture of 'Blu Atlas Shampoo'",
        link: 'https://bluatlas.com/products/shampoo',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50403,
        name: "Johnny's Chop Shop Wild Cat Hair Clay",
        checker: 'Chop',
        description: 'If we had to recommend a basic hair product for most men, then a decent clay would be our shout. Anyone who sticks to the time-honoured short-back-and-sides haircut will see the benefit, as it offers a hold that lasts throughout the day and treats you to some added thickness. Plus, you avoid the overly shiny look that can come with other pastes and gels, in favour of a more natural, matte aesthetic.',
        image: 'assets/img/50403.jpg',
        alt: "Picture of 'Johnny's Chop Shop Wild Cat Hair Clay'",
        link: 'https://www.amazon.ca/dp/B078SZBJVW',
        price: '36.13',
        gender: ['male', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50404,
        name: 'Drybar Baby Buttercup Travel Blow Dryer',
        checker: 'Drybar',
        description: 'Drybar’s top-of-the-line model delivers fast-drying power in a portable package. It scored perfectly in Lab evaluations for having easy-to-use controls, dried hair samples quickly, had strong airflow, and was easiest to maneuver and comfortable to hold.',
        image: 'assets/img/50404.jpg',
        alt: "Picture of 'Drybar Baby Buttercup Travel Blow Dryer'",
        link: 'https://www.nordstrom.com/s/baby-buttercup-travel-size-blow-dryer/4328845',
        price: '36.13',
        gender: ['male', 'female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hB', 'Hair'],
    },
    {
        id: 50405,
        name: 'CHI Lava Ceramic Hairstyling Iron',
        checker: 'Lava',
        description: 'This state-of-the-art speed hair straightener from CHI heats up to 96% of its maximum temperature in 60 seconds, and it scored best for fully straightening hair and keeping it frizz-free all day.',
        image: 'assets/img/50405.jpg',
        alt: "Picture of 'CHI Lava Ceramic Hairstyling Iron'",
        link: 'https://www.walmart.com/ip/CHI-Lava-Iron-1/211544504',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50406,
        name: 'Drybar The Double Shot Blow-Dryer Brush',
        checker: 'Drybar',
        description: "This inventive 2-in-1 Drybar hair styling tool combines a hair dryer and a hair brush in one wand that dries strands as you brush through. It's brush was comfortable to hold and glided smoothly through hair, testers reported, and it didn't overheat the hair or scalp.",
        image: 'assets/img/50406.jpg',
        alt: "Picture of 'Drybar The Double Shot Blow-Dryer Brush'",
        link: 'https://www.sephora.com/ca/en/product/drybar-the-double-shot-blow-dryer-brush-P453282',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50407,
        name: 'Revlon Hair Dryer And Volumizer',
        checker: 'Revlon',
        description: 'The Revlon Hair Dryer And Volumizer impart volume and shine to your hair in one step. It has a distinctive oval shape and smoothens the hair while amplifying the roots. This volumizer gives a nice curl and bounces at the ends. The tufted bristles and nylon pin ease hair detangling.',
        image: 'assets/img/50407.jpg',
        alt: "Picture of 'Revlon Hair Dryer And Volumizer'",
        link: 'https://www.amazon.ca/dp/B08S1CJ35X/',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50408,
        name: 'Messen Detangle Brush',
        checker: 'Messen',
        description: 'The Messen Detangle Brush is lightweight and made of resin and suitable for curly hairs. The non-slip matte surface handle is convenient to use, and the eight bristle rows prevent hair shedding and pain. It also massages the scalp and increases blood circulation.',
        image: 'assets/img/50408.jpg',
        alt: "Picture of 'Messen Detangle Brush'",
        link: 'https://www.amazon.ca/dp/B084VHH458/',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Hair'],
    },
    {
        id: 50501,
        name: 'Dior Mini Diorshow Mascara Duo Set',
        checker: 'Mascara',
        description: "This simple but impactful limited-edition set from Dior features the brand's culty Diorshow Mascara, plus a lash primer to maximize their volume and length.",
        image: 'assets/img/50501.jpg',
        alt: "Picture of 'Dior Mini Diorshow Mascara Duo Set'",
        link: 'https://www.sephora.com/ca/en/product/P500313',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Makeup'],
    },
    {
        id: 50502,
        name: 'Fenty Beauty Glossy Posse Volume 5.0 Lip Gloss Bomb Trio',
        checker: 'Bomb',
        description: "Fenty Beauty’s wide range of luminous lip products have become makeup lovers’ go-to glosses, beloved for their luminous and high-pigment payoff. That said, Rihanna’s Gloss Bombs are so popular it can be hard to choose just one shade—but that's where this gift set comes in.",
        image: 'assets/img/50502.jpg',
        alt: "Picture of 'Fenty Beauty Glossy Posse Volume 5.0 Lip Gloss Bomb Trio'",
        link: 'https://www.sephora.com/ca/en/product/P500313',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Makeup'],
    },
    {
        id: 50503,
        name: 'Merit Beauty Five Minute Morning',
        checker: 'Morning',
        description: "Hit the snooze button too long? Don't worry! This set will have you looking ready to go in five minutes or less. It includes seven pieces, from a Perfecting Complexion Stick to a blending brush, and it's really all you need for busy mornings.",
        image: 'assets/img/50503.jpg',
        alt: "Picture of 'Merit Beauty Five Minute Morning'",
        link: 'https://www.meritbeauty.com/products/five-minute-morning',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Makeup'],
    },
    {
        id: 50504,
        name: 'NARS The Glow Getter Face and Lip Set',
        checker: 'NARS',
        description: "This set includes everything you need to create a natural, glowy look. In the set, you'll find travel sizes of the brand's most beloved products, like the Afterglow Lip Balm, which has a peach-like pink tint with a hint of shimmer. You also get an Orgasm Blush and a Light Reflecting Setting Powder that sets your makeup and leaves your skin glowing.",
        image: 'assets/img/50504.jpg',
        alt: "Picture of 'NARS The Glow Getter Face and Lip Set'",
        link: 'https://www.sephora.com/ca/en/product/P482705',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Makeup'],
    },
    {
        id: 50601,
        name: 'Yogasleep Dohm Classic White Noise Machine',
        checker: 'White',
        description: 'One of the best dip powder nail kits around, Azure’s gift set includes everything you need to create attention-grabbing nails this holiday season, including nail tools and an array of polishes: Think demure pink and white for a French manicure, neturals like taupe and nude, and glittery gold and peach.',
        image: 'assets/img/50601.jpg',
        alt: "Yogasleep Dohm Classic White Noise Machine'",
        link: 'https://www.amazon.ca/dp/B0888JHBGX/',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Natural & Alternative Medicine', 'Audio'],
    },
    {
        id: 50701,
        name: 'Nail Dip Powder Starter Kit',
        checker: 'Powder',
        description: 'One of the best dip powder nail kits around, Azure’s gift set includes everything you need to create attention-grabbing nails this holiday season, including nail tools and an array of polishes: Think demure pink and white for a French manicure, neturals like taupe and nude, and glittery gold and peach.',
        image: 'assets/img/50701.jpg',
        alt: "Picture of 'Nail Dip Powder Starter Kit'",
        link: 'https://www.amazon.ca/dp/B0888JHBGX/',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Skin & Nail'],
    },
    {
        id: 50702,
        name: 'Tips and Toes Kit Gift Set',
        checker: 'Toes',
        description: 'This kit from Burts Bess contains everything you need to quench dry, thirsty cuticles and calluses, including their Honey & Grapeseed Oil Hand Cream, Coconut Foot Cream, Lemon Butter Cuticle Cream, Almond & Milk Hand Cream, Hand Salve, and Pomegranate Lip Balm.',
        image: 'assets/img/50702.jpg',
        alt: "Picture of 'Tips and Toes Kit Gift Set'",
        link: 'https://www.amazon.ca/dp/B004EDYQX6/',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Skin & Nail'],
    },
    {
        id: 50703,
        name: 'JODSONE Nail Set',
        checker: 'Nail',
        description: 'There is a plethora of fun, party-ready shades available (32 colors, to be more exact). It also comes with 1 bottle of base coat, 1 bottle of no wipe top coat, a matte top coat, a professional nail lamp, and some nail tools. It even have a Super Fast Nail Lamp to cure quickly!\nThis nail set has all the colours needed, from vibrant reds, moody purples, and attention-grabbing pinks to any colour to match any outfit.',
        image: 'assets/img/50703.jpg',
        alt: "Picture of 'Nail Set'",
        link: 'https://www.amazon.ca/dp/B097BSKN9P/',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Skin & Nail'],
    },
    {
        id: 50801,
        name: 'Any Hatch Smart Sleep Assistant',
        checker: 'Hatch',
        description: 'Usher in an era of deep sleep every night with one of the Hatch smart sleep assistants. Their devices might just look like a really nice alarm clock, but it actually has a built-in reading light with many color settings, a sunrise alarm feature for peaceful wake-ups, and other amazing features. Groggy mornings will become a problem of the past with this gadget on your nightstand.',
        image: 'assets/img/50801.jpg',
        alt: "Picture of 'Hatch Smart Sleep Assistant'",
        link: 'https://www.hatch.co',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Sleep', 'technology', 'hB', 'HomeTec'],
    },
    {
        id: 50802,
        name: 'Bearaby Cotton Napper',
        checker: 'Napper',
        description: 'A dose of stress relief is a no-brainer for the recently relocated. And, for some, a weighted blanket can simulate the coziness and comfort of a warm hug from a loved one, or at least encourage rest and sleep. (Some studies suggest weighted blankets can help reduce insomnia.)',
        image: 'assets/img/50802.jpg',
        alt: "Picture of 'Bearaby Cotton Napper'",
        link: 'https://bearaby.com/products/the-napper',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Sleep'],
    },
    {
        id: 50803,
        name: 'Constellation Projector',
        checker: 'Constellation',
        description: "Our ancestors slept under the stars for thousands of years before they started holing up in houses. Could that be the key to a good night's sleep? Try it out with this projector, which casts a pretty array of constellations onto the ceiling in a glow just bright enough to soothe but not to keep you awake.",
        image: 'assets/img/50803.jpg',
        alt: "Picture of 'Constellation Projector'",
        link: 'https://www.amazon.ca/dp/B07L8R5PK6',
        price: '36.13',
        gender: ['baby, child, teenager'],
        age: ['all'],
        tags: ['Sleep', 'hG', 'Home', 'technology', 'HomeTec'],
    },
    {
        id: 50804,
        name: "The World's Softest Blanket",
        checker: 'Blanket',
        description: "Those clouds you're feeling wrapped around you aren't the ones in dreamland, they're coming from the world's softest blanket. The sherpa blanket is the coziest thing you'll ever cocoon yourself win and is available in 21 delightful colors.",
        image: 'assets/img/50704.jpg',
        alt: "Picture of 'The World's Softest Blanket'",
        link: 'https://www.amazon.ca/dp/B00XLV72H4',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Sleep', 'Home'],
    },
    {
        id: 60101,
        name: 'Cooluli Mini Fridge',
        checker: 'Cooluli',
        description: "Whether they use this mini fridge at home for beauty loot (masks, face rollers, gua sha tools) or for on-demand drinks at work, it’s a cute conversation piece. If hot pink isn't right for your bestie, it comes in other colors and a few patterns.",
        image: 'assets/img/60101.jpg',
        alt: "Picture of 'Cooluli Mini Fridge'",
        link: 'https://www.amazon.ca/dp/B01G7IL5ZM/',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['hG', 'Home'],
    },
    {
        id: 60102,
        name: 'Agate Coaster',
        checker: 'Agate',
        description: 'Available in six colors, these agate coasters make a gorgeous accent for a coffee table. They’re sold individually, so you can create a mix-and-match set.',
        image: 'assets/img/60102.jpg',
        alt: "Picture of 'Agate Coaster'",
        link: 'https://www.anthropologie.com/shop/gilded-agate-coaster',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'Beer', 'Cocktail', 'Wine'],
    },
    {
        id: 60103,
        name: 'Cable Management Solution',
        checker: 'Solution',
        description: "When you're working at your desk, you want to be able to focus solely on the task at hand. There's no time to be wrestling with tangled cords, which is why the person you are gifting need this cable management system. You also get a power strip and some reusable cable ties with your purchase.",
        image: 'assets/img/60103.jpg',
        alt: "Picture of 'Cable Management Solution'",
        link: 'https://ergonofis.com/products/the-cable-management-solution',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'HomeTec'],
    },
    {
        id: 60104,
        name: 'Umbra Mira Decorative Wall Mirror',
        checker: 'Umbra',
        description: 'Mirrors may not be the first thing that comes to mind when you think about gifts, but it’s my personal mission to change that. They’re basically jewelry for your walls, and jewelry is always a great gift, right? This round mirror is on trend yet simple enough to work with classic decor schemes.',
        image: 'assets/img/60104.jpg',
        alt: "Picture of 'Umbra Mira Decorative Wall Mirror'",
        link: 'https://www.amazon.ca/dp/B0851G174Z',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['hG', 'Home'],
    },
    {
        id: 60105,
        name: 'Play Table',
        checker: 'Table',
        description: "You know what they say — start 'em young! This space-saving designed play table is sturdy and stable so the kids can eat, write and play on the table. It’s suitable for different scenes of daily life.",
        image: 'assets/img/60105.jpg',
        alt: "Picture of 'Play Table'",
        link: 'https://www.amazon.ca/dp/B0B1ZVPMK2',
        price: '36.13',
        gender: ['all'],
        age: ['child'],
        tags: ['hG', 'Home'],
    },
    {
        id: 60106,
        name: 'Ansel Glass Table Lamp',
        checker: 'Ansel',
        description: "Admit it: You want to be the cool relative that gets your niece a lamp she'll actually be amped about using. This Urban Outfitters design will earn you those honors.\nInspired by Italian Murano glass, this table lamp brings trend and vintage allure to your space.",
        image: 'assets/img/60106.jpg',
        alt: "Picture of 'Ansel Glass Table Lamp'",
        link: 'https://www.urbanoutfitters.com/shop/ansel-glass-table-lamp2',
        price: '36.13',
        gender: ['female', 'non-binary/third gender'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Home'],
    },
    {
        id: 60107,
        name: 'Vitruvi Move Essential Oil Diffuser',
        checker: 'Vitruvi',
        description: "Fans of this chic, Canada-based cult diffuser brand will be happy to know there's now a cordless option. That means subtle, essential oil-based fragrance in any room of your home that'll last for up to 18 hours.",
        image: 'assets/img/60107.jpg',
        alt: "Picture of 'Vitruvi Move Essential Oil Diffuser'",
        link: 'https://www.nordstrom.com/s/5948542',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'HomeTec', 'Natural & Alternative Medicine'],
    },
    {
        id: 60108,
        name: 'OYOY Stoneware Inka Kana Planters',
        checker: 'Stoneware',
        description: "Come spring, it'll be time for repotting, and the plant parent in your life will be way ahead of the game with this handsome stoneware planter at the ready. It comes in two sunset colors and is bound to bring a little bit of desert-colored charm to a living room or bedroom.",
        image: 'assets/img/60108.jpg',
        alt: "Picture of 'OYOY Stoneware Inka Kana Planters'",
        link: 'https://food52.com/shop/products/8438',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Garden', 'Home', 'Plant'],
    },
    {
        id: 60109,
        name: 'Any Minted Direct from Artists Vases',
        checker: 'Vases',
        description: 'Minted just launched their Direct from Artists marketplace, which is a beautifully curated assortment of handmade ceramics, textiles, paintings, sculptures, and more from makers all across the globe. Like this stunning french blue vase, for example.',
        image: 'assets/img/60109.jpg',
        alt: "Picture of 'Minted Direct from Artists Vase'",
        link: 'https://www.minted.com/accent-pieces?filters=%257B%2522selectedFilters%2522%253A%255B%257B%2522product_type%2522%253A%255B%2522planters%2522%252C%2522vases%2522%255D%257D%255D%257D',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'Garden', 'pet', 'hG', 'Plant'],
    },
    {
        id: 60110,
        name: 'Umbra Trigg Small Hanging Planters',
        checker: 'Trigg',
        description: 'Help your friends and family join the hordes of other plant parents around the world with this on-trend set of two mini hanging planters. Their small size makes them perfect for succulents and other little blooms.',
        image: 'assets/img/60110.jpg',
        alt: "Picture of 'Umbra Trigg Small Hanging Planters'",
        link: 'https://www.amazon.ca/dp/B01ARNPOT6',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'Garden', 'Plant'],
    },
    {
        id: 60111,
        name: 'Ultimate Handyman Tool Set',
        checker: 'Prostormer',
        description: "Something's gonna break but with this tool kit, you'll have everything you need to fix it. No job's too big and no job's too small for the ultimate handyman toolset and its 210 piece construction. Each tool is easy to grip and has several size variations to tackle any job.",
        image: 'assets/img/60111.jpg',
        alt: "Picture of 'Ultimate Handyman Tool Set'",
        link: 'https://www.amazon.ca/dp/B07JYZVPKP',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Home'],
    },
    {
        id: 60112,
        name: 'Personalized Family Doormat',
        checker: 'Housewarming ',
        description: "This personalized sturdy coir mat comes in two sizes and boasts your family's name in a very readable script font right in the center.",
        image: 'assets/img/60112.jpg',
        alt: "Picture of 'Personalized Family Doormat'",
        link: 'https://www.etsy.com/listing/716916446',
        price: '36.13',
        gender: ['all'],
        age: ['adult', 'senior'],
        tags: ['Home', 'Partner'],
    },
    {
        id: 60113,
        name: 'Sierra Smart Wireless Essential Oil Diffuser',
        checker: 'Diffuser',
        description: "Turn your home into a spa-like scented wonderland with an essential oil diffuser. This one doubles as a humidifier, adding moisture to the air to make it easier to breathe and makes it less likely you'll get sick. The app-enabled device also has color controls to help you set a soothing light mood.",
        image: 'assets/img/60113.jpg',
        alt: "Picture of 'Sierra Smart Wireless Essential Oil Diffuser'",
        link: 'https://www.amazon.com/dp/B07BF3MFH8',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'HomeTec', 'Natural & Alternative Medicine'],
    },
    {
        id: 60114,
        name: 'Aromatherapy Alarm Clock',
        checker: 'Aromatherapy',
        description: 'What could be better than being roused from your slumber by an amazing scent? It doubles as a regular diffuser and white noise machine, too.',
        image: 'assets/img/60114.jpg',
        alt: "Picture of 'Aromatherapy Alarm Clock'",
        link: 'https://www.amazon.com/dp/B083F4X2Q4',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['Home', 'HomeTec', 'Natural & Alternative Medicine', 'Sleep'],
    },
    {
        id: 60201,
        name: 'Lazy Daze Hammock',
        checker: 'Lazy',
        description: "Enjoy your brand new backyard by taking a nap in it with the Lazy Dazy hammock. This baby's a double-wide so you and a partner can take a nap together and sink into its comfy net.",
        image: 'assets/img/60201.jpg',
        alt: "Picture of 'Lazy Daze Hammock'",
        link: 'https://www.amazon.ca/dp/B01D1BR2DM',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['Garden'],
    },
    {
        id: 90201,
        name: 'Cute Cat Night Light',
        checker: 'Cute',
        description: "With a little kitty like this looking over you, you'll have a meow-vellous night's sleep. The small silicone cat gives off a soft glow that doesn't disrupt sleep and instead helps you wind down at bedtime. It's so cute that kids and adults alike can't resist its slight smile.",
        image: 'assets/img/90201.jpg',
        alt: "Picture of 'Cute Cat Night Light'",
        link: 'https://www.amazon.ca/dp/B01DXOYCK8',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Cat', 'pet'],
    },
    {
        id: 101601,
        name: 'Self-Cleaning Bottle',
        checker: 'Bottle',
        description: 'Yep, you read that right. This bottle cleans itself and the water inside at the touch of a button thanks to digital purification from a UV-C LED light.',
        image: 'assets/img/101601.jpg',
        alt: "Picture of 'Self-Cleaning Smart Bottle'",
        link: 'https://www.amazon.ca/dp/B092RFD93F',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['sports', 'technology', 'Gym', 'Exercising', 'Cycling', 'Running'],
    },
    {
        id: 101602,
        name: 'Smart Water Bottle',
        checker: 'Bottle',
        description: 'This smart water bottle that automatically tracks your exact level of hydration, making it one of the best smart water bottles on the market. With the easy-to-use WaterH app, you can easily monitor your hydration levels and receive personalized hydration goals based on your body weight and activity level',
        image: 'assets/img/101602.jpg',
        alt: "Picture of 'Smart Water Bottle'",
        link: 'https://www.amazon.ca/dp/B0BRXYJ1NG/',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: [
            'sports',
            'technology',
            'hB',
            'Gym',
            'Exercising',
            'Cycling',
            'Running',
        ],
    },
    {
        id: 110101,
        name: 'Marshall Stanmore II Wireless Bluetooth Speaker',
        checker: 'Marshall',
        description: "Buying for someone who’d rather listen to music than play their own? This retro-inspired speaker could be right up their alley. Sure, it’s a splurge, but it's a great buy for real music lovers. It’s compatible with Alexa and modeled after the brand’s iconic amps.",
        image: 'assets/img/110101.jpg',
        alt: "Picture of 'Marshall Stanmore II Wireless Bluetooth Speaker'",
        link: 'https://www.amazon.ca/dp/B07HPS9XJR/',
        price: '36.13',
        gender: ['all'],
        age: ['child', 'teen', 'adult', 'senior'],
        tags: ['technology', 'Audio', 'music', 'Listener'],
    },
    {
        id: 130101,
        name: 'Ekrist Portable Charger',
        checker: 'Ekrist',
        description: 'This portable charger has ultra-high capacity, universal compatibility, two USB ports and 24 months guarantee. Best cost benefit of the market!',
        image: 'assets/img/130101.jpg',
        alt: "Picture of 'Ekrist Portable Charger'",
        link: 'https://www.amazon.ca/dp/B07XQ94ZL9',
        price: '36.13',
        gender: ['all'],
        age: ['teen', 'adult', 'senior'],
        tags: ['travel', 'Business', 'Vacation', 'technology', 'Accessories'],
    },
    {
        id: 130102,
        name: 'Mavogel Sleep Mask',
        checker: 'Mavogel',
        description: "Mavogel’s soft jersey cotton sleep mask is a cozy option that effectively blocks out all of the light because of it's adjustable nose wire and tapered wings that blocks out any light from the sides.",
        image: 'assets/img/130102.jpg',
        alt: "Picture of 'Mavogel Sleep Mask'",
        link: 'https://www.amazon.ca/dp/B07Q4RY4BW',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['Sleepwear', 'travel', 'Business', 'Vacation', 'Sleep'],
    },
    {
        id: 130103,
        name: 'Slip Pure Silk Sleep Mask',
        checker: 'Silk',
        description: "Give the gift of a great night's sleep with this cult-favorite sleep mask. The pure silk is key to helping hair and skin retain moisture throughout the night.",
        image: 'assets/img/130103.jpg',
        alt: "Picture of 'Slip Pure Silk Sleep Maskk'",
        link: 'https://www.nordstrom.com/s/slip-pure-silk-sleep-mask/4186792',
        price: '36.13',
        gender: ['all'],
        age: ['all'],
        tags: ['cA', 'Sleepwear', 'travel', 'Business', 'Vacation', 'Sleep'],
    },
];


/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gifts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gifts */ "./src/app/gifts.ts");
/* harmony import */ var _answers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../answers.service */ "./src/app/answers.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");









function ResultsComponent_div_7_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_7_label_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.toggleTags($event.target, _r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", subCategory_r12.bg, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", subCategory_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r12.name, " ");
} }
function ResultsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsComponent_div_7_label_1_Template, 5, 5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.subBook);
} }
function ResultsComponent_div_11_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 38, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_11_label_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.toggleTags($event.target, _r18.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", subCategory_r17.bg, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", subCategory_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r17.name, " ");
} }
function ResultsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsComponent_div_11_label_1_Template, 5, 5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.subCA);
} }
function ResultsComponent_div_15_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_15_label_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.toggleTags($event.target, _r23.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", subCategory_r22.bg, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", subCategory_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r22.name, " ");
} }
function ResultsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsComponent_div_15_label_1_Template, 5, 5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.subEDS);
} }
function ResultsComponent_div_19_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 40, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_19_label_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleTags($event.target, _r28.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", subCategory_r27.bg, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", subCategory_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r27.name, " ");
} }
function ResultsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsComponent_div_19_label_1_Template, 5, 5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.subHB);
} }
function ResultsComponent_div_23_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_23_label_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.toggleTags($event.target, _r33.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-color:#", subCategory_r32.bg, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", subCategory_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r32.name, " ");
} }
function ResultsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultsComponent_div_23_label_1_Template, 5, 5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.subHG);
} }
function ResultsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_32_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const item_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.removeFromList(item_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r36.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r36.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.name);
} }
function ResultsComponent_fa_icon_37_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_fa_icon_37_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.search);
} }
function ResultsComponent_fa_icon_43_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_fa_icon_43_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r6.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.gift);
} }
function ResultsComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Check price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_div_47_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const gift_r43 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.addToList(gift_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add to Spotlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gift_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", gift_r43.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", gift_r43.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gift_r43.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](gift_r43.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", gift_r43.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const My3rdPartLib = {
    doWithCallback: function (callback) {
        this.callback = callback;
        this.callback();
    },
};
// Para casos como o de ficar aparecendo uns mangá nada a ver no meio de livros.
// Os presentes tops msm tem as tag da categoria mae neles.
// Desta forma aparecerá mais em casos nos quais nenhuma subcategoria (filtro) foi selecionada.
// Quando alguma subcategoria é clicada, cancelar a categoria.
// Desta forma, não fica aparecendo uns livros nada a ver se a pessoa clicar em mangás, por exemplo.
// (Pois assim o livro e manga teriam igualmente uma categoria (read/manga)).
// Os top ainda assim aparecerão quando forem clicadas as suas sub-categorias.
class ResultsComponent {
    constructor(answersService) {
        this.answersService = answersService;
        this.allTags = [
            'Book, Comic Books & Manga',
            'Clothing & Accessories',
            'Eat, Drink & Smoke',
            'Friends, Partner & Family',
            'Health & Beauty',
            'Home & Garden',
            'Geeky & Pop Culture',
            'Music',
            'Plant & Pets Supplies',
            'Sports',
            'Technology',
            'Toys, Puzzles & Boardgames',
            'Travel',
            'Videogame',
        ];
        this.newTags = [];
        this.gift = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGift"];
        this.search = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        this.list = [];
        this.subBook = [
            { name: 'Art', bg: 'a20025' },
            { name: 'Biography', bg: 'a20025' },
            { name: 'Business', bg: 'a20025' },
            { name: 'Classic', bg: 'a20025' },
            { name: 'Comics', bg: 'a20025' },
            { name: 'Economics', bg: 'a20025' },
            { name: 'Fantasy', bg: 'a20025' },
            { name: 'Fiction', bg: 'a20025' },
            { name: 'Hobbies', bg: 'a20025' },
            { name: 'LGBTQIA+', bg: 'a20025' },
            { name: 'History', bg: 'a20025' },
            { name: 'Horror', bg: 'a20025' },
            { name: 'Humor', bg: 'a20025' },
            { name: 'Manga', bg: 'a20025' },
            { name: 'Mistery', bg: 'a20025' },
            { name: 'Philosophy', bg: 'a20025' },
            { name: 'Poetry', bg: 'a20025' },
            { name: 'Politics', bg: 'a20025' },
            { name: 'Religion', bg: 'a20025' },
            { name: 'Romance', bg: 'a20025' },
            { name: 'Science', bg: 'a20025' },
            { name: 'Science Fiction', bg: 'a20025' },
            { name: 'Self-Improvement', bg: 'a20025' },
            { name: 'Sports', bg: 'a20025' },
        ];
        this.subCA = [
            { name: 'Activewear & Sportswear', bg: 'a20025' },
            { name: 'Blazers & Suits', bg: 'a20025' },
            { name: 'Cardigans & Sweaters', bg: 'a20025' },
            { name: 'Coats & Jackets', bg: 'a20025' },
            { name: 'Footwear', bg: 'a20025' },
            /** { name: 'Gloves', bg: 'a20025' { name: 'Hats', bg: 'a20025' }, { name: 'Jewelry', bg: 'a20025' }, { name: 'Pants', bg: 'a20025' }, { name: 'Shirts', bg: 'a20025' }, { name: 'Shorts', bg: 'a20025' },*/
            { name: 'Sleepwear', bg: 'a20025' },
            { name: 'Socks', bg: 'a20025' },
            { name: 'Sunglasses', bg: 'a20025' },
            /** { name: 'Swimwear', bg: 'a20025' }, { name: 'Top', bg: 'a20025' },*/
            /** { name: 'Underwear', bg: 'a20025' },*/
            { name: 'Wallet', bg: 'a20025' },
            { name: 'Watch', bg: 'a20025' },
        ];
        this.subEDS = [
            { name: 'Barbecue', bg: 'a20025' },
            { name: 'Beer', bg: 'a20025' },
            { name: 'Cocktail', bg: 'a20025' },
            { name: 'Coffee', bg: 'a20025' },
            { name: 'Cigars', bg: 'a20025' },
            { name: 'Food', bg: 'a20025' },
            { name: 'Tea', bg: 'a20025' },
            { name: 'Weed', bg: 'a20025' },
            { name: 'Wine', bg: 'a20025' },
        ];
        this.subFPF = [
            { name: 'Child', bg: 'a20025' },
            { name: 'Dad', bg: 'a20025' },
            { name: 'Friend', bg: 'a20025' },
            { name: 'Mom', bg: 'a20025' },
            { name: 'Others', bg: 'a20025' },
            { name: 'Partner', bg: 'a20025' },
            { name: 'Sibling', bg: 'a20025' },
        ];
        this.subHB = [
            { name: 'Bath & Body', bg: 'a20025' },
            { name: 'Beard', bg: 'a20025' },
            { name: 'Fragrance', bg: 'a20025' },
            { name: 'Hair', bg: 'a20025' },
            { name: 'Makeup', bg: 'a20025' },
            { name: 'Natural & Alternative Medicine', bg: 'a20025' },
            { name: 'Skin & Nail', bg: 'a20025' },
            { name: 'Sleep', bg: 'a20025' },
        ];
        this.subHG = [
            { name: 'Home', bg: 'a20025' },
            { name: 'Garden', bg: 'a20025' },
        ];
        this.subGPC = [
            { name: 'Aliens', bg: 'a20025' },
            { name: 'Cosplay', bg: 'a20025' },
            { name: 'Dragons', bg: 'a20025' },
            { name: 'DC Comics', bg: 'a20025' },
            { name: 'Disney', bg: 'a20025' },
            { name: 'Dragon Ball Z', bg: 'a20025' },
            { name: 'Harry Potter', bg: 'a20025' },
            { name: 'Marvel', bg: 'a20025' },
            { name: 'Naruto', bg: 'a20025' },
            { name: 'One Piece', bg: 'a20025' },
            { name: 'Pokemon', bg: 'a20025' },
            { name: 'Rick and Morty', bg: 'a20025' },
            { name: 'Spongebob Squarepants', bg: 'a20025' },
            { name: 'Star Wars', bg: 'a20025' },
            { name: 'The Lord of The Rings', bg: 'a20025' },
            { name: 'The Office', bg: 'a20025' },
        ];
        this.subMusic = [
            { name: 'Musician', bg: 'a20025' },
            { name: 'Listener', bg: 'a20025' },
        ];
        this.subPet = [
            { name: 'Bird', bg: 'a20025' },
            { name: 'Cat', bg: 'a20025' },
            { name: 'Dog', bg: 'a20025' },
            { name: 'Fish', bg: 'a20025' },
            { name: 'Plant', bg: 'a20025' },
            { name: 'Reptile', bg: 'a20025' },
        ];
        this.subSports = [
            { name: 'American Football', bg: 'a20025' },
            { name: 'Baseball', bg: 'a20025' },
            { name: 'Basketball', bg: 'a20025' },
            { name: 'Boxing, Martial Arts & MMA', bg: 'a20025' },
            { name: 'Cricket', bg: 'a20025' },
            { name: 'Curling', bg: 'a20025' },
            { name: 'Cycling', bg: 'a20025' },
            { name: 'Fishing', bg: 'a20025' },
            { name: 'Golf', bg: 'a20025' },
            { name: 'Gym', bg: 'a20025' },
            { name: 'Hunting', bg: 'a20025' },
            { name: 'Ice Hockey', bg: 'a20025' },
            { name: 'Lacrosse', bg: 'a20025' },
            { name: 'Mountain Sports', bg: 'a20025' },
            { name: 'Rugby', bg: 'a20025' },
            { name: 'Running', bg: 'a20025' },
            { name: 'Soccer', bg: 'a20025' },
            { name: 'Tennis', bg: 'a20025' },
            { name: 'Voleyball', bg: 'a20025' },
            { name: 'Water Sports', bg: 'a20025' },
            { name: 'Winter Sports', bg: 'a20025' },
            { name: 'Yoga', bg: 'a20025' },
        ];
        this.subTechnology = [
            { name: 'Accessories', bg: 'a20025' },
            { name: 'Audio', bg: 'a20025' },
            { name: 'Computer', bg: 'a20025' },
            { name: 'Cooking', bg: 'a20025' },
            { name: 'Exercising', bg: 'a20025' },
            { name: 'HomeTec', bg: 'a20025' },
            { name: 'Gaming', bg: 'a20025' },
            { name: 'Video', bg: 'a20025' },
            { name: 'Wearable', bg: 'a20025' },
        ];
        this.subTPB = [
            { name: 'Boardgames', bg: 'a20025' },
            { name: 'Collectibles', bg: 'a20025' },
            { name: 'Magic: The Gathering', bg: 'a20025' },
            { name: 'Lego', bg: 'a20025' },
            { name: 'Pokemon Trading Card', bg: 'a20025' },
            { name: 'Puzzles', bg: 'a20025' },
            { name: 'RPG', bg: 'a20025' },
            { name: 'Toys', bg: 'a20025' },
            { name: 'Yu-Gi-Oh! Trading Cards', bg: 'a20025' },
        ];
        this.subTravel = [
            { name: 'Business', bg: 'a20025' },
            { name: 'Vacation', bg: 'a20025' },
        ];
        this.subVideogame = [
            { name: 'Classic & Rarities', bg: 'a20025' },
            { name: 'Computer', bg: 'a20025' },
            { name: 'Nintendo', bg: 'a20025' },
            { name: 'PlayStation', bg: 'a20025' },
            { name: 'Xbox', bg: 'a20025' },
        ];
    }
    ngOnInit() {
        if (window.innerWidth < 1000)
            this.handset = true;
        else
            this.handset = false;
        this.answers = this.answersService.getAnswers();
        this.tags = Object.keys(this.answers[0])
            .filter((k) => this.answers[0][k])
            .splice(2);
        My3rdPartLib.doWithCallback((result) => this.chooseGifts(this.gifts));
        var $range = $('.js-range-slider'), instance, min = 10, max = 500;
        $range.ionRangeSlider({
            skin: 'flat',
            type: 'double',
            prefix: 'C$',
            max_postfix: '+',
            min: min,
            max: max,
            from: this.answers[1],
            to: this.answers[2],
            onStart: updateInputs,
            onChange: updateInputs,
        });
        instance = $range.data('ionRangeSlider');
        function updateInputs(data, from, to) {
            from = from;
            if (data.to != max) {
                to = to;
            }
            else {
                to = to + '+';
            }
            _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceFrom = data.from;
            _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceTo = data.to;
        }
    }
    onResize(event) {
        if (window.innerWidth < 1000)
            this.handset = true;
        else
            this.handset = false;
    }
    onPopState(event) {
        window.location.reload();
    }
    addToList(gift) {
        if (!this.list.includes(gift)) {
            this.list.push(gift);
            document.getElementById('alrt').innerHTML =
                gift.name + ' sucessfully added to Spotlight!';
            setTimeout(function () {
                document.getElementById('alrt').innerHTML = '';
            }, 5000);
        }
        else {
            let modal = document.getElementById('error-box');
            modal.style.display = 'block';
        }
    }
    chooseGifts(result) {
        this.gifts = _gifts__WEBPACK_IMPORTED_MODULE_1__["allGifts"].filter((element) => element.price >= _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceFrom &&
            (_answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceTo >= this.answers[3]
                ? element.price >= _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceFrom
                : element.price <= _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"].priceTo) &&
            (element.age.includes('all') ||
                element.age.includes(this.answers[0].age)) &&
            (element.gender.includes('all') ||
                element.gender.includes(this.answers[0].gender)) &&
            element.tags.some((r) => this.tags.includes(r)));
        this.shuffle(this.gifts);
        this.organizeGifts(this.gifts);
    }
    closeModal() {
        let modal = document.getElementById('error-box');
        modal.style.display = 'none';
    }
    openDiv(div) {
        if (this.isShow == div) {
            if (this.isShow == 'book') {
                for (let i = 0; i < this.subBook.length; i++) {
                    if (this.subBook[i].bg == '5A0015') {
                        this.bookBg = '#5A0015';
                        this.bookSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.bookBg = '#ff416c';
                        this.bookSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'cA') {
                for (let i = 0; i < this.subCA.length; i++) {
                    if (this.subCA[i].bg == '5A0015') {
                        this.cABg = '#5A0015';
                        this.cASelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.cABg = '#ff416c';
                        this.cASelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'eDS') {
                for (let i = 0; i < this.subEDS.length; i++) {
                    if (this.subEDS[i].bg == '5A0015') {
                        this.eDSBg = '#5A0015';
                        this.eDSSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.eDSBg = '#ff416c';
                        this.eDSSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'fPF') {
                for (let i = 0; i < this.subFPF.length; i++) {
                    if (this.subFPF[i].bg == '5A0015') {
                        this.fPFBg = '#5A0015';
                        this.fPFSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.fPFBg = '#ff416c';
                        this.fPFSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'hB') {
                for (let i = 0; i < this.subHB.length; i++) {
                    if (this.subHB[i].bg == '5A0015') {
                        this.hBBg = '#5A0015';
                        this.hBSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.hBBg = '#ff416c';
                        this.hBSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'hG') {
                for (let i = 0; i < this.subHG.length; i++) {
                    if (this.subHG[i].bg == '5A0015') {
                        this.hGBg = '#5A0015';
                        this.hGSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.hGBg = '#ff416c';
                        this.hGSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'gPC') {
                for (let i = 0; i < this.subGPC.length; i++) {
                    if (this.subGPC[i].bg == '5A0015') {
                        this.gPCBg = '#5A0015';
                        this.gPCSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.gPCBg = '#ff416c';
                        this.gPCSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'music') {
                for (let i = 0; i < this.subMusic.length; i++) {
                    if (this.subMusic[i].bg == '5A0015') {
                        this.musicBg = '#5A0015';
                        this.musicSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.musicBg = '#ff416c';
                        this.musicSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'pet') {
                for (let i = 0; i < this.subPet.length; i++) {
                    if (this.subPet[i].bg == '5A0015') {
                        this.petBg = '#5A0015';
                        this.petSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.petBg = '#ff416c';
                        this.petSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'sports') {
                for (let i = 0; i < this.subSports.length; i++) {
                    if (this.subSports[i].bg == '5A0015') {
                        this.sportsBg = '#5A0015';
                        this.sportsSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.sportsBg = '#ff416c';
                        this.sportsSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'technology') {
                for (let i = 0; i < this.subTechnology.length; i++) {
                    if (this.subTechnology[i].bg == '5A0015') {
                        this.technologyBg = '#5A0015';
                        this.technologySelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.technologyBg = '#ff416c';
                        this.technologySelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'tPB') {
                for (let i = 0; i < this.subTPB.length; i++) {
                    if (this.subTPB[i].bg == '5A0015') {
                        this.tPBBg = '#5A0015';
                        this.tPBSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.tPBBg = '#ff416c';
                        this.tPBSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'travel') {
                for (let i = 0; i < this.subTravel.length; i++) {
                    if (this.subTravel[i].bg == '5A0015') {
                        this.travelBg = '#5A0015';
                        this.travelSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.travelBg = '#ff416c';
                        this.travelSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
            if (this.isShow == 'videogame') {
                for (let i = 0; i < this.subVideogame.length; i++) {
                    if (this.subVideogame[i].bg == '5A0015') {
                        this.videogameBg = '#5A0015';
                        this.videogameSelected = '#ff416c';
                        this.isShow = null;
                        return;
                    }
                    else {
                        this.videogameBg = '#ff416c';
                        this.videogameSelected = '#ff416c';
                        this.isShow = null;
                    }
                }
            }
        }
        else {
            this.isShow = div;
            this.bookSelected = '#ff416c';
            this.cASelected = '#ff416c';
            this.eDSSelected = '#ff416c';
            this.fPFSelected = '#ff416c';
            this.hBSelected = '#ff416c';
            this.hGSelected = '#ff416c';
            this.gPCSelected = '#ff416c';
            this.musicSelected = '#ff416c';
            this.petSelected = '#ff416c';
            this.sportsSelected = '#ff416c';
            this.technologySelected = '#ff416c';
            this.tPBSelected = '#ff416c';
            this.travelSelected = '#ff416c';
            this.videogameSelected = '#ff416c';
            if (this.isShow == 'book') {
                this.bookSelected = '#a20025';
                for (let i = 0; i < this.subBook.length; i++) {
                    if (this.subBook[i].bg == '5A0015') {
                        this.bookBg = '#5A0015';
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.bookBg = '#a20025';
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'cA') {
                this.cASelected = '#a20025';
                for (let i = 0; i < this.subCA.length; i++) {
                    if (this.subCA[i].bg == '5A0015') {
                        this.cABg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.cABg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'eDS') {
                this.eDSSelected = '#a20025';
                for (let i = 0; i < this.subEDS.length; i++) {
                    if (this.subEDS[i].bg == '5A0015') {
                        this.eDSBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.eDSBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'fPF') {
                this.fPFSelected = '#a20025';
                for (let i = 0; i < this.subFPF.length; i++) {
                    if (this.subFPF[i].bg == '5A0015') {
                        this.fPFBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.fPFBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'hB') {
                this.hBSelected = '#a20025';
                for (let i = 0; i < this.subHB.length; i++) {
                    if (this.subHB[i].bg == '5A0015') {
                        this.hBBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.hBBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'hG') {
                this.hGSelected = '#a20025';
                for (let i = 0; i < this.subHG.length; i++) {
                    if (this.subHG[i].bg == '5A0015') {
                        this.hGBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.hGBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'gPC') {
                this.gPCSelected = '#a20025';
                for (let i = 0; i < this.subGPC.length; i++) {
                    if (this.subGPC[i].bg == '5A0015') {
                        this.gPCBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.gPCBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'music') {
                this.musicSelected = '#a20025';
                for (let i = 0; i < this.subMusic.length; i++) {
                    if (this.subMusic[i].bg == '5A0015') {
                        this.musicBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.musicBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'pet') {
                this.petSelected = '#a20025';
                for (let i = 0; i < this.subPet.length; i++) {
                    if (this.subPet[i].bg == '5A0015') {
                        this.petBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.petBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'sports') {
                this.sportsSelected = '#a20025';
                for (let i = 0; i < this.subSports.length; i++) {
                    if (this.subSports[i].bg == '5A0015') {
                        this.sportsBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.sportsBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'technology') {
                this.technologySelected = '#a20025';
                for (let i = 0; i < this.subTechnology.length; i++) {
                    if (this.subTechnology[i].bg == '5A0015') {
                        this.technologyBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.technologyBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'tPB') {
                this.tPBSelected = '#a20025';
                for (let i = 0; i < this.subTPB.length; i++) {
                    if (this.subTPB[i].bg == '5A0015') {
                        this.tPBBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.tPBBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'travel') {
                this.travelSelected = '#a20025';
                for (let i = 0; i < this.subTravel.length; i++) {
                    if (this.subTravel[i].bg == '5A0015') {
                        this.travelBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        if (this.videogameBg == '#a20025') {
                            this.videogameBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.travelBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                if (this.videogameBg == '#a20025') {
                    this.videogameBg = '#ff416c';
                }
                return;
            }
            if (this.isShow == 'videogame') {
                this.videogameSelected = '#a20025';
                for (let i = 0; i < this.subVideogame.length; i++) {
                    if (this.subVideogame[i].bg == '5A0015') {
                        this.videogameBg = '#5A0015';
                        if (this.bookBg == '#a20025') {
                            this.bookBg = '#ff416c';
                        }
                        if (this.cABg == '#a20025') {
                            this.cABg = '#ff416c';
                        }
                        if (this.eDSBg == '#a20025') {
                            this.eDSBg = '#ff416c';
                        }
                        if (this.fPFBg == '#a20025') {
                            this.fPFBg = '#ff416c';
                        }
                        if (this.hBBg == '#a20025') {
                            this.hBBg = '#ff416c';
                        }
                        if (this.hGBg == '#a20025') {
                            this.hGBg = '#ff416c';
                        }
                        if (this.gPCBg == '#a20025') {
                            this.gPCBg = '#ff416c';
                        }
                        if (this.musicBg == '#a20025') {
                            this.musicBg = '#ff416c';
                        }
                        if (this.petBg == '#a20025') {
                            this.petBg = '#ff416c';
                        }
                        if (this.sportsBg == '#a20025') {
                            this.sportsBg = '#ff416c';
                        }
                        if (this.technologyBg == '#a20025') {
                            this.technologyBg = '#ff416c';
                        }
                        if (this.tPBBg == '#a20025') {
                            this.tPBBg = '#ff416c';
                        }
                        if (this.travelBg == '#a20025') {
                            this.travelBg = '#ff416c';
                        }
                        return;
                    }
                }
                this.videogameBg = '#a20025';
                if (this.bookBg == '#a20025') {
                    this.bookBg = '#ff416c';
                }
                if (this.cABg == '#a20025') {
                    this.cABg = '#ff416c';
                }
                if (this.eDSBg == '#a20025') {
                    this.eDSBg = '#ff416c';
                }
                if (this.fPFBg == '#a20025') {
                    this.fPFBg = '#ff416c';
                }
                if (this.hBBg == '#a20025') {
                    this.hBBg = '#ff416c';
                }
                if (this.hGBg == '#a20025') {
                    this.hGBg = '#ff416c';
                }
                if (this.gPCBg == '#a20025') {
                    this.gPCBg = '#ff416c';
                }
                if (this.musicBg == '#a20025') {
                    this.musicBg = '#ff416c';
                }
                if (this.petBg == '#a20025') {
                    this.petBg = '#ff416c';
                }
                if (this.sportsBg == '#a20025') {
                    this.sportsBg = '#ff416c';
                }
                if (this.technologyBg == '#a20025') {
                    this.technologyBg = '#ff416c';
                }
                if (this.tPBBg == '#a20025') {
                    this.tPBBg = '#ff416c';
                }
                if (this.travelBg == '#a20025') {
                    this.travelBg = '#ff416c';
                }
                return;
            }
        }
    }
    organizeGifts(giftsArray) {
        var organizedByTags = [];
        for (let i = 0; i < giftsArray.length; i++) {
            //compare tags array and gift.tags array to see the number of tags on the gift that were selected by the user
            const res = this.tags.reduce((a, b) => {
                const l = giftsArray[i].tags.filter((e) => e === b).length;
                if (l)
                    a[b] = l;
                return a;
            }, {});
            //add the number of tags selected by the user that exists in the gift.
            giftsArray[i].tagsOccurrence = Object.keys(res).length;
            //add the present in the correct position of organizedByTags Array.
            if (organizedByTags.length == 0) {
                organizedByTags.push(giftsArray[i]);
            }
            else {
                for (let j = 0; j < organizedByTags.length; j++) {
                    if (giftsArray[i].tagsOccurrence >= organizedByTags[j].tagsOccurrence) {
                        organizedByTags.splice(j, 0, giftsArray[i]);
                        break;
                    }
                    if (j + 1 == organizedByTags.length) {
                        organizedByTags.push(giftsArray[i]);
                        break;
                    }
                }
            }
        }
        this.gifts = organizedByTags;
    }
    removeFromList(gift) {
        var index = this.list.indexOf(gift);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        return this.list;
    }
    shuffle(giftsArray) {
        for (let i = giftsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [giftsArray[i], giftsArray[j]] = [giftsArray[j], giftsArray[i]];
        }
        return giftsArray;
    }
    toggleTags(e, category) {
        if (category == 'book') {
            for (let i = 0; i < this.subBook.length; i++) {
                if (e.id == this.subBook[i].name) {
                    this.subBook[i].bg == 'a20025'
                        ? (this.subBook[i].bg = '5A0015')
                        : (this.subBook[i].bg = 'a20025');
                    if (this.subBook[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.bookBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subBook.find((x) => x.bg === '5A0015')) {
                            this.bookBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'cA') {
            for (let i = 0; i < this.subCA.length; i++) {
                if (e.id == this.subCA[i].name) {
                    this.subCA[i].bg == 'a20025'
                        ? (this.subCA[i].bg = '5A0015')
                        : (this.subCA[i].bg = 'a20025');
                    if (this.subCA[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.cABg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subCA.find((x) => x.bg === '5A0015')) {
                            this.cABg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'eDS') {
            for (let i = 0; i < this.subEDS.length; i++) {
                if (e.id == this.subEDS[i].name) {
                    this.subEDS[i].bg == 'a20025'
                        ? (this.subEDS[i].bg = '5A0015')
                        : (this.subEDS[i].bg = 'a20025');
                    if (this.subEDS[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.eDSBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subEDS.find((x) => x.bg === '5A0015')) {
                            this.eDSBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'fPF') {
            for (let i = 0; i < this.subFPF.length; i++) {
                if (e.id == this.subFPF[i].name) {
                    this.subFPF[i].bg == 'a20025'
                        ? (this.subFPF[i].bg = '5A0015')
                        : (this.subFPF[i].bg = 'a20025');
                    if (this.subFPF[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.fPFBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subFPF.find((x) => x.bg === '5A0015')) {
                            this.fPFBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'hB') {
            for (let i = 0; i < this.subHB.length; i++) {
                if (e.id == this.subHB[i].name) {
                    this.subHB[i].bg == 'a20025'
                        ? (this.subHB[i].bg = '5A0015')
                        : (this.subHB[i].bg = 'a20025');
                    if (this.subHB[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.hBBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subHB.find((x) => x.bg === '5A0015')) {
                            this.hBBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'hG') {
            for (let i = 0; i < this.subHG.length; i++) {
                if (e.id == this.subHG[i].name) {
                    this.subHG[i].bg == 'a20025'
                        ? (this.subHG[i].bg = '5A0015')
                        : (this.subHG[i].bg = 'a20025');
                    if (this.subHG[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.hGBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subHG.find((x) => x.bg === '5A0015')) {
                            this.hGBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'gPC') {
            for (let i = 0; i < this.subGPC.length; i++) {
                if (e.id == this.subGPC[i].name) {
                    this.subGPC[i].bg == 'a20025'
                        ? (this.subGPC[i].bg = '5A0015')
                        : (this.subGPC[i].bg = 'a20025');
                    if (this.subGPC[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.gPCBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subGPC.find((x) => x.bg === '5A0015')) {
                            this.gPCBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'music') {
            for (let i = 0; i < this.subMusic.length; i++) {
                if (e.id == this.subMusic[i].name) {
                    this.subMusic[i].bg == 'a20025'
                        ? (this.subMusic[i].bg = '5A0015')
                        : (this.subMusic[i].bg = 'a20025');
                    if (this.subMusic[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.musicBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subMusic.find((x) => x.bg === '5A0015')) {
                            this.musicBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'pet') {
            for (let i = 0; i < this.subPet.length; i++) {
                if (e.id == this.subPet[i].name) {
                    this.subPet[i].bg == 'a20025'
                        ? (this.subPet[i].bg = '5A0015')
                        : (this.subPet[i].bg = 'a20025');
                    if (this.subPet[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.petBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subPet.find((x) => x.bg === '5A0015')) {
                            this.petBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'sports') {
            for (let i = 0; i < this.subSports.length; i++) {
                if (e.id == this.subSports[i].name) {
                    this.subSports[i].bg == 'a20025'
                        ? (this.subSports[i].bg = '5A0015')
                        : (this.subSports[i].bg = 'a20025');
                    if (this.subSports[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.sportsBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subSports.find((x) => x.bg === '5A0015')) {
                            this.sportsBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'technology') {
            for (let i = 0; i < this.subTechnology.length; i++) {
                if (e.id == this.subTechnology[i].name) {
                    this.subTechnology[i].bg == 'a20025'
                        ? (this.subTechnology[i].bg = '5A0015')
                        : (this.subTechnology[i].bg = 'a20025');
                    if (this.subTechnology[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.technologyBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subTechnology.find((x) => x.bg === '5A0015')) {
                            this.technologyBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'tPB') {
            for (let i = 0; i < this.subTPB.length; i++) {
                if (e.id == this.subTPB[i].name) {
                    this.subTPB[i].bg == 'a20025'
                        ? (this.subTPB[i].bg = '5A0015')
                        : (this.subTPB[i].bg = 'a20025');
                    if (this.subTPB[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.tPBBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subTPB.find((x) => x.bg === '5A0015')) {
                            this.tPBBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'travel') {
            for (let i = 0; i < this.subTravel.length; i++) {
                if (e.id == this.subTravel[i].name) {
                    this.subTravel[i].bg == 'a20025'
                        ? (this.subTravel[i].bg = '5A0015')
                        : (this.subTravel[i].bg = 'a20025');
                    if (this.subTravel[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.travelBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subTravel.find((x) => x.bg === '5A0015')) {
                            this.travelBg = '#a20025';
                        }
                    }
                }
            }
        }
        if (category == 'videogame') {
            for (let i = 0; i < this.subVideogame.length; i++) {
                if (e.id == this.subVideogame[i].name) {
                    this.subVideogame[i].bg == 'a20025'
                        ? (this.subVideogame[i].bg = '5A0015')
                        : (this.subVideogame[i].bg = 'a20025');
                    if (this.subVideogame[i].bg == '5A0015') {
                        this.newTags.push(e.id);
                        this.videogameBg = '#5A0015';
                    }
                    else {
                        this.newTags = this.newTags.filter((tag) => tag !== e.id);
                        if (!this.subVideogame.find((x) => x.bg === '5A0015')) {
                            this.videogameBg = '#a20025';
                        }
                    }
                }
            }
        }
    }
    updateGifts() {
        this.tags = this.newTags;
        My3rdPartLib.doWithCallback((result) => this.chooseGifts(result));
        this.newTags = [];
        this.bookBg = '#ff416c';
        this.cABg = '#ff416c';
        this.eDSBg = '#ff416c';
        this.fPFBg = '#ff416c';
        this.hBBg = '#ff416c';
        this.hGBg = '#ff416c';
        this.gPCBg = '#ff416c';
        this.musicBg = '#ff416c';
        this.petBg = '#ff416c';
        this.sportsBg = '#ff416c';
        this.technologyBg = '#ff416c';
        this.tPBBg = '#ff416c';
        this.travelBg = '#ff416c';
        this.videogameBg = '#ff416c';
        for (let i = 0; i < this.subBook.length; i++) {
            this.subBook[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subCA.length; i++) {
            this.subCA[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subEDS.length; i++) {
            this.subEDS[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subFPF.length; i++) {
            this.subFPF[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subHB.length; i++) {
            this.subHB[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subHG.length; i++) {
            this.subHG[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subGPC.length; i++) {
            this.subGPC[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subMusic.length; i++) {
            this.subMusic[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subPet.length; i++) {
            this.subPet[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subSports.length; i++) {
            this.subSports[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subTechnology.length; i++) {
            this.subTechnology[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subTPB.length; i++) {
            this.subTPB[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subTravel.length; i++) {
            this.subTravel[i].bg = 'a20025';
        }
        for (let i = 0; i < this.subVideogame.length; i++) {
            this.subVideogame[i].bg = 'a20025';
        }
        this.openDiv(null);
    }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"])); };
ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], hostBindings: function ResultsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ResultsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("popstate", function ResultsComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 63, vars: 33, consts: [[1, "example-container"], [1, "sidebar", 3, "mode", "opened"], ["sidenavstart", ""], [1, "categories"], [1, "category"], [1, "tag", "hover", 3, "click"], ["class", "subcategories", 4, "ngIf"], [1, "slider"], [1, "range-slider", "results-slider"], ["type", "text", "value", "", 1, "js-range-slider"], [1, "update"], ["type", "button", 1, "sidenav-button", 3, "click"], ["position", "end", 1, "sidebar", "spotlight-bar", 3, "mode", "opened"], ["sidenavend", ""], ["class", "spotlight", 4, "ngFor", "ngForOf"], [1, "mobile-bottom"], [1, "search"], [1, "left"], ["class", "search-icon", 3, "icon", "click", 4, "ngIf"], [1, "right"], [1, "gift"], ["class", "gift-icon", 3, "icon", "click", 4, "ngIf"], ["class", "gift-presentation", 4, "ngFor", "ngForOf"], ["id", "error-box"], [1, "face2"], [1, "eye"], [1, "eye", "right"], [1, "mouth", "sad"], [1, "shadow"], [1, "message"], [1, "alert"], [1, "button-box", 3, "click"], [1, "alert-btn"], ["id", "alrt", 1, "add-notification"], [1, "subcategories"], ["class", "subcategories", 4, "ngFor", "ngForOf"], ["value", "book", "name", "book", 1, "hobby", "hover", 3, "id", "click"], ["input", ""], ["value", "cA", "name", "cA", 1, "hobby", "hover", 3, "id", "click"], ["value", "eDS", "name", "eDS", 1, "hobby", "hover", 3, "id", "click"], ["value", "hB", "name", "hB", 1, "hobby", "hover", 3, "id", "click"], ["value", "hG", "name", "hG", 1, "hobby", "hover", 3, "id", "click"], [1, "spotlight"], [1, "spotlight-top"], [3, "src", "alt"], [1, "name"], [1, "spotlight-bottom"], ["type", "button", 1, "sidenav-button"], [1, "search-icon", 3, "icon", "click"], [1, "gift-icon", 3, "icon", "click"], [1, "gift-presentation"], [1, "image", 3, "src", "alt"], [1, "gift-info"], [2, "white-space", "break-spaces"], [1, "gift-bottom"], [1, "left-half"], ["target", "_blank", 3, "href"], ["type", "button"], [1, "right-half"], ["type", "button", 3, "click"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_h5_click_5_listener() { return ctx.openDiv("book"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Book, Comics & Manga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResultsComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_h5_click_9_listener() { return ctx.openDiv("cA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Clothing & Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResultsComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_h5_click_13_listener() { return ctx.openDiv("eDS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Eat, Drink & Smoke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResultsComponent_div_15_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_h5_click_17_listener() { return ctx.openDiv("hB"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Health & Beauty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ResultsComponent_div_19_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_h5_click_21_listener() { return ctx.openDiv("hG"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home & Garden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ResultsComponent_div_23_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_button_click_28_listener() { return ctx.updateGifts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Update gifts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ResultsComponent_div_32_Template, 10, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ResultsComponent_fa_icon_37_Template, 1, 1, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Deep Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ResultsComponent_fa_icon_43_Template, 1, 1, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Spotlight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ResultsComponent_div_47_Template, 15, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Oops!... You Did It Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "You already added this gift to the spotlight. What's the point of having it twice, Am I Right? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultsComponent_Template_button_click_59_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Understand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.handset ? "over" : "side")("opened", ctx.handset ? "false" : "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bookSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bookBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == "book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.cASelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.cABg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == "cA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.eDSSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.eDSBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == "eDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.hBSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.hBBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == "hB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.hGSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.hGBg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == "hG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.handset ? "over" : "side")("opened", ctx.handset ? "false" : "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gifts);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Lato:400,700');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\r\n.add-notification[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  background-color: #ff416c;\r\n  color: white;\r\n  bottom: 0;\r\n  right: 200px;\r\n  text-align: right;\r\n}\r\n.alert-btn[_ngcontent-%COMP%] {\r\n  color: #e96075;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  font-family: \"Lato\";\r\n}\r\n.alert[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  letter-spacing: 5px;\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  margin-left: 13px;\r\n  color: whitesmoke;\r\n}\r\nbutton[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n#error-box[_ngcontent-%COMP%] {\r\n  font-family: \"Lato\";\r\n  position: fixed;\r\n  width: 290px;\r\n  height: 290px;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  top: 8%;\r\n  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);\r\n  border-radius: 20px;\r\n  box-shadow: 5px 5px 20px rgba(#CBCDD3, 10%);\r\n  display: none;\r\n}\r\n.face2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 22%;\r\n  height: 22%;\r\n  background: #FCFCFC;\r\n  border-radius: 50%;\r\n  border: 1px solid #777777;\r\n  top: 8%;\r\n  left: 37.5%;\r\n  z-index: 2;\r\n  -webkit-animation: roll 3s ease-in-out infinite;\r\n          animation: roll 3s ease-in-out infinite;\r\n}\r\n.eye[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 5px;\r\n  height: 5px;\r\n  background: #777777;\r\n  border-radius: 50%;\r\n  top: 40%;\r\n  left: 20%;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  left: 68%;\r\n}\r\n.mouth[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 43%;\r\n  left: 41%;\r\n  width: 7px;\r\n  height: 7px;\r\n  border-radius: 50%;\r\n}\r\n.sad[_ngcontent-%COMP%] {\r\n  top: 49%;\r\n  border: 2px solid;\r\n  border-color: #777777 transparent transparent #777777;\r\n  transform: rotate(45deg);\r\n}\r\n.shadow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 21%;\r\n  height: 3%;\r\n  opacity: .5;\r\n  background: #777777;\r\n  left: 40%;\r\n  top: 30%;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  -webkit-animation: move 3s ease-in-out infinite;\r\n          animation: move 3s ease-in-out infinite;\r\n\r\n}\r\n.move[_ngcontent-%COMP%] {\r\n  -webkit-animation: move 3s ease-in-out infinite;\r\n          animation: move 3s ease-in-out infinite;\r\n}\r\n.message[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  height: 40%;\r\n  top: 34%;\r\n  color: #3E3E3E;\r\n  margin-top: 10px;\r\n}\r\n.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.85rem;\r\n  margin-top: 0;\r\n}\r\n.button-box[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  background: #FCFCFC;\r\n  width: 50%;\r\n  height: 15%;\r\n  border-radius: 20px;\r\n  top: 80%;\r\n  left: 25%;\r\n  outline: 0;\r\n  border: none;\r\n  box-shadow: 2px 2px 10px rgba(#777777, .5);\r\n  transition: all .5s ease-in-out;\r\n}\r\n.button-box[_ngcontent-%COMP%]:hover {\r\n  background: darken(#FCFCFC, 5%);\r\n  transform: scale(1.05);\r\n  transition: all .3s ease-in-out;\r\n}\r\n@-webkit-keyframes roll {\r\n  0% {\r\n    transform: rotate(0deg);\r\n    left: 25%;\r\n  }\r\n\r\n  50% {\r\n    left: 57%;\r\n    transform: rotate(168deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(0deg);\r\n    left: 25%;\r\n  }\r\n}\r\n@keyframes roll {\r\n  0% {\r\n    transform: rotate(0deg);\r\n    left: 25%;\r\n  }\r\n\r\n  50% {\r\n    left: 57%;\r\n    transform: rotate(168deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(0deg);\r\n    left: 25%;\r\n  }\r\n}\r\n@-webkit-keyframes move {\r\n  0% {\r\n    left: 25%;\r\n  }\r\n\r\n  50% {\r\n    left: 57%;\r\n  }\r\n\r\n  100% {\r\n    left: 25%;\r\n  }\r\n}\r\n@keyframes move {\r\n  0% {\r\n    left: 25%;\r\n  }\r\n\r\n  50% {\r\n    left: 57%;\r\n  }\r\n\r\n  100% {\r\n    left: 25%;\r\n  }\r\n}\r\nfa-icon[_ngcontent-%COMP%] {\r\n  color: white;\r\n  position: fixed;\r\n  margin-top: 5px;\r\n  font-size: 3rem;\r\n}\r\nmat-sidenav[_ngcontent-%COMP%] {\r\n  width: 45%;\r\n  background-color: #ff416c;\r\n}\r\nmat-sidenav-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: #fafafa;\r\n  margin-right: 20px;\r\n  margin-left: 20px;\r\n}\r\nspan.textbox-from[_ngcontent-%COMP%], span.textbox-to[_ngcontent-%COMP%] {\r\n  padding: 1px 2px;\r\n  border: 2px #888 solid;\r\n  line-height: 20px;\r\n  height: 20px;\r\n  border-top: 0;\r\n  border-left: 0;\r\n  border-right: 0;\r\n  border-color: #fb8c34;\r\n  padding-bottom: 2px;\r\n  float: left;\r\n}\r\n.categories[_ngcontent-%COMP%] {\r\n  margin-left: -33px;\r\n}\r\n.category[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin-top: -10px;\r\n  margin-bottom: -10px;\r\n}\r\n.cost-from[_ngcontent-%COMP%], .cost-to[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  max-width: 220px;\r\n  min-width: 220px;\r\n}\r\n.cost-to[_ngcontent-%COMP%] {\r\n  margin-right: -90px;\r\n  float: right;\r\n}\r\n.close-end-nav[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 50%;\r\n  float: left;\r\n}\r\n.close-start-nav[_ngcontent-%COMP%] {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  float: right;\r\n}\r\n.extra-controls[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  float: right;\r\n}\r\n.gift[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n  margin-top: -60px;\r\n}\r\n.gift[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 65px;\r\n  font-weight: 400;\r\n}\r\n.gift-bottom[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-bottom: 0px;\r\n}\r\n.gift-icon[_ngcontent-%COMP%] {\r\n  right: 20%;\r\n}\r\n.gift-info[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 0px;\r\n}\r\n.gift-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  margin-bottom: 20px;\r\n  font-weight: 400;\r\n}\r\n.gift-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.9em;\r\n  margin-bottom: 50px;\r\n}\r\n.gift-presentation[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  border: solid 2px;\r\n  margin: auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n}\r\n.hobby[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none !important;\r\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 0.9em;\r\n  color: white;\r\n  margin-left: 1.5em;\r\n  margin-top: 0.4em;\r\n  padding: 5px 10px;\r\n  font-weight: 100;\r\n  border-radius: 7px;\r\n  text-align: left;\r\n}\r\n.hover[_ngcontent-%COMP%]:hover {\r\n  font-weight: 500;\r\n}\r\n.image[_ngcontent-%COMP%] {\r\n  max-width: 80%;\r\n  height: 200px;\r\n  margin: auto;\r\n  margin-bottom: 0px;\r\n  margin-top: 30px;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.left-half[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-bottom: 25px;\r\n}\r\n.left-half[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n}\r\n.gift-bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  height: 59.59px;\r\n  border-radius: 2rem;\r\n  padding: .5rem 1.125rem .4125rem;\r\n  border: .0625rem solid #a20025;\r\n  font-weight: 500;\r\n  color: white;\r\n  background-color: #a20025;\r\n}\r\n.gift-bottom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: #ff416c;\r\n  border: #ff416c;\r\n  text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);\r\n  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);\r\n  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);\r\n  transition: all 0.4s ease 0s;\r\n}\r\n.mat-drawer-container[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  color: #222;\r\n}\r\n.mat-drawer-inner-container[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n.mat-drawer.mat-drawer-side[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n}\r\n.open-end-nav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 45%;\r\n  right: 0px;\r\n  font-size: 3rem;\r\n}\r\n.open-start-nav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 45%;\r\n  left: 0px;\r\n  font-size: 3rem;\r\n}\r\n.range-slider[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.remove-sign[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  float: right;\r\n  color: #fff;\r\n}\r\n.right-half[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  text-align: right;\r\n  font-weight: 500;\r\n}\r\n.right-half[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n.mobile-bottom[_ngcontent-%COMP%] {\r\n  font-family: \"Roboto\",\r\n    \"Helvetica Neue\",\r\n    sans-serif;\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 100px;\r\n  background-color: #FF134A;\r\n  font-size: 1.5rem;\r\n  color: white;\r\n}\r\n.mobile-bottom[_ngcontent-%COMP%]:hover {\r\n  background-color: #a20025;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.search[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 50%;\r\n  height: 100%;\r\n  border-right: 4px solid #ff416c;\r\n}\r\n.search[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 65px;\r\n}\r\n.search-icon[_ngcontent-%COMP%] {\r\n  left: 20%;\r\n}\r\n.sidebar[_ngcontent-%COMP%] {\r\n  background-color: #ff416c;\r\n  position: fixed;\r\n  width: 200px;\r\n}\r\n.sidenav-button[_ngcontent-%COMP%] {\r\n  color: #a20025 !important;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  background: #FF9FB5;\r\n  padding: 8px;\r\n  border: 4px solid #a20025 !important;\r\n  display: inline-block;\r\n  transition: all 0.4s ease 0s;\r\n  margin: 10px;\r\n  margin-top: -5px;\r\n  width: 100px;\r\n  font-weight: bold;\r\n  font-size: 0.7rem;\r\n}\r\n.sidenav-button[_ngcontent-%COMP%]:hover {\r\n  color: #ffffff !important;\r\n  background: #a20025;\r\n  border-color: #FF6C8E !important;\r\n  transition: all 0.4s ease 0s;\r\n}\r\n.slider[_ngcontent-%COMP%] {\r\n  margin: 1em;\r\n  margin-bottom: 20px;\r\n  margin-top: 2em;\r\n}\r\n.spotlight[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 65%;\r\n  padding-top: 20px;\r\n  border-bottom: 2.5px dashed #a20025;\r\n}\r\n.spotlight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  width: 70px;\r\n  margin: 10px;\r\n  margin-top: 30px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n.spotlight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n.spotlight-bar[_ngcontent-%COMP%] {\r\n  margin-top: -20px;\r\n}\r\n.spotlight-bottom[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.spotlight-top[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.spotlight-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.4em;\r\n  margin-bottom: 15px;\r\n  margin-top: 0;\r\n}\r\n.spotlight-top[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  font-size: 0.8em;\r\n  margin-top: 40px;\r\n  display: inline-block;\r\n  margin-top: 0;\r\n}\r\n.subcategories[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n}\r\n.tag[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  font-weight: 100;\r\n  border-radius: 7px;\r\n  padding: 5px 10px;\r\n  display: table;\r\n  margin-bottom: 15px;\r\n  margin-top: 10px;\r\n}\r\n.update[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  margin-top: 35px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.update[_ngcontent-%COMP%]   .sidenav-button[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n  width: auto;\r\n}\r\n\r\n@media (min-width: 320px) {\r\n  .sidenav-button[_ngcontent-%COMP%] {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 17%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 18%\r\n  }\r\n}\r\n@media (min-width: 400px) {\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 18%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 19%\r\n  }\r\n\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n  }\r\n\r\n  .spotlight-top[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 40px\r\n  }\r\n\r\n  .spotlight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    width: 70px;\r\n    float: right;\r\n    margin: 10px;\r\n    margin-top: 40px;\r\n  }\r\n}\r\n@media (min-width: 460px) {\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 19%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 20%\r\n  }\r\n}\r\n\r\n@media (min-width: 550px) {\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5.0rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 4.2rem;\r\n  }\r\n\r\n  h3[_ngcontent-%COMP%] {\r\n    font-size: 3.6rem;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    font-size: 3.0rem;\r\n  }\r\n\r\n  h5[_ngcontent-%COMP%] {\r\n    font-size: 2.4rem;\r\n  }\r\n\r\n  h6[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 20%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 21%\r\n  }\r\n}\r\n@media (min-width: 650px) {\r\n  .gift-presentation[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n  }\r\n\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 21%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 21%\r\n  }\r\n}\r\n\r\n@media (min-width: 750px) {\r\n  .gift-presentation[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n  }\r\n\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 21.5%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 22%\r\n  }\r\n}\r\n@media (min-width: 850px) {\r\n  .gift-icon[_ngcontent-%COMP%] {\r\n    right: 22%;\r\n  }\r\n\r\n  .search-icon[_ngcontent-%COMP%] {\r\n    left: 23%\r\n  }\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n  .add-notification[_ngcontent-%COMP%] {\r\n    left: 20%;\r\n    right: 20%;\r\n  }\r\n\r\n  .mobile-bottom[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n  }\r\n\r\n  .spotlight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .add-notification[_ngcontent-%COMP%] {\r\n    left: 16.5%;\r\n    right: 16.5%;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%] {\r\n    width: 16.5%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FO0FBQ25FLG9GQUFvRjtBQUVwRjtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsT0FBTztFQUNQLHNFQUFzRTtFQUN0RSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsT0FBTztFQUNQLFdBQVc7RUFDWCxVQUFVO0VBQ1YsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLHFEQUFxRDtFQUNyRCx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLCtDQUF1QztVQUF2Qyx1Q0FBdUM7O0FBRXpDO0FBRUE7RUFDRSwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDO0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDBDQUEwQztFQUMxQywrQkFBK0I7QUFDakM7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0lBQ1QseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDtBQUNGO0FBZkE7RUFDRTtJQUNFLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0lBQ1QseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDtBQUNGO0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGO0FBWkE7RUFDRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFdBQVc7QUFDYjtBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtREFBbUQ7RUFDbkQsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiwrQ0FBK0M7RUFDL0MsMERBQTBEO0VBQzFELHVEQUF1RDtFQUN2RCw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7O2NBRVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkO0VBQ0Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtFQUNGO0FBQ0Y7QUFFQSw4REFBOEQ7QUFDOUQ7O0VBRUU7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0U7RUFDRjtBQUNGO0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0U7RUFDRjtBQUNGO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYWRkLW5vdGlmaWNhdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQxNmM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hbGVydC1idG4ge1xyXG4gIGNvbG9yOiAjZTk2MDc1O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5idXR0b24sXHJcbi5kb3Qge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2Vycm9yLWJveCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMjkwcHg7XHJcbiAgaGVpZ2h0OiAyOTBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbiAgdG9wOiA4JTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIGxlZnQsICNFRjhEOUMgNDAlLCAjRkZDMzlFIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IHJnYmEoI0NCQ0REMywgMTAlKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZmFjZTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjIlO1xyXG4gIGhlaWdodDogMjIlO1xyXG4gIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7XHJcbiAgdG9wOiA4JTtcclxuICBsZWZ0OiAzNy41JTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGFuaW1hdGlvbjogcm9sbCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmV5ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZDogIzc3Nzc3NztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgbGVmdDogMjAlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGxlZnQ6IDY4JTtcclxufVxyXG5cclxuLm1vdXRoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MyU7XHJcbiAgbGVmdDogNDElO1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc2FkIHtcclxuICB0b3A6IDQ5JTtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICM3Nzc3NzcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzc3Nzc3NztcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjElO1xyXG4gIGhlaWdodDogMyU7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgYmFja2dyb3VuZDogIzc3Nzc3NztcclxuICBsZWZ0OiA0MCU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYW5pbWF0aW9uOiBtb3ZlIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG5cclxufVxyXG5cclxuLm1vdmUge1xyXG4gIGFuaW1hdGlvbjogbW92ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuXHJcbi5tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIHRvcDogMzQlO1xyXG4gIGNvbG9yOiAjM0UzRTNFO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHAge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDE1JTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHRvcDogODAlO1xyXG4gIGxlZnQ6IDI1JTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgjNzc3Nzc3LCAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ1dHRvbi1ib3g6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGRhcmtlbigjRkNGQ0ZDLCA1JSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvbGwge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGxlZnQ6IDU3JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE2OGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlIHtcclxuICAwJSB7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgbGVmdDogNTclO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgfVxyXG59XHJcblxyXG5mYS1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogNDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQxNmM7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5zcGFuLnRleHRib3gtZnJvbSxcclxuc3Bhbi50ZXh0Ym94LXRvIHtcclxuICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZiOGMzNDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zM3B4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG5cclxuLmNvc3QtZnJvbSxcclxuLmNvc3QtdG8ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWF4LXdpZHRoOiAyMjBweDtcclxuICBtaW4td2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uY29zdC10byB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jbG9zZS1lbmQtbmF2IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2xvc2Utc3RhcnQtbmF2IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmV4dHJhLWNvbnRyb2xzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5naWZ0IGZhLWljb24ge1xyXG4gIG1hcmdpbi10b3A6IC02MHB4O1xyXG59XHJcblxyXG4uZ2lmdCAucmlnaHQgcCB7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZ2lmdC1ib3R0b20ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmdpZnQtaWNvbiB7XHJcbiAgcmlnaHQ6IDIwJTtcclxufVxyXG5cclxuLmdpZnQtaW5mbyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uZ2lmdC1pbmZvIGgzIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmdpZnQtaW5mbyBwIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5naWZ0LXByZXNlbnRhdGlvbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBib3JkZXI6IHNvbGlkIDJweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ob2JieSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmhvdmVyOmhvdmVyIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdC1oYWxmIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5sZWZ0LWhhbGYgYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmdpZnQtYm90dG9tIGJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgaGVpZ2h0OiA1OS41OXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgcGFkZGluZzogLjVyZW0gMS4xMjVyZW0gLjQxMjVyZW07XHJcbiAgYm9yZGVyOiAuMDYyNXJlbSBzb2xpZCAjYTIwMDI1O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhMjAwMjU7XHJcbn1cclxuXHJcbi5naWZ0LWJvdHRvbSBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQxNmM7XHJcbiAgYm9yZGVyOiAjZmY0MTZjO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCA0MHB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC41Nyk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDQwcHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjU3KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1zaWRlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5vcGVuLWVuZC1uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQ1JTtcclxuICByaWdodDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLm9wZW4tc3RhcnQtbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0NSU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLnJhbmdlLXNsaWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yZW1vdmUtc2lnbiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucmlnaHQtaGFsZiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmlnaHQtaGFsZiBidXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5tb2JpbGUtYm90dG9tIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIixcclxuICAgIFwiSGVsdmV0aWNhIE5ldWVcIixcclxuICAgIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMTM0QTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2JpbGUtYm90dG9tOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTIwMDI1O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI2ZmNDE2YztcclxufVxyXG5cclxuLnNlYXJjaCAucmlnaHQgcCB7XHJcbiAgbWFyZ2luLXRvcDogNjVweDtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICBsZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MTZjO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWJ1dHRvbiB7XHJcbiAgY29sb3I6ICNhMjAwMjUgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjRkY5RkI1O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjYTIwMDI1ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4uc2lkZW5hdi1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2EyMDAyNTtcclxuICBib3JkZXItY29sb3I6ICNGRjZDOEUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBtYXJnaW46IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuLnNwb3RsaWdodDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogNjUlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDIuNXB4IGRhc2hlZCAjYTIwMDI1O1xyXG59XHJcblxyXG4uc3BvdGxpZ2h0IGltZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNwb3RsaWdodCBwIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uc3BvdGxpZ2h0LWJhciB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5zcG90bGlnaHQtYm90dG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3BvdGxpZ2h0LXRvcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNwb3RsaWdodC10b3AgcCB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5zcG90bGlnaHQtdG9wIC5uYW1lIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5zdWJjYXRlZ29yaWVzIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udXBkYXRlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi51cGRhdGUgLnNpZGVuYXYtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gIC5zaWRlbmF2LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5naWZ0LWljb24ge1xyXG4gICAgcmlnaHQ6IDE3JTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBsZWZ0OiAxOCVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gIC5naWZ0LWljb24ge1xyXG4gICAgcmlnaHQ6IDE4JTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBsZWZ0OiAxOSVcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuc3BvdGxpZ2h0LXRvcCAubmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDQwcHhcclxuICB9XHJcblxyXG4gIC5zcG90bGlnaHQgaW1nIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDYwcHgpIHtcclxuICAuZ2lmdC1pY29uIHtcclxuICAgIHJpZ2h0OiAxOSU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgbGVmdDogMjAlXHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0IChhbHNvIHBvaW50IHdoZW4gZ3JpZCBiZWNvbWVzIGFjdGl2ZSkgKi9cclxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNS4wcmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiA0LjJyZW07XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDMuNnJlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMy4wcmVtO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5naWZ0LWljb24ge1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaWNvbiB7XHJcbiAgICBsZWZ0OiAyMSVcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2NTBweCkge1xyXG4gIC5naWZ0LXByZXNlbnRhdGlvbiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuXHJcbiAgLmdpZnQtaWNvbiB7XHJcbiAgICByaWdodDogMjElO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1pY29uIHtcclxuICAgIGxlZnQ6IDIxJVxyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2VyIHRoYW4gdGFibGV0ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NTBweCkge1xyXG4gIC5naWZ0LXByZXNlbnRhdGlvbiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gIH1cclxuXHJcbiAgLmdpZnQtaWNvbiB7XHJcbiAgICByaWdodDogMjEuNSU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgbGVmdDogMjIlXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAuZ2lmdC1pY29uIHtcclxuICAgIHJpZ2h0OiAyMiU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWljb24ge1xyXG4gICAgbGVmdDogMjMlXHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZXIgdGhhbiBkZXNrdG9wICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAuYWRkLW5vdGlmaWNhdGlvbiB7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICByaWdodDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1ib3R0b20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICAuc3BvdGxpZ2h0IGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmFkZC1ub3RpZmljYXRpb24ge1xyXG4gICAgbGVmdDogMTYuNSU7XHJcbiAgICByaWdodDogMTYuNSU7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAxNi41JTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-results',
                templateUrl: './results.component.html',
                styleUrls: ['./results.component.css'],
            }]
    }], function () { return [{ type: _answers_service__WEBPACK_IMPORTED_MODULE_2__["AnswersService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:popstate', ['$event']]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rodrigo\Documents\Projects\gift-finder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map