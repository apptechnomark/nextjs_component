import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import "../Tooltip/Tooltip.module.scss";
import styles from "./Range.module.scss";

interface RangeSelectorProps {
  min: number;
  max: number;
  onChange?: (value: number) => void;
  gap?: number;
  numbers?: boolean;
  value?: number;
  valueBetween?: boolean;
  variant?: "default" | "dot" | "line";
  types?: string;
}

const Range: React.FC<RangeSelectorProps> = ({
  min,
  max,
  gap,
  onChange,
  numbers,
  value,
  valueBetween,
  variant,
  types,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedValue, setSelectedValue] = useState(value || min);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<number[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    if (gap && !valueBetween) {
      const numberOfSteps = (max - min) / gap;
      setStep(gap);
    } else {
      setStep(1);
    }
  }, [gap, max, min, valueBetween]);

  useEffect(() => {
    if (gap && numbers) {
      const numberOfSteps = (max - min) / gap;
      const newValues = Array.from(
        { length: numberOfSteps + 1 },
        (_, index) => min + index * gap
      );
      setValues(newValues);
    }
  }, [gap, max, min, numbers]);

  const fillPercentage = ((selectedValue - min) / (max - min)) * 100;

  const fillStyle = {
    background: `linear-gradient(to right, #0592C6 ${fillPercentage}%, #D8D8D8 0%)`,
  };

  let parentDiv = document.getElementById("parentDiv");
  let width = parentDiv && parentDiv.offsetWidth;
  
  const left = ((selectedValue - min) / (max - min)) * (width - 10 - 10) + 3;

  const renderDotsOrLines = () => {
    if (variant === "dot" && gap) {
      const numberOfDots = (max - min) / gap;
      const dots = Array.from(
        { length: numberOfDots + 1 },
        (_, index) => index * gap
      );

      return (
        <div className="relative  mt-[1.2px]">
            <>
              {dots.map((dot, index) => (
                <div
                  key={index}
                  className="absolute h-[3px] w-[3px] flex bg-[#6E6D7A] items-start justify-center rounded-full z-10"
                  style={{ left: `${(dot / (max - min)) * 100}%` }}
                >
                  {numbers && (
                    <div className="absolute top-2  text-[#6E6D7A] select-none">
                      {values[index]}
                    </div>
                  )}
                </div>
              ))}
            </>
        </div>
      );
    } else if (variant === "line" && gap) {
      const numberOfLines = (max - min) / gap;
      const lines = Array.from(
        { length: numberOfLines + 1 },
        (_, index) => index * gap
      );
      return (
        <div className="relative w-full">
          {lines.map((line, index) => (
            <div
              key={index}
              className="absolute h-2.5 w-[1px] bg-[#6E6D7A] rounded-sm"
              style={{
                left: `${(line / (max - min)) * 100}%`,
                transform: "translateY(-20%)",
              }}
            >
              {numbers && (
                <div className="absolute top-2 ml-[-10px] text-[#6E6D7A]">
                  {values[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div
      id="parentDiv"
      className={`w-full group ${styles.custom_range} flex relative justify-center items-center`}
    >
      <div>
        <span className="w-full absolute pl-[7.5px] pr-[12px] ">
          {renderDotsOrLines()}
        </span>
      </div>
      <div className="w-full relative">
        <div
          className="bg-transparent w-[10px] h-[10px] group-hover:visible rounded-full"
          style={{
            position: "absolute",
            left: left,
            bottom: "15px",
          }}
        >
          <Tooltip position="top" content={selectedValue}></Tooltip>
        </div>

        <input
          ref={inputRef}
          type="range"
          id="range_input_thumb"
          min={min}
          max={max}
          value={selectedValue}
          onChange={handleChange}
          step={step}
          style={{ ...fillStyle }}
          className={`w-full cursor-pointer`}
        />
      </div>
    </div>
  );
};

export { Range };
