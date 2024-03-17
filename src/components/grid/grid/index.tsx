import React from 'react'
import { IDefault } from '@/interfaces/default.interface';

export const Grid = ({ children, className, style }: IDefault) => {
    return (
        <div className={`ymd-row ${className}`} style={style}>
            {children}
        </div>
    )
}

Grid.defaultProps = {
    className: ''
};