"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var image_gallery_routing_module_1 = require("./image-gallery-routing.module");
var image_gallery_component_1 = require("./image-gallery.component");
var image_gallery_service_1 = require("./image-gallery.service");
var image_filter_pipe_1 = require("./image-filter.pipe");
var image_detail_component_1 = require("./image-detail/image-detail.component");
var images_component_1 = require("./images/images.component");
var ImageGalleryModule = (function () {
    function ImageGalleryModule() {
    }
    ImageGalleryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        image_gallery_routing_module_1.ImageGalleryRoutingModule
                    ],
                    declarations: [image_gallery_component_1.ImageGalleryComponent, image_filter_pipe_1.ImageFilterPipe, image_detail_component_1.ImageDetailComponent, images_component_1.ImagesComponent],
                    providers: [image_gallery_service_1.ImageGalleryService]
                },] },
    ];
    /** @nocollapse */
    ImageGalleryModule.ctorParameters = function () { return []; };
    return ImageGalleryModule;
}());
exports.ImageGalleryModule = ImageGalleryModule;
//# sourceMappingURL=image-gallery.module.js.map