import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
export default function TimeWheel(_a) {
    var list = _a.list, onChange = _a.onChange, value = _a.value;
    var scrollRef = useRef(null);
    var _b = useState(false), isDrag = _b[0], setIsDrag = _b[1];
    var _c = useState(0), startY = _c[0], setStartY = _c[1];
    var height = 28;
    var onDragStart = function (e) {
        e.preventDefault();
        setIsDrag(true);
        "pageY" in e ? setStartY(e.pageY) : setStartY(e.touches[0].pageY);
    };
    var onDragEnd = function () {
        var scrollTop = scrollRef.current.scrollTop;
        var index = Math.round(scrollTop / height);
        setIsDrag(false);
        onChangeScroll(index);
    };
    var onDragMove = function (e) {
        if (isDrag) {
            var currentY = 0;
            if ("pageY" in e) {
                currentY = e.pageY;
            }
            else if ("touches" in e) {
                currentY = e.touches[0].pageY;
            }
            var deltaY = startY - currentY;
            scrollRef.current.scrollTop += deltaY;
            setStartY(currentY);
        }
    };
    var onChangeScroll = function (index) {
        var clientHeight = scrollRef.current.clientHeight;
        var itemList = scrollRef.current.querySelectorAll("li:not(.timer-empty)");
        var item = itemList[index];
        if (item) {
            var itemHeight = item.clientHeight;
            var itemOffsetTop = item.offsetTop;
            var scrollTop = itemOffsetTop - (clientHeight / 2 - itemHeight / 2);
            itemList.forEach(function (el) { return el.classList.toggle("select-time", el === item); });
            onChange(item.innerText);
            scrollRef.current.scrollTo({
                top: scrollTop,
                behavior: "smooth",
            });
        }
    };
    useEffect(function () {
        var items = scrollRef.current.querySelectorAll("li:not(.timer-empty)");
        var index = Array.from(items).findIndex(function (item) { return item.textContent == (value === null || value === void 0 ? void 0 : value.toLowerCase()); });
        onChangeScroll(index);
    }, [value]);
    return (_jsxs("ul", { className: "timer-picker-list", ref: scrollRef, onMouseDown: onDragStart, onMouseMove: onDragMove, onMouseUp: onDragEnd, onMouseLeave: onDragEnd, onTouchStart: onDragStart, onTouchMove: onDragMove, onTouchEnd: onDragEnd, children: [_jsx("li", { className: "timer-empty" }), _jsx("li", { className: "timer-empty" }), list.map(function (ele, index) {
                return (_jsx("li", { onClick: function () { return onChangeScroll(index); }, children: ele }, index));
            }), _jsx("li", { className: "timer-empty" }), _jsx("li", { className: "timer-empty" })] }));
}
