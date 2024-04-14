import React, { HTMLAttributes } from 'react';

export const Grid = ({
  children,
  className = '',
  style,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`ymd-row ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

Grid.displayName = "YMDUI.Grid"