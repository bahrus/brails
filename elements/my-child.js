/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
/// <reference path="my-element.ts"/>
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
    var MyChild = (function (_super) {
        __extends(MyChild, _super);
        function MyChild() {
            _super.apply(this, arguments);
        }
        __decorate([
            property()
        ], MyChild.prototype, "myProp");
        __decorate([
            property()
        ], MyChild.prototype, "myEmployee");
        MyChild = __decorate([
            component("my-child"),
            template("\n        <div>Child component</div>\n        <div>myProp: [[myProp]]]</div>\n                ")
        ], MyChild);
        return MyChild;
    })(polymer.Base);
    MyChild.register();
})(Temp || (Temp = {}));
//# sourceMappingURL=my-child.js.map