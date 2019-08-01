import { DEFAULT_ACTION } from '../actions/action-types';

const initialState = {
  message: {
    show: false,
    message: '',
  },
};

const defaultReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return { ...state, message: { show: !state.message.show, message: 'Hello, world!' } };
    default:
      return state;
  }
};

export default defaultReducer;
