import type from 'actions/types';
import api from 'api';

//action creators
export function registerUser(user) {
  return (dispatch) => {
    return api.registerUser(user).then((user) => {
      dispatch(registerUserSuccess(user));
    }).catch((error) => {
      throw(error);
    });
  };
}

export function loginUser(credentials) {
  return (dispatch) => {
    return api.loginUser(credentials).then((response) => {
      sessionStorage.setItem('user', JSON.stringify({
        username: response.body.user.username,
        email: response.body.user.email,
        token: response.body.token
      })); 
      dispatch(loginUserSuccess(response.body.user, response.body.token));
    });
  };
}

export function logoutUser() {
  return (dispatch) => {
    sessionStorage.removeItem('user'); 
    dispatch(logoutUserSuccess());
  }
}

//actions
export function registerUserSuccess (user, token) {
  debugger;
  return {
    type: type.REGISTER_USER, 
    user, 
    token
  };
}

export function loginUserSuccess(user, token) {
  return {
    type: type.LOGIN_USER, 
    user, 
    token
  };
}

export function logoutUserSuccess() {
  return {
    type: type.LOGOUT_USER
  };
}