var useTimer = function () {
    var getHourList = function (interval) {
        if (interval === void 0) { interval = 12; }
        var hourArr = Array.from({ length: interval }, function (_, i) { return i + 1; });
        return hourArr;
    };
    var getMinList = function (interval) {
        if (interval === void 0) { interval = 1; }
        var minuteArr = Array.from({ length: 60 / interval }, function (_, i) {
            return (i * interval).toString().padStart(2, "0");
        });
        return minuteArr;
    };
    return {
        getHourList: getHourList,
        getMinList: getMinList,
    };
};
export default useTimer;
