import React, { useEffect, useRef, useState } from "react";

// Icon Components
import CrossIcon from "./icons/CrossIcon.js";
import ChevronDown from "./icons/ChevronDown.js";

import { Avatar } from "../Avatar/Avatar.js";
import CheckBox from "../Checkbox/Checkbox.js";

interface MultiSelectChipProps {
  options: { value: any; label: any }[];
  defaultValue?: any[];
  onSelect: (selected: any[]) => void;
  id?: string;
  label?: string;
  type?: string;
  className?: string;
  required?: boolean;
  avatar?: boolean;
  avatarName?: string;
  avatarImgUrl?: string;
  errorMessage?: string;
  hasError?: boolean;
  getValue: (value: any) => void;
  getError: (arg1: boolean) => void;
  supportingText?: string;
  errorClass?: string;
  validate?: boolean;
}

const MultiSelectChip: React.FC<MultiSelectChipProps> = ({
  options,
  defaultValue,
  onSelect,
  label,
  type,
  id,
  className,
  required = false,
  avatar,
  avatarName,
  avatarImgUrl,
  errorMessage = "This is a required field.",
  supportingText,
  hasError,
  getError,
  getValue,
  errorClass,
  validate,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  {
    validate &&
      useEffect(() => {
        setErrMsg(errorMessage);
        setError(hasError);
        hasError && getError(false);
      }, [errorMessage, hasError]);
  }

  {
    defaultValue &&
      useEffect(() => {
        setSelected(defaultValue);
      }, [defaultValue]);
  }

  const handleBlur = () => {
    if (validate) {
      if (selected.length === 0) {
        setError(true);
        setErrMsg("Please select a valid option.");
        getError(false);
      } else {
        setError(false);
        setErrMsg("");
        getError(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const handleSelect = (value: string) => {
    const selectedIndex = selected.indexOf(value);
    let updatedSelected: string[];

    if (selectedIndex === -1) {
      // Value is not selected, add it to the selection
      const selectedOption = options.find((option) => option.value === value);
      updatedSelected = [
        ...selected,
        selectedOption ? selectedOption.value : value,
      ];
    } else {
      // Value is already selected, remove it from the selection
      updatedSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    if (updatedSelected.length > 0) {
      setError(false);
      setErrMsg("");
      getError(true);
    }

    setSelected(updatedSelected);
    getValue(updatedSelected);
  };

  const handleClearAll = () => {
    setSelected([]);
    getValue([]);
  };

  const handleToggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const selectedDisplay =
    selected.length > 0 ? (
      <div className="flex flex-wrap items-center">
        {selected.slice(0, 2).map((selectedValue) => {
          const selectedOption = options.find(
            (option) => option.value === selectedValue
          );
          return (
            <div
              key={selectedValue}
              className={`flex items-center badge bg-[#E9ECEF] text-[#212529] border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px] ${
                selectedOption?.label.length > 8 ? "max-w-[100px]" : ""
              }`}
            >
              <span title={selectedOption?.label}>
                {selectedOption?.label.length > 8
                  ? selectedOption?.label.substring(0, 8) + "..."
                  : selectedOption?.label}
              </span>

              <div
                onClick={() => handleSelect(selectedValue)}
                className="ml-1 cursor-pointer"
              >
                <CrossIcon />
              </div>
            </div>
          );
        })}
        {selected.length > 2 && (
          <div className="flex items-center badge bg-[#E9ECEF] text-darkCharcoal border border-[#CED4DA] rounded-sm px-1 mr-[5px] mb-2 text-[14px]">
            +{selected.length - 2}
          </div>
        )}
      </div>
    ) : (
      <div
        className={`text-darkCharcoal ${
          open ? "text-primary" : ""
        }`}
      >
        Please Select...
      </div>
    );

  return (
    <>
      <div className={`relative w-full font-medium flex-row`} ref={selectRef}>
        {label && (
          <label
            onClick={handleToggleOpen}
            className={`text-[14px] font-normal ${
              open
                ? "text-primary"
                : selected.length > 0
                ? "text-primary"
                : error
                ? "text-defaultRed"
                : "text-slatyGrey"
            }`}
          >
            {label}
            {validate && <span className="text-defaultRed">&nbsp;*</span>}
          </label>
        )}
        <div
          onBlur={handleBlur}
          onClick={handleToggleOpen}
          className={`flex justify-between bg-white border-b text-[14px] font-normal  ${
            open
              ? "text-primary cursor-default"
              : selected.length === 0
              ? "text-darkCharcoal cursor-pointer"
              : ""
          } ${
            selected.length > 0
              ? "border-primary"
              : error
              ? "border-defaultRed"
              : "border-lightSilver transition-colors duration-300 hover:border-primary"
          } ${className}`}
        >
          {selectedDisplay}

          <div
            onClick={handleToggleOpen}
            className={`text-[1.5rem] text-darkCharcoal cursor-pointer ${
              open ? "rotate-180" : ""
            }`}
          >
            <ChevronDown />
          </div>
        </div>

        <ul
          className={`absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${
            open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500 ease-out"
          }`}
          // Setting the width inline style based on the client width of the parent div
          style={{ width: selectRef.current?.clientWidth }}
        >
          <li
            className={`pt-3 pl-3 text-[14px] font-normal text-primary cursor-pointer flex`}
            onClick={handleClearAll}
          >
            Clear All
          </li>
          {options.length > 0 &&
            options.map((option, index) => (
              <li
                key={index}
                className={`p-3 text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex ${
                  selected.includes(option.value) ? "bg-whiteSmoke" : ""
                }`}
                onClick={
                  type !== "checkbox"
                    ? () => handleSelect(option.value)
                    : undefined
                }
              >
                {avatar && (
                  <div className="mr-2 flex-shrink-0 items-center text-[1.5rem] text-darkCharcoal">
                    <Avatar
                      variant="x-small"
                      name={avatarName}
                      imageUrl={avatarImgUrl}
                    />
                  </div>
                )}

                {type === "checkbox" && (
                  <CheckBox
                    id={option.value}
                    label={option.label}
                    checked={selected.includes(option.value)}
                    onChange={(e: any) => {
                      e.target.checked
                        ? handleSelect(option.value)
                        : handleSelect(option.value);
                    }}
                  />
                )}
                {type !== "checkbox" && option.label}
              </li>
            ))}
        </ul>
      </div>
      {error && (
        <span
          className={`text-defaultRed text-[12px] sm:text-[14px] ${errorClass}`}
        >
          {errMsg}
        </span>
      )}
    </>
  );
};

export { MultiSelectChip };