/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>

module Temp {

    //const changeEmployeeName = 'changeEmployeeName';
    //const incrementMyProp = 'incrementMyProp';
    //const onMyPropChange = 'onMyPropChange';
    //const test = 'test';

    export class EmployeeInfo{
        constructor(public Name: string, public Address: string ){

        }
    }
    //region abbreviations
    const m = MyElement.m; //methods
    const p = MyElement.p; //properties
    function rn(getter: brails.IGetter<MyElement>){
        return brails.getName<MyElement>(getter);
    }
    //endregion

    @component("my-element")
    @template   (`

        <div test$="[[${p.myProp}]]">myProp = [[${p.myProp}]]</div>
        <div on-click="${m.incrementMyProp}">Increment myProp</div>
        <div on-click="${m.changeEmployeeName}">Change Employee Name</div>
        <div>Employee Name: [[${p.myEmployee_Name}]]</div>


        <my-child ></my-child>
                `)
    class MyElement extends polymer.Base {
        //region abbreviations
        static m = {
            'incrementMyProp' : 'incrementMyProp',
            'changeEmployeeName': 'changeEmployeeName',
            'onMyPropChange': 'onMyPropChange',
        };

        static p = {
            'myProp': rn(o => o.myProp),
            'myEmployee': 'myEmployee',
            'myEmployee_Name': rn(o => o.myEmployee.Name),
        }
        //endregion

        @property({
            observer: MyElement.onMyPropChange,
            notify: true
        })
        myProp = 42;  // direct initialization




        [m.incrementMyProp](e){
            this.myProp++;
        }

        [m.changeEmployeeName](e){
            this.set(MyElement.p.myEmployee_Name, 'Austin');
        }


        @brails.metaBind({
            elementSelector: 'my-child',
            setPath: p.myProp
        })
        [m.onMyPropChange](newVal, oldVal){}

        myField = '123';

        //static myEmployee = rn(o => o.myEmployee);

        @property()
        myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');

        @observe(p.myEmployee +  '.*')
        onMyEmployeeChange(newVal, oldVal){
            debugger;
        }
    }





// after the element is defined, we register it in Polymer
    MyElement.register();

}