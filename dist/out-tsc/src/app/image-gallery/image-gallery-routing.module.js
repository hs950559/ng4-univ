"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var image_gallery_component_1 = require("./image-gallery.component");
var image_detail_component_1 = require("./image-detail/image-detail.component");
var images_component_1 = require("./images/images.component");
var routes = [
    {
        path: '',
        component: image_gallery_component_1.ImageGalleryComponent,
        children: [
            {
                path: '',
                component: images_component_1.ImagesComponent
            },
            {
                path: ':id',
                component: image_detail_component_1.ImageDetailComponent
            }
        ]
    }
];
var ImageGalleryRoutingModule = (function () {
    function ImageGalleryRoutingModule() {
    }
    ImageGalleryRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [router_1.RouterModule.forChild(routes)],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    ImageGalleryRoutingModule.ctorParameters = function () { return []; };
    return ImageGalleryRoutingModule;
}());
exports.ImageGalleryRoutingModule = ImageGalleryRoutingModule;
//# sourceMappingURL=image-gallery-routing.module.js.map