import readlineSync from 'readline-sync';

const getResultOfGame = (askQuestion) => {
  let count = 0;
  let isGameContinue = true;

  while (isGameContinue) {
    const { isUserRight, userAnswer, correctAnswer } = askQuestion();

    if (isUserRight) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    }

    count = isUserRight ? count + 1 : NaN;
    isGameContinue = count < 3 && !Number.isNaN(count);
  }

  return count === 3;
};

export default (rules, askQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameResult = getResultOfGame(askQuestion);
  if (gameResult) {
    console.log(`Congratulations, ${userName}!`);
  }
};
