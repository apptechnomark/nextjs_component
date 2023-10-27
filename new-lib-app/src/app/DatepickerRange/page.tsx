"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { DatepickerRange, DatepickerRangeExpanded } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const Page: React.FC = () => {
    const [startDate, setStartDate] = useState<string>("2023-10-01 to 2023-11-19");    

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calendar Range </h5>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="pb-4 pl-8">
                <DatepickerRange id="Datepicker" label="Datepicker" validate startYear={1990} endYear={2080} getValue={(v: string) => setStartDate(v)} getError={() => { }} />
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Expanded Calendar</h2>
            <div className="pb-4 pl-8">
                <DatepickerRangeExpanded id="Datepicker" label="Datepicker" validate  startYear={1990} endYear={2080} getValue={(v: string) => setStartDate(v)} getError={() => { }} />
            </div>
        </div>
    </BaseLayout>;
};

export default Page;