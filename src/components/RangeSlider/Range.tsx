import React, { useState, useEffect } from "react";
import styles from './Range.module.scss'

interface RangeSelectorProps {
  min: number;
  max: number;
  onChange?: (value: number) => void;
  gap?: number;
  numbers?: boolean;
  value?: number;
  valueBetween?: boolean;
  variant?: "default" | "dot" | "line";
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
}) => {
  const [selectedValue, setSelectedValue] = useState(value || min);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<number[]>([]);
  const [thumbValue, setThumbValue] = useState(value || min);

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

  const sliderStyle = {
    height: "6px",
    width: "101.2%",
  };

  const renderDotsOrLines = () => {
    if (variant === "dot" && gap) {
      const numberOfDots = (max - min) / gap;
      const dots = Array.from(
        { length: numberOfDots + 1 },
        (_, index) => index * gap
      );
      return (
        <div className="relative w-full">
          {dots.map((dot, index) => (
            <div
              key={index}
              className="absolute mt-[1.5px] h-[3px] w-[3px] flex bg-[#6E6D7A] items-start justify-center rounded-full z-0"
              style={{ left: `${(dot / (max - min)) * 100}%` }}
            >
              {numbers && (
                <div className="absolute top-2 text-[#6E6D7A]">
                  {values[index]}
                </div>
              )}
            </div>
          ))}
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
    <div className={`${styles.custom_range}  flex flex-col items-center`}>
      {renderDotsOrLines()}
      <input
        type="range"
        min={min}
        max={max}
        value={selectedValue}
        onChange={handleChange}
        step={step}
        style={{ ...fillStyle, ...sliderStyle }}
      />
    </div>
  );
};

export { Range };