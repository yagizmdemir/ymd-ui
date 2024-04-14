import React, { useState } from "react";

interface ChangeEvent {
    target: {
        name: string;
        value: string;
        checked: boolean;
    };
}

interface DefaultProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

interface DefaultFormProps extends DefaultProps {
    required?: boolean;
    label?: string;
    name: string;
    disabled?: boolean;
    id: string;
    value: string;
}

interface CheckboxProps extends DefaultFormProps {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'body';
    size?: 'medium' | 'small' | 'large';
    checked: boolean;
    onChange: (event: ChangeEvent) => void;
}

export const Checkbox = ({ checked = false, onChange, label, name, id, color = "primary", size = "medium" }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const toggleCheckbox = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange({
            target: {
                name,
                value: id,
                checked: newValue,
            },
        });
    };

    return (
        <div className={`ymd-custom-checkbox ${isChecked ? "checked" : ""} ymd-custom-checkbox-${color} ymd-custom-checkbox-${size}`} onClick={toggleCheckbox}>
            <div className="ymd-checkbox">
                {isChecked && (
                    <div className="ymd-checkmark">
                        <i className="ymd-check" />
                    </div>
                )}
            </div>
            <span>{label}</span>
        </div>
    );
};

Checkbox.displayName = "YMDUI.Checkbox";
