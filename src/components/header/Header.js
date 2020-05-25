/* eslint-disable indent */
import {ExcelComponent} from '@core/ExcelComponent';
export class Header extends ExcelComponent {
    static className = 'excel-header';
    toHTML() {
        return (`<input class="excel-header__input" 
                    type="text" value="Новая таблица" />
            <div class="excel-header__btn-wrap">
                <div class="excel-header__btn">
                    <i class="material-icons">delete</i>
                </div>
                <div class="excel-header__btn">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>`)
    }
}
