"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImageFilterPipe = (function () {
    function ImageFilterPipe() {
    }
    ImageFilterPipe.prototype.transform = function (items, criteria) {
        if (criteria === 'all') {
            return items;
        }
        else {
            return items.filter(function (item) {
                return item.category === criteria;
            });
        }
    };
    ImageFilterPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'imageFilter' },] },
    ];
    /** @nocollapse */
    ImageFilterPipe.ctorParameters = function () { return []; };
    return ImageFilterPipe;
}());
exports.ImageFilterPipe = ImageFilterPipe;
//# sourceMappingURL=image-filter.pipe.js.map