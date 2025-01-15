import axios from "axios";

// Action Types
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_COMPLETE_TASK = "TOGGLE_COMPLETE_TASK";
export const LOAD_TASKS_FROM_STORAGE = "LOAD_TASKS_FROM_STORAGE";
export const SET_TASK_ERROR = "SET_TASK_ERROR";

// Add Task
export const addTask = (taskText, priority) => async (dispatch, getState) => {
  let weather = null;

  if (
    taskText.toLowerCase().includes("outdoor") ||
    taskText.toLowerCase().includes("outside")
  ) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=India&appid=e0e1e78b59e68138f04a1ca001d4ace0`
      );
      weather = response.data.weather[0].main;

      const task = {
        text: taskText,
        weather: weather,
        priority: priority,
        completed: false,
        error: null,
      };

      dispatch({ type: ADD_TASK, payload: task });
      saveToLocalStorage(getState());
    } catch {
      const task = {
        text: taskText,
        weather: null,
        priority: priority,
        completed: false,
        error: "Failed to Fetch Weather Data.",
      };

      dispatch({ type: ADD_TASK, payload: task });
      saveToLocalStorage(getState());
    }
  } else {
    const task = {
      text: taskText,
      weather: null,
      priority: priority,
      completed: false,
      error: "Failed to Add Task.",
    };

    dispatch({ type: ADD_TASK, payload: task });
    saveToLocalStorage(getState());
  }
};

// Delete Task
export const deleteTask = (taskId) => (dispatch, getState) => {
  dispatch({ type: DELETE_TASK, payload: taskId });
  saveToLocalStorage(getState());
};

// Toggle Complete
export const toggleCompleteTask = (taskId) => (dispatch, getState) => {
  dispatch({ type: TOGGLE_COMPLETE_TASK, payload: taskId });
  saveToLocalStorage(getState());
};

// Load Tasks from Local Storage
export const loadTasksFromStorage = () => (dispatch) => {
  const savedData = JSON.parse(localStorage.getItem("tasks")) || {};
  const tasks = savedData.tasks?.tasks || [];
  dispatch({ type: LOAD_TASKS_FROM_STORAGE, payload: tasks });
};

// Helper: Save to Local Storage
const saveToLocalStorage = (state) => {
  const { tasks } = state;
  localStorage.setItem("tasks", JSON.stringify({ tasks }));
};
