"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { DropdownList } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const page: React.FC = () => {
    const [selected, setSelected] = useState("");
    const options = [
        { label: "Option 1", value: "Option 1" },
        { label: "Option 2", value: "Option 2" },
        { label: "Option 3", value: "Option 3" }
    ];

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dropdown List</h5>
        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <DropdownList id={"company"} label="Label" options={options} value={selected} validate getValue={(value) => { setSelected(value) }} getError={() => { }} btnLabel="Add New" />
        </div>
    </BaseLayout>;
};

export default page;