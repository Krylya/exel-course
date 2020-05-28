import {$} from '@core/dom';

export function tableResizeHandler($root, event) {
    const $resizer = $(event.target);
    const $parentElem = $resizer.closest('[data-type="resizable"]');
    const coords = $parentElem.getCoords();
    const type = $resizer.data.resize;
    let value;

    document.onmousemove = (e) => {
        if (type === 'col') {
            const delta = e.pageX - (coords.left + coords.width);
            value = coords.width + delta;

            $resizer.css({
                opacity: 1,
                bottom: -1000 + 'px',
                right: -delta + 'px'
            })
        } else {
            const delta = e.pageY - coords.bottom;
            value = coords.height + delta;
            $resizer.css({
                opacity: 1,
                bottom: -delta + 'px',
                right: '-1000px'
            })
        }
    }

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        if (type === 'col') {
            $parentElem.css({width: value + 'px'})
            $root.findAll(`[data-col="${$parentElem.data.col}"]`)
                .forEach((el) => el.style.width = value + 'px');
        } else {
            $parentElem.css({height: value + 'px'})
        }
        $resizer.css({
            opacity: 0,
            bottom: 0,
            right: 0
        })
    }
}