type TimeListType = {
    list: number[] | string[];
    onChange: (value: string) => void;
    value?: string;
};
export default function TimeWheel({ list, onChange, value }: TimeListType): import("react/jsx-runtime").JSX.Element;
export {};
