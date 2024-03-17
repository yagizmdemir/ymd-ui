export interface IDefaultInput {
    name: string;
    label: string;
    helperText?: string;
    onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    pattern?: string;
}

export interface ICheckoxOption {
    label: string;
    value: string;
    checked: boolean;
    handleChange: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ICheckbox {
    name: string;
    label: string;
    helperText?: string;
    onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
    options: ICheckoxOption[];
}