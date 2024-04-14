import React, { HTMLAttributes, useState } from 'react';

interface DefaultFormProps extends HTMLAttributes<HTMLElement> {
  required?: boolean;
  label?: string;
  name: string;
  disabled?: boolean;
  id: string;
  value: string;
}

interface SwitchProps extends DefaultFormProps {
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'body';
  size?: 'medium' | 'small' | 'large';
  checked?: boolean;
  onChange?: (event: any) => void;
}

export const Switch = ({
  required = false,
  name,
  value,
  onChange,
  checked = false,
  size = 'medium',
  color = 'primary',
  className = '',
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange({
        target: {
          name,
          value: newValue ? 'on' : 'off',
        },
      });
    }
  };

  return (
    <div>
      <label
        className={`ymd-switch ymd-switch-${color} ymd-switch-${size} ${className}`}
      >
        <input
          type="checkbox"
          className="ymd-switch-input"
          name={name}
          value={value}
          checked={isChecked}
          onChange={toggleSwitch}
          required={required}
        />
        <span className="ymd-slider ymd-round"></span>
      </label>
    </div>
  );
};

Switch.displayName = 'YMDUI.Switch';
