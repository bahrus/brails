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
                        const children = [];
                        let child = link.import.body.firstChild;
                        while (child) {
                            children.push(child);
                            //Polymer.dom(this).appendChild(child);
                            child = child.nextElementSibling;
                        }
                        for (let i = 0, n = children.length; i < n; i++) {
                            child = children[i];
                            Polymer.dom(this).appendChild(child);
                        }
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