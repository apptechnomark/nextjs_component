'use strict';

var React = require('react');

var Profile = function Profile(_a) {
  var type = _a.type,
    variant = _a.variant,
    name = _a.name,
    getValue = _a.getValue;
  var _b = React.useState(null),
    image = _b[0],
    setImage = _b[1];
  var inputId = React.useState(function () {
    return "image-upload-".concat(Math.random().toString(36).substring(7));
  })[0];
  var handleImageUpload = function handleImageUpload(event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
      var reader_1 = new FileReader();
      reader_1.onload = function () {
        setImage(reader_1.result);
        getValue === null || getValue === void 0 ? void 0 : getValue(file.name, reader_1.result);
      };
      reader_1.readAsDataURL(file);
    }
  };
  var typeStyle = type === "square" ? "rounded-sm" : "rounded-full";
  var variantStyle = variant === "medium" ? "w-12 h-12" : "w-16 h-16";
  var Name = name === null || name === void 0 ? void 0 : name.toUpperCase();
  var Red = ["A", "F", "K", "P", "U", "Z"];
  var Blue = ["B", "G", "L", "Q", "V"];
  var Green = ["C", "H", "M", "R", "W"];
  var SkyBlue = ["D", "I", "N", "S", "X"];
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handleImageUpload,
    id: inputId,
    className: "hidden"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: "absolute ".concat(variant === "medium" ? "left-6 top-6" : "left-10 top-10", "  bg-pureWhite p-1 rounded-sm cursor-pointer z-10")
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.84347 15.2C1.56521 15.2 1.32173 15.0958 1.11303 14.8873C0.904336 14.6789 0.799988 14.4357 0.799988 14.1578V3.73557C0.799988 3.45765 0.904336 3.21446 1.11303 3.00602C1.32173 2.79758 1.56521 2.69335 1.84347 2.69335H8.88694L7.84347 3.73557H1.84347V14.1578H12.2782V8.11289L13.3217 7.07067V14.1578C13.3217 14.4357 13.2174 14.6789 13.0087 14.8873C12.8 15.0958 12.5565 15.2 12.2782 15.2H1.84347ZM10.2261 2.83232L10.9739 3.56187L6.01738 8.49504V9.98889H7.49564L12.4696 5.02098L13.2 5.75053L8.24347 10.7184C8.15071 10.8111 8.03767 10.8864 7.90434 10.9443C7.771 11.0022 7.63477 11.0311 7.49564 11.0311H5.49564C5.34491 11.0311 5.22028 10.9819 5.12173 10.8835C5.02318 10.785 4.9739 10.6605 4.9739 10.51V8.51241C4.9739 8.37345 5.00289 8.23738 5.06086 8.10421C5.11883 7.97104 5.19419 7.85813 5.28694 7.76549L10.2261 2.83232ZM13.2 5.75053L10.2261 2.83232L11.9652 1.09528C12.1623 0.89842 12.4087 0.799988 12.7043 0.799988C13 0.799988 13.2464 0.90421 13.4435 1.11265L14.9043 2.58913C15.1014 2.79758 15.2 3.04365 15.2 3.32737C15.2 3.61109 15.0956 3.85137 14.8869 4.04824L13.2 5.75053Z",
    fill: "#333333"
  }))), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: Name,
    className: "".concat(variantStyle, " ").concat(typeStyle)
  }) : Name ? /*#__PURE__*/React.createElement("span", {
    className: "relative ".concat(variant === "medium" ? "w-12 h-12 text-base " : "w-16 h-16 text-2xl", " text-pureWhite flex justify-center items-center ").concat(variantStyle, " ").concat(typeStyle, " ").concat(Red.includes(Name.charAt(0)) ? "bg-defaultRed" : Blue.includes(Name.charAt(0)) ? "bg-defaultBlue" : Green.includes(Name.charAt(0)) ? "bg-primary" : SkyBlue.includes(Name.charAt(0)) ? "bg-infoColor" : "bg-defaultOrange")
  }, Name.length <= 2 ? Name.slice(0, 2) : Name.match(/\s/) ? Name.split(" ").map(function (word) {
    return word.charAt(0);
  }).join("") : Name.charAt(0)) : /*#__PURE__*/React.createElement("span", {
    className: "relative ".concat(variantStyle, " ").concat(typeStyle, " bg-[#ADB5BD] flex justify-center items-center")
  }, /*#__PURE__*/React.createElement("svg", {
    width: "".concat(variant === "medium" ? "20" : "32"),
    height: "".concat(variant === "medium" ? "20" : "32"),
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_8414_116205)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    fill: "white",
    fillOpacity: "0.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.9996 15.9992C17.5909 15.9992 19.1171 15.367 20.2423 14.2418C21.3675 13.1166 21.9996 11.5905 21.9996 9.99918C21.9996 8.40788 21.3675 6.88175 20.2423 5.75654C19.1171 4.63132 17.5909 3.99918 15.9996 3.99918C14.4083 3.99918 12.8822 4.63132 11.757 5.75654C10.6318 6.88175 9.99963 8.40788 9.99963 9.99918C9.99963 11.5905 10.6318 13.1166 11.757 14.2418C12.8822 15.367 14.4083 15.9992 15.9996 15.9992ZM19.9996 9.99918C19.9996 11.06 19.5782 12.0775 18.8281 12.8276C18.0779 13.5777 17.0605 13.9992 15.9996 13.9992C14.9388 13.9992 13.9214 13.5777 13.1712 12.8276C12.4211 12.0775 11.9996 11.06 11.9996 9.99918C11.9996 8.93831 12.4211 7.92089 13.1712 7.17075C13.9214 6.4206 14.9388 5.99918 15.9996 5.99918C17.0605 5.99918 18.0779 6.4206 18.8281 7.17075C19.5782 7.92089 19.9996 8.93831 19.9996 9.99918ZM27.9996 25.9992C27.9996 27.9992 25.9996 27.9992 25.9996 27.9992H5.99963C5.99963 27.9992 3.99963 27.9992 3.99963 25.9992C3.99963 23.9992 5.99963 17.9992 15.9996 17.9992C25.9996 17.9992 27.9996 23.9992 27.9996 25.9992ZM25.9996 25.9912C25.9976 25.4992 25.6916 24.0192 24.3356 22.6632C23.0316 21.3592 20.5776 19.9992 15.9996 19.9992C11.4196 19.9992 8.96763 21.3592 7.66363 22.6632C6.30763 24.0192 6.00363 25.4992 5.99963 25.9912H25.9996Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_8414_116205"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    fill: "white"
  }))))));
};

exports.Profile = Profile;
