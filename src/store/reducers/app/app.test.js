import reducer from '@/store/reducers/app/app';

const initialState = {
  loading: false,
  error: false
};

describe(`App Reducer tests`, () => {
  test(`Should change loading (with action - FETCH_DATA_REQUEST)`, () => {
    expect(
        reducer(initialState, {type: `FETCH_DATA_REQUEST`, payload: null})
    ).toEqual(
        Object.assign({}, initialState, {loading: true, error: false})
    );
  });

  test(`Should change loading (with action - FETCH_DATA_SUCCESS)`, () => {
    expect(
        reducer(initialState, {type: `FETCH_DATA_SUCCESS`, payload: null})
    ).toEqual(
        Object.assign({}, initialState, {loading: false, error: false})
    );
  });
});
