'use strict';

var React = require('react');

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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var NavigationBar = function NavigationBar(_a) {
  _a.className;
    _a.disabled;
    var getValue = _a.getValue,
    tabs = _a.tabs,
    visibleTab = _a.visibleTab;
    __rest(_a, ["className", "disabled", "getValue", "tabs", "visibleTab"]);
  var selectRef = React.useRef(null);
  var _b = React.useState(0),
    selectedTabIndex = _b[0],
    setSelectedTabIndex = _b[1];
  var _c = React.useState(tabs[0].id),
    tab = _c[0],
    setTab = _c[1];
  var _d = React.useState(tabs.slice(0, visibleTab)),
    visibleTabs = _d[0],
    setVisibleTabs = _d[1];
  var _e = React.useState(tabs.slice(visibleTab)),
    dropdownTabs = _e[0],
    setDropdownTabs = _e[1];
  var _f = React.useState(false),
    isOpen = _f[0],
    setIsOpen = _f[1];
  var handleTabClick = function handleTabClick(tabId, index) {
    var clickedTab = dropdownTabs[index];
    var lastVisibleTab = visibleTabs[visibleTabs.length - 1];
    // Check if the clicked tab is already visible, then return
    if (visibleTabs.some(function (tab) {
      return tab.id === tabId;
    })) {
      setTab(tabId); // Update the tab state
      setSelectedTabIndex(index);
      return;
    }
    // Find the index of the clicked tab in the dropdownTabs array
    var clickedTabIndexInDropdown = dropdownTabs.findIndex(function (tab) {
      return tab.id === tabId;
    });
    // Update the state to swap the tabs
    var updatedVisibleTabs = __spreadArray([], visibleTabs, true);
    var updatedDropdownTabs = __spreadArray([], dropdownTabs, true);
    // Replace the last visible tab with the clicked tab
    updatedVisibleTabs[visibleTabs.length - 1] = clickedTab;
    // If the clicked tab is already in the dropdown, replace it with the last visible tab
    if (clickedTabIndexInDropdown !== -1) {
      updatedDropdownTabs[clickedTabIndexInDropdown] = lastVisibleTab;
      // Find the new index of the selected tab in the visible tabs
      var newSelectedTabIndex = updatedVisibleTabs.findIndex(function (tab) {
        return tab.id === tabId;
      });
      setSelectedTabIndex(newSelectedTabIndex);
    } else {
      // If the clicked tab is not in the dropdown, add the last visible tab to the beginning of the dropdown
      updatedDropdownTabs.unshift(lastVisibleTab);
      setSelectedTabIndex(visibleTabs.length + clickedTabIndexInDropdown);
    }
    setTab(tabId);
    setVisibleTabs(updatedVisibleTabs);
    setDropdownTabs(updatedDropdownTabs);
  };
  React.useEffect(function () {
    getValue(tab);
  }, [tab]);
  // To Toggle Tab-list
  var handleToggleOpen = function handleToggleOpen() {
    setIsOpen(!isOpen);
  };
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return function () {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center py-[10px]"
  }, visibleTabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return handleTabClick(tab.id, index);
      },
      key: tab.id + index
    }, /*#__PURE__*/React.createElement("label", {
      className: "border-r ".concat(index > tabs.length - 2 ? "border-none" : "border-r-lightSilver", " px-[20px] cursor-pointer ").concat(selectedTabIndex === index ? "text-primary text-base font-semibold" : "text-slatyGrey font-medium text-sm")
    }, tab.label));
  }), visibleTab < tabs.length && /*#__PURE__*/React.createElement("div", {
    ref: selectRef,
    className: "cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: handleToggleOpen
  }, "M"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "absolute w-[215px] py-2 z-[1] bg-pureWhite overflow-y-auto transition-transform drop-shadow-lg ".concat(isOpen ? "max-h-full translate-y-0 transition-opacity opacity-100 duration-500 ease-out" : "max-h-0 translate-y-20 transition-opacity opacity-0 duration-500", " ")
  }, dropdownTabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: tab.id,
      onClick: function onClick() {
        return handleTabClick(tab.id,
        // visibleTabs.length +
        index);
      },
      className: "p-2 hover:bg-whiteSmoke font-normal text-base cursor-pointer flex"
    }, /*#__PURE__*/React.createElement("label", {
      className: "cursor-pointer"
    }, tab.label));
  }))))));
};

exports.NavigationBar = NavigationBar;
