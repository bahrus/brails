/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />

module brails{
    import PolymerBase = polymer.PolymerBase;
    export interface IGetter<T> {
        (obj: T): any;
    };

    const fnSignature = 'return ';


    const fnSignatureLn = fnSignature.length;

    function getMemberName(fnString: string) : string {
        const iPosReturn = fnString.indexOf(fnSignature);
        fnString = fnString.substr(iPosReturn + fnSignatureLn);
        const iPosSemi = fnString.indexOf(';');
        fnString = fnString.substr(0, iPosSemi);
        const iPosDot = fnString.indexOf('.');
        fnString = fnString.substr(iPosDot + 1);
        return fnString;
    }

    export function getName<T>(getter: IGetter<T>){
        return getMemberName(getter.toString());
    }

    //export function getNames<T>(getters: {[key: string] : IGetter<T>}) : {[key: string] : string}{
    //    const returnObj: {[key: string] : string} = {};
    //    for(const key in getters){
    //        const getter = getters[key];
    //        returnObj[key] = getMemberName(getter.toString());
    //    }
    //    return returnObj;
    //}

    export interface IMetaBindInfo{
        elementSelector: string;
        setPath: string;
    }

    export function metaBind(bindInfo?: IMetaBindInfo){
        return function metaBind(target: polymer.Element, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
            if(!descriptor){
                descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
            }
            const originalMethod = descriptor.value;

            // NOTE: Do not use arrow syntax here. Use a function expression in
            // order to use the correct value of `this` in this method (see notes below)
            descriptor.value = function (...args:any[]) {
                var result = originalMethod.apply(this, args);               // run and store the result
                const htmlElement = <HTMLElement> this;
                const targetEls = htmlElement.querySelectorAll(bindInfo.elementSelector);
                for(let i = 0, n = targetEls.length; i < n; i++){
                    let targetEl = <PolymerBase> targetEls[i];
                    targetEl.set(bindInfo.setPath, args[0])
                }
                return result;                                               // return the result of the original method
            };

            return descriptor;
        }
    }

    export interface IAction{

    }

}
