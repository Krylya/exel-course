import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';
import {createTable} from './table.template';
import {tableResizeHandler} from "@/components/table/table.resize";
import {shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }
    static className = 'excel-table';
    toHTML() {
      return createTable();
    }

    onMousedown(event) {
      if (shouldResize(event)) {
        tableResizeHandler(this.$root, event);
      }
    }

    onMousemove(event) {
      const delta = (this.coord.left + this.coord.width) - event.clientX;
      this.currentElem.style.width = this.coord.width - delta + 'px';
    }
}
