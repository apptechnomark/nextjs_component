import React, { useEffect, useRef, useState } from "react";

// Icon Components
import CrossIcon from "./icons/CrossIcon.js";
import ChevronDown from "./icons/ChevronDown.js";
import { Text } from "../Textfield/Text.js";
import { Avatar } from "../Avatar/Avatar.js";
import CheckBox from "../Checkbox/Checkbox.js";

interface MultiSelectChipProps {
  options: { value: any; label: any }[];
  defaultValue?: any[];
  onSelect: (selected: any[]) => void;
  id?: string;
  label?: string;
  type?: string;
  search?: string;
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
  placeholder?: any;
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
  search,
  avatarName,
  avatarImgUrl,
  errorMessage = "This is a required field.",
  supportingText,
  hasError,
  getError,
  getValue,
  errorClass,
  validate,
  placeholder,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const isFirefox =
    typeof window !== "undefined" && /Firefox\//.test(navigator.userAgent);

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
    setFocusedIndex(-1);
  };

  const handleToggleOpen = () => {
    setSearchInput("");
    setOpen((prevState) => !prevState);
  };

  // Filter options based on search input
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchInput.toLowerCase())
  );

  const selectedDisplay = selected.length > 0 && (
    <div className="flex flex-wrap justify-center items-center">
      {selected.slice(0, 2).map((selectedValue) => {
        const selectedOption = options.find(
          (option) => option.value === selectedValue
        );
        return (
          <div
            key={selectedValue}
            className={`flex items-center  badge bg-[#E9ECEF] text-[#212529] border border-[#CED4DA] rounded-sm px-1 mr-[3px] ml-[1px] mt-[1px] mb-2 text-[14px] ${selectedOption?.label.length > 8 ? "max-w-[100px]" : ""
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
        <div className="flex items-center badge bg-[#E9ECEF] text-darkCharcoal border border-[#CED4DA] rounded-sm px-1 mb-2 text-[14px]">
          +{selected.length - 2}
        </div>
      )}
    </div>
  );


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

  return (
    <>
      <div className={`relative font-medium`} ref={selectRef}>
        {label && (
          <label
            onClick={handleToggleOpen}
            className={`text-[14px] font-normal ${open
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

        <div className="flex relative">
          <div
            onBlur={handleBlur}
            onClick={handleToggleOpen}
            className={`shrink-0 w-fit bg-white border-b max-h-[26px] text-[14px] font-normal  ${open
                ? "text-primary cursor-default"
                : selected.length === 0
                  ? "text-darkCharcoal cursor-pointer"
                  : ""
              } ${selected.length > 0
                ? "border-primary"
                : error
                  ? "border-defaultRed"
                  : "border-lightSilver transition-colors duration-300 hover:border-primary"
              } ${className} @layer base {
                @screen firefox {
                  margin-top: 1rem;
                }
              }  ${isFirefox ? "mt-1" : ""}`}
          >
            {selectedDisplay}
          </div>
          <div className="flex-1 xsm:w-24 w-full">
            <Text
              id={id}
              onBlur={handleBlur}
              onClick={handleToggleOpen}
              onChange={(e) => setSearchInput(e.target.value)}
              readOnly={!open}
              placeholder={
                open ? placeholder : selected.length > 0 ? "" : "Please select"
              }
              // value={searchInput}
              getError={() => { }}
              getValue={() => { }}
              className={`bg-white outline-none text-darkCharcoal text-[14px] font-normal ${open ? "text-primary" : ""
                } ${!open ? "cursor-pointer" : "cursor-default"} ${!open ? "placeholder-darkCharcoal" : "placeholder-primary"
                }`}
            />
          </div>

          <div
            onClick={handleToggleOpen}
            className={`absolute right-0 text-[1.5rem] text-darkCharcoal cursor-pointer ${open ? "rotate-180" : ""
              }`}
          >
            <ChevronDown />
          </div>
        </div>

        <ul
          className={`absolute z-10 bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${open
              ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
              : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500 ease-out"
            }`}
          // Setting the width inline style based on the client width of the parent div
          style={{ width: selectRef.current?.clientWidth }}
        >
          <label
            className={`pt-3 pb-1 pl-3 text-[14px] font-normal text-primary cursor-pointer flex`}
            onClick={handleClearAll}
          >
            Clear All
          </label>
          {filteredOptions.length > 0 &&
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className={`p-3 outline-none focus:bg-whiteSmoke text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex ${selected.includes(option.value) ? "bg-whiteSmoke" : ""
                  }`}
                onClick={
                  type !== "checkbox"
                    ? () => handleSelect(option.value)
                    : undefined
                }
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
                    id={option.value + Math.random()}
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
