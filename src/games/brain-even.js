import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const askQuestion = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${question} `);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(gameDescription, askQuestion);
};
