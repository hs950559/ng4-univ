"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../../../src/app/image-gallery/image-gallery.module");
var i2 = require("./image-gallery.component.ngfactory");
var i3 = require("./images/images.component.ngfactory");
var i4 = require("./image-detail/image-detail.component.ngfactory");
var i5 = require("@angular/common");
var i6 = require("../../../../../src/app/image-gallery/image-gallery.service");
var i7 = require("@angular/router");
var i8 = require("../../../../../src/app/image-gallery/image-gallery-routing.module");
var i9 = require("../../../../../src/app/image-gallery/image-gallery.component");
var i10 = require("../../../../../src/app/image-gallery/images/images.component");
var i11 = require("../../../../../src/app/image-gallery/image-detail/image-detail.component");
exports.ImageGalleryModuleNgFactory = i0.ɵcmf(i1.ImageGalleryModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ImageGalleryComponentNgFactory, i3.ImagesComponentNgFactory, i4.ImageDetailComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i6.ImageGalleryService, i6.ImageGalleryService, []), i0.ɵmpd(512, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(512, i7.RouterModule, i7.RouterModule, [[2, i7.ɵa], [2,
                i7.Router]]), i0.ɵmpd(512, i8.ImageGalleryRoutingModule, i8.ImageGalleryRoutingModule, []), i0.ɵmpd(512, i1.ImageGalleryModule, i1.ImageGalleryModule, []),
        i0.ɵmpd(1024, i7.ROUTES, function () {
            return [[{ path: '', component: i9.ImageGalleryComponent, children: [{ path: '',
                                component: i10.ImagesComponent }, { path: ':id', component: i11.ImageDetailComponent }] }]];
        }, [])]);
});
//# sourceMappingURL=image-gallery.module.ngfactory.js.map