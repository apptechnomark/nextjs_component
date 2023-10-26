"use client";

import { Range, MinMaxRange } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";

const page: React.FC = () => {
    const [number, setNumber] = useState<number>(0);

    const handleChange = (value: number) => {
        setNumber(value);
    };

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Range Slider</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <div className="p-4">
                <Range
                    variant="dot"
                    min={0}
                    max={100}
                    // gap={10}
                    valueBetween
                    onChange={handleChange}
                // numbers
                />
            </div>
        </div>
        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Discrete Slider</h2>
            <div className="p-4">
                <Range
                    variant="dot"
                    min={0}
                    max={100}
                    gap={10}
                    valueBetween
                    onChange={handleChange}
                    numbers
                />
            </div>
        </div>
        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Range Slider </h2>
            <div className="p-4">
                <MinMaxRange
                    variant="dot"
                    minValue={0}
                    maxValue={100}
                    minRange={10}
                    maxRange={30}
                    getValue={() => ""}
                    gap={10}
                />
            </div>
        </div>
        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Range Slider With Digit</h2>
            <div className="p-4">
                <MinMaxRange
                    variant="line"
                    minValue={0}
                    maxValue={100}
                    minRange={10}
                    maxRange={30}
                    getValue={() => ""}
                    Numbers
                    gap={10} />
            </div>
        </div>
    </BaseLayout>;
};

export default page;