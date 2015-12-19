/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Temp;
(function (Temp) {
    //const changeEmployeeName = 'changeEmployeeName';
    //const incrementMyProp = 'incrementMyProp';
    //const onMyPropChange = 'onMyPropChange';
    //const test = 'test';
    class EmployeeInfo {
        constructor(Name, Address) {
            this.Name = Name;
            this.Address = Address;
        }
    }
    Temp.EmployeeInfo = EmployeeInfo;
    //region abbreviations
    const m = MyElement.m; //methods
    const p = MyElement.p; //properties
    function rn(getter) {
        return brails.getName(getter);
    }
    //endregion
    let MyElement = class extends polymer.Base {
        constructor(...args) {
            super(...args);
            //endregion
            this.myProp = 42; // direct initialization
            this.myField = '123';
            //static myEmployee = rn(o => o.myEmployee);
            this.myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');
        }
        [m.incrementMyProp](e) {
            this.myProp++;
        }
        [m.changeEmployeeName](e) {
            this.set(MyElement.p.myEmployee_Name, 'Austin');
        }
        [_a = m.onMyPropChange](newVal, oldVal) { }
        onMyEmployeeChange(newVal, oldVal) {
            debugger;
        }
    };
    //region abbreviations
    MyElement.m = {
        'incrementMyProp': 'incrementMyProp',
        'changeEmployeeName': 'changeEmployeeName',
        'onMyPropChange': 'onMyPropChange',
    };
    MyElement.p = {
        'myProp': rn(o => o.myProp),
        'myEmployee': 'myEmployee',
        'myEmployee_Name': rn(o => o.myEmployee.Name),
    };
    __decorate([
        property({
            observer: MyElement.onMyPropChange,
            notify: true
        })
    ], MyElement.prototype, "myProp", void 0);
    __decorate([
        brails.metaBind({
            elementSelector: 'my-child',
            setPath: p.myProp
        })
    ], MyElement.prototype, _a, null);
    __decorate([
        property()
    ], MyElement.prototype, "myEmployee", void 0);
    __decorate([
        observe(p.myEmployee + '.*')
    ], MyElement.prototype, "onMyEmployeeChange", null);
    MyElement = __decorate([
        component("my-element"),
        template(`

        <div test$="[[${p.myProp}]]">myProp = [[${p.myProp}]]</div>
        <div on-click="${m.incrementMyProp}">Increment myProp</div>
        <div on-click="${m.changeEmployeeName}">Change Employee Name</div>
        <div>Employee Name: [[${p.myEmployee_Name}]]</div>


        <my-child ></my-child>
                `)
    ], MyElement);
    // after the element is defined, we register it in Polymer
    MyElement.register();
    var _a;
})(Temp || (Temp = {}));
//# sourceMappingURL=my-element.js.map