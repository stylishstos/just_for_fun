export default type => (data = null) => ({
  type: type.pending,
  payload: data
});
