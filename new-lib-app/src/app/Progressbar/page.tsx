"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { ProgressBar } from "next-ts-lib";
import "next-ts-lib/dist/index.css"


const progressBar: React.FC = () => {
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Progress Bar</h5>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pb-4 pl-7">
                <ProgressBar progress={10} label="Primary" variant="primary" />
                <ProgressBar progress={30} label="Success" variant="success" />
                <ProgressBar progress={40} label="Danger" variant="danger" />
                <ProgressBar progress={60} label="Info" variant="info" />
                <ProgressBar progress={80} label="Warning" variant="warning" />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Progress Bar with striped</h2>
            <div className="pb-4 pl-7">
                <ProgressBar progress={10} label="Primary" variant="primary" striped />
                <ProgressBar progress={30} label="Success" variant="success" striped />
                <ProgressBar progress={40} label="Danger" variant="danger" striped />
                <ProgressBar progress={60} label="Warning" variant="warning" striped />
                <ProgressBar progress={80} label="Info" variant="info" striped />

            </div>
        </div>
    </BaseLayout >;
};

export default progressBar;