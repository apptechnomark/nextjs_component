"use client";
import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Uploader } from "next-ts-lib";
import "next-ts-lib/dist/index.css"


const fileUploader: React.FC = () => {
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">File Uploader</h5>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pb-4 pl-6">
                <Uploader />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Small variant</h2>
            <div className="pb-4 pl-6">
                <Uploader variant="small" />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Multi Select</h2>
            <div className="pb-4 pl-6">
                <Uploader multiSelect />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Multi Select with small variant</h2>
            <div className="pb-4 pl-6">
                <Uploader variant="small" multiSelect />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Select with Url</h2>
            <div className="pb-4 pl-6">
                <Uploader type="url" />
            </div>
        </div>
    </BaseLayout >;
};

export default fileUploader;