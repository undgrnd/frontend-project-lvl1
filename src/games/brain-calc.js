import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const RULES_DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS_OF_QUESTION = ['+', '-', '*'];

const askQuestion = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operationOfQuestion = OPERATIONS_OF_QUESTION[
    getRandomNumber(0, OPERATIONS_OF_QUESTION.length)
  ];

  let correctAnswer;
  switch (operationOfQuestion) {
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
      correctAnswer = number1 + number2;
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
