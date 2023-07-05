import React, { useState } from "react";
import "./index.css";
import { Typography } from "Typography";
import "Typography/dist/index.css";

interface AlertProps {
  variant: "success" | "error" | "warning" | "info";
  message: string;
}

const Alert: React.FC<AlertProps> = ({ variant, message }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  let alertClass = "";

  switch (variant) {
    case "success":
      alertClass = "!bg-primary !text-pureWhite";
      break;
    case "error":
      alertClass = "!bg-errorColor !text-darkRed";
      break;
    case "warning":
      alertClass = "!bg-warningColor !text-darkOrange";
      break;
    case "info":
      alertClass = "!bg-infoColor !text-darkBlue";
      break;
    default:
      alertClass = "!bg-primary !text-pureWhite";
      break;
  }

  const successIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 sm:w-6 sm:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const errorIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 sm:w-6 sm:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
  const warningIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 sm:w-6 sm:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
  const infoIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4 sm:w-6 sm:h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );

  return (
    <>
      {visible && (
        <div
          className={`flex flex-col m-[6px] p-[12px] px-[16px] rounded-md text-primary min-w-15rem relative ${alertClass}`}
          role="alert"
        >
          <div className="flex">
            <span>
              {variant === "error"
                ? errorIcon
                : variant === "warning"
                ? warningIcon
                : variant === "info"
                ? infoIcon
                : successIcon}
            </span>
            <Typography
              type="sub-title"
              className="ml-2 mr-6 text-xs sm:text-base"
            >
              {message}
            </Typography>
          </div>
          <button
            type="button"
            className="absolute top-1/4 right-[20px] w-15 h-15 bg-transparent border-none cursor-pointer pl-10 text-xs sm:text-base"
            onClick={handleClose}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export { Alert };
