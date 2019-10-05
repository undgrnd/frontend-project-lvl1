import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const RULES_DESCRIPTION = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

const createProgression = () => {
  const progression = [...Array(PROGRESSION_LENGTH).keys()];
  const hiddenNumber = progression[getRandomNumber(0, progression.length - 1)];
  progression[progression.indexOf(hiddenNumber)] = '..';

  return {
    progression: progression.join(' '),
    hiddenNumber,
  };
};

const askQuestion = () => {
  const {
    progression,
    hiddenNumber: correctAnswer,
  } = createProgression();

  const userAnswer = parseInt(readlineSync.question(`Question: ${progression} `), 10);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(RULES_DESCRIPTION, askQuestion);
};
