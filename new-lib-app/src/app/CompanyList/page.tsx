"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { CompanyList } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const page: React.FC = () => {
    const options = [
        { label: "Option 1", value: "Option 1", imageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
        { label: "Option 2", value: "Option 2", imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
        { label: "Option 3", value: "Option 3" },
        { label: "Option 4", value: "Option 4", imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
        { label: "John Doe", value: "John Doe", imageUrl: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
        { label: "Helen Matthew", value: "Helen Matthew" },
        { label: "Jane Smith", value: "Jane Smith" },
    ];

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Company Select Dropdown</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <CompanyList id="company" showAvatar={3} label="Company" noborder options={options} getError={() => { }} getValue={() => { }} />
        </div>
        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Assign User</h2>
            <CompanyList id="user" showAvatar={4} label="User" variant="user" noborder options={options} getError={() => { }} getValue={() => { }} />
        </div>
    </BaseLayout>;
};

export default page;