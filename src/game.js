import readlineSync from 'readline-sync';

const questionsCount = 3;

const getResultOfGame = (getQuestionAndAnswer, normalizeUserAnswer) => {
  let count = 0;
  let isGameContinue = true;

  while (isGameContinue) {
    const { question, answer } = getQuestionAndAnswer();

    const userAnswer = readlineSync.question(`Question: ${question} `);
    const normalizedUserAnswer = normalizeUserAnswer
      ? normalizeUserAnswer(userAnswer) : userAnswer;

    const isUserRight = answer === normalizedUserAnswer;

    if (isUserRight) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
    }

    count = isUserRight ? count + 1 : NaN;
    isGameContinue = count < questionsCount && !Number.isNaN(count);
  }

  return count === questionsCount;
};

export default (rules, getQuestionAndAnswer, normalizeUserAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const gameResult = getResultOfGame(getQuestionAndAnswer, normalizeUserAnswer);
  if (gameResult) {
    console.log(`Congratulations, ${userName}!`);
  }
};
