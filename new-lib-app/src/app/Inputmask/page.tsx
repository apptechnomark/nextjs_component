"use client"

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { InputMask } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const inputMask: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Input Mask</h5>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Credit Card</h2>
        <div className="pb-4 pl-8">
          <InputMask type="credit" getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Phone Number</h2>
        <div className="pb-4 pl-8">
          <InputMask type="phone" getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Time</h2>
        <div className="pb-4 pl-8">
          <InputMask type="time" getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Normal Date Format</h2>
        <div className="pb-4 pl-8">
          <InputMask type="date" getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Date Format in Us</h2>
        <div className="pb-4 pl-8">
          <InputMask type="date" US getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Numeral</h2>
        <div className="pb-4 pl-8">
          <InputMask type="numeral" getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Delimiter</h2>
        <div className="pb-4 pl-8">
          <InputMask type="delimiter" setDelimiter={["·", "-", "-"]} splitLengths={[3, 3, 3, 4]} getValue={(value: string) => setValue(value)}/>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Prefix</h2>
        <div className="pb-4 pl-8">
          <InputMask type="prefix" setPrefix="+91" splitLengths={[3, 3, 3]} getValue={(value: string) => setValue(value)}/>
        </div>
      </div>
    </BaseLayout>
  );
};

export default inputMask;
