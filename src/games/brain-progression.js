import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const progression = [...Array(progressionLength).keys()];
  const answer = progression[getRandomNumber(0, progression.length - 1)];
  progression[progression.indexOf(answer)] = '..';

  return {
    question: progression,
    answer: answer.toString(),
  };
};

export default () => {
  game(gameDescription, getQuestionAndAnswer);
};
