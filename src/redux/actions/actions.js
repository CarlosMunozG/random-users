export const createInitialUsers = initialUsers => ({
  type: 'CREATE_INITIAL_USERS',
  payload: initialUsers,
});

export const addRandomUser = addUser => ({
  type: 'ADD_RANDOM_USERS',
  payload: addUser,
});

export const sortUsersByName = sortUsers => ({
  type: 'SORT_BY_NAME',
  payload: sortUsers,
});

export const UpdateUsersAfterDelete = deleteUser => ({
  type: 'UPDATE_USERS_AFTER_DELETE',
  payload: deleteUser,
});

export const showInfoFromContact = showInfo => ({
  type: 'SHOW_INFO_FROM_CONTACT',
  payload: showInfo,
});