const initialState = {
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default users;
