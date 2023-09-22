'use strict';

var React = require('react');

var AppBar = function AppBar(_a) {
  var children = _a.children,
    rightContent = _a.rightContent,
    classname = _a.classname;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-4 py-5 min-w-fit border-b-[1px] border-b-lightSilver ".concat(classname)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-4"
  }, rightContent));
};

var Hamburger = function Hamburger(_a) {
  var children = _a.children,
    classname = _a.classname,
    logo = _a.logo,
    widths = _a.widths;
  var _b = React.useState(false),
    isSidebarOpen = _b[0],
    setIsSidebarOpen = _b[1];
  var sidebarRef = React.useRef(null);
  React.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var toggleSidebar = function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: toggleSidebar
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask0_7621_11450",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#D9D9D9"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_7621_11450)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z",
    fill: "#6E6D7A"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 z-10 ".concat(isSidebarOpen ? "left-0" : "-left-full", " translate-all duration-700 ease-all ").concat(classname),
    style: {
      width: "".concat(widths, "px")
    },
    ref: sidebarRef
  }, /*#__PURE__*/React.createElement("button", {
    className: "absolute top-2.5 right-3",
    onClick: toggleSidebar
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "#6E6D7A"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 border-b-[1px] border-b-lightSilver"
  }, logo), children));
};

var Search = function Search(_a) {
  var onSearch = _a.onSearch;
  var _b = React.useState(false),
    isSearchOpen = _b[0],
    setIsSearchOpen = _b[1];
  var _c = React.useState(""),
    searchQuery = _c[0],
    setSearchQuery = _c[1];
  var searchRef = React.useRef(null);
  var toggleSearch = function toggleSearch() {
    setIsSearchOpen(!isSearchOpen);
  };
  var handleSearch = function handleSearch() {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };
  React.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-4"
  }, !isSearchOpen && /*#__PURE__*/React.createElement("button", {
    onClick: toggleSearch
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask0_7621_11460",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#D9D9D9"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_7621_11460)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z",
    fill: "#6E6D7A"
  })))), isSearchOpen && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2 duration-1000",
    ref: searchRef
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search...",
    className: "shadow-xl rounded-md pl-2 xsmd:w-[116px] smd:w-48 mdd:w-64 lgd:w-96",
    value: searchQuery,
    onChange: function onChange(e) {
      return setSearchQuery(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSearch,
    className: "cursor-pointer"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask0_7621_11460",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "0",
    width: "24",
    height: "24"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "#D9D9D9"
  })), /*#__PURE__*/React.createElement("g", {
    mask: "url(#mask0_7621_11460)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z",
    fill: "#6E6D7A"
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: toggleSearch
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "#6E6D7A"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  })))));
};

var Notification = function Notification(_a) {
  var count = _a.count,
    children = _a.children,
    classname = _a.classname;
  var _b = React.useState(false),
    isNotificationbarOpen = _b[0],
    setIsNotificationbarOpen = _b[1];
  var notificationbarRef = React.useRef(null);
  React.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (notificationbarRef.current && !notificationbarRef.current.contains(event.target)) {
        setIsNotificationbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  var toggleNotificationbar = function toggleNotificationbar() {
    setIsNotificationbarOpen(!isNotificationbarOpen);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "relative top-0.5 ml-3",
    ref: notificationbarRef
  }, count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "text-pureWhite absolute -top-1.5 -right-1.5 bg-pureRed text-xs rounded-full px-1 cursor-pointer",
    onClick: toggleNotificationbar
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: toggleNotificationbar
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "19",
    viewBox: "0 0 15 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 15.6781V14.6086H1.92177V7.43287C1.92177 6.15168 2.33508 5.02033 3.1617 4.03882C3.9891 3.05809 5.02705 2.4459 6.27554 2.20228V1.5216C6.27554 1.21337 6.37284 0.966239 6.56743 0.78021C6.76202 0.593403 7.00525 0.5 7.29714 0.5C7.58903 0.5 7.83226 0.593403 8.02685 0.78021C8.22144 0.966239 8.31874 1.21337 8.31874 1.5216V2.20228C9.58358 2.4459 10.6215 3.05809 11.4326 4.03882C12.2428 5.02033 12.648 6.15168 12.648 7.43287V14.6086H14.5943V15.6781H0ZM7.29714 18.5C6.8597 18.5 6.48687 18.3541 6.17863 18.0622C5.8704 17.7703 5.71629 17.3893 5.71629 16.9191H8.87799C8.87799 17.3893 8.73205 17.7703 8.44016 18.0622C8.14828 18.3541 7.76727 18.5 7.29714 18.5ZM2.99124 14.6086H11.5785V7.43287C11.5785 6.23263 11.1648 5.21921 10.3374 4.39259C9.5108 3.56519 8.49737 3.15149 7.29714 3.15149C6.08134 3.15149 5.05974 3.56519 4.23234 4.39259C3.40494 5.21921 2.99124 6.23263 2.99124 7.43287V14.6086Z",
    fill: "#6E6D7A"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fixed right-0 top-0 transform ".concat(isNotificationbarOpen ? "translate-x-0" : "translate-x-full", " transition-transform duration-500 ease-in-out ").concat(classname)
  }, /*#__PURE__*/React.createElement("button", {
    className: "absolute top-3 right-3",
    onClick: toggleNotificationbar
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "#6E6D7A"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  }))), children));
};

exports.AppBar = AppBar;
exports.Hamburger = Hamburger;
exports.Notification = Notification;
exports.Search = Search;
