import React, { HTMLAttributes, useEffect, useRef, useState, RefObject } from 'react';

export interface IDropdownOption {
    label: string;
    value: string | number;
}

interface IDropdownProps extends HTMLAttributes<HTMLDivElement> {
    name?: string;
    label?: string;
    className?: string;
    placeHolder?: string;
    isMulti?: boolean;
    required?: boolean;
    fullWidth?: boolean;
    isOpen?: boolean;
    isSearchable?: boolean;
    align?: string;
    options: IDropdownOption[];
    onChange: React.FormEventHandler<HTMLDivElement>
}

// export const CustomSelect = ({ name, className, placeHolder, isMulti, required, fullWidth, isOpen, isSearchable, align, options, label, onChange }: IDropdownProps) => {
export const CustomSelect = ({ placeHolder, isMulti, isSearchable, align, options, onChange, fullWidth }: IDropdownProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<IDropdownOption[] | any>(isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState("");
    const searchRef: RefObject<HTMLInputElement> = useRef(null);
    const inputRef: RefObject<HTMLDivElement> = useRef(null);

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

    const Icon = (isOpen: any) => {
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

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const removeOption = (option: IDropdownOption) => {
        return selectedValue?.filter((o: IDropdownOption) => o.value !== option.value);
    };

    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: IDropdownOption) => {
        e.stopPropagation();
        const newValue: any = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const onItemClick = (option: IDropdownOption) => {
        let newValue: IDropdownOption | IDropdownOption[] | any;
        if (isMulti) {
            if (selectedValue) {
                const index = selectedValue.findIndex((o: IDropdownOption) => o.value === option.value);
                if (index >= 0) {
                    newValue = removeOption(option);
                } else {
                    newValue = selectedValue.concat(option);
                }
            } else {
                newValue = [option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option: IDropdownOption) => {
        if (isMulti) {
            return selectedValue.filter((o: IDropdownOption) => o.value === option.value).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue === option;
    };

    const onSearch = (e: any) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter(
            (option: IDropdownOption) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        );
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        if (isMulti) {
            return (
                <div className="yd--dropdown-tags">
                    {
                        selectedValue.map((option: IDropdownOption, index: number) => (
                            <div key={`${option.value}-${index}`} className="yd--dropdown-tag-item">
                                {option.label}
                                <span onClick={(e) => onTagRemove(e, option)} className="yd--dropdown-tag-close" >
                                    <CloseIcon />
                                </span>
                            </div>
                        ))
                    }
                </div>
            );
        }
        return selectedValue.label;
    };

    return (
        <div className={`yd--dropdown-container ${fullWidth ? 'yd-fw' : ''}`}>

            <div ref={inputRef} onClick={handleInputClick} className="yd--dropdown-input">
                <div className={`yd--dropdown-selected-value ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="yd--dropdown-tools">
                    <div className="yd--dropdown-tool">
                        <Icon isOpen={showMenu} />
                    </div>
                </div>
            </div>
            {
                showMenu && (
                    <div className={`yd--dropdown-menu alignment--${align || 'auto'}`}>
                        {
                            isSearchable && (
                                <div className="yd--search-box">
                                    <input className="yd--form-control" onChange={onSearch} value={searchValue} ref={searchRef} />
                                </div>
                            )
                        }
                        {
                            getOptions().map((option) => (
                                <div onClick={() => onItemClick(option)} key={option.value} className={`yd--dropdown-item ${isSelected(option) && "selected"}`} >
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

CustomSelect.defaultProps = {
    name: '',
    className: '',
    placeHolder: '',
    isMulti: false,
    required: false,
    fullWidth: false,
    isOpen: false,
    isSearchable: false,
    align: 'bottom'
};