import React, { useState } from "react";
import style from "./Tab.module.scss";
import Typography from "../Typography/Typography";

interface TabBarProps {
  tabs: any[];
  className?: string;
  getValue: (arg1: string) => void;
  alignIcon?: "left" | "right";
}

const TabBar = ({ tabs, getValue, className, alignIcon }: TabBarProps) => {
  const [tabId, setTabId] = useState(tabs[0].id);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: any) => {
    // if (e.target.closest('label')) {
    setTabId(e.target.id);
    getValue(e.target.id);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 700);
    // }
  };

  return (
    <div className={`h-12 flex ${style.customScrollbar}  ${className} overflow-x-auto`}>
      {tabs.map((tab, index: any) => (
        <div
          key={index + 1}
          id={tab.id}
          className={` max-[320px]:!min-w-full w-full relative flex !m-0 !p-0 select-none ${tab.disabled == true ? "text-slatyGrey hover:pointer-events-none" : "cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary hover:bg-[#E1F7F3]"} justify-center items-center border-b-2 border-lightSilver text-center  ${tabId === tab.id ? "border-b-2 border-primary text-primary" : ""}`}
          onClick={tab.disabled ? null : handleClick}
        >
          {tab.alignIcon == "left" && <>{tab.icon}&nbsp;</>}
          {tab.label}&nbsp;
          {tab.alignIcon == "right" && <>{tab.icon}</>}
          {tab.jsxElement}
          <span className={` absolute ${isClicked && tabId === tab.id && `${style.tab__ripple} w-full opacity-0 h-12 rounded-[30px]`}`}></span>
        </div>
      ))
      }
    </div >
  );
};

export { TabBar };