import React, { HTMLAttributes } from 'react';

const AccordionContainer = ({
  children,
  className,
  style,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`ymd-accordion-container ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AccordionContainer;
