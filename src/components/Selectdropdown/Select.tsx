import React, { useEffect, useRef, useState } from "react";
import { Text } from "../Textfield/Text";
import { Button } from "../Button/Button";

import { EditIconDropdown } from "./icons/EditIconDropdown";
import { DeleteIconDropdown } from "./icons/DeleteIconDropdown";
import ChevronDown from "./icons/ChevronDown";
import { Avatar } from "../Avatar/Avatar";

interface Option {
  value: any;
  label: string;
}

interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  options: Option[];
  type?: string;
  label?: string;
  className?: string;
  search?: boolean;
  validate?: boolean;
  defaultValue?: any;
  placeholder?: any;
  value?: any;
  avatar?: boolean;
  avatarName?: string;
  avatarImgUrl?: string;
  errorMessage?: string;
  hasError?: boolean;
  getValue: (value: any) => void;
  getError: (arg1: boolean) => void;
  supportingText?: string;
  errorClass?: string;
  addDynamicForm?: boolean;
  addDynamicForm_Label?: string;
  addDynamicForm_Placeholder?: string;
  addDynamicForm_Icons_Edit?: any;
  addDynamicForm_Icons_Delete?: any;
  onChangeText?: (value: any, label: any) => void;
  onClickButton?: (value: any) => void;
  onDeleteButton?: (value: any) => void;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  id,
  options,
  getValue,
  type,
  label,
  className,
  placeholder = "Please select",
  search = false,
  validate,
  defaultValue,
  value,
  errorMessage = "This is a required field.",
  supportingText,
  hasError,
  getError,
  avatar,
  avatarName,
  avatarImgUrl,
  errorClass,
  addDynamicForm,
  addDynamicForm_Label,
  addDynamicForm_Placeholder,
  onClickButton,
  onChangeText,
  onDeleteButton,
  addDynamicForm_Icons_Edit,
  addDynamicForm_Icons_Delete,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputLabel, setInputLabel] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    defaultValue
      ? options.find((option) => option.value === defaultValue) ?? null
      : null
  );

  const [editing, setEditing] = useState(false);
  const [textName, setTextName] = useState("");
  const [textValue, setTextValue] = useState("");
  const [textNameError, setTextNameError] = useState(false);
  const [textNameHasError, setTextNameHasError] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchValue)
  );

  useEffect(() => {
    if (validate) {
      setErrMsg(errorMessage);
      setError(hasError);
      if (defaultValue !== "" && defaultValue !== null && defaultValue !== 0) {
        setInputValue(defaultValue);
      } else {
        setInputValue("");
      }
    }
  }, [errorMessage, hasError, validate, defaultValue]);

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
      setEditing(false);
    }
  };

  const handleToggleOpen = () => {
    if (disabled) {
      return;
    }
    setOpen((prevOpen) => !prevOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchValue(inputValue); // Update search input value
    // setInputValue(inputValue); // Update display input value

    if (validate && inputValue === "") {
      setError(true);
      setErrMsg("Please select a valid option.");
    } else {
      setError(false);
      setErrMsg("");
    }
  };

  const handleSelect = (value: any) => {
    setSelectedOption(options.find((option) => option.value === value));
    setInputValue("");
    setSearchValue("");
    setOpen(false);

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
  };

  const handleBlur = () => {
    if (validate) {
      if (inputValue === "") {
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

  const handleSubmit = () => {
    textName.trim().length <= 0 && setTextNameHasError(true);
    inputLabel.trim().length <= 0 && setTextNameHasError(false);
    setErrMsg("");
    setError(false);
    if (
      textNameError &&
      (textName.trim().length > 0 || inputLabel != "") &&
      onClickButton
    ) {
      onClickButton(editing);
      cleartextData();
    }
  };

  const cleartextData = () => {
    setInputLabel("");
    setTextValue("");
    setTextName("");
  };

  const handleDeleteValue = (value: any) => {
    if (onDeleteButton) {
      onDeleteButton(value);
    }
  };

  useEffect(() => {
    setOpen(editing);
  }, [editing]);

  return (
    <>
      <div
        className={`relative font-medium w-full flex-row border-b ${
          disabled
            ? "border-lightSilver"
            : open
            ? "border-primary"
            : inputValue
            ? "border-primary"
            : error
            ? "border-defaultRed"
            : `border-lightSilver hover:border-primary transition-colors duration-300`
        } ${className}`}
        ref={selectRef}
      >
        {label && (
          <label
            className={`text-[14px] font-normal w-full ${
              open
                ? "text-primary"
                : inputValue
                ? "text-primary"
                : error
                ? "text-defaultRed"
                : "text-slatyGrey"
            }`}
            htmlFor={id}
          >
            {label}
            {validate && (
              <span
                className={`${disabled ? "lightSilver" : "text-defaultRed"}`}
              >
                &nbsp;*
              </span>
            )}
          </label>
        )}

        <div className="flex flex-row items-center relative mb-0 w-full">
          <input
            id={id}
            onBlur={handleBlur}
            onClick={handleToggleOpen}
            onChange={handleInputChange}
            readOnly={!search}
            disabled={disabled}
            placeholder={placeholder || "Please select"}
            value={
              search && open
                ? searchValue // If in search mode and input is open, use searchValue
                : defaultValue !== null && defaultValue !== undefined
                ? options.find((option) => option.value === defaultValue)
                    ?.label ?? placeholder
                : selectedOption
                ? selectedOption.label
                : defaultValue
                ? options.find((option) => option.value === defaultValue)
                    ?.label ?? ""
                : inputValue.length > 25
                ? inputValue.substring(0, 20) + "..."
                : inputValue
            }
            autoComplete="off"
            className={`flex-grow outline-none bg-white ${
              disabled
                ? "text-slatyGrey"
                : open
                ? "text-primary"
                : "text-darkCharcoal"
            } text-[14px] font-normal w-full
     ${
       disabled ? "cursor-default" : !open ? "cursor-pointer" : "cursor-default"
     } ${
              !open
                ? "placeholder-darkCharcoal"
                : disabled
                ? "text-slatyGrey"
                : "placeholder-primary"
            }`}
          />

          <div
            onClick={handleToggleOpen}
            className={`text-[1.5rem] ${
              disabled
                ? "text-slatyGrey cursor-default"
                : "text-darkCharcoal cursor-pointer"
            } ${open ? "rotate-180" : ""}`}
          >
            <ChevronDown />
          </div>
        </div>
        {open && (
          <ul
            className={`absolute z-10 bg-pureWhite mt-[1px] shadow-md transition-transform w-full ${
              open
                ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500"
                : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
            } ${open ? "ease-out" : ""}`}
            style={{ width: selectRef.current?.clientWidth }}
          >
            <li className="relative flex flex-col max-h-40 overflow-y-auto">
              <ul>
                {filteredOptions.length > 0 &&
                  filteredOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`p-[10px] group/item text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex flex-row items-center ${
                        addDynamicForm ? "justify-between" : ""
                      } ${
                        option.value === selectedOption?.value
                          ? "bg-whiteSmoke"
                          : ""
                      }`}
                      onClick={() => {
                        if (option.value !== inputValue) {
                          handleSelect(option.value);
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
                      {option.label}

                      {(addDynamicForm || addDynamicForm_Icons_Edit) && (
                        <a className="group/edit invisible hover:bg-slate-100 group-hover/item:visible">
                          <div className="flex flex-row right-0 mr-2 justify-end items-end">
                            {addDynamicForm_Icons_Edit && (
                              <div
                                className="p-[2px]"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  setTextValue(option.value);
                                  setInputLabel(option.label);
                                  onChangeText(option.value, option.label);
                                  setEditing(true);
                                }}
                              >
                                <EditIconDropdown />
                              </div>
                            )}

                            {addDynamicForm_Icons_Delete && (
                              <div
                                className="p-[2px]"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  onChangeText(option.value, option.label);
                                  handleDeleteValue(option.value);
                                }}
                              >
                                <DeleteIconDropdown />
                              </div>
                            )}
                          </div>
                        </a>
                      )}
                    </li>
                  ))}
              </ul>
            </li>
            {(addDynamicForm || editing) && (
              <li className="w-full z-50 bg-pureWhite">
                <div className="bg-gray-100 flex flex-row items-center justify-between ">
                  <div className="m-2 w-full">
                    <Text
                      noSpecialChar
                      validate
                      label={addDynamicForm_Label}
                      placeholder={addDynamicForm_Placeholder}
                      className="w-full"
                      value={editing ? inputLabel : textName}
                      getValue={(e) => {
                        if (editing) {
                          setOpen(true);
                          setInputLabel(e);
                          onChangeText(textValue, e);
                        } else {
                          setTextName(e);
                          onChangeText(textValue, e);
                        }
                      }}
                      hasError={textNameHasError}
                      getError={(e) => setTextNameError(e)}
                    />
                  </div>
                  <div className="ml-3 mr-2">
                    <Button
                      type="button"
                      variant="btn-primary"
                      className="rounded-[4px] !h-auto"
                      onClick={handleSubmit}
                    >
                      {editing ? "Save" : "ADD"}
                    </Button>
                  </div>
                </div>
              </li>
            )}
          </ul>
        )}
      </div>
      {!error && supportingText && (
        <span className="text-slatyGrey text-[12px] sm:text-[14px] -mt-[20px]">
          {supportingText}
        </span>
      )}
      {error && !inputValue && (
        <span
          className={`text-defaultRed text-[12px] sm:text-[14px] ${errorClass}`}
        >
          {errMsg}
        </span>
      )}
    </>
  );
};

export { Select };