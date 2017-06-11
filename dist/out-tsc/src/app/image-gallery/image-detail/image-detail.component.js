"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_gallery_service_1 = require("../image-gallery.service");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var ImageDetailComponent = (function () {
    function ImageDetailComponent(title, imageService, route) {
        this.imageService = imageService;
        this.route = route;
        title.setTitle('Image Detail');
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        this.image = this.imageService.getImage(+this.route.snapshot.params['id']);
        console.log(this.image);
    };
    ImageDetailComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-image-detail',
                    templateUrl: './image-detail.component.html',
                    styleUrls: ['./image-detail.component.scss']
                },] },
    ];
    /** @nocollapse */
    ImageDetailComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Title, },
        { type: image_gallery_service_1.ImageGalleryService, },
        { type: router_1.ActivatedRoute, },
    ]; };
    return ImageDetailComponent;
}());
exports.ImageDetailComponent = ImageDetailComponent;
//# sourceMappingURL=image-detail.component.js.map