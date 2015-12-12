module brails{
    interface IGetter<T> {
        (obj: T): any;
    };

    const fnSignature = 'return ';


    const fnSignatureLn = fnSignature.length;

    function getModuleName(fnString: string) : string {
        const iPosReturn = fnString.indexOf(fnSignature);
        fnString = fnString.substr(iPosReturn + fnSignatureLn);
        const iPosSemi = fnString.indexOf(';');
        fnString = fnString.substr(0, iPosSemi);
        const iPosDot = fnString.indexOf('.');
        fnString = fnString.substr(iPosDot + 1);
        return fnString;
    }

    export function getName<T>(getter: IGetter<T>){
        return getModuleName(getter.toString());
    }
}
