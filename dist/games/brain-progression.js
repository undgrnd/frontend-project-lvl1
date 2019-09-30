"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _helpers = require("../helpers");

var _game = _interopRequireDefault(require("../game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var RULES_DESCRIPTION = 'What number is missing in the progression?';

var createProgression = function createProgression() {
  var progression = _toConsumableArray(Array(10).keys());

  var hiddenNumber = progression[(0, _helpers.getRandomNumber)(0, progression.length - 1)];
  progression[progression.indexOf(hiddenNumber)] = '..';
  return {
    progression: progression.join(' '),
    hiddenNumber: hiddenNumber
  };
};

var askQuestion = function askQuestion() {
  var _createProgression = createProgression(),
      progression = _createProgression.progression,
      correctAnswer = _createProgression.hiddenNumber;

  var userAnswer = parseInt(_readlineSync["default"].question("Question: ".concat(progression, " ")), 10);
  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer: userAnswer,
    correctAnswer: correctAnswer
  };
};

var _default = function _default() {
  (0, _game["default"])(RULES_DESCRIPTION, askQuestion);
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1wcm9ncmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJSVUxFU19ERVNDUklQVElPTiIsImNyZWF0ZVByb2dyZXNzaW9uIiwicHJvZ3Jlc3Npb24iLCJBcnJheSIsImtleXMiLCJoaWRkZW5OdW1iZXIiLCJsZW5ndGgiLCJpbmRleE9mIiwiam9pbiIsImFza1F1ZXN0aW9uIiwiY29ycmVjdEFuc3dlciIsInVzZXJBbnN3ZXIiLCJwYXJzZUludCIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiaXNVc2VyUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsNENBQTFCOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixNQUFNQyxXQUFXLHNCQUFPQyxLQUFLLENBQUMsRUFBRCxDQUFMLENBQVVDLElBQVYsRUFBUCxDQUFqQjs7QUFDQSxNQUFNQyxZQUFZLEdBQUdILFdBQVcsQ0FBQyw4QkFBZ0IsQ0FBaEIsRUFBbUJBLFdBQVcsQ0FBQ0ksTUFBWixHQUFxQixDQUF4QyxDQUFELENBQWhDO0FBQ0FKLEVBQUFBLFdBQVcsQ0FBQ0EsV0FBVyxDQUFDSyxPQUFaLENBQW9CRixZQUFwQixDQUFELENBQVgsR0FBaUQsSUFBakQ7QUFFQSxTQUFPO0FBQ0xILElBQUFBLFdBQVcsRUFBRUEsV0FBVyxDQUFDTSxJQUFaLENBQWlCLEdBQWpCLENBRFI7QUFFTEgsSUFBQUEsWUFBWSxFQUFaQTtBQUZLLEdBQVA7QUFJRCxDQVREOztBQVdBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQSwyQkFJcEJSLGlCQUFpQixFQUpHO0FBQUEsTUFFdEJDLFdBRnNCLHNCQUV0QkEsV0FGc0I7QUFBQSxNQUdSUSxhQUhRLHNCQUd0QkwsWUFIc0I7O0FBTXhCLE1BQU1NLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyx5QkFBYUMsUUFBYixxQkFBbUNaLFdBQW5DLE9BQUQsRUFBcUQsRUFBckQsQ0FBM0I7QUFFQSxTQUFPO0FBQ0xhLElBQUFBLFdBQVcsRUFBRUwsYUFBYSxLQUFLQyxVQUQxQjtBQUVMQSxJQUFBQSxVQUFVLEVBQVZBLFVBRks7QUFHTEQsSUFBQUEsYUFBYSxFQUFiQTtBQUhLLEdBQVA7QUFLRCxDQWJEOztlQWVlLG9CQUFNO0FBQ25CLHdCQUFLVixpQkFBTCxFQUF3QlMsV0FBeEI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCB7IGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi4vZ2FtZSc7XG5cbmNvbnN0IFJVTEVTX0RFU0NSSVBUSU9OID0gJ1doYXQgbnVtYmVyIGlzIG1pc3NpbmcgaW4gdGhlIHByb2dyZXNzaW9uPyc7XG5cbmNvbnN0IGNyZWF0ZVByb2dyZXNzaW9uID0gKCkgPT4ge1xuICBjb25zdCBwcm9ncmVzc2lvbiA9IFsuLi5BcnJheSgxMCkua2V5cygpXTtcbiAgY29uc3QgaGlkZGVuTnVtYmVyID0gcHJvZ3Jlc3Npb25bZ2V0UmFuZG9tTnVtYmVyKDAsIHByb2dyZXNzaW9uLmxlbmd0aCAtIDEpXTtcbiAgcHJvZ3Jlc3Npb25bcHJvZ3Jlc3Npb24uaW5kZXhPZihoaWRkZW5OdW1iZXIpXSA9ICcuLic7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9ncmVzc2lvbjogcHJvZ3Jlc3Npb24uam9pbignICcpLFxuICAgIGhpZGRlbk51bWJlcixcbiAgfTtcbn07XG5cbmNvbnN0IGFza1F1ZXN0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgcHJvZ3Jlc3Npb24sXG4gICAgaGlkZGVuTnVtYmVyOiBjb3JyZWN0QW5zd2VyLFxuICB9ID0gY3JlYXRlUHJvZ3Jlc3Npb24oKTtcblxuICBjb25zdCB1c2VyQW5zd2VyID0gcGFyc2VJbnQocmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBRdWVzdGlvbjogJHtwcm9ncmVzc2lvbn0gYCksIDEwKTtcblxuICByZXR1cm4ge1xuICAgIGlzVXNlclJpZ2h0OiBjb3JyZWN0QW5zd2VyID09PSB1c2VyQW5zd2VyLFxuICAgIHVzZXJBbnN3ZXIsXG4gICAgY29ycmVjdEFuc3dlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgZ2FtZShSVUxFU19ERVNDUklQVElPTiwgYXNrUXVlc3Rpb24pO1xufTtcbiJdfQ==