import type from './../actions/types';
import initialState from './initialState';

const user = (state = initialState.user, action) => {
  switch(action.type) { 
    case type.REGISTER_USER:  
      return Object.assign({}, state, {
        justRegistered: true
      });

    case type.LOGIN_USER: 
      return Object.assign({}, state, {
        username: action.user.username,
        email: action.user.email,
        token: action.token,
        justRegistered: false
      });

    case type.LOGOUT_USER:
      return Object.assign({}, state, {
        username: action.user.username,
        email: action.user.email,
        token: action.token,
        justRegistered: false
      });

    default:
      return state;
  }
};

export default user;