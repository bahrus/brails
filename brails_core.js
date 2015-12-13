/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />
var brails;
(function (brails) {
    ;
    var fnSignature = 'return ';
    var fnSignatureLn = fnSignature.length;
    function getMemberName(fnString) {
        var iPosReturn = fnString.indexOf(fnSignature);
        fnString = fnString.substr(iPosReturn + fnSignatureLn);
        var iPosSemi = fnString.indexOf(';');
        fnString = fnString.substr(0, iPosSemi);
        var iPosDot = fnString.indexOf('.');
        fnString = fnString.substr(iPosDot + 1);
        return fnString;
    }
    function getName(getter) {
        return getMemberName(getter.toString());
    }
    brails.getName = getName;
    //export function metaBind(ob?: IMetaBindInfo) {
    //    return (target: polymer.Element, propertyKey: string) => {
    //        debugger;
    //    }
    //}
    function metaBind(bindInfo) {
        return function metaBind(target, propertyKey, descriptor) {
            var originalMethod = descriptor.value; // save a reference to the original method
            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.log("The method args are: " + JSON.stringify(args)); // pre
                var result = originalMethod.apply(this, args); // run and store the result
                console.log("The return value is: " + result); // post
                var htmlElement = this;
                var targetEls = htmlElement.querySelectorAll(bindInfo.elementSelector);
                for (var i = 0, n = targetEls.length; i < n; i++) {
                    var targetEl = targetEls[i];
                    targetEl.set('myProp', args[0]);
                }
                return result; // return the result of the original method
            };
            return descriptor;
        };
    }
    brails.metaBind = metaBind;
})(brails || (brails = {}));
//# sourceMappingURL=brails_core.js.map