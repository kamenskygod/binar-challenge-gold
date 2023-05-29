const initialState = {
  status: "not_LoggedIn",
  count: 0,
};

const AuthLogin = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER":
      return {
        ...state,
        count: action.payload + 1,
      };
    case "LOGGED_IN":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthLogin;
