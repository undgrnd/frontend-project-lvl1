import readlineSync from 'readline-sync';
import { saluteUser, getUserName } from './brain-games';

const RULES_DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS_OF_QUESTION = ['+', '-', '*'];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomItemFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const askQuestion = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operationOfQuestion = getRandomItemFromArray(OPERATIONS_OF_QUESTION);

  let correctAnswer;
  if (operationOfQuestion === '+') {
    correctAnswer = number1 + number2;
  } else if (operationOfQuestion === '-') {
    correctAnswer = number1 - number2;
  } else if (operationOfQuestion === '*') {
    correctAnswer = number1 * number2;
  }

  const userAnswer = parseInt(readlineSync.question(`Question: ${number1} ${operationOfQuestion} ${number2} `), 10);
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
