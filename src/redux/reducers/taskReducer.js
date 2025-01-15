import {
  ADD_TASK,
  DELETE_TASK,
  LOAD_TASKS_FROM_STORAGE,
  TOGGLE_COMPLETE_TASK,
} from "../actions/taskAction";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(action.type);
      return { tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case TOGGLE_COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case LOAD_TASKS_FROM_STORAGE:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
