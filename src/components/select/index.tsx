import React, { useState, createContext, ReactNode, useRef, useEffect, Dispatch, SetStateAction, MouseEvent } from "react";
import { ClickOutside } from "../click-outside";

interface SelectContextType {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;
    selectedValue: OptionType | OptionType[] | null;
    setSelectedValue: Dispatch<SetStateAction<OptionType | OptionType[] | null>>;
}

interface OptionType {
    [x: string]: any;
    value: string;
    label: string;
    children?: ReactNode;
}

interface SelectProps {
    children: ReactNode | ReactNode[];
    className?: string;
    onChange: (value: OptionType | OptionType[] | null) => void;
    isMulti?: boolean;
    defaultValue?: OptionType | OptionType[] | null;
    placeHolder?: string;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

const CloseIcon = () => {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
};

const Select = ({ children, className = "", onChange, isMulti, defaultValue, placeHolder }: SelectProps) => {
    const [selectedValue, setSelectedValue] = useState<OptionType | OptionType[] | null>(defaultValue || (isMulti ? [] : null));
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const inputRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    const getDisplay = () => {
        if (!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0)) {
            return placeHolder;
        }
        if (isMulti && Array.isArray(selectedValue)) {
            return (
                <div className="dropdown-tags">
                    {selectedValue.map((option: OptionType, index: number) => (
                        <div key={`${option.value}-${index}`} className="dropdown-tag-item">
                            {option.label}
                            <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close">
                                <CloseIcon />
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return (selectedValue as OptionType).label;
    };

    const removeOption = (option: OptionType) => {
        if (Array.isArray(selectedValue)) {
            return selectedValue.filter((o) => o.value !== option.value);
        }
        return null;
    };

    const onTagRemove = (e: MouseEvent<HTMLSpanElement>, option: OptionType) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const onItemClick = (option: OptionType) => {
        let newValue;
        if (isMulti && Array.isArray(selectedValue)) {
            if (selectedValue.filter((i: OptionType) => i.value === option.props.value)[0]) {
                newValue = removeOption(option.props);
            } else {
                newValue = [...selectedValue, option.props];
            }
        } else {
            newValue = option.props;
        }

        if (!isMulti) {
            setShowMenu(false);
        }

        setSelectedValue(newValue);
        onChange(newValue);
    };

    return (
        <SelectContext.Provider value={{ showMenu, setShowMenu, selectedValue, setSelectedValue }}>
            <div className={`ymd-dropdown-container ${className}`}>
                <div ref={inputRef} onClick={() => setShowMenu(true)} className="dropdown-input">
                    <div className={`dropdown-selected-value ${!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0) ? "placeholder" : ""}`}>{getDisplay()}</div>
                    <div className={`ymd-dropdown-chevron ${showMenu ? "expanded" : ""}`}>
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>

                {showMenu && (
                    <ClickOutside
                        className="ymd-dropdown-options"
                        onClickOutside={(e) => {
                            if (e.target !== inputRef.current) {
                                setShowMenu(false);
                            }
                        }}
                    >
                        <ul>
                            {React.Children.map(children, (child: ReactNode, index: number) => (
                                <li
                                    key={index}
                                    onClick={() => onItemClick(child as unknown as OptionType)}
                                    className={isMulti ? (selectedValue?.filter((i: OptionType) => i.value === (child as React.ReactElement).props.value)[0] ? "selected" : "") : (selectedValue as OptionType)?.value === (child as React.ReactElement).props.value ? "selected" : ""}
                                >
                                    {child}
                                    {isMulti ? (
                                        selectedValue?.filter((i: OptionType) => i.value === (child as React.ReactElement).props.value)[0] ? (
                                            <div className="ymd-dropdown-checkmark">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    ) : (selectedValue as OptionType)?.value === (child as React.ReactElement).props.value ? (
                                        <div className="ymd-dropdown-checkmark">
                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </li>
                            ))}
                        </ul>
                    </ClickOutside>
                )}
            </div>
        </SelectContext.Provider>
    );
};

// @ts-ignore
const SelectOption = ({ children, value, label }: OptionType) => {
    return <>{children}</>;
};

export { Select, SelectOption };
