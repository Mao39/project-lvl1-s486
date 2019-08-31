import randomNumber from '../random';
import constructor from '../constructor';

const getProgressionTask = () => {
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

export default getProgressionTask;
