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
    var changeEmployeeName = 'changeEmployeeName';
    var incrementMyProp = 'incrementMyProp';
    var EmployeeInfo = (function () {
        function EmployeeInfo(Name, Address) {
            this.Name = Name;
            this.Address = Address;
        }
        return EmployeeInfo;
    })();
    Temp.EmployeeInfo = EmployeeInfo;
    var MyElement = (function (_super) {
        __extends(MyElement, _super);
        function MyElement() {
            _super.apply(this, arguments);
            this.myProp = 42; // direct initialization
            this.myField = '123';
            this.myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');
        }
        //static $incrementMyPropClickHandler = rn(o => o.incrementMyPropClickHandler);
        MyElement.prototype[incrementMyProp] = function (e) {
            this.myProp++;
        };
        //static $changeEmployeeName = rn(o => o.changeEmployeeName);
        MyElement.prototype[changeEmployeeName] = function (e) {
            this.set(MyElement.$myEmployee_Name, 'Austin');
        };
        MyElement.prototype.onMyPropChange = function (newVal, oldVal) { };
        MyElement.prototype.onMyEmployeeChange = function (newVal, oldVal) {
            debugger;
        };
        MyElement.$myProp = rn(function (o) { return o.myProp; });
        MyElement.$onMyPropChange = rn(function (o) { return o.onMyPropChange; });
        MyElement.$myEmployee = rn(function (o) { return o.myEmployee; });
        MyElement.$myEmployee_Name = rn(function (o) { return o.myEmployee.Name; });
        __decorate([
            property({
                observer: MyElement.$onMyPropChange,
                notify: true
            })
        ], MyElement.prototype, "myProp");
        Object.defineProperty(MyElement.prototype, "onMyPropChange",
            __decorate([
                brails.metaBind({
                    elementSelector: 'my-child',
                    setPath: MyElement.$myProp
                })
            ], MyElement.prototype, "onMyPropChange", Object.getOwnPropertyDescriptor(MyElement.prototype, "onMyPropChange")));
        __decorate([
            property()
        ], MyElement.prototype, "myEmployee");
        Object.defineProperty(MyElement.prototype, "onMyEmployeeChange",
            __decorate([
                observe('myEmployee.*')
            ], MyElement.prototype, "onMyEmployeeChange", Object.getOwnPropertyDescriptor(MyElement.prototype, "onMyEmployeeChange")));
        MyElement = __decorate([
            component("my-element"),
            template("\n\n        <div test$=\"[[" + MyElement.$myProp + "]]\">myProp = [[" + MyElement.$myProp + "]]</div>\n        <div on-click=\"" + incrementMyProp + "\">Increment myProp</div>\n        <div on-click=\"" + changeEmployeeName + "\">Change Employee Name</div>\n        <div>Employee Name: {{myEmployee.Name}}</div>\n\n\n        <my-child ></my-child>\n                ")
        ], MyElement);
        return MyElement;
    })(polymer.Base);
    function rn(getter) {
        return brails.getName(getter);
    }
    // after the element is defined, we register it in Polymer
    MyElement.register();
})(Temp || (Temp = {}));
//# sourceMappingURL=my-element.js.map