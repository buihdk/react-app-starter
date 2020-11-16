import userApi from 'services/users';

import * as actionTypes from './actionTypes';

export const fetchUsers = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_BEGIN });

  const res = await userApi.fetch();
  dispatch({ type: actionTypes.FETCH_DONE, payload: res.data });

  return res;
};

export const updateUser = user => async dispatch => {
  dispatch({ type: actionTypes.UPDATE_BEGIN });

  const res = await userApi.update(user);
  dispatch({ type: actionTypes.UPDATE_DONE, payload: res.data });

  return res;
};
