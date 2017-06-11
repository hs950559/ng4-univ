"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ImageGalleryComponent = (function () {
    function ImageGalleryComponent(title) {
        title.setTitle('Image Gallery');
    }
    ImageGalleryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-image-gallery',
                    templateUrl: './image-gallery.component.html',
                    styleUrls: ['./image-gallery.component.scss']
                },] },
    ];
    /** @nocollapse */
    ImageGalleryComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Title, },
    ]; };
    return ImageGalleryComponent;
}());
exports.ImageGalleryComponent = ImageGalleryComponent;
//# sourceMappingURL=image-gallery.component.js.map