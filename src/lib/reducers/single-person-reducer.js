export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'PERSON':
      return payload;
    default:
      return state;
  }
};
