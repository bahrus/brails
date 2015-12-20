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

    function rn(getter: brails.IGetter<MyElement>){
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
    //endregion
    @component("my-element")
    @template   (`

        <div test$="[[${c.myProp}]]">myProp = [[${c.myProp}]]</div>
        <div on-click="${c.incrementMyProp}">Increment myProp</div>
        <div on-click="${c.changeEmployeeName}">Change Employee Name</div>
        <div>Employee Name: [[${c.myEmployee_Name}]]</div>


        <my-child ></my-child>
                `)
    class MyElement extends polymer.Base {


        @property()
        myProp = 42;  // direct initialization




        incrementMyProp(e){
            //this.myProp++;
            this.set(c.myProp, this.myProp + 1);
        }

        changeEmployeeName(e){
            this.set(c.myEmployee_Name, 'Austin');
        }


        @brails.metaBind({
            elementSelector: 'my-child',
            setPath: c.myProp
        })
        @observe(c.myProp)
        onMyPropChange(newVal, oldVal){}

        myField = '123';



        @property()
        myEmployee = new EmployeeInfo('Sydney', '102 Wallaby Lane');

        @observe(c.myEmployee +  '.*')
        onMyEmployeeChange(newVal, oldVal){
            //debugger;
        }
    }





// after the element is defined, we register it in Polymer
    MyElement.register();

}