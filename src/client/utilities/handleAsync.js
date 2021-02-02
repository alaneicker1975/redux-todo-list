import store from '../store';
import actions from '../actions/action-creators';

const handleAsync = (promise) =>
  promise
    .then((res) => res.json())
    .then(({ err, ...data }) => {
      if (err) throw new Error(err);
      return data;
    })
    .catch((err) =>
      store.dispatch(actions.setMessage({ type: 'error', text: err.message })),
    );

export default handleAsync;
