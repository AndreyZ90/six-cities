import {combineReducers} from 'redux';

import app from '@/store/reducers/app/app';
import data from '@/store/reducers/data/data';
import user from '@/store/reducers/user/user';

export default combineReducers({
  app,
  data,
  user
});
