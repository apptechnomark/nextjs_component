"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Tooltip } from "next-ts-lib";
import "next-ts-lib/dist/index.css"


const toolTip: React.FC = () => {

    const breadcrumbitems = [
        { label: "home", url: "/" },
        { label: "about", url: "/about" },
        { label: "contact", url: "/contact" },
    ]
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tooltip</h5>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Left</h2>
            <div className="flex items-center  flex-col">
                <Tooltip content="this is left tooltip" position="left">
                    Left
                </Tooltip>
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Top</h2>
            <div className="flex items-center  flex-col">

                <Tooltip content="this is top tooltip" position="top">
                    Top
                </Tooltip>
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Bottom</h2>
            <div className="flex items-center  flex-col">
                <Tooltip content="this is Bottom tooltip" position="bottom">
                    Bottom
                </Tooltip>
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Right</h2>
            <div className="flex items-center  flex-col">
                <Tooltip content="this is Right tooltip" position="right">
                    Right
                </Tooltip>
            </div>
        </div>

    </BaseLayout>;
};

export default toolTip;
