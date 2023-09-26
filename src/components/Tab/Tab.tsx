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
    if (e.target.closest('li')) {
      setTabId(e.target.id);
      getValue(e.target.id);
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 700);
    }
  };

  const labelClick = (e: any) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 700);
  }

  return (
    <ul className={`h-12 flex ${className}`}>
      {tabs.map((tab, index: any) => (
        <li
          key={index + 1}
          id={tab.id}
          className={`!m-0 !p-0 select-none ${tab.disabled == true ? "text-slatyGrey hover:pointer-events-none" : "cursor-pointer hover:text-primary hover:border-b-2 hover:border-b-primary hover:bg-[#E1F7F3]"} w-full flex ${style.tab} ${tabId === tab.id ? style.active : ""}`}
          onClick={tab.disabled ? null : handleClick}
        >
          <span className={`${isClicked && tabId === tab.id && style.tab__ripple}`}></span>

          {/* {tab.alignIcon == "left" && <>{tab.icon}&nbsp;</>} */}
          {tab.label}&nbsp;
          {/* {tab.alignIcon == "right" && <>{tab.icon}</>} */}
          {tab.jsxElement}

        </li>
      ))}
    </ul>
  );
};

export default TabBar;