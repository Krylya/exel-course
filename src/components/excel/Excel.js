/* eslint-disable */
import {$} from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
        this.componentsInstanse = null;
    }

    getRoot() {
        const $root = $.create('div', 'excel')

        this.componentsInstanse = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component;
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot());
        this.componentsInstanse.forEach(component => {
            component.init();
        })
    }
}