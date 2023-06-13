import React from "react";
import "./index.css";

class Tooltip extends React.Component {
  render() {
    const { text, position = "top", children } = this.props;

    return (
      <div className="flex flex-col items-center gap-3">
        <div
          className={`relative before:z-10 before:absolute before:w-max before:max-w-xs before:bg-bgColor before:border before:border-borderColor before:text-textColor  before:invisible before:content-[attr(data-tip)] after:z-10 after:absolute after:h-3 after:w-3 after:bg-bgColor after:border after:border-transparent after:invisible hover:before:visible hover:after:visible md:text-2xl ${
            position === "top" &&
            "before:left-1/2 before:-top-3 before:-translate-x-1/2 before:-translate-y-full before:rounded-lg before:px-2 before:py-1.5 after:left-1/2 after:-top-3 after:-translate-x-1/2 after:border-t-borderColor after:border-r-borderColor after:rotate-[135deg] after:mt-[-6px]"
          } ${
            position === "bottom" &&
            "before:left-1/2 before:-bottom-3 before:-translate-x-1/2 before:translate-y-full before:rounded-lg before:px-2 before:py-1.5 after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:border-t-borderColor after:border-r-borderColor after:rotate-[-45deg] after:mb-[-6px]"
          } ${
            position === "left" &&
            "before:-left-3 before:top-1/2 before:-translate-x-full before:-translate-y-1/2 before:rounded-md before:px-3 before:py-2 after:-left-[0.8rem] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:border-t-borderColor after:border-r-borderColor after:rotate-[45deg] after:ml-[-6px]"
          } ${
            position === "right" &&
            "before:-right-3 before:top-1/2 before:translate-x-full before:-translate-y-1/2 before:rounded-md before:px-3 before:py-2 after:-right-[0.8rem] after:top-1/2 after:translate-x-0 after:-translate-y-1/2 after:border-t-borderColor after:border-r-borderColor after:rotate-[-135deg] after:mr-[-6px]"
          }`}
          data-tip={text}
        >
          {children}
        </div>
      </div>
    );
  }
}

export { Tooltip };