import {
  DECREMENT,
  INCREMENT
} from '../actions/Action';

const initialState = {
  count: 0
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        ...{ count: ++state.count }
      };
    case DECREMENT:
      return {
        ...state,
        ...{ count: --state.count }
      }
    default:
      return state;
  }
};

export default mainReducer;
