import readlineSync from 'readline-sync';
import { saluteUser, getUserName } from './brain-games';

const RULES_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const askQuestion = () => {
  const number = getRandomNumber(1, 100);
  const isNumberEven = number % 2 === 0;
  const correctAnswer = isNumberEven ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number} `);
  const isUserRight = correctAnswer === userAnswer;
  const pointForQuestion = isUserRight ? 1 : NaN;

  if (isUserRight) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  }
  return pointForQuestion;
};

const getResultOfGame = () => {
  let count = 0;
  let isGameContinue = true;

  while (isGameContinue) {
    count += askQuestion();
    isGameContinue = count < 3 && !Number.isNaN(count);
  }

  return count === 3;
};

const play = () => {
  saluteUser();
  console.log(RULES_DESCRIPTION);
  const userName = getUserName();
  const gameResult = getResultOfGame();
  if (gameResult) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default play;
