import { Dispatch, SetStateAction } from "react";

export type timeType = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  hourType: 12 | 24;
  minType: 1 | 5 | 10;
};

const useTimer = () => {
  const getHourList = (interval: 12 | 24 = 12) => {
    let hourArr: number[] = Array.from({ length: interval }, (_, i) => i + 1);

    return hourArr;
  };

  const getMinList = (interval: 1 | 5 | 10 = 1) => {
    const minuteArr: string[] = Array.from({ length: 60 / interval }, (_, i) =>
      (i * interval).toString().padStart(2, "0")
    );

    return minuteArr;
  };

  return {
    getHourList: getHourList,
    getMinList: getMinList,
  };
};

export default useTimer;
