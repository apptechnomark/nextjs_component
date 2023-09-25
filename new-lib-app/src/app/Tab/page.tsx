"use client"

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { TabBar, MultiSelect } from "next-ts-lib";
import PlusIcon from "./PlusIcon";
import "next-ts-lib/dist/index.css";

const TabComponent: React.FC = () => {
    const [value, setValue] = useState<string>("tab1");
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
        { id: "tab1", label: "Tab1" },
        { id: "tab2", label: "Tab2" },
        { id: "tab3", label: "Tab3" },
        { id: "tab4", label: "Tab4", disabled: true },
    ]

    const fullTabs = [
        { id: "tab1", label: "Placeholder Text" },
        { id: "tab2", label: "Placeholder Text" },
        { id: "tab3", label: "Placeholder Text" },
        { id: "tab4", label: "Placeholder Text" },
    ]

    const iconTab = [
        { id: "tab1", label: "Tab1", icon: <PlusIcon bgColor={value === "tab1" ? "#02B89D" : "#333333"} />, alignIcon: "left" },
        { id: "tab2", label: "Placeholder Text", icon: <PlusIcon bgColor={value === "tab2" ? "#02B89D" : "#333333"} />, alignIcon: "right" },
        { id: "tab3", label: "Placeholder Text", icon: <PlusIcon bgColor={value === "tab3" ? "#02B89D" : "#333333"} />, alignIcon: "right" },
        { id: "tab4", label: "Placeholder Text", icon: <PlusIcon bgColor={value === "tab4" ? "#02B89D" : "#333333"} />, alignIcon: "right" },
    ]
    const dropdownTab = [
        {
            id: "tab1", jsxElement:
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
            id: "tab2", jsxElement:
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
            id: "tab3",
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
            id: "tab4", jsxElement:
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
                            setValue(e);
                        }} />

                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Centered Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={defaultTabs} getValue={(e: any) => {
                            setValue(e);
                        }} />
                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Icon Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={iconTab} getValue={(e: any) => {
                            setValue(e);
                        }} />

                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Dropdown Tabs
                    </h2>
                    <div className="mx-7">
                        <TabBar tabs={dropdownTab} getValue={(e: any) => {
                            setValue(e);
                        }} />

                    </div>
                </div>
            </BaseLayout>

        </>
    );
};

export default TabComponent;
