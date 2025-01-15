import React, { memo, useState } from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import RepeatIcon from "@mui/icons-material/Repeat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import "./TaskInput.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/taskAction";

const TaskInput = memo(() => {
  const dispatch = useDispatch();
  const [task, settask] = useState("");
  const [priority, setpriority] = useState("high");

  return (
    <div>
      <span>
        To Do <ArrowDropDownOutlinedIcon />
      </span>
      <div className="task-input-div">
        <input
          type="text"
          className="task-input"
          placeholder="ADD A TASK"
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <div className="task-input-bar">
          <div className="task-input-icons">
            <NotificationsNoneOutlinedIcon className="icons" />
            <RepeatIcon className="icons" />
            <CalendarTodayIcon fontSize="small" className="icons" />
          </div>

          {/*dropdown*/}
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {priority.toUpperCase()}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  selected
                  value="high"
                  onClick={() => {
                    setpriority("high");
                  }}
                >
                  High
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  value="medium"
                  onClick={() => {
                    setpriority("medium");
                  }}
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  value="low"
                  onClick={() => {
                    setpriority("low");
                  }}
                >
                  Low
                </a>
              </li>
            </ul>
          </div>

          {/* Add Task Button */}
          <button
            onClick={() => {
              task === "" ? "" : dispatch(addTask(task, priority));
            }}
          >
            ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
});

export default TaskInput;
