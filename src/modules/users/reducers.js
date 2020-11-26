import { FETCH_BEGIN, FETCH_DONE, UPDATE_BEGIN, UPDATE_DONE } from './actionTypes';

const initialState = {
  list: [],
  loading: false,
};

const usersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_BEGIN:
      return { ...state, loading: true };
    case FETCH_DONE:
      return { ...state, list: action.payload, loading: false };
    case UPDATE_BEGIN:
      return { ...state, loading: true };
    case UPDATE_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default usersReducer;
