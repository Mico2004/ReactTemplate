'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_validator2.default.isEmail('test'));

// IndecisionApp.defaultProps = {
//     options:['asas']
// };

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, { options: ['Doctor', 'bar', 'super'] }), document.getElementById('app'));
