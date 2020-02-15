/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from "@angular/core";
export class NgxPrintDirective {
    constructor() {
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
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
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
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        cssFileName => `<link rel="stylesheet" type="text/css" href="${cssFileName}">`);
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(() => {
                window.print();
              }, ${this.printDelay});
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0QsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUtTLGdCQUFXLEdBQUcsRUFBRSxDQUFDOzs7Ozs7UUFxQmYsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7OztRQU92QixlQUFVLEdBQVcsR0FBRyxDQUFDOzs7Ozs7OztRQXNDMUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUErRS9CLENBQUM7Ozs7Ozs7O0lBOUdDLElBQ0ksVUFBVSxDQUFDLE1BQW9EO1FBQ2pFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3RCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7SUFZSSxpQkFBaUI7UUFDdEIsT0FBTyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFlRCxJQUNJLGNBQWMsQ0FBQyxPQUFlOztZQUM1QixTQUFTOzs7O1FBQUcsV0FBVyxDQUFDLEVBQUUsQ0FDNUIsZ0RBQWdELFdBQVcsSUFBSSxDQUFBO1FBQ2pFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7a0JBQ3pCLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxLQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5RDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7Ozs7SUFPTyx3QkFBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUNPLGFBQWEsQ0FBQyxHQUFnQzs7Y0FDOUMsSUFBSSxHQUFhLEVBQUU7O2NBQ25CLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQ25ELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFTTSxLQUFLOztZQUNOLGFBQWE7O1lBQUUsUUFBUTs7WUFBRSxNQUFNLEdBQUcsRUFBRTs7WUFBRSxLQUFLLEdBQUcsRUFBRTtRQUVwRCxJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEIsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7UUFFRCxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUscUNBQXFDLENBQUMsQ0FBQztRQUM1RSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDOzs7bUJBR1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQy9CLE1BQU07WUFDTixLQUFLOzs7WUFHTCxhQUFhOzs7Ozs7bUJBTU4sSUFBSSxDQUFDLFVBQVU7Ozs7O2NBS3BCLENBQUMsQ0FBQztRQUNaLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7O1lBckpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7NkJBVUUsS0FBSzt5QkFPTCxLQUFLOzZCQU9MLEtBQUs7eUJBT0wsS0FBSzt5QkFPTCxLQUFLOzZCQXFDTCxLQUFLO29CQXFDTCxZQUFZLFNBQUMsT0FBTzs7OztJQTdHckIsd0NBQXdCOzs7Ozs7O0lBT3hCLDJDQUFnQzs7Ozs7OztJQU9oQyx1Q0FBNEI7Ozs7Ozs7SUFPNUIsMkNBQWdDOzs7Ozs7O0lBT2hDLHVDQUFrQzs7Ozs7Ozs7OztJQXNDbEMsNENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJidXR0b25bbmd4UHJpbnRdXCJcbn0pXG5leHBvcnQgY2xhc3MgTmd4UHJpbnREaXJlY3RpdmUge1xuXG4gIHB1YmxpYyBfcHJpbnRTdHlsZSA9IFtdO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50U2VjdGlvbklkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcHJpbnRUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHVzZUV4aXN0aW5nQ3NzID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRvIGZvcmNlIHRoZSBwcmludCBkaWFsb2cgdG8gd2FpdCBiZWZvcmUgb3BlbmVkLiBEZWZhdWx0OiAwXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQElucHV0KCkgcHJpbnREZWxheTogbnVtYmVyID0gODAwO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmludFN0eWxlKHZhbHVlczogeyBba2V5OiBzdHJpbmddOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IH0pIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRoaXMuX3ByaW50U3R5bGUucHVzaCgoa2V5ICsgSlNPTi5zdHJpbmdpZnkodmFsdWVzW2tleV0pKS5yZXBsYWNlKC9bJ1wiXSsvZywgJycpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXR1cm5TdHlsZVZhbHVlcygpO1xuICB9XG5cbi8qKlxuICpcbiAqXG4gKiBAcmV0dXJucyB0aGUgc3RyaW5nIHRoYXQgY3JlYXRlIHRoZSBzdHlsZXNoZWV0IHdoaWNoIHdpbGwgYmUgaW5qZWN0ZWRcbiAqIGxhdGVyIHdpdGhpbiA8c3R5bGU+PC9zdHlsZT4gdGFnLlxuICpcbiAqIC1qb2luL3JlcGxhY2UgdG8gdHJhbnNmb3JtIGFuIGFycmF5IG9iamVjdHMgdG8gY3NzLXN0eWxlZCBzdHJpbmdcbiAqXG4gKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAqL1xucHVibGljIHJldHVyblN0eWxlVmFsdWVzKCkge1xuICByZXR1cm4gYDxzdHlsZT4gJHt0aGlzLl9wcmludFN0eWxlLmpvaW4oJyAnKS5yZXBsYWNlKC8sL2csJzsnKX0gPC9zdHlsZT5gO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEByZXR1cm5zIGh0bWwgZm9yIHRoZSBnaXZlbiB0YWdcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBwcml2YXRlIF9zdHlsZVNoZWV0RmlsZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICogQHBhcmFtIGNzc0xpc3RcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzdHlsZVNoZWV0RmlsZShjc3NMaXN0OiBzdHJpbmcpIHtcbiAgICBsZXQgbGlua1RhZ0ZuID0gY3NzRmlsZU5hbWUgPT5cbiAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzRmlsZU5hbWV9XCI+YDtcbiAgICBpZiAoY3NzTGlzdC5pbmRleE9mKCcsJykgIT09IC0xKSB7XG4gICAgICBjb25zdCB2YWx1ZUFyciA9IGNzc0xpc3Quc3BsaXQoJywnKTtcbiAgICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZUFycikge1xuICAgICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IHRoaXMuX3N0eWxlU2hlZXRGaWxlICsgbGlua1RhZ0ZuKHZhbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0eWxlU2hlZXRGaWxlID0gbGlua1RhZ0ZuKGNzc0xpc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBzdHJpbmcgd2hpY2ggY29udGFpbnMgdGhlIGxpbmsgdGFncyBjb250YWluaW5nIHRoZSBjc3Mgd2hpY2ggd2lsbFxuICAgKiBiZSBpbmplY3RlZCBsYXRlciB3aXRoaW4gPGhlYWQ+PC9oZWFkPiB0YWcuXG4gICAqXG4gICAqL1xuICBwcml2YXRlIHJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpIHtcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldEZpbGU7XG4gIH1cbiAgcHJpdmF0ZSBnZXRFbGVtZW50VGFnKHRhZzoga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwKTogc3RyaW5nIHtcbiAgICBjb25zdCBodG1sOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBodG1sLnB1c2goZWxlbWVudHNbaW5kZXhdLm91dGVySFRNTCk7XG4gICAgfVxuICAgIHJldHVybiBodG1sLmpvaW4oJ1xcclxcbicpO1xuICB9XG5cblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcbiAgICBsZXQgcHJpbnRDb250ZW50cywgcG9wdXBXaW4sIHN0eWxlcyA9ICcnLCBsaW5rcyA9ICcnO1xuXG4gICAgaWYodGhpcy51c2VFeGlzdGluZ0Nzcykge1xuICAgICAgc3R5bGVzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdzdHlsZScpO1xuICAgICAgbGlua3MgPSB0aGlzLmdldEVsZW1lbnRUYWcoJ2xpbmsnKTtcbiAgICB9XG5cbiAgICBwcmludENvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wcmludFNlY3Rpb25JZCkuaW5uZXJIVE1MO1xuICAgIHBvcHVwV2luID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b3A9MCxsZWZ0PTAsaGVpZ2h0PWF1dG8sd2lkdGg9YXV0b1wiKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5vcGVuKCk7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoYFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXMucHJpbnRUaXRsZSA/IHRoaXMucHJpbnRUaXRsZSA6IFwiXCJ9PC90aXRsZT5cbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKX1cbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVTaGVldExpbmtUYWdzKCl9XG4gICAgICAgICAgJHtzdHlsZXN9XG4gICAgICAgICAgJHtsaW5rc31cbiAgICAgICAgPC9oZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICAke3ByaW50Q29udGVudHN9XG4gICAgICAgICAgPHNjcmlwdCBkZWZlcj5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyaWdnZXJQcmludChldmVudCkge1xuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyaWdnZXJQcmludCwgZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcbiAgICAgICAgICAgICAgfSwgJHt0aGlzLnByaW50RGVsYXl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdHJpZ2dlclByaW50LCBmYWxzZSk7XG4gICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5gKTtcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5jbG9zZSgpO1xuICB9XG59XG4iXX0=