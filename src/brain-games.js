import readlineSync from 'readline-sync';

const saluteUser = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export { saluteUser, getUserName };
