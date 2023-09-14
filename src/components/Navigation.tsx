import React, { useEffect, useState } from "react";
import styles from "./scss/navigation.module.scss";

interface NavigationProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  tabs: any;
  getValue: (arg: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  className,
  disabled,
  getValue,
  tabs,
  ...props
}) => {

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [tab, setTab] = useState<string>(tabs[0].id);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickedLabel, setClickedLabel] = useState<string | null>(null);

  const handleTabClick = (tabId: string, index: number) => {
    setTab(tabId);
    setSelectedTabIndex(index);
    setIsOpen(!isOpen);
    setClickedLabel(tabId);
  }
  useEffect(() => {
    getValue(tab);
  }, [tab])


  return (
    <>
      <div className="flex h-[60px] gap-1 justify-center max-w-full items-center py-[18px]">
        {tabs.map((tab: any, index: number) => (
          <div className={`flex h-6 max-w-auto  px-5 justify-center items-center`} onClick={() => handleTabClick(tab.id, index)} key={tab.id + index}>
            <span className={`cursor-pointer ${clickedLabel === tab.id ? styles.slideRight : ""}`}>
              {tab.icon}
            </span>
            {selectedTabIndex === index && (
              <label
                className={`pl-2.5 pr-5 ${selectedTabIndex === index
                  ? "text-primary text-base font-semibold"
                  : "text-slatyGrey font-medium text-sm"
                  } ${clickedLabel === tab.id ? styles.slideRight : ""}`} // Apply slideRight animation conditionally
              >
                {tab.label}
              </label>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export { Navigation };