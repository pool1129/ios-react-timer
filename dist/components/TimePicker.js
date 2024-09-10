import React from "react";
import useTime from "../hooks/useTime";
import "../styles/time.css";
import TimeWheel from "./TimeWheel";
export default function TimePicker({ value, onChange, hourType, minType, }) {
    var _a;
    const { getHourList, getMinList } = useTime();
    const [, period, hours, minutes] = (_a = value === null || value === void 0 ? void 0 : value.match(/^(오전|오후)\s(\d{1,2}):(\d{2})$/i)) !== null && _a !== void 0 ? _a : [];
    return (React.createElement("div", { className: `timer-picker ${hourType === 24 && "_24hours"}` },
        hourType === 12 && (React.createElement(TimeWheel, { list: ["오전", "오후"], value: period, onChange: (value) => onChange(`${value} ${hours}:${minutes}`) })),
        React.createElement(TimeWheel, { list: getHourList(hourType), value: hours, onChange: (value) => onChange(`${period} ${value}:${minutes}`) }),
        React.createElement(TimeWheel, { list: getMinList(minType), value: minutes, onChange: (value) => onChange(`${period} ${hours}:${value}`) }),
        React.createElement("div", { className: "timer-picker-overlay" })));
}
//# sourceMappingURL=TimePicker.js.map