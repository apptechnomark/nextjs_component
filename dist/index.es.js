import React from 'react';

var styles = {"tooltip":"index-module_tooltip__jBD1B","top":"index-module_top__3q-P0","slideDown":"index-module_slideDown__5gDio","bottom":"index-module_bottom__I5s6E","slideUp":"index-module_slideUp__hCGI6","left":"index-module_left__jAupb","slideLeft":"index-module_slideLeft__9Zi9k","right":"index-module_right__n7i2S","slideRight":"index-module_slideRight__6pt7G","tool":"index-module_tool__Ex-wZ"};

var Tooltip = function Tooltip(_a) {
  var content = _a.content,
    position = _a.position,
    children = _a.children;
  var text = content === null || content === void 0 ? void 0 : content.toString();
  var textLength = text ? text.length : 0;
  return React.createElement("div", {
    className: "".concat(styles.tooltip, " relative cursor-pointer p-2 text-sm sm:text-base max-w-fit")
  }, React.createElement("span", {
    className: "".concat(styles.tool, " flex justify-center items-center min-w-[300px] ").concat(textLength <= 6 && "!min-w-[80px]", " tooltipText absolute bg-[#bcf1e8] text-darkCharcoal whitespace-nowrap p-[10px] border border-primary rounded-md opacity-0 before:absolute before:w-3 before:h-3 before:bg-[#bcf1e8] before:border-t before:border-primary before:border-r ").concat(position === "top" && "".concat(styles.top, " left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:bottom-[-7px] before:transform before:rotate-[135deg]"), " \n        ").concat(position === "bottom" && "".concat(styles.bottom, " left-1/2 transform -translate-x-1/2 before:left-1/2 before:-translate-x-1/2 before:top-[-7px] before:transform before:rotate-[-45deg]"), " \n        ").concat(position === "left" && "".concat(styles.left, " top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:right-[-2.2%] ").concat(textLength <= 6 && "before:right-[-7%]", " before:transform before:rotate-[45deg]"), " \n        ").concat(position === "right" && "".concat(styles.right, " top-1/2 transform -translate-y-1/2 before:top-1/2 before:-translate-y-1/2 before:left-[-2.2%] ").concat(textLength <= 6 && "before:left-[-7%]", " before:transform before:rotate-[-135deg]"))
  }, content), React.createElement("span", null, children));
};

export { Tooltip };
