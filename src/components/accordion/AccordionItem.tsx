import React, { HTMLAttributes, useState } from 'react';

interface IAccordionComponent extends HTMLAttributes<HTMLElement> {
  title: string;
}

const AccordionItem = ({
  title,
  children,
  className,
  style,
  ...rest
}: IAccordionComponent) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`ymd-accordion ${isOpen ? 'expanded' : ''} ${className}`}
      {...rest}
      style={style}
    >
      <div className="ymd-accordion-header" onClick={toggleAccordion}>
        <div className="ymd-accordion-title">{title}</div>
        <div className={`ymd-accordion-icon ${isOpen ? 'open' : ''}`}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div className={`ymd-accordion-content ${isOpen ? 'expanded' : ''}`}>
        <div className="ymd-accordion-content-inner">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
