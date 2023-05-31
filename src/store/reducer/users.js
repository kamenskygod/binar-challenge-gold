const initialState = {
  users: [],
  message: '',
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'USER_SUCCESS_CREATED':
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return {
        ...state,
      };
  }
};

export default users;
