import { SelectProps } from '@/interfaces/select.interface';
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';

const Icon: FC<SelectProps> = ({ isOpen }) => {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export const CustomDropdown: FC<SelectProps> = ({ onChange, placeHolder, options, isMulti, isSearchable, align }) => {

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<any[]>(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const removeOption = (option: any) => {
    return selectedValue.filter((o) => o.value !== option.value);
  };

  const onItemClick = (option: any) => {
    let newValue;
    if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
      newValue = removeOption(option);
    } else {
      newValue = [...selectedValue, option];
    }
    if (isMulti) {
      // Diğer kodlar...
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
    setShowMenu(false); // Menüyü kapattığınızdan emin olun
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option: { label: string }) =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  const isSelected = (option: { value: any; label?: string; }) => {
    if (isMulti) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <div className="custom--dropdown-container">

      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className={`dropdown-selected-value ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon isOpen={showMenu} />
          </div>
        </div>
      </div>

      {
        showMenu && (
          <div className={`dropdown-menu alignment--${align || 'auto'}`}>
            {
              isSearchable && (
                <div className="search-box">
                  <input className="form-control" onChange={onSearch} value={searchValue} ref={searchRef} />
                </div>
              )
            }
            {
              getOptions().map((option: { value: React.Key; label: string }) => (
                <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item ${isSelected(option) && "selected"}`} >
                  {option.label}
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};
