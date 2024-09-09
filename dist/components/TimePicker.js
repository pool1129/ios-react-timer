"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TimePicker;
const react_1 = __importDefault(require("react"));
const useTime_1 = __importDefault(require("../hooks/useTime"));
require("../styles/time.css");
const TimeWheel_1 = __importDefault(require("./TimeWheel"));
function TimePicker({ value, onChange, hourType, minType, }) {
    var _a;
    const { getHourList, getMinList } = (0, useTime_1.default)();
    const [, period, hours, minutes] = (_a = value === null || value === void 0 ? void 0 : value.match(/^(오전|오후)\s(\d{1,2}):(\d{2})$/i)) !== null && _a !== void 0 ? _a : [];
    return (react_1.default.createElement("div", { className: `timer-picker ${hourType === 24 && "_24hours"}` },
        hourType === 12 && (react_1.default.createElement(TimeWheel_1.default, { list: ["오전", "오후"], value: period, onChange: (value) => onChange(`${value} ${hours}:${minutes}`) })),
        react_1.default.createElement(TimeWheel_1.default, { list: getHourList(hourType), value: hours, onChange: (value) => onChange(`${period} ${value}:${minutes}`) }),
        react_1.default.createElement(TimeWheel_1.default, { list: getMinList(minType), value: minutes, onChange: (value) => onChange(`${period} ${hours}:${value}`) }),
        react_1.default.createElement("div", { className: "timer-picker-overlay" })));
}
//# sourceMappingURL=TimePicker.js.map