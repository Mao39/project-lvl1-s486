import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomOperator = () => '*-+'[randomNumber(0, 3)];

const getTask = (gameName) => {
  if (gameName === 'brain-even') return randomNumber(1, 51);
  if (gameName === 'brain-calc') return `${randomNumber(1, 51)} ${randomOperator()} ${randomNumber(1, 51)}`;

  return null;
};

const getResult = (gameName, task) => {
  if (gameName === 'brain-even') return (task % 2) === 0 ? 'yes' : 'no';
  if (gameName === 'brain-calc') return eval(task);

  return null;
};

const game = (greet, gameName) => {
  const name = greet(gameName);

  const iter = (victory) => {
    if (victory === 3) return console.log(`Congratulations, ${name}!`);

    const task = getTask(gameName);
    console.log(`Question: ${task}`);

    const result = getResult(gameName, task);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== String(result)) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);

    console.log('Correct!');
    return iter(victory + 1);
  };

  return iter(0);
};

export default game;
