import React from "react";
interface MultiSelectChipProps {
    options: {
        value: string;
        label: string;
    }[];
    defaultValue?: string[];
    onSelect: (selected: string[]) => void;
    id?: string;
    label?: string;
    type?: string;
}
declare const MultiSelectChip: React.FC<MultiSelectChipProps>;
export { MultiSelectChip };
