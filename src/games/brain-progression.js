import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'What number is missing in the progression?';
const PROGRESSION_LENGTH = 10;

const normalizeUserAnswer = (answer) => parseInt(answer, 10);

const createQuestion = () => {
  const progression = [...Array(PROGRESSION_LENGTH).keys()];
  const correctAnswer = progression[getRandomNumber(0, progression.length - 1)];
  progression[progression.indexOf(correctAnswer)] = '..';

  return {
    progression: progression.join(' '),
    correctAnswer,
  };
};

const getQuestionAndAnswer = () => {
  const {
    progression,
    correctAnswer: answer,
  } = createQuestion();

  return {
    question: progression,
    answer,
  };
};

export default () => {
  game(gameDescription, getQuestionAndAnswer, normalizeUserAnswer);
};
