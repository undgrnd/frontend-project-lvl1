import readlineSync from 'readline-sync';

const questionsCount = 3;

export default (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let attempt = 0; attempt < questionsCount; attempt += 1) {
    const { question, answer } = getQuestionAndAnswer();

    const userAnswer = readlineSync.question(`Question: ${question} `);

    const isUserRight = answer === userAnswer;

    if (isUserRight) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
