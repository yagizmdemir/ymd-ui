import React, { HTMLAttributes, useEffect, useRef } from 'react';

interface ClickOutsideProps extends HTMLAttributes<HTMLElement> {
  onClickOutside: (event: MouseEvent) => void;
}

export const ClickOutside = ({
  children,
  onClickOutside,
  className = '',
}: ClickOutsideProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};

ClickOutside.displayName = 'YMDUI.ClickOutside';
