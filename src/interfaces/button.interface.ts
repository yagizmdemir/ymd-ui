import { IDefault } from "./default.interface";

export interface IButton extends IDefault {
    variant: 'text' | 'filled' | 'outlined';
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'body';
    size: 'medium' | 'small' | 'large';
    href?: string;
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
    fullWidth: boolean;
    type: 'button' | 'submit' | 'reset';
}
