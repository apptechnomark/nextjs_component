"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { Button, PropertyBar } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import PlusIcon from "./icons/PlusIcon";
import Export from "./icons/Export";
import Import from "./icons/import"
import Filter from "./icons/Filter"
import News from "./icons/News"
import Cancel from "./icons/Cancel"
import Check from "./icons/Check"
import Rate from "./icons/Rate"
import Chat from "./icons/Chat"
import Sync from "./icons/Sync"

const page: React.FC = () => {
    const [value, setValue] = useState("class");

    const iconsInfo = [
        {
            icon: <Sync key={1} />,
            name: "Sync",
        },
        {
            icon: <Chat key={2} />,
            name: "Chat",
        },
        {
            icon: <Rate key={3} />,
            name: "Rate",
        },
        {
            icon: <Check key={4} />,
            name: "Check",
        },
        {
            icon: <Cancel key={5} />,
            name: "Cancel",
        },
        {
            icon: <News key={6} />,
            name: "News",
        },
        {
            icon: <Filter key={7} />,
            name: "Filter",
        },
        {
            icon: <Import key={8} />,
            name: "Import",
        },
        {
            icon: <Export key={9} />,
            name: "Export",
        },
        {
            icon: <Button className="rounded-md btn-sm" variant="btn-primary">
                <span className="flex items-center">
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

    const values = (e: any) => {
        setValue(e);
    }

    const iconsArray = [<Export key={1} />, <Import key={2} />, <Filter key={3} />, <News key={4} />];

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Property Bar</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="">

                <PropertyBar
                    tabs={tabs}
                    visibleTab={2}
                    getValue={(e) => { setValue(e) }}
                    icons={iconsInfo}
                />
            </div>
        </div>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Row select</h2>
            <div className="overflow-x-auto">

                <PropertyBar variant="selectedRows" count={10} getValue={values} tableBarIcons={iconsArray} message="shift+click to select, esc to deselect all" />
            </div>
        </div>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Row select(Large)</h2>
            <div className="overflow-x-auto">

                <PropertyBar variant="selectedRows" count={5} getValue={values} tableBarIcons={iconsArray} message="shift+click to select, esc to deselect all" Size="large" />
            </div>
        </div>
    </BaseLayout>;
};

export default page;