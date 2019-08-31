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

export default constructor;
