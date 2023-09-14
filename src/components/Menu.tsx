import React, { useState } from "react";
import styles from "./Menu.module.scss";

interface MenuProps {
  size?: "small" | "medium" | "large";
  classname?: any;
  direction?: "kebab" | "meatball";
}

const Menu: React.FC<MenuProps> = ({ size, classname, direction }) => {

  const getSizeClassName = () => {
    switch (size) {
      case "small":
        return styles.small;
      case "large":
        return styles.large;
      default:
      case "medium":
        return styles.medium;
    }
  };

  const getDirectionStyle = () => {
    return direction === "meatball" ? styles.meatball : styles.kebab;
  };

  return (
    <span
      className={`flex h-5 w-5 justify-center items-center ${
        styles["menu"]
      } ${getSizeClassName()} ${getDirectionStyle()} ${classname}`}
    >
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
    </span>
  );
};

export { Menu };
