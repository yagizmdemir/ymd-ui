import { IGridItem } from '@/interfaces/grid-item.interface'
import React from 'react'

export const GridItem = ({ col, sm, md, lg, children, className, style }: IGridItem) => {
    return (
        <div className={`ymd-col ${col ? `ymd-col-${col}` : ''} ${sm ? `ymd-col-sm-${sm}` : ''} ${md ? `ymd-col-md-${md}` : ''} ${lg ? `ymd-col-lg-${lg}` : ''} ${className}`} style={style}>
            {children}
        </div>
    )
}

GridItem.defaultProps = {
    col: 12,
    className: ''
};