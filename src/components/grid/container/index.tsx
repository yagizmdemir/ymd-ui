import React, { HTMLAttributes } from 'react';

export const Container = ({
  children,
  className = '',
  style,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`ymd-container ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};
