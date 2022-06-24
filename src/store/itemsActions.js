import axios from 'axios';

export const FETCH = 'FETCH';

export const fetchItems = () => (dispatch) => {
  return axios
    .get('localhost:5000/GetItems')
    .then(({ data }) => {
      dispatch({ type: FETCH, payload: { data } });
    })
    .catch(err => console.log(err));
};
