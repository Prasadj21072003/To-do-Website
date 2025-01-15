import { LOGIN_USER, LOGOUT_USER } from "../actions/userAction";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
