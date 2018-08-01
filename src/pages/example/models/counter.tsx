import key from 'keymaster';

import delay from "../../../utils/delay";


export default {

  namespace: 'counter',

  state: {
    current: 0,     /* current count */
    record: 0,      /* highest count */
  },

  reducers: {
    add (state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus (state) {
      const newCurrent = state.current - 1;
      return {
        ...state,
        current: newCurrent,
      };
    },
  },

  effects: {
    *addRemote ({ payload }, { call, put }) {
      console.log(payload);
      yield put({ type: 'add' });
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },

  subscriptions: {
    keyboardWather ({dispatch}) {
      key('ctrl+up', () => { dispatch({ type: 'addRemote' }) });
    },
  },

};

