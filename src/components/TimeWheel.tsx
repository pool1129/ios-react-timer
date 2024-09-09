import React from "react";
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";

type TimeListType = {
  list: number[] | string[];
  onChange: (value: string) => void;
  value?: string;
};

export default function TimeWheel({ list, onChange, value }: TimeListType) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const height: number = 28;

  const onDragStart = (
    e: MouseEvent<HTMLUListElement> | TouchEvent<HTMLUListElement>
  ) => {
    e.preventDefault();
    setIsDrag(true);
    "pageY" in e ? setStartY(e.pageY) : setStartY(e.touches[0].pageY);
  };

  const onDragEnd = () => {
    const { scrollTop } = scrollRef.current!;
    const index = Math.round(scrollTop / height);

    setIsDrag(false);
    onChangeScroll(index);
  };

  const onDragMove = (
    e: MouseEvent<HTMLUListElement> | TouchEvent<HTMLUListElement>
  ) => {
    if (isDrag) {
      let currentY: number = 0;

      if ("pageY" in e) {
        currentY = e.pageY;
      } else if ("touches" in e) {
        currentY = e.touches[0].pageY;
      }

      const deltaY = startY - currentY;

      scrollRef.current!.scrollTop += deltaY;
      setStartY(currentY);
    }
  };

  const onChangeScroll = (index: number) => {
    const { clientHeight } = scrollRef.current!;
    const itemList = scrollRef.current!.querySelectorAll(
      "li:not(.timer-empty)"
    );
    const item = itemList[index] as HTMLElement;

    if (item) {
      const itemHeight = item.clientHeight;
      const itemOffsetTop = item.offsetTop;
      const scrollTop = itemOffsetTop - (clientHeight / 2 - itemHeight / 2);

      itemList.forEach((el) => el.classList.toggle("select-time", el === item));

      onChange(item.innerText);
      scrollRef.current!.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const items = scrollRef.current!.querySelectorAll("li:not(.timer-empty)");
    const index = Array.from(items).findIndex(
      (item) => item.textContent == value?.toLowerCase()
    );

    onChangeScroll(index);
  }, [value]);

  return (
    <ul
      className="timer-picker-list"
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <li className="timer-empty"></li>
      <li className="timer-empty"></li>

      {list.map((ele, index) => {
        return (
          <li key={index} onClick={() => onChangeScroll(index)}>
            {ele}
          </li>
        );
      })}

      <li className="timer-empty"></li>
      <li className="timer-empty"></li>
    </ul>
  );
}
