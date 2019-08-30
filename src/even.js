import readlineSync from 'readline-sync';

const even = (name) => {
  const iter = (victory) => {
    if (victory === 3) return console.log(`Congratulations, ${name}!`); // name

    const number = Math.floor(Math.random() * (51 - 1)) + 1;
    console.log(`Question: ${number}`);

    const isEven = (number % 2) === 0 ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if (answer !== isEven) return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\n Let's try again, ${name}!`); // name

    console.log('Correct!');
    return iter(victory + 1);
  };

  return iter(0);
};

export default even;
