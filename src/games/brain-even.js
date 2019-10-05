import readlineSync from 'readline-sync';
import { getRandomNumber } from '../helpers';
import game from '../game';

const RULES_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const askQuestion = () => {
  const question = getRandomNumber(1, 100);
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${question} `);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(RULES_DESCRIPTION, askQuestion);
};
