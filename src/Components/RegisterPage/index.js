import axios from 'axios';

export const REGISTER_START = 'LOGIN_START';
export const REGISTER_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_FAILURE = 'LOGIN_FAILURE';

export const RegisterPage= newSignup => dispatch => {
  dispatch({ type: REGISTER_START });
  axios
    .post('https://wunderlist2.herokuapp.com//api/auth/register')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};