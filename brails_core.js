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
    function metaBind(bindInfo) {
        return function metaBind(target, propertyKey, descriptor) {
            if (!descriptor) {
                descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
            }
            var originalMethod = descriptor.value;
            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var result = originalMethod.apply(this, args); // run and store the result
                var htmlElement = this;
                var targetEls = htmlElement.querySelectorAll(bindInfo.elementSelector);
                for (var i = 0, n = targetEls.length; i < n; i++) {
                    var targetEl = targetEls[i];
                    targetEl.set(bindInfo.setPath, args[0]);
                }
                return result; // return the result of the original method
            };
            return descriptor;
        };
    }
    brails.metaBind = metaBind;
    function methodCallAction(action) {
        return function methodCallAction(target, propertyKey, descriptor) {
            if (!descriptor) {
                descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
            }
            var originalMethod = descriptor.value;
            var polymerContext = {
                element: target,
                action: action,
                methodName: propertyKey,
                methodDescriptor: descriptor
            };
            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                polymerContext.args = args;
                if (action.before) {
                    polymerContext.isBeforeMethod = true;
                    action.do(polymerContext);
                }
                if (!action.skipMethodCall) {
                    var result = originalMethod.apply(this, args); // run and store the result
                }
                if (action.after) {
                    polymerContext.isBeforeMethod = false;
                    action.do(polymerContext);
                }
                return result; // return the result of the original method
            };
            return descriptor;
        };
    }
    brails.methodCallAction = methodCallAction;
})(brails || (brails = {}));
//# sourceMappingURL=brails_core.js.map