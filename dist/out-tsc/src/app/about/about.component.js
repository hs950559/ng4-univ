"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AboutComponent = (function () {
    function AboutComponent(meta, title) {
        title.setTitle('My About Page');
        meta.addTags([
            { name: 'author', content: 'Hemant' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, Angular CLI' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-about',
                    templateUrl: './about.component.html',
                    styleUrls: ['./about.component.scss']
                },] },
    ];
    /** @nocollapse */
    AboutComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Meta, },
        { type: platform_browser_1.Title, },
    ]; };
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map