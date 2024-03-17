import React, { useState } from 'react'
import { IButton } from '@/interfaces/button.interface'

export const Button = ({ className, style, children, variant, color, size, fullWidth, type, onClick, href }: IButton) => {
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
        <button type={type} className={`ymd-btn ymd-${variant} color-${color} ymd-btn-${size}-size ${fullWidth ? 'ymd-fw' : ''} ${className}`} onClick={handleClick} style={style}>
            {children}
            <span className='ymd-droplet-container'>
                {ripple.active && (<span className="ymd-droplet" style={{ left: ripple.x + 'px', top: ripple.y + 'px' }} />)}
            </span>
        </button>
    );
}

Button.defaultProps = {
    className: '',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    fullWidth: false,
    type: 'button',
    onClick: () => { return },
};