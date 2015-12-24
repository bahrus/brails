/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
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
    //const changeEmployeeName = 'changeEmployeeName';
    //const incrementMyProp = 'incrementMyProp';
    //const onMyPropChange = 'onMyPropChange';
    //const test = 'test';
    var EmployeeInfo = (function () {
        function EmployeeInfo(Name, Address) {
            this.Name = Name;
            this.Address = Address;
        }
        return EmployeeInfo;
    })();
    Temp.EmployeeInfo = EmployeeInfo;
    //region abbreviations
    //#region abbreviations
    function rn(getter) {
        return brails.getName(getter);
    }
    var c = {
        'myProp': rn(function (o) { return o.myProp; }),
        'myEmployee': rn(function (o) { return o.myEmployee; }),
        'myEmployee_Name': rn(function (o) { return o.myEmployee.Name; }),
        'incrementMyProp': rn(function (o) { return o.incrementMyProp; }),
        'changeEmployeeName': rn(function (o) { return o.changeEmployeeName; }),
        'onMyPropChange': rn(function (o) { return o.onMyPropChange; }),
    };
    var test = 'hello';
    var MyBaseElement = (function (_super) {
        __extends(MyBaseElement, _super);
        function MyBaseElement() {
            _super.apply(this, arguments);
        }
        MyBaseElement.prototype.incrementMyProp = function (e) {
            this.myProp++;
        };
        MyBaseElement.prototype.changeEmployeeName = function (e) {
            this.set(c.myEmployee_Name, 'Austin');
        };
        MyBaseElement.prototype.onMyPropChange = function (newVal, oldVal) { };
        MyBaseElement.prototype.onMyEmployeeChange = function (newVal, oldVal) { };
        __decorate([
            property({
                observer: c.onMyPropChange
            }), 
            __metadata('design:type', Number)
        ], MyBaseElement.prototype, "myProp", void 0);
        __decorate([
            property(), 
            __metadata('design:type', EmployeeInfo)
        ], MyBaseElement.prototype, "myEmployee", void 0);
        __decorate([
            observe(c.myEmployee + '.*'), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object]), 
            __metadata('design:returntype', void 0)
        ], MyBaseElement.prototype, "onMyEmployeeChange", null);
        return MyBaseElement;
    })(polymer.Base);
    //#endregion
    //endregion
    var MyElement = (function (_super) {
        __extends(MyElement, _super);
        function MyElement() {
            _super.apply(this, arguments);
            this.myProp = 42; // direct initialization
            this.myField = '123';
            this.myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');
        }
        MyElement.prototype.onMyPropChange = function (newVal, oldVal) {
            _super.prototype.onMyPropChange.call(this, newVal, oldVal);
        };
        MyElement.prototype.onMyEmployeeChange = function (newVal, oldVal) { };
        __decorate([
            // direct initialization
            brails.metaBind({
                elementSelector: 'my-child',
                setPath: c.myProp
            }), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object]), 
            __metadata('design:returntype', void 0)
        ], MyElement.prototype, "onMyPropChange", null);
        __decorate([
            brails.methodCallAction({
                do: function (pc) {
                    console.log(pc);
                },
                before: true
            }), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [Object, Object]), 
            __metadata('design:returntype', void 0)
        ], MyElement.prototype, "onMyEmployeeChange", null);
        MyElement = __decorate([
            component("my-element"),
            template("\n\n        <div test$=\"[[" + c.myProp + "]]\">myProp = [[" + c.myProp + "]]</div>\n        <div on-click=\"" + c.incrementMyProp + "\">Increment myProp</div>\n        <div on-click=\"" + c.changeEmployeeName + "\">Change Employee Name</div>\n        <div>Employee Name: [[" + c.myEmployee_Name + "]]</div>\n\n\n        <my-child></my-child>\n                "), 
            __metadata('design:paramtypes', [])
        ], MyElement);
        return MyElement;
    })(MyBaseElement);
    // after the element is defined, we register it in Polymer
    MyElement.register();
})(Temp || (Temp = {}));
//# sourceMappingURL=my-element.js.map