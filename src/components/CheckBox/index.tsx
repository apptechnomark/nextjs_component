import React, { InputHTMLAttributes, useState } from "react";

import style from "./styles.module.scss";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  className?: string;
  validate?: boolean;
  hasError?: boolean;
  variant?: "invalid";
  intermediate?: boolean;
}

const CheckBox = ({
  id,
  label,
  variant,
  validate,
  hasError,
  className,
  intermediate,
  ...props
}: CheckBoxProps) => {
  const [err, setErr] = useState<boolean>(() => (hasError ? hasError : false));

  const handleBlur = (e) => {
    e.target.checked ? setErr(false) : setErr(true);
  };

  return (
    <div
      className={`m-0 p-0 w-fit relative flex justify-start items-center ${className}`}
    >
      {!intermediate ? (
        <>
          <input
            className={`${style.checkBox} ${
              (variant === "invalid" || hasError) && style.invalidcheckBox
            } absolute left-3`}
            type="checkbox"
            id={id}
            onBlur={validate && handleBlur}
            {...props}
          />
          <label
            className={`${style.checkBoxLabel} h-6 flex items-center`}
            htmlFor={id}
          >
            <span
              className={`${style.checkBoxSpan} ${
                err ? "!border-[#dc3545]" : "!border-[#9e9e9e]"
              }`}
            ></span>
            {label}
            {/* <Typography>{label}</Typography> */}
          </label>
        </>
      ) : (
        <>
          <input
            className={`${style.i__checkBox} ${
              variant === "invalid" && style.i__invalidcheckBox
            } absolute left-3`}
            type="checkbox"
            id={id}
            onBlur={validate && handleBlur}
            {...props}
          />
          <label
            className={`${style.i__checkBoxLabel} h-6 w-full flex items-center`}
            htmlFor={id}
          >
            <span
              className={`${style.i__checkBoxSpan} ${
                err ? "!border-[#dc3545]" : "!border-[#9e9e9e]"
              }`}
            ></span>
            {label}
            {/* <Typography>{label}</Typography> */}
          </label>
        </>
      )}
    </div>
  );
};

export default CheckBox;
