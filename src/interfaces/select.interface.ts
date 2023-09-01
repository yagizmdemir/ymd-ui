interface IDropdownOption {
    label: string | number;
    value: string | number;
}

export interface IDropdownProps {
    name?: string;
    className?: string;
    placeHolder?: string;
    options: IDropdownOption[];
    isMulti?: boolean;
    isOpen?: boolean;
    isSearchable?: boolean;
    align?: string;
    fullWidth?: boolean;
}
