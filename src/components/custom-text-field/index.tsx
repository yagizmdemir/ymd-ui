import React, { useState } from 'react';
import { ITextFieldProps } from '../../interfaces/custom-text-field.interface';

export const CustomTextField = ({ type, label, fullWidth, className, placeholder, error, disabled, onChange }: ITextFieldProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <div className={`yd--form-element-outher ${fullWidth ? 'yd-fw' : ''}`}>
            {
                label ? <label htmlFor={label} className='yd--custom-label'>{label}</label> : null
            }
            <div className='yd--input-container'>
                <input
                    type={type === 'password' && showPassword ? 'text' : type}
                    className={`yd--custom-textfield ${className ? className : ''}`}
                    id={label}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                />
                {
                    type === 'password' ? <div className='yd--input-abort pointer' onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword
                                ? <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                : <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        }
                    </div> : null
                }
            </div>
            {error && <p className="error">Input filed can't be empty!</p>}
        </div>
    )
}