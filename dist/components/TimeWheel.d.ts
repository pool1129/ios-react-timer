import React from "react";
type TimeListType = {
    list: number[] | string[];
    onChange: (value: string) => void;
    value?: string;
};
export default function TimeWheel({ list, onChange, value }: TimeListType): React.JSX.Element;
export {};
