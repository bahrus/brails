/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />
var brails;
(function (brails) {
    ;
    const fnSignature = 'return ';
    const fnSignatureLn = fnSignature.length;
    function getMemberName(fnString) {
        const iPosReturn = fnString.indexOf(fnSignature);
        fnString = fnString.substr(iPosReturn + fnSignatureLn);
        const iPosSemi = fnString.indexOf(';');
        fnString = fnString.substr(0, iPosSemi);
        const iPosDot = fnString.indexOf('.');
        fnString = fnString.substr(iPosDot + 1);
        return fnString;
    }
    function getName(getter) {
        return getMemberName(getter.toString());
    }
    brails.getName = getName;
    function metaBind(bindInfo) {
        return function metaBind(target, propertyKey, descriptor) {
            var originalMethod = descriptor.value; // save a reference to the original method
            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function (...args) {
                var result = originalMethod.apply(this, args); // run and store the result
                const htmlElement = this;
                const targetEls = htmlElement.querySelectorAll(bindInfo.elementSelector);
                for (let i = 0, n = targetEls.length; i < n; i++) {
                    const targetEl = targetEls[i];
                    targetEl.set(bindInfo.setPath, args[0]);
                }
                return result; // return the result of the original method
            };
            return descriptor;
        };
    }
    brails.metaBind = metaBind;
})(brails || (brails = {}));
//# sourceMappingURL=brails_core.js.map