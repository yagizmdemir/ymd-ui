import { ChangeEvent, HTMLAttributes } from "react";

export interface ITextFieldProps extends HTMLAttributes<HTMLDivElement> {
    type: 'text' | 'number' | 'email' | 'password'
    label: string
    defaultValue?: string;
    textarea?: boolean;
    fullWidth?: boolean;
    className?: string;
    value: string | number
    placeholder: string
    error?: boolean
    disabled?: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}