import React, { HTMLAttributes } from 'react';

interface IGridItem extends HTMLAttributes<HTMLElement> {
  col: number;
  sm?: number;
  md?: number;
  lg?: number;
}

export const GridItem = ({
  col = 12,
  sm,
  md,
  lg,
  children,
  className = '',
  style,
  ...rest
}: IGridItem) => {
  return (
    <div
      className={`ymd-col ${col ? `ymd-col-${col}` : ''} ${
        sm ? `ymd-col-sm-${sm}` : ''
      } ${md ? `ymd-col-md-${md}` : ''} ${
        lg ? `ymd-col-lg-${lg}` : ''
      } ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};
