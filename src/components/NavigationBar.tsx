import React, { useEffect, useRef, useMemo, useState, useCallback } from "react";

interface NavigationBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  tabs: any;
  getValue: (arg: string) => void;
  visibleTab: number;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  className,
  disabled,
  getValue,
  tabs,
  visibleTab,
  ...props
}) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [tab, setTab] = useState<string>(tabs[0].id);
  const [visibleTabs, setVisibleTabs] = useState<any>(tabs.slice(0, visibleTab));
  const [dropdownTabs, setDropdownTabs] = useState<any>(tabs.slice(visibleTab));
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleTabClick = (tabId: string, index: number) => {
    const clickedTab = dropdownTabs[index];
    const lastVisibleTab = visibleTabs[visibleTabs.length - 1];

    // Check if the clicked tab is already visible, then return
    if (visibleTabs.some((tab: any) => tab.id === tabId)) {
      setTab(tabId); // Update the tab state
      setSelectedTabIndex(index);
      return;
    }
    // Find the index of the clicked tab in the dropdownTabs array
    const clickedTabIndexInDropdown = dropdownTabs.findIndex(
      (tab:any) => tab.id === tabId
    );

    // Update the state to swap the tabs
    const updatedVisibleTabs = [...visibleTabs];
    const updatedDropdownTabs = [...dropdownTabs];

    // Replace the last visible tab with the clicked tab
    updatedVisibleTabs[visibleTabs.length - 1] = clickedTab;

    // If the clicked tab is already in the dropdown, replace it with the last visible tab
    if (clickedTabIndexInDropdown !== -1) {
      updatedDropdownTabs[clickedTabIndexInDropdown] = lastVisibleTab;

      // Find the new index of the selected tab in the visible tabs
      const newSelectedTabIndex = updatedVisibleTabs.findIndex(
        (tab) => tab.id === tabId
      );
      setSelectedTabIndex(newSelectedTabIndex);
    } else {
      // If the clicked tab is not in the dropdown, add the last visible tab to the beginning of the dropdown
      updatedDropdownTabs.unshift(lastVisibleTab);
      setSelectedTabIndex(visibleTabs.length + clickedTabIndexInDropdown);
    }

    setTab(tabId);
    setVisibleTabs(updatedVisibleTabs);
    setDropdownTabs(updatedDropdownTabs);
  }
useEffect(()=>{
  getValue(tab);
},[tab])
  // To Toggle Tab-list
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="flex items-center py-[10px]">
        {visibleTabs.map((tab: any, index: number) => (
          <div onClick={() => handleTabClick(tab.id, index)} key={tab.id + index}>
            {/* Typography type="h6" */}
            <label
              className={`border-r ${index > (tabs.length - 2) ? `border-none` : `border-r-lightSilver`} px-[20px] cursor-pointer ${selectedTabIndex === index
                ? "text-primary text-base font-semibold"
                : "text-slatyGrey font-medium text-sm"
                }`}
            >
              {tab.label}
            </label>
          </div>
        ))}
        {visibleTab < tabs.length &&
          <div ref={selectRef} className="cursor-pointer">
            <span onClick={handleToggleOpen}>
              M
            </span>
            <div>
              <ul
                className={`absolute w-[215px] py-2 z-[1] bg-pureWhite overflow-y-auto transition-transform drop-shadow-lg ${isOpen
                  ? "max-h-full translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
                  : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                  } `}
              >
                {dropdownTabs.map((tab: any, index: number) => (
                  <li
                    key={tab.id}
                    onClick={() =>
                      handleTabClick(
                        tab.id,
                        // visibleTabs.length +
                        index
                      )
                    }
                    className="p-2 hover:bg-whiteSmoke font-normal text-base cursor-pointer flex"
                  >
                    <label className="cursor-pointer">{tab.label}</label>
                  </li>
                ))}

              </ul>
            </div>

          </div>}
      </div>
    </>
  );
};

export { NavigationBar };