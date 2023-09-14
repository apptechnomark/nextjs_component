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
  var handleTabClick = function handleTabClick(tabId, index) {
    setTab(tabId);
    setSelectedTabIndex(index);
  };
  useEffect(function () {
    getValue(tab);
  }, [tab]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center py-[10px]"
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "flex",
      onClick: function onClick() {
        return handleTabClick(tab.id, index);
      },
      key: tab.id + index
    }, tab.icon, /*#__PURE__*/React.createElement("label", {
      className: "px-5 cursor-pointer ".concat(selectedTabIndex === index ? "text-primary text-base font-semibold" : "text-slatyGrey font-medium text-sm")
    }, tab.label));
  })));
};

export { Navigation };
