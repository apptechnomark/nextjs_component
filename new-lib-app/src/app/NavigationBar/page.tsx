"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { CountrySelect, NavigationBar } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const navigationBar: React.FC = () => {
    const [value, setValue] = useState<string>("");

    const tabs = [
        { id: "class", label: "CLASS" },
        { id: "location", label: "LOCATION" },
        { id: "department", label: "DEPARTMENT" },
        { id: "project", label: "PROJECT" },
        { id: "mechanical", label: "MECHANICAL" },
        { id: "it", label: "IT" },
        { id: "electrical", label: "ELECTRICAL" },
    ];

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Country Select Dropdown</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <NavigationBar
                tabs={tabs}
                visibleTab={4}
                getValue={(e: any) => { setValue(e) }}
            />
        </div>
    </BaseLayout>;
};

export default navigationBar;