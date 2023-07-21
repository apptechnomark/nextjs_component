'use strict';

var React = require('react');

var styles = {"comment_stars_input":"index-module_comment_stars_input__kqCSq","comment_stars_view":"index-module_comment_stars_view__ndecu","comment_stars_input_heart":"index-module_comment_stars_input_heart__XWYAE","comment_stars_view_heart":"index-module_comment_stars_view_heart__3piSo","is_half":"index-module_is_half__d9pf3","is_half_heart":"index-module_is_half_heart__IN3u5"};

var Heart = function Heart() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M9.5189 17.6944L7.7939 16.1194C6.02723 14.5028 4.4314 12.8986 3.0064 11.3069C1.5814 9.71527 0.868896 7.9611 0.868896 6.04443C0.868896 4.47777 1.3939 3.16943 2.4439 2.11943C3.4939 1.06943 4.80223 0.544434 6.3689 0.544434C7.25223 0.544434 8.08556 0.731934 8.8689 1.10693C9.65223 1.48193 10.3189 1.99443 10.8689 2.64443C11.4189 1.99443 12.0856 1.48193 12.8689 1.10693C13.6522 0.731934 14.4856 0.544434 15.3689 0.544434C16.9356 0.544434 18.2439 1.06943 19.2939 2.11943C20.3439 3.16943 20.8689 4.47777 20.8689 6.04443C20.8689 7.9611 20.1606 9.71943 18.7439 11.3194C17.3272 12.9194 15.7189 14.5278 13.9189 16.1444L12.2189 17.6944C11.8356 18.0444 11.3856 18.2194 10.8689 18.2194C10.3522 18.2194 9.90223 18.0444 9.5189 17.6944Z"
  }), React.createElement("path", {
    d: "M12.8689 1.10693C12.0856 1.48193 11.4189 1.99443 10.8689 2.64443V18.2194C11.3856 18.2194 11.8356 18.0444 12.2189 17.6944L13.9189 16.1444C15.7189 14.5278 17.3272 12.9194 18.7439 11.3194C20.1606 9.71943 20.8689 7.9611 20.8689 6.04443C20.8689 4.47777 20.3439 3.16943 19.2939 2.11943C18.2439 1.06943 16.9356 0.544434 15.3689 0.544434C14.4856 0.544434 13.6522 0.731934 12.8689 1.10693Z"
  }), React.createElement("path", {
    d: "M7.7939 16.1194L9.5189 17.6944C9.90223 18.0444 10.3522 18.2194 10.8689 18.2194V2.64443C10.3189 1.99443 9.65223 1.48193 8.8689 1.10693C8.08556 0.731934 7.25223 0.544434 6.3689 0.544434C4.80223 0.544434 3.4939 1.06943 2.4439 2.11943C1.3939 3.16943 0.868896 4.47777 0.868896 6.04443C0.868896 7.9611 1.5814 9.71527 3.0064 11.3069C4.4314 12.8986 6.02723 14.5028 7.7939 16.1194Z"
  }));
};
var Star = function Star() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M10.9371 1.46353C11.0868 1.00287 11.7385 1.00287 11.8882 1.46353L14.1068 8.2918H21.2865C21.7709 8.2918 21.9723 8.9116 21.5804 9.1963L15.7719 13.4164L17.9906 20.2447C18.1402 20.7053 17.613 21.0884 17.2212 20.8037L11.4127 16.5836L5.6042 20.8037C5.21235 21.0884 4.68511 20.7053 4.83478 20.2447L7.05342 13.4164L1.24495 9.1963C0.853093 8.9116 1.05448 8.2918 1.53884 8.2918H8.71851L10.9371 1.46353Z"
  }), React.createElement("path", {
    d: "M5.6042 20.8037L11.4127 16.5836V1.12002L11.3471 1.12C11.3387 1.12 11.3304 1.12104 11.3223 1.12312L11.2563 1.14L11.2404 1.14423C11.1092 1.179 11.0046 1.2779 10.9626 1.40692L8.71851 8.2918H1.53884C1.05448 8.2918 0.853093 8.91161 1.24495 9.19631L7.05342 13.4164L4.83478 20.2447C4.68511 20.7053 5.21235 21.0884 5.6042 20.8037Z"
  }), React.createElement("path", {
    d: "M17.2158 20.8037L11.4073 16.5836V1.12002L11.4729 1.12C11.4813 1.12 11.4896 1.12104 11.4977 1.12312L11.5637 1.14C11.7155 1.17698 11.8393 1.2906 11.8873 1.43933L14.1015 8.2918H21.2812C21.7655 8.2918 21.9669 8.91161 21.5751 9.19631L15.7666 13.4164L17.9852 20.2447C18.1349 20.7053 17.6077 21.0884 17.2158 20.8037Z"
  }));
};

var ratings = [{
  value: "5",
  isHalf: false
}, {
  value: "4.5",
  isHalf: true
}, {
  value: "4",
  isHalf: false
}, {
  value: "3.5",
  isHalf: true
}, {
  value: "3",
  isHalf: false
}, {
  value: "2.5",
  isHalf: true
}, {
  value: "2",
  isHalf: false
}, {
  value: "1.5",
  isHalf: true
}, {
  value: "1",
  isHalf: false
}, {
  value: "0.5",
  isHalf: true
}];
var Rating = function Rating(_a) {
  var icon = _a.icon,
    selected = _a.selected,
    _b = _a.editable,
    editable = _b === void 0 ? true : _b,
    _c = _a.change,
    change = _c === void 0 ? false : _c,
    rateId = _a.rateId;
  var _d = React.useState("0"),
    rating = _d[0],
    setRating = _d[1];
  React.useEffect(function () {
    if (selected) {
      setRating(selected);
    }
  }, [selected]);
  var handleRatingChange = function handleRatingChange(event) {
    if (editable !== false) {
      setRating(event.target.value);
    }
    console.log(event.target.name);
  };
  return React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex flex-row-reverse"
  }, ratings.map(function (item, index) {
    return React.createElement(React.Fragment, {
      key: index
    }, React.createElement("input", {
      className: "".concat(styles.comment_stars_input, " ").concat(item.isHalf ? styles.is_half : "", " ").concat(icon === "heart" ? styles.comment_stars_input_heart : "", " hidden"),
      type: "radio",
      name: "rating-".concat(item.value, "-").concat(rateId),
      value: item.value,
      id: "rating-".concat(item.value, "-").concat(rateId),
      checked: rating === item.value,
      onChange: handleRatingChange,
      disabled: change || !editable
    }), React.createElement("label", {
      className: "".concat(styles.comment_stars_view, " ").concat(item.isHalf ? styles.is_half : "", " ").concat(icon === "heart" ? styles.comment_stars_view_heart : ""),
      htmlFor: "rating-".concat(item.value, "-").concat(rateId)
    }, React.createElement("svg", {
      className: "icon icon-star ".concat(change && "opacity-30")
    }, icon === "heart" ? React.createElement(Heart, null) : React.createElement(Star, null))));
  })));
};

exports.Rating = Rating;
