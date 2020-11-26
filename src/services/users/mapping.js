export const userFromServer = user => ({
  id: user.ID,
  firstName: user.first_name,
  lastName: user.last_name,
});

export const userToServer = user => ({
  ID: user.id,
  first_name: user.firstName,
  last_name: user.lastName,
});
