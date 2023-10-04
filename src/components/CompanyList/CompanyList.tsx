import React, { useRef, useEffect, useState } from "react";
import { Avatar, AvatarGroup } from "../Avatar/Avatar.js";
import CheckBox from "../Checkbox/Checkbox.js";
import ChevronDown from "./icons/ChevronDown.js";
import Search from "./icons/Search.js";
import Typography from "../Typography/Typography.js";
import styles from "./CompanyList.module.scss";

interface CompanyListProps {
    id: string;
    options: { value: string; label: string, imageUrl?: string }[];
    label?: string;
    className?: string;
    required?: boolean;
    defaultValue?: string;
    errorMessage?: string;
    hasError?: boolean;
    getValue: (value: any) => void;
    getError: (arg1: boolean) => void;
    validate?: boolean;
    placeholder?: any;
    noborder?: boolean;
    showAvatar?: number;
    disabled?: boolean;
    supportingText?: string;

}
const CompanyList: React.FC<CompanyListProps> = ({
    id,
    options,
    label,
    className,
    required,
    defaultValue,
    errorMessage = "This is required field!",
    hasError,
    getValue,
    getError,
    validate,
    placeholder,
    supportingText,
    noborder,
    showAvatar = 3,
    disabled,
    ...props
}) => {

    const selectRef = useRef<HTMLDivElement>(null);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const [avatars, setAvatars] = useState<JSX.Element[]>([]);
    const [err, setErr] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        if (validate) {
            setFocus(hasError);
            setErrorMsg(errorMessage);
            setErr(hasError);
            hasError && getError(false);
        } else {
            getError(true);
            setFocus(hasError);
        }
    }, [validate, errorMessage, hasError]);

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
        setFocus(!focus);
        // selectedValues.length === 0 && setErr(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.toLowerCase();
        setInputValue(inputValue);
    };

    const handleSelect = (value: string) => {
        const updatedValues = [...selectedValues];
        const index = updatedValues.indexOf(value);
        if (index > -1) {
            updatedValues.splice(index, 1);
        } else {
            updatedValues.push(value);
        }
        if (validate) {
            if (updatedValues.length === 0) {
                setErr(true);
                setErrorMsg("Please select at least one option.");
                getError(false);
            } else {
                setErr(false);
                setErrorMsg("");
                getError(true);
            }
        }
        setInputValue("");
        setSelectedValues(updatedValues);
        setFocusedIndex(-1);
        getValue(updatedValues);
    };

    const handleCheckboxChange = (value: string) => {
        setSelectedValues((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((item) => item !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    useEffect(() => {
        const updatedAvatars = selectedValues.map((value, index) => (
            <Avatar
                key={index}
                name={value}
                imageUrl={options.find((item) => item.value == value)?.imageUrl}
            />
        ));
        setAvatars(updatedAvatars);
    }, [selectedValues, options]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!selectRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
                setFocus(false);
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleListItemKeyDown = (
        e: React.KeyboardEvent<HTMLLIElement>,
        value: string,
        index: number,
    ) => {
        if (e.key === "Enter") {
            handleSelect(value);
        } else if (e.key === "ArrowUp" && index > 0) {
            e.preventDefault();
            setFocusedIndex(index - 1);
        } else if (e.key === "ArrowDown" && index < options.length - 1) {
            e.preventDefault();
            setFocusedIndex(index + 1);
        }
        else {
            e.preventDefault();
            setFocusedIndex(-1);
        }
    };

    useEffect(() => {
        if (focusedIndex !== -1) {
            const optionsElements = Array.from(
                selectRef.current!.querySelectorAll("li")
            );
            optionsElements[focusedIndex];
        }
    }, [focusedIndex]);

    return (
        <>
            <div className={`relative font-medium ${noborder ? '' : 'border-b'} ${className} ${styles.customScrollbar}
            ${disabled
                    ? "border-lightSilver"
                    : isOpen
                        ? "border-primary"
                        : inputValue
                            ? "border-primary"
                            : err
                                ? "border-defaultRed"
                                : "border-lightSilver hover:border-primary transition-colors duration-300"
                }`}
                ref={selectRef}

            >
                {label && (
                    <span className="flex">
                        <Typography type="h6"
                            className={`${err
                                ? "text-defaultRed"
                                : focus
                                    ? "text-primary"
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
                <div className={`flex items-center transition-height duration-200 ease-out cursor-pointer ${disabled && "pointer-events-none"} ${selectedValues.length > 0 ? "h-[42px]" : "h-[25px]"}`} onClick={handleToggleOpen}>
                    {selectedValues.length > 0
                        ? <AvatarGroup show={showAvatar}>
                            {avatars}
                        </AvatarGroup>
                        : <Typography type="h6" className={`!font-normal ${err && "text-defaultRed"} ${disabled && "text-slatyGrey"} select-none`}>
                            {isOpen ? "" : "Please Select"}
                        </Typography>
                    }
                    <div
                        onClick={handleToggleOpen}
                        className={`ml-1 text-[1.5rem]  transition-transform ${err ? "text-defaultRed" : disabled ? "text-slatyGrey" : "text-darkCharcoal"}  cursor-pointer  ${isOpen ? "rotate-180 text-primary duration-400" : "duration-200"}}`}>
                        <ChevronDown />
                    </div>
                </div>
                <div>
                    <ul
                        className={`absolute z-10 w-full bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${isOpen
                            ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
                            : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                            } ${isOpen ? "ease-out" : ""}`}
                    >
                        <li className={`relative outline-none focus:bg-whiteSmoke p-[10px] text-[14px] font-normal cursor-pointer flex items-center`}>
                            <div className="flex absolute left-2 " >
                                <Search />
                            </div>
                            <input
                                id={id}
                                onChange={handleInputChange}
                                placeholder="Search"
                                value={inputValue.length > 25
                                    ? `${inputValue.substring(0, 20)}...`
                                    : inputValue
                                }
                                className={`w-full pl-6 py-1 border-b border-lightSilver flex-grow outline-none text-darkCharcoal text-[14px] font-normal ${isOpen ? "text-primary" : ""
                                    } ${!isOpen ? "cursor-pointer" : "cursor-default"} ${!isOpen ? "placeholder-darkCharcoal" : "placeholder-primary"
                                    }`} style={{ background: "transparent" }}
                            />
                        </li>
                        {options.length > 0 &&
                            options.map((option, index) => (
                                <li
                                    key={option.value + index}
                                    className={`outline-none focus:bg-whiteSmoke p-[10px] text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex items-center ${selectedValues.includes(option.value) ? "bg-whiteSmoke" : ""
                                        } ${!option.label.toLowerCase().startsWith(inputValue)
                                            ? "hidden"
                                            : ""
                                        }`}
                                    onClick={() => {
                                        if (option.value !== inputValue) {
                                            handleSelect(option.value);
                                        }
                                    }}
                                    onKeyDown={(e) =>
                                        handleListItemKeyDown(e, option.value, index)
                                    }
                                    tabIndex={0}
                                    ref={(el) => {
                                        if (index === focusedIndex) {
                                            el?.focus();
                                        }
                                    }}
                                >
                                    <CheckBox
                                        id={option.value}
                                        checked={selectedValues.includes(option.value)}
                                        onChange={() => { handleCheckboxChange(option.value) }}
                                    />
                                    <div className="mx-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal">
                                        <Avatar
                                            variant="small"
                                            name={option.label}
                                            imageUrl={option.imageUrl}
                                        />
                                    </div>
                                    <Typography type="h6">
                                        {option.label}
                                    </Typography>
                                </li>
                            ))}
                    </ul>
                </div>

            </div>
            {err && (
                <span className="text-defaultRed text-[12px] sm:text-[14px]">
                    {errorMsg}
                </span>
            )}
        </>
    )
}

export { CompanyList }