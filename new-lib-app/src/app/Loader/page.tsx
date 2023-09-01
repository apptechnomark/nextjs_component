"use client";
import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Loader } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const loader: React.FC = () => {
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Loader</h5>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic with space variant</h2>
            <div className="pb-4">
                <Loader size="sm" />
                <Loader size="md" />
                <Loader size="lg" />
            </div>
        </div>
    </BaseLayout >;
};

export default loader;