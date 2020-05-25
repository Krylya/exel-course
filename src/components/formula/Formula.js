/* eslint-disable */
import {ExcelComponent} from '@core/ExcelComponent';
export class Formula extends ExcelComponent {
    constructor(root) {
        super(root, {
            name: 'formula',
            listeners: ['input']
        });
    }
    static className = 'excel-formula';

    toHTML() {
        return (`<div class="formula__info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false"></div>`)
    }

    onInput(event) {
        console.log('fornula onInput: ', event.target.textContent.trim());
    }
}