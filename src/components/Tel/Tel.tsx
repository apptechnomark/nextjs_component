import React, { useRef, useState } from "react";
import data from "./data";
import {Select}  from "../Selectdropdown/Select";


interface TelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    className?: string;
    required?: boolean;
    validate?: boolean;
    errorMessage?: string;
    supportingText?: string;
    disabled?: boolean;
    getValue: (arg1: string) => void;
}

const Tel: React.FC<TelInputProps> = ({
    label,
    className,
    id,
    name,
    required,
    validate,
    onBlur,
    onChange,
    supportingText,
    disabled,
    getValue,
    errorMessage = "This is a required field!",
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [err, setErr] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const [value, setValue] = useState("");
    const [selectedCountryCode, setSelectedCountryCode] = useState("");

    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            setErr(true);
        } else if (e.target.value.length < 12) {
            setErr(true);
        } else {
            setErr(false);     
        }
    };

    const handleFocus = () => {
        setFocus(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value || "";
        inputValue = inputValue.replace(/\s/g, "");
        inputValue = inputValue.replace(/[^\d]/g, "");
        inputValue = inputValue.slice(0, 10);

        let formattedValue = "";
        for (let i = 0; i < inputValue.length; i++) {
            if (i === 4 || i === 7) {
                formattedValue += " ";
            }
            formattedValue += inputValue[i];
        }
        setValue(formattedValue);
        if (err) {
            setErr(false);
        }
        if (err) {
            setErr(false);
        }
        getValue(formattedValue);
    };

    return (
        <div className="flex flex-col w-full text-sm sm:text-base relative">
            {label && (
                <label
                    className={`${err ? "text-defaultRed" : focus ? "text-primary" : "text-slatyGrey"
                        }`}
                >
                    {label}
                    {required && "*"}
                </label>
            )}
            <div
                className={`flex ${!err
                        ? "w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px  before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
                        : "w-full"
                    }`}
            >
                <div
                    className={`flex border-b outline-none transition duration-600 w-full h-full ${err
                            ? "border-b-defaultRed"
                            : focus
                                ? "border-b-primary"
                                : "border-b-lightSilver"
                        }`} 
                >
                    <div className="w-[143px]">
                        <Select
                            className="!border-none"
                            options={data}
                            id="basic"
                            validate
                            onSelect={(value: any) => setSelectedCountryCode(value)}
                        />
                    </div>
                    <input
                        className={`${className} py-2 px-3 outline-none w-full h-full `}
                        ref={inputRef}
                        type="tel"
                        id={id}
                        name={name}
                        value={value}
                        onBlur={onBlur ? onBlur : validate ? validateInput : undefined}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        disabled={disabled}
                        placeholder="9874 563 214"
                        {...props}
                    />
                </div>
            </div>
            {!err && supportingText && (
                <span className="text-slatyGrey">{supportingText}</span>
            )}
        </div>
    );
};

export { Tel };