'use strict';

var React = require('react');

var styles = {"scaleUpDiv":"timepicker-module_scaleUpDiv__fuD7w","scaleUpDiv1":"timepicker-module_scaleUpDiv1__MRwCd","moveInputText":"timepicker-module_moveInputText__DdLmh"};

var Timepicker = function Timepicker() {
  var hourDigits = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var minuteDigits = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  var _a = React.useState(12),
    selectedHourDigit = _a[0],
    setSelectedHourDigit = _a[1];
  var _b = React.useState(0),
    selectedMinuteDigit = _b[0],
    setSelectedMinuteDigit = _b[1];
  var _c = React.useState(true),
    isAM = _c[0],
    setIsAM = _c[1];
  var _d = React.useState(true),
    showHourDigits = _d[0],
    setShowHourDigits = _d[1];
  var _e = React.useState(false),
    showMinuteDigits = _e[0],
    setShowMinuteDigits = _e[1];
  var handleHourSelectDigit = function handleHourSelectDigit(digit) {
    setSelectedHourDigit(digit);
    var timer = setTimeout(function () {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }, 100);
    return function () {
      clearTimeout(timer);
    };
  };
  var handleMinuteSelectDigit = function handleMinuteSelectDigit(digit) {
    setSelectedMinuteDigit(digit);
  };
  var toggleSetAM = function toggleSetAM() {
    setIsAM(!isAM);
  };
  var showHourClock = function showHourClock() {
    if (showHourDigits) {
      setShowHourDigits(true);
      setShowMinuteDigits(false);
    } else {
      setShowMinuteDigits(false);
      setShowHourDigits(true);
    }
  };
  var showMinuteClock = function showMinuteClock() {
    if (showMinuteDigits) {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    } else {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }
  };
  var renderHourDigits = hourDigits.map(function (digit, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm cursor-pointer transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(digit === selectedHourDigit ? 'text-white' : 'text-black'),
      style: {
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)"),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        return handleHourSelectDigit(digit);
      }
    }, digit);
  });
  var renderMinuteDigits = minuteDigits.map(function (digit, index) {
    var formattedDigit = digit < 10 ? "0".concat(digit) : digit;
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm cursor-pointer transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(digit === selectedMinuteDigit ? 'text-white' : 'text-black'),
      style: {
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)"),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        return setSelectedMinuteDigit(digit);
      }
    }, formattedDigit);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement("input", {
    className: "w-9 h-8 py-1 font-semibold text-lg border border-gray-300 rounded text-center cursor-pointer ".concat(showHourDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray'),
    type: "text",
    placeholder: "00",
    readOnly: true,
    defaultValue: "".concat(selectedHourDigit < 10 ? "0".concat(selectedHourDigit) : selectedHourDigit !== 12 ? selectedHourDigit : '00'),
    onClick: showHourClock,
    style: {
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-600"
  }, ":"), /*#__PURE__*/React.createElement("input", {
    className: "w-9 h-8 py-1 font-semibold text-lg border border-gray-300 rounded text-center cursor-pointer ".concat(showMinuteDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray'),
    type: "text",
    placeholder: "00",
    readOnly: true,
    defaultValue: "".concat(selectedMinuteDigit < 10 ? "0".concat(selectedMinuteDigit) : selectedMinuteDigit),
    onClick: showMinuteClock,
    style: {
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 ml-10 border border-gray-300 rounded-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(isAM && 'bg-slatyGreen text-primary', " transition-all rounded-l-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer"),
    onClick: toggleSetAM
  }, "AM"), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(!isAM && 'bg-slatyGreen text-primary', " transition-all rounded-r-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer"),
    onClick: toggleSetAM
  }, "PM"))), !showMinuteDigits && showHourDigits && /*#__PURE__*/React.createElement("div", {
    className: "w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1"
  }, renderHourDigits, hourDigits.map(function (digit, index) {
    return digit === selectedHourDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleHourSelectDigit(selectedHourDigit === 12 ? 1 : selectedHourDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2",
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4",
    style: {
      top: '56.3%',
      left: '52%'
    }
  }))), showMinuteDigits && /*#__PURE__*/React.createElement("div", {
    className: "w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1 ".concat(styles.scaleUpDiv)
  }, renderMinuteDigits, minuteDigits.map(function (digit, index) {
    return digit === selectedMinuteDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleMinuteSelectDigit(selectedMinuteDigit === 0 ? 1 : selectedMinuteDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2",
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4",
    style: {
      top: '56.3%',
      left: '52%'
    }
  })))));
};

var Timepicker24 = function Timepicker24() {
  var hourDigits12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var hourDigits24 = [24, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  var minuteDigits = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
  var _a = React.useState(12) || React.useState(24),
    selectedHourDigit = _a[0],
    setSelectedHourDigit = _a[1];
  var _b = React.useState(0),
    selectedMinuteDigit = _b[0],
    setSelectedMinuteDigit = _b[1];
  var _c = React.useState(false),
    isAM = _c[0],
    setIsAM = _c[1];
  var _d = React.useState(true),
    showHourDigits = _d[0],
    setShowHourDigits = _d[1];
  var _e = React.useState(false),
    showMinuteDigits = _e[0],
    setShowMinuteDigits = _e[1];
  var _f = React.useState(false),
    isHour24Selected = _f[0],
    setIsHour24Selected = _f[1];
  var _g = React.useState(true),
    isDigit12 = _g[0],
    setIsDigit12 = _g[1];
  var _h = React.useState(false),
    isDigit24 = _h[0],
    setIsDigit24 = _h[1];
  var handleHourSelectDigit = function handleHourSelectDigit(digit) {
    setSelectedHourDigit(digit);
    setIsHour24Selected(true);
    if (digit <= 12) {
      setIsDigit12(true);
      setIsDigit24(false);
    } else {
      setIsDigit24(true);
      setIsDigit12(false);
    }
    // const timer = setTimeout(() => {
    //     setShowMinuteDigits(true);
    // }, 3000);
    // return () => {
    //     clearTimeout(timer);
    // };
  };

  var handleMinuteSelectDigit = function handleMinuteSelectDigit(digit) {
    setSelectedMinuteDigit(digit);
  };
  var toggleSetAM = function toggleSetAM() {
    setIsAM(!isAM);
  };
  var showHourClock = function showHourClock() {
    setIsHour24Selected(false);
    if (showHourDigits) {
      setShowHourDigits(true);
      setShowMinuteDigits(false);
    } else {
      setShowMinuteDigits(false);
      setShowHourDigits(true);
    }
  };
  var showMinuteClock = function showMinuteClock() {
    if (showMinuteDigits) {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    } else {
      setShowMinuteDigits(true);
      setShowHourDigits(false);
    }
  };
  var renderHourDigits12 = hourDigits12.map(function (digit, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(digit === selectedHourDigit ? 'text-white' : 'text-black', " ").concat(isDigit12 ? "text-black" : "text-gray-400"),
      style: {
        transform: "".concat(isDigit12 ? "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)") : "rotate(".concat(index * 30, "deg) translate(0, -55px) rotate(").concat(-index * 30, "deg)")),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        handleHourSelectDigit(digit), setIsHour24Selected(false);
      }
    }, digit);
  });
  var renderHourDigits24 = hourDigits24.map(function (digit, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(isDigit24 ? "text-black" : "text-gray-400", "  ").concat(digit === selectedHourDigit ? 'text-white' : 'text-gray', " "),
      style: {
        transform: "".concat(isDigit24 ? "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)") : "rotate(".concat(index * 30, "deg) translate(0,").concat(isHour24Selected ? "-90px" : "-55px", ") rotate(").concat(-index * 30, "deg)")),
        top: "46%",
        left: '47%'
      },
      onClick: function onClick() {
        return handleHourSelectDigit(digit);
      }
    }, digit);
  });
  var renderMinuteDigits = minuteDigits.map(function (digit, index) {
    var formattedDigit = digit < 10 ? "0".concat(digit) : digit;
    return /*#__PURE__*/React.createElement("div", {
      key: digit,
      className: "absolute top-1/2 left-1/2 z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ".concat(digit === selectedMinuteDigit ? 'text-white' : 'text-black'),
      style: {
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)"),
        top: '46%',
        left: '47%'
      },
      onClick: function onClick() {
        return setSelectedMinuteDigit(digit);
      }
    }, formattedDigit);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center mt-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-1"
  }, /*#__PURE__*/React.createElement("input", {
    className: "w-9 h-8 py-1 font-semibold text-lg border border-gray-300 rounded text-center cursor-pointer ".concat(showHourDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray'),
    type: "text",
    placeholder: "00",
    readOnly: true,
    defaultValue: "".concat(selectedHourDigit < 10 ? "0".concat(selectedHourDigit) : selectedHourDigit !== 12 ? selectedHourDigit : '00'),
    onClick: showHourClock,
    style: {
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-600"
  }, ":"), /*#__PURE__*/React.createElement("input", {
    className: "w-9 h-8 py-1 font-semibold text-lg border border-gray-300 rounded text-center cursor-pointer ".concat(showMinuteDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray'),
    type: "text",
    placeholder: "00",
    readOnly: true,
    defaultValue: "".concat(selectedMinuteDigit < 10 ? "0".concat(selectedMinuteDigit) : selectedMinuteDigit),
    onClick: showMinuteClock,
    style: {
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 ml-10 border border-gray-300 rounded-md opacity-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(isAM && 'bg-slatyGreen text-primary', " transition-all rounded-l-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer pointer-events-none "),
    onClick: toggleSetAM
  }, "AM"), /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-8 ".concat(!isAM && 'bg-slatyGreen text-primary', " transition-all rounded-r-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer pointer-events-none"),
    onClick: toggleSetAM
  }, "PM"))), !showMinuteDigits && showHourDigits && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center"
  }, !isHour24Selected && /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1"
  }, renderHourDigits12, hourDigits12.map(function (digit, index) {
    return digit === selectedHourDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleHourSelectDigit(selectedHourDigit === 12 ? 1 : selectedHourDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2",
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4",
    style: {
      top: '56.3%',
      left: '52%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(isHour24Selected ? "w-56 h-56 -top-56 ".concat(styles.scaleUpDiv, " ") : "w-32  h-32 ".concat(!isDigit24 ? "-top-[179px] -left-[2px]" : "-top-[180px] left-[1px]", " bg-transparent "), "  bg-lightGray rounded-full relative flex items-center justify-center")
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1"
  }, renderHourDigits24, hourDigits24.map(function (digit, index) {
    return digit === selectedHourDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '43%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleHourSelectDigit(selectedHourDigit === 24 ? 1 : selectedHourDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2",
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), isHour24Selected && /*#__PURE__*/React.createElement("div", {
    className: "absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4",
    style: {
      top: '56.3%',
      left: '52%'
    }
  })))), showMinuteDigits && /*#__PURE__*/React.createElement("div", {
    className: "w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full relative -left-1 ".concat(styles.scaleUpDiv)
  }, renderMinuteDigits, minuteDigits.map(function (digit, index) {
    return digit === selectedMinuteDigit && /*#__PURE__*/React.createElement(React.Fragment, {
      key: digit
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer",
      style: {
        top: '41%',
        left: '42.6%',
        transform: "rotate(".concat(index * 30, "deg) translate(0, -90px) rotate(").concat(-index * 30, "deg)")
      },
      onClick: function onClick() {
        return handleMinuteSelectDigit(selectedMinuteDigit === 0 ? 1 : selectedMinuteDigit + 1);
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2",
      style: {
        top: '51%',
        left: '52%',
        transformOrigin: 'center top',
        transform: "translateX(-50%) rotate(".concat(index * 30, "deg) translateY(-90px)")
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4",
    style: {
      top: '56.3%',
      left: '52%'
    }
  })))));
};

exports.Timepicker = Timepicker;
exports.Timepicker24 = Timepicker24;
