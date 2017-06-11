"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_gallery_service_1 = require("../image-gallery.service");
var platform_browser_1 = require("@angular/platform-browser");
var ImagesComponent = (function () {
    function ImagesComponent(title, imageService) {
        this.imageService = imageService;
        this.filterBy = 'all';
        this.visibleImages = [];
        title.setTitle('Images');
        this.visibleImages = this.imageService.getImages();
    }
    ImagesComponent.prototype.ngOnChanges = function () {
        this.visibleImages = this.imageService.getImages();
    };
    ImagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-images',
                    templateUrl: './images.component.html',
                    styleUrls: ['./images.component.scss']
                },] },
    ];
    /** @nocollapse */
    ImagesComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Title, },
        { type: image_gallery_service_1.ImageGalleryService, },
    ]; };
    ImagesComponent.propDecorators = {
        'images': [{ type: core_1.Input },],
        'filterBy': [{ type: core_1.Input },],
    };
    return ImagesComponent;
}());
exports.ImagesComponent = ImagesComponent;
//# sourceMappingURL=images.component.js.map