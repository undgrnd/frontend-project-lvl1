"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saluteUser = function saluteUser() {
  console.log('Welcome to the Brain Games!');
};

var getUserName = function getUserName() {
  var userName = _readlineSync["default"].question('May I have your name? ');

  console.log("Hello, ".concat(userName, "!"));
  return userName;
};

var getResultOfGame = function getResultOfGame(askQuestion) {
  var count = 0;
  var isGameContinue = true;

  while (isGameContinue) {
    var _askQuestion = askQuestion(),
        isUserRight = _askQuestion.isUserRight,
        userAnswer = _askQuestion.userAnswer,
        correctAnswer = _askQuestion.correctAnswer;

    if (isUserRight) {
      console.log('Correct!');
    } else {
      console.log("".concat(userAnswer, " is wrong answer ;(. Correct answer was ").concat(correctAnswer, "."));
    }

    count = isUserRight ? count + 1 : NaN;
    isGameContinue = count < 3 && !Number.isNaN(count);
  }

  return count === 3;
};

var _default = function _default(rules, askQuestion) {
  saluteUser();
  console.log(rules);
  var userName = getUserName();
  var gameResult = getResultOfGame(askQuestion);

  if (gameResult) {
    console.log("Congratulations, ".concat(userName, "!"));
  }
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nYW1lLmpzIl0sIm5hbWVzIjpbInNhbHV0ZVVzZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlck5hbWUiLCJ1c2VyTmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiZ2V0UmVzdWx0T2ZHYW1lIiwiYXNrUXVlc3Rpb24iLCJjb3VudCIsImlzR2FtZUNvbnRpbnVlIiwiaXNVc2VyUmlnaHQiLCJ1c2VyQW5zd2VyIiwiY29ycmVjdEFuc3dlciIsIk5hTiIsIk51bWJlciIsImlzTmFOIiwicnVsZXMiLCJnYW1lUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxRQUFRLEdBQUdDLHlCQUFhQyxRQUFiLENBQXNCLHdCQUF0QixDQUFqQjs7QUFDQUwsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGtCQUFzQkUsUUFBdEI7QUFDQSxTQUFPQSxRQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFdBQUQsRUFBaUI7QUFDdkMsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxjQUFjLEdBQUcsSUFBckI7O0FBRUEsU0FBT0EsY0FBUCxFQUF1QjtBQUFBLHVCQUM4QkYsV0FBVyxFQUR6QztBQUFBLFFBQ2JHLFdBRGEsZ0JBQ2JBLFdBRGE7QUFBQSxRQUNBQyxVQURBLGdCQUNBQSxVQURBO0FBQUEsUUFDWUMsYUFEWixnQkFDWUEsYUFEWjs7QUFHckIsUUFBSUYsV0FBSixFQUFpQjtBQUNmVixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlVSxVQUFmLHFEQUFvRUMsYUFBcEU7QUFDRDs7QUFFREosSUFBQUEsS0FBSyxHQUFHRSxXQUFXLEdBQUdGLEtBQUssR0FBRyxDQUFYLEdBQWVLLEdBQWxDO0FBQ0FKLElBQUFBLGNBQWMsR0FBR0QsS0FBSyxHQUFHLENBQVIsSUFBYSxDQUFDTSxNQUFNLENBQUNDLEtBQVAsQ0FBYVAsS0FBYixDQUEvQjtBQUNEOztBQUVELFNBQU9BLEtBQUssS0FBSyxDQUFqQjtBQUNELENBbEJEOztlQW9CZSxrQkFBQ1EsS0FBRCxFQUFRVCxXQUFSLEVBQXdCO0FBQ3JDUixFQUFBQSxVQUFVO0FBQ1ZDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxLQUFaO0FBQ0EsTUFBTWIsUUFBUSxHQUFHRCxXQUFXLEVBQTVCO0FBQ0EsTUFBTWUsVUFBVSxHQUFHWCxlQUFlLENBQUNDLFdBQUQsQ0FBbEM7O0FBQ0EsTUFBSVUsVUFBSixFQUFnQjtBQUNkakIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLDRCQUFnQ0UsUUFBaEM7QUFDRDtBQUNGLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5jb25zdCBzYWx1dGVVc2VyID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJyk7XG59O1xuXG5jb25zdCBnZXRVc2VyTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oJ01heSBJIGhhdmUgeW91ciBuYW1lPyAnKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke3VzZXJOYW1lfSFgKTtcbiAgcmV0dXJuIHVzZXJOYW1lO1xufTtcblxuY29uc3QgZ2V0UmVzdWx0T2ZHYW1lID0gKGFza1F1ZXN0aW9uKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBpc0dhbWVDb250aW51ZSA9IHRydWU7XG5cbiAgd2hpbGUgKGlzR2FtZUNvbnRpbnVlKSB7XG4gICAgY29uc3QgeyBpc1VzZXJSaWdodCwgdXNlckFuc3dlciwgY29ycmVjdEFuc3dlciB9ID0gYXNrUXVlc3Rpb24oKTtcblxuICAgIGlmIChpc1VzZXJSaWdodCkge1xuICAgICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3VzZXJBbnN3ZXJ9IGlzIHdyb25nIGFuc3dlciA7KC4gQ29ycmVjdCBhbnN3ZXIgd2FzICR7Y29ycmVjdEFuc3dlcn0uYCk7XG4gICAgfVxuXG4gICAgY291bnQgPSBpc1VzZXJSaWdodCA/IGNvdW50ICsgMSA6IE5hTjtcbiAgICBpc0dhbWVDb250aW51ZSA9IGNvdW50IDwgMyAmJiAhTnVtYmVyLmlzTmFOKGNvdW50KTtcbiAgfVxuXG4gIHJldHVybiBjb3VudCA9PT0gMztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChydWxlcywgYXNrUXVlc3Rpb24pID0+IHtcbiAgc2FsdXRlVXNlcigpO1xuICBjb25zb2xlLmxvZyhydWxlcyk7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKTtcbiAgY29uc3QgZ2FtZVJlc3VsdCA9IGdldFJlc3VsdE9mR2FtZShhc2tRdWVzdGlvbik7XG4gIGlmIChnYW1lUmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHt1c2VyTmFtZX0hYCk7XG4gIH1cbn07XG4iXX0=