import React, { useRef } from "react";
import useRipple from "./useRipple";
import "./index.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "btn"
    | "btn-primary"
    | "btn-secondary"
    | "btn-success"
    | "btn-error"
    | "btn-warning"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "btn-outline"
    | "btn-outline-primary"
    | "btn-outline-secondary"
    | "btn-outline-success"
    | "btn-outline-error"
    | "btn-outline-warning";
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  style,
  type = "button",
  children,
  disabled,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onSubmit,
  ...props
}) => {
  const ref = useRef(null);
  const ripples = useRipple(ref);

  return (
    <>
      <button
        {...props}
        ref={ref}
        style={style}
        className={`${className} ${
          className?.includes("btn-sm") && "py-[3.5px] px-[10px] text-sm"
        } ${
          className?.includes("btn-lg") && "py-[14.5px] px-[20px]"
        } bg-pureWhite text-slatyGrey relative overflow-hidden py-[6px] px-[15px] text-base group ${
          variant === "btn" && "!bg-lightSilver !text-slatyGrey"
        } ${
          variant === "btn-primary" &&
          "!bg-primary !text-pureWhite hover:!bg-darkPrimary"
        } ${
          variant === "btn-secondary" &&
          "!bg-blueColor !text-pureWhite hover:!bg-darkBlue"
        } ${
          variant === "btn-success" &&
          "!bg-successColor !text-pureWhite hover:!bg-darkSuccess"
        } ${
          variant === "btn-error" &&
          "!bg-defaultRed !text-pureWhite hover:!bg-darkRed"
        } ${
          variant === "btn-warning" &&
          "!bg-yellowColor !text-pureWhite hover:!bg-darkYellow"
        } ${variant === "primary" && "!text-primary"} ${
          variant === "secondary" && "!text-blueColor"
        } ${variant === "success" && "!text-successColor"} ${
          variant === "error" && "!text-defaultRed"
        } ${variant === "warning" && "!text-yellowColor"} ${
          variant === "btn-outline" && "!text-slatyGrey border border-slatyGrey"
        } ${
          variant === "btn-outline-primary" &&
          "!text-primary hover:!text-darkPrimary border border-primary hover:border-darkPrimary hover:!bg-[#E0F8F4]"
        } ${
          variant === "btn-outline-secondary" &&
          "!text-blueColor hover:!text-darkBlue border border-blueColor hover:border-darkBlue hover:!bg-[#E5F5FC]"
        } ${
          variant === "btn-outline-success" &&
          "!text-successColor hover:!text-darkSuccess border border-successColor hover:border-darkSuccess hover:!bg-[#D1E7DD]"
        } ${
          variant === "btn-outline-error" &&
          "!text-defaultRed hover:!text-darkRed border border-defaultRed hover:border-darkRed hover:!bg-[#F8D7DA]"
        } ${
          variant === "btn-outline-warning" &&
          "!text-yellowColor hover:!text-darkYellow border border-yellowColor hover:border-darkYellow hover:!bg-[#FFF3CD]"
        }`}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onSubmit={onSubmit}
        onClick={onClick}
      >
        {ripples}
        <span className="relative">
          {children}
        </span>
      </button>
    </>
  );
};

export { Button };
