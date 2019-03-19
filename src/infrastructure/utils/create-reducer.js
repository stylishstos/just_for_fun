export default (type, defState) => (state = defState, action) => {
  return Object.values(type).includes(action.type)
    ? Object.assign({}, state, action.payload)
    : state;
};
