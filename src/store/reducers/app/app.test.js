import reducer from '@/store/reducers/app/app';

const initialState = {
  loading: false
};

describe(`App reducer tests`, () => {
  test(`Should return initialState`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  test(`Should change loading (with action - FETCH_DATA_REQUEST)`, () => {
    expect(
        reducer(initialState, {type: `FETCH_DATA_REQUEST`, payload: null})
    ).toEqual(
        Object.assign({}, initialState, {loading: true})
    );
  });

  test(`Should change loading (with action - FETCH_DATA_SUCCESS)`, () => {
    expect(
        reducer(initialState, {type: `FETCH_DATA_SUCCESS`, payload: null})
    ).toEqual(
        Object.assign({}, initialState, {loading: false})
    );
  });
});
