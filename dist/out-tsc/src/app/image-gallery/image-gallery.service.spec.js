"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var image_gallery_service_1 = require("./image-gallery.service");
describe('ImageGalleryService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [image_gallery_service_1.ImageGalleryService]
        });
    });
    it('should be created', testing_1.inject([image_gallery_service_1.ImageGalleryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=image-gallery.service.spec.js.map