/// <reference path="../bower_components/polymer-ts/polymer-ts.d.ts" />
/// <reference path="../brails_core.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var brails;
(function (brails) {
    var elements;
    (function (elements) {
        //region abbreviations
        //#region abbreviations
        function rn(getter) {
            return brails.getName(getter);
        }
        var c = {
            'href': rn(function (o) { return o.href; }),
            'onHrefChange': rn(function (o) { return o.onHrefChange; }),
        };
        //#endregion
        //endregion
        var BRInclude = (function (_super) {
            __extends(BRInclude, _super);
            function BRInclude() {
                _super.apply(this, arguments);
            }
            BRInclude.prototype.onHrefChange = function (newVal, oldVal) {
                var _this = this;
                var link = this.importHref(this.href, function () {
                    _this.async(function () {
                        _this.style.display = 'inline-block';
                        while (_this.childElementCount > 0) {
                            Polymer.dom(_this).removeChild(_this.firstChild);
                        }
                        Polymer.dom(_this).appendChild(link.import.body.firstChild);
                    }, 1);
                }, function () {
                    console.log("error loading " + _this.href);
                });
            };
            __decorate([
                property({
                    observer: c.onHrefChange
                }), 
                __metadata('design:type', String)
            ], BRInclude.prototype, "href", void 0);
            BRInclude = __decorate([
                component('br-include', 'link'), 
                __metadata('design:paramtypes', [])
            ], BRInclude);
            return BRInclude;
        })(polymer.Base);
        BRInclude.register();
    })(elements = brails.elements || (brails.elements = {}));
})(brails || (brails = {}));
//# sourceMappingURL=br-include.js.map