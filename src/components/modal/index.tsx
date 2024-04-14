import React, { HTMLAttributes, useEffect, useState } from 'react';
import { ClickOutside } from '../click-outside';

interface ModalProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  size?: 'sm' | 'lg' | 'md';
  onClose: Function;
  staticBackdrop?: boolean;
}

export const Modal = ({
  children,
  className = '',
  isOpen = false,
  onClose,
  size = 'md',
  style,
  staticBackdrop = false,
  ...otherProps
}: ModalProps) => {
  const [show, setShow] = useState(isOpen);

  const handleClickOutside = () => {
    if (!staticBackdrop) {
      setShow(false);
      setTimeout(() => {
        onClose(false);
      }, 350);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setTimeout(() => {
        setShow(false);
      }, 350);
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <div
        className={`ymd-modal-container ${
          show ? 'ymd-modal-container-visible' : ''
        }`}
      >
        <ClickOutside onClickOutside={handleClickOutside}>
          <dialog
            className={`ymd-modal ${
              show ? 'ymd-modal-open' : ''
            } ymd-modal-${size} ${className}`}
            style={style}
            {...otherProps}
          >
            {children}
          </dialog>
        </ClickOutside>
      </div>
    );
  }

  return null;
};

export const ModalContent = ({
  children,
  className = '',
  style,
  ...otherProps
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`ymd-modal-content ${className}`}
      style={style}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export const ModalHeader = ({
  children,
  className = '',
  style,
  ...otherProps
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`ymd-modal-header ${className}`}
      style={style}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export const ModalFooter = ({
  children,
  className = '',
  style,
  ...otherProps
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`ymd-modal-footer ${className}`}
      style={style}
      {...otherProps}
    >
      {children}
    </div>
  );
};

Modal.displayName = 'YMDUI.Modal';
ModalContent.displayName = 'YMDUI.ModalContent';
ModalHeader.displayName = 'YMDUI.ModalHeader';
ModalFooter.displayName = 'YMDUI.ModalFooter';
