import React, { HTMLAttributes } from 'react';

interface IBadgeComponent extends HTMLAttributes<HTMLElement> {
  horizontalAlign: 'left' | 'right';
  verticalAlign: 'bottom' | 'top';
  content: string;
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'body';
}

const Badge = ({
  className = '',
  style,
  children,
  verticalAlign = 'top',
  horizontalAlign = 'right',
  content,
  color = 'primary',
}: IBadgeComponent) => {
  return (
    <div className={`ymd-badge-outher ${className}`} style={style}>
      <span
        className={`ymd-badge-content ymd-badge-vertical-${verticalAlign} ymd-badge-horizontal-${horizontalAlign} ymd-badge-${color}`}
      >
        {content}
      </span>
      <div className="ymd-inner-content">{children}</div>
    </div>
  );
};

export default Badge;
