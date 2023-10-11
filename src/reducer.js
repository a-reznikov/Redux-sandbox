const reducer = (state = 15, action) => {
  switch (action.type) {
    case 'INC':
      return ++state;
    case 'DEC':
      return --state;
    case 'RND':
      return state + action.payload;
    default:
      return state;
  }
};

export default reducer;;