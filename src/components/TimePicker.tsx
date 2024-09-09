import React from "react";
import useTime, { timeType } from "../hooks/useTime";
import "../styles/time.css";

import TimeWheel from "./TimeWheel";

export default function TimePicker({
  value,
  onChange,
  hourType,
  minType,
}: timeType) {
  const { getHourList, getMinList } = useTime();
  const [, period, hours, minutes] =
    value?.match(/^(오전|오후)\s(\d{1,2}):(\d{2})$/i) ?? [];

  return (
    <div className={`timer-picker ${hourType === 24 && "_24hours"}`}>
      {/* AM/PM */}
      {hourType === 12 && (
        <TimeWheel
          list={["오전", "오후"]}
          value={period}
          onChange={(value) => onChange(`${value} ${hours}:${minutes}`)}
        />
      )}

      {/* hour */}
      <TimeWheel
        list={getHourList(hourType)}
        value={hours}
        onChange={(value) => onChange(`${period} ${value}:${minutes}`)}
      />

      {/* minute */}
      <TimeWheel
        list={getMinList(minType)}
        value={minutes}
        onChange={(value) => onChange(`${period} ${hours}:${value}`)}
      />

      <div className="timer-picker-overlay"></div>
    </div>
  );
}
