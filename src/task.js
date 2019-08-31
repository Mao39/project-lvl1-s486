import getEvenTask from './games/even';
import getCalcTask from './games/calc';
import getGcdTask from './games/gcd';
import getProgressionTask from './games/progression';
import getPrimeTask from './games/prime';

const getTask = (gameName) => {
  if (gameName === 'brain-even') return getEvenTask();
  if (gameName === 'brain-calc') return getCalcTask();
  if (gameName === 'brain-gcd') return getGcdTask();
  if (gameName === 'brain-progression') return getProgressionTask();
  if (gameName === 'brain-prime') return getPrimeTask();

  return null;
};

export default getTask;
