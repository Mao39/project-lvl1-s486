import readlineSync from 'readline-sync';
import getTask from './tasks';

const game = (greet, gameName) => {
  const name = greet(gameName);

  const iter = (victory) => {
    if (victory === 3) return console.log(`Congratulations, ${name}!`);

    const task = getTask(gameName);
    console.log(`Question: ${task('question')}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== String(task('result'))) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${task('result')}'.\n Let's try again, ${name}!`);

    console.log('Correct!');
    return iter(victory + 1);
  };

  return iter(0);
};

export default game;
