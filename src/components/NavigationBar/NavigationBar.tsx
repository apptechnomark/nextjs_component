import React, { useEffect, useRef, useState } from "react";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import Typography from "../Typography/Typography";

interface NavigationBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    tabs: any;
    getValue: (arg: string) => void;
    visibleTab: number;
    variant?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
    className,
    disabled,
    getValue,
    tabs,
    visibleTab,
    variant,
    ...props
}) => {
    const selectRef = useRef<HTMLDivElement>(null);

    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const [tab, setTab] = useState<string>(tabs[0].id);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [visibleTabs, setVisibleTabs] = useState<any>(tabs.slice(0, visibleTab));
    const [dropdownTabs, setDropdownTabs] = useState<any>(tabs.slice(visibleTab));

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 321) {
                setVisibleTabs(tabs.slice(0, 1));
                setDropdownTabs(tabs.slice(1));
            }
            else if (window.innerWidth >= 322 && window.innerWidth <= 425) {
                setVisibleTabs(tabs.slice(0, 2));
                setDropdownTabs(tabs.slice(2));
            }
            else {
                setVisibleTabs(tabs.slice(0, visibleTab));
                setDropdownTabs(tabs.slice(visibleTab));
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [tabs]);

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
            (tab: any) => tab.id === tabId
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
    useEffect(() => {
        getValue(tab);
    }, [tab])

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

    const tabLabel = (index: number, label: any) => {
        return <Typography className={`border-r ${index > (tabs.length - 2) ? `border-none` : `border-r-lightSilver`} px-5 cursor-pointer ${selectedTabIndex === index
            ? "text-primary text-base font-semibold"
            : "text-slatyGrey font-medium text-sm"
            }`} type="h5">
            {label}

        </Typography>
    }

    return (
        <>
            <div className="flex items-center py-[10px] relative ">
                {visibleTabs.map((tab: any, index: number) => (
                    <div onClick={() => handleTabClick(tab.id, index)} key={tab.id + index}>
                        {variant === "modal"
                            ? <a href={`#${tab.id}`}>
                                {tabLabel(index, tab.label)}
                            </a>
                            : tabLabel(index, tab.label)
                        }
                    </div>
                ))}
                {visibleTab <= tabs.length && dropdownTabs.length > 0 &&
                    <div ref={selectRef} className="cursor-pointer ">
                        <div onClick={handleToggleOpen} className="px-4 opacity-75" >
                            <MenuIcon size="small" direction="meatball" classname="w-full" />
                        </div>
                        <div>
                            <ul
                                className={`absolute z-[1] max-[425px]:right-0 max-[425px]:w-full w-[215px] bg-pureWhite overflow-y-auto shadow-md transition-transform ${isOpen
                                    ? "max-h-60 translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
                                    : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500"
                                    }`}
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
                                        {variant === "modal"
                                            ? <a href={`#${tab.id}`}>
                                                <Typography type="h6" className="cursor-pointer">{tab.label}</Typography>
                                            </a>
                                            : <Typography type="h6" className="cursor-pointer">{tab.label}</Typography>}
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
