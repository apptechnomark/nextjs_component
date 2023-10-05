
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import "../MenuIcon/MenuIcon.module.scss";
import MinusIcon from "./icons/MinusIcon"
import { Tooltip } from "../Tooltip/Tooltip";
import "../Tooltip/Tooltip.module.scss";

interface IconName {
    icon?: React.ReactNode;
    name?: string;
}

interface NavigationBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    tabs?: any;
    getValue?: (arg: string) => void;
    visibleTab?: number;
    tableBarIcons?: React.ReactNode[];
    count?: number;
    message?: string;
    icons?: IconName[];
    variant?: "default" | "selectedRows";
    Size?: "large";
}

const PropertyBar: React.FC<NavigationBarProps> = ({
    className,
    disabled,
    getValue,
    tabs,
    visibleTab,
    tableBarIcons,
    count,
    icons,
    message,
    variant = "default",
    Size = "default",
    ...props
}) => {

    const selectRef = useRef<HTMLDivElement>(null);
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const [tab, setTab] = useState<string>(
        tabs && tabs.length > 0 ? tabs[0].id : ""
    );
    const [visibleTabs, setVisibleTabs] = useState<any>(
        tabs ? tabs.slice(0, visibleTab) : []
    );
    const [dropdownTabs, setDropdownTabs] = useState<any>(
        tabs ? tabs.slice(visibleTab) : []
    );
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

    const firstIcon = tableBarIcons && tableBarIcons.length > 0 ? tableBarIcons[0] : null;
    const otherIcons = tableBarIcons && tableBarIcons.length > 1 ? tableBarIcons.slice(1) : [];


    const containerClasses = `bg-whiteSmoke rounded-[127px] w-auto border-[1px] border-primary py-[15px] ${Size === "large" ? "px-[30px]" : "px-[20px]"
        } flex`;


    return (
        <>

            {variant === "selectedRows" ? (
                <div>
                    <div className={containerClasses}>
                        <div className="gap-2.5 flex">
                            <div>
                                <MinusIcon />
                            </div>
                            <span >
                                {count} task selected
                            </span>
                        </div>
                        <div className="flex ml-[40px] ">
                            <div className="border-x-2 border-lightSilver items-center flex px-[10px]">{firstIcon}</div>
                            {otherIcons.map((icon, index) => (
                                <div key={index} className="border-r-2 border-lightSilver items-center flex px-[10px]">{icon}</div>
                            ))}
                            <Button className="rounded-md btn-sm ml-5" variant="btn-outline-primary">Submit Task</Button>
                        </div>
                        <div className="ml-[40px]">
                            <span className="text-slatyGrey italic">
                                {message}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between bg-whiteSmoke h-[76px]">
                    <div className="flex items-center  ">
                        {visibleTabs.map((tab: any, index: number) => (
                            <div onClick={() => handleTabClick(tab.id, index)} key={tab.id + index}>
                                <label
                                    className={`border-r ${index > tabs?.length - 2 ? "border-none" : "border-r-lightSilver"
                                        } px-5 cursor-pointer ${selectedTabIndex === index
                                            ? "text-primary text-base font-semibold"
                                            : "text-slatyGrey font-medium text-sm"
                                        }`}
                                >
                                    {tab.label}
                                </label>
                            </div>
                        ))}
                        {visibleTab < tabs?.length && (
                            <div ref={selectRef} className="cursor-pointer">
                                <div onClick={handleToggleOpen} className="px-4 opacity-75">
                                    <MenuIcon size="small" direction="meatball" classname="w-full" />
                                </div>
                                <div>
                                    <ul
                                        className={`absolute w-[215px] py-2 z-[1] bg-pureWhite overflow-y-auto transition-transform drop-shadow-lg ${isOpen
                                            ? "max-h-full translate-y-0 transition-opacity opacity-100 duration-500 ease-out"
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
                                                <label className="cursor-pointer">{tab.label}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2">
                        {icons &&
                            icons.map((info, index) => (
                                <div className="flex items-center cursor-pointer" key={`icon-${index}`}>
                                    {info.name ? (
                                        <Tooltip position="top" content={info.name}>
                                            {info.icon}
                                        </Tooltip>
                                    ) : (
                                        info.icon
                                    )}
                                </div>
                            ))}
                    </div>
                </div>)}
        </>
    );
};

export { PropertyBar };