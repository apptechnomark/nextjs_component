'use client'

import React, { useState } from 'react';

import { Navigation } from 'next-ts-lib';
import "next-ts-lib/dist/index.css"
import Home from "./icons/Home";
import Settings from "./icons/Settings";
import Mail from "./icons/Mail";
import Profile from "./icons/Profile";

const page = () => {
  const [value, setValue] = useState<string>("");

  const tabs = [
    { id: "home", label: "Home", icon:<Home/> },
    { id: "message", label: "Message",icon:<Mail/> },
    { id: "settings", label: "Settings",icon:<Settings/> },
    { id: "profile", label: "Profile",icon:<Profile/> },
  ];

  return (
    <div className='flex w-full p-10'>
      <Navigation
        tabs={tabs}
        getValue={(e: any) => { setValue(e) }}
      />
    </div>
  )
}

export default page