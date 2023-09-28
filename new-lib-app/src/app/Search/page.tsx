"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { SearchBar } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const CalenderRange: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const options = [
        { label: "option1", value: "option1" },
        { label: "option2", value: "option2" },
        { label: "option3", value: "option3" },
        { label: "option4", value: "option4" },
        { label: "option5", value: "option5" },
        { label: "option6", value: "option6" },
    ];

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Search </h5>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pb-4 pl-8">
                <SearchBar />
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic (Rounded Border)</h2>
            <div className="pb-4 pl-8">
                <SearchBar variant="rounded" />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Animated Search</h2>
            <div className="pb-4 pl-8">
                <SearchBar variant="animated" />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Input Search</h2>
            <div className="pb-4 pl-8">
                <SearchBar variant="inputsearch" />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Dropdown Search</h2>
            <div className="pb-4 pl-8">
                <SearchBar variant="dropdown" options={options} />
            </div>
        </div>

    </BaseLayout>;
};

export default CalenderRange;