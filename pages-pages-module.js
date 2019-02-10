(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n\t\t\n\n\n  <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" class=\"contact-list-container\">\n    \n\n        <div class=\"contact-list\">\n          <div fxLayout=\"row\"  fxLayoutAlign=\"space-around none\" class=\"mat-ripple\"  >\n    \n    \n    \n            <div fxFlex=\"60\">\n              <h5 class=\"mat-subheading-1\" > <b> Shopping Cart </b> </h5>\n                \n                 \n            </div>\n    \n            <div fxFlex=\"20\">\n                \n    \n                <p class=\"mat-body-1\" >\n                  Precio \n                </p>\n     \n                       \n            </div>\n            \n            <div fxFlex=\"20\">\n                \n              <p class=\"mat-body-1\" >\n                Cantidad \n              </p>\n            </div>\n    \n                \n    \n            \n          \n                \n       \n       \n       \n          \n          \n          </div>\n    \n          <mat-divider></mat-divider>\n\n          <div fxLayout=\"row\" *ngFor=\"let employee of employees\" fxLayoutAlign=\"space-around none\" class=\"mat-ripple\"  >\n    \n    \n    \n        <div fxFlex=\"15\">\n          <img class=\"avatar\" src=\"{{employee?.image}}\">\n        </div>\n\n        <div fxFlex=\"50\">\n          <!--\n          <h3 class=\"mat-subheading-1\" > <b> {{employee?.name}} </b> </h3>\n        -->\n          <p class=\"mat-body-1\" >\n              By {{employee?.name}} \n            </p>\n\n        </div>\n\n        <div fxFlex=\"25\">\n            \n\n            <p class=\"mat-body-1\" >\n               <b>{{employee?.price}}</b>\n              </p>\n \n                   \n        </div>\n        \n        <div fxFlex=\"10\">\n            \n            <mat-form-field style=\"width:20px !important\">\n                <input type=\"number\" id=\"cantidad\" \n                  class=\"input\" placeholder=\"Cant\"\n                  value=\"1\"\n                formControlName=\"cantidad\" required matInput>\n\n            </mat-form-field>\n            \n            \n\n        \n        </div>\n\n            \n\n        \n      \n            \n   \n   \n   \n      \n      \n      </div>\n\n      <mat-divider></mat-divider>\n\n      <div fxLayout=\"row\"  fxLayoutAlign=\"space-around none\" class=\"mat-ripple\"  >\n    \n    \n    \n        <div fxFlex=\"70\">\n           \n             \n        </div>\n\n        <div fxFlex=\"30\">\n            \n\n          <h3 class=\"mat-subheading-1\" > <b> \n              Total items(3): $4,500.00 \n          </b> </h3>\n \n                   \n        </div>\n         \n   \n   \n      \n      \n      </div>\n\n\n  \n    </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\n  width: 100%; }\n\n.contact-list-container {\n  background-color: white;\n  padding: 5px; }\n\n.contact-list-container .contact-list {\n    height: 100%;\n    overflow: auto; }\n\n.contact-list-container .contact-list div {\n      margin: 0; }\n\n.contact-list-container .contact-list h3 {\n      margin: 0; }\n\n.contact-list-container .contact-list p {\n      margin: 0; }\n\n.contact-list-container .contact-list .avatar {\n      width: 30px;\n      height: 30px;\n      border-radius: 5%; }\n\n.contact-list-container .contact-list-header {\n    background-color: #eee;\n    padding: 5px; }\n\n.contact-list-container .contact-list-header div {\n      margin: auto; }\n\n.contact-add {\n  padding: 10px;\n  background: white; }\n\n.contact-add .avatar {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%; }\n\n.contact-add h3 {\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.navigations = [
            { name: "Hari", job: "Full Stack Developer", experience: "10 Yrs", link: "fdsg" },
            { name: "Sujith", job: "Full Stack Developer", experience: "6 Yrs", link: "fdsg" },
            { name: "Ramya", job: "Full Stack Developer", experience: "4 Yrs", link: "fdsg" },
            { name: "Sree", job: "Full Stack Developer", experience: "2 Yrs", link: "fdsg" },
            { name: "Sruthy", job: "Full Stack Developer", experience: "2 Yrs", link: "fdsg" },
            { name: "Fahad", job: "Full Stack Developer", experience: "2 Yrs", link: "fdsg" }
        ];
        this.employees = [
            { name: 'Apple iPhone 6S Plus, GSM Unlocked, 64GB - Space Gray (Refurbished)',
                provider: 'Apple',
                price: '7,500.00',
                stock: 3,
                image: 'assets/iphone.jpg' },
            { name: 'Apple 13 Inch MacBook Air Laptop (1.8GHz Intel Core i5 Dual Core Processor',
                provider: 'Apple',
                price: '14,500',
                stock: 6,
                image: 'assets/mac.jpg' },
            { name: 'Xbox One S 1TB Console - Starter BundleXbox One',
                provider: 'Microsoft',
                price: '8,200.00',
                stock: 11,
                image: 'assets/xbox.jpg' }
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n\t\t\n\n\n\t\t\t<div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" class=\"contact-list-container\">\n\t\t\t\t\n\t\t\n\t\t\t\t\t\t<div class=\"contact-list\">\n\t\t\t\t\n\t\t\t\t\t\t\t<div fxLayout=\"row\" *ngFor=\"let employee of employees\" fxLayoutAlign=\"space-around none\" class=\"mat-ripple\"  >\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t<div fxFlex=\"20\">\n\t\t\t\t\t\t\t<img class=\"avatar\" src=\"{{employee?.urlimage}}\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div fxFlex=\"80\">\n\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t<h3 class=\"mat-subheading-1\" > <b> {{employee?.name}} </b> </h3>\n\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t<p class=\"mat-body-1\" >\n\t\t\t\t\t\t\t\t\tBy {{employee?.name}} \n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t   <p class=\"mat-body-1\" >\n\t\t\t\t\t\t\t      By {{employee?.provider}} \n\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t<p class=\"mat-body-1\" >\n\t\t\t\t\t\t\t\t\tPrecio : $<b> {{employee?.price}} </b> - Stock ( {{employee?.exists}} )\n\t\t\t\t\t\t\t\t  </p>\n\t\t \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<mat-form-field style=\"width:40px !important\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" id=\"cantidad\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"input\" placeholder=\"Cant\"\n\t\t\t\t\t\t\t\t\t\t\tvalue=\"1\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"cantidad\" required matInput>\n\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t \t  <button mat-icon-button>\n\t\t\t\t\t\t\t\t\t\t\t <mat-icon>add_shopping_cart</mat-icon>\n\t\t\t\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t\t\t\t\t  <a matLine >Comprar</a>\n\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t</div>\n\n\t\n\t\t\t\n    \t\t</div>\n\n\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\n  width: 100%; }\n\n.contact-list-container {\n  background-color: white;\n  padding: 5px; }\n\n.contact-list-container .contact-list {\n    height: 100%;\n    overflow: auto; }\n\n.contact-list-container .contact-list div {\n      margin: 0; }\n\n.contact-list-container .contact-list h3 {\n      margin: 0; }\n\n.contact-list-container .contact-list p {\n      margin: 0; }\n\n.contact-list-container .contact-list .avatar {\n      width: 50px;\n      height: 50px;\n      border-radius: 5%; }\n\n.contact-list-container .contact-list-header {\n    background-color: #eee;\n    padding: 5px; }\n\n.contact-list-container .contact-list-header div {\n      margin: auto; }\n\n.contact-add {\n  padding: 10px;\n  background: white; }\n\n.contact-add .avatar {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%; }\n\n.contact-add h3 {\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ventas_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ventas/product.service */ "./src/app/shared/services/ventas/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    // subscriptionCreate: Subscription;
    // subscriptionEdit: Subscription;
    // $subcriptionGetUnitSafeties:Subscription;
    function ContactComponent(productService) {
        this.productService = productService;
        this.checked = false;
        this.indeterminate = false;
        this.employees = [];
        /*
        this.subscriptionCreate = productService.createClient$.subscribe(
          state => {
            console.info(state);
          
           });
      
      
        this.subscriptionEdit = productService.updateClient$.subscribe(
          client => {
            console.info(client);
          
            });
            */
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.getProductsData();
    };
    ContactComponent.prototype.getProductsData = function () {
        // this.$subcriptionGetUnitSafeties = this.productService.retrieveDataForTable()
        var _this = this;
        this.productService.retrieveDataForTable()
            .subscribe(function (res) {
            console.log(res);
            var body = JSON.parse(res['_body']);
            var dataToSetup = body;
            console.log('products ...');
            _this.employees = dataToSetup;
            //console.log(this.arrDrivers);
            console.log(_this.employees);
            // this.gridOptions.api.setRowData(dataToSetup);
            // this.tableCount = dataToSetup.length;
            setTimeout(function () {
                // console.info("Resize columns");
                //   this.gridApi.sizeColumnsToFit();
            }, 200);
        }, function (err) {
            console.info(err);
            //this.gridOptions.api.setRowData([]);
            // this.gridApi.sizeColumnsToFit();
            alert("An error has occurred, check your browser console");
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_ventas_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/new-product/new-product.component */ "./src/app/pages/products/new-product/new-product.component.ts");
/* harmony import */ var _products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/edit-product/edit-product.component */ "./src/app/pages/products/edit-product/edit-product.component.ts");
/* harmony import */ var _products_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/avatar-dialog/avatar-dialog.component */ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _products_edit_product_edit_product_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/edit-product/edit-product.resolver */ "./src/app/pages/products/edit-product/edit-product.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_5__["PagesRouterModule"]
            ],
            declarations: [
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_12__["NewProductComponent"],
                _products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_13__["EditProductComponent"],
                _products_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AvatarDialogComponent"]
            ],
            exports: [],
            entryComponents: [_products_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_14__["AvatarDialogComponent"]],
            providers: [_products_edit_product_edit_product_resolver__WEBPACK_IMPORTED_MODULE_15__["EditProductResolver"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PagesRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRouterModule", function() { return PagesRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/new-product/new-product.component */ "./src/app/pages/products/new-product/new-product.component.ts");
/* harmony import */ var _products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/edit-product/edit-product.component */ "./src/app/pages/products/edit-product/edit-product.component.ts");
/* harmony import */ var _products_edit_product_edit_product_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/edit-product/edit-product.resolver */ "./src/app/pages/products/edit-product/edit-product.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var pagesRoutes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], data: { animation: 'contact' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { animation: 'about' } },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], data: { animation: 'services' } },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], data: { animation: 'products' } },
    { path: 'products/newproduct', component: _products_new_product_new_product_component__WEBPACK_IMPORTED_MODULE_6__["NewProductComponent"], data: { animation: 'products' } },
    //{ path: 'products/editproduct', component: EditProductComponent, data: { animation: 'products' }},
    { path: 'products/editproduct/:id', component: _products_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_7__["EditProductComponent"], resolve: { data: _products_edit_product_edit_product_resolver__WEBPACK_IMPORTED_MODULE_8__["EditProductResolver"] } }
];
var PagesRouterModule = /** @class */ (function () {
    function PagesRouterModule() {
    }
    PagesRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PagesRouterModule);
    return PagesRouterModule;
}());



/***/ }),

/***/ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/avatar-dialog/avatar-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h5>Select Avatar</h5>\n    </div>\n  </div>\n  <div class=\"d-flex align-content-center flex-wrap\">\n    <div *ngFor=\"let avatar of avatars\">\n      <img class=\"img-thumbnail\" [src]=avatar.link (click)= \"close(avatar)\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/products/avatar-dialog/avatar-dialog.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n  width: 100px;\n  height: 100px;\n  margin: 4px; }\n"

/***/ }),

/***/ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/products/avatar-dialog/avatar-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: AvatarDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarDialogComponent", function() { return AvatarDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/firebase/firebase.service */ "./src/app/shared/services/firebase/firebase.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarDialogComponent = /** @class */ (function () {
    function AvatarDialogComponent(dialogRef, firebaseService) {
        this.dialogRef = dialogRef;
        this.firebaseService = firebaseService;
        this.avatars = new Array();
    }
    AvatarDialogComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AvatarDialogComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getAvatars()
            .subscribe(function (data) { return _this.avatars = data; });
    };
    AvatarDialogComponent.prototype.close = function (avatar) {
        this.dialogRef.close(avatar);
    };
    AvatarDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar-dialog',
            template: __webpack_require__(/*! ./avatar-dialog.component.html */ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.html"),
            styles: [__webpack_require__(/*! ./avatar-dialog.component.scss */ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], AvatarDialogComponent);
    return AvatarDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/edit-product/edit-product.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-product.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-page\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit User</li>\n    </ol>\n  </nav>\n  <div class=\"page-content\">\n    <div class=\"row\">\n      <div class=\"col col-md-4\">\n        <img class=\"img-avatar\" [src]=\"item.avatar\">\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Avatar</button>\n      </div>\n      <div class=\"col col-md-8\">\n\n        <form class=\"edit-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <mat-error *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\n              <mat-error *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\n              <mat-error *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"row submit-button-container\">\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\">Save</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"delete-button\" color=\"warn\" type=\"button\" (click)=\"delete()\">Delete</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/products/edit-product/edit-product.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-product.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-page {\n  padding: 20px 60px; }\n  .edit-page .page-content {\n    background-color: #FFF; }\n  .edit-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .edit-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .edit-page .page-content .edit-form {\n      padding: 20px; }\n  .edit-page .page-content .edit-form .submit-button-container {\n        justify-content: flex-end; }\n  .edit-page .page-content .edit-form .submit-button-container .submit-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .submit-button-container .delete-button {\n          width: 100%; }\n  .edit-page .page-content .edit-form .input-style {\n        width: 100%; }\n  .edit-page .page-content .edit-form .mat-error {\n        font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/pages/products/edit-product/edit-product.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/firebase/firebase.service */ "./src/app/shared/services/firebase/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(firebaseService, route, fb, router, dialog) {
        this.firebaseService = firebaseService;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.item = data.payload.data();
                _this.item.id = data.payload.id;
                _this.createForm();
            }
        });
    };
    EditProductComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: [this.item.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: [this.item.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: [this.item.age, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditProductComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.item.avatar = result.link;
            }
        });
    };
    EditProductComponent.prototype.onSubmit = function (value) {
        var _this = this;
        value.avatar = this.item.avatar;
        value.age = Number(value.age);
        this.firebaseService.updateUser(this.item.id, value)
            .then(function (res) {
            _this.router.navigate(['/home']);
        });
    };
    EditProductComponent.prototype.delete = function () {
        var _this = this;
        this.firebaseService.deleteUser(this.item.id)
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) {
            console.log(err);
        });
    };
    EditProductComponent.prototype.cancel = function () {
        this.router.navigate(['/home']);
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/pages/products/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/pages/products/edit-product/edit-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/edit-product/edit-product.resolver.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/products/edit-product/edit-product.resolver.ts ***!
  \**********************************************************************/
/*! exports provided: EditProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductResolver", function() { return EditProductResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/firebase/firebase.service */ "./src/app/shared/services/firebase/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProductResolver = /** @class */ (function () {
    function EditProductResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    EditProductResolver.prototype.resolve = function (route) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userId = route.paramMap.get('id');
            _this.firebaseService.getUser(userId)
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    EditProductResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], EditProductResolver);
    return EditProductResolver;
}());



/***/ }),

/***/ "./src/app/pages/products/new-product/new-product.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/products/new-product/new-product.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-page\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Create User</li>\n    </ol>\n  </nav>\n  <div class=\"page-content\">\n    <div class=\"row\">\n      <div class=\"col col-md-4\">\n        <img class=\"img-avatar\" src=\"{{avatarLink}}\">\n        <button mat-stroked-button class=\"change-img-button\" color=\"primary\" (click)=\"openDialog()\">Change Image</button>\n      </div>\n\n      <div class=\"col col-md-8\">\n\n        <form class=\"create-form\" [formGroup]=\"exampleForm\" novalidate (ngSubmit)=\"onSubmit(exampleForm.value)\">\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Name\" class=\"form-control\" formControlName=\"name\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <mat-error *ngIf=\"exampleForm.get('name').hasError(validation.type) && (exampleForm.get('name').dirty || exampleForm.get('name').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput placeholder=\"Surname\" class=\"form-control\" formControlName=\"surname\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.surname\">\n              <mat-error *ngIf=\"exampleForm.get('surname').hasError(validation.type) && (exampleForm.get('surname').dirty || exampleForm.get('surname').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"input-style\">\n              <input matInput type=\"number\" min=\"0\" max=\"100\" placeholder=\"Age\" class=\"form-control\" formControlName=\"age\">\n            </mat-form-field>\n            <ng-container *ngFor=\"let validation of validation_messages.age\">\n              <mat-error *ngIf=\"exampleForm.get('age').hasError(validation.type) && (exampleForm.get('age').dirty || exampleForm.get('age').touched)\">{{validation.message}}</mat-error>\n            </ng-container>\n          </div>\n\n          <div class=\"row submit-button-container\">\n            <div class=\"col-md-4\">\n              <button mat-raised-button class=\"submit-button\" color=\"primary\" type=\"submit\" [disabled]=\"!exampleForm.valid\">Create</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/products/new-product/new-product.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/products/new-product/new-product.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-page {\n  padding: 20px 60px; }\n  .create-page .page-content {\n    background-color: #FFF; }\n  .create-page .page-content .img-avatar {\n      border-radius: 50%;\n      width: 150px;\n      display: block;\n      margin: 20px auto; }\n  .create-page .page-content .change-img-button {\n      display: block;\n      margin: 0px auto; }\n  .create-page .page-content .create-form {\n      padding: 20px; }\n  .create-page .page-content .create-form .submit-button-container {\n        justify-content: flex-end; }\n  .create-page .page-content .create-form .submit-button-container .submit-button {\n          width: 100%; }\n  .create-page .page-content .create-form .input-style {\n        width: 100%; }\n  .create-page .page-content .create-form .mat-error {\n        font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/pages/products/new-product/new-product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/products/new-product/new-product.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductComponent", function() { return NewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../avatar-dialog/avatar-dialog.component */ "./src/app/pages/products/avatar-dialog/avatar-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/firebase/firebase.service */ "./src/app/shared/services/firebase/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(fb, dialog, router, firebaseService) {
        this.fb = fb;
        this.dialog = dialog;
        this.router = router;
        this.firebaseService = firebaseService;
        this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.validation_messages = {
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'age': [
                { type: 'required', message: 'Age is required.' },
            ]
        };
    }
    NewProductComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    NewProductComponent.prototype.createForm = function () {
        this.exampleForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    NewProductComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_avatar_dialog_avatar_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AvatarDialogComponent"], {
            height: '400px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.avatarLink = result.link;
            }
        });
    };
    NewProductComponent.prototype.resetFields = function () {
        this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
        this.exampleForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    };
    NewProductComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.firebaseService.createUser(value, this.avatarLink)
            .then(function (res) {
            _this.resetFields();
            _this.router.navigate(['/home']);
        });
    };
    NewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-product',
            template: __webpack_require__(/*! ./new-product.component.html */ "./src/app/pages/products/new-product/new-product.component.html"),
            styles: [__webpack_require__(/*! ./new-product.component.scss */ "./src/app/pages/products/new-product/new-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-1\">\n    <div class=\"input-group\">\n      \n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"searchValue\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search by name...\" (keyup)=\"searchByName()\">\n      <div class=\"input-group-append\">\n        \n        <span class=\"input-group-text\">\n         <ion-icon class=\"icon\" name=\"search\"></ion-icon> \n        </span>\n        \n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 filter-by-age\">\n    <div class=\"row\">\n      <div class=\"col-md-auto title\">\n        <span>Filter by age (older than):</span>\n      </div>\n      <div class=\"col\">\n        <span>0 </span>\n        <mat-slider\n          class=\"age-slider\"\n          max=\"100\"\n          min=\"0\"\n          step=\"1\"\n          thumbLabel=\"true\"\n          (ngModel)=\"ageValue\"\n          (change)=\"rangeChange($event)\">\n        </mat-slider> \n        <span> 100</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"list-group users-list\">\n  <div *ngFor=\"let item of items\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"row\">\n      <div class=\"col col-md-2 image-col\">\n        <img class=\"image\" [src]=\"item.payload.doc.data().avatar\">\n      </div>\n      <div class=\"col col-md-8 text-col\">\n        <h5 class=\"mb-1\">{{item.payload.doc.data().name}} {{item.payload.doc.data().surname}}</h5>\n        <small>Age: {{item.payload.doc.data().age}}</small>\n      </div>\n      <div class=\"col col-md-2 actions-col\">\n        <button class=\"btn btn-outline-primary action\" (click)=\"viewDetails(item)\" type=\"button\">\n          <ion-icon class=\"icon\" name=\"arrow-round-forward\"></ion-icon>\n         \n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter-by-age {\n  color: #6c757d; }\n  .filter-by-age .title {\n    -ms-grid-row-align: center;\n        align-self: center; }\n  .filter-by-age .age-slider {\n    width: 85%; }\n  .users-list {\n  padding: 40px 60px; }\n  .users-list .image-col {\n    text-align: center; }\n  .users-list .image-col .image {\n      border-radius: 50%;\n      width: 100px;\n      height: 100px; }\n  .users-list .text-col {\n    margin: auto 0px; }\n  .users-list .actions-col {\n    text-align: center;\n    margin: auto 0px; }\n  .users-list .actions-col .action {\n      line-height: 1; }\n  .users-list .actions-col .icon {\n      font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/firebase/firebase.service */ "./src/app/shared/services/firebase/firebase.service.ts");
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



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.ageValue = 0;
        this.searchValue = "";
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ProductsComponent.prototype.getData = function () {
        var _this = this;
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            _this.items = result;
            _this.age_filtered_items = result;
            _this.name_filtered_items = result;
        });
    };
    ProductsComponent.prototype.viewDetails = function (item) {
        console.log(item);
        this.router.navigate(['/auth/pages/products/editproduct/' + item.payload.doc.id]);
        //this.router.navigate(['/auth/pages/products/editproduct'])
    };
    ProductsComponent.prototype.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    ProductsComponent.prototype.searchByName = function () {
        var _this = this;
        var value = this.searchValue.toLowerCase();
        this.firebaseService.searchUsers(value)
            .subscribe(function (result) {
            _this.name_filtered_items = result;
            _this.items = _this.combineLists(result, _this.age_filtered_items);
        });
    };
    ProductsComponent.prototype.rangeChange = function (event) {
        var _this = this;
        this.firebaseService.searchUsersByAge(event.value)
            .subscribe(function (result) {
            _this.age_filtered_items = result;
            _this.items = _this.combineLists(result, _this.name_filtered_items);
        });
    };
    ProductsComponent.prototype.combineLists = function (a, b) {
        var result = [];
        a.filter(function (x) {
            return b.filter(function (x2) {
                if (x2.payload.doc.id == x.payload.doc.id) {
                    result.push(x2);
                }
            });
        });
        return result;
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxFlexFil fxFill class=\"components-container-gt-xs \" >\n\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" fxFlexFil fxFill fxLayoutGap=\"20px\">\n\n\t\t<div fxFlex=\"65\" fxLayout=\"column\" class=\"mat-elevation-z2 contact-list-container\" >\n\t\t\t\n\t\t\t<div fxFlex=\"10\" fxLayoutAlign=\"start center\"  fxLayout=\"row\">\n\t\t\t\t\n\t\t\t\t<h3 class=\"mat-headline\">Contacts</h3> \n\t\t\t\t<h3 class=\"mat-headline\">|</h3> \n\t\t\t\t<h6 class=\"mat-title\"> 1335 contacts</h6>\n\n\t\t\t</div>\n\n\t\t\t<mat-divider></mat-divider>\n\n\t\t\t<div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" >\n\t\t\t\t\t\n\t\t\t\t\t<div fxflex=\"70\" class=\"full\">\n\t\t\t\t\t\t<mat-form-field class=\"full\">\n\t\t\t\t\t\t    <input matInput placeholder=\"search\" >\n\t\t\t\t\t\t     <mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t  </mat-form-field>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div fxFlex=\"30\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\t\t\t\t\t\t<button mat-raised-button color=\"primary\">ADD EMPLOYEE</button>\n\t\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div fxFlex=\"10\" class=\"contact-list-header\" fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\">\n\n\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t<mat-checkbox  class=\"checkbox\"></mat-checkbox>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t<button mat-icon-button> <mat-icon>sort</mat-icon> </button>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t<button mat-icon-button> <mat-icon>delete</mat-icon> </button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div fxFlex=\"80\" fxLayoutAlign=\"end center\" >\n\t\t\t\t\t\n\t\t\t\t\t<button mat-raised-button >ADD TAGS</button>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div fxFlex=\"70\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" class=\"contact-list-container\">\n\n\t\t\t\t<div class=\"contact-list\">\n\t\t\t\t\t<div fxLayout=\"row\" *ngFor=\"let employee of employees\" fxLayoutAlign=\"space-around none\" class=\"mat-ripple\"  >\n\t\t\t\t\t\n\t\t\t\t\t\t<div fxFlex=\"10\" >\n\t\t\t\t\t\t\t<mat-checkbox  class=\"checkbox\"></mat-checkbox>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t\t\t<img class=\"avatar\" src=\"{{employee?.urlimage}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"50\">\n\t\t\t\t\t\t\t<h3 class=\"mat-subheading-1\" > {{employee?.name}} </h3>\n\t\t\t\t\t\t\t    <p class=\"mat-body-1\" >\n\t\t\t\t\t\t\t      {{employee?.description}} \n\t\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"20\" >\n\t\t\t\t\t\t\t<mat-chip-list>\n\t\t\t\t\t\t\t  <mat-chip>android</mat-chip>\n\t\t\t\t\t\t\t</mat-chip-list>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"10\" >\n\t\t\t\t\t\t\t<button mat-icon-button> <mat-icon>send</mat-icon> </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\n    \t\t</div>\n\n\n\t\t</div>\n\n\t\t<div fxFlex=\"35\" fxLayout=\"column\" class=\"mat-elevation-z2 contact-add\" >\n\n\t\t\t<div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n\t\t\t\t\t\n\t\t\t\t<h3  class=\"mat-headline\" fxFlex=\"80\">New Contact</h3> \n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxFlex=\"10\">\n\t\t\t\t\t<button mat-icon-button> <mat-icon>close</mat-icon> </button>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t<div fxFlex=\"25\"  fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n\t\t\t\t\n\t\t\t\t<div fxFlex=\"40\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"avatar\" src=\"assets/user-image.jpg\"/>\n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center start\" >\n\t\t\t\t\t<h3 class=\"mat-title\" >Sujith</h3>\n\t\t\t\t\t<h3 class=\"mat-body-2\" >Developer</h3>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div fxFlex=\"10\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"center start\" >\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t<input  matInput placeholder=\"phone\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t<input  matInput placeholder=\"Office\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div fxFlex=\"10\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.lt-lg=\"column\"  fxLayoutAlign=\"center start\"  >\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t            \t\t<input  matInput placeholder=\"skype\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t        <input  matInput placeholder=\"Email\">\n\t\t\t\t    </mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"end stretch\" >\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" >\n\t                \t<button mat-raised-button >CANCEL</button>\n\t\t\t            <button mat-raised-button color=\"primary\">SAVE</button>\n\t\t\t     </div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/services/services.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\n  width: 100%; }\n\n.contact-list-container {\n  background-color: white;\n  padding: 10px; }\n\n.contact-list-container .contact-list {\n    height: 400px;\n    overflow: auto; }\n\n.contact-list-container .contact-list div {\n      margin: 0; }\n\n.contact-list-container .contact-list h3 {\n      margin: 0; }\n\n.contact-list-container .contact-list p {\n      margin: 0; }\n\n.contact-list-container .contact-list .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n\n.contact-list-container .contact-list-header {\n    background-color: #eee;\n    padding: 10px; }\n\n.contact-list-container .contact-list-header div {\n      margin: auto; }\n\n.contact-add {\n  padding: 10px;\n  background: white; }\n\n.contact-add .avatar {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%; }\n\n.contact-add h3 {\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_ventas_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ventas/product.service */ "./src/app/shared/services/ventas/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(productService) {
        this.productService = productService;
        this.employees = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.getProductsData();
    };
    ServicesComponent.prototype.getProductsData = function () {
        // this.$subcriptionGetUnitSafeties = this.productService.retrieveDataForTable()
        var _this = this;
        this.productService.retrieveDataForTable()
            .subscribe(function (res) {
            console.log(res);
            var body = JSON.parse(res['_body']);
            var dataToSetup = body;
            console.log('products ...');
            _this.employees = dataToSetup;
            //console.log(this.arrDrivers);
            console.log(_this.employees);
            // this.gridOptions.api.setRowData(dataToSetup);
            // this.tableCount = dataToSetup.length;
            setTimeout(function () {
                // console.info("Resize columns");
                //   this.gridApi.sizeColumnsToFit();
            }, 200);
        }, function (err) {
            console.info(err);
            //this.gridOptions.api.setRowData([]);
            // this.gridApi.sizeColumnsToFit();
            alert("An error has occurred, check your browser console");
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/pages/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_ventas_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map