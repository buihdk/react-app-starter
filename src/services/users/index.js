import baseService from 'services/baseService';

import { userFromServer, userToServer } from './mapping';

export default {
  fetch: async () => {
    const fetchUsersPath = '/users';
    const config = {};
    const res = await baseService.get(fetchUsersPath, config);

    return res.data ? { ...res, data: res.data.map(userFromServer) || [] } : res;
  },

  update: async user => {
    const updateUserPath = `/users/${user.id}`;
    const serverUser = { ...userToServer(user) };
    const res = await baseService.put(updateUserPath, serverUser);

    return res;
  },
};
