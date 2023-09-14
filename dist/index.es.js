import React, { useState, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var styles = {"slideRight":"navigation-module_slideRight__HDj5L","slideLeft":"navigation-module_slideLeft__OaWnh"};

var Navigation = function Navigation(_a) {
  _a.className;
    _a.disabled;
    var getValue = _a.getValue,
    tabs = _a.tabs;
    __rest(_a, ["className", "disabled", "getValue", "tabs"]);
  var _b = useState(0),
    selectedTabIndex = _b[0],
    setSelectedTabIndex = _b[1];
  var _c = useState(tabs[0].id),
    tab = _c[0],
    setTab = _c[1];
  var _d = useState(false),
    isOpen = _d[0],
    setIsOpen = _d[1];
  var _e = useState(null),
    clickedLabel = _e[0],
    setClickedLabel = _e[1];
  var handleTabClick = function handleTabClick(tabId, index) {
    setTab(tabId);
    setSelectedTabIndex(index);
    setIsOpen(!isOpen);
    setClickedLabel(tabId);
  };
  useEffect(function () {
    getValue(tab);
  }, [tab]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex h-[60px] gap-1 justify-center max-w-full items-center py-[18px]"
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex h-6 max-w-auto  px-5 justify-center items-center",
      onClick: function onClick() {
        return handleTabClick(tab.id, index);
      },
      key: tab.id + index
    }, /*#__PURE__*/React.createElement("span", {
      className: "cursor-pointer ".concat(clickedLabel === tab.id ? styles.slideRight : "")
    }, tab.icon), selectedTabIndex === index && /*#__PURE__*/React.createElement("label", {
      className: "pl-2.5 pr-5 ".concat(selectedTabIndex === index ? "text-primary text-base font-semibold" : "text-slatyGrey font-medium text-sm", " ").concat(clickedLabel === tab.id ? styles.slideRight : "")
    }, tab.label));
  })));
};

export { Navigation };
