/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>

module Temp {

    const changeEmployeeName = 'changeEmployeeName';
    const incrementMyProp = 'incrementMyProp';

    export class EmployeeInfo{
        constructor(public Name: string, public Address: string ){

        }
    }

    @component("my-element")
    @template   (`

        <div test$="[[${MyElement.$myProp}]]">myProp = [[${MyElement.$myProp}]]</div>
        <div on-click="${incrementMyProp}">Increment myProp</div>
        <div on-click="${changeEmployeeName}">Change Employee Name</div>
        <div>Employee Name: {{myEmployee.Name}}</div>


        <my-child ></my-child>
                `)
    class MyElement extends polymer.Base {

        static $myProp = rn(o => o.myProp);
        @property({
            observer: MyElement.$onMyPropChange,
            notify: true
        })
        myProp = 42;  // direct initialization



        //static $incrementMyPropClickHandler = rn(o => o.incrementMyPropClickHandler);
        [incrementMyProp](e){
            this.myProp++;
        }

        //static $changeEmployeeName = rn(o => o.changeEmployeeName);
        [changeEmployeeName](e){
            this.set(MyElement.$myEmployee_Name, 'Austin');
        }

        static $onMyPropChange = rn(o => o.onMyPropChange);
        @brails.metaBind({
            elementSelector: 'my-child',
            setPath: MyElement.$myProp
        })
        onMyPropChange(newVal, oldVal){}

        myField = '123';

        static $myEmployee = rn(o => o.myEmployee);
        static $myEmployee_Name = rn(o => o.myEmployee.Name);

        @property()
        myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');

        @observe('myEmployee.*')
        onMyEmployeeChange(newVal, oldVal){
            debugger;
        }
    }

    function rn(getter: brails.IGetter<MyElement>){
        return brails.getName<MyElement>(getter);
    }



// after the element is defined, we register it in Polymer
    MyElement.register();
}