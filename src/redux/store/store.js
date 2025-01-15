import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { taskReducer } from "../reducers/taskReducer";
import { userReducer } from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
