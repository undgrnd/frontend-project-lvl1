"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _helpers = require("../helpers");

var _game = _interopRequireDefault(require("../game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RULES_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

var isNumberPrime = function isNumberPrime(number) {
  for (var i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

var askQuestion = function askQuestion() {
  var number = (0, _helpers.getRandomNumber)(1, 100);
  var correctAnswer = isNumberPrime(number) ? 'yes' : 'no';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1wcmltZS5qcyJdLCJuYW1lcyI6WyJSVUxFU19ERVNDUklQVElPTiIsImlzTnVtYmVyUHJpbWUiLCJudW1iZXIiLCJpIiwiTWF0aCIsInNxcnQiLCJhc2tRdWVzdGlvbiIsImNvcnJlY3RBbnN3ZXIiLCJ1c2VyQW5zd2VyIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJpc1VzZXJSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsK0RBQTFCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2hDLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSUMsSUFBSSxDQUFDQyxJQUFMLENBQVVILE1BQVYsQ0FBckIsRUFBd0NDLENBQUMsSUFBSSxDQUE3QyxFQUFnRDtBQUM5QyxRQUFJRCxNQUFNLEdBQUdDLENBQVQsS0FBZSxDQUFuQixFQUFzQjtBQUNwQixhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sSUFBUDtBQUNELENBUEQ7O0FBU0EsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNSixNQUFNLEdBQUcsOEJBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQWY7QUFDQSxNQUFNSyxhQUFhLEdBQUdOLGFBQWEsQ0FBQ0MsTUFBRCxDQUFiLEdBQXdCLEtBQXhCLEdBQWdDLElBQXREOztBQUNBLE1BQU1NLFVBQVUsR0FBR0MseUJBQWFDLFFBQWIscUJBQW1DUixNQUFuQyxPQUFuQjs7QUFFQSxTQUFPO0FBQ0xTLElBQUFBLFdBQVcsRUFBRUosYUFBYSxLQUFLQyxVQUQxQjtBQUVMQSxJQUFBQSxVQUFVLEVBQVZBLFVBRks7QUFHTEQsSUFBQUEsYUFBYSxFQUFiQTtBQUhLLEdBQVA7QUFLRCxDQVZEOztlQVllLG9CQUFNO0FBQ25CLHdCQUFLUCxpQkFBTCxFQUF3Qk0sV0FBeEI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCB7IGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi4vZ2FtZSc7XG5cbmNvbnN0IFJVTEVTX0RFU0NSSVBUSU9OID0gJ0Fuc3dlciBcInllc1wiIGlmIGdpdmVuIG51bWJlciBpcyBwcmltZS4gT3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJztcblxuY29uc3QgaXNOdW1iZXJQcmltZSA9IChudW1iZXIpID0+IHtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gTWF0aC5zcXJ0KG51bWJlcik7IGkgKz0gMSkge1xuICAgIGlmIChudW1iZXIgJSBpID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgYXNrUXVlc3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IGdldFJhbmRvbU51bWJlcigxLCAxMDApO1xuICBjb25zdCBjb3JyZWN0QW5zd2VyID0gaXNOdW1iZXJQcmltZShudW1iZXIpID8gJ3llcycgOiAnbm8nO1xuICBjb25zdCB1c2VyQW5zd2VyID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBRdWVzdGlvbjogJHtudW1iZXJ9IGApO1xuXG4gIHJldHVybiB7XG4gICAgaXNVc2VyUmlnaHQ6IGNvcnJlY3RBbnN3ZXIgPT09IHVzZXJBbnN3ZXIsXG4gICAgdXNlckFuc3dlcixcbiAgICBjb3JyZWN0QW5zd2VyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBnYW1lKFJVTEVTX0RFU0NSSVBUSU9OLCBhc2tRdWVzdGlvbik7XG59O1xuIl19