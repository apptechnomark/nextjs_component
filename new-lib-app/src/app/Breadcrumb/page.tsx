"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Breadcrumb } from "next-ts-lib";
import "next-ts-lib/dist/index.css"


const breadcrumb: React.FC = () => {

    const breadcrumbitems = [
        {label:"Home",url:"/"},
        {label:"Alert",url:"/Alert"},
        {label:"Tooltip",url:"/Tooltip"},
    ]
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Breadcrumb</h5>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pb-4 pl-8">
                <Breadcrumb variant=">" items={breadcrumbitems} />
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic with icon change(/)</h2>
            <div className="pb-4 pl-8">
            <Breadcrumb variant="/" items={breadcrumbitems} />
            </div>
        </div>
    </BaseLayout>;
};

export default breadcrumb;