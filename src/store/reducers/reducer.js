import {combineReducers} from 'redux';

import appReducer from '@/store/reducers/app/app';
import dataReducer from '@/store/reducers/data/data';

export default combineReducers({
  app: appReducer,
  data: dataReducer
});
