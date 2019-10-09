import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const getGCD = (n1, n2) => {
  const largest = Math.max(n1, n2);
  const least = Math.min(n1, n2);
  const remainder = largest % least;

  if (remainder === 0) {
    return least;
  }
  return getGCD(remainder, least);
};

const askQuestion = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = getGCD(number1, number2);

  const userAnswer = parseInt(readlineSync.question(`Question: ${number1} ${number2} `), 10);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(GAME_DESCRIPTION, askQuestion);
};
