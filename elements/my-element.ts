/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>

module Temp {








    @component("my-element")
    @template(`
    <div test$="[[${MyElement.$myProp}]]">this is a test[[${MyElement.$myProp}]]</div>
    <span on-click="${MyElement.$mySpanClickHandler}">iah[[myField]]</span>

`)
    class MyElement extends polymer.Base {

        public static $myProp = brails.getName<MyElement>(o => o.myProp);
        @property()
        myProp = '42';  // direct initialization

        public static $mySpanClickHandler = brails.getName<MyElement>(o => o.mySpanClickHandler);
        mySpanClickHandler(e){
            debugger;
        }

        myField = '123';

    }

// after the element is defined, we register it in Polymer
    MyElement.register();
}