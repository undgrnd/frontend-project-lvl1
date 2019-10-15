import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

const createQuestion = () => {
  const progression = [...Array(PROGRESSION_LENGTH).keys()];
  const correctAnswer = progression[getRandomNumber(0, progression.length - 1)];
  progression[progression.indexOf(correctAnswer)] = '..';

  return {
    progression: progression.join(' '),
    correctAnswer,
  };
};

const askQuestion = () => {
  const {
    progression,
    correctAnswer,
  } = createQuestion();

  const userAnswer = parseInt(readlineSync.question(`Question: ${progression} `), 10);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(gameDescription, askQuestion);
};
