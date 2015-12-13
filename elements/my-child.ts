/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
/// <reference path="my-element.ts"/>

module Temp{
    @component("my-child")
    @template   (`
        <div>I am here[[myProp]], and my name is [[myEmployee.Name]]</div>
                `)
    class MyChild extends polymer.Base {
        @property()
        myProp: string;

        @property()
        myEmployee: Temp.EmployeeInfo;

        attached(){
            //see https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#initialization-order
            this.async(function () {
                this.parentNode.not
                this.myProp =  this.parentNode.myProp;
                this.myEmployee = this.parentNode.myEmployee;
            });
        }


    }

    MyChild.register();

}
