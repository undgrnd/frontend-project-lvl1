"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

var _helpers = require("../helpers");

var _game = _interopRequireDefault(require("../game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RULES_DESCRIPTION = 'What is the result of the expression?';
var OPERATIONS_OF_QUESTION = ['+', '-', '*'];

var askQuestion = function askQuestion() {
  var number1 = (0, _helpers.getRandomNumber)(1, 10);
  var number2 = (0, _helpers.getRandomNumber)(1, 10);
  var operationOfQuestion = (0, _helpers.getRandomItemFromArray)(OPERATIONS_OF_QUESTION);
  var correctAnswer;

  if (operationOfQuestion === '+') {
    correctAnswer = number1 + number2;
  } else if (operationOfQuestion === '-') {
    correctAnswer = number1 - number2;
  } else if (operationOfQuestion === '*') {
    correctAnswer = number1 * number2;
  }

  var userAnswer = parseInt(_readlineSync["default"].question("Question: ".concat(number1, " ").concat(operationOfQuestion, " ").concat(number2, " ")), 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1jYWxjLmpzIl0sIm5hbWVzIjpbIlJVTEVTX0RFU0NSSVBUSU9OIiwiT1BFUkFUSU9OU19PRl9RVUVTVElPTiIsImFza1F1ZXN0aW9uIiwibnVtYmVyMSIsIm51bWJlcjIiLCJvcGVyYXRpb25PZlF1ZXN0aW9uIiwiY29ycmVjdEFuc3dlciIsInVzZXJBbnN3ZXIiLCJwYXJzZUludCIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiaXNVc2VyUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHLHVDQUExQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQS9COztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTUMsT0FBTyxHQUFHLDhCQUFnQixDQUFoQixFQUFtQixFQUFuQixDQUFoQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyw4QkFBZ0IsQ0FBaEIsRUFBbUIsRUFBbkIsQ0FBaEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQ0FBdUJKLHNCQUF2QixDQUE1QjtBQUVBLE1BQUlLLGFBQUo7O0FBQ0EsTUFBSUQsbUJBQW1CLEtBQUssR0FBNUIsRUFBaUM7QUFDL0JDLElBQUFBLGFBQWEsR0FBR0gsT0FBTyxHQUFHQyxPQUExQjtBQUNELEdBRkQsTUFFTyxJQUFJQyxtQkFBbUIsS0FBSyxHQUE1QixFQUFpQztBQUN0Q0MsSUFBQUEsYUFBYSxHQUFHSCxPQUFPLEdBQUdDLE9BQTFCO0FBQ0QsR0FGTSxNQUVBLElBQUlDLG1CQUFtQixLQUFLLEdBQTVCLEVBQWlDO0FBQ3RDQyxJQUFBQSxhQUFhLEdBQUdILE9BQU8sR0FBR0MsT0FBMUI7QUFDRDs7QUFFRCxNQUFNRyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MseUJBQWFDLFFBQWIscUJBQW1DUCxPQUFuQyxjQUE4Q0UsbUJBQTlDLGNBQXFFRCxPQUFyRSxPQUFELEVBQW1GLEVBQW5GLENBQTNCO0FBRUEsU0FBTztBQUNMTyxJQUFBQSxXQUFXLEVBQUVMLGFBQWEsS0FBS0MsVUFEMUI7QUFFTEEsSUFBQUEsVUFBVSxFQUFWQSxVQUZLO0FBR0xELElBQUFBLGFBQWEsRUFBYkE7QUFISyxHQUFQO0FBS0QsQ0FyQkQ7O2VBdUJlLG9CQUFNO0FBQ25CLHdCQUFLTixpQkFBTCxFQUF3QkUsV0FBeEI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXksIGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi4vZ2FtZSc7XG5cbmNvbnN0IFJVTEVTX0RFU0NSSVBUSU9OID0gJ1doYXQgaXMgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbj8nO1xuY29uc3QgT1BFUkFUSU9OU19PRl9RVUVTVElPTiA9IFsnKycsICctJywgJyonXTtcblxuY29uc3QgYXNrUXVlc3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG51bWJlcjEgPSBnZXRSYW5kb21OdW1iZXIoMSwgMTApO1xuICBjb25zdCBudW1iZXIyID0gZ2V0UmFuZG9tTnVtYmVyKDEsIDEwKTtcbiAgY29uc3Qgb3BlcmF0aW9uT2ZRdWVzdGlvbiA9IGdldFJhbmRvbUl0ZW1Gcm9tQXJyYXkoT1BFUkFUSU9OU19PRl9RVUVTVElPTik7XG5cbiAgbGV0IGNvcnJlY3RBbnN3ZXI7XG4gIGlmIChvcGVyYXRpb25PZlF1ZXN0aW9uID09PSAnKycpIHtcbiAgICBjb3JyZWN0QW5zd2VyID0gbnVtYmVyMSArIG51bWJlcjI7XG4gIH0gZWxzZSBpZiAob3BlcmF0aW9uT2ZRdWVzdGlvbiA9PT0gJy0nKSB7XG4gICAgY29ycmVjdEFuc3dlciA9IG51bWJlcjEgLSBudW1iZXIyO1xuICB9IGVsc2UgaWYgKG9wZXJhdGlvbk9mUXVlc3Rpb24gPT09ICcqJykge1xuICAgIGNvcnJlY3RBbnN3ZXIgPSBudW1iZXIxICogbnVtYmVyMjtcbiAgfVxuXG4gIGNvbnN0IHVzZXJBbnN3ZXIgPSBwYXJzZUludChyZWFkbGluZVN5bmMucXVlc3Rpb24oYFF1ZXN0aW9uOiAke251bWJlcjF9ICR7b3BlcmF0aW9uT2ZRdWVzdGlvbn0gJHtudW1iZXIyfSBgKSwgMTApO1xuXG4gIHJldHVybiB7XG4gICAgaXNVc2VyUmlnaHQ6IGNvcnJlY3RBbnN3ZXIgPT09IHVzZXJBbnN3ZXIsXG4gICAgdXNlckFuc3dlcixcbiAgICBjb3JyZWN0QW5zd2VyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBnYW1lKFJVTEVTX0RFU0NSSVBUSU9OLCBhc2tRdWVzdGlvbik7XG59O1xuIl19