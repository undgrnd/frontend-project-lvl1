import readlineSync from 'readline-sync';
import { getRandomItemFromArray, getRandomNumber } from '../helpers';
import game from '../game';

const RULES_DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS_OF_QUESTION = ['+', '-', '*'];

const askQuestion = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operationOfQuestion = getRandomItemFromArray(OPERATIONS_OF_QUESTION);

  let correctAnswer;
  if (operationOfQuestion === '+') {
    correctAnswer = number1 + number2;
  } else if (operationOfQuestion === '-') {
    correctAnswer = number1 - number2;
  } else if (operationOfQuestion === '*') {
    correctAnswer = number1 * number2;
  }

  const userAnswer = parseInt(readlineSync.question(`Question: ${number1} ${operationOfQuestion} ${number2} `), 10);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(RULES_DESCRIPTION, askQuestion);
};
