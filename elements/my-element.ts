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

    function rn(getter: brails.IGetter<MyBaseElement>){
        return brails.getName<MyElement>(getter);
    }

    const c = {
        'myProp': rn(o => o.myProp),
        'myEmployee': rn(o => o.myEmployee),
        'myEmployee_Name': rn(o => o.myEmployee.Name),
        'incrementMyProp': rn(o => o.incrementMyProp),
        'changeEmployeeName': rn(o => o.changeEmployeeName),
        'onMyPropChange': rn(o => o.onMyPropChange),
    };

    const test = 'hello';

    class MyBaseElement extends polymer.Base {

        @property({
            observer: c.onMyPropChange
        })
        myProp: number;
        incrementMyProp(e) {
            this.myProp++;
        }

        changeEmployeeName(e) {
            this.set(c.myEmployee_Name, 'Austin');
        }
        onMyPropChange(newVal, oldVal) { }

        @property()
        myEmployee: EmployeeInfo;

        @observe(c.myEmployee + '.*')
        @brails.methodCallAction({
            do: pc => {
                console.log(pc);
            },
            before: true
        })
        onMyEmployeeChange(newVal, oldVal) {}
    }

    //endregion
    @component("my-element")
    @template(`

        <div test$="[[${c.myProp}]]">myProp = [[${c.myProp}]]</div>
        <div on-click="${c.incrementMyProp}">Increment myProp</div>
        <div on-click="${c.changeEmployeeName}">Change Employee Name</div>
        <div>Employee Name: [[${c.myEmployee_Name}]]</div>


        <my-child></my-child>
                `)
    class MyElement extends MyBaseElement{


        
        myProp = 42;  // direct initialization



        @brails.metaBind({
            elementSelector: 'my-child',
            setPath: c.myProp
        })
        onMyPropChange(newVal, oldVal) {
            super.onMyPropChange(newVal, oldVal);
        }

        myField = '123';


        
        myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');

        

        
    }





// after the element is defined, we register it in Polymer
    MyElement.register();

}