"use client"

import React, { useState } from "react";
import { Datepicker, DatepickerYear } from "datepicker";
import "datepicker/dist/index.css";

const page = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Datepicker startYear={1990} endYear={2050} value={selected} getValue={(value: string) => setSelected(value)} />
      <DatepickerYear startYear={1990} endYear={2050} value={selected} getValue={(value: string) => setSelected(value)} />
    </>
  )
}

export default page