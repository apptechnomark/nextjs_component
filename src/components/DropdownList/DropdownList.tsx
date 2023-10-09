import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChevronDown from "./icons/ChevronDown";
import EditIcon from "./icons/EditIcon";
import DeleteIcon from "./icons/DeleteIcon";
import RightIcon from "./icons/RightIcon";
import CrossIcon from "./icons/CrossIcon";
import { Button } from '../Button/Button';
import Typography from '../Typography/Typography';

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    className?: string;
    validate?: boolean;
    getValue: (value: any) => void;
    getError: (arg1: boolean) => void;
    disabled?: boolean;
    noborder?: boolean
}

const DropdownList: React.FC<SelectProps> = ({
    id,
    getValue,
    label,
    className,
    validate,
    getError,
    disabled,
    noborder
}) => {
    const selectRef = useRef<HTMLDivElement>(null);
    const [searchValue, setSearchValue] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const [editList, setEditList] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const [selectedOption, setSelectedOption] = useState<any>("");

    const [options, setOptions] = useState([
        { label: "Option 1", value: "Option 1" },
        { label: "Option 2", value: "Option 2" },
        { label: "Option 3", value: "Option 3" }
    ]);

    const handleToggleOpen = () => {
        // setInputValue("");
        setIsOpen(!isOpen);
    };

    const handleBlur = () => {
        if (validate) {
            if (searchValue.trim() === "" && selectedOption.length === 0) {
                setError(true);
                setErrorMsg("Please select a valid option.");
                getError(false);
            } else {
                setError(false);
                setErrorMsg("");
                getError(true);
            }
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value.toLowerCase();
        setSearchValue(newValue);
    };

    const handleSelect = (value: any) => {
        if (!selectedOption.includes(value)) {
            setSelectedOption(value);
        }
        setInputValue("");
        setSearchValue("");
        setIsOpen(false);

        if (!value) {
            setError(true);
            getError(false);
            setErrorMsg("Please select a valid option.");
        } else {
            setError(false);
            setErrorMsg("");
            getValue(value);
            getError(true);
        }
        setFocusedIndex(-1);
    };

    const handleAddNewOption = () => {
        const inputValue = document.getElementById("newOptionInput") as HTMLInputElement;
        const newValue = inputValue.value;
        if (newValue.trim() !== "") {
            const newOption = { label: newValue, value: newValue };
            setOptions(prevOptions => [...prevOptions, newOption]);
            inputValue.value = "";
        }
    };

    const handleEditClick = (event, index) => {
        event.stopPropagation(); // Prevent event propagation
        setEditList(true);
        setActiveIndex(index);
        setInputValue(options.find((option, i) => i === index).label)
    }

    const handleEditChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleSaveEdit = () => {
        setEditList(false)
        if (inputValue !== "" && activeIndex !== -1) {
            setOptions(prevOptions => prevOptions.map((option: any, index: number) => index === activeIndex ? { label: inputValue, value: inputValue } : { ...option }));
        }
    }

    const handleDeleteClick = (index: number) => {
        const deletedValue = options[index].value;
        setOptions(prevOptions => prevOptions.filter((_, i) => i !== index));
        setSelectedOption(prevSelected => prevSelected.filter(option => option !== deletedValue));
    };


    const handleListItemKeyDown = (
        e: React.KeyboardEvent<HTMLLIElement>,
        value: string,
        index: number
    ) => {
        if (e.key === "Enter" && e.target instanceof HTMLElement && e.target.tagName == 'LI') {
            handleSelect(value);
        } else if (e.key === "ArrowUp" && index > 0) {
            e.preventDefault();
            setFocusedIndex(index - 1);
        } else if (e.key === "ArrowDown" && index < options.length - 1) {
            e.preventDefault();
            setFocusedIndex(index + 1);
        }
    };

    useEffect(() => {
        if (focusedIndex !== -1) {
            const optionsElements = Array.from(
                selectRef.current!.querySelectorAll("li")
            );
            optionsElements[focusedIndex].focus();
        }
    }, [focusedIndex]);

    const handleKeyDown = (value: any) => {
        if (value.key === "ArrowUp" && focusedIndex > 0) {
            value.preventDefault();
            setFocusedIndex(focusedIndex - 1);
        } else if (value.key === "ArrowDown" && focusedIndex < options.length - 1) {
            value.preventDefault();
            setFocusedIndex(focusedIndex + 1);
        }
    }
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!selectRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchValue("");
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div
                className={`relative font-medium w-full flex-row ${noborder ? '' : 'border-b'} ${disabled && "pointer-events-none"
                    } ${selectedOption.length > 0
                        ? "border-primary"
                        : error
                            ? "border-defaultRed"
                            : "border-lightSilver hover:border-primary transition-colors duration-300"
                    } ${className}`}
                ref={selectRef}
            >
                {label && (
                    <span className="flex">
                        <Typography
                            type="h6"
                            className={`${isOpen || selectedOption.length > 0 ? "text-primary"
                                : error
                                    ? "text-defaultRed"
                                    : "text-slatyGrey"
                                }`}
                        >
                            {label}
                        </Typography>
                        {validate && (
                            <span
                                className={`${disabled ? "text-slatyGrey" : "text-defaultRed"}`}
                            >
                                &nbsp;*
                            </span>
                        )}
                    </span>
                )}

                <div className="flex flex-row items-center justify-center relative">
                    <input
                        id={id}
                        onBlur={handleBlur}
                        onClick={handleToggleOpen}
                        onChange={handleInputChange}
                        readOnly={!isOpen}
                        placeholder={`${!isOpen ? "Enter Label Name" : selectedOption.length > 0 ? selectedOption : "Search"}`}
                        value={isOpen ? searchValue : selectedOption}
                        className={`w-full flex-grow bg-white outline-none text-[14px] font-normal ${!isOpen ? "placeholder-darkCharcoal cursor-pointer text-darkCharcoal " : "placeholder-primary cursor-default text-primary"}
                        ${error ? "placeholder-defaultRed" : "placeholder-slatyGrey"}`}
                        style={{ background: "transparent" }}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />
                    <div
                        onClick={handleToggleOpen}
                        className={`text-[1.5rem] transition-transform  cursor-pointer  ${isOpen ? "rotate-180 text-primary duration-400" : "duration-200"} ${error ? "text-defaultRed" : "text-slatyGrey"}`}>
                        <ChevronDown />
                    </div>
                </div>

                <ul
                    className={`absolute  w-full bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${isOpen
                        ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
                        : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                        } `}
                >
                    {options.length > 0 &&
                        options.some((option) =>
                            option.label.toLowerCase().startsWith(searchValue)
                        ) ? (
                        options.map((option, index) => (
                            <li
                                key={index}
                                className={`px-[10px] group outline-none justify-end focus:bg-whiteSmoke text-sm hover:bg-whiteSmoke font-normal cursor-pointer flex flex-row items-center space-x-2  ${!option.label.toLowerCase().startsWith(searchValue)
                                    ? "hidden"
                                    : ""
                                    }`}

                                onKeyDown={(e) => {
                                    handleListItemKeyDown(e, option.value, index)
                                }}
                                tabIndex={0}
                                ref={(el) => {
                                    if (index === focusedIndex) {
                                        el?.focus();
                                    }
                                }}

                            >
                                <div className='w-full py-1'>
                                    {editList && index === activeIndex
                                        ? <input
                                            value={inputValue}
                                            onChange={(e) => handleEditChange(e)}
                                            className="bg-white cursor-pointer outline-none  p-2 w-full"
                                            style={{ background: "transparent" }}
                                        />
                                        : <div onClick={() => { !editList && handleSelect(option.value) }}><Typography type='h6' className='p-2 font-normal' >{option.value}</Typography></div>
                                    }
                                </div>
                                {editList && index === activeIndex ?
                                    <div className='hidden gap-2.5  group-hover:flex  group-hover:translate-all group-hover:duration-700  group-hover:ease-out '>
                                        <div className='py-1' onClick={handleSaveEdit}><RightIcon /></div>
                                        <div className='py-1' onClick={() => setEditList(false)}><CrossIcon /></div>
                                    </div>
                                    : <div className='hidden gap-2.5  group-hover:flex  group-hover:translate-all group-hover:duration-700  group-hover:ease-out '>
                                        <div className='py-1' onClick={(e) => { handleEditClick(e, index) }}><EditIcon /></div>
                                        <div className='py-1' onClick={() => { handleDeleteClick(index) }}><DeleteIcon /></div>
                                    </div>
                                }
                            </li>
                        ))) : (
                        <span className="p-[10px] focus:bg-whiteSmoke text-[15px] hover:bg-whiteSmoke font-normal cursor-pointer flex flex-row items-center space-x-2 ">
                            No data found.
                        </span>
                    )}
                    <li
                        className={`bottom-0 w-full justify-end sticky bg-pureWhite gap-2 outline-none focus:bg-whiteSmoke 
                    text-[14px] p-2.5 font-normal cursor-pointer flex items-center`}
                    >
                        <input
                            id="newOptionInput"
                            placeholder="Add new list"
                            className={`px-[7px] w-[99px] border rounded-md h-[38px] border-lightSilver  outline-none text-darkCharcoal text-[14px] font-normal placeholder-darkCharcoal placeholder:opacity-50`}
                        />
                        <Button className="rounded-md outline-none" variant="btn-primary" onClick={handleAddNewOption}>
                            Add New
                        </Button>
                    </li>

                </ul >
            </div>
            {error && (
                <span className="text-defaultRed text-[12px] sm:text-[14px]">
                    {errorMsg}
                </span>
            )}
        </>
    )
}

export { DropdownList };