"use client";
import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { ProgressStep } from "next-ts-lib";
import { BsPlusCircle } from "react-icons/bs"
import "next-ts-lib/dist/index.css"


const progresStep: React.FC = () => {
    const labelList = ['Label 1', 'Label 2']

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Progress Bar Steps</h5>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic </h2>
            <div className="pb-4 pl-7">
                <ProgressStep total={5} current={3} label={labelList} />
            </div>
        </div>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pb-4 pl-7">
                <ProgressStep total={5} current={2} label={labelList} customized icon={<BsPlusCircle />} />
            </div>
        </div>
    </BaseLayout >;
};

export default progresStep;