import React, { HTMLAttributes } from 'react';

interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  isLoaded?: boolean;
}

export const Skeleton = ({
  children,
  isLoaded,
  className = '',
  style,
  ...otherProps
}: SkeletonProps) => {
  return (
    <div className={`ymd-skeleton ${className}`} style={style} {...otherProps}>
      <div className="ymd-skeleton-content">{children}</div>
    </div>
  );
};

Skeleton.displayName = 'YMDUI.Skeleton';
