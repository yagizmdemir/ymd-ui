import React, { useEffect, useRef, useState } from "react";
import { ISelectComponent, ISelectOption, IconProps } from "@/interfaces/select.interface";

const Icon = ({ isOpen }: IconProps) => {
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

const CustomSelect = ({ placeHolder, options, isMulti, isSearchable, onChange, align }: ISelectComponent) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<ISelectOption | ISelectOption[] | null>(isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState<string>("");
    const searchRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
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

    const getDisplay = () => {
        if (!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
            return placeHolder;
        }
        if (isMulti) {
            return (
                <div className="dropdown-tags">
                    {
                        (selectedValue as ISelectOption[]).map((option, index) => (
                            <div key={`${option.value}-${index}`} className="dropdown-tag-item">
                                {option.label}
                                <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close" >
                                    <CloseIcon />
                                </span>
                            </div>
                        ))
                    }
                </div>
            );
        }
        return (selectedValue as ISelectOption).label;
    };

    const removeOption = (option: ISelectOption) => {
        return (selectedValue as ISelectOption[]).filter((o) => o.value !== option.value);
    };

    const onTagRemove = (e: React.MouseEvent, option: ISelectOption) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const onItemClick = (option: ISelectOption) => {
        let newValue;
        if (isMulti) {
            if ((selectedValue as ISelectOption[]).findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...(selectedValue as ISelectOption[]), option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option: ISelectOption) => {
        if (isMulti) {
            return (selectedValue as ISelectOption[]).filter((o) => o.value === option.value).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return (selectedValue as ISelectOption).value === option.value;
    };

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    return (
        <div className="custom--dropdown-container">
            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                <div className={`dropdown-selected-value ${!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0) ? 'placeholder' : ''}`}>{getDisplay()}</div>
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
                            getOptions().map((option) => (
                                <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item ${isSelected(option) ? "selected" : ""}`} >
                                    {option.label}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

export default CustomSelect