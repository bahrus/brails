var brails;
(function (brails) {
    ;
    var fnSignature = 'return ';
    var fnSignatureLn = fnSignature.length;
    function getModuleName(fnString) {
        var iPosReturn = fnString.indexOf(fnSignature);
        fnString = fnString.substr(iPosReturn + fnSignatureLn);
        var iPosSemi = fnString.indexOf(';');
        fnString = fnString.substr(0, iPosSemi);
        var iPosDot = fnString.indexOf('.');
        fnString = fnString.substr(iPosDot + 1);
        return fnString;
    }
    function getName(getter) {
        return getModuleName(getter.toString());
    }
    brails.getName = getName;
})(brails || (brails = {}));
//# sourceMappingURL=brails_core.js.map