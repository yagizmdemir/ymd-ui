import { IDefaultInput } from '@/interfaces/input.interface';
import React, { useState } from 'react'

export const CustomColor = ({ name, label, helperText, onChange, onBlur, value, placeholder }: IDefaultInput) => {
    const [colorCode, setColorCode] = useState(value);

    return (
        <div className='ymd-form-group'>
            <div className='label-area'>
                <label htmlFor={name}>{label} </label>
                {helperText && <span className='helper-text'>{helperText}</span>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <input
                    className='ymd-form-control color'
                    type='color'
                    id={name}
                    name={name}
                    onChange={(e) => { onChange; setColorCode(e.target.value) }}
                    onBlur={onBlur}
                    value={value}
                    placeholder={placeholder || ''}
                />
                <p>{colorCode}</p>
            </div>

        </div>
    )
}
