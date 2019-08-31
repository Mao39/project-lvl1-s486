import randomNumber from '../random';
import constructor from '../constructor';

const isPrime = (number) => {
  const iter = (num, acc) => {
    if (acc >= num - 1) return true;
    if (num % acc === 0) return false;

    return iter(num, acc + 1);
  };

  return iter(number, 2);
};


const getPrimeTask = () => {
  const num = randomNumber(1, 51);
  return constructor(num, isPrime(num) ? 'yes' : 'no');
};

export default getPrimeTask;
