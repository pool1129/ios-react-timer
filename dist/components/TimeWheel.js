"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimeWheel;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
function TimeWheel({ list, onChange, value }) {
    const scrollRef = (0, react_2.useRef)(null);
    const [isDrag, setIsDrag] = (0, react_2.useState)(false);
    const [startY, setStartY] = (0, react_2.useState)(0);
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
    (0, react_2.useEffect)(() => {
        const items = scrollRef.current.querySelectorAll("li:not(.timer-empty)");
        const index = Array.from(items).findIndex((item) => item.textContent == (value === null || value === void 0 ? void 0 : value.toLowerCase()));
        onChangeScroll(index);
    }, [value]);
    return (react_1.default.createElement("ul", { className: "timer-picker-list", ref: scrollRef, onMouseDown: onDragStart, onMouseMove: onDragMove, onMouseUp: onDragEnd, onMouseLeave: onDragEnd, onTouchStart: onDragStart, onTouchMove: onDragMove, onTouchEnd: onDragEnd },
        react_1.default.createElement("li", { className: "timer-empty" }),
        react_1.default.createElement("li", { className: "timer-empty" }),
        list.map((ele, index) => {
            return (react_1.default.createElement("li", { key: index, onClick: () => onChangeScroll(index) }, ele));
        }),
        react_1.default.createElement("li", { className: "timer-empty" }),
        react_1.default.createElement("li", { className: "timer-empty" })));
}
//# sourceMappingURL=TimeWheel.js.map