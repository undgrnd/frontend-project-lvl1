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

var getGCD = function getGCD(n1, n2) {
  var largest = Math.max(n1, n2);
  var least = Math.min(n1, n2);
  var remainder = largest % least;

  if (remainder === 0) {
    return least;
  }

  return getGCD(remainder, least);
};

var askQuestion = function askQuestion() {
  var number1 = (0, _helpers.getRandomNumber)(1, 100);
  var number2 = (0, _helpers.getRandomNumber)(1, 100);
  var correctAnswer = getGCD(number1, number2);
  var userAnswer = parseInt(_readlineSync["default"].question("Question: ".concat(number1, " ").concat(number2, " ")), 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9icmFpbi1nY2QuanMiXSwibmFtZXMiOlsiUlVMRVNfREVTQ1JJUFRJT04iLCJnZXRHQ0QiLCJuMSIsIm4yIiwibGFyZ2VzdCIsIk1hdGgiLCJtYXgiLCJsZWFzdCIsIm1pbiIsInJlbWFpbmRlciIsImFza1F1ZXN0aW9uIiwibnVtYmVyMSIsIm51bWJlcjIiLCJjb3JyZWN0QW5zd2VyIiwidXNlckFuc3dlciIsInBhcnNlSW50IiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJpc1VzZXJSaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsdUNBQTFCOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEVBQUQsRUFBS0MsRUFBTCxFQUFZO0FBQ3pCLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNKLEVBQVQsRUFBYUMsRUFBYixDQUFoQjtBQUNBLE1BQU1JLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNOLEVBQVQsRUFBYUMsRUFBYixDQUFkO0FBQ0EsTUFBTU0sU0FBUyxHQUFHTCxPQUFPLEdBQUdHLEtBQTVCOztBQUVBLE1BQUlFLFNBQVMsS0FBSyxDQUFsQixFQUFxQjtBQUNuQixXQUFPRixLQUFQO0FBQ0Q7O0FBQ0QsU0FBT04sTUFBTSxDQUFDUSxTQUFELEVBQVlGLEtBQVosQ0FBYjtBQUNELENBVEQ7O0FBV0EsSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxPQUFPLEdBQUcsOEJBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLDhCQUFnQixDQUFoQixFQUFtQixHQUFuQixDQUFoQjtBQUNBLE1BQU1DLGFBQWEsR0FBR1osTUFBTSxDQUFDVSxPQUFELEVBQVVDLE9BQVYsQ0FBNUI7QUFFQSxNQUFNRSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MseUJBQWFDLFFBQWIscUJBQW1DTixPQUFuQyxjQUE4Q0MsT0FBOUMsT0FBRCxFQUE0RCxFQUE1RCxDQUEzQjtBQUVBLFNBQU87QUFDTE0sSUFBQUEsV0FBVyxFQUFFTCxhQUFhLEtBQUtDLFVBRDFCO0FBRUxBLElBQUFBLFVBQVUsRUFBVkEsVUFGSztBQUdMRCxJQUFBQSxhQUFhLEVBQWJBO0FBSEssR0FBUDtBQUtELENBWkQ7O2VBY2Usb0JBQU07QUFDbkIsd0JBQUtiLGlCQUFMLEVBQXdCVSxXQUF4QjtBQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtYmVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuLi9nYW1lJztcblxuY29uc3QgUlVMRVNfREVTQ1JJUFRJT04gPSAnV2hhdCBpcyB0aGUgcmVzdWx0IG9mIHRoZSBleHByZXNzaW9uPyc7XG5cbmNvbnN0IGdldEdDRCA9IChuMSwgbjIpID0+IHtcbiAgY29uc3QgbGFyZ2VzdCA9IE1hdGgubWF4KG4xLCBuMik7XG4gIGNvbnN0IGxlYXN0ID0gTWF0aC5taW4objEsIG4yKTtcbiAgY29uc3QgcmVtYWluZGVyID0gbGFyZ2VzdCAlIGxlYXN0O1xuXG4gIGlmIChyZW1haW5kZXIgPT09IDApIHtcbiAgICByZXR1cm4gbGVhc3Q7XG4gIH1cbiAgcmV0dXJuIGdldEdDRChyZW1haW5kZXIsIGxlYXN0KTtcbn07XG5cbmNvbnN0IGFza1F1ZXN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBudW1iZXIxID0gZ2V0UmFuZG9tTnVtYmVyKDEsIDEwMCk7XG4gIGNvbnN0IG51bWJlcjIgPSBnZXRSYW5kb21OdW1iZXIoMSwgMTAwKTtcbiAgY29uc3QgY29ycmVjdEFuc3dlciA9IGdldEdDRChudW1iZXIxLCBudW1iZXIyKTtcblxuICBjb25zdCB1c2VyQW5zd2VyID0gcGFyc2VJbnQocmVhZGxpbmVTeW5jLnF1ZXN0aW9uKGBRdWVzdGlvbjogJHtudW1iZXIxfSAke251bWJlcjJ9IGApLCAxMCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1VzZXJSaWdodDogY29ycmVjdEFuc3dlciA9PT0gdXNlckFuc3dlcixcbiAgICB1c2VyQW5zd2VyLFxuICAgIGNvcnJlY3RBbnN3ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGdhbWUoUlVMRVNfREVTQ1JJUFRJT04sIGFza1F1ZXN0aW9uKTtcbn07XG4iXX0=