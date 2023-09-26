"use client";

import { NavigationBar, Switch } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
const navigationBar: React.FC = () => {
    const [value, setValue] = useState<string>("class");

    const defaultTabs = [
        { id: "tab1", label: "TAB 1" },
        { id: "tab2", label: "TAB 2" },
        { id: "tab3", label: "TAB 3" },
        { id: "tab4", label: "TAB 4" },
    ];
    const tabs = [
        { id: "class", label: "CLASS" },
        { id: "location", label: "LOCATION" },
        { id: "department", label: "DEPARTMENT" },
        { id: "project", label: "PROJECT" },
        { id: "mechanical", label: "MECHANICAL" },
        { id: "it", label: "IT" },
        { id: "electrical", label: "ELECTRICAL" },
    ];

    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Navigation Bar
            </h5>

            <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">
                    Default Navigation
                </h2>
                <NavigationBar
                    tabs={defaultTabs}
                    visibleTab={4}
                    getValue={(e: any) => {
                        setValue(e);
                    }}
                />
            </div>
            <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">
                    Navigation With More Option
                </h2>
                <NavigationBar
                    tabs={tabs}
                    visibleTab={4}
                    getValue={(e: any) => {
                        setValue(e);
                    }}
                />
            </div>

        </BaseLayout>
    );
};

export default navigationBar;