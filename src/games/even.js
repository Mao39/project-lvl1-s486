import randomNumber from '../random';
import constructor from '../constructor';

const getEvenTask = () => {
  const random = randomNumber(1, 51);
  return constructor(random, (random % 2) === 0 ? 'yes' : 'no');
};

export default getEvenTask;
