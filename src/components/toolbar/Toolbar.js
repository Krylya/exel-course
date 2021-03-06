/* eslint-disable quotes,indent */
import {ExcelComponent} from '@core/ExcelComponent';
export class Toolbar extends ExcelComponent {
    constructor(root) {
        super(root, {
            name: 'toolbar',
            listeners: ['click'],
        });
    }
    static className = 'excel-toolbar';
    toHTML() {
        return (`<div class="btn">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="btn">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="btn">
                <i class="material-icons">format_align_right</i>
            </div>
            <div class="btn">
                <i class="material-icons">format_bold</i>
            </div>
            <div class="btn">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="btn">
                <i class="material-icons">format_underline</i>
            </div>`)
    }

    onClick(event) {
        console.log(event.target);
    }
}
