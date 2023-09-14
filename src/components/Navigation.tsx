import React, { useEffect, useRef, useMemo, useState, useCallback } from "react";

interface NavigationBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  tabs: any;
  getValue: (arg: string) => void;
}

const Navigation: React.FC<NavigationBarProps> = ({
  className,
  disabled,
  getValue,
  tabs,
  ...props
}) => {

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [tab, setTab] = useState<string>(tabs[0].id);

  const handleTabClick = (tabId: string, index: number) => {
    setTab(tabId);
    setSelectedTabIndex(index);
  }
  useEffect(() => {
    getValue(tab);
  }, [tab])


  return (
    <>
      <div className="flex justify-center items-center py-[10px]">
        {tabs.map((tab: any, index: number) => (
          <div className="flex" onClick={() => handleTabClick(tab.id, index)} key={tab.id + index}>
            {/* Typography type="h6" */}
            {tab.icon}<label
              className={`px-5 cursor-pointer ${selectedTabIndex === index
                ? "text-primary text-base font-semibold"
                : "text-slatyGrey font-medium text-sm"
                }`}
            >
              {tab.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export { Navigation };