import { combineReducers } from 'redux';
import AuthLogin from './login-authentication';
import users from './users';

const rootReducers = combineReducers({
  AuthLogin,
  users,
});

export default rootReducers;
