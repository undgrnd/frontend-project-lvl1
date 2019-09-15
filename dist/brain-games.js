"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserName = exports.saluteUser = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saluteUser = function saluteUser() {
  console.log('Welcome to the Brain Games!');
};

exports.saluteUser = saluteUser;

var getUserName = function getUserName() {
  var userName = _readlineSync["default"].question('May I have your name? ');

  console.log("Hello, ".concat(userName, "!"));
  return userName;
};

exports.getUserName = getUserName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9icmFpbi1nYW1lcy5qcyJdLCJuYW1lcyI6WyJzYWx1dGVVc2VyIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJOYW1lIiwidXNlck5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDRCxDQUZEOzs7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxRQUFRLEdBQUdDLHlCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFqQjs7QUFDQUwsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGtCQUFzQkUsUUFBdEI7QUFDQSxTQUFPQSxRQUFQO0FBQ0QsQ0FKRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmNvbnN0IHNhbHV0ZVVzZXIgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcbn07XG5cbmNvbnN0IGdldFVzZXJOYW1lID0gKCkgPT4ge1xuICBjb25zdCB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7dXNlck5hbWV9IWApO1xuICByZXR1cm4gdXNlck5hbWU7XG59O1xuXG5leHBvcnQgeyBzYWx1dGVVc2VyLCBnZXRVc2VyTmFtZSB9O1xuIl19