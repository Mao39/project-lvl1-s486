import constructor from '../constructor';
import randomNumber, { randomOperator } from '../random';

const getCalcTask = () => {
  const task = `${randomNumber(1, 51)} ${randomOperator()} ${randomNumber(1, 51)}`;
  return constructor(task, eval(task));
};

export default getCalcTask;
