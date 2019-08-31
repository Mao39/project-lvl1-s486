import randomNumber from '../random';

const getGcd = (a, b) => {
  if (!b) return a;
  return getGcd(b, a % b);
};

const getGcdTask = () => {
  const a = randomNumber(1, 51);
  const b = randomNumber(1, 51);
  return constructor(`${a} ${b}`, getGcd(Number(a), Number(b)));
};

export default getGcdTask;
