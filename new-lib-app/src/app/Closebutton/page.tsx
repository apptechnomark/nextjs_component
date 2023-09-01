"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import {  Close, Tooltip } from "next-ts-lib";
import "next-ts-lib/dist/index.css"




const close: React.FC = () => {
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Close Button</h5>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7  text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pt-3 pl-4 items-center mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <Tooltip position="top" content='Close' className="!p-0">
                <Close  variant="small"/>
                </Tooltip>
                <Tooltip position="top" content='Close' className="!p-0">
                <Close  variant="medium"/>
                </Tooltip>
                <Tooltip position="top" content='Close' className="!p-0">
                <Close  />
                </Tooltip>
            </div>
        </div>
    </BaseLayout>;
};

export default close;