'use strict';

var React = require('react');

var isToday = function isToday(date) {
  var today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
var generateDate = function generateDate(month, year) {
  if (month === void 0) {
    month = new Date().getMonth();
  }
  if (year === void 0) {
    year = new Date().getFullYear();
  }
  var firstDateOfMonth = new Date(year, month, 1);
  var lastDateOfPreviousMonth = new Date(year, month, 0);
  var lastDateOfMonth = new Date(year, month + 1, 0);
  var arrayOfDate = [];
  for (var i = firstDateOfMonth.getDay(); i > 0; i--) {
    var date = new Date(lastDateOfPreviousMonth.getFullYear(), lastDateOfPreviousMonth.getMonth(), lastDateOfPreviousMonth.getDate() - (i - 1));
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  for (var i = 1; i <= lastDateOfMonth.getDate(); i++) {
    var date = new Date(year, month, i);
    arrayOfDate.push({
      currentMonth: true,
      date: date,
      today: isToday(date)
    });
  }
  var remaining = 42 - arrayOfDate.length;
  for (var i = 1; i <= remaining; i++) {
    var date = new Date(year, month + 1, i);
    arrayOfDate.push({
      currentMonth: false,
      date: date
    });
  }
  return arrayOfDate;
};
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var style = {"rippleAnimation":"datepicker-module_rippleAnimation__-t-q0","ripple":"datepicker-module_ripple__h-itK","bottomAnimation":"datepicker-module_bottomAnimation__nh-Ra","topAnimation":"datepicker-module_topAnimation__dx69-","slideLeftAnimation":"datepicker-module_slideLeftAnimation__gPJUh","slideRightAnimation":"datepicker-module_slideRightAnimation__BdubY"};

function ChevronLeft() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "none",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })));
}

var Datepicker = function Datepicker(props) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var currentDate = new Date();
  var value = props.value,
    startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = React.useRef(null);
  var valueDate = new Date(value);
  var _a = React.useState(value ? valueDate : currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = React.useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = React.useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = React.useState(value ? valueDate : currentDate),
    selectedDate = _d[0],
    setSelectedDate = _d[1];
  var _e = React.useState(value ? value : ""),
    fullDate = _e[0],
    setFullDate = _e[1];
  var _f = React.useState(1),
    currentPage = _f[0],
    setCurrentPage = _f[1];
  var _g = React.useState(false),
    toggleOpen = _g[0],
    setToggleOpen = _g[1];
  var _h = React.useState(""),
    animate = _h[0],
    setAnimate = _h[1];
  var currentMonth = today.getMonth();
  var _j = React.useState(value ? valueDate.getMonth() : currentMonth),
    selectedMonth = _j[0],
    setSelectedMonth = _j[1];
  var currentYear = today.getFullYear();
  var _k = React.useState(value ? valueDate.getFullYear() : currentYear),
    selectedYear = _k[0],
    setSelectedYear = _k[1];
  var yearsPerPage = 16;
  var totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);
  var startIndex = (currentPage - 1) * yearsPerPage;
  var displayedYears = Array.from({
    length: yearsPerPage
  }, function (_, index) {
    var year = startYear + startIndex + index;
    return year <= endYear ? year : null;
  }).filter(function (year) {
    return year !== null;
  });
  var toggleMonthList = function toggleMonthList() {
    setAnimate("");
    setShowMonthList(!showMonthList);
  };
  var selectMonth = function selectMonth(month) {
    setAnimate(style.slideRightAnimation);
    var newDate = new Date(today);
    newDate.setMonth(month);
    setToday(newDate);
    setShowMonthList(false);
    setSelectedMonth(month);
    selectedMonth ? setAnimate(style.slideRightAnimation) : setAnimate("");
  };
  var toggleYearList = function toggleYearList() {
    setShowYearList(true);
    setAnimate("");
    if (!showYearList && !showMonthList) {
      setCurrentPage(Math.ceil((selectedYear - startYear + 1) / yearsPerPage));
    } else {
      setShowMonthList(false);
    }
  };
  var selectYear = function selectYear(year) {
    var newDate = new Date(today);
    newDate.setFullYear(year);
    setToday(newDate);
    setShowYearList(false);
    setSelectedYear(year);
    setTimeout(function () {
      setShowMonthList(true);
      setAnimate("");
    }, 0);
  };
  var handleDateClick = function handleDateClick(date) {
    var newDate = new Date(date);
    setToday(newDate);
    setSelectedDate(date);
    newDate.setDate(date.getDate() + 1);
    var formattedDate = newDate.toISOString().slice(0, 10).split("-");
    var updatedDate = "".concat(formattedDate[0], "-").concat(formattedDate[1], "-").concat(formattedDate[2]);
    setFullDate(updatedDate);
    setToggleOpen(false);
    if (date.getMonth() < selectedMonth) {
      handleIconClick(false);
    }
    if (date.getMonth() > selectedMonth) {
      handleIconClick(true);
    }
    setAnimate("");
  };
  var goToNextPage = function goToNextPage() {
    currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
  };
  var goToPreviousPage = function goToPreviousPage() {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
  };
  var calendarShow = function calendarShow() {
    setToggleOpen(true);
  };
  var handleIconClick = function handleIconClick(isNextMonth) {
    var newDate = new Date(today);
    var year = newDate.getFullYear();
    if (isNextMonth) {
      var month = newDate.getMonth() + 1;
      newDate.setMonth(newDate.getMonth() + 1);
      setSelectedMonth(month);
    } else {
      var month = newDate.getMonth() - 1;
      newDate.setMonth(newDate.getMonth() - 1);
      setSelectedMonth(month);
    }
    setSelectedYear(year);
    setToday(newDate);
    setAnimate(isNextMonth ? style.slideRightAnimation : style.slideLeftAnimation);
    setTimeout(function () {
      setAnimate("");
    }, 100);
  };
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var target = event.target;
      var isInputClick = inputRef.current && inputRef.current.contains(target);
      var isCalendarClick = target.closest(".bottomAnimation");
      if (!isInputClick && !isCalendarClick) {
        setToggleOpen(false);
      }
    };
    var handleMouseDown = function handleMouseDown(event) {
      setTimeout(function () {
        handleOutsideClick(event);
      }, 0);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return function () {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  var updateFromInput = function updateFromInput(inputValue) {
    var inputDate = new Date(inputValue);
    if (!isNaN(inputDate.getTime()) && inputDate.getFullYear().toString().length == 4) {
      var formattedDate = inputDate.toISOString().slice(0, 10);
      setToggleOpen(true);
      setToday(inputDate);
      setSelectedDate(inputDate);
      setSelectedMonth(inputDate.getMonth());
      setSelectedYear(inputDate.getFullYear());
      setFullDate(formattedDate);
    } else {
      setToggleOpen(false);
    }
  };
  React.useEffect(function () {
    props.getValue(fullDate);
  }, [fullDate]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex",
    ref: inputRef
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black border-lightSilver",
    onClick: calendarShow,
    defaultValue: fullDate,
    onChange: function onChange(e) {
      return updateFromInput(e.target.value);
    }
  })), toggleOpen && /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bottomAnimation absolute z-20  bg-white ".concat(toggleOpen ? style.bottomAnimation : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex mx-auto  items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-md overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b-2 border-lightSilver py-[12px] px-[12px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row  ".concat(showYearList ? "" : animate)
  }, showMonthList === true ? "" : showYearList === true ? "" : /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold cursor-pointer text-slatyBlue",
    onClick: toggleMonthList
  }, months[currentMonth]), showYearList === true && showMonthList === false ? /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 text-slatyBlue"
  }, displayedYears[0] + " - " + displayedYears[displayedYears.length - 1]) : /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 cursor-pointer text-slatyBlue",
    onClick: toggleYearList
  }, currentYear)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, showYearList === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(showMonthList ? "hidden" : "", " text-[20px]"),
    onClick: function onClick() {
      return handleIconClick(false);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(showMonthList ? "hidden" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      return handleIconClick(true);
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null))) : /*#__PURE__*/React.createElement(React.Fragment, null, currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === 1 ? "opacity-40 pointer-events-none" : "", " text-[20px]"),
    onClick: function onClick() {
      if (currentPage === 1) {
        return;
      }
      goToPreviousPage();
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === totalPages ? "opacity-40 pointer-events-none" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      if (currentPage === totalPages) {
        return;
      }
      goToNextPage();
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style.topAnimation, "  w-full h-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-1 place-content-center overflow-hidden proxima"
  }, months.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "py-5 px-[5.5px] w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer ",
      onClick: function onClick() {
        return selectMonth(index);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-12 hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(index === selectedMonth ? "bg-lightGreen text-primary" : "")
    }, month.length > 5 ? month.slice(0, 3) : month));
  })))) : showYearList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style.topAnimation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animate, "  w-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden proxima"
  }, displayedYears.map(function (year) {
    return /*#__PURE__*/React.createElement("div", {
      key: year,
      className: "py-2 px-[3.9px] w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectYear(year);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 px-3 w-full h-full hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(year === selectedYear ? "bg-lightGreen text-primary" : "")
    }, year));
  }))))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-full grid grid-cols-7 proxima  ".concat(animate)
  }, days.map(function (day, index) {
    return /*#__PURE__*/React.createElement("h1", {
      key: index,
      className: "h-14 grid place-content-center text-[12px]"
    }, day);
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full grid grid-cols-7 ".concat(animate)
  }, generateDate(today.getMonth(), today.getFullYear()).map(function (_a, index) {
    var date = _a.date,
      currentMonth = _a.currentMonth;
    var currentDate = new Date(date);
    var isSameDay = currentDate.getDate() === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "h-full w-full grid place-content-center text-sm text-textColor proxima relative ",
      onClick: function onClick() {
        return handleDateClick(currentDate);
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "h-[40px] w-[40px] grid place-content-center rounded-full cursor-pointer z-10 \n                                                                ".concat(currentMonth ? "" : "text-gray-400", " ").concat(isSameDay ? " bg-primary text-white" : "hover:bg-whiteSmoke")
    }, currentDate.getDate()), isSameDay && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "absolute flex inset-0 rounded-full overflow-visible"
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(style.rippleAnimation, " absolute rounded-full bg-primary opacity-50")
    }))));
  }))))))));
};

var DatepickerYear = function DatepickerYear(props) {
  var currentDate = new Date();
  var value = props.value,
    startYear = props.startYear,
    endYear = props.endYear;
  var inputRef = React.useRef(null);
  var valueDate = new Date(value);
  var _a = React.useState(value ? valueDate : currentDate),
    today = _a[0],
    setToday = _a[1];
  var _b = React.useState(false),
    showMonthList = _b[0],
    setShowMonthList = _b[1];
  var _c = React.useState(false),
    showYearList = _c[0],
    setShowYearList = _c[1];
  var _d = React.useState(value ? value : ""),
    fullDate = _d[0],
    setFullDate = _d[1];
  var _e = React.useState(1),
    currentPage = _e[0],
    setCurrentPage = _e[1];
  var _f = React.useState(false),
    toggleOpen = _f[0],
    setToggleOpen = _f[1];
  var _g = React.useState(""),
    animate = _g[0],
    setAnimate = _g[1];
  var currentMonth = today.getMonth();
  var _h = React.useState(value ? valueDate.getMonth() : currentMonth),
    selectedMonth = _h[0],
    setSelectedMonth = _h[1];
  var currentYear = today.getFullYear();
  var _j = React.useState(value ? valueDate.getFullYear() : currentYear),
    selectedYear = _j[0],
    setSelectedYear = _j[1];
  var yearsPerPage = 16;
  var totalPages = Math.ceil((endYear - startYear + 1) / yearsPerPage);
  var startIndex = (currentPage - 1) * yearsPerPage;
  var displayedYears = Array.from({
    length: yearsPerPage
  }, function (_, index) {
    var year = startYear + startIndex + index;
    return year <= endYear ? year : null;
  }).filter(function (year) {
    return year !== null;
  });
  var selectMonth = function selectMonth(month) {
    var newDate = new Date(today);
    newDate.setMonth(month);
    setToday(newDate);
    setShowMonthList(false);
    setSelectedMonth(month);
    selectedMonth ? setAnimate(style.slideRightAnimation) : setAnimate("");
    var formattedMonth = month < 10 ? "0".concat(month) : "".concat(month);
    var formattedYear = selectedYear.toString();
    var updatedDate = "".concat(formattedYear, "-").concat(formattedMonth);
    setFullDate(updatedDate);
    setToggleOpen(false);
  };
  var toggleYearList = function toggleYearList() {
    setShowYearList(true);
    setAnimate("");
    if (!showYearList && !showMonthList) {
      setCurrentPage(Math.ceil((selectedYear - startYear + 1) / yearsPerPage));
    } else {
      setShowMonthList(false);
    }
  };
  var selectYear = function selectYear(year) {
    var newDate = new Date(today);
    newDate.setFullYear(year);
    setToday(newDate);
    setShowYearList(false);
    setSelectedYear(year);
    setTimeout(function () {
      setAnimate("");
      setShowMonthList(true);
    }, 0);
  };
  var goToNextPage = function goToNextPage() {
    currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
  };
  var goToPreviousPage = function goToPreviousPage() {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
  };
  var calendarShow = function calendarShow() {
    setToggleOpen(true);
    setShowYearList(true);
  };
  React.useEffect(function () {
    props.getValue(fullDate);
  }, [fullDate]);
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      var target = event.target;
      var isInputClick = inputRef.current && inputRef.current.contains(target);
      var isCalendarClick = target.closest(".bottomAnimation");
      if (!isInputClick && !isCalendarClick) {
        setToggleOpen(false);
      }
    };
    var handleMouseDown = function handleMouseDown(event) {
      setTimeout(function () {
        handleOutsideClick(event);
      }, 0);
    };
    document.addEventListener("mousedown", handleMouseDown);
    return function () {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  var updateFromInput = function updateFromInput(inputValue) {
    var inputDate = new Date(inputValue);
    if (!isNaN(inputDate.getTime()) && inputDate.getFullYear().toString().length == 4) {
      setToday(inputDate);
      setToggleOpen(true);
      setShowYearList(true);
      setSelectedMonth(inputDate.getMonth());
      setSelectedYear(inputDate.getFullYear());
      var selectedYearPageIndex = Math.ceil((inputDate.getFullYear() - startYear + 1) / yearsPerPage);
      setCurrentPage(selectedYearPageIndex);
    } else {
      setToggleOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "relative flex",
    ref: inputRef
  }, /*#__PURE__*/React.createElement("input", {
    type: "month",
    className: "peer block min-h-[auto] pl-1 w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-500 dark:placeholder:text-neutral-500 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1 text-black border-lightSilver",
    onClick: calendarShow,
    defaultValue: fullDate.toString(),
    onChange: function onChange(e) {
      return updateFromInput(e.target.value);
    }
  })), toggleOpen && /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bottomAnimation absolute z-20  bg-white ".concat(toggleOpen && style.bottomAnimation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex mx-auto  items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-md overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between border-b-2 border-lightSilver py-[12px] px-[12px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row  ".concat(!showYearList && animate)
  }, showMonthList === true ? /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 cursor-pointer text-slatyBlue",
    onClick: toggleYearList
  }, currentYear) : showYearList === true ? /*#__PURE__*/React.createElement("h1", {
    className: "proxima text-[14px] font-semibold ml-1 text-slatyBlue"
  }, displayedYears[0] + " - " + displayedYears[displayedYears.length - 1]) : ""), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-5"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, showYearList === true && currentPage <= totalPages && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === 1 ? "opacity-40 pointer-events-none" : "", " text-[20px]"),
    onClick: function onClick() {
      if (currentPage === 1) {
        return;
      }
      goToPreviousPage();
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ".concat(currentPage === totalPages ? "opacity-40 pointer-events-none" : "", " rotate-180 text-[20px]"),
    onClick: function onClick() {
      if (currentPage === totalPages) {
        return;
      }
      goToNextPage();
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, null)))))), showMonthList === true ? /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style.topAnimation, "  w-full h-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-1 place-content-center overflow-hidden proxima"
  }, months.map(function (month, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "py-5 px-[5.4px] w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer ",
      onClick: function onClick() {
        return selectMonth(index + 1);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-14 h-12 hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(index === selectedMonth ? "bg-lightGreen text-primary" : "")
    }, month.length > 5 ? month.slice(0, 3) : month));
  })))) : showYearList === true && /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(style.topAnimation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(animate, "  w-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden proxima"
  }, displayedYears.map(function (year) {
    return /*#__PURE__*/React.createElement("div", {
      key: year,
      className: "py-2 px-[3.9px] w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer",
      onClick: function onClick() {
        return selectYear(year);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "py-4 px-3 w-full h-full hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ".concat(year === selectedYear ? "bg-lightGreen text-primary" : "")
    }, year));
  }))))))))));
};

exports.Datepicker = Datepicker;
exports.DatepickerYear = DatepickerYear;
