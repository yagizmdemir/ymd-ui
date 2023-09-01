import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';

export interface IDropdownOption {
    label: string | number;
    labelValue: string | number;
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
}

// function Dropdown({ name, className, placeHolder, isMulti, required, fullWidth, isOpen, isSearchable, align, options, label }: IDropdownProps) {
export const CustomSelect: FC<IDropdownProps> = ({ placeHolder, required, options, label }: IDropdownProps) => {

    const [isFocused, setIsFocused] = useState(false);
    const [selectedItem, setSelectedItem] = useState<number | string>();
    const wrapperRef = useRef<any>(null);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    const onValueChange = (selectedValue: string | number) => {
        setSelectedItem(selectedValue);
        setIsFocused(false);
    };
    React.useEffect(() => {
        setIsFocused(false);
    }, [selectedItem]);

    // const onClear = (e: any) => {
    //     e.stopPropagation();
    //     setSelectedItem(placeHolder);
    //     setIsFocused(false);
    // };

    return (
        <div ref={wrapperRef} className="border-[#979797] relative">
            <div className="flex flex-row items-center">
                <span className="text-sm text-[#A4A4A4] mb-2">{label}</span>
                {required && (
                    <span className="text-[20px] text-[#FF0000] ml-2 top-0 ">*</span>
                )}
            </div>
            <div onClick={() => setIsFocused(!isFocused)}>
                <span>{selectedItem ?? placeHolder}</span>
            </div>
            {isFocused && (
                <ul className=" items-center gap-5 block absolute w-full">
                    {options.map(({ label, labelValue }) => (
                        <li
                            onClick={() => onValueChange(labelValue)}
                            className="rounded-sm shadow-[inset_1px_0px_0px_rgba(0,0,0,0.2) bg-white drop-shadow-input pl-3 focus:outline-0 focus:drop-shadow-none transition relative flex hover:bg-[#F7B500] ">
                            {label}
                        </li>
                    ))}
                </ul>
            )}
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