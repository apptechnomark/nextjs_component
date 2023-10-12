import React from "react";
import styles from "./ScrollspyPopup.module.scss";

interface ScrollspyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollspyPopup: React.FC<ScrollspyPopupProps> = ({
  isOpen,
  onClose,
  width,
  height,
  children,
  className,
}) => {
  if (!isOpen) return null;

  const modalStyle = {
    width: width || "auto",
    height: height || "auto",
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    
    // Add a class for smooth scrolling when the modal is clicked
    if (event.currentTarget) {
      
      event.currentTarget.classList.add(styles["smooth-scroll"]);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black font-proxima bg-opacity-20 backdrop-blur-[1px] z-50`}
        onClick={onClose}
      >
        <div
          className={`${className} fixed font-proxima right-0 top-0 h-auto overflow-y-auto bg-pureWhite transform z-60 rounded-lg  ${styles.modal}`}
          onClick={handleModalClick}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export { ScrollspyPopup };
