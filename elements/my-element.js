/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var Temp;
(function (Temp) {
    var MyElement = (function (_super) {
        __extends(MyElement, _super);
        function MyElement() {
            _super.apply(this, arguments);
            this.myProp = '42'; // direct initialization
            this.myField = '123';
        }
        MyElement.prototype.mySpanClickHandler = function (e) {
            debugger;
        };
        MyElement.$myProp = brails.getName(function (o) { return o.myProp; });
        MyElement.$mySpanClickHandler = brails.getName(function (o) { return o.mySpanClickHandler; });
        __decorate([
            property()
        ], MyElement.prototype, "myProp");
        MyElement = __decorate([
            component("my-element"),
            template("\n    <div test$=\"[[" + MyElement.$myProp + "]]\">this is a test[[" + MyElement.$myProp + "]]</div>\n    <span on-click=\"" + MyElement.$mySpanClickHandler + "\">iah[[myField]]</span>\n\n")
        ], MyElement);
        return MyElement;
    })(polymer.Base);
    // after the element is defined, we register it in Polymer
    MyElement.register();
})(Temp || (Temp = {}));
//# sourceMappingURL=my-element.js.map