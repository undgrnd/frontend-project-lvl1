import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'What is the result of the expression?';

const getGcd = (n1, n2) => {
  const largest = Math.max(n1, n2);
  const least = Math.min(n1, n2);
  const remainder = largest % least;

  if (remainder === 0) {
    return least;
  }
  return getGcd(remainder, least);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const answer = getGcd(number1, number2);

  const question = `${number1} ${number2}`;

  return {
    question,
    answer: parseInt(answer, 10),
  };
};

export default () => {
  game(gameDescription, getQuestionAndAnswer);
};
