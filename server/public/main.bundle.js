webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loginform_loginform_component__ = __webpack_require__("./src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__eventpage_eventpage_component__ = __webpack_require__("./src/app/eventpage/eventpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layout_header_header_component__ = __webpack_require__("./src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layout_footer_footer_component__ = __webpack_require__("./src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_results_results_component__ = __webpack_require__("./src/app/search-results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__buypoints_buypoints_component__ = __webpack_require__("./src/app/buypoints/buypoints.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__createevent_createevent_component__ = __webpack_require__("./src/app/createevent/createevent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signupform_signupform_component__ = __webpack_require__("./src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dateFormatPipe__ = __webpack_require__("./src/app/dateFormatPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__provider_signupform_provider_signupform_component__ = __webpack_require__("./src/app/provider-signupform/provider-signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__terms_terms_component__ = __webpack_require__("./src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__agm_snazzy_info_window__ = __webpack_require__("./node_modules/@agm/snazzy-info-window/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { InMemoryDataService } from './services/in-memory-data.service';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__loginform_loginform_component__["a" /* LoginformComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__eventpage_eventpage_component__["a" /* EventpageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__search_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__buypoints_buypoints_component__["a" /* BuypointsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__createevent_createevent_component__["a" /* CreateeventComponent */],
                __WEBPACK_IMPORTED_MODULE_21__dateFormatPipe__["a" /* dateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_19__signupform_signupform_component__["a" /* SignupformComponent */],
                __WEBPACK_IMPORTED_MODULE_22__provider_signupform_provider_signupform_component__["a" /* ProviderSignupformComponent */],
                __WEBPACK_IMPORTED_MODULE_23_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_24__terms_terms_component__["a" /* TermsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_18_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_25__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM'
                }),
                __WEBPACK_IMPORTED_MODULE_26__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_20__services_location_service__["a" /* LocationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buypoints/buypoints.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n  background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n  background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n}\n\nh1 {\n  color: #fff;\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n  top:70%;\n}\n\n#header {\n  position: relative;\n  min-height: 170px;\n}\n\n#header-content {\n  color: #fff;\n  font-size: 2rem;\n  font-weight: bold;\n  position: absolute;\n  text-align: center;\n  bottom: 0;\n  left: 40%;\n}\n\ndiv.fixed {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 300px;\n}"

/***/ }),

/***/ "./src/app/buypoints/buypoints.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n<app-header></app-header>\n\n<div class=\"container\">\n<h1>Αγορά Πόντων</h1>\n\n<div class=\"card-deck\">\n  <div class=\"card text-white bg-danger mb-3\">\n    <div class=\"card-body\">\n      <div class=\"card-header\">Πακέτο των €10</div>\n      <h4 class=\"card-title\">Προσθήκη 10(+1) Πόντων Αγοράς</h4>\n      <p class=\"card-text\">Με αγορά του Πακέτου των €10 επωφελείστε επιβράβευση 1 επιπλέον Πόντου Αγοράς.</p>\n      <button type=\"button\" class=\"btn btn-secondary\" >Επιλογή Πακέτου</button>\n      <p class=\"card-text\">Σύνολο Αγοράς: 11 Πόντοι</p>\n    </div>\n  </div>\n  <div class=\"card text-white bg-success mb-3\">\n    <div class=\"card-body\">\n      <div class=\"card-header\">Πακέτο των €20</div>\n      <h4 class=\"card-title\">Προσθήκη 20(+3) Πόντων Αγοράς</h4>\n      <p class=\"card-text\">Με αγορά του Πακέτου των €20 επωφελείστε επιβράβευση 3 επιπλέον Πόντων Αγοράς.</p>\n      <button type=\"button\" class=\"btn btn-secondary\" >Επιλογή Πακέτου</button>\n      <p class=\"card-text\">Σύνολο Αγοράς: 23 Πόντοι</p>\n    </div>\n  </div>\n  <div class=\"card text-white bg-info mb-3\">\n    <div class=\"card-body\">\n      <div class=\"card-header\">Πακέτο των €30</div>\n      <h4 class=\"card-title\">Προσθήκη 30(+5) Πόντων Αγοράς</h4>\n      <p class=\"card-text\">Με αγορά του Πακέτου των €30 επωφελείστε επιβράβευση 5 επιπλέον Πόντων Αγοράς.</p>\n      <button type=\"button\" class=\"btn btn-secondary\" >Επιλογή Πακέτου</button>\n      <p class=\"card-text\">Σύνολο Αγοράς: 35 Πόντοι</p>\n    </div>\n  </div>\n</div>\n\n    <!--<div class=\"row\">      \n      <div class=\"card text-white bg-danger mb-3\" style=\"max-width: 20rem;top:30px;left:15%;text-align: center\">\n        \n        <div class=\"card-header\">Πακέτο των €10</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Προσθήκη 10(+1) Πόντων Αγοράς</h4>\n          <p class=\"card-text\">Με αγορά του Πακέτου των €10 επωφελείστε επιβράβευση 1 επιπλέον Πόντου Αγοράς.</p>\n          <div class=\"card-footer\">Σύνολο Αγοράς: 11 Πόντοι</div>\n        </div>  \n      </div>\n      \n      <div class=\"card text-white bg-success mb-3\" style=\"max-width: 20rem;top:30px;left:30%;text-align: center\">  \n        <div class=\"card-header\">Πακέτο των €20</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Προσθήκη 20(+3) Πόντων Αγοράς</h4>\n          <p class=\"card-text\">Με αγορά του Πακέτου των €20 επωφελείστε επιβράβευση 3 επιπλέον Πόντων Αγοράς.</p>\n          <div class=\"card-footer\">Σύνολο Αγοράς: 23 Πόντοι</div>\n        </div>  \n      </div>\n      \n      <div class=\"card text-white bg-info mb-3\" style=\"max-width: 20rem;top:30px;left:45%;text-align: center\">\n        <div class=\"card-header\">Πακέτο των €30</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Προσθήκη 30(+5) Πόντων Αγοράς</h4>\n          <p class=\"card-text\">Με αγορά του Πακέτου των €30 επωφελείστε επιβράβευση 5 επιπλέον Πόντων Αγοράς.</p>\n          <div class=\"card-footer\">Σύνολο Αγοράς: 35 Πόντοι</div>\n        </div>\n      </div>  \n    </div>-->\n    <!--\n    <br>\n  \n \n      <button type=\"button\" class=\"btn btn-danger\" style=\"position:absolute;left:10%\">Επιλογή Πακέτου</button>\n      <button type=\"button\" class=\"btn btn-success\" style=\"position:absolute;left:45%\">Επιλογή Πακέτου</button>\n      <button type=\"button\" class=\"btn btn-info\" style=\"position:absolute;left:80%\">Επιλογή Πακέτου</button>\n    -->\n  \n    <!--<div class=\"row\">-->\n    <div class=\"alert alert-dismissible alert-danger\" style=\"max-width:20rem;top:77%;z-index:9999;right:0%;position:fixed\">\n        <strong>Η Αγορά Πόντων είναι οριστική και δεν είναι δυνατή η επιστροφή χρημάτων.</strong>\n    </div>\n    \n    <br>\n\n    <div class=\"card-deck\">\n        <div class=\"alert alert-dismissible alert-warning\" style=\"max-width:20rem\">\n          <div class=\"card-body\">\n            <div class=\"card-header\">Πακέτο των €20</div>\n            <p class=\"card-text\">Πόντοι που πρέπει να ξοδευτούν για να επωφεληθείτε επιπλέον επιβράβευση 5 Πόντων:</p>\n            <div class=\"card-footer\">\"Πόντοι\"</div>\n          </div>\n        </div>\n        <div class=\"card text-white bg-warning mb-3\" style=\"max-width:30rem\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Ή Εισαγωγή Επιθυμητού Ποσού Αγοράς Πόντων</h4>\n            <p class=\"card-text\">Αναλογία Πόντων Αγοράς:Ευρώ -> 1:1.</p>\n            <div class=\"card-text\">\n                <div class=\"form-group\" style=\"max-width:30rem\">\n                    <div class=\"input-group mb-3\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">€</span>\n                      </div>\n                      <input class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" type=\"text\">\n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">.00</span>\n                        </div>\n                    </div>\n                  </div>\n            </div>\n            <p class=\"card-text\">\n            <button type=\"button\" class=\"btn btn-success\">Υποβολή</button>\n            <button type=\"button\" class=\"btn btn-danger\">Ακύρωση</button>\n          </p>\n          </div>\n        </div>\n      </div>\n    <!--<div class=\"row\">\n    <div class=\"alert alert-dismissible alert-warning\" style=\"max-width:18rem;max-height:30rem;left:40%\">\n      <h4 class=\"alert-heading\">Ή Εισαγωγή Επιθυμητού Ποσού Αγοράς Πόντων</h4>\n      <p class=\"mb-0\">Αναλογία Πόντων Αγοράς:Ευρώ -> 1:1.</p>\n    </div>\n    <!--</div> \n    \n    <!--<div class=\"row\">\n      <div class=\"card text-white bg-warning mb-3\" style=\"max-width: 20rem;right:20%\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Υπενθύμιση!</h4>\n          <p class=\"card-text\">Πόντοι που πρέπει να ξοδευτούν για να επωφεληθείτε επιπλέον επιβράβευση:</p>\n          <div class=\"card-footer\">\"ΠΟΝΤΟΙ\"</div>        \n        </div>\n      </div>\n    </div>\n  \n    </div>  \n      \n    <div class=\"row\">  \n      <button type=\"button\" class=\"btn btn-success\" style=\"position:absolute;left:45%\">Υποβολή</button>\n      <button type=\"button\" class=\"btn btn-danger\" style=\"position:absolute;left:53%\">Ακύρωση</button>\n    </div>-->\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/buypoints/buypoints.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuypointsComponent; });
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

var BuypointsComponent = /** @class */ (function () {
    function BuypointsComponent() {
    }
    BuypointsComponent.prototype.ngOnInit = function () {
    };
    BuypointsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buypoints',
            template: __webpack_require__("./src/app/buypoints/buypoints.component.html"),
            styles: [__webpack_require__("./src/app/buypoints/buypoints.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuypointsComponent);
    return BuypointsComponent;
}());



/***/ }),

/***/ "./src/app/createevent/createevent.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n  \nh1 {\n    color: #fff;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: bold;\n    top:70%;\n}\n  \n#header {\n    position: relative;\n    min-height: 170px;\n}\n  \n#header-content {\n    color: #fff;\n    font-size: 2rem;\n    font-weight: bold;\n    position: absolute;\n    text-align: center;\n    bottom: 0;\n    left: 40%;\n}"

/***/ }),

/***/ "./src/app/createevent/createevent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <app-header></app-header>\n  \n  <div class=\"container\">\n    <h1>Δημιουργία Δραστηριότητας</h1>\n    <form>\n      <fieldset>\n        <legend style=\"color:#fff\">Στοιχεία Δραστηριότητας</legend>\n        <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">(* Υποχρεωτικά Πεδία)</small>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8\">\n            <label for=\"exampleInputEmail1\" style=\"color:#fff\">Όνομα Δραστηριότητας*</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Εισαγωγή Ονόματος\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Το όνομα προβολής της δραστηριότητας στη λίστα.</small>\n          </div>\n        </div>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <label for=\"exampleSelect1\" style=\"color:#fff\">Επιλογή Κατηγορίας 1*</label>\n              <select class=\"form-control\" id=\"exampleSelect1\">\n                <option>Επιλέξτε Κατηγορία</option>\n                <option>Αθλητισμός</option>\n                <option>Θέατρο</option>\n                <option>Διασκέδαση</option>\n                <option>Εκπαίδευση</option>\n                <option>Χειροτεχνικά</option>\n                <option>Παιδότοπος</option>\n                <option>Μουσική</option>\n                <option>Καλλιτεχνικά</option>\n              </select>\n              <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Η επιλογή τουλάχιστον μίας κατηγορίας είναι υποχρεωτική.</small>\n            </div>  \n            <div class=\"col-lg-4\">\n              <label for=\"exampleSelect1\" style=\"color:#fff\">Επιλογή Κατηγορίας 2</label>\n              <select class=\"form-control\" id=\"exampleSelect1\">\n                <option>Επιλέξτε Κατηγορία</option>\n                <option>Αθλητισμός</option>\n                <option>Θέατρο</option>\n                <option>Διασκέδαση</option>\n                <option>Εκπαίδευση</option>\n                <option>Χειροτεχνικά</option>\n                <option>Παιδότοπος</option>\n                <option>Μουσική</option>\n                <option>Καλλιτεχνικά</option>\n              </select>\n            </div>\n            <div class=\"col-lg-4\">\n              <label for=\"exampleSelect1\" style=\"color:#fff\">Επιλογή Κατηγορίας 3</label>\n              <select class=\"form-control\" id=\"exampleSelect1\">\n                <option>Επιλέξτε Κατηγορία</option>\n                <option>Αθλητισμός</option>\n                <option>Θέατρο</option>\n                <option>Διασκέδαση</option>\n                <option>Εκπαίδευση</option>\n                <option>Χειροτεχνικά</option>\n                <option>Παιδότοπος</option>\n                <option>Μουσική</option>\n                <option>Καλλιτεχνικά</option>\n              </select>\n            </div>  \n          </div>  \n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8\">  \n            <label for=\"exampleInputEmail1\" style=\"color:#fff\">Τοποθεσία/Διεύθυνση Διεξαγωγής Δραστηριότητας*</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Εισαγωγή Τοποθεσίας\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Τοποθεσία/Διεύθυνση όπου θα λάβει μέρος η παρών δραστηριότητα.</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-4\">  \n            <label for=\"exampleInputEmail1\" style=\"color:#fff\">Επιλογή Κατηγορίας Ηλικίας*</label>\n            <select class=\"form-control\" id=\"exampleSelect1\">\n              <option>Επιλέξτε Κατηγορία</option>\n              <option>1-3 ετών</option>\n              <option>3-5 ετών</option>\n              <option>5-12 ετών</option>\n              <option>12-18 ετών</option>\n            </select>\n            <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Ομάδες ηλικιών που θα μπορούν να συμμετάσχουν στη δραστηριότητα.*</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-4\">  \n            <label for=\"exampleInputEmail1\" style=\"color:#fff\">Επιλογή Φύλο Παιδιών*</label>\n            <select class=\"form-control\" id=\"exampleSelect1\">\n              <option>Επιλέξτε Φύλο</option>\n              <option>Αγόρια</option>\n              <option>Κορίτσια</option>\n              <option>Και τα δύο φύλα</option>\n            </select>\n            <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Για ποιο φύλο παιδιών προορίζεται η δραστηριότητα.*</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-4\">  \n            <label for=\"exampleInputEmail1\" style=\"color:#fff\">Ορισμός Τιμής Πόντων ανα Εισιτήριο*</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Τιμή Εισιτηρίου\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Πόντοι που πρέπει να ξοδέψει ένας γονέας για αγορά εισιτηρίου.</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-4\">  \n            <label for=\"exampleInputEmail1\" style=\"color:#fff\">Ορισμός Αριθμού Διαθέσιμων Εισιτηρίων*</label>\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Αριθμός Εισιτηρίου\">\n            <small id=\"emailHelp\" class=\"form-text text-muted\"style=\"color:#fff\">Αριθμός εισιτηρίων που διατίθονται για τη δραστηριότητα.</small>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-8\">\n            <label for=\"exampleTextarea\" style=\"color:#fff\">Περιγραφή Δραστηριότητας</label>\n            <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-lg-4\">\n            <label for=\"exampleInputFile\" style=\"color:#fff\">Εικόνα/Φωτογραφία Δραστηριότητας*</label>\n            <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\" ng2FileSelect [uploader]=\"uploader\">\n            <small id=\"fileHelp\" class=\"form-text text-muted\">Μέγιστο μέγεθος αρχείου: -- ΜΒ</small>\n          </div>\n        </div>     \n      </fieldset>\n    </form>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <button type=\"button\" class=\"btn btn-success\">Δημιουργία και Δημοσιοποίηση Δραστηριότητας</button>\n    </div>  \n    <div class=\"col-lg-8\"> \n      <button type=\"button\" class=\"btn btn-danger\">Ακύρωση</button>  \n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/createevent/createevent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateeventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateeventComponent = /** @class */ (function () {
    function CreateeventComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: 'http://localhost:3001/upload' });
    }
    CreateeventComponent.prototype.ngOnInit = function () {
    };
    CreateeventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createevent',
            template: __webpack_require__("./src/app/createevent/createevent.component.html"),
            styles: [__webpack_require__("./src/app/createevent/createevent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateeventComponent);
    return CreateeventComponent;
}());



/***/ }),

/***/ "./src/app/dateFormatPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var dateFormatPipe = /** @class */ (function () {
    function dateFormatPipe() {
    }
    dateFormatPipe.prototype.transform = function (value) {
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]("en-US");
        value = datePipe.transform(value, 'dd/MM/yyyy');
        return value;
    };
    dateFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatPipe',
        })
    ], dateFormatPipe);
    return dateFormatPipe;
}());



/***/ }),

/***/ "./src/app/eventpage/eventpage.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto', sans-serif;\n}\n\n#title_font {\n    font-weight: bold;\n}\n\n.card_height {\n    height: 90%;\n}\n\n.buy_ticket_block {\n    height: 100%;\n    text-align: center;\n}\n\n.buy_ticket_block .price_quant {\n    color: #c01508;\n    /* text-align: center; */\n    font-weight: bold;\n    font-size: 200%;\n    /* margin-bottom: 0; */\n}\n\n#checkout {\n    color: #c01508;\n    font-weight: bold;\n    font-size: 150%;\n}\n\n.label_text {\n    text-align: left;\n}\n\n.info_text{\n    text-align: center;\n}\n\n.back_img {\n  position:relative;\n  height: 180vh;\n  background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n  background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/eventpage/eventpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back_img\">\n    <app-header></app-header>\n    <div class=\"container\" *ngIf=\"event\">\n        <div class=\"row mb-3\">\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"goBack()\">Πίσω στα αποτελέσματα!</button>\n        </div>\n        <div class=\"row\">\n            <!-- Event main info -->\n            <div class=\"col-12 col-lg-8\">\n                <div class=\"card border-light mb-3 card_height\">\n                        <div class=\"card-body\">\n                                <h3 class=\"card-title\" id=\"title_font\">{{event.title}}</h3>\n                                <span *ngFor=\"let ev of event.eventType\">\n                                    <span class=\"badge badge-info\">{{ev}}</span>\n                                </span>\n                        </div>\n                        <!-- <a href=\"\" data-toggle=\"modal\" data-target=\"#productModal\"> -->\n                        <img class=\"img-fluid img\" src=\"{{event.image}}\" alt=\"Card image\"/>\n                        <!-- </a> -->\n                    </div>\n                </div>\n\n            <!-- Buy ticket -->\n            <div class=\"col-12 col-lg-4 buy_ticket_block\">\n                <div class=\"card bg-light mb-3 card_height\">\n                    <div class=\"card-body\">\n                        <h3 class=\"card-title\">Αγορά Εισιτηρίου</h3>\n                        <hr class=\"my-4\">\n                        <span>\n                            <div class=\"label_text\">Τιμή : </div>\n                            <p class=\"price_quant\"> {{event.price | number}} </p>\n                        </span>\n                        <span>\n                            <div class=\"label_text\">Διαθέσιμα εισιτήρια: </div>\n                            <p class=\"price_quant\"> {{event.numberOfTickets | number}} </p>\n                        </span>\n\n                        <form *ngIf=\"event.numberOfTickets && user\">\n                            <div class=\"form-group\">\n                                <div class=\"label_text\">Ποσότητα :</div>\n                                <div class=\"input-group justify-content-center mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <button type=\"button\" class=\"btn btn-danger btn-number\" data-field=\"numberOfTickets\" (click)=\"minus()\">\n                                            <i class=\"fa fa-minus\"></i>\n                                        </button>\n                                    </div>\n                                    <input class=\"form-control-static text-center\"  id=\"numberOfTickets\" name=\"numberOfTickets\" value=\"{{numberOfTickets}}\">\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-success btn-number\" data-field=\"numberOfTickets\" (click)=\"plus()\">\n                                            <i class=\"fa fa-plus\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                            </div>\n                            <button type=\"button\" (click)=\"buy_tickets()\" class=\"btn btn-success btn-lg btn-block text-uppercase\">\n                                <i class=\"fa fa-shopping-cart\"></i> Αγορα\n                            </button>\n                        </form>\n                        <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"!user\">\n                          <strong>Κάντε <a routerLink= \"/login\"> ΣΥΝΔΕΣΗ </a> για αγορά εισιτηρίων!</strong>\n                        </div>\n                        <div class=\"alert alert-dismissible alert-danger\" *ngIf=\"!event.numberOfTickets\">\n                            <strong>Τα εισιτήρια εξαντλήθηκαν!</strong>\n                        </div>\n                        <div class=\"row justify-content-center\" *ngIf=\"show\">\n                          <div class=\"card border-info\">\n                              <div class=\"card-body\">\n                                <h5 class=\"card-title\">Επιβεβαίωση αγοράς</h5>\n                                <div class=\"card-text\" id=\"checkout\"> {{numberOfTickets}} εισιτήρια = {{total}} πόντοι</div>\n                              </div>\n                              <div class=\"card-footer justify-content-between\">\n                                  <button type=\"button\" (click)=\"checkout()\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"\" data-original-title=\"Tooltip on left\" class=\"btn btn-success btn-sm text-uppercase\">Ολοκληρωση</button>\n                                  <button type=\"button\" (click)=\"buy_close()\" class=\"btn btn-danger btn-sm text-uppercase\">Ακυρο</button>\n                              </div>\n                          </div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <div id=\"content\" #content>\n        <div class=\"row\">\n                <!-- Event Date -->\n                <div class=\"col-lg-3\">\n                    <div class=\"card border-light mb-3\">\n                        <div class=\"card-header bg-info text-white text-uppercase\"><i class=\"fa fa-calendar-check-o\"></i> Ημερομηνια</div>\n                        <div class=\"card-body\">\n                            <p class=\"card-text info_text\">{{event.startDate | date: 'shortDate'}} </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3\">\n                    <div class=\"card border-light mb-3\">\n                        <div class=\"card-header text-white bg-info text-uppercase\"><i class=\"fa fa-location-arrow\"></i> Τοποθεσια</div>\n                        <div class=\"card-body\">\n                            <p class=\"card-text info_text\">{{event.geo}}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3\">\n                        <div class=\"card border-light mb-3\">\n                            <div class=\"card-header text-white bg-info text-uppercase\"><i class=\"fa fa-child\"></i> Ηλικια</div>\n                            <div class=\"card-body\">\n                                <p class=\"card-text info_text\"> {{event.age}}</p>\n                            </div>\n                        </div>\n                    </div>\n                <div class=\"col-lg-3\">\n                        <div class=\"card border-light mb-3\">\n                            <div class=\"card-header text-white bg-info text-uppercase\"><i class=\"fa fa-venus-mars\"></i> Φυλο</div>\n                            <div class=\"card-body\">\n                                <p class=\"card-text info_text\">{{event.sex}}</p>\n                            </div>\n                        </div>\n                    </div>\n        </div>\n\n        <div class=\"row\">\n            <!-- Event Description -->\n            <div class=\"col-12\">\n                <div class=\"card border-light mb-3\">\n                    <div class=\"card-header bg-info text-white text-uppercase\"><i class=\"fa fa-align-justify\"></i> Περιγραφη</div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">{{ event.description }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/eventpage/eventpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventpageComponent = /** @class */ (function () {
    function EventpageComponent(route, auth, eventService, geo, locService) {
        var _this = this;
        this.route = route;
        this.auth = auth;
        this.eventService = eventService;
        this.geo = geo;
        this.locService = locService;
        this.numberOfTickets = 1;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.show = false;
    }
    EventpageComponent.prototype.ngOnInit = function () {
        this.getEvent();
    };
    EventpageComponent.prototype.getEvent = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.eventService.getEvent(id)
            .subscribe(function (event) {
            _this.event = event;
            _this.locService.getLοcation(_this.event.geo)
                .then(function (response) { return _this.event.geo = response.results[0].formatted_address; });
        });
    };
    EventpageComponent.prototype.goBack = function () {
        this.geo.back();
    };
    EventpageComponent.prototype.minus = function () {
        if (this.numberOfTickets === 1) {
            this.numberOfTickets = 1;
        }
        else {
            this.numberOfTickets = this.numberOfTickets - 1;
        }
    };
    EventpageComponent.prototype.plus = function () {
        if (this.numberOfTickets === this.event.numberOfTickets) {
            this.numberOfTickets = this.numberOfTickets;
        }
        else {
            this.numberOfTickets = this.numberOfTickets + 1;
        }
    };
    EventpageComponent.prototype.buy_tickets = function () {
        this.show = true;
        this.total = this.numberOfTickets * this.event.price;
    };
    EventpageComponent.prototype.checkout = function () {
        console.log('okey');
        this.download();
        this.event.numberOfTickets = this.event.numberOfTickets - this.numberOfTickets;
        if (this.event.numberOfTickets === 0) {
            this.numberOfTickets = 0;
        }
        else {
            this.numberOfTickets = 1;
        }
        // this.eventService.updateEvent(this.event).subscribe();
        this.show = false;
    };
    EventpageComponent.prototype.buy_close = function () {
        this.show = false;
        this.numberOfTickets = 1;
    };
    EventpageComponent.prototype.download = function () {
        var doc = new __WEBPACK_IMPORTED_MODULE_5_jspdf__();
        for (var i = 0; i < this.numberOfTickets; i++) {
            var specialElementHandlers = {
                '#editor': function (element, renderer) {
                    return true;
                }
            };
            var content = this.content.nativeElement;
            doc.fromHTML(content.innerHTML, 15, 15, {
                'width': 111,
                'elementHandlers': specialElementHandlers,
            });
            doc.addPage();
            // i = i + 1 ;
        }
        doc.deletePage(this.numberOfTickets + 1);
        // Save the PDF
        doc.save(this.event.title + '.pdf');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EventpageComponent.prototype, "content", void 0);
    EventpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eventpage',
            template: __webpack_require__("./src/app/eventpage/eventpage.component.html"),
            styles: [__webpack_require__("./src/app/eventpage/eventpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__services_location_service__["a" /* LocationService */]])
    ], EventpageComponent);
    return EventpageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: 'Roboto', sans-serif;\n}\n\n#search {\n    font-size: 20px;\n    color: rgb(0, 0, 0);\n    margin:auto;\n    display:block;\n    height: 30%;\n    width: 60%;\n}\n\n#quote {\n    padding-top: 10vh; \n}\n\n.title {\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    height: 120vh;\n}\n\nh1 {\n    color: #fff;\n    text-align: center;\n    font-size: 2rem;\n    font-weight: normal;\n}\n\n[class*='col-'] {\n    float: left;\n    padding-right: 20px;\n    padding-bottom: 20px;\n  }\n\n[class*='col-']:last-of-type {\n    padding-right: 0;\n  }\n\na {\n    text-decoration: none;\n  }\n\n*, *:after, *:before {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\nh3 {\n    text-align: center; \n    margin-bottom: 2%;\n    margin-top: 5%;\n    color: whitesmoke;\n  }\n\nh4 {\n    position: relative;\n    font-size: 100%;  \n  }\n\n.grid {\n    margin: 0;\n  }\n\n.col-1-4 {\n    width: 25%;\n  }\n\n.module {\n    padding: 20px;\n    text-align: center;\n    color: #eee;\n    max-height: 130px;\n    min-width: 130px;\n    background-color: lightskyblue;\n    border-radius: 2px;\n  }\n\n.module:hover {\n    background-color: #EEE;\n    cursor: pointer;\n    color: #607d8b;\n  }\n\n.grid-pad {\n    padding: 10px 0;\n  }\n\n.grid-pad > [class*='col-']:last-of-type {\n    padding-right: 20px;\n  }\n\n@media (max-width: 600px) {\n    .module {\n      font-size: 10px;\n      max-height: 75px; }\n  }\n\n@media (max-width: 1024px) {\n    .grid {\n      margin: 0;\n    }\n    .module {\n      min-width: 60px;\n    }\n  }\n\n#image {\n    width: 50%;\n}\n\n#button {\n    position: absolute;\n    right: 33%;\n    bottom: 3%;\n    padding: 0% 2%;\n}\n  \n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <app-header></app-header>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <h1 id=\"quote\">Οι καλύτερες εκδηλώσεις στη πόλη!</h1>\n          <a routerLink=\"/results\">\n              <button class=\"btn btn-warning\" type=\"button\" id=\"search\">Αναζήτηση</button>\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <h3>Πρόσφατες Εκδηλώσεις</h3>\n            <div class=\"grid grid-pad\">\n              <a *ngFor=\"let event of events\" class=\"col-1-4\">\n                <div class=\"module event\">\n                  <a routerLink=\"/results/{{event._id}}\">\n                    <h4>{{event.title}}</h4>\n                    <img class=\"card-img-top\" id=\"image\" src=\"{{event.image}}\" alt=\"Card image\">\n                  </a>\n                </div>\n              </a>\n            </div>\n          </div>\n      </div>\n    </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { LocationService } from '../services/location.service';
var HomeComponent = /** @class */ (function () {
    // location = 'Λεωφόρος Καλαμακίου 33';
    function HomeComponent(eventService) {
        this.eventService = eventService;
        this.events = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getEvents();
        // this.findLatLon(this.location);
    };
    HomeComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents()
            .subscribe(function (events) { return _this.events = events.slice(0, 4); });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto', sans-serif;\n}\n\nfooter .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\nfooter {\n    padding: 0 0;\n}\n\nfooter .img {\n    width: 1rem;\n    height: 1rem;\n}\n\n.footer-info {\n    background-color: rgb(12,77,100);\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.footer-copyrigth {\n    background-color: rgb(17, 123, 158);\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>        \n    <div class=\"container-fluid\">\n        <div class=\"row footer-info\">\n            <img src=\"../../assets/images/logo.png\" width=\"110\" height=\"85\" alt=\"\">\n        </div>\n        <div class=\"row footer-copyrigth\">\n            @2018 Proudly developed by: ResidentMEANers\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "nav {\n    max-height: 50vh;\n    border: 0;\n}\n\n\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg justify-content-between\" *ngIf=\"!user\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">\n      <img src=\"../../assets/images/logo.png\" width=\"120\" height=\"100\" class=\"d-inline-block align-top\">\n    </a>\n    <div>\n        <a routerLink=\"/login\">\n          <button class=\"btn btn-warning my-2 my-sm-0\" type=\"submit\">Σύνδεση</button>\n        </a>\n        &nbsp;\n        <a routerLink=\"/signup\">\n          <button class=\"btn btn-danger my-2 my-sm-0\" type=\"submit\">Εγγραφή</button>\n        </a>\n    </div>\n  </nav>\n\n<nav class=\"navbar navbar-expand-lg justify-content-between\" *ngIf=\"user\">\n    <a class=\"navbar-brand\" routerLink=\"/home\">\n      <img src=\"../../assets/images/logo.png\" width=\"120\" height=\"100\" class=\"d-inline-block align-top\">\n    </a>\n    <div>\n        <a routerLink=\"/buypoints\">\n          <button class=\"btn btn-warning my-2 my-sm-0\" type=\"submit\">Πορτοφόλι {{points}}</button>\n        </a>\n        &nbsp;\n        <a routerLink=\"/home\">\n          <button class=\"btn btn-danger my-2 my-sm-0\" type=\"submit\" (click)=\"auth.logout().subscribe()\">Αποσύνδεση</button>\n        </a>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
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
    function HeaderComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    HeaderComponent.prototype.logout = function () {
        this.user = this.auth.getUser();
        this.auth.logout()
            .map(function (user) { return console.log(user); })
            .subscribe();
    };
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/loginform/loginform.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto', sans-serif;\n}\n\n.back {\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.center {\n    margin: auto;\n    width: 50%;\n}\n\n.center_some {\n    text-align: center;\n}\n\n.avatar {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 25%;\n    border-radius: 50%\n}\n\n/*.ng-invalid {\n    border: 2px solid red;\n}\n*/"

/***/ }),

/***/ "./src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <app-header></app-header>\n\n  <div class=\"center\">\n    <div class=\"card text-white bg-info mb-3\">\n      <div class=\"center_some\">\n          <div class=\"card-header\">\n            <h3>Σύνδεση</h3>\n          </div>\n      </div>\n      <div class=\"card-body\">\n        <img src=\"../../assets/images/avatar.png\" alt=\"Avatar\" class=\"avatar\">\n        <br>\n        <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"username\">Όνομα Χρήστη</label>\n            <input  type=\"text\"\n                    class=\"form-control\"\n                    id=\"username\"\n                    placeholder=\"Εισαγωγή Διεύθυνσης Ηλ. Ταχυδρομείου example@example.com\"\n                    type=\"email\"\n                    name=\"username\"\n                    [(ngModel)]=\"formInfo.username\"\n                    required\n                    pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                    #username=\"ngModel\">\n             <div *ngIf=\"!username.valid\">\n              <small>\n                Μη Έγκυρη Διεύθυνση Ηλ. Ταχυδρομείου\n              </small>\n             </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Κωδικός Πρόσβασης</label>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"password\"\n                   placeholder=\"Εισαγωγή Κωδικού Πρόσβασης\"\n                   type=\"password\"\n                   name=\"password\"\n                   [(ngModel)]=\"formInfo.password\"\n                   required>\n          </div>\n          <div class=\"center_some\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Σύνδεση</button>\n            <br>\n            <br>\n            <p>Δεν έχετε ακόμα λογαριασμό; \n              <a routerLink=\"/signup\"> Εγγραφή</a>\n            </p>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginformComponent = /** @class */ (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username !== '' && password !== '') {
            // console.log(`Login with ${username} ${password}`);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe();
        }
        else {
            console.log('You must set a username and a password');
        }
    };
    LoginformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-loginform',
            template: __webpack_require__("./src/app/loginform/loginform.component.html"),
            styles: [__webpack_require__("./src/app/loginform/loginform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginformComponent);
    return LoginformComponent;
}());



/***/ }),

/***/ "./src/app/provider-signupform/provider-signupform.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto', sans-serif;\n}\n\n.back {\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.center {\n    margin: auto;\n    width: 50%;\n}\n\n.center_some {\n    text-align: center;\n}\n\n.center_some_more{\n    margin: auto; \n    text-align: center;  \n}\n\n/*.ng-invalid {\n    border: 2px solid red;\n}\n*/\n"

/***/ }),

/***/ "./src/app/provider-signupform/provider-signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n    <app-header></app-header>\n  \n    <div class=\"center\">\n      <div class=\"card text-white bg-success mb-3\">\n        <div class=\"center_some\">\n            <div class=\"card-header\">\n              <h3>Εγγραφή</h3>\n            </div>\n        </div>\n        <div class=\"card-body\"> \n          \n          <div class=\"center_some_more\">\n            <a routerLink=\"/signup\" class=\"btn btn-info\" id=\"button\">Εγγραφή Γονέα</a>        \n            &nbsp;\n            <a routerLink=\"/provider-signup\" class=\"btn btn-info\" id=\"button\">Εγγραφή Παρόχου</a>\n            <br>\n            <br>            \n            <p>Παρακαλώ εισάγετε στοιχεία για την Εγγραφή Παρόχου:</p> \n          </div>\n          <form (ngSubmit)=\"onSubmitprovider(f)\" #f=\"ngForm\">\n            <div class=\"form-group\">       \n                <label for=\"company_name\"><b>Όνομα Εταιρείας</b></label>\n                <input type=\"text\"\n                        class=\"form-control\" \n                        id=\"company_name\"\n                        placeholder=\"Εισαγωγή Ονόματος Εταιρείας\" \n                        name=\"company_name\" \n                        [(ngModel)]=\"providerformInfo.company_name\"\n                        required>\n            </div>\n            <div class=\"form-group\">       \n                <label for=\"afm\"><b>Α.Φ.Μ</b></label>\n                <input type=\"text\"\n                        class=\"form-control\" \n                        id=\"afm\"\n                        placeholder=\"Εισαγωγή Α.Φ.Μ\" \n                        name=\"afm\" \n                        [(ngModel)]=\"providerformInfo.afm\"\n                        required>\n            </div>   \n            <div class=\"form-group\">       \n                <label for=\"phone\"><b>Τηλέφωνο Επικοινωνίας</b></label>\n                <input type=\"text\"\n                        class=\"form-control\" \n                        id=\"phone\"\n                        placeholder=\"Εισαγωγή Τηλεφώνου Επικοινωνίας  \" \n                        name=\"phone\" \n                        [(ngModel)]=\"providerformInfo.phone\"\n                        required>\n            </div>                      \n            <div class=\"form-group\">\n              <label for=\"pfname\"><b>Όνομα</b></label>\n              <input type=\"text\"\n                      class=\"form-control\" \n                      id=\"pfname\"\n                      placeholder=\"Εισαγωγή Ονόματος\" \n                      name=\"pfname\" \n                      [(ngModel)]=\"providerformInfo.pfname\"\n                      required>\t \n            </div>\n            <div class=\"form-group\">                           \n              <label for=\"plname\"><b>Επίθετο</b></label>\t\n              <input type=\"text\"\n                      class=\"form-control\" \n                      id=\"plname\"\n                      placeholder=\"Εισαγωγή Επιθέτου\" \n                      name=\"plname\" \n                      [(ngModel)]=\"providerformInfo.plname\"\n                      required>\t\n            </div>\n            <div class=\"form-group\">          \t\t\t\n              <label for=\"pemail\"><b>Διεύθυνση Ηλ. Ταχυδρομείου</b></label>\n              <input  type=\"text\" \n                      class=\"form-control\" \n                      id=\"pemail\" \n                      placeholder=\"Εισαγωγή Διεύθυνσης Ηλ. Ταχυδρομείου example@example.com\" \n                      type=\"email\" \n                      name=\"pemail\"\n                      [(ngModel)]=\"providerformInfo.pemail\"\n                      required\n                      pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                      #pemail=\"ngModel\">   \n              <div *ngIf=\"!pemail.valid\">\n                <small>\n                  Μη Έγκυρη Διεύθυνση Ηλ. Ταχυδρομείου\n                </small>\n              </div> \n            </div>\n            <div class=\"form-group\">       \n              <label for=\"ppassword\"><b>Κωδικός Πρόσβασης</b></label>\n              <input type=\"text\"\n                      class=\"form-control\" \n                      id=\"ppassword\"\n                      placeholder=\"Εισαγωγή Κωδικού Πρόσβασης\" \n                      name=\"ppassword\" \n                      [(ngModel)]=\"providerformInfo.ppassword\"\n                      required>\n            </div>\n            <div class=\"form-group\">          \n              <label for=\"ppassword_repeat\"><b>Επανάληψη Κωδικού Πρόσβασης</b></label>\n              <input type=\"text\"\n                      class=\"form-control\" \n                      id=\"ppassword_repeat\"\n                      placeholder=\"Επαναλάβετε τον Κωδικό Πρόσβασης\" \n                      name=\"ppassword_repeat\" \n                      [(ngModel)]=\"providerformInfo.ppassword_repeat\"\n                      required> \n            </div>          \n            <br>\n            <div class=\"center_some\">       \n              <p>*Δημιουργώντας Λογαριασμό συμφωνείτε με τους : \n                  <a routerLink=\"/terms\"> Όρους και την Πολιτική μας</a>\n              </p>\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Δημιουργία Λογαριασμού</button>\n              <br>\n              <br>           \n              <a routerLink=\"/home\" class=\"btn btn-danger\" id=\"button\">Ακύρωση</a>\n            </div>    \n          </form>        \n                  \n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>  \n  </div>\n"

/***/ }),

/***/ "./src/app/provider-signupform/provider-signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderSignupformComponent; });
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

var ProviderSignupformComponent = /** @class */ (function () {
    function ProviderSignupformComponent() {
        this.providerformInfo = {
            company_name: '',
            afm: '',
            phone: '',
            pfname: '',
            plname: '',
            pemail: '',
            ppassword: '',
            ppassword_repeat: ''
        };
    }
    ProviderSignupformComponent.prototype.onSubmituser = function (form) {
        console.log(this.providerformInfo);
    };
    ProviderSignupformComponent.prototype.ngOnInit = function () {
    };
    ProviderSignupformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-provider-signupform',
            template: __webpack_require__("./src/app/provider-signupform/provider-signupform.component.html"),
            styles: [__webpack_require__("./src/app/provider-signupform/provider-signupform.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProviderSignupformComponent);
    return ProviderSignupformComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loginform_loginform_component__ = __webpack_require__("./src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signupform_signupform_component__ = __webpack_require__("./src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_signupform_provider_signupform_component__ = __webpack_require__("./src/app/provider-signupform/provider-signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventpage_eventpage_component__ = __webpack_require__("./src/app/eventpage/eventpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_search_results_results_component__ = __webpack_require__("./src/app/search-results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buypoints_buypoints_component__ = __webpack_require__("./src/app/buypoints/buypoints.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createevent_createevent_component__ = __webpack_require__("./src/app/createevent/createevent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terms_terms_component__ = __webpack_require__("./src/app/terms/terms.component.ts");









var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__loginform_loginform_component__["a" /* LoginformComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__signupform_signupform_component__["a" /* SignupformComponent */] },
    { path: 'provider-signup', component: __WEBPACK_IMPORTED_MODULE_2__provider_signupform_provider_signupform_component__["a" /* ProviderSignupformComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'results/:id', component: __WEBPACK_IMPORTED_MODULE_4__eventpage_eventpage_component__["a" /* EventpageComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_5_app_search_results_results_component__["a" /* ResultsComponent */] },
    { path: 'buypoints', component: __WEBPACK_IMPORTED_MODULE_6__buypoints_buypoints_component__["a" /* BuypointsComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_7__createevent_createevent_component__["a" /* CreateeventComponent */] },
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_8__terms_terms_component__["a" /* TermsComponent */] },
    { path: '**', redirectTo: 'home' }
];


/***/ }),

/***/ "./src/app/search-results/results.component.css":
/***/ (function(module, exports) {

module.exports = ".background_image { \n    position:relative;\n    height: 180vh;\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n  }\n\n#search_id {   \n    margin: auto;\n    width: 78%;\n    background-color: lightblue;\n}\n\n.search-title {\n    margin: auto;\n}\n\n.form-control {\n    margin: auto;\n    left: 1%;\n}\n\n#define {\n    position: absolute;\n    width: 50%;\n    left: 0%;\n}\n\n#back {\n    position: absolute;\n    width: 10%;\n    left: 55%; \n}\n\n#back1 {\n    position: absolute;\n    width: 10%;\n    left: 48%; \n}\n\n#go {\n    font-size: 120%;\n    color: btn-info;\n}\n\n#go:hover {\n    text-decoration: none;\n    text-transform: uppercase;\n}\n\n.position {\n    left: 20%;\n}\n\n.distance {\n    right: 0%;\n}\n\n.tabs {\n    margin: auto;\n}\n\n#filters_id {\n    position: absolute;\n    left: 1%;\n    width: 30%;\n    background-color: lightblue;\n}\n\n.filters-title {\n    position: absolute;\n    left: 38%;\n}\n\n.filter {\n    position: absolute;\n    left: 7%;\n}\n\n#menu {\n    position: absolute;\n    left: 4%;\n    width: 85%;\n}\n\n#price {\n    position: absolute;\n    left: 6%;\n}\n\n#sex {\n    left: 21%;\n}\n\n#submit {\n    left: 34%;\n}\n\n.list_results {\n    position: absolute; \n    right: 4%;\n    width: 65%;\n    height:20%;\n}\n\n#image {\n    width: 30%;\n}\n\n#title {\n    position: absolute;\n    right: 24%;\n    top: 5%;\n    font-size: 140%;\n}\n\n#text {\n    position: absolute;\n    left: 31%; \n    bottom: 20%;\n    font-size:85%;\n}\n\n#button {\n    position: absolute;\n    right: 33%;\n    bottom: 3%;\n    padding: 0% 2%;\n}\n\n#info {\n    width: 35%;\n    height: 35%;\n    margin: auto;\n}\n\nagm-map {\n    height: 600px;\n  }\n\n"

/***/ }),

/***/ "./src/app/search-results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background_image\">\n    <app-header></app-header>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"card\" id=\"search_id\">\n                <div class=\"row mb-1\"></div>\n                <h4 class=\"search-title\">Αναζήτηση</h4>\n                <div class=\"row mb-2\"></div>\n                <div class=\"input-group\">\n                    <input #searchBox type=\"text\" class=\"form-control\" autocomplete=\"on\" placeholder=\"Είδος, περιοχή, ηλικία\" [(ngModel)] = \"searchQuery.searchTerms\"/>\n                    <button class=\"btn btn-link\" type=\"button\" id=\"go\" (click)=\"search()\">Βρες!</button>\n                </div>\n                <div class=\"row mb-2\"></div>\n                <div class=\"row\">\n                    <div class=\"col-12 col-lg-7 position\">\n                        <h5>Τοποθεσία</h5>\n                        <form *ngIf=\"!show\">\n                            <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickLocationH(loc[0])\">{{loc[0]}}</button>\n                            &nbsp;\n                            <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickLocationHandler(loc[1])\">{{loc[1]}}</button>\n                        </form>\n                        <form *ngIf=\"show\">\n                            <div class=\"input-group\">\n                                <input #searchBox type=\"text\" class=\"form-control\" id=\"define\" placeholder=\"Ορισμός τοποθεσίας\" (keyup.enter)=\"location_search(searchBox.value)\"/>\n                                <button class=\"btn btn-link\" type=\"button\" id=\"back1\" (click)=\"location_search(searchBox.value)\">Enter</button>\n                                <button class=\"btn btn-link\" type=\"button\" id=\"back\" (click)=\"back()\">Πίσω</button>\n                            </div>\n                        </form>\n                    </div>\n\n                    <div class=\"col-12 col-lg-5 distance\">\n                        <h5>Απόσταση</h5>\n                        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickDistanceHandler(dis[0])\">< {{dis[0]}}</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickDistanceHandler(dis[1])\">< {{dis[1]}}</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickDistanceHandler(dis[2])\">< {{dis[2]}}</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickDistanceHandler(dis[3])\">< {{dis[3]}}</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click) = \"onClickDistanceHandler(dis[4])\">< {{dis[4]}}</button>                            \n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mb-2\"></div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"tabs\">\n              <div class=\"row mb-3\"></div>\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"nav-item\">\n                        <a class=\"btn btn-info\" type=\"button\" (click)=\"list()\" style=\"background-color:White;\">Λίστα</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"btn btn-info\" type=\"button\" (click)=\"map()\" style=\"background-color:lightblue;\">Χάρτης</a>\n                    </li>\n                </ul>\n                <div class=\"row mb-3\"></div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"card col-12 col-lg-3\" id=\"filters_id\">\n            <div class=\"row mb-2\"></div>\n            <h4 class=\"filters-title\">Φίλτρα</h4>\n            <br>\n            <h5 class=\"filter\">Είδος</h5>\n            <br>\n            <div class=\"form-group\" id=\"menu\">\n                <select class=\"custom-select\" (change)=\"selectTypeHandler($event)\">\n                    <option *ngFor=\"let option of types\" \n                        [value]=\"option\"> \n                        {{ option }}\n                     </option>\n                </select>\n            </div>\n            <br>\n            <br>\n            <h5 class=\"filter\">Ηλικία</h5>\n            <br>\n            <div class=\"form-group\" id=\"menu\">\n                <select class=\"custom-select\" (change)=\"selectAgeHandler($event)\">\n                    <option *ngFor=\"let option of ages\" \n                        [value]=\"option\"> \n                        {{ option }}\n                     </option>\n                </select>\n            </div>\n            <br>\n            <br>\n            <h5 class=\"filter\">Ημερομηνία</h5>\n            <br>\n            <div class=\"form-group\" id=\"menu\">\n                <select class=\"custom-select\" (change)=\"selectDateHandler($event)\">\n                    <option *ngFor=\"let option of dates\" \n                        [value]=\"option\"> \n                        {{ option }}\n                     </option>\n                </select>\n            </div>\n            <br>\n            <br>\n            <h5 class=\"filter\">Τιμή</h5>\n            <br>\n            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\" id=\"price\">\n                <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                    <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickPriceHandler(num[0])\">< {{num[0]}}</button>\n                    <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickPriceHandler(num[1])\">< {{num[1]}}</button>\n                    <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickPriceHandler(num[2])\">< {{num[2]}}</button>\n                    <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickPriceHandler(num[3])\">< {{num[3]}}</button>\n                    <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickPriceHandler(num[4])\">< {{num[4]}}</button>\n                </div>\n            </div>\n            <br>\n            <br>\n            <h5 class=\"filter\">Φύλο</h5>\n            <br>\n            <div class=\"input-group\" id=\"sex\">\n                <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickSexHandler(sex[0])\">{{sex[0]}}</button>\n                &nbsp; &nbsp;\n                <button type=\"button\" class=\"btn btn-info\" (click) = \"onClickSexHandler(sex[1])\">{{sex[1]}}</button>\n            </div>\n            <div class=\"row mb-2\"></div>\n            <div class=\"input-group\" id=\"submit\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click) = \"onClick()\">Επιλογή</button>\n            </div>\n            <div class=\"row mb-2\"></div>\n          </div>\n\n          <div class=\"col-12 col-lg-9 list_results\">\n            <form *ngIf=\"!show_map\">\n                <li *ngFor=\"let ev of results | async | paginate: { itemsPerPage: 4, currentPage: p }\" class=\"row card\">\n                    <img class=\"card-img-top\" id=\"image\" src=\"{{ev.image}}\" alt=\"Card image\">\n                    <h4 class=\"card-title\" id=\"title\">{{ev.title}}</h4>\n                    <p class=\"card-text\" id=\"text\">{{ev.shortDescription}}</p>\n                    <a routerLink=\"/results/{{ev._id}}\" class=\"btn btn-primary btn-sm\" id=\"button\">Προβολή</a>\n                </li>\n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n            </form>\n            <form *ngIf=\"show_map\">\n                <agm-map [latitude]=\"searchQuery.geo.lat\" [longitude]=\"searchQuery.geo.lon\" [zoom]=\"(18 - searchQuery.distance * 0.4) \">\n                    <div *ngFor=\"let ev of results | async\">\n                        <agm-marker \n                            [latitude]=\"ev.geo.lat\" \n                            [longitude]=\"ev.geo.lon\" \n                            (mouseOver)=\"onMouseOver(infoWindow,gm)\">\n\n                            <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\n                                <div>\n                                    <h4>{{ev.title}}</h4>\n                                    <p>{{ev.shortDescription}}</p>\n                                    <img id=\"info\" src=\"{{ev.image}}\">\n                                </div>\n                                <div>\n                                    <a (click)=\"onClickInfoView({id:ev._id})\"></a>\n                                </div>\n                            </agm-info-window>\n                        </agm-marker>\n                    </div> \n                </agm-map>\n            </form>\n          </div>\n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/search-results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("./src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dateFormatPipe__ = __webpack_require__("./src/app/dateFormatPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_location_service__ = __webpack_require__("./src/app/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(eventService, locService) {
        this.eventService = eventService;
        this.locService = locService;
        this.p = 1;
        this.num = [5, 10, 15, 30, 50];
        this.dis = [1, 3, 5, 10, 20];
        this.sex = ['Αγόρι', 'Κορίτσι'];
        this.loc = ['Τρέχουσα', 'Ορισμός'];
        this.types = ['Κατηγορίες', 'Αθλητισμός', 'Ζωγραφική', 'Θέατρο', 'Κινηματογράφος', 'Παιδότοποι', 'Μουσική'];
        this.ages = ['Κατηγορίες', '1-3 ετών', '3-5 ετών', '5-12 ετών', '12-18 ετών'];
        this.dates = ['Κατηγορίες', 'Αύριο', 'Αυτή την εβδομάδα', 'Επόμενες δύο εβδομάδες'];
        this.searchQuery = {
            searchTerms: '',
            geo: {
                lat: 37.9700818,
                lon: 23.7284641
            },
            distance: 5
        };
        this.show = false;
        this.show_map = false;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    ResultsComponent.prototype.search = function () {
        var _a = this.searchQuery, searchTerms = _a.searchTerms, geo = _a.geo, distance = _a.distance;
        this.results = this.eventService.searchEvents(searchTerms, geo, distance);
        this.temp_results = this.results;
    };
    ResultsComponent.prototype.location_search = function (locationStr) {
        var _this = this;
        this.locService.getLatLon(locationStr)
            .then(function (response) { return _this.searchQuery.geo = { lat: response.results[0].geometry.location.lat, lon: response.results[0].geometry.location.lng }; })
            .catch(function (error) { return console.error(error); });
    };
    ResultsComponent.prototype.onClickDistanceHandler = function (dist) {
        this.searchQuery.distance = dist;
    };
    ResultsComponent.prototype.getEvents = function () {
        this.results = this.eventService.getEvents();
        this.temp_results = this.results;
    };
    ResultsComponent.prototype.selectType = function (selectedType) {
        function check_type(element, index, array) {
            return element === selectedType;
        }
        if (selectedType === this.types[1] || selectedType === this.types[2]
            || selectedType === this.types[3] || selectedType === this.types[4]
            || selectedType === this.types[5] || selectedType === this.types[6]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.eventType.some(check_type); }); });
        }
    };
    ResultsComponent.prototype.selectAge = function (selectedAge) {
        function check_type(element, index, array) {
            return element === selectedAge;
        }
        if (selectedAge === this.ages[1] || selectedAge === this.ages[2]
            || selectedAge === this.ages[3] || selectedAge === this.ages[4]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.age.some(check_type); }); });
        }
    };
    ResultsComponent.prototype.selectDate = function (selectedDate) {
        var _this = this;
        if (selectedDate === this.dates[1]) {
            selectedDate = new Date();
            selectedDate = selectedDate.setDate(selectedDate.getDate() + 1);
            var dateFormatPipeFilter = new __WEBPACK_IMPORTED_MODULE_2__dateFormatPipe__["a" /* dateFormatPipe */]();
            this.newDate = dateFormatPipeFilter.transform(selectedDate);
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.startDate === _this.newDate; }); });
        }
        else if (selectedDate === this.dates[2]) {
            selectedDate = new Date();
            selectedDate = selectedDate.setDate(selectedDate.getDate() + 7);
            var dateFormatPipeFilter = new __WEBPACK_IMPORTED_MODULE_2__dateFormatPipe__["a" /* dateFormatPipe */]();
            this.newDate = dateFormatPipeFilter.transform(selectedDate);
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.startDate < _this.newDate; }); });
        }
        else if (selectedDate === this.dates[3]) {
            selectedDate = new Date();
            selectedDate = selectedDate.setDate(selectedDate.getDate() + 14);
            var dateFormatPipeFilter = new __WEBPACK_IMPORTED_MODULE_2__dateFormatPipe__["a" /* dateFormatPipe */]();
            this.newDate = dateFormatPipeFilter.transform(selectedDate);
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.startDate < _this.newDate; }); });
        }
    };
    ResultsComponent.prototype.onClickPrice = function (selectedPrice) {
        var _this = this;
        if (selectedPrice === this.num[0]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.price < _this.num[0]; }); });
        }
        else if (selectedPrice === this.num[1]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.price < _this.num[1]; }); });
        }
        else if (selectedPrice === this.num[2]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.price < _this.num[2]; }); });
        }
        else if (selectedPrice === this.num[3]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.price < _this.num[3]; }); });
        }
        else if (selectedPrice === this.num[4]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.price < _this.num[4]; }); });
        }
    };
    ResultsComponent.prototype.onClickSex = function (selectedSex) {
        function check_type(element, index, array) {
            return element === selectedSex;
        }
        if (selectedSex === this.sex[0] || selectedSex === this.sex[1]) {
            this.results = this.results.map(function (results) { return results.filter(function (result) { return result.sex.some(check_type); }); });
        }
    };
    ResultsComponent.prototype.onClickLocationHandler = function (geo) {
        this.selectedLocation = geo;
        this.show = true;
    };
    ResultsComponent.prototype.selectTypeHandler = function (event) {
        this.selectedType = event.target.value;
    };
    ResultsComponent.prototype.selectAgeHandler = function (event) {
        this.selectedAge = event.target.value;
    };
    ResultsComponent.prototype.selectDateHandler = function (event) {
        this.selectedDate = event.target.value;
    };
    ResultsComponent.prototype.onClickPriceHandler = function (price) {
        this.selectedPrice = price;
    };
    ResultsComponent.prototype.onClickSexHandler = function (sex) {
        this.selectedSex = sex;
    };
    ResultsComponent.prototype.onClick = function () {
        this.results = this.temp_results;
        this.selectType(this.selectedType);
        this.selectAge(this.selectedAge);
        this.selectDate(this.selectedDate);
        this.onClickPrice(this.selectedPrice);
        this.onClickSex(this.selectedSex);
    };
    ResultsComponent.prototype.back = function () {
        this.show = false;
    };
    ResultsComponent.prototype.map = function () {
        this.show_map = true;
    };
    ResultsComponent.prototype.list = function () {
        this.show_map = false;
    };
    ResultsComponent.prototype.onMouseOver = function (infoWindow, gm) {
        if (gm.lastOpen != null) {
            gm.lastOpen.close();
        }
        gm.lastOpen = infoWindow;
        infoWindow.open();
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__("./src/app/search-results/results.component.html"),
            styles: [__webpack_require__("./src/app/search-results/results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line:import-blacklist


// import { User } from '../models/user';
var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + '/api';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log('AUTH ERROR');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password) {
        var _this = this;
        // console.log({username, password});
        return this.http.post(BASEURL + "/signup", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
    }
    // GET Event by ID
    EventService.prototype.getEvents = function () {
        return this.http.get(this.BASE_URL + "/api/events")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError('getEvents', [])));
    };
    EventService.prototype.getEvent = function (id) {
        var url = this.BASE_URL + "/api/events/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError("getEvent id=" + id)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    EventService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /* GET heroes whose name contains search term */
    EventService.prototype.searchEvents = function (searchTerms, geo, distance) {
        if (!searchTerms.trim()) {
            // if not search term, return empty hero array.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
        }
        // tslint:disable-next-line:max-line-length
        return this.http.get(this.BASE_URL + "/api/events/search?searchTerms=" + searchTerms + "&distance=" + distance + "&lat=" + geo.lat + "&lon=" + geo.lon).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError('searchEvents', [])));
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';

var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
    }
    // getLocation(): Observable<any> {
    //   // tslint:disable-next-line:max-line-length
    //   return this.http.get<any>('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback');
    // }
    LocationService.prototype.getLatLon = function (term) {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + term + ', ΕλλάδαCA&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback&language=el')
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(function (error) { return Promise.resolve(error.json()); });
    };
    LocationService.prototype.getLοcation = function (geo) {
        // tslint:disable-next-line:max-line-length
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + geo.lat + ',' + geo.lon + '&key=AIzaSyCGYll29pPK9lk2lpQOGSL7e5XQOBovGBM&callback&language=el')
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(function (error) { return Promise.resolve(error.json()); });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/signupform/signupform.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto', sans-serif;\n}\n\n.back {\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.center {\n    margin: auto;\n    width: 50%;\n}\n\n.center_some {\n    text-align: center;\n}\n\n.center_some_more{\n    margin: auto; \n    text-align: center;  \n}\n\n/*.ng-invalid {\n    border: 2px solid red;\n}\n*/\n"

/***/ }),

/***/ "./src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <app-header></app-header>\n\n  <div class=\"center\">\n    <div class=\"card text-white bg-success mb-3\">\n      <div class=\"center_some\">\n          <div class=\"card-header\">\n            <h3>Εγγραφή</h3>\n          </div>\n      </div>\n      <div class=\"card-body\">\n\n        <div class=\"center_some_more\">\n          <a routerLink=\"/signup\" class=\"btn btn-info\" id=\"button\">Εγγραφή Γονέα</a>\n          &nbsp;\n          <a routerLink=\"/provider-signup\" class=\"btn btn-info\" id=\"button\">Εγγραφή Παρόχου</a>\n          <br>\n          <br>\n          <p>Παρακαλώ εισάγετε στοιχεία για την Εγγραφή Γονέα:</p>        \n        </div>\n        <form #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"ufname\"><b>Όνομα</b></label>\n            <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"ufname\"\n                    placeholder=\"Εισαγωγή Ονόματος\"\n                    name=\"ufname\"\n                    required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"ulname\"><b>Επίθετο</b></label>\n            <input type=\"text\"\n                    class=\"form-control\"\n                    id=\"ulname\"\n                    placeholder=\"Εισαγωγή Επιθέτου\"\n                    name=\"ulname\"\n                    required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"uemail\"><b>Διεύθυνση Ηλ. Ταχυδρομείου</b></label>\n            <input  type=\"text\"\n                    class=\"form-control\"\n                    id=\"uemail\"\n                    placeholder=\"Εισαγωγή Διεύθυνσης Ηλ. Ταχυδρομείου example@example.com\"\n                    type=\"email\"\n                    name=\"uemail\"\n                    [(ngModel)]=\"formInfo.username\"\n                    required\n                    pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                    #uemail=\"ngModel\">\n            <div *ngIf=\"!uemail.valid\">\n              <small>\n                Μη Έγκυρη Διεύθυνση Ηλ. Ταχυδρομείου\n              </small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\"><b>Κωδικός Πρόσβασης</b></label>\n            <input type=\"password\"\n                    class=\"form-control\"\n                    id=\"password\"\n                    placeholder=\"Εισαγωγή Κωδικού Πρόσβασης\"\n                    name=\"password\"\n                    [(ngModel)]=\"formInfo.password\"\n                    required\n                    #password=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordrepeat\"><b>Επανάληψη Κωδικού Πρόσβασης</b></label>\n            <input type=\"password\"\n                    class=\"form-control\"\n                    id=\"passwordrepeat\"\n                    placeholder=\"Επαναλάβετε τον Κωδικό Πρόσβασης\"\n                    name=\"passwordrepeat\"\n                    [(ngModel)]=\"formInfo.password_repeat\"\n                    required\n                    #passwordrepeat=\"ngModel\">\n            <div *ngIf=\"password.value != passwordrepeat.value\">\n              <small>\n                Οι δύο κωδικοί δεν είναι ίδιοι.\n              </small>\n            </div>                          \n          </div>\n          <br>\n          <div class=\"center_some\">\n            <p>Δημιουργώντας Λογαριασμό συμφωνείτε με τους :\n                <a routerLink=\"/terms\"> Όρους και την Πολιτική μας</a>\n            </p>\n            <button (click)=\"signup()\" class=\"btn btn-primary\" [disabled]=\"(!f.valid) || (password.value != passwordrepeat.value)\">Δημιουργία Λογαριασμού</button>\n            <br>\n            <br>\n            <a routerLink=\"/home\" class=\"btn btn-danger\" id=\"button\">Ακύρωση</a>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = /** @class */ (function () {
    function SignupformComponent(authService) {
        this.authService = authService;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    SignupformComponent.prototype.signup = function () {
        // console.log(this.formInfo);
        var _a = this.formInfo, username = _a.username, password = _a.password;
        this.authService.signup(username, password)
            .map(function (user) { return console.log(user); })
            .subscribe();
    };
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signupform',
            template: __webpack_require__("./src/app/signupform/signupform.component.html"),
            styles: [__webpack_require__("./src/app/signupform/signupform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], SignupformComponent);
    return SignupformComponent;
}());



/***/ }),

/***/ "./src/app/terms/terms.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Roboto', sans-serif;\n}\n\n.back {\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0.5)) ), url('landing.1185f47be9b89954776d.jpg');\n    background: linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5) ), url('landing.1185f47be9b89954776d.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n\n.center {\n    text-align: center;\n    margin: auto;\n    width: 50%;\n}\n"

/***/ }),

/***/ "./src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <app-header></app-header>\n\n  <div class=\"center\">\n    <div class=\"container\">\n        <div class=\"card text-white bg-secondary mb-3\">\n            <div class=\"center_some\">\n                <div class=\"card-header\">\n                  <h3>Όροι και Προϋποθέσεις</h3>\n                </div>\n            </div>\n            <div class=\"card-body\">\n              <p>Γεια σας και καλωσορίσατε στους Όρους και προϋποθέσεις χρήσης. Αυτό το έγγραφο είναι σημαντικό και επηρεάζει τα νομικά σας δικαιώματα, οπότε παρακαλούμε να το διαβάσετε προσεκτικά, όπως και την Πολιτική ιδιωτικού απορρήτου και τους άλλους όρους που αναφέρονται σε αυτό το έγγραφο. </p>\n              <p>1.</p>\n              <p>2.</p>\n              <p>3.</p>\n              <p>4.</p>\n              <p>5.</p>\n            </div>\n          </div>\n        </div>\n  </div>\n  <app-footer></app-footer>\n</div>      \n"

/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
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

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__("./src/app/terms/terms.component.html"),
            styles: [__webpack_require__("./src/app/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
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
    BASEURL: 'http://localhost:3000'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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