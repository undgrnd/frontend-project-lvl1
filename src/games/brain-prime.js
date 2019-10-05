import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const RULES_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const askQuestion = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number} `);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(RULES_DESCRIPTION, askQuestion);
};
