import React, { useEffect, useState, useCallback } from "react";
import styles from "./scss/navigation.module.scss";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationProps {
  className?: string;
  variant: string;
  disabled?: boolean;
  filled?: boolean;
  tabs: Tab[];
  getValue: (arg: string) => void;
}

const Navigation: React.FC<NavigationProps> = React.memo(
  ({ className, disabled, getValue, tabs, variant, filled, ...props }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
    const [tab, setTab] = useState<string>(tabs[0].id);

    const handleTabClick = useCallback(
      (tabId: string, index: number) => {
        if (tab !== tabId) {
          setTab(tabId);
          setSelectedTabIndex(index);
        }
      },
      [tab]
    );

    useEffect(() => {
      getValue(tab);
    }, [tab, getValue]);

    return (
      <>
        {variant === "vertical" && (
          <div className=" border-2 flex w-[387px] h-[70px] justify-center max-w-full items-center">
            {tabs.map((tab: any, index: number) => (
              <div
                className={`px-5`}
                onClick={() => handleTabClick(tab.id, index)}
                key={tab.id + index}
              >
                <span
                  className={`flex justify-center items-center cursor-pointer`}
                >
                  {tab.icon}
                </span>
                <label
                  className={`  flex justify-center items-center ${
                    selectedTabIndex === index
                      ? "text-primary text-sm font-medium"
                      : "text-slatyGrey font-medium text-sm"
                  }`}
                >
                  {tab.label}
                </label>
              </div>
            ))}
          </div>
        )}

        {variant === "horizontal" && (
          <div className=" border-2 flex w-[387px] h-[60px] gap-10 justify-center max-w-full items-center">
            {tabs.map((tab: any, index: number) => (
              <div
                className={` py-[7px] px-2.5 flex  justify-center items-center ${
                  selectedTabIndex === index &&
                  ` ${styles.slideRight} rounded ${filled && "bg-secondaryGreen"}`
                }`}
                onClick={() => handleTabClick(tab.id, index)}
                key={tab.id + index}
              >
                <span className={`cursor-pointer`}>{tab.icon}</span>
                {selectedTabIndex === index && (
                  <label
                    className={`ml-[7px] ${
                      selectedTabIndex === index
                        ? "text-primary text-sm font-semibold"
                        : "text-slatyGrey font-medium text-sm"
                    }`}
                  >
                    {tab.label}
                  </label>
                )}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
);

export { Navigation };
