import React from 'react';

var styles = {"avatarGroup":"index-module_avatarGroup__pGxEK","avatar":"index-module_avatar__6S1Wo"};

var Avatar = function Avatar(_a) {
  var imageUrl = _a.imageUrl,
    name = _a.name,
    className = _a.className,
    type = _a.type;
  var avatarTypeClass = type === "square" ? "rounded-none" : "rounded-full";
  var handleOnError = function handleOnError(e) {
    e.currentTarget.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png";
  };
  var Name = name === null || name === void 0 ? void 0 : name.toUpperCase();
  var Red = ["A", "F", "K", "P", "U", "Z"];
  var Blue = ["B", "G", "L", "Q", "V"];
  var Green = ["C", "H", "M", "R", "W"];
  var SkyBlue = ["D", "I", "N", "S", "X"];
  return React.createElement("div", {
    className: styles.avatar
  }, imageUrl ? React.createElement("img", {
    className: "w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] display-block object-fit-cover border-2 border-pureWhite ".concat(avatarTypeClass, " ").concat(className),
    src: imageUrl,
    alt: Name,
    onError: handleOnError
  }) : Name ? React.createElement("span", {
    className: "w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] text-pureWhite border-2 border-pureWhite text-sm sm:text-lg flex justify-center items-center ".concat(avatarTypeClass, " ").concat(Red.includes(Name.charAt(0)) ? "bg-defaultRed" : Blue.includes(Name.charAt(0)) ? "bg-defaultBlue" : Green.includes(Name.charAt(0)) ? "bg-primary" : SkyBlue.includes(Name.charAt(0)) ? "bg-infoColor" : "bg-defaultOrange", " ").concat(className)
  }, Name.length <= 2 ? Name.slice(0, 2) : Name.match(/\s/) ? Name.split(" ").map(function (word) {
    return word.charAt(0);
  }).join("") : Name.charAt(0)) : React.createElement("span", {
    className: "w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-[#ADB5BD] text-pureWhite border-2 border-pureWhite rounded-full text-sm sm:text-lg flex justify-center items-center"
  }, React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M15.9996 15.9992C17.5909 15.9992 19.1171 15.3671 20.2423 14.2418C21.3675 13.1166 21.9996 11.5905 21.9996 9.99921C21.9996 8.40791 21.3675 6.88178 20.2423 5.75657C19.1171 4.63135 17.5909 3.99921 15.9996 3.99921C14.4083 3.99921 12.8822 4.63135 11.757 5.75657C10.6318 6.88178 9.99965 8.40791 9.99965 9.99921C9.99965 11.5905 10.6318 13.1166 11.757 14.2418C12.8822 15.3671 14.4083 15.9992 15.9996 15.9992ZM19.9996 9.99921C19.9996 11.0601 19.5782 12.0775 18.8281 12.8276C18.0779 13.5778 17.0605 13.9992 15.9996 13.9992C14.9388 13.9992 13.9214 13.5778 13.1712 12.8276C12.4211 12.0775 11.9996 11.0601 11.9996 9.99921C11.9996 8.93834 12.4211 7.92092 13.1712 7.17078C13.9214 6.42063 14.9388 5.99921 15.9996 5.99921C17.0605 5.99921 18.0779 6.42063 18.8281 7.17078C19.5782 7.92092 19.9996 8.93834 19.9996 9.99921ZM27.9996 25.9992C27.9996 27.9992 25.9996 27.9992 25.9996 27.9992H5.99965C5.99965 27.9992 3.99965 27.9992 3.99965 25.9992C3.99965 23.9992 5.99965 17.9992 15.9996 17.9992C25.9996 17.9992 27.9996 23.9992 27.9996 25.9992ZM25.9996 25.9912C25.9976 25.4992 25.6917 24.0192 24.3356 22.6632C23.0316 21.3592 20.5776 19.9992 15.9996 19.9992C11.4196 19.9992 8.96765 21.3592 7.66365 22.6632C6.30765 24.0192 6.00365 25.4992 5.99965 25.9912H25.9996Z",
    fill: "white"
  }))));
};
var AvatarGroup = function AvatarGroup(_a) {
  var children = _a.children,
    _b = _a.type,
    type = _b === void 0 ? "circle" : _b,
    _c = _a.show,
    show = _c === void 0 ? 5 : _c,
    _d = _a.className,
    className = _d === void 0 ? "" : _d;
  if (React.Children.count(children) > show) {
    var remainingCount = React.Children.count(children) - show;
    var visibleChildren = React.Children.toArray(children).slice(0, show);
    return React.createElement("div", {
      className: "".concat(styles.avatarGroup, " flex items-center justify-center")
    }, visibleChildren.map(function (child, index) {
      return React.createElement(Avatar, {
        key: index,
        imageUrl: child.props.imageUrl,
        name: child.props.name,
        type: type,
        className: className
      });
    }), React.createElement(Avatar, {
      className: "!text-[#CA6510] !bg-[#FECBA1] ".concat(className),
      name: "+".concat(remainingCount),
      type: type
    }));
  }
  return React.createElement("div", {
    className: "avatar-group"
  }, children);
};

export { Avatar, AvatarGroup };
//# sourceMappingURL=index.es.js.map
