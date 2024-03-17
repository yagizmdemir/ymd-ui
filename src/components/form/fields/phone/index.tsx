import { IDefaultInput } from '@/interfaces/input.interface'
import React from 'react'

interface IInputProps extends IDefaultInput {
    pattern: string;
}

export const CustomPhone = ({ name, label, helperText, onChange, onBlur, value, placeholder, pattern }: IInputProps) => {
    return (
        <div className='ymd-form-group'>
            <div className='label-area'>
                <label htmlFor={name}>{label}</label>
                {helperText && <span className='helper-text'>{helperText}</span>}
            </div>

            <input
                className='ymd-form-control'
                type='phone'
                id={name}
                name={name}
                onChange={() => onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder || '0 555 5__ __ __'}
                pattern={pattern}
            />
        </div>
    )
}

CustomPhone.defaultProps = {
    pattern: '0 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}'
};
