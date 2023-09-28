import React, { useEffect, useRef, useState } from "react";

import DropdownIcon from "./icons/ChevronDown.js";
import CheckBox from "../Checkbox/Checkbox";
import { Text } from "../Textfield/Text";
import "../Checkbox/checkbox.module.scss";
import styles from "./search.module.scss";
import CrossIcon from "./icons/CrossIcon"
interface SearchProps {
  variant?: 'rounded' | 'dropdown' | 'animated';
  options?: { value: string; label: string }[];
  type?: string;
  Data?: string[];
  getValue?: (results: string[]) => void;
}

function SearchBar({ variant, options, type, Data, getValue }: SearchProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>(Data);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const filteredResults = Data?.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredResults);
  }, [searchTerm, Data]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      getValue(filteredData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const selectRef = useRef<HTMLDivElement>(null);

  const isRounded = variant === "rounded";
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const openDropdownOnClick = () => {
    if (options) {
      toggleDropdown();
      setOpen(!open)
    }

  };

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

  const handleSelect = (value: string) => {
    const selectedIndex = selected.indexOf(value);
    let updatedSelected: string[];

    if (selectedIndex === -1) {
      const selectedOption = options.find((option) => option.value === value);
      updatedSelected = [
        ...selected,
        selectedOption ? selectedOption.value : value,
      ];
    } else {
      updatedSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(updatedSelected);
  };


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

    <div>
      {variant === "dropdown" ? (
        <div ref={selectRef}>
          <div className={`flex relative ml-30 w-[250px] border-[1px]  border-[#D8D8D8] rounded-3xl p-[12px]  ${styles.customScrollbar}`}>
            <div className="flex h-auto z-10 absolute left-0 top-3 border-none pl-[12px]" onClick={openDropdownOnClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="search">
                  <mask id="mask0_8538_63412" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_8538_63412)">
                    <path id="search_2" d="M10.0726 15.1424C8.6561 15.1424 7.45654 14.6512 6.47393 13.6689C5.49131 12.6865 5 11.4873 5 10.0712C5 8.65508 5.49131 7.45585 6.47393 6.4735C7.45654 5.49117 8.6561 5 10.0726 5C11.4891 5 12.6887 5.49117 13.6713 6.4735C14.6539 7.45585 15.1452 8.65508 15.1452 10.0712C15.1452 10.6634 15.0458 11.2289 14.8469 11.768C14.648 12.307 14.3827 12.7758 14.0509 13.1745L18.8237 17.9459C18.9385 18.0607 18.9973 18.2051 18.9999 18.3789C19.0026 18.5527 18.9438 18.6997 18.8237 18.8198C18.7035 18.9399 18.5578 19 18.3866 19C18.2154 19 18.0697 18.9399 17.9495 18.8198L13.1768 14.0484C12.762 14.3907 12.2851 14.6586 11.7459 14.8521C11.2068 15.0456 10.649 15.1424 10.0726 15.1424ZM10.0726 13.8985C11.1414 13.8985 12.0466 13.5278 12.7884 12.7862C13.5301 12.0447 13.901 11.1397 13.901 10.0712C13.901 9.00272 13.5301 8.09771 12.7884 7.35616C12.0466 6.61462 11.1414 6.24384 10.0726 6.24384C9.00383 6.24384 8.09857 6.61462 7.35682 7.35616C6.61508 8.09771 6.24421 9.00272 6.24421 10.0712C6.24421 11.1397 6.61508 12.0447 7.35682 12.7862C8.09857 13.5278 9.00383 13.8985 10.0726 13.8985Z" fill="#6E6D7A" />
                  </g>
                </g>
              </svg>
            </div>

            <div className={`  flex h-auto absolute left-[35px] z-10 top-[22px]  border-none transition-transform cursor-pointer ${open ? "rotate-180 text-primary duration-400" : "duration-200"}`} onClick={openDropdownOnClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                <path d="M4.15 5L0 0.851064L0.851282 0L4.15 3.29787L7.44872 0L8.3 0.851064L4.15 5Z" fill="#6E6D7A" />
              </svg>
            </div>

            <div
              onClick={() => { setOpen(true) }}
              className={`shrink-0   w-fit h-[26px] ml-[32px] text-[14px] font-normal  ${open
                ? "text-primary cursor-default"
                : selected.length === 0
                  ? "text-darkCharcoal cursor-pointer"
                  : ""
                } `}
            >
              {selectedDisplay}
            </div>

            <div className="w-fit flex-1 ">
              <Text
                type="text"
                className="pl-1.5"
                placeholder="Default Search"
                noborder
                onClick={openDropdownOnClick} getValue={() => { }} getError={() => { }} />
            </div>
          </div>

          {
            options && (
              <div
                className={`relative  px-1 right-0 flex justify-center items-center cursor-pointer `}
                onClick={toggleDropdown}
              >
              </div>
            )
          }
          {
            options && (
              <ul
              className={`absolute z-[1] w-[250px] h-[215px] bg-pureWhite mt-[1px] overflow-y-auto shadow-md transition-transform ${open
                  ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
                  : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                  } `}
          >
                {options.length > 0 &&
                  options.map((option, index) => (
                    <li
                      key={index}
                      className={`outline-none focus:bg-whiteSmoke p-[10px] text-[14px] hover:bg-whiteSmoke font-normal cursor-pointer flex items-center ${selectedValues.includes(option.value) ? "bg-whiteSmoke" : ""
                        } ${!option.label.toLowerCase().startsWith(inputValue)
                          ? "hidden"
                          : ""
                        }`}
                      onClick={
                        type !== "checkbox"
                          ? () => {
                            if (option.value !== inputValue) {
                              handleSelect(option.value);
                            }
                          }
                          : undefined
                      }
                    >
                      <CheckBox
                        id={option.value}
                        checked={selected.includes(option.value)}
                        onChange={(e: any) => {
                          e.target.checked
                            ? handleSelect(option.value)
                            : handleSelect(option.value);
                        }}
                      /><span className="ml-2"> {option.label}</span>
                    </li>
                  ))}
              </ul>
            )
          }

        </div >
      ) : variant === "animated" ? (

        <form className={styles.search}>
          <input
            type="text"
            id="search"
            className={styles.search__input}
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className={styles.search__button}
            onClick={handleSearch}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_8148_121547"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_8148_121547)">
                <path
                  d="M10.0726 15.1424C8.6561 15.1424 7.45654 14.6512 6.47393 13.6689C5.49131 12.6865 5 11.4873 5 10.0712C5 8.65508 5.49131 7.45585 6.47393 6.4735C7.45654 5.49117 8.6561 5 10.0726 5C11.4891 5 12.6887 5.49117 13.6713 6.4735C14.6539 7.45585 15.1452 8.65508 15.1452 10.0712C15.1452 10.6634 15.0458 11.2289 14.8469 11.768C14.648 12.307 14.3827 12.7758 14.0509 13.1745L18.8237 17.9459C18.9385 18.0607 18.9973 18.2051 18.9999 18.3789C19.0026 18.5527 18.9438 18.6997 18.8237 18.8198C18.7035 18.9399 18.5578 19 18.3866 19C18.2154 19 18.0697 18.9399 17.9495 18.8198L13.1768 14.0484C12.762 14.3907 12.2851 14.6586 11.7459 14.8521C11.2068 15.0456 10.649 15.1424 10.0726 15.1424ZM10.0726 13.8985C11.1414 13.8985 12.0466 13.5278 12.7884 12.7862C13.5301 12.0447 13.901 11.1397 13.901 10.0712C13.901 9.00272 13.5301 8.09771 12.7884 7.35616C12.0466 6.61462 11.1414 6.24384 10.0726 6.24384C9.00383 6.24384 8.09857 6.61462 7.35682 7.35616C6.61508 8.09771 6.24421 9.00272 6.24421 10.0712C6.24421 11.1397 6.61508 12.0447 7.35682 12.7862C8.09857 13.5278 9.00383 13.8985 10.0726 13.8985Z"
                  fill="#6E6D7A"
                />
              </g>
            </svg>
          </button>
        </form>

      ) : (
        <div>
          <div className={`font-Arial relative ml-30 w-[250px] border-[1px] ${isRounded ? 'rounded' : ''} border-[#D8D8D8] rounded-5 p-[12px]`}>
            <button className="h-auto bg-white absolute left-0 border-none pl-[12px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="search">
                  <mask id="mask0_8538_63412" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect id="Bounding box" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_8538_63412)">
                    <path id="search_2" d="M10.0726 15.1424C8.6561 15.1424 7.45654 14.6512 6.47393 13.6689C5.49131 12.6865 5 11.4873 5 10.0712C5 8.65508 5.49131 7.45585 6.47393 6.4735C7.45654 5.49117 8.6561 5 10.0726 5C11.4891 5 12.6887 5.49117 13.6713 6.4735C14.6539 7.45585 15.1452 8.65508 15.1452 10.0712C15.1452 10.6634 15.0458 11.2289 14.8469 11.768C14.648 12.307 14.3827 12.7758 14.0509 13.1745L18.8237 17.9459C18.9385 18.0607 18.9973 18.2051 18.9999 18.3789C19.0026 18.5527 18.9438 18.6997 18.8237 18.8198C18.7035 18.9399 18.5578 19 18.3866 19C18.2154 19 18.0697 18.9399 17.9495 18.8198L13.1768 14.0484C12.762 14.3907 12.2851 14.6586 11.7459 14.8521C11.2068 15.0456 10.649 15.1424 10.0726 15.1424ZM10.0726 13.8985C11.1414 13.8985 12.0466 13.5278 12.7884 12.7862C13.5301 12.0447 13.901 11.1397 13.901 10.0712C13.901 9.00272 13.5301 8.09771 12.7884 7.35616C12.0466 6.61462 11.1414 6.24384 10.0726 6.24384C9.00383 6.24384 8.09857 6.61462 7.35682 7.35616C6.61508 8.09771 6.24421 9.00272 6.24421 10.0712C6.24421 11.1397 6.61508 12.0447 7.35682 12.7862C8.09857 13.5278 9.00383 13.8985 10.0726 13.8985Z" fill="#6E6D7A" />
                  </g>
                </g>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Default Search"
              className="w-[200px] ml-4 text-24px border-none outline-none pl-4"
            />
          </div>

        </div>
      )}
    </div>
  )
};

export { SearchBar };