const constructor = (question, result) => (message) => {
  switch (message) {
    case 'question':
      return question;
    case 'result':
      return result;
    default:
      return null;
  }
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomOperator = () => '*-+'[randomNumber(0, 3)];

const getGcd = (a, b) => {
  if (!b) return a;
  return getGcd(b, a % b);
};

const evenInit = () => {
  const random = randomNumber(1, 51);
  return constructor(random, (random % 2) === 0 ? 'yes' : 'no');
};

const calcInit = () => {
  const task = `${randomNumber(1, 51)} ${randomOperator()} ${randomNumber(1, 51)}`;
  return constructor(task, eval(task));
};

const gcdInit = () => {
  const a = randomNumber(1, 51);
  const b = randomNumber(1, 51);
  return constructor(`${a} ${b}`, getGcd(Number(a), Number(b)));
};

const progressionInit = () => {
  const progressNumber = randomNumber(1, 11);
  const delNumber = randomNumber(1, 11);
  let start = randomNumber(1, 51);
  let result = String(start);

  for (let i = 1; i <= 10; i += 1) {
    start += progressNumber;
    result += i === delNumber ? ' ..' : ` ${start}`;
  }

  return constructor(result, delNumber);
};

const getTask = (gameName) => {
  if (gameName === 'brain-even') return evenInit();
  if (gameName === 'brain-calc') return calcInit();
  if (gameName === 'brain-gcd') return gcdInit();
  if (gameName === 'brain-progression') return progressionInit();

  return null;
};

export default getTask;
