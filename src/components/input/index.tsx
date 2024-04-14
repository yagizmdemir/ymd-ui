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
  type: string;
}

export const CustomInput = ({
  name,
  label,
  helperText,
  onChange,
  onBlur,
  value,
  placeholder,
  type,
  pattern,
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
        type={type}
        id={name}
        name={name}
        onChange={() => onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder || ''}
        pattern={pattern}
        {...rest}
      />
    </div>
  );
};
