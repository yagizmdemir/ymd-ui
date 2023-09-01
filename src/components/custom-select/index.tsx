import React, { useEffect, useRef, useState, RefObject } from 'react';
import { IDropdownOption, IDropdownProps } from '../../interfaces/custom-select.interface';

export const CustomSelect = ({ placeholder, isMulti, isSearchable, align, options, onChange, fullWidth, className, label, defaultValue }: IDropdownProps) => {

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<IDropdownOption[] | any>(defaultValue ? options.filter((d: IDropdownOption) => d.value === defaultValue)[0] : (isMulti ? [] : null));
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

    const Icon = () => {
        return (
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={showMenu ? 'translate' : ''}>
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
            return placeholder;
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
        <div className={`yd--form-element-outher ${className ? className : ''} ${fullWidth ? 'yd-fw' : ''}`}>
            {
                label ? <span className='yd--custom-label'>{label}</span> : null
            }
            <div className={`yd--dropdown-container`}>

                <div ref={inputRef} onClick={handleInputClick} className="yd--dropdown-input">
                    <div className={`yd--dropdown-selected-value ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
                    <div className="yd--dropdown-tools">
                        <div className="yd--dropdown-tool">
                            <Icon />
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
        </div>
    );

}

CustomSelect.defaultProps = {
    name: '',
    className: '',
    placeholder: '',
    isMulti: false,
    required: false,
    fullWidth: false,
    isOpen: false,
    isSearchable: false,
    align: 'bottom'
};