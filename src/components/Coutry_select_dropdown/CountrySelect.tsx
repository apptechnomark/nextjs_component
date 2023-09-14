import React, { useEffect, useRef, useMemo, useState, useCallback } from "react";
import country from "./data/country";
import ChevronDown from "./icons/ChevronDown";
import styles from "./countrycode.module.scss";

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

    const selectRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
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
    };

    const handleSearchInputChange = (e: any) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
    };

    const handleToggleOpen = () => {
        setOpen((prevState) => !prevState);
    };

    const filteredOptions = useMemo(() => country.filter(option =>
        option.country.toLowerCase().includes(searchValue.toLowerCase())
    ), [searchValue]);

    const handleSelect = useCallback((value: any, telValue: any) => {
        setSelectedCountryCode(value);
        setInputValue("");
        setSearchValue("");
        setOpen(false);

        const selectedCountry = country.find(
            (code) => code.value === value
        );
        const requiredLength = selectedCountry && selectedCountry.telLength;
        let updatedLength = telValue.split(" ").join("").length;

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
        if (!value) {
            setError(true);
            getError(false);
            setErrMsg("Please select a valid option.");
        } else {
            setError(false);
            setErrMsg("");
            getValue(value);
            getError(true);
        }
    }, [getError, getValue]);

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

    return (
        <div className="flex flex-col w-full text-[14px] relative">
            {label && (
                <span className="flex">
                    <label
                        className={`${err
                            ? "text-defaultRed"
                            : focus
                                ? "text-primary"
                                : "text-slatyGrey"
                            }`}
                    >
                        {label}
                    </label>
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
                            <div className="flex w-[60px]" ref={selectRef}>
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
                                        } text-[14px] font-normal w-full
      `}
                                />
                            </div>

                            <div
                                onClick={handleToggleOpen}
                                className={`text-[1.5rem] mb-0.5 ${disabled
                                    ? "text-slatyGrey cursor-default"
                                    : "text-darkCharcoal cursor-pointer"
                                    } ${open ? "rotate-180 text-primary" : ""}`}
                            >
                                <ChevronDown />
                            </div>
                            <span className="border-l-[1.5px] border-l-lightSilver pl-1 py-1 mb-1"></span>
                            <input
                                className={`${className} placeholder-[#ADB5BD] placeholder-opacity-100 pt-0.5 pb-1 outline-none w-full h-full text-darkCharcoal ${err && "text-defaultRed"
                                    } `}
                                type="tel"
                                id={id}
                                name={name}
                                value={telValue}
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
                            className={`absolute w-full bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${open
                                ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
                                : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                                } ${open ? "" : ""}`}
                        >
                            <li className="relative max-h-[215px] flex flex-col overflow-y-auto">
                                <ul>
                                    {filteredOptions.length > 0 && filteredOptions.map((option, index) => (
                                        <li
                                            key={index}
                                            className={`p-[10px] group/item text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex flex-row items-center space-x-2 ${option.value === selectedCountryCode ? "bg-whiteSmoke" : ""
                                                }`}
                                            onClick={() => {
                                                if (option.value !== inputValue) {
                                                    handleSelect(option.value, telValue);
                                                }
                                            }}
                                        >
                                            <span className="w-6">{option.JsxElement}</span>
                                            <span className="w-10">{option.label}</span>
                                            <span>{option.country}</span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
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