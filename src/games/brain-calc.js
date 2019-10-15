import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const askQuestion = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = operations[
    getRandomNumber(0, operations.length - 1)
  ];

  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = null;
  }

  const userAnswer = parseInt(readlineSync.question(`Question: ${number1} ${operation} ${number2} `), 10);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(gameDescription, askQuestion);
};
