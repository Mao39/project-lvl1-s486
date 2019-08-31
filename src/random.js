const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomOperator = () => '*-+'[randomNumber(0, 3)];

export { randomOperator };
export default randomNumber;
