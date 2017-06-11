"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageGalleryService = (function () {
    function ImageGalleryService() {
        this.visibleImages = [];
    }
    ImageGalleryService.prototype.getImages = function () {
        return this.visibleImages = IMAGES.slice(0);
    };
    ImageGalleryService.prototype.getImage = function (id) {
        return IMAGES.slice(0).find(function (image) { return image.id === id; });
    };
    ImageGalleryService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ImageGalleryService.ctorParameters = function () { return []; };
    return ImageGalleryService;
}());
exports.ImageGalleryService = ImageGalleryService;
var IMAGES = [
    { 'id': 1, 'category': 'cats', 'caption': 'View from the boat', 'url': 'assets/images/boat_01.jpeg' },
    { 'id': 2, 'category': 'cats', 'caption': 'Sailing the coast', 'url': 'assets/images/boat_02.jpeg' },
    { 'id': 3, 'category': 'cats', 'caption': 'The water was nice', 'url': 'assets/images/boat_03.jpeg' },
    { 'id': 4, 'category': 'cats', 'caption': 'Cool water cavern', 'url': 'assets/images/boat_04.jpeg' },
    { 'id': 6, 'category': 'camping', 'caption': 'Camping Trip 17', 'url': 'assets/images/camping_01.jpeg' },
    { 'id': 7, 'category': 'camping', 'caption': 'Kim and Jessie', 'url': 'assets/images/camping_02.jpeg' },
    { 'id': 8, 'category': 'camping', 'caption': 'View from the top', 'url': 'assets/images/camping_03.jpeg' },
    { 'id': 9, 'category': 'camping', 'caption': 'On the trail', 'url': 'assets/images/camping_04.jpeg' },
    { 'id': 10, 'category': 'camping', 'caption': 'Our camping spot', 'url': 'assets/images/camping_05.jpeg' },
    { 'id': 13, 'category': 'library', 'caption': 'Big library', 'url': 'assets/images/library_01.jpeg' },
    { 'id': 14, 'category': 'library', 'caption': 'Stacks', 'url': 'assets/images/library_02.jpeg' },
    { 'id': 15, 'category': 'library', 'caption': 'Saturday afternoon', 'url': 'assets/images/library_03.jpeg' },
    { 'id': 16, 'category': 'library', 'caption': 'Local library', 'url': 'assets/images/library_04.jpeg' },
    { 'id': 17, 'category': 'library', 'caption': 'Nice library', 'url': 'assets/images/library_05.jpeg' },
    { 'id': 17, 'category': 'library', 'caption': 'Nice library', 'url': 'assets/images/library_06.jpeg' },
    { 'id': 17, 'category': 'library', 'caption': 'Nice library', 'url': 'assets/images/library_07.jpeg' }
];
//# sourceMappingURL=image-gallery.service.js.map