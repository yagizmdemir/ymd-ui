export interface IconProps {
    isOpen: boolean;
}

export interface ISelectOption {
    value: string;
    label: string;
}

export interface ISelectComponent {
    placeHolder: string;
    options: ISelectOption[];
    isMulti: boolean;
    isSearchable: boolean;
    onChange: (selectedValue: ISelectOption | ISelectOption[]) => void;
    align: string;
}