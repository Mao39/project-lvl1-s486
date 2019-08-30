import readlineSync from 'readline-sync';

const greet = (gameName) => {
  console.log('Welcome to the Brain Games!');
  if (gameName === 'brain-even') console.log('Answer "yes" if number even otherwise answer "no".');
  if (gameName === 'brain-calc') console.log('What is the result of the expression?');

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

export default greet;
