"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { Button, PropertyBar } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import PlusIcon from "./icons/PlusIcon";

const page: React.FC = () => {
    const [value, setValue] = useState("class");

    const iconsInfo = [
        {
            icon: <PlusIcon key={1} />,
            name: "Icon 1",
        },
        {
            icon: <PlusIcon key={1} />,
        },
        {
            icon: <Button className="rounded-md btn-sm" variant="btn-primary">
                <span className="flex mb-1">
                    <span className="mr-2 mt-1">
                        <PlusIcon />
                    </span>
                    Primary
                </span>
            </Button>,
        },
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

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Property Bar</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <PropertyBar
                tabs={tabs}
                visibleTab={2}
                getValue={(e) => { setValue(e) }}
                icons={iconsInfo}
            />
        </div>
    </BaseLayout>;
};

export default page;