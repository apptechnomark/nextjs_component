import React, { useState, useEffect } from "react";

interface ScrollspyProps {
  titles: any[];
  targetIds: any[];
  variant: "horizontal" | "vertical";
  type?: string;
  large?: boolean;
  icons?: React.ReactNode[];
}

const Scrollspy = ({
  titles,
  targetIds,
  variant,
  icons,
  type,
  large,
}: ScrollspyProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionTops = targetIds.map((id) => {
        const element = document.getElementById(id);
        if (element) {
          return element.offsetTop;
        }
        return 0;
      });

      const marginOfError = 100;
      let newIndex = 0;
      for (let i = sectionTops.length - 1; i >= 0; i--) {
        if (scrollY + marginOfError >= sectionTops[i]) {
          newIndex = i;
          break;
        }
      }
      setActiveIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetIds]);

  return (
    <div
      className={`bg-pureWhite sticky top-0 ${variant === "horizontal" && "flex"
        }`}
    >
      {titles.map((title, index: any) => (
        <a
          href={`#${targetIds[index]}`}
          key={index + 1}
          className={`${type && large ? "px-7 py-3.5 text-xl" : "px-7 py-2.5 text-base"} select-none cursor-pointer hover:${type ? "border-l-4" : "border-b-2"
            } ${type ? "border-l-4 " : "border-b-2"
            } hover:border-primary hover:bg-[#E1F7F3] w-full flex justify-center items-center border-lightSilver text-center font-medium 
            ${index === activeIndex
              ? `${type ? "border-l-4 " : "border-b-2 text-primary "} border-primary`
              : "border-pureWhite"
            }`}
          onClick={() => setActiveIndex(index)}
        >
          {type && icons[index] && <span className="mr-2.5">{icons[index]}</span>}
          {title}
        </a>
      ))}
    </div>
  );
};

export { Scrollspy };