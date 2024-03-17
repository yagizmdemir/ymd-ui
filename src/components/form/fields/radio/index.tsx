import { ICheckbox } from '@/interfaces/input.interface'
import React from 'react'

const CustomRadio = ({ name, label, helperText, options }: ICheckbox) => {
    return (
        <div className='ymd-form-group'>
            <div className='label-area'>
                <label htmlFor={name}>{label}</label>
                {helperText && <span className='helper-text'>{helperText}</span>}
            </div>

            {options.map((option, index) => (
                <div className='ymd-form-checkbox' key={`${name}-${index}`}>
                    <input
                        className='ymd-form-control'
                        type='radio'
                        id={`${option.value}`}
                        name={`${name}`}
                        checked={option.checked}
                        onChange={() => option.handleChange}
                    />
                    <label htmlFor={`${option.value}`}>{option.label}</label>
                </div>
            ))}
        </div>
    )
}

export default CustomRadio