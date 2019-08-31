import readlineSync from 'readline-sync';

const greet = (gameName) => {
  console.log('Welcome to the Brain Games!');

  if (gameName === 'brain-even') console.log('Answer "yes" if number even otherwise answer "no".');
  if (gameName === 'brain-calc') console.log('What is the result of the expression?');
  if (gameName === 'brain-gcd') console.log('Find the greatest common divisor of given numbers.');
  if (gameName === 'brain-progression') console.log('What number is missing in the progression?');
  if (gameName === 'brain-prime') console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

export default greet;
