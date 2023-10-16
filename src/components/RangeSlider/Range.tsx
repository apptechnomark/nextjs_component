import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "../Tooltip/Tooltip";
import { debounce } from "lodash";
import "../Tooltip/Tooltip.module.scss";
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
  types
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedValue, setSelectedValue] = useState(value || min);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<number[]>([]);
  const [thumbValue, setThumbValue] = useState(value || min);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [valueTwoPosition, setValueTwoPosition] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setSelectedValue(newValue);
    onChange(newValue);
    setShowTooltip(true);
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
  const leftAlign = (((selectedValue - min) / (max - min)) * ((905 - 10) - 10)) + 3;

  const fillStyle = {
    background: `linear-gradient(to right, #0592C6 ${fillPercentage}%, #D8D8D8 0%)`,
  };

  useEffect(() => {
    setValueTwoPosition(
      ((selectedValue) / (max - min)) * 100
    );
  }, [selectedValue, min, max]);

  const handleMouseEnter = () => {
    setShowTooltip(true); // Show the tooltip on mouse enter
  };

  const handleMouseLeave = () => {
    setShowTooltip(false); // Hide the tooltip on mouse leave
  };

  return (
    <div className={`w-full group ${styles.custom_range} flex relative justify-center items-center`}>
            <div
        className={`${styles.tooltip} bg-transparent rounded-full  cursor-pointer  text-sm sm:text-base z-[10]`} style={{ position: 'absolute', left: leftAlign, bottom: "10px" }}
      >
        <Tooltip position="top" content={selectedValue}>
        </Tooltip>
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
        // title={selectedValue.toString()}
        className={`w-full cursor-pointer z-[1]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export { Range };