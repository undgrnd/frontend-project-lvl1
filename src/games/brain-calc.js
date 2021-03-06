import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operation = operations[
    getRandomNumber(0, operations.length - 1)
  ];

  let answer;
  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = null;
  }

  const question = `${number1} ${operation} ${number2}`;

  return {
    question,
    answer: answer.toString(),
  };
};

export default () => {
  game(gameDescription, getQuestionAndAnswer);
};
