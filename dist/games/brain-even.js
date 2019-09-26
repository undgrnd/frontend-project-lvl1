"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _helpers = require("../helpers");

var _game = _interopRequireDefault(require("../game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RULES_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

var askQuestion = function askQuestion() {
  var number = (0, _helpers.getRandomNumber)(1, 100);
  var isNumberEven = number % 2 === 0;
  var correctAnswer = isNumberEven ? 'yes' : 'no';

  var userAnswer = _readlineSync["default"].question("Question: ".concat(number, " "));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1ldmVuLmpzIl0sIm5hbWVzIjpbIlJVTEVTX0RFU0NSSVBUSU9OIiwiYXNrUXVlc3Rpb24iLCJudW1iZXIiLCJpc051bWJlckV2ZW4iLCJjb3JyZWN0QW5zd2VyIiwidXNlckFuc3dlciIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiaXNVc2VyUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLDREQUExQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLE1BQU1DLE1BQU0sR0FBRyw4QkFBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FBZjtBQUNBLE1BQU1DLFlBQVksR0FBR0QsTUFBTSxHQUFHLENBQVQsS0FBZSxDQUFwQztBQUNBLE1BQU1FLGFBQWEsR0FBR0QsWUFBWSxHQUFHLEtBQUgsR0FBVyxJQUE3Qzs7QUFDQSxNQUFNRSxVQUFVLEdBQUdDLHlCQUFhQyxRQUFiLHFCQUFtQ0wsTUFBbkMsT0FBbkI7O0FBRUEsU0FBTztBQUNMTSxJQUFBQSxXQUFXLEVBQUVKLGFBQWEsS0FBS0MsVUFEMUI7QUFFTEEsSUFBQUEsVUFBVSxFQUFWQSxVQUZLO0FBR0xELElBQUFBLGFBQWEsRUFBYkE7QUFISyxHQUFQO0FBS0QsQ0FYRDs7ZUFhZSxvQkFBTTtBQUNuQix3QkFBS0osaUJBQUwsRUFBd0JDLFdBQXhCO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5pbXBvcnQgeyBnZXRSYW5kb21OdW1iZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBnYW1lIGZyb20gJy4uL2dhbWUnO1xuXG5jb25zdCBSVUxFU19ERVNDUklQVElPTiA9ICdBbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLic7XG5cbmNvbnN0IGFza1F1ZXN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBudW1iZXIgPSBnZXRSYW5kb21OdW1iZXIoMSwgMTAwKTtcbiAgY29uc3QgaXNOdW1iZXJFdmVuID0gbnVtYmVyICUgMiA9PT0gMDtcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IGlzTnVtYmVyRXZlbiA/ICd5ZXMnIDogJ25vJztcbiAgY29uc3QgdXNlckFuc3dlciA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihgUXVlc3Rpb246ICR7bnVtYmVyfSBgKTtcblxuICByZXR1cm4ge1xuICAgIGlzVXNlclJpZ2h0OiBjb3JyZWN0QW5zd2VyID09PSB1c2VyQW5zd2VyLFxuICAgIHVzZXJBbnN3ZXIsXG4gICAgY29ycmVjdEFuc3dlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgZ2FtZShSVUxFU19ERVNDUklQVElPTiwgYXNrUXVlc3Rpb24pO1xufTtcbiJdfQ==