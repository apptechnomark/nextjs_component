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

    const options = [
        { label: "Option 2", value: "option 2" },
        { label: "Option 3", value: "option 3" },
        { label: "Hello 1", value: "Hello 1" },
        { label: "Hello 11", value: "Hello 11" },
        { label: "Hello 12", value: "Hello 12" },
        { label: "Hello 13", value: "Hello 13" },
        { label: "Hello 14", value: "Hello 14" },
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
        { id: "tab11", label: "Tab1", icon: <PlusIcon bgColor={iValue === "tab11" ? "#02B89D" : "#333333"} />, alignIcon: "left" },
        { id: "tab21", label: "Placeholder Text", icon: <PlusIcon bgColor={iValue === "tab21" ? "#02B89D" : "#333333"} />, alignIcon: "left" },
        { id: "tab31", label: "Placeholder Text", icon: <PlusIcon bgColor={iValue === "tab31" ? "#02B89D" : "#333333"} />, alignIcon: "right" },
        { id: "tab41", label: "Placeholder Text", icon: <PlusIcon bgColor={iValue === "tab41" ? "#02B89D" : "#333333"} />, alignIcon: "right" },
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
                    options={options}
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
                    options={options}
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
                    options={options}
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
                    options={options}
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
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Default Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={defaultTabs} getValue={(e: any) => {
                            setValue(e);
                        }} />
                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Full Width Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={fullTabs} getValue={(e: any) => {
                            setFValue(e);
                        }} />

                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Centered Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={centeredTabs} getValue={(e: any) => {
                            setCValue(e);
                        }} />
                    </div>
                </div> 
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Icon Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={iconTab} getValue={(e: any) => {
                            setIValue(e);
                        }} />

                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Dropdown Tabs
                    </h2>
                    <div className="mx-7">
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
