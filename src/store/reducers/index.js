import { combineReducers } from 'redux';
import AuthLogin from './login-aunthetication';
import users from './user';

const rootReducers = combineReducers({
  AuthLogin,
  users,
});

export default rootReducers;
