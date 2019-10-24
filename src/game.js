import readlineSync from 'readline-sync';

const questionsCount = 3;

export default (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let count = 0;

  for (let attempt = 0; attempt < questionsCount; attempt += 1) {
    const { question, answer } = getQuestionAndAnswer();

    const userAnswer = readlineSync.question(`Question: ${question} `);

    const isUserRight = answer.toString() === userAnswer;

    if (isUserRight) {
      console.log('Correct!');
      count = isUserRight && count + 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      break;
    }
  }

  if (count === questionsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};
