import { IDefault } from '@/interfaces/default.interface'
import React from 'react'

export const Container = ({ children, className, style }: IDefault) => {
    return (
        <div className={`ymd-container ${className}`} style={style}>
            {children}
        </div>
    )
}

Container.defaultProps = {
    className: ''
};