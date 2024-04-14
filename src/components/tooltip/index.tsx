import React, { HTMLAttributes, MouseEventHandler, ReactNode, useState } from 'react';

interface TooltipProps extends HTMLAttributes<HTMLElement> {
  content: string;
  children?: ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  className = '',
  style,
  placement = 'top',
  ...otherProps
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  let timeout: string | number | NodeJS.Timeout | undefined;

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
    setShowTooltip(true);
    clearTimeout(timeout);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    timeout = setTimeout(() => {
      setShowTooltip(false);
    }, 200);
  };

  return (
    <div
      className={`ymd-tooltip ymd-tooltip-${placement} ${className}`}
      style={style}
      {...otherProps}
    >
      <div
        className="ymd-tooltip-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="ymd-tooltip-content">
          <div className="ymd-tooltip-arrow" />
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'YMDI.Tooltip';
