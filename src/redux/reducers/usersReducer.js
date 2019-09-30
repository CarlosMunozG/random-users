const initState = {
  users: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_RANDOM_USERS':
      return { ...state, users: [...state.users, action.payload] };

    case 'UPDATE_USERS_AFTER_DELETE':
      return { ...state, users: action.payload };

    case 'SORT_BY_NAME':
      return { ...state, users: action.payload };

    case 'CREATE_INITIAL_USERS':
      return { ...state, users: action.payload };
    
    case 'SHOW_INFO_FROM_CONTACT':
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default usersReducer;