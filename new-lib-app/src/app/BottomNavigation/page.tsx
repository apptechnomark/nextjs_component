"use client";

import React, { useState } from "react";
import { Navigation } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import BaseLayout from "../../components/BaseLayout";
import Home from "./icons/Home";
import Settings from "./icons/Settings";
import Message from "./icons/Message";
import Profile from "./icons/Profile";

const page = () => {
  const [value, setValue] = useState<string>("home");
  const [hValue, setHValue] = useState<string>("home");
  const [hfValue, setHfValue] = useState<string>("home");
  const [mValue, setMValue] = useState<string>("home");

  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: <Home bgColor={value == "home" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "message",
      label: "Message",
      icon: <Message bgColor={value == "message" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings bgColor={value == "settings" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Profile bgColor={value == "profile" ? "#0592C6" : "#333333"} />,
    },
  ];
  const hTabs = [
    {
      id: "home",
      label: "Home",
      icon: <Home bgColor={hValue == "home" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "message",
      label: "Message",
      icon: <Message bgColor={hValue == "message" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings bgColor={hValue == "settings" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Profile bgColor={hValue == "profile" ? "#0592C6" : "#333333"} />,
    },
  ];
  const hfTabs = [
    {
      id: "home",
      label: "Home",
      icon: <Home bgColor={hfValue == "home" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "message",
      label: "Message",
      icon: <Message bgColor={hfValue == "message" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings bgColor={hfValue == "settings" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Profile bgColor={hfValue == "profile" ? "#0592C6" : "#333333"} />,
    },
  ];
  const mTabs = [
    {
      id: "home",
      label: "Home",
      icon: <Home bgColor={mValue == "home" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "message",
      label: "Message",
      icon: <Message bgColor={mValue == "message" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings bgColor={mValue == "settings" ? "#0592C6" : "#333333"} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Profile bgColor={mValue == "profile" ? "#0592C6" : "#333333"} />,
    },
  ];
  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Navigation Bar
      </h5>
      {/* <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Vertical Navigation Bar
        </h2>
        <div className="w-[387px] h-[60px] border border-[#D8D8D8]">
          <Navigation
            tabs={tabs}
            variant="vertical"
            getValue={(e: any) => {
              setValue(e);
            }}
          />
        </div>
      </div> */}
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          {/* Horizontal Navigation Bar */}
          Basic
        </h2>
        <div className="max-[425px]:overflow-x-scroll">
          <div className="w-[387px] max-[425px]:w-[265px]  h-[60px] border border-[#D8D8D8]">

            <Navigation
              tabs={hTabs}
              variant="horizontal"
              getValue={(e: any) => {
                setHValue(e);
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Horizontal Navigation Bar (filled)
        </h2>
        <div className="w-[387px] h-[60px] border border-[#D8D8D8]">
          <Navigation
            tabs={hfTabs}
            variant="horizontal"
            filled={true}
            getValue={(e: any) => {
              setHfValue(e);
            }}
          />
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Mobile Navigation Bar
        </h2>
        <div className="w-[387px] h-[60px] border border-[#D8D8D8]">
          <Navigation
            tabs={mTabs}
            variant="mobile"
            getValue={(e: any) => {
              setMValue(e);
            }}
          />
        </div>
      </div> */}
    </BaseLayout>
  );
};

export default page;