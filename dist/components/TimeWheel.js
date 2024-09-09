import React from "react";
import { useEffect, useRef, useState } from "react";
export default function TimeWheel({ list, onChange, value }) {
    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startY, setStartY] = useState(0);
    const height = 28;
    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        "pageY" in e ? setStartY(e.pageY) : setStartY(e.touches[0].pageY);
    };
    const onDragEnd = () => {
        const { scrollTop } = scrollRef.current;
        const index = Math.round(scrollTop / height);
        setIsDrag(false);
        onChangeScroll(index);
    };
    const onDragMove = (e) => {
        if (isDrag) {
            let currentY = 0;
            if ("pageY" in e) {
                currentY = e.pageY;
            }
            else if ("touches" in e) {
                currentY = e.touches[0].pageY;
            }
            const deltaY = startY - currentY;
            scrollRef.current.scrollTop += deltaY;
            setStartY(currentY);
        }
    };
    const onChangeScroll = (index) => {
        const { clientHeight } = scrollRef.current;
        const itemList = scrollRef.current.querySelectorAll("li:not(.timer-empty)");
        const item = itemList[index];
        if (item) {
            const itemHeight = item.clientHeight;
            const itemOffsetTop = item.offsetTop;
            const scrollTop = itemOffsetTop - (clientHeight / 2 - itemHeight / 2);
            itemList.forEach((el) => el.classList.toggle("select-time", el === item));
            onChange(item.innerText);
            scrollRef.current.scrollTo({
                top: scrollTop,
                behavior: "smooth",
            });
        }
    };
    useEffect(() => {
        const items = scrollRef.current.querySelectorAll("li:not(.timer-empty)");
        const index = Array.from(items).findIndex((item) => item.textContent == (value === null || value === void 0 ? void 0 : value.toLowerCase()));
        onChangeScroll(index);
    }, [value]);
    return (React.createElement("ul", { className: "timer-picker-list", ref: scrollRef, onMouseDown: onDragStart, onMouseMove: onDragMove, onMouseUp: onDragEnd, onMouseLeave: onDragEnd, onTouchStart: onDragStart, onTouchMove: onDragMove, onTouchEnd: onDragEnd },
        React.createElement("li", { className: "timer-empty" }),
        React.createElement("li", { className: "timer-empty" }),
        list.map((ele, index) => {
            return (React.createElement("li", { key: index, onClick: () => onChangeScroll(index) }, ele));
        }),
        React.createElement("li", { className: "timer-empty" }),
        React.createElement("li", { className: "timer-empty" })));
}
//# sourceMappingURL=TimeWheel.js.map