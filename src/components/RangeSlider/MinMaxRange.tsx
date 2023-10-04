import React, { useState, ChangeEvent, MouseEvent } from "react";
import styles from "./MinMaxRange.module.scss";

interface MinMaxRangeProps {
  variant: string;
  minValue: number;
  maxValue: number;
  minRange?: number;
  maxRange?: number;
  Numbers?: boolean;
  gap?: number;
  noRangeBetween?: boolean;
  getValue: (arg1: number, arg2: number) => void;
}

const MinMaxRange: React.FC<MinMaxRangeProps> = ({
  variant = "dot",
  minValue = 0,
  maxValue = 10,
  minRange,
  maxRange,
  Numbers,
  getValue,
  gap = 10,
  noRangeBetween = false,
}) => {
  const gapValue = (maxRange - minRange) / gap;

  const [minValueRange, setMinValueRange] = useState<number>(minRange);
  const [maxValueRange, setMaxValueRange] = useState<number>(maxRange);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const intValue = Number(value);

    if (noRangeBetween) {
      // If noRangeBetween is true, restrict values to gap multiples
      const roundedValue = Math.round(intValue / gap) * gap;
      if (name === "min") {
        if (roundedValue <= minValue) {
          setMinValueRange(minValue);
        } else if (roundedValue >= maxValueRange - gapValue) {
          setMinValueRange(maxValueRange - gapValue);
        } else {
          setMinValueRange(roundedValue);
        }
      } else {
        if (roundedValue >= maxValue) {
          setMaxValueRange(maxValue);
        } else if (roundedValue <= minValueRange + gapValue) {
          setMaxValueRange(minValueRange + gapValue);
        } else {
          setMaxValueRange(roundedValue);
        }
      }
    } else {
      // If noRangeBetween is false, allow values between gaps
      if (name === "min") {
        if (intValue >= maxValueRange - gapValue) {
          setMinValueRange(maxValueRange - gapValue);
        } else {
          setMinValueRange(intValue);
        }
      } else {
        if (intValue <= minValueRange + gapValue) {
          setMaxValueRange(minValueRange + gapValue);
        } else {
          setMaxValueRange(intValue);
        }
      }
    }
  };

  const handleLineClick = (e: MouseEvent<HTMLDivElement>) => {
    // Calculate the click position relative to the range line
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const totalWidth = rect.width;

    // Calculate the corresponding value based on the click position
    const newValue = (clickX / totalWidth) * (maxValue - minValue) + minValue;

    // Find which circle is closer to the clicked point
    const minDistance = Math.abs(newValue - minValueRange);
    const maxDistance = Math.abs(newValue - maxValueRange);

    if (minDistance < maxDistance) {
      // Update the position of the minimum circle
      setMinValueRange(newValue);
    } else {
      // Update the position of the maximum circle
      setMaxValueRange(newValue);
    }
  };

  getValue(minValueRange, maxValueRange);

  const minProgressStyle = {
    left: `${((minValueRange - minValue) / (maxValue - minValue)) * 100}%`,
    right: `${100 - ((maxValueRange - minValue) / (maxValue - minValue)) * 100
      }%`,
  };

  const maxProgressStyle = {
    left: `${((maxValueRange - minValue) / (maxValue - minValue)) * 100}%`,
    right: `${100 - ((minValueRange - minValue) / (maxValue - minValue)) * 100
      }%`,
  };

  const numbers = Math.ceil((maxValue - minValue) / gap);

  let totalSteps = Array.apply(null, new Array(gap + 1)).map(function (_el, i) {
    return i++;
  });

  return (
    <div className={`relative ${styles.container}`}>
      <div className={`${styles.range_slider}`} onClick={handleLineClick}>
        <div
          className={`  flex items-center justify-between w-full absolute ${variant === "dot" && "top-[1.5px]"
            }`}
        >
          {totalSteps.map((i, index) => (
            <div
              className={` flex  justify-center items-center bg-red-400 ${variant === "line" ? `${styles.line}` : `${styles.dot}`
                }`}
              key={index}
            >
              {Numbers && (
                <div className="absolute -ml-1.5 top-2 text-[#6E6D7A]">
                  {minValue + index * numbers}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.progress} style={minProgressStyle}>
        </div>
        <input
          type="range"
          name="min"
          min={minValue}
          max={maxValue}
          value={minValueRange}
          tabIndex={0}
          onChange={handleInputChange}
        />
        <input
          type="range"
          name="max"
          min={minValue}
          max={maxValue}
          value={maxValueRange}
          onChange={handleInputChange}
          tabIndex={1}
        />
      </div>
    </div>
  );
};

export { MinMaxRange };
