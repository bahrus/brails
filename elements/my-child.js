/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
/// <reference path="my-element.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Temp;
(function (Temp) {
    var MyChild = (function (_super) {
        __extends(MyChild, _super);
        function MyChild() {
            _super.apply(this, arguments);
        }
        __decorate([
            property(), 
            __metadata('design:type', Number)
        ], MyChild.prototype, "myProp", void 0);
        __decorate([
            property(), 
            __metadata('design:type', Temp.EmployeeInfo)
        ], MyChild.prototype, "myEmployee", void 0);
        MyChild = __decorate([
            component("my-child"),
            template("\n        <div>Child component</div>\n        <div>myProp: [[myProp]]</div>\n        <link href=\"my-element.html\"/>\n                "), 
            __metadata('design:paramtypes', [])
        ], MyChild);
        return MyChild;
    })(polymer.Base);
    MyChild.register();
})(Temp || (Temp = {}));
//# sourceMappingURL=my-child.js.map