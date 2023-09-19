import React, { useEffect, useState, useCallback, useRef } from "react";
import "./scss/style.css";

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
    const [animationStyle, setAnimationStyle] = useState({
      left: "0",
      width: "92px",
    });

    const tabRef = useRef<HTMLDivElement | null>(null);

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
      const selectedTab = tabRef.current;
      if (selectedTab) {
        const { offsetLeft, offsetWidth } = selectedTab;
        const newAnimationStyle = {
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        };
        setAnimationStyle(newAnimationStyle);
      }

      getValue(tab);
    }, [selectedTabIndex, getValue, tab]);

    return (
      <>
        {variant === "vertical" && (
          <div className="flex w-[387px] h-[70px] justify-center max-w-full items-center">
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
          <>
            <div className=" flex relative  navbar h-[60px] justify-between max-w-full items-center">
              {tabs.map((tab: any, index: number) => (
                <div
                  ref={selectedTabIndex === index ? tabRef : null}
                  className={`py-[7px] px-2.5 z-[1] flex  justify-center items-center ${
                    selectedTabIndex === index && `rounded`
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
              <div
                className={`animation absolute  rounded z-0 ${
                  filled ? "bg-secondaryGreen" : " bg-slate-200"
                }  h-[40px] my-2`}
                style={animationStyle}
              ></div>
            </div>
          </>
        )}
      </>
    );
  }
);

export { Navigation };
