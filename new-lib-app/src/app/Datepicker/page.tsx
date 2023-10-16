"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { Datepicker, DatepickerYear } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const page: React.FC = () => {
  const [selected, setSelected] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Date Picker</h5>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
        <div className="pb-4 pl-8">
          <Datepicker label="Company" id="company" validate startYear={1990} endYear={2080} value={selected} getValue={(value: string) => setSelected(value)}
            getError={(err) => {setErr(err) }} />
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Month and Year only</h2>
        <div className="pb-4 pl-8">
          <DatepickerYear label="Company" id="company"   getError={(err) => {setErr(err) }} validate startYear={1990} endYear={2080} value={selected} getValue={(value: string) => setSelected(value)} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default page;
