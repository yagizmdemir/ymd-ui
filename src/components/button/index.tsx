import React, { HTMLAttributes, useState } from 'react';

interface IButton extends HTMLAttributes<HTMLElement> {
  variant: 'text' | 'filled' | 'outlined';
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'body';
  size: 'medium' | 'small' | 'large';
  href?: string;
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  fullWidth: boolean;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({
  className = '',
  style,
  children,
  variant = 'outlined',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  type = 'button',
  onClick = () => {
    return;
  },
  href,
  ...rest
}: IButton) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });

  const handleClick = (event: any) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    setRipple({ x: offsetX, y: offsetY, active: true });
    setTimeout(() => {
      setRipple({ ...ripple, active: false });
    }, 450);

    if (href) {
      setTimeout(() => {
        window.location.replace(href);
      }, 250);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={`ymd-btn ymd-${variant} color-${color} ymd-btn-${size}-size ${
        fullWidth ? 'ymd-fw' : ''
      } ${className}`}
      onClick={handleClick}
      style={style}
      {...rest}
    >
      {children}
      <span className="ymd-droplet-container">
        {ripple.active && (
          <span
            className="ymd-droplet"
            style={{ left: ripple.x + 'px', top: ripple.y + 'px' }}
          />
        )}
      </span>
    </button>
  );
};
