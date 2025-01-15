import React, { memo, useState } from "react";
import "./Login.css";
import { loginUser } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";

const Login = memo(() => {
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const login = (e) => {
    e.preventDefault();
    if (
      user?.username === import.meta.env.VITE_USERNAME &&
      user?.password === import.meta.env.VITE_PASSWORD
    ) {
      dispatch(loginUser(user));
    }
  };
  return (
    <div className="form">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Login</h2>
          <form onSubmit={login}>
            <input
              required
              type="text"
              placeholder="Username"
              className="login-input"
              onChange={(e) => {
                setuser({ ...user, username: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="login-input"
              onChange={(e) => {
                setuser({ ...user, password: e.target.value });
              }}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Login;
