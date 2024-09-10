import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useTime from "../hooks/useTime";
import "../styles/time.css";
import TimeWheel from "./TimeWheel";
export default function TimePicker(_a) {
    var _b;
    var value = _a.value, onChange = _a.onChange, hourType = _a.hourType, minType = _a.minType;
    var _c = useTime(), getHourList = _c.getHourList, getMinList = _c.getMinList;
    var _d = (_b = value === null || value === void 0 ? void 0 : value.match(/^(오전|오후)\s(\d{1,2}):(\d{2})$/i)) !== null && _b !== void 0 ? _b : [], period = _d[1], hours = _d[2], minutes = _d[3];
    return (_jsxs("div", { className: "timer-picker ".concat(hourType === 24 && "_24hours"), children: [hourType === 12 && (_jsx(TimeWheel, { list: ["오전", "오후"], value: period, onChange: function (value) { return onChange("".concat(value, " ").concat(hours, ":").concat(minutes)); } })), _jsx(TimeWheel, { list: getHourList(hourType), value: hours, onChange: function (value) { return onChange("".concat(period, " ").concat(value, ":").concat(minutes)); } }), _jsx(TimeWheel, { list: getMinList(minType), value: minutes, onChange: function (value) { return onChange("".concat(period, " ").concat(hours, ":").concat(value)); } }), _jsx("div", { className: "timer-picker-overlay" })] }));
}
