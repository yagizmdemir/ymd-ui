import { IDefaultInput } from '@/interfaces/input.interface';
import React, { useState } from 'react'

export const CustomPassword = ({ name, label, helperText, onChange, onBlur, value, placeholder, pattern }: IDefaultInput) => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className='ymd-form-group'>
            <div className='label-area'>
                <label htmlFor={name}>{label}:</label>
                {helperText && <span className='helper-text'>{helperText}</span>}
            </div>

            <button className='password-trigger' onClick={() => setIsVisible(!isVisible)}>
                {
                    !isVisible
                        ? <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        : <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                }
            </button>

            <input
                className='ymd-form-control'
                type={isVisible ? 'text' : 'password'}
                id={name}
                name={name}
                onChange={() => onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder || ''}
                pattern={pattern}
            />
        </div>
    )
}
