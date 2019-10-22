import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const questionNumber = getRandomNumber(1, 100);
  const answer = isEven(questionNumber) ? 'yes' : 'no';

  const questionText = `Question: ${questionNumber} `;

  return {
    question: questionText,
    answer,
  };
};

export default () => {
  game(gameDescription, getQuestionAndAnswer);
};
