import React, { useEffect, useRef, useMemo, useState, useCallback } from "react";
import country from "./data/country";
import ChevronDown from "./icons/ChevronDown";
import styles from "./countrycode.module.scss";
import Typography from "../Typography/Typography";

interface CountryCodeProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    getValue: (arg1: string) => void;
    getError: (arg1: boolean) => void;
    hasError?: boolean;
}

const CountrySelect: React.FC<CountryCodeProps> = ({
    label,
    className,
    id,
    name,
    validate,
    onBlur,
    onChange,
    supportingText,
    disabled,
    getValue,
    getError,
    errorMessage = "This is required field!",
    hasError,
    ...props
}) => {
    const [err, setErr] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const [telValue, setTelValue] = useState<string>("");
    const [selectedCountryCode, setSelectedCountryCode] = useState<any>("+91");
    const [selectedCountryFlag, setSelectedCountryFlag] = useState<any>(
        <img src="https://flagcdn.com/in.svg" width="24" alt="India" />
    );

    const selectRef = useRef<HTMLDivElement>(null);

    const [errorMsg, setErrorMsg] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    {
        validate &&
            useEffect(() => {
                setFocus(hasError);
                setErrorMsg(errorMessage);
                setErr(hasError);
                hasError && getError(false);
            }, [errorMessage, hasError]);
    }
    {
        !validate &&
            useEffect(() => {
                getError(true);
                setFocus(hasError);
            }, [hasError]);
    }

    useEffect(() => {
        const selectedCountryJsxElement = country.find(
            (item) => item.value == selectedCountryCode
        )?.JsxElement;
        setSelectedCountryFlag(selectedCountryJsxElement);
    }, [selectedCountryCode]);

    const validateInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            setErr(true);
            setErrorMsg("This is a required field!");
            getError(false);
        } else {
            const selectedCountry = country.find(
                (code) => code.value === selectedCountryCode
            );
            const requiredLength = selectedCountry && selectedCountry.telLength;
            let updatedLength = e.target.value.split(" ").join("").length;

            if (updatedLength < requiredLength) {
                setErr(true);
                setErrorMsg(`Please enter minimum ${requiredLength} digits.`);
                getError(false);
            } else if (updatedLength > requiredLength) {
                setErr(true);
                setErrorMsg(`Please enter maximum ${requiredLength} digits.`);
                getError(false);
            } else {
                setErr(false);
                getError(true);
            }
        }
    }, [getError, selectedCountryCode]);

    const handleFocus = () => {
        setFocus(true);
    };

    const focusHandler = () => {
        setFocus(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value || "";
        inputValue = inputValue.replace(/\s/g, "");
        inputValue = inputValue.replace(/[^\d]/g, "");

        inputValue = inputValue.slice(0, 14);

        let formattedValue = "";
        for (let i = 0; i < inputValue.length; i++) {
            if (i === 4 || i === 7 || i === 10) {
                formattedValue += " ";
            }
            formattedValue += inputValue[i];
        }

        setTelValue(formattedValue);
        if (err) {
            setErr(false);
        }
        getValue(formattedValue);
        setFocusedIndex(-1);
    };

    const handleSearchInputChange = (e: any) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
    };

    const handleToggleOpen = () => {
        setOpen(!open);
    };

    const filteredOptions = useMemo(() => country.filter(option =>
        option.country.toLowerCase().includes(searchValue.toLowerCase()) ||
        option.value.includes(searchValue)
    ), [searchValue]);

    const handleSelect = (value: any, telValue: any) => {
        setSelectedCountryCode(value);
        setInputValue("");
        setSearchValue("");
        setOpen(false);
        setFocusedIndex(-1);
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
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
            handleSelect(value, telValue);
        } else if (e.key === "ArrowUp" && index > 0) {
            e.preventDefault();
            setFocusedIndex(index - 1);
        } else if (e.key === "ArrowDown" && index < country.length - 1) {
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
        <div className="flex flex-col w-full text-[14px] relative">
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
            <div
                className={`flex ${!err
                    ? "w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
                    : "w-full"
                    }`}
            >
                <div
                    className={`flex border-b outline-none transition duration-600 w-full h-full ${err
                        ? "border-b-defaultRed"
                        : focus
                            ? "border-b-primary"
                            : "border-b-lightSilver"
                        }`}>
                    <div className={`relative w-full ${styles.customScrollbar}`}>
                        <div className=" flex bg-pureWhite flex-row">
                            {selectedCountryCode != "" ?
                                <div className="flex justify-center items-center mb-0.5 mr-1">
                                    {selectedCountryFlag}
                                </div>
                                : ""}
                            <div className="flex" ref={selectRef}>

                                <div className="flex w-[47px]">
                                    <input
                                        type="text"
                                        onClick={handleToggleOpen}
                                        onChange={handleSearchInputChange}
                                        readOnly={!open}
                                        placeholder={open ? "Search" : "Please select"}
                                        value={
                                            open
                                                ? searchValue
                                                : selectedCountryCode !== null && selectedCountryCode !== undefined
                                                    ? country.find((option) => option.value === selectedCountryCode)
                                                        ?.label
                                                    : inputValue.length > 25
                                                        ? inputValue.substring(0, 20) + "..."
                                                        : inputValue
                                        }
                                        className={`flex-grow outline-none mb-0.5 bg-white ${disabled
                                            ? "text-slatyGrey"
                                            : open
                                                ? "text-primary placeholder-primary"
                                                : "text-darkCharcoal"
                                            } text-[14px] font-normal w-full`}
                                        onKeyDown={(e) => {
                                            if (e.key === "ArrowUp" && focusedIndex > 0) {
                                                e.preventDefault();
                                                setFocusedIndex(focusedIndex - 1);
                                            } else if (e.key === "ArrowDown" && focusedIndex < filteredOptions.length - 1) {
                                                e.preventDefault();
                                                setFocusedIndex(focusedIndex + 1);
                                            }
                                        }}
                                    />
                                </div>
                                <div
                                    className={`text-[1.5rem] mb-0.5 transition-transform ${disabled
                                        ? "text-slatyGrey cursor-default"
                                        : "text-darkCharcoal cursor-pointer"
                                        } ${open ? "rotate-180 text-primary duration-400" : "duration-200"}`}
                                    onClick={handleToggleOpen}
                                    style={{ background: "transparent" }}
                                >
                                    <ChevronDown />
                                </div>
                            </div>
                            <span className="border-l-[1.5px] border-l-lightSilver pl-1 py-1 mb-1"></span>
                            <input
                                className={`${className}  placeholder-[#ADB5BD] placeholder-opacity-100 pt-0.5 pb-1 outline-none w-full h-full text-darkCharcoal ${err && "text-defaultRed"
                                    } `}
                                type="tel"
                                id={id}
                                name={name}
                                value={telValue}
                                autoFocus
                                onBlur={
                                    onBlur
                                        ? onBlur
                                        : validate
                                            ? validateInput
                                            : !validate
                                                ? focusHandler
                                                : undefined
                                }
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                disabled={disabled}
                                placeholder="1234 222 000"
                                {...props}
                            />
                        </div>
                        <ul
                            className={`absolute w-full h-[215px] bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${open
                                ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
                                : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                                } `}
                        >

                            {filteredOptions.length > 0 && filteredOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className={`p-[10px]  outline-none focus:bg-whiteSmoke text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex flex-row items-center space-x-2 ${option.value === selectedCountryCode ? "bg-whiteSmoke" : ""
                                        }`}
                                    onClick={() => {
                                        if (option.value !== inputValue) {
                                            handleSelect(option.value, telValue);
                                        }
                                    }}
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
                                    <span className="w-6">{option.JsxElement}</span>
                                    <span className="w-10">{option.label}</span>
                                    <span>{option.country}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {!err && supportingText && (
                <span className="text-slatyGrey text-[12px] sm:text-[14px]">
                    {supportingText}
                </span>
            )}
            {err && (
                <span className="text-defaultRed text-[12px] sm:text-[14px]">
                    {errorMsg}
                </span>
            )}
        </div>
    );
};

export { CountrySelect };