/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>

module brails.elements {
    //region abbreviations
    //#region abbreviations
    function rn(getter: brails.IGetter<BRInclude>) {
        return brails.getName<BRInclude>(getter);
    }
    const c = {
        'href': rn(o => o.href),
        'onHrefChange': rn(o => o.onHrefChange),
    };
    //#endregion
    //endregion

    @component('br-include', 'link')
    class BRInclude extends polymer.Base {
        @property({
            observer: c.onHrefChange
        })
        href: string;

        onHrefChange(newVal: string, oldVal: string) {
            const link = this.importHref(this.href,
                () => { //success
                    this.async(() => {
                        this.style.display = 'inline-block';
                        while (this.childElementCount > 0) {
                            Polymer.dom(this).removeChild(this.firstChild);
                        }

                        Polymer.dom(this).appendChild(link.import.body.firstChild);
                    }, 1);
                },
                () => { //failure
                    console.log("error loading " + this.href);
                }
            );
        }
    }

    BRInclude.register();
}