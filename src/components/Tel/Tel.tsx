import React, { useEffect, useRef, useState } from "react";
import data from "./data";
import { Select } from "../Selectdropdown/Select";

interface TelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  validate?: boolean;
  errorMessage?: string;
  supportingText?: string;
  disabled?: boolean;
  countryCode?: boolean;
  getValue: (arg1: string) => void;
  getError: (arg1: boolean) => void;
  hasError?: boolean;
}

const Tel: React.FC<TelInputProps> = ({
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
  countryCode = false,
  errorMessage,
  hasError,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [errorMsg, setErrorMsg] = useState("");

  {
    validate &&
      useEffect(() => {
        setErrorMsg(errorMessage);
        setErr(hasError);
        hasError && getError(false);
      }, [errorMessage, hasError]);
  }
  {
    !validate && getError(true);
  }

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setErr(true);
      setErrorMsg("This is a required field!");
      getError(false);
    } else if (e.target.value.length < 12) {
      setErr(true);
      setErrorMsg("Please Enter valid 10 digits Phone Number.");
      getError(false);
    } else {
      setErr(false);
      getError(true);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const focusHandler = () => {
    setFocus(false);
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
    getValue(selectedCountryCode + " " + formattedValue);
  };

  return (
    <div className="flex flex-col w-full text-[14px] relative">
      {label && (
        <span className="flex">
          <label
            className={`${
              err
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
        className={`flex ${
          !err
            ? "w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full"
            : "w-full"
        }`}
      >
        <div
          className={`flex border-b outline-none transition duration-600 w-full h-full ${
            err
              ? "border-b-defaultRed"
              : focus
              ? "border-b-primary"
              : "border-b-lightSilver"
          }`}
        >
          {countryCode && (
            <div className="w-[100px]">
              <Select
                className="!border-none"
                options={data}
                id="basic"
                getValue={(e) => {
                  setSelectedCountryCode(e);
                }}
                defaultValue="+91"
                getError={(e) => {}}
              />
            </div>
          )}
          <input
            className={`${className} py-1 outline-none w-full h-full text-darkCharcoal`}
            ref={inputRef}
            type="tel"
            id={id}
            name={name}
            value={value}
            onBlur={
              onBlur
                ? onBlur
                : validate
                ? validateInput
                : validate
                ? focusHandler
                : undefined
            }
            onChange={handleInputChange}
            onFocus={handleFocus}
            disabled={disabled}
            placeholder="9874 563 214"
            {...props}
          />
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

export { Tel };