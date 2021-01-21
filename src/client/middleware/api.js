const api = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action);
};

export default api;
