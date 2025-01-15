// Action Types
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// Login User
export const loginUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN_USER, payload: user });
  localStorage.setItem("user", JSON.stringify(user));
};

// Logout User
export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  localStorage.removeItem("user");
};
