import store from '../store';
import { setMessage } from '../actions';

const handleAsync = (promise) => {
  return promise
    .then((res) => res)
    .then((res) => res.json())
    .then(({ err, ...data }) => {
      if (err) throw new Error(err);
      return data;
    })
    .catch((err) => store.dispatch(setMessage(err.message)));
};

export default handleAsync;
