"use client";

import { useState } from "react";

import { DatepickerRange, DatepickerRangeExpanded } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const page = () => {
  const [value, setValue] = useState<string>("");

  return (
    <>
      <div className="w-full p-10">
        <DatepickerRange startYear={1990} endYear={2080} value={value} getValue={(value: string) => setValue(value)} />
      </div>
      <div className="w-full p-10">
        <DatepickerRangeExpanded startYear={1990} endYear={2080} value={value} getValue={(value: string) => setValue(value)} />
      </div>
    </>
  );
};

export default page;
