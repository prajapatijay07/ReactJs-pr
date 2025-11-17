const initialState = {
  user: null,
  errMSG: null,
  isSignUP: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        isSignUP: true,
        errMSG: null,
      };

    case "SIGN_IN":
      return {
        ...state,
        isSignUP: false,
        errMSG: null,
        user: action.payload,
      };

    case "SIGN_OUT":
      return {
        ...state,
        isSignUP: false,
        errMSG: null,
        user: null,
      };

    case "ERROR":
      return {
        ...state,
        errMSG: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
