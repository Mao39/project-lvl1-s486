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

const isPrime = (number) => {
  const iter = (num, acc) => {
    if (acc >= num - 1) return true;
    if (num % acc === 0) return false;

    return iter(num, acc + 1);
  };

  return iter(number, 2);
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
  const start = randomNumber(1, 51);
  let acc = start;
  let result = String(start);

  for (let i = 1; i <= 10; i += 1) {
    acc += progressNumber;
    result += i === delNumber ? ' ..' : ` ${acc}`;
  }

  return constructor(result, start + delNumber * progressNumber);
};

const primeInit = () => {
  const num = randomNumber(1, 51);
  return constructor(num, isPrime(num) ? 'yes' : 'no');
};

const getTask = (gameName) => {
  if (gameName === 'brain-even') return evenInit();
  if (gameName === 'brain-calc') return calcInit();
  if (gameName === 'brain-gcd') return gcdInit();
  if (gameName === 'brain-progression') return progressionInit();
  if (gameName === 'brain-prime') return primeInit();

  return null;
};

export default getTask;
