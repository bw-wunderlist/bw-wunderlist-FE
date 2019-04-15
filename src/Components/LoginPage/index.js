import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credential => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post('http://localhost:3000')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};