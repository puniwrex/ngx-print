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
                setTimeout(() => window.close(), 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0QsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUtTLGdCQUFXLEdBQUcsRUFBRSxDQUFDOzs7Ozs7UUFxQmYsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7OztRQU92QixlQUFVLEdBQVcsR0FBRyxDQUFDOzs7Ozs7OztRQXNDMUIsb0JBQWUsR0FBRyxFQUFFLENBQUM7SUFnRi9CLENBQUM7Ozs7Ozs7O0lBL0dDLElBQ0ksVUFBVSxDQUFDLE1BQW9EO1FBQ2pFLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3RCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7Ozs7SUFZSSxpQkFBaUI7UUFDdEIsT0FBTyxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFlRCxJQUNJLGNBQWMsQ0FBQyxPQUFlOztZQUM1QixTQUFTOzs7O1FBQUcsV0FBVyxDQUFDLEVBQUUsQ0FDNUIsZ0RBQWdELFdBQVcsSUFBSSxDQUFBO1FBQ2pFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7a0JBQ3pCLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxLQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5RDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7Ozs7SUFPTyx3QkFBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUNPLGFBQWEsQ0FBQyxHQUFnQzs7Y0FDOUMsSUFBSSxHQUFhLEVBQUU7O2NBQ25CLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBQ25ELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFTTSxLQUFLOztZQUNOLGFBQWE7O1lBQUUsUUFBUTs7WUFBRSxNQUFNLEdBQUcsRUFBRTs7WUFBRSxLQUFLLEdBQUcsRUFBRTtRQUVwRCxJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEIsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7UUFFRCxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3ZFLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUscUNBQXFDLENBQUMsQ0FBQztRQUM1RSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDOzs7bUJBR1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQy9CLE1BQU07WUFDTixLQUFLOzs7WUFHTCxhQUFhOzs7Ozs7O21CQU9OLElBQUksQ0FBQyxVQUFVOzs7OztjQUtwQixDQUFDLENBQUM7UUFDWixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQXRKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OzZCQVVFLEtBQUs7eUJBT0wsS0FBSzs2QkFPTCxLQUFLO3lCQU9MLEtBQUs7eUJBT0wsS0FBSzs2QkFxQ0wsS0FBSztvQkFxQ0wsWUFBWSxTQUFDLE9BQU87Ozs7SUE3R3JCLHdDQUF3Qjs7Ozs7OztJQU94QiwyQ0FBZ0M7Ozs7Ozs7SUFPaEMsdUNBQTRCOzs7Ozs7O0lBTzVCLDJDQUFnQzs7Ozs7OztJQU9oQyx1Q0FBa0M7Ozs7Ozs7Ozs7SUFzQ2xDLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiYnV0dG9uW25neFByaW50XVwiXG59KVxuZXhwb3J0IGNsYXNzIE5neFByaW50RGlyZWN0aXZlIHtcblxuICBwdWJsaWMgX3ByaW50U3R5bGUgPSBbXTtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSBwcmludFNlY3Rpb25JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50VGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSB1c2VFeGlzdGluZ0NzcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIGRlbGF5IGluIG1pbGxpc2Vjb25kcyB0byBmb3JjZSB0aGUgcHJpbnQgZGlhbG9nIHRvIHdhaXQgYmVmb3JlIG9wZW5lZC4gRGVmYXVsdDogMFxuICAgKlxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHByaW50RGVsYXk6IG51bWJlciA9IDgwMDtcblxuICAvKipcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJpbnRTdHlsZSh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9KSB7XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0aGlzLl9wcmludFN0eWxlLnB1c2goKGtleSArIEpTT04uc3RyaW5naWZ5KHZhbHVlc1trZXldKSkucmVwbGFjZSgvWydcIl0rL2csICcnKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKTtcbiAgfVxuXG4vKipcbiAqXG4gKlxuICogQHJldHVybnMgdGhlIHN0cmluZyB0aGF0IGNyZWF0ZSB0aGUgc3R5bGVzaGVldCB3aGljaCB3aWxsIGJlIGluamVjdGVkXG4gKiBsYXRlciB3aXRoaW4gPHN0eWxlPjwvc3R5bGU+IHRhZy5cbiAqXG4gKiAtam9pbi9yZXBsYWNlIHRvIHRyYW5zZm9ybSBhbiBhcnJheSBvYmplY3RzIHRvIGNzcy1zdHlsZWQgc3RyaW5nXG4gKlxuICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gKi9cbnB1YmxpYyByZXR1cm5TdHlsZVZhbHVlcygpIHtcbiAgcmV0dXJuIGA8c3R5bGU+ICR7dGhpcy5fcHJpbnRTdHlsZS5qb2luKCcgJykucmVwbGFjZSgvLC9nLCc7Jyl9IDwvc3R5bGU+YDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAcmV0dXJucyBodG1sIGZvciB0aGUgZ2l2ZW4gdGFnXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgcHJpdmF0ZSBfc3R5bGVTaGVldEZpbGUgPSAnJztcblxuICAvKipcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXG4gICAqIEBwYXJhbSBjc3NMaXN0XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc3R5bGVTaGVldEZpbGUoY3NzTGlzdDogc3RyaW5nKSB7XG4gICAgbGV0IGxpbmtUYWdGbiA9IGNzc0ZpbGVOYW1lID0+XG4gICAgICBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2Nzc0ZpbGVOYW1lfVwiPmA7XG4gICAgaWYgKGNzc0xpc3QuaW5kZXhPZignLCcpICE9PSAtMSkge1xuICAgICAgY29uc3QgdmFsdWVBcnIgPSBjc3NMaXN0LnNwbGl0KCcsJyk7XG4gICAgICBmb3IgKGxldCB2YWwgb2YgdmFsdWVBcnIpIHtcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldEZpbGUgPSB0aGlzLl9zdHlsZVNoZWV0RmlsZSArIGxpbmtUYWdGbih2YWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IGxpbmtUYWdGbihjc3NMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgc3RyaW5nIHdoaWNoIGNvbnRhaW5zIHRoZSBsaW5rIHRhZ3MgY29udGFpbmluZyB0aGUgY3NzIHdoaWNoIHdpbGxcbiAgICogYmUgaW5qZWN0ZWQgbGF0ZXIgd2l0aGluIDxoZWFkPjwvaGVhZD4gdGFnLlxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSByZXR1cm5TdHlsZVNoZWV0TGlua1RhZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlU2hlZXRGaWxlO1xuICB9XG4gIHByaXZhdGUgZ2V0RWxlbWVudFRhZyh0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCk6IHN0cmluZyB7XG4gICAgY29uc3QgaHRtbDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaHRtbC5wdXNoKGVsZW1lbnRzW2luZGV4XS5vdXRlckhUTUwpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5qb2luKCdcXHJcXG4nKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XG4gICAgbGV0IHByaW50Q29udGVudHMsIHBvcHVwV2luLCBzdHlsZXMgPSAnJywgbGlua3MgPSAnJztcblxuICAgIGlmKHRoaXMudXNlRXhpc3RpbmdDc3MpIHtcbiAgICAgIHN0eWxlcyA9IHRoaXMuZ2V0RWxlbWVudFRhZygnc3R5bGUnKTtcbiAgICAgIGxpbmtzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdsaW5rJyk7XG4gICAgfVxuXG4gICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJpbnRTZWN0aW9uSWQpLmlubmVySFRNTDtcbiAgICBwb3B1cFdpbiA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiX2JsYW5rXCIsIFwidG9wPTAsbGVmdD0wLGhlaWdodD1hdXRvLHdpZHRoPWF1dG9cIik7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgIHBvcHVwV2luLmRvY3VtZW50LndyaXRlKGBcbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzLnByaW50VGl0bGUgPyB0aGlzLnByaW50VGl0bGUgOiBcIlwifTwvdGl0bGU+XG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlVmFsdWVzKCl9XG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlU2hlZXRMaW5rVGFncygpfVxuICAgICAgICAgICR7c3R5bGVzfVxuICAgICAgICAgICR7bGlua3N9XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgJHtwcmludENvbnRlbnRzfVxuICAgICAgICAgIDxzY3JpcHQgZGVmZXI+XG4gICAgICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyUHJpbnQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0cmlnZ2VyUHJpbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnByaW50KCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuY2xvc2UoKSwgMCk7XG4gICAgICAgICAgICAgIH0sICR7dGhpcy5wcmludERlbGF5fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyaWdnZXJQcmludCwgZmFsc2UpO1xuICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+YCk7XG4gICAgcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgfVxufVxuIl19