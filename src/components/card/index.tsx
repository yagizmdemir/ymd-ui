import React, { HTMLAttributes } from 'react';

const Card = ({ children, className, style, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`ymd-card ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className, style, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`ymd-card-header ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className, style, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className={`ymd-card-body ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardBody };

Card.displayName = "YMDUI.Card"
CardHeader.displayName = "YMDUI.CardHeader"
CardBody.displayName = "YMDUI.CardBody"
