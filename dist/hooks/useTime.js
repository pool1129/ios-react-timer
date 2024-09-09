"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useTimer = () => {
    const getHourList = (interval = 12) => {
        let hourArr = Array.from({ length: interval }, (_, i) => i + 1);
        return hourArr;
    };
    const getMinList = (interval = 1) => {
        const minuteArr = Array.from({ length: 60 / interval }, (_, i) => (i * interval).toString().padStart(2, "0"));
        return minuteArr;
    };
    return {
        getHourList: getHourList,
        getMinList: getMinList,
    };
};
exports.default = useTimer;
//# sourceMappingURL=useTime.js.map