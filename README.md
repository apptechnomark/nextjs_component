"use client";

import React, { useState } from "react";

import { Navigation } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import Home from "./icons/Home";
import Settings from "./icons/Settings";
import Message from "./icons/Message";
import Profile from "./icons/Profile";

const page = () => {
  const [value, setValue] = useState<string>("");

  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: <Home bgColor={value == "home" ? "#02B89D" : "#333333"} />,
    },
    {
      id: "message",
      label: "Message",
      icon: <Message bgColor={value == "message" ? "#02B89D" : "#333333"} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings bgColor={value == "settings" ? "#02B89D" : "#333333"} />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Profile bgColor={value == "profile" ? "#02B89D" : "#333333"} />,
    },
  ];

  return (
    <div className="flex flex-col w-full p-10">
      <div className="mb-5">
        <Navigation
          tabs={tabs}
          variant="vertical"
          getValue={(e: any) => {
            setValue(e);
          }}
        />
      </div>
      <div className="mb-5">
        <Navigation
          tabs={tabs}
          variant="horizontal"
          getValue={(e: any) => {
            setValue(e);
          }}
        />
      </div>
      <div className="mb-5">
        <Navigation
          tabs={tabs}
          variant="horizontal"
          filled={true}
          getValue={(e: any) => {
            setValue(e);
          }}
        />
      </div>
    </div>
  );
};

export default page;
