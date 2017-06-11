"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var MyPage = (function () {
    function MyPage() {
    }
    MyPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    MyPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return MyPage;
}());
exports.MyPage = MyPage;
//# sourceMappingURL=app.po.js.map