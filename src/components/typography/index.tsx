import React, { HTMLAttributes } from 'react';

interface ITypographyComponent extends HTMLAttributes<HTMLElement> {
  variant?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

const Typography = ({
  variant = 'span',
  className,
  style,
  children,
  align = 'start',
}: ITypographyComponent) => {
  const Tag = variant || 'span';

  const alignedStyle = {
    ...style,
    textAlign: align,
  };

  return (
    // @ts-ignore
    <Tag className={className} style={alignedStyle}>
      {children}
    </Tag>
  );
};

export default Typography;
