import React, { useState } from 'react';

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

export const ColorInput = ({
  name,
  label,
  helperText,
  onChange,
  onBlur,
  value,
  placeholder,
  ...rest
}: IDefaultInput) => {
  const [colorCode, setColorCode] = useState(value);

  return (
    <div className="ymd-form-group">
      <div className="label-area">
        <label htmlFor={name}>{label} </label>
        {helperText && <span className="helper-text">{helperText}</span>}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <input
          className="ymd-form-control color"
          type="color"
          id={name}
          name={name}
          onChange={(e) => {
            onChange;
            setColorCode(e.target.value);
          }}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder || ''}
          {...rest}
        />
        <p>{colorCode}</p>
      </div>
    </div>
  );
};

ColorInput.displayName = "YMDUI.ColorInput"