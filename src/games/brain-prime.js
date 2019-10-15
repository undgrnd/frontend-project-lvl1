import readlineSync from 'readline-sync';
import getRandomNumber from '../get-random-number';
import game from '../game';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const askQuestion = () => {
  const questionNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${questionNumber} `);

  return {
    isUserRight: correctAnswer === userAnswer,
    userAnswer,
    correctAnswer,
  };
};

export default () => {
  game(gameDescription, askQuestion);
};
