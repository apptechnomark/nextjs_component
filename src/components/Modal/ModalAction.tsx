import React, { ReactNode } from "react";
import  Typography  from "../Typography/Typography";

interface ModalActionProps {
  children: ReactNode;
  position?: "start" | "center" | "end";
}

const ModalAction: React.FC<ModalActionProps> = ({ children, position }) => {
  let justifyClasses = "";

  if (position === "start") {
    justifyClasses = "justify-start";
  } else if (position === "center") {
    justifyClasses = "justify-center";
  } else {
    justifyClasses = "justify-end";
  }
  return (
    <div className={`p-4 flex flex-wrap items-center border-t border-solid border-lightSilver rounded-b ${justifyClasses}`}>
      {children || "Modal Action"}
    </div>
  );
};

export default ModalAction;