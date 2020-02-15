/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from "@angular/core";
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 800;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = tslib_1.__values(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body>\n          " + printContents + "\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(() => {\n                window.print();\n              }, " + this.printDelay + ");\n            }\n            window.addEventListener('load', triggerPrint, false);\n          </script>\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: Directive, args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: Input }],
        printTitle: [{ type: Input }],
        useExistingCss: [{ type: Input }],
        printDelay: [{ type: Input }],
        printStyle: [{ type: Input }],
        styleSheetFile: [{ type: Input }],
        print: [{ type: HostListener, args: ['click',] }]
    };
    return NgxPrintDirective;
}());
export { NgxPrintDirective };
if (false) {
    /** @type {?} */
    NgxPrintDirective.prototype._printStyle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printSectionId;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printTitle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.useExistingCss;
    /**
     * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printDelay;
    /**
     *
     *
     * \@return html for the given tag
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     * @private
     */
    NgxPrintDirective.prototype._styleSheetFile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9EO0lBQUE7UUFLUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O1FBcUJmLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFPdkIsZUFBVSxHQUFXLEdBQUcsQ0FBQzs7Ozs7Ozs7UUFzQzFCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBK0UvQixDQUFDO0lBOUdDLHNCQUNJLHlDQUFVO1FBTmQ7Ozs7V0FJRzs7Ozs7Ozs7UUFDSCxVQUNlLE1BQW9EO1lBQ2pFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2hGO2FBQ0Y7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVIOzs7Ozs7Ozs7T0FTRzs7Ozs7Ozs7Ozs7SUFDSSw2Q0FBaUI7Ozs7Ozs7Ozs7SUFBeEI7UUFDRSxPQUFPLGFBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsY0FBVyxDQUFDO0lBQzFFLENBQUM7SUFlRCxzQkFDSSw2Q0FBYztRQUxsQjs7O1dBR0c7Ozs7OztR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Ozs7Ozs7SUFPNUIsMkNBQWdDOzs7Ozs7O0lBT2hDLHVDQUFrQzs7Ozs7Ozs7OztJQXNDbEMsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJidXR0b25bbmd4UHJpbnRdXCJcbn0pXG5leHBvcnQgY2xhc3MgTmd4UHJpbnREaXJlY3RpdmUge1xuXG4gIHB1YmxpYyBfcHJpbnRTdHlsZSA9IFtdO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50U2VjdGlvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcHJpbnRUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHVzZUV4aXN0aW5nQ3NzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRvIGZvcmNlIHRoZSBwcmludCBkaWFsb2cgdG8gd2FpdCBiZWZvcmUgb3BlbmVkLiBEZWZhdWx0OiAwXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcHJpbnREZWxheTogbnVtYmVyID0gODAwO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmludFN0eWxlKHZhbHVlczogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH0pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRoaXMuX3ByaW50U3R5bGUucHVzaCgoa2V5ICsgSlNPTi5zdHJpbmdpZnkodmFsdWVzW2tleV0pKS5yZXBsYWNlKC9bJ1wiXSsvZywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXR1cm5TdHlsZVZhbHVlcygpO1xuICB9XG5cbi8qKlxuICpcbiAqXG4gKiBAcmV0dXJucyB0aGUgc3RyaW5nIHRoYXQgY3JlYXRlIHRoZSBzdHlsZXNoZWV0IHdoaWNoIHdpbGwgYmUgaW5qZWN0ZWRcbiAqIGxhdGVyIHdpdGhpbiA8c3R5bGU+PC9zdHlsZT4gdGFnLlxuICpcbiAqIC1qb2luL3JlcGxhY2UgdG8gdHJhbnNmb3JtIGFuIGFycmF5IG9iamVjdHMgdG8gY3NzLXN0eWxlZCBzdHJpbmdcbiAqXG4gKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAqL1xucHVibGljIHJldHVyblN0eWxlVmFsdWVzKCkge1xuICByZXR1cm4gYDxzdHlsZT4gJHt0aGlzLl9wcmludFN0eWxlLmpvaW4oJyAnKS5yZXBsYWNlKC8sL2csJzsnKX0gPC9zdHlsZT5gO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEByZXR1cm5zIGh0bWwgZm9yIHRoZSBnaXZlbiB0YWdcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIF9zdHlsZVNoZWV0RmlsZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICogQHBhcmFtIGNzc0xpc3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZVNoZWV0RmlsZShjc3NMaXN0OiBzdHJpbmcpIHtcbiAgICBsZXQgbGlua1RhZ0ZuID0gY3NzRmlsZU5hbWUgPT5cbiAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzRmlsZU5hbWV9XCI+YDtcbiAgICBpZiAoY3NzTGlzdC5pbmRleE9mKCcsJykgIT09IC0xKSB7XG4gICAgICBjb25zdCB2YWx1ZUFyciA9IGNzc0xpc3Quc3BsaXQoJywnKTtcbiAgICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZUFycikge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IHRoaXMuX3N0eWxlU2hlZXRGaWxlICsgbGlua1RhZ0ZuKHZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0eWxlU2hlZXRGaWxlID0gbGlua1RhZ0ZuKGNzc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBzdHJpbmcgd2hpY2ggY29udGFpbnMgdGhlIGxpbmsgdGFncyBjb250YWluaW5nIHRoZSBjc3Mgd2hpY2ggd2lsbFxuICAgKiBiZSBpbmplY3RlZCBsYXRlciB3aXRoaW4gPGhlYWQ+PC9oZWFkPiB0YWcuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldEZpbGU7XG4gIH1cbiAgcHJpdmF0ZSBnZXRFbGVtZW50VGFnKHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwKTogc3RyaW5nIHtcbiAgICBjb25zdCBodG1sOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBodG1sLnB1c2goZWxlbWVudHNbaW5kZXhdLm91dGVySFRNTCk7XG4gICAgfVxuICAgIHJldHVybiBodG1sLmpvaW4oJ1xcclxcbicpO1xuICB9XG5cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICBsZXQgcHJpbnRDb250ZW50cywgcG9wdXBXaW4sIHN0eWxlcyA9ICcnLCBsaW5rcyA9ICcnO1xuXG4gICAgaWYodGhpcy51c2VFeGlzdGluZ0Nzcykge1xuICAgICAgc3R5bGVzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdzdHlsZScpO1xuICAgICAgbGlua3MgPSB0aGlzLmdldEVsZW1lbnRUYWcoJ2xpbmsnKTtcbiAgICB9XG5cbiAgICBwcmludENvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcmludFNlY3Rpb25JZCkuaW5uZXJIVE1MO1xuICAgIHBvcHVwV2luID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b3A9MCxsZWZ0PTAsaGVpZ2h0PWF1dG8sd2lkdGg9YXV0b1wiKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5vcGVuKCk7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoYFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXMucHJpbnRUaXRsZSA/IHRoaXMucHJpbnRUaXRsZSA6IFwiXCJ9PC90aXRsZT5cbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKX1cbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVTaGVldExpbmtUYWdzKCl9XG4gICAgICAgICAgJHtzdHlsZXN9XG4gICAgICAgICAgJHtsaW5rc31cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAke3ByaW50Q29udGVudHN9XG4gICAgICAgICAgPHNjcmlwdCBkZWZlcj5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyaWdnZXJQcmludChldmVudCkge1xuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyaWdnZXJQcmludCwgZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICAgICAgICAgICAgfSwgJHt0aGlzLnByaW50RGVsYXl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdHJpZ2dlclByaW50LCBmYWxzZSk7XG4gICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5gKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5jbG9zZSgpO1xuICB9XG59XG4iXX0=