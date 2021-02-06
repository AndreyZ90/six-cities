import ActionType from '@/store/actions/const';

const initialState = {
  loading: false,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_DATA_REQUEST:
      return Object.assign({}, state, {loading: true});
    case ActionType.FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {loading: false});
  }

  return state;
};

export default reducer;
