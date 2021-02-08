import ActionType from '@/store/actions/const';

import {AuthStatus} from '@/helpers/const';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  email: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LOGIN_SUCCESS:
      return Object.assign({}, state,
          {authStatus: action.payload.authStatus, email: action.payload.email}
      );
    case ActionType.FETCH_LOGIN_FAILURE:
      return Object.assign({}, state,
          {authStatus: action.payload.authStatus, email: action.payload.email}
      );
  }

  return state;
};

export default reducer;
