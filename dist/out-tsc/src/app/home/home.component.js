"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var HomeComponent = (function () {
    function HomeComponent(meta, title) {
        title.setTitle('My Home Page');
        meta.addTags([
            { name: 'author', content: 'Hemant' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, Angular CLI' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = function () { return [
    { type: platform_browser_1.Meta, },
    { type: platform_browser_1.Title, },
]; };
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map