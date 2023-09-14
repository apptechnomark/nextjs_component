import React from 'react';

var styles = {"menu":"Menu-module_menu__PlnZv","meatball":"Menu-module_meatball__gJyMC","kebab":"Menu-module_kebab__JYR-H","dot":"Menu-module_dot__omFpR","small":"Menu-module_small__SPkC-","medium":"Menu-module_medium__zNjqO","large":"Menu-module_large__BriOy"};

var Menu = function Menu(_a) {
  var size = _a.size,
    classname = _a.classname,
    direction = _a.direction;
  var getSizeClassName = function getSizeClassName() {
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
  var getDirectionStyle = function getDirectionStyle() {
    return direction === "meatball" ? styles.meatball : styles.kebab;
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "flex h-5 w-5 justify-center items-center ".concat(styles["menu"], " ").concat(getSizeClassName(), " ").concat(getDirectionStyle(), " ").concat(classname)
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.dot
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.dot
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.dot
  }));
};

export { Menu };
