/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>

module Temp {

    export class EmployeeInfo{
        constructor(public Name: string, public Address: string ){

        }
    }

    @component("my-element")
    @template   (`

        <div test$="[[${MyElement.$myProp}]]">this is a test[[${MyElement.$myProp}]]</div>
        <div>Employee Name: {{myEmployee.Name}}
        </div>
        <span on-click="${MyElement.$mySpanClickHandler}">iah[[myField]]</span>

        <my-child></my-child>
                `)
    class MyElement extends polymer.Base {

        static $myProp = rn(o => o.myProp);
        @property({
            observer: MyElement.$onMyPropChange,
            notify: true
        })
        myProp = 42;  // direct initialization



        static $mySpanClickHandler = rn(o => o.mySpanClickHandler);
        mySpanClickHandler(e){
            this.myProp++;
            this.myEmployee.Name = "Austin";
            this.notifyPath('myEmployee.Name', this.myEmployee.Name);
            console.log(this.myEmployee);
        }

        static $onMyPropChange = rn(o => o.onMyPropChange);
        @brails.metaBind({
            elementSelector: 'my-child'
        })
        onMyPropChange(newVal, oldVal){

        }

        myField = '123';

        static $myEmployee = rn(o => o.myEmployee);
        @property()
        myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');


    }

    function rn(getter: brails.IGetter<MyElement>){
        return brails.getName<MyElement>(getter);
    }



// after the element is defined, we register it in Polymer
    MyElement.register();
}