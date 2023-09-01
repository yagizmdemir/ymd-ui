import { HTMLAttributes } from "react";

export interface IDropdownOption {
    label: string;
    value: string | number;
}

export interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
    name?: string;
    label?: string;
    className?: string;
    placeHolder?: string;
    defaultValue?: string;
    isMulti?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    isOpen?: boolean;
    isSearchable?: boolean;
    align?: string;
    options: IDropdownOption[];
    onChange: React.FormEventHandler<HTMLDivElement>
}
