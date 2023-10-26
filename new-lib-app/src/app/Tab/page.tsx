"use client"

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { TabBar, MultiSelect } from "next-ts-lib";
import PlusIcon from "./PlusIcon";
import "next-ts-lib/dist/index.css";

const TabComponent: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const [fValue, setFValue] = useState<string>("");
    const [dValue, setDValue] = useState<string>("");
    const [cValue, setCValue] = useState<string>("");
    const [iValue, setIValue] = useState<string>("tab11");
    const [option, setOption] = useState([]);
    const [optionId, setOptionId] = useState<number>(0);
    const [optionError, setOptionError] = useState<boolean>(false);

    const options1 = [
        { label: "Option 1", value: "Option 1" },
        { label: "Option 2", value: "Option 2" },
        { label: "Option 3", value: "Option 3" },
        { label: "Option 4", value: "Option 4" },
    ];
    const options2 = [
        { label: "Option 5", value: "Option 5" },
        { label: "Option 6", value: "Option 6" },
        { label: "Option 7", value: "Option 7" },
        { label: "Option 8", value: "Option 8" },
    ];
    const options3 = [
        { label: "Hello 1", value: "Hello 1" },
        { label: "Hello 2", value: "Hello 2" },
        { label: "Hello 3", value: "Hello 3" },
        { label: "Hello 4", value: "Hello 4" },
    ];
    const options4 = [
        { label: "Hello 5", value: "Hello 5" },
        { label: "Hello 6", value: "Hello 6" },
        { label: "Hello 7", value: "Hello 7" },
        { label: "Hello 8", value: "Hello 8" },
    ];
    const defaultTabs = [
        { id: "dtab1", label: "Tab1" },
        { id: "dtab2", label: "Tab2" },
        { id: "dtab3", label: "Tab3" },
        { id: "dtab4", label: "Tab4", disabled: true },
    ]

    const fullTabs = [
        { id: "ftab1", label: "Placeholder Text" },
        { id: "ftab2", label: "Placeholder Text" },
        { id: "ftab3", label: "Placeholder Text" },
        { id: "ftab4", label: "Placeholder Text" },
    ]

    const iconTab = [
        { id: "tab11", label: "Tab1", icon: <PlusIcon bgColor={iValue === "tab11" ? "#0592C6" : "#333333"} />, alignIcon: "left" },
        { id: "tab21", label: "Placeholder Text", icon: <PlusIcon bgColor={iValue === "tab21" ? "#0592C6" : "#333333"} />, alignIcon: "left" },
        { id: "tab31", label: "Placeholder Text", icon: <PlusIcon bgColor={iValue === "tab31" ? "#0592C6" : "#333333"} />, alignIcon: "right" },
        { id: "tab41", label: "Placeholder Text", icon: <PlusIcon bgColor={iValue === "tab41" ? "#0592C6" : "#333333"} />, alignIcon: "right" },
    ]

    const centeredTabs = [
        { id: "ctab1", label: "Tab1" },
        { id: "ctab2", label: "Tab2" },
        { id: "ctab3", label: "Tab3" },
        { id: "ctab4", label: "Tab4", disabled: true },
    ]

    const dropdownTab = [
        {
            id: "ddtab1", jsxElement:
                <MultiSelect
                    type="checkbox"
                    options={options1}
                    id="basic"
                    noborder
                    onSelect={(value: any) => setValue(value)}
                    getValue={(value: any) => setOptionId(value)}
                    getError={(e: any) => setOptionError(e)}
                    hasError={optionError}
                />
        },
        {
            id: "ddtab2", jsxElement:
                <MultiSelect
                    type="checkbox"
                    options={options2}
                    id="basic"
                    noborder
                    onSelect={(value: any) => setValue(value)}
                    getValue={(value: any) => setOptionId(value)}
                    getError={(e: any) => setOptionError(e)}
                    hasError={optionError}
                />
        },
        {
            id: "ddtab3",
            jsxElement:
                <MultiSelect
                    type="checkbox"
                    options={options3}
                    noborder
                    id="basic"
                    onSelect={(value: any) => setValue(value)}
                    getValue={(value: any) => setOptionId(value)}
                    getError={(e: any) => setOptionError(e)}
                    hasError={optionError}
                />
        },
        {
            id: "ddtab4", jsxElement:
                <MultiSelect
                    type="checkbox"
                    options={options4}
                    noborder
                    id="basic"
                    onSelect={(value: any) => setValue(value)}
                    getValue={(value: any) => setOptionId(value)}
                    getError={(e: any) => setOptionError(e)}
                    hasError={optionError}
                />
        },

    ]

    return (
        <>
            <BaseLayout>
                <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tab Bar
                </h5>

                <div className="p-2 m-3 max-[425px]:m-1:p-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="max-[425px]:m-1 m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Default Tabs
                    </h2>
                    <div className="max-[425px]:m-1 mx-7 overflow-x-auto">
                        <TabBar tabs={defaultTabs} getValue={(e: any) => {
                            setValue(e);
                        }} />
                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="max-[425px]:m-1 m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Full Width Tabs
                    </h2>
                    <div className="max-[425px]:m-1 mx-7 overflow-x-auto">
                        <TabBar tabs={fullTabs} getValue={(e: any) => {
                            setFValue(e);
                        }} />

                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="max-[425px]:m-1 m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Centered Tabs
                    </h2>
                    <div className="max-[425px]:m-1 mx-7 overflow-x-auto">
                        <TabBar tabs={centeredTabs} getValue={(e: any) => {
                            setCValue(e);
                        }} />
                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="max-[425px]:m-1 m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Icon Tabs
                    </h2>
                    <div className="max-[425px]:m-1 mx-7 overflow-x-auto">
                        <TabBar tabs={iconTab} getValue={(e: any) => {
                            setIValue(e);
                        }} />

                    </div>
                </div>

                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="max-[425px]:m-1 m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Dropdown Tabs
                    </h2>
                    <div className="max-[425px]:m-1 mx-7 max-[425px]:h-24 max-[425px]:overflow-x-auto min-[426px]:overflow-visible">
                        <TabBar tabs={dropdownTab} getValue={(e: any) => {
                            setDValue(e);
                        }} />
                    </div>
                </div>

            </BaseLayout>

        </>
    );
};

export default TabComponent;
