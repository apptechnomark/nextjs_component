'use client'

import React, { useState } from 'react';

import { NavigationBar } from 'next-ts-lib';
import "next-ts-lib/dist/index.css"

const page = () => {
  const [value, setValue] = useState<string>("");

  const tabs = [
    { id: "class", label: "CLASS" },
    { id: "location", label: "LOCATION" },
    { id: "department", label: "DEPARTMENT" },
    { id: "project", label: "PROJECT" },
  ];

  return (
    <div className='flex w-full p-10'>
      <NavigationBar
        tabs={tabs}
        visibleTab={2}
        getValue={(e:any) => {setValue(e) }}
      />
    </div>
  )
}

export default page