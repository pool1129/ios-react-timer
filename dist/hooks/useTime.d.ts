import { Dispatch, SetStateAction } from "react";
export type timeType = {
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
    hourType: 12 | 24;
    minType: 1 | 5 | 10;
};
declare const useTimer: () => {
    getHourList: (interval?: 12 | 24) => number[];
    getMinList: (interval?: 1 | 5 | 10) => string[];
};
export default useTimer;
