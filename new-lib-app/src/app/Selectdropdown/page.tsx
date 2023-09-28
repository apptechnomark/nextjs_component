"use client"

import React, { useState } from 'react';
import BaseLayout from "../../components/BaseLayout"
import { Select, MultiSelect, MultiSelectChip } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const options = [
    { label: "Option 2", value: "option 2" },
    { label: "Option 3", value: "option 3" },
    { label: "Hello 1", value: "Hello 1" },
    { label: "Hello 11", value: "Hello 11" },
    { label: "Hello 12", value: "Hello 12" },
    { label: "Hello 13", value: "Hello 13" },
    { label: "Hello 14", value: "Hello 14" },
];

const options2 = [
    { label: "Option 2", value: "option 21" },
    { label: "Option 3", value: "option 31" },
    { label: "Hello 1", value: "Hello 1" },
    { label: "Hello 11", value: "Hello 11" },
    { label: "Hello 12", value: "Hello 12" },
    { label: "Hello 13", value: "Hello 13" },
    { label: "Hello 14", value: "Hello 14" },
];

const options3 = [
    { label: "Option 2", value: "option 2" },
    { label: "Option 3", value: "option 3" },
    { label: "Hello 1", value: "Hello 1" },
    { label: "Hello 11", value: "Hello 11" },
    { label: "Hello 12", value: "Hello 12" },
    { label: "Hello 13", value: "Hello 13" },
    { label: "Hello 14", value: "Hello 14" },
];
const SelectComponent: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [option, setOption] = useState([]);
    const [optionId, setOptionId] = useState<number>(0);
    const [optionId2, setOptionId2] = useState<number>(0);
    const [optionError, setOptionError] = useState<boolean>(false);

    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Select Dropdown
            </h5>
            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    Basic
                </h2>
                <div className="pt-3 pl-8 mb-5">
                    <Select
                        id="basic"
                        type="icons"
                        options={options}
                        validate
                        search
                        // addDynamicForm
                        // addDynamicForm_Icons_Edit
                        // addDynamicForm_Icons_Delete
                        // addDynamicForm_Label='Hello'
                        // onChangeText={() => { }}
                        defaultValue={optionId}
                        getValue={(value: any) => setOptionId(value)}
                        getError={(e: any) => setOptionError(e)}
                        hasError={optionError}
                    />
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    MultiSelect Dropdown
                </h2>
                <div className="pt-3 pl-8 mb-5 ">
                    <MultiSelect
                        type="checkbox"
                        options={options2}
                        id="basic"
                        onSelect={(value: any) => setSelectedValue(value)}
                        getValue={(value: any) => setOptionId(value)}
                        getError={(e: any) => setOptionError(e)}
                        hasError={optionError}
                    />
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    MultiSelect Dropdown with chip
                </h2>
                <div className="pt-3 pl-8 mb-5 ">
                    <MultiSelectChip
                        type="icons"
                        options={options3}
                        id="basic"
                        placeholder="Search"
                        onSelect={(value: any) => setSelectedValue(value)}
                        getValue={(value: any) => setOptionId2(value)}
                        getError={(e: any) => setOptionError(e)}
                        hasError={optionError}
                    />
                </div>
            </div>
        </BaseLayout>
    );
}

export default SelectComponent;
