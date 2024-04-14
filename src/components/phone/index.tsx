import React from 'react';

interface IDefaultInput {
    name: string;
    label: string;
    helperText?: string;
    onChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    pattern?: string;
}

interface IInputProps extends IDefaultInput {
  pattern: string;
}

export const PhoneInput = ({
  name,
  label,
  helperText,
  onChange,
  onBlur,
  value,
  placeholder,
  pattern = '0 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}',
  ...rest
}: IInputProps) => {
  return (
    <div className="ymd-form-group">
      <div className="label-area">
        <label htmlFor={name}>{label}</label>
        {helperText && <span className="helper-text">{helperText}</span>}
      </div>

      <input
        className="ymd-form-control"
        type="phone"
        id={name}
        name={name}
        onChange={() => onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder || '0 555 5__ __ __'}
        pattern={pattern}
        {...rest}
      />
    </div>
  );
};

PhoneInput.displayName = "YMDUI.PhoneInput"