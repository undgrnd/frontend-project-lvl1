import readlineSync from 'readline-sync';
import { getRandomNumber } from '../helpers';
import game from '../game';

const RULES_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const askQuestion = () => {
  const number = getRandomNumber(1, 100);
  const isNumberEven = number % 2 === 0;
  const correctAnswer = isNumberEven ? 'yes' : 'no';
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
