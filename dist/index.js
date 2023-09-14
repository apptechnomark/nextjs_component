'use strict';

var React = require('react');

function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-[345px] bg-pureWhite m-5 mx-auto bg-white shadow-md rounded-2xl"
  }, props.children);
}

function CardHeader(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center p-4"
  }, props.children);
}

function CardContent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 text-sm text-gray-700 "
  }, props.children);
}

function CardAction(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end p-2"
  }, props.children);
}

exports.Card = Card;
exports.CardAction = CardAction;
exports.CardContent = CardContent;
exports.CardHeader = CardHeader;
