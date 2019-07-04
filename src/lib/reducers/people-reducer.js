export default (state = [], { type, payload }) => {
  switch (type) {
    case 'PEOPLE':
      return payload;
    default:
      return state;
  }
};
